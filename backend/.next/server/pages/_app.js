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

/***/ "./hoc/withapplo.js":
/*!**************************!*\
  !*** ./hoc/withapplo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link */ \"apollo-link\");\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/verma3313/Desktop/shimlaJwt/frontend/hoc/withapplo.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__.HttpLink({\n  uri: 'http://localhost:5000/'\n});\nconst authMiddleware = new apollo_link__WEBPACK_IMPORTED_MODULE_4__.ApolloLink((operation, forward) => {\n  operation.setContext({\n    headers: {\n      authorization: 'Bearer ' + localStorage.getItem('jwtToken')\n    }\n  });\n  return forward(operation);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(({\n  initialState\n}) => {\n  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    link: (0,apollo_link__WEBPACK_IMPORTED_MODULE_4__.concat)(authMiddleware, httpLink),\n    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache().restore(initialState || {})\n  });\n}, {\n  render: ({\n    Page,\n    props\n  }) => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n      client: props.apollo,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Page, _objectSpread({}, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, undefined);\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob2Mvd2l0aGFwcGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTU8sUUFBUSxHQUFHLElBQUlILHNEQUFKLENBQWE7QUFBRUksRUFBQUEsR0FBRyxFQUFFO0FBQVAsQ0FBYixDQUFqQjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxJQUFJSixtREFBSixDQUFlLENBQUNLLFNBQUQsRUFBWUMsT0FBWixLQUF3QjtBQUU1REQsRUFBQUEsU0FBUyxDQUFDRSxVQUFWLENBQXFCO0FBQ25CQyxJQUFBQSxPQUFPLEVBQUU7QUFFTEMsTUFBQUEsYUFBYSxFQUFFLFlBQVlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQjtBQUZ0QjtBQURVLEdBQXJCO0FBT0EsU0FBT0wsT0FBTyxDQUFDRCxTQUFELENBQWQ7QUFDRCxDQVZzQixDQUF2QjtBQVlBLGlFQUFlVix1REFBVSxDQUN2QixDQUFDO0FBQUVpQixFQUFBQTtBQUFGLENBQUQsS0FBdUI7QUFDckIsU0FBTyxJQUFJZixzREFBSixDQUFpQjtBQUNwQmdCLElBQUFBLElBQUksRUFBRVosbURBQU0sQ0FBQ0csY0FBRCxFQUFpQkYsUUFBakIsQ0FEUTtBQUV0QlksSUFBQUEsS0FBSyxFQUFFLElBQUlsQix1REFBSixHQUFvQm1CLE9BQXBCLENBQTRCSCxZQUFZLElBQUksRUFBNUM7QUFGZSxHQUFqQixDQUFQO0FBSUQsQ0FOc0IsRUFPdkI7QUFDRUksRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLEdBQUQsS0FBcUI7QUFDM0Isd0JBQ0UsOERBQUMsK0RBQUQ7QUFBZ0IsWUFBTSxFQUFFQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsNkJBQ0UsOERBQUMsSUFBRCxvQkFBVUQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtEO0FBUEgsQ0FQdUIsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2hvYy93aXRoYXBwbG8uanM/MWNjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0ICB7IEluTWVtb3J5Q2FjaGUgLEFwb2xsb0NsaWVudCwgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBjb25jYXQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nfSk7XG5cbmNvbnN0IGF1dGhNaWRkbGV3YXJlID0gbmV3IEFwb2xsb0xpbmsoKG9wZXJhdGlvbiwgZm9yd2FyZCkgPT4ge1xuXG4gIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICBoZWFkZXJzOiB7XG4gIFxuICAgICAgICBhdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKVxuICAgICAgfVxuICB9KTtcblxuICByZXR1cm4gZm9yd2FyZChvcGVyYXRpb24pO1xufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhcbiAgKHsgaW5pdGlhbFN0YXRlICB9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICBsaW5rOiBjb25jYXQoYXV0aE1pZGRsZXdhcmUsIGh0dHBMaW5rKSxcbiAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KVxuICAgIH0pO1xuICB9LFxuICB7XG4gICAgcmVuZGVyOiAoeyBQYWdlLCBwcm9wcyB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtwcm9wcy5hcG9sbG99PlxuICAgICAgICAgIDxQYWdlIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4pOyJdLCJuYW1lcyI6WyJ3aXRoQXBvbGxvIiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiSHR0cExpbmsiLCJBcG9sbG9MaW5rIiwiY29uY2F0IiwiaHR0cExpbmsiLCJ1cmkiLCJhdXRoTWlkZGxld2FyZSIsIm9wZXJhdGlvbiIsImZvcndhcmQiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbFN0YXRlIiwibGluayIsImNhY2hlIiwicmVzdG9yZSIsInJlbmRlciIsIlBhZ2UiLCJwcm9wcyIsImFwb2xsbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hoc/withapplo.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hoc_withapplo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hoc/withapplo */ \"./hoc/withapplo.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _theme_lightTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/lightTheme */ \"./theme/lightTheme.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/theme */ \"./theme/theme.js\");\n/* harmony import */ var _theme_reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/reset */ \"./theme/reset.js\");\n/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll-to-top */ \"react-scroll-to-top\");\n/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_top__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/home/verma3313/Desktop/shimlaJwt/frontend/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    aos__WEBPACK_IMPORTED_MODULE_11___default().init({\n      duration: 2000\n    });\n  }, []); // if (typeof window !== \"undefined\") {\n  //   if (localStorage.jwtToken) {\n  //     // Set auth token header auth\n  //     const token = localStorage.jwtToken;\n  //     // Decode token and get user info and exp\n  //     const decoded:any = jwt_decode(token);\n  //     // Set user and isAuthenticated\n  //     // store.dispatch(setCurrentUser(decoded));\n  //     const requestBody = {\n  //       query: `\n  //           query {\n  //             verifyUser {\n  //               email\n  //             }\n  //           }\n  //         `\n  //     };\n  //     fetch('http://localhost:5000/graphql', {\n  //       method: 'POST',\n  //       body: JSON.stringify(requestBody),\n  //       headers: {\n  //         'Content-Type': 'application/json',\n  //         Authorization: 'Bearer ' + localStorage.jwtToken\n  //       }\n  //     })\n  //       .then(res => {\n  //         if (res.status !== 200 && res.status !== 201) {\n  //              console.log('dsdssd')\n  //         }\n  //         return res.json();\n  //       })\n  //       .then(resData => {\n  //           console.log(resData)\n  //       })\n  //       .catch(err => {\n  //         console.log(err);\n  //       });\n  //     // Check for expired token\n  //     const currentTime = Date.now() / 1000; // to get in \n  //     if (decoded.exp < currentTime) {\n  //        console.log(\"user\")\n  //       // Logout user\n  //       store.dispatch(sessionExpire());\n  //       // Redirect to login\n  //       window.location.href = \"./login\";\n  //     }\n  //   }\n  // }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n      theme: \"dark\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n      theme: _theme_lightTheme__WEBPACK_IMPORTED_MODULE_6__.default,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_theme_reset__WEBPACK_IMPORTED_MODULE_9__.Reset, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_theme_theme__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((react_scroll_to_top__WEBPACK_IMPORTED_MODULE_10___default()), {\n        smooth: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withapplo__WEBPACK_IMPORTED_MODULE_4__.default)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1csS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQW1EO0FBQ2pEWixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFFZFMsSUFBQUEsZ0RBQUEsQ0FBUztBQUNQSyxNQUFBQSxRQUFRLEVBQUc7QUFESixLQUFUO0FBSUgsR0FOVSxFQU1SLEVBTlEsQ0FBVCxDQURpRCxDQVVqRDtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBRUE7QUFBQSw0QkFDSSwrREFBQywwREFBRDtBQUFnQixXQUFLLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUUsK0RBQUMsa0RBQUQ7QUFBQSw4QkFDSjtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREksZUFFRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBU0UsK0RBQUMsNERBQUQ7QUFBZSxXQUFLLEVBQUVWLHNEQUF0QjtBQUFBLDhCQUNBLCtEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBLCtEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUlGLCtEQUFDLFNBQUQsb0JBQWVRLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpFLGVBTUYsK0RBQUMsNkRBQUQ7QUFBYSxjQUFNO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGQTtBQXFCRDs7QUFDRCxpRUFBZVYsdURBQVMsQ0FBQ1EsS0FBRCxDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgd2l0aEFwcGxvIGZyb20gJy4uL2hvYy93aXRoYXBwbG8nXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgIGNvbG9ycyAgZnJvbSAnLi4vdGhlbWUvbGlnaHRUaGVtZSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tICcuLi90aGVtZS90aGVtZSc7XG5pbXBvcnR7IFJlc2V0IH0gZnJvbSAnLi4vdGhlbWUvcmVzZXQnXG5pbXBvcnQgU2Nyb2xsVG9Ub3AgZnJvbSBcInJlYWN0LXNjcm9sbC10by10b3BcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcydcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIFxuICAgIEFPUy5pbml0KHtcbiAgICAgIGR1cmF0aW9uIDogMjAwMFxuICAgIH0pXG4gIFxufSwgW10pXG5cblxuICAvLyBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBcbiAgLy8gICBpZiAobG9jYWxTdG9yYWdlLmp3dFRva2VuKSB7XG4gIC8vICAgICAvLyBTZXQgYXV0aCB0b2tlbiBoZWFkZXIgYXV0aFxuICAvLyAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2Uuand0VG9rZW47XG4gICBcbiAgLy8gICAgIC8vIERlY29kZSB0b2tlbiBhbmQgZ2V0IHVzZXIgaW5mbyBhbmQgZXhwXG4gIC8vICAgICBjb25zdCBkZWNvZGVkOmFueSA9IGp3dF9kZWNvZGUodG9rZW4pO1xuICAvLyAgICAgLy8gU2V0IHVzZXIgYW5kIGlzQXV0aGVudGljYXRlZFxuICAvLyAgICAgLy8gc3RvcmUuZGlzcGF0Y2goc2V0Q3VycmVudFVzZXIoZGVjb2RlZCkpO1xuICAgICAgXG4gIC8vICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgLy8gICAgICAgcXVlcnk6IGBcbiAgLy8gICAgICAgICAgIHF1ZXJ5IHtcbiAgLy8gICAgICAgICAgICAgdmVyaWZ5VXNlciB7XG4gIC8vICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIGBcbiAgLy8gICAgIH07XG4gIFxuICAvLyAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsJywge1xuICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxuICAvLyAgICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgLy8gICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2Uuand0VG9rZW5cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICAgICAgLnRoZW4ocmVzID0+IHtcbiAgLy8gICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xuICAvLyAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RzZHNzZCcpXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgICAudGhlbihyZXNEYXRhID0+IHtcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgIFxuICAvLyAgICAgICB9KTtcblxuXG4gIC8vICAgICAvLyBDaGVjayBmb3IgZXhwaXJlZCB0b2tlblxuICAvLyAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDsgLy8gdG8gZ2V0IGluIFxuICAvLyAgICAgaWYgKGRlY29kZWQuZXhwIDwgY3VycmVudFRpbWUpIHtcbiAgICBcbiAgLy8gICAgICAgIGNvbnNvbGUubG9nKFwidXNlclwiKVxuXG4gIC8vICAgICAgIC8vIExvZ291dCB1c2VyXG4gIC8vICAgICAgIHN0b3JlLmRpc3BhdGNoKHNlc3Npb25FeHBpcmUoKSk7XG4gICAgXG4gIC8vICAgICAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luXG4gIC8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuL2xvZ2luXCI7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gICBcbiAgcmV0dXJuIChcbiAgXG4gIDxkaXY+XG4gICAgICA8VG9hc3RDb250YWluZXIgdGhlbWU9XCJkYXJrXCIgLz5cbiAgICA8SGVhZD5cbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MgICBcIi8+IFxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgLz5cbiAgPC9IZWFkPlxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtjb2xvcnN9PlxuICAgIDxSZXNldC8+XG4gICAgPEdsb2JhbEZvbnRzLz5cbiAgXG4gIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICA8U2Nyb2xsVG9Ub3Agc21vb3RoIC8+XG4gIDwvVGhlbWVQcm92aWRlcj5cbiAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcHBsbyhNeUFwcClcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWQiLCJ3aXRoQXBwbG8iLCJUb2FzdENvbnRhaW5lciIsImNvbG9ycyIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxGb250cyIsIlJlc2V0IiwiU2Nyb2xsVG9Ub3AiLCJBT1MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXQiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme/lightTheme.tsx":
