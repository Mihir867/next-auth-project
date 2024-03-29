"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reset/page",{

/***/ "(app-pages-browser)/./src/app/reset/page.tsx":
/*!********************************!*\
  !*** ./src/app/reset/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Reset() {\n    _s();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const searchParams = new URLSearchParams(window.location.search);\n        const token = searchParams.get(\"token\");\n        if (token) {\n            setToken(token);\n        }\n        console.log(token);\n    }, []);\n    const handleReset = async (e)=>{\n        e.preventDefault();\n        if (password !== cPassword) {\n            setError(\"Passwords do not match\");\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/users/reset\", {\n                token,\n                password,\n                cPassword\n            });\n            console.log(response);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(response.data.message);\n        } catch (error) {\n            setError(\"An error occurred while processing your request\");\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto flex flex-col items-center justify-center min-h-screen py-2 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-8 text-4xl\",\n                children: \"Password Reset\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleReset,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            required: true,\n                            className: \"input-field\",\n                            placeholder: \"Please Enter your new Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"confirmPassword\",\n                            value: cPassword,\n                            onChange: (e)=>setConfirmPassword(e.target.value),\n                            required: true,\n                            className: \"input-field\",\n                            placeholder: \"Please confirm your new Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"button-style m\",\n                        children: \"Reset Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/next-auth-project/src/app/reset/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Reset, \"j3sIAOAfzjm+UZeHtyKgopJlo0I=\");\n_c = Reset;\nvar _c;\n$RefreshReg$(_c, \"Reset\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzZXQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDekI7QUFDVTtBQUVyQixTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sV0FBV0MsbUJBQW1CLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkNDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVksZUFBZSxJQUFJQyxnQkFBZ0JDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUMvRCxNQUFNTixRQUFRRSxhQUFhSyxHQUFHLENBQUM7UUFDL0IsSUFBSVAsT0FBTztZQUNQQyxTQUFTRDtRQUNiO1FBQ0FRLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDaEIsR0FBRyxFQUFFO0lBRUwsTUFBTVUsY0FBYyxPQUFPQztRQUN2QkEsRUFBRUMsY0FBYztRQUVoQixJQUFJbEIsYUFBYUUsV0FBVztZQUN4QkcsU0FBUztZQUNUO1FBQ0o7UUFFQSxJQUFJO1lBQ0EsTUFBTWMsV0FBVyxNQUFNdEIsNkNBQUtBLENBQUN1QixJQUFJLENBQUMsb0JBQW9CO2dCQUFFZDtnQkFBT047Z0JBQVdFO1lBQVM7WUFFbkZZLFFBQVFDLEdBQUcsQ0FBQ0k7WUFDWnJCLHVEQUFLQSxDQUFDdUIsT0FBTyxDQUFDRixTQUFTRyxJQUFJLENBQUNDLE9BQU87UUFDdkMsRUFBRSxPQUFPbkIsT0FBTztZQUNaQyxTQUFTO1lBQ1RTLFFBQVFDLEdBQUcsQ0FBQ1g7UUFDaEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDb0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnQjs7Ozs7OzBCQUM5Qiw4REFBQ0U7Z0JBQUtDLFVBQVVaOztrQ0FDWiw4REFBQ1E7a0NBQ0csNEVBQUNLOzRCQUNHQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxPQUFPaEM7NEJBQ1BpQyxVQUFVLENBQUNoQixJQUFNaEIsWUFBWWdCLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7NEJBQzNDRyxRQUFROzRCQUNSVixXQUFVOzRCQUNWVyxhQUFZOzs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNaO2tDQUNHLDRFQUFDSzs0QkFDR0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsT0FBTzlCOzRCQUNQK0IsVUFBVSxDQUFDaEIsSUFBTWQsbUJBQW1CYyxFQUFFaUIsTUFBTSxDQUFDRixLQUFLOzRCQUNsREcsUUFBUTs0QkFDUlYsV0FBVTs0QkFDVlcsYUFBWTs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDQzt3QkFBT1AsTUFBSzt3QkFBU0wsV0FBVTtrQ0FBaUI7Ozs7Ozs7Ozs7OztZQUVwRHJCLHVCQUFTLDhEQUFDa0M7Z0JBQUVDLE9BQU87b0JBQUVDLE9BQU87Z0JBQU07MEJBQUlwQzs7Ozs7Ozs7Ozs7O0FBR25EO0dBbEV3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXNldC9wYWdlLnRzeD82Yzk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0KCkge1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHNlYXJjaFBhcmFtcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gYXN5bmMgKGU6YW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAocGFzc3dvcmQgIT09IGNQYXNzd29yZCkge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3VzZXJzL3Jlc2V0XCIsIHsgdG9rZW4sIHBhc3N3b3JkICwgY1Bhc3N3b3JkfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21iLTggdGV4dC00eGwnPlBhc3N3b3JkIFJlc2V0PC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZXNldH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LWZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1BsZWFzZSBFbnRlciB5b3VyIG5ldyBQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtZmllbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxlYXNlIGNvbmZpcm0geW91ciBuZXcgUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPSdidXR0b24tc3R5bGUgbSc+UmVzZXQgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidG9hc3QiLCJSZXNldCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwidG9rZW4iLCJzZXRUb2tlbiIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0Iiwic3VjY2VzcyIsImRhdGEiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwicCIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reset/page.tsx\n"));

/***/ })

});