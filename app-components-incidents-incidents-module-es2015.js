(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incidents-incidents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\n<div class=\"modal\">\n  <form [formGroup]=\"addForm\" (submit)=\"addNewIncident()\">\n    <div class=\"wrapper\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" placeholder=\"Name\" formControlName=\"name\" id ='name'>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"assignee\">Assignee</label>\n    <select id=\"assignee\"  formControlName=\"assignee\">\n      <option *ngFor=\"let user of users$ | async\" [value]=\"user.name\">{{user.name}}</option>\n    </select>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"area\">Area</label>\n    <select id=\"area\"  formControlName=\"area\" >\n      <option>Sales department</option>\n      <option>It department</option>\n      <option>Cooking department</option>\n      <option>Accounting department</option>\n    </select>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"nowDate\">Now Date</label>\n    <div id = 'nowDate'>{{nowDate | date:'dd.MM.yyyy'}}</div>\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"dueDate\">Due Date</label>\n    <input type=\"date\"  formControlName=\"dueDate\" id=\"dueDate\">\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"description\">Description</label>\n    <input type=\"text\" placeholder=\"Description\" formControlName=\"description\" id=\"description\">\n    </div>\n\n    <div class=\"wrapper\">\n    <label for=\"priority\">Priority</label>\n    <select id=\"priority\"  formControlName=\"priority\" >\n      <option>Blocker</option>\n      <option>Critical</option>\n      <option>Major</option>\n      <option>Normal</option>\n      <option>Minor</option>\n    </select>\n    </div>\n\n    <div class=\"wrapper wrap-btn\">\n    <button class=\"btn\" type = \"submit\" [disabled]=\"addForm.invalid\">Create</button>\n    <button class=\"btn\" (click)=\"closeEvent.emit()\">Exit</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-detail/incident-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-detail/incident-detail.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"editForm\" (submit)=\"editIncident()\">\n\n  <div class=\"wrapper\">\n  <label for=\"id\">Id</label>\n  <div id=\"id\">{{incident.id}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"name\">Name</label>\n  <div id=\"name\">{{incident.name}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"assignee\">Assignee</label>\n    <div class=\"secondWrapper\">\n  <div>{{incident.assignee}}</div>\n  <select id=\"assignee\"  formControlName=\"assignee\">\n    <option *ngFor=\"let user of users$ | async\" [value]=\"user.name\">{{user.name}}</option>\n  </select>\n    </div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"area\">Area</label>\n  <div id=\"area\">{{incident.area}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"startDate\">Start Date</label>\n  <div id=\"startDate\">{{incident.startDate | date:'dd/MM/yyyy'}}</div>\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"dueDate\">Due Date</label>\n    <div class=\"secondWrapper\">\n      <div>{{incident.dueDate| date: 'dd-MM-yyyy'}}</div>\n      <input id=\"dueDate\" type=\"date\" formControlName=\"dueDate\" >\n    </div>\n\n  </div>\n\n\n  <div class=\"wrapper\">\n  <label for=\"description\">Description</label>\n  <input id=\"description\" type = \"text\" formControlName=\"description\">\n  </div>\n\n  <div class=\"wrapper\">\n  <label for=\"status\">Status</label>\n    <div class=\"secondWrapper\">\n  <div>{{incident.status}}</div>\n  <select id=\"status\" formControlName=\"status\" >\n    <option *ngFor=\"let rul of currentRul\" [value]=\"rul\">{{rul}}</option>\n  </select>\n    </div>\n  </div>\n\n\n  <div class=\"wrapper\">\n  <label for=\"priority\">Priority</label>\n  <div id=\"priority\">{{incident.priority}}</div>\n  </div>\n\n\n  <div class=\"btn-wrap\">\n  <button class=\"btn\" type=\"submit\" [disabled]=\"editForm.invalid\">Edit</button>\n  </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-list/incident-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-list/incident-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class = \"content\">\n  <div class = \"table-header\">\n    <input type=\"text\" placeholder=\"Find\" [(ngModel)]=\"search\">\n    <button (click)=\"modal = true\" class = \"btn\">Create new incident</button>\n  </div>\n  <div class=\"cards\">\n    <div class = \"incident-card\" *ngFor=\"let incident of incidents$ | async | searchIncident:search\" (click)=\"selectIncident(incident.id)\">\n      <div class = \"left-content-card\">\n        <div class = \"svg-card\">\n          <svg [ngStyle]=\"{fill: incident.icon}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 300.000000 300.000000\" preserveAspectRatio=\"xMidYMid meet\">\n            <g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\"  stroke=\"none\">\n              <path stroke-width=\"20\" class=\"node\" id=\"node1\" d=\"M1365 2384 c-107 -16 -199 -45 -275 -87 -158 -87 -277 -202 -363\n                -349 -69 -117 -92 -186 -113 -332 -16 -108 -16 -124 0 -232 25 -173 63 -269\n                162 -409 98 -139 271 -269 429 -323 90 -30 268 -55 345 -47 173 17 275 49 404\n                125 142 84 243 189 333 345 62 109 92 213 108 375 8 77 -17 255 -47 345 -83\n                243 -309 469 -553 553 -64 22 -249 53 -306 51 -19 -1 -74 -7 -124 -15z m240\n                -304 c211 -34 396 -199 462 -410 24 -77 23 -275 -1 -345 -38 -106 -72 -159\n                -151 -239 -112 -113 -211 -159 -364 -172 -213 -18 -396 66 -526 238 -92 122\n                -129 272 -107 433 6 46 20 103 30 127 10 24 21 50 24 58 3 8 26 42 50 75 139\n                188 350 273 583 235z\" style=\"position: relative;\"></path>\n            </g>\n          </svg>\n        </div>\n        <div class = status-card><div>{{incident.status}}</div></div>\n      </div>\n      <div class = \"right-content-card\">\n        <div class = title-card>{{incident.name}}</div>\n        <div class = \"info-card\">\n          <div class=\"content-wrap\">\n            Assignee:\n            <div class=\"place\">{{incident.assignee}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Area:\n            <div class=\"place\">{{incident.area}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Start Date:\n            <div class=\"place\">{{incident.startDate | date: 'dd/MM/yyyy'}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Due Date:\n            <div class=\"place\">{{incident.dueDate | date: 'dd/MM/yyyy'}}</div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  </div>\n</div>\n\n<app-incident-add *ngIf=\"modal\" (closeEvent)=\"modal = false\"></app-incident-add>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident/incident.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident/incident.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-incident-list></app-incident-list>\n</div>\n");

