(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-incidents-incidents-module~app-components-process-process-module"], {
        /***/ "./src/app/services/process.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/process.service.ts ***!
          \*********************************************/
        /*! exports provided: ProcessService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessService", function () { return ProcessService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProcessService = /** @class */ (function () {
                function ProcessService(http) {
                    this.http = http;
                }
                ProcessService.prototype.getProcess = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/process.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return Object
                            .keys(response)
                            .map(function (key) { return (Object.assign({}, response[key])); });
                    }));
                };
                ProcessService.prototype.getProcessById = function (payload) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/process/" + payload + ".json");
                };
                ProcessService.prototype.createProcess = function (payload) {
                    return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/process/" + payload.id + ".json", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return Object.assign({}, payload, { id: response.name });
                    }));
                };
                ProcessService.prototype.updateProcess = function (process) {
                    return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/process/" + process.id + ".json", process);
                };
                ProcessService.prototype.deleteProcess = function (payload) {
                    return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/process/" + payload + ".json");
                };
                return ProcessService;
            }());
            ProcessService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ProcessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProcessService);
            /***/ 
        }),
        /***/ "./src/app/store/actions/process.action.ts": 
        /*!*************************************************!*\
          !*** ./src/app/store/actions/process.action.ts ***!
          \*************************************************/
        /*! exports provided: ProcessActionType, LoadProcesses, LoadProcessesSuccess, LoadProcessesFail, LoadProcess, LoadProcessSuccess, LoadProcessFail, CreateProcess, CreateProcessSuccess, CreateProcessFail, UpdateProcess, UpdateProcessSuccess, UpdateProcessFail, DeleteProcess, DeleteProcessSuccess, DeleteProcessFail */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessActionType", function () { return ProcessActionType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcesses", function () { return LoadProcesses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcessesSuccess", function () { return LoadProcessesSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcessesFail", function () { return LoadProcessesFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcess", function () { return LoadProcess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcessSuccess", function () { return LoadProcessSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcessFail", function () { return LoadProcessFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProcess", function () { return CreateProcess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProcessSuccess", function () { return CreateProcessSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProcessFail", function () { return CreateProcessFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProcess", function () { return UpdateProcess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProcessSuccess", function () { return UpdateProcessSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProcessFail", function () { return UpdateProcessFail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProcess", function () { return DeleteProcess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProcessSuccess", function () { return DeleteProcessSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProcessFail", function () { return DeleteProcessFail; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ProcessActionType;
            (function (ProcessActionType) {
                ProcessActionType["LOAD_PROCESSES"] = "[Process] Load Processes";
                ProcessActionType["LOAD_PROCESSES_SUCCESS"] = "[Process] Load Processes Success";
                ProcessActionType["LOAD_PROCESSES_FAIL"] = "[Process] Load Processes Fail";
                ProcessActionType["LOAD_PROCESS"] = "[Process] Load Process";
                ProcessActionType["LOAD_PROCESS_SUCCESS"] = "[Process] Load Process Success";
                ProcessActionType["LOAD_PROCESS_FAIL"] = "[Process] Load Process Fail";
                ProcessActionType["CREATE_PROCESS"] = "[Process] Create Process";
                ProcessActionType["CREATE_PROCESS_SUCCESS"] = "[Process] Create Process Success";
                ProcessActionType["CREATE_PROCESS_FAIL"] = "[Process] Create Process Fail";
                ProcessActionType["UPDATE_PROCESS"] = "[Process] Update Process";
                ProcessActionType["UPDATE_PROCESS_SUCCESS"] = "[Process] Update Process Success";
                ProcessActionType["UPDATE_PROCESS_FAIL"] = "[Process] Update Process Fail";
                ProcessActionType["DELETE_PROCESS"] = "[Process] Delete Process";
                ProcessActionType["DELETE_PROCESS_SUCCESS"] = "[Process] Delete Process Success";
                ProcessActionType["DELETE_PROCESS_FAIL"] = "[Process] Delete Process Fail";
            })(ProcessActionType || (ProcessActionType = {}));
            var LoadProcesses = /** @class */ (function () {
                function LoadProcesses() {
                    this.type = ProcessActionType.LOAD_PROCESSES;
                }
                return LoadProcesses;
            }());
            var LoadProcessesSuccess = /** @class */ (function () {
                function LoadProcessesSuccess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.LOAD_PROCESSES_SUCCESS;
                }
                return LoadProcessesSuccess;
            }());
            var LoadProcessesFail = /** @class */ (function () {
                function LoadProcessesFail(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.LOAD_PROCESSES_FAIL;
                }
                return LoadProcessesFail;
            }());
            var LoadProcess = /** @class */ (function () {
                function LoadProcess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.LOAD_PROCESS;
                }
                return LoadProcess;
            }());
            var LoadProcessSuccess = /** @class */ (function () {
                function LoadProcessSuccess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.LOAD_PROCESS_SUCCESS;
                }
                return LoadProcessSuccess;
            }());
            var LoadProcessFail = /** @class */ (function () {
                function LoadProcessFail(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.LOAD_PROCESS_FAIL;
                }
                return LoadProcessFail;
            }());
            var CreateProcess = /** @class */ (function () {
                function CreateProcess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.CREATE_PROCESS;
                }
                return CreateProcess;
            }());
            var CreateProcessSuccess = /** @class */ (function () {
                function CreateProcessSuccess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.CREATE_PROCESS_SUCCESS;
                }
                return CreateProcessSuccess;
            }());
            var CreateProcessFail = /** @class */ (function () {
                function CreateProcessFail(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.CREATE_PROCESS_FAIL;
                }
                return CreateProcessFail;
            }());
            var UpdateProcess = /** @class */ (function () {
                function UpdateProcess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.UPDATE_PROCESS;
                }
                return UpdateProcess;
            }());
            var UpdateProcessSuccess = /** @class */ (function () {
                function UpdateProcessSuccess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.UPDATE_PROCESS_SUCCESS;
                }
                return UpdateProcessSuccess;
            }());
            var UpdateProcessFail = /** @class */ (function () {
                function UpdateProcessFail(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.UPDATE_PROCESS_FAIL;
                }
                return UpdateProcessFail;
            }());
            var DeleteProcess = /** @class */ (function () {
                function DeleteProcess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.DELETE_PROCESS;
                }
                return DeleteProcess;
            }());
            var DeleteProcessSuccess = /** @class */ (function () {
                function DeleteProcessSuccess(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.DELETE_PROCESS_SUCCESS;
                }
                return DeleteProcessSuccess;
            }());
            var DeleteProcessFail = /** @class */ (function () {
                function DeleteProcessFail(payload) {
                    this.payload = payload;
                    this.type = ProcessActionType.DELETE_PROCESS_FAIL;
                }
                return DeleteProcessFail;
            }());
            /***/ 
        }),
        /***/ "./src/app/store/effects/process.effects.ts": 
        /*!**************************************************!*\
          !*** ./src/app/store/effects/process.effects.ts ***!
          \**************************************************/
        /*! exports provided: ProcessEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessEffects", function () { return ProcessEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _actions_process_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_process_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/process.service */ "./src/app/services/process.service.ts");
            var ProcessEffects = /** @class */ (function () {
                function ProcessEffects(actions$, processService) {
                    var _this = this;
                    this.actions$ = actions$;
                    this.processService = processService;
                    this.loadProcesses$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["ProcessActionType"].LOAD_PROCESSES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) { return _this.processService.getProcess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (processes) { return new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcessesSuccess"](processes); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcessesFail"](error)); })); }));
                    this.loadProcess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["ProcessActionType"].LOAD_PROCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) { return _this.processService.getProcessById(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (process) { return new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcessSuccess"](process); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["LoadProcessFail"](error)); })); }));
                    this.createProcess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["ProcessActionType"].CREATE_PROCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (process) { return _this.processService.createProcess(process).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (newProcess) { return new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["CreateProcessSuccess"](newProcess); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["CreateProcessFail"](err)); })); }));
                    this.updateProcess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["ProcessActionType"].UPDATE_PROCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (process) { return _this.processService.updateProcess(process).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (updateProcess) { return new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["UpdateProcessSuccess"]({
                        id: updateProcess.id,
                        changes: updateProcess
                    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["UpdateProcessFail"](err)); })); }));
                    this.deleteProcess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_process_action__WEBPACK_IMPORTED_MODULE_3__["ProcessActionType"].DELETE_PROCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (id) { return _this.processService.deleteProcess(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProcessSuccess"](id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_process_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProcessFail"](error)); })); }));
                }
                return ProcessEffects;
            }());
            ProcessEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
                { type: _services_process_service__WEBPACK_IMPORTED_MODULE_6__["ProcessService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProcessEffects.prototype, "loadProcesses$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProcessEffects.prototype, "loadProcess$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProcessEffects.prototype, "createProcess$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProcessEffects.prototype, "updateProcess$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProcessEffects.prototype, "deleteProcess$", void 0);
            ProcessEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ProcessEffects);
            /***/ 
        }),
        /***/ "./src/app/store/reducers/process.reducer.ts": 
        /*!***************************************************!*\
          !*** ./src/app/store/reducers/process.reducer.ts ***!
          \***************************************************/
        /*! exports provided: processAdapter, defaultProcess, initialState, processReducer, getProcesses, getProcessesLoadding, getProcessesLoaded, getProcessesError, getCurrentProcessId, getCurrentProcess */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAdapter", function () { return processAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProcess", function () { return defaultProcess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processReducer", function () { return processReducer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcesses", function () { return getProcesses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessesLoadding", function () { return getProcessesLoadding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessesLoaded", function () { return getProcessesLoaded; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessesError", function () { return getProcessesError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProcessId", function () { return getCurrentProcessId; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProcess", function () { return getCurrentProcess; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
            /* harmony import */ var _actions_process_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/process.action */ "./src/app/store/actions/process.action.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var processAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
            var defaultProcess = {
                ids: [],
                entities: {},
                selectedProcessId: null,
                loading: false,
                loaded: false,
                error: ''
            };
            var initialState = processAdapter.getInitialState(defaultProcess);
            function processReducer(state, action) {
                if (state === void 0) { state = initialState; }
                switch (action.type) {
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].LOAD_PROCESSES_SUCCESS: {
                        return processAdapter.addAll(action.payload, Object.assign({}, state, { loading: false, loaded: true }));
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].LOAD_PROCESSES_FAIL: {
                        return Object.assign({}, state, { entities: {}, loading: false, loaded: false, error: action.payload });
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].LOAD_PROCESS_SUCCESS: {
                        return processAdapter.addOne(action.payload, Object.assign({}, state, { selectedProcessId: action.payload.id }));
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].LOAD_PROCESS_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].CREATE_PROCESS_SUCCESS: {
                        return processAdapter.addOne(action.payload, state);
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].CREATE_PROCESS_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].UPDATE_PROCESS_SUCCESS: {
                        return processAdapter.updateOne(action.payload, state);
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].UPDATE_PROCESS_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].DELETE_PROCESS_SUCCESS: {
                        return processAdapter.removeOne(action.payload, state);
                    }
                    case _actions_process_action__WEBPACK_IMPORTED_MODULE_2__["ProcessActionType"].DELETE_PROCESS_FAIL: {
                        return Object.assign({}, state, { error: action.payload });
                    }
                    default: {
                        return state;
                    }
                }
            }
            var getProcessFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('processes');
            var getProcesses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getProcessFeatureState, processAdapter.getSelectors().selectAll);
            var getProcessesLoadding = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getProcessFeatureState, function (state) { return state.loading; });
            var getProcessesLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getProcessFeatureState, function (state) { return state.loaded; });
            var getProcessesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getProcessFeatureState, function (state) { return state.error; });
            var getCurrentProcessId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getProcessFeatureState, function (state) { return state.selectedProcessId; });
            var getCurrentProcess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getProcessFeatureState, getCurrentProcessId, function (state) { return state.entities[state.selectedProcessId]; });
            /***/ 
        })
    }]);
//# sourceMappingURL=default~app-components-incidents-incidents-module~app-components-process-process-module-es2015.js.map
//# sourceMappingURL=default~app-components-incidents-incidents-module~app-components-process-process-module-es5.js.map
//# sourceMappingURL=default~app-components-incidents-incidents-module~app-components-process-process-module-es5.js.map