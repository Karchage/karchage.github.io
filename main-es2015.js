(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/components/incidents/incidents.module": [
		"./src/app/components/incidents/incidents.module.ts",
		"default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d",
		"default~app-components-incidents-incidents-module~app-components-process-process-module",
		"app-components-incidents-incidents-module"
	],
	"../app/components/process/process.module": [
		"./src/app/components/process/process.module.ts",
		"default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d",
		"default~app-components-incidents-incidents-module~app-components-process-process-module",
		"app-components-process-process-module"
	],
	"../app/components/users/users.module": [
		"./src/app/components/users/users.module.ts",
		"default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d",
		"app-components-users-users-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <nav class =\"navbar\">\n    <div class =\"logo\"><img src=\"../assets/images/logo.png\"></div>\n    <label for=\"toggle\">&#9776;</label>\n    <input type=\"checkbox\" id=\"toggle\"/>\n    <ul>\n      <li><a routerLink=\"/incidents\" routerLinkActive=\"active\">Incidents</a></li>\n      <li><a routerLink=\"/process\" routerLinkActive=\"active\">Process</a></li>\n      <li><a routerLink=\"/users\" routerLinkActive=\"active\">Users</a></li>\n      <li><a routerLink=\"/register\" routerLinkActive=\"active\">SignUp</a></li>\n    </ul>\n  </nav>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"userRegForm\" (submit)=\"RegUsers()\">\n  <div class=\"wrapper\">\n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"text\"  formControlName=\"email\">\n  </div>\n  <div class=\"wrapper\">\n    <label for=\"password\">Password</label>\n    <input id=\"password\" type=\"text\" formControlName=\"password\">\n  </div>\n  <div class=\"wrapper\">\n    <label for=\"name\">Name</label>\n    <input id=\"name\" type=\"text\"  formControlName=\"name\">\n  </div>\n  <div class=\"wrapper\">\n    <label for=\"DOB\">Date of birthday</label>\n    <input id=\"DOB\" type=\"date\"  formControlName=\"DOB\">\n  </div>\n  <div class=\"wrapper\">\n    <label for=\"position\">Position</label>\n    <input id=\"position\" type=\"text\"  formControlName=\"position\">\n  </div>\n  <div class=\"btn-wrap\">\n    <button class =\"btn\" type = \"submit\" [disabled]=\"userRegForm.invalid\">SignUp</button>\n  </div>\n\n</form>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");




