self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_flex_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-flex-panel */ "./node_modules/react-flex-panel/lib/index.js");
/* harmony import */ var react_flex_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_flex_panel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _containers_Greetings_Greetings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../containers/Greetings/Greetings */ "./src/containers/Greetings/Greetings.jsx");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "/Users/hankbu/code/self/ws-viewer/src/pages/Popup/Popup.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



 // import { ObjectInspector } from 'react-inspector';


 // const Popup = (handlers) => {
//   const [uniqueId, setUniqueId] = useState(0);
//   const [sendList, setSendList] = useState([]);
//   const [resList, setResList] = useState([]);
//   /**
//    * Function
//    */
//   const handleSendReceive = ({ type, time, result }) => {
//     const { response } = result;
//     let { opcode, payloadData } = response;
//     if (opcode === 1 || opcode === 2) {
//       setUniqueId(uniqueId + 1);
//       // JSON
//       if (opcode === 1) {
//         try {
//           payloadData = JSON.parse(payloadData);
//         } catch (err) {
//           payloadData = undefined;
//           console.log(err);
//         }
//       }
//     }
//     console.log(type, payloadData);
//   };
//   const doGet = (params) => {
//     console.log(params);
//   };
//   // handlers['Network.webSocketFrameSent'] = doGet;
//   // handlers['Network.webSocketFrameReceived'] = doGet;
//   // Object.preventExtensions(handlers);
//   return (
//     <div className="App">
//       <header className="App-header">asdfasf</header>
//       <Greetings />
//     </div>
//   );
// };
// export default Popup;

var Popup = /*#__PURE__*/function (_React$Component) {
  (0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(Popup, _React$Component);

  var _super = (0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.default)(Popup);

  function Popup(props) {
    var _this;

    (0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Popup);

    _this = _super.call(this, props);
    _this._uniqueId = 0;
    _this.state = {
      frames: [],
      activeId: null,
      capturing: false
    };
    props.handlers['Network.webSocketFrameReceived'] = _this.webSocketFrameReceived.bind((0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this));
    props.handlers['Network.webSocketFrameSent'] = _this.webSocketFrameSent.bind((0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this));
    return _this;
  }

  (0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Popup, [{
    key: "webSocketFrameReceived",
    value: function webSocketFrameReceived(_ref) {
      var timestamp = _ref.timestamp,
          response = _ref.response;
      this.addFrame('incoming', timestamp, response);
    }
  }, {
    key: "webSocketFrameSent",
    value: function webSocketFrameSent(_ref2) {
      var timestamp = _ref2.timestamp,
          response = _ref2.response;
      this.addFrame('outgoing', timestamp, response);
    }
  }, {
    key: "addFrame",
    value: function addFrame(type, timestamp, response) {
      var opcode = response.opcode,
          payloadData = response.payloadData;
      var rtnData = payloadData;

      if (opcode === 1 || opcode === 2) {
        if (opcode === 1) {
          try {// rtnData = JSON.parse(rtnData);
          } catch (err) {
            console.err(err);
          }
        }
      }

      var frame = {
        id: ++this._uniqueId,
        type: type,
        rtnData: rtnData
      };
      this.setState(function (state) {
        var frames = state.frames;
        return (0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
          frames: [].concat((0,_Users_hankbu_code_self_ws_viewer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(frames), [frame])
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          frames = _this$state.frames,
          activeId = _this$state.activeId;
      console.log(frames);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 7
        }
      }, frames.map(function (item) {
        var id = item.id,
            rtnData = item.rtnData;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
          key: id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 18
          }
        }, "1111", rtnData); // return <ObjectInspector data={item.rtnData} />;
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popup, "Popup", "/Users/hankbu/code/self/ws-viewer/src/pages/Popup/Popup.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc08efa181a3a854165a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.689a1a25a4517a0ca7f6.hot-update.js.map