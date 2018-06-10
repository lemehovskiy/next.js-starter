webpackHotUpdate(4,{

/***/ "./components/rect-parallax-content.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/lemehovskiy/PhpstormProjects/next.js-starter/components/rect-parallax-content.js: Unexpected token, expected \";\" (33:19)\n\n  31 |         )\n  32 | \n> 33 |             <style jsx>{`\n     |                    ^\n  34 |           .parallax-inner {\n  35 |             background-color: #fff;\n  36 |             border-bottom: 1px solid #eee;\n    at _class.raise (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseReturnStatement (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4272:12)\n    at _class.parseStatementContent (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:3960:21)\n    at _class.parseStatement (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseFunctionBodyAndFinish (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:3702:10)\n    at _class.parseMethod (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:3654:10)\n    at _class.pushClassMethod (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4847:30)\n    at _class.parseClassMemberWithIsStatic (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4766:12)\n    at _class.parseClassMember (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4708:10)\n    at _class.parseClassBody (/Users/lemehovskiy/PhpstormProjects/next.js-starter/node_modules/babylon/lib/index.js:4663:12)");

/***/ }),

/***/ "./node_modules/gsap/AttrPlugin.js":
false,

/***/ "./node_modules/gsap/BezierPlugin.js":
false,

/***/ "./node_modules/gsap/CSSPlugin.js":
false,

/***/ "./node_modules/gsap/DirectionalRotationPlugin.js":
false,

/***/ "./node_modules/gsap/EasePack.js":
false,

/***/ "./node_modules/gsap/RoundPropsPlugin.js":
false,

/***/ "./node_modules/gsap/TimelineLite.js":
false,

/***/ "./node_modules/gsap/TimelineMax.js":
false,

/***/ "./node_modules/gsap/TweenLite.js":
false,

/***/ "./node_modules/gsap/TweenMax.js":
false,

/***/ "./node_modules/gsap/TweenMaxBase.js":
false,

/***/ "./node_modules/gsap/index.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_rect_parallax_content__ = __webpack_require__("./components/rect-parallax-content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_rect_parallax_content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_rect_parallax_content__);
var _jsxFileName = "/Users/lemehovskiy/PhpstormProjects/next.js-starter/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  } // handling escape close


  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
      //     x: "100%", ease: Expo.easeInOut, delay: 2
      // });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {// console.log('asdf');
    }
  }, {
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_rect_parallax_content__["default"], _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "parallax-inner",
        style: {
          backgroundImage: "url(/static/imgs/hs_err_pid689.jpg)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "sdf"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/lemehovskiy/PhpstormProjects/next.js-starter/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d766a9c1bb2b2ed594a2.hot-update.js.map