/***/ }),

/***/ "./src/app/components/incidents/incident-add/incident-add.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/components/incidents/incident-add/incident-add.component.less ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  font-size: 1rem;\n  background-color: #ebe6d9;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  padding: 1rem;\n  min-width: 50vw;\n}\n.wrapper {\n  margin: 1vh;\n  display: flex;\n  width: 100%;\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper input,\n.wrapper select,\n.wrapper div {\n  padding: 0.4vh;\n  width: calc(70% - 1rem);\n}\n.wrap-btn {\n  box-sizing: border-box;\n  justify-content: center;\n}\n.wrap-btn button {\n  width: 30%;\n  margin: 1rem 1rem 0 1rem;\n}\n@media screen and (max-width: 620px) {\n  .modal {\n    min-width: 90vw;\n  }\n  .wrap-btn {\n    box-sizing: border-box;\n    justify-content: space-between;\n  }\n  .wrap-btn button {\n    width: 40%;\n    margin: 1vh 1vh 0 1vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL2luY2lkZW50LWFkZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL2luY2lkZW50LWFkZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQUY7QURIQTtFQUtJLFVBQUE7QUNDSjtBRE5BOzs7RUFRSSxjQUFBO0VBQ0EsdUJBQUE7QUNHSjtBRENBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGO0FESEE7RUFJSSxVQUFBO0VBQ0Esd0JBQUE7QUNFSjtBRENBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7RURDQTtJQUNFLHNCQUFBO0lBQ0EsOEJBQUE7RUNDRjtFREhBO0lBSUksVUFBQTtJQUNBLHFCQUFBO0VDRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWFkZC9pbmNpZGVudC1hZGQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3B7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206MDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xufVxuLm1vZGFse1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmU2ZDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDo1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0yNSUpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtaW4td2lkdGg6IDUwdnc7XG5cbn1cbi53cmFwcGVye1xuICBtYXJnaW46IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxhYmVse1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgaW5wdXQsc2VsZWN0LGRpdntcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogY2FsYyg3MCUgLSAxcmVtKTtcbiAgfVxufVxuXG4ud3JhcC1idG57XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBidXR0b257XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5tb2RhbHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gIH1cbiAgLndyYXAtYnRue1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJ1dHRvbntcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW46IDF2aCAxdmggMCAxdmg7XG4gICAgfVxuICB9XG59XG5cbiIsIi5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ubW9kYWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmU2ZDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTI1JSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1pbi13aWR0aDogNTB2dztcbn1cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAxdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgbGFiZWwge1xuICB3aWR0aDogMzAlO1xufVxuLndyYXBwZXIgaW5wdXQsXG4ud3JhcHBlciBzZWxlY3QsXG4ud3JhcHBlciBkaXYge1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXJlbSk7XG59XG4ud3JhcC1idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi53cmFwLWJ0biBidXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAubW9kYWwge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcC1idG4ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53cmFwLWJ0biBidXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/incidents/incident-add/incident-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/incidents/incident-add/incident-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IncidentAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentAddComponent", function() { return IncidentAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/incident.action */ "./src/app/store/actions/incident.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _services_incidents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/incidents.service */ "./src/app/services/incidents.service.ts");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _customValidators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../customValidators */ "./src/app/customValidators.ts");









let IncidentAddComponent = class IncidentAddComponent {
    constructor(fb, store, create) {
        this.fb = fb;
        this.store = store;
        this.create = create;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nowDate = new Date();
    }
    ngOnInit() {
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
    }
    addNewIncident() {
        const newIncident = {
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
        this.create.createIncidentNew(newIncident).subscribe(response => {
            newIncident.id = response.name;
            this.store.dispatch(new _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_3__["CreateIncident"](newIncident));
        });
        this.addForm.reset();
    }
};
IncidentAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _services_incidents_service__WEBPACK_IMPORTED_MODULE_6__["IncidentsService"] }
];
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



