(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incidents-incidents-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/incidents/incident-add/incident-add.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\"></div>\r\n<div class=\"modal\">\r\n  <form [formGroup]=\"addForm\" (submit)=\"addNewIncident()\">\r\n    <div class=\"wrapper\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" placeholder=\"Name\" formControlName=\"name\" id ='name'\r\n             [ngClass]=\"{invalid: addForm.get('name').touched && addForm.get('name').invalid}\">\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n    <label for=\"assignee\">Assignee</label>\r\n    <select id=\"assignee\"  formControlName=\"assignee\">\r\n      <option *ngFor=\"let user of users$ | async\" [value]=\"user.name\">{{user.name}}</option>\r\n    </select>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n    <label for=\"area\">Area</label>\r\n    <select id=\"area\"  formControlName=\"area\" [ngClass]=\"{invalid: addForm.get('area').touched && addForm.get('area').invalid}\">\r\n      <option>Sales department</option>\r\n      <option>It department</option>\r\n      <option>Cooking department</option>\r\n      <option>Accounting department</option>\r\n    </select>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n    <label for=\"nowDate\">Now Date</label>\r\n    <div id = 'nowDate' >{{nowDate | date:'dd.MM.yyyy'}}</div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n    <label for=\"dueDate\">Due Date</label>\r\n    <input type=\"date\"  formControlName=\"dueDate\" id=\"dueDate\"  [ngClass]=\"{invalid: addForm.get('dueDate').touched && addForm.get('dueDate').invalid}\">\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n    <label for=\"description\">Description</label>\r\n    <input type=\"text\" placeholder=\"Description\" formControlName=\"description\" id=\"description\" [ngClass]=\"{invalid: addForm.get('description').touched && addForm.get('description').invalid}\">\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n    <label for=\"priority\">Priority</label>\r\n    <select id=\"priority\"  formControlName=\"priority\" [ngClass]=\"{invalid: addForm.get('priority').touched && addForm.get('priority').invalid}\">\r\n      <option>Blocker</option>\r\n      <option>Critical</option>\r\n      <option>Major</option>\r\n      <option>Normal</option>\r\n      <option>Minor</option>\r\n    </select>\r\n    </div>\r\n\r\n    <div class=\"wrapper wrap-btn\">\r\n    <button class=\"btn\" type = \"submit\" [disabled]=\"addForm.invalid\"><img src=\"../assets/images/plus-black-symbol.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\r\n    <button class=\"btn\" (click)=\"closeEvent.emit()\"><img src=\"../assets/images/cancel-mark.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"editForm\" (submit)=\"editIncident()\">\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"id\">Id</label>\r\n  <div id=\"id\">{{incident.id}}</div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"name\">Name</label>\r\n  <div id=\"name\">{{incident.name}}</div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"assignee\">Assignee</label>\r\n    <div class=\"secondWrapper\">\r\n  <div>{{incident.assignee}}</div>\r\n  <select id=\"assignee\"  formControlName=\"assignee\">\r\n    <option *ngFor=\"let user of users$ | async\" [value]=\"user.name\">{{user.name}}</option>\r\n  </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"area\">Area</label>\r\n  <div id=\"area\">{{incident.area}}</div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"startDate\">Start Date</label>\r\n  <div id=\"startDate\">{{incident.startDate | date:'dd/MM/yyyy'}}</div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"dueDate\">Due Date</label>\r\n    <div class=\"secondWrapper\">\r\n      <div>{{incident.dueDate| date: 'dd-MM-yyyy'}}</div>\r\n      <input id=\"dueDate\" type=\"date\" formControlName=\"dueDate\" [ngClass]=\"{invalid: editForm.get('dueDate').touched && editForm.get('dueDate').invalid}\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"description\">Description</label>\r\n  <input id=\"description\" type = \"text\" formControlName=\"description\" [ngClass]=\"{invalid: editForm.get('description').touched && editForm.get('description').invalid}\">\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"status\">Status</label>\r\n    <div class=\"secondWrapper\">\r\n  <div>{{incident.status}}</div>\r\n  <select id=\"status\" formControlName=\"status\" >\r\n    <option *ngFor=\"let rul of currentRul\" [value]=\"rul\">{{rul}}</option>\r\n  </select>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"wrapper\">\r\n  <label for=\"priority\">Priority</label>\r\n  <div id=\"priority\">{{incident.priority}}</div>\r\n  </div>\r\n\r\n\r\n  <div class=\"btn-wrap\">\r\n  <button class=\"btn\" type=\"submit\" [disabled]=\"editForm.invalid\"><img src=\"../assets/images/icon.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\r\n  </div>\r\n</form>\r\n\r\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"content\">\n  <div class = \"table-header\">\n    <input type=\"text\" placeholder=\"Find\" [(ngModel)]=\"search\" >\n    <button (click)=\"modal = true\" class = \"btn\"><img src=\"../assets/images/plus-black-symbol.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n  </div>\n  <div class=\"cards\">\n    <div class = \"incident-card\" *ngFor=\"let incident of incidents$ | async | searchIncident:search\" (click)=\"selectIncident(incident.id)\">\n      <div class = \"left-content-card\">\n        <div class = \"svg-card\">\n          <svg [ngStyle]=\"{fill: incident.icon}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 300.000000 300.000000\" preserveAspectRatio=\"xMidYMid meet\">\n            <g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\"  stroke=\"none\">\n              <path stroke-width=\"20\" class=\"node\" id=\"node1\" d=\"M1365 2384 c-107 -16 -199 -45 -275 -87 -158 -87 -277 -202 -363\n                -349 -69 -117 -92 -186 -113 -332 -16 -108 -16 -124 0 -232 25 -173 63 -269\n                162 -409 98 -139 271 -269 429 -323 90 -30 268 -55 345 -47 173 17 275 49 404\n                125 142 84 243 189 333 345 62 109 92 213 108 375 8 77 -17 255 -47 345 -83\n                243 -309 469 -553 553 -64 22 -249 53 -306 51 -19 -1 -74 -7 -124 -15z m240\n                -304 c211 -34 396 -199 462 -410 24 -77 23 -275 -1 -345 -38 -106 -72 -159\n                -151 -239 -112 -113 -211 -159 -364 -172 -213 -18 -396 66 -526 238 -92 122\n                -129 272 -107 433 6 46 20 103 30 127 10 24 21 50 24 58 3 8 26 42 50 75 139\n                188 350 273 583 235z\" style=\"position: relative;\"></path>\n            </g>\n          </svg>\n        </div>\n        <div class = status-card><div>{{incident.status}}</div></div>\n      </div>\n      <div class = \"right-content-card\">\n        <div class = title-card>{{incident.name}}</div>\n        <div class = \"info-card\">\n          <div class=\"content-wrap\">\n            Assignee:\n            <div class=\"place\">{{incident.assignee}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Area:\n            <div class=\"place\">{{incident.area}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Start Date:\n            <div class=\"place\">{{incident.startDate | date: 'dd/MM/yyyy'}}</div>\n          </div>\n          <div class=\"content-wrap\">\n            Due Date:\n            <div class=\"place\">{{incident.dueDate | date: 'dd/MM/yyyy'}}</div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  </div>\n</div>\n\n<app-incident-add *ngIf=\"modal\" (closeEvent)=\"modal = false\"></app-incident-add>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.modal {\n  font-size: 1rem;\n  background-color: #DCEDC8;\n  border: 1px solid #689F38;\n  border-radius: 10px;\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  padding: 1rem;\n  min-width: 25rem;\n  max-width: 30rem;\n}\n.wrapper {\n  margin: 1vh;\n  display: flex;\n  width: 100%;\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper input,\n.wrapper select,\n.wrapper div {\n  padding: 0.4vh;\n  width: calc(70% - 1rem);\n}\n.wrap-btn {\n  box-sizing: border-box;\n  justify-content: center;\n}\n.wrap-btn button {\n  width: 30%;\n  margin: 1rem 1rem 0 1rem;\n}\n@media screen and (max-width: 620px) {\n  .modal {\n    min-width: 90vw;\n  }\n  .wrap-btn {\n    box-sizing: border-box;\n    justify-content: space-between;\n  }\n  .wrap-btn button {\n    width: 40%;\n    margin: 1vh 1vh 0 1vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL2luY2lkZW50LWFkZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtYWRkL2luY2lkZW50LWFkZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNERjtBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FEREE7RUFLSSxVQUFBO0FDREo7QURKQTs7O0VBUUksY0FBQTtFQUNBLHVCQUFBO0FDQ0o7QURHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNERjtBRERBO0VBSUksVUFBQTtFQUNBLHdCQUFBO0FDQUo7QURHQTtFQUNFO0lBQ0UsZUFBQTtFQ0RGO0VER0E7SUFDRSxzQkFBQTtJQUNBLDhCQUFBO0VDREY7RUREQTtJQUlJLFVBQUE7SUFDQSxxQkFBQTtFQ0FKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luY2lkZW50cy9pbmNpZGVudC1hZGQvaW5jaWRlbnQtYWRkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvY29sb3JcIjtcblxuLmJhY2tkcm9we1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOjA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcbn1cbi5tb2RhbHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAY29sb3ItbGlnaHQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBjb2xvci1kYXJrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6NTAlO1xuICB0b3A6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiAyNXJlbTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcblxufVxuLndyYXBwZXJ7XG4gIG1hcmdpbjogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbGFiZWx7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBpbnB1dCxzZWxlY3QsZGl2e1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDFyZW0pO1xuICB9XG59XG5cbi53cmFwLWJ0bntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJ1dHRvbntcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLm1vZGFse1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcC1idG57XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYnV0dG9ue1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIG1hcmdpbjogMXZoIDF2aCAwIDF2aDtcbiAgICB9XG4gIH1cbn1cblxuIiwiLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRURDODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY4OUYzODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiAyNXJlbTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbn1cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAxdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgbGFiZWwge1xuICB3aWR0aDogMzAlO1xufVxuLndyYXBwZXIgaW5wdXQsXG4ud3JhcHBlciBzZWxlY3QsXG4ud3JhcHBlciBkaXYge1xuICBwYWRkaW5nOiAwLjR2aDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXJlbSk7XG59XG4ud3JhcC1idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi53cmFwLWJ0biBidXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAubW9kYWwge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuICAud3JhcC1idG4ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53cmFwLWJ0biBidXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxdmggMXZoIDAgMXZoO1xuICB9XG59XG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = ("form {\n  position: relative;\n  max-width: calc(50vw - 1rem);\n  left: 50%;\n  transform: translate(-50%, 5%);\n  padding: 1rem;\n  border: 1px solid #689F38;\n  border-radius: 10px;\n  background: #DCEDC8;\n  top: 25%;\n}\n.wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin: 1vh;\n}\n.wrapper label {\n  width: 30%;\n}\n.wrapper > input {\n  width: calc(70% - 1rem);\n}\n.wrapper .secondWrapper {\n  display: flex;\n  width: calc(70% - 1rem);\n}\n.wrapper .secondWrapper div,\n.wrapper .secondWrapper input {\n  width: 50%;\n}\n.btn-wrap {\n  display: flex;\n  justify-content: center;\n  margin: 1vh;\n  padding-top: 1vh;\n}\n.btn-wrap .btn {\n  width: 30%;\n}\n@media screen and (max-width: 620px) {\n  form {\n    max-width: calc(90% - 2rem);\n  }\n  .wrapper {\n    width: calc(100% - 1rem);\n    display: flex;\n    flex-direction: row;\n    align-content: stretch;\n    align-items: baseline;\n    margin: 1vh;\n    border-bottom: 1px solid #689F38;\n  }\n  .wrapper label {\n    padding: 0.4vh;\n    font-size: 1rem;\n    width: 30%;\n    height: 100%;\n  }\n  .wrapper > input,\n  .wrapper div {\n    font-size: 1rem;\n    width: 70%;\n    height: 100%;\n    padding: 0.4vh;\n  }\n  .wrapper div {\n    padding: 0.4vh;\n    height: 100%;\n  }\n  .wrapper .secondWrapper {\n    padding: 0.4vh;\n    font-size: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    width: 70%;\n  }\n  .wrapper .secondWrapper div {\n    padding: 0.4vh;\n    width: 40%;\n  }\n  .wrapper .secondWrapper input {\n    padding: 0.4vh;\n    width: 60%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL0M6L1VzZXJzL0dsZWIvRGVza3RvcC9wcm9qZWN0L2FuZ3VsYXJJY2lkZW50L3NyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ0FGO0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGO0FESkE7RUFNSSxVQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0FDQ0o7QURWQTtFQVlJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEZEE7O0VBZU0sVUFBQTtBQ0dOO0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREpBO0VBTUksVUFBQTtBQ0NKO0FERUE7RUFDRTtJQUNFLDJCQUFBO0VDQUY7RURFQTtJQUNFLHdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtFQ0FGO0VEUEE7SUFTSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VDQ0o7RURDRTs7SUFDRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDRUo7RURwQkE7SUFxQkksY0FBQTtJQUNBLFlBQUE7RUNFSjtFRHhCQTtJQXlCSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQ0VKO0VEL0JBO0lBK0JNLGNBQUE7SUFDQSxVQUFBO0VDR047RURuQ0E7SUFtQ00sY0FBQTtJQUNBLFVBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtZGV0YWlsL2luY2lkZW50LWRldGFpbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2NvbG9yXCI7XG5mb3Jte1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIGxlZnQ6NTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgNSUpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBAY29sb3ItZGFyaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogQGNvbG9yLWxpZ2h0O1xuICB0b3A6IDI1JTtcbn1cbi53cmFwcGVye1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxdmg7XG4gIGxhYmVse1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgJiA+IGlucHV0e1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDFyZW0pO1xuICB9XG4gIC5zZWNvbmRXcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGNhbGMoNzAlIC0gMXJlbSk7XG4gICAgZGl2LGlucHV0e1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cblxufVxuLmJ0bi13cmFwe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIC5idG57XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgZm9ybXtcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTAlIC0gMnJlbSk7XG4gIH1cbiAgLndyYXBwZXJ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBtYXJnaW46IDF2aDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGNvbG9yLWRhcms7XG4gICAgbGFiZWx7XG4gICAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICYgPiBpbnB1dCxkaXZ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcGFkZGluZzogMC40dmg7XG4gICAgfVxuICAgIGRpdntcbiAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuc2Vjb25kV3JhcHBlcntcbiAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBkaXZ7XG4gICAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgfVxuICAgICAgaW5wdXR7XG4gICAgICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iLCJmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IGNhbGMoNTB2dyAtIDFyZW0pO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY4OUYzODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI0RDRURDODtcbiAgdG9wOiAyNSU7XG59XG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDF2aDtcbn1cbi53cmFwcGVyIGxhYmVsIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53cmFwcGVyID4gaW5wdXQge1xuICB3aWR0aDogY2FsYyg3MCUgLSAxcmVtKTtcbn1cbi53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMXJlbSk7XG59XG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBkaXYsXG4ud3JhcHBlciAuc2Vjb25kV3JhcHBlciBpbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uYnRuLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG4uYnRuLXdyYXAgLmJ0biB7XG4gIHdpZHRoOiAzMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICBmb3JtIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTAlIC0gMnJlbSk7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgbWFyZ2luOiAxdmg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2ODlGMzg7XG4gIH1cbiAgLndyYXBwZXIgbGFiZWwge1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAud3JhcHBlciA+IGlucHV0LFxuICAud3JhcHBlciBkaXYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgfVxuICAud3JhcHBlciBkaXYge1xuICAgIHBhZGRpbmc6IDAuNHZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAud3JhcHBlciAuc2Vjb25kV3JhcHBlciB7XG4gICAgcGFkZGluZzogMC40dmg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLndyYXBwZXIgLnNlY29uZFdyYXBwZXIgZGl2IHtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC53cmFwcGVyIC5zZWNvbmRXcmFwcGVyIGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjR2aDtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".table-header {\n  display: flex;\n  justify-content: flex-end;\n  margin: 25px;\n}\n.table-header input {\n  width: 15rem;\n}\n.table-header .btn {\n  min-width: 1rem;\n  margin-left: 0.5rem;\n  box-sizing: border-box;\n}\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.incident-card {\n  width: 75vw;\n  max-height: 13vh ;\n  border: #689F38 1px solid;\n  border-radius: 10px;\n  display: flex;\n  margin: 2vh 1vw;\n}\n.incident-card .left-content-card {\n  background: #8BC34A;\n  border-radius: 10px 0 0 10px;\n  border-right: none;\n  color: #DCEDC8;\n  width: 10%;\n}\n.incident-card .left-content-card .svg-card {\n  height: 50%;\n}\n.incident-card .left-content-card .svg-card svg {\n  stroke: black;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1%;\n}\n.incident-card .left-content-card .status-card {\n  height: 50%;\n  text-align: center;\n  font-size: 1rem;\n}\n.incident-card .right-content-card {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n}\n.incident-card .right-content-card .title-card {\n  height: 50%;\n  font-size: 1.3rem;\n  font-weight: bold;\n  padding: 1vh 1vw;\n  overflow: hidden;\n  margin-right: 1vw;\n}\n.incident-card .right-content-card .info-card {\n  height: 50%;\n  display: flex;\n  justify-content: space-between;\n  padding: 1vh 1vw;\n  margin-bottom: 1vh;\n}\n.incident-card .right-content-card .info-card .content-wrap {\n  width: 25%;\n  font-size: 0.7rem;\n  border-left: #689F38 solid 1px;\n  padding: 0 1vw ;\n}\n.incident-card .right-content-card .info-card .content-wrap .place {\n  font-size: 0.9rem;\n}\n.incident-card:hover {\n  transform: translate(0, 0.1vh);\n  box-shadow: 0.4em 0.4em 0.5vh rgba(122, 122, 122, 0.5);\n}\n@media screen and (min-width: 1200px) {\n  .incident-card {\n    width: 50vw;\n    border: #689F38 1px solid;\n    border-radius: 10px;\n    display: flex;\n    margin: 2vh 1vw;\n  }\n  .incident-card .left-content-card {\n    background: #8BC34A;\n    border-radius: 10px 0 0 10px;\n    border-right: none;\n    color: #DCEDC8;\n    width: 10%;\n  }\n  .incident-card .left-content-card .svg-card {\n    height: 50%;\n  }\n  .incident-card .left-content-card .svg-card svg {\n    stroke: black;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1%;\n  }\n  .incident-card .left-content-card .status-card {\n    height: 50%;\n    text-align: center;\n  }\n  .incident-card .right-content-card {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n  }\n  .incident-card .right-content-card .title-card {\n    height: 50%;\n    font-size: 1.3rem;\n    font-weight: bold;\n    padding: 1vh 1vw;\n    overflow: hidden;\n    margin-right: 1vw;\n  }\n}\n@media screen and (max-width: 620px) {\n  .incident-card {\n    min-height: 20vh;\n  }\n  .incident-card .left-content-card .svg-card {\n    height: 30%;\n  }\n  .incident-card .left-content-card .status-card {\n    height: 70%;\n    padding: 50% 0;\n  }\n  .incident-card .left-content-card .status-card div {\n    position: relative;\n    top: 50%;\n    transform: rotate(-90deg) translate(50%, 0);\n    text-align: center;\n  }\n  .incident-card .right-content-card .title-card {\n    height: 30%;\n  }\n  .incident-card .right-content-card .info-card {\n    height: 70%;\n    flex-wrap: wrap;\n  }\n  .incident-card .right-content-card .info-card .content-wrap {\n    min-width: 50%;\n  }\n}\n@media screen and (max-height: 620px) {\n  .incident-card {\n    min-height: 7rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9DOi9Vc2Vycy9HbGViL0Rlc2t0b3AvcHJvamVjdC9hbmd1bGFySWNpZGVudC9zcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWxpc3QvaW5jaWRlbnQtbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNpZGVudHMvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FESEE7RUFLSSxZQUFBO0FDQ0o7QUROQTtFQVFJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0o7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQUY7QUROQTtFQVFJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0o7QURiQTtFQWNNLFdBQUE7QUNFTjtBRGhCQTtFQWdCUSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDR1I7QUR0QkE7RUF1Qk0sV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VOO0FEM0JBO0VBNkJJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRGhDQTtFQWlDTSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEeENBO0VBMENNLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ047QUQvQ0E7RUFpRFEsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDQ1I7QURyREE7RUFzRFUsaUJBQUE7QUNFVjtBRElFO0VBQ0UsOEJBQUE7RUFDQSxzREFBQTtBQ0ZKO0FES0E7RUFDRTtJQUNFLFdBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUNIRjtFREZBO0lBUUksbUJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUNISjtFRFRBO0lBZU0sV0FBQTtFQ0hOO0VEWkE7SUFrQlEsYUFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQ0hSO0VEbEJBO0lBMEJNLFdBQUE7SUFDQSxrQkFBQTtFQ0xOO0VEdEJBO0lBZ0NJLFVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUNQSjtFRDNCQTtJQXFDTSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ1BOO0FBQ0Y7QURhQTtFQUNFO0lBQ0UsZ0JBQUE7RUNYRjtFRFVBO0lBSU0sV0FBQTtFQ1hOO0VET0E7SUFPTSxXQUFBO0lBQ0EsY0FBQTtFQ1hOO0VER0E7SUFVUSxrQkFBQTtJQUNBLFFBQUE7SUFDQSwyQ0FBQTtJQUNBLGtCQUFBO0VDVlI7RURIQTtJQW1CTSxXQUFBO0VDYk47RUROQTtJQXNCTSxXQUFBO0lBQ0EsZUFBQTtFQ2JOO0VEVkE7SUF5QlEsY0FBQTtFQ1pSO0FBQ0Y7QURpQkE7RUFDRTtJQUNFLGdCQUFBO0VDZkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jaWRlbnRzL2luY2lkZW50LWxpc3QvaW5jaWRlbnQtbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2NvbG9yXCI7XG4udGFibGUtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDI1cHg7XG4gIGlucHV0e1xuICAgIHdpZHRoOjE1cmVtO1xuICB9XG4gIC5idG57XG4gICAgbWluLXdpZHRoOjFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG4uY2FyZHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5jaWRlbnQtY2FyZHtcbiAgd2lkdGg6IDc1dnc7XG4gIG1heC1oZWlnaHQ6IDEzdmggO1xuICBib3JkZXI6IEBjb2xvci1kYXJrIDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAydmggMXZ3O1xuICAubGVmdC1jb250ZW50LWNhcmR7XG4gICAgYmFja2dyb3VuZDogQGNvbG9yLWJhbGFuY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgY29sb3I6IEBjb2xvci1saWdodDtcbiAgICB3aWR0aDogMTAlO1xuICAgIC5zdmctY2FyZHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgc3Zne1xuICAgICAgICBzdHJva2U6YmxhY2s7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN0YXR1cy1jYXJke1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG4gIC5yaWdodC1jb250ZW50LWNhcmR7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLnRpdGxlLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAxdmggMXZ3O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xuXG4gICAgfVxuICAgIC5pbmZvLWNhcmR7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxdmggMXZ3O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuXG4gICAgICAuY29udGVudC13cmFwe1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IEBjb2xvci1kYXJrIHNvbGlkIDFweDtcbiAgICAgICAgcGFkZGluZzogMCAxdncgO1xuICAgICAgICAucGxhY2V7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICAmOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMXZoKTtcbiAgICBib3gtc2hhZG93OiAwLjRlbSAwLjRlbSAwLjV2aCByZ2JhKDEyMiwxMjIsMTIyLDAuNSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW5jaWRlbnQtY2FyZCB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgYm9yZGVyOiBAY29sb3ItZGFyayAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMnZoIDF2dztcblxuICAgIC5sZWZ0LWNvbnRlbnQtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBAY29sb3ItYmFsYW5jZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBjb2xvcjogQGNvbG9yLWxpZ2h0O1xuICAgICAgd2lkdGg6IDEwJTtcblxuICAgICAgLnN2Zy1jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBzdHJva2U6IGJsYWNrO1xuICAgICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICAgIHN0cm9rZS13aWR0aDogMSU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXR1cy1jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmlnaHQtY29udGVudC1jYXJkIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLnRpdGxlLWNhcmQge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAxdmggMXZ3O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuaW5jaWRlbnQtY2FyZHtcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xuICAgIC5sZWZ0LWNvbnRlbnQtY2FyZHtcbiAgICAgIC5zdmctY2FyZHtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICB9XG4gICAgICAuc3RhdHVzLWNhcmR7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBwYWRkaW5nOiA1MCUgMDtcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSg1MCUsMCk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1jb250ZW50LWNhcmR7XG4gICAgICAudGl0bGUtY2FyZHtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICB9XG4gICAgICAuaW5mby1jYXJke1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAuY29udGVudC13cmFwe1xuICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjIwcHgpIHtcbiAgLmluY2lkZW50LWNhcmR7XG4gICAgbWluLWhlaWdodDogN3JlbTtcbiAgfVxufVxuIiwiLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMjVweDtcbn1cbi50YWJsZS1oZWFkZXIgaW5wdXQge1xuICB3aWR0aDogMTVyZW07XG59XG4udGFibGUtaGVhZGVyIC5idG4ge1xuICBtaW4td2lkdGg6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmluY2lkZW50LWNhcmQge1xuICB3aWR0aDogNzV2dztcbiAgbWF4LWhlaWdodDogMTN2aCA7XG4gIGJvcmRlcjogIzY4OUYzOCAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMnZoIDF2dztcbn1cbi5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICM4QkMzNEE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgY29sb3I6ICNEQ0VEQzg7XG4gIHdpZHRoOiAxMCU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHN2ZyB7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLXdpZHRoOiAxJTtcbn1cbi5pbmNpZGVudC1jYXJkIC5sZWZ0LWNvbnRlbnQtY2FyZCAuc3RhdHVzLWNhcmQge1xuICBoZWlnaHQ6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uaW5jaWRlbnQtY2FyZCAucmlnaHQtY29udGVudC1jYXJkIHtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLnRpdGxlLWNhcmQge1xuICBoZWlnaHQ6IDUwJTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbn1cbi5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCB7XG4gIGhlaWdodDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cbi5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCAuY29udGVudC13cmFwIHtcbiAgd2lkdGg6IDI1JTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGJvcmRlci1sZWZ0OiAjNjg5RjM4IHNvbGlkIDFweDtcbiAgcGFkZGluZzogMCAxdncgO1xufVxuLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAuaW5mby1jYXJkIC5jb250ZW50LXdyYXAgLnBsYWNlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uaW5jaWRlbnQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMXZoKTtcbiAgYm94LXNoYWRvdzogMC40ZW0gMC40ZW0gMC41dmggcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pbmNpZGVudC1jYXJkIHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBib3JkZXI6ICM2ODlGMzggMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDJ2aCAxdnc7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLmxlZnQtY29udGVudC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOEJDMzRBO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbG9yOiAjRENFREM4O1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLmxlZnQtY29udGVudC1jYXJkIC5zdmctY2FyZCB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLmxlZnQtY29udGVudC1jYXJkIC5zdmctY2FyZCBzdmcge1xuICAgIHN0cm9rZTogYmxhY2s7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAxJTtcbiAgfVxuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN0YXR1cy1jYXJkIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmluY2lkZW50LWNhcmQgLnJpZ2h0LWNvbnRlbnQtY2FyZCAudGl0bGUtY2FyZCB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMXZoIDF2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuaW5jaWRlbnQtY2FyZCB7XG4gICAgbWluLWhlaWdodDogMjB2aDtcbiAgfVxuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN2Zy1jYXJkIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN0YXR1cy1jYXJkIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBwYWRkaW5nOiA1MCUgMDtcbiAgfVxuICAuaW5jaWRlbnQtY2FyZCAubGVmdC1jb250ZW50LWNhcmQgLnN0YXR1cy1jYXJkIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKDUwJSwgMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLnRpdGxlLWNhcmQge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5pbmNpZGVudC1jYXJkIC5yaWdodC1jb250ZW50LWNhcmQgLmluZm8tY2FyZCAuY29udGVudC13cmFwIHtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYyMHB4KSB7XG4gIC5pbmNpZGVudC1jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA3cmVtO1xuICB9XG59XG4iXX0= */");
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