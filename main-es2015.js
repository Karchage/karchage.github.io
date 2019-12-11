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
		"default~app-components-incidents-incidents-module~app-components-process-process-module",
		"app-components-incidents-incidents-module"
	],
	"../app/components/process/process.module": [
		"./src/app/components/process/process.module.ts",
		"default~app-components-incidents-incidents-module~app-components-process-process-module",
		"app-components-process-process-module"
	],
	"../app/components/users/users.module": [
		"./src/app/components/users/users.module.ts",
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
/* harmony default export */ __webpack_exports__["default"] = ("  <nav class =\"navbar\">\n    <div class =\"logo\"><img src=\"../assets/images/logo.png\"></div>\n    <a class=\"burger\" (click)=\"burger = !burger\" >&#9776;</a>\n    <ul class = \"menu\">\n      <li><a routerLink=\"/incidents\" routerLinkActive=\"active\">Incidents</a></li>\n      <li><a routerLink=\"/process\" routerLinkActive=\"active\">Process</a></li>\n      <li><a routerLink=\"/users\" routerLinkActive=\"active\">Users</a></li>\n      <li><a routerLink=\"/register\" routerLinkActive=\"active\">SignUp</a></li>\n    </ul>\n    <ul class = \"burger-menu\" *ngIf=\"burger != false\" (click)=\"burger = false\">\n      <li><a routerLink=\"/incidents\" routerLinkActive=\"active\">Incidents</a></li>\n      <li><a routerLink=\"/process\" routerLinkActive=\"active\">Process</a></li>\n      <li><a routerLink=\"/users\" routerLinkActive=\"active\">Users</a></li>\n      <li><a routerLink=\"/register\" routerLinkActive=\"active\">SignUp</a></li>\n    </ul>\n  </nav>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"userRegForm\" (submit)=\"RegUsers()\">\r\n  <div class=\"wrapper\">\r\n    <label for=\"email\">Email</label>\r\n    <input id=\"email\" type=\"text\"  formControlName=\"email\" [ngClass]=\"{invalid: userRegForm.get('email').touched && userRegForm.get('email').invalid}\">\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <label for=\"password\">Password</label>\r\n    <input id=\"password\" type=\"text\" formControlName=\"password\" [ngClass]=\"{invalid: userRegForm.get('password').touched && userRegForm.get('password').invalid}\">\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <label for=\"name\">Name</label>\r\n    <input id=\"name\" type=\"text\"  formControlName=\"name\" [ngClass]=\"{invalid: userRegForm.get('name').touched && userRegForm.get('name').invalid}\">\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <label for=\"DOB\">Date of birthday</label>\r\n    <input id=\"DOB\" type=\"date\"  formControlName=\"DOB\" [ngClass]=\"{invalid: userRegForm.get('DOB').touched && userRegForm.get('DOB').invalid}\">\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <label for=\"position\">Position</label>\r\n    <input id=\"position\" type=\"text\"  formControlName=\"position\" [ngClass]=\"{invalid: userRegForm.get('position').touched && userRegForm.get('position').invalid}\">\r\n  </div>\r\n  <div class=\"btn-wrap\">\r\n    <button class =\"btn\" type = \"submit\" [disabled]=\"userRegForm.invalid\">SignUp</button>\r\n  </div>\r\n\r\n</form>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Roboto');\n@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap');\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, serif;\n  font-size: 1rem;\n  color: black;\n}\nbody a {\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n}\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.4rem 1.3rem;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n  background: #689F38;\n  color: #DCEDC8;\n  border-radius: 25px;\n}\n.btn:disabled {\n  cursor: not-allowed;\n  background: #DCEDC8;\n  border: 1px #689F38 solid;\n  color: #689F38;\n}\ninput[type='text'],\ninput[type='email'],\ninput[type='password'],\ninput[type='date'],\nselect {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.4vh;\n  font-size: 0.9rem;\n  border: 1px solid #ccc;\n}\ninput[type='text'].invalid,\ninput[type='email'].invalid,\ninput[type='password'].invalid,\ninput[type='date'].invalid,\nselect.invalid {\n  border: 1px solid #dc7c53;\n}\n.navbar {\n  display: flex;\n  position: relative;\n  background: #8BC34A;\n  justify-content: space-between;\n  font-family: Roboto, serif;\n  font-size: 1.3rem;\n  align-items: center;\n  min-height: 3rem;\n  max-height: 25%;\n  width: 100%;\n}\n.navbar .logo {\n  margin: auto 2vh;\n  width: 2rem;\n  height: 2rem;\n}\n.navbar .logo img {\n  height: 100%;\n}\n.navbar .burger {\n  visibility: hidden;\n}\n.navbar .menu {\n  display: flex;\n  position: relative;\n  align-items: center;\n  margin: auto 2vh;\n  list-style: none;\n}\n.navbar .menu li {\n  position: relative;\n  margin: 0 1vh;\n  display: block;\n}\n.navbar .menu li a:hover {\n  color: #DCEDC8;\n}\n@media screen and (max-width: 620px) {\n  .navbar .logo {\n    margin: auto 2vh;\n  }\n  .navbar .logo img {\n    height: 100%;\n  }\n  .navbar .burger {\n    visibility: visible;\n    color: #DCEDC8;\n    margin-right: 5vw;\n  }\n  .navbar .menu {\n    display: none;\n  }\n  .navbar .burger-menu {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    z-index: 1000;\n    background: #CDDC39;\n    top: 100%;\n    width: 90%;\n    flex-direction: column;\n    position: relative;\n    margin: 0;\n    padding: 1vh;\n    border-left: #689F38 1px solid;\n  }\n  .navbar .burger-menu li {\n    position: relative;\n    margin: 0 1vh;\n    display: block;\n  }\n  .navbar .burger-menu li a:hover {\n    color: #DCEDC8;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvc3R5bGVzLmxlc3MiLCJzcmMvYXBwL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQ0NrQjtBREFsQiw2RUNDaUI7QUFHakI7RUFDRSxzQkFBQTtBREZGO0FDSUE7RUFDSSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREZKO0FDRkE7RUFNUSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FERFI7QUNJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBREZGO0FDR0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FEREo7QUNJQTs7Ozs7RUFLRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QURGRjtBQ0dFOzs7OztFQUNFLHlCQUFBO0FER0o7QUVsREE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRm9ESjtBRTlEQTtFQVlNLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZxRE47QUVuRUE7RUFnQlEsWUFBQTtBRnNEUjtBRXRFQTtFQW9CSSxrQkFBQTtBRnFESjtBRXpFQTtFQXVCUSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZxRFI7QUVoRkE7RUE2Qlksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRnNEWjtBRXJGQTtFQWlDZ0IsY0FBQTtBRnVEaEI7QUVsREE7RUFDRTtJQUVJLGdCQUFBO0VGbURKO0VFckRBO0lBS00sWUFBQTtFRm1ETjtFRXhEQTtJQVNJLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VGa0RKO0VFN0RBO0lBY0ksYUFBQTtFRmtESjtFRWhFQTtJQWtCSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7RUZpREo7RUU5RUE7SUErQk0sa0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFRmtETjtFRW5GQTtJQW1DUSxjQUFBO0VGbURSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1ZZW9uK1N1bmcmZGlzcGxheT1zd2FwJyk7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cbmJvZHkgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzY4OUYzODtcbiAgY29sb3I6ICNEQ0VEQzg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZDogI0RDRURDODtcbiAgYm9yZGVyOiAxcHggIzY4OUYzOCBzb2xpZDtcbiAgY29sb3I6ICM2ODlGMzg7XG59XG5pbnB1dFt0eXBlPSd0ZXh0J10sXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbmlucHV0W3R5cGU9J2RhdGUnXSxcbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC40dmg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuaW5wdXRbdHlwZT0ndGV4dCddLmludmFsaWQsXG5pbnB1dFt0eXBlPSdlbWFpbCddLmludmFsaWQsXG5pbnB1dFt0eXBlPSdwYXNzd29yZCddLmludmFsaWQsXG5pbnB1dFt0eXBlPSdkYXRlJ10uaW52YWxpZCxcbnNlbGVjdC5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjN2M1Mztcbn1cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICM4QkMzNEE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBtYXgtaGVpZ2h0OiAyNSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciAubG9nbyB7XG4gIG1hcmdpbjogYXV0byAydmg7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4ubmF2YmFyIC5sb2dvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5uYXZiYXIgLmJ1cmdlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5uYXZiYXIgLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byAydmg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmF2YmFyIC5tZW51IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMXZoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXZiYXIgLm1lbnUgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjRENFREM4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLm5hdmJhciAubG9nbyB7XG4gICAgbWFyZ2luOiBhdXRvIDJ2aDtcbiAgfVxuICAubmF2YmFyIC5sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5uYXZiYXIgLmJ1cmdlciB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBjb2xvcjogI0RDRURDODtcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgfVxuICAubmF2YmFyIC5tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXZiYXIgLmJ1cmdlci1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICNDRERDMzk7XG4gICAgdG9wOiAxMDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItbGVmdDogIzY4OUYzOCAxcHggc29saWQ7XG4gIH1cbiAgLm5hdmJhciAuYnVyZ2VyLW1lbnUgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5uYXZiYXIgLmJ1cmdlci1tZW51IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjRENFREM4O1xuICB9XG59XG4iLCJcbkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyk7XG5AaW1wb3J0IChjc3MpdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9WWVvbitTdW5nJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCBcImNvbG9yXCI7XG5cbip7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGF7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuLmJ0bntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogQGNvbG9yLWRhcms7XG4gIGNvbG9yOiBAY29sb3ItbGlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICY6ZGlzYWJsZWR7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBiYWNrZ3JvdW5kOiBAY29sb3ItbGlnaHQ7XG4gICAgYm9yZGVyOiAxcHggQGNvbG9yLWRhcmsgc29saWQ7XG4gICAgY29sb3I6IEBjb2xvci1kYXJrO1xuICB9XG59XG5pbnB1dFt0eXBlPSd0ZXh0J10sXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbmlucHV0W3R5cGU9J2RhdGUnXSxcbnNlbGVjdHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICYuaW52YWxpZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAYWNjZW50Q29sb3I7XG4gIH1cbn1cblxuXG5cblxuXG4iLCJAaW1wb3J0IChsZXNzKSB1cmwoJy4uL3N0eWxlcy5sZXNzJyk7XG4ubmF2YmFye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogQGNvbG9yLWJhbGFuY2U7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM3JlbTtcbiAgICBtYXgtaGVpZ2h0OiAyNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmxvZ297XG4gICAgICBtYXJnaW46YXV0byAydmg7XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgLmJ1cmdlcntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLm1lbnV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDJ2aDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXZoO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOkBjb2xvci1saWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5uYXZiYXJ7XG4gICAgLmxvZ297XG4gICAgICBtYXJnaW46YXV0byAydmg7XG5cbiAgICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuYnVyZ2Vye1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIGNvbG9yOiBAY29sb3ItbGlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgICB9XG4gICAgLm1lbnV7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5idXJnZXItbWVudXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICBiYWNrZ3JvdW5kOkBjb2xvci1zdGFuZGFydDtcbiAgICAgIHRvcDoxMDAlO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxdmg7XG4gICAgICBib3JkZXItbGVmdDogQGNvbG9yLWRhcmsgMXB4IHNvbGlkO1xuICAgICAgbGl7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwIDF2aDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGE6aG92ZXJ7XG4gICAgICAgICAgY29sb3I6QGNvbG9yLWxpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

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
        this.burger = false;
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
/* harmony import */ var _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/effects/user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");













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
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__["UserEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('users', _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__["userReducer"]),
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
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  font-size: 1rem;\n  margin: 25px auto;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  position: relative;\n  border: 1px #8BC34A solid;\n  border-radius: 25px;\n  box-sizing: border-box;\n  max-width: 25rem;\n}\n.wrapper {\n  margin-bottom: 0.5rem;\n  border-bottom: 1px #8BC34A solid;\n  box-sizing: border-box;\n}\n.wrapper input,\n.wrapper div,\n.wrapper select {\n  padding: 0.4rem;\n}\n.wrapper input {\n  margin-bottom: 0.4rem;\n}\n.btn {\n  width: 100%;\n  border-radius: 0 0 10px 10px;\n}\n@media screen and (max-width: 620px) {\n  form {\n    margin: 1vh auto;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    position: relative;\n    border: 1px #8BC34A solid;\n    border-radius: 25px;\n    box-sizing: border-box;\n    max-width: 90vw;\n  }\n  .wrapper {\n    margin-bottom: 0.5rem;\n    border-bottom: 1px #8BC34A solid;\n    box-sizing: border-box;\n  }\n  .wrapper input,\n  .wrapper div,\n  .wrapper select {\n    padding: 0.4rem;\n  }\n  .wrapper input {\n    margin-bottom: 0.4rem;\n  }\n  .btn {\n    width: 100%;\n    border-radius: 0 0 10px 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDQUY7QURIQTs7O0VBTUksZUFBQTtBQ0VKO0FEUkE7RUFTSSxxQkFBQTtBQ0VKO0FERUE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUNBRjtBREVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNBRjtFREVBO0lBQ0UscUJBQUE7SUFDQSxnQ0FBQTtJQUNBLHNCQUFBO0VDQUY7RURIQTs7O0lBTUksZUFBQTtFQ0VKO0VEUkE7SUFTSSxxQkFBQTtFQ0VKO0VEQ0E7SUFDRSxXQUFBO0lBQ0EsNEJBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9jb2xvclwiO1xuZm9ybSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggQGNvbG9yLWJhbGFuY2Ugc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC13aWR0aDogMjVyZW07XG59XG4ud3JhcHBlcntcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggQGNvbG9yLWJhbGFuY2Ugc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGlucHV0LCBkaXYsXG4gIHNlbGVjdHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gIH1cbiAgaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICB9XG5cbn1cbi5idG57XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luOiAxdmggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggQGNvbG9yLWJhbGFuY2Ugc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcHBlcntcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IEBjb2xvci1iYWxhbmNlIHNvbGlkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaW5wdXQsIGRpdixcbiAgICBzZWxlY3R7XG4gICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICAgIH1cbiAgfVxuICAuYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIH1cbn1cbiIsImZvcm0ge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4ICM4QkMzNEEgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC13aWR0aDogMjVyZW07XG59XG4ud3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICM4QkMzNEEgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ud3JhcHBlciBpbnB1dCxcbi53cmFwcGVyIGRpdixcbi53cmFwcGVyIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cbi53cmFwcGVyIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luOiAxdmggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggIzhCQzM0QSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICB9XG4gIC53cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICM4QkMzNEEgc29saWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAud3JhcHBlciBpbnB1dCxcbiAgLndyYXBwZXIgZGl2LFxuICAud3JhcHBlciBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgfVxuICAud3JhcHBlciBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICB9XG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIH1cbn1cbiJdfQ== */");

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
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _customValidators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].checkNumberInName]],
        });
    }
    RegUsers() {
        const regUser = {
            email: this.userRegForm.get('email').value,
            password: this.userRegForm.get('password').value
        };
        const newUser = {
            id: this.userRegForm.get('name').value,
            name: this.userRegForm.get('name').value,
            DOB: this.userRegForm.get('DOB').value,
            position: this.userRegForm.get('position').value,
        };
        this.auth.registerUser(regUser).subscribe(response => {
            newUser.id = response.localId;
            this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["CreateUser"](newUser));
            this.userRegForm.reset();
        });
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
        if (new Date() > new Date(control.value)) {
            return {
                dueDateValid: true
            };
        }
        return null;
    }
    static checkNumberInName(control) {
        if (control.value) {
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
    registerUser(regUser) {
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

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object
                .keys(response)
                .map(key => (Object.assign({}, response[key], { DOB: new Date(response[key].DOB) })));
        }));
    }
    getUserById(payload) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users/${payload}.json`);
    }
    createUser(payload) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users/${payload.id}.json`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object.assign({}, payload, { id: response.name, DOB: new Date(payload.DOB) });
        }));
    }
    updateUser(user) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users/${user.id}.json`, user);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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

/***/ "./src/app/store/effects/user.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let UserEffects = class UserEffects {
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.loadUsers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].LOAD_USERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((action) => this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((users) => new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUsersSuccess"](users)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUsersFail"](err))))));
        this.loadUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].LOAD_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((action) => this.userService.getUserById(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUserSuccess"](user)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUserFail"](err))))));
        this.createUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].CREATE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((user) => this.userService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((newUser) => new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUserSuccess"](newUser)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUserFail"](err))))));
        this.updateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].UPDATE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((user) => this.userService.updateUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((updateUser) => new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserSuccess"]({
            id: updateUser.id,
            changes: updateUser
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserFail"](err))))));
    }
};
UserEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], UserEffects.prototype, "loadUsers$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], UserEffects.prototype, "loadUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], UserEffects.prototype, "createUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], UserEffects.prototype, "updateUser$", void 0);
UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserEffects);



/***/ }),

/***/ "./src/app/store/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userAdapter, defaultUser, initialState, userReducer, getUsers, getUsersLoading, getUsersLoaded, getUsersError, getCurrentUserId, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAdapter", function() { return userAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUser", function() { return defaultUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoading", function() { return getUsersLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function() { return getUsersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersError", function() { return getUsersError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserId", function() { return getCurrentUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");




const userAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_3__["createEntityAdapter"])();
const defaultUser = {
    ids: [],
    entities: {},
    selectedUserId: null,
    loading: false,
    loaded: false,
    error: ''
};
const initialState = userAdapter.getInitialState(defaultUser);
function userReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].LOAD_USERS_SUCCESS: {
            return userAdapter.addAll(action.payload, Object.assign({}, state, { loading: false, loaded: true }));
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].LOAD_USERS_FAIL: {
            return Object.assign({}, state, { entities: {}, loading: false, loaded: false, error: action.payload });
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].LOAD_USER_SUCCESS: {
            return userAdapter.addOne(action.payload, Object.assign({}, state, { selectedUserId: action.payload.id }));
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].LOAD_USER_FAIL: {
            return Object.assign({}, state, { error: action.payload });
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].CREATE_USER_SUCCESS: {
            return userAdapter.addOne(action.payload, state);
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].CREATE_USER_FAIL: {
            return Object.assign({}, state, { error: action.payload });
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].UPDATE_USER_SUCCESS: {
            return userAdapter.updateOne(action.payload, state);
        }
        case _actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].UPDATE_USER_FAIL: {
            return Object.assign({}, state, { error: action.payload });
        }
        default: {
            return state;
        }
    }
}
const getUserFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('users');
const getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, userAdapter.getSelectors().selectAll);
const getUsersLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, (state) => state.loading);
const getUsersLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, (state) => state.loaded);
const getUsersError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, (state) => state.error);
const getCurrentUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, (state) => state.selectedUserId);
const getCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, getCurrentUserId, state => state.entities[state.selectedUserId]);


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