/***/ }),

/***/ "./src/app/components/incidents/incident-detail/incident-detail.component.less":
/*!*************************************************************************************!*\
  !*** ./src/app/components/incidents/incident-detail/incident-detail.component.less ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  position: relative;\n  max-width: calc(60vw - 1rem);\n  left: 50%;\n  transform: translate(-50%, 5%);\n  padding: 1rem;\n  border-radius: 20px;\n  border: 1px #5e0943 solid;\n  background: #ebe6d9;\n  top: 25%;\n}\n.wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin: 1vh;\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper > input {\n  width: calc(70% - 1rem);\n}\n.wrapper .secondWrapper {\n  display: flex;\n  width: calc(70% - 1rem);\n}\n.wrapper .secondWrapper div,\n.wrapper .secondWrapper input {\n  width: 50%;\n}\n.btn-wrap {\n  display: flex;\n  justify-content: center;\n  margin: 1vh;\n  padding-top: 1vh;\n}\n.btn-wrap .btn {\n  width: 30%;\n}\n@media screen and (max-width: 620px) {\n  form {\n    max-width: calc(90% - 2rem);\n  }\n  .wrapper {\n    width: calc(100% - 1rem);\n    display: flex;\n    flex-direction: row;\n    align-content: stretch;\n    align-items: baseline;\n    margin: 1vh;\n    border-bottom: 1px solid #5e0943;\n  }\n  .wrapper label {\n    padding: 0.4vh;\n    font-size: 0.9rem;\n    width: 30%;\n    height: 100%;\n  }\n  .wrapper > input,\n  .wrapper div {\n    font-size: 0.8rem;\n    width: 70%;\n    height: 100%;\n    padding: 0.4vh;\n  }\n  .wrapper div {\n    padding: 0.4vh;\n    height: 100%;\n  }\n  .wrapper .secondWrapper {\n    padding: 0.4vh;\n    font-size: 0.8rem;\n    display: flex;\n    flex-wrap: wrap;\n    width: 70%;\n  }\n  .wrapper .secondWrapper div {\n    padding: 0.4vh;\n    width: 40%;\n  }\n  .wrapper .secondWrapper input {\n    padding: 0.4vh;\n    width: 60%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ0FGO0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGO0FESkE7RUFNSSxVQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0FDQ0o7QURWQTtFQVlJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEZEE7O0VBZU0sVUFBQTtBQ0dOO0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREpBO0VBTUksVUFBQTtBQ0NKO0FERUE7RUFDRTtJQUNFLDJCQUFBO0VDQUY7RURFQTtJQUNFLHdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtFQ0FGO0VEUEE7SUFTSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ0NKO0VEQ0U7O0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNFSjtFRHBCQTtJQXFCSSxjQUFBO0lBQ0EsWUFBQTtFQ0VKO0VEeEJBO0lBeUJJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0VKO0VEL0JBO0lBK0JNLGNBQUE7SUFDQSxVQUFBO0VDR047RURuQ0E7SUFtQ00sY0FBQTtJQUNBLFVBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2NvbG9yXCI7XG5mb3Jte1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogY2FsYyg2MHZ3IC0gMXJlbSk7XG4gIGxlZnQ6NTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgNSUpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDFweCBAY29sb3ItZGFyayBzb2xpZDtcbiAgYmFja2dyb3VuZDogQGNvbG9yLWxpZ2h0O1xuICB0b3A6IDI1JTtcbn1cbi53cmFwcGVye1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxdmg7XG4gIGxhYmVse1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgJiA+IGlucHV0e1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDFyZW0pO1xuICB9XG4gIC5zZWNvbmRXcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGNhbGMoNzAlIC0gMXJlbSk7XG4gICAgZGl2LGlucHV0e1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cblxufVxuLmJ0bi13cmFwe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIC5idG57XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgZm9ybXtcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTAlIC0gMnJlbSk7XG4gIH1cbiAgLndyYXBwZXJ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBtYXJnaW46IDF2aDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGNvbG9yLWRhcms7XG4gICAgbGFiZWx7XG4gICAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJiA+IGlucHV0LGRpdntcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIH1cbiAgICBkaXZ7XG4gICAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLnNlY29uZFdyYXBwZXJ7XG4gICAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBkaXZ7XG4gICAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgfVxuICAgICAgaW5wdXR7XG4gICAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iLCJmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IGNhbGMoNjB2dyAtIDFyZW0pO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggIzVlMDk0MyBzb2xpZDtcbiAgYmFja2dyb3VuZDogI2ViZTZkOTtcbiAgdG9wOiAyNSU7XG59XG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDF2aDtcbn1cbi53cmFwcGVyIGxhYmVsIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53cmFwcGVyID4gaW5wdXQge1xuICB3aWR0aDogY2FsYyg3MCUgLSAxcmVtKTtcbn1cbi53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXJlbSk7XG59XG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBkaXYsXG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBpbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uYnRuLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG4uYnRuLXdyYXAgLmJ0biB7XG4gIHdpZHRoOiAzMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICBmb3JtIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTAlIC0gMnJlbSk7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgbWFyZ2luOiAxdmg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZTA5NDM7XG4gIH1cbiAgLndyYXBwZXIgbGFiZWwge1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC53cmFwcGVyID4gaW5wdXQsXG4gIC53cmFwcGVyIGRpdiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC40dmg7XG4gIH1cbiAgLndyYXBwZXIgZGl2IHtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLndyYXBwZXIgLnNlY29uZFdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLndyYXBwZXIgLnNlY29uZFdyYXBwZXIgZGl2IHtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/incidents/incident-detail/incident-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/incidents/incident-detail/incident-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IncidentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentDetailComponent", function() { return IncidentDetailComponent; });
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












let IncidentDetailComponent = class IncidentDetailComponent {
    constructor(store, router, fb) {
        this.store = store;
        this.router = router;
        this.fb = fb;
        this.currentRul = [];
    }
    ngOnInit() {
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
        this.incident$.subscribe(response => {
            this.incident = Object.assign({}, response);
            this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_9__["getProcesses"]));
            this.processes$.subscribe(responseProc => {
                if (responseProc) {
                    for (const inc of responseProc) {
                        if (inc.transition.length !== 0) {
                            if (this.incident.status === inc.name) {
                                this.incident.icon = inc.color;
                                this.currentRul = inc.transition;
                            }
                        }
                        else {
                            this.currentRul = null;
                        }
                    }
                    this.editForm.patchValue({
                        dueDate: this.incident.dueDate,
                        assignee: this.incident.assignee,
                        description: this.incident.description,
                        status: this.incident.status,
                        icon: this.incident.icon
                    });
                }
            });
        });
    }
    editIncident() {
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
    }
};
IncidentDetailComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
IncidentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incident-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-detail/incident-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-detail.component.less */ "./src/app/components/incidents/incident-detail/incident-detail.component.less")).default]
    })
], IncidentDetailComponent);



