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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/styled.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/styled.tsx":
/*!******************************!*\
  !*** ./src/pages/styled.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HoC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/arthur/git/stitches/src/pages/styled.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const theme = {
  colors: {
    $primary: "navy",
    $secondary: "blue",
    background: "white",
    textColor: "black",
    destructive: "#9b1010",
    constructive: "#178917"
  },
  spaces: {
    none: "0",
    s: "0.25rem",
    m: "0.5rem",
    l: "0.75rem"
  },
  fontSizes: {
    xs: "0.6785rem",
    s: "0.75rem",
    m: "1rem",
    l: "1.25rem",
    xl: "1.5365rem"
  }
};
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: green;
  background-color: yellow;
  &:hover {
    color: red;
  }
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: green;
`;
const BaseButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({
  theme
}) => theme.colors.background};
  color: ${({
  theme
}) => theme.colors.textColor};
  box-shadow: ${({
  shadow
}) => shadow ? "8px 8px 8px #00000040" : "none"};
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BaseButton)`
  padding: ${({
  theme
}) => theme.spaces.s} ${({
  theme
}) => theme.spaces.s};
  @media screen AND (min-width: 500px) {
    padding: ${({
  theme
}) => theme.spaces.s} ${({
  theme
}) => theme.spaces.m};
  }
  @media screen AND (min-width: 1024px) {
    padding: ${({
  theme
}) => theme.spaces.m} ${({
  theme
}) => theme.spaces.l};
  }
  @media print {
    padding: 4rem;
  }
`;
const ConstructButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Button)`
  background-color: ${({
  theme
}) => theme.colors.constructive};
  color: white;
`;
const DestructButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Button)`
  background-color: ${({
  theme
}) => theme.colors.destructive};
  color: white;
`;
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  ${({
  ordered
}) => {
  if (ordered) {
    return `> ${DestructButton}{
        order:-1;
    }
    > ${ConstructButton}{
        order:1;
    }
    `;
  }
}}
`;
function HoC() {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(WithStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
}

function Main() {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Hello world"), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Just testing"), __jsx(ButtonGroup, {
    darkTheme: true,
    ordered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(ConstructButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Create"), __jsx(DestructButton, {
    css: {
      color: "yellow"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Delete"), __jsx(Button, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Cancel"))));
}

const WithStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(Main);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3N0eWxlZC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3JzIiwiJHByaW1hcnkiLCIkc2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsInRleHRDb2xvciIsImRlc3RydWN0aXZlIiwiY29uc3RydWN0aXZlIiwic3BhY2VzIiwibm9uZSIsInMiLCJtIiwibCIsImZvbnRTaXplcyIsInhzIiwieGwiLCJUaXRsZSIsInN0eWxlZCIsImgxIiwiU3ViVGl0bGUiLCJoMiIsIkJhc2VCdXR0b24iLCJidXR0b24iLCJzaGFkb3ciLCJCdXR0b24iLCJDb25zdHJ1Y3RCdXR0b24iLCJEZXN0cnVjdEJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiZGl2Iiwib3JkZXJlZCIsIkhvQyIsIk1haW4iLCJjb2xvciIsIldpdGhTdHlsZSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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QTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRDs7QUFFRCxTQUFTK0IsSUFBVCxHQUFnQjtBQUNkLFNBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRS9CLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtRUFDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUF1QixXQUFPLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxjQUFEO0FBQWdCLE9BQUcsRUFBRTtBQUFFZ0MsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixDQUhGLENBREYsQ0FERjtBQWFEOztBQUVELE1BQU1DLFNBQVMsR0FBR0MsbUVBQVMsQ0FBQ0gsSUFBRCxDQUEzQixDOzs7Ozs7Ozs7OztBQ25IQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9zdHlsZWQudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyB3aXRoVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgICRwcmltYXJ5OiBcIm5hdnlcIixcbiAgICAkc2Vjb25kYXJ5OiBcImJsdWVcIixcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgdGV4dENvbG9yOiBcImJsYWNrXCIsXG4gICAgZGVzdHJ1Y3RpdmU6IFwiIzliMTAxMFwiLFxuICAgIGNvbnN0cnVjdGl2ZTogXCIjMTc4OTE3XCIsXG4gIH0sXG4gIHNwYWNlczoge1xuICAgIG5vbmU6IFwiMFwiLFxuICAgIHM6IFwiMC4yNXJlbVwiLFxuICAgIG06IFwiMC41cmVtXCIsXG4gICAgbDogXCIwLjc1cmVtXCIsXG4gIH0sXG4gIGZvbnRTaXplczoge1xuICAgIHhzOiBcIjAuNjc4NXJlbVwiLFxuICAgIHM6IFwiMC43NXJlbVwiLFxuICAgIG06IFwiMXJlbVwiLFxuICAgIGw6IFwiMS4yNXJlbVwiLFxuICAgIHhsOiBcIjEuNTM2NXJlbVwiLFxuICB9LFxufTtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IGdyZWVuO1xuYDtcblxuY29uc3QgQmFzZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gIGJveC1zaGFkb3c6ICR7KHsgc2hhZG93IH0pID0+IChzaGFkb3cgPyBcIjhweCA4cHggOHB4ICMwMDAwMDA0MFwiIDogXCJub25lXCIpfTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChCYXNlQnV0dG9uKWBcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMuc30gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMuc307XG4gIEBtZWRpYSBzY3JlZW4gQU5EIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMuc30gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMubX07XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBBTkQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMubX0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMubH07XG4gIH1cbiAgQG1lZGlhIHByaW50IHtcbiAgICBwYWRkaW5nOiA0cmVtO1xuICB9XG5gO1xuXG5jb25zdCBDb25zdHJ1Y3RCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY29uc3RydWN0aXZlfTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbmNvbnN0IERlc3RydWN0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRlc3RydWN0aXZlfTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDFyZW07XG4gICR7KHsgb3JkZXJlZCB9KSA9PiB7XG4gICAgaWYgKG9yZGVyZWQpIHtcbiAgICAgIHJldHVybiBgPiAke0Rlc3RydWN0QnV0dG9ufXtcbiAgICAgICAgb3JkZXI6LTE7XG4gICAgfVxuICAgID4gJHtDb25zdHJ1Y3RCdXR0b259e1xuICAgICAgICBvcmRlcjoxO1xuICAgIH1cbiAgICBgO1xuICAgIH1cbiAgfX1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvQygpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFdpdGhTdHlsZSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPD5cbiAgICAgICAgPFRpdGxlPkhlbGxvIHdvcmxkPC9UaXRsZT5cbiAgICAgICAgPFN1YlRpdGxlPkp1c3QgdGVzdGluZzwvU3ViVGl0bGU+XG4gICAgICAgIDxCdXR0b25Hcm91cCBkYXJrVGhlbWUgb3JkZXJlZD5cbiAgICAgICAgICA8Q29uc3RydWN0QnV0dG9uPkNyZWF0ZTwvQ29uc3RydWN0QnV0dG9uPlxuICAgICAgICAgIDxEZXN0cnVjdEJ1dHRvbiBjc3M9e3sgY29sb3I6IFwieWVsbG93XCIgfX0+RGVsZXRlPC9EZXN0cnVjdEJ1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgPC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBXaXRoU3R5bGUgPSB3aXRoVGhlbWUoTWFpbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9