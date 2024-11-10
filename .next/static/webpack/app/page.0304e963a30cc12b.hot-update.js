"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/homepage/transactionDetails/transaction-row.tsx":
/*!********************************************************************!*\
  !*** ./components/homepage/transactionDetails/transaction-row.tsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./components/ui/badge.tsx\");\n/* harmony import */ var _barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=RotateCcw,TrendingDown,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-up.js\");\n/* harmony import */ var _barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=RotateCcw,TrendingDown,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-down.js\");\n/* harmony import */ var _barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RotateCcw,TrendingDown,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction TransactionRow(props) {\n    const { name, amount, type, category } = props;\n    const typeIconMap = {\n        income: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"text-green-500\"\n        }, void 0, false, {\n            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this),\n        expense: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"text-red-500\"\n        }, void 0, false, {\n            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n            lineNumber: 24,\n            columnNumber: 14\n        }, this),\n        subscription: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"text-red-500\"\n        }, void 0, false, {\n            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n            lineNumber: 25,\n            columnNumber: 19\n        }, this)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-4 w-4 h-1\",\n                        children: typeIconMap[type]\n                    }, void 0, false, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                    variant: \"outline\",\n                    children: [\n                        \" \",\n                        amount,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                    variant: \"secondary\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = TransactionRow;\nvar _c;\n$RefreshReg$(_c, \"TransactionRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvdHJhbnNhY3Rpb25EZXRhaWxzL3RyYW5zYWN0aW9uLXJvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ3FCO0FBQ3ZDO0FBYVgsU0FBU0ssZUFDdEJDLEtBQTBCO0lBRzFCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFDLEdBQUdKO0lBRXZDLE1BQU1LLGNBQWdDO1FBQ3BDQyxzQkFBUSw4REFBQ1QsNkdBQVVBO1lBQUNVLFdBQVc7Ozs7OztRQUMvQkMsdUJBQVMsOERBQUNaLDZHQUFZQTtZQUFDVyxXQUFXOzs7Ozs7UUFDbENFLDRCQUFjLDhEQUFDZCw2R0FBU0E7WUFBQ1ksV0FBVzs7Ozs7O0lBQ3RDO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlILFdBQVc7OzBCQUNkLDhEQUFDRztnQkFBSUgsV0FBVzs7a0NBQ2QsOERBQUNJO3dCQUFLSixXQUFXO2tDQUFpQkYsV0FBVyxDQUFDRixLQUFLOzs7Ozs7a0NBQ25ELDhEQUFDUTtrQ0FBTVY7Ozs7Ozs7Ozs7OzswQkFFVCw4REFBQ1M7Z0JBQUlILFdBQVc7MEJBQ2QsNEVBQUNiLHVEQUFLQTtvQkFBQ2tCLFNBQVM7O3dCQUFXO3dCQUFFVjt3QkFBTzs7Ozs7Ozs7Ozs7OzBCQUV0Qyw4REFBQ1E7Z0JBQUlILFdBQVc7MEJBQ2QsNEVBQUNiLHVEQUFLQTtvQkFBQ2tCLFNBQVM7OEJBQWNSOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztLQTFCd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvdHJhbnNhY3Rpb25EZXRhaWxzL3RyYW5zYWN0aW9uLXJvdy50c3g/YzRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhZGdlfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQge1JvdGF0ZUNjdywgVHJlbmRpbmdEb3duLCBUcmVuZGluZ1VwfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBUcmFuc2FjdGlvblJvd1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgdHlwZUljb25NYXBQcm9wIHtcbiAgW2tleTogc3RyaW5nXTogUmVhY3QuSlNYLkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uUm93KFxuICBwcm9wczogVHJhbnNhY3Rpb25Sb3dQcm9wc1xuKSB7XG5cbiAgY29uc3Qge25hbWUsIGFtb3VudCwgdHlwZSwgY2F0ZWdvcnl9ID0gcHJvcHNcblxuICBjb25zdCB0eXBlSWNvbk1hcCA6IHR5cGVJY29uTWFwUHJvcCA9IHtcbiAgICBpbmNvbWU6IDxUcmVuZGluZ1VwIGNsYXNzTmFtZT17XCJ0ZXh0LWdyZWVuLTUwMFwifS8+LFxuICAgIGV4cGVuc2U6IDxUcmVuZGluZ0Rvd24gY2xhc3NOYW1lPXtcInRleHQtcmVkLTUwMFwifS8+LFxuICAgIHN1YnNjcmlwdGlvbjogPFJvdGF0ZUNjdyBjbGFzc05hbWU9e1widGV4dC1yZWQtNTAwXCJ9Lz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0xMFwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggdy1mdWxsXCJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibXItNCB3LTQgaC0xXCJ9Pnt0eXBlSWNvbk1hcFt0eXBlXX08L3NwYW4+XG4gICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIn0+XG4gICAgICAgIDxCYWRnZSB2YXJpYW50PXtcIm91dGxpbmVcIn0+IHthbW91bnR9IDwvQmFkZ2U+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggdy1mdWxsIGp1c3RpZnktZW5kXCJ9PlxuICAgICAgICA8QmFkZ2UgdmFyaWFudD17XCJzZWNvbmRhcnlcIn0+e2NhdGVnb3J5fTwvQmFkZ2U+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJhZGdlIiwiUm90YXRlQ2N3IiwiVHJlbmRpbmdEb3duIiwiVHJlbmRpbmdVcCIsIlJlYWN0IiwiVHJhbnNhY3Rpb25Sb3ciLCJwcm9wcyIsIm5hbWUiLCJhbW91bnQiLCJ0eXBlIiwiY2F0ZWdvcnkiLCJ0eXBlSWNvbk1hcCIsImluY29tZSIsImNsYXNzTmFtZSIsImV4cGVuc2UiLCJzdWJzY3JpcHRpb24iLCJkaXYiLCJzcGFuIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/homepage/transactionDetails/transaction-row.tsx\n"));

/***/ })

});