/***/ }),

/***/ "./src/app/components/incidents/incident-list/incident-list.component.less":
/*!*********************************************************************************!*\
  !*** ./src/app/components/incidents/incident-list/incident-list.component.less ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-header {\n  display: flex;\n  margin: 25px;\n}\n.table-header input {\n  width: 80%;\n}\n.table-header .btn {\n  min-width: calc(20% - 0.5rem);\n  margin-left: 0.5rem;\n  box-sizing: border-box;\n}\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.incident-card {\n  width: 75vw;\n  border: #5e0943 1px solid;\n  border-radius: 10px;\n  display: flex;\n  margin: 2vh 1vw;\n}\n.incident-card .left-content-card {\n  background: #b14359;\n  border-radius: 10px 0 0 10px;\n  border-right: none;\n  color: #ebe6d9;\n  width: 10%;\n}\n.incident-card .left-content-card .svg-card {\n  height: 50%;\n}\n.incident-card .left-content-card .svg-card svg {\n  stroke: black;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1%;\n}\n.incident-card .left-content-card .status-card {\n  height: 50%;\n  text-align: center;\n}\n.incident-card .right-content-card {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n}\n.incident-card .right-content-card .title-card {\n  height: 50%;\n  font-size: 1.3rem;\n  font-weight: bold;\n  padding: 1vh 1vw;\n  overflow: hidden;\n  margin-right: 1vw;\n}\n.incident-card .right-content-card .info-card {\n  height: 50%;\n  display: flex;\n  justify-content: space-between;\n  padding: 1vh 1vw;\n  margin-bottom: 1vh;\n}\n.incident-card .right-content-card .info-card .content-wrap {\n  width: 25%;\n  font-size: 0.7rem;\n  border-left: #5e0943 solid 1px;\n  padding: 0 1vw ;\n}\n.incident-card .right-content-card .info-card .content-wrap .place {\n  font-size: 0.8rem;\n}\n.incident-card:hover {\n  transform: translate(0, 0.1vh);\n  box-shadow: 0.4em 0.4em 0.5vh rgba(122, 122, 122, 0.5);\n}\n@media screen and (max-width: 620px) {\n  .incident-card .left-content-card .svg-card {\n    height: 30%;\n  }\n  .incident-card .left-content-card .status-card {\n    height: 70%;\n    padding: 50% 0;\n  }\n  .incident-card .left-content-card .status-card div {\n    position: relative;\n    top: 50%;\n    transform: rotate(-90deg) translate(50%, 0);\n    text-align: center;\n  }\n  .incident-card .right-content-card .title-card {\n    height: 30%;\n  }\n  .incident-card .right-content-card .info-card {\n    height: 70%;\n    flex-wrap: wrap;\n  }\n  .incident-card .right-content-card .info-card .content-wrap {\n    min-width: 50%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWxpc3QvaW5jaWRlbnQtbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNBRjtBREZBO0VBSUksVUFBQTtBQ0NKO0FETEE7RUFPSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0FGO0FERUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQUY7QURMQTtFQU9JLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0o7QURaQTtFQWFNLFdBQUE7QUNFTjtBRGZBO0VBZVEsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0dSO0FEckJBO0VBc0JNLFdBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEekJBO0VBMkJJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRDlCQTtFQStCTSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEdENBO0VBd0NNLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ047QUQ3Q0E7RUErQ1EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDQ1I7QURuREE7RUFvRFUsaUJBQUE7QUNFVjtBRElFO0VBQ0UsOEJBQUE7RUFDQSxzREFBQTtBQ0ZKO0FET0E7RUFDRTtJQUdNLFdBQUE7RUNQTjtFRElBO0lBTU0sV0FBQTtJQUNBLGNBQUE7RUNQTjtFREFBO0lBU1Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsMkNBQUE7SUFDQSxrQkFBQTtFQ05SO0VETkE7SUFrQk0sV0FBQTtFQ1ROO0VEVEE7SUFxQk0sV0FBQTtJQUNBLGVBQUE7RUNUTjtFRGJBO0lBd0JRLGNBQUE7RUNSUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvY29sb3JcIjtcbi50YWJsZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjVweDtcbiAgaW5wdXR7XG4gICAgd2lkdGg6ODAlO1xuICB9XG4gIC5idG57XG4gICAgbWluLXdpZHRoOmNhbGMoMjAlIC0gMC41cmVtKTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbi5jYXJkc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbmNpZGVudC1jYXJke1xuICB3aWR0aDogNzV2dztcbiAgYm9yZGVyOiBAY29sb3ItZGFyayAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMnZoIDF2dztcbiAgLmxlZnQtY29udGVudC1jYXJke1xuICAgIGJhY2tncm91bmQ6IEBjb2xvci1iYWxhbmNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbG9yOiBAY29sb3ItbGlnaHQ7XG4gICAgd2lkdGg6IDEwJTtcbiAgICAuc3ZnLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHN2Z3tcbiAgICAgICAgc3Ryb2tlOmJsYWNrO1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMSU7XG4gICAgICB9XG4gICAgfVxuICAgIC5zdGF0dXMtY2FyZHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuICAucmlnaHQtY29udGVudC1jYXJke1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC50aXRsZS1jYXJke1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMXZoIDF2dztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcblxuICAgIH1cbiAgICAuaW5mby1jYXJke1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMXZoIDF2dztcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcblxuICAgICAgLmNvbnRlbnQtd3JhcHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGJvcmRlci1sZWZ0OiBAY29sb3ItZGFyayBzb2xpZCAxcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMXZ3IDtcbiAgICAgICAgLnBsYWNle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbiAgJjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjF2aCk7XG4gICAgYm94LXNoYWRvdzogMC40ZW0gMC40ZW0gMC41dmggcmdiYSgxMjIsMTIyLDEyMiwwLjUpO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLmluY2lkZW50LWNhcmR7XG4gICAgLmxlZnQtY29udGVudC1jYXJke1xuICAgICAgLnN2Zy1jYXJke1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIC5zdGF0dXMtY2FyZHtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIHBhZGRpbmc6IDUwJSAwO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKDUwJSwwKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWNvbnRlbnQtY2FyZHtcbiAgICAgIC50aXRsZS1jYXJke1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIC5pbmZvLWNhcmR7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC5jb250ZW50LXdyYXB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDI1cHg7XG59XG4udGFibGUtaGVhZGVyIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi50YWJsZS1oZWFkZXIgLmJ0biB7XG4gIG1pbi13aWR0aDogY2FsYygyMCUgLSAwLjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbmNpZGVudC1jYXJkIHtcbiAgd2lkdGg6IDc1dnc7XG4gIGJvcmRlcjogIzVlMDk0MyAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMnZoIDF2dztcbn1cbi5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNiMTQzNTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgY29sb3I6ICNlYmU2ZDk7XG4gIHdpZHRoOiAxMCU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHN2ZyB7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLXdpZHRoOiAxJTtcbn1cbi5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQge1xuICBoZWlnaHQ6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC50aXRsZS1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMXZoIDF2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC5pbmZvLWNhcmQge1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIC5pbmZvLWNhcmQgLmNvbnRlbnQtd3JhcCB7XG4gIHdpZHRoOiAyNSU7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBib3JkZXItbGVmdDogIzVlMDk0MyBzb2xpZCAxcHg7XG4gIHBhZGRpbmc6IDAgMXZ3IDtcbn1cbi5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCAuY29udGVudC13cmFwIC5wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmluY2lkZW50LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjF2aCk7XG4gIGJveC1zaGFkb3c6IDAuNGVtIDAuNGVtIDAuNXZoIHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3ZnLWNhcmQge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHBhZGRpbmc6IDUwJSAwO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQgZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoNTAlLCAwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAudGl0bGUtY2FyZCB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIC5jb250ZW50LXdyYXAge1xuICAgIG1pbi13aWR0aDogNTAlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/incidents/incident-list/incident-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/incidents/incident-list/incident-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IncidentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentListComponent", function() { return IncidentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/reducers/incident.reducer */ "./src/app/store/reducers/incident.reducer.ts");
