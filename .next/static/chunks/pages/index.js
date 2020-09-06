_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@stitches/core/es/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stitches/core/es/constants.js ***!
  \*****************************************************/
/*! exports provided: tokenTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenTypes", function() { return tokenTypes; });
var tokenTypes = [
    "colors",
    "space",
    "fontSizes",
    "fonts",
    "fontWeights",
    "lineHeights",
    "letterSpacings",
    "sizes",
    "borderWidths",
    "borderStyles",
    "radii",
    "shadows",
    "zIndices",
    "transitions",
];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/css-types.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stitches/core/es/css-types.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=css-types.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@stitches/core/es/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotReloadingCache", function() { return hotReloadingCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTokens", function() { return createTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCss", function() { return createCss; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@stitches/core/es/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@stitches/core/es/types.js");
/* harmony import */ var _unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unitless */ "./node_modules/@stitches/core/es/unitless.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@stitches/core/es/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATOM", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]; });

/* harmony import */ var _css_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css-types */ "./node_modules/@stitches/core/es/css-types.js");
/* harmony import */ var _css_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_types__WEBPACK_IMPORTED_MODULE_5__) if(["default","hotReloadingCache","createTokens","createCss","ATOM"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_types__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAIN_BREAKPOINT_ID", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssPropToToken", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["cssPropToToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenTypes", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["tokenTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSheets", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["createSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specificityProps", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["specificityProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixAndProps", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["getVendorPrefixAndProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashString", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["hashString"]; });









var hotReloadingCache = new Map();
var createSelector = function (className, selector) {
    var cssRuleClassName = className ? "." + className : "";
    if (selector && selector.includes("&"))
        return selector.replace(/&/gi, cssRuleClassName);
    if (selector) {
        return "" + cssRuleClassName + selector;
    }
    return cssRuleClassName;
};
/**
 * Resolves a token to its css value in the context of the passed css prop:
 */
var resolveTokens = function (cssProp, value, tokens) {
    var token = _utils__WEBPACK_IMPORTED_MODULE_4__["cssPropToToken"][cssProp];
    var tokenValue;
    if (token) {
        if (Array.isArray(token) && Array.isArray(value)) {
            tokenValue = token.map(function (tokenName, index) {
                return token &&
                    tokens[tokenName] &&
                    tokens[tokenName][value[index]]
                    ? tokens[tokenName][value[index]]
                    : value[index];
            });
        }
        else {
            tokenValue =
                token && tokens[token] && tokens[token][value]
                    ? tokens[token][value]
                    : value;
        }
    }
    else {
        tokenValue = value;
    }
    return tokenValue;
};
/**
 * iterates over a style object keys and values,
 * resolving them to their final form then calls the value callback with the prop, value
 * and the current value nesting path in the style object:
 * - handles utilities
 * - handles specificity props
 * - handles nesting
 * - TODO: also handle the things below once we handle envs differently (to avoid passing a lot of props around):
 * - handles tokens
 * - handles vendor prefixing
 */
var processStyleObject = function (obj, config, valueMiddleware, currentNestingPath, shouldHandleUtils, shouldHandleSpecificityProps) {
    if (currentNestingPath === void 0) { currentNestingPath = []; }
    if (shouldHandleUtils === void 0) { shouldHandleUtils = true; }
    if (shouldHandleSpecificityProps === void 0) { shouldHandleSpecificityProps = true; }
    // key: css prop or override or a selector
    // value is: cssValue, a util, specificity prop, or
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var val = obj[key];
        var isUtilProp = shouldHandleUtils && key in config.utils;
        var isSpecificityProp = shouldHandleSpecificityProps && !isUtilProp && key in _utils__WEBPACK_IMPORTED_MODULE_4__["specificityProps"];
        /** Nested styles: */
        if (typeof val === "object" && !isSpecificityProp && !isUtilProp) {
            // Atom value:
            if (val[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]]) {
                valueMiddleware(key, val, currentNestingPath);
                continue;
            }
            // handle the value object
            processStyleObject(val, config, valueMiddleware, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(currentNestingPath, [
                key,
            ]));
            continue;
        }
        /** Utils: */
        if (isUtilProp) {
            // Resolve the util from the util function:
            var resolvedUtils = config.utils[key](config)(val);
            processStyleObject(resolvedUtils, config, valueMiddleware, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(currentNestingPath), false);
            continue;
        }
        /** Specificity Props: */
        // shorthand css props or css props that has baked in handling:
        // see specificityProps in ./utils
        if (isSpecificityProp) {
            var resolvedSpecificityProps = _utils__WEBPACK_IMPORTED_MODULE_4__["specificityProps"][key](config.tokens, val);
            processStyleObject(resolvedSpecificityProps, config, valueMiddleware, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(currentNestingPath), false, false);
            continue;
        }
        if (typeof val === "number") {
            // handle unitless numbers:
            valueMiddleware(key, 
            // tslint:disable-next-line: prefer-template
            "" + (_unitless__WEBPACK_IMPORTED_MODULE_3__["unitlessKeys"][key] ? val : val + "px"), currentNestingPath);
        }
        else if (val !== undefined) {
            valueMiddleware(key, resolveTokens(key, val, config.tokens), currentNestingPath);
        }
    }
};
/**
 * Resolves a css prop nesting path to a css selector and the breakpoint the css prop is meant to be injected to
 */
var resolveBreakpointAndSelectorAndInlineMedia = function (nestingPath, config) {
    return nestingPath.reduce(function (acc, breakpointOrSelector, i) {
        // utilityFirst selector specific resolution:
        var isOverride = config.utilityFirst && breakpointOrSelector === "override";
        if (isOverride) {
            // any level above 0
            if (i) {
                throw new Error("@stitches/core - You can not override at this level [" + nestingPath
                    .slice(0, i - 1)
                    .join(", ") + ", -> " + breakpointOrSelector + "], only at the top level definition");
            }
            return acc;
        }
        // breakpoints handling:
        if (breakpointOrSelector in config.breakpoints ||
            breakpointOrSelector === _utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]) {
            if (acc.breakpoint !== _utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]) {
                throw new Error("@stitches/core - You are nesting the breakpoint \"" + breakpointOrSelector + "\" into \"" + acc.breakpoint + "\", that makes no sense? :-)");
            }
            acc.breakpoint = breakpointOrSelector;
            return acc;
        }
        if (breakpointOrSelector[0] === "@") {
            acc.inlineMediaQueries.push(breakpointOrSelector);
            return acc;
        }
        // Normal css nesting selector:
        acc.nestingPath =
            acc.nestingPath +
                // If you manually prefix with '&' we remove it for identity consistency
                // only for pseudo selectors and nothing else
                (breakpointOrSelector[0] === "&" && breakpointOrSelector[1] === ":"
                    ? breakpointOrSelector.substr(1)
                    : // pseudo elements/class
                        // don't prepend with a whitespace
                        breakpointOrSelector[0] === ":"
                            ? breakpointOrSelector
                            : // else just nest with a space
                                // tslint:disable-next-line: prefer-template
                                " " + breakpointOrSelector);
        return acc;
    }, {
        breakpoint: _utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"],
        nestingPath: "",
        inlineMediaQueries: [],
    });
};
/**
 * converts an object style css prop to its normal css style object prop and handles prefixing:
 * borderColor => border-color
 */
var hyphenAndVendorPrefixCssProp = function (cssProp, vendorProps, vendorPrefix) {
    var isVendorPrefixed = cssProp[0] === cssProp[0].toUpperCase();
    var cssHyphenProp = cssProp
        .split(/(?=[A-Z])/)
        .map(function (g) { return g.toLowerCase(); })
        .join("-");
    if (isVendorPrefixed) {
        cssHyphenProp = "-" + cssHyphenProp;
    }
    else if (vendorProps.includes("" + vendorPrefix + cssHyphenProp)) {
        cssHyphenProp = "" + vendorPrefix + cssHyphenProp;
    }
    return cssHyphenProp;
};
var toStringCachedAtom = function () {
    return this._className;
};
var toStringCompose = function () {
    var className = this.atoms.map(function (atom) { return atom.toString(); }).join(" ");
    // cache the className on this instance
    // @ts-ignore
    this._className = className;
    // @ts-ignore
    this.toString = toStringCachedAtom;
    return className;
};
var createCssRule = function (breakpoints, atom, className) {
    var cssRule = "";
    if (atom.inlineMediaQueries && atom.inlineMediaQueries.length) {
        var allMediaQueries_1 = "";
        var endBrackets_1 = "";
        atom.inlineMediaQueries.forEach(function (breakpoint) {
            allMediaQueries_1 += breakpoint + "{";
            endBrackets_1 += "}";
        });
        cssRule = "" + allMediaQueries_1 + createSelector(className, atom.selector) + "{" + atom.cssHyphenProp + ":" + atom.value + ";}" + endBrackets_1;
    }
    else {
        cssRule = createSelector(className, atom.selector) + "{" + atom.cssHyphenProp + ":" + atom.value + ";}";
    }
    return atom.breakpoint !== _utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]
        ? breakpoints[atom.breakpoint](cssRule)
        : cssRule;
};
var createToString = function (sheets, breakpoints, cssClassnameProvider, // [className, pseudo]
preInjectedRules) {
    if (breakpoints === void 0) { breakpoints = {}; }
    return function toString() {
        var className = cssClassnameProvider(this);
        var shouldInject = !preInjectedRules.size || !preInjectedRules.has("." + className);
        if (shouldInject) {
            sheets[this.breakpoint].insertRule(createCssRule(breakpoints, this, className));
        }
        // We are switching this atom from IAtom simpler representation
        // 1. delete everything but `id` for specificity check
        // @ts-ignore
        this.cssHyphenProp = this.value = this.pseudo = this.breakpoint = this.inlineMediaQueries = undefined;
        // 2. put on a _className
        this._className = className;
        // 3. switch from this `toString` to a much simpler one
        this.toString = toStringCachedAtom;
        return className;
    };
};
var createServerToString = function (sheets, breakpoints, cssClassnameProvider) {
    if (breakpoints === void 0) { breakpoints = {}; }
    return function toString() {
        var className = cssClassnameProvider(this);
        sheets[this.breakpoint].insertRule(createCssRule(breakpoints, this, className ? "/*X*/" + className + "/*X*/" : ""));
        // We do not clean out the atom here, cause it will be reused
        // to inject multiple times for each request
        // 1. put on a _className
        this._className = className;
        // 2. switch from this `toString` to a much simpler one
        this.toString = toStringCachedAtom;
        return className;
    };
};
var createThemeToString = function (classPrefix, variablesSheet) {
    return function toString() {
        var _this = this;
        var themeClassName = (classPrefix ? classPrefix + "-" : "") + "theme-" + this.name;
        // @ts-ignore
        variablesSheet.insertRule("." + themeClassName + "{" + Object.keys(this.definition).reduce(function (subAggr, tokenKey) {
            // format token to remove special characters
            // https://stackoverflow.com/a/4374890
            var formattedTokenKey = tokenKey.replace(/[^\w\s-]/gi, "");
            // @ts-ignore
            return subAggr + "--colors-" + formattedTokenKey + ":" + _this.definition[tokenKey] + ";";
        }, ""));
        this.toString = function () { return themeClassName; };
        return themeClassName;
    };
};
var createKeyframesToString = function (sheet) {
    return function toString() {
        var _this = this;
        if (this._cssRuleString) {
            sheet.insertRule(this._cssRuleString);
        }
        this.toString = function () { return _this.id; };
        return this.id;
    };
};
var composeIntoMap = function (map, atoms) {
    var i = atoms.length - 1;
    for (; i >= 0; i--) {
        var item = atoms[i];
        // atoms can be undefined, null, false or '' using ternary like
        // expressions with the properties
        if (item && item[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]] && "atoms" in item) {
            composeIntoMap(map, item.atoms);
        }
        else if (item && item[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]]) {
            if (!map.has(item.id)) {
                map.set(item.id, item);
            }
        }
        else if (item) {
            map.set(item, item);
        }
    }
};
var createTokens = function (tokens) {
    return tokens;
};
var createCss = function (_config, env) {
    if (env === void 0) { env = typeof window === "undefined" ? null : window; }
    // pre-checked config to avoid checking these all the time
    // tslint:disable-next-line
    var config = Object.assign({ tokens: {}, utils: {}, breakpoints: {} }, _config);
    // prefill with empty token groups
    _constants__WEBPACK_IMPORTED_MODULE_1__["tokenTypes"].forEach(function (tokenType) { return (config.tokens[tokenType] = config.tokens[tokenType] || {}); });
    var tokens = config.tokens, breakpoints = config.breakpoints;
    var showFriendlyClassnames = typeof config.showFriendlyClassnames === "boolean"
        ? config.showFriendlyClassnames
        : "development" === "development";
    var prefix = config.prefix || "";
    var _a = env
        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getVendorPrefixAndProps"])(env)
        : { vendorPrefix: "-node-", vendorProps: [] }, vendorPrefix = _a.vendorPrefix, vendorProps = _a.vendorProps;
    if (env && hotReloadingCache.has(prefix)) {
        var instance = hotReloadingCache.get(prefix);
        instance.dispose();
    }
    // pre-compute class prefix
    var classPrefix = prefix
        ? showFriendlyClassnames
            ? prefix + "_"
            : prefix
        : "";
    var cssClassnameProvider = function (atom) {
        var _a;
        if (atom._isGlobal) {
            return "";
        }
        var hash = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hashString"])("" + (atom.breakpoint || "") + atom.cssHyphenProp.replace(/-(moz|webkit|ms)-/, "") + (atom.selector || "") + (((_a = atom.inlineMediaQueries) === null || _a === void 0 ? void 0 : _a.join("")) || "") + atom.value);
        var name = showFriendlyClassnames
            ? "" + (atom.breakpoint ? atom.breakpoint + "_" : "") + atom.cssHyphenProp
                .replace(/-(moz|webkit|ms)-/, "")
                .split("-")
                .map(function (part) { return part[0]; })
                .join("") + "_" + hash
            : "_" + hash;
        return "" + classPrefix + name;
    };
    var _b = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createSheets"])(env, config.breakpoints), tags = _b.tags, sheets = _b.sheets;
    var preInjectedRules = new Set();
    // tslint:disable-next-line
    for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
        var tag = tags_1[_i];
        ((tag.textContent || "").match(/\/\*\X\*\/.*?\/\*\X\*\//g) || []).forEach(function (rule) {
            // tslint:disable-next-line
            preInjectedRules.add("." + rule.replace(/\/\*X\*\//g, ""));
        });
    }
    var toString = env
        ? createToString(sheets, config.breakpoints, cssClassnameProvider, preInjectedRules)
        : createServerToString(sheets, config.breakpoints, cssClassnameProvider);
    var themeToString = createThemeToString(classPrefix, sheets.__variables__);
    var keyframesToString = createKeyframesToString(sheets[_utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]]);
    var compose = function () {
        var _a;
        var atoms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            atoms[_i] = arguments[_i];
        }
        var map = new Map();
        composeIntoMap(map, atoms);
        return _a = {
                atoms: Array.from(map.values()),
                toString: toStringCompose
            },
            _a[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]] = true,
            _a;
    };
    var createAtom = function (cssProp, value, breakpoint, selectorString, inlineMediaQueries, isGlobal) {
        var _a;
        if (breakpoint === void 0) { breakpoint = _utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]; }
        // generate id used for specificity check
        // two atoms are considered equal in regard to there specificity if the id is equal
        var inlineMediasAsString = inlineMediaQueries
            ? inlineMediaQueries.join("")
            : "";
        var id = cssProp.toLowerCase() +
            selectorString +
            (inlineMediaQueries ? inlineMediaQueries.join("") : "") +
            breakpoint;
        // make a uid accouting for different values
        var uid = id + value;
        // If this was created before return the cached atom
        if (atomCache.has(uid)) {
            // check if this has a breakpoint based media query
            if (inlineMediasAsString.match(/@media.*\((min|max)?.*(width|height).*\)/)) {
                // tslint:disable-next-line
                console.warn("The property \"" + cssProp + "\" with media query " + inlineMediasAsString + " can cause a specificity issue. You should create a breakpoint");
            }
            return atomCache.get(uid);
        }
        // prepare the cssProp
        var cssHyphenProp = hyphenAndVendorPrefixCssProp(cssProp, vendorProps, vendorPrefix);
        // We want certain pseudo selectors to take presedence over other pseudo
        // selectors, so we increase specificity
        if (!(selectorString === null || selectorString === void 0 ? void 0 : selectorString.match("&"))) {
            if (selectorString === null || selectorString === void 0 ? void 0 : selectorString.match(/\:hover/)) {
                selectorString = "&&" + selectorString;
            }
            else if (selectorString === null || selectorString === void 0 ? void 0 : selectorString.match(/\:active/)) {
                selectorString = "&&&" + selectorString;
            }
            else if (selectorString === null || selectorString === void 0 ? void 0 : selectorString.match(/\:focus|\:focus-visible/)) {
                selectorString = "&&&&" + selectorString;
            }
            else if (selectorString === null || selectorString === void 0 ? void 0 : selectorString.match(/\:read-only/)) {
                selectorString = "&&&&&" + selectorString;
            }
            else if (selectorString === null || selectorString === void 0 ? void 0 : selectorString.match(/\:disabled/)) {
                selectorString = "&&&&&&" + selectorString;
            }
        }
        // Create a new atom
        var atom = (_a = {
                id: id,
                cssHyphenProp: cssHyphenProp,
                value: value,
                selector: selectorString,
                inlineMediaQueries: inlineMediaQueries,
                breakpoint: breakpoint,
                toString: toString
            },
            _a[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]] = true,
            _a._isGlobal = isGlobal,
            _a);
        // Cache it
        atomCache.set(uid, atom);
        return atom;
    };
    var baseTokens = ":root{";
    // tslint:disable-next-line
    for (var tokenType in tokens) {
        var isNumericScale = tokenType.match(/^(sizes|space|letterSpacings|zIndices)$/);
        // @ts-ignore
        // tslint:disable-next-line
        var scaleTokenKeys = Object.keys(tokens[tokenType]);
        for (var index = 0; index < scaleTokenKeys.length; index++) {
            var token = scaleTokenKeys[index];
            // format token to remove special characters
            // https://stackoverflow.com/a/4374890
            var formattedToken = token.replace(/[^\w\s-]/gi, "");
            var cssVar = "--" + tokenType + "-" + formattedToken;
            // @ts-ignore
            baseTokens += cssVar + ":" + tokens[tokenType][token] + ";";
            // @ts-ignore
            tokens[tokenType][token] = "var(" + cssVar + ")";
            // Add negative tokens
            // tslint:disable-next-line: prefer-template
            var negativeTokenKey = "-" + token;
            // check that it's a numericScale and that the user didn't already set a negative token witht this name
            var isAlreadyANegativeToken = 
            // @ts-ignore
            token[0] === "-" ? !!tokens[tokenType][token.substring(1)] : false;
            if (isNumericScale &&
                // @ts-ignore
                !tokens[tokenType][negativeTokenKey] &&
                !isAlreadyANegativeToken) {
                // @ts-ignore
                tokens[tokenType][negativeTokenKey] = "calc(var(" + cssVar + ") * -1)";
            }
        }
    }
    baseTokens += "}";
    if (!preInjectedRules.has(":root")) {
        sheets.__variables__.insertRule(baseTokens);
    }
    // Keeping track of all atoms for SSR
    var compositionsCache = new Set();
    var atomCache = new Map();
    var keyFramesCache = new Map();
    var themeCache = new Map();
    var cssInstance = (function () {
        var definitions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            definitions[_i] = arguments[_i];
        }
        var args = [];
        var index = 0;
        for (var x = 0; x < definitions.length; x++) {
            if (!definitions[x]) {
                continue;
            }
            if (typeof definitions[x] === "string" || definitions[x][_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]]) {
                args[index++] = definitions[x];
            }
            else {
                processStyleObject(definitions[x], config, function (prop, value, path) {
                    var _a = resolveBreakpointAndSelectorAndInlineMedia(path, config), nestingPath = _a.nestingPath, breakpoint = _a.breakpoint, inlineMediaQueries = _a.inlineMediaQueries;
                    args[index++] = createAtom(prop, value, breakpoint, nestingPath, inlineMediaQueries);
                });
            }
        }
        // might cause memory leaks when doing css() inside a component
        // but we need this for now to fix SSR
        var composition = compose.apply(void 0, args);
        compositionsCache.add(composition);
        return composition;
    });
    cssInstance.dispose = function () {
        atomCache.clear();
        tags.forEach(function (tag) {
            var _a;
            (_a = tag.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(tag);
        });
    };
    cssInstance._config = function () { return config; };
    cssInstance.theme = function (definition) {
        var _a;
        if (themeCache.has(definition)) {
            return themeCache.get(definition);
        }
        var themeAtom = (_a = {
                // We could here also check if theme has been added from server,
                // though thinking it does not matter... just a simple rule
                name: String(themeCache.size),
                // wrapping the colors in an object so that the structure matches
                // the tokens property in the config
                definition: definition,
                toString: themeToString
            },
            _a[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]] = true,
            _a);
        themeCache.set(definition, themeAtom);
        return themeAtom;
    };
    cssInstance.global = function (definitions) {
        processStyleObject(definitions, config, function (prop, value, path) {
            var _a = resolveBreakpointAndSelectorAndInlineMedia(path, config), nestingPath = _a.nestingPath, breakpoint = _a.breakpoint, inlineMediaQueries = _a.inlineMediaQueries;
            if (!nestingPath.length) {
                throw new Error("Global styles need to be nested");
            }
            // Create a global atom and call toString() on it directly to inject it
            // as global atoms don't generate class names of their own
            createAtom(prop, value, breakpoint, nestingPath, inlineMediaQueries, true).toString();
        });
    };
    cssInstance.keyframes = function (definition) {
        var _a;
        var cssRule = "";
        var currentTimeProp = "";
        processStyleObject(definition, config, function (key, value, _a) {
            var timeProp = _a[0];
            if (timeProp !== currentTimeProp) {
                if (cssRule) {
                    cssRule += "}";
                }
                currentTimeProp = timeProp;
                cssRule += timeProp + " {";
            }
            cssRule += hyphenAndVendorPrefixCssProp(key, vendorProps, vendorPrefix) + ": " + resolveTokens(key, value, tokens) + ";";
        });
        var hash = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hashString"])(cssRule);
        // Check if an atom exist with the same hash and return it if so
        var cachedAtom = keyFramesCache.get(hash);
        if (cachedAtom) {
            return cachedAtom;
        }
        // wrap it with the generated keyframes name
        cssRule = "@keyframes " + hash + " {" + cssRule + "}";
        var keyframesAtom = (_a = {
                id: String(hash),
                _cssRuleString: cssRule,
                toString: keyframesToString
            },
            _a[_types__WEBPACK_IMPORTED_MODULE_2__["ATOM"]] = true,
            _a);
        keyFramesCache.set(hash, keyframesAtom);
        return keyframesAtom;
    };
    cssInstance.getStyles = function (cb) {
        // Reset the composition to avoid ssr issues
        compositionsCache.forEach(function (composition) {
            composition.toString = toStringCompose;
        });
        // tslint:disable-next-line
        for (var sheet in sheets) {
            sheets[sheet].cssRules.length = 0;
        }
        if (baseTokens) {
            sheets.__variables__.insertRule(baseTokens);
        }
        // We have to reset our toStrings so that they will now inject again,
        // and still cache is it is being reused
        toString = createServerToString(sheets, config.breakpoints, cssClassnameProvider);
        keyframesToString = createKeyframesToString(sheets[_utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]]);
        themeToString = createThemeToString(classPrefix, sheets.__variables__);
        atomCache.forEach(function (atom) {
            atom.toString = toString;
        });
        keyFramesCache.forEach(function (atom) {
            atom.toString = keyframesToString;
        });
        themeCache.forEach(function (atom) {
            atom.toString = themeToString;
        });
        var result = cb();
        return {
            result: result,
            styles: Object.keys(breakpoints).reduce(function (aggr, key) {
                return aggr.concat("/* STITCHES:" + key + " */\n" + sheets[key].cssRules.join("\n"));
            }, [
                "/* STITCHES:__variables__ */\n" + sheets.__variables__.cssRules.join("\n"),
                "/* STITCHES */\n" + sheets[_utils__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREAKPOINT_ID"]].cssRules.join("\n"),
            ]),
        };
    };
    if (env) {
        hotReloadingCache.set(prefix, cssInstance);
    }
    return cssInstance;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/shorthand-parser/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stitches/core/es/shorthand-parser/index.js ***!
  \******************************************************************/
