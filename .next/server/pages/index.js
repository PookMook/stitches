module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/stitches.config */ "./src/stitches.config.ts");
var _jsxFileName = "/home/arthur/git/stitches/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const darkTheme = _stitches_config__WEBPACK_IMPORTED_MODULE_1__["css"].theme({
  $background: "#303030",
  $textColor: "#f0f0f0"
});
_stitches_config__WEBPACK_IMPORTED_MODULE_1__["css"].global(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["reset"]);
const Title = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])("h1", {
  fontSize: "$xl",
  marginBottom: "$l",
  color: "$constructive",
  backgroundColor: "yellow",
  ":hover": {
    color: "$destructive"
  }
});
const SubTitle = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])("h2", {
  fontSize: "$l",
  marginBottom: "$l",
  color: "$constructive"
});
const BaseButton = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])("button", {
  outline: "none",
  border: "none",
  cursor: "pointer",
  backgroundColor: "$background",
  color: "$textColor",
  variants: {
    shadow: {
      true: {
        boxShadow: "8px 8px 8px #00000040"
      }
    }
  }
});
const Button = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])(BaseButton, {
  padding: "$s $s",
  tablet: {
    padding: "$s $m"
  },
  desktop: {
    padding: "$m $l"
  },
  print: {
    padding: "4rem"
  }
});
const ConstructButton = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])(Button, {
  backgroundColor: "$constructive",
  color: "white"
});
const DestructButton = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])(Button, {
  backgroundColor: "$destructive",
  color: "white"
});
const ButtonGroup = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_1__["styled"])("div", {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  variants: {
    ordered: {
      true: {
        [`> ${DestructButton}`]: {
          order: -1
        },
        [`> ${ConstructButton}`]: {
          order: 1
        }
      }
    }
  }
});
function Main() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Hello world"), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "Just testing"), __jsx(ButtonGroup, {
    className: darkTheme,
    ordered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(ConstructButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Create"), __jsx(DestructButton, {
    css: {
      color: "yellow"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Delete"), __jsx(Button, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Cancel")));
}

/***/ }),

/***/ "./src/stitches.config.ts":
/*!********************************!*\
  !*** ./src/stitches.config.ts ***!
  \********************************/
/*! exports provided: styled, css, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitches/react */ "@stitches/react");
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stitches_react__WEBPACK_IMPORTED_MODULE_0__);

const {
  styled,
  css
} = Object(_stitches_react__WEBPACK_IMPORTED_MODULE_0__["createStyled"])({
  tokens: {
    colors: {
      $primary: "navy",
      $secondary: "blue",
      $background: "white",
      $textColor: "black",
      $destructive: "#9b1010",
      $constructive: "#178917"
    },
    space: {
      $none: "0",
      $s: "0.25rem",
      $m: "0.5rem",
      $l: "0.75rem"
    },
    fontSizes: {
      $xs: "0.6785rem",
      $s: "0.75rem",
      $m: "1rem",
      $l: "1.25rem",
      $xl: "1.5365rem"
    }
  },
  breakpoints: {
    tablet: rule => `@media (min-width:500px) {${rule}}`,
    desktop: rule => `@media (min-width:1024px) {${rule}}`,
    print: rule => `@media print {${rule}}`
  },
  utils: {}
});
const reset = {
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "1rem",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: "border-box"
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block"
  },
  "*[hidden]": {
    display: "none"
  },
  body: {
    lineHeight: "1"
  },
  "ol, ul": {
    listStyle: "none"
  },
  "blockquote, q": {
    quotes: "none"
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
    // @ts-ignore
    content: "none"
  },
  table: {
    borderSpacing: "0"
  }
};

/***/ }),