/* harmony import */ var _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/incident.action */ "./src/app/store/actions/incident.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_actions_process_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/process.action */ "./src/app/store/actions/process.action.ts");
/* harmony import */ var _store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/reducers/process.reducer */ "./src/app/store/reducers/process.reducer.ts");








let IncidentListComponent = class IncidentListComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.search = '';
        this.modal = false;
        this.incidentSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_incident_action__WEBPACK_IMPORTED_MODULE_4__["LoadIncidents"]());
        this.incidents$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_incident_reducer__WEBPACK_IMPORTED_MODULE_3__["getIncidents"]));
        this.store.dispatch(new _store_actions_process_action__WEBPACK_IMPORTED_MODULE_6__["LoadProcesses"]());
        this.processes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_process_reducer__WEBPACK_IMPORTED_MODULE_7__["getProcesses"]));
        this.incidents$.subscribe(response => {
            this.processes$.subscribe(responseProcess => {
                for (const inc of response) {
                    for (const proc of responseProcess) {
                        if (inc.status === proc.name) {
                            inc.icon = proc.color;
                        }
                    }
                }
            });
        });
    }
    selectIncident(id) {
        this.route.navigate(['incidents', id]);
    }
};
IncidentListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
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



/***/ }),

/***/ "./src/app/components/incidents/incident/incident.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/incidents/incident/incident.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50L2luY2lkZW50LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/components/incidents/incident/incident.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/incidents/incident/incident.component.ts ***!
  \*********************************************************************/
