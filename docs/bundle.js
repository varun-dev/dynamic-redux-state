/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/layout-wrapper */ "./src/utils/layout-wrapper.js");
/* harmony import */ var _utils_redux_store_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/redux/store-utils */ "./src/utils/redux/store-utils.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
  store: Object(_utils_redux_store_utils__WEBPACK_IMPORTED_MODULE_3__["createStore"])()
}), document.getElementById('wrapper') // eslint-disable-line no-undef
);

/***/ }),

/***/ "./src/layout.config.js":
/*!******************************!*\
  !*** ./src/layout.config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  content: [{
    type: 'row',
    content: [{
      title: 'Counter',
      type: 'react-component',
      component: 'Panel',
      props: {
        panelName: 'Counter'
      }
    }]
  }]
});

/***/ }),

/***/ "./src/panels/counter/PanelCounter.js":
/*!********************************************!*\
  !*** ./src/panels/counter/PanelCounter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PanelCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ButtonIncrement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ButtonIncrement */ "./src/panels/counter/components/ButtonIncrement.js");
/* harmony import */ var _components_ButtonDecrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ButtonDecrement */ "./src/panels/counter/components/ButtonDecrement.js");
/* harmony import */ var _components_LabelCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LabelCounter */ "./src/panels/counter/components/LabelCounter.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/panels/counter/reducers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var PanelCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PanelCounter, _React$Component);

  function PanelCounter(props, _ref) {
    var _this;

    var store = _ref.store;

    _classCallCheck(this, PanelCounter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelCounter).call(this, props));
    store.addPanelReducer(props.panelId, _reducers__WEBPACK_IMPORTED_MODULE_5__["default"]);
    return _this;
  }

  _createClass(PanelCounter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LabelCounter__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ButtonIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ButtonDecrement__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.store.removePanelReducer(this.props.panelId);
    }
  }]);

  return PanelCounter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


PanelCounter.contextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
PanelCounter.propTypes = {
  panelId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/panels/counter/actions.js":
/*!***************************************!*\
  !*** ./src/panels/counter/actions.js ***!
  \***************************************/
/*! exports provided: incrementCountAction, decrementCountAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCountAction", function() { return incrementCountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCountAction", function() { return decrementCountAction; });
var incrementCountAction = function incrementCountAction() {
  return {
    type: 'INCREMENT_COUNT'
  };
};
var decrementCountAction = function decrementCountAction() {
  return {
    type: 'DECREMENT_COUNT'
  };
};

/***/ }),

/***/ "./src/panels/counter/components/ButtonDecrement.js":
/*!**********************************************************!*\
  !*** ./src/panels/counter/components/ButtonDecrement.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/panels/counter/actions.js");
/* harmony import */ var _utils_redux_connect_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/redux/connect-wrapper */ "./src/utils/redux/connect-wrapper.js");





function ButtonDecrement(_ref) {
  var onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onClick
  }, "Decrement");
}

ButtonDecrement.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_redux_connect_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
  onClick: _actions__WEBPACK_IMPORTED_MODULE_2__["decrementCountAction"]
})(ButtonDecrement));

/***/ }),

/***/ "./src/panels/counter/components/ButtonIncrement.js":
/*!**********************************************************!*\
  !*** ./src/panels/counter/components/ButtonIncrement.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/panels/counter/actions.js");
/* harmony import */ var _utils_redux_connect_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/redux/connect-wrapper */ "./src/utils/redux/connect-wrapper.js");





function ButtonIncrement(_ref) {
  var onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onClick
  }, "Increment");
}

ButtonIncrement.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_redux_connect_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
  onClick: _actions__WEBPACK_IMPORTED_MODULE_2__["incrementCountAction"]
})(ButtonIncrement));

/***/ }),

/***/ "./src/panels/counter/components/LabelCounter.js":
/*!*******************************************************!*\
  !*** ./src/panels/counter/components/LabelCounter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_redux_connect_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/redux/connect-wrapper */ "./src/utils/redux/connect-wrapper.js");





function LabelCounter(_ref) {
  var label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, label);
}

LabelCounter.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

function mapStateToProps(state, _ref2) {
  var panelId = _ref2.panelId;
  return {
    label: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(state, "panels.".concat(panelId, ".count"))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_redux_connect_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(mapStateToProps)(LabelCounter));

/***/ }),

/***/ "./src/panels/counter/reducers.js":
/*!****************************************!*\
  !*** ./src/panels/counter/reducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


function countReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;

    case 'DECREMENT_COUNT':
      return state - 1;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  count: countReducer
}));

/***/ }),

/***/ "./src/utils/layout-wrapper.js":
/*!*************************************!*\
  !*** ./src/utils/layout-wrapper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! golden-layout */ "./node_modules/golden-layout/dist/goldenlayout.js");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panels_counter_PanelCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panels/counter/PanelCounter */ "./src/panels/counter/PanelCounter.js");
/* harmony import */ var _layout_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout.config */ "./src/layout.config.js");
/* harmony import */ var _panel_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-wrapper */ "./src/utils/panel-wrapper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var panelConfigs = _layout_config__WEBPACK_IMPORTED_MODULE_5__["default"].content[0].content;

var LayoutWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayoutWrapper, _React$Component);

  function LayoutWrapper(props) {
    var _this;

    _classCallCheck(this, LayoutWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPanel", function (layout) {
      return function (config) {
        var menuEl = _this.menuEl.current;

        var createDragSource = function createDragSource(el) {
          return layout.createDragSource(el, config);
        };

        layout.registerComponent(config.component, Object(_panel_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(_panels_counter_PanelCounter__WEBPACK_IMPORTED_MODULE_4__["default"], _this.props.store));
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          ref: createDragSource
        }, "Drag ".concat(config.title, " Panel")), menuEl);
      };
    });

    _this.menuEl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.layoutEl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(LayoutWrapper, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "menuContainer",
        ref: this.menuEl
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "layoutContainer",
        ref: this.layoutEl
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var layout = new golden_layout__WEBPACK_IMPORTED_MODULE_3___default.a(_layout_config__WEBPACK_IMPORTED_MODULE_5__["default"], this.layoutEl.current);
      layout.init(); // eslint-disable-next-line no-undef

      window.addEventListener('resize', layout.updateSize.bind(layout));
      panelConfigs.forEach(this.renderPanel(layout));
    }
  }]);

  return LayoutWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


LayoutWrapper.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/***/ }),

/***/ "./src/utils/panel-wrapper.js":
/*!************************************!*\
  !*** ./src/utils/panel-wrapper.js ***!
  \************************************/
/*! exports provided: PanelProvider, Consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelProvider", function() { return PanelProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducer_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/reducer-utils */ "./src/utils/redux/reducer-utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var _React$createContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('panelId'),
    PanelProvider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer; // - wraps the golden layout callback for react panels
// - generates a unique id for every panel for dynamic states
// - initialised reducers



/* harmony default export */ __webpack_exports__["default"] = (function (Panel, store) {
  var PanelWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PanelWrapper, _React$Component);

    function PanelWrapper(props) {
      var _this;

      _classCallCheck(this, PanelWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelWrapper).call(this, props));
      _this.panelId = Object(_redux_reducer_utils__WEBPACK_IMPORTED_MODULE_3__["createPanelId"])(props.panelName);
      return _this;
    }

    _createClass(PanelWrapper, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
          store: store
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelProvider, {
          value: this.panelId
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {
          panelId: this.panelId
        })));
      }
    }]);

    return PanelWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  PanelWrapper.propTypes = {
    panelName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  };
  return PanelWrapper;
});

/***/ }),

/***/ "./src/utils/redux/connect-wrapper.js":
/*!********************************************!*\
  !*** ./src/utils/redux/connect-wrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _panel_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../panel-wrapper */ "./src/utils/panel-wrapper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * This function is an extension of redux connect, has the same signature.
 * - adds the panelId to the ownProps for the component
 * - adds panelIds to the dispatched actions for handling the dynamic states
 */

/* harmony default export */ __webpack_exports__["default"] = (function (mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    var ConnectWrapper =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(ConnectWrapper, _React$Component);

      function ConnectWrapper(props) {
        var _this;

        _classCallCheck(this, ConnectWrapper);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectWrapper).call(this, props));

        var state = props.state,
            panelId = props.panelId,
            dispatch = props.dispatch,
            ownProps = _objectWithoutProperties(props, ["state", "panelId", "dispatch"]);

        _this.dispatchProps = getDispatchProps(mapDispatchToProps, dispatch, panelId, ownProps);
        return _this;
      } // avoid re-renders if mapStateToProps is not defined


      _createClass(ConnectWrapper, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var skipProps = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(mapStateToProps) ? ['panelId', 'dispatch'] : ['panelId', 'dispatch', 'state'];
          return !isShallowEqual(nextProps, this.props, skipProps);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              state = _this$props.state,
              ownProps = _objectWithoutProperties(_this$props, ["state"]);

          var stateProps = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(mapStateToProps) ? mapStateToProps(state, ownProps) : {};
          var props = Object(lodash_fp__WEBPACK_IMPORTED_MODULE_5__["assign"])(this.dispatchProps, stateProps, ownProps);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
        }
      }]);

      return ConnectWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    ConnectWrapper.propTypes = {
      // eslint-disable-next-line react/forbid-prop-types
      state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
      panelId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
    };

    var PanelIdWrapper = function PanelIdWrapper(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_wrapper__WEBPACK_IMPORTED_MODULE_6__["Consumer"], null, function (panelId) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectWrapper, _objectSpread({}, props, {
          panelId: panelId
        }));
      });
    };

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
      return {
        state: state
      };
    })(PanelIdWrapper);
  };
});

function getDispatchProps(mapDispatchToProps, dispatch, panelId, ownProps) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(mapDispatchToProps)) {
    return mapDispatchToProps(dispatchWithPanelId(dispatch, panelId), ownProps);
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isObject"])(mapDispatchToProps) && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(mapDispatchToProps)) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(mapDispatchToProps, dispatchWithPanelId(dispatch, panelId));
  }

  return {};
}