/*!******************************!*\
  !*** ./theme/lightTheme.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  colors: {\n    blue: \"#4e73df\"\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS9saWdodFRoZW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUUsaUVBQWU7QUFDYkEsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLElBQUksRUFBQztBQURDO0FBREssQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vdGhlbWUvbGlnaHRUaGVtZS50c3g/MTY1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29sb3JzOiB7XG4gICAgICBibHVlOlwiIzRlNzNkZlwiXG4gICAgXG4gICAgIFxuICAgIH1cbiAgfTsiXSwibmFtZXMiOlsiY29sb3JzIiwiYmx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme/lightTheme.tsx\n");

/***/ }),

/***/ "./theme/reset.js":
/*!************************!*\
  !*** ./theme/reset.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reset\": () => (/* binding */ reset),\n/* harmony export */   \"Reset\": () => (/* binding */ Reset),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst reset = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)([\"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}\"]);\nconst Reset = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"\", \"\"], reset);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS9yZXNldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUUsS0FBSyxHQUFHRixzREFBSCxreEJBQVg7QUFtREEsTUFBTUcsS0FBSyxHQUFHRixvRUFBSCxXQUF3QkMsS0FBeEIsQ0FBWDtBQUVQLGlFQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi90aGVtZS9yZXNldC5qcz8zYTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHJlc2V0ID0gY3NzYFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG52Mi4wIHwgMjAxMTAxMjZcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4gKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBSZXNldCA9IGNyZWF0ZUdsb2JhbFN0eWxlIGAke3Jlc2V0fWA7XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0O1xuIl0sIm5hbWVzIjpbImNzcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicmVzZXQiLCJSZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme/reset.js\n");

