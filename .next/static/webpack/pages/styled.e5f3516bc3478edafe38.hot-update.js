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

function Main() {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, "Hello world"), __jsx(SubTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "Just testing"), __jsx(ButtonGroup, {
    darkTheme: true,
    ordered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(ConstructButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Create"), __jsx(DestructButton, {
    css: {
      color: "yellow"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "Delete"), __jsx(Button, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Cancel")));
}

_c7 = Main;
/* harmony default export */ __webpack_exports__["default"] = (_c8 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Main));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "SubTitle");
$RefreshReg$(_c3, "Button");
$RefreshReg$(_c4, "ConstructButton");
$RefreshReg$(_c5, "DestructButton");
$RefreshReg$(_c6, "ButtonGroup");
$RefreshReg$(_c7, "Main");
$RefreshReg$(_c8, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0eWxlZC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCIkcHJpbWFyeSIsIiRzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwiZGVzdHJ1Y3RpdmUiLCJjb25zdHJ1Y3RpdmUiLCJzcGFjZXMiLCJub25lIiwicyIsIm0iLCJsIiwiZm9udFNpemVzIiwieHMiLCJ4bCIsIlRpdGxlIiwic3R5bGVkIiwiaDEiLCJTdWJUaXRsZSIsImgyIiwiQmFzZUJ1dHRvbiIsImJ1dHRvbiIsInNoYWRvdyIsIkJ1dHRvbiIsIkNvbnN0cnVjdEJ1dHRvbiIsIkRlc3RydWN0QnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJkaXYiLCJvcmRlcmVkIiwiTWFpbiIsImNvbG9yIiwid2l0aFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRSxNQURKO0FBRU5DLGNBQVUsRUFBRSxNQUZOO0FBR05DLGNBQVUsRUFBRSxPQUhOO0FBSU5DLGFBQVMsRUFBRSxPQUpMO0FBS05DLGVBQVcsRUFBRSxTQUxQO0FBTU5DLGdCQUFZLEVBQUU7QUFOUixHQURJO0FBU1pDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUUsR0FEQTtBQUVOQyxLQUFDLEVBQUUsU0FGRztBQUdOQyxLQUFDLEVBQUUsUUFIRztBQUlOQyxLQUFDLEVBQUU7QUFKRyxHQVRJO0FBZVpDLFdBQVMsRUFBRTtBQUNUQyxNQUFFLEVBQUUsV0FESztBQUVUSixLQUFDLEVBQUUsU0FGTTtBQUdUQyxLQUFDLEVBQUUsTUFITTtBQUlUQyxLQUFDLEVBQUUsU0FKTTtBQUtURyxNQUFFLEVBQUU7QUFMSztBQWZDLENBQWQ7QUF3QkEsSUFBTUMsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG1CQUFYO0tBQU1GLEs7QUFVTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQWQ7TUFBTUQsUTtBQU1OLElBQU1FLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0ssTUFBVixxQkFJTTtBQUFBLE1BQUd0QixLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsVUFBNUI7QUFBQSxDQUpOLEVBS0w7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUksU0FBNUI7QUFBQSxDQUxLLEVBTUE7QUFBQSxNQUFHa0IsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyx1QkFBSCxHQUE2QixNQUFwRDtBQUFBLENBTkEsQ0FBaEI7QUFTQSxJQUFNQyxNQUFNLEdBQUdQLGlFQUFNLENBQUNJLFVBQUQsQ0FBVCxxQkFDQztBQUFBLE1BQUdyQixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNRLE1BQU4sQ0FBYUUsQ0FBNUI7QUFBQSxDQURELEVBQ2tDO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUSxNQUFOLENBQWFFLENBQTVCO0FBQUEsQ0FEbEMsRUFHRztBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1EsTUFBTixDQUFhRSxDQUE1QjtBQUFBLENBSEgsRUFHb0M7QUFBQSxNQUFHVixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNRLE1BQU4sQ0FBYUcsQ0FBNUI7QUFBQSxDQUhwQyxFQU1HO0FBQUEsTUFBR1gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUSxNQUFOLENBQWFHLENBQTVCO0FBQUEsQ0FOSCxFQU1vQztBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1EsTUFBTixDQUFhSSxDQUE1QjtBQUFBLENBTnBDLENBQVo7TUFBTVksTTtBQWFOLElBQU1DLGVBQWUsR0FBR1IsaUVBQU0sQ0FBQ08sTUFBRCxDQUFULHFCQUNDO0FBQUEsTUFBR3hCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhTSxZQUE1QjtBQUFBLENBREQsQ0FBckI7TUFBTWtCLGU7QUFJTixJQUFNQyxjQUFjLEdBQUdULGlFQUFNLENBQUNPLE1BQUQsQ0FBVCxxQkFDRTtBQUFBLE1BQUd4QixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUssV0FBNUI7QUFBQSxDQURGLENBQXBCO01BQU1vQixjO0FBS04sSUFBTUMsV0FBVyxHQUFHVix5REFBTSxDQUFDVyxHQUFWLHFCQUliLGtCQUFpQjtBQUFBLE1BQWRDLE9BQWMsVUFBZEEsT0FBYzs7QUFDakIsTUFBSUEsT0FBSixFQUFhO0FBQ1gsdUJBQVlILGNBQVosZ0RBR0VELGVBSEY7QUFPRDtBQUNGLENBZGMsQ0FBakI7TUFBTUUsVzs7QUFpQk4sU0FBU0csSUFBVCxHQUFnQjtBQUNkLFNBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRTlCLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUF1QixXQUFPLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxjQUFEO0FBQWdCLE9BQUcsRUFBRTtBQUFFK0IsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixDQUhGLENBREY7QUFXRDs7TUFaUUQsSTtBQWNNLHFFQUFBRSxtRUFBUyxDQUFDRixJQUFELENBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0eWxlZC5lNWYzNTE2YmMzNDc4ZWRhZmUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyB3aXRoVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgICRwcmltYXJ5OiBcIm5hdnlcIixcbiAgICAkc2Vjb25kYXJ5OiBcImJsdWVcIixcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgdGV4dENvbG9yOiBcImJsYWNrXCIsXG4gICAgZGVzdHJ1Y3RpdmU6IFwiIzliMTAxMFwiLFxuICAgIGNvbnN0cnVjdGl2ZTogXCIjMTc4OTE3XCIsXG4gIH0sXG4gIHNwYWNlczoge1xuICAgIG5vbmU6IFwiMFwiLFxuICAgIHM6IFwiMC4yNXJlbVwiLFxuICAgIG06IFwiMC41cmVtXCIsXG4gICAgbDogXCIwLjc1cmVtXCIsXG4gIH0sXG4gIGZvbnRTaXplczoge1xuICAgIHhzOiBcIjAuNjc4NXJlbVwiLFxuICAgIHM6IFwiMC43NXJlbVwiLFxuICAgIG06IFwiMXJlbVwiLFxuICAgIGw6IFwiMS4yNXJlbVwiLFxuICAgIHhsOiBcIjEuNTM2NXJlbVwiLFxuICB9LFxufTtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IGdyZWVuO1xuYDtcblxuY29uc3QgQmFzZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gIGJveC1zaGFkb3c6ICR7KHsgc2hhZG93IH0pID0+IChzaGFkb3cgPyBcIjhweCA4cHggOHB4ICMwMDAwMDA0MFwiIDogXCJub25lXCIpfTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChCYXNlQnV0dG9uKWBcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMuc30gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMuc307XG4gIEBtZWRpYSBzY3JlZW4gQU5EIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMuc30gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMubX07XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBBTkQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMubX0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZXMubH07XG4gIH1cbiAgQG1lZGlhIHByaW50IHtcbiAgICBwYWRkaW5nOiA0cmVtO1xuICB9XG5gO1xuXG5jb25zdCBDb25zdHJ1Y3RCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY29uc3RydWN0aXZlfTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbmNvbnN0IERlc3RydWN0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRlc3RydWN0aXZlfTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDFyZW07XG4gICR7KHsgb3JkZXJlZCB9KSA9PiB7XG4gICAgaWYgKG9yZGVyZWQpIHtcbiAgICAgIHJldHVybiBgPiAke0Rlc3RydWN0QnV0dG9ufXtcbiAgICAgICAgb3JkZXI6LTE7XG4gICAgfVxuICAgID4gJHtDb25zdHJ1Y3RCdXR0b259e1xuICAgICAgICBvcmRlcjoxO1xuICAgIH1cbiAgICBgO1xuICAgIH1cbiAgfX1cbmA7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxUaXRsZT5IZWxsbyB3b3JsZDwvVGl0bGU+XG4gICAgICA8U3ViVGl0bGU+SnVzdCB0ZXN0aW5nPC9TdWJUaXRsZT5cbiAgICAgIDxCdXR0b25Hcm91cCBkYXJrVGhlbWUgb3JkZXJlZD5cbiAgICAgICAgPENvbnN0cnVjdEJ1dHRvbj5DcmVhdGU8L0NvbnN0cnVjdEJ1dHRvbj5cbiAgICAgICAgPERlc3RydWN0QnV0dG9uIGNzcz17eyBjb2xvcjogXCJ5ZWxsb3dcIiB9fT5EZWxldGU8L0Rlc3RydWN0QnV0dG9uPlxuICAgICAgICA8QnV0dG9uPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShNYWluKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=