/*! exports provided: background, animation, font, transition, margin, padding, border, borderTop, borderRight, borderLeft, borderBottom, borderWidth, borderColor, borderStyle, borderRadius, boxShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@stitches/core/es/constants.js");
/* harmony import */ var _value_tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value-tokenizer */ "./node_modules/@stitches/core/es/shorthand-parser/value-tokenizer.js");


var unitMatch = /^[0-9.]+[a-z|%]/;
var easingMatch = /\(.*\)|ease|ease-in|ease-out|ease-in-out|linear|step-start|step-end/;
var setChainedValue = function (existingValue, value) {
    return existingValue ? existingValue + "," + value : value;
};
var emptyTokens = {};
_constants__WEBPACK_IMPORTED_MODULE_0__["tokenTypes"].forEach(function (type) { return (emptyTokens[type] = {}); });
/*
  The generic CSS prop value parser. Converts any css value into an
  array of chains, where each chain is an array of individual values
*/
var createPropertyParser = function (type) { return function (tokens, value) {
    var chains = typeof value === "number" ? [[value]] : Object(_value_tokenizer__WEBPACK_IMPORTED_MODULE_1__["tokenizeValue"])(value);
    var css = {};
    // TODO: refactor this
    var tmpTokens = typeof value === "number" ? emptyTokens : tokens;
    chains.forEach(function (chain, chainIndex) {
        // tslint:disable-next-line
        chain.forEach(function (_value, index) {
            type(tmpTokens, css, _value, index, chain, chainIndex, chains);
        });
    });
    return css;
}; };
var background = createPropertyParser(function (tokens, css, value, index, chain, chainIndex, chains) {
    if (value === "/") {
        return;
    }
    else if (value.match(/scroll|local|fixed/))
        css.backgroundAttachment = setChainedValue(css.backgroundAttachment, value);
    else if (value.match(/^url|linear-gradient|element|image|cross-fade|image-set/))
        css.backgroundImage = setChainedValue(css.backgroundImage, value);
    else if (value.match(/border-box|padding-box|content-box|text/)) {
        if (chain.filter(function (chainPart) {
            return chainPart.match(/border-box|padding-box|content-box|text/);
        }).length === 1) {
            css.backgroundOrigin = setChainedValue(css.backgroundOrigin, value);
            css.backgroundClip = setChainedValue(css.backgroundClip, value);
        }
        else if (chain.findIndex(function (chainPart) {
            return chainPart.match(/border-box|padding-box|content-box|text/);
        }) === index) {
            css.backgroundOrigin = setChainedValue(css.backgroundOrigin, value);
        }
        else {
            css.backgroundClip = setChainedValue(css.backgroundClip, value);
        }
    }
    else if (chain[index - 1] === "/") {
        css.backgroundSize = setChainedValue(css.backgroundSize, tokens.sizes[value] || value);
    }
    else if (value.match(/center|top|right|bottom|left/) ||
        value.match(unitMatch) ||
        tokens.sizes[value])
        css.backgroundPosition = setChainedValue(css.backgroundPosition, tokens.sizes[value] || value);
    else if (value.match(/repeat|no-repeat|repeat-x|repeat-y|space|round/))
        css.backgroundRepeat = setChainedValue(css.backgroundRepeat, value);
    else {
        if (chainIndex !== chains.length - 1) {
            throw new Error("You can only add background colors on the last chain");
        }
        css.backgroundColor = setChainedValue(css.backgroundColor, tokens.colors[value] || value);
    }
});
var animation = createPropertyParser(function (_, css, value, index, chain) {
    if (value.match(easingMatch)) {
        css.animationTimingFunction = setChainedValue(css.animationTimingFunction, value);
    }
    else if (value.match(/^\d+$|infinite/)) {
        css.animationIterationCount = setChainedValue(css.animationIterationCount, value);
    }
    else if (value.match(/normal|reverse|alternate|alternate-reverse/)) {
        css.animationDirection = setChainedValue(css.animationDirection, value);
    }
    else if (value.match(/none|forward|backwards|both/)) {
        css.animationFillMode = setChainedValue(css.animationFillMode, value);
    }
    else if (value.match(/running|paused/)) {
        css.animationPlayState = setChainedValue(css.animationPlayState, value);
    }
    else if (value.match(unitMatch)) {
        if (chain.findIndex(function (part) { return part.match(unitMatch); }) === index) {
            css.animationDuration = setChainedValue(css.animationDuration, value);
        }
        else {
            css.animationDelay = setChainedValue(css.animationDelay, value);
        }
    }
    else {
        css.animationName = setChainedValue(css.animationName, value);
    }
});
var font = createPropertyParser(function (tokens, css, value) {
    if (value.match(/^[0-9.]+deg/))
        css.fontStyle += " " + value;
    else if (value.match(/\//)) {
        var _a = value.split("/"), fontSize = _a[0], lineHeight = _a[1];
        css.fontSize = tokens.fontSizes[fontSize] || fontSize;
        css.lineHeight = tokens.lineHeights[lineHeight] || lineHeight;
    }
    else if (value.match(unitMatch) ||
        value.match(/xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large/) ||
        tokens.fontSizes[value])
        css.fontSize = tokens.fontSizes[value] || value;
    else if (value.match(/normal|italic|oblique/))
        css.fontStyle = value;
    else if (value.match(/normal|bold/) || tokens.fontWeights[value])
        css.fontWeight =
            value === "normal" ? 400 : tokens.fontWeights[value] || 700;
    else if (value.match(unitMatch) || tokens.fontSizes[value])
        css.fontSize = tokens.fontSizes[value] || value;
    else {
        css.fontFamily = setChainedValue(css.fontFamily, tokens.fonts[value] || value);
    }
});
var transition = createPropertyParser(
// The whole token is a transition, so need to grab it before passing in here
function (_, css, value, index, chain) {
    if (value.match(unitMatch)) {
        if (chain.findIndex(function (part) { return part.match(unitMatch); }) === index) {
            css.transitionDuration = setChainedValue(css.transitionDuration, value);
        }
        else {
            css.transitionDelay = setChainedValue(css.transitionDelay, value);
        }
    }
    else if (value.match(easingMatch)) {
        css.transitionTimingFunction = setChainedValue(css.transitionTimingFunction, value);
    }
    else {
        css.transitionProperty = setChainedValue(css.transitionProperty, value);
    }
});
var margin = createPropertyParser(function (tokens, css, value, index) {
    if (index === 0) {
        css.marginTop = tokens.space[value] || value;
        css.marginRight = tokens.space[value] || value;
        css.marginBottom = tokens.space[value] || value;
        css.marginLeft = tokens.space[value] || value;
    }
    else if (index === 1) {
        css.marginRight = tokens.space[value] || value;
        css.marginLeft = tokens.space[value] || value;
    }
    else if (index === 2) {
        css.marginBottom = tokens.space[value] || value;
    }
    else {
        css.marginLeft = tokens.space[value] || value;
    }
});
var padding = createPropertyParser(function (tokens, css, value, index) {
    if (index === 0) {
        css.paddingTop = tokens.space[value] || value;
        css.paddingRight = tokens.space[value] || value;
        css.paddingBottom = tokens.space[value] || value;
        css.paddingLeft = tokens.space[value] || value;
    }
    else if (index === 1) {
        css.paddingRight = tokens.space[value] || value;
        css.paddingLeft = tokens.space[value] || value;
    }
    else if (index === 2) {
        css.paddingBottom = tokens.space[value] || value;
    }
    else {
        css.paddingLeft = tokens.space[value] || value;
    }
});
var border = createPropertyParser(function (tokens, css, value) {
    if (value.match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/)) {
        css.borderTopStyle = value;
        css.borderRightStyle = value;
        css.borderBottomStyle = value;
        css.borderLeftStyle = value;
    }
    else if (value.match(unitMatch) ||
        tokens.borderWidths[value] ||
        !isNaN(value)) {
        css.borderTopWidth = tokens.borderWidths[value] || value;
        css.borderRightWidth = tokens.borderWidths[value] || value;
        css.borderBottomWidth = tokens.borderWidths[value] || value;
        css.borderLeftWidth = tokens.borderWidths[value] || value;
    }
    else {
        css.borderTopColor = tokens.colors[value] || value;
        css.borderRightColor = tokens.colors[value] || value;
        css.borderBottomColor = tokens.colors[value] || value;
        css.borderLeftColor = tokens.colors[value] || value;
    }
});
var borderTop = createPropertyParser(function (tokens, css, value) {
    if (value.match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/)) {
        css.borderTopStyle = value;
    }
    else if (value.match(unitMatch) || tokens.borderWidths[value]) {
        css.borderTopWidth = tokens.borderWidths[value] || value;
    }
    else {
        css.borderTopColor = tokens.colors[value] || value;
    }
});
var borderRight = createPropertyParser(function (tokens, css, value) {
    if (value.match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/)) {
        css.borderRightStyle = value;
    }
    else if (value.match(unitMatch) || tokens.borderWidths[value]) {
        css.borderRightWidth = tokens.borderWidths[value] || value;
    }
    else {
        css.borderRightColor = tokens.colors[value] || value;
    }
});
var borderLeft = createPropertyParser(function (tokens, css, value) {
    if (value.match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/)) {
        css.borderLeftStyle = value;
    }
    else if (value.match(unitMatch) || tokens.borderWidths[value]) {
        css.borderLeftWidth = tokens.borderWidths[value] || value;
    }
    else {
        css.borderLeftColor = tokens.colors[value] || value;
    }
});
var borderBottom = createPropertyParser(function (tokens, css, value) {
    if (value.match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/)) {
        css.borderBottomStyle = value;
    }
    else if (value.match(unitMatch) || tokens.borderWidths[value]) {
        css.borderBottomWidth = tokens.borderWidths[value] || value;
    }
    else {
        css.borderBottomColor = tokens.colors[value] || value;
    }
});
var borderWidth = createPropertyParser(function (tokens, css, value, index) {
    if (index === 0) {
        css.borderTopWidth = tokens.borderWidths[value] || value;
        css.borderRightWidth = tokens.borderWidths[value] || value;
        css.borderBottomWidth = tokens.borderWidths[value] || value;
        css.borderLeftWidth = tokens.borderWidths[value] || value;
    }
    else if (index === 1) {
        css.borderRightWidth = tokens.borderWidths[value] || value;
        css.borderLeftWidth = tokens.borderWidths[value] || value;
    }
    else if (index === 2) {
        css.borderBottomWidth = tokens.borderWidths[value] || value;
    }
    else {
        css.borderLeftWidth = tokens.borderWidths[value] || value;
    }
});
var borderColor = createPropertyParser(function (tokens, css, value, index) {
    if (index === 0) {
        css.borderTopColor = tokens.colors[value] || value;
        css.borderRightColor = tokens.colors[value] || value;
        css.borderBottomColor = tokens.colors[value] || value;
        css.borderLeftColor = tokens.colors[value] || value;
    }
    else if (index === 1) {
        css.borderRightColor = tokens.colors[value] || value;
        css.borderLeftColor = tokens.colors[value] || value;
    }
    else if (index === 2) {
        css.borderBottomColor = tokens.colors[value] || value;
    }
    else {
        css.borderLeftColor = tokens.colors[value] || value;
    }
});
var borderStyle = createPropertyParser(function (tokens, css, value, index) {
    if (index === 0) {
        css.borderTopStyle = value;
        css.borderRightStyle = value;
        css.borderBottomStyle = value;
        css.borderLeftStyle = value;
    }
    else if (index === 1) {
        css.borderRightStyle = value;
        css.borderLeftStyle = value;
    }
    else if (index === 2) {
        css.borderBottomStyle = value;
    }
    else {
        css.borderLeftStyle = value;
    }
});
var borderRadius = createPropertyParser(function (tokens, css, value, index) {
    if (index === 0) {
        css.borderBottomLeftRadius = tokens.radii[value] || value;
        css.borderTopLeftRadius = tokens.radii[value] || value;
        css.borderTopRightRadius = tokens.radii[value] || value;
        css.borderBottomRightRadius = tokens.radii[value] || value;
    }
    else if (index === 1) {
        css.borderTopRightRadius = tokens.radii[value] || value;
        css.borderBottomLeftRadius = tokens.radii[value] || value;
    }
    else if (index === 2) {
        css.borderBottomRightRadius = tokens.radii[value] || value;
    }
    else if (index === 3) {
        css.borderBottomLeftRadius = tokens.radii[value] || value;
    }
});
var boxShadow = function (tokens, value) {
    return {
        boxShadow: Object(_value_tokenizer__WEBPACK_IMPORTED_MODULE_1__["tokenizeValue"])(value)
            .map(function (chain) { return chain.map(function (val) { return tokens.colors[val] || val; }).join(" "); })
            .join(", "),
    };
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/shorthand-parser/value-tokenizer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@stitches/core/es/shorthand-parser/value-tokenizer.js ***!
  \****************************************************************************/
/*! exports provided: tokenizeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizeValue", function() { return tokenizeValue; });
var TOKEN_STRING = 1;
var TOKEN_QUOTED_STRING = 2;
var TOKEN_FUNCTION = 3;
var TOKEN_BRACKET = 4;
var currentType;
var currentToken = "";
var currentDepth = 0;
var tokenGroups = [[]];
var tokenizeValue = function (str) {
    resetCurrentToken();
    tokenGroups = [[]];
    if (!str) {
        return tokenGroups;
    }
    var strLength = str.length;
    for (var i = 0; i < strLength; i++) {
        var char = str[i];
        switch (char) {
            // whitespace
            case " ":
                if (currentType === TOKEN_STRING) {
                    addCurrentTokenToGroup();
                }
                else if (currentType) {
                    currentToken += char;
                }
                break;
            // new token group
            case ",":
                if (!currentDepth) {
                    addCurrentTokenToGroup();
                    addNewTokenGroup();
                }
                else {
                    currentToken += char;
                }
                break;
            // Quoted string:
            case '"':
                currentToken += char;
                if (!currentDepth && !currentType) {
                    currentType = TOKEN_QUOTED_STRING;
                    currentDepth = 1;
                }
                else if (currentDepth === 1 && currentType === TOKEN_QUOTED_STRING) {
                    currentDepth = 0;
                    addCurrentTokenToGroup();
                }
                break;
            // Css function:
            case "(":
                if (!currentDepth)
                    currentType = TOKEN_FUNCTION;
                currentDepth++;
                currentToken += char;
                break;
            case ")":
                currentToken += char;
                currentDepth--;
                if (currentType === TOKEN_FUNCTION && !currentDepth)
                    addCurrentTokenToGroup();
                break;
            // Bracket values:
            case "[":
                if (!currentDepth)
                    currentType = TOKEN_BRACKET;
                currentToken += char;
                currentDepth++;
                break;
            case "]":
                currentToken += char;
                currentDepth--;
                if (!currentDepth)
                    addCurrentTokenToGroup();
                break;
            default:
                if (!currentType)
                    currentType = TOKEN_STRING;
                currentToken += char;
        }
    }
    if (currentToken)
        addCurrentTokenToGroup();
    return tokenGroups;
};
/**
 * UTILS:
 */
/**
 * Resets the current token info
 */
function resetCurrentToken() {
    currentDepth = currentType = 0;
    currentToken = "";
}
/**
 * Adds current token to the stack then starts a new one
 */
function addCurrentTokenToGroup() {
    if (currentType)
        tokenGroups[tokenGroups.length - 1].push(currentToken);
    resetCurrentToken();
}
/**
 * Adds a new token group and requests a new one
 * For things like animations or box shadow where there might be multiple rules
 * applied to the same value
 */
function addNewTokenGroup() {
    tokenGroups[tokenGroups.length] = [];
    resetCurrentToken();
}
//# sourceMappingURL=value-tokenizer.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/types.js":
/*!*************************************************!*\
  !*** ./node_modules/@stitches/core/es/types.js ***!
  \*************************************************/
/*! exports provided: ATOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATOM", function() { return ATOM; });
var ATOM = Symbol("ATOM");
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/unitless.js":
/*!****************************************************!*\
  !*** ./node_modules/@stitches/core/es/unitless.js ***!
  \****************************************************/
/*! exports provided: unitlessKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitlessKeys", function() { return unitlessKeys; });
var unitlessKeys = {
    // animation duration only added so that it's ignored:
    animationDuration: 1,
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
};
//# sourceMappingURL=unitless.js.map

/***/ }),

/***/ "./node_modules/@stitches/core/es/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@stitches/core/es/utils.js ***!
  \*************************************************/
/*! exports provided: MAIN_BREAKPOINT_ID, cssPropToToken, tokenTypes, createSheets, specificityProps, getVendorPrefixAndProps, hashString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_BREAKPOINT_ID", function() { return MAIN_BREAKPOINT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssPropToToken", function() { return cssPropToToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenTypes", function() { return tokenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSheets", function() { return createSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specificityProps", function() { return specificityProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixAndProps", function() { return getVendorPrefixAndProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashString", function() { return hashString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shorthand-parser */ "./node_modules/@stitches/core/es/shorthand-parser/index.js");


var MAIN_BREAKPOINT_ID = "initial";
var cssPropToToken = {
    gap: "space",
    gridGap: "space",
    columnGap: "space",
    gridColumnGap: "space",
    rowGap: "space",
    gridRowGap: "space",
    inset: "space",
    insetBlock: "space",
    insetBlockEnd: "space",
    insetBlockStart: "space",
    insetInline: "space",
    insetInlineEnd: "space",
    insetInlineStart: "space",
    margin: "space",
    marginTop: "space",
    marginRight: "space",
    marginBottom: "space",
    marginLeft: "space",
    marginBlock: "space",
    marginBlockEnd: "space",
    marginBlockStart: "space",
    marginInline: "space",
    marginInlineEnd: "space",
    marginInlineStart: "space",
    padding: "space",
    paddingTop: "space",
    paddingRight: "space",
    paddingBottom: "space",
    paddingLeft: "space",
    paddingBlock: "space",
    paddingBlockEnd: "space",
    paddingBlockStart: "space",
    paddingInline: "space",
    paddingInlineEnd: "space",
    paddingInlineStart: "space",
    top: "space",
    right: "space",
    bottom: "space",
    left: "space",
    fontSize: "fontSizes",
    backgroundColor: "colors",
    border: ["", "borderStyles", "colors"],
    borderColor: "colors",
    borderTopColor: "colors",
    borderRightColor: "colors",
    borderBottomColor: "colors",
    borderLeftColor: "colors",
    caretColor: "colors",
    color: "colors",
    columnRuleColor: "colors",
    outlineColor: "colors",
    fill: "colors",
    stroke: "colors",
    fontFamily: "fonts",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    blockSize: "sizes",
    minBlockSize: "sizes",
    maxBlockSize: "sizes",
    inlineSize: "sizes",
    minInlineSize: "sizes",
    maxInlineSize: "sizes",
    width: "sizes",
    minWidth: "sizes",
    maxWidth: "sizes",
    height: "sizes",
    minHeight: "sizes",
    maxHeight: "sizes",
    flexBasis: "sizes",
    borderWidth: "borderWidths",
    borderTopWidth: "borderWidths",
    borderLeftWidth: "borderWidths",
    borderRightWidth: "borderWidths",
    borderBottomWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderTopStyle: "borderStyles",
    borderLeftStyle: "borderStyles",
    borderRightStyle: "borderStyles",
    borderBottomStyle: "borderStyles",
    borderRadius: "radii",
    borderTopLeftRadius: "radii",
    borderTopRightRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    boxShadow: "shadows",
    textShadow: "shadows",
    zIndex: "zIndices",
    transition: "transitions",
};
var tokenTypes = [
    "sizes",
    "colors",
    "space",
    "fontSizes",
    "lineHeights",
    "fontWeights",
    "fonts",
    "borderWidths",
    "radii",
];
var enhanceSheet = function (sheet) {
    return {
        content: sheet.content,
        cssRules: sheet.cssRules,
        insertRule: function (rule) {
            try {
                var newIndex = sheet.insertRule(rule, rule.startsWith("@") ? sheet.cssRules.length : 0);
                return newIndex;
            }
            catch (_a) {
                return -1;
            }
        },
    };
};
var createSheets = function (env, screens) {
    if (screens === void 0) { screens = {}; }
    var tags = [];
    if (env && env.document) {
        var head_1 = env.document.querySelector("head");
        if (!head_1) {
            throw new Error("There is no HEAD element on this document");
        }
        var styles = Array.from(head_1.querySelectorAll("style"));
        var existingStyles_1 = styles.filter(function (style) {
            return Boolean(style.textContent && style.textContent.startsWith("/* STITCHES"));
        });
        return {
            tags: tags,
            sheets: ["__variables__", MAIN_BREAKPOINT_ID]
                .concat(Object.keys(screens))
                .reduce(function (aggr, key, index) {
                var style = existingStyles_1[index];
                if (!style) {
                    style = env.document.createElement("style");
                    head_1.appendChild(style);
                }
                tags.push(style);
                for (var x = 0; x < document.styleSheets.length; x++) {
                    if (document.styleSheets[x].ownerNode === style) {
                        aggr[key] = enhanceSheet(document.styleSheets[x]);
                        break;
                    }
                }
                return aggr;
            }, {}),
        };
    }
    return {
        tags: tags,
        sheets: ["__variables__", MAIN_BREAKPOINT_ID]
            .concat(Object.keys(screens))
            .reduce(function (aggr, key) {
            aggr[key] = enhanceSheet({
                content: "",
                cssRules: [],
                insertRule: function (content, index) {
                    if (index === void 0) { index = 0; }
                    this.cssRules.splice(index, 0, content);
                },
            });
            return aggr;
        }, {}),
    };
};
var specificityProps = {
    border: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["border"],
    boxShadow: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["boxShadow"],
    flex: function (tokens, value) {
        if (Array.isArray(value)) {
            if (value.length === 2) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ flexGrow: value[0] }, (isNaN(value[1])
                    ? { flexBasis: value[1] }
                    : { flexShrink: value[1] }));
            }
            if (value.length === 3) {
                return {
                    flexGrow: value[0],
                    flexShrink: value[1],
                    flexBasis: value[2],
                };
            }
        }
        return isNaN(value)
            ? {
                flexBasis: value,
            }
            : {
                flexGrow: value,
            };
    },
    overflow: function (tokens, value) { return ({
        overflowX: value,
        overflowY: value,
    }); },
    margin: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["margin"],
    padding: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["padding"],
    borderRadius: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderRadius"],
    borderColor: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderColor"],
    borderStyle: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderStyle"],
    borderWidth: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderWidth"],
    background: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["background"],
    animation: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["animation"],
    transition: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["transition"],
    font: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["font"],
    borderBottom: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderBottom"],
    borderLeft: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderLeft"],
    borderTop: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderTop"],
    borderRight: _shorthand_parser__WEBPACK_IMPORTED_MODULE_1__["borderRight"],
};
var getVendorPrefixAndProps = function (env) {
    var styles = env.getComputedStyle(env.document.documentElement);
    var vendorProps = Array.from(styles).filter(function (prop) { return prop[0] === "-"; });
    // @ts-ignore
    var vendorPrefix = (vendorProps.join("").match(/-(moz|webkit|ms)-/) ||
        (styles.OLink === "" && ["", "o"]))[1];
    return { vendorPrefix: "-" + vendorPrefix + "-", vendorProps: vendorProps };
};
var hashString = function (str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return generateAlphabeticName(hash >>> 0);
};
/**
 * Converts a hash number to alphabetic representation:
 * Copied from:
 * https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/generateAlphabeticName.js
 */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function (code) {
    return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
    var name = "";
    var x;
    /* get a char and divide by alphabet-length */
    for (x = Math.abs(code); x > charsLength; x = (x / charsLength) | 0) {
        name = getAlphabeticChar(x % charsLength) + name;
    }
    return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, "$1-$2");
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@stitches/react/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@stitches/react/es/index.js ***!
  \**************************************************/
