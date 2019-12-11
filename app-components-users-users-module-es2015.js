(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-edit/user-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-edit/user-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editUser\">\r\n  <form [formGroup]=\"edit\" (submit)=\"updateUser()\">\r\n    <div class=\"inputs\">\r\n      <input type=\"text\" placeholder=\"name\" formControlName=\"name\" [ngClass]=\"{invalid: edit.get('name').touched && edit.get('name').invalid}\">\r\n      <input type=\"text\" placeholder=\"position\" formControlName=\"position\" [ngClass]=\"{invalid: edit.get('position').touched && edit.get('position').invalid}\">\r\n    </div>\r\n    <button class=\"btn\" type = \"submit\" [disabled]=\"edit.invalid\"><img src=\"../assets/images/icon.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\r\n  </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-list/user-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-list/user-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class = \"content\">\n  <div class=\"user-cards\">\n    <div class=\"user-card\" *ngFor=\"let user of users$ | async\">\n      <div class=\"user-id\">id: {{user.id}}</div>\n      <div class=\"user-name\">{{user.name}}</div>\n\n\n      <div class=\"user-content\">\n        <div class=\"user-wrap\">{{user.DOB | date:'dd/MM/yyyy'}}</div>\n        <div class=\"user-wrap\">{{user.position}}</div>\n      </div>\n      <div class=\"btn-wrap\">\n        <button class=\"btn\" (click)=\"editUser(user)\"><img src=\"../assets/images/pencil-edit-button.png\" alt=\"\" style=\"width: 1rem; height: 1rem\"></button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user/user.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user/user.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-user-edit></app-user-edit>\n  <app-user-list></app-user-list>\n</div>\n");

/***/ }),

/***/ "./src/app/components/users/user-edit/user-edit.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/user-edit/user-edit.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editUser {\n  margin: 2vh;\n}\n.editUser form {\n  display: flex;\n  width: 100%;\n}\n.inputs {\n  width: 85%;\n  display: flex;\n}\n.inputs input {\n  width: 50%;\n}\nbutton {\n  margin: 0 5px;\n  width: 15%;\n}\n@media screen and (max-width: 620px) {\n  .inputs {\n    width: 70vw;\n    display: flex;\n  }\n  .inputs input {\n    width: 50%;\n  }\n  button {\n    margin: 0 5px;\n    width: 30vw;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWVkaXQvQzovVXNlcnMvR2xlYi9EZXNrdG9wL3Byb2plY3QvYW5ndWxhckljaWRlbnQvc3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBREZBO0VBR0ksYUFBQTtFQUNBLFdBQUE7QUNFSjtBREVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNBRjtBREZBO0VBSUksVUFBQTtBQ0NKO0FERUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDQUY7RURGQTtJQUlJLFVBQUE7RUNDSjtFREVBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRVc2Vye1xuICBtYXJnaW46IDJ2aDtcbiAgZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbnB1dHN7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5idXR0b257XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOjE1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5pbnB1dHN7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuICBidXR0b257XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICB3aWR0aDozMHZ3O1xuICB9XG59XG4iLCIuZWRpdFVzZXIge1xuICBtYXJnaW46IDJ2aDtcbn1cbi5lZGl0VXNlciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5wdXRzIHtcbiAgd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnB1dHMgaW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgd2lkdGg6IDE1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5pbnB1dHMge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmlucHV0cyBpbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgd2lkdGg6IDMwdnc7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/users/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _customValidators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../customValidators */ "./src/app/customValidators.ts");







let UserEditComponent = class UserEditComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
    }
    ngOnInit() {
        this.edit = this.fb.group({
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].checkNumberInName])]
        });
        const users$ = this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_4__["getCurrentUser"]);
        users$.subscribe(currentUser => {
            if (currentUser) {
                this.currentUserLog = currentUser;
                this.edit.patchValue({
                    name: currentUser.name,
                    DOB: currentUser.DOB,
                    id: currentUser.id,
                    position: currentUser.position,
                });
            }
        });
    }
    updateUser() {
        const updatedUser = {
            DOB: this.currentUserLog.DOB,
            name: this.edit.get('name').value,
            position: this.edit.get('position').value,
            id: this.currentUserLog.id
        };
        this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"](updatedUser));
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-edit/user-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-edit.component.less */ "./src/app/components/users/user-edit/user-edit.component.less")).default]
    })
], UserEditComponent);



/***/ }),

