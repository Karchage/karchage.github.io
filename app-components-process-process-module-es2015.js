(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-process-process-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"addForm\" (submit)=\"add()\">\n    <div class=\"wrapper\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\" type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"color\">Color</label>\n      <input id = \"color\" type=\"color\" formControlName=\"color\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"transition\">Transition</label>\n      <select id=\"transition\" multiple=\"multiple\" formControlName=\"transition\">\n        <option *ngFor=\"let rul of processes$ | async\">{{rul.name}}</option>\n      </select>\n    </div>\n    <div class=\"wrapper wrap-btn\">\n      <button class=\"btn\" type=\"submit\" [disabled]=\"addForm.invalid\"><img src=\"../assets/images/plus-black-symbol.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n      <button class=\"btn\" (click)=\"closeEvent.emit()\"><img src=\"../assets/images/cancel-mark.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-current/process-current.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-current/process-current.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-process-list></app-process-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-edit/process-edit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-edit/process-edit.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"edit\" (submit)=\"updateProcess()\">\n    <div class=\"wrapper\">\n      <label for=\"Name\">Name</label>\n      <input id=\"Name\" type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"Color\">Color</label>\n      <input id = \"Color\" type=\"color\" formControlName=\"color\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"Transition\">Transition</label>\n      <textarea name=\"text\" disabled formControlName=\"transition\"></textarea>\n      <select id=\"Transition\" multiple=\"multiple\" formControlName=\"newTransition\">\n        <option *ngFor=\"let rul of processes$ | async\">{{rul.name}}</option>\n      </select>\n    </div>\n    <div class=\"wrapper wrap-btn\">\n      <button class=\"btn\" type=\"submit\" [disabled]=\"edit.invalid\"><img src=\"../assets/images/icon.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n      <button class=\"btn\" (click)=\"closeEvent.emit()\"><img src=\"../assets/images/cancel-mark.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-list/process-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-list/process-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class = \"top-bar\">\n  <button (click)=\"modal = true\" class = \"btn\"><img src=\"../assets/images/plus-black-symbol.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n</div>\n<div class = \"content\">\n  <div class=\"wrap-process\">\n    <div class=\"card-process\" *ngFor=\"let proc of processes$ | async\">\n      <div class=\"front-process\">\n        <div class=\"wrap-name\">{{proc.name}}</div>\n        <div class=\"wrap-color\" [ngStyle]=\"{background: proc.color}\"></div>\n        <div class=\"wrap-transition\" *ngIf=\"proc.transition.length > 0, \">Transition:\n          <div>{{proc.transition}}</div>\n        </div>\n      </div>\n      <div class=\"back-process\">\n        <button class=\"btn\" (click)=\"editProcess(proc);modalEdit = true \"><img src=\"../assets/images/pencil-edit-button.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n        <button class=\"btn\" (click)=\"deleteProcess(proc)\"><img src=\"../assets/images/minus-big-symbol.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-process-add *ngIf=\"modal\" (closeEvent)=\"modal = false\"></app-process-add>\n<app-process-edit *ngIf=\"modalEdit\" (closeEvent)=\"modalEdit = false\" (process)=\"editProcess($event)\"></app-process-edit>\n");

/***/ }),