function dispatchWithPanelId(dispatch, panelId) {
  var appendPanelId = function appendPanelId(action) {
    return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_5__["set"])('meta.panelId', panelId)(action);
  };

  return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_5__["flowRight"])(dispatch, appendPanelId);
}
/* eslint-disable */


function isShallowEqual(source, target, skip) {
  for (var key in source) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["includes"])(skip, key)) continue;
    if (!(key in target) || source[key] !== target[key]) return false;
  }

  return true;
}

/***/ }),

/***/ "./src/utils/redux/reducer-utils.js":
/*!******************************************!*\
  !*** ./src/utils/redux/reducer-utils.js ***!
  \******************************************/
/*! exports provided: PANELS_PATH, createPanelId, createRootReducer, addPanelReducer, deletePanelReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANELS_PATH", function() { return PANELS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPanelId", function() { return createPanelId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRootReducer", function() { return createRootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPanelReducer", function() { return addPanelReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePanelReducer", function() { return deletePanelReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PANELS_PATH = 'panels';

var initialRoot = function initialRoot() {
  return {
    shared: function shared() {
      return 'path';
    }
  };
};

var root = initialRoot();
var panelsRoot = {};
var createPanelId = function createPanelId(name) {
  return "".concat(name, ".instance-").concat(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])());
};
var createRootReducer = function createRootReducer() {
  var nextRoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialRoot();
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(nextRoot);
};
var addPanelReducer = function addPanelReducer(panelId, reducer) {
  if (!panelId || !reducer) return null;
  Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(panelsRoot, "".concat(panelId), reducer);
  return recombineReducers(_objectSpread({}, root, _defineProperty({}, PANELS_PATH, panelsRoot)));
};
var deletePanelReducer = function deletePanelReducer(panelId) {
  if (!panelId) return null;
  panelsRoot = Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["unset"])("".concat(panelId))(panelsRoot);
  var panelName = panelId.split('.')[0];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(panelsRoot[panelName])) {
    panelsRoot = Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["omit"])(panelName)(panelsRoot);
  }

  return recombineReducers(_objectSpread({}, root, _defineProperty({}, PANELS_PATH, panelsRoot)));
};

function recombineReducers(nextRoot) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(nextRoot[PANELS_PATH])) return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["omit"])(PANELS_PATH)(nextRoot));
  var nextPanelsRoot = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"])(nextRoot[PANELS_PATH], function (acc, value, panelType) {
    acc[panelType] = multireducer(value, 'panelId');
    return acc;
  }, {});
  return createRootReducer(_objectSpread({}, nextRoot, _defineProperty({}, PANELS_PATH, Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(nextPanelsRoot))));
}

var initAction = {
  type: '@@multireducer/INIT'
};

var getKeyFromAction = function getKeyFromAction(action) {
  var panelId = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(action, 'meta.panelId');
  return panelId && panelId.split('.')[1] || null;
};
/**
 * Use instances of same reducers based on panelIds
 * https://github.com/erikras/multireducer
 */


function multireducer(reducers, reducerKey) {
  var isCustomMountPoint;

  if (typeof reducers === 'function') {
    if (!reducerKey) {
      throw new Error('No key specified for custom mounting of reducer');
    } else {
      isCustomMountPoint = true;
    }
  }

  var initialState = isCustomMountPoint ? reducers(undefined, initAction) : Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(reducers, function (reducer) {
    return reducer(undefined, initAction);
  });
  return function multiCombination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var actionReducerKey = getKeyFromAction(action);

    if (actionReducerKey) {
      // custom mount point
      if (isCustomMountPoint && reducerKey === actionReducerKey) {
        return reducers(state, action);
      } // usual multireducer mounting


      var reducer = reducers[actionReducerKey];

      if (reducer) {
        return _objectSpread({}, state, _defineProperty({}, actionReducerKey, reducer(state[actionReducerKey], action)));
      }
    }

    return state;
  };
}

/***/ }),

/***/ "./src/utils/redux/store-utils.js":
/*!****************************************!*\
  !*** ./src/utils/redux/store-utils.js ***!
  \****************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer-utils */ "./src/utils/redux/reducer-utils.js");

 // eslint-disable-next-line

var devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

var createStore = function createStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_reducer_utils__WEBPACK_IMPORTED_MODULE_1__["createRootReducer"])(), devToolEnahncer);
  var SyntheticStore = {
    dispatch: store.dispatch,
    subscribe: store.subscribe,
    getState: store.getState,
    addPanelReducer: function addPanelReducer(id, reducer) {
      return store.replaceReducer(Object(_reducer_utils__WEBPACK_IMPORTED_MODULE_1__["addPanelReducer"])(id, reducer));
    },
    removePanelReducer: function removePanelReducer(id) {
      return store.replaceReducer(Object(_reducer_utils__WEBPACK_IMPORTED_MODULE_1__["deletePanelReducer"])(id));
    }
  };
  return SyntheticStore;
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/varundev/Workspace/dynamic-redux-state/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map