/***/ }),

/***/ "./theme/theme.js":
/*!************************!*\
  !*** ./theme/theme.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"div{font-family:'Merienda',cursive;}a{text-decoration:none;color:\", \";font-family:'Merienda',cursive;}h1{font-family:'Merienda',cursive;}body{font-family:'Merienda',cursive;overflow-x:hidden;background-color:#E8E8E8;::-webkit-scrollbar{width:10px;#nprogress .bar{background:#FFBB00 !important;}#nprogress .peg{box-shadow:0 0 10px #FFBB00,0 0 5px #FFBB00;}#nprogress .spinner-icon{border-top-color:#FFBB00;border-left-color:#FFBB00;}}::-webkit-scrollbar-thumb{background:\", \";border-radius:5px;}::-webkit-scrollbar-thumb:hover{background:\", \";}}ul{list-style:none;li{cursor:pointer;color:\", \";}}img{cursor:pointer;}button{cursor:pointer;font-family:'Merienda',cursive;}button{background-color:\", \";width:20rem;height:3.4rem;border:none;font-size:1.5rem;color:white;font-family:'Merienda',cursive;}h1{font-size:1.65rem;line-height:var(--line-height-lg);font-family:'Merienda',cursive;}h2{font-size:1.4rem;line-height:var(--line-height-lg);color:\", \";font-family:'Merienda',cursive;}h3{font-size:1.2rem;line-height:var(--line-height-lg);color:\", \";font-family:'Merienda',cursive;}p{font-family:'Merienda',cursive;}button{font-family:'Merienda',cursive;}h4{font-size:1rem;line-height:var(--line-height-md);}h5{font-size:0.75;line-height:var(--line-height-md);}h6{font-size:0.6rem;line-height:var(--line-height-md);}p{font-size:0.9rem;line-height:var(--line-height-md);color:rgb(88,82,84);font-family:'Merienda',cursive;}select{font-family:'Merienda',cursive;}.date{font-family:'Merienda',cursive;}.card{border-radius:10px;}button{border-radius:5px;font-family:'Courgette',cursive;}input{font-family:'Merienda',cursive;border:1px solid #EFEAE4;background-color:#FFFFFF;}span{font-family:'Merienda',cursive;}i{color:\", \";}@media only screen and (max-width:767px){body{overflow-x:hidden;}}@media only screen and (min-width:768px){body{overflow-x:hidden;}h1{font-size:1.75rem;}h2{color:\", \";}h3{font-size:1.25rem;}}a{text-decoration:none;color:\", \";font-family:'Merienda',cursive;}button{font-family:'Merienda',cursive;}li{cursor:pointer;}img{cursor:pointer;}\"], props => props.theme.colors.darkBrown, props => props.theme.colors.brown, props => props.theme.colors.darkBrown, props => props.theme.colors.text1, props => props.theme.colors.blue, props => props.theme.colors.grey1, props => props.theme.colors.grey1, props => props.theme.colors.darkBrown, props => props.theme.colors.grey1, props => props.theme.colors.darkBrown));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdDLGlFQUFpQkEsb0VBQWpCLDBnRUFRVUMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0FSdEMsRUEwQ2VILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEtBMUMzQyxFQWdEZUosS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0FoRDNDLEVBeURZSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRyxLQXpEeEMsRUF1RXVCTCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxJQXZFbkQsRUE2RllOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJLLEtBN0Z4QyxFQW9HWVAsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkssS0FwR3hDLEVBNEpZUCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxTQTVKeEMsRUE2S2NILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJLLEtBN0sxQyxFQXNMWVAsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0F0THhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi90aGVtZS90aGVtZS5qcz9hYjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5cbiBleHBvcnQgZGVmYXVsdCAgIGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG5cbmRpdiB7XG4gIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xufVxuYSB7IFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZGFya0Jyb3dufTtcbiAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xufSBcblxuaDEge1xuICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbn1cblxuICBib2R5IHtcbiAgXG4gICAgICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogXHQjRThFOEU4O1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xuICAjbnByb2dyZXNzIC5iYXIge1xuICBiYWNrZ3JvdW5kOiAjRkZCQjAwICFpbXBvcnRhbnQ7XG59XG5cbiNucHJvZ3Jlc3MgLnBlZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNGRkJCMDAsIDAgMCA1cHggI0ZGQkIwMDtcbn1cblxuI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0ZGQkIwMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRkJCMDA7XG59XG59XG5cbi8qIFRyYWNrICovXG5cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYnJvd259OyBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5kYXJrQnJvd259O1xufVxuICAgICAgXG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGkge1xuICAgICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0MX07XG5cbiAgfVxuICB9XG4gIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibHVlfTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAzLjRyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjp3aGl0ZTtcbiAgXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XG5cblxuICAgICAgICAgICB9XG4gXG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbGcpO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1sZyk7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkxfTtcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbGcpO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5MX07XG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XG4gICAgLyogZmFtaWx5PUZpZXNvbGVUZXh0VzAwLUl0YWxpYyAqL1xuICB9XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XG4gIH1cblxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LW1kKTtcbiAgfVxuICBoNSB7XG4gICAgZm9udC1zaXplOiAwLjc1O1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1tZCk7XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LW1kKTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1tZCk7XG4gICAgY29sb3I6IHJnYig4OCwgODIsODQpO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xuICB9XG4gIHNlbGVjdCB7XG4gICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xuICB9XG4gIFxuICAuZGF0ZSB7XG4gICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIH1cblxuICBidXR0b24ge1xuYm9yZGVyLXJhZGl1czo1cHg7XG5mb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XG4gIH1cbiAgaW5wdXQge1xuICAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNFRkVBRTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICB9XG4gIHNwYW4ge1xuICAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbiAgfVxuICBpIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZGFya0Jyb3dufTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgYm9keSB7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGJvZHkge1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkxfTtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICB9XG4gIGEgeyBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5kYXJrQnJvd259O1xuICAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbn0gXG5idXR0b24ge1xuICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbn1cblxubGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiBgO1xuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJkYXJrQnJvd24iLCJicm93biIsInRleHQxIiwiYmx1ZSIsImdyZXkxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/theme.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-link-http");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-scroll-to-top":
/*!**************************************!*\
  !*** external "react-scroll-to-top" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-to-top");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
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