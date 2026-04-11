var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return {
            get() {
              let _ = _.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, _) ||
                  Object.defineProperty(this, _, {
                    value: _,
                  }),
                _
              );
            },
          };
        }
        class _ extends _.Component {
          constructor(_) {
            super(_);
          }
          simpleValueToString(_) {
            if ("object" == typeof _) {
              let _ = _,
                _ = "";
              for (let _ of _) "" != _ && (_ += ", "), (_ += _.toString());
              return "[ " + _ + " ]";
            }
            return _;
          }
          renderValue(_) {
            switch (_.type) {
              case "k_unStringPropertyTag":
                let _ = _.value;
                return _.createElement(
                  "div",
                  {
                    className: "PropertyValueString",
                  },
                  '"',
                  _.slice(0, 80),
                  _.length > 80 && "...",
                  '"',
                );
              case "k_unFloatPropertyTag":
              case "k_unInt32PropertyTag":
              case "k_unUint64PropertyTag":
                return _.createElement(
                  "div",
                  {
                    className: "PropertyValueNumber",
                  },
                  this.simpleValueToString(_.value),
                );
              case "k_unBoolPropertyTag":
                return _.createElement(
                  "div",
                  {
                    className: "PropertyValueNumber",
                  },
                  _.value ? "TRUE" : "FALSE",
                );
              default:
                return _.createElement(
                  "div",
                  {
                    className: "PropertyValueUnsupported",
                  },
                  "...",
                );
            }
          }
          renderPath(_, _) {
            return _.createElement(
              "div",
              {
                className: "PropertyEntry",
                key: _ + _.path,
              },
              _.createElement(
                "div",
                {
                  className: "PropertyPathName",
                },
                _.path,
              ),
              this.renderValue(_),
            );
          }
          renderEnum(_, _) {
            return _.createElement(
              "div",
              {
                className: "PropertyEntry",
                key: _ + _.name,
              },
              _.createElement(
                "div",
                {
                  className: "PropertyEnumName",
                },
                _.name.slice(5),
              ),
              this.renderValue(_),
            );
          }
          renderContainer(_) {
            let _ = _.type;
            switch (_.type) {
              case "tracked_device":
                _ = "Tracked Device " + _.tracked_device_index;
                break;
              case "tracked_device_override":
                _ = "Tracked Device Override " + _.tracked_device_index;
                break;
              case "driver":
                _ = "Driver " + _.driver_name;
                break;
              case "resource_map":
                _ = "Resource Map " + _.resource_map_key;
                break;
              case "path_alias_info":
                _ = "Path Aliases ";
                break;
              case "root_path":
                _ = "Root Path ";
                break;
              case "client_connection":
                _ = "Client " + _.app_key + " - " + _.exe_name;
                break;
              case "iobuffer":
                _ = "IO Buffer ";
            }
            let _ = [
              _.createElement(
                "div",
                {
                  className: "SectionHeader",
                  key: "header",
                },
                _,
                _.createElement(
                  "span",
                  {
                    className: "ContainerHandle",
                  },
                  "(",
                  _.handle,
                  ")",
                ),
              ),
            ];
            if (_.contents && _.contents.entries)
              for (let _ of _.contents.entries)
                _.hasOwnProperty("path")
                  ? __webpack_require__.push(this.renderPath(_, _.handle))
                  : __webpack_require__.push(this.renderEnum(_, _.handle));
            return _;
          }
          render() {
            let _ = [];
            for (let _ of this.props.rProperties)
              _ = _.concat(this.renderContainer(_));
            return _.createElement(
              "div",
              {
                className: "Section",
              },
              _,
            );
          }
        }
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.m_domRunSelection = null),
              (this.m_bScrollOnNextUpdate = !1);
            let _ = null,
              _ = null;
            if (this.props.rLogs && this.props.rLogs.length > 0) {
              let _ = this.props.rLogs[0];
              (_ = _.sName),
                _.rRuns &&
                  _.rRuns.length > 0 &&
                  (_ = _.rRuns[_.rRuns.length - 1].sDate);
            }
            (this.state = {
              sCurrentLog: _,
              sCurrentRunDate: _,
            }),
              (this.m_domRunSelection = _.createRef());
          }
          findLog(_) {
            for (let _ of this.props.rLogs) if (_.sName == _) return _;
            return null;
          }
          onClickLog(_) {
            let _ = this.findLog(_);
            _ && _.rRuns && _.rRuns.length > 0
              ? (this.setState({
                  sCurrentLog: _,
                  sCurrentRunDate: _.rRuns[_.rRuns.length - 1].sDate,
                }),
                (this.m_bScrollOnNextUpdate = !0))
              : this.setState({
                  sCurrentLog: _,
                  sCurrentRunDate: null,
                });
          }
          onClickLogRun(_) {
            this.setState({
              sCurrentRunDate: _,
            });
          }
          scrollSelectionToView() {
            this.m_domRunSelection.current &&
              this.m_domRunSelection.current.scrollIntoView();
          }
          componentDidMount() {
            this.scrollSelectionToView();
          }
          componentDidUpdate() {
            this.m_bScrollOnNextUpdate &&
              ((this.m_bScrollOnNextUpdate = !1), this.scrollSelectionToView());
          }
          render() {
            let _ = null,
              _ = null,
              _ = [];
            for (let _ of this.props.rLogs) {
              let _ = "LogFileName";
              _.sName == this.state.sCurrentLog &&
                ((_ += " Selected"), (_ = _)),
                __webpack_require__.push(
                  _.createElement(
                    "div",
                    {
                      className: _,
                      onClick: () => {
                        this.onClickLog(_.sName);
                      },
                    },
                    _.sName,
                  ),
                );
            }
            let _ = [];
            if (_)
              for (let _ of _.rRuns) {
                let _ = "LogRunDate",
                  _ = null;
                _.sDate == this.state.sCurrentRunDate &&
                  ((_ += " Selected"), (_ = _), (_ = this.m_domRunSelection)),
                  _.push(
                    _.createElement(
                      "div",
                      {
                        className: _,
                        ref: _,
                        onClick: () => {
                          this.onClickLogRun(_.sDate);
                        },
                      },
                      _.sDate,
                    ),
                  );
              }
            return _.createElement(
              "div",
              {
                className: "FlexColumn",
              },
              _.createElement(
                "div",
                {
                  className: "FlexRow",
                },
                _.createElement(
                  "div",
                  {
                    className: "LogFileList",
                  },
                  _,
                ),
                _.createElement(
                  "div",
                  {
                    className: "LogRunList",
                  },
                  _,
                ),
              ),
              _.createElement(
                "div",
                {
                  className: "LogContent",
                },
                _ ? _.rLines.join("\n") : null,
              ),
            );
          }
        }
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                bShowDetails: !1,
              });
          }
          onToggleDetails() {
            this.setState({
              bShowDetails: !this.state.bShowDetails,
            });
          }
          render() {
            let _ = [];
            for (let _ in this.props.oDetails)
              _.push(
                _.createElement(
                  "div",
                  {
                    className: "SectionRow",
                    key: _,
                  },
                  _.createElement(
                    "div",
                    {
                      className: "FieldName",
                    },
                    _,
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "FieldValue",
                    },
                    this.props.oDetails[_],
                  ),
                ),
              );
            this.state.bShowDetails &&
              _.push(
                _.createElement(
                  "div",
                  {
                    className: "SectionAdditionalDetails",
                  },
                  " ",
                  this.props.rAdditionalDetails.join("\n"),
                ),
              );
            let _ = this.state.bShowDetails ? "Hide Details" : "Show Details";
            return _.createElement(
              "div",
              {
                className: "Section",
              },
              this.props.sHeader &&
                _.createElement(
                  "div",
                  {
                    className: "SectionHeader",
                  },
                  this.props.sHeader,
                  this.props.rAdditionalDetails &&
                    _.createElement(
                      "span",
                      {
                        className: "ShowHideLink",
                        onClick: this.onToggleDetails,
                      },
                      _,
                    ),
                ),
              _,
            );
          }
        }
        (0, _._)([_], _.prototype, "onToggleDetails", null);
        class _ extends _.Component {
          constructor(_) {
            super(_);
          }
          renderObject(_) {
            let _ = [];
            for (let _ in _) {
              let _ = _[_];
              _.push(
                _.createElement(
                  "div",
                  {
                    className: "JsonObjectProperty",
                    key: _,
                  },
                  this.renderNode(_),
                  " : ",
                  this.renderNode(_),
                ),
              );
            }
            return _.createElement(
              "div",
              {
                className: "JsonObject",
              },
              "{",
              _,
              " ",
              "}",
            );
          }
          renderNode(_) {
            switch (typeof _) {
              case "number":
                return _.createElement(
                  "span",
                  {
                    className: "JsonNumber",
                  },
                  _,
                );
              case "string":
                return _.createElement(
                  "span",
                  {
                    className: "JsonString",
                  },
                  '"',
                  _,
                  '"',
                );
              case "boolean":
                return _.createElement(
                  "span",
                  {
                    className: "JsonNumber",
                  },
                  _ ? "true" : "false",
                );
              case "object":
                return this.renderObject(_);
              default:
                return _.createElement(
                  "div",
                  {
                    className: "JsonUnknown",
                  },
                  "Unknown Json Value: ",
                  _,
                );
            }
          }
          render() {
            return _.createElement(
              "div",
              {
                className: "Section",
              },
              _.createElement(
                "div",
                {
                  className: "SectionHeader",
                },
                this.props.sHeader,
              ),
              this.renderNode(this.props.oContent),
            );
          }
        }
        !(function (_) {
          (_[(_.Main = 0)] = "Main"),
            (_[(_.Devices = 1)] = "Devices"),
            (_[(_.USB = 2)] = "USB"),
            (_[(_.Configuration = 3)] = "Configuration"),
            (_[(_.Chaperone = 4)] = "Chaperone"),
            (_[(_.Lighthouse = 5)] = "Lighthouse"),
            (_[(_.Properties = 6)] = "Properties"),
            (_[(_.Logs = 7)] = "Logs");
        })(_ || (_ = {}));
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.fileReader = null),
              (this.state = {
                eViewerTab: _.Main,
              });
          }
          onClickTab(_) {
            this.setState({
              eViewerTab: _,
            });
          }
          renderTabButton(_) {
            let _ = "TabButton";
            return (
              this.state.eViewerTab == _ && (_ += " TabSelected"),
              _.createElement(
                "div",
                {
                  className: _,
                  onClick: () => {
                    this.onClickTab(_);
                  },
                },
                _[_],
              )
            );
          }
          renderTabButtons() {
            return _.createElement(
              "div",
              {
                className: "TabButtonRow",
              },
              this.renderTabButton(_.Main),
              this.renderTabButton(_.Devices),
              this.renderTabButton(_.USB),
              this.renderTabButton(_.Configuration),
              (this.props.report.oChaperone ||
                this.props.report.oChaperoneFile) &&
                this.renderTabButton(_.Chaperone),
              this.props.report.oLighthouseDB &&
                this.renderTabButton(_.Lighthouse),
              this.props.report.oProperties &&
                this.renderTabButton(_.Properties),
              this.renderTabButton(_.Logs),
            );
          }
          renderMainTab() {
            return [
              _.createElement(
                "div",
                {
                  className: "Label",
                  key: "date",
                },
                "System report created on ",
                new Date(this.props.report.reportCreateDate).toString(),
              ),
              _.createElement(_, {
                key: "general",
                sHeader: "General",
                oDetails: this.props.report.oReport,
              }),
              _.createElement(_, {
                key: "displays",
                sHeader: "Displays",
                oDetails: this.props.report.oDisplays,
              }),
            ];
          }
          renderDevicesTab() {
            let _ = [];
            for (let _ of this.props.report.rDevices)
              _.push(
                _.createElement(_, {
                  sHeader: _.sName,
                  oDetails: _.oDetails,
                  rAdditionalDetails: _.rAdditionalLines,
                }),
              );
            return _;
          }
          renderUsbTab() {
            return [
              _.createElement(
                "div",
                {
                  className: "SectionAdditionalDetails",
                  key: "1",
                },
                this.props.report.rUSB.join("\n"),
              ),
            ];
          }
          renderConfiguration() {
            return [
              _.createElement(_, {
                key: "config",
                sHeader: "Configuration",
                oDetails: this.props.report.oConfiguration,
              }),
              _.createElement(_, {
                key: "configfile",
                sHeader: "steamvr.vrsettings",
                oContent: this.props.report.oConfigFile,
              }),
            ];
          }
          renderChaperone() {
            return [
              _.createElement(_, {
                key: "config",
                sHeader: "Chaperone",
                oDetails: this.props.report.oChaperone,
              }),
              _.createElement(_, {
                key: "configfile",
                sHeader: "chaperone_info.vrchap",
                oContent: this.props.report.oChaperoneFile,
              }),
            ];
          }
          renderLighthouse() {
            return [
              _.createElement(_, {
                key: "lighthouseDB",
                sHeader: "lighthousedb.json",
                oContent: this.props.report.oLighthouseDB,
              }),
            ];
          }
          renderProperties() {
            return [
              _.createElement(_, {
                key: "properties",
                rProperties: this.props.report.oProperties,
              }),
            ];
          }
          renderLogs() {
            return [
              _.createElement(_, {
                key: "logs",
                rLogs: this.props.report.rLogs,
              }),
            ];
          }
          renderViewer() {
            switch (this.state.eViewerTab) {
              default:
              case _.Main:
                return this.renderMainTab();
              case _.Devices:
                return this.renderDevicesTab();
              case _.USB:
                return this.renderUsbTab();
              case _.Configuration:
                return this.renderConfiguration();
              case _.Chaperone:
                return this.renderChaperone();
              case _.Lighthouse:
                return this.renderLighthouse();
              case _.Properties:
                return this.renderProperties();
              case _.Logs:
                return this.renderLogs();
            }
          }
          render() {
            return _.createElement(
              "div",
              {
                className: "FullPage FlexColumn",
              },
              this.renderTabButtons(),
              this.state.eViewerTab == _.Logs
                ? this.renderViewer()
                : _.createElement(
                    "div",
                    {
                      className: "ContentArea",
                    },
                    this.renderViewer(),
                  ),
            );
          }
        }
        (0, _._)([_], _.prototype, "onClickTab", null);
        class _ {
          constructor() {
            (this.report = {}), (this.sError = null);
          }
          monthFromString(_) {
            switch (_) {
              default:
              case "Jan":
                return 0;
              case "Feb":
                return 1;
              case "Mar":
                return 2;
              case "Apr":
                return 3;
              case "May":
                return 4;
              case "Jun":
                return 5;
              case "Jul":
                return 6;
              case "Aug":
                return 7;
              case "Sep":
                return 8;
              case "Oct":
                return 9;
              case "Nov":
                return 10;
              case "Dec":
                return 11;
            }
          }
          dateFromComponents(_, _, _, _) {
            let _ = __webpack_require__.split(":"),
              _ = parseInt(_[0], 10),
              _ = parseInt(_[1], 10),
              _ = parseInt(_[2], 10);
            return Date.UTC(_, this.monthFromString(_), _, _, _, _);
          }
          setError(_) {
            this.sError = _;
          }
          getError() {
            return this.sError;
          }
          getReport() {
            return this.report;
          }
          parseSystemReport(_) {
            let _ = "\n";
            -1 != _.indexOf("\r\n") && (_ = "\r\n");
            let _ = _.split(_);
            return (
              this.parseHeader(_) &&
              this.parseReport(_) &&
              this.parseDisplays(_) &&
              this.parseDevices(_) &&
              this.parseUSB(_) &&
              this.parseLogs(_) &&
              this.parseConfiguration(_) &&
              this.parseConfigFile(_) &&
              this.parseChaperone(_) &&
              this.parseChaperoneFile(_) &&
              this.parseLighthouseDB(_)
            );
          }
          parseHeader(_) {
            if ((this.consumeBlankLines(_), 0 == _.length))
              return this.setError("Missing header line"), !1;
            let _ = _.shift().split(" ");
            return 9 != _.length
              ? (this.setError("Malformed header line"), !1)
              : ((this.report.reportCreateDate = this.dateFromComponents(
                  _[5],
                  parseInt(_[6]),
                  _[7],
                  parseInt(_[8]),
                )),
                !0);
          }
          consumeBlankLines(_) {
            for (; _.length > 0 && "" == _[0]; ) _.shift();
          }
          extractSection(_, _, _) {
            this.consumeBlankLines(_);
            let _ = "<" + _ + ">",
              _ = "</" + _ + ">";
            if (0 == _.length)
              return this.setError("Not enough lines for " + _), [];
            if (_[0] != _) return this.setError("Missing start of " + _), [];
            _.shift();
            let _ = [];
            for (; _.length > 0 && _[0] != _; ) {
              let _ = _.shift();
              (_ || _) && _.push(_);
            }
            return _.length > 0
              ? (_.shift(), _)
              : (this.setError("Missing end of " + _), []);
          }
          convertColonTabSectionToObject(_) {
            let _ = {};
            for (let _ of _) {
              let _ = __webpack_require__.split(":\t");
              1 == _.length && (_ = __webpack_require__.split(": \t")),
                2 == _.length && (_[_[0]] = _[1]);
            }
            return _;
          }
          parseReport(_) {
            let _ = this.extractSection(_, "Report", !1);
            return (
              0 != _.length &&
              ((this.report.oReport = this.convertColonTabSectionToObject(_)),
              !0)
            );
          }
          parseDisplays(_) {
            let _ = this.extractSection(_, "Displays", !1);
            return (
              0 != _.length &&
              ((this.report.oDisplays = this.convertColonTabSectionToObject(_)),
              !0)
            );
          }
          parseDevices(_) {
            let _ = this.extractSection(_, "Devices", !0);
            if (0 == _.length) return !1;
            for (this.report.rDevices = []; _.length > 0; ) {
              let _ = _.shift(),
                _ = parseInt(_.split(" ")[1]),
                _ = "Device" + _ + "_Additional",
                _ = "<" + _ + ">",
                _ = "</" + _ + ">",
                _ = null,
                _ = null,
                _ = 0;
              for (
                ;
                _ < _.length &&
                (_[_] == _ ? (_ = _) : _[_] == _ && (_ = _),
                "" != _[_] || (_ && !_));
                _++
              );
              if (0 == _) continue;
              if (null != _ && null == _)
                return (
                  this.setError("Mismatched additional info on device " + _), !1
                );
              let _ = [],
                _ = [];
              _
                ? ((_ = _.slice(0, _ - 1)), (_ = _.slice(_ + 1, _ - 1)))
                : (_ = _.slice(0, _ - 1)),
                (_ = _.slice(_ + 1));
              let _ = {
                sName: _,
                oDetails: this.convertColonTabSectionToObject(_),
                rAdditionalLines: _,
              };
              this.report.rDevices.push(_);
            }
            return !0;
          }
          parseUSB(_) {
            return (
              (this.report.rUSB = this.extractSection(_, "USB", !0)),
              this.report.rUSB && this.report.rUSB.length > 0
            );
          }
          extractRuns(_, _) {
            let _ = [],
              _ = -1;
            for (let _ = 0; _ < _.length; _++)
              if (_ > _ + 1) {
                let _ = _.exec(_[_]);
                _ &&
                  (__webpack_require__.push({
                    sDate: _[1],
                    nStartLine: _,
                  }),
                  (_ = _));
              }
            return _;
          }
          extractLogFile(_) {
            let _ = new RegExp("^=== (.*) - (.*)$"),
              _ = new RegExp("^--- (.*) - (.*)$"),
              _ = new RegExp("(.*) is not available.");
            if ((this.consumeBlankLines(_), 0 == _.length)) return null;
            let _ = _.shift();
            if (_.test(_)) return null;
            let _ = _.exec(_);
            if (!_ || 3 != _.length)
              return (
                this.setError("malformed log start line === <file> - <dir>"),
                null
              );
            let _ = {
                sName: _[1],
                sDir: _[2],
                rRuns: [],
              },
              _ = [];
            for (; _.length > 0; ) {
              let _ = _.shift(),
                _ = __webpack_require__.exec(_);
              if (_ && 3 == _.length) break;
              _.push(_);
            }
            if ("properties.json" == _.sName)
              return (this.report.oProperties = JSON.parse(_.join("\n"))), null;
            let _ = [
                new RegExp("^(.{10,30}) - (\\/\\/=*)$"),
                new RegExp("^(.{10,30}) - (=+)$"),
              ],
              _ = null;
            for (let _ of _)
              if (((_ = this.extractRuns(_, _)), _ && _.length)) break;
            (_ && _.length) ||
              (_ = [
                {
                  sDate: "FULL",
                  nStartLine: 1,
                },
              ]);
            for (let _ = 0; _ < _.length; _++) {
              let _ = _.length - 1;
              _ < _.length - 1 && (_ = _[_ + 1].nStartLine - 1),
                _.rRuns.push({
                  sDate: _[_].sDate,
                  rLines: _.slice(_[_].nStartLine, _),
                });
            }
            return _;
          }
          parseLogs(_) {
            let _ = this.extractSection(_, "Logs", !0);
            if (!_) return !1;
            for (this.report.rLogs = []; _.length > 0; ) {
              let _ = this.extractLogFile(_);
              _ && this.report.rLogs.push(_);
            }
            return !0;
          }
          parseConfiguration(_) {
            let _ = this.extractSection(_, "Configuration", !0);
            return (
              !!_ &&
              ((this.report.oConfiguration =
                this.convertColonTabSectionToObject(_)),
              !0)
            );
          }
          parseConfigFile(_) {
            let _ = this.extractSection(_, "ConfigFile", !0);
            return (this.report.oConfigFile = JSON.parse(_.join("\n"))), !0;
          }
          parseChaperone(_) {
            let _ = this.extractSection(_, "Chaperone", !0);
            return (
              _ &&
                (this.report.oChaperone =
                  this.convertColonTabSectionToObject(_)),
              !0
            );
          }
          parseChaperoneFile(_) {
            let _ = this.extractSection(_, "ChaperoneFile", !0);
            return (this.report.oChaperoneFile = JSON.parse(_.join("\n"))), !0;
          }
          parseLighthouseDB(_) {
            let _ = this.extractSection(_, "LighthouseDB", !0);
            return (
              _ && (this.report.oLighthouseDB = JSON.parse(_.join("\n"))), !0
            );
          }
        }
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        (0, __webpack_require__("chunkid").configure)({
          enforceActions: "never",
        }),
          (function (_) {
            (_[(_.WaitingForReport = 0)] = "WaitingForReport"),
              (_[(_.Parsing = 1)] = "Parsing"),
              (_[(_.Error = 2)] = "Error"),
              (_[(_.Viewing = 3)] = "Viewing");
          })(_ || (_ = {}));
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.fileReader = null),
              (this.state = {
                bDragOver: !1,
                ePageState: _.WaitingForReport,
              });
          }
          handleDragOver() {
            this.setState({
              bDragOver: !0,
            });
          }
          handleDragLeave() {
            this.setState({
              bDragOver: !1,
            });
          }
          handleDrop(_) {
            if (
              (_.preventDefault(),
              _.stopPropagation(),
              -1 != _.dataTransfer.types.indexOf("Files"))
            )
              (this.fileReader = new FileReader()),
                (this.fileReader.onload = (_) => {
                  this.readReportFromString(this.fileReader.result);
                }),
                this.fileReader.readAsText(_.dataTransfer.files[0]);
            else if (_.dataTransfer.types.indexOf("text/uri-list")) {
              let _ = _.dataTransfer.getData("text/uri-list");
              console.log("Loading from ", _),
                _()
                  .get(_)
                  .then((_) => {
                    this.readReportFromString(_.data);
                  })
                  .catch((_) => {
                    this.setState({
                      ePageState: _.Error,
                      sError: _.message,
                    });
                  });
            }
          }
          readReportFromString(_) {
            this.setState({
              ePageState: _.Parsing,
              sError: null,
              report: null,
            }),
              setTimeout(() => {
                let _ = new _();
                _.parseSystemReport(_)
                  ? this.setState({
                      ePageState: _.Viewing,
                      sError: null,
                      report: _.getReport(),
                    })
                  : this.setState({
                      ePageState: _.Error,
                      sError: _.getError(),
                      report: null,
                    });
              }, 10);
          }
          componentDidMount() {
            window.addEventListener("dragover", (_) => {
              _.preventDefault(), _.stopPropagation();
            }),
              window.addEventListener("drop", (_) => {
                _.preventDefault(), _.stopPropagation();
              });
          }
          renderSystemReport() {
            switch (this.state.ePageState) {
              default:
              case _.WaitingForReport:
                return _.createElement(
                  "div",
                  {
                    className: "BigMessage",
                  },
                  this.state.bDragOver
                    ? "Drop it!"
                    : "Drop a system report file here to view it.",
                );
              case _.Error:
                return _.createElement(
                  "div",
                  {
                    className: "BigMessage",
                  },
                  "Error parsing system report: ",
                  this.state.sError,
                );
              case _.Parsing:
                return _.createElement(
                  "div",
                  {
                    className: "BigMessage",
                  },
                  "Parsing system report.",
                );
              case _.Viewing:
                return _.createElement(_, {
                  report: this.state.report,
                });
            }
          }
          render() {
            return _.createElement(
              "div",
              {
                className: "FullPage",
                onDragOver: this.handleDragOver,
                onDragLeave: this.handleDragLeave,
                onDrop: this.handleDrop,
              },
              this.renderSystemReport(),
            );
          }
        }
        (0, _._)([_], _.prototype, "handleDragOver", null),
          (0, _._)([_], _.prototype, "handleDragLeave", null),
          (0, _._)([_], _.prototype, "handleDrop", null),
          _._(document.getElementById("root")).render(_.createElement(_, null));
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_](_, _.exports, _), _.exports;
  }
  (_._ = _),
    (_ = []),
    (_._ = (_, _, _, _) => {
      if (!_) {
        var _ = 1 / 0;
        for (_ = 0; _ < _.length; _++) {
          for (var [_, _, _] = _[_], _ = !0, _ = 0; _ < _.length; _++)
            (!1 & _ || _ >= _) && Object.keys(_._).every((_) => _._[_](_[_]))
              ? __webpack_require__.splice(_--, 1)
              : ((_ = !1), _ < _ && (_ = _));
          if (_) {
            _.splice(_--, 1);
            var _ = _();
            void 0 !== _ && (_ = _);
          }
        }
        return _;
      }
      _ = _ || 0;
      for (var _ = _.length; _ > 0 && _[_ - 1][2] > _; _--) _[_] = _[_ - 1];
      _[_] = [_, _, _];
    }),
    (_._ = (_) => {
      var _ = _ && _.__esModule ? () => _.default : () => _;
      return (
        _._(_, {
          _: _,
        }),
        _
      );
    }),
    (_._ = (_, _) => {
      for (var _ in _)
        _._(_, _) &&
          !_._(_, _) &&
          Object.defineProperty(_, _, {
            enumerable: !0,
            get: _[_],
          });
    }),
    (_._ = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_._ = (_, _) => Object.prototype.hasOwnProperty.call(_, _)),
    (() => {
      var _ = {
        156: 0,
        527: 0,
      };
      _._._ = (_) => 0 === _[_];
      var _ = (_, _) => {
          var _,
            _,
            [_, _, _] = _,
            _ = 0;
          if (_.some((_) => 0 !== _[_])) {
            for (_ in _) _._(_, _) && (_._[_] = _[_]);
            if (_) var _ = _(_);
          }
          for (_ && _(_); _ < _.length; _++)
            (_ = _[_]), _._(_, _) && _[_] && _[_][0](), (_[_] = 0);
          return _._(_);
        },
        _ = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      __webpack_require__.forEach(_.bind(null, 0)),
        (_.push = _.bind(null, _.push.bind(_)));
    })();
  var _ = _._(void 0, [967, 526, 527], () => _(8195));
  _ = _._(_);
})();
