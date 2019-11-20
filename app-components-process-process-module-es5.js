(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-process-process-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"addForm\" (submit)=\"add()\">\n    <div class=\"wrapper\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\" type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"color\">Color</label>\n      <input id = \"color\" type=\"color\" formControlName=\"color\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"transition\">Transition</label>\n      <select id=\"transition\" multiple=\"multiple\" formControlName=\"transition\">\n        <option *ngFor=\"let rul of processes$ | async\">{{rul.name}}</option>\n      </select>\n    </div>\n    <div class=\"wrap-btn\">\n      <button class=\"btn\" type=\"submit\" [disabled]=\"addForm.invalid\">Create</button>\n      <button class=\"btn\" (click)=\"closeEvent.emit()\">Exit</button>\n    </div>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-current/process-current.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-current/process-current.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-process-list></app-process-list>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-edit/process-edit.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-edit/process-edit.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"edit\" (submit)=\"updateProcess()\">\n    <div class=\"wrapper\">\n      <label for=\"Name\">Name</label>\n      <input id=\"Name\" type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"Color\">Color</label>\n      <input id = \"Color\" type=\"color\" formControlName=\"color\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"Transition\">Transition</label>\n      <div class=\"secondWrapper\">\n        <textarea name=\"text\" disabled>{{currentProcessLog.transition}}</textarea>\n        <select id=\"Transition\" multiple=\"multiple\" formControlName=\"newTransition\">\n          <option *ngFor=\"let rul of processes$ | async\">{{rul.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"wrap-btn\">\n      <button class=\"btn\" type=\"submit\" [disabled]=\"edit.invalid\">Update</button>\n      <button class=\"btn\" (click)=\"closeEvent.emit()\">Exit</button>\n    </div>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-list/process-list.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-list/process-list.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"top-bar\">\n  <button (click)=\"modal = true\" class = \"btn\">Create new status</button>\n</div>\n<div class = \"content\">\n  <table class=\"content-table\">\n    <thead>\n    <tr>\n      <th>Name</th>\n      <th>Color</th>\n      <th>Transition</th>\n      <th>Action</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let proc of processes$ | async\">\n      <td>{{proc.name}}</td>\n      <td>{{proc.color}}</td>\n      <td><li style=\"color:red; list-style: none\" *ngFor=\"let rul of proc.transition\">{{rul}}</li></td>\n      <td>\n        <ul>\n        <li><a (click)=\"editProcess(proc);modalEdit = true \">Edit</a></li>\n          <li><a (click)=\"deleteProcess(proc)\">Delete</a></li>\n      </ul>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<app-process-add *ngIf=\"modal\" (closeEvent)=\"modal = false\"></app-process-add>\n<app-process-edit *ngIf=\"modalEdit\" (closeEvent)=\"modalEdit = false\" (process)=\"editProcess($event)\"></app-process-edit>\n");
            /***/ 
        }),
        /***/ "./src/app/components/process/process-add/process-add.component.less": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/process/process-add/process-add.component.less ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  min-width: 30rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL3Byb2Nlc3MtYWRkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1hZGQvcHJvY2Vzcy1hZGQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL3Byb2Nlc3MtYWRkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIG1pbi13aWR0aDogMzByZW07XG59XG4iLCIud3JhcHBlciB7XG4gIG1pbi13aWR0aDogMzByZW07XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/process/process-add/process-add.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/process/process-add/process-add.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ProcessAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAddComponent", function () { return ProcessAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_process_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/process.service */ "./src/app/services/process.service.ts");
            /* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
            var ProcessAddComponent = /** @class */ (function () {
                function ProcessAddComponent(fb, service, store) {
                    this.fb = fb;
                    this.service = service;
                    this.store = store;
                    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ProcessAddComponent.prototype.ngOnInit = function () {
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["LoadProcesses"]());
                    this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_6__["getProcesses"]));
                    this.addForm = this.fb.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        id: [''],
                        color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        transition: [''],
                    });
                };
                ProcessAddComponent.prototype.add = function () {
                    var newProc = {
                        name: this.addForm.get('name').value,
                        id: this.addForm.get('name').value,
                        color: this.addForm.get('color').value,
                        transition: this.addForm.get('transition').value
                    };
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["CreateProcess"](newProc));
                    this.addForm.reset();
                };
                return ProcessAddComponent;
            }());
            ProcessAddComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_process_service__WEBPACK_IMPORTED_MODULE_3__["ProcessService"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/components/process/process-current/process-current.component.less": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/process/process-current/process-current.component.less ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWN1cnJlbnQvcHJvY2Vzcy1jdXJyZW50LmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/process/process-current/process-current.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/process/process-current/process-current.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: ProcessCurrentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessCurrentComponent", function () { return ProcessCurrentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProcessCurrentComponent = /** @class */ (function () {
                function ProcessCurrentComponent() {
                }
                ProcessCurrentComponent.prototype.ngOnInit = function () {
                };
                return ProcessCurrentComponent;
            }());
            ProcessCurrentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-process-current',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process-current.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-current/process-current.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process-current.component.less */ "./src/app/components/process/process-current/process-current.component.less")).default]
                })
            ], ProcessCurrentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/process/process-edit/process-edit.component.less": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/process/process-edit/process-edit.component.less ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  min-width: 30rem;\n}\ntextarea {\n  font-size: 1.2rem;\n  width: 30%;\n  padding: 0.4rem;\n  resize: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtZWRpdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWVkaXQvcHJvY2Vzcy1lZGl0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1lZGl0L3Byb2Nlc3MtZWRpdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURDQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1lZGl0L3Byb2Nlc3MtZWRpdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICBtaW4td2lkdGg6IDMwcmVtO1xufVxudGV4dGFyZWF7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB3aWR0aDozMCU7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgcmVzaXplOiBub25lO1xufVxuIiwiLndyYXBwZXIge1xuICBtaW4td2lkdGg6IDMwcmVtO1xufVxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMC40cmVtO1xuICByZXNpemU6IG5vbmU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/process/process-edit/process-edit.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/process/process-edit/process-edit.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ProcessEditComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessEditComponent", function () { return ProcessEditComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
            var ProcessEditComponent = /** @class */ (function () {
                function ProcessEditComponent(fb, store) {
                    this.fb = fb;
                    this.store = store;
                    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ProcessEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["LoadProcesses"]());
                    this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__["getProcesses"]));
                    var process$ = this.store.select(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__["getCurrentProcess"]);
                    process$.subscribe(function (currentProcess) {
                        if (currentProcess) {
                            _this.currentProcessLog = currentProcess;
                            _this.edit = _this.fb.group({
                                name: [currentProcess.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                color: [currentProcess.color, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                id: [currentProcess.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                transition: [currentProcess.transition, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                newTransition: ['']
                            });
                        }
                    });
                };
                ProcessEditComponent.prototype.updateProcess = function () {
                    var updatedProcess = {
                        transition: this.edit.get('newTransition').value,
                        name: this.edit.get('name').value,
                        color: this.edit.get('color').value,
                        id: this.currentProcessLog.id,
                    };
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProcess"](updatedProcess));
                };
                return ProcessEditComponent;
            }());
            ProcessEditComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/components/process/process-list/process-list.component.less": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/process/process-list/process-list.component.less ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".top-bar {\n  padding: 25px;\n  padding-bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtbGlzdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWxpc3QvcHJvY2Vzcy1saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1saXN0L3Byb2Nlc3MtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1saXN0L3Byb2Nlc3MtbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYmFye1xuICBwYWRkaW5nOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIiwiLnRvcC1iYXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/process/process-list/process-list.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/process/process-list/process-list.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ProcessListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessListComponent", function () { return ProcessListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
            var ProcessListComponent = /** @class */ (function () {
                function ProcessListComponent(store) {
                    this.store = store;
                    this.process = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.modal = false;
                    this.modalEdit = false;
                }
                ProcessListComponent.prototype.ngOnInit = function () {
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcesses"]());
                    this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_4__["getProcesses"]));
                };
                ProcessListComponent.prototype.editProcess = function (proc) {
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcess"](proc.id));
                };
                ProcessListComponent.prototype.deleteProcess = function (proc) {
                    if (confirm('Sure ?')) {
                        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProcess"](proc.id));
                    }
                };
                return ProcessListComponent;
            }());
            ProcessListComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/components/process/process.module.ts": 
        /*!******************************************************!*\
          !*** ./src/app/components/process/process.module.ts ***!
          \******************************************************/
        /*! exports provided: ProcessModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function () { return ProcessModule; });
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
            var processRoutes = [{ path: '', component: _process_current_process_current_component__WEBPACK_IMPORTED_MODULE_6__["ProcessCurrentComponent"] }];
            var ProcessModule = /** @class */ (function () {
                function ProcessModule() {
                }
                return ProcessModule;
            }());
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
            /***/ 
        })
    }]);
//# sourceMappingURL=app-components-process-process-module-es2015.js.map
//# sourceMappingURL=app-components-process-process-module-es5.js.map
//# sourceMappingURL=app-components-process-process-module-es5.js.map