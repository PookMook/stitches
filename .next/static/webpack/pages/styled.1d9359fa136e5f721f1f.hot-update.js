webpackHotUpdate_N_E("pages/styled",{

/***/ "./src/pages/styled.tsx":
/*!******************************!*\
  !*** ./src/pages/styled.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/arthur/git/stitches/src/pages/styled.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  color: white;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  color: white;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: ", " ", ";\n  @media screen AND (min-width: 500px) {\n    padding: ", " ", ";\n  }\n  @media screen AND (min-width: 1024px) {\n    padding: ", " ", ";\n  }\n  @media print {\n    padding: 4rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: green;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: green;\n  background-color: yellow;\n  &:hover {\n    color: red;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var theme = {
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
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());
_c = Title;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());
_c2 = SubTitle;
var BaseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.textColor;
}, function (_ref3) {
  var shadow = _ref3.shadow;
  return shadow ? "8px 8px 8px #00000040" : "none";
});
var Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseButton)(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.spaces.s;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spaces.s;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spaces.s;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spaces.m;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spaces.m;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spaces.l;
});
_c3 = Button;
var ConstructButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Button)(_templateObject5(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.constructive;
});
_c4 = ConstructButton;
var DestructButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Button)(_templateObject6(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.destructive;
});
_c5 = DestructButton;
var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7(), function (_ref12) {
  var ordered = _ref12.ordered;

  if (ordered) {
    return "> ".concat(DestructButton, "{\n        order:-1;\n    }\n    > ").concat(ConstructButton, "{\n        order:1;\n    }\n    ");
  }
});
_c6 = ButtonGroup;

function HoC() {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }
  }, children);
}

_c7 = HoC;

function Main() {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "Hello world"), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "Just testing"), __jsx(ButtonGroup, {
    darkTheme: true,
    ordered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(ConstructButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, "Create"), __jsx(DestructButton, {
    css: {
      color: "yellow"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Delete"), __jsx(Button, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Cancel")));
}

_c8 = Main;
/* harmony default export */ __webpack_exports__["default"] = (_c9 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Main));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "SubTitle");
$RefreshReg$(_c3, "Button");
$RefreshReg$(_c4, "ConstructButton");
$RefreshReg$(_c5, "DestructButton");
$RefreshReg$(_c6, "ButtonGroup");
$RefreshReg$(_c7, "HoC");
$RefreshReg$(_c8, "Main");
$RefreshReg$(_c9, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0eWxlZC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCIkcHJpbWFyeSIsIiRzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwiZGVzdHJ1Y3RpdmUiLCJjb25zdHJ1Y3RpdmUiLCJzcGFjZXMiLCJub25lIiwicyIsIm0iLCJsIiwiZm9udFNpemVzIiwieHMiLCJ4bCIsIlRpdGxlIiwic3R5bGVkIiwiaDEiLCJTdWJUaXRsZSIsImgyIiwiQmFzZUJ1dHRvbiIsImJ1dHRvbiIsInNoYWRvdyIsIkJ1dHRvbiIsIkNvbnN0cnVjdEJ1dHRvbiIsIkRlc3RydWN0QnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJkaXYiLCJvcmRlcmVkIiwiSG9DIiwiY2hpbGRyZW4iLCJNYWluIiwiY29sb3IiLCJ3aXRoVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNaQyxRQUFNLEVBQUU7QUFDTkMsWUFBUSxFQUFFLE1BREo7QUFFTkMsY0FBVSxFQUFFLE1BRk47QUFHTkMsY0FBVSxFQUFFLE9BSE47QUFJTkMsYUFBUyxFQUFFLE9BSkw7QUFLTkMsZUFBVyxFQUFFLFNBTFA7QUFNTkMsZ0JBQVksRUFBRTtBQU5SLEdBREk7QUFTWkMsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxHQURBO0FBRU5DLEtBQUMsRUFBRSxTQUZHO0FBR05DLEtBQUMsRUFBRSxRQUhHO0FBSU5DLEtBQUMsRUFBRTtBQUpHLEdBVEk7QUFlWkMsV0FBUyxFQUFFO0FBQ1RDLE1BQUUsRUFBRSxXQURLO0FBRVRKLEtBQUMsRUFBRSxTQUZNO0FBR1RDLEtBQUMsRUFBRSxNQUhNO0FBSVRDLEtBQUMsRUFBRSxTQUpNO0FBS1RHLE1B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dUIsV0FBTyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsY0FBRDtBQUFnQixPQUFHLEVBQUU7QUFBRWlDLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsQ0FIRixDQURGO0FBV0Q7O01BWlFELEk7QUFjTSxxRUFBQUUsbUVBQVMsQ0FBQ0YsSUFBRCxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHlsZWQuMWQ5MzU5ZmExMzZlNWY3MjFmMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgd2l0aFRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IHRoZW1lID0ge1xuICBjb2xvcnM6IHtcbiAgICAkcHJpbWFyeTogXCJuYXZ5XCIsXG4gICAgJHNlY29uZGFyeTogXCJibHVlXCIsXG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgIHRleHRDb2xvcjogXCJibGFja1wiLFxuICAgIGRlc3RydWN0aXZlOiBcIiM5YjEwMTBcIixcbiAgICBjb25zdHJ1Y3RpdmU6IFwiIzE3ODkxN1wiLFxuICB9LFxuICBzcGFjZXM6IHtcbiAgICBub25lOiBcIjBcIixcbiAgICBzOiBcIjAuMjVyZW1cIixcbiAgICBtOiBcIjAuNXJlbVwiLFxuICAgIGw6IFwiMC43NXJlbVwiLFxuICB9LFxuICBmb250U2l6ZXM6IHtcbiAgICB4czogXCIwLjY3ODVyZW1cIixcbiAgICBzOiBcIjAuNzVyZW1cIixcbiAgICBtOiBcIjFyZW1cIixcbiAgICBsOiBcIjEuMjVyZW1cIixcbiAgICB4bDogXCIxLjUzNjVyZW1cIixcbiAgfSxcbn07XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiBncmVlbjtcbmA7XG5cbmNvbnN0IEJhc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICBib3gtc2hhZG93OiAkeyh7IHNoYWRvdyB9KSA9PiAoc2hhZG93ID8gXCI4cHggOHB4IDhweCAjMDAwMDAwNDBcIiA6IFwibm9uZVwiKX07XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoQmFzZUJ1dHRvbilgXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2VzLnN9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2VzLnN9O1xuICBAbWVkaWEgc2NyZWVuIEFORCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2VzLnN9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2VzLm19O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gQU5EIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2VzLm19ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2VzLmx9O1xuICB9XG4gIEBtZWRpYSBwcmludCB7XG4gICAgcGFkZGluZzogNHJlbTtcbiAgfVxuYDtcblxuY29uc3QgQ29uc3RydWN0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmNvbnN0cnVjdGl2ZX07XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5jb25zdCBEZXN0cnVjdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kZXN0cnVjdGl2ZX07XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxcmVtO1xuICAkeyh7IG9yZGVyZWQgfSkgPT4ge1xuICAgIGlmIChvcmRlcmVkKSB7XG4gICAgICByZXR1cm4gYD4gJHtEZXN0cnVjdEJ1dHRvbn17XG4gICAgICAgIG9yZGVyOi0xO1xuICAgIH1cbiAgICA+ICR7Q29uc3RydWN0QnV0dG9ufXtcbiAgICAgICAgb3JkZXI6MTtcbiAgICB9XG4gICAgYDtcbiAgICB9XG4gIH19XG5gO1xuXG5mdW5jdGlvbiBIb0MoKSB7XG4gIHJldHVybiA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+O1xufVxuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8VGl0bGU+SGVsbG8gd29ybGQ8L1RpdGxlPlxuICAgICAgPFN1YlRpdGxlPkp1c3QgdGVzdGluZzwvU3ViVGl0bGU+XG4gICAgICA8QnV0dG9uR3JvdXAgZGFya1RoZW1lIG9yZGVyZWQ+XG4gICAgICAgIDxDb25zdHJ1Y3RCdXR0b24+Q3JlYXRlPC9Db25zdHJ1Y3RCdXR0b24+XG4gICAgICAgIDxEZXN0cnVjdEJ1dHRvbiBjc3M9e3sgY29sb3I6IFwieWVsbG93XCIgfX0+RGVsZXRlPC9EZXN0cnVjdEJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5DYW5jZWw8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWFpbik7XG4iXSwic291cmNlUm9vdCI6IiJ9