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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./components/ui/badge.tsx\");\n\n\nfunction TransactionRow(props) {\n    const { name, amount, type, category } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between text-left\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                variant: \"outline\",\n                children: [\n                    \" \",\n                    amount,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                variant: \"outline\",\n                children: type\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {\n                variant: \"secondary\",\n                children: category\n            }, void 0, false, {\n                fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prajwal.more/code/portfolios/new_portfolio/components/homepage/transactionDetails/transaction-row.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = TransactionRow;\nvar _c;\n$RefreshReg$(_c, \"TransactionRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvdHJhbnNhY3Rpb25EZXRhaWxzL3RyYW5zYWN0aW9uLXJvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQVM3QixTQUFTQyxlQUN0QkMsS0FBMEI7SUFHMUIsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUMsR0FBR0o7SUFFdkMscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVc7OzBCQUNkLDhEQUFDQzswQkFBTU47Ozs7OzswQkFDUCw4REFBQ0gsdURBQUtBO2dCQUFDVSxTQUFTOztvQkFBVztvQkFBRU47b0JBQU87Ozs7Ozs7MEJBQ3BDLDhEQUFDSix1REFBS0E7Z0JBQUNVLFNBQVE7MEJBQVdMOzs7Ozs7MEJBQzFCLDhEQUFDTCx1REFBS0E7Z0JBQUNVLFNBQVM7MEJBQWNKOzs7Ozs7Ozs7Ozs7QUFHcEM7S0Fkd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvdHJhbnNhY3Rpb25EZXRhaWxzL3RyYW5zYWN0aW9uLXJvdy50c3g/YzRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhZGdlfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5cbmludGVyZmFjZSBUcmFuc2FjdGlvblJvd1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2FjdGlvblJvdyhcbiAgcHJvcHM6IFRyYW5zYWN0aW9uUm93UHJvcHNcbikge1xuXG4gIGNvbnN0IHtuYW1lLCBhbW91bnQsIHR5cGUsIGNhdGVnb3J5fSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1sZWZ0XCJ9PlxuICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgPEJhZGdlIHZhcmlhbnQ9e1wib3V0bGluZVwifT4ge2Ftb3VudH0gPC9CYWRnZT5cbiAgICAgIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiPnt0eXBlfTwvQmFkZ2U+XG4gICAgICA8QmFkZ2UgdmFyaWFudD17XCJzZWNvbmRhcnlcIn0+e2NhdGVnb3J5fTwvQmFkZ2U+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCYWRnZSIsIlRyYW5zYWN0aW9uUm93IiwicHJvcHMiLCJuYW1lIiwiYW1vdW50IiwidHlwZSIsImNhdGVnb3J5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/homepage/transactionDetails/transaction-row.tsx\n"));

/***/ })

});