/*! exports provided: IncidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentComponent", function() { return IncidentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IncidentComponent = class IncidentComponent {
    constructor() { }
    ngOnInit() {
    }
};
IncidentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incident',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident/incident.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident.component.less */ "./src/app/components/incidents/incident/incident.component.less")).default]
    })
], IncidentComponent);



/***/ }),

/***/ "./src/app/components/incidents/incidents.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/incidents/incidents.module.ts ***!
  \**********************************************************/
/*! exports provided: IncidentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsModule", function() { return IncidentsModule; });
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


















const incidentsRoutes = [{ path: '', component: _incident_incident_component__WEBPACK_IMPORTED_MODULE_3__["IncidentComponent"] }, { path: ':id', component: _incident_detail_incident_detail_component__WEBPACK_IMPORTED_MODULE_14__["IncidentDetailComponent"] }];
let IncidentsModule = class IncidentsModule {
};
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



/***/ }),

/***/ "./src/app/pipes/search-incident.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/search-incident.pipe.ts ***!
  \***********************************************/
/*! exports provided: SearchIncidentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIncidentPipe", function() { return SearchIncidentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchIncidentPipe = class SearchIncidentPipe {
    transform(incidents, search = '') {
        if (!search.trim()) {
            return incidents;
        }
        return incidents.filter(incident => {
            return incident.name.toLowerCase().includes(search.toLowerCase());
        });
    }
};
SearchIncidentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchIncident'
    })
], SearchIncidentPipe);



/***/ }),