/***/ "@stitches/react":
/*!**********************************!*\
  !*** external "@stitches/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stitches/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RpdGNoZXMuY29uZmlnLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdGl0Y2hlcy9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiZGFya1RoZW1lIiwiY3NzIiwidGhlbWUiLCIkYmFja2dyb3VuZCIsIiR0ZXh0Q29sb3IiLCJnbG9iYWwiLCJyZXNldCIsIlRpdGxlIiwic3R5bGVkIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIlN1YlRpdGxlIiwiQmFzZUJ1dHRvbiIsIm91dGxpbmUiLCJib3JkZXIiLCJjdXJzb3IiLCJ2YXJpYW50cyIsInNoYWRvdyIsInRydWUiLCJib3hTaGFkb3ciLCJCdXR0b24iLCJwYWRkaW5nIiwidGFibGV0IiwiZGVza3RvcCIsInByaW50IiwiQ29uc3RydWN0QnV0dG9uIiwiRGVzdHJ1Y3RCdXR0b24iLCJCdXR0b25Hcm91cCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwib3JkZXJlZCIsIm9yZGVyIiwiTWFpbiIsImNyZWF0ZVN0eWxlZCIsInRva2VucyIsImNvbG9ycyIsIiRwcmltYXJ5IiwiJHNlY29uZGFyeSIsIiRkZXN0cnVjdGl2ZSIsIiRjb25zdHJ1Y3RpdmUiLCJzcGFjZSIsIiRub25lIiwiJHMiLCIkbSIsIiRsIiwiZm9udFNpemVzIiwiJHhzIiwiJHhsIiwiYnJlYWtwb2ludHMiLCJydWxlIiwidXRpbHMiLCJtYXJnaW4iLCJmb250IiwidmVydGljYWxBbGlnbiIsImJveFNpemluZyIsImJvZHkiLCJsaW5lSGVpZ2h0IiwibGlzdFN0eWxlIiwicXVvdGVzIiwiY29udGVudCIsInRhYmxlIiwiYm9yZGVyU3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7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RDtBQUNBQSxXQUFPLEVBQUU7QUFIK0MsR0F6QnZDO0FBOEJuQkMsT0FBSyxFQUFFO0FBQ0xDLGlCQUFhLEVBQUU7QUFEVjtBQTlCWSxDQUFkLEM7Ozs7Ozs7Ozs7O0FDbENQLDRDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkLCBjc3MsIHJlc2V0IH0gZnJvbSBcIn4vc3RpdGNoZXMuY29uZmlnXCI7XG5cbmNvbnN0IGRhcmtUaGVtZSA9IGNzcy50aGVtZSh7XG4gICRiYWNrZ3JvdW5kOiBcIiMzMDMwMzBcIixcbiAgJHRleHRDb2xvcjogXCIjZjBmMGYwXCIsXG59KTtcblxuY3NzLmdsb2JhbChyZXNldCk7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkKFwiaDFcIiwge1xuICBmb250U2l6ZTogXCIkeGxcIixcbiAgbWFyZ2luQm90dG9tOiBcIiRsXCIsXG4gIGNvbG9yOiBcIiRjb25zdHJ1Y3RpdmVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxuICBcIjpob3ZlclwiOiB7XG4gICAgY29sb3I6IFwiJGRlc3RydWN0aXZlXCIsXG4gIH0sXG59KTtcblxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQoXCJoMlwiLCB7XG4gIGZvbnRTaXplOiBcIiRsXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIkbFwiLFxuICBjb2xvcjogXCIkY29uc3RydWN0aXZlXCIsXG59KTtcblxuY29uc3QgQmFzZUJ1dHRvbiA9IHN0eWxlZChcImJ1dHRvblwiLCB7XG4gIG91dGxpbmU6IFwibm9uZVwiLFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiJGJhY2tncm91bmRcIixcbiAgY29sb3I6IFwiJHRleHRDb2xvclwiLFxuICB2YXJpYW50czoge1xuICAgIHNoYWRvdzoge1xuICAgICAgdHJ1ZToge1xuICAgICAgICBib3hTaGFkb3c6IFwiOHB4IDhweCA4cHggIzAwMDAwMDQwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24sIHtcbiAgcGFkZGluZzogXCIkcyAkc1wiLFxuICB0YWJsZXQ6IHtcbiAgICBwYWRkaW5nOiBcIiRzICRtXCIsXG4gIH0sXG4gIGRlc2t0b3A6IHtcbiAgICBwYWRkaW5nOiBcIiRtICRsXCIsXG4gIH0sXG4gIHByaW50OiB7XG4gICAgcGFkZGluZzogXCI0cmVtXCIsXG4gIH0sXG59KTtcblxuY29uc3QgQ29uc3RydWN0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbiwge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFwiJGNvbnN0cnVjdGl2ZVwiLFxuICBjb2xvcjogXCJ3aGl0ZVwiLFxufSk7XG5cbmNvbnN0IERlc3RydWN0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbiwge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFwiJGRlc3RydWN0aXZlXCIsXG4gIGNvbG9yOiBcIndoaXRlXCIsXG59KTtcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQoXCJkaXZcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgZ2FwOiBcIjFyZW1cIixcbiAgdmFyaWFudHM6IHtcbiAgICBvcmRlcmVkOiB7XG4gICAgICB0cnVlOiB7XG4gICAgICAgIFtgPiAke0Rlc3RydWN0QnV0dG9ufWBdOiB7XG4gICAgICAgICAgb3JkZXI6IC0xLFxuICAgICAgICB9LFxuICAgICAgICBbYD4gJHtDb25zdHJ1Y3RCdXR0b259YF06IHtcbiAgICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGl0bGU+SGVsbG8gd29ybGQ8L1RpdGxlPlxuICAgICAgPFN1YlRpdGxlPkp1c3QgdGVzdGluZzwvU3ViVGl0bGU+XG4gICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXtkYXJrVGhlbWV9IG9yZGVyZWQ+XG4gICAgICAgIDxDb25zdHJ1Y3RCdXR0b24+Q3JlYXRlPC9Db25zdHJ1Y3RCdXR0b24+XG4gICAgICAgIDxEZXN0cnVjdEJ1dHRvbiBjc3M9e3sgY29sb3I6IFwieWVsbG93XCIgfX0+RGVsZXRlPC9EZXN0cnVjdEJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5DYW5jZWw8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZWQgfSBmcm9tIFwiQHN0aXRjaGVzL3JlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB7IHN0eWxlZCwgY3NzIH0gPSBjcmVhdGVTdHlsZWQoe1xuICB0b2tlbnM6IHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICRwcmltYXJ5OiBcIm5hdnlcIixcbiAgICAgICRzZWNvbmRhcnk6IFwiYmx1ZVwiLFxuICAgICAgJGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICR0ZXh0Q29sb3I6IFwiYmxhY2tcIixcbiAgICAgICRkZXN0cnVjdGl2ZTogXCIjOWIxMDEwXCIsXG4gICAgICAkY29uc3RydWN0aXZlOiBcIiMxNzg5MTdcIixcbiAgICB9LFxuICAgIHNwYWNlOiB7XG4gICAgICAkbm9uZTogXCIwXCIsXG4gICAgICAkczogXCIwLjI1cmVtXCIsXG4gICAgICAkbTogXCIwLjVyZW1cIixcbiAgICAgICRsOiBcIjAuNzVyZW1cIixcbiAgICB9LFxuICAgIGZvbnRTaXplczoge1xuICAgICAgJHhzOiBcIjAuNjc4NXJlbVwiLFxuICAgICAgJHM6IFwiMC43NXJlbVwiLFxuICAgICAgJG06IFwiMXJlbVwiLFxuICAgICAgJGw6IFwiMS4yNXJlbVwiLFxuICAgICAgJHhsOiBcIjEuNTM2NXJlbVwiLFxuICAgIH0sXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgdGFibGV0OiAocnVsZSkgPT4gYEBtZWRpYSAobWluLXdpZHRoOjUwMHB4KSB7JHtydWxlfX1gLFxuICAgIGRlc2t0b3A6IChydWxlKSA9PiBgQG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KSB7JHtydWxlfX1gLFxuICAgIHByaW50OiAocnVsZSkgPT4gYEBtZWRpYSBwcmludCB7JHtydWxlfX1gLFxuICB9LFxuICB1dGlsczoge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0ID0ge1xuICBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW9cIjoge1xuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgZm9udDogXCJpbmhlcml0XCIsXG4gICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gIH0sXG4gIFwiYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uXCI6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0sXG4gIFwiKltoaWRkZW5dXCI6IHtcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgfSxcbiAgYm9keToge1xuICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxuICB9LFxuICBcIm9sLCB1bFwiOiB7XG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgfSxcbiAgXCJibG9ja3F1b3RlLCBxXCI6IHtcbiAgICBxdW90ZXM6IFwibm9uZVwiLFxuICB9LFxuICBcImJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlclwiOiB7XG4gICAgY29udGVudDogXCJcIixcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29udGVudDogXCJub25lXCIsXG4gIH0sXG4gIHRhYmxlOiB7XG4gICAgYm9yZGVyU3BhY2luZzogXCIwXCIsXG4gIH0sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0aXRjaGVzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=