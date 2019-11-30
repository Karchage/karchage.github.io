(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-process-process-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/process/process-add/process-add.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"addForm\" (submit)=\"add()\">\n    <div class=\"wrapper\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\" type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"color\">Color</label>\n      <input id = \"color\" type=\"color\" formControlName=\"color\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"transition\">Transition</label>\n      <select id=\"transition\" multiple=\"multiple\" formControlName=\"transition\">\n        <option *ngFor=\"let rul of processes$ | async\">{{rul.name}}</option>\n      </select>\n    </div>\n    <div class=\"wrapper wrap-btn\">\n      <button class=\"btn\" type=\"submit\" [disabled]=\"addForm.invalid\">Create</button>\n      <button class=\"btn\" (click)=\"closeEvent.emit()\">Exit</button>\n    </div>\n  </form>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"edit\" (submit)=\"updateProcess()\">\n    <div class=\"wrapper\">\n      <label for=\"Name\">Name</label>\n      <input id=\"Name\" type=\"text\" formControlName=\"name\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"Color\">Color</label>\n      <input id = \"Color\" type=\"color\" formControlName=\"color\">\n    </div>\n\n    <div class=\"wrapper\">\n      <label for=\"Transition\">Transition</label>\n      <textarea name=\"text\" disabled formControlName=\"transition\"></textarea>\n      <select id=\"Transition\" multiple=\"multiple\" formControlName=\"newTransition\">\n        <option *ngFor=\"let rul of processes$ | async\">{{rul.name}}</option>\n      </select>\n    </div>\n    <div class=\"wrapper wrap-btn\">\n      <button class=\"btn\" type=\"submit\" [disabled]=\"edit.invalid\">Update</button>\n      <button class=\"btn\" (click)=\"closeEvent.emit()\">Exit</button>\n    </div>\n  </form>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"top-bar\">\n  <button (click)=\"modal = true\" class = \"btn\">Create new status</button>\n</div>\n<div class = \"content\">\n  <div class=\"wrap-process\">\n    <div class=\"card-process\" *ngFor=\"let proc of processes$ | async\">\n      <div class=\"front-process\">\n        <div class=\"wrap-name\">{{proc.name}}</div>\n        <div class=\"wrap-color\" [ngStyle]=\"{background: proc.color}\"></div>\n        <div class=\"wrap-transition\" *ngIf=\"proc.transition.length > 0, \">Transition:\n        <div>{{proc.transition}}</div>\n        </div>\n      </div>\n      <div class=\"back-process\">\n        <button class=\"btn\" (click)=\"editProcess(proc);modalEdit = true \">Edit</button>\n        <button class=\"btn\" (click)=\"deleteProcess(proc)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-process-add *ngIf=\"modal\" (closeEvent)=\"modal = false\"></app-process-add>\n<app-process-edit *ngIf=\"modalEdit\" (closeEvent)=\"modalEdit = false\" (process)=\"editProcess($event)\"></app-process-edit>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  font-size: 1rem;\n  background-color: #ebe6d9;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  padding: 1rem;\n  min-width: 50vw;\n}\n.wrapper {\n  box-sizing: border-box;\n  margin: 1vh;\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 2vh);\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper input {\n  padding: 0.4vh;\n  width: calc(70% - 1vh);\n}\n.wrapper select {\n  margin-top: 1vh;\n  padding: 0.4vh;\n  width: calc(100% - 1vh);\n}\n.wrap-btn {\n  box-sizing: border-box;\n  justify-content: center;\n}\n.wrap-btn button {\n  width: 30%;\n  margin: 1rem 1rem 0 1rem;\n}\n@media screen and (max-width: 620px) {\n  .modal {\n    min-width: 90vw;\n  }\n  .wrap-btn {\n    justify-content: space-between;\n  }\n  .wrap-btn button {\n    width: 40%;\n    margin: 1vh 1vh 0 1vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtYWRkL3Byb2Nlc3MtYWRkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1hZGQvcHJvY2Vzcy1hZGQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FDQ0Y7QURDQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRE5BO0VBT0ksVUFBQTtBQ0VKO0FEVEE7RUFVSSxjQUFBO0VBQ0Esc0JBQUE7QUNFSjtBRGJBO0VBY0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0VKO0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDREY7QUREQTtFQUlJLFVBQUE7RUFDQSx3QkFBQTtBQ0FKO0FER0E7RUFDRTtJQUNFLGVBQUE7RUNERjtFREdBO0lBQ0UsOEJBQUE7RUNERjtFREFBO0lBR0ksVUFBQTtJQUNBLHFCQUFBO0VDQUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWFkZC9wcm9jZXNzLWFkZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTowO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XG59XG4ubW9kYWx7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTZkOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OjUwJTtcbiAgdG9wOiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTI1JSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1pbi13aWR0aDogNTB2dztcbn1cbi53cmFwcGVye1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMnZoKTtcbiAgbGFiZWx7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBpbnB1dHtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogY2FsYyg3MCUgLSAxdmgpO1xuICB9XG4gIHNlbGVjdHtcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgcGFkZGluZzogMC40dmg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDF2aCk7XG4gIH1cblxufVxuXG4ud3JhcC1idG57XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBidXR0b257XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5tb2RhbHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gIH1cbiAgLndyYXAtYnRue1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBidXR0b257XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICAgIH1cbiAgfVxufVxuIiwiLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTZkOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiA1MHZ3O1xufVxuLndyYXBwZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMnZoKTtcbn1cbi53cmFwcGVyIGxhYmVsIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53cmFwcGVyIGlucHV0IHtcbiAgcGFkZGluZzogMC40dmg7XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDF2aCk7XG59XG4ud3JhcHBlciBzZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIHBhZGRpbmc6IDAuNHZoO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXZoKTtcbn1cbi53cmFwLWJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndyYXAtYnRuIGJ1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICB9XG4gIC53cmFwLWJ0biB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53cmFwLWJ0biBidXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICB9XG59XG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  font-size: 1rem;\n  background-color: #ebe6d9;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  padding: 1rem;\n  min-width: 50vw;\n}\n.wrapper {\n  margin: 1vh;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper input,\n.wrapper div,\n.wrapper textarea {\n  padding: 0.4vh;\n  width: calc(70% - 1vh);\n}\n.wrapper select {\n  margin-top: 1vh;\n  padding: 0.4vh;\n  width: calc(100% - 1vh);\n}\n.wrapper textarea {\n  resize: none;\n}\n.wrap-btn {\n  box-sizing: border-box;\n  justify-content: center;\n}\n.wrap-btn button {\n  width: 30%;\n  margin: 1rem 1rem 0 1rem;\n}\n@media screen and (max-width: 620px) {\n  .modal {\n    min-width: 90vw;\n  }\n  .wrap-btn {\n    box-sizing: border-box;\n    justify-content: space-between;\n  }\n  .wrap-btn button {\n    width: 40%;\n    margin: 1vh 1vh 0 1vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtZWRpdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWVkaXQvcHJvY2Vzcy1lZGl0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1lZGl0L3Byb2Nlc3MtZWRpdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FGO0FESkE7RUFNSSxVQUFBO0FDQ0o7QURQQTs7O0VBVUksY0FBQTtFQUNBLHNCQUFBO0FDRUo7QURiQTtFQWNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNFSjtBRGxCQTtFQW1CSSxZQUFBO0FDRUo7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREZBO0VBSUksVUFBQTtFQUNBLHdCQUFBO0FDQ0o7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0FGO0VERUE7SUFDRSxzQkFBQTtJQUNBLDhCQUFBO0VDQUY7RURGQTtJQUlJLFVBQUE7SUFDQSxxQkFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1lZGl0L3Byb2Nlc3MtZWRpdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJhY2tkcm9we1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOjA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcbn1cbi5tb2RhbHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlNmQ5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6NTAlO1xuICB0b3A6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiA1MHZ3O1xufVxuLndyYXBwZXJ7XG4gIG1hcmdpbjogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBsYWJlbHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG5cbiAgaW5wdXQsZGl2LHRleHRhcmVhe1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDF2aCk7XG4gIH1cbiAgc2VsZWN0e1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXZoKTtcbiAgfVxuICB0ZXh0YXJlYXtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbn1cblxuLndyYXAtYnRue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYnV0dG9ue1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAxcmVtIDFyZW0gMCAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAubW9kYWx7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICB9XG4gIC53cmFwLWJ0bntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBidXR0b257XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICAgIH1cbiAgfVxufVxuIiwiLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTZkOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiA1MHZ3O1xufVxuLndyYXBwZXIge1xuICBtYXJnaW46IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVyIGxhYmVsIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53cmFwcGVyIGlucHV0LFxuLndyYXBwZXIgZGl2LFxuLndyYXBwZXIgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXZoKTtcbn1cbi53cmFwcGVyIHNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgcGFkZGluZzogMC40dmg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxdmgpO1xufVxuLndyYXBwZXIgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG4ud3JhcC1idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi53cmFwLWJ0biBidXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAubW9kYWwge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcC1idG4ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53cmFwLWJ0biBidXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICB9XG59XG4iXX0= */");
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
                    this.edit = this.fb.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        transition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        newTransition: ['']
                    });
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_4__["LoadProcesses"]());
                    this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__["getProcesses"]));
                    var process$ = this.store.select(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_5__["getCurrentProcess"]);
                    process$.subscribe(function (currentProcess) {
                        if (currentProcess) {
                            _this.currentProcessLog = currentProcess;
                            _this.edit.patchValue({
                                name: currentProcess.name,
                                color: currentProcess.color,
                                id: currentProcess.id,
                                transition: currentProcess.transition
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
            /* harmony default export */ __webpack_exports__["default"] = (".top-bar {\n  padding: 25px;\n  padding-bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: right;\n}\n.wrap-process {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  margin: 1vh;\n}\n.wrap-process .card-process {\n  min-width: 25rem;\n  min-height: 10vh;\n  position: relative;\n  perspective: 90vw;\n  margin: 0.5vh;\n}\n.wrap-process .card-process:hover .front-process {\n  transform: rotateY(180deg);\n}\n.wrap-process .card-process:hover .back-process {\n  transform: rotateY(360deg);\n}\n.wrap-process .card-process .front-process,\n.wrap-process .card-process .back-process {\n  border: #5e0943 1px solid;\n  border-radius: 10px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transition: 1s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.wrap-process .card-process .front-process {\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.wrap-process .card-process .front-process .wrap-name {\n  padding: 0.1vh;\n  width: 100%;\n  text-align: center;\n  height: 20%;\n}\n.wrap-process .card-process .front-process .wrap-color {\n  margin-top: 0.2vh;\n  width: 100%;\n  height: 20%;\n}\n.wrap-process .card-process .front-process .wrap-transition {\n  border-top: 1px solid #5e0943;\n  font-size: 0.7rem;\n  padding: 0.5vh;\n  width: 100%;\n  height: 60%;\n}\n.wrap-process .card-process .front-process .wrap-transition div {\n  font-size: 0.9rem;\n}\n.wrap-process .card-process .back-process {\n  background-color: #ebe6d9;\n  transform: rotateY(180deg);\n}\n@media screen and (max-width: 620px) {\n  .wrap-process {\n    width: calc(100% - 2vh);\n  }\n  .wrap-process .card-process {\n    border: #5e0943 1px solid;\n    border-radius: 10px;\n    min-width: calc(100% - 1vh);\n    min-height: 20vh;\n  }\n  .wrap-process .card-process:hover .front-process {\n    transform: none;\n  }\n  .wrap-process .card-process:hover .back-process {\n    transform: none;\n  }\n  .wrap-process .card-process .front-process,\n  .wrap-process .card-process .back-process {\n    border: none;\n    position: relative;\n    transition: none;\n  }\n  .wrap-process .card-process .front-process {\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 100%;\n    height: 16vh;\n  }\n  .wrap-process .card-process .front-process .wrap-name {\n    font-size: 3vh;\n  }\n  .wrap-process .card-process .front-process .wrap-color {\n    margin-top: 0.2vh;\n    width: 100%;\n    min-height: 20%;\n  }\n  .wrap-process .card-process .front-process .wrap-transition {\n    font-size: 0.8rem;\n  }\n  .wrap-process .card-process .front-process .wrap-transition div {\n    font-size: 1.2rem;\n  }\n  .wrap-process .card-process .back-process {\n    border-top: #5e0943 1px solid;\n    border-radius: 0 0 10px 10px;\n    height: 4vh;\n    background-color: #ebe6d9;\n    justify-content: space-around;\n    transform: none;\n  }\n  .wrap-process .card-process .back-process .btn {\n    margin: 1vh;\n    width: 25%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtbGlzdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvY2Vzcy9wcm9jZXNzLWxpc3QvcHJvY2Vzcy1saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Nlc3MvcHJvY2Vzcy1saXN0L3Byb2Nlc3MtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FETkE7RUFTSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNBSjtBRENJO0VBQ0UsMEJBQUE7QUNDTjtBRENJO0VBQ0UsMEJBQUE7QUNDTjtBRG5CQTs7RUFxQk0seUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNFTjtBRGxDQTtFQW1DTSxzQkFBQTtFQUNBLHNCQUFBO0FDRU47QUR0Q0E7RUFzQ1EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHUjtBRDVDQTtFQTRDUSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR1I7QURqREE7RUFpRFEsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dSO0FEeERBO0VBdURVLGlCQUFBO0FDSVY7QUQzREE7RUE0RE0seUJBQUE7RUFDQSwwQkFBQTtBQ0VOO0FERUE7RUFDRTtJQUNFLHVCQUFBO0VDQUY7RUREQTtJQUdJLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0VDQ0o7RURBSTtJQUNFLGVBQUE7RUNFTjtFREFJO0lBQ0UsZUFBQTtFQ0VOO0VEYkE7O0lBY00sWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUNHTjtFRG5CQTtJQW1CTSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNHTjtFRHpCQTtJQXdCUSxjQUFBO0VDSVI7RUQ1QkE7SUEyQlEsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0lSO0VEakNBO0lBZ0NRLGlCQUFBO0VDSVI7RURwQ0E7SUFrQ1UsaUJBQUE7RUNLVjtFRHZDQTtJQXVDTSw2QkFBQTtJQUNBLDRCQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0VDR047RUQvQ0E7SUE4Q1EsV0FBQTtJQUNBLFVBQUE7RUNJUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9jZXNzL3Byb2Nlc3MtbGlzdC9wcm9jZXNzLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9jb2xvclwiO1xuLnRvcC1iYXJ7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi53cmFwLXByb2Nlc3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMXZoO1xuICAuY2FyZC1wcm9jZXNze1xuICAgIG1pbi13aWR0aDogMjVyZW07XG4gICAgbWluLWhlaWdodDogMTB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGVyc3BlY3RpdmU6IDkwdnc7XG4gICAgbWFyZ2luOiAwLjV2aDtcbiAgICAmOmhvdmVyIC5mcm9udC1wcm9jZXNze1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuICAgICY6aG92ZXIgLmJhY2stcHJvY2Vzc3tcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIH1cbiAgICAuZnJvbnQtcHJvY2VzcywuYmFjay1wcm9jZXNze1xuICAgICAgYm9yZGVyOiBAY29sb3ItZGFyayAxcHggc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICAuZnJvbnQtcHJvY2Vzc3tcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLndyYXAtbmFtZXtcbiAgICAgICAgcGFkZGluZzogMC4xdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgfVxuICAgICAgLndyYXAtY29sb3J7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMnZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICB9XG4gICAgICAud3JhcC10cmFuc2l0aW9ue1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgQGNvbG9yLWRhcms7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjV2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJhY2stcHJvY2Vzc3tcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1saWdodDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLndyYXAtcHJvY2Vzc3tcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnZoKTtcbiAgICAuY2FyZC1wcm9jZXNze1xuICAgICAgYm9yZGVyOiBAY29sb3ItZGFyayAxcHggc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSAxdmgpO1xuICAgICAgbWluLWhlaWdodDogMjB2aDtcbiAgICAgICY6aG92ZXIgLmZyb250LXByb2Nlc3N7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIgLmJhY2stcHJvY2Vzc3tcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgfVxuICAgICAgLmZyb250LXByb2Nlc3MsLmJhY2stcHJvY2Vzc3tcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuZnJvbnQtcHJvY2Vzc3tcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTZ2aDtcbiAgICAgICAgLndyYXAtbmFtZXtcbiAgICAgICAgICBmb250LXNpemU6IDN2aDtcbiAgICAgICAgfVxuICAgICAgICAud3JhcC1jb2xvcntcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjJ2aDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXAtdHJhbnNpdGlvbntcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5iYWNrLXByb2Nlc3N7XG4gICAgICAgIGJvcmRlci10b3A6IEBjb2xvci1kYXJrIDFweCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgICAgaGVpZ2h0OiA0dmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1saWdodDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLmJ0bntcbiAgICAgICAgICBtYXJnaW46IDF2aDtcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIudG9wLWJhciB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ud3JhcC1wcm9jZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3Mge1xuICBtaW4td2lkdGg6IDI1cmVtO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBlcnNwZWN0aXZlOiA5MHZ3O1xuICBtYXJnaW46IDAuNXZoO1xufVxuLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzOmhvdmVyIC5mcm9udC1wcm9jZXNzIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3M6aG92ZXIgLmJhY2stcHJvY2VzcyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xufVxuLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5mcm9udC1wcm9jZXNzLFxuLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5iYWNrLXByb2Nlc3Mge1xuICBib3JkZXI6ICM1ZTA5NDMgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IDFzO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLmZyb250LXByb2Nlc3Mge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5mcm9udC1wcm9jZXNzIC53cmFwLW5hbWUge1xuICBwYWRkaW5nOiAwLjF2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMCU7XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLmZyb250LXByb2Nlc3MgLndyYXAtY29sb3Ige1xuICBtYXJnaW4tdG9wOiAwLjJ2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xufVxuLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5mcm9udC1wcm9jZXNzIC53cmFwLXRyYW5zaXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzVlMDk0MztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDAuNXZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG4ud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLmZyb250LXByb2Nlc3MgLndyYXAtdHJhbnNpdGlvbiBkaXYge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuYmFjay1wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTZkOTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAud3JhcC1wcm9jZXNzIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnZoKTtcbiAgfVxuICAud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3Mge1xuICAgIGJvcmRlcjogIzVlMDk0MyAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDF2aCk7XG4gICAgbWluLWhlaWdodDogMjB2aDtcbiAgfVxuICAud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3M6aG92ZXIgLmZyb250LXByb2Nlc3Mge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3M6aG92ZXIgLmJhY2stcHJvY2VzcyB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuZnJvbnQtcHJvY2VzcyxcbiAgLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5iYWNrLXByb2Nlc3Mge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuICAud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLmZyb250LXByb2Nlc3Mge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2dmg7XG4gIH1cbiAgLndyYXAtcHJvY2VzcyAuY2FyZC1wcm9jZXNzIC5mcm9udC1wcm9jZXNzIC53cmFwLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICB9XG4gIC53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuZnJvbnQtcHJvY2VzcyAud3JhcC1jb2xvciB7XG4gICAgbWFyZ2luLXRvcDogMC4ydmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjAlO1xuICB9XG4gIC53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuZnJvbnQtcHJvY2VzcyAud3JhcC10cmFuc2l0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAud3JhcC1wcm9jZXNzIC5jYXJkLXByb2Nlc3MgLmZyb250LXByb2Nlc3MgLndyYXAtdHJhbnNpdGlvbiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuYmFjay1wcm9jZXNzIHtcbiAgICBib3JkZXItdG9wOiAjNWUwOTQzIDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIGhlaWdodDogNHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmU2ZDk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC53cmFwLXByb2Nlc3MgLmNhcmQtcHJvY2VzcyAuYmFjay1wcm9jZXNzIC5idG4ge1xuICAgIG1hcmdpbjogMXZoO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbiJdfQ== */");
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