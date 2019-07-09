module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!./styles.css", function() {
		var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!./styles.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "button",
        {
          type: this.props.type,
          className: this.props.theme + " + \n          button + \n          " + this.props.color + " + \n          " + this.props.size
        },
        this.props.text
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".button{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.button-primary{color:#fff;background-color:#007bff;border-color:#007bff}.button-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.button-success{color:#fff;background-color:#28a745;border-color:#28a745}.button-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.button-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.button-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.button-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.button-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.button-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.button-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.button-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.button-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.button-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.button-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.button-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.button-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.button-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.button-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.button-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.button-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.button-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.button-default{padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem}.button-large{padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem}.button-small{padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem}.tm-1.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-1.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tm-1.button-primary{color:#fff;background-color:#00bbff;border-color:#00bbff}.tm-1.button-primary:hover{color:#fff;background-color:#00b5f7;border-color:#00b5f7}.tm-1.button-success{color:#fff;background-color:#3ce867;border-color:#3ce867}.tm-1.button-success:hover{color:#fff;background-color:#36db5f;border-color:#36db5f}.tm-1.button-danger{color:#fff;background-color:#ef3e3e;border-color:#ef3e3e}.tm-1.button-danger:hover{color:#fff;background-color:#e53b3b;border-color:#e53b3b}.tm-1.button-warning{color:#212529;background-color:#ffcf42;border-color:#ffcf42}.tm-1.button-warning:hover{color:#212529;background-color:#f2c23e;border-color:#f2c23e}.tm-1.button-info{color:#fff;background-color:#44ddf4;border-color:#44ddf4}.tm-1.button-info:hover{color:#fff;background-color:#40d4e8;border-color:#40d4e8}.tm-1.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.tm-1.button-outline-default:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-1.button-outline-primary{color:#00bbff;background-color:transparent;background-image:none;border-color:#00bbff}.tm-1.button-outline-primary:hover{color:#fff;background-color:#00bbff;border-color:#00bbff}.tm-1.button-outline-success{color:#3ce867;background-color:transparent;background-image:none;border-color:#3ce867}.tm-1.button-outline-success:hover{color:#fff;background-color:#3ce867;border-color:#3ce867}.tm-1.button-outline-danger{color:#ef3e3e;background-color:transparent;background-image:none;border-color:#ef3e3e}.tm-1.button-outline-danger:hover{color:#fff;background-color:#ef3e3e;border-color:#ef3e3e}.tm-1.button-outline-warning{color:#ffcf42;background-color:transparent;background-image:none;border-color:#ffcf42}.tm-1.button-outline-warning:hover{color:#212529;background-color:#ffcf42;border-color:#ffcf42}.tm-1.button-outline-info{color:#44ddf4;background-color:transparent;background-image:none;border-color:#44ddf4}.tm-1.button-outline-info:hover{color:#fff;background-color:#44ddf4;border-color:#44ddf4}.tm-2.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-2.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tm-2.button-primary{color:#fff;background-color:#141414;border-color:#141414}.tm-2.button-primary:hover{color:#fff;background-color:#3a3939;border-color:#3a3939}.tm-2.button-success{color:#fff;background-color:#3f7f4f;border-color:#3f7f4f}.tm-2.button-success:hover{color:#fff;background-color:#428753;border-color:#428753}.tm-2.button-danger{color:#fff;background-color:#7f3f3f;border-color:#7f3f3f}.tm-2.button-danger:hover{color:#fff;background-color:#994c4c;border-color:#994c4c}.tm-2.button-warning{color:#212529;background-color:#7f6f3f;border-color:#7f6f3f}.tm-2.button-warning:hover{color:#212529;background-color:#938148;border-color:#938148}.tm-2.button-info{color:#fff;background-color:#3f767f;border-color:#3f767f}.tm-2.button-info:hover{color:#fff;background-color:#488993;border-color:#488993}.tm-2.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.tm-2.button-outline-default:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-2.button-outline-primary{color:#141414;background-color:transparent;background-image:none;border-color:#141414}.tm-2.button-outline-primary:hover{color:#fff;background-color:#141414;border-color:#141414}.tm-2.button-outline-success{color:#3f7f4f;background-color:transparent;background-image:none;border-color:#3f7f4f}.tm-2.button-outline-success:hover{color:#fff;background-color:#3f7f4f;border-color:#3f7f4f}.tm-2.button-outline-danger{color:#7f3f3f;background-color:transparent;background-image:none;border-color:#7f3f3f}.tm-2.button-outline-danger:hover{color:#fff;background-color:#7f3f3f;border-color:#7f3f3f}.tm-2.button-outline-warning{color:#7f6f3f;background-color:transparent;background-image:none;border-color:#7f6f3f}.tm-2.button-outline-warning:hover{color:#212529;background-color:#7f6f3f;border-color:#7f6f3f}.tm-2.button-outline-info{color:#3f767f;background-color:transparent;background-image:none;border-color:#3f767f}.tm-2.button-outline-info:hover{color:#fff;background-color:#3f767f;border-color:#3f767f}.tm-3.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-3.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tm-3.button-primary{color:#fff;background-color:#a332ff;border-color:#a332ff}.tm-3.button-primary:hover{color:#fff;background-color:#ba66ff;border-color:#ba66ff}.tm-3.button-success{color:#fff;background-color:#28cc36;border-color:#28cc36}.tm-3.button-success:hover{color:#fff;background-color:#7fe688;border-color:#7fe688}.tm-3.button-danger{color:#fff;background-color:#cc2828;border-color:#cc2828}.tm-3.button-danger:hover{color:#fff;background-color:#e67f7f;border-color:#e67f7f}.tm-3.button-warning{color:#212529;background-color:#cca328;border-color:#cca328}.tm-3.button-warning:hover{color:#212529;background-color:#e6cc7f;border-color:#e6cc7f}.tm-3.button-info{color:#fff;background-color:#28b6cc;border-color:#28b6cc}.tm-3.button-info:hover{color:#fff;background-color:#7fd8e6;border-color:#7fd8e6}.tm-3.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.tm-3.button-outline-default:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-3.button-outline-primary{color:#a332ff;background-color:transparent;background-image:none;border-color:#a332ff}.tm-3.button-outline-primary:hover{color:#fff;background-color:#a332ff;border-color:#a332ff}.tm-3.button-outline-success{color:#28cc36;background-color:transparent;background-image:none;border-color:#28cc36}.tm-3.button-outline-success:hover{color:#fff;background-color:#28cc36;border-color:#28cc36}.tm-3.button-outline-danger{color:#cc2828;background-color:transparent;background-image:none;border-color:#cc2828}.tm-3.button-outline-danger:hover{color:#fff;background-color:#cc2828;border-color:#cc2828}.tm-3.button-outline-warning{color:#cca328;background-color:transparent;background-image:none;border-color:#cca328}.tm-3.button-outline-warning:hover{color:#212529;background-color:#cca328;border-color:#cca328}.tm-3.button-outline-info{color:#28b6cc;background-color:transparent;background-image:none;border-color:#28b6cc}.tm-3.button-outline-info:hover{color:#fff;background-color:#28b6cc;border-color:#28b6cc}.tm-4.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-4.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tm-4.button-primary{color:#fff;background-color:#ff8819;border-color:#ff8819}.tm-4.button-primary:hover{color:#fff;background-color:#ff7b00;border-color:#ff7b00}.tm-4.button-success{color:#fff;background-color:#50e564;border-color:#50e564}.tm-4.button-success:hover{color:#fff;background-color:#59ff6f;border-color:#59ff6f}.tm-4.button-danger{color:#fff;background-color:#e55050;border-color:#e55050}.tm-4.button-danger:hover{color:#fff;background-color:#ff5959;border-color:#ff5959}.tm-4.button-warning{color:#212529;background-color:#e5c050;border-color:#e5c050}.tm-4.button-warning:hover{color:#212529;background-color:#ffd559;border-color:#ffd559}.tm-4.button-info{color:#fff;background-color:#50d1e5;border-color:#50d1e5}.tm-4.button-info:hover{color:#fff;background-color:#59e8ff;border-color:#59e8ff}.tm-4.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.tm-4.button-outline-default:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-4.button-outline-primary{color:#ff8819;background-color:transparent;background-image:none;border-color:#ff8819}.tm-4.button-outline-primary:hover{color:#fff;background-color:#ff8819;border-color:#ff8819}.tm-4.button-outline-success{color:#50e564;background-color:transparent;background-image:none;border-color:#50e564}.tm-4.button-outline-success:hover{color:#fff;background-color:#50e564;border-color:#50e564}.tm-4.button-outline-danger{color:#e55050;background-color:transparent;background-image:none;border-color:#e55050}.tm-4.button-outline-danger:hover{color:#fff;background-color:#e55050;border-color:#e55050}.tm-4.button-outline-warning{color:#e5c050;background-color:transparent;background-image:none;border-color:#e5c050}.tm-4.button-outline-warning:hover{color:#212529;background-color:#e5c050;border-color:#e5c050}.tm-4.button-outline-info{color:#50d1e5;background-color:transparent;background-image:none;border-color:#50d1e5}.tm-4.button-outline-info:hover{color:#fff;background-color:#50d1e5;border-color:#50d1e5}.tm-5.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-5.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tm-5.button-primary{color:#fff;background-color:#0CBF00;border-color:#0CBF00}.tm-5.button-primary:hover{color:#fff;background-color:#3DCC33;border-color:#3DCC33}.tm-5.button-success{color:#fff;background-color:#33CC28;border-color:#33CC28}.tm-5.button-success:hover{color:#fff;background-color:#50CC47;border-color:#50CC47}.tm-5.button-danger{color:#fff;background-color:#CC2828;border-color:#CC2828}.tm-5.button-danger:hover{color:#fff;background-color:#CC4747;border-color:#CC4747}.tm-5.button-warning{color:#212529;background-color:#E5B72D;border-color:#E5B72D}.tm-5.button-warning:hover{color:#212529;background-color:#E5C050;border-color:#E5C050}.tm-5.button-info{color:#fff;background-color:#28B6CC;border-color:#28B6CC}.tm-5.button-info:hover{color:#fff;background-color:#47BACC;border-color:#47BACC}.tm-5.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.tm-5.button-outline-default:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-5.button-outline-primary{color:#0CBF00;background-color:transparent;background-image:none;border-color:#0CBF00}.tm-5.button-outline-primary:hover{color:#fff;background-color:#0CBF00;border-color:#0CBF00}.tm-5.button-outline-success{color:#33CC28;background-color:transparent;background-image:none;border-color:#33CC28}.tm-5.button-outline-success:hover{color:#fff;background-color:#33CC28;border-color:#33CC28}.tm-5.button-outline-danger{color:#CC2828;background-color:transparent;background-image:none;border-color:#CC2828}.tm-5.button-outline-danger:hover{color:#fff;background-color:#CC2828;border-color:#CC2828}.tm-5.button-outline-warning{color:#E5B72D;background-color:transparent;background-image:none;border-color:#E5B72D}.tm-5.button-outline-warning:hover{color:#212529;background-color:#E5B72D;border-color:#E5B72D}.tm-5.button-outline-info{color:#28B6CC;background-color:transparent;background-image:none;border-color:#28B6CC}.tm-5.button-outline-info:hover{color:#fff;background-color:#28B6CC;border-color:#28B6CC}.tm-6.button-default{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-6.button-default:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.tm-6.button-primary{color:#fff;background-color:#FF668E;border-color:#FF668E}.tm-6.button-primary:hover{color:#fff;background-color:#ff99b4;border-color:#ff99b4}.tm-6.button-success{color:#fff;background-color:#66FF84;border-color:#66FF84}.tm-6.button-success:hover{color:#fff;background-color:#99ffad;border-color:#99ffad}.tm-6.button-danger{color:#fff;background-color:#FF7566;border-color:#FF7566}.tm-6.button-danger:hover{color:#fff;background-color:#ffa399;border-color:#ffa399}.tm-6.button-warning{color:#212529;background-color:#FFFC66;border-color:#FFFC66}.tm-6.button-warning:hover{color:#212529;background-color:#fffd99;border-color:#fffd99}.tm-6.button-info{color:#fff;background-color:#66EAFF;border-color:#66EAFF}.tm-6.button-info:hover{color:#fff;background-color:#99f1ff;border-color:#99f1ff}.tm-6.button-outline-default{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.tm-6.button-outline-default:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.tm-6.button-outline-primary{color:#FF668E;background-color:transparent;background-image:none;border-color:#FF668E}.tm-6.button-outline-primary:hover{color:#fff;background-color:#FF668E;border-color:#FF668E}.tm-6.button-outline-success{color:#66FF84;background-color:transparent;background-image:none;border-color:#66FF84}.tm-6.button-outline-success:hover{color:#fff;background-color:#66FF84;border-color:#66FF84}.tm-6.button-outline-danger{color:#FF7566;background-color:transparent;background-image:none;border-color:#FF7566}.tm-6.button-outline-danger:hover{color:#fff;background-color:#FF7566;border-color:#FF7566}.tm-6.button-outline-warning{color:#FFFC66;background-color:transparent;background-image:none;border-color:#FFFC66}.tm-6.button-outline-warning:hover{color:#212529;background-color:#FFFC66;border-color:#FFFC66}.tm-6.button-outline-info{color:#66EAFF;background-color:transparent;background-image:none;border-color:#66EAFF}.tm-6.button-outline-info:hover{color:#fff;background-color:#66EAFF;border-color:#66EAFF}\n", ""]);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);