const routes = [
    { path: '', redirectTo: '/incidents', pathMatch: 'full' },
    { path: 'incidents', loadChildren: '../app/components/incidents/incidents.module#IncidentsModule' },
    { path: 'process', loadChildren: '../app/components/process/process.module#ProcessModule' },
    { path: 'users', loadChildren: '../app/components/users/users.module#UsersModule' },
    { path: 'register', component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPageComponent"] },
    { path: '**', redirectTo: '/incidents' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Roboto');\n@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap');\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, serif;\n  font-size: 2vh;\n  color: black;\n}\nbody a {\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n}\n.btn {\n  display: inline-block;\n  padding: 0.4rem 1.3rem;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n  background: #5e0943;\n  color: #ebe6d9;\n  border-radius: 25px;\n}\n.btn:disabled {\n  cursor: not-allowed;\n  background: #ebe6d9;\n  border: 1px #5e0943 solid;\n  color: #5e0943;\n}\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.incident-card {\n  width: 75vw;\n  border: #5e0943 1px solid;\n  border-radius: 10px;\n  display: flex;\n  margin: 2vh 1vw;\n}\n.incident-card .left-content-card {\n  background: #b14359;\n  border-radius: 10px 0 0 10px;\n  border-right: none;\n  color: #ebe6d9;\n  width: 10%;\n}\n.incident-card .left-content-card .svg-card {\n  height: 50%;\n}\n.incident-card .left-content-card .svg-card svg {\n  stroke: black;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1%;\n}\n.incident-card .left-content-card .status-card {\n  height: 50%;\n  text-align: center;\n}\n.incident-card .right-content-card {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n}\n.incident-card .right-content-card .title-card {\n  height: 50%;\n  font-size: 1.3rem;\n  font-weight: bold;\n  padding: 1vh 1vw;\n  overflow: hidden;\n  margin-right: 1vw;\n}\n.incident-card .right-content-card .info-card {\n  height: 50%;\n  display: flex;\n  justify-content: space-between;\n  padding: 1vh 1vw;\n  margin-bottom: 1vh;\n}\n.incident-card .right-content-card .info-card .content-wrap {\n  width: 25%;\n  font-size: 0.7rem;\n  border-left: #5e0943 solid 1px;\n  padding: 0 1vw ;\n}\n.incident-card .right-content-card .info-card .content-wrap .place {\n  font-size: 0.8rem;\n}\n.incident-card:hover {\n  transform: translate(0, 0.1vh);\n  box-shadow: 0.4em 0.4em 0.5vh rgba(122, 122, 122, 0.5);\n}\n@media screen and (max-width: 620px) {\n  .incident-card .left-content-card .svg-card {\n    height: 30%;\n  }\n  .incident-card .left-content-card .status-card {\n    height: 70%;\n    padding: 50% 0;\n  }\n  .incident-card .left-content-card .status-card div {\n    position: relative;\n    top: 50%;\n    transform: rotate(-90deg) translate(50%, 0);\n    text-align: center;\n  }\n  .incident-card .right-content-card .title-card {\n    height: 30%;\n  }\n  .incident-card .right-content-card .info-card {\n    height: 70%;\n    flex-wrap: wrap;\n  }\n  .incident-card .right-content-card .info-card .content-wrap {\n    min-width: 50%;\n  }\n}\ninput[type='text'],\ninput[type='email'],\ninput[type='password'],\ninput[type='date'],\nselect {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.4vh;\n  font-size: 0.9rem;\n  border: 1px solid #ccc;\n}\n.wrapper {\n  max-width: 50rem;\n  display: flex;\n  margin: 0.5rem 0;\n  align-items: center;\n}\n.wrapper label {\n  width: 25%;\n}\n.wrapper input,\n.wrapper div,\n.wrapper select {\n  width: 75%;\n  font-size: 1.2rem;\n}\n.wrapper .secondWrapper {\n  display: flex;\n}\n.wrapper .secondWrapper div:first-child,\n.wrapper .secondWrapper input:first-child {\n  width: 30%;\n  padding: 0.4rem 0;\n}\n.wrapper .secondWrapper select {\n  width: 70%;\n}\n.backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  padding: 1rem;\n  background-color: #ebe6d9;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n}\n.btn-wrap {\n  border: none;\n}\n.btn-wrap .btn {\n  margin-left: 50%;\n  transform: translate(-50%, 0);\n}\n.wrap-btn {\n  margin-top: 1rem;\n}\n.wrap-btn button {\n  width: 50%;\n}\n.navbar {\n  display: flex;\n  position: relative;\n  background: #b14359;\n  justify-content: space-between;\n  font-family: Roboto, serif;\n  font-size: 1.3rem;\n  align-items: center;\n  max-height: 25%;\n  width: 100%;\n}\n.navbar .logo {\n  margin: auto 2vh;\n  width: 5vh;\n  height: 5vh;\n}\n.navbar .logo img {\n  height: 100%;\n}\n.navbar label {\n  display: none;\n}\n.navbar #toggle {\n  display: none;\n}\n.navbar ul {\n  display: flex;\n  position: relative;\n  align-items: center;\n  margin: auto 2vh;\n  list-style: none;\n}\n.navbar ul li {\n  position: relative;\n  margin: 0 1vh;\n  display: block;\n}\n.navbar ul li a:hover {\n  color: #ebe6d9;\n}\n@media screen and (max-width: 620px) {\n  .navbar .logo {\n    margin: auto 2vh;\n  }\n  .navbar .logo img {\n    height: 100%;\n  }\n  .navbar label {\n    display: block;\n    color: #ebe6d9;\n    margin-right: 5vw;\n  }\n  .navbar #toggle:checked + ul {\n    display: flex;\n  }\n  .navbar ul {\n    z-index: 1000;\n    display: none;\n    background: #f0a5c1;\n    top: 100%;\n    width: 90%;\n    flex-direction: column;\n    position: relative;\n    align-items: center;\n    margin: 0;\n    padding: 1vh;\n    border-left: #5e0943 1px solid;\n    list-style: none;\n  }\n  .navbar ul a:hover {\n    color: #ebe6d9;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvc3R5bGVzLmxlc3MiLCJzcmMvYXBwL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQ0NrQjtBREFsQiw2RUNDaUI7QUFHakI7RUFDRSxzQkFBQTtBREZGO0FDSUE7RUFDSSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBREZKO0FDRkE7RUFNUSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FERFI7QUNJQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURGRjtBQ0dFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRERKO0FDSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FERkY7QUNJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURGRjtBQ0hBO0VBT0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QURESjtBQ1ZBO0VBYU0sV0FBQTtBREFOO0FDYkE7RUFlUSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FEQ1I7QUNuQkE7RUFzQk0sV0FBQTtFQUNBLGtCQUFBO0FEQU47QUN2QkE7RUE0QkksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBREZKO0FDNUJBO0VBZ0NNLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FERE47QUNwQ0E7RUF5Q00sV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURGTjtBQzNDQTtFQWdEUSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QURGUjtBQ2pEQTtFQXFEVSxpQkFBQTtBRERWO0FDT0U7RUFDRSw4QkFBQTtFQUNBLHNEQUFBO0FETEo7QUNRQTtFQUNFO0lBS00sV0FBQTtFRFZOO0VDS0E7SUFRTSxXQUFBO0lBQ0EsY0FBQTtFRFZOO0VDQ0E7SUFXUSxrQkFBQTtJQUNBLFFBQUE7SUFDQSwyQ0FBQTtJQUNBLGtCQUFBO0VEVFI7RUNMQTtJQXFCTSxXQUFBO0VEYk47RUNSQTtJQXdCTSxXQUFBO0lBQ0EsZUFBQTtFRGJOO0VDWkE7SUEyQlEsY0FBQTtFRFpSO0FBQ0Y7QUMrRUE7Ozs7O0VBS0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FEN0VGO0FDZ0ZBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRDlFRjtBQzBFQTtFQU1JLFVBQUE7QUQ3RUo7QUN1RUE7OztFQVVJLFVBQUE7RUFDQSxpQkFBQTtBRDVFSjtBQ2lFQTtFQWNJLGFBQUE7QUQ1RUo7QUM4REE7O0VBZ0JNLFVBQUE7RUFDQSxpQkFBQTtBRDFFTjtBQ3lEQTtFQXFCTSxVQUFBO0FEM0VOO0FDK0VBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtBRDdFRjtBQytFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBRDdFRjtBQytFQTtFQUNFLFlBQUE7QUQ3RUY7QUM0RUE7RUFHSSxnQkFBQTtFQUNBLDZCQUFBO0FENUVKO0FDK0VBO0VBQ0UsZ0JBQUE7QUQ3RUY7QUM0RUE7RUFHSSxVQUFBO0FENUVKO0FFM0xBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FGNkxKO0FFdE1BO0VBV00sZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRjhMTjtBRTNNQTtFQWVRLFlBQUE7QUYrTFI7QUU5TUE7RUFtQkksYUFBQTtBRjhMSjtBRWpOQTtFQXNCSSxhQUFBO0FGOExKO0FFcE5BO0VBeUJRLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRjhMUjtBRTNOQTtFQStCWSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FGK0xaO0FFaE9BO0VBbUNnQixjQUFBO0FGZ01oQjtBRTNMQTtFQUNFO0lBRUksZ0JBQUE7RUY0TEo7RUU5TEE7SUFLTSxZQUFBO0VGNExOO0VFak1BO0lBU0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFRjJMSjtFRXRNQTtJQWNJLGFBQUE7RUYyTEo7RUV6TUE7SUFpQkksYUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VGMkxKO0VFdk5BO0lBOEJRLGNBQUE7RUY0TFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVllb24rU3VuZyZkaXNwbGF5PXN3YXAnKTtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMnZoO1xuICBjb2xvcjogYmxhY2s7XG59XG5ib2R5IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40cmVtIDEuM3JlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjNWUwOTQzO1xuICBjb2xvcjogI2ViZTZkOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5idG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiAjZWJlNmQ5O1xuICBib3JkZXI6IDFweCAjNWUwOTQzIHNvbGlkO1xuICBjb2xvcjogIzVlMDk0Mztcbn1cbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5jaWRlbnQtY2FyZCB7XG4gIHdpZHRoOiA3NXZ3O1xuICBib3JkZXI6ICM1ZTA5NDMgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDJ2aCAxdnc7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjYjE0MzU5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGNvbG9yOiAjZWJlNmQ5O1xuICB3aWR0aDogMTAlO1xufVxuLmluY2lkZW50LWNhcmQgLmxlZnQtY29udGVudC1jYXJkIC5zdmctY2FyZCB7XG4gIGhlaWdodDogNTAlO1xufVxuLmluY2lkZW50LWNhcmQgLmxlZnQtY29udGVudC1jYXJkIC5zdmctY2FyZCBzdmcge1xuICBzdHJva2U6IGJsYWNrO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIHN0cm9rZS13aWR0aDogMSU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN0YXR1cy1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAudGl0bGUtY2FyZCB7XG4gIGhlaWdodDogNTAlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMXZ3O1xufVxuLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXZoIDF2dztcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIC5jb250ZW50LXdyYXAge1xuICB3aWR0aDogMjUlO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLWxlZnQ6ICM1ZTA5NDMgc29saWQgMXB4O1xuICBwYWRkaW5nOiAwIDF2dyA7XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC5pbmZvLWNhcmQgLmNvbnRlbnQtd3JhcCAucGxhY2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5pbmNpZGVudC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4xdmgpO1xuICBib3gtc2hhZG93OiAwLjRlbSAwLjRlbSAwLjV2aCByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNSk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN0YXR1cy1jYXJkIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBwYWRkaW5nOiA1MCUgMDtcbiAgfVxuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN0YXR1cy1jYXJkIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKDUwJSwgMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLnRpdGxlLWNhcmQge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCAuY29udGVudC13cmFwIHtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxufVxuaW5wdXRbdHlwZT0ndGV4dCddLFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcbmlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXG5pbnB1dFt0eXBlPSdkYXRlJ10sXG5zZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuNHZoO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53cmFwcGVyIGxhYmVsIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi53cmFwcGVyIGlucHV0LFxuLndyYXBwZXIgZGl2LFxuLndyYXBwZXIgc2VsZWN0IHtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBkaXY6Zmlyc3QtY2hpbGQsXG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBpbnB1dDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xufVxuLndyYXBwZXIgLnNlY29uZFdyYXBwZXIgc2VsZWN0IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ubW9kYWwge1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlNmQ5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yNSUpO1xufVxuLmJ0bi13cmFwIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmJ0bi13cmFwIC5idG4ge1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cbi53cmFwLWJ0biB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ud3JhcC1idG4gYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNiMTQzNTk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAyNSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciAubG9nbyB7XG4gIG1hcmdpbjogYXV0byAydmg7XG4gIHdpZHRoOiA1dmg7XG4gIGhlaWdodDogNXZoO1xufVxuLm5hdmJhciAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmF2YmFyIGxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uYXZiYXIgI3RvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2YmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gMnZoO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm5hdmJhciB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDF2aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2YmFyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ViZTZkOTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5uYXZiYXIgLmxvZ28ge1xuICAgIG1hcmdpbjogYXV0byAydmg7XG4gIH1cbiAgLm5hdmJhciAubG9nbyBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubmF2YmFyIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2ViZTZkOTtcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgfVxuICAubmF2YmFyICN0b2dnbGU6Y2hlY2tlZCArIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5uYXZiYXIgdWwge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjBhNWMxO1xuICAgIHRvcDogMTAwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItbGVmdDogIzVlMDk0MyAxcHggc29saWQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICAubmF2YmFyIHVsIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZWJlNmQ5O1xuICB9XG59XG4iLCJcbkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyk7XG5AaW1wb3J0IChjc3MpdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9WWVvbitTdW5nJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCBcImNvbG9yXCI7XG5cbip7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYXtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG4uYnRue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogQGNvbG9yLWRhcms7XG4gIGNvbG9yOiBAY29sb3ItbGlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICY6ZGlzYWJsZWR7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBiYWNrZ3JvdW5kOiBAY29sb3ItbGlnaHQ7XG4gICAgYm9yZGVyOiAxcHggQGNvbG9yLWRhcmsgc29saWQ7XG4gICAgY29sb3I6IEBjb2xvci1kYXJrO1xuICB9XG59XG4uY2FyZHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5jaWRlbnQtY2FyZHtcbiAgd2lkdGg6IDc1dnc7XG4gIGJvcmRlcjogIzVlMDk0MyAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMnZoIDF2dztcbiAgLmxlZnQtY29udGVudC1jYXJke1xuICAgIGJhY2tncm91bmQ6IEBjb2xvci1iYWxhbmNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbG9yOiBAY29sb3ItbGlnaHQ7XG4gICAgd2lkdGg6IDEwJTtcbiAgICAuc3ZnLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHN2Z3tcbiAgICAgICAgc3Ryb2tlOmJsYWNrO1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMSU7XG4gICAgICB9XG4gICAgfVxuICAgIC5zdGF0dXMtY2FyZHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgfVxuICB9XG4gIC5yaWdodC1jb250ZW50LWNhcmR7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLnRpdGxlLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAxdmggMXZ3O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xuXG4gICAgfVxuICAgIC5pbmZvLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxdmggMXZ3O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuXG4gICAgICAuY29udGVudC13cmFwe1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICM1ZTA5NDMgc29saWQgMXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDF2dyA7XG4gICAgICAgIC5wbGFjZXtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG4gICY6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4xdmgpO1xuICAgIGJveC1zaGFkb3c6IDAuNGVtIDAuNGVtIDAuNXZoIHJnYmEoMTIyLDEyMiwxMjIsMC41KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLmluY2lkZW50LWNhcmR7XG5cbiAgICAubGVmdC1jb250ZW50LWNhcmR7XG5cbiAgICAgIC5zdmctY2FyZHtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICB9XG4gICAgICAuc3RhdHVzLWNhcmR7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBwYWRkaW5nOiA1MCUgMDtcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSg1MCUsMCk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1jb250ZW50LWNhcmR7XG5cbiAgICAgIC50aXRsZS1jYXJke1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIC5pbmZvLWNhcmR7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC5jb250ZW50LXdyYXB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cblxuXG5cbi8vXG4vLy5jb250ZW50LXRhYmxle1xuLy8gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyAgbWFyZ2luOiAyNXB4IDBweDtcbi8vICBtYXJnaW4tbGVmdDogMjVweDtcbi8vICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4vLyAgZm9udC1zaXplOiAwLjllbTtcbi8vICBtaW4td2lkdGg6IDQwMHB4O1xuLy8gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbi8vICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgdGhlYWQgdHJ7XG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAY29sb3ItYmFsYW5jZTtcbi8vICAgIGNvbG9yOiBAY29sb3ItbGlnaHQ7XG4vLyAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gIH1cbi8vICB0aCwgdGR7XG4vLyAgICBwYWRkaW5nOjEycHggMTVweDtcbi8vICB9XG4vLyAgdGJvZHkgdHJ7XG4vLyAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0NzA5YTtcbi8vICB9XG4vLyAgdWx7XG4vLyAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgZGlzcGxheTogZmxleDtcbi8vICAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgIHBhZGRpbmc6IDA7XG4vLyAgICBtYXJnaW46IDA7XG4vLyAgICBsaXtcbi8vICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1YzE7XG4vLyAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgIG1hcmdpbjogNXB4O1xuLy8gICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICB9XG4vLyAgfVxuLy99XG4vLy5idG57XG4vLyAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xuLy8gICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICBib3JkZXI6IG5vbmU7XG4vLyAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcbi8vICAgIG91dGxpbmU6IG5vbmU7XG4vLyAgICBiYWNrZ3JvdW5kOiBAY29sb3ItZGFyaztcbi8vICAgIGNvbG9yOiAjZWJlNmQ5O1xuLy8gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbi8vICAgICY6ZGlzYWJsZWQge1xuLy8gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuLy8gICAgICBiYWNrZ3JvdW5kOiBAY29sb3ItbGlnaHQ7XG4vLyAgICAgIGJvcmRlcjogMXB4IEBjb2xvci1kYXJrIHNvbGlkO1xuLy8gICAgICBjb2xvcjogQGNvbG9yLWRhcms7XG4vLyAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICB9XG4vL31cbmlucHV0W3R5cGU9J3RleHQnXSxcbmlucHV0W3R5cGU9J2VtYWlsJ10sXG5pbnB1dFt0eXBlPSdwYXNzd29yZCddLFxuaW5wdXRbdHlwZT0nZGF0ZSddLFxuc2VsZWN0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuNHZoO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLndyYXBwZXJ7XG4gIG1heC13aWR0aDogNTByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxhYmVse1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgaW5wdXQsIGRpdixcbiAgc2VsZWN0e1xuICAgIHdpZHRoOjc1JTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuc2Vjb25kV3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpdjpmaXJzdC1jaGlsZCxpbnB1dDpmaXJzdC1jaGlsZHtcbiAgICAgIHdpZHRoOjMwJTtcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xuICAgIDtcbiAgICB9XG4gICAgc2VsZWN0e1xuICAgICAgd2lkdGg6NzAlO1xuICAgIH1cbiAgfVxufVxuLmJhY2tkcm9we1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOjA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcbn1cbi5tb2RhbHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTZkOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OjUwJTtcbiAgdG9wOiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTI1JSk7XG59XG4uYnRuLXdyYXB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLmJ0bntcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG4gIH1cbn1cbi53cmFwLWJ0bntcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDo1MCU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgKGxlc3MpIHVybCgnLi4vc3R5bGVzLmxlc3MnKTtcbi5uYXZiYXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiBAY29sb3ItYmFsYW5jZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiAyNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmxvZ297XG4gICAgICBtYXJnaW46YXV0byAydmg7XG4gICAgICB3aWR0aDogNXZoO1xuICAgICAgaGVpZ2h0OiA1dmg7XG4gICAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIGxhYmVse1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI3RvZ2dsZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgdWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDJ2aDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXZoO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOkBjb2xvci1saWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5uYXZiYXJ7XG4gICAgLmxvZ297XG4gICAgICBtYXJnaW46YXV0byAydmg7XG5cbiAgICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IEBjb2xvci1saWdodDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICAgIH1cbiAgICAjdG9nZ2xlOmNoZWNrZWQgKyB1bHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIHVse1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBhNWMxO1xuICAgICAgdG9wOjEwMCU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxdmg7XG4gICAgICBib3JkZXItbGVmdDogIzVlMDk0MyAxcHggc29saWQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBhOmhvdmVye1xuICAgICAgICAgIGNvbG9yOkBjb2xvci1saWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'projects';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__["RegisterPageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        providers: [],
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/register-page/register-page.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  margin: 25px auto;\n  padding: 1rem;\n  position: relative;\n  border: 1px #b14359 solid;\n  border-radius: 25px;\n  box-sizing: border-box;\n  max-width: 50%;\n}\n.wrapper {\n  margin-bottom: 0.5rem;\n  border-bottom: 1px #b14359 solid;\n  box-sizing: border-box;\n}\n.wrapper input,\n.wrapper div,\n.wrapper select {\n  padding: 0.4rem;\n}\n.wrapper input {\n  margin-bottom: 0.4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQ0FGO0FESEE7OztFQU1JLGVBQUE7QUNFSjtBRFJBO0VBU0kscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvY29sb3JcIjtcbmZvcm0ge1xuICBtYXJnaW46IDI1cHggYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBAY29sb3ItYmFsYW5jZSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4ud3JhcHBlcntcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggQGNvbG9yLWJhbGFuY2Ugc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGlucHV0LCBkaXYsXG4gIHNlbGVjdHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gIH1cbiAgaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICB9XG59XG4iLCJmb3JtIHtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggI2IxNDM1OSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4ud3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNiMTQzNTkgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ud3JhcHBlciBpbnB1dCxcbi53cmFwcGVyIGRpdixcbi53cmFwcGVyIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cbi53cmFwcGVyIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _customValidators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../customValidators */ "./src/app/customValidators.ts");








let RegisterPageComponent = class RegisterPageComponent {
    constructor(http, fb, store, auth) {
        this.http = http;
        this.fb = fb;
        this.store = store;
        this.auth = auth;
    }
    ngOnInit() {
        this.userRegForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _customValidators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].checkNumberInName]],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _customValidators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].dueDateValidator],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    RegUsers() {
        const regUser = {
            email: this.userRegForm.get('email').value,
            password: this.userRegForm.get('password').value
        };
        const regUSR = {
            name: this.userRegForm.get('name').value,
            DOB: this.userRegForm.get('DOB').value,
            position: this.userRegForm.get('position').value,
        };
        this.auth.regUser(regUser).subscribe(response => {
            console.log('Reg USR');
            regUSR.id = response.localId;
            this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["CreateUser"](regUSR));
        });
        this.userRegForm.reset();
    }
};
RegisterPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-page.component.less */ "./src/app/components/register-page/register-page.component.less")).default]
    })
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/customValidators.ts":
/*!*************************************!*\
  !*** ./src/app/customValidators.ts ***!
  \*************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");


class CustomValidators {
    static dueDateValidator(control) {
        if (new Date().toLocaleDateString() > new Date(control.value).toLocaleDateString()) {
            return {
                dueDateValid: true
            };
        }
        return null;
    }
    static checkNumberInName(control) {
        for (const item of control.value) {
            if (Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["isNumeric"])(item)) {
                return {
                    numberInName: true
                };
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    regUser(regUser) {
        regUser.returnSecureToken = true;
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey}`, regUser);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/store/actions/user.action.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/user.action.ts ***!
  \**********************************************/
