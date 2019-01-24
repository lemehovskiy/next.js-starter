webpackHotUpdate(1,{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/lemehovskiy1/PhpstormProjects/next.js-starter/components/Slider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.scrollings = [];
    var prevTime = new Date().getTime();

    _this.addMouseWheelHandler();

    return _this;
  }

  _createClass(Slider, [{
    key: "addMouseWheelHandler",
    value: function addMouseWheelHandler() {
      var prefix = '';

      var _addEventListener;

      if (window.addEventListener) {
        _addEventListener = "addEventListener";
      } else {
        _addEventListener = "attachEvent";
        prefix = 'on';
      } // detect available wheel event


      var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

      if (support == 'DOMMouseScroll') {
        document[_addEventListener](prefix + 'MozMousePixelScroll', this.mouseWheelHandler.bind(this), false);
      } //handle MozMousePixelScroll in older Firefox
      else {
          document[_addEventListener](prefix + support, this.mouseWheelHandler.bind(this), false);
        }
    }
  }, {
    key: "mouseWheelHandler",
    value: function mouseWheelHandler(e) {
      var self = this;
      var curTime = new Date().getTime(); // cross-browser wheel delta

      e = e || window.event;
      var value = e.wheelDelta || -e.deltaY || -e.detail;
      var delta = Math.max(-1, Math.min(1, value));
      var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
      var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
      console.log(self.scrollings); //Limiting the array to 150 (lets not waste memory!)

      if (this.scrollings.length > 149) {
        this.scrollings.shift();
      } //keeping record of the previous scrollings


      this.scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

      if (options.scrollBar) {
        preventDefault(e);
      } //time difference between the last scroll and the current one


      var timeDiff = curTime - prevTime;
      prevTime = curTime; //haven't they scrolled in a while?
      //(enough to be consider a different scrolling action to scroll another section)

      if (timeDiff > 200) {
        //emptying the array, we dont care about old scrollings for our averages
        this.scrollings = [];
      }

      if (canScroll) {
        var averageEnd = getAverage(scrollings, 10);
        var averageMiddle = getAverage(scrollings, 70);
        var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

        if (isAccelerating && isScrollingVertically) {
          //scrolling down?
          if (delta < 0) {
            console.log('down'); //scrolling up?
          } else {
            console.log('up');
          }
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "3"));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ })

})
//# sourceMappingURL=1.a58e1239135d2d2aca8c.hot-update.js.map