/*! exports provided: createStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyled", function() { return createStyled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stitches_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stitches/core */ "./node_modules/@stitches/core/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var hasWarnedInlineStyle = false;
var createCompoundVariantsMatcher = function (breakPoints, existingMap) {
    var map = new Map();
    map.set(_stitches_core__WEBPACK_IMPORTED_MODULE_1__["MAIN_BREAKPOINT_ID"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(((existingMap === null || existingMap === void 0 ? void 0 : existingMap.get(_stitches_core__WEBPACK_IMPORTED_MODULE_1__["MAIN_BREAKPOINT_ID"])) || [])));
    Object.keys(breakPoints).forEach(function (breakpoint) {
        return map.set(breakpoint, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(((existingMap === null || existingMap === void 0 ? void 0 : existingMap.get(breakpoint)) || [])));
    });
    return map;
};
var createStyled = function (config) {
    var css = Object(_stitches_core__WEBPACK_IMPORTED_MODULE_1__["createCss"])(config);
    var defaultElement = "div";
    var Box = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
        var Element = props.as || defaultElement;
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: ref }, props), { as: undefined }));
    });
    var currentAs;
    var configBreakpoints = config.breakpoints || {};
    var styledInstance = function (baseAndVariantStyles, Component) {
        if (baseAndVariantStyles === void 0) { baseAndVariantStyles = function (cssComposer) { return cssComposer.compose(); }; }
        if (Component === void 0) { Component = Box; }
        var numberOfCompoundVariants = 0;
        var as = currentAs;
        var _a = baseAndVariantStyles.variants, variants = _a === void 0 ? {} : _a, base = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(baseAndVariantStyles, ["variants"]);
        var baseStyles = css(base);
        // compound s vars & constants:
        // keep track of all compound variants:
        var compoundVariants = [];
        // a map that keeps track of the required number of matching s left for each break point:
        var requiredMatches = createCompoundVariantsMatcher(configBreakpoints);
        // keep track of the number of available variants
        var evaluatedVariantMap = new Map();
        // store pre evaluated variants
        var evaluatedCompoundVariants = new Map();
        // tslint:disable-next-line: forin
        for (var Name in variants) {
            var variantMap = new Map();
            // tslint:disable-next-line: forin
            for (var ValueName in variants[Name]) {
                var evaluatedStyles = evaluateStylesForAllBreakpoints(variants[Name][ValueName], configBreakpoints, css);
                variantMap.set(ValueName, evaluatedStyles);
            }
            evaluatedVariantMap.set(Name, variantMap);
        }
        var stitchesComponentId = "scid-" + Object(_stitches_core__WEBPACK_IMPORTED_MODULE_1__["hashString"])(JSON.stringify(baseAndVariantStyles));
        var StitchesComponent = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
            var _a;
            // Check the memoCompsition's identity to warn the user
            // remove in production
            if (true) {
                // we're breaking the rules of hooks on purpose as the env will never change
                // eslint-disable-next-line
                var memoStyled = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () { return props.css; }, []); // We want this to only eval once
                if (memoStyled !== props.css && !hasWarnedInlineStyle) {
                    // tslint:disable-next-line
                    console.warn("@stitches/react : The css prop should ideally not be dynamic. Define it outside your component using the css composer, or use a memo hook");
                    hasWarnedInlineStyle = true;
                }
            }
            var compositions = [baseStyles];
            var propsWithoutVariantsAndCssProp = {};
            // clone the compound s matcher
            var compoundRequiredMatches = createCompoundVariantsMatcher(configBreakpoints, requiredMatches);
            // keep track of the number of unResolved s so that we could bail early:
            var numberOfUnResolvedCompoundVariants = {
                current: numberOfCompoundVariants,
            };
            var _loop_1 = function (key) {
                var _a;
                // check if the prop is a variant
                if (key in variants) {
                    var evaluatedVariant = evaluatedVariantMap.get(key);
                    // normalize the value so that we only have to deal with one structure:
                    var keyVal_1 = props[key] && typeof props[key] !== "object"
                        ? (_a = {}, _a[_stitches_core__WEBPACK_IMPORTED_MODULE_1__["MAIN_BREAKPOINT_ID"]] = props[key], _a) : props[key];
                    var _loop_2 = function (breakpoint) {
                        // check if the variant exist for this breakpoint
                        if (keyVal_1[breakpoint] &&
                            evaluatedVariant &&
                            evaluatedVariant.get(String(keyVal_1[breakpoint]))) {
                            compositions.push((_a = evaluatedVariant.get(String(keyVal_1[breakpoint]))) === null || _a === void 0 ? void 0 : _a[breakpoint]);
                        }
                        /** Compound variants: */
                        if (numberOfUnResolvedCompoundVariants.current) {
                            compoundVariants.forEach(function (compoundVariant, i) {
                                var _a;
                                // if this breakpoint  matches a compound
                                // eslint-disable-next-line
                                if (String(keyVal_1[breakpoint]) === String(compoundVariant[key])) {
                                    compoundRequiredMatches.get(breakpoint)[i]--;
                                }
                                // when the required matches reach 0 for any compound ...
                                // we know we have a matched compoundVariant
                                if (compoundRequiredMatches.get(breakpoint)[i] === 0) {
                                    numberOfUnResolvedCompoundVariants.current--;
                                    compositions.push((_a = evaluatedCompoundVariants.get(compoundVariant)) === null || _a === void 0 ? void 0 : _a[breakpoint]);
                                }
                            });
                        }
                    };
                    // tslint:disable-next-line: forin
                    for (var breakpoint in keyVal_1) {
                        _loop_2(breakpoint);
                    }
                }
                else {
                    propsWithoutVariantsAndCssProp[key] = props[key];
                }
            };
            for (var key in props) {
                _loop_1(key);
            }
            if (propsWithoutVariantsAndCssProp.css) {
                compositions.push(propsWithoutVariantsAndCssProp.css);
                propsWithoutVariantsAndCssProp.css = undefined;
            }
            return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, propsWithoutVariantsAndCssProp), { as: props.as || as, ref: ref, className: css.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([stitchesComponentId], compositions, [props.className])) }));
        });
        StitchesComponent.toString = function () { return "." + stitchesComponentId; };
        StitchesComponent.compoundVariant = function (compundVariantsObject, compoundVariantStyles) {
            // Update component level variables:
            numberOfCompoundVariants++;
            // Each time we add
            compoundVariants.push(compundVariantsObject);
            // required matches is a map with breakpoints
            // each time we add a compound variant, we also push its length to
            // all of the breakpoints so:
            // requiredMatches.get(breakpoint)[i] === Object.keys(compoundVariants[i]).length
            // at render time we clone the requiredMatches map and whenever a prop matches a compound variant we decrement
            // the required matches for this compound variant at this breakpoint
            // when the required matches hit 0 we know it's a mtach
            requiredMatches.forEach(function (value, key) {
                value.push(Object.keys(compundVariantsObject).length);
            });
            var evaluatedStyles = evaluateStylesForAllBreakpoints(compoundVariantStyles, configBreakpoints, css);
            evaluatedCompoundVariants.set(compundVariantsObject, evaluatedStyles);
            return StitchesComponent;
        };
        return StitchesComponent;
    };
    // tslint:disable-next-line
    var styledProxy = new Proxy(function () { }, {
        get: function (_, prop) {
            if (prop === "Box") {
                return Box;
            }
            currentAs = String(prop);
            return styledInstance;
        },
        apply: function (_, __, _a) {
            var Element = _a[0], styling = _a[1];
            if (typeof Element === "string") {
                currentAs = Element;
                return styledInstance(styling);
            }
            currentAs = undefined;
            return styledInstance(styling, Element);
        },
    });
    return {
        styled: styledProxy,
        css: css,
    };
};
function evaluateStylesForAllBreakpoints(styleObject, configBreakpoints, css) {
    var _a, _b;
    var breakpoints = (_a = {},
        _a[_stitches_core__WEBPACK_IMPORTED_MODULE_1__["MAIN_BREAKPOINT_ID"]] = css(styleObject),
        _a);
    if (configBreakpoints) {
        // tslint:disable-next-line
        for (var breakpoint in configBreakpoints) {
            breakpoints[breakpoint] = css((_b = {},
                _b[breakpoint] = styleObject,
                _b));
        }
    }
    return breakpoints;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Farthur%2Fgit%2Fstitches%2Fsrc%2Fpages%2Findex.tsx!./":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Farthur%2Fgit%2Fstitches%2Fsrc%2Fpages%2Findex.tsx ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/stitches.config */ "./src/stitches.config.ts");


var _true,
    _jsxFileName = "/home/arthur/git/stitches/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var darkTheme = _stitches_config__WEBPACK_IMPORTED_MODULE_2__["css"].theme({
  $background: "#303030",
  $textColor: "#f0f0f0"
});
_stitches_config__WEBPACK_IMPORTED_MODULE_2__["css"].global(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["reset"]);
var Title = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])("h1", {
  fontSize: "$xl",
  marginBottom: "$l",
  color: "$constructive",
  backgroundColor: "yellow",
  ":hover": {
    color: "$destructive"
  }
});
_c = Title;
var SubTitle = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])("h2", {
  fontSize: "$l",
  marginBottom: "$l",
  color: "$constructive"
});
_c2 = SubTitle;
var BaseButton = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])("button", {
  outline: "none",
  border: "none",
  cursor: "pointer",
  backgroundColor: "$background",
  color: "$textColor",
  variants: {
    shadow: {
      "true": {
        boxShadow: "8px 8px 8px #00000040"
      }
    }
  }
});
var Button = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])(BaseButton, {
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
_c3 = Button;
var ConstructButton = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])(Button, {
  backgroundColor: "$constructive",
  color: "white"
});
_c4 = ConstructButton;
var DestructButton = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])(Button, {
  backgroundColor: "$destructive",
  color: "white"
});
_c5 = DestructButton;
var ButtonGroup = Object(_stitches_config__WEBPACK_IMPORTED_MODULE_2__["styled"])("div", {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  variants: {
    ordered: {
      "true": (_true = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_true, "> ".concat(DestructButton), {
        order: -1
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_true, "> ".concat(ConstructButton), {
        order: 1
      }), _true)
    }
  }
});
_c6 = ButtonGroup;
function Main() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Title, {
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
_c7 = Main;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "SubTitle");
$RefreshReg$(_c3, "Button");
$RefreshReg$(_c4, "ConstructButton");
$RefreshReg$(_c5, "DestructButton");
$RefreshReg$(_c6, "ButtonGroup");
$RefreshReg$(_c7, "Main");

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

/***/ }),

/***/ "./src/stitches.config.ts":
/*!********************************!*\
  !*** ./src/stitches.config.ts ***!
  \********************************/
/*! exports provided: styled, css, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stitches/react */ "./node_modules/@stitches/react/es/index.js");



var _createStyled = Object(_stitches_react__WEBPACK_IMPORTED_MODULE_1__["createStyled"])({
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
    tablet: function tablet(rule) {
      return "@media (min-width:500px) {".concat(rule, "}");
    },
    desktop: function desktop(rule) {
      return "@media (min-width:1024px) {".concat(rule, "}");
    },
    print: function print(rule) {
      return "@media print {".concat(rule, "}");
    }
  },
  utils: {}
}),
    styled = _createStyled.styled,
    css = _createStyled.css;


