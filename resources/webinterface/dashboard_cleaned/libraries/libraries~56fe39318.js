var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [352],
  {
    chunkid: function (_, _) {
      var _ =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (_, _, _) {
                _ != Array.prototype &&
                  _ != Object.prototype &&
                  (_[_] = _.value);
              },
        _ =
          "undefined" != typeof window && window === this
            ? this
            : "undefined" != typeof global && null != global
              ? global
              : this;
      function _() {
        (_ = function () {}), _.Symbol || (_.Symbol = _);
      }
      function _(_, _) {
        (this._ = _),
          _(this, "description", {
            configurable: !0,
            writable: !0,
            value: _,
          });
      }
      _.prototype.toString = function () {
        return this._;
      };
      var _,
        _ =
          ((_ = 0),
          function _(_) {
            if (this instanceof _)
              throw new TypeError("Symbol is not a constructor");
            return new _("jscomp_symbol_" + (_ || "") + "_" + _++, _);
          });
      function _() {
        _();
        var _ = _.Symbol.iterator;
        _ || (_ = _.Symbol.iterator = _.Symbol("Symbol.iterator")),
          "function" != typeof Array.prototype[_] &&
            _(Array.prototype, _, {
              configurable: !0,
              writable: !0,
              value: function () {
                return (function (_) {
                  return (
                    _(),
                    (_ = {
                      next: _,
                    }),
                    (_[_.Symbol.iterator] = function () {
                      return this;
                    }),
                    _
                  );
                })(
                  (function (_) {
                    var _ = 0;
                    return function () {
                      return _ < _.length
                        ? {
                            done: !1,
                            value: _[_++],
                          }
                        : {
                            done: !0,
                          };
                    };
                  })(this),
                );
              },
            }),
          (_ = function () {});
      }
      !(function (_, _) {
        if (_) {
          var _ = _;
          _ = _.split(".");
          for (var _ = 0; _ < _.length - 1; _++) {
            var _ = _[_];
            _ in _ || (_[_] = {}), (_ = _[_]);
          }
          (_ = _((_ = _[(_ = _[_.length - 1])]))) != _ &&
            null != _ &&
            _(_, _, {
              configurable: !0,
              writable: !0,
              value: _,
            });
        }
      })("Array.prototype.entries", function (_) {
        return (
          _ ||
          function () {
            return (function (_, _) {
              _(), _ instanceof String && (_ += "");
              var _ = 0,
                _ = {
                  next: function () {
                    if (_ < _.length) {
                      var _ = _++;
                      return {
                        value: _(_, _[_]),
                        done: !1,
                      };
                    }
                    return (
                      (_.next = function () {
                        return {
                          done: !0,
                          value: void 0,
                        };
                      }),
                      _.next()
                    );
                  },
                };
              return (
                (_[Symbol.iterator] = function () {
                  return _;
                }),
                _
              );
            })(this, function (_, _) {
              return [_, _];
            });
          }
        );
      });
      var _ = this || self;
      function _(_, _, _) {
        (_ = _.split(".")),
          (_ = _ || _),
          _[0] in _ || void 0 === _.execScript || _.execScript("var " + _[0]);
        for (var _; _.length && (_ = _.shift()); )
          _.length || void 0 === _
            ? (_ = _[_] && _[_] !== Object.prototype[_] ? _[_] : (_[_] = {}))
            : (_[_] = _);
      }
      function _(_) {
        var _ = typeof _;
        if ("object" == _) {
          if (!_) return "null";
          if (_ instanceof Array) return "array";
          if (_ instanceof Object) return _;
          var _ = Object.prototype.toString.call(_);
          if ("[object Window]" == _) return "object";
          if (
            "[object Array]" == _ ||
            ("number" == typeof _.length &&
              void 0 !== _.splice &&
              void 0 !== _.propertyIsEnumerable &&
              !_.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == _ ||
            (void 0 !== _.call &&
              void 0 !== _.propertyIsEnumerable &&
              !_.propertyIsEnumerable("call"))
          )
            return "function";
        } else if ("function" == _ && void 0 === _.call) return "object";
        return _;
      }
      function _(_) {
        var _ = typeof _;
        return ("object" == _ && null != _) || "function" == _;
      }
      var _ =
        "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " ",
        );
      var _ = Array.prototype.forEach
          ? function (_, _) {
              Array.prototype.forEach.call(_, _, void 0);
            }
          : function (_, _) {
              for (
                var _ = _.length,
                  _ = "string" == typeof _ ? _.split("") : _,
                  _ = 0;
                _ < _;
                _++
              )
                _ in _ && _.call(void 0, _[_], _, _);
            },
        _ = Array.prototype.map
          ? function (_, _) {
              return Array.prototype.map.call(_, _, void 0);
            }
          : function (_, _) {
              for (
                var _ = _.length,
                  _ = Array(_),
                  _ = "string" == typeof _ ? _.split("") : _,
                  _ = 0;
                _ < _;
                _++
              )
                _ in _ && (_[_] = _.call(void 0, _[_], _, _));
              return _;
            };
      function _(_, _, _) {
        return 2 >= arguments.length
          ? Array.prototype.slice.call(_, _)
          : Array.prototype.slice.call(_, _, _);
      }
      function _(_, _, _, _) {
        var _ = "Assertion failed";
        if (_) {
          _ += ": " + _;
          var _ = _;
        } else _ && ((_ += ": " + _), (_ = _));
        throw Error(_, _ || []);
      }
      function _(_, _, _) {
        for (var _ = [], _ = 2; _ < arguments.length; ++_)
          _[_ - 2] = arguments[_];
        return _ || _("", null, _, _), _;
      }
      function _(_, _) {
        for (var _ = [], _ = 1; _ < arguments.length; ++_)
          _[_ - 1] = arguments[_];
        throw Error("Failure" + (_ ? ": " + _ : ""), _);
      }
      function _(_, _, _, _) {
        for (var _ = [], _ = 3; _ < arguments.length; ++_)
          _[_ - 3] = arguments[_];
        _ instanceof _ ||
          _("Expected instanceof %s but got %s.", [_(_), _(_)], _, _);
      }
      function _(_) {
        return _ instanceof Function
          ? _.displayName || _.name || "unknown type name"
          : _ instanceof Object
            ? _.constructor.displayName ||
              _.constructor.name ||
              Object.prototype.toString.call(_)
            : null === _
              ? "null"
              : typeof _;
      }
      function _(_, _) {
        if (
          ((this._ = _),
          (this._ = _),
          (this._ = {}),
          (this.arrClean = !0),
          0 < this._.length)
        ) {
          for (_ = 0; _ < this._.length; _++) {
            var _ = (_ = this._[_])[0];
            this._[_.toString()] = new _(_, _[1]);
          }
          this.arrClean = !0;
        }
      }
      function _(_) {
        (this._ = 0), (this._ = _);
      }
      function _(_, _) {
        return _._ ? (_._ || (_._ = new _._(_.value)), _._) : _.value;
      }
      function _(_) {
        _ = _._;
        var _,
          _ = [];
        for (_ in _) Object.prototype.hasOwnProperty.call(_, _) && _.push(_);
        return _;
      }
      function _(_, _) {
        (this.key = _), (this.value = _), (this._ = void 0);
      }
      function _(_) {
        if (8192 >= _.length) return String.fromCharCode.apply(null, _);
        for (var _ = "", _ = 0; _ < _.length; _ += 8192)
          _ += String.fromCharCode.apply(null, _(_, _, _ + 8192));
        return _;
      }
      _("jspb.Map", _, void 0),
        (_.prototype._ = function () {
          if (this.arrClean) {
            if (this._) {
              var _,
                _ = this._;
              for (_ in _)
                if (Object.prototype.hasOwnProperty.call(_, _)) {
                  var _ = _[_]._;
                  _ && _._();
                }
            }
          } else {
            for (
              this._.length = 0, (_ = _(this)).sort(), _ = 0;
              _ < _.length;
              _++
            ) {
              var _ = this._[_[_]];
              (_ = _._) && _._(), this._.push([_.key, _.value]);
            }
            this.arrClean = !0;
          }
          return this._;
        }),
        (_.prototype.toArray = _.prototype._),
        (_.prototype._ = function (_, _) {
          for (var _ = this._(), _ = [], _ = 0; _ < _.length; _++) {
            var _ = this._[_[_][0].toString()];
            _(this, _);
            var _ = _._;
            _ ? (_(_), _.push([_.key, _(_, _)])) : _.push([_.key, _.value]);
          }
          return _;
        }),
        (_.prototype.toObject = _.prototype._),
        (_.fromObject = function (_, _, _) {
          _ = new _([], _);
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_][0],
              _ = _(_[_][1]);
            _.set(_, _);
          }
          return _;
        }),
        (_.prototype.next = function () {
          return this._ < this._.length
            ? {
                done: !1,
                value: this._[this._++],
              }
            : {
                done: !0,
                value: void 0,
              };
        }),
        "undefined" != typeof Symbol &&
          (_.prototype[Symbol.iterator] = function () {
            return this;
          }),
        (_.prototype._ = function () {
          return _(this).length;
        }),
        (_.prototype.getLength = _.prototype._),
        (_.prototype.clear = function () {
          (this._ = {}), (this.arrClean = !1);
        }),
        (_.prototype.clear = _.prototype.clear),
        (_.prototype._ = function (_) {
          _ = _.toString();
          var _ = this._.hasOwnProperty(_);
          return delete this._[_], (this.arrClean = !1), _;
        }),
        (_.prototype.del = _.prototype._),
        (_.prototype._ = function () {
          var _ = [],
            _ = _(this);
          _.sort();
          for (var _ = 0; _ < _.length; _++) {
            var _ = this._[_[_]];
            _.push([_.key, _.value]);
          }
          return _;
        }),
        (_.prototype.getEntryList = _.prototype._),
        (_.prototype.entries = function () {
          var _ = [],
            _ = _(this);
          _.sort();
          for (var _ = 0; _ < _.length; _++) {
            var _ = this._[_[_]];
            _.push([_.key, _(this, _)]);
          }
          return new _(_);
        }),
        (_.prototype.entries = _.prototype.entries),
        (_.prototype.keys = function () {
          var _ = [],
            _ = _(this);
          _.sort();
          for (var _ = 0; _ < _.length; _++) _.push(this._[_[_]].key);
          return new _(_);
        }),
        (_.prototype.keys = _.prototype.keys),
        (_.prototype.values = function () {
          var _ = [],
            _ = _(this);
          _.sort();
          for (var _ = 0; _ < _.length; _++) _.push(_(this, this._[_[_]]));
          return new _(_);
        }),
        (_.prototype.values = _.prototype.values),
        (_.prototype.forEach = function (_, _) {
          var _ = _(this);
          _.sort();
          for (var _ = 0; _ < _.length; _++) {
            var _ = this._[_[_]];
            _.call(_, _(this, _), _.key, this);
          }
        }),
        (_.prototype.forEach = _.prototype.forEach),
        (_.prototype.set = function (_, _) {
          var _ = new _(_);
          return (
            this._ ? ((_._ = _), (_.value = _._())) : (_.value = _),
            (this._[_.toString()] = _),
            (this.arrClean = !1),
            this
          );
        }),
        (_.prototype.set = _.prototype.set),
        (_.prototype.get = function (_) {
          if ((_ = this._[_.toString()])) return _(this, _);
        }),
        (_.prototype.get = _.prototype.get),
        (_.prototype.has = function (_) {
          return _.toString() in this._;
        }),
        (_.prototype.has = _.prototype.has),
        (_.prototype._ = function (_, _, _, _, _) {
          var _ = _(this);
          _.sort();
          for (var _ = 0; _ < _.length; _++) {
            var _ = this._[_[_]];
            _._(_),
              _.call(_, 1, _.key),
              this._ ? _.call(_, 2, _(this, _), _) : _.call(_, 2, _.value),
              _._();
          }
        }),
        (_.prototype.serializeBinary = _.prototype._),
        (_.deserializeBinary = function (_, _, _, _, _, _, _) {
          for (; _._() && !_._(); ) {
            var _ = _._;
            1 == _
              ? (_ = _.call(_))
              : 2 == _ &&
                (_._
                  ? (_(_), _ || (_ = new _._()), _.call(_, _, _))
                  : (_ = _.call(_)));
          }
          _(null != _), _(null != _), _.set(_, _);
        });
      var _ = {
          "\0": "\\0",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\x0B",
          '"': '\\"',
          "\\": "\\\\",
          "<": "\\u003C",
        },
        _ = {
          "'": "\\'",
        },
        _ = {},
        _ = null;
      function _(_, _) {
        void 0 === _ && (_ = 0), _(), (_ = _[_]);
        for (var _ = [], _ = 0; _ < _.length; _ += 3) {
          var _ = _[_],
            _ = _ + 1 < _.length,
            _ = _ ? _[_ + 1] : 0,
            _ = _ + 2 < _.length,
            _ = _ ? _[_ + 2] : 0,
            _ = _ >> 2;
          (_ = ((3 & _) << 4) | (_ >> 4)),
            (_ = ((15 & _) << 2) | (_ >> 6)),
            (_ &= 63),
            _ || ((_ = 64), _ || (_ = 64)),
            _.push(_[_], _[_], _[_] || "", _[_] || "");
        }
        return _.join("");
      }
      function _(_) {
        var _ = _.length,
          _ = (3 * _) / 4;
        _ % 3
          ? (_ = Math.floor(_))
          : -1 != "=.".indexOf(_[_ - 1]) &&
            (_ = -1 != "=.".indexOf(_[_ - 2]) ? _ - 2 : _ - 1);
        var _ = new Uint8Array(_),
          _ = 0;
        return (
          (function (_, _) {
            function _(_) {
              for (; _ < _.length; ) {
                var _ = _.charAt(_++),
                  _ = _[_];
                if (null != _) return _;
                if (!/^[\s\xa0]*$/.test(_))
                  throw Error("Unknown base64 encoding at char: " + _);
              }
              return _;
            }
            _();
            for (var _ = 0; ; ) {
              var _ = _(-1),
                _ = _(0),
                _ = _(64),
                _ = _(64);
              if (64 === _ && -1 === _) break;
              _((_ << 2) | (_ >> 4)),
                64 != _ &&
                  (_(((_ << 4) & 240) | (_ >> 2)),
                  64 != _ && _(((_ << 6) & 192) | _));
            }
          })(_, function (_) {
            _[_++] = _;
          }),
          _.subarray(0, _)
        );
      }
      function _() {
        if (!_) {
          _ = {};
          for (
            var _ =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                  "",
                ),
              _ = ["+/=", "+/", "-_=", "-_.", "-_"],
              _ = 0;
            5 > _;
            _++
          ) {
            var _ = _.concat(_[_].split(""));
            _[_] = _;
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              void 0 === _[_] && (_[_] = _);
            }
          }
        }
      }
      _("jspb.ConstBinaryMessage", function () {}, void 0),
        _("jspb.BinaryMessage", function () {}, void 0),
        _(
          "jspb.BinaryConstants.FieldType",
          {
            _: -1,
            _: 1,
            FLOAT: 2,
            _: 3,
            _: 4,
            _: 5,
            _: 6,
            _: 7,
            BOOL: 8,
            _: 9,
            _: 10,
            _: 11,
            _: 12,
            _: 13,
            _: 14,
            _: 15,
            _: 16,
            _: 17,
            _: 18,
            _: 30,
            _: 31,
          },
          void 0,
        ),
        _(
          "jspb.BinaryConstants.WireType",
          {
            _: -1,
            _: 0,
            _: 1,
            _: 2,
            _: 3,
            _: 4,
            _: 5,
          },
          void 0,
        ),
        _(
          "jspb.BinaryConstants.FieldTypeToWireType",
          function (_) {
            switch (_) {
              case 5:
              case 3:
              case 13:
              case 4:
              case 17:
              case 18:
              case 8:
              case 14:
              case 31:
                return 0;
              case 1:
              case 6:
              case 16:
              case 30:
                return 1;
              case 9:
              case 11:
              case 12:
                return 2;
              case 2:
              case 7:
              case 15:
                return 5;
              default:
                return -1;
            }
          },
          void 0,
        ),
        _("jspb.BinaryConstants.INVALID_FIELD_NUMBER", -1, void 0),
        _("jspb.BinaryConstants.FLOAT32_EPS", 1401298464324817e-60, void 0),
        _("jspb.BinaryConstants.FLOAT32_MIN", 11754943508222875e-54, void 0),
        _("jspb.BinaryConstants.FLOAT32_MAX", 34028234663852886e22, void 0),
        _("jspb.BinaryConstants.FLOAT64_EPS", 5e-324, void 0),
        _("jspb.BinaryConstants.FLOAT64_MIN", 22250738585072014e-324, void 0),
        _("jspb.BinaryConstants.FLOAT64_MAX", 17976931348623157e292, void 0),
        _("jspb.BinaryConstants.TWO_TO_20", 1048576, void 0),
        _("jspb.BinaryConstants.TWO_TO_23", 8388608, void 0),
        _("jspb.BinaryConstants.TWO_TO_31", 2147483648, void 0),
        _("jspb.BinaryConstants.TWO_TO_32", 4294967296, void 0),
        _("jspb.BinaryConstants.TWO_TO_52", 4503599627370496, void 0),
        _("jspb.BinaryConstants.TWO_TO_63", 0x8000000000000000, void 0),
        _("jspb.BinaryConstants.TWO_TO_64", 0x10000000000000000, void 0),
        _("jspb.BinaryConstants.ZERO_HASH", "\0\0\0\0\0\0\0\0", void 0);
      var _ = 0,
        _ = 0;
      function _(_) {
        var _ = _ >>> 0;
        (_ = Math.floor((_ - _) / 4294967296) >>> 0), (_ = _), (_ = _);
      }
      function _(_) {
        var _ = 0 > _,
          _ = (_ = Math.abs(_)) >>> 0;
        (_ = Math.floor((_ - _) / 4294967296)),
          (_ >>>= 0),
          _ &&
            ((_ = ~_ >>> 0),
            4294967295 < (_ = (~_ >>> 0) + 1) &&
              ((_ = 0), 4294967295 < ++_ && (_ = 0))),
          (_ = _),
          (_ = _);
      }
      function _(_) {
        var _ = 0 > _;
        _((_ = 2 * Math.abs(_))), (_ = _);
        var _ = _;
        _ &&
          (0 == _
            ? 0 == _
              ? (_ = _ = 4294967295)
              : (_--, (_ = 4294967295))
            : _--),
          (_ = _),
          (_ = _);
      }
      function _(_) {
        var _ = 0 > _ ? 1 : 0;
        if (0 === (_ = _ ? -_ : _))
          0 < 1 / _ ? (_ = _ = 0) : ((_ = 0), (_ = 2147483648));
        else if (isNaN(_)) (_ = 0), (_ = 2147483647);
        else if (34028234663852886e22 < _)
          (_ = 0), (_ = ((_ << 31) | 2139095040) >>> 0);
        else if (11754943508222875e-54 > _)
          (_ = Math.round(_ / Math.pow(2, -149))),
            (_ = 0),
            (_ = ((_ << 31) | _) >>> 0);
        else {
          var _ = Math.floor(Math.log(_) / Math.LN2);
          (_ *= Math.pow(2, -_)),
            16777216 <= (_ = Math.round(8388608 * _)) && ++_,
            (_ = 0),
            (_ = ((_ << 31) | ((_ + 127) << 23) | (8388607 & _)) >>> 0);
        }
      }
      function _(_) {
        var _ = 0 > _ ? 1 : 0;
        if (0 === (_ = _ ? -_ : _)) (_ = 0 < 1 / _ ? 0 : 2147483648), (_ = 0);
        else if (isNaN(_)) (_ = 2147483647), (_ = 4294967295);
        else if (17976931348623157e292 < _)
          (_ = ((_ << 31) | 2146435072) >>> 0), (_ = 0);
        else if (22250738585072014e-324 > _)
          (_ /= Math.pow(2, -1074)),
            (_ = ((_ << 31) | (_ / 4294967296)) >>> 0),
            (_ = _ >>> 0);
        else {
          var _ = _,
            _ = 0;
          if (2 <= _) for (; 2 <= _ && 1023 > _; ) _++, (_ /= 2);
          else for (; 1 > _ && -1022 < _; ) (_ *= 2), _--;
          (_ *= Math.pow(2, -_)),
            (_ =
              ((_ << 31) | ((_ + 1023) << 20) | ((1048576 * _) & 1048575)) >>>
              0),
            (_ = (4503599627370496 * _) >>> 0);
        }
      }
      function _(_) {
        var _ = _.charCodeAt(4),
          _ = _.charCodeAt(5),
          _ = _.charCodeAt(6),
          _ = _.charCodeAt(7);
        (_ =
          (_.charCodeAt(0) +
            (_.charCodeAt(1) << 8) +
            (_.charCodeAt(2) << 16) +
            (_.charCodeAt(3) << 24)) >>>
          0),
          (_ = (_ + (_ << 8) + (_ << 16) + (_ << 24)) >>> 0);
      }
      function _(_, _) {
        return 4294967296 * _ + (_ >>> 0);
      }
      function _(_, _) {
        var _ = 2147483648 & _;
        return (
          _ &&
            ((_ = ~_ >>> 0), 0 == (_ = (1 + ~_) >>> 0) && (_ = (_ + 1) >>> 0)),
          (_ = _(_, _)),
          _ ? -_ : _
        );
      }
      function _(_, _, _) {
        var _ = _ >> 31;
        return _((_ << 1) ^ _, ((_ << 1) | (_ >>> 31)) ^ _);
      }
      function _(_, _) {
        return _(_, _, _);
      }
      function _(_, _, _) {
        var _ = -(1 & _);
        return _(((_ >>> 1) | (_ << 31)) ^ _, (_ >>> 1) ^ _);
      }
      function _(_) {
        var _ = 2 * (_ >> 31) + 1,
          _ = (_ >>> 23) & 255;
        return (
          (_ &= 8388607),
          255 == _
            ? _
              ? NaN
              : (1 / 0) * _
            : 0 == _
              ? _ * Math.pow(2, -149) * _
              : _ * Math.pow(2, _ - 150) * (_ + Math.pow(2, 23))
        );
      }
      function _(_, _) {
        var _ = 2 * (_ >> 31) + 1,
          _ = (_ >>> 20) & 2047;
        return (
          (_ = 4294967296 * (1048575 & _) + _),
          2047 == _
            ? _
              ? NaN
              : (1 / 0) * _
            : 0 == _
              ? _ * Math.pow(2, -1074) * _
              : _ * Math.pow(2, _ - 1075) * (_ + 4503599627370496)
        );
      }
      function _(_, _) {
        return String.fromCharCode(
          (_ >>> 0) & 255,
          (_ >>> 8) & 255,
          (_ >>> 16) & 255,
          (_ >>> 24) & 255,
          (_ >>> 0) & 255,
          (_ >>> 8) & 255,
          (_ >>> 16) & 255,
          (_ >>> 24) & 255,
        );
      }
      function _(_, _) {
        function _(_, _) {
          return (
            (_ = _ ? String(_) : ""), _ ? "0000000".slice(_.length) + _ : _
          );
        }
        if (2097151 >= _) return "" + _(_, _);
        var _ = (((_ >>> 24) | (_ << 8)) >>> 0) & 16777215;
        return (
          (_ =
            (16777215 & _) + 6777216 * _ + 6710656 * (_ = (_ >> 16) & 65535)),
          (_ += 8147497 * _),
          (_ *= 2),
          1e7 <= _ && ((_ += Math.floor(_ / 1e7)), (_ %= 1e7)),
          1e7 <= _ && ((_ += Math.floor(_ / 1e7)), (_ %= 1e7)),
          _(_, 0) + _(_, _) + _(_, 1)
        );
      }
      function _(_, _) {
        var _ = 2147483648 & _;
        return (
          _ && (_ = (~_ + (0 == (_ = (1 + ~_) >>> 0) ? 1 : 0)) >>> 0),
          (_ = _(_, _)),
          _ ? "-" + _ : _
        );
      }
      function _(_, _) {
        _(_), (_ = _);
        var _ = _;
        return _ ? _(_, _) : _(_, _);
      }
      function _(_) {
        function _(_, _) {
          for (var _ = 0; 8 > _ && (1 !== _ || 0 < _); _++)
            (_ = _ * _[_] + _), (_[_] = 255 & _), (_ >>>= 8);
        }
        _(0 < _.length);
        var _ = !1;
        "-" === _[0] && ((_ = !0), (_ = _.slice(1)));
        for (var _ = [0, 0, 0, 0, 0, 0, 0, 0], _ = 0; _ < _.length; _++)
          _(10, _.charCodeAt(_) - 48);
        return (
          _ &&
            ((function () {
              for (var _ = 0; 8 > _; _++) _[_] = 255 & ~_[_];
            })(),
            _(1, 1)),
          _(_)
        );
      }
      function _(_) {
        return String.fromCharCode(10 > _ ? 48 + _ : 87 + _);
      }
      function _(_) {
        return 97 <= _ ? _ - 97 + 10 : _ - 48;
      }
      function _(_, _, _, _, _) {
        var _ = 0;
        if (128 > _) for (; _ < _ && _[_++] == _; ) _++, (_ += _);
        else
          for (; _ < _; ) {
            for (var _ = _; 128 < _; ) {
              if (_[_++] != ((127 & _) | 128)) return _;
              _ >>= 7;
            }
            if (_[_++] != _) break;
            _++, (_ += _);
          }
        return _;
      }
      function _(_) {
        return _.constructor === Uint8Array
          ? _
          : _.constructor === ArrayBuffer || _.constructor === Array
            ? new Uint8Array(_)
            : _.constructor === String
              ? _(_)
              : _ instanceof Uint8Array
                ? new Uint8Array(_.buffer, _.byteOffset, _.byteLength)
                : (_("Type not convertible to Uint8Array."), new Uint8Array(0));
      }
      function _(_, _, _) {
        (this._ = null),
          (this._ = this._ = this._ = 0),
          (this._ = !1),
          _ && this._(_, _, _);
      }
      _(
        "jspb.utils.getSplit64Low",
        function () {
          return _;
        },
        void 0,
      ),
        _(
          "jspb.utils.getSplit64High",
          function () {
            return _;
          },
          void 0,
        ),
        _("jspb.utils.splitUint64", _, void 0),
        _("jspb.utils.splitInt64", _, void 0),
        _("jspb.utils.splitZigzag64", _, void 0),
        _("jspb.utils.splitFloat32", _, void 0),
        _("jspb.utils.splitFloat64", _, void 0),
        _("jspb.utils.splitHash64", _, void 0),
        _("jspb.utils.joinUint64", _, void 0),
        _("jspb.utils.joinInt64", _, void 0),
        _("jspb.utils.toZigzag64", _, void 0),
        _("jspb.utils.joinZigzag64", _, void 0),
        _("jspb.utils.fromZigzag64", _, void 0),
        _("jspb.utils.joinFloat32", _, void 0),
        _("jspb.utils.joinFloat64", _, void 0),
        _("jspb.utils.joinHash64", _, void 0),
        _("jspb.utils.DIGITS", "0123456789abcdef".split(""), void 0),
        _("jspb.utils.joinUnsignedDecimalString", _, void 0),
        _("jspb.utils.joinSignedDecimalString", _, void 0),
        _("jspb.utils.hash64ToDecimalString", _, void 0),
        _(
          "jspb.utils.hash64ArrayToDecimalStrings",
          function (_, _) {
            for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
              _[_] = _(_[_], _);
            return _;
          },
          void 0,
        ),
        _("jspb.utils.decimalStringToHash64", _, void 0),
        _(
          "jspb.utils.splitDecimalString",
          function (_) {
            _(_(_));
          },
          void 0,
        ),
        _(
          "jspb.utils.hash64ToHexString",
          function (_) {
            var _ = Array(18);
            (_[0] = "0"), (_[1] = "x");
            for (var _ = 0; 8 > _; _++) {
              var _ = _.charCodeAt(7 - _);
              (_[2 * _ + 2] = _(_ >> 4)), (_[2 * _ + 3] = _(15 & _));
            }
            return _.join("");
          },
          void 0,
        ),
        _(
          "jspb.utils.hexStringToHash64",
          function (_) {
            _(18 == (_ = _.toLowerCase()).length),
              _("0" == _[0]),
              _("x" == _[1]);
            for (var _ = "", _ = 0; 8 > _; _++)
              _ =
                String.fromCharCode(
                  16 * _(_.charCodeAt(2 * _ + 2)) + _(_.charCodeAt(2 * _ + 3)),
                ) + _;
            return _;
          },
          void 0,
        ),
        _(
          "jspb.utils.hash64ToNumber",
          function (_, _) {
            _(_), (_ = _);
            var _ = _;
            return _ ? _(_, _) : _(_, _);
          },
          void 0,
        ),
        _(
          "jspb.utils.numberToHash64",
          function (_) {
            return _(_), _(_, _);
          },
          void 0,
        ),
        _(
          "jspb.utils.countVarints",
          function (_, _, _) {
            for (var _ = 0, _ = _; _ < _; _++) _ += _[_] >> 7;
            return _ - _ - _;
          },
          void 0,
        ),
        _(
          "jspb.utils.countVarintFields",
          function (_, _, _, _) {
            var _ = 0;
            if (128 > (_ *= 8))
              for (; _ < _ && _[_++] == _; )
                for (_++; ; ) {
                  var _ = _[_++];
                  if (!(128 & _)) break;
                }
            else
              for (; _ < _; ) {
                for (_ = _; 128 < _; ) {
                  if (_[_] != ((127 & _) | 128)) return _;
                  _++, (_ >>= 7);
                }
                if (_[_++] != _) break;
                for (_++; 128 & (_ = _[_++]); );
              }
            return _;
          },
          void 0,
        ),
        _(
          "jspb.utils.countFixed32Fields",
          function (_, _, _, _) {
            return _(_, _, _, 8 * _ + 5, 4);
          },
          void 0,
        ),
        _(
          "jspb.utils.countFixed64Fields",
          function (_, _, _, _) {
            return _(_, _, _, 8 * _ + 1, 8);
          },
          void 0,
        ),
        _(
          "jspb.utils.countDelimitedFields",
          function (_, _, _, _) {
            var _ = 0;
            for (_ = 8 * _ + 2; _ < _; ) {
              for (var _ = _; 128 < _; ) {
                if (_[_++] != ((127 & _) | 128)) return _;
                _ >>= 7;
              }
              if (_[_++] != _) break;
              _++;
              for (
                var _ = 0, _ = 1;
                (_ += (127 & (_ = _[_++])) * _), (_ *= 128), 128 & _;
              );
              _ += _;
            }
            return _;
          },
          void 0,
        ),
        _(
          "jspb.utils.debugBytesToTextFormat",
          function (_) {
            var _ = '"';
            if (_) {
              _ = _(_);
              for (var _ = 0; _ < _.length; _++)
                (_ += "\\x"), 16 > _[_] && (_ += "0"), (_ += _[_].toString(16));
            }
            return _ + '"';
          },
          void 0,
        ),
        _(
          "jspb.utils.debugScalarToTextFormat",
          function (_) {
            if ("string" == typeof _) {
              _ = String(_);
              for (var _ = ['"'], _ = 0; _ < _.length; _++) {
                var _,
                  _ = _.charAt(_),
                  _ = _.charCodeAt(0),
                  _ = _ + 1;
                (_ = _[_]) ||
                  ((31 < _ && 127 > _) ||
                    ((_ = _) in _
                      ? (_ = _[_])
                      : _ in _
                        ? (_ = _[_] = _[_])
                        : (31 < (_ = _.charCodeAt(0)) && 127 > _
                            ? (_ = _)
                            : (256 > _
                                ? ((_ = "\\x"),
                                  (16 > _ || 256 < _) && (_ += "0"))
                                : ((_ = "\\u"), 4096 > _ && (_ += "0")),
                              (_ += _.toString(16).toUpperCase())),
                          (_ = _[_] = _))),
                  (_ = _)),
                  (_[_] = _);
              }
              _.push('"'), (_ = _.join(""));
            } else _ = _.toString();
            return _;
          },
          void 0,
        ),
        _(
          "jspb.utils.stringToByteArray",
          function (_) {
            for (var _ = new Uint8Array(_.length), _ = 0; _ < _.length; _++) {
              var _ = _.charCodeAt(_);
              if (255 < _)
                throw Error(
                  "Conversion error: string contains codepoint outside of byte range",
                );
              _[_] = _;
            }
            return _;
          },
          void 0,
        ),
        _("jspb.utils.byteSourceToUint8Array", _, void 0),
        _("jspb.BinaryDecoder", _, void 0);
      var _ = [];
      function _(_, _, _) {
        if (_.length) {
          var _ = _.pop();
          return _ && _._(_, _, _), _;
        }
        return new _(_, _, _);
      }
      function _(_, _, _) {
        (this._ = _(_, _, _)),
          (this._ = this._._()),
          (this._ = this._ = -1),
          (this._ = !1),
          (this._ = null);
      }
      (_.getInstanceCacheLength = function () {
        return _.length;
      }),
        (_.alloc = _),
        (_.prototype._ = function () {
          this.clear(), 100 > _.length && _.push(this);
        }),
        (_.prototype.free = _.prototype._),
        (_.prototype.clone = function () {
          return _(this._, this._, this._ - this._);
        }),
        (_.prototype.clone = _.prototype.clone),
        (_.prototype.clear = function () {
          (this._ = null), (this._ = this._ = this._ = 0), (this._ = !1);
        }),
        (_.prototype.clear = _.prototype.clear),
        (_.prototype._ = function () {
          return this._;
        }),
        (_.prototype.getBuffer = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          (this._ = _(_)),
            (this._ = void 0 !== _ ? _ : 0),
            (this._ = void 0 !== _ ? this._ + _ : this._.length),
            (this._ = this._);
        }),
        (_.prototype.setBlock = _.prototype._),
        (_.prototype._ = function () {
          return this._;
        }),
        (_.prototype.getEnd = _.prototype._),
        (_.prototype.setEnd = function (_) {
          this._ = _;
        }),
        (_.prototype.setEnd = _.prototype.setEnd),
        (_.prototype.reset = function () {
          this._ = this._;
        }),
        (_.prototype.reset = _.prototype.reset),
        (_.prototype._ = function () {
          return this._;
        }),
        (_.prototype.getCursor = _.prototype._),
        (_.prototype._ = function (_) {
          this._ = _;
        }),
        (_.prototype.setCursor = _.prototype._),
        (_.prototype.advance = function (_) {
          (this._ += _), _(this._ <= this._);
        }),
        (_.prototype.advance = _.prototype.advance),
        (_.prototype._ = function () {
          return this._ == this._;
        }),
        (_.prototype.atEnd = _.prototype._),
        (_.prototype._ = function () {
          return this._ > this._;
        }),
        (_.prototype.pastEnd = _.prototype._),
        (_.prototype.getError = function () {
          return this._ || 0 > this._ || this._ > this._;
        }),
        (_.prototype.getError = _.prototype.getError),
        (_.prototype._ = function (_) {
          for (var _ = 128, _ = 0, _ = 0, _ = 0; 4 > _ && 128 <= _; _++)
            _ |= (127 & (_ = this._[this._++])) << (7 * _);
          if (
            (128 <= _ &&
              ((_ |= (127 & (_ = this._[this._++])) << 28),
              (_ |= (127 & _) >> 4)),
            128 <= _)
          )
            for (_ = 0; 5 > _ && 128 <= _; _++)
              _ |= (127 & (_ = this._[this._++])) << (7 * _ + 3);
          if (128 > _) return _(_ >>> 0, _ >>> 0);
          _("Failed to read varint, encoding is invalid."), (this._ = !0);
        }),
        (_.prototype.readSplitVarint64 = _.prototype._),
        (_.prototype._ = function (_) {
          return this._(function (_, _) {
            return _(_, _, _);
          });
        }),
        (_.prototype.readSplitZigzagVarint64 = _.prototype._),
        (_.prototype._ = function (_) {
          var _ = this._,
            _ = this._;
          this._ += 8;
          for (var _ = 0, _ = 0, _ = _ + 7; _ >= _; _--)
            (_ = (_ << 8) | _[_]), (_ = (_ << 8) | _[_ + 4]);
          return _(_, _);
        }),
        (_.prototype.readSplitFixed64 = _.prototype._),
        (_.prototype._ = function () {
          for (; 128 & this._[this._]; ) this._++;
          this._++;
        }),
        (_.prototype.skipVarint = _.prototype._),
        (_.prototype._ = function (_) {
          for (; 128 < _; ) this._--, (_ >>>= 7);
          this._--;
        }),
        (_.prototype.unskipVarint = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._,
            _ = _[this._],
            _ = 127 & _;
          return 128 > _
            ? ((this._ += 1), _(this._ <= this._), _)
            : ((_ |= (127 & (_ = _[this._ + 1])) << 7),
              128 > _
                ? ((this._ += 2), _(this._ <= this._), _)
                : ((_ |= (127 & (_ = _[this._ + 2])) << 14),
                  128 > _
                    ? ((this._ += 3), _(this._ <= this._), _)
                    : ((_ |= (127 & (_ = _[this._ + 3])) << 21),
                      128 > _
                        ? ((this._ += 4), _(this._ <= this._), _)
                        : ((_ |= (15 & (_ = _[this._ + 4])) << 28),
                          128 > _
                            ? ((this._ += 5), _(this._ <= this._), _ >>> 0)
                            : ((this._ += 5),
                              128 <= _[this._++] &&
                                128 <= _[this._++] &&
                                128 <= _[this._++] &&
                                128 <= _[this._++] &&
                                128 <= _[this._++] &&
                                _(!1),
                              _(this._ <= this._),
                              _)))));
        }),
        (_.prototype.readUnsignedVarint32 = _.prototype._),
        (_.prototype._ = function () {
          return ~~this._();
        }),
        (_.prototype.readSignedVarint32 = _.prototype._),
        (_.prototype._ = function () {
          return this._().toString();
        }),
        (_.prototype._ = function () {
          return this._().toString();
        }),
        (_.prototype.readSignedVarint32String = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._();
          return (_ >>> 1) ^ -(1 & _);
        }),
        (_.prototype.readZigzagVarint32 = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readUnsignedVarint64 = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readUnsignedVarint64String = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readSignedVarint64 = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readSignedVarint64String = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readZigzagVarint64 = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readZigzagVarintHash64 = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readZigzagVarint64String = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._[this._];
          return (this._ += 1), _(this._ <= this._), _;
        }),
        (_.prototype.readUint8 = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._[this._],
            _ = this._[this._ + 1];
          return (this._ += 2), _(this._ <= this._), _ | (_ << 8);
        }),
        (_.prototype.readUint16 = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._[this._],
            _ = this._[this._ + 1],
            _ = this._[this._ + 2],
            _ = this._[this._ + 3];
          return (
            (this._ += 4),
            _(this._ <= this._),
            (_ | (_ << 8) | (_ << 16) | (_ << 24)) >>> 0
          );
        }),
        (_.prototype.readUint32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this._(), this._());
        }),
        (_.prototype.readUint64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this._(), this._());
        }),
        (_.prototype.readUint64String = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._[this._];
          return (this._ += 1), _(this._ <= this._), (_ << 24) >> 24;
        }),
        (_.prototype.readInt8 = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._[this._],
            _ = this._[this._ + 1];
          return (
            (this._ += 2), _(this._ <= this._), ((_ | (_ << 8)) << 16) >> 16
          );
        }),
        (_.prototype.readInt16 = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._[this._],
            _ = this._[this._ + 1],
            _ = this._[this._ + 2],
            _ = this._[this._ + 3];
          return (
            (this._ += 4),
            _(this._ <= this._),
            _ | (_ << 8) | (_ << 16) | (_ << 24)
          );
        }),
        (_.prototype.readInt32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this._(), this._());
        }),
        (_.prototype.readInt64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this._(), this._());
        }),
        (_.prototype.readInt64String = _.prototype._),
        (_.prototype._ = function () {
          return _(this._());
        }),
        (_.prototype.readFloat = _.prototype._),
        (_.prototype._ = function () {
          return _(this._(), this._());
        }),
        (_.prototype.readDouble = _.prototype._),
        (_.prototype._ = function () {
          return !!this._[this._++];
        }),
        (_.prototype.readBool = _.prototype._),
        (_.prototype._ = function () {
          return this._();
        }),
        (_.prototype.readEnum = _.prototype._),
        (_.prototype._ = function (_) {
          var _ = this._,
            _ = this._;
          _ = _ + _;
          for (var _ = [], _ = ""; _ < _; ) {
            var _ = _[_++];
            if (128 > _) _.push(_);
            else {
              if (192 > _) continue;
              if (224 > _) {
                var _ = _[_++];
                _.push(((31 & _) << 6) | (63 & _));
              } else if (240 > _) {
                _ = _[_++];
                var _ = _[_++];
                _.push(((15 & _) << 12) | ((63 & _) << 6) | (63 & _));
              } else if (248 > _) {
                (_ =
                  ((7 & _) << 18) |
                  ((63 & (_ = _[_++])) << 12) |
                  ((63 & (_ = _[_++])) << 6) |
                  (63 & _[_++])),
                  (_ -= 65536),
                  _.push(55296 + ((_ >> 10) & 1023), 56320 + (1023 & _));
              }
            }
            8192 <= _.length &&
              ((_ += String.fromCharCode.apply(null, _)), (_.length = 0));
          }
          return (_ += _(_)), (this._ = _), _;
        }),
        (_.prototype.readString = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._();
          return this._(_);
        }),
        (_.prototype.readStringWithLength = _.prototype._),
        (_.prototype._ = function (_) {
          if (0 > _ || this._ + _ > this._.length)
            return (this._ = !0), _("Invalid byte length!"), new Uint8Array(0);
          var _ = this._.subarray(this._, this._ + _);
          return (this._ += _), _(this._ <= this._), _;
        }),
        (_.prototype.readBytes = _.prototype._),
        (_.prototype._ = function () {
          return this._(_);
        }),
        (_.prototype.readVarintHash64 = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._,
            _ = this._,
            _ = _[_],
            _ = _[_ + 1],
            _ = _[_ + 2],
            _ = _[_ + 3],
            _ = _[_ + 4],
            _ = _[_ + 5],
            _ = _[_ + 6];
          return (
            (_ = _[_ + 7]),
            (this._ += 8),
            String.fromCharCode(_, _, _, _, _, _, _, _)
          );
        }),
        (_.prototype.readFixedHash64 = _.prototype._),
        _("jspb.BinaryReader", _, void 0);
      var _ = [];
      function _(_, _, _) {
        if (_.length) {
          var _ = _.pop();
          return _ && _._._(_, _, _), _;
        }
        return new _(_, _, _);
      }
      function _(_, _) {
        _(2 == _._);
        var _ = _._._();
        _ = _._._() + _;
        for (var _ = []; _._._() < _; ) _.push(_.call(_._));
        return _;
      }
      function _(_, _, _, _, _) {
        (this._ = _), (this._ = _), (this._ = _), (this._ = _), (this._ = _);
      }
      function _(_, _, _, _, _, _) {
        (this._ = _),
          (this._ = _),
          (this._ = _),
          (this._ = _),
          (this._ = _),
          (this._ = _);
      }
      function _() {}
      (_.clearInstanceCache = function () {
        _ = [];
      }),
        (_.getInstanceCacheLength = function () {
          return _.length;
        }),
        (_.alloc = _),
        (_.prototype._ = _),
        (_.prototype.alloc = _.prototype._),
        (_.prototype._ = function () {
          this._.clear(),
            (this._ = this._ = -1),
            (this._ = !1),
            (this._ = null),
            100 > _.length && _.push(this);
        }),
        (_.prototype.free = _.prototype._),
        (_.prototype._ = function () {
          return this._;
        }),
        (_.prototype.getFieldCursor = _.prototype._),
        (_.prototype._ = function () {
          return this._._();
        }),
        (_.prototype.getCursor = _.prototype._),
        (_.prototype._ = function () {
          return this._._();
        }),
        (_.prototype.getBuffer = _.prototype._),
        (_.prototype._ = function () {
          return this._;
        }),
        (_.prototype.getFieldNumber = _.prototype._),
        (_.prototype._ = function () {
          return this._;
        }),
        (_.prototype.getWireType = _.prototype._),
        (_.prototype._ = function () {
          return 2 == this._;
        }),
        (_.prototype.isDelimited = _.prototype._),
        (_.prototype._ = function () {
          return 4 == this._;
        }),
        (_.prototype.isEndGroup = _.prototype._),
        (_.prototype.getError = function () {
          return this._ || this._.getError();
        }),
        (_.prototype.getError = _.prototype.getError),
        (_.prototype._ = function (_, _, _) {
          this._._(_, _, _), (this._ = this._ = -1);
        }),
        (_.prototype.setBlock = _.prototype._),
        (_.prototype.reset = function () {
          this._.reset(), (this._ = this._ = -1);
        }),
        (_.prototype.reset = _.prototype.reset),
        (_.prototype.advance = function (_) {
          this._.advance(_);
        }),
        (_.prototype.advance = _.prototype.advance),
        (_.prototype._ = function () {
          if (this._._()) return !1;
          if (this.getError()) return _("Decoder hit an error"), !1;
          this._ = this._._();
          var _ = this._._(),
            _ = _ >>> 3;
          return 0 != (_ &= 7) && 5 != _ && 1 != _ && 2 != _ && 3 != _ && 4 != _
            ? (_("Invalid wire type: %s (at position %s)", _, this._),
              (this._ = !0),
              !1)
            : ((this._ = _), (this._ = _), !0);
        }),
        (_.prototype.nextField = _.prototype._),
        (_.prototype._ = function () {
          this._._((this._ << 3) | this._);
        }),
        (_.prototype.unskipHeader = _.prototype._),
        (_.prototype._ = function () {
          var _ = this._;
          for (this._(); this._() && this._ == _; ) this._();
          this._._() || this._();
        }),
        (_.prototype.skipMatchingFields = _.prototype._),
        (_.prototype._ = function () {
          0 != this._
            ? (_("Invalid wire type for skipVarintField"), this._())
            : this._._();
        }),
        (_.prototype.skipVarintField = _.prototype._),
        (_.prototype._ = function () {
          if (2 != this._)
            _("Invalid wire type for skipDelimitedField"), this._();
          else {
            var _ = this._._();
            this._.advance(_);
          }
        }),
        (_.prototype.skipDelimitedField = _.prototype._),
        (_.prototype._ = function () {
          5 != this._
            ? (_("Invalid wire type for skipFixed32Field"), this._())
            : this._.advance(4);
        }),
        (_.prototype.skipFixed32Field = _.prototype._),
        (_.prototype._ = function () {
          1 != this._
            ? (_("Invalid wire type for skipFixed64Field"), this._())
            : this._.advance(8);
        }),
        (_.prototype.skipFixed64Field = _.prototype._),
        (_.prototype._ = function () {
          for (var _ = this._; ; ) {
            if (!this._()) {
              _("Unmatched start-group tag: stream EOF"), (this._ = !0);
              break;
            }
            if (4 == this._) {
              this._ != _ && (_("Unmatched end-group tag"), (this._ = !0));
              break;
            }
            this._();
          }
        }),
        (_.prototype.skipGroup = _.prototype._),
        (_.prototype._ = function () {
          switch (this._) {
            case 0:
              this._();
              break;
            case 1:
              this._();
              break;
            case 2:
              this._();
              break;
            case 5:
              this._();
              break;
            case 3:
              this._();
              break;
            default:
              _("Invalid wire encoding for field.");
          }
        }),
        (_.prototype.skipField = _.prototype._),
        (_.prototype._ = function (_, _) {
          null === this._ && (this._ = {}), _(!this._[_]), (this._[_] = _);
        }),
        (_.prototype.registerReadCallback = _.prototype._),
        (_.prototype._ = function (_) {
          return _(null !== this._), _((_ = this._[_])), _(this);
        }),
        (_.prototype.runReadCallback = _.prototype._),
        (_.prototype._ = function (_, _) {
          _(2 == this._);
          var _ = this._._,
            _ = this._._();
          (_ = this._._() + _),
            this._.setEnd(_),
            _(_, this),
            this._._(_),
            this._.setEnd(_);
        }),
        (_.prototype.readMessage = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          _(3 == this._),
            _(this._ == _),
            _(_, this),
            this._ ||
              4 == this._ ||
              (_("Group submessage did not end with an END_GROUP tag"),
              (this._ = !0));
        }),
        (_.prototype.readGroup = _.prototype._),
        (_.prototype._ = function () {
          _(2 == this._);
          var _ = this._._(),
            _ = this._._(),
            _ = _ + _;
          return (_ = _(this._._(), _, _)), this._._(_), _;
        }),
        (_.prototype.getFieldDecoder = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readInt32 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readInt32String = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readInt64 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readInt64String = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readUint32 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readUint32String = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readUint64 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readUint64String = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readSint32 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readSint64 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readSint64String = _.prototype._),
        (_.prototype._ = function () {
          return _(5 == this._), this._._();
        }),
        (_.prototype.readFixed32 = _.prototype._),
        (_.prototype._ = function () {
          return _(1 == this._), this._._();
        }),
        (_.prototype.readFixed64 = _.prototype._),
        (_.prototype._ = function () {
          return _(1 == this._), this._._();
        }),
        (_.prototype.readFixed64String = _.prototype._),
        (_.prototype._ = function () {
          return _(5 == this._), this._._();
        }),
        (_.prototype.readSfixed32 = _.prototype._),
        (_.prototype._ = function () {
          return _(5 == this._), this._._().toString();
        }),
        (_.prototype.readSfixed32String = _.prototype._),
        (_.prototype._ = function () {
          return _(1 == this._), this._._();
        }),
        (_.prototype.readSfixed64 = _.prototype._),
        (_.prototype._ = function () {
          return _(1 == this._), this._._();
        }),
        (_.prototype.readSfixed64String = _.prototype._),
        (_.prototype._ = function () {
          return _(5 == this._), this._._();
        }),
        (_.prototype.readFloat = _.prototype._),
        (_.prototype._ = function () {
          return _(1 == this._), this._._();
        }),
        (_.prototype.readDouble = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), !!this._._();
        }),
        (_.prototype.readBool = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readEnum = _.prototype._),
        (_.prototype._ = function () {
          _(2 == this._);
          var _ = this._._();
          return this._._(_);
        }),
        (_.prototype.readString = _.prototype._),
        (_.prototype._ = function () {
          _(2 == this._);
          var _ = this._._();
          return this._._(_);
        }),
        (_.prototype.readBytes = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readVarintHash64 = _.prototype._),
        (_.prototype._ = function () {
          return _(0 == this._), this._._();
        }),
        (_.prototype.readSintHash64 = _.prototype._),
        (_.prototype._ = function (_) {
          return _(0 == this._), this._._(_);
        }),
        (_.prototype.readSplitVarint64 = _.prototype._),
        (_.prototype._ = function (_) {
          return (
            _(0 == this._),
            this._._(function (_, _) {
              return _(_, _, _);
            })
          );
        }),
        (_.prototype.readSplitZigzagVarint64 = _.prototype._),
        (_.prototype._ = function () {
          return _(1 == this._), this._._();
        }),
        (_.prototype.readFixedHash64 = _.prototype._),
        (_.prototype._ = function (_) {
          return _(1 == this._), this._._(_);
        }),
        (_.prototype.readSplitFixed64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedInt32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedInt32String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedInt64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedInt64String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedUint32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedUint32String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedUint64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedUint64String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedSint32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedSint64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedSint64String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedFixed32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedFixed64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedFixed64String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedSfixed32 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedSfixed64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedSfixed64String = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedFloat = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedDouble = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedBool = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedEnum = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedVarintHash64 = _.prototype._),
        (_.prototype._ = function () {
          return _(this, this._._);
        }),
        (_.prototype.readPackedFixedHash64 = _.prototype._),
        _("jspb.ExtensionFieldInfo", _, void 0),
        _("jspb.ExtensionFieldBinaryInfo", _, void 0),
        (_.prototype._ = function () {
          return !!this._;
        }),
        (_.prototype.isMessageType = _.prototype._),
        _("jspb.Message", _, void 0),
        (_.GENERATE_TO_OBJECT = !0),
        (_.GENERATE_FROM_OBJECT = !0);
      var _ = "function" == typeof Uint8Array;
      (_.prototype._ = function () {
        return this._;
      }),
        (_.prototype.getJsPbMessageId = _.prototype._),
        (_.initialize = function (_, _, _, _, _, _) {
          if (
            ((_._ = null),
            _ || (_ = _ ? [_] : []),
            (_._ = _ ? String(_) : void 0),
            (_._ = 0 === _ ? -1 : 0),
            (_._ = _),
            (_ = -1),
            !(_ = _._.length) ||
            ((_ = _ - 1),
            null === (_ = _._[_]) ||
              "object" != typeof _ ||
              Array.isArray(_) ||
              (_ && _ instanceof Uint8Array))
              ? -1 < _
                ? ((_._ = Math.max(_, _ + 1 - _._)), (_._ = null))
                : (_._ = Number.MAX_VALUE)
              : ((_._ = _ - _._), (_._ = _)),
            (_._ = {}),
            _)
          )
            for (_ = 0; _ < _.length; _++)
              (_ = _[_]) < _._
                ? ((_ += _._), (_._[_] = _._[_] || _))
                : (_(_), (_._[_] = _._[_] || _));
          if (_ && _.length) for (_ = 0; _ < _.length; _++) _(_, _[_]);
        });
      var _ = Object.freeze ? Object.freeze([]) : [];
      function _(_) {
        var _ = _._ + _._;
        _._[_] || (_._ = _._[_] = {});
      }
      function _(_, _, _) {
        for (var _ = [], _ = 0; _ < _.length; _++) _[_] = _.call(_[_], _, _[_]);
        return _;
      }
      function _(_, _) {
        if (_ < _._) {
          _ += _._;
          var _ = _._[_];
          return _ === _ ? (_._[_] = []) : _;
        }
        if (_._) return (_ = _._[_]) === _ ? (_._[_] = []) : _;
      }
      function _(_, _) {
        return null == (_ = _(_, _)) ? _ : +_;
      }
      function _(_, _) {
        return null == (_ = _(_, _)) ? _ : !!_;
      }
      function _(_) {
        return null == _ || "string" == typeof _
          ? _
          : _ && _ instanceof Uint8Array
            ? _(_)
            : (_("Cannot coerce to b64 string: " + _(_)), null);
      }
      function _(_) {
        return null == _ || _ instanceof Uint8Array
          ? _
          : "string" == typeof _
            ? _(_)
            : (_("Cannot coerce to Uint8Array: " + _(_)), null);
      }
      function _(_) {
        if (_ && 1 < _.length) {
          var _ = _(_[0]);
          _(_, function (_) {
            _(_) != _ &&
              _(
                "Inconsistent type in JSPB repeated field array. Got " +
                  _(_) +
                  " expected " +
                  _,
              );
          });
        }
      }
      function _(_, _, _) {
        return null == (_ = _(_, _)) ? _ : _;
      }
      function _(_, _, _) {
        return _(_, _), _ < _._ ? (_._[_ + _._] = _) : (_(_), (_._[_] = _)), _;
      }
      function _(_, _, _, _) {
        return (
          _(_, _),
          _ !== _
            ? _(_, _, _)
            : _ < _._
              ? (_._[_ + _._] = null)
              : (_(_), delete _._[_]),
          _
        );
      }
      function _(_, _, _, _) {
        return (
          _(_, _),
          (_ = _(_, _)) &&
            _ !== _ &&
            void 0 !== _ &&
            (_._ && _ in _._ && (_._[_] = void 0), _(_, _, void 0)),
          _(_, _, _)
        );
      }
      function _(_, _) {
        for (var _, _, _ = 0; _ < _.length; _++) {
          var _ = _[_],
            _ = _(_, _);
          null != _ && ((_ = _), (_ = _), _(_, _, void 0));
        }
        return _ ? (_(_, _, _), _) : 0;
      }
      function _(_, _, _) {
        if ((_._ || (_._ = {}), !_._[_])) {
          for (var _ = _(_, _), _ = [], _ = 0; _ < _.length; _++)
            _[_] = new _(_[_]);
          _._[_] = _;
        }
      }
      function _(_) {
        if (_._)
          for (var _ in _._) {
            var _ = _._[_];
            if (Array.isArray(_))
              for (var _ = 0; _ < _.length; _++) _[_] && _[_]._();
            else _ && _._();
          }
      }
      function _(_, _) {
        (_ = _ || {}), (_ = _ || {});
        var _,
          _ = {};
        for (_ in _) _[_] = 0;
        for (_ in _) _[_] = 0;
        for (_ in _) if (!_(_[_], _[_])) return !1;
        return !0;
      }
      function _(_, _) {
        if (_ == _) return !0;
        if (!_(_) || !_(_))
          return (
            !!(
              ("number" == typeof _ && isNaN(_)) ||
              ("number" == typeof _ && isNaN(_))
            ) && String(_) == String(_)
          );
        if (_.constructor != _.constructor) return !1;
        if (_ && _.constructor === Uint8Array) {
          if (_.length != _.length) return !1;
          for (var _ = 0; _ < _.length; _++) if (_[_] != _[_]) return !1;
          return !0;
        }
        if (_.constructor === Array) {
          var _ = void 0,
            _ = void 0,
            _ = Math.max(_.length, _.length);
          for (_ = 0; _ < _; _++) {
            var _ = _[_],
              _ = _[_];
            if (
              (_ &&
                _.constructor == Object &&
                (_(void 0 === _), _(_ === _.length - 1), (_ = _), (_ = void 0)),
              _ &&
                _.constructor == Object &&
                (_(void 0 === _), _(_ === _.length - 1), (_ = _), (_ = void 0)),
              !_(_, _))
            )
              return !1;
          }
          return (!_ && !_) || _((_ = _ || {}), (_ = _ || {}));
        }
        if (_.constructor === Object) return _(_, _);
        throw Error("Invalid type in JSPB array");
      }
      function _(_) {
        return new _.constructor(_(_._()));
      }
      function _(_) {
        if (Array.isArray(_)) {
          for (var _ = Array(_.length), _ = 0; _ < _.length; _++) {
            var _ = _[_];
            null != _ && (_[_] = "object" == typeof _ ? _(_(_)) : _);
          }
          return _;
        }
        if (_ && _ instanceof Uint8Array) return new Uint8Array(_);
        for (_ in ((_ = {}), _))
          null != (_ = _[_]) && (_[_] = "object" == typeof _ ? _(_(_)) : _);
        return _;
      }
      (_.toObjectList = _),
        (_.toObjectExtension = function (_, _, _, _, _) {
          for (var _ in _) {
            var _ = _[_],
              _ = _.call(_, _);
            if (null != _) {
              for (var _ in _._) if (_._.hasOwnProperty(_)) break;
              _[_] = _._ ? (_._ ? _(_, _._, _) : _._(_, _)) : _;
            }
          }
        }),
        (_.serializeBinaryExtensions = function (_, _, _, _) {
          for (var _ in _) {
            var _ = _[_],
              _ = _._;
            if (!_._)
              throw Error(
                "Message extension present that was generated without binary serialization support",
              );
            var _ = _.call(_, _);
            if (null != _)
              if (_._()) {
                if (!_._)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
                  );
                _._.call(_, _._, _, _._);
              } else _._.call(_, _._, _);
          }
        }),
        (_.readBinaryExtension = function (_, _, _, _, _) {
          var _ = _[_._];
          if (_) {
            if (((_ = _._), !_._))
              throw Error(
                "Deserializing extension whose generated code does not support binary format",
              );
            if (_._()) {
              var _ = new _._();
              _._.call(_, _, _._);
            } else _ = _._.call(_);
            _._ && !_._
              ? (_ = _.call(_, _))
                ? _.push(_)
                : _.call(_, _, [_])
              : _.call(_, _, _);
          } else _._();
        }),
        (_.getField = _),
        (_.getRepeatedField = function (_, _) {
          return _(_, _);
        }),
        (_.getOptionalFloatingPointField = _),
        (_.getBooleanField = _),
        (_.getRepeatedFloatingPointField = function (_, _) {
          var _ = _(_, _);
          if ((_._ || (_._ = {}), !_._[_])) {
            for (var _ = 0; _ < _.length; _++) _[_] = +_[_];
            _._[_] = !0;
          }
          return _;
        }),
        (_.getRepeatedBooleanField = function (_, _) {
          var _ = _(_, _);
          if ((_._ || (_._ = {}), !_._[_])) {
            for (var _ = 0; _ < _.length; _++) _[_] = !!_[_];
            _._[_] = !0;
          }
          return _;
        }),
        (_.bytesAsB64 = _),
        (_.bytesAsU8 = _),
        (_.bytesListAsB64 = function (_) {
          return _(_), _.length && "string" != typeof _[0] ? _(_, _) : _;
        }),
        (_.bytesListAsU8 = function (_) {
          return _(_), !_.length || _[0] instanceof Uint8Array ? _ : _(_, _);
        }),
        (_.getFieldWithDefault = _),
        (_.getBooleanFieldWithDefault = function (_, _, _) {
          return null == (_ = _(_, _)) ? _ : _;
        }),
        (_.getFloatingPointFieldWithDefault = function (_, _, _) {
          return null == (_ = _(_, _)) ? _ : _;
        }),
        (_.getFieldProto3 = _),
        (_.getMapField = function (_, _, _, _) {
          if ((_._ || (_._ = {}), _ in _._)) return _._[_];
          var _ = _(_, _);
          if (!_) {
            if (_) return;
            _(_, _, (_ = []));
          }
          return (_._[_] = new _(_, _));
        }),
        (_.setField = _),
        (_.setProto3IntField = function (_, _, _) {
          return _(_, _, _, 0);
        }),
        (_.setProto3FloatField = function (_, _, _) {
          return _(_, _, _, 0);
        }),
        (_.setProto3BooleanField = function (_, _, _) {
          return _(_, _, _, !1);
        }),
        (_.setProto3StringField = function (_, _, _) {
          return _(_, _, _, "");
        }),
        (_.setProto3BytesField = function (_, _, _) {
          return _(_, _, _, "");
        }),
        (_.setProto3EnumField = function (_, _, _) {
          return _(_, _, _, 0);
        }),
        (_.setProto3StringIntField = function (_, _, _) {
          return _(_, _, _, "0");
        }),
        (_.addToRepeatedField = function (_, _, _, _) {
          return (
            _(_, _), (_ = _(_, _)), null != _ ? _.splice(_, 0, _) : _.push(_), _
          );
        }),
        (_.setOneofField = _),
        (_.computeOneofCase = _),
        (_.getWrapperField = function (_, _, _, _) {
          if ((_._ || (_._ = {}), !_._[_])) {
            var _ = _(_, _);
            (_ || _) && (_._[_] = new _(_));
          }
          return _._[_];
        }),
        (_.getRepeatedWrapperField = function (_, _, _) {
          return _(_, _, _), (_ = _._[_]) == _ && (_ = _._[_] = []), _;
        }),
        (_.setWrapperField = function (_, _, _) {
          _(_, _), _._ || (_._ = {});
          var _ = _ ? _._() : _;
          return (_._[_] = _), _(_, _, _);
        }),
        (_.setOneofWrapperField = function (_, _, _, _) {
          _(_, _), _._ || (_._ = {});
          var _ = _ ? _._() : _;
          return (_._[_] = _), _(_, _, _, _);
        }),
        (_.setRepeatedWrapperField = function (_, _, _) {
          _(_, _), _._ || (_._ = {}), (_ = _ || []);
          for (var _ = [], _ = 0; _ < _.length; _++) _[_] = _[_]._();
          return (_._[_] = _), _(_, _, _);
        }),
        (_.addToRepeatedWrapperField = function (_, _, _, _, _) {
          _(_, _, _);
          var _ = _._[_];
          return (
            _ || (_ = _._[_] = []),
            (_ = _ || new _()),
            (_ = _(_, _)),
            null != _
              ? (_.splice(_, 0, _), _.splice(_, 0, _._()))
              : (_.push(_), _.push(_._())),
            _
          );
        }),
        (_.toMap = function (_, _, _, _) {
          for (var _ = {}, _ = 0; _ < _.length; _++)
            _[_.call(_[_])] = _ ? _.call(_[_], _, _[_]) : _[_];
          return _;
        }),
        (_.prototype._ = function () {
          return _(this), this._;
        }),
        (_.prototype.toArray = _.prototype._),
        (_.prototype.toString = function () {
          return _(this), this._.toString();
        }),
        (_.prototype.getExtension = function (_) {
          if (this._) {
            this._ || (this._ = {});
            var _ = _._;
            if (_._) {
              if (_._())
                return (
                  this._[_] ||
                    (this._[_] = _(this._[_] || [], function (_) {
                      return new _._(_);
                    })),
                  this._[_]
                );
            } else if (_._())
              return (
                !this._[_] && this._[_] && (this._[_] = new _._(this._[_])),
                this._[_]
              );
            return this._[_];
          }
        }),
        (_.prototype.getExtension = _.prototype.getExtension),
        (_.prototype._ = function (_, _) {
          this._ || (this._ = {}), _(this);
          var _ = _._;
          return (
            _._
              ? ((_ = _ || []),
                _._()
                  ? ((this._[_] = _),
                    (this._[_] = _(_, function (_) {
                      return _._();
                    })))
                  : (this._[_] = _))
              : _._()
                ? ((this._[_] = _), (this._[_] = _ ? _._() : _))
                : (this._[_] = _),
            this
          );
        }),
        (_.prototype.setExtension = _.prototype._),
        (_.difference = function (_, _) {
          if (!(_ instanceof _.constructor))
            throw Error("Messages have different types.");
          var _ = _._();
          _ = _._();
          var _ = [],
            _ = 0,
            _ = _.length > _.length ? _.length : _.length;
          for (_._ && ((_[0] = _._), (_ = 1)); _ < _; _++)
            _(_[_], _[_]) || (_[_] = _[_]);
          return new _.constructor(_);
        }),
        (_.equals = function (_, _) {
          return (
            _ == _ ||
            (!(!_ || !_) && _ instanceof _.constructor && _(_._(), _._()))
          );
        }),
        (_.compareExtensions = _),
        (_.compareFields = _),
        (_.prototype._ = function () {
          return _(this);
        }),
        (_.prototype.cloneMessage = _.prototype._),
        (_.prototype.clone = function () {
          return _(this);
        }),
        (_.prototype.clone = _.prototype.clone),
        (_.clone = function (_) {
          return _(_);
        }),
        (_.copyInto = function (_, _) {
          _(_, _),
            _(_, _),
            _(
              _.constructor == _.constructor,
              "Copy source and target message should have the same type.",
            ),
            (_ = _(_));
          for (var _ = _._(), _ = _._(), _ = (_.length = 0); _ < _.length; _++)
            _[_] = _[_];
          (_._ = _._), (_._ = _._);
        }),
        (_.registerMessageType = function (_, _) {
          _._ = _;
        });
      var _ = {
        dump: function (_) {
          return (
            _(_, _, "jspb.Message instance expected"),
            _(
              _.getExtension,
              "Only unobfuscated and unoptimized compilation modes supported.",
            ),
            _._(_)
          );
        },
      };
      function _() {
        this._ = [];
      }
      function _(_, _) {
        (this._ = _), (this._ = _);
      }
      function _(_, _) {
        var _ = 65535 & _,
          _ = 65535 & _,
          _ = _ >>> 16;
        for (
          _ =
            _ * _ +
            65536 * ((_ * _) & 65535) +
            65536 * (((_ >>>= 16) * _) & 65535),
            _ = _ * _ + ((_ * _) >>> 16) + ((_ * _) >>> 16);
          4294967296 <= _;
        )
          (_ -= 4294967296), (_ += 1);
        return new _(_ >>> 0, _ >>> 0);
      }
      function _(_) {
        for (var _ = new _(0, 0), _ = new _(0, 0), _ = 0; _ < _.length; _++) {
          if ("0" > _[_] || "9" < _[_]) return null;
          (_._ = parseInt(_[_], 10)), (_ = _._(10).add(_));
        }
        return _;
      }
      function _(_, _) {
        (this._ = _), (this._ = _);
      }
      function _(_) {
        var _ = 0 < _.length && "-" == _[0];
        return (
          _ && (_ = _.substring(1)),
          null === (_ = _(_))
            ? null
            : (_ && (_ = new _(0, 0).sub(_)), new _(_._, _._))
        );
      }
      function _() {
        (this._ = []), (this._ = 0), (this._ = new _()), (this._ = []);
      }
      function _(_, _) {
        var _ = _._.end();
        _._.push(_), _._.push(_), (_._ += _.length + _.length);
      }
      function _(_, _) {
        return (
          _(_, _, 2),
          (_ = _._.end()),
          _._.push(_),
          (_._ += _.length),
          _.push(_._),
          _
        );
      }
      function _(_, _) {
        var _ = _.pop();
        for (_(0 <= (_ = _._ + _._.length() - _)); 127 < _; )
          _.push((127 & _) | 128), (_ >>>= 7), _._++;
        _.push(_), _._++;
      }
      function _(_, _, _) {
        _(1 <= _ && _ == Math.floor(_)), _._._(8 * _ + _);
      }
      function _(_, _, _) {
        null != _ && (_(_, _, 0), _._._(_));
      }
      function _(_, _, _) {
        null != _ && (_(_, _, 0), _._._(_));
      }
      _("jspb.debug.dump", _.dump, void 0),
        (_._ = function (_) {
          var _ = _(_);
          if (
            "number" == _ ||
            "string" == _ ||
            "boolean" == _ ||
            "null" == _ ||
            "undefined" == _ ||
            ("undefined" != typeof Uint8Array && _ instanceof Uint8Array)
          )
            return _;
          if ("array" == _)
            return (
              (function (_, _, _) {
                for (var _ = [], _ = 2; _ < arguments.length; ++_)
                  _[_ - 2] = arguments[_];
                Array.isArray(_) ||
                  _("Expected array but got %s: %s.", [_(_), _], _, _);
              })(_),
              _(_, _._)
            );
          if (_ instanceof _) {
            for (
              var _ = {}, _ = (_ = _.entries()).next();
              !_.done;
              _ = _.next()
            )
              _[_.value[0]] = _._(_.value[1]);
            return _;
          }
          _(_, _, "Only messages expected: " + _);
          var _ = {
            $name: (_ = _.constructor).name || _.displayName,
          };
          for (_ in _.prototype) {
            var _ = /^get([A-Z]\w*)/.exec(_);
            if (_ && "getExtension" != _ && "getJsPbMessageId" != _) {
              var _ = "has" + _[1];
              (_[_] && !_[_]()) || ((_ = _[_]()), (_[_._(_[1])] = _._(_)));
            }
          }
          if (_.extensionObject_)
            return (
              (_.$extensions =
                "Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly"),
              _
            );
          for (_ in _.extensions)
            if (/^\d+$/.test(_)) {
              _ = _.extensions[_];
              var _ = _.getExtension(_);
              (_ = void 0), (_ = _._);
              var _ = [],
                _ = 0;
              for (_ in _) _[_++] = _;
              (_ = _[0]),
                null != _ &&
                  (_ || (_ = _.$extensions = {}), (_[_._(_)] = _._(_)));
            }
          return _;
        }),
        (_._ = function (_) {
          return _.replace(/^[A-Z]/, function (_) {
            return _.toLowerCase();
          });
        }),
        _("jspb.BinaryEncoder", _, void 0),
        (_.prototype.length = function () {
          return this._.length;
        }),
        (_.prototype.length = _.prototype.length),
        (_.prototype.end = function () {
          var _ = this._;
          return (this._ = []), _;
        }),
        (_.prototype.end = _.prototype.end),
        (_.prototype._ = function (_, _) {
          for (
            _(_ == Math.floor(_)),
              _(_ == Math.floor(_)),
              _(0 <= _ && 4294967296 > _),
              _(0 <= _ && 4294967296 > _);
            0 < _ || 127 < _;
          )
            this._.push((127 & _) | 128),
              (_ = ((_ >>> 7) | (_ << 25)) >>> 0),
              (_ >>>= 7);
          this._.push(_);
        }),
        (_.prototype.writeSplitVarint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          _(_ == Math.floor(_)),
            _(_ == Math.floor(_)),
            _(0 <= _ && 4294967296 > _),
            _(0 <= _ && 4294967296 > _),
            this._(_),
            this._(_);
        }),
        (_.prototype.writeSplitFixed64 = _.prototype._),
        (_.prototype._ = function (_) {
          for (_(_ == Math.floor(_)), _(0 <= _ && 4294967296 > _); 127 < _; )
            this._.push((127 & _) | 128), (_ >>>= 7);
          this._.push(_);
        }),
        (_.prototype.writeUnsignedVarint32 = _.prototype._),
        (_.prototype._ = function (_) {
          if (
            (_(_ == Math.floor(_)),
            _(-2147483648 <= _ && 2147483648 > _),
            0 <= _)
          )
            this._(_);
          else {
            for (var _ = 0; 9 > _; _++) this._.push((127 & _) | 128), (_ >>= 7);
            this._.push(1);
          }
        }),
        (_.prototype.writeSignedVarint32 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(0 <= _ && 0x10000000000000000 > _),
            _(_),
            this._(_, _);
        }),
        (_.prototype.writeUnsignedVarint64 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-0x8000000000000000 <= _ && 0x8000000000000000 > _),
            _(_),
            this._(_, _);
        }),
        (_.prototype.writeSignedVarint64 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-2147483648 <= _ && 2147483648 > _),
            this._(((_ << 1) ^ (_ >> 31)) >>> 0);
        }),
        (_.prototype.writeZigzagVarint32 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-0x8000000000000000 <= _ && 0x8000000000000000 > _),
            _(_),
            this._(_, _);
        }),
        (_.prototype.writeZigzagVarint64 = _.prototype._),
        (_.prototype._ = function (_) {
          this._(_(_));
        }),
        (_.prototype.writeZigzagVarint64String = _.prototype._),
        (_.prototype._ = function (_) {
          var _ = this;
          _(_),
            _(_, _, function (_, _) {
              _._(_ >>> 0, _ >>> 0);
            });
        }),
        (_.prototype.writeZigzagVarintHash64 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(0 <= _ && 256 > _),
            this._.push((_ >>> 0) & 255);
        }),
        (_.prototype.writeUint8 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(0 <= _ && 65536 > _),
            this._.push((_ >>> 0) & 255),
            this._.push((_ >>> 8) & 255);
        }),
        (_.prototype.writeUint16 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(0 <= _ && 4294967296 > _),
            this._.push((_ >>> 0) & 255),
            this._.push((_ >>> 8) & 255),
            this._.push((_ >>> 16) & 255),
            this._.push((_ >>> 24) & 255);
        }),
        (_.prototype.writeUint32 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(0 <= _ && 0x10000000000000000 > _),
            _(_),
            this._(_),
            this._(_);
        }),
        (_.prototype.writeUint64 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-128 <= _ && 128 > _),
            this._.push((_ >>> 0) & 255);
        }),
        (_.prototype.writeInt8 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-32768 <= _ && 32768 > _),
            this._.push((_ >>> 0) & 255),
            this._.push((_ >>> 8) & 255);
        }),
        (_.prototype.writeInt16 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-2147483648 <= _ && 2147483648 > _),
            this._.push((_ >>> 0) & 255),
            this._.push((_ >>> 8) & 255),
            this._.push((_ >>> 16) & 255),
            this._.push((_ >>> 24) & 255);
        }),
        (_.prototype.writeInt32 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-0x8000000000000000 <= _ && 0x8000000000000000 > _),
            _(_),
            this._(_, _);
        }),
        (_.prototype.writeInt64 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-0x8000000000000000 <= +_ && 0x8000000000000000 > +_),
            _(_(_)),
            this._(_, _);
        }),
        (_.prototype.writeInt64String = _.prototype._),
        (_.prototype._ = function (_) {
          _(
            1 / 0 === _ ||
              -1 / 0 === _ ||
              isNaN(_) ||
              (-34028234663852886e22 <= _ && 34028234663852886e22 >= _),
          ),
            _(_),
            this._(_);
        }),
        (_.prototype.writeFloat = _.prototype._),
        (_.prototype._ = function (_) {
          _(
            1 / 0 === _ ||
              -1 / 0 === _ ||
              isNaN(_) ||
              (-17976931348623157e292 <= _ && 17976931348623157e292 >= _),
          ),
            _(_),
            this._(_),
            this._(_);
        }),
        (_.prototype.writeDouble = _.prototype._),
        (_.prototype._ = function (_) {
          _("boolean" == typeof _ || "number" == typeof _),
            this._.push(_ ? 1 : 0);
        }),
        (_.prototype.writeBool = _.prototype._),
        (_.prototype._ = function (_) {
          _(_ == Math.floor(_)),
            _(-2147483648 <= _ && 2147483648 > _),
            this._(_);
        }),
        (_.prototype.writeEnum = _.prototype._),
        (_.prototype._ = function (_) {
          this._.push.apply(this._, _);
        }),
        (_.prototype.writeBytes = _.prototype._),
        (_.prototype._ = function (_) {
          _(_), this._(_, _);
        }),
        (_.prototype.writeVarintHash64 = _.prototype._),
        (_.prototype._ = function (_) {
          _(_), this._(_), this._(_);
        }),
        (_.prototype.writeFixedHash64 = _.prototype._),
        (_.prototype._ = function (_) {
          var _ = this._.length;
          !(function (_, _, _) {
            for (var _ = [], _ = 2; _ < arguments.length; ++_)
              _[_ - 2] = arguments[_];
            "string" != typeof _ &&
              _("Expected string but got %s: %s.", [_(_), _], _, _);
          })(_);
          for (var _ = 0; _ < _.length; _++) {
            var _ = _.charCodeAt(_);
            if (128 > _) this._.push(_);
            else if (2048 > _)
              this._.push((_ >> 6) | 192), this._.push((63 & _) | 128);
            else if (65536 > _)
              if (55296 <= _ && 56319 >= _ && _ + 1 < _.length) {
                var _ = _.charCodeAt(_ + 1);
                56320 <= _ &&
                  57343 >= _ &&
                  ((_ = 1024 * (_ - 55296) + _ - 56320 + 65536),
                  this._.push((_ >> 18) | 240),
                  this._.push(((_ >> 12) & 63) | 128),
                  this._.push(((_ >> 6) & 63) | 128),
                  this._.push((63 & _) | 128),
                  _++);
              } else
                this._.push((_ >> 12) | 224),
                  this._.push(((_ >> 6) & 63) | 128),
                  this._.push((63 & _) | 128);
          }
          return this._.length - _;
        }),
        (_.prototype.writeString = _.prototype._),
        _("jspb.arith.UInt64", _, void 0),
        (_.prototype.cmp = function (_) {
          return this._ < _._ || (this._ == _._ && this._ < _._)
            ? -1
            : this._ == _._ && this._ == _._
              ? 0
              : 1;
        }),
        (_.prototype.cmp = _.prototype.cmp),
        (_.prototype._ = function () {
          return new _(
            ((this._ >>> 1) | ((1 & this._) << 31)) >>> 0,
            (this._ >>> 1) >>> 0,
          );
        }),
        (_.prototype.rightShift = _.prototype._),
        (_.prototype._ = function () {
          return new _(
            (this._ << 1) >>> 0,
            ((this._ << 1) | (this._ >>> 31)) >>> 0,
          );
        }),
        (_.prototype.leftShift = _.prototype._),
        (_.prototype._ = function () {
          return !!(2147483648 & this._);
        }),
        (_.prototype.msb = _.prototype._),
        (_.prototype._ = function () {
          return !!(1 & this._);
        }),
        (_.prototype.lsb = _.prototype._),
        (_.prototype._ = function () {
          return 0 == this._ && 0 == this._;
        }),
        (_.prototype.zero = _.prototype._),
        (_.prototype.add = function (_) {
          return new _(
            (((this._ + _._) & 4294967295) >>> 0) >>> 0,
            ((((this._ + _._) & 4294967295) >>> 0) +
              (4294967296 <= this._ + _._ ? 1 : 0)) >>>
              0,
          );
        }),
        (_.prototype.add = _.prototype.add),
        (_.prototype.sub = function (_) {
          return new _(
            (((this._ - _._) & 4294967295) >>> 0) >>> 0,
            ((((this._ - _._) & 4294967295) >>> 0) -
              (0 > this._ - _._ ? 1 : 0)) >>>
              0,
          );
        }),
        (_.prototype.sub = _.prototype.sub),
        (_.mul32x32 = _),
        (_.prototype._ = function (_) {
          var _ = _(this._, _);
          return ((_ = _(this._, _))._ = _._), (_._ = 0), _.add(_);
        }),
        (_.prototype.mul = _.prototype._),
        (_.prototype._ = function (_) {
          if (0 == _) return [];
          var _ = new _(0, 0),
            _ = new _(this._, this._);
          _ = new _(_, 0);
          for (var _ = new _(1, 0); !_._(); ) (_ = _._()), (_ = _._());
          for (; !_._(); )
            0 >= _.cmp(_) && ((_ = _.add(_)), (_ = _.sub(_))),
              (_ = _._()),
              (_ = _._());
          return [_, _];
        }),
        (_.prototype.div = _.prototype._),
        (_.prototype.toString = function () {
          for (var _ = "", _ = this; !_._(); ) {
            var _ = (_ = _._(10))[0];
            (_ = _[1]._ + _), (_ = _);
          }
          return "" == _ && (_ = "0"), _;
        }),
        (_.prototype.toString = _.prototype.toString),
        (_.fromString = _),
        (_.prototype.clone = function () {
          return new _(this._, this._);
        }),
        (_.prototype.clone = _.prototype.clone),
        _("jspb.arith.Int64", _, void 0),
        (_.prototype.add = function (_) {
          return new _(
            (((this._ + _._) & 4294967295) >>> 0) >>> 0,
            ((((this._ + _._) & 4294967295) >>> 0) +
              (4294967296 <= this._ + _._ ? 1 : 0)) >>>
              0,
          );
        }),
        (_.prototype.add = _.prototype.add),
        (_.prototype.sub = function (_) {
          return new _(
            (((this._ - _._) & 4294967295) >>> 0) >>> 0,
            ((((this._ - _._) & 4294967295) >>> 0) -
              (0 > this._ - _._ ? 1 : 0)) >>>
              0,
          );
        }),
        (_.prototype.sub = _.prototype.sub),
        (_.prototype.clone = function () {
          return new _(this._, this._);
        }),
        (_.prototype.clone = _.prototype.clone),
        (_.prototype.toString = function () {
          var _ = !!(2147483648 & this._),
            _ = new _(this._, this._);
          return _ && (_ = new _(0, 0).sub(_)), (_ ? "-" : "") + _.toString();
        }),
        (_.prototype.toString = _.prototype.toString),
        (_.fromString = _),
        _("jspb.BinaryWriter", _, void 0),
        (_.prototype._ = function (_, _, _) {
          _(this, _.subarray(_, _));
        }),
        (_.prototype.writeSerializedMessage = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          null != _ && null != _ && null != _ && this._(_, _, _);
        }),
        (_.prototype.maybeWriteSerializedMessage = _.prototype._),
        (_.prototype.reset = function () {
          (this._ = []), this._.end(), (this._ = 0), (this._ = []);
        }),
        (_.prototype.reset = _.prototype.reset),
        (_.prototype._ = function () {
          _(0 == this._.length);
          for (
            var _ = new Uint8Array(this._ + this._.length()),
              _ = this._,
              _ = _.length,
              _ = 0,
              _ = 0;
            _ < _;
            _++
          ) {
            var _ = _[_];
            _.set(_, _), (_ += _.length);
          }
          return (
            (_ = this._.end()),
            _.set(_, _),
            _((_ += _.length) == _.length),
            (this._ = [_]),
            _
          );
        }),
        (_.prototype.getResultBuffer = _.prototype._),
        (_.prototype._ = function (_) {
          return _(this._(), _);
        }),
        (_.prototype.getResultBase64String = _.prototype._),
        (_.prototype._ = function (_) {
          this._.push(_(this, _));
        }),
        (_.prototype.beginSubMessage = _.prototype._),
        (_.prototype._ = function () {
          _(0 <= this._.length), _(this, this._.pop());
        }),
        (_.prototype.endSubMessage = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          switch (_) {
            case 1:
              this._(_, _);
              break;
            case 2:
              this._(_, _);
              break;
            case 3:
              this._(_, _);
              break;
            case 4:
              this._(_, _);
              break;
            case 5:
              this._(_, _);
              break;
            case 6:
              this._(_, _);
              break;
            case 7:
              this._(_, _);
              break;
            case 8:
              this._(_, _);
              break;
            case 9:
              this._(_, _);
              break;
            case 10:
              _("Group field type not supported in writeAny()");
              break;
            case 11:
              _("Message field type not supported in writeAny()");
              break;
            case 12:
              this._(_, _);
              break;
            case 13:
              this._(_, _);
              break;
            case 14:
              this._(_, _);
              break;
            case 15:
              this._(_, _);
              break;
            case 16:
              this._(_, _);
              break;
            case 17:
              this._(_, _);
              break;
            case 18:
              this._(_, _);
              break;
            case 30:
              this._(_, _);
              break;
            case 31:
              this._(_, _);
              break;
            default:
              _("Invalid field type in writeAny()");
          }
        }),
        (_.prototype.writeAny = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && (_(-2147483648 <= _ && 2147483648 > _), _(this, _, _));
        }),
        (_.prototype.writeInt32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-2147483648 <= (_ = parseInt(_, 10)) && 2147483648 > _),
            _(this, _, _));
        }),
        (_.prototype.writeInt32String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-0x8000000000000000 <= _ && 0x8000000000000000 > _),
            null != _ && (_(this, _, 0), this._._(_)));
        }),
        (_.prototype.writeInt64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && ((_ = _(_)), _(this, _, 0), this._._(_._, _._));
        }),
        (_.prototype.writeInt64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && (_(0 <= _ && 4294967296 > _), _(this, _, _));
        }),
        (_.prototype.writeUint32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(0 <= (_ = parseInt(_, 10)) && 4294967296 > _), _(this, _, _));
        }),
        (_.prototype.writeUint32String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(0 <= _ && 0x10000000000000000 > _),
            null != _ && (_(this, _, 0), this._._(_)));
        }),
        (_.prototype.writeUint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && ((_ = _(_)), _(this, _, 0), this._._(_._, _._));
        }),
        (_.prototype.writeUint64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-2147483648 <= _ && 2147483648 > _),
            null != _ && (_(this, _, 0), this._._(_)));
        }),
        (_.prototype.writeSint32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-0x8000000000000000 <= _ && 0x8000000000000000 > _),
            null != _ && (_(this, _, 0), this._._(_)));
        }),
        (_.prototype.writeSint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && null != _ && (_(this, _, 0), this._._(_));
        }),
        (_.prototype.writeSintHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && null != _ && (_(this, _, 0), this._._(_));
        }),
        (_.prototype.writeSint64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(0 <= _ && 4294967296 > _), _(this, _, 5), this._._(_));
        }),
        (_.prototype.writeFixed32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(0 <= _ && 0x10000000000000000 > _), _(this, _, 1), this._._(_));
        }),
        (_.prototype.writeFixed64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && ((_ = _(_)), _(this, _, 1), this._._(_._, _._));
        }),
        (_.prototype.writeFixed64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-2147483648 <= _ && 2147483648 > _), _(this, _, 5), this._._(_));
        }),
        (_.prototype.writeSfixed32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-0x8000000000000000 <= _ && 0x8000000000000000 > _),
            _(this, _, 1),
            this._._(_));
        }),
        (_.prototype.writeSfixed64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && ((_ = _(_)), _(this, _, 1), this._._(_._, _._));
        }),
        (_.prototype.writeSfixed64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && (_(this, _, 5), this._._(_));
        }),
        (_.prototype.writeFloat = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && (_(this, _, 1), this._._(_));
        }),
        (_.prototype.writeDouble = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_("boolean" == typeof _ || "number" == typeof _),
            _(this, _, 0),
            this._._(_));
        }),
        (_.prototype.writeBool = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            (_(-2147483648 <= _ && 2147483648 > _), _(this, _, 0), this._._(_));
        }),
        (_.prototype.writeEnum = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && ((_ = _(this, _)), this._._(_), _(this, _));
        }),
        (_.prototype.writeString = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ &&
            ((_ = _(_)), _(this, _, 2), this._._(_.length), _(this, _));
        }),
        (_.prototype.writeBytes = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          null != _ && ((_ = _(this, _)), _(_, this), _(this, _));
        }),
        (_.prototype.writeMessage = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          null != _ &&
            (_(this, 1, 3),
            _(this, 2, 0),
            this._._(_),
            (_ = _(this, 3)),
            _(_, this),
            _(this, _),
            _(this, 1, 4));
        }),
        (_.prototype.writeMessageSet = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          null != _ && (_(this, _, 3), _(_, this), _(this, _, 4));
        }),
        (_.prototype.writeGroup = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && (_(8 == _.length), _(this, _, 1), this._._(_));
        }),
        (_.prototype.writeFixedHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          null != _ && (_(8 == _.length), _(this, _, 0), this._._(_));
        }),
        (_.prototype.writeVarintHash64 = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          _(this, _, 1), this._._(_, _);
        }),
        (_.prototype.writeSplitFixed64 = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          _(this, _, 0), this._._(_, _);
        }),
        (_.prototype.writeSplitVarint64 = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          _(this, _, 0);
          var _ = this._;
          _(_, _, function (_, _) {
            _._(_ >>> 0, _ >>> 0);
          });
        }),
        (_.prototype.writeSplitZigzagVarint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) _(this, _, _[_]);
        }),
        (_.prototype.writeRepeatedInt32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedInt32String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              null != _ && (_(this, _, 0), this._._(_));
            }
        }),
        (_.prototype.writeRepeatedInt64 = _.prototype._),
        (_.prototype._ = function (_, _, _, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) this._(_, _(_[_]), _(_[_]));
        }),
        (_.prototype.writeRepeatedSplitFixed64 = _.prototype._),
        (_.prototype._ = function (_, _, _, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) this._(_, _(_[_]), _(_[_]));
        }),
        (_.prototype.writeRepeatedSplitVarint64 = _.prototype._),
        (_.prototype._ = function (_, _, _, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) this._(_, _(_[_]), _(_[_]));
        }),
        (_.prototype.writeRepeatedSplitZigzagVarint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedInt64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) _(this, _, _[_]);
        }),
        (_.prototype.writeRepeatedUint32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedUint32String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              null != _ && (_(this, _, 0), this._._(_));
            }
        }),
        (_.prototype.writeRepeatedUint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedUint64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              null != _ && (_(this, _, 0), this._._(_));
            }
        }),
        (_.prototype.writeRepeatedSint32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              null != _ && (_(this, _, 0), this._._(_));
            }
        }),
        (_.prototype.writeRepeatedSint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              null != _ && (_(this, _, 0), this._._(_));
            }
        }),
        (_.prototype.writeRepeatedSint64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              null != _ && (_(this, _, 0), this._._(_));
            }
        }),
        (_.prototype.writeRepeatedSintHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedFixed32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedFixed64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedFixed64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedSfixed32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedSfixed64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedSfixed64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedFloat = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedDouble = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedBool = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedEnum = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedString = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedBytes = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++) {
              var _ = _(this, _);
              _(_[_], this), _(this, _);
            }
        }),
        (_.prototype.writeRepeatedMessage = _.prototype._),
        (_.prototype._ = function (_, _, _) {
          if (null != _)
            for (var _ = 0; _ < _.length; _++)
              _(this, _, 3), _(_[_], this), _(this, _, 4);
        }),
        (_.prototype.writeRepeatedGroup = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedFixedHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _) for (var _ = 0; _ < _.length; _++) this._(_, _[_]);
        }),
        (_.prototype.writeRepeatedVarintHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedInt32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(parseInt(_[_], 10));
            _(this, _);
          }
        }),
        (_.prototype.writePackedInt32String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedInt64 = _.prototype._),
        (_.prototype._ = function (_, _, _, _) {
          if (null != _) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_(_[_]), _(_[_]));
            _(this, _);
          }
        }),
        (_.prototype.writePackedSplitFixed64 = _.prototype._),
        (_.prototype._ = function (_, _, _, _) {
          if (null != _) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_(_[_]), _(_[_]));
            _(this, _);
          }
        }),
        (_.prototype.writePackedSplitVarint64 = _.prototype._),
        (_.prototype._ = function (_, _, _, _) {
          if (null != _) {
            _ = _(this, _);
            for (var _ = this._, _ = 0; _ < _.length; _++)
              _(_(_[_]), _(_[_]), function (_, _) {
                _._(_ >>> 0, _ >>> 0);
              });
            _(this, _);
          }
        }),
        (_.prototype.writePackedSplitZigzagVarint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) {
              var _ = _(_[_]);
              this._._(_._, _._);
            }
            _(this, _);
          }
        }),
        (_.prototype.writePackedInt64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedUint32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(parseInt(_[_], 10));
            _(this, _);
          }
        }),
        (_.prototype.writePackedUint32String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedUint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) {
              var _ = _(_[_]);
              this._._(_._, _._);
            }
            _(this, _);
          }
        }),
        (_.prototype.writePackedUint64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedSint32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedSint64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_(_[_]));
            _(this, _);
          }
        }),
        (_.prototype.writePackedSint64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedSintHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(4 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedFixed32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(8 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedFixed64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(8 * _.length), _ = 0;
              _ < _.length;
              _++
            ) {
              var _ = _(_[_]);
              this._._(_._, _._);
            }
        }),
        (_.prototype.writePackedFixed64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(4 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedSfixed32 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(8 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedSfixed64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(8 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedSfixed64String = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(4 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedFloat = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(8 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedDouble = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (_(this, _, 2), this._._(_.length), _ = 0; _ < _.length; _++)
              this._._(_[_]);
        }),
        (_.prototype.writePackedBool = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedEnum = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length)
            for (
              _(this, _, 2), this._._(8 * _.length), _ = 0;
              _ < _.length;
              _++
            )
              this._._(_[_]);
        }),
        (_.prototype.writePackedFixedHash64 = _.prototype._),
        (_.prototype._ = function (_, _) {
          if (null != _ && _.length) {
            _ = _(this, _);
            for (var _ = 0; _ < _.length; _++) this._._(_[_]);
            _(this, _);
          }
        }),
        (_.prototype.writePackedVarintHash64 = _.prototype._),
        "object" == typeof _ &&
          ((_.debug = _),
          (_.Map = _),
          (_.Message = _),
          (_.BinaryReader = _),
          (_.BinaryWriter = _),
          (_.ExtensionFieldInfo = _),
          (_.ExtensionFieldBinaryInfo = _),
          (_.exportSymbol = function (_, _, _) {
            _(_, _, _);
          }),
          (_.inherits = function (_, _) {
            function _() {}
            (_.prototype = _.prototype),
              (_.prototype = new _()),
              (_.prototype.constructor = _);
          }),
          (_.object = {
            extend: function (_, _) {
              for (var _, _, _ = 1; _ < arguments.length; _++) {
                for (_ in (_ = arguments[_])) _[_] = _[_];
                for (var _ = 0; _ < _.length; _++)
                  (_ = _[_]),
                    Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
              }
            },
          }),
          (_.typeOf = _));
    },
  },
]);