/*! exports provided: UserActionType, LoadUsers, LoadUsersSuccess, LoadUsersFail, LoadUser, LoadUserSuccess, LoadUserFail, CreateUser, CreateUserSuccess, CreateUserFail, UpdateUser, UpdateUserSuccess, UpdateUserFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionType", function() { return UserActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsers", function() { return LoadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsersSuccess", function() { return LoadUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsersFail", function() { return LoadUsersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return LoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return LoadUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserFail", function() { return LoadUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function() { return CreateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserFail", function() { return CreateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return UpdateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return UpdateUserFail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UserActionType;
(function (UserActionType) {
    UserActionType["LOAD_USERS"] = "[USER] Load Users";
    UserActionType["LOAD_USERS_SUCCESS"] = "[USER] Load Users Success";
    UserActionType["LOAD_USERS_FAIL"] = "[USER] Load Users Fail";
    UserActionType["LOAD_USER"] = "[USER] Load User";
    UserActionType["LOAD_USER_SUCCESS"] = "[USER] Load User Success";
    UserActionType["LOAD_USER_FAIL"] = "[USER] Load User Fail";
    UserActionType["CREATE_USER"] = "[USER] Create User";
    UserActionType["CREATE_USER_SUCCESS"] = "[USER] Create User Success";
    UserActionType["CREATE_USER_FAIL"] = "[USER] Create User Fail";
    UserActionType["UPDATE_USER"] = "[USER] Update User";
    UserActionType["UPDATE_USER_SUCCESS"] = "[USER] Update User Success";
    UserActionType["UPDATE_USER_FAIL"] = "[USER] Update User Fail";
})(UserActionType || (UserActionType = {}));
class LoadUsers {
    constructor() {
        this.type = UserActionType.LOAD_USERS;
    }
}
class LoadUsersSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.LOAD_USERS_SUCCESS;
    }
}
class LoadUsersFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.LOAD_USERS_FAIL;
    }
}
class LoadUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.LOAD_USER;
    }
}
class LoadUserSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.LOAD_USER_SUCCESS;
    }
}
class LoadUserFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.LOAD_USER_FAIL;
    }
}
class CreateUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.CREATE_USER;
    }
}
class CreateUserSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.CREATE_USER_SUCCESS;
    }
}
class CreateUserFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.CREATE_USER_FAIL;
    }
}
class UpdateUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.UPDATE_USER;
    }
}
class UpdateUserSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.UPDATE_USER_SUCCESS;
    }
}
class UpdateUserFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.UPDATE_USER_FAIL;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    apiKey: "AIzaSyBhvXlF8DoX7JdaXsBHUHw00y1zsBS0eac",
    fbDbUrl: "https://angularincident.firebaseio.com",
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gleb\Desktop\project\angularIcident\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map