/***/ "./src/app/components/users/user-list/user-list.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/user-list/user-list.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-cards {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 2vh;\n}\n.user-card {\n  display: flex;\n  justify-content: space-between;\n  width: calc(100%/3 - 3vh);\n  min-width: 25rem;\n  flex-direction: column;\n  margin: 1vh;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5vh;\n}\n.user-card .user-name {\n  text-align: center;\n  font-size: 1.2rem;\n  padding-top: 1vh;\n}\n.user-card .user-id {\n  text-align: left;\n  font-size: 0.7rem;\n  border-bottom: 1px #689F38 solid;\n}\n.user-card .user-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.user-card .user-wrap {\n  width: 50%;\n  text-align: center;\n  margin: 0.5vh 0.5vh 0 0;\n  padding: 0 0.5vh;\n  font-size: 0.9rem;\n}\n.user-card .user-wrap:last-child {\n  border-left: #5e0943 1px solid;\n}\n.user-card .btn-wrap {\n  display: flex;\n  margin-top: 1vh;\n  justify-content: center;\n}\n.user-card .btn-wrap .btn {\n  width: 100%;\n  border-radius: 0 0 10px 10px;\n}\n@media screen and (max-width: 1200px) {\n  .user-cards {\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 620px) {\n  .user-card {\n    min-width: calc(90vw - 3vh);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWxpc3QvQzovVXNlcnMvR2xlYi9EZXNrdG9wL3Byb2plY3QvYW5ndWxhckljaWRlbnQvc3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtBQ0ZGO0FESUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGRjtBRFBBO0VBV0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7QURaQTtFQWdCSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNESjtBRGpCQTtFQXFCSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKO0FEdEJBO0VBMEJJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKO0FERUk7RUFDRSw4QkFBQTtBQ0FOO0FEaENBO0VBcUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNGSjtBRHJDQTtFQXlDTSxXQUFBO0VBQ0EsNEJBQUE7QUNETjtBRE1BO0VBQ0U7SUFDRSx1QkFBQTtFQ0pGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsMkJBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvY29sb3JcIjtcblxuLnVzZXItY2FyZHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBtYXJnaW46IDJ2aDtcbn1cbi51c2VyLWNhcmR7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogY2FsYygxMDAlLzMgLSAzdmgpO1xuICBtaW4td2lkdGg6IDI1cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDF2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNXZoO1xuICAudXNlci1uYW1le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xuICB9XG4gIC51c2VyLWlke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IEBjb2xvci1kYXJrIHNvbGlkO1xuICB9XG4gIC51c2VyLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC51c2VyLXdyYXB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwLjV2aCAwLjV2aCAwIDA7XG4gICAgcGFkZGluZzogMCAwLjV2aDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICBib3JkZXItbGVmdDogIzVlMDk0MyAxcHggc29saWQ7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi13cmFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMXZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5idG57XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudXNlci1jYXJkc3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLnVzZXItY2FyZCB7XG4gICAgbWluLXdpZHRoOiBjYWxjKDkwdncgLSAzdmgpO1xuICB9XG59XG4iLCIudXNlci1jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAydmg7XG59XG4udXNlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogY2FsYygxMDAlLzMgLSAzdmgpO1xuICBtaW4td2lkdGg6IDI1cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDF2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNXZoO1xufVxuLnVzZXItY2FyZCAudXNlci1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cbi51c2VyLWNhcmQgLnVzZXItaWQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICM2ODlGMzggc29saWQ7XG59XG4udXNlci1jYXJkIC51c2VyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi51c2VyLWNhcmQgLnVzZXItd3JhcCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjV2aCAwLjV2aCAwIDA7XG4gIHBhZGRpbmc6IDAgMC41dmg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnVzZXItY2FyZCAudXNlci13cmFwOmxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogIzVlMDk0MyAxcHggc29saWQ7XG59XG4udXNlci1jYXJkIC5idG4td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udXNlci1jYXJkIC5idG4td3JhcCAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnVzZXItY2FyZHMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAudXNlci1jYXJkIHtcbiAgICBtaW4td2lkdGg6IGNhbGMoOTB2dyAtIDN2aCk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/users/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");





let UserListComponent = class UserListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["LoadUsers"]());
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_4__["getUsers"]));
    }
    editUser(user) {
        this.store.dispatch(new _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["LoadUser"](user.id));
    }
};
UserListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.less */ "./src/app/components/users/user-list/user-list.component.less")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/components/users/user/user.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/users/user/user.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci91c2VyLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/components/users/user/user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/users/user/user.component.ts ***!
  \*********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.less */ "./src/app/components/users/user/user.component.less")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/components/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/effects/user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/components/users/user/user.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/components/users/user-list/user-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












const userRoutes = [{ path: '', component: _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"] }];
let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__["UserEditComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(userRoutes),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_7__["UserEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('users', _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["userReducer"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ]
    })
], UsersModule);



/***/ })

}]);
//# sourceMappingURL=app-components-users-users-module-es2015.js.map