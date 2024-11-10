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

/***/ "(app-pages-browser)/./components/homepage/transactionDetails/transaction-details.tsx":
/*!************************************************************************!*\
  !*** ./components/homepage/transactionDetails/transaction-details.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_homepage_transactionDetails_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/homepage/transactionDetails/filter */ \"(app-pages-browser)/./components/homepage/transactionDetails/filter.tsx\");\n/* harmony import */ var _components_homepage_transactionDetails_transaction_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/homepage/transactionDetails/transaction-row */ \"(app-pages-browser)/./components/homepage/transactionDetails/transaction-row.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction TransactionDetails() {\n    const items = [\n        {\n            name: \"Netflix\",\n            amount: 2000,\n            type: \"subscription\",\n            category: \"expense\"\n        },\n        {\n            name: \"Rent\",\n            amount: 200,\n            type: \"expense\",\n            category: \"Rent\"\n        },\n        {\n            name: \"Groceries\",\n            amount: 100,\n            type: \"expense\",\n            category: \"groceries\"\n        },\n        {\n            name: \"Salary\",\n            amount: 2000,\n            type: \"income\",\n            category: \"salary\"\n        },\n        {\n            name: \"Rent\",\n            amount: 200,\n            type: \"expense\",\n            category: \"rent\"\n        }\n    ];\n    const dates = [\n        \"Today\",\n        \"Yesterday\",\n        \"Last 7 days\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-8 flex flex-col gap-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-end justify-between w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl\",\n                                children: \"Transactions\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-light\",\n                                children: \"You had 2 incomes and 34 expenses\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center gap-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homepage_transactionDetails_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rows px-2\",\n                children: dates.map((date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(index === 0 ? \"mb-4\" : \"my-4\", \"font-medium text-gray-500\"),\n                                children: date\n                            }, \"span\" + index, false, {\n                                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(index === 0 ? \"border-y\" : \"border-b\", \"py-4\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homepage_transactionDetails_transaction_row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        ...item\n                                    }, \"row\" + index, false, {\n                                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this))\n                        ]\n                    }, \"date\" + index, true, {\n                        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-details.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_c = TransactionDetails;\nvar _c;\n$RefreshReg$(_c, \"TransactionDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvdHJhbnNhY3Rpb25EZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRStCO0FBQ3dEO0FBQ0Q7QUFDdkQ7QUFHaEIsU0FBU0k7SUFHdEIsTUFBTUMsUUFBUTtRQUNaO1lBQ0VDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBRUVILE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBRUVILE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VILE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VILE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUNEO0lBRUQsTUFBTUMsUUFBUTtRQUNaO1FBQVM7UUFBYTtLQUN2QjtJQUdELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXOzswQkFFZCw4REFBQ0Q7Z0JBQUlDLFdBQVc7O2tDQUNkLDhEQUFDRDs7MENBQ0MsOERBQUNFO2dDQUFFRCxXQUFXOzBDQUFZOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBRUQsV0FBVzswQ0FBYzs7Ozs7Ozs7Ozs7O2tDQUk5Qiw4REFBQ0Q7d0JBQUlDLFdBQVc7a0NBQ2QsNEVBQUNYLHNGQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTdCLDhEQUFDVTtnQkFBSUMsV0FBVzswQkFDYkYsTUFBTUksR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0w7d0JBQXlCQyxXQUFXOzswQ0FDbkMsOERBQUNLO2dDQUEwQkwsV0FBV1QsOENBQUVBLENBQUNhLFVBQVUsSUFBSSxTQUFTLFFBQVE7MENBQ3JFRDsrQkFEUSxTQUFTQzs7Ozs7NEJBR25CWCxNQUFNUyxHQUFHLENBQUMsQ0FBQ0ksTUFBTUYsc0JBQ2hCLDhEQUFDTDtvQ0FBZ0JDLFdBQVdULDhDQUFFQSxDQUFDYSxVQUFVLElBQUksYUFBYSxZQUFZOzhDQUNwRSw0RUFBQ2QsK0ZBQWNBO3dDQUFvQixHQUFHZ0IsSUFBSTt1Q0FBckIsUUFBTUY7Ozs7O21DQURuQkE7Ozs7Ozt1QkFMSixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCN0I7S0E1RXdCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWVwYWdlL3RyYW5zYWN0aW9uRGV0YWlscy90cmFuc2FjdGlvbi1kZXRhaWxzLnRzeD85ODU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uRGV0YWlsc0ZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hvbWVwYWdlL3RyYW5zYWN0aW9uRGV0YWlscy9maWx0ZXJcIjtcbmltcG9ydCBUcmFuc2FjdGlvblJvdyBmcm9tIFwiQC9jb21wb25lbnRzL2hvbWVwYWdlL3RyYW5zYWN0aW9uRGV0YWlscy90cmFuc2FjdGlvbi1yb3dcIjtcbmltcG9ydCB7Y259IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uRGV0YWlscygpIHtcblxuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTmV0ZmxpeFwiLFxuICAgICAgYW1vdW50OiAyMDAwLFxuICAgICAgdHlwZTogXCJzdWJzY3JpcHRpb25cIixcbiAgICAgIGNhdGVnb3J5OiBcImV4cGVuc2VcIlxuICAgIH0sXG4gICAge1xuXG4gICAgICBuYW1lOiBcIlJlbnRcIixcbiAgICAgIGFtb3VudDogMjAwLFxuICAgICAgdHlwZTogXCJleHBlbnNlXCIsXG4gICAgICBjYXRlZ29yeTogXCJSZW50XCJcbiAgICB9LFxuICAgIHtcblxuICAgICAgbmFtZTogXCJHcm9jZXJpZXNcIixcbiAgICAgIGFtb3VudDogMTAwLFxuICAgICAgdHlwZTogXCJleHBlbnNlXCIsXG4gICAgICBjYXRlZ29yeTogXCJncm9jZXJpZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTYWxhcnlcIixcbiAgICAgIGFtb3VudDogMjAwMCxcbiAgICAgIHR5cGU6IFwiaW5jb21lXCIsXG4gICAgICBjYXRlZ29yeTogXCJzYWxhcnlcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJSZW50XCIsXG4gICAgICBhbW91bnQ6IDIwMCxcbiAgICAgIHR5cGU6IFwiZXhwZW5zZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwicmVudFwiXG4gICAgfVxuICBdXG5cbiAgY29uc3QgZGF0ZXMgPSBbXG4gICAgXCJUb2RheVwiLCBcIlllc3RlcmRheVwiLCBcIkxhc3QgNyBkYXlzXCIsXG4gIF1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibXQtOCBmbGV4IGZsZXgtY29sIGdhcC04XCJ9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJ0ZXh0LTJ4bFwifT5UcmFuc2FjdGlvbnM8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtcImZvbnQtbGlnaHRcIn0+XG4gICAgICAgICAgICBZb3UgaGFkIDIgaW5jb21lcyBhbmQgMzQgZXhwZW5zZXNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTEwXCJ9PlxuICAgICAgICAgIDxUcmFuc2FjdGlvbkRldGFpbHNGaWx0ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyb3dzIHB4LTJcIn0+XG4gICAgICAgIHtkYXRlcy5tYXAoKGRhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e1wiZGF0ZVwiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJmbGV4IGZsZXgtY29sIHctZnVsbFwifT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17XCJzcGFuXCIgKyBpbmRleH0gY2xhc3NOYW1lPXtjbihpbmRleCA9PT0gMCA/IFwibWItNFwiIDogXCJteS00XCIsIFwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiKX0+XG4gICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NuKGluZGV4ID09PSAwID8gXCJib3JkZXIteVwiIDogXCJib3JkZXItYlwiLCBcInB5LTRcIil9PlxuICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvblJvdyBrZXk9e1wicm93XCIraW5kZXh9IHsuLi5pdGVtfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxuXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUcmFuc2FjdGlvbkRldGFpbHNGaWx0ZXIiLCJUcmFuc2FjdGlvblJvdyIsImNuIiwiVHJhbnNhY3Rpb25EZXRhaWxzIiwiaXRlbXMiLCJuYW1lIiwiYW1vdW50IiwidHlwZSIsImNhdGVnb3J5IiwiZGF0ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiZGF0ZSIsImluZGV4Iiwic3BhbiIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/homepage/transactionDetails/transaction-details.tsx\n"));

/***/ })

});