/***/ "./src/app/services/incidents.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/incidents.service.ts ***!
  \***********************************************/
/*! exports provided: IncidentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsService", function() { return IncidentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let IncidentsService = class IncidentsService {
    constructor(http) {
        this.http = http;
    }
    getIncidents() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/incidents.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object
                .keys(response)
                .map(key => (Object.assign({}, response[key], { dueDate: new Date(response[key].dueDate), startDate: new Date(response[key].startDate) })));
        }));
    }
    getIncidentById(payload) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/incidents/${payload}.json`);
    }
    createIncident(payload) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/incidents/${payload.id}.json`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object.assign({}, payload, { id: response.id, startDate: new Date(payload.startDate), dueDate: new Date(payload.dueDate) });
        }));
    }
    createIncidentNew(payload) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/incidents.json`, payload);
    }
    updateIncident(incident) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/incidents/${incident.id}.json`, incident);
    }
    deleteIncident(payload) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/incidents/${payload}.json`);
    }
};
IncidentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
IncidentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IncidentsService);



/***/ }),

/***/ "./src/app/store/actions/incident.action.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/incident.action.ts ***!
  \**************************************************/
/*! exports provided: IncidentActionType, LoadIncidents, LoadIncidentsSuccess, LoadIncidentsFail, LoadIncident, LoadIncidentSuccess, LoadIncidentFail, CreateIncident, CreateIncidentSuccess, CreateIncidentFail, UpdateIncident, UpdateIncidentSuccess, UpdateIncidentFail, DeleteIncident, DeleteIncidentSuccess, DeleteIncidentFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentActionType", function() { return IncidentActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidents", function() { return LoadIncidents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentsSuccess", function() { return LoadIncidentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentsFail", function() { return LoadIncidentsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncident", function() { return LoadIncident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentSuccess", function() { return LoadIncidentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadIncidentFail", function() { return LoadIncidentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncident", function() { return CreateIncident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncidentSuccess", function() { return CreateIncidentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncidentFail", function() { return CreateIncidentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncident", function() { return UpdateIncident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncidentSuccess", function() { return UpdateIncidentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncidentFail", function() { return UpdateIncidentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIncident", function() { return DeleteIncident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIncidentSuccess", function() { return DeleteIncidentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIncidentFail", function() { return DeleteIncidentFail; });
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
class LoadIncidents {
    constructor() {
        this.type = IncidentActionType.LOAD_INCIDENTS;
    }
}
class LoadIncidentsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.LOAD_INCIDENTS_SUCCESS;
    }
}
class LoadIncidentsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.LOAD_INCIDENTS_FAIL;
    }
}
class LoadIncident {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.LOAD_INCIDENT;
    }
}
class LoadIncidentSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.LOAD_INCIDENT_SUCCESS;
    }
}
class LoadIncidentFail {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.LOAD_INCIDENT_FAIL;
    }
}
class CreateIncident {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.CREATE_INCIDENT;
    }
}
class CreateIncidentSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.CREATE_INCIDENT_SUCCESS;
    }
}
class CreateIncidentFail {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.CREATE_INCIDENT_FAIL;
    }
}
class UpdateIncident {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.UPDATE_INCIDENT;
    }
}
class UpdateIncidentSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.UPDATE_INCIDENT_SUCCESS;
    }
}
class UpdateIncidentFail {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.UPDATE_INCIDENT_FAIL;
    }
}
class DeleteIncident {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.DELETE_INCIDENT;
    }
}
class DeleteIncidentSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.DELETE_INCIDENT_SUCCESS;
    }
}
class DeleteIncidentFail {
    constructor(payload) {
        this.payload = payload;
        this.type = IncidentActionType.DELETE_INCIDENT_FAIL;
    }
}


/***/ }),