/***/ "./src/app/components/process/process-add/process-add.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/process/process-add/process-add.component.less ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  font-size: 1rem;\n  background-color: #DCEDC8;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  padding: 1rem;\n  min-width: 50vw;\n}\n.wrapper {\n  box-sizing: border-box;\n  margin: 1vh;\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 2vh);\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper input {\n  padding: 0.4vh;\n  width: calc(70% - 1vh);\n}\n.wrapper select {\n  margin-top: 1vh;\n  padding: 0.4vh;\n  width: calc(100% - 1vh);\n}\n.wrap-btn {\n  box-sizing: border-box;\n  justify-content: center;\n}\n.wrap-btn button {\n  width: 30%;\n  margin: 1rem 1rem 0 1rem;\n}\n@media screen and (max-width: 620px) {\n  .modal {\n    min-width: 90vw;\n  }\n  .wrap-btn {\n    justify-content: space-between;\n  }\n  .wrap-btn button {\n    width: 40%;\n    margin: 1vh 1vh 0 1vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL3Byb2Nlc3MtYWRkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1hZGQvcHJvY2Vzcy1hZGQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FDREY7QURHQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDREY7QURHQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNERjtBREpBO0VBT0ksVUFBQTtBQ0FKO0FEUEE7RUFVSSxjQUFBO0VBQ0Esc0JBQUE7QUNBSjtBRFhBO0VBY0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0FKO0FES0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDSEY7QURDQTtFQUlJLFVBQUE7RUFDQSx3QkFBQTtBQ0ZKO0FES0E7RUFDRTtJQUNFLGVBQUE7RUNIRjtFREtBO0lBQ0UsOEJBQUE7RUNIRjtFREVBO0lBR0ksVUFBQTtJQUNBLHFCQUFBO0VDRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWFkZC9wcm9jZXNzLWFkZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2NvbG9yXCI7XG5cbi5iYWNrZHJvcHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTowO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XG59XG4ubW9kYWx7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLWxpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6NTAlO1xuICB0b3A6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiA1MHZ3O1xufVxuLndyYXBwZXJ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAydmgpO1xuICBsYWJlbHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIGlucHV0e1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDF2aCk7XG4gIH1cbiAgc2VsZWN0e1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXZoKTtcbiAgfVxuXG59XG5cbi53cmFwLWJ0bntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJ1dHRvbntcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLm1vZGFse1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcC1idG57XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJ1dHRvbntcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW46IDF2aCAxdmggMCAxdmg7XG4gICAgfVxuICB9XG59XG4iLCIuYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLm1vZGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENFREM4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yNSUpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtaW4td2lkdGg6IDUwdnc7XG59XG4ud3JhcHBlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAydmgpO1xufVxuLndyYXBwZXIgbGFiZWwge1xuICB3aWR0aDogMzAlO1xufVxuLndyYXBwZXIgaW5wdXQge1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXZoKTtcbn1cbi53cmFwcGVyIHNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgcGFkZGluZzogMC40dmg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxdmgpO1xufVxuLndyYXAtYnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud3JhcC1idG4gYnV0dG9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMCAxcmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLm1vZGFsIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gIH1cbiAgLndyYXAtYnRuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLndyYXAtYnRuIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDF2aCAxdmggMCAxdmg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/process/process-add/process-add.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/process/process-add/process-add.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProcessAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAddComponent", function() { return ProcessAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_process_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/process.service */ "./src/app/services/process.service.ts");
/* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");







let ProcessAddComponent = class ProcessAddComponent {
    constructor(fb, service, store) {
        this.fb = fb;
        this.service = service;
        this.store = store;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["LoadProcesses"]());
        this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_6__["getProcesses"]));
        this.addForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: [''],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transition: [''],
        });
    }
    add() {
        const newProc = {
            name: this.addForm.get('name').value,
            id: this.addForm.get('name').value,
            color: this.addForm.get('color').value,
            transition: this.addForm.get('transition').value
        };
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["CreateProcess"](newProc));
        this.addForm.reset();
    }
};
ProcessAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_process_service__WEBPACK_IMPORTED_MODULE_3__["ProcessService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProcessAddComponent.prototype, "closeEvent", void 0);
ProcessAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process-add.component.less */ "./src/app/components/process/process-add/process-add.component.less")).default]
    })
], ProcessAddComponent);



/***/ }),

/***/ "./src/app/components/process/process-current/process-current.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/process/process-current/process-current.component.less ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWN1cnJlbnQvcHJvY2Vzcy1jdXJyZW50LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/components/process/process-current/process-current.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/process/process-current/process-current.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProcessCurrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessCurrentComponent", function() { return ProcessCurrentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProcessCurrentComponent = class ProcessCurrentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProcessCurrentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process-current',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process-current.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-current/process-current.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process-current.component.less */ "./src/app/components/process/process-current/process-current.component.less")).default]
    })
], ProcessCurrentComponent);



/***/ }),