var reset = {
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
  "blockquote:before, blockquote:after, q:before, q:after": Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: ""
  }, "content", "none"),
  table: {
    borderSpacing: "0"
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Farthur%2Fgit%2Fstitches%2Fsrc%2Fpages%2Findex.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0aXRjaGVzL2NvcmUvZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0aXRjaGVzL2NvcmUvZXMvY3NzLXR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0aXRjaGVzL2NvcmUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3RpdGNoZXMvY29yZS9lcy9zaG9ydGhhbmQtcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0aXRjaGVzL2NvcmUvZXMvc2hvcnRoYW5kLXBhcnNlci92YWx1ZS10b2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3RpdGNoZXMvY29yZS9lcy90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdGl0Y2hlcy9jb3JlL2VzL3VuaXRsZXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0aXRjaGVzL2NvcmUvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3RpdGNoZXMvcmVhY3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdGl0Y2hlcy5jb25maWcudHMiXSwibmFtZXMiOlsiZGFya1RoZW1lIiwiY3NzIiwidGhlbWUiLCIkYmFja2dyb3VuZCIsIiR0ZXh0Q29sb3IiLCJnbG9iYWwiLCJyZXNldCIsIlRpdGxlIiwic3R5bGVkIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIlN1YlRpdGxlIiwiQmFzZUJ1dHRvbiIsIm91dGxpbmUiLCJib3JkZXIiLCJjdXJzb3IiLCJ2YXJpYW50cyIsInNoYWRvdyIsImJveFNoYWRvdyIsIkJ1dHRvbiIsInBhZGRpbmciLCJ0YWJsZXQiLCJkZXNrdG9wIiwicHJpbnQiLCJDb25zdHJ1Y3RCdXR0b24iLCJEZXN0cnVjdEJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJvcmRlcmVkIiwib3JkZXIiLCJNYWluIiwiY3JlYXRlU3R5bGVkIiwidG9rZW5zIiwiY29sb3JzIiwiJHByaW1hcnkiLCIkc2Vjb25kYXJ5IiwiJGRlc3RydWN0aXZlIiwiJGNvbnN0cnVjdGl2ZSIsInNwYWNlIiwiJG5vbmUiLCIkcyIsIiRtIiwiJGwiLCJmb250U2l6ZXMiLCIkeHMiLCIkeGwiLCJicmVha3BvaW50cyIsInJ1bGUiLCJ1dGlscyIsIm1hcmdpbiIsImZvbnQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm94U2l6aW5nIiwiYm9keSIsImxpbmVIZWlnaHQiLCJsaXN0U3R5bGUiLCJxdW90ZXMiLCJjb250ZW50IiwidGFibGUiLCJib3JkZXJTcGFjaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7OztBQ2hCQSxxQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDRTtBQUNUO0FBQ1U7QUFDeUY7QUFDM0c7QUFDSTtBQUNKO0FBQ2pCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRSx1Q0FBdUMsMEJBQTBC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LDhCQUE4QixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBLG1CQUFtQixzRUFBYTtBQUNoQyxtQ0FBbUMsa0NBQWtDLGtDQUFrQyxFQUFFLFlBQVksRUFBRTtBQUN2SDtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQzs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQUE7QUFBTztBQUNQLGlDOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDd0w7QUFDbE47QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1As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QUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhNQUE4TTs7QUFFOU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0FBMkJBLElBQTNCO0FBQUE7QUFISSxHQXhCNkI7QUE2QjFDQyxPQUFLLEVBQUU7QUE3Qm1DLENBQUQsQztJQUE1QjVDLE0saUJBQUFBLE07SUFBUVAsRyxpQkFBQUEsRzs7O0FBZ0NoQixJQUFNSyxLQUFLLEdBQUc7QUFDbkIsc2ZBQW9mO0FBQ2xmK0MsVUFBTSxFQUFFLEdBRDBlO0FBRWxmL0IsV0FBTyxFQUFFLEdBRnllO0FBR2xmTixVQUFNLEVBQUUsR0FIMGU7QUFJbGZQLFlBQVEsRUFBRSxNQUp3ZTtBQUtsZjZDLFFBQUksRUFBRSxTQUw0ZTtBQU1sZkMsaUJBQWEsRUFBRSxVQU5tZTtBQU9sZkMsYUFBUyxFQUFFO0FBUHVlLEdBRGplO0FBVW5CLG1HQUFpRztBQUMvRjNCLFdBQU8sRUFBRTtBQURzRixHQVY5RTtBQWFuQixlQUFhO0FBQ1hBLFdBQU8sRUFBRTtBQURFLEdBYk07QUFnQm5CNEIsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRTtBQURSLEdBaEJhO0FBbUJuQixZQUFVO0FBQ1JDLGFBQVMsRUFBRTtBQURILEdBbkJTO0FBc0JuQixtQkFBaUI7QUFDZkMsVUFBTSxFQUFFO0FBRE8sR0F0QkU7QUF5Qm5CO0FBQ0VDLFdBQU8sRUFBRTtBQURYLGdCQUdXLE1BSFgsQ0F6Qm1CO0FBOEJuQkMsT0FBSyxFQUFFO0FBQ0xDLGlCQUFhLEVBQUU7QUFEVjtBQTlCWSxDQUFkIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgdmFyIHRva2VuVHlwZXMgPSBbXG4gICAgXCJjb2xvcnNcIixcbiAgICBcInNwYWNlXCIsXG4gICAgXCJmb250U2l6ZXNcIixcbiAgICBcImZvbnRzXCIsXG4gICAgXCJmb250V2VpZ2h0c1wiLFxuICAgIFwibGluZUhlaWdodHNcIixcbiAgICBcImxldHRlclNwYWNpbmdzXCIsXG4gICAgXCJzaXplc1wiLFxuICAgIFwiYm9yZGVyV2lkdGhzXCIsXG4gICAgXCJib3JkZXJTdHlsZXNcIixcbiAgICBcInJhZGlpXCIsXG4gICAgXCJzaGFkb3dzXCIsXG4gICAgXCJ6SW5kaWNlc1wiLFxuICAgIFwidHJhbnNpdGlvbnNcIixcbl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXR5cGVzLmpzLm1hcCIsImltcG9ydCB7IF9fc3ByZWFkQXJyYXlzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBVE9NLCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyB1bml0bGVzc0tleXMgfSBmcm9tIFwiLi91bml0bGVzc1wiO1xuaW1wb3J0IHsgTUFJTl9CUkVBS1BPSU5UX0lELCBjcmVhdGVTaGVldHMsIGNzc1Byb3BUb1Rva2VuLCBnZXRWZW5kb3JQcmVmaXhBbmRQcm9wcywgaGFzaFN0cmluZywgc3BlY2lmaWNpdHlQcm9wcywgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Nzcy10eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCB2YXIgaG90UmVsb2FkaW5nQ2FjaGUgPSBuZXcgTWFwKCk7XG52YXIgY3JlYXRlU2VsZWN0b3IgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCBzZWxlY3Rvcikge1xuICAgIHZhciBjc3NSdWxlQ2xhc3NOYW1lID0gY2xhc3NOYW1lID8gXCIuXCIgKyBjbGFzc05hbWUgOiBcIlwiO1xuICAgIGlmIChzZWxlY3RvciAmJiBzZWxlY3Rvci5pbmNsdWRlcyhcIiZcIikpXG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5yZXBsYWNlKC8mL2dpLCBjc3NSdWxlQ2xhc3NOYW1lKTtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBjc3NSdWxlQ2xhc3NOYW1lICsgc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBjc3NSdWxlQ2xhc3NOYW1lO1xufTtcbi8qKlxuICogUmVzb2x2ZXMgYSB0b2tlbiB0byBpdHMgY3NzIHZhbHVlIGluIHRoZSBjb250ZXh0IG9mIHRoZSBwYXNzZWQgY3NzIHByb3A6XG4gKi9cbnZhciByZXNvbHZlVG9rZW5zID0gZnVuY3Rpb24gKGNzc1Byb3AsIHZhbHVlLCB0b2tlbnMpIHtcbiAgICB2YXIgdG9rZW4gPSBjc3NQcm9wVG9Ub2tlbltjc3NQcm9wXTtcbiAgICB2YXIgdG9rZW5WYWx1ZTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW4pICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB0b2tlblZhbHVlID0gdG9rZW4ubWFwKGZ1bmN0aW9uICh0b2tlbk5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuICYmXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1t0b2tlbk5hbWVdICYmXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1t0b2tlbk5hbWVdW3ZhbHVlW2luZGV4XV1cbiAgICAgICAgICAgICAgICAgICAgPyB0b2tlbnNbdG9rZW5OYW1lXVt2YWx1ZVtpbmRleF1dXG4gICAgICAgICAgICAgICAgICAgIDogdmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2tlblZhbHVlID1cbiAgICAgICAgICAgICAgICB0b2tlbiAmJiB0b2tlbnNbdG9rZW5dICYmIHRva2Vuc1t0b2tlbl1bdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgID8gdG9rZW5zW3Rva2VuXVt2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9rZW5WYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5WYWx1ZTtcbn07XG4vKipcbiAqIGl0ZXJhdGVzIG92ZXIgYSBzdHlsZSBvYmplY3Qga2V5cyBhbmQgdmFsdWVzLFxuICogcmVzb2x2aW5nIHRoZW0gdG8gdGhlaXIgZmluYWwgZm9ybSB0aGVuIGNhbGxzIHRoZSB2YWx1ZSBjYWxsYmFjayB3aXRoIHRoZSBwcm9wLCB2YWx1ZVxuICogYW5kIHRoZSBjdXJyZW50IHZhbHVlIG5lc3RpbmcgcGF0aCBpbiB0aGUgc3R5bGUgb2JqZWN0OlxuICogLSBoYW5kbGVzIHV0aWxpdGllc1xuICogLSBoYW5kbGVzIHNwZWNpZmljaXR5IHByb3BzXG4gKiAtIGhhbmRsZXMgbmVzdGluZ1xuICogLSBUT0RPOiBhbHNvIGhhbmRsZSB0aGUgdGhpbmdzIGJlbG93IG9uY2Ugd2UgaGFuZGxlIGVudnMgZGlmZmVyZW50bHkgKHRvIGF2b2lkIHBhc3NpbmcgYSBsb3Qgb2YgcHJvcHMgYXJvdW5kKTpcbiAqIC0gaGFuZGxlcyB0b2tlbnNcbiAqIC0gaGFuZGxlcyB2ZW5kb3IgcHJlZml4aW5nXG4gKi9cbnZhciBwcm9jZXNzU3R5bGVPYmplY3QgPSBmdW5jdGlvbiAob2JqLCBjb25maWcsIHZhbHVlTWlkZGxld2FyZSwgY3VycmVudE5lc3RpbmdQYXRoLCBzaG91bGRIYW5kbGVVdGlscywgc2hvdWxkSGFuZGxlU3BlY2lmaWNpdHlQcm9wcykge1xuICAgIGlmIChjdXJyZW50TmVzdGluZ1BhdGggPT09IHZvaWQgMCkgeyBjdXJyZW50TmVzdGluZ1BhdGggPSBbXTsgfVxuICAgIGlmIChzaG91bGRIYW5kbGVVdGlscyA9PT0gdm9pZCAwKSB7IHNob3VsZEhhbmRsZVV0aWxzID0gdHJ1ZTsgfVxuICAgIGlmIChzaG91bGRIYW5kbGVTcGVjaWZpY2l0eVByb3BzID09PSB2b2lkIDApIHsgc2hvdWxkSGFuZGxlU3BlY2lmaWNpdHlQcm9wcyA9IHRydWU7IH1cbiAgICAvLyBrZXk6IGNzcyBwcm9wIG9yIG92ZXJyaWRlIG9yIGEgc2VsZWN0b3JcbiAgICAvLyB2YWx1ZSBpczogY3NzVmFsdWUsIGEgdXRpbCwgc3BlY2lmaWNpdHkgcHJvcCwgb3JcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob2JqKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICB2YXIgaXNVdGlsUHJvcCA9IHNob3VsZEhhbmRsZVV0aWxzICYmIGtleSBpbiBjb25maWcudXRpbHM7XG4gICAgICAgIHZhciBpc1NwZWNpZmljaXR5UHJvcCA9IHNob3VsZEhhbmRsZVNwZWNpZmljaXR5UHJvcHMgJiYgIWlzVXRpbFByb3AgJiYga2V5IGluIHNwZWNpZmljaXR5UHJvcHM7XG4gICAgICAgIC8qKiBOZXN0ZWQgc3R5bGVzOiAqL1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiAhaXNTcGVjaWZpY2l0eVByb3AgJiYgIWlzVXRpbFByb3ApIHtcbiAgICAgICAgICAgIC8vIEF0b20gdmFsdWU6XG4gICAgICAgICAgICBpZiAodmFsW0FUT01dKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVNaWRkbGV3YXJlKGtleSwgdmFsLCBjdXJyZW50TmVzdGluZ1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSB2YWx1ZSBvYmplY3RcbiAgICAgICAgICAgIHByb2Nlc3NTdHlsZU9iamVjdCh2YWwsIGNvbmZpZywgdmFsdWVNaWRkbGV3YXJlLCBfX3NwcmVhZEFycmF5cyhjdXJyZW50TmVzdGluZ1BhdGgsIFtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiogVXRpbHM6ICovXG4gICAgICAgIGlmIChpc1V0aWxQcm9wKSB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHRoZSB1dGlsIGZyb20gdGhlIHV0aWwgZnVuY3Rpb246XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRVdGlscyA9IGNvbmZpZy51dGlsc1trZXldKGNvbmZpZykodmFsKTtcbiAgICAgICAgICAgIHByb2Nlc3NTdHlsZU9iamVjdChyZXNvbHZlZFV0aWxzLCBjb25maWcsIHZhbHVlTWlkZGxld2FyZSwgX19zcHJlYWRBcnJheXMoY3VycmVudE5lc3RpbmdQYXRoKSwgZmFsc2UpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIFNwZWNpZmljaXR5IFByb3BzOiAqL1xuICAgICAgICAvLyBzaG9ydGhhbmQgY3NzIHByb3BzIG9yIGNzcyBwcm9wcyB0aGF0IGhhcyBiYWtlZCBpbiBoYW5kbGluZzpcbiAgICAgICAgLy8gc2VlIHNwZWNpZmljaXR5UHJvcHMgaW4gLi91dGlsc1xuICAgICAgICBpZiAoaXNTcGVjaWZpY2l0eVByb3ApIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZFNwZWNpZmljaXR5UHJvcHMgPSBzcGVjaWZpY2l0eVByb3BzW2tleV0oY29uZmlnLnRva2VucywgdmFsKTtcbiAgICAgICAgICAgIHByb2Nlc3NTdHlsZU9iamVjdChyZXNvbHZlZFNwZWNpZmljaXR5UHJvcHMsIGNvbmZpZywgdmFsdWVNaWRkbGV3YXJlLCBfX3NwcmVhZEFycmF5cyhjdXJyZW50TmVzdGluZ1BhdGgpLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB1bml0bGVzcyBudW1iZXJzOlxuICAgICAgICAgICAgdmFsdWVNaWRkbGV3YXJlKGtleSwgXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci10ZW1wbGF0ZVxuICAgICAgICAgICAgXCJcIiArICh1bml0bGVzc0tleXNba2V5XSA/IHZhbCA6IHZhbCArIFwicHhcIiksIGN1cnJlbnROZXN0aW5nUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlTWlkZGxld2FyZShrZXksIHJlc29sdmVUb2tlbnMoa2V5LCB2YWwsIGNvbmZpZy50b2tlbnMpLCBjdXJyZW50TmVzdGluZ1BhdGgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVzb2x2ZXMgYSBjc3MgcHJvcCBuZXN0aW5nIHBhdGggdG8gYSBjc3Mgc2VsZWN0b3IgYW5kIHRoZSBicmVha3BvaW50IHRoZSBjc3MgcHJvcCBpcyBtZWFudCB0byBiZSBpbmplY3RlZCB0b1xuICovXG52YXIgcmVzb2x2ZUJyZWFrcG9pbnRBbmRTZWxlY3RvckFuZElubGluZU1lZGlhID0gZnVuY3Rpb24gKG5lc3RpbmdQYXRoLCBjb25maWcpIHtcbiAgICByZXR1cm4gbmVzdGluZ1BhdGgucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGJyZWFrcG9pbnRPclNlbGVjdG9yLCBpKSB7XG4gICAgICAgIC8vIHV0aWxpdHlGaXJzdCBzZWxlY3RvciBzcGVjaWZpYyByZXNvbHV0aW9uOlxuICAgICAgICB2YXIgaXNPdmVycmlkZSA9IGNvbmZpZy51dGlsaXR5Rmlyc3QgJiYgYnJlYWtwb2ludE9yU2VsZWN0b3IgPT09IFwib3ZlcnJpZGVcIjtcbiAgICAgICAgaWYgKGlzT3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIC8vIGFueSBsZXZlbCBhYm92ZSAwXG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzdGl0Y2hlcy9jb3JlIC0gWW91IGNhbiBub3Qgb3ZlcnJpZGUgYXQgdGhpcyBsZXZlbCBbXCIgKyBuZXN0aW5nUGF0aFxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaSAtIDEpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIikgKyBcIiwgLT4gXCIgKyBicmVha3BvaW50T3JTZWxlY3RvciArIFwiXSwgb25seSBhdCB0aGUgdG9wIGxldmVsIGRlZmluaXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJyZWFrcG9pbnRzIGhhbmRsaW5nOlxuICAgICAgICBpZiAoYnJlYWtwb2ludE9yU2VsZWN0b3IgaW4gY29uZmlnLmJyZWFrcG9pbnRzIHx8XG4gICAgICAgICAgICBicmVha3BvaW50T3JTZWxlY3RvciA9PT0gTUFJTl9CUkVBS1BPSU5UX0lEKSB7XG4gICAgICAgICAgICBpZiAoYWNjLmJyZWFrcG9pbnQgIT09IE1BSU5fQlJFQUtQT0lOVF9JRCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzdGl0Y2hlcy9jb3JlIC0gWW91IGFyZSBuZXN0aW5nIHRoZSBicmVha3BvaW50IFxcXCJcIiArIGJyZWFrcG9pbnRPclNlbGVjdG9yICsgXCJcXFwiIGludG8gXFxcIlwiICsgYWNjLmJyZWFrcG9pbnQgKyBcIlxcXCIsIHRoYXQgbWFrZXMgbm8gc2Vuc2U/IDotKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjYy5icmVha3BvaW50ID0gYnJlYWtwb2ludE9yU2VsZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicmVha3BvaW50T3JTZWxlY3RvclswXSA9PT0gXCJAXCIpIHtcbiAgICAgICAgICAgIGFjYy5pbmxpbmVNZWRpYVF1ZXJpZXMucHVzaChicmVha3BvaW50T3JTZWxlY3Rvcik7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vcm1hbCBjc3MgbmVzdGluZyBzZWxlY3RvcjpcbiAgICAgICAgYWNjLm5lc3RpbmdQYXRoID1cbiAgICAgICAgICAgIGFjYy5uZXN0aW5nUGF0aCArXG4gICAgICAgICAgICAgICAgLy8gSWYgeW91IG1hbnVhbGx5IHByZWZpeCB3aXRoICcmJyB3ZSByZW1vdmUgaXQgZm9yIGlkZW50aXR5IGNvbnNpc3RlbmN5XG4gICAgICAgICAgICAgICAgLy8gb25seSBmb3IgcHNldWRvIHNlbGVjdG9ycyBhbmQgbm90aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgKGJyZWFrcG9pbnRPclNlbGVjdG9yWzBdID09PSBcIiZcIiAmJiBicmVha3BvaW50T3JTZWxlY3RvclsxXSA9PT0gXCI6XCJcbiAgICAgICAgICAgICAgICAgICAgPyBicmVha3BvaW50T3JTZWxlY3Rvci5zdWJzdHIoMSlcbiAgICAgICAgICAgICAgICAgICAgOiAvLyBwc2V1ZG8gZWxlbWVudHMvY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHByZXBlbmQgd2l0aCBhIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRPclNlbGVjdG9yWzBdID09PSBcIjpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYnJlYWtwb2ludE9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IC8vIGVsc2UganVzdCBuZXN0IHdpdGggYSBzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIGJyZWFrcG9pbnRPclNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IE1BSU5fQlJFQUtQT0lOVF9JRCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IFwiXCIsXG4gICAgICAgIGlubGluZU1lZGlhUXVlcmllczogW10sXG4gICAgfSk7XG59O1xuLyoqXG4gKiBjb252ZXJ0cyBhbiBvYmplY3Qgc3R5bGUgY3NzIHByb3AgdG8gaXRzIG5vcm1hbCBjc3Mgc3R5bGUgb2JqZWN0IHByb3AgYW5kIGhhbmRsZXMgcHJlZml4aW5nOlxuICogYm9yZGVyQ29sb3IgPT4gYm9yZGVyLWNvbG9yXG4gKi9cbnZhciBoeXBoZW5BbmRWZW5kb3JQcmVmaXhDc3NQcm9wID0gZnVuY3Rpb24gKGNzc1Byb3AsIHZlbmRvclByb3BzLCB2ZW5kb3JQcmVmaXgpIHtcbiAgICB2YXIgaXNWZW5kb3JQcmVmaXhlZCA9IGNzc1Byb3BbMF0gPT09IGNzc1Byb3BbMF0udG9VcHBlckNhc2UoKTtcbiAgICB2YXIgY3NzSHlwaGVuUHJvcCA9IGNzc1Byb3BcbiAgICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChnKSB7IHJldHVybiBnLnRvTG93ZXJDYXNlKCk7IH0pXG4gICAgICAgIC5qb2luKFwiLVwiKTtcbiAgICBpZiAoaXNWZW5kb3JQcmVmaXhlZCkge1xuICAgICAgICBjc3NIeXBoZW5Qcm9wID0gXCItXCIgKyBjc3NIeXBoZW5Qcm9wO1xuICAgIH1cbiAgICBlbHNlIGlmICh2ZW5kb3JQcm9wcy5pbmNsdWRlcyhcIlwiICsgdmVuZG9yUHJlZml4ICsgY3NzSHlwaGVuUHJvcCkpIHtcbiAgICAgICAgY3NzSHlwaGVuUHJvcCA9IFwiXCIgKyB2ZW5kb3JQcmVmaXggKyBjc3NIeXBoZW5Qcm9wO1xuICAgIH1cbiAgICByZXR1cm4gY3NzSHlwaGVuUHJvcDtcbn07XG52YXIgdG9TdHJpbmdDYWNoZWRBdG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGFzc05hbWU7XG59O1xudmFyIHRvU3RyaW5nQ29tcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5hdG9tcy5tYXAoZnVuY3Rpb24gKGF0b20pIHsgcmV0dXJuIGF0b20udG9TdHJpbmcoKTsgfSkuam9pbihcIiBcIik7XG4gICAgLy8gY2FjaGUgdGhlIGNsYXNzTmFtZSBvbiB0aGlzIGluc3RhbmNlXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy50b1N0cmluZyA9IHRvU3RyaW5nQ2FjaGVkQXRvbTtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufTtcbnZhciBjcmVhdGVDc3NSdWxlID0gZnVuY3Rpb24gKGJyZWFrcG9pbnRzLCBhdG9tLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgY3NzUnVsZSA9IFwiXCI7XG4gICAgaWYgKGF0b20uaW5saW5lTWVkaWFRdWVyaWVzICYmIGF0b20uaW5saW5lTWVkaWFRdWVyaWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYWxsTWVkaWFRdWVyaWVzXzEgPSBcIlwiO1xuICAgICAgICB2YXIgZW5kQnJhY2tldHNfMSA9IFwiXCI7XG4gICAgICAgIGF0b20uaW5saW5lTWVkaWFRdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIGFsbE1lZGlhUXVlcmllc18xICs9IGJyZWFrcG9pbnQgKyBcIntcIjtcbiAgICAgICAgICAgIGVuZEJyYWNrZXRzXzEgKz0gXCJ9XCI7XG4gICAgICAgIH0pO1xuICAgICAgICBjc3NSdWxlID0gXCJcIiArIGFsbE1lZGlhUXVlcmllc18xICsgY3JlYXRlU2VsZWN0b3IoY2xhc3NOYW1lLCBhdG9tLnNlbGVjdG9yKSArIFwie1wiICsgYXRvbS5jc3NIeXBoZW5Qcm9wICsgXCI6XCIgKyBhdG9tLnZhbHVlICsgXCI7fVwiICsgZW5kQnJhY2tldHNfMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzc1J1bGUgPSBjcmVhdGVTZWxlY3RvcihjbGFzc05hbWUsIGF0b20uc2VsZWN0b3IpICsgXCJ7XCIgKyBhdG9tLmNzc0h5cGhlblByb3AgKyBcIjpcIiArIGF0b20udmFsdWUgKyBcIjt9XCI7XG4gICAgfVxuICAgIHJldHVybiBhdG9tLmJyZWFrcG9pbnQgIT09IE1BSU5fQlJFQUtQT0lOVF9JRFxuICAgICAgICA/IGJyZWFrcG9pbnRzW2F0b20uYnJlYWtwb2ludF0oY3NzUnVsZSlcbiAgICAgICAgOiBjc3NSdWxlO1xufTtcbnZhciBjcmVhdGVUb1N0cmluZyA9IGZ1bmN0aW9uIChzaGVldHMsIGJyZWFrcG9pbnRzLCBjc3NDbGFzc25hbWVQcm92aWRlciwgLy8gW2NsYXNzTmFtZSwgcHNldWRvXVxucHJlSW5qZWN0ZWRSdWxlcykge1xuICAgIGlmIChicmVha3BvaW50cyA9PT0gdm9pZCAwKSB7IGJyZWFrcG9pbnRzID0ge307IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjc3NDbGFzc25hbWVQcm92aWRlcih0aGlzKTtcbiAgICAgICAgdmFyIHNob3VsZEluamVjdCA9ICFwcmVJbmplY3RlZFJ1bGVzLnNpemUgfHwgIXByZUluamVjdGVkUnVsZXMuaGFzKFwiLlwiICsgY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHNob3VsZEluamVjdCkge1xuICAgICAgICAgICAgc2hlZXRzW3RoaXMuYnJlYWtwb2ludF0uaW5zZXJ0UnVsZShjcmVhdGVDc3NSdWxlKGJyZWFrcG9pbnRzLCB0aGlzLCBjbGFzc05hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBhcmUgc3dpdGNoaW5nIHRoaXMgYXRvbSBmcm9tIElBdG9tIHNpbXBsZXIgcmVwcmVzZW50YXRpb25cbiAgICAgICAgLy8gMS4gZGVsZXRlIGV2ZXJ5dGhpbmcgYnV0IGBpZGAgZm9yIHNwZWNpZmljaXR5IGNoZWNrXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jc3NIeXBoZW5Qcm9wID0gdGhpcy52YWx1ZSA9IHRoaXMucHNldWRvID0gdGhpcy5icmVha3BvaW50ID0gdGhpcy5pbmxpbmVNZWRpYVF1ZXJpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDIuIHB1dCBvbiBhIF9jbGFzc05hbWVcbiAgICAgICAgdGhpcy5fY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICAvLyAzLiBzd2l0Y2ggZnJvbSB0aGlzIGB0b1N0cmluZ2AgdG8gYSBtdWNoIHNpbXBsZXIgb25lXG4gICAgICAgIHRoaXMudG9TdHJpbmcgPSB0b1N0cmluZ0NhY2hlZEF0b207XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlU2VydmVyVG9TdHJpbmcgPSBmdW5jdGlvbiAoc2hlZXRzLCBicmVha3BvaW50cywgY3NzQ2xhc3NuYW1lUHJvdmlkZXIpIHtcbiAgICBpZiAoYnJlYWtwb2ludHMgPT09IHZvaWQgMCkgeyBicmVha3BvaW50cyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY3NzQ2xhc3NuYW1lUHJvdmlkZXIodGhpcyk7XG4gICAgICAgIHNoZWV0c1t0aGlzLmJyZWFrcG9pbnRdLmluc2VydFJ1bGUoY3JlYXRlQ3NzUnVsZShicmVha3BvaW50cywgdGhpcywgY2xhc3NOYW1lID8gXCIvKlgqL1wiICsgY2xhc3NOYW1lICsgXCIvKlgqL1wiIDogXCJcIikpO1xuICAgICAgICAvLyBXZSBkbyBub3QgY2xlYW4gb3V0IHRoZSBhdG9tIGhlcmUsIGNhdXNlIGl0IHdpbGwgYmUgcmV1c2VkXG4gICAgICAgIC8vIHRvIGluamVjdCBtdWx0aXBsZSB0aW1lcyBmb3IgZWFjaCByZXF1ZXN0XG4gICAgICAgIC8vIDEuIHB1dCBvbiBhIF9jbGFzc05hbWVcbiAgICAgICAgdGhpcy5fY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICAvLyAyLiBzd2l0Y2ggZnJvbSB0aGlzIGB0b1N0cmluZ2AgdG8gYSBtdWNoIHNpbXBsZXIgb25lXG4gICAgICAgIHRoaXMudG9TdHJpbmcgPSB0b1N0cmluZ0NhY2hlZEF0b207XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlVGhlbWVUb1N0cmluZyA9IGZ1bmN0aW9uIChjbGFzc1ByZWZpeCwgdmFyaWFibGVzU2hlZXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0aGVtZUNsYXNzTmFtZSA9IChjbGFzc1ByZWZpeCA/IGNsYXNzUHJlZml4ICsgXCItXCIgOiBcIlwiKSArIFwidGhlbWUtXCIgKyB0aGlzLm5hbWU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFyaWFibGVzU2hlZXQuaW5zZXJ0UnVsZShcIi5cIiArIHRoZW1lQ2xhc3NOYW1lICsgXCJ7XCIgKyBPYmplY3Qua2V5cyh0aGlzLmRlZmluaXRpb24pLnJlZHVjZShmdW5jdGlvbiAoc3ViQWdnciwgdG9rZW5LZXkpIHtcbiAgICAgICAgICAgIC8vIGZvcm1hdCB0b2tlbiB0byByZW1vdmUgc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDM3NDg5MFxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFRva2VuS2V5ID0gdG9rZW5LZXkucmVwbGFjZSgvW15cXHdcXHMtXS9naSwgXCJcIik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gc3ViQWdnciArIFwiLS1jb2xvcnMtXCIgKyBmb3JtYXR0ZWRUb2tlbktleSArIFwiOlwiICsgX3RoaXMuZGVmaW5pdGlvblt0b2tlbktleV0gKyBcIjtcIjtcbiAgICAgICAgfSwgXCJcIikpO1xuICAgICAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhlbWVDbGFzc05hbWU7IH07XG4gICAgICAgIHJldHVybiB0aGVtZUNsYXNzTmFtZTtcbiAgICB9O1xufTtcbnZhciBjcmVhdGVLZXlmcmFtZXNUb1N0cmluZyA9IGZ1bmN0aW9uIChzaGVldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX2Nzc1J1bGVTdHJpbmcpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUodGhpcy5fY3NzUnVsZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmlkOyB9O1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9O1xufTtcbnZhciBjb21wb3NlSW50b01hcCA9IGZ1bmN0aW9uIChtYXAsIGF0b21zKSB7XG4gICAgdmFyIGkgPSBhdG9tcy5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgaXRlbSA9IGF0b21zW2ldO1xuICAgICAgICAvLyBhdG9tcyBjYW4gYmUgdW5kZWZpbmVkLCBudWxsLCBmYWxzZSBvciAnJyB1c2luZyB0ZXJuYXJ5IGxpa2VcbiAgICAgICAgLy8gZXhwcmVzc2lvbnMgd2l0aCB0aGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtW0FUT01dICYmIFwiYXRvbXNcIiBpbiBpdGVtKSB7XG4gICAgICAgICAgICBjb21wb3NlSW50b01hcChtYXAsIGl0ZW0uYXRvbXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0gJiYgaXRlbVtBVE9NXSkge1xuICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICAgICAgbWFwLnNldChpdGVtLmlkLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBtYXAuc2V0KGl0ZW0sIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgY3JlYXRlVG9rZW5zID0gZnVuY3Rpb24gKHRva2Vucykge1xuICAgIHJldHVybiB0b2tlbnM7XG59O1xuZXhwb3J0IHZhciBjcmVhdGVDc3MgPSBmdW5jdGlvbiAoX2NvbmZpZywgZW52KSB7XG4gICAgaWYgKGVudiA9PT0gdm9pZCAwKSB7IGVudiA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogd2luZG93OyB9XG4gICAgLy8gcHJlLWNoZWNrZWQgY29uZmlnIHRvIGF2b2lkIGNoZWNraW5nIHRoZXNlIGFsbCB0aGUgdGltZVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHZhciBjb25maWcgPSBPYmplY3QuYXNzaWduKHsgdG9rZW5zOiB7fSwgdXRpbHM6IHt9LCBicmVha3BvaW50czoge30gfSwgX2NvbmZpZyk7XG4gICAgLy8gcHJlZmlsbCB3aXRoIGVtcHR5IHRva2VuIGdyb3Vwc1xuICAgIHRva2VuVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW5UeXBlKSB7IHJldHVybiAoY29uZmlnLnRva2Vuc1t0b2tlblR5cGVdID0gY29uZmlnLnRva2Vuc1t0b2tlblR5cGVdIHx8IHt9KTsgfSk7XG4gICAgdmFyIHRva2VucyA9IGNvbmZpZy50b2tlbnMsIGJyZWFrcG9pbnRzID0gY29uZmlnLmJyZWFrcG9pbnRzO1xuICAgIHZhciBzaG93RnJpZW5kbHlDbGFzc25hbWVzID0gdHlwZW9mIGNvbmZpZy5zaG93RnJpZW5kbHlDbGFzc25hbWVzID09PSBcImJvb2xlYW5cIlxuICAgICAgICA/IGNvbmZpZy5zaG93RnJpZW5kbHlDbGFzc25hbWVzXG4gICAgICAgIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgICB2YXIgcHJlZml4ID0gY29uZmlnLnByZWZpeCB8fCBcIlwiO1xuICAgIHZhciBfYSA9IGVudlxuICAgICAgICA/IGdldFZlbmRvclByZWZpeEFuZFByb3BzKGVudilcbiAgICAgICAgOiB7IHZlbmRvclByZWZpeDogXCItbm9kZS1cIiwgdmVuZG9yUHJvcHM6IFtdIH0sIHZlbmRvclByZWZpeCA9IF9hLnZlbmRvclByZWZpeCwgdmVuZG9yUHJvcHMgPSBfYS52ZW5kb3JQcm9wcztcbiAgICBpZiAoZW52ICYmIGhvdFJlbG9hZGluZ0NhY2hlLmhhcyhwcmVmaXgpKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGhvdFJlbG9hZGluZ0NhY2hlLmdldChwcmVmaXgpO1xuICAgICAgICBpbnN0YW5jZS5kaXNwb3NlKCk7XG4gICAgfVxuICAgIC8vIHByZS1jb21wdXRlIGNsYXNzIHByZWZpeFxuICAgIHZhciBjbGFzc1ByZWZpeCA9IHByZWZpeFxuICAgICAgICA/IHNob3dGcmllbmRseUNsYXNzbmFtZXNcbiAgICAgICAgICAgID8gcHJlZml4ICsgXCJfXCJcbiAgICAgICAgICAgIDogcHJlZml4XG4gICAgICAgIDogXCJcIjtcbiAgICB2YXIgY3NzQ2xhc3NuYW1lUHJvdmlkZXIgPSBmdW5jdGlvbiAoYXRvbSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChhdG9tLl9pc0dsb2JhbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc2ggPSBoYXNoU3RyaW5nKFwiXCIgKyAoYXRvbS5icmVha3BvaW50IHx8IFwiXCIpICsgYXRvbS5jc3NIeXBoZW5Qcm9wLnJlcGxhY2UoLy0obW96fHdlYmtpdHxtcyktLywgXCJcIikgKyAoYXRvbS5zZWxlY3RvciB8fCBcIlwiKSArICgoKF9hID0gYXRvbS5pbmxpbmVNZWRpYVF1ZXJpZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5qb2luKFwiXCIpKSB8fCBcIlwiKSArIGF0b20udmFsdWUpO1xuICAgICAgICB2YXIgbmFtZSA9IHNob3dGcmllbmRseUNsYXNzbmFtZXNcbiAgICAgICAgICAgID8gXCJcIiArIChhdG9tLmJyZWFrcG9pbnQgPyBhdG9tLmJyZWFrcG9pbnQgKyBcIl9cIiA6IFwiXCIpICsgYXRvbS5jc3NIeXBoZW5Qcm9wXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLy0obW96fHdlYmtpdHxtcyktLywgXCJcIilcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCItXCIpXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocGFydCkgeyByZXR1cm4gcGFydFswXTsgfSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKSArIFwiX1wiICsgaGFzaFxuICAgICAgICAgICAgOiBcIl9cIiArIGhhc2g7XG4gICAgICAgIHJldHVybiBcIlwiICsgY2xhc3NQcmVmaXggKyBuYW1lO1xuICAgIH07XG4gICAgdmFyIF9iID0gY3JlYXRlU2hlZXRzKGVudiwgY29uZmlnLmJyZWFrcG9pbnRzKSwgdGFncyA9IF9iLnRhZ3MsIHNoZWV0cyA9IF9iLnNoZWV0cztcbiAgICB2YXIgcHJlSW5qZWN0ZWRSdWxlcyA9IG5ldyBTZXQoKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBmb3IgKHZhciBfaSA9IDAsIHRhZ3NfMSA9IHRhZ3M7IF9pIDwgdGFnc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdGFnID0gdGFnc18xW19pXTtcbiAgICAgICAgKCh0YWcudGV4dENvbnRlbnQgfHwgXCJcIikubWF0Y2goL1xcL1xcKlxcWFxcKlxcLy4qP1xcL1xcKlxcWFxcKlxcLy9nKSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBwcmVJbmplY3RlZFJ1bGVzLmFkZChcIi5cIiArIHJ1bGUucmVwbGFjZSgvXFwvXFwqWFxcKlxcLy9nLCBcIlwiKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgdG9TdHJpbmcgPSBlbnZcbiAgICAgICAgPyBjcmVhdGVUb1N0cmluZyhzaGVldHMsIGNvbmZpZy5icmVha3BvaW50cywgY3NzQ2xhc3NuYW1lUHJvdmlkZXIsIHByZUluamVjdGVkUnVsZXMpXG4gICAgICAgIDogY3JlYXRlU2VydmVyVG9TdHJpbmcoc2hlZXRzLCBjb25maWcuYnJlYWtwb2ludHMsIGNzc0NsYXNzbmFtZVByb3ZpZGVyKTtcbiAgICB2YXIgdGhlbWVUb1N0cmluZyA9IGNyZWF0ZVRoZW1lVG9TdHJpbmcoY2xhc3NQcmVmaXgsIHNoZWV0cy5fX3ZhcmlhYmxlc19fKTtcbiAgICB2YXIga2V5ZnJhbWVzVG9TdHJpbmcgPSBjcmVhdGVLZXlmcmFtZXNUb1N0cmluZyhzaGVldHNbTUFJTl9CUkVBS1BPSU5UX0lEXSk7XG4gICAgdmFyIGNvbXBvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGF0b21zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhdG9tc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbXBvc2VJbnRvTWFwKG1hcCwgYXRvbXMpO1xuICAgICAgICByZXR1cm4gX2EgPSB7XG4gICAgICAgICAgICAgICAgYXRvbXM6IEFycmF5LmZyb20obWFwLnZhbHVlcygpKSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogdG9TdHJpbmdDb21wb3NlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2FbQVRPTV0gPSB0cnVlLFxuICAgICAgICAgICAgX2E7XG4gICAgfTtcbiAgICB2YXIgY3JlYXRlQXRvbSA9IGZ1bmN0aW9uIChjc3NQcm9wLCB2YWx1ZSwgYnJlYWtwb2ludCwgc2VsZWN0b3JTdHJpbmcsIGlubGluZU1lZGlhUXVlcmllcywgaXNHbG9iYWwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoYnJlYWtwb2ludCA9PT0gdm9pZCAwKSB7IGJyZWFrcG9pbnQgPSBNQUlOX0JSRUFLUE9JTlRfSUQ7IH1cbiAgICAgICAgLy8gZ2VuZXJhdGUgaWQgdXNlZCBmb3Igc3BlY2lmaWNpdHkgY2hlY2tcbiAgICAgICAgLy8gdHdvIGF0b21zIGFyZSBjb25zaWRlcmVkIGVxdWFsIGluIHJlZ2FyZCB0byB0aGVyZSBzcGVjaWZpY2l0eSBpZiB0aGUgaWQgaXMgZXF1YWxcbiAgICAgICAgdmFyIGlubGluZU1lZGlhc0FzU3RyaW5nID0gaW5saW5lTWVkaWFRdWVyaWVzXG4gICAgICAgICAgICA/IGlubGluZU1lZGlhUXVlcmllcy5qb2luKFwiXCIpXG4gICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIHZhciBpZCA9IGNzc1Byb3AudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgICBzZWxlY3RvclN0cmluZyArXG4gICAgICAgICAgICAoaW5saW5lTWVkaWFRdWVyaWVzID8gaW5saW5lTWVkaWFRdWVyaWVzLmpvaW4oXCJcIikgOiBcIlwiKSArXG4gICAgICAgICAgICBicmVha3BvaW50O1xuICAgICAgICAvLyBtYWtlIGEgdWlkIGFjY291dGluZyBmb3IgZGlmZmVyZW50IHZhbHVlc1xuICAgICAgICB2YXIgdWlkID0gaWQgKyB2YWx1ZTtcbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgY3JlYXRlZCBiZWZvcmUgcmV0dXJuIHRoZSBjYWNoZWQgYXRvbVxuICAgICAgICBpZiAoYXRvbUNhY2hlLmhhcyh1aWQpKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGhhcyBhIGJyZWFrcG9pbnQgYmFzZWQgbWVkaWEgcXVlcnlcbiAgICAgICAgICAgIGlmIChpbmxpbmVNZWRpYXNBc1N0cmluZy5tYXRjaCgvQG1lZGlhLipcXCgobWlufG1heCk/Liood2lkdGh8aGVpZ2h0KS4qXFwpLykpIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgcHJvcGVydHkgXFxcIlwiICsgY3NzUHJvcCArIFwiXFxcIiB3aXRoIG1lZGlhIHF1ZXJ5IFwiICsgaW5saW5lTWVkaWFzQXNTdHJpbmcgKyBcIiBjYW4gY2F1c2UgYSBzcGVjaWZpY2l0eSBpc3N1ZS4gWW91IHNob3VsZCBjcmVhdGUgYSBicmVha3BvaW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF0b21DYWNoZS5nZXQodWlkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmVwYXJlIHRoZSBjc3NQcm9wXG4gICAgICAgIHZhciBjc3NIeXBoZW5Qcm9wID0gaHlwaGVuQW5kVmVuZG9yUHJlZml4Q3NzUHJvcChjc3NQcm9wLCB2ZW5kb3JQcm9wcywgdmVuZG9yUHJlZml4KTtcbiAgICAgICAgLy8gV2Ugd2FudCBjZXJ0YWluIHBzZXVkbyBzZWxlY3RvcnMgdG8gdGFrZSBwcmVzZWRlbmNlIG92ZXIgb3RoZXIgcHNldWRvXG4gICAgICAgIC8vIHNlbGVjdG9ycywgc28gd2UgaW5jcmVhc2Ugc3BlY2lmaWNpdHlcbiAgICAgICAgaWYgKCEoc2VsZWN0b3JTdHJpbmcgPT09IG51bGwgfHwgc2VsZWN0b3JTdHJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdG9yU3RyaW5nLm1hdGNoKFwiJlwiKSkpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RvclN0cmluZyA9PT0gbnVsbCB8fCBzZWxlY3RvclN0cmluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0b3JTdHJpbmcubWF0Y2goL1xcOmhvdmVyLykpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0cmluZyA9IFwiJiZcIiArIHNlbGVjdG9yU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3JTdHJpbmcgPT09IG51bGwgfHwgc2VsZWN0b3JTdHJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdG9yU3RyaW5nLm1hdGNoKC9cXDphY3RpdmUvKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yU3RyaW5nID0gXCImJiZcIiArIHNlbGVjdG9yU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3JTdHJpbmcgPT09IG51bGwgfHwgc2VsZWN0b3JTdHJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdG9yU3RyaW5nLm1hdGNoKC9cXDpmb2N1c3xcXDpmb2N1cy12aXNpYmxlLykpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0cmluZyA9IFwiJiYmJlwiICsgc2VsZWN0b3JTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RvclN0cmluZyA9PT0gbnVsbCB8fCBzZWxlY3RvclN0cmluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0b3JTdHJpbmcubWF0Y2goL1xcOnJlYWQtb25seS8pKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTdHJpbmcgPSBcIiYmJiYmXCIgKyBzZWxlY3RvclN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yU3RyaW5nID09PSBudWxsIHx8IHNlbGVjdG9yU3RyaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RvclN0cmluZy5tYXRjaCgvXFw6ZGlzYWJsZWQvKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yU3RyaW5nID0gXCImJiYmJiZcIiArIHNlbGVjdG9yU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBhdG9tXG4gICAgICAgIHZhciBhdG9tID0gKF9hID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBjc3NIeXBoZW5Qcm9wOiBjc3NIeXBoZW5Qcm9wLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JTdHJpbmcsXG4gICAgICAgICAgICAgICAgaW5saW5lTWVkaWFRdWVyaWVzOiBpbmxpbmVNZWRpYVF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogYnJlYWtwb2ludCxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogdG9TdHJpbmdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYVtBVE9NXSA9IHRydWUsXG4gICAgICAgICAgICBfYS5faXNHbG9iYWwgPSBpc0dsb2JhbCxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgLy8gQ2FjaGUgaXRcbiAgICAgICAgYXRvbUNhY2hlLnNldCh1aWQsIGF0b20pO1xuICAgICAgICByZXR1cm4gYXRvbTtcbiAgICB9O1xuICAgIHZhciBiYXNlVG9rZW5zID0gXCI6cm9vdHtcIjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBmb3IgKHZhciB0b2tlblR5cGUgaW4gdG9rZW5zKSB7XG4gICAgICAgIHZhciBpc051bWVyaWNTY2FsZSA9IHRva2VuVHlwZS5tYXRjaCgvXihzaXplc3xzcGFjZXxsZXR0ZXJTcGFjaW5nc3x6SW5kaWNlcykkLyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHZhciBzY2FsZVRva2VuS2V5cyA9IE9iamVjdC5rZXlzKHRva2Vuc1t0b2tlblR5cGVdKTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHNjYWxlVG9rZW5LZXlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gc2NhbGVUb2tlbktleXNbaW5kZXhdO1xuICAgICAgICAgICAgLy8gZm9ybWF0IHRva2VuIHRvIHJlbW92ZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Mzc0ODkwXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVkVG9rZW4gPSB0b2tlbi5yZXBsYWNlKC9bXlxcd1xccy1dL2dpLCBcIlwiKTtcbiAgICAgICAgICAgIHZhciBjc3NWYXIgPSBcIi0tXCIgKyB0b2tlblR5cGUgKyBcIi1cIiArIGZvcm1hdHRlZFRva2VuO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYmFzZVRva2VucyArPSBjc3NWYXIgKyBcIjpcIiArIHRva2Vuc1t0b2tlblR5cGVdW3Rva2VuXSArIFwiO1wiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdG9rZW5zW3Rva2VuVHlwZV1bdG9rZW5dID0gXCJ2YXIoXCIgKyBjc3NWYXIgKyBcIilcIjtcbiAgICAgICAgICAgIC8vIEFkZCBuZWdhdGl2ZSB0b2tlbnNcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLXRlbXBsYXRlXG4gICAgICAgICAgICB2YXIgbmVnYXRpdmVUb2tlbktleSA9IFwiLVwiICsgdG9rZW47XG4gICAgICAgICAgICAvLyBjaGVjayB0aGF0IGl0J3MgYSBudW1lcmljU2NhbGUgYW5kIHRoYXQgdGhlIHVzZXIgZGlkbid0IGFscmVhZHkgc2V0IGEgbmVnYXRpdmUgdG9rZW4gd2l0aHQgdGhpcyBuYW1lXG4gICAgICAgICAgICB2YXIgaXNBbHJlYWR5QU5lZ2F0aXZlVG9rZW4gPSBcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRva2VuWzBdID09PSBcIi1cIiA/ICEhdG9rZW5zW3Rva2VuVHlwZV1bdG9rZW4uc3Vic3RyaW5nKDEpXSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGlzTnVtZXJpY1NjYWxlICYmXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICF0b2tlbnNbdG9rZW5UeXBlXVtuZWdhdGl2ZVRva2VuS2V5XSAmJlxuICAgICAgICAgICAgICAgICFpc0FscmVhZHlBTmVnYXRpdmVUb2tlbikge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0b2tlbnNbdG9rZW5UeXBlXVtuZWdhdGl2ZVRva2VuS2V5XSA9IFwiY2FsYyh2YXIoXCIgKyBjc3NWYXIgKyBcIikgKiAtMSlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBiYXNlVG9rZW5zICs9IFwifVwiO1xuICAgIGlmICghcHJlSW5qZWN0ZWRSdWxlcy5oYXMoXCI6cm9vdFwiKSkge1xuICAgICAgICBzaGVldHMuX192YXJpYWJsZXNfXy5pbnNlcnRSdWxlKGJhc2VUb2tlbnMpO1xuICAgIH1cbiAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIGFsbCBhdG9tcyBmb3IgU1NSXG4gICAgdmFyIGNvbXBvc2l0aW9uc0NhY2hlID0gbmV3IFNldCgpO1xuICAgIHZhciBhdG9tQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGtleUZyYW1lc0NhY2hlID0gbmV3IE1hcCgpO1xuICAgIHZhciB0aGVtZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgIHZhciBjc3NJbnN0YW5jZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWZpbml0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGVmaW5pdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGRlZmluaXRpb25zLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoIWRlZmluaXRpb25zW3hdKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlZmluaXRpb25zW3hdID09PSBcInN0cmluZ1wiIHx8IGRlZmluaXRpb25zW3hdW0FUT01dKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpbmRleCsrXSA9IGRlZmluaXRpb25zW3hdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc1N0eWxlT2JqZWN0KGRlZmluaXRpb25zW3hdLCBjb25maWcsIGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSwgcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXNvbHZlQnJlYWtwb2ludEFuZFNlbGVjdG9yQW5kSW5saW5lTWVkaWEocGF0aCwgY29uZmlnKSwgbmVzdGluZ1BhdGggPSBfYS5uZXN0aW5nUGF0aCwgYnJlYWtwb2ludCA9IF9hLmJyZWFrcG9pbnQsIGlubGluZU1lZGlhUXVlcmllcyA9IF9hLmlubGluZU1lZGlhUXVlcmllcztcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpbmRleCsrXSA9IGNyZWF0ZUF0b20ocHJvcCwgdmFsdWUsIGJyZWFrcG9pbnQsIG5lc3RpbmdQYXRoLCBpbmxpbmVNZWRpYVF1ZXJpZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG1pZ2h0IGNhdXNlIG1lbW9yeSBsZWFrcyB3aGVuIGRvaW5nIGNzcygpIGluc2lkZSBhIGNvbXBvbmVudFxuICAgICAgICAvLyBidXQgd2UgbmVlZCB0aGlzIGZvciBub3cgdG8gZml4IFNTUlxuICAgICAgICB2YXIgY29tcG9zaXRpb24gPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIGNvbXBvc2l0aW9uc0NhY2hlLmFkZChjb21wb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9KTtcbiAgICBjc3NJbnN0YW5jZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhdG9tQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgdGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IHRhZy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjc3NJbnN0YW5jZS5fY29uZmlnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICAgIGNzc0luc3RhbmNlLnRoZW1lID0gZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhlbWVDYWNoZS5oYXMoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVtZUNhY2hlLmdldChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGhlbWVBdG9tID0gKF9hID0ge1xuICAgICAgICAgICAgICAgIC8vIFdlIGNvdWxkIGhlcmUgYWxzbyBjaGVjayBpZiB0aGVtZSBoYXMgYmVlbiBhZGRlZCBmcm9tIHNlcnZlcixcbiAgICAgICAgICAgICAgICAvLyB0aG91Z2ggdGhpbmtpbmcgaXQgZG9lcyBub3QgbWF0dGVyLi4uIGp1c3QgYSBzaW1wbGUgcnVsZVxuICAgICAgICAgICAgICAgIG5hbWU6IFN0cmluZyh0aGVtZUNhY2hlLnNpemUpLFxuICAgICAgICAgICAgICAgIC8vIHdyYXBwaW5nIHRoZSBjb2xvcnMgaW4gYW4gb2JqZWN0IHNvIHRoYXQgdGhlIHN0cnVjdHVyZSBtYXRjaGVzXG4gICAgICAgICAgICAgICAgLy8gdGhlIHRva2VucyBwcm9wZXJ0eSBpbiB0aGUgY29uZmlnXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogdGhlbWVUb1N0cmluZ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9hW0FUT01dID0gdHJ1ZSxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgdGhlbWVDYWNoZS5zZXQoZGVmaW5pdGlvbiwgdGhlbWVBdG9tKTtcbiAgICAgICAgcmV0dXJuIHRoZW1lQXRvbTtcbiAgICB9O1xuICAgIGNzc0luc3RhbmNlLmdsb2JhbCA9IGZ1bmN0aW9uIChkZWZpbml0aW9ucykge1xuICAgICAgICBwcm9jZXNzU3R5bGVPYmplY3QoZGVmaW5pdGlvbnMsIGNvbmZpZywgZnVuY3Rpb24gKHByb3AsIHZhbHVlLCBwYXRoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSByZXNvbHZlQnJlYWtwb2ludEFuZFNlbGVjdG9yQW5kSW5saW5lTWVkaWEocGF0aCwgY29uZmlnKSwgbmVzdGluZ1BhdGggPSBfYS5uZXN0aW5nUGF0aCwgYnJlYWtwb2ludCA9IF9hLmJyZWFrcG9pbnQsIGlubGluZU1lZGlhUXVlcmllcyA9IF9hLmlubGluZU1lZGlhUXVlcmllcztcbiAgICAgICAgICAgIGlmICghbmVzdGluZ1BhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2xvYmFsIHN0eWxlcyBuZWVkIHRvIGJlIG5lc3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGdsb2JhbCBhdG9tIGFuZCBjYWxsIHRvU3RyaW5nKCkgb24gaXQgZGlyZWN0bHkgdG8gaW5qZWN0IGl0XG4gICAgICAgICAgICAvLyBhcyBnbG9iYWwgYXRvbXMgZG9uJ3QgZ2VuZXJhdGUgY2xhc3MgbmFtZXMgb2YgdGhlaXIgb3duXG4gICAgICAgICAgICBjcmVhdGVBdG9tKHByb3AsIHZhbHVlLCBicmVha3BvaW50LCBuZXN0aW5nUGF0aCwgaW5saW5lTWVkaWFRdWVyaWVzLCB0cnVlKS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNzc0luc3RhbmNlLmtleWZyYW1lcyA9IGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGNzc1J1bGUgPSBcIlwiO1xuICAgICAgICB2YXIgY3VycmVudFRpbWVQcm9wID0gXCJcIjtcbiAgICAgICAgcHJvY2Vzc1N0eWxlT2JqZWN0KGRlZmluaXRpb24sIGNvbmZpZywgZnVuY3Rpb24gKGtleSwgdmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgdGltZVByb3AgPSBfYVswXTtcbiAgICAgICAgICAgIGlmICh0aW1lUHJvcCAhPT0gY3VycmVudFRpbWVQcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNzc1J1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzUnVsZSArPSBcIn1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWVQcm9wID0gdGltZVByb3A7XG4gICAgICAgICAgICAgICAgY3NzUnVsZSArPSB0aW1lUHJvcCArIFwiIHtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNzc1J1bGUgKz0gaHlwaGVuQW5kVmVuZG9yUHJlZml4Q3NzUHJvcChrZXksIHZlbmRvclByb3BzLCB2ZW5kb3JQcmVmaXgpICsgXCI6IFwiICsgcmVzb2x2ZVRva2VucyhrZXksIHZhbHVlLCB0b2tlbnMpICsgXCI7XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaGFzaCA9IGhhc2hTdHJpbmcoY3NzUnVsZSk7XG4gICAgICAgIC8vIENoZWNrIGlmIGFuIGF0b20gZXhpc3Qgd2l0aCB0aGUgc2FtZSBoYXNoIGFuZCByZXR1cm4gaXQgaWYgc29cbiAgICAgICAgdmFyIGNhY2hlZEF0b20gPSBrZXlGcmFtZXNDYWNoZS5nZXQoaGFzaCk7XG4gICAgICAgIGlmIChjYWNoZWRBdG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQXRvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3cmFwIGl0IHdpdGggdGhlIGdlbmVyYXRlZCBrZXlmcmFtZXMgbmFtZVxuICAgICAgICBjc3NSdWxlID0gXCJAa2V5ZnJhbWVzIFwiICsgaGFzaCArIFwiIHtcIiArIGNzc1J1bGUgKyBcIn1cIjtcbiAgICAgICAgdmFyIGtleWZyYW1lc0F0b20gPSAoX2EgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IFN0cmluZyhoYXNoKSxcbiAgICAgICAgICAgICAgICBfY3NzUnVsZVN0cmluZzogY3NzUnVsZSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzoga2V5ZnJhbWVzVG9TdHJpbmdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYVtBVE9NXSA9IHRydWUsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIGtleUZyYW1lc0NhY2hlLnNldChoYXNoLCBrZXlmcmFtZXNBdG9tKTtcbiAgICAgICAgcmV0dXJuIGtleWZyYW1lc0F0b207XG4gICAgfTtcbiAgICBjc3NJbnN0YW5jZS5nZXRTdHlsZXMgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIGNvbXBvc2l0aW9uIHRvIGF2b2lkIHNzciBpc3N1ZXNcbiAgICAgICAgY29tcG9zaXRpb25zQ2FjaGUuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbXBvc2l0aW9uLnRvU3RyaW5nID0gdG9TdHJpbmdDb21wb3NlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGZvciAodmFyIHNoZWV0IGluIHNoZWV0cykge1xuICAgICAgICAgICAgc2hlZXRzW3NoZWV0XS5jc3NSdWxlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYXNlVG9rZW5zKSB7XG4gICAgICAgICAgICBzaGVldHMuX192YXJpYWJsZXNfXy5pbnNlcnRSdWxlKGJhc2VUb2tlbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzZXQgb3VyIHRvU3RyaW5ncyBzbyB0aGF0IHRoZXkgd2lsbCBub3cgaW5qZWN0IGFnYWluLFxuICAgICAgICAvLyBhbmQgc3RpbGwgY2FjaGUgaXMgaXQgaXMgYmVpbmcgcmV1c2VkXG4gICAgICAgIHRvU3RyaW5nID0gY3JlYXRlU2VydmVyVG9TdHJpbmcoc2hlZXRzLCBjb25maWcuYnJlYWtwb2ludHMsIGNzc0NsYXNzbmFtZVByb3ZpZGVyKTtcbiAgICAgICAga2V5ZnJhbWVzVG9TdHJpbmcgPSBjcmVhdGVLZXlmcmFtZXNUb1N0cmluZyhzaGVldHNbTUFJTl9CUkVBS1BPSU5UX0lEXSk7XG4gICAgICAgIHRoZW1lVG9TdHJpbmcgPSBjcmVhdGVUaGVtZVRvU3RyaW5nKGNsYXNzUHJlZml4LCBzaGVldHMuX192YXJpYWJsZXNfXyk7XG4gICAgICAgIGF0b21DYWNoZS5mb3JFYWNoKGZ1bmN0aW9uIChhdG9tKSB7XG4gICAgICAgICAgICBhdG9tLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4gICAgICAgIH0pO1xuICAgICAgICBrZXlGcmFtZXNDYWNoZS5mb3JFYWNoKGZ1bmN0aW9uIChhdG9tKSB7XG4gICAgICAgICAgICBhdG9tLnRvU3RyaW5nID0ga2V5ZnJhbWVzVG9TdHJpbmc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGVtZUNhY2hlLmZvckVhY2goZnVuY3Rpb24gKGF0b20pIHtcbiAgICAgICAgICAgIGF0b20udG9TdHJpbmcgPSB0aGVtZVRvU3RyaW5nO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNiKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIHN0eWxlczogT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLnJlZHVjZShmdW5jdGlvbiAoYWdnciwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFnZ3IuY29uY2F0KFwiLyogU1RJVENIRVM6XCIgKyBrZXkgKyBcIiAqL1xcblwiICsgc2hlZXRzW2tleV0uY3NzUnVsZXMuam9pbihcIlxcblwiKSk7XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgXCIvKiBTVElUQ0hFUzpfX3ZhcmlhYmxlc19fICovXFxuXCIgKyBzaGVldHMuX192YXJpYWJsZXNfXy5jc3NSdWxlcy5qb2luKFwiXFxuXCIpLFxuICAgICAgICAgICAgICAgIFwiLyogU1RJVENIRVMgKi9cXG5cIiArIHNoZWV0c1tNQUlOX0JSRUFLUE9JTlRfSURdLmNzc1J1bGVzLmpvaW4oXCJcXG5cIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGlmIChlbnYpIHtcbiAgICAgICAgaG90UmVsb2FkaW5nQ2FjaGUuc2V0KHByZWZpeCwgY3NzSW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzSW5zdGFuY2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRva2VuaXplVmFsdWUgfSBmcm9tIFwiLi92YWx1ZS10b2tlbml6ZXJcIjtcbnZhciB1bml0TWF0Y2ggPSAvXlswLTkuXStbYS16fCVdLztcbnZhciBlYXNpbmdNYXRjaCA9IC9cXCguKlxcKXxlYXNlfGVhc2UtaW58ZWFzZS1vdXR8ZWFzZS1pbi1vdXR8bGluZWFyfHN0ZXAtc3RhcnR8c3RlcC1lbmQvO1xudmFyIHNldENoYWluZWRWYWx1ZSA9IGZ1bmN0aW9uIChleGlzdGluZ1ZhbHVlLCB2YWx1ZSkge1xuICAgIHJldHVybiBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmdWYWx1ZSArIFwiLFwiICsgdmFsdWUgOiB2YWx1ZTtcbn07XG52YXIgZW1wdHlUb2tlbnMgPSB7fTtcbnRva2VuVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gKGVtcHR5VG9rZW5zW3R5cGVdID0ge30pOyB9KTtcbi8qXG4gIFRoZSBnZW5lcmljIENTUyBwcm9wIHZhbHVlIHBhcnNlci4gQ29udmVydHMgYW55IGNzcyB2YWx1ZSBpbnRvIGFuXG4gIGFycmF5IG9mIGNoYWlucywgd2hlcmUgZWFjaCBjaGFpbiBpcyBhbiBhcnJheSBvZiBpbmRpdmlkdWFsIHZhbHVlc1xuKi9cbnZhciBjcmVhdGVQcm9wZXJ0eVBhcnNlciA9IGZ1bmN0aW9uICh0eXBlKSB7IHJldHVybiBmdW5jdGlvbiAodG9rZW5zLCB2YWx1ZSkge1xuICAgIHZhciBjaGFpbnMgPSB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyBbW3ZhbHVlXV0gOiB0b2tlbml6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgY3NzID0ge307XG4gICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpc1xuICAgIHZhciB0bXBUb2tlbnMgPSB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyBlbXB0eVRva2VucyA6IHRva2VucztcbiAgICBjaGFpbnMuZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4sIGNoYWluSW5kZXgpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNoYWluLmZvckVhY2goZnVuY3Rpb24gKF92YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHR5cGUodG1wVG9rZW5zLCBjc3MsIF92YWx1ZSwgaW5kZXgsIGNoYWluLCBjaGFpbkluZGV4LCBjaGFpbnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xufTsgfTtcbmV4cG9ydCB2YXIgYmFja2dyb3VuZCA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUsIGluZGV4LCBjaGFpbiwgY2hhaW5JbmRleCwgY2hhaW5zKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIi9cIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9zY3JvbGx8bG9jYWx8Zml4ZWQvKSlcbiAgICAgICAgY3NzLmJhY2tncm91bmRBdHRhY2htZW50ID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kQXR0YWNobWVudCwgdmFsdWUpO1xuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9edXJsfGxpbmVhci1ncmFkaWVudHxlbGVtZW50fGltYWdlfGNyb3NzLWZhZGV8aW1hZ2Utc2V0LykpXG4gICAgICAgIGNzcy5iYWNrZ3JvdW5kSW1hZ2UgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmJhY2tncm91bmRJbWFnZSwgdmFsdWUpO1xuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9ib3JkZXItYm94fHBhZGRpbmctYm94fGNvbnRlbnQtYm94fHRleHQvKSkge1xuICAgICAgICBpZiAoY2hhaW4uZmlsdGVyKGZ1bmN0aW9uIChjaGFpblBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFpblBhcnQubWF0Y2goL2JvcmRlci1ib3h8cGFkZGluZy1ib3h8Y29udGVudC1ib3h8dGV4dC8pO1xuICAgICAgICB9KS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kT3JpZ2luID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kT3JpZ2luLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3MuYmFja2dyb3VuZENsaXAgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmJhY2tncm91bmRDbGlwLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhaW4uZmluZEluZGV4KGZ1bmN0aW9uIChjaGFpblBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFpblBhcnQubWF0Y2goL2JvcmRlci1ib3h8cGFkZGluZy1ib3h8Y29udGVudC1ib3h8dGV4dC8pO1xuICAgICAgICB9KSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kT3JpZ2luID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kT3JpZ2luLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjc3MuYmFja2dyb3VuZENsaXAgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmJhY2tncm91bmRDbGlwLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY2hhaW5baW5kZXggLSAxXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgY3NzLmJhY2tncm91bmRTaXplID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kU2l6ZSwgdG9rZW5zLnNpemVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9jZW50ZXJ8dG9wfHJpZ2h0fGJvdHRvbXxsZWZ0LykgfHxcbiAgICAgICAgdmFsdWUubWF0Y2godW5pdE1hdGNoKSB8fFxuICAgICAgICB0b2tlbnMuc2l6ZXNbdmFsdWVdKVxuICAgICAgICBjc3MuYmFja2dyb3VuZFBvc2l0aW9uID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kUG9zaXRpb24sIHRva2Vucy5zaXplc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9yZXBlYXR8bm8tcmVwZWF0fHJlcGVhdC14fHJlcGVhdC15fHNwYWNlfHJvdW5kLykpXG4gICAgICAgIGNzcy5iYWNrZ3JvdW5kUmVwZWF0ID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kUmVwZWF0LCB2YWx1ZSk7XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChjaGFpbkluZGV4ICE9PSBjaGFpbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBvbmx5IGFkZCBiYWNrZ3JvdW5kIGNvbG9ycyBvbiB0aGUgbGFzdCBjaGFpblwiKTtcbiAgICAgICAgfVxuICAgICAgICBjc3MuYmFja2dyb3VuZENvbG9yID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5iYWNrZ3JvdW5kQ29sb3IsIHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlKTtcbiAgICB9XG59KTtcbmV4cG9ydCB2YXIgYW5pbWF0aW9uID0gY3JlYXRlUHJvcGVydHlQYXJzZXIoZnVuY3Rpb24gKF8sIGNzcywgdmFsdWUsIGluZGV4LCBjaGFpbikge1xuICAgIGlmICh2YWx1ZS5tYXRjaChlYXNpbmdNYXRjaCkpIHtcbiAgICAgICAgY3NzLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5hbmltYXRpb25UaW1pbmdGdW5jdGlvbiwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvXlxcZCskfGluZmluaXRlLykpIHtcbiAgICAgICAgY3NzLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5hbmltYXRpb25JdGVyYXRpb25Db3VudCwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvbm9ybWFsfHJldmVyc2V8YWx0ZXJuYXRlfGFsdGVybmF0ZS1yZXZlcnNlLykpIHtcbiAgICAgICAgY3NzLmFuaW1hdGlvbkRpcmVjdGlvbiA9IHNldENoYWluZWRWYWx1ZShjc3MuYW5pbWF0aW9uRGlyZWN0aW9uLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9ub25lfGZvcndhcmR8YmFja3dhcmRzfGJvdGgvKSkge1xuICAgICAgICBjc3MuYW5pbWF0aW9uRmlsbE1vZGUgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmFuaW1hdGlvbkZpbGxNb2RlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9ydW5uaW5nfHBhdXNlZC8pKSB7XG4gICAgICAgIGNzcy5hbmltYXRpb25QbGF5U3RhdGUgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmFuaW1hdGlvblBsYXlTdGF0ZSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZS5tYXRjaCh1bml0TWF0Y2gpKSB7XG4gICAgICAgIGlmIChjaGFpbi5maW5kSW5kZXgoZnVuY3Rpb24gKHBhcnQpIHsgcmV0dXJuIHBhcnQubWF0Y2godW5pdE1hdGNoKTsgfSkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICBjc3MuYW5pbWF0aW9uRHVyYXRpb24gPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmFuaW1hdGlvbkR1cmF0aW9uLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjc3MuYW5pbWF0aW9uRGVsYXkgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmFuaW1hdGlvbkRlbGF5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzcy5hbmltYXRpb25OYW1lID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy5hbmltYXRpb25OYW1lLCB2YWx1ZSk7XG4gICAgfVxufSk7XG5leHBvcnQgdmFyIGZvbnQgPSBjcmVhdGVQcm9wZXJ0eVBhcnNlcihmdW5jdGlvbiAodG9rZW5zLCBjc3MsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLm1hdGNoKC9eWzAtOS5dK2RlZy8pKVxuICAgICAgICBjc3MuZm9udFN0eWxlICs9IFwiIFwiICsgdmFsdWU7XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2goL1xcLy8pKSB7XG4gICAgICAgIHZhciBfYSA9IHZhbHVlLnNwbGl0KFwiL1wiKSwgZm9udFNpemUgPSBfYVswXSwgbGluZUhlaWdodCA9IF9hWzFdO1xuICAgICAgICBjc3MuZm9udFNpemUgPSB0b2tlbnMuZm9udFNpemVzW2ZvbnRTaXplXSB8fCBmb250U2l6ZTtcbiAgICAgICAgY3NzLmxpbmVIZWlnaHQgPSB0b2tlbnMubGluZUhlaWdodHNbbGluZUhlaWdodF0gfHwgbGluZUhlaWdodDtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2godW5pdE1hdGNoKSB8fFxuICAgICAgICB2YWx1ZS5tYXRjaCgveHgtc21hbGx8eC1zbWFsbHxzbWFsbHxtZWRpdW18bGFyZ2V8eC1sYXJnZXx4eC1sYXJnZXx4eHgtbGFyZ2UvKSB8fFxuICAgICAgICB0b2tlbnMuZm9udFNpemVzW3ZhbHVlXSlcbiAgICAgICAgY3NzLmZvbnRTaXplID0gdG9rZW5zLmZvbnRTaXplc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2goL25vcm1hbHxpdGFsaWN8b2JsaXF1ZS8pKVxuICAgICAgICBjc3MuZm9udFN0eWxlID0gdmFsdWU7XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2goL25vcm1hbHxib2xkLykgfHwgdG9rZW5zLmZvbnRXZWlnaHRzW3ZhbHVlXSlcbiAgICAgICAgY3NzLmZvbnRXZWlnaHQgPVxuICAgICAgICAgICAgdmFsdWUgPT09IFwibm9ybWFsXCIgPyA0MDAgOiB0b2tlbnMuZm9udFdlaWdodHNbdmFsdWVdIHx8IDcwMDtcbiAgICBlbHNlIGlmICh2YWx1ZS5tYXRjaCh1bml0TWF0Y2gpIHx8IHRva2Vucy5mb250U2l6ZXNbdmFsdWVdKVxuICAgICAgICBjc3MuZm9udFNpemUgPSB0b2tlbnMuZm9udFNpemVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICBlbHNlIHtcbiAgICAgICAgY3NzLmZvbnRGYW1pbHkgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLmZvbnRGYW1pbHksIHRva2Vucy5mb250c1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciB0cmFuc2l0aW9uID0gY3JlYXRlUHJvcGVydHlQYXJzZXIoXG4vLyBUaGUgd2hvbGUgdG9rZW4gaXMgYSB0cmFuc2l0aW9uLCBzbyBuZWVkIHRvIGdyYWIgaXQgYmVmb3JlIHBhc3NpbmcgaW4gaGVyZVxuZnVuY3Rpb24gKF8sIGNzcywgdmFsdWUsIGluZGV4LCBjaGFpbikge1xuICAgIGlmICh2YWx1ZS5tYXRjaCh1bml0TWF0Y2gpKSB7XG4gICAgICAgIGlmIChjaGFpbi5maW5kSW5kZXgoZnVuY3Rpb24gKHBhcnQpIHsgcmV0dXJuIHBhcnQubWF0Y2godW5pdE1hdGNoKTsgfSkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICBjc3MudHJhbnNpdGlvbkR1cmF0aW9uID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy50cmFuc2l0aW9uRHVyYXRpb24sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNzcy50cmFuc2l0aW9uRGVsYXkgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLnRyYW5zaXRpb25EZWxheSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLm1hdGNoKGVhc2luZ01hdGNoKSkge1xuICAgICAgICBjc3MudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gc2V0Q2hhaW5lZFZhbHVlKGNzcy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24sIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzcy50cmFuc2l0aW9uUHJvcGVydHkgPSBzZXRDaGFpbmVkVmFsdWUoY3NzLnRyYW5zaXRpb25Qcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBtYXJnaW4gPSBjcmVhdGVQcm9wZXJ0eVBhcnNlcihmdW5jdGlvbiAodG9rZW5zLCBjc3MsIHZhbHVlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjc3MubWFyZ2luVG9wID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLm1hcmdpblJpZ2h0ID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLm1hcmdpbkJvdHRvbSA9IHRva2Vucy5zcGFjZVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgICAgIGNzcy5tYXJnaW5MZWZ0ID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgY3NzLm1hcmdpblJpZ2h0ID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLm1hcmdpbkxlZnQgPSB0b2tlbnMuc3BhY2VbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICBjc3MubWFyZ2luQm90dG9tID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzcy5tYXJnaW5MZWZ0ID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG59KTtcbmV4cG9ydCB2YXIgcGFkZGluZyA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nVG9wID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLnBhZGRpbmdSaWdodCA9IHRva2Vucy5zcGFjZVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLnBhZGRpbmdMZWZ0ID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdSaWdodCA9IHRva2Vucy5zcGFjZVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgICAgIGNzcy5wYWRkaW5nTGVmdCA9IHRva2Vucy5zcGFjZVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gdG9rZW5zLnNwYWNlW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzcy5wYWRkaW5nTGVmdCA9IHRva2Vucy5zcGFjZVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxufSk7XG5leHBvcnQgdmFyIGJvcmRlciA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUubWF0Y2goL25vbmV8aGlkZGVufGRvdHRlZHxkYXNoZWR8c29saWR8ZG91YmxlfGdyb292ZXxyaWRnZXxpbnNldHxvdXRzZXQvKSkge1xuICAgICAgICBjc3MuYm9yZGVyVG9wU3R5bGUgPSB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlclJpZ2h0U3R5bGUgPSB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckJvdHRvbVN0eWxlID0gdmFsdWU7XG4gICAgICAgIGNzcy5ib3JkZXJMZWZ0U3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2godW5pdE1hdGNoKSB8fFxuICAgICAgICB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSB8fFxuICAgICAgICAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGNzcy5ib3JkZXJUb3BXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tV2lkdGggPSB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3NzLmJvcmRlclRvcENvbG9yID0gdG9rZW5zLmNvbG9yc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgICAgIGNzcy5ib3JkZXJSaWdodENvbG9yID0gdG9rZW5zLmNvbG9yc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgICAgIGNzcy5ib3JkZXJCb3R0b21Db2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyTGVmdENvbG9yID0gdG9rZW5zLmNvbG9yc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxufSk7XG5leHBvcnQgdmFyIGJvcmRlclRvcCA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUubWF0Y2goL25vbmV8aGlkZGVufGRvdHRlZHxkYXNoZWR8c29saWR8ZG91YmxlfGdyb292ZXxyaWRnZXxpbnNldHxvdXRzZXQvKSkge1xuICAgICAgICBjc3MuYm9yZGVyVG9wU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2godW5pdE1hdGNoKSB8fCB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSkge1xuICAgICAgICBjc3MuYm9yZGVyVG9wV2lkdGggPSB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzcy5ib3JkZXJUb3BDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBib3JkZXJSaWdodCA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUubWF0Y2goL25vbmV8aGlkZGVufGRvdHRlZHxkYXNoZWR8c29saWR8ZG91YmxlfGdyb292ZXxyaWRnZXxpbnNldHxvdXRzZXQvKSkge1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRTdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZS5tYXRjaCh1bml0TWF0Y2gpIHx8IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdKSB7XG4gICAgICAgIGNzcy5ib3JkZXJSaWdodFdpZHRoID0gdG9rZW5zLmJvcmRlcldpZHRoc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBib3JkZXJMZWZ0ID0gY3JlYXRlUHJvcGVydHlQYXJzZXIoZnVuY3Rpb24gKHRva2VucywgY3NzLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCgvbm9uZXxoaWRkZW58ZG90dGVkfGRhc2hlZHxzb2xpZHxkb3VibGV8Z3Jvb3ZlfHJpZGdlfGluc2V0fG91dHNldC8pKSB7XG4gICAgICAgIGNzcy5ib3JkZXJMZWZ0U3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2godW5pdE1hdGNoKSB8fCB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSkge1xuICAgICAgICBjc3MuYm9yZGVyTGVmdFdpZHRoID0gdG9rZW5zLmJvcmRlcldpZHRoc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjc3MuYm9yZGVyTGVmdENvbG9yID0gdG9rZW5zLmNvbG9yc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxufSk7XG5leHBvcnQgdmFyIGJvcmRlckJvdHRvbSA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUubWF0Y2goL25vbmV8aGlkZGVufGRvdHRlZHxkYXNoZWR8c29saWR8ZG91YmxlfGdyb292ZXxyaWRnZXxpbnNldHxvdXRzZXQvKSkge1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUubWF0Y2godW5pdE1hdGNoKSB8fCB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSkge1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tV2lkdGggPSB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNzcy5ib3JkZXJCb3R0b21Db2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBib3JkZXJXaWR0aCA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNzcy5ib3JkZXJUb3BXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tV2lkdGggPSB0b2tlbnMuYm9yZGVyV2lkdGhzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyTGVmdFdpZHRoID0gdG9rZW5zLmJvcmRlcldpZHRoc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XG4gICAgICAgIGNzcy5ib3JkZXJCb3R0b21XaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRXaWR0aCA9IHRva2Vucy5ib3JkZXJXaWR0aHNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBib3JkZXJDb2xvciA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNzcy5ib3JkZXJUb3BDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tQ29sb3IgPSB0b2tlbnMuY29sb3JzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyTGVmdENvbG9yID0gdG9rZW5zLmNvbG9yc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XG4gICAgICAgIGNzcy5ib3JkZXJCb3R0b21Db2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRDb2xvciA9IHRva2Vucy5jb2xvcnNbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBib3JkZXJTdHlsZSA9IGNyZWF0ZVByb3BlcnR5UGFyc2VyKGZ1bmN0aW9uICh0b2tlbnMsIGNzcywgdmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNzcy5ib3JkZXJUb3BTdHlsZSA9IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRTdHlsZSA9IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tU3R5bGUgPSB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRTdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICBjc3MuYm9yZGVyUmlnaHRTdHlsZSA9IHZhbHVlO1xuICAgICAgICBjc3MuYm9yZGVyTGVmdFN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XG4gICAgICAgIGNzcy5ib3JkZXJCb3R0b21TdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3NzLmJvcmRlckxlZnRTdHlsZSA9IHZhbHVlO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBib3JkZXJSYWRpdXMgPSBjcmVhdGVQcm9wZXJ0eVBhcnNlcihmdW5jdGlvbiAodG9rZW5zLCBjc3MsIHZhbHVlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IHRva2Vucy5yYWRpaVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgICAgIGNzcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gdG9rZW5zLnJhZGlpW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gdG9rZW5zLnJhZGlpW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gdG9rZW5zLnJhZGlpW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgY3NzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gdG9rZW5zLnJhZGlpW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICAgICAgY3NzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSB0b2tlbnMucmFkaWlbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSB0b2tlbnMucmFkaWlbdmFsdWVdIHx8IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA9PT0gMykge1xuICAgICAgICBjc3MuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IHRva2Vucy5yYWRpaVt2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxufSk7XG5leHBvcnQgdmFyIGJveFNoYWRvdyA9IGZ1bmN0aW9uICh0b2tlbnMsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm94U2hhZG93OiB0b2tlbml6ZVZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoY2hhaW4pIHsgcmV0dXJuIGNoYWluLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB0b2tlbnMuY29sb3JzW3ZhbF0gfHwgdmFsOyB9KS5qb2luKFwiIFwiKTsgfSlcbiAgICAgICAgICAgIC5qb2luKFwiLCBcIiksXG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgVE9LRU5fU1RSSU5HID0gMTtcbnZhciBUT0tFTl9RVU9URURfU1RSSU5HID0gMjtcbnZhciBUT0tFTl9GVU5DVElPTiA9IDM7XG52YXIgVE9LRU5fQlJBQ0tFVCA9IDQ7XG52YXIgY3VycmVudFR5cGU7XG52YXIgY3VycmVudFRva2VuID0gXCJcIjtcbnZhciBjdXJyZW50RGVwdGggPSAwO1xudmFyIHRva2VuR3JvdXBzID0gW1tdXTtcbmV4cG9ydCB2YXIgdG9rZW5pemVWYWx1ZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXNldEN1cnJlbnRUb2tlbigpO1xuICAgIHRva2VuR3JvdXBzID0gW1tdXTtcbiAgICBpZiAoIXN0cikge1xuICAgICAgICByZXR1cm4gdG9rZW5Hcm91cHM7XG4gICAgfVxuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFR5cGUgPT09IFRPS0VOX1NUUklORykge1xuICAgICAgICAgICAgICAgICAgICBhZGRDdXJyZW50VG9rZW5Ub0dyb3VwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2tlbiArPSBjaGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIG5ldyB0b2tlbiBncm91cFxuICAgICAgICAgICAgY2FzZSBcIixcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnREZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDdXJyZW50VG9rZW5Ub0dyb3VwKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZE5ld1Rva2VuR3JvdXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2tlbiArPSBjaGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIFF1b3RlZCBzdHJpbmc6XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgY3VycmVudFRva2VuICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RGVwdGggJiYgIWN1cnJlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlID0gVE9LRU5fUVVPVEVEX1NUUklORztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERlcHRoID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudERlcHRoID09PSAxICYmIGN1cnJlbnRUeXBlID09PSBUT0tFTl9RVU9URURfU1RSSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREZXB0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGFkZEN1cnJlbnRUb2tlblRvR3JvdXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBDc3MgZnVuY3Rpb246XG4gICAgICAgICAgICBjYXNlIFwiKFwiOlxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudERlcHRoKVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9IFRPS0VOX0ZVTkNUSU9OO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2tlbiArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIilcIjpcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9rZW4gKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFR5cGUgPT09IFRPS0VOX0ZVTkNUSU9OICYmICFjdXJyZW50RGVwdGgpXG4gICAgICAgICAgICAgICAgICAgIGFkZEN1cnJlbnRUb2tlblRvR3JvdXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIEJyYWNrZXQgdmFsdWVzOlxuICAgICAgICAgICAgY2FzZSBcIltcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnREZXB0aClcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGUgPSBUT0tFTl9CUkFDS0VUO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2tlbiArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIl1cIjpcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9rZW4gKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnREZXB0aClcbiAgICAgICAgICAgICAgICAgICAgYWRkQ3VycmVudFRva2VuVG9Hcm91cCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRUeXBlKVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9IFRPS0VOX1NUUklORztcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9rZW4gKz0gY2hhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudFRva2VuKVxuICAgICAgICBhZGRDdXJyZW50VG9rZW5Ub0dyb3VwKCk7XG4gICAgcmV0dXJuIHRva2VuR3JvdXBzO1xufTtcbi8qKlxuICogVVRJTFM6XG4gKi9cbi8qKlxuICogUmVzZXRzIHRoZSBjdXJyZW50IHRva2VuIGluZm9cbiAqL1xuZnVuY3Rpb24gcmVzZXRDdXJyZW50VG9rZW4oKSB7XG4gICAgY3VycmVudERlcHRoID0gY3VycmVudFR5cGUgPSAwO1xuICAgIGN1cnJlbnRUb2tlbiA9IFwiXCI7XG59XG4vKipcbiAqIEFkZHMgY3VycmVudCB0b2tlbiB0byB0aGUgc3RhY2sgdGhlbiBzdGFydHMgYSBuZXcgb25lXG4gKi9cbmZ1bmN0aW9uIGFkZEN1cnJlbnRUb2tlblRvR3JvdXAoKSB7XG4gICAgaWYgKGN1cnJlbnRUeXBlKVxuICAgICAgICB0b2tlbkdyb3Vwc1t0b2tlbkdyb3Vwcy5sZW5ndGggLSAxXS5wdXNoKGN1cnJlbnRUb2tlbik7XG4gICAgcmVzZXRDdXJyZW50VG9rZW4oKTtcbn1cbi8qKlxuICogQWRkcyBhIG5ldyB0b2tlbiBncm91cCBhbmQgcmVxdWVzdHMgYSBuZXcgb25lXG4gKiBGb3IgdGhpbmdzIGxpa2UgYW5pbWF0aW9ucyBvciBib3ggc2hhZG93IHdoZXJlIHRoZXJlIG1pZ2h0IGJlIG11bHRpcGxlIHJ1bGVzXG4gKiBhcHBsaWVkIHRvIHRoZSBzYW1lIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGFkZE5ld1Rva2VuR3JvdXAoKSB7XG4gICAgdG9rZW5Hcm91cHNbdG9rZW5Hcm91cHMubGVuZ3RoXSA9IFtdO1xuICAgIHJlc2V0Q3VycmVudFRva2VuKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWx1ZS10b2tlbml6ZXIuanMubWFwIiwiZXhwb3J0IHZhciBBVE9NID0gU3ltYm9sKFwiQVRPTVwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsImV4cG9ydCB2YXIgdW5pdGxlc3NLZXlzID0ge1xuICAgIC8vIGFuaW1hdGlvbiBkdXJhdGlvbiBvbmx5IGFkZGVkIHNvIHRoYXQgaXQncyBpZ25vcmVkOlxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxLFxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICAgIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICAgIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gICAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgICBib3hGbGV4OiAxLFxuICAgIGJveEZsZXhHcm91cDogMSxcbiAgICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gICAgY29sdW1uQ291bnQ6IDEsXG4gICAgY29sdW1uczogMSxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIGZsZXhQb3NpdGl2ZTogMSxcbiAgICBmbGV4U2hyaW5rOiAxLFxuICAgIGZsZXhOZWdhdGl2ZTogMSxcbiAgICBmbGV4T3JkZXI6IDEsXG4gICAgZ3JpZFJvdzogMSxcbiAgICBncmlkUm93RW5kOiAxLFxuICAgIGdyaWRSb3dTcGFuOiAxLFxuICAgIGdyaWRSb3dTdGFydDogMSxcbiAgICBncmlkQ29sdW1uOiAxLFxuICAgIGdyaWRDb2x1bW5FbmQ6IDEsXG4gICAgZ3JpZENvbHVtblNwYW46IDEsXG4gICAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICAgIG1zR3JpZFJvdzogMSxcbiAgICBtc0dyaWRSb3dTcGFuOiAxLFxuICAgIG1zR3JpZENvbHVtbjogMSxcbiAgICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICAgIGZvbnRXZWlnaHQ6IDEsXG4gICAgbGluZUhlaWdodDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIG9yZGVyOiAxLFxuICAgIG9ycGhhbnM6IDEsXG4gICAgdGFiU2l6ZTogMSxcbiAgICB3aWRvd3M6IDEsXG4gICAgekluZGV4OiAxLFxuICAgIHpvb206IDEsXG4gICAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAgIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgICBmaWxsT3BhY2l0eTogMSxcbiAgICBmbG9vZE9wYWNpdHk6IDEsXG4gICAgc3RvcE9wYWNpdHk6IDEsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgICBzdHJva2VPcGFjaXR5OiAxLFxuICAgIHN0cm9rZVdpZHRoOiAxLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXRsZXNzLmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhbmltYXRpb24sIGJhY2tncm91bmQsIGJvcmRlciwgYm9yZGVyQm90dG9tLCBib3JkZXJDb2xvciwgYm9yZGVyTGVmdCwgYm9yZGVyUmFkaXVzLCBib3JkZXJSaWdodCwgYm9yZGVyU3R5bGUsIGJvcmRlclRvcCwgYm9yZGVyV2lkdGgsIGJveFNoYWRvdywgZm9udCwgbWFyZ2luLCBwYWRkaW5nLCB0cmFuc2l0aW9uLCB9IGZyb20gXCIuL3Nob3J0aGFuZC1wYXJzZXJcIjtcbmV4cG9ydCB2YXIgTUFJTl9CUkVBS1BPSU5UX0lEID0gXCJpbml0aWFsXCI7XG5leHBvcnQgdmFyIGNzc1Byb3BUb1Rva2VuID0ge1xuICAgIGdhcDogXCJzcGFjZVwiLFxuICAgIGdyaWRHYXA6IFwic3BhY2VcIixcbiAgICBjb2x1bW5HYXA6IFwic3BhY2VcIixcbiAgICBncmlkQ29sdW1uR2FwOiBcInNwYWNlXCIsXG4gICAgcm93R2FwOiBcInNwYWNlXCIsXG4gICAgZ3JpZFJvd0dhcDogXCJzcGFjZVwiLFxuICAgIGluc2V0OiBcInNwYWNlXCIsXG4gICAgaW5zZXRCbG9jazogXCJzcGFjZVwiLFxuICAgIGluc2V0QmxvY2tFbmQ6IFwic3BhY2VcIixcbiAgICBpbnNldEJsb2NrU3RhcnQ6IFwic3BhY2VcIixcbiAgICBpbnNldElubGluZTogXCJzcGFjZVwiLFxuICAgIGluc2V0SW5saW5lRW5kOiBcInNwYWNlXCIsXG4gICAgaW5zZXRJbmxpbmVTdGFydDogXCJzcGFjZVwiLFxuICAgIG1hcmdpbjogXCJzcGFjZVwiLFxuICAgIG1hcmdpblRvcDogXCJzcGFjZVwiLFxuICAgIG1hcmdpblJpZ2h0OiBcInNwYWNlXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcInNwYWNlXCIsXG4gICAgbWFyZ2luTGVmdDogXCJzcGFjZVwiLFxuICAgIG1hcmdpbkJsb2NrOiBcInNwYWNlXCIsXG4gICAgbWFyZ2luQmxvY2tFbmQ6IFwic3BhY2VcIixcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBcInNwYWNlXCIsXG4gICAgbWFyZ2luSW5saW5lOiBcInNwYWNlXCIsXG4gICAgbWFyZ2luSW5saW5lRW5kOiBcInNwYWNlXCIsXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IFwic3BhY2VcIixcbiAgICBwYWRkaW5nOiBcInNwYWNlXCIsXG4gICAgcGFkZGluZ1RvcDogXCJzcGFjZVwiLFxuICAgIHBhZGRpbmdSaWdodDogXCJzcGFjZVwiLFxuICAgIHBhZGRpbmdCb3R0b206IFwic3BhY2VcIixcbiAgICBwYWRkaW5nTGVmdDogXCJzcGFjZVwiLFxuICAgIHBhZGRpbmdCbG9jazogXCJzcGFjZVwiLFxuICAgIHBhZGRpbmdCbG9ja0VuZDogXCJzcGFjZVwiLFxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0OiBcInNwYWNlXCIsXG4gICAgcGFkZGluZ0lubGluZTogXCJzcGFjZVwiLFxuICAgIHBhZGRpbmdJbmxpbmVFbmQ6IFwic3BhY2VcIixcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IFwic3BhY2VcIixcbiAgICB0b3A6IFwic3BhY2VcIixcbiAgICByaWdodDogXCJzcGFjZVwiLFxuICAgIGJvdHRvbTogXCJzcGFjZVwiLFxuICAgIGxlZnQ6IFwic3BhY2VcIixcbiAgICBmb250U2l6ZTogXCJmb250U2l6ZXNcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiY29sb3JzXCIsXG4gICAgYm9yZGVyOiBbXCJcIiwgXCJib3JkZXJTdHlsZXNcIiwgXCJjb2xvcnNcIl0sXG4gICAgYm9yZGVyQ29sb3I6IFwiY29sb3JzXCIsXG4gICAgYm9yZGVyVG9wQ29sb3I6IFwiY29sb3JzXCIsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogXCJjb2xvcnNcIixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCJjb2xvcnNcIixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IFwiY29sb3JzXCIsXG4gICAgY2FyZXRDb2xvcjogXCJjb2xvcnNcIixcbiAgICBjb2xvcjogXCJjb2xvcnNcIixcbiAgICBjb2x1bW5SdWxlQ29sb3I6IFwiY29sb3JzXCIsXG4gICAgb3V0bGluZUNvbG9yOiBcImNvbG9yc1wiLFxuICAgIGZpbGw6IFwiY29sb3JzXCIsXG4gICAgc3Ryb2tlOiBcImNvbG9yc1wiLFxuICAgIGZvbnRGYW1pbHk6IFwiZm9udHNcIixcbiAgICBmb250V2VpZ2h0OiBcImZvbnRXZWlnaHRzXCIsXG4gICAgbGluZUhlaWdodDogXCJsaW5lSGVpZ2h0c1wiLFxuICAgIGxldHRlclNwYWNpbmc6IFwibGV0dGVyU3BhY2luZ3NcIixcbiAgICBibG9ja1NpemU6IFwic2l6ZXNcIixcbiAgICBtaW5CbG9ja1NpemU6IFwic2l6ZXNcIixcbiAgICBtYXhCbG9ja1NpemU6IFwic2l6ZXNcIixcbiAgICBpbmxpbmVTaXplOiBcInNpemVzXCIsXG4gICAgbWluSW5saW5lU2l6ZTogXCJzaXplc1wiLFxuICAgIG1heElubGluZVNpemU6IFwic2l6ZXNcIixcbiAgICB3aWR0aDogXCJzaXplc1wiLFxuICAgIG1pbldpZHRoOiBcInNpemVzXCIsXG4gICAgbWF4V2lkdGg6IFwic2l6ZXNcIixcbiAgICBoZWlnaHQ6IFwic2l6ZXNcIixcbiAgICBtaW5IZWlnaHQ6IFwic2l6ZXNcIixcbiAgICBtYXhIZWlnaHQ6IFwic2l6ZXNcIixcbiAgICBmbGV4QmFzaXM6IFwic2l6ZXNcIixcbiAgICBib3JkZXJXaWR0aDogXCJib3JkZXJXaWR0aHNcIixcbiAgICBib3JkZXJUb3BXaWR0aDogXCJib3JkZXJXaWR0aHNcIixcbiAgICBib3JkZXJMZWZ0V2lkdGg6IFwiYm9yZGVyV2lkdGhzXCIsXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogXCJib3JkZXJXaWR0aHNcIixcbiAgICBib3JkZXJCb3R0b21XaWR0aDogXCJib3JkZXJXaWR0aHNcIixcbiAgICBib3JkZXJTdHlsZTogXCJib3JkZXJTdHlsZXNcIixcbiAgICBib3JkZXJUb3BTdHlsZTogXCJib3JkZXJTdHlsZXNcIixcbiAgICBib3JkZXJMZWZ0U3R5bGU6IFwiYm9yZGVyU3R5bGVzXCIsXG4gICAgYm9yZGVyUmlnaHRTdHlsZTogXCJib3JkZXJTdHlsZXNcIixcbiAgICBib3JkZXJCb3R0b21TdHlsZTogXCJib3JkZXJTdHlsZXNcIixcbiAgICBib3JkZXJSYWRpdXM6IFwicmFkaWlcIixcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcInJhZGlpXCIsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwicmFkaWlcIixcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogXCJyYWRpaVwiLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFwicmFkaWlcIixcbiAgICBib3hTaGFkb3c6IFwic2hhZG93c1wiLFxuICAgIHRleHRTaGFkb3c6IFwic2hhZG93c1wiLFxuICAgIHpJbmRleDogXCJ6SW5kaWNlc1wiLFxuICAgIHRyYW5zaXRpb246IFwidHJhbnNpdGlvbnNcIixcbn07XG5leHBvcnQgdmFyIHRva2VuVHlwZXMgPSBbXG4gICAgXCJzaXplc1wiLFxuICAgIFwiY29sb3JzXCIsXG4gICAgXCJzcGFjZVwiLFxuICAgIFwiZm9udFNpemVzXCIsXG4gICAgXCJsaW5lSGVpZ2h0c1wiLFxuICAgIFwiZm9udFdlaWdodHNcIixcbiAgICBcImZvbnRzXCIsXG4gICAgXCJib3JkZXJXaWR0aHNcIixcbiAgICBcInJhZGlpXCIsXG5dO1xudmFyIGVuaGFuY2VTaGVldCA9IGZ1bmN0aW9uIChzaGVldCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQ6IHNoZWV0LmNvbnRlbnQsXG4gICAgICAgIGNzc1J1bGVzOiBzaGVldC5jc3NSdWxlcyxcbiAgICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBydWxlLnN0YXJ0c1dpdGgoXCJAXCIpID8gc2hlZXQuY3NzUnVsZXMubGVuZ3RoIDogMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IHZhciBjcmVhdGVTaGVldHMgPSBmdW5jdGlvbiAoZW52LCBzY3JlZW5zKSB7XG4gICAgaWYgKHNjcmVlbnMgPT09IHZvaWQgMCkgeyBzY3JlZW5zID0ge307IH1cbiAgICB2YXIgdGFncyA9IFtdO1xuICAgIGlmIChlbnYgJiYgZW52LmRvY3VtZW50KSB7XG4gICAgICAgIHZhciBoZWFkXzEgPSBlbnYuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gICAgICAgIGlmICghaGVhZF8xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBIRUFEIGVsZW1lbnQgb24gdGhpcyBkb2N1bWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVzID0gQXJyYXkuZnJvbShoZWFkXzEucXVlcnlTZWxlY3RvckFsbChcInN0eWxlXCIpKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nU3R5bGVzXzEgPSBzdHlsZXMuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oc3R5bGUudGV4dENvbnRlbnQgJiYgc3R5bGUudGV4dENvbnRlbnQuc3RhcnRzV2l0aChcIi8qIFNUSVRDSEVTXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgICAgc2hlZXRzOiBbXCJfX3ZhcmlhYmxlc19fXCIsIE1BSU5fQlJFQUtQT0lOVF9JRF1cbiAgICAgICAgICAgICAgICAuY29uY2F0KE9iamVjdC5rZXlzKHNjcmVlbnMpKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFnZ3IsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBleGlzdGluZ1N0eWxlc18xW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gZW52LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZF8xLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHN0eWxlKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1t4XS5vd25lck5vZGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2dyW2tleV0gPSBlbmhhbmNlU2hlZXQoZG9jdW1lbnQuc3R5bGVTaGVldHNbeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFnZ3I7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgIHNoZWV0czogW1wiX192YXJpYWJsZXNfX1wiLCBNQUlOX0JSRUFLUE9JTlRfSURdXG4gICAgICAgICAgICAuY29uY2F0KE9iamVjdC5rZXlzKHNjcmVlbnMpKVxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWdnciwga2V5KSB7XG4gICAgICAgICAgICBhZ2dyW2tleV0gPSBlbmhhbmNlU2hlZXQoe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgICAgICAgICAgIGluc2VydFJ1bGU6IGZ1bmN0aW9uIChjb250ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhZ2dyO1xuICAgICAgICB9LCB7fSksXG4gICAgfTtcbn07XG5leHBvcnQgdmFyIHNwZWNpZmljaXR5UHJvcHMgPSB7XG4gICAgYm9yZGVyOiBib3JkZXIsXG4gICAgYm94U2hhZG93OiBib3hTaGFkb3csXG4gICAgZmxleDogZnVuY3Rpb24gKHRva2VucywgdmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHsgZmxleEdyb3c6IHZhbHVlWzBdIH0sIChpc05hTih2YWx1ZVsxXSlcbiAgICAgICAgICAgICAgICAgICAgPyB7IGZsZXhCYXNpczogdmFsdWVbMV0gfVxuICAgICAgICAgICAgICAgICAgICA6IHsgZmxleFNocmluazogdmFsdWVbMV0gfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiB2YWx1ZVswXSxcbiAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogdmFsdWVbMV0sXG4gICAgICAgICAgICAgICAgICAgIGZsZXhCYXNpczogdmFsdWVbMl0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNOYU4odmFsdWUpXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IHZhbHVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IHZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICB9LFxuICAgIG92ZXJmbG93OiBmdW5jdGlvbiAodG9rZW5zLCB2YWx1ZSkgeyByZXR1cm4gKHtcbiAgICAgICAgb3ZlcmZsb3dYOiB2YWx1ZSxcbiAgICAgICAgb3ZlcmZsb3dZOiB2YWx1ZSxcbiAgICB9KTsgfSxcbiAgICBtYXJnaW46IG1hcmdpbixcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoLFxuICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgICBmb250OiBmb250LFxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyQm90dG9tLFxuICAgIGJvcmRlckxlZnQ6IGJvcmRlckxlZnQsXG4gICAgYm9yZGVyVG9wOiBib3JkZXJUb3AsXG4gICAgYm9yZGVyUmlnaHQ6IGJvcmRlclJpZ2h0LFxufTtcbmV4cG9ydCB2YXIgZ2V0VmVuZG9yUHJlZml4QW5kUHJvcHMgPSBmdW5jdGlvbiAoZW52KSB7XG4gICAgdmFyIHN0eWxlcyA9IGVudi5nZXRDb21wdXRlZFN0eWxlKGVudi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIHZhciB2ZW5kb3JQcm9wcyA9IEFycmF5LmZyb20oc3R5bGVzKS5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIHByb3BbMF0gPT09IFwiLVwiOyB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHZlbmRvclByZWZpeCA9ICh2ZW5kb3JQcm9wcy5qb2luKFwiXCIpLm1hdGNoKC8tKG1venx3ZWJraXR8bXMpLS8pIHx8XG4gICAgICAgIChzdHlsZXMuT0xpbmsgPT09IFwiXCIgJiYgW1wiXCIsIFwib1wiXSkpWzFdO1xuICAgIHJldHVybiB7IHZlbmRvclByZWZpeDogXCItXCIgKyB2ZW5kb3JQcmVmaXggKyBcIi1cIiwgdmVuZG9yUHJvcHM6IHZlbmRvclByb3BzIH07XG59O1xuZXhwb3J0IHZhciBoYXNoU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBoYXNoID0gNTM4MTtcbiAgICB2YXIgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGkpIHtcbiAgICAgICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcbiAgICB9XG4gICAgLyogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXG4gICAgICogaW50ZWdlcnMuIFNpbmNlIHdlIHdhbnQgdGhlIHJlc3VsdHMgdG8gYmUgYWx3YXlzIHBvc2l0aXZlLCBjb252ZXJ0IHRoZVxuICAgICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuICovXG4gICAgcmV0dXJuIGdlbmVyYXRlQWxwaGFiZXRpY05hbWUoaGFzaCA+Pj4gMCk7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBhIGhhc2ggbnVtYmVyIHRvIGFscGhhYmV0aWMgcmVwcmVzZW50YXRpb246XG4gKiBDb3BpZWQgZnJvbTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL21hc3Rlci9wYWNrYWdlcy9zdHlsZWQtY29tcG9uZW50cy9zcmMvdXRpbHMvZ2VuZXJhdGVBbHBoYWJldGljTmFtZS5qc1xuICovXG52YXIgQURfUkVQTEFDRVJfUiA9IC8oYSkoZCkvZ2k7XG4vKiBUaGlzIGlzIHRoZSBcImNhcGFjaXR5XCIgb2Ygb3VyIGFscGhhYmV0IGkuZS4gMngyNiBmb3IgYWxsIGxldHRlcnMgcGx1cyB0aGVpciBjYXBpdGFsaXNlZFxuICogY291bnRlcnBhcnRzICovXG52YXIgY2hhcnNMZW5ndGggPSA1Mjtcbi8qIHN0YXJ0IGF0IDc1IGZvciAnYScgdW50aWwgJ3onICgyNSkgYW5kIHRoZW4gc3RhcnQgYXQgNjUgZm9yIGNhcGl0YWxpc2VkIGxldHRlcnMgKi9cbnZhciBnZXRBbHBoYWJldGljQ2hhciA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIChjb2RlID4gMjUgPyAzOSA6IDk3KSk7XG59O1xuLyogaW5wdXQgYSBudW1iZXIsIHVzdWFsbHkgYSBoYXNoIGFuZCBjb252ZXJ0IGl0IHRvIGJhc2UtNTIgKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQWxwaGFiZXRpY05hbWUoY29kZSkge1xuICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICB2YXIgeDtcbiAgICAvKiBnZXQgYSBjaGFyIGFuZCBkaXZpZGUgYnkgYWxwaGFiZXQtbGVuZ3RoICovXG4gICAgZm9yICh4ID0gTWF0aC5hYnMoY29kZSk7IHggPiBjaGFyc0xlbmd0aDsgeCA9ICh4IC8gY2hhcnNMZW5ndGgpIHwgMCkge1xuICAgICAgICBuYW1lID0gZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWU7XG4gICAgfVxuICAgIHJldHVybiAoZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWUpLnJlcGxhY2UoQURfUkVQTEFDRVJfUiwgXCIkMS0kMlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduLCBfX3Jlc3QsIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNQUlOX0JSRUFLUE9JTlRfSUQsIGNyZWF0ZUNzcywgaGFzaFN0cmluZywgfSBmcm9tIFwiQHN0aXRjaGVzL2NvcmVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIGhhc1dhcm5lZElubGluZVN0eWxlID0gZmFsc2U7XG52YXIgY3JlYXRlQ29tcG91bmRWYXJpYW50c01hdGNoZXIgPSBmdW5jdGlvbiAoYnJlYWtQb2ludHMsIGV4aXN0aW5nTWFwKSB7XG4gICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KE1BSU5fQlJFQUtQT0lOVF9JRCwgX19zcHJlYWRBcnJheXMoKChleGlzdGluZ01hcCA9PT0gbnVsbCB8fCBleGlzdGluZ01hcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhpc3RpbmdNYXAuZ2V0KE1BSU5fQlJFQUtQT0lOVF9JRCkpIHx8IFtdKSkpO1xuICAgIE9iamVjdC5rZXlzKGJyZWFrUG9pbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICAgIHJldHVybiBtYXAuc2V0KGJyZWFrcG9pbnQsIF9fc3ByZWFkQXJyYXlzKCgoZXhpc3RpbmdNYXAgPT09IG51bGwgfHwgZXhpc3RpbmdNYXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV4aXN0aW5nTWFwLmdldChicmVha3BvaW50KSkgfHwgW10pKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVN0eWxlZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB2YXIgY3NzID0gY3JlYXRlQ3NzKGNvbmZpZyk7XG4gICAgdmFyIGRlZmF1bHRFbGVtZW50ID0gXCJkaXZcIjtcbiAgICB2YXIgQm94ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgICB2YXIgRWxlbWVudCA9IHByb3BzLmFzIHx8IGRlZmF1bHRFbGVtZW50O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50LCBfX2Fzc2lnbihfX2Fzc2lnbih7IHJlZjogcmVmIH0sIHByb3BzKSwgeyBhczogdW5kZWZpbmVkIH0pKTtcbiAgICB9KTtcbiAgICB2YXIgY3VycmVudEFzO1xuICAgIHZhciBjb25maWdCcmVha3BvaW50cyA9IGNvbmZpZy5icmVha3BvaW50cyB8fCB7fTtcbiAgICB2YXIgc3R5bGVkSW5zdGFuY2UgPSBmdW5jdGlvbiAoYmFzZUFuZFZhcmlhbnRTdHlsZXMsIENvbXBvbmVudCkge1xuICAgICAgICBpZiAoYmFzZUFuZFZhcmlhbnRTdHlsZXMgPT09IHZvaWQgMCkgeyBiYXNlQW5kVmFyaWFudFN0eWxlcyA9IGZ1bmN0aW9uIChjc3NDb21wb3NlcikgeyByZXR1cm4gY3NzQ29tcG9zZXIuY29tcG9zZSgpOyB9OyB9XG4gICAgICAgIGlmIChDb21wb25lbnQgPT09IHZvaWQgMCkgeyBDb21wb25lbnQgPSBCb3g7IH1cbiAgICAgICAgdmFyIG51bWJlck9mQ29tcG91bmRWYXJpYW50cyA9IDA7XG4gICAgICAgIHZhciBhcyA9IGN1cnJlbnRBcztcbiAgICAgICAgdmFyIF9hID0gYmFzZUFuZFZhcmlhbnRTdHlsZXMudmFyaWFudHMsIHZhcmlhbnRzID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIGJhc2UgPSBfX3Jlc3QoYmFzZUFuZFZhcmlhbnRTdHlsZXMsIFtcInZhcmlhbnRzXCJdKTtcbiAgICAgICAgdmFyIGJhc2VTdHlsZXMgPSBjc3MoYmFzZSk7XG4gICAgICAgIC8vIGNvbXBvdW5kIHMgdmFycyAmIGNvbnN0YW50czpcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhbGwgY29tcG91bmQgdmFyaWFudHM6XG4gICAgICAgIHZhciBjb21wb3VuZFZhcmlhbnRzID0gW107XG4gICAgICAgIC8vIGEgbWFwIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIHJlcXVpcmVkIG51bWJlciBvZiBtYXRjaGluZyBzIGxlZnQgZm9yIGVhY2ggYnJlYWsgcG9pbnQ6XG4gICAgICAgIHZhciByZXF1aXJlZE1hdGNoZXMgPSBjcmVhdGVDb21wb3VuZFZhcmlhbnRzTWF0Y2hlcihjb25maWdCcmVha3BvaW50cyk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG51bWJlciBvZiBhdmFpbGFibGUgdmFyaWFudHNcbiAgICAgICAgdmFyIGV2YWx1YXRlZFZhcmlhbnRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHN0b3JlIHByZSBldmFsdWF0ZWQgdmFyaWFudHNcbiAgICAgICAgdmFyIGV2YWx1YXRlZENvbXBvdW5kVmFyaWFudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cbiAgICAgICAgZm9yICh2YXIgTmFtZSBpbiB2YXJpYW50cykge1xuICAgICAgICAgICAgdmFyIHZhcmlhbnRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXG4gICAgICAgICAgICBmb3IgKHZhciBWYWx1ZU5hbWUgaW4gdmFyaWFudHNbTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZhbHVhdGVkU3R5bGVzID0gZXZhbHVhdGVTdHlsZXNGb3JBbGxCcmVha3BvaW50cyh2YXJpYW50c1tOYW1lXVtWYWx1ZU5hbWVdLCBjb25maWdCcmVha3BvaW50cywgY3NzKTtcbiAgICAgICAgICAgICAgICB2YXJpYW50TWFwLnNldChWYWx1ZU5hbWUsIGV2YWx1YXRlZFN0eWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmFsdWF0ZWRWYXJpYW50TWFwLnNldChOYW1lLCB2YXJpYW50TWFwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RpdGNoZXNDb21wb25lbnRJZCA9IFwic2NpZC1cIiArIGhhc2hTdHJpbmcoSlNPTi5zdHJpbmdpZnkoYmFzZUFuZFZhcmlhbnRTdHlsZXMpKTtcbiAgICAgICAgdmFyIFN0aXRjaGVzQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIG1lbW9Db21wc2l0aW9uJ3MgaWRlbnRpdHkgdG8gd2FybiB0aGUgdXNlclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGluIHByb2R1Y3Rpb25cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgYnJlYWtpbmcgdGhlIHJ1bGVzIG9mIGhvb2tzIG9uIHB1cnBvc2UgYXMgdGhlIGVudiB3aWxsIG5ldmVyIGNoYW5nZVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIHZhciBtZW1vU3R5bGVkID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9wcy5jc3M7IH0sIFtdKTsgLy8gV2Ugd2FudCB0aGlzIHRvIG9ubHkgZXZhbCBvbmNlXG4gICAgICAgICAgICAgICAgaWYgKG1lbW9TdHlsZWQgIT09IHByb3BzLmNzcyAmJiAhaGFzV2FybmVkSW5saW5lU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkBzdGl0Y2hlcy9yZWFjdCA6IFRoZSBjc3MgcHJvcCBzaG91bGQgaWRlYWxseSBub3QgYmUgZHluYW1pYy4gRGVmaW5lIGl0IG91dHNpZGUgeW91ciBjb21wb25lbnQgdXNpbmcgdGhlIGNzcyBjb21wb3Nlciwgb3IgdXNlIGEgbWVtbyBob29rXCIpO1xuICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRJbmxpbmVTdHlsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvbXBvc2l0aW9ucyA9IFtiYXNlU3R5bGVzXTtcbiAgICAgICAgICAgIHZhciBwcm9wc1dpdGhvdXRWYXJpYW50c0FuZENzc1Byb3AgPSB7fTtcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSBjb21wb3VuZCBzIG1hdGNoZXJcbiAgICAgICAgICAgIHZhciBjb21wb3VuZFJlcXVpcmVkTWF0Y2hlcyA9IGNyZWF0ZUNvbXBvdW5kVmFyaWFudHNNYXRjaGVyKGNvbmZpZ0JyZWFrcG9pbnRzLCByZXF1aXJlZE1hdGNoZXMpO1xuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIHVuUmVzb2x2ZWQgcyBzbyB0aGF0IHdlIGNvdWxkIGJhaWwgZWFybHk6XG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZVblJlc29sdmVkQ29tcG91bmRWYXJpYW50cyA9IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBudW1iZXJPZkNvbXBvdW5kVmFyaWFudHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBwcm9wIGlzIGEgdmFyaWFudFxuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gdmFyaWFudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2YWx1YXRlZFZhcmlhbnQgPSBldmFsdWF0ZWRWYXJpYW50TWFwLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUgdGhlIHZhbHVlIHNvIHRoYXQgd2Ugb25seSBoYXZlIHRvIGRlYWwgd2l0aCBvbmUgc3RydWN0dXJlOlxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5VmFsXzEgPSBwcm9wc1trZXldICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChfYSA9IHt9LCBfYVtNQUlOX0JSRUFLUE9JTlRfSURdID0gcHJvcHNba2V5XSwgX2EpIDogcHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHZhcmlhbnQgZXhpc3QgZm9yIHRoaXMgYnJlYWtwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleVZhbF8xW2JyZWFrcG9pbnRdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbHVhdGVkVmFyaWFudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWx1YXRlZFZhcmlhbnQuZ2V0KFN0cmluZyhrZXlWYWxfMVticmVha3BvaW50XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb25zLnB1c2goKF9hID0gZXZhbHVhdGVkVmFyaWFudC5nZXQoU3RyaW5nKGtleVZhbF8xW2JyZWFrcG9pbnRdKSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVticmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogQ29tcG91bmQgdmFyaWFudHM6ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZVblJlc29sdmVkQ29tcG91bmRWYXJpYW50cy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG91bmRWYXJpYW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb3VuZFZhcmlhbnQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGJyZWFrcG9pbnQgIG1hdGNoZXMgYSBjb21wb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFN0cmluZyhrZXlWYWxfMVticmVha3BvaW50XSkgPT09IFN0cmluZyhjb21wb3VuZFZhcmlhbnRba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvdW5kUmVxdWlyZWRNYXRjaGVzLmdldChicmVha3BvaW50KVtpXS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHJlcXVpcmVkIG1hdGNoZXMgcmVhY2ggMCBmb3IgYW55IGNvbXBvdW5kIC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBrbm93IHdlIGhhdmUgYSBtYXRjaGVkIGNvbXBvdW5kVmFyaWFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG91bmRSZXF1aXJlZE1hdGNoZXMuZ2V0KGJyZWFrcG9pbnQpW2ldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlVuUmVzb2x2ZWRDb21wb3VuZFZhcmlhbnRzLmN1cnJlbnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9ucy5wdXNoKChfYSA9IGV2YWx1YXRlZENvbXBvdW5kVmFyaWFudHMuZ2V0KGNvbXBvdW5kVmFyaWFudCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVticmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmb3JpblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBicmVha3BvaW50IGluIGtleVZhbF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKGJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1dpdGhvdXRWYXJpYW50c0FuZENzc1Byb3Bba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgIF9sb29wXzEoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wc1dpdGhvdXRWYXJpYW50c0FuZENzc1Byb3AuY3NzKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25zLnB1c2gocHJvcHNXaXRob3V0VmFyaWFudHNBbmRDc3NQcm9wLmNzcyk7XG4gICAgICAgICAgICAgICAgcHJvcHNXaXRob3V0VmFyaWFudHNBbmRDc3NQcm9wLmNzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzV2l0aG91dFZhcmlhbnRzQW5kQ3NzUHJvcCksIHsgYXM6IHByb3BzLmFzIHx8IGFzLCByZWY6IHJlZiwgY2xhc3NOYW1lOiBjc3MuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5cyhbc3RpdGNoZXNDb21wb25lbnRJZF0sIGNvbXBvc2l0aW9ucywgW3Byb3BzLmNsYXNzTmFtZV0pKSB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBTdGl0Y2hlc0NvbXBvbmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLlwiICsgc3RpdGNoZXNDb21wb25lbnRJZDsgfTtcbiAgICAgICAgU3RpdGNoZXNDb21wb25lbnQuY29tcG91bmRWYXJpYW50ID0gZnVuY3Rpb24gKGNvbXB1bmRWYXJpYW50c09iamVjdCwgY29tcG91bmRWYXJpYW50U3R5bGVzKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgY29tcG9uZW50IGxldmVsIHZhcmlhYmxlczpcbiAgICAgICAgICAgIG51bWJlck9mQ29tcG91bmRWYXJpYW50cysrO1xuICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHdlIGFkZFxuICAgICAgICAgICAgY29tcG91bmRWYXJpYW50cy5wdXNoKGNvbXB1bmRWYXJpYW50c09iamVjdCk7XG4gICAgICAgICAgICAvLyByZXF1aXJlZCBtYXRjaGVzIGlzIGEgbWFwIHdpdGggYnJlYWtwb2ludHNcbiAgICAgICAgICAgIC8vIGVhY2ggdGltZSB3ZSBhZGQgYSBjb21wb3VuZCB2YXJpYW50LCB3ZSBhbHNvIHB1c2ggaXRzIGxlbmd0aCB0b1xuICAgICAgICAgICAgLy8gYWxsIG9mIHRoZSBicmVha3BvaW50cyBzbzpcbiAgICAgICAgICAgIC8vIHJlcXVpcmVkTWF0Y2hlcy5nZXQoYnJlYWtwb2ludClbaV0gPT09IE9iamVjdC5rZXlzKGNvbXBvdW5kVmFyaWFudHNbaV0pLmxlbmd0aFxuICAgICAgICAgICAgLy8gYXQgcmVuZGVyIHRpbWUgd2UgY2xvbmUgdGhlIHJlcXVpcmVkTWF0Y2hlcyBtYXAgYW5kIHdoZW5ldmVyIGEgcHJvcCBtYXRjaGVzIGEgY29tcG91bmQgdmFyaWFudCB3ZSBkZWNyZW1lbnRcbiAgICAgICAgICAgIC8vIHRoZSByZXF1aXJlZCBtYXRjaGVzIGZvciB0aGlzIGNvbXBvdW5kIHZhcmlhbnQgYXQgdGhpcyBicmVha3BvaW50XG4gICAgICAgICAgICAvLyB3aGVuIHRoZSByZXF1aXJlZCBtYXRjaGVzIGhpdCAwIHdlIGtub3cgaXQncyBhIG10YWNoXG4gICAgICAgICAgICByZXF1aXJlZE1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goT2JqZWN0LmtleXMoY29tcHVuZFZhcmlhbnRzT2JqZWN0KS5sZW5ndGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZXZhbHVhdGVkU3R5bGVzID0gZXZhbHVhdGVTdHlsZXNGb3JBbGxCcmVha3BvaW50cyhjb21wb3VuZFZhcmlhbnRTdHlsZXMsIGNvbmZpZ0JyZWFrcG9pbnRzLCBjc3MpO1xuICAgICAgICAgICAgZXZhbHVhdGVkQ29tcG91bmRWYXJpYW50cy5zZXQoY29tcHVuZFZhcmlhbnRzT2JqZWN0LCBldmFsdWF0ZWRTdHlsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIFN0aXRjaGVzQ29tcG9uZW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3RpdGNoZXNDb21wb25lbnQ7XG4gICAgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB2YXIgc3R5bGVkUHJveHkgPSBuZXcgUHJveHkoZnVuY3Rpb24gKCkgeyB9LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKF8sIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIkJveFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJveDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRBcyA9IFN0cmluZyhwcm9wKTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZWRJbnN0YW5jZTtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uIChfLCBfXywgX2EpIHtcbiAgICAgICAgICAgIHZhciBFbGVtZW50ID0gX2FbMF0sIHN0eWxpbmcgPSBfYVsxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBcyA9IEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlZEluc3RhbmNlKHN0eWxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEFzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlZEluc3RhbmNlKHN0eWxpbmcsIEVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlZDogc3R5bGVkUHJveHksXG4gICAgICAgIGNzczogY3NzLFxuICAgIH07XG59O1xuZnVuY3Rpb24gZXZhbHVhdGVTdHlsZXNGb3JBbGxCcmVha3BvaW50cyhzdHlsZU9iamVjdCwgY29uZmlnQnJlYWtwb2ludHMsIGNzcykge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIGJyZWFrcG9pbnRzID0gKF9hID0ge30sXG4gICAgICAgIF9hW01BSU5fQlJFQUtQT0lOVF9JRF0gPSBjc3Moc3R5bGVPYmplY3QpLFxuICAgICAgICBfYSk7XG4gICAgaWYgKGNvbmZpZ0JyZWFrcG9pbnRzKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBmb3IgKHZhciBicmVha3BvaW50IGluIGNvbmZpZ0JyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICBicmVha3BvaW50c1ticmVha3BvaW50XSA9IGNzcygoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYlticmVha3BvaW50XSA9IHN0eWxlT2JqZWN0LFxuICAgICAgICAgICAgICAgIF9iKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFrcG9pbnRzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIvaG9tZS9hcnRodXIvZ2l0L3N0aXRjaGVzL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMTMuMSc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICBzdXNwZW5zZTogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgQkVGT1JFX1NMQVNIX1JFID0gL14oLiopW1xcXFxcXC9dLztcbmZ1bmN0aW9uIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHZhciBzb3VyY2VJbmZvID0gJyc7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBwYXRoID0gc291cmNlLmZpbGVOYW1lO1xuICAgIHZhciBmaWxlTmFtZSA9IHBhdGgucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcblxuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgcGF0aEJlZm9yZVNsYXNoID0gbWF0Y2hbMV07XG5cbiAgICAgICAgICBpZiAocGF0aEJlZm9yZVNsYXNoKSB7XG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9IHBhdGhCZWZvcmVTbGFzaC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgICAgICAgICAgZmlsZU5hbWUgPSBmb2xkZXJOYW1lICsgJy8nICsgZmlsZU5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cblxuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIHNvdXJjZUluZm87XG59XG5cbnZhciBSZXNvbHZlZCA9IDE7XG5mdW5jdGlvbiByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQobGF6eUNvbXBvbmVudCkge1xuICByZXR1cm4gbGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBSZXNvbHZlZCA/IGxhenlDb21wb25lbnQuX3Jlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiBcIlByb2ZpbGVyXCI7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG5cbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUocmVzb2x2ZWRUaGVuYWJsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxue1xuICAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIGhhc0V4aXN0aW5nU3RhY2sgPSBhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgJiYgYXJnc1thcmdzLmxlbmd0aCAtIDFdLmluZGV4T2YoJ1xcbiAgICBpbicpID09PSAwO1xuXG4gICAgaWYgKCFoYXNFeGlzdGluZ1N0YWNrKSB7XG4gICAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LXN0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcblxuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG5cbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cblxuXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciBjb252ZXJ0aW5nIGNoaWxkcmVuIHRvICcgKyAnYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG5cbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLlwiICsgYWRkZW5kdW0gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cblxuXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cblxuXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcblxuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5cblxuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LCBudWxsKTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9jdG9yOiBjdG9yLFxuICAgIC8vIFJlYWN0IHVzZXMgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gIHtcbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGZyYWdtZW50KTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIHZhciB0ZXN0TWFwID0gbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICB2YXIgdGVzdFNldCA9IG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pOyAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgUm9sbHVwIHRvIG5vdCBjb25zaWRlciB0aGVzZSB1bnVzZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvaXNzdWVzLzE3NzFcbiAgICAvLyBUT0RPOiB3ZSBjYW4gcmVtb3ZlIHRoZXNlIGlmIFJvbGx1cCBmaXhlcyB0aGUgYnVnLlxuXG4gICAgdGVzdE1hcC5zZXQoMCwgMCk7XG4gICAgdGVzdFNldC5hZGQoMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY3NzLCByZXNldCB9IGZyb20gXCJ+L3N0aXRjaGVzLmNvbmZpZ1wiO1xuXG5jb25zdCBkYXJrVGhlbWUgPSBjc3MudGhlbWUoe1xuICAkYmFja2dyb3VuZDogXCIjMzAzMDMwXCIsXG4gICR0ZXh0Q29sb3I6IFwiI2YwZjBmMFwiLFxufSk7XG5cbmNzcy5nbG9iYWwocmVzZXQpO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZChcImgxXCIsIHtcbiAgZm9udFNpemU6IFwiJHhsXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIkbFwiLFxuICBjb2xvcjogXCIkY29uc3RydWN0aXZlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcbiAgXCI6aG92ZXJcIjoge1xuICAgIGNvbG9yOiBcIiRkZXN0cnVjdGl2ZVwiLFxuICB9LFxufSk7XG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkKFwiaDJcIiwge1xuICBmb250U2l6ZTogXCIkbFwiLFxuICBtYXJnaW5Cb3R0b206IFwiJGxcIixcbiAgY29sb3I6IFwiJGNvbnN0cnVjdGl2ZVwiLFxufSk7XG5cbmNvbnN0IEJhc2VCdXR0b24gPSBzdHlsZWQoXCJidXR0b25cIiwge1xuICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiRiYWNrZ3JvdW5kXCIsXG4gIGNvbG9yOiBcIiR0ZXh0Q29sb3JcIixcbiAgdmFyaWFudHM6IHtcbiAgICBzaGFkb3c6IHtcbiAgICAgIHRydWU6IHtcbiAgICAgICAgYm94U2hhZG93OiBcIjhweCA4cHggOHB4ICMwMDAwMDA0MFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChCYXNlQnV0dG9uLCB7XG4gIHBhZGRpbmc6IFwiJHMgJHNcIixcbiAgdGFibGV0OiB7XG4gICAgcGFkZGluZzogXCIkcyAkbVwiLFxuICB9LFxuICBkZXNrdG9wOiB7XG4gICAgcGFkZGluZzogXCIkbSAkbFwiLFxuICB9LFxuICBwcmludDoge1xuICAgIHBhZGRpbmc6IFwiNHJlbVwiLFxuICB9LFxufSk7XG5cbmNvbnN0IENvbnN0cnVjdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24sIHtcbiAgYmFja2dyb3VuZENvbG9yOiBcIiRjb25zdHJ1Y3RpdmVcIixcbiAgY29sb3I6IFwid2hpdGVcIixcbn0pO1xuXG5jb25zdCBEZXN0cnVjdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24sIHtcbiAgYmFja2dyb3VuZENvbG9yOiBcIiRkZXN0cnVjdGl2ZVwiLFxuICBjb2xvcjogXCJ3aGl0ZVwiLFxufSk7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkKFwiZGl2XCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGdhcDogXCIxcmVtXCIsXG4gIHZhcmlhbnRzOiB7XG4gICAgb3JkZXJlZDoge1xuICAgICAgdHJ1ZToge1xuICAgICAgICBbYD4gJHtEZXN0cnVjdEJ1dHRvbn1gXToge1xuICAgICAgICAgIG9yZGVyOiAtMSxcbiAgICAgICAgfSxcbiAgICAgICAgW2A+ICR7Q29uc3RydWN0QnV0dG9ufWBdOiB7XG4gICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpdGxlPkhlbGxvIHdvcmxkPC9UaXRsZT5cbiAgICAgIDxTdWJUaXRsZT5KdXN0IHRlc3Rpbmc8L1N1YlRpdGxlPlxuICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17ZGFya1RoZW1lfSBvcmRlcmVkPlxuICAgICAgICA8Q29uc3RydWN0QnV0dG9uPkNyZWF0ZTwvQ29uc3RydWN0QnV0dG9uPlxuICAgICAgICA8RGVzdHJ1Y3RCdXR0b24gY3NzPXt7IGNvbG9yOiBcInllbGxvd1wiIH19PkRlbGV0ZTwvRGVzdHJ1Y3RCdXR0b24+XG4gICAgICAgIDxCdXR0b24+Q2FuY2VsPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVkIH0gZnJvbSBcIkBzdGl0Y2hlcy9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgeyBzdHlsZWQsIGNzcyB9ID0gY3JlYXRlU3R5bGVkKHtcbiAgdG9rZW5zOiB7XG4gICAgY29sb3JzOiB7XG4gICAgICAkcHJpbWFyeTogXCJuYXZ5XCIsXG4gICAgICAkc2Vjb25kYXJ5OiBcImJsdWVcIixcbiAgICAgICRiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAkdGV4dENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAkZGVzdHJ1Y3RpdmU6IFwiIzliMTAxMFwiLFxuICAgICAgJGNvbnN0cnVjdGl2ZTogXCIjMTc4OTE3XCIsXG4gICAgfSxcbiAgICBzcGFjZToge1xuICAgICAgJG5vbmU6IFwiMFwiLFxuICAgICAgJHM6IFwiMC4yNXJlbVwiLFxuICAgICAgJG06IFwiMC41cmVtXCIsXG4gICAgICAkbDogXCIwLjc1cmVtXCIsXG4gICAgfSxcbiAgICBmb250U2l6ZXM6IHtcbiAgICAgICR4czogXCIwLjY3ODVyZW1cIixcbiAgICAgICRzOiBcIjAuNzVyZW1cIixcbiAgICAgICRtOiBcIjFyZW1cIixcbiAgICAgICRsOiBcIjEuMjVyZW1cIixcbiAgICAgICR4bDogXCIxLjUzNjVyZW1cIixcbiAgICB9LFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIHRhYmxldDogKHJ1bGUpID0+IGBAbWVkaWEgKG1pbi13aWR0aDo1MDBweCkgeyR7cnVsZX19YCxcbiAgICBkZXNrdG9wOiAocnVsZSkgPT4gYEBtZWRpYSAobWluLXdpZHRoOjEwMjRweCkgeyR7cnVsZX19YCxcbiAgICBwcmludDogKHJ1bGUpID0+IGBAbWVkaWEgcHJpbnQgeyR7cnVsZX19YCxcbiAgfSxcbiAgdXRpbHM6IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCByZXNldCA9IHtcbiAgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvXCI6IHtcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIGJvcmRlcjogXCIwXCIsXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgIGZvbnQ6IFwiaW5oZXJpdFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICB9LFxuICBcImFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgc2VjdGlvblwiOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9LFxuICBcIipbaGlkZGVuXVwiOiB7XG4gICAgZGlzcGxheTogXCJub25lXCIsXG4gIH0sXG4gIGJvZHk6IHtcbiAgICBsaW5lSGVpZ2h0OiBcIjFcIixcbiAgfSxcbiAgXCJvbCwgdWxcIjoge1xuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gIH0sXG4gIFwiYmxvY2txdW90ZSwgcVwiOiB7XG4gICAgcXVvdGVzOiBcIm5vbmVcIixcbiAgfSxcbiAgXCJibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXJcIjoge1xuICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnRlbnQ6IFwibm9uZVwiLFxuICB9LFxuICB0YWJsZToge1xuICAgIGJvcmRlclNwYWNpbmc6IFwiMFwiLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=