/***/ "./src/app/store/effects/incident.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/incident.effects.ts ***!
  \***************************************************/
/*! exports provided: IncidentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentEffects", function() { return IncidentEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _services_incidents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/incidents.service */ "./src/app/services/incidents.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/incident.action */ "./src/app/store/actions/incident.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let IncidentEffects = class IncidentEffects {
    constructor(actions$, incidentService) {
        this.actions$ = actions$;
        this.incidentService = incidentService;
        this.loadIncidents$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].LOAD_INCIDENTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((action) => this.incidentService.getIncidents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((incidents) => new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentsSuccess"](incidents)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentsFail"](error))))));
        this.createIncident$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].CREATE_INCIDENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((incident) => this.incidentService.createIncident(incident).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((newIncident) => new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["CreateIncidentSuccess"](newIncident)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["CreateIncidentFail"](error))))));
        this.loadIncident$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].LOAD_INCIDENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((action) => this.incidentService.getIncidentById(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((incident) => new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentSuccess"](incident)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["LoadIncidentFail"](err))))));
        this.updateIncident$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["IncidentActionType"].UPDATE_INCIDENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((incident) => this.incidentService.updateIncident(incident).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((updateIncident) => new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["UpdateIncidentSuccess"]({
            id: updateIncident.id,
            changes: updateIncident
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_incident_action__WEBPACK_IMPORTED_MODULE_5__["UpdateIncidentFail"](error))))));
    }
};
IncidentEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_incidents_service__WEBPACK_IMPORTED_MODULE_3__["IncidentsService"] }
];
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



/***/ }),

/***/ "./src/app/store/reducers/incident.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/incident.reducer.ts ***!
  \****************************************************/
/*! exports provided: incidentAdapter, defaultIncident, initialState, incidentReducer, getIncidents, getIncidentsLoading, getIncidentsLoaded, getIncidentsError, getCurrentIncidentId, getCurrentIncident */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incidentAdapter", function() { return incidentAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIncident", function() { return defaultIncident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incidentReducer", function() { return incidentReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidents", function() { return getIncidents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidentsLoading", function() { return getIncidentsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidentsLoaded", function() { return getIncidentsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncidentsError", function() { return getIncidentsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentIncidentId", function() { return getCurrentIncidentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentIncident", function() { return getCurrentIncident; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _actions_incident_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/incident.action */ "./src/app/store/actions/incident.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");




const incidentAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const defaultIncident = {
    ids: [],
    entities: {},
    selectedIncidentId: null,
    loading: false,
    loaded: false,
    error: ''
};
const initialState = incidentAdapter.getInitialState(defaultIncident);
function incidentReducer(state = initialState, action) {
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
const getIncidentFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('incidents');
const getIncidents = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, incidentAdapter.getSelectors().selectAll);
const getIncidentsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, (state) => state.loading);
const getIncidentsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, (state) => state.loaded);
const getIncidentsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, (state) => state.error);
const getCurrentIncidentId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, (state) => state.selectedIncidentId);
const getCurrentIncident = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getIncidentFeatureState, getCurrentIncidentId, state => state.entities[state.selectedIncidentId]);


/***/ })

}]);
//# sourceMappingURL=app-components-incidents-incidents-module-es2015.js.map