/***/ "./src/app/components/process/process-edit/process-edit.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/components/process/process-edit/process-edit.component.less ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  font-size: 1rem;\n  background-color: #DCEDC8;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  padding: 1rem;\n  min-width: 50vw;\n}\n.wrapper {\n  margin: 1vh;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper input,\n.wrapper div,\n.wrapper textarea {\n  padding: 0.4vh;\n  width: calc(70% - 1vh);\n}\n.wrapper select {\n  margin-top: 1vh;\n  padding: 0.4vh;\n  width: calc(100% - 1vh);\n}\n.wrapper textarea {\n  resize: none;\n}\n.wrap-btn {\n  box-sizing: border-box;\n  justify-content: center;\n}\n.wrap-btn button {\n  width: 30%;\n  margin: 1rem 1rem 0 1rem;\n}\n@media screen and (max-width: 620px) {\n  .modal {\n    min-width: 90vw;\n  }\n  .wrap-btn {\n    box-sizing: border-box;\n    justify-content: space-between;\n  }\n  .wrap-btn button {\n    width: 40%;\n    margin: 1vh 1vh 0 1vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtZWRpdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWVkaXQvcHJvY2Vzcy1lZGl0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1lZGl0L3Byb2Nlc3MtZWRpdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNERjtBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNERjtBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESEE7RUFNSSxVQUFBO0FDQUo7QUROQTs7O0VBVUksY0FBQTtFQUNBLHNCQUFBO0FDQ0o7QURaQTtFQWNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRGpCQTtFQW1CSSxZQUFBO0FDQ0o7QURHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNERjtBRERBO0VBSUksVUFBQTtFQUNBLHdCQUFBO0FDQUo7QURHQTtFQUNFO0lBQ0UsZUFBQTtFQ0RGO0VER0E7SUFDRSxzQkFBQTtJQUNBLDhCQUFBO0VDREY7RUREQTtJQUlJLFVBQUE7SUFDQSxxQkFBQTtFQ0FKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1lZGl0L3Byb2Nlc3MtZWRpdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2NvbG9yXCI7XG5cbi5iYWNrZHJvcHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTowO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XG59XG4ubW9kYWx7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLWxpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6NTAlO1xuICB0b3A6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiA1MHZ3O1xufVxuLndyYXBwZXJ7XG4gIG1hcmdpbjogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBsYWJlbHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgaW5wdXQsZGl2LHRleHRhcmVhe1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDF2aCk7XG4gIH1cbiAgc2VsZWN0e1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXZoKTtcbiAgfVxuICB0ZXh0YXJlYXtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbn1cblxuLndyYXAtYnRue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYnV0dG9ue1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAxcmVtIDFyZW0gMCAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAubW9kYWx7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICB9XG4gIC53cmFwLWJ0bntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBidXR0b257XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICAgIH1cbiAgfVxufVxuIiwiLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRURDODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiA1MHZ3O1xufVxuLndyYXBwZXIge1xuICBtYXJnaW46IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVyIGxhYmVsIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53cmFwcGVyIGlucHV0LFxuLndyYXBwZXIgZGl2LFxuLndyYXBwZXIgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXZoKTtcbn1cbi53cmFwcGVyIHNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgcGFkZGluZzogMC40dmg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxdmgpO1xufVxuLndyYXBwZXIgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG4ud3JhcC1idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi53cmFwLWJ0biBidXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAubW9kYWwge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcC1idG4ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53cmFwLWJ0biBidXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/process/process-edit/process-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/process/process-edit/process-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProcessEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessEditComponent", function() { return ProcessEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
/* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");






let ProcessEditComponent = class ProcessEditComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.edit = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newTransition: ['']
        });
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["LoadProcesses"]());
        this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__["getProcesses"]));
        const process$ = this.store.select(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__["getCurrentProcess"]);
        process$.subscribe(currentProcess => {
            if (currentProcess) {
                this.currentProcessLog = currentProcess;
                this.edit.patchValue({
                    name: currentProcess.name,
                    color: currentProcess.color,
                    id: currentProcess.id,
                    transition: currentProcess.transition
                });
            }
        });
    }
    updateProcess() {
        const updatedProcess = {
            transition: this.edit.get('newTransition').value,
            name: this.edit.get('name').value,
            color: this.edit.get('color').value,
            id: this.currentProcessLog.id,
        };
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProcess"](updatedProcess));
    }
};
ProcessEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProcessEditComponent.prototype, "closeEvent", void 0);
ProcessEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-edit/process-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process-edit.component.less */ "./src/app/components/process/process-edit/process-edit.component.less")).default]
    })
], ProcessEditComponent);



/***/ }),

