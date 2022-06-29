"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/hoc/AxiosHOC.ts":
/*!************************************!*\
  !*** ./components/hoc/AxiosHOC.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axiosClient\": () => (/* binding */ axiosClient),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({});\n\nconst AxiosHOC = props => {\n  // Request Interceptor\n  axiosClient.interceptors.request.use(request => {\n    // Add code that needs to be executed before making a request\n    return request;\n  }, error => {\n    return Promise.reject(error);\n  }); // Response Interceptor\n\n  axiosClient.interceptors.response.use(response => {\n    return response;\n  }, error => {\n    let errorResponse = error.response;\n\n    if (errorResponse.status === 401) {// sample error code\n      // Add code that needs to be executed when there is a numbered error response\n    }\n\n    return Promise.reject(error);\n  });\n  return props.children;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHOC);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvYy9BeGlvc0hPQy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxXQUFXLEdBQUdELG1EQUFBLENBQWEsRUFBYixDQUFwQjs7QUFNUCxNQUFNRyxRQUFRLEdBQUlDLEtBQUQsSUFBdUI7QUFDcEM7QUFDQUgsRUFBQUEsV0FBVyxDQUFDSSxZQUFaLENBQXlCQyxPQUF6QixDQUFpQ0MsR0FBakMsQ0FDS0QsT0FBRCxJQUFhO0FBQ1Q7QUFDQSxXQUFPQSxPQUFQO0FBQ0gsR0FKTCxFQUtLRSxLQUFELElBQVc7QUFDUCxXQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0gsR0FQTCxFQUZvQyxDQVlwQzs7QUFDQVAsRUFBQUEsV0FBVyxDQUFDSSxZQUFaLENBQXlCTSxRQUF6QixDQUFrQ0osR0FBbEMsQ0FDS0ksUUFBRCxJQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNILEdBSEwsRUFJS0gsS0FBRCxJQUFXO0FBQ1AsUUFBSUksYUFBYSxHQUFHSixLQUFLLENBQUNHLFFBQTFCOztBQUNBLFFBQUlDLGFBQWEsQ0FBQ0MsTUFBZCxLQUF5QixHQUE3QixFQUFrQyxDQUM5QjtBQUNBO0FBQ0g7O0FBQ0QsV0FBT0osT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNILEdBWEw7QUFjQSxTQUFPSixLQUFLLENBQUNVLFFBQWI7QUFDSCxDQTVCRDs7QUE4QkEsaUVBQWVYLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vY29tcG9uZW50cy9ob2MvQXhpb3NIT0MudHM/MjNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgYXhpb3NDbGllbnQgPSBheGlvcy5jcmVhdGUoe30pO1xuXG50eXBlIEF4aW9zUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgbnVsbDtcbn07XG5cbmNvbnN0IEF4aW9zSE9DID0gKHByb3BzOiBBeGlvc1Byb3BzKSA9PiB7XG4gICAgLy8gUmVxdWVzdCBJbnRlcmNlcHRvclxuICAgIGF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgICAgICAgKHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIC8vIEFkZCBjb2RlIHRoYXQgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYmVmb3JlIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gUmVzcG9uc2UgSW50ZXJjZXB0b3JcbiAgICBheGlvc0NsaWVudC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXJyb3JSZXNwb25zZSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKGVycm9yUmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzYW1wbGUgZXJyb3IgY29kZVxuICAgICAgICAgICAgICAgIC8vIEFkZCBjb2RlIHRoYXQgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGVyZSBpcyBhIG51bWJlcmVkIGVycm9yIHJlc3BvbnNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zSE9DO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXhpb3NDbGllbnQiLCJjcmVhdGUiLCJBeGlvc0hPQyIsInByb3BzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZXJyb3JSZXNwb25zZSIsInN0YXR1cyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hoc/AxiosHOC.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utility/createEmotionCache */ \"./utility/createEmotionCache.ts\");\n/* harmony import */ var styles_rpsTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/rpsTheme */ \"./styles/rpsTheme.ts\");\n/* harmony import */ var components_hoc_AxiosHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/hoc/AxiosHOC */ \"./components/hoc/AxiosHOC.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/sumeet/Desktop/RPS-project/rock-paper-scissors/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst rpsTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.responsiveFontSizes)((0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.createTheme)(styles_rpsTheme__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));\n\nconst MyApp = props => {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.CacheProvider, {\n    value: emotionCache,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_hoc_AxiosHOC__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.StyledEngineProvider, {\n          injectFirst: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: rpsTheme,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n              theme: rpsTheme,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTVcsc0JBQXNCLEdBQUdILHNFQUFrQixFQUFqRDtBQUVBLE1BQU1JLFFBQVEsR0FBR0wsa0VBQW1CLENBQUNGLDBEQUFXLENBQUNJLHVEQUFELENBQVosQ0FBcEM7O0FBRUEsTUFBTUksS0FBMEMsR0FBSUMsS0FBRCxJQUFXO0FBQzFELFFBQU07QUFDRkMsSUFBQUEsU0FERTtBQUVGQyxJQUFBQSxZQUFZLEdBQUdMLHNCQUZiO0FBR0ZNLElBQUFBO0FBSEUsTUFJRkgsS0FKSjtBQU1BLHNCQUNJLDhEQUFDLHlEQUFEO0FBQWUsU0FBSyxFQUFFRSxZQUF0QjtBQUFBLDJCQUNJLDhEQUFDLCtEQUFEO0FBQUEsNkJBQ0ksOERBQUMsMkNBQUQ7QUFBQSwrQkFDSSw4REFBQywrREFBRDtBQUFzQixxQkFBVyxNQUFqQztBQUFBLGlDQUNJLDhEQUFDLHdEQUFEO0FBQWUsaUJBQUssRUFBRUosUUFBdEI7QUFBQSxtQ0FDSSw4REFBQyw0REFBRDtBQUFnQixtQkFBSyxFQUFFQSxRQUF2QjtBQUFBLHNDQUNJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSSw4REFBQyxTQUFELG9CQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdCSCxDQXZCRDs7QUF5QkEsaUVBQWVKLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrLXBhcGVyLXNjaXNzb3JzLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBTdHlsZWRQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgVGhlbWVQcm92aWRlcixcbiAgICBDc3NCYXNlbGluZSxcbiAgICBjcmVhdGVUaGVtZSxcbiAgICBTdHlsZWRFbmdpbmVQcm92aWRlcixcbiAgICByZXNwb25zaXZlRm9udFNpemVzLFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAndXRpbGl0eS9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3N0eWxlcy9ycHNUaGVtZSc7XG5pbXBvcnQgQXhpb3NIT0MgZnJvbSAnY29tcG9uZW50cy9ob2MvQXhpb3NIT0MnO1xuXG5pbnRlcmZhY2UgTXlBcHBQcm9wcyBleHRlbmRzIEFwcFByb3BzIHtcbiAgICBlbW90aW9uQ2FjaGU/OiBFbW90aW9uQ2FjaGU7XG59XG5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblxuY29uc3QgcnBzVGhlbWUgPSByZXNwb25zaXZlRm9udFNpemVzKGNyZWF0ZVRoZW1lKHRoZW1lKSk7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxNeUFwcFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLFxuICAgICAgICBwYWdlUHJvcHMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG4gICAgICAgICAgICA8QXhpb3NIT0M+XG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRW5naW5lUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17cnBzVGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRQcm92aWRlciB0aGVtZT17cnBzVGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRW5naW5lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDwvQXhpb3NIT0M+XG4gICAgICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYWNoZVByb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsIlN0eWxlZFByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJjcmVhdGVUaGVtZSIsIlN0eWxlZEVuZ2luZVByb3ZpZGVyIiwicmVzcG9uc2l2ZUZvbnRTaXplcyIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsInRoZW1lIiwiQXhpb3NIT0MiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwicnBzVGhlbWUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/rpsTheme.ts":
/*!****************************!*\
  !*** ./styles/rpsTheme.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst rpsTheme = {\n  palette: {\n    mode: 'light',\n    error: {\n      main: '#FFFFFF'\n    },\n    background: {\n      paper: '#FFFFFF',\n      default: '#000000'\n    },\n    text: {\n      primary: '#FFFFFF',\n      secondary: '#000000'\n    }\n  },\n  typography: {\n    fontFamily: 'Titan One',\n    fontWeightRegular: 400\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rpsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcnBzVGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLFFBQXNCLEdBQUc7QUFDM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUUsT0FERDtBQUVMQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsSUFBSSxFQUFFO0FBREgsS0FGRjtBQUtMQyxJQUFBQSxVQUFVLEVBQUU7QUFDUkMsTUFBQUEsS0FBSyxFQUFFLFNBREM7QUFFUkMsTUFBQUEsT0FBTyxFQUFFO0FBRkQsS0FMUDtBQVNMQyxJQUFBQSxJQUFJLEVBQUU7QUFDRkMsTUFBQUEsT0FBTyxFQUFFLFNBRFA7QUFFRkMsTUFBQUEsU0FBUyxFQUFFO0FBRlQ7QUFURCxHQURrQjtBQWUzQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRSxXQURKO0FBRVJDLElBQUFBLGlCQUFpQixFQUFFO0FBRlg7QUFmZSxDQUEvQjtBQXFCQSxpRUFBZWIsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JvY2stcGFwZXItc2Npc3NvcnMvLi9zdHlsZXMvcnBzVGhlbWUudHM/MjdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmNvbnN0IHJwc1RoZW1lOiBUaGVtZU9wdGlvbnMgPSB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBtb2RlOiAnbGlnaHQnLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWFpbjogJyNGRkZGRkYnLFxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBwYXBlcjogJyNGRkZGRkYnLFxuICAgICAgICAgICAgZGVmYXVsdDogJyMwMDAwMDAnLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBwcmltYXJ5OiAnI0ZGRkZGRicsXG4gICAgICAgICAgICBzZWNvbmRhcnk6ICcjMDAwMDAwJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ1RpdGFuIE9uZScsXG4gICAgICAgIGZvbnRXZWlnaHRSZWd1bGFyOiA0MDAsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJwc1RoZW1lO1xuIl0sIm5hbWVzIjpbInJwc1RoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJlcnJvciIsIm1haW4iLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJkZWZhdWx0IiwidGV4dCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHRSZWd1bGFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/rpsTheme.ts\n");

/***/ }),

/***/ "./utility/createEmotionCache.ts":
/*!***************************************!*\
  !*** ./utility/createEmotionCache.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createEmotionCache = () => {\n  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: 'css'\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L2NyZWF0ZUVtb3Rpb25DYWNoZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxNQUFNO0FBQzdCLFNBQU9ELHFEQUFXLENBQUM7QUFBRUUsSUFBQUEsR0FBRyxFQUFFO0FBQVAsR0FBRCxDQUFsQjtBQUNILENBRkQ7O0FBSUEsaUVBQWVELGtCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9jay1wYXBlci1zY2lzc29ycy8uL3V0aWxpdHkvY3JlYXRlRW1vdGlvbkNhY2hlLnRzPzBhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuY29uc3QgY3JlYXRlRW1vdGlvbkNhY2hlID0gKCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbW90aW9uQ2FjaGU7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utility/createEmotionCache.ts\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();