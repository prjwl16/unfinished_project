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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./components/ui/badge.tsx\");\n/* harmony import */ var _barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=RotateCcw,TrendingDown,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-up.js\");\n/* harmony import */ var _barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=RotateCcw,TrendingDown,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-down.js\");\n/* harmony import */ var _barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RotateCcw,TrendingDown,TrendingUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction TransactionRow(props) {\n    const { name, amount, type, category } = props;\n    const typeIconMap = {\n        income: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"text-green-500\"\n        }, void 0, false, {\n            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this),\n        expense: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"text-red-500\"\n        }, void 0, false, {\n            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n            lineNumber: 24,\n            columnNumber: 14\n        }, this),\n        subscription: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RotateCcw_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"text-red-500\"\n        }, void 0, false, {\n            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n            lineNumber: 25,\n            columnNumber: 19\n        }, this)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-4 w-5\",\n                        children: typeIconMap[type]\n                    }, void 0, false, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                    variant: \"outline\",\n                    children: [\n                        \" \",\n                        amount,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                    variant: \"secondary\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = TransactionRow;\nvar _c;\n$RefreshReg$(_c, \"TransactionRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvdHJhbnNhY3Rpb25EZXRhaWxzL3RyYW5zYWN0aW9uLXJvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ3FCO0FBQ3ZDO0FBYVgsU0FBU0ssZUFDdEJDLEtBQTBCO0lBRzFCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFDLEdBQUdKO0lBRXZDLE1BQU1LLGNBQWdDO1FBQ3BDQyxzQkFBUSw4REFBQ1QsNkdBQVVBO1lBQUNVLFdBQVc7Ozs7OztRQUMvQkMsdUJBQVMsOERBQUNaLDZHQUFZQTtZQUFDVyxXQUFXOzs7Ozs7UUFDbENFLDRCQUFjLDhEQUFDZCw2R0FBU0E7WUFBQ1ksV0FBVzs7Ozs7O0lBQ3RDO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlILFdBQVc7OzBCQUNkLDhEQUFDRztnQkFBSUgsV0FBVzs7a0NBQ2QsOERBQUNJO3dCQUFLSixXQUFXO2tDQUFhRixXQUFXLENBQUNGLEtBQUs7Ozs7OztrQ0FDL0MsOERBQUNRO2tDQUFNVjs7Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDUztnQkFBSUgsV0FBVzswQkFDZCw0RUFBQ2IsdURBQUtBO29CQUFDa0IsU0FBUzs7d0JBQVc7d0JBQUVWO3dCQUFPOzs7Ozs7Ozs7Ozs7MEJBRXRDLDhEQUFDUTtnQkFBSUgsV0FBVzswQkFDZCw0RUFBQ2IsdURBQUtBO29CQUFDa0IsU0FBUzs4QkFBY1I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0tBMUJ3QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZS90cmFuc2FjdGlvbkRldGFpbHMvdHJhbnNhY3Rpb24tcm93LnRzeD9jNGE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFkZ2V9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7Um90YXRlQ2N3LCBUcmVuZGluZ0Rvd24sIFRyZW5kaW5nVXB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFRyYW5zYWN0aW9uUm93UHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSB0eXBlSWNvbk1hcFByb3Age1xuICBba2V5OiBzdHJpbmddOiBSZWFjdC5KU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNhY3Rpb25Sb3coXG4gIHByb3BzOiBUcmFuc2FjdGlvblJvd1Byb3BzXG4pIHtcblxuICBjb25zdCB7bmFtZSwgYW1vdW50LCB0eXBlLCBjYXRlZ29yeX0gPSBwcm9wc1xuXG4gIGNvbnN0IHR5cGVJY29uTWFwIDogdHlwZUljb25NYXBQcm9wID0ge1xuICAgIGluY29tZTogPFRyZW5kaW5nVXAgY2xhc3NOYW1lPXtcInRleHQtZ3JlZW4tNTAwXCJ9Lz4sXG4gICAgZXhwZW5zZTogPFRyZW5kaW5nRG93biBjbGFzc05hbWU9e1widGV4dC1yZWQtNTAwXCJ9Lz4sXG4gICAgc3Vic2NyaXB0aW9uOiA8Um90YXRlQ2N3IGNsYXNzTmFtZT17XCJ0ZXh0LXJlZC01MDBcIn0vPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTEwXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCB3LWZ1bGxcIn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJtci00IHctNVwifT57dHlwZUljb25NYXBbdHlwZV19PC9zcGFuPlxuICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyXCJ9PlxuICAgICAgICA8QmFkZ2UgdmFyaWFudD17XCJvdXRsaW5lXCJ9PiB7YW1vdW50fSA8L0JhZGdlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWVuZFwifT5cbiAgICAgICAgPEJhZGdlIHZhcmlhbnQ9e1wic2Vjb25kYXJ5XCJ9PntjYXRlZ29yeX08L0JhZGdlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCYWRnZSIsIlJvdGF0ZUNjdyIsIlRyZW5kaW5nRG93biIsIlRyZW5kaW5nVXAiLCJSZWFjdCIsIlRyYW5zYWN0aW9uUm93IiwicHJvcHMiLCJuYW1lIiwiYW1vdW50IiwidHlwZSIsImNhdGVnb3J5IiwidHlwZUljb25NYXAiLCJpbmNvbWUiLCJjbGFzc05hbWUiLCJleHBlbnNlIiwic3Vic2NyaXB0aW9uIiwiZGl2Iiwic3BhbiIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/homepage/transactionDetails/transaction-row.tsx\n"));

/***/ })

});