/***/ "./src/app/components/process/process-list/process-list.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/components/process/process-list/process-list.component.less ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-bar {\n  padding: 25px;\n  padding-bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: right;\n}\n.wrap-process {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.wrap-process .card-process {\n  font-size: 1rem;\n  display: flex;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 1rem 1rem;\n  width: calc(100%/3 - 2rem);\n  min-width: 20rem;\n  height: 15vh;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #689F38;\n}\n.wrap-process .card-process .wrap-name {\n  text-align: center;\n}\n.wrap-process .card-process .wrap-color {\n  width: 100%;\n  min-height: 20px;\n}\n.wrap-process .card-process .back-process {\n  display: flex;\n  justify-content: space-between;\n}\n.wrap-process .card-process .back-process .btn {\n  width: 50%;\n  height: 100%;\n  border-radius: 0 0 10px 0;\n  margin-left: 0.15rem;\n}\n.wrap-process .card-process .back-process .btn:first-child {\n  margin-left: 0;\n  margin-right: 0.15rem;\n  border-radius: 0 0 0 10px;\n}\n@media screen and (max-width: 620px) {\n  min-width: 90vw;\n}\n@media screen and (max-height: 620px) {\n  .card-process {\n    min-height: 7rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtbGlzdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWxpc3QvcHJvY2Vzcy1saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1saXN0L3Byb2Nlc3MtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREhBO0VBS0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEaEJBO0VBaUJNLGtCQUFBO0FDRU47QURuQkE7RUFvQk0sV0FBQTtFQUNBLGdCQUFBO0FDRU47QUR2QkE7RUF3Qk0sYUFBQTtFQUNBLDhCQUFBO0FDRU47QUQzQkE7RUEyQlEsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDR1I7QURGUTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDSVY7QURHQTtFQUNFLGVBQUE7QUNERjtBREdBO0VBQ0U7SUFDRSxnQkFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1saXN0L3Byb2Nlc3MtbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2NvbG9yXCI7XG4udG9wLWJhcntcbiAgcGFkZGluZzogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53cmFwLXByb2Nlc3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5jYXJkLXByb2Nlc3N7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUvMyAtIDJyZW0pO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEBjb2xvci1kYXJrO1xuICAgIC53cmFwLW5hbWV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC53cmFwLWNvbG9ye1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuYmFjay1wcm9jZXNze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC5idG57XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMTVyZW07XG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgbWluLXdpZHRoOiA5MHZ3O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYyMHB4KSB7XG4gIC5jYXJkLXByb2Nlc3N7XG4gICAgbWluLWhlaWdodDogN3JlbTtcbiAgfVxufVxuIiwiLnRvcC1iYXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndyYXAtcHJvY2VzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3Mge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMXJlbSAxcmVtO1xuICB3aWR0aDogY2FsYygxMDAlLzMgLSAycmVtKTtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiAxNXZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ODlGMzg7XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLndyYXAtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAud3JhcC1jb2xvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5iYWNrLXByb2Nlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLmJhY2stcHJvY2VzcyAuYnRuIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xuICBtYXJnaW4tbGVmdDogMC4xNXJlbTtcbn1cbi53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuYmFjay1wcm9jZXNzIC5idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgbWluLXdpZHRoOiA5MHZ3O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYyMHB4KSB7XG4gIC5jYXJkLXByb2Nlc3Mge1xuICAgIG1pbi1oZWlnaHQ6IDdyZW07XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/process/process-list/process-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/process/process-list/process-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProcessListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessListComponent", function() { return ProcessListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
/* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");





let ProcessListComponent = class ProcessListComponent {
    constructor(store) {
        this.store = store;
        this.process = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modal = false;
        this.modalEdit = false;
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcesses"]());
        this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_4__["getProcesses"]));
    }
    editProcess(proc) {
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcess"](proc.id));
    }
    deleteProcess(proc) {
        if (confirm('Sure ?')) {
            this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProcess"](proc.id));
        }
    }
};
ProcessListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProcessListComponent.prototype, "process", void 0);
ProcessListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-list/process-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process-list.component.less */ "./src/app/components/process/process-list/process-list.component.less")).default]
    })
], ProcessListComponent);



/***/ }),

/***/ "./src/app/components/process/process.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/process/process.module.ts ***!
  \******************************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _process_add_process_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-add/process-add.component */ "./src/app/components/process/process-add/process-add.component.ts");
/* harmony import */ var _process_list_process_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-list/process-list.component */ "./src/app/components/process/process-list/process-list.component.ts");
/* harmony import */ var _process_edit_process_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-edit/process-edit.component */ "./src/app/components/process/process-edit/process-edit.component.ts");
/* harmony import */ var _process_current_process_current_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-current/process-current.component */ "./src/app/components/process/process-current/process-current.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/effects/user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
/* harmony import */ var _store_effects_process_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/effects/process.effects */ "./src/app/store/effects/process.effects.ts");















const processRoutes = [{ path: '', component: _process_current_process_current_component__WEBPACK_IMPORTED_MODULE_6__["ProcessCurrentComponent"] }];
let ProcessModule = class ProcessModule {
};
ProcessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_process_add_process_add_component__WEBPACK_IMPORTED_MODULE_3__["ProcessAddComponent"], _process_list_process_list_component__WEBPACK_IMPORTED_MODULE_4__["ProcessListComponent"], _process_edit_process_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProcessEditComponent"], _process_current_process_current_component__WEBPACK_IMPORTED_MODULE_6__["ProcessCurrentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(processRoutes),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_10__["UserEffects"], _store_effects_process_effects__WEBPACK_IMPORTED_MODULE_14__["ProcessEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('processes', _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_13__["processReducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('users', _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__["userReducer"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]
    })
], ProcessModule);



/***/ })

}]);
//# sourceMappingURL=app-components-process-process-module-es2015.js.map