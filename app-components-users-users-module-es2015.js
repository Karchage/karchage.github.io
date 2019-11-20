(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-edit/user-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-edit/user-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editUser\">\n  <form [formGroup]=\"edit\" (submit)=\"updateUser()\">\n    <div class=\"inputs\">\n      <input type=\"text\" placeholder=\"name\" formControlName=\"name\">\n      <input type=\"text\" placeholder=\"position\" formControlName=\"position\">\n    </div>\n    <button class=\"btn\" type = \"submit\" [disabled]=\"edit.invalid\">Update</button>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-list/user-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-list/user-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class = \"content\">\n  <table class=\"content-table\">\n    <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>DOB</th>\n      <th>Position</th>\n      <th>Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users$ | async\">\n      <td>{{user.id}}</td>\n      <td>{{user.name}}</td>\n      <td>{{user.DOB | date:'dd/MM/yyyy'}}</td>\n      <td>{{user.position}}</td>\n      <td><ul>\n        <li><a (click)=\"editUser(user)\">Edit</a></li>\n      </ul></td>\n    </tr>\n\n    </tbody>\n  </table>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".editUser {\n  margin: 25px;\n}\n.editUser form {\n  display: flex;\n  width: 100%;\n}\n.inputs {\n  width: 85%;\n  display: flex;\n}\n.inputs input {\n  width: 50%;\n}\nbutton {\n  margin: 0 5px;\n  width: 15%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWVkaXQvQzovVXNlcnMvR2xlYi9EZXNrdG9wL3Byb2plY3QvYW5ndWxhckljaWRlbnQvc3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBREZBO0VBR0ksYUFBQTtFQUNBLFdBQUE7QUNFSjtBREVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNBRjtBREZBO0VBSUksVUFBQTtBQ0NKO0FERUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRVc2Vye1xuICBtYXJnaW46IDI1cHg7XG4gIGZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaW5wdXRze1xuICB3aWR0aDogODUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuYnV0dG9ue1xuICBtYXJnaW46IDAgNXB4O1xuICB3aWR0aDoxNSU7XG59XG4iLCIuZWRpdFVzZXIge1xuICBtYXJnaW46IDI1cHg7XG59XG4uZWRpdFVzZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlucHV0cyB7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5wdXRzIGlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxNSU7XG59XG4iXX0= */");

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






let UserEditComponent = class UserEditComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
    }
    ngOnInit() {
        this.edit = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQubGVzcyJ9 */");

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