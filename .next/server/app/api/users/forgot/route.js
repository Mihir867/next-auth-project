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
exports.id = "app/api/users/forgot/route";
exports.ids = ["app/api/users/forgot/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fforgot%2Froute&page=%2Fapi%2Fusers%2Fforgot%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot%2Froute.ts&appDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fforgot%2Froute&page=%2Fapi%2Fusers%2Fforgot%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot%2Froute.ts&appDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_next_auth_project_src_app_api_users_forgot_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/forgot/route.ts */ \"(rsc)/./src/app/api/users/forgot/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/forgot/route\",\n        pathname: \"/api/users/forgot\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/forgot/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/next-auth-project/src/app/api/users/forgot/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_next_auth_project_src_app_api_users_forgot_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/forgot/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmZvcmdvdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZmb3Jnb3QlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRmZvcmdvdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZuZXh0LWF1dGgtcHJvamVjdCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtYWMlMkZEZXNrdG9wJTJGbmV4dC1hdXRoLXByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRraW5nMi8/YzgxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWFjL0Rlc2t0b3AvbmV4dC1hdXRoLXByb2plY3Qvc3JjL2FwcC9hcGkvdXNlcnMvZm9yZ290L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9mb3Jnb3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vycy9mb3Jnb3RcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL2ZvcmdvdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tYWMvRGVza3RvcC9uZXh0LWF1dGgtcHJvamVjdC9zcmMvYXBwL2FwaS91c2Vycy9mb3Jnb3Qvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcnMvZm9yZ290L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fforgot%2Froute&page=%2Fapi%2Fusers%2Fforgot%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot%2Froute.ts&appDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/forgot/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/forgot/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/config */ \"(rsc)/./src/dbConfig/config.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var _helpers_mailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/mailer */ \"(rsc)/./src/helpers/mailer.ts\");\n\n\n\n\n(0,_dbConfig_config__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { email } = reqBody;\n        if (!email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"Please enter your email!\"\n            }, {\n                status: 400\n            });\n        }\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"Invalid email!\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(user);\n        const res = await (0,_helpers_mailer__WEBPACK_IMPORTED_MODULE_3__.sendEmail)({\n            email,\n            type: \"RESET\",\n            userId: user._id\n        });\n        console.log(\"email sent\");\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true,\n            message: \"Password reset link has been sent to your email!\"\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9mb3Jnb3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDWTtBQUNsQjtBQUNPO0FBRTdDQSx5REFBT0E7QUFFQSxlQUFlSSxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNRCxRQUFRRSxJQUFJO1FBQ2xDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdGO1FBQ2xCLElBQUksQ0FBQ0UsT0FBTztZQUNWLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFRSxPQUFPO1lBQTJCLEdBQ3BDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNQyxPQUFPLE1BQU1ULHlEQUFJQSxDQUFDVSxPQUFPLENBQUM7WUFBRUo7UUFBTTtRQUN4QyxJQUFJLENBQUNHLE1BQU07WUFDVCxPQUFPVixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFRSxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUNBRyxRQUFRQyxHQUFHLENBQUNIO1FBRVosTUFBTUksTUFBTSxNQUFNWiwwREFBU0EsQ0FBQztZQUFFSztZQUFPUSxNQUFNO1lBQVNDLFFBQVFOLEtBQUtPLEdBQUc7UUFBQztRQUNyRUwsUUFBUUMsR0FBRyxDQUFDO1FBRVosT0FBT2IscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUN2QlksU0FBUztZQUNUQyxTQUFTO1FBQ1g7SUFDRixFQUFFLE9BQU9YLE9BQVc7UUFDbEIsT0FBT1IscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNVyxPQUFPO1FBQUMsR0FBRztZQUFFVixRQUFRO1FBQUk7SUFDbkU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGtpbmcyLy4vc3JjL2FwcC9hcGkvdXNlcnMvZm9yZ290L3JvdXRlLnRzP2ZhZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJAL2RiQ29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlLCBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJNb2RlbFwiO1xuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSBcIkAvaGVscGVycy9tYWlsZXJcIjtcblxuY29ubmVjdCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcUJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IGVtYWlsIH0gPSByZXFCb2R5O1xuICAgIGlmICghZW1haWwpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCFcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCFcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRFbWFpbCh7IGVtYWlsLCB0eXBlOiBcIlJFU0VUXCIsIHVzZXJJZDogdXNlci5faWQgfSk7XG4gICAgY29uc29sZS5sb2coXCJlbWFpbCBzZW50XCIpXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgcmVzZXQgbGluayBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwhXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOmFueSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0IiwiTmV4dFJlc3BvbnNlIiwiVXNlciIsInNlbmRFbWFpbCIsIlBPU1QiLCJyZXF1ZXN0IiwicmVxQm9keSIsImpzb24iLCJlbWFpbCIsImVycm9yIiwic3RhdHVzIiwidXNlciIsImZpbmRPbmUiLCJjb25zb2xlIiwibG9nIiwicmVzIiwidHlwZSIsInVzZXJJZCIsIl9pZCIsInN1Y2Nlc3MiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/forgot/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/config.ts":
/*!********************************!*\
  !*** ./src/dbConfig/config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDB connected successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.error(\"MongoDB connection error:\", err);\n        });\n        return connection; // Return the connection object\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        throw error; // Re-throw the error to allow callers to handle it\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixlQUFlQztJQUNsQixJQUFJO1FBQ0EsTUFBTUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUU1QyxNQUFNQyxhQUFhTCw0REFBbUI7UUFFdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFFQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVMsQ0FBQ0c7WUFDcEJGLFFBQVFHLEtBQUssQ0FBQyw2QkFBNkJEO1FBQy9DO1FBRUEsT0FBT0osWUFBWSwrQkFBK0I7SUFDdEQsRUFBRSxPQUFPSyxPQUFPO1FBQ1pILFFBQVFHLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE1BQU1BLE9BQU8sbURBQW1EO0lBQ3BFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRraW5nMi8uL3NyYy9kYkNvbmZpZy9jb25maWcudHM/Y2FmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMISk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbm5lY3Rpb24ub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uOyAvLyBSZXR1cm4gdGhlIGNvbm5lY3Rpb24gb2JqZWN0XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gUmUtdGhyb3cgdGhlIGVycm9yIHRvIGFsbG93IGNhbGxlcnMgdG8gaGFuZGxlIGl0XG4gICAgfSBcbn1cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/config.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/mailer.ts":
/*!*******************************!*\
  !*** ./src/helpers/mailer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sendEmail = async ({ email, type, userId })=>{\n    try {\n        let hashToken = \"\";\n        if (type === \"VERIFY\" || type === \"RESET\") {\n            hashToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(userId.toString(), 10);\n            const updateField = type === \"VERIFY\" ? \"verifyToken\" : \"forgotPasswordToken\";\n            const expiryField = type === \"VERIFY\" ? \"verifyTokenExpiry\" : \"forgotPasswordTokenExpiry\";\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(userId, {\n                [updateField]: hashToken,\n                [expiryField]: Date.now() + 3600000\n            });\n        } else {\n            throw new Error(\"Invalid email type\");\n        }\n        const transport = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: \"6ba646b119df79\",\n                pass: \"b9b87c4d5a4a2b\"\n            }\n        });\n        const mailOptions = {\n            from: \"mihirkantthakur867@gmail.com\",\n            to: email,\n            subject: type === \"VERIFY\" ? \"Verify your email address\" : \"Reset your password\",\n            html: `\n                <p>Click \n                    <a href=\"${process.env.DOMAIN}/${type === \"VERIFY\" ? \"verifyemail\" : \"reset\"}?token=${hashToken}\">\n                        here\n                    </a> \n                    to ${type === \"VERIFY\" ? \"verify the account\" : \"reset the password\"}\n                </p>\n            `\n        };\n        const mailResponse = await transport.sendMail(mailOptions);\n        return mailResponse;\n    } catch (error) {\n        throw new Error(`Email sending failed: ${error.message}`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9tYWlsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFDRTtBQUNOO0FBRXpCLE1BQU1HLFlBQVksT0FBTyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFPO0lBQ3hELElBQUk7UUFDQSxJQUFJQyxZQUFZO1FBRWhCLElBQUlGLFNBQVMsWUFBWUEsU0FBUyxTQUFTO1lBQ3ZDRSxZQUFZLE1BQU1MLG9EQUFhLENBQUNJLE9BQU9HLFFBQVEsSUFBSTtZQUNuRCxNQUFNQyxjQUFjTCxTQUFTLFdBQVcsZ0JBQWdCO1lBQ3hELE1BQU1NLGNBQWNOLFNBQVMsV0FBVyxzQkFBc0I7WUFFOUQsTUFBTUoseURBQUlBLENBQUNXLGlCQUFpQixDQUFDTixRQUFRO2dCQUNqQyxDQUFDSSxZQUFZLEVBQUVIO2dCQUNmLENBQUNJLFlBQVksRUFBRUUsS0FBS0MsR0FBRyxLQUFLO1lBQ2hDO1FBQ0osT0FBTztZQUNILE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtRQUVBLE1BQU1DLFlBQVloQix1REFBMEIsQ0FBQztZQUN6Q2tCLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO2dCQUNGQyxNQUFNO2dCQUNOQyxNQUFNO1lBQ1Y7UUFDSjtRQUVBLE1BQU1DLGNBQWM7WUFDaEJDLE1BQU07WUFDTkMsSUFBSXJCO1lBQ0pzQixTQUFTckIsU0FBUyxXQUFXLDhCQUE4QjtZQUMzRHNCLE1BQU0sQ0FBQzs7NkJBRVUsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFekIsU0FBUyxXQUFXLGdCQUFnQixRQUFRLE9BQU8sRUFBRUUsVUFBVTs7O3VCQUc3RixFQUFFRixTQUFTLFdBQVcsdUJBQXVCLHFCQUFxQjs7WUFFN0UsQ0FBQztRQUNMO1FBRUEsTUFBTTBCLGVBQWUsTUFBTWYsVUFBVWdCLFFBQVEsQ0FBQ1Q7UUFDOUMsT0FBT1E7SUFFWCxFQUFFLE9BQU9FLE9BQVc7UUFDaEIsTUFBTSxJQUFJbEIsTUFBTSxDQUFDLHNCQUFzQixFQUFFa0IsTUFBTUMsT0FBTyxDQUFDLENBQUM7SUFDNUQ7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2F0a2luZzIvLi9zcmMvaGVscGVycy9tYWlsZXIudHM/NmM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJNb2RlbFwiO1xuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xuXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKHsgZW1haWwsIHR5cGUsIHVzZXJJZCB9OiBhbnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgaGFzaFRva2VuID0gXCJcIjtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJWRVJJRllcIiB8fCB0eXBlID09PSBcIlJFU0VUXCIpIHtcbiAgICAgICAgICAgIGhhc2hUb2tlbiA9IGF3YWl0IGJjcnlwdGpzLmhhc2godXNlcklkLnRvU3RyaW5nKCksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUZpZWxkID0gdHlwZSA9PT0gXCJWRVJJRllcIiA/IFwidmVyaWZ5VG9rZW5cIiA6IFwiZm9yZ290UGFzc3dvcmRUb2tlblwiO1xuICAgICAgICAgICAgY29uc3QgZXhwaXJ5RmllbGQgPSB0eXBlID09PSBcIlZFUklGWVwiID8gXCJ2ZXJpZnlUb2tlbkV4cGlyeVwiIDogXCJmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlcklkLCB7XG4gICAgICAgICAgICAgICAgW3VwZGF0ZUZpZWxkXTogaGFzaFRva2VuLFxuICAgICAgICAgICAgICAgIFtleHBpcnlGaWVsZF06IERhdGUubm93KCkgKyAzNjAwMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW1haWwgdHlwZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgICAgIGhvc3Q6IFwic2FuZGJveC5zbXRwLm1haWx0cmFwLmlvXCIsXG4gICAgICAgICAgICBwb3J0OiAyNTI1LFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIHVzZXI6IFwiNmJhNjQ2YjExOWRmNzlcIixcbiAgICAgICAgICAgICAgICBwYXNzOiBcImI5Yjg3YzRkNWE0YTJiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmcm9tOiBcIm1paGlya2FudHRoYWt1cjg2N0BnbWFpbC5jb21cIixcbiAgICAgICAgICAgIHRvOiBlbWFpbCxcbiAgICAgICAgICAgIHN1YmplY3Q6IHR5cGUgPT09IFwiVkVSSUZZXCIgPyBcIlZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3NcIiA6IFwiUmVzZXQgeW91ciBwYXNzd29yZFwiLFxuICAgICAgICAgICAgaHRtbDogYFxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9jZXNzLmVudi5ET01BSU59LyR7dHlwZSA9PT0gJ1ZFUklGWScgPyAndmVyaWZ5ZW1haWwnIDogJ3Jlc2V0J30/dG9rZW49JHtoYXNoVG9rZW59XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJlXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gXG4gICAgICAgICAgICAgICAgICAgIHRvICR7dHlwZSA9PT0gXCJWRVJJRllcIiA/IFwidmVyaWZ5IHRoZSBhY2NvdW50XCIgOiBcInJlc2V0IHRoZSBwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtYWlsUmVzcG9uc2UgPSBhd2FpdCB0cmFuc3BvcnQuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gbWFpbFJlc3BvbnNlO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRW1haWwgc2VuZGluZyBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJVc2VyIiwiYmNyeXB0anMiLCJzZW5kRW1haWwiLCJlbWFpbCIsInR5cGUiLCJ1c2VySWQiLCJoYXNoVG9rZW4iLCJoYXNoIiwidG9TdHJpbmciLCJ1cGRhdGVGaWVsZCIsImV4cGlyeUZpZWxkIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJEYXRlIiwibm93IiwiRXJyb3IiLCJ0cmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJwcm9jZXNzIiwiZW52IiwiRE9NQUlOIiwibWFpbFJlc3BvbnNlIiwic2VuZE1haWwiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your full name\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your email address\"\n        ],\n        unique: true\n    },\n    number: {\n        type: Number,\n        required: [\n            true,\n            \"Please provide your Contact number\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false // 'false' should be lowercase\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\n// Ensure the model name is singular (User instead of users)\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ25DRyxNQUFNO1FBQ0ZDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQWdDO0lBQ3JEO0lBQ0FDLE9BQU87UUFDSEgsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBb0M7UUFDckRFLFFBQVE7SUFDWjtJQUNBQyxRQUFRO1FBQ0pMLE1BQU1NO1FBQ05KLFVBQVU7WUFBQztZQUFNO1NBQXFDO0lBQzFEO0lBQ0FLLFVBQVU7UUFDTlAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBK0I7SUFDcEQ7SUFDQU0sWUFBWTtRQUNSUixNQUFNUztRQUNOQyxTQUFTLE1BQU0sOEJBQThCO0lBQ2pEO0lBQ0FDLHFCQUFxQlY7SUFDckJXLDJCQUEyQkM7SUFDM0JDLGFBQWFiO0lBQ2JjLG1CQUFtQkY7QUFDdkI7QUFFQSw0REFBNEQ7QUFDNUQsTUFBTUcsT0FBT3BCLHdEQUFlLENBQUNvQixJQUFJLElBQUlwQixxREFBYyxDQUFDLFFBQVFDO0FBRTVELGlFQUFlbUIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGtpbmcyLy4vc3JjL21vZGVscy91c2VyTW9kZWwuanM/YzRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSB5b3VyIGZ1bGwgbmFtZVwiXSxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIHlvdXIgZW1haWwgYWRkcmVzc1wiXSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgeW91ciBDb250YWN0IG51bWJlclwiXSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIHlvdXIgcGFzc3dvcmRcIl0sXG4gICAgfSxcbiAgICBpc1ZlcmlmaWVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlIC8vICdmYWxzZScgc2hvdWxkIGJlIGxvd2VyY2FzZVxuICAgIH0sXG4gICAgZm9yZ290UGFzc3dvcmRUb2tlbjogU3RyaW5nLFxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnk6IERhdGUsXG4gICAgdmVyaWZ5VG9rZW46IFN0cmluZyxcbiAgICB2ZXJpZnlUb2tlbkV4cGlyeTogRGF0ZSxcbn0pO1xuXG4vLyBFbnN1cmUgdGhlIG1vZGVsIG5hbWUgaXMgc2luZ3VsYXIgKFVzZXIgaW5zdGVhZCBvZiB1c2VycylcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwibnVtYmVyIiwiTnVtYmVyIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeSIsIkRhdGUiLCJ2ZXJpZnlUb2tlbiIsInZlcmlmeVRva2VuRXhwaXJ5IiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fforgot%2Froute&page=%2Fapi%2Fusers%2Fforgot%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot%2Froute.ts&appDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2Fnext-auth-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();