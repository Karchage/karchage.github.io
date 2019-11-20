(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incidents-incidents-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"addForm\" (submit)=\"addNewIncident()\">\n    <div class=\"wrapper\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" placeholder=\"Name\" formControlName=\"name\" id ='name'>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"assignee\">Assignee</label>\n    <select id=\"assignee\"  formControlName=\"assignee\">\n      <option *ngFor=\"let user of users$ | async\" [value]=\"user.name\">{{user.name}}</option>\n    </select>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"area\">Area</label>\n    <select id=\"area\"  formControlName=\"area\" >\n      <option>Sales department</option>\n      <option>It department</option>\n      <option>Cooking department</option>\n      <option>Accounting department</option>\n    </select>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"nowDate\">Now Date</label>\n    <div id = 'nowDate'>{{nowDate | date:'dd.MM.yyyy'}}</div>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"dueDate\">Due Date</label>\n    <input type=\"date\"  formControlName=\"dueDate\" id=\"dueDate\">\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"description\">Description</label>\n    <input type=\"text\" placeholder=\"Description\" formControlName=\"description\" id=\"description\">\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"priority\">Priority</label>\n    <select id=\"priority\"  formControlName=\"priority\" >\n      <option>Blocker</option>\n      <option>Critical</option>\n      <option>Major</option>\n      <option>Normal</option>\n      <option>Minor</option>\n    </select>\n    </div>\n\n    <div class=\"wrapper wrap-btn\">\n    <button class=\"btn\" type = \"submit\" [disabled]=\"addForm.invalid\">Create</button>\n    <button class=\"btn\" (click)=\"closeEvent.emit()\">Exit</button>\n    </div>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-detail/incident-detail.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-detail/incident-detail.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"editForm\" (submit)=\"editIncident()\">\n\n  <div class=\"wrapper\">\n  <label for=\"id\">Id</label>\n  <div id=\"id\">{{incident.id}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"name\">Name</label>\n  <div id=\"name\">{{incident.name}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"assignee\">Assignee</label>\n    <div class=\"secondWrapper\">\n  <div>{{incident.assignee}}</div>\n  <select id=\"assignee\"  formControlName=\"assignee\">\n    <option *ngFor=\"let user of users$ | async\" [value]=\"user.name\">{{user.name}}</option>\n  </select>\n    </div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"area\">Area</label>\n  <div id=\"area\">{{incident.area}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"startDate\">Start Date</label>\n  <div id=\"startDate\">{{incident.startDate | date:'dd/MM/yyyy'}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"dueDate\">Due Date</label>\n    <div class=\"secondWrapper\">\n      <div>{{incident.dueDate| date: 'dd-MM-yyyy'}}</div>\n      <input id=\"dueDate\" type=\"date\" formControlName=\"dueDate\" >\n    </div>\n\n  </div>\n\n\n  <div class=\"wrapper\">\n  <label for=\"description\">Description</label>\n  <input id=\"description\" type = \"text\" formControlName=\"description\">\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"status\">Status</label>\n    <div class=\"secondWrapper\">\n  <div>{{incident.status}}</div>\n  <select id=\"status\" formControlName=\"status\" >\n    <option *ngFor=\"let rul of currentRul\" [value]=\"rul\">{{rul}}</option>\n  </select>\n    </div>\n  </div>\n\n\n  <div class=\"wrapper\">\n  <label for=\"priority\">Priority</label>\n  <div id=\"priority\">{{incident.priority}}</div>\n  </div>\n\n\n  <div class=\" btn-wrap\">\n  <button class=\"btn\" type=\"submit\" [disabled]=\"editForm.invalid\">Edit</button>\n  </div>\n</form>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-list/incident-list.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-list/incident-list.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"content\">\n  <div class = \"table-header\">\n    <input type=\"text\" placeholder=\"Find\" [(ngModel)]=\"search\">\n    <button (click)=\"modal = true\" class = \"btn\">Create new incident</button>\n  </div>\n  <div class=\"cards\">\n    <div class = \"incident-card\" *ngFor=\"let incident of incidents$ | async | searchIncident:search\" (click)=\"selectIncident(incident.id)\">\n      <div class = \"left-content-card\">\n        <div class = \"svg-card\">\n          <svg [ngStyle]=\"{fill: incident.icon}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 300.000000 300.000000\" preserveAspectRatio=\"xMidYMid meet\">\n            <g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\"  stroke=\"none\">\n              <path stroke-width=\"20\" class=\"node\" id=\"node1\" d=\"M1365 2384 c-107 -16 -199 -45 -275 -87 -158 -87 -277 -202 -363\n                -349 -69 -117 -92 -186 -113 -332 -16 -108 -16 -124 0 -232 25 -173 63 -269\n                162 -409 98 -139 271 -269 429 -323 90 -30 268 -55 345 -47 173 17 275 49 404\n                125 142 84 243 189 333 345 62 109 92 213 108 375 8 77 -17 255 -47 345 -83\n                243 -309 469 -553 553 -64 22 -249 53 -306 51 -19 -1 -74 -7 -124 -15z m240\n                -304 c211 -34 396 -199 462 -410 24 -77 23 -275 -1 -345 -38 -106 -72 -159\n                -151 -239 -112 -113 -211 -159 -364 -172 -213 -18 -396 66 -526 238 -92 122\n                -129 272 -107 433 6 46 20 103 30 127 10 24 21 50 24 58 3 8 26 42 50 75 139\n                188 350 273 583 235z\" style=\"position: relative;\"></path>\n            </g>\n          </svg>\n        </div>\n        <div class = status-card><div>{{incident.status}}</div></div>\n      </div>\n      <div class = \"right-content-card\">\n        <div class = title-card>{{incident.name}}</div>\n        <div class = \"info-card\">\n          <div class=\"content-wrap\">\n            Assignee:\n            <div class=\"place\">{{incident.assignee}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Area:\n            <div class=\"place\">{{incident.area}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Start Date:\n            <div class=\"place\">{{incident.startDate | date: 'dd/MM/yyyy'}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Due Date:\n            <div class=\"place\">{{incident.dueDate | date: 'dd/MM/yyyy'}}</div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  </div>\n</div>\n\n<app-incident-add *ngIf=\"modal\" (closeEvent)=\"modal = false\"></app-incident-add>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident/incident.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident/incident.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-incident-list></app-incident-list>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident-add/incident-add.component.less": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/incidents/incident-add/incident-add.component.less ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  min-width: 30rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL2luY2lkZW50LWFkZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL2luY2lkZW50LWFkZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luY2lkZW50cy9pbmNpZGVudC1hZGQvaW5jaWRlbnQtYWRkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIG1pbi13aWR0aDogMzByZW07XG59XG5cblxuIiwiLndyYXBwZXIge1xuICBtaW4td2lkdGg6IDMwcmVtO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident-add/incident-add.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/incidents/incident-add/incident-add.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: IncidentAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentAddComponent", function () { return IncidentAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/incident.action */ "./src/app/store/actions/incident.action.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
            /* harmony import */ var _services_incidents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/incidents.service */ "./src/app/services/incidents.service.ts");
            /* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
            /* harmony import */ var _customValidators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../customValidators */ "./src/app/customValidators.ts");
            var IncidentAddComponent = /** @class */ (function () {
                function IncidentAddComponent(fb, store, create) {
                    this.fb = fb;
                    this.store = store;
                    this.create = create;
                    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.nowDate = new Date();
                }
                IncidentAddComponent.prototype.ngOnInit = function () {
                    this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_7__["LoadUsers"]());
                    this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["getUsers"]));
                    this.addForm = this.fb.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        assignee: [''],
                        area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        startDate: [this.nowDate],
                        dueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _customValidators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].dueDateValidator]],
                        description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        icon: [''],
                        status: ['start']
                    });
                };
                IncidentAddComponent.prototype.addNewIncident = function () {
                    var _this = this;
                    var newIncident = {
                        name: this.addForm.get('name').value,
                        assignee: this.addForm.get('assignee').value,
                        area: this.addForm.get('area').value,
                        startDate: this.nowDate,
                        dueDate: this.addForm.get('dueDate').value,
                        description: this.addForm.get('description').value,
                        priority: this.addForm.get('priority').value,
                        icon: this.addForm.get('icon').value,
                        status: 'start',
                    };
                    this.create.createIncidentNew(newIncident).subscribe(function (response) {
                        newIncident.id = response.name;
                        _this.store.dispatch(new _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_3__["CreateIncident"](newIncident));
                    });
                    this.addForm.reset();
                };
                return IncidentAddComponent;
            }());
            IncidentAddComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
                { type: _services_incidents_service__WEBPACK_IMPORTED_MODULE_6__["IncidentsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], IncidentAddComponent.prototype, "closeEvent", void 0);
            IncidentAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-incident-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-add.component.less */ "./src/app/components/incidents/incident-add/incident-add.component.less")).default]
                })
            ], IncidentAddComponent);
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident-detail/incident-detail.component.less": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/incidents/incident-detail/incident-detail.component.less ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("form {\n  margin: 25px;\n  padding: 1rem;\n  position: relative;\n  min-width: 50vh;\n  max-width: 80vh;\n  border: 1px #b14359 solid;\n  border-radius: 25px;\n  box-sizing: border-box;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.wrapper {\n  margin-bottom: 0.5rem;\n  align-items: center;\n  border-bottom: 1px #b14359 solid;\n  box-sizing: border-box;\n}\n.wrapper input,\n.wrapper div,\n.wrapper select {\n  padding: 0.4rem;\n}\n.wrapper input {\n  margin-bottom: 0.4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQ0ZGO0FESUE7RUFFRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQ0hGO0FERkE7OztFQVNJLGVBQUE7QUNGSjtBRFBBO0VBWUkscUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWRldGFpbC9pbmNpZGVudC1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9jb2xvclwiO1xuXG5cbmZvcm0ge1xuICBtYXJnaW46IDI1cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA1MHZoO1xuICBtYXgtd2lkdGg6IDgwdmg7XG4gIGJvcmRlcjogMXB4IEBjb2xvci1iYWxhbmNlIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsZWZ0OjUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwwKTtcbn1cbi53cmFwcGVye1xuXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IEBjb2xvci1iYWxhbmNlIHNvbGlkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGlucHV0LCBkaXYsXG4gIHNlbGVjdHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gIH1cbiAgaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICB9XG5cbn1cblxuIiwiZm9ybSB7XG4gIG1hcmdpbjogMjVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDUwdmg7XG4gIG1heC13aWR0aDogODB2aDtcbiAgYm9yZGVyOiAxcHggI2IxNDM1OSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cbi53cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggI2IxNDM1OSBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi53cmFwcGVyIGlucHV0LFxuLndyYXBwZXIgZGl2LFxuLndyYXBwZXIgc2VsZWN0IHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuLndyYXBwZXIgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident-detail/incident-detail.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/incidents/incident-detail/incident-detail.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: IncidentDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentDetailComponent", function () { return IncidentDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/incident.action */ "./src/app/store/actions/incident.action.ts");
            /* harmony import */ var _store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/incident.reducer */ "./src/app/store/reducers/incident.reducer.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
            /* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
            /* harmony import */ var _customValidators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../customValidators */ "./src/app/customValidators.ts");
            var IncidentDetailComponent = /** @class */ (function () {
                function IncidentDetailComponent(store, router, fb) {
                    this.store = store;
                    this.router = router;
                    this.fb = fb;
                    this.currentRul = [];
                }
                IncidentDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.editForm = this.fb.group({
                        dueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _customValidators__WEBPACK_IMPORTED_MODULE_11__["CustomValidators"].dueDateValidator]],
                        assignee: [''],
                        description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                        status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                        icon: ['']
                    });
                    this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_10__["LoadUsers"]());
                    this.store.dispatch(new _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__["LoadIncident"](this.router.snapshot.params.id));
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_8__["LoadProcesses"]());
                    this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUsers"]));
                    this.incident$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_5__["getCurrentIncident"]));
                    this.incident$.subscribe(function (response) {
                        _this.incident = Object.assign({}, response);
                        _this.processes$ = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_9__["getProcesses"]));
                        _this.processes$.subscribe(function (responseProc) {
                            if (responseProc) {
                                for (var _i = 0, responseProc_1 = responseProc; _i < responseProc_1.length; _i++) {
                                    var inc = responseProc_1[_i];
                                    if (inc.transition.length !== 0) {
                                        if (_this.incident.status === inc.name) {
                                            _this.incident.icon = inc.color;
                                            _this.currentRul = inc.transition;
                                        }
                                    }
                                    else {
                                        _this.currentRul = null;
                                    }
                                }
                                _this.editForm.patchValue({
                                    dueDate: _this.incident.dueDate,
                                    assignee: _this.incident.assignee,
                                    description: _this.incident.description,
                                    status: _this.incident.status,
                                    icon: _this.incident.icon
                                });
                            }
                        });
                    });
                };
                IncidentDetailComponent.prototype.editIncident = function () {
                    if (this.editForm.get('status').value === '') {
                        this.newStatus = this.incident.status;
                    }
                    else {
                        this.newStatus = this.editForm.get('status').value;
                    }
                    this.incident = {
                        id: this.incident.id,
                        area: this.incident.area,
                        icon: this.editForm.get('icon').value,
                        name: this.incident.name,
                        priority: this.incident.priority,
                        startDate: new Date(this.incident.startDate),
                        dueDate: new Date(this.editForm.get('dueDate').value),
                        assignee: this.editForm.get('assignee').value,
                        description: this.editForm.get('description').value,
                        status: this.newStatus
                    };
                    this.store.dispatch(new _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__["UpdateIncident"](this.incident));
                };
                return IncidentDetailComponent;
            }());
            IncidentDetailComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
            ]; };
            IncidentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-incident-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-detail/incident-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-detail.component.less */ "./src/app/components/incidents/incident-detail/incident-detail.component.less")).default]
                })
            ], IncidentDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident-list/incident-list.component.less": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/incidents/incident-list/incident-list.component.less ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table-header {\n  display: flex;\n  margin: 25px;\n}\n.table-header input {\n  width: 80%;\n}\n.table-header .btn {\n  min-width: calc(20% - 0.5rem);\n  margin-left: 0.5rem;\n  box-sizing: border-box;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWxpc3QvaW5jaWRlbnQtbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDRjtBREhBO0VBSUksVUFBQTtBQ0VKO0FETkE7RUFPSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWxpc3QvaW5jaWRlbnQtbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjVweDtcbiAgaW5wdXR7XG4gICAgd2lkdGg6ODAlO1xuICB9XG4gIC5idG57XG4gICAgbWluLXdpZHRoOmNhbGMoMjAlIC0gMC41cmVtKTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbiIsIi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDI1cHg7XG59XG4udGFibGUtaGVhZGVyIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi50YWJsZS1oZWFkZXIgLmJ0biB7XG4gIG1pbi13aWR0aDogY2FsYygyMCUgLSAwLjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident-list/incident-list.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/incidents/incident-list/incident-list.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: IncidentListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentListComponent", function () { return IncidentListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/reducers/incident.reducer */ "./src/app/store/reducers/incident.reducer.ts");
            /* harmony import */ var _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/incident.action */ "./src/app/store/actions/incident.action.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
            var IncidentListComponent = /** @class */ (function () {
                function IncidentListComponent(store, route) {
                    this.store = store;
                    this.route = route;
                    this.search = '';
                    this.modal = false;
                    this.incidentSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                IncidentListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.store.dispatch(new _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__["LoadIncidents"]());
                    this.incidents$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_3__["getIncidents"]));
                    this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_6__["LoadProcesses"]());
                    this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_7__["getProcesses"]));
                    this.incidents$.subscribe(function (response) {
                        _this.processes$.subscribe(function (responseProcess) {
                            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                                var inc = response_1[_i];
                                for (var _a = 0, responseProcess_1 = responseProcess; _a < responseProcess_1.length; _a++) {
                                    var proc = responseProcess_1[_a];
                                    if (inc.status === proc.name) {
                                        inc.icon = proc.color;
                                    }
                                }
                            }
                        });
                    });
                };
                IncidentListComponent.prototype.selectIncident = function (id) {
                    this.route.navigate(['incidents', id]);
                };
                return IncidentListComponent;
            }());
            IncidentListComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], IncidentListComponent.prototype, "incidentSelected", void 0);
            IncidentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-incident-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-list/incident-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-list.component.less */ "./src/app/components/incidents/incident-list/incident-list.component.less")).default]
                })
            ], IncidentListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident/incident.component.less": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/incidents/incident/incident.component.less ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50L2luY2lkZW50LmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incident/incident.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/incidents/incident/incident.component.ts ***!
          \*********************************************************************/
        /*! exports provided: IncidentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentComponent", function () { return IncidentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var IncidentComponent = /** @class */ (function () {
                function IncidentComponent() {
                }
                IncidentComponent.prototype.ngOnInit = function () {
                };
                return IncidentComponent;
            }());
            IncidentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-incident',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident/incident.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident.component.less */ "./src/app/components/incidents/incident/incident.component.less")).default]
                })
            ], IncidentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/incidents/incidents.module.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/components/incidents/incidents.module.ts ***!
          \**********************************************************/
        /*! exports provided: IncidentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsModule", function () { return IncidentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _incident_incident_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incident/incident.component */ "./src/app/components/incidents/incident/incident.component.ts");
            /* harmony import */ var _incident_add_incident_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incident-add/incident-add.component */ "./src/app/components/incidents/incident-add/incident-add.component.ts");
            /* harmony import */ var _incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incident-list/incident-list.component */ "./src/app/components/incidents/incident-list/incident-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _store_effects_incident_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/effects/incident.effects */ "./src/app/store/effects/incident.effects.ts");
            /* harmony import */ var _store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/reducers/incident.reducer */ "./src/app/store/reducers/incident.reducer.ts");
            /* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
            /* harmony import */ var _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/effects/user.effects */ "./src/app/store/effects/user.effects.ts");
            /* harmony import */ var _incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./incident-detail/incident-detail.component */ "./src/app/components/incidents/incident-detail/incident-detail.component.ts");
            /* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");
            /* harmony import */ var _store_effects_process_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/effects/process.effects */ "./src/app/store/effects/process.effects.ts");
            /* harmony import */ var _pipes_search_incident_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../pipes/search-incident.pipe */ "./src/app/pipes/search-incident.pipe.ts");
            var incidentsRoutes = [{ path: '', component: _incident_incident_component__WEBPACK_IMPORTED_MODULE_3__["IncidentComponent"] }, { path: ':id', component: _incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_14__["IncidentDetailComponent"] }];
            var IncidentsModule = /** @class */ (function () {
                function IncidentsModule() {
                }
                return IncidentsModule;
            }());
            IncidentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_incident_incident_component__WEBPACK_IMPORTED_MODULE_3__["IncidentComponent"],
                        _incident_add_incident_add_component__WEBPACK_IMPORTED_MODULE_4__["IncidentAddComponent"],
                        _incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_5__["IncidentListComponent"],
                        _incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_14__["IncidentDetailComponent"],
                        _pipes_search_incident_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchIncidentPipe"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(incidentsRoutes),
                        _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_effects_incident_effects__WEBPACK_IMPORTED_MODULE_10__["IncidentEffects"], _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_13__["UserEffects"], _store_effects_process_effects__WEBPACK_IMPORTED_MODULE_16__["ProcessEffects"]]),
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('incidents', _store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_11__["incidentReducer"]),
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('processes', _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_15__["processReducer"]),
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('users', _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__["userReducer"]),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    ]
                })
            ], IncidentsModule);
            /***/ 
        }),
        /***/ "./src/app/pipes/search-incident.pipe.ts": 
        /*!***********************************************!*\
          !*** ./src/app/pipes/search-incident.pipe.ts ***!
          \***********************************************/
        /*! exports provided: SearchIncidentPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIncidentPipe", function () { return SearchIncidentPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SearchIncidentPipe = /** @class */ (function () {
                function SearchIncidentPipe() {
                }
                SearchIncidentPipe.prototype.transform = function (incidents, search) {
                    if (search === void 0) { search = ''; }
                    if (!search.trim()) {
                        return incidents;
                    }
                    return incidents.filter(function (incident) {
                        return incident.name.toLowerCase().includes(search.toLowerCase());
                    });
                };
                return SearchIncidentPipe;
            }());
            SearchIncidentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'searchIncident'
                })
            ], SearchIncidentPipe);
            /***/ 
        }),
        /***/ "./src/app/services/incidents.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/incidents.service.ts ***!
          \***********************************************/
        /*! exports provided: IncidentsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsService", function () { return IncidentsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var IncidentsService = /** @class */ (function () {
                function IncidentsService(http) {
                    this.http = http;
                }
                IncidentsService.prototype.getIncidents = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/incidents.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return Object
                            .keys(response)
                            .map(function (key) { return (Object.assign({}, response[key], { dueDate: new Date(response[key].dueDate), startDate: new Date(response[key].startDate) })); });
                    }));
                };
                IncidentsService.prototype.getIncidentById = function (payload) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/incidents/" + payload + ".json");
                };
                IncidentsService.prototype.createIncident = function (payload) {
                    return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/incidents/" + payload.id + ".json", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return Object.assign({}, payload, { id: response.id, startDate: new Date(payload.startDate), dueDate: new Date(payload.dueDate) });
                    }));
                };
                IncidentsService.prototype.createIncidentNew = function (payload) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/incidents.json", payload);
                };
                IncidentsService.prototype.updateIncident = function (incident) {
                    return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/incidents/" + incident.id + ".json", incident);
                };
                IncidentsService.prototype.deleteIncident = function (payload) {
                    return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/incidents/" + payload + ".json");
                };
                return IncidentsService;
            }());
            IncidentsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            IncidentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], IncidentsService);
            /***/ 
        }),
        /***/ "./src/app/store/actions/incident.action.ts": 
        /*!**************************************************!*\
          !*** ./src/app/store/actions/incident.action.ts ***!
          \**************************************************/
        /*! exports provided: IncidentActionType, LoadIncidents, LoadIncidentsSuccess, LoadIncidentsFail, LoadIncident, LoadIncidentSuccess, LoadIncidentFail, CreateIncident, CreateIncidentSuccess, CreateIncidentFail, UpdateIncident, UpdateIncidentSuccess, UpdateIncidentFail, DeleteIncident, DeleteIncidentSuccess, DeleteIncidentFail */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentActionType", function () { return IncidentActionType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidents", function () { return LoadIncidents; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentsSuccess", function () { return LoadIncidentsSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentsFail", function () { return LoadIncidentsFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncident", function () { return LoadIncident; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentSuccess", function () { return LoadIncidentSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentFail", function () { return LoadIncidentFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncident", function () { return CreateIncident; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncidentSuccess", function () { return CreateIncidentSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncidentFail", function () { return CreateIncidentFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncident", function () { return UpdateIncident; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncidentSuccess", function () { return UpdateIncidentSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncidentFail", function () { return UpdateIncidentFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIncident", function () { return DeleteIncident; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIncidentSuccess", function () { return DeleteIncidentSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIncidentFail", function () { return DeleteIncidentFail; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var IncidentActionType;
            (function (IncidentActionType) {
                IncidentActionType["LOAD_INCIDENTS"] = "[Incident] Load Incidents";
                IncidentActionType["LOAD_INCIDENTS_SUCCESS"] = "[Incident] Load Incidents Success";
                IncidentActionType["LOAD_INCIDENTS_FAIL"] = "[Incident] Load Incidents Fail";
                IncidentActionType["LOAD_INCIDENT"] = "[Incident] Load Incident";
                IncidentActionType["LOAD_INCIDENT_SUCCESS"] = "[Incident] Load Incident Success";
                IncidentActionType["LOAD_INCIDENT_FAIL"] = "[Incident] Load Incident Fail";
                IncidentActionType["CREATE_INCIDENT"] = "[Incident] Create Incident";
                IncidentActionType["CREATE_INCIDENT_SUCCESS"] = "[Incident] Create Incident Success";
                IncidentActionType["CREATE_INCIDENT_FAIL"] = "[Incident] Create Incident Fail";
                IncidentActionType["UPDATE_INCIDENT"] = "[Incident] Update Incident";
                IncidentActionType["UPDATE_INCIDENT_SUCCESS"] = "[Incident] Update Incident Success";
                IncidentActionType["UPDATE_INCIDENT_FAIL"] = "[Incident] Update Incident Fail";
                IncidentActionType["DELETE_INCIDENT"] = "[Incident] Delete Incident";
                IncidentActionType["DELETE_INCIDENT_SUCCESS"] = "[Incident] Delete Incident Success";
                IncidentActionType["DELETE_INCIDENT_FAIL"] = "[Incident] Delete Incident Fail";
            })(IncidentActionType || (IncidentActionType = {}));
            var LoadIncidents = /** @class */ (function () {
                function LoadIncidents() {
                    this.type = IncidentActionType.LOAD_INCIDENTS;
                }
                return LoadIncidents;
            }());
            var LoadIncidentsSuccess = /** @class */ (function () {
                function LoadIncidentsSuccess(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.LOAD_INCIDENTS_SUCCESS;
                }
                return LoadIncidentsSuccess;
            }());
            var LoadIncidentsFail = /** @class */ (function () {
                function LoadIncidentsFail(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.LOAD_INCIDENTS_FAIL;
                }
                return LoadIncidentsFail;
            }());
            var LoadIncident = /** @class */ (function () {
                function LoadIncident(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.LOAD_INCIDENT;
                }
                return LoadIncident;
            }());
            var LoadIncidentSuccess = /** @class */ (function () {
                function LoadIncidentSuccess(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.LOAD_INCIDENT_SUCCESS;
                }
                return LoadIncidentSuccess;
            }());
            var LoadIncidentFail = /** @class */ (function () {
                function LoadIncidentFail(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.LOAD_INCIDENT_FAIL;
                }
                return LoadIncidentFail;
            }());
            var CreateIncident = /** @class */ (function () {
                function CreateIncident(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.CREATE_INCIDENT;
                }
                return CreateIncident;
            }());
            var CreateIncidentSuccess = /** @class */ (function () {
                function CreateIncidentSuccess(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.CREATE_INCIDENT_SUCCESS;
                }
                return CreateIncidentSuccess;
            }());
            var CreateIncidentFail = /** @class */ (function () {
                function CreateIncidentFail(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.CREATE_INCIDENT_FAIL;
                }
                return CreateIncidentFail;
            }());
            var UpdateIncident = /** @class */ (function () {
                function UpdateIncident(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.UPDATE_INCIDENT;
                }
                return UpdateIncident;
            }());
            var UpdateIncidentSuccess = /** @class */ (function () {
                function UpdateIncidentSuccess(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.UPDATE_INCIDENT_SUCCESS;
                }
                return UpdateIncidentSuccess;
            }());
            var UpdateIncidentFail = /** @class */ (function () {
                function UpdateIncidentFail(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.UPDATE_INCIDENT_FAIL;
                }
                return UpdateIncidentFail;
            }());
            var DeleteIncident = /** @class */ (function () {
                function DeleteIncident(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.DELETE_INCIDENT;
                }
                return DeleteIncident;
            }());
            var DeleteIncidentSuccess = /** @class */ (function () {
                function DeleteIncidentSuccess(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.DELETE_INCIDENT_SUCCESS;
                }
                return DeleteIncidentSuccess;
            }());
            var DeleteIncidentFail = /** @class */ (function () {
                function DeleteIncidentFail(payload) {
                    this.payload = payload;
                    this.type = IncidentActionType.DELETE_INCIDENT_FAIL;
                }
                return DeleteIncidentFail;
            }());
            /***/ 
        }),
        /***/ "./src/app/store/effects/incident.effects.ts": 
        /*!***************************************************!*\
          !*** ./src/app/store/effects/incident.effects.ts ***!
          \***************************************************/
        /*! exports provided: IncidentEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentEffects", function () { return IncidentEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _services_incidents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/incidents.service */ "./src/app/services/incidents.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/incident.action */ "./src/app/store/actions/incident.action.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var IncidentEffects = /** @class */ (function () {
                function IncidentEffects(actions$, incidentService) {
                    var _this = this;
                    this.actions$ = actions$;
                    this.incidentService = incidentService;
                    this.loadIncidents$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].LOAD_INCIDENTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.incidentService.getIncidents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (incidents) { return new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentsSuccess"](incidents); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentsFail"](error)); })); }));
                    this.createIncident$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].CREATE_INCIDENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (incident) { return _this.incidentService.createIncident(incident).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (newIncident) { return new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["CreateIncidentSuccess"](newIncident); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["CreateIncidentFail"](error)); })); }));
                    this.loadIncident$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].LOAD_INCIDENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.incidentService.getIncidentById(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (incident) { return new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentSuccess"](incident); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentFail"](err)); })); }));
                    this.updateIncident$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].UPDATE_INCIDENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (incident) { return _this.incidentService.updateIncident(incident).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (updateIncident) { return new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["UpdateIncidentSuccess"]({
                        id: updateIncident.id,
                        changes: updateIncident
                    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["UpdateIncidentFail"](error)); })); }));
                }
                return IncidentEffects;
            }());
            IncidentEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
                { type: _services_incidents_service__WEBPACK_IMPORTED_MODULE_3__["IncidentsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], IncidentEffects.prototype, "loadIncidents$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], IncidentEffects.prototype, "createIncident$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], IncidentEffects.prototype, "loadIncident$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], IncidentEffects.prototype, "updateIncident$", void 0);
            IncidentEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], IncidentEffects);
            /***/ 
        }),
        /***/ "./src/app/store/reducers/incident.reducer.ts": 
        /*!****************************************************!*\
          !*** ./src/app/store/reducers/incident.reducer.ts ***!
          \****************************************************/
        /*! exports provided: incidentAdapter, defaultIncident, initialState, incidentReducer, getIncidents, getIncidentsLoading, getIncidentsLoaded, getIncidentsError, getCurrentIncidentId, getCurrentIncident */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incidentAdapter", function () { return incidentAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIncident", function () { return defaultIncident; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incidentReducer", function () { return incidentReducer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidents", function () { return getIncidents; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidentsLoading", function () { return getIncidentsLoading; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidentsLoaded", function () { return getIncidentsLoaded; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidentsError", function () { return getIncidentsError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentIncidentId", function () { return getCurrentIncidentId; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentIncident", function () { return getCurrentIncident; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
            /* harmony import */ var _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/incident.action */ "./src/app/store/actions/incident.action.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var incidentAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
            var defaultIncident = {
                ids: [],
                entities: {},
                selectedIncidentId: null,
                loading: false,
                loaded: false,
                error: ''
            };
            var initialState = incidentAdapter.getInitialState(defaultIncident);
            function incidentReducer(state, action) {
                if (state === void 0) { state = initialState; }
                switch (action.type) {
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].LOAD_INCIDENTS_SUCCESS: {
                        return incidentAdapter.addAll(action.payload, Object.assign({}, state, { loading: false, loaded: true }));
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].LOAD_INCIDENTS_FAIL: {
                        return Object.assign({}, state, { entities: {}, loading: false, loaded: false, error: action.payload });
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].LOAD_INCIDENT_SUCCESS: {
                        return incidentAdapter.addOne(action.payload, Object.assign({}, state, { selectedIncidentId: action.payload.id }));
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].LOAD_INCIDENT_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].CREATE_INCIDENT_SUCCESS: {
                        return incidentAdapter.addOne(action.payload, state);
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].CREATE_INCIDENT_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].UPDATE_INCIDENT_SUCCESS: {
                        return incidentAdapter.updateOne(action.payload, state);
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].UPDATE_INCIDENT_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].DELETE_INCIDENT_SUCCESS: {
                        return incidentAdapter.removeOne(action.payload, state);
                    }
                    case _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__["IncidentActionType"].DELETE_INCIDENT_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    default: {
                        return state;
                    }
                }
            }
            var getIncidentFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('incidents');
            var getIncidents = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, incidentAdapter.getSelectors().selectAll);
            var getIncidentsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, function (state) { return state.loading; });
            var getIncidentsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, function (state) { return state.loaded; });
            var getIncidentsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, function (state) { return state.error; });
            var getCurrentIncidentId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, function (state) { return state.selectedIncidentId; });
            var getCurrentIncident = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, getCurrentIncidentId, function (state) { return state.entities[state.selectedIncidentId]; });
            /***/ 
        })
    }]);
//# sourceMappingURL=app-components-incidents-incidents-module-es2015.js.map
//# sourceMappingURL=app-components-incidents-incidents-module-es5.js.map
//# sourceMappingURL=app-components-incidents-incidents-module-es5.js.map