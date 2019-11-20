(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d"], {
        /***/ "./node_modules/@ngrx/entity/fesm2015/entity.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@ngrx/entity/fesm2015/entity.js ***!
          \******************************************************/
        /*! exports provided: createEntityAdapter, Dictionary */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function () { return createEntityAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function () { return Dictionary; });
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * @license NgRx 8.4.0
             * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @template V
             * @return {?}
             */
            function getInitialEntityState() {
                return {
                    ids: [],
                    entities: {},
                };
            }
            /**
             * @template V
             * @return {?}
             */
            function createInitialStateFactory() {
                /**
                 * @param {?=} additionalState
                 * @return {?}
                 */
                function getInitialState(additionalState) {
                    if (additionalState === void 0) { additionalState = {}; }
                    return Object.assign(getInitialEntityState(), additionalState);
                }
                return { getInitialState: getInitialState };
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @template T
             * @return {?}
             */
            function createSelectorsFactory() {
                /**
                 * @param {?=} selectState
                 * @return {?}
                 */
                function getSelectors(selectState) {
                    /** @type {?} */
                    var selectIds = ( /**
                     * @param {?} state
                     * @return {?}
                     */function (state) { return state.ids; });
                    /** @type {?} */
                    var selectEntities = ( /**
                     * @param {?} state
                     * @return {?}
                     */function (state) { return state.entities; });
                    /** @type {?} */
                    var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, ( /**
                     * @param {?} ids
                     * @param {?} entities
                     * @return {?}
                     */function (ids, entities) { return ids.map(( /**
                     * @param {?} id
                     * @return {?}
                     */function (id) { return (( /** @type {?} */(entities)))[id]; })); }));
                    /** @type {?} */
                    var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, ( /**
                     * @param {?} ids
                     * @return {?}
                     */function (/**
                     * @param {?} ids
                     * @return {?}
                     */ ids) { return ids.length; }));
                    if (!selectState) {
                        return {
                            selectIds: selectIds,
                            selectEntities: selectEntities,
                            selectAll: selectAll,
                            selectTotal: selectTotal,
                        };
                    }
                    return {
                        selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
                        selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
                        selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
                        selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
                    };
                }
                return { getSelectors: getSelectors };
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var DidMutate = {
                EntitiesOnly: 0,
                Both: 1,
                None: 2,
            };
            DidMutate[DidMutate.EntitiesOnly] = 'EntitiesOnly';
            DidMutate[DidMutate.Both] = 'Both';
            DidMutate[DidMutate.None] = 'None';
            /**
             * @template V, R
             * @param {?} mutator
             * @return {?}
             */
            function createStateOperator(mutator) {
                return ( /**
                 * @template S
                 * @param {?} arg
                 * @param {?} state
                 * @return {?}
                 */function operation(arg, state) {
                    /** @type {?} */
                    var clonedEntityState = {
                        ids: state.ids.slice(),
                        entities: Object.assign({}, state.entities),
                    };
                    /** @type {?} */
                    var didMutate = mutator(arg, clonedEntityState);
                    if (didMutate === DidMutate.Both) {
                        return Object.assign({}, state, clonedEntityState);
                    }
                    if (didMutate === DidMutate.EntitiesOnly) {
                        return Object.assign({}, state, { entities: clonedEntityState.entities });
                    }
                    return state;
                });
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @template T
             * @param {?} entity
             * @param {?} selectId
             * @return {?}
             */
            function selectIdValue(entity, selectId) {
                /** @type {?} */
                var key = selectId(entity);
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
                    console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
                }
                return key;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @template T
             * @param {?} selectId
             * @return {?}
             */
            function createUnsortedStateAdapter(selectId) {
                /**
                 * @param {?} entity
                 * @param {?} state
                 * @return {?}
                 */
                function addOneMutably(entity, state) {
                    /** @type {?} */
                    var key = selectIdValue(entity, selectId);
                    if (key in state.entities) {
                        return DidMutate.None;
                    }
                    state.ids.push(key);
                    state.entities[key] = entity;
                    return DidMutate.Both;
                }
                /**
                 * @param {?} entities
                 * @param {?} state
                 * @return {?}
                 */
                function addManyMutably(entities, state) {
                    /** @type {?} */
                    var didMutate = false;
                    for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                        var entity = entities_1[_i];
                        didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
                    }
                    return didMutate ? DidMutate.Both : DidMutate.None;
                }
                /**
                 * @param {?} entities
                 * @param {?} state
                 * @return {?}
                 */
                function addAllMutably(entities, state) {
                    state.ids = [];
                    state.entities = {};
                    addManyMutably(entities, state);
                    return DidMutate.Both;
                }
                /**
                 * @param {?} key
                 * @param {?} state
                 * @return {?}
                 */
                function removeOneMutably(key, state) {
                    return removeManyMutably([key], state);
                }
                /**
                 * @param {?} keysOrPredicate
                 * @param {?} state
                 * @return {?}
                 */
                function removeManyMutably(keysOrPredicate, state) {
                    /** @type {?} */
                    var keys = keysOrPredicate instanceof Array
                        ? keysOrPredicate
                        : state.ids.filter(( /**
                         * @param {?} key
                         * @return {?}
                         */function (key) { return keysOrPredicate(state.entities[key]); }));
                    /** @type {?} */
                    var didMutate = keys
                        .filter(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) { return key in state.entities; }))
                        .map(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) { return delete state.entities[key]; })).length > 0;
                    if (didMutate) {
                        state.ids = state.ids.filter(( /**
                         * @param {?} id
                         * @return {?}
                         */function (id) { return id in state.entities; }));
                    }
                    return didMutate ? DidMutate.Both : DidMutate.None;
                }
                /**
                 * @template S
                 * @param {?} state
                 * @return {?}
                 */
                function removeAll(state) {
                    return Object.assign({}, state, {
                        ids: [],
                        entities: {},
                    });
                }
                /**
                 * @param {?} keys
                 * @param {?} update
                 * @param {?} state
                 * @return {?}
                 */
                function takeNewKey(keys, update, state) {
                    /** @type {?} */
                    var original = state.entities[update.id];
                    /** @type {?} */
                    var updated = Object.assign({}, original, update.changes);
                    /** @type {?} */
                    var newKey = selectIdValue(updated, selectId);
                    /** @type {?} */
                    var hasNewKey = newKey !== update.id;
                    if (hasNewKey) {
                        keys[update.id] = newKey;
                        delete state.entities[update.id];
                    }
                    state.entities[newKey] = updated;
                    return hasNewKey;
                }
                /**
                 * @param {?} update
                 * @param {?} state
                 * @return {?}
                 */
                function updateOneMutably(update, state) {
                    return updateManyMutably([update], state);
                }
                /**
                 * @param {?} updates
                 * @param {?} state
                 * @return {?}
                 */
                function updateManyMutably(updates, state) {
                    /** @type {?} */
                    var newKeys = {};
                    updates = updates.filter(( /**
                     * @param {?} update
                     * @return {?}
                     */function (/**
                     * @param {?} update
                     * @return {?}
                     */ update) { return update.id in state.entities; }));
                    /** @type {?} */
                    var didMutateEntities = updates.length > 0;
                    if (didMutateEntities) {
                        /** @type {?} */
                        var didMutateIds = updates.filter(( /**
                         * @param {?} update
                         * @return {?}
                         */function (/**
                         * @param {?} update
                         * @return {?}
                         */ update) { return takeNewKey(newKeys, update, state); })).length > 0;
                        if (didMutateIds) {
                            state.ids = state.ids.map(( /**
                             * @param {?} id
                             * @return {?}
                             */function (id) { return newKeys[id] || id; }));
                            return DidMutate.Both;
                        }
                        else {
                            return DidMutate.EntitiesOnly;
                        }
                    }
                    return DidMutate.None;
                }
                /**
                 * @param {?} map
                 * @param {?} state
                 * @return {?}
                 */
                function mapMutably(map, state) {
                    /** @type {?} */
                    var changes = state.ids.reduce(( /**
                     * @param {?} changes
                     * @param {?} id
                     * @return {?}
                     */function (changes, id) {
                        /** @type {?} */
                        var change = map(state.entities[id]);
                        if (change !== state.entities[id]) {
                            changes.push({ id: id, changes: change });
                        }
                        return changes;
                    }), []);
                    /** @type {?} */
                    var updates = changes.filter(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var id = _a.id;
                        return id in state.entities;
                    }));
                    return updateManyMutably(updates, state);
                }
                /**
                 * @param {?} entity
                 * @param {?} state
                 * @return {?}
                 */
                function upsertOneMutably(entity, state) {
                    return upsertManyMutably([entity], state);
                }
                /**
                 * @param {?} entities
                 * @param {?} state
                 * @return {?}
                 */
                function upsertManyMutably(entities, state) {
                    /** @type {?} */
                    var added = [];
                    /** @type {?} */
                    var updated = [];
                    for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                        var entity = entities_2[_i];
                        /** @type {?} */
                        var id = selectIdValue(entity, selectId);
                        if (id in state.entities) {
                            updated.push({ id: id, changes: entity });
                        }
                        else {
                            added.push(entity);
                        }
                    }
                    /** @type {?} */
                    var didMutateByUpdated = updateManyMutably(updated, state);
                    /** @type {?} */
                    var didMutateByAdded = addManyMutably(added, state);
                    switch (true) {
                        case didMutateByAdded === DidMutate.None &&
                            didMutateByUpdated === DidMutate.None:
                            return DidMutate.None;
                        case didMutateByAdded === DidMutate.Both ||
                            didMutateByUpdated === DidMutate.Both:
                            return DidMutate.Both;
                        default:
                            return DidMutate.EntitiesOnly;
                    }
                }
                return {
                    removeAll: removeAll,
                    addOne: createStateOperator(addOneMutably),
                    addMany: createStateOperator(addManyMutably),
                    addAll: createStateOperator(addAllMutably),
                    updateOne: createStateOperator(updateOneMutably),
                    updateMany: createStateOperator(updateManyMutably),
                    upsertOne: createStateOperator(upsertOneMutably),
                    upsertMany: createStateOperator(upsertManyMutably),
                    removeOne: createStateOperator(removeOneMutably),
                    removeMany: createStateOperator(removeManyMutably),
                    map: createStateOperator(mapMutably),
                };
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @template T
             * @param {?} selectId
             * @param {?} sort
             * @return {?}
             */
            function createSortedStateAdapter(selectId, sort) {
                var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
                /**
                 * @param {?} entity
                 * @param {?} state
                 * @return {?}
                 */
                function addOneMutably(entity, state) {
                    return addManyMutably([entity], state);
                }
                /**
                 * @param {?} newModels
                 * @param {?} state
                 * @return {?}
                 */
                function addManyMutably(newModels, state) {
                    /** @type {?} */
                    var models = newModels.filter(( /**
                     * @param {?} model
                     * @return {?}
                     */function (/**
                     * @param {?} model
                     * @return {?}
                     */ model) { return !(selectIdValue(model, selectId) in state.entities); }));
                    if (models.length === 0) {
                        return DidMutate.None;
                    }
                    else {
                        merge(models, state);
                        return DidMutate.Both;
                    }
                }
                /**
                 * @param {?} models
                 * @param {?} state
                 * @return {?}
                 */
                function addAllMutably(models, state) {
                    state.entities = {};
                    state.ids = [];
                    addManyMutably(models, state);
                    return DidMutate.Both;
                }
                /**
                 * @param {?} update
                 * @param {?} state
                 * @return {?}
                 */
                function updateOneMutably(update, state) {
                    return updateManyMutably([update], state);
                }
                /**
                 * @param {?} models
                 * @param {?} update
                 * @param {?} state
                 * @return {?}
                 */
                function takeUpdatedModel(models, update, state) {
                    if (!(update.id in state.entities)) {
                        return false;
                    }
                    /** @type {?} */
                    var original = state.entities[update.id];
                    /** @type {?} */
                    var updated = Object.assign({}, original, update.changes);
                    /** @type {?} */
                    var newKey = selectIdValue(updated, selectId);
                    delete state.entities[update.id];
                    models.push(updated);
                    return newKey !== update.id;
                }
                /**
                 * @param {?} updates
                 * @param {?} state
                 * @return {?}
                 */
                function updateManyMutably(updates, state) {
                    /** @type {?} */
                    var models = [];
                    /** @type {?} */
                    var didMutateIds = updates.filter(( /**
                     * @param {?} update
                     * @return {?}
                     */function (/**
                     * @param {?} update
                     * @return {?}
                     */ update) { return takeUpdatedModel(models, update, state); })).length >
                        0;
                    if (models.length === 0) {
                        return DidMutate.None;
                    }
                    else {
                        /** @type {?} */
                        var originalIds_1 = state.ids;
                        /** @type {?} */
                        var updatedIndexes_1 = [];
                        state.ids = state.ids.filter(( /**
                         * @param {?} id
                         * @param {?} index
                         * @return {?}
                         */function (id, index) {
                            if (id in state.entities) {
                                return true;
                            }
                            else {
                                updatedIndexes_1.push(index);
                                return false;
                            }
                        }));
                        merge(models, state);
                        if (!didMutateIds &&
                            updatedIndexes_1.every(( /**
                             * @param {?} i
                             * @return {?}
                             */function (i) { return state.ids[i] === originalIds_1[i]; }))) {
                            return DidMutate.EntitiesOnly;
                        }
                        else {
                            return DidMutate.Both;
                        }
                    }
                }
                /**
                 * @param {?} updatesOrMap
                 * @param {?} state
                 * @return {?}
                 */
                function mapMutably(updatesOrMap, state) {
                    /** @type {?} */
                    var updates = state.ids.reduce(( /**
                     * @param {?} changes
                     * @param {?} id
                     * @return {?}
                     */function (changes, id) {
                        /** @type {?} */
                        var change = updatesOrMap(state.entities[id]);
                        if (change !== state.entities[id]) {
                            changes.push({ id: id, changes: change });
                        }
                        return changes;
                    }), []);
                    return updateManyMutably(updates, state);
                }
                /**
                 * @param {?} entity
                 * @param {?} state
                 * @return {?}
                 */
                function upsertOneMutably(entity, state) {
                    return upsertManyMutably([entity], state);
                }
                /**
                 * @param {?} entities
                 * @param {?} state
                 * @return {?}
                 */
                function upsertManyMutably(entities, state) {
                    /** @type {?} */
                    var added = [];
                    /** @type {?} */
                    var updated = [];
                    for (var _i = 0, entities_3 = entities; _i < entities_3.length; _i++) {
                        var entity = entities_3[_i];
                        /** @type {?} */
                        var id = selectIdValue(entity, selectId);
                        if (id in state.entities) {
                            updated.push({ id: id, changes: entity });
                        }
                        else {
                            added.push(entity);
                        }
                    }
                    /** @type {?} */
                    var didMutateByUpdated = updateManyMutably(updated, state);
                    /** @type {?} */
                    var didMutateByAdded = addManyMutably(added, state);
                    switch (true) {
                        case didMutateByAdded === DidMutate.None &&
                            didMutateByUpdated === DidMutate.None:
                            return DidMutate.None;
                        case didMutateByAdded === DidMutate.Both ||
                            didMutateByUpdated === DidMutate.Both:
                            return DidMutate.Both;
                        default:
                            return DidMutate.EntitiesOnly;
                    }
                }
                /**
                 * @param {?} models
                 * @param {?} state
                 * @return {?}
                 */
                function merge(models, state) {
                    models.sort(sort);
                    /** @type {?} */
                    var ids = [];
                    /** @type {?} */
                    var i = 0;
                    /** @type {?} */
                    var j = 0;
                    while (i < models.length && j < state.ids.length) {
                        /** @type {?} */
                        var model = models[i];
                        /** @type {?} */
                        var modelId = selectIdValue(model, selectId);
                        /** @type {?} */
                        var entityId = state.ids[j];
                        /** @type {?} */
                        var entity = state.entities[entityId];
                        if (sort(model, entity) <= 0) {
                            ids.push(modelId);
                            i++;
                        }
                        else {
                            ids.push(entityId);
                            j++;
                        }
                    }
                    if (i < models.length) {
                        state.ids = ids.concat(models.slice(i).map(selectId));
                    }
                    else {
                        state.ids = ids.concat(state.ids.slice(j));
                    }
                    models.forEach(( /**
                     * @param {?} model
                     * @param {?} i
                     * @return {?}
                     */function (model, i) {
                        state.entities[selectId(model)] = model;
                    }));
                }
                return {
                    removeOne: removeOne,
                    removeMany: removeMany,
                    removeAll: removeAll,
                    addOne: createStateOperator(addOneMutably),
                    updateOne: createStateOperator(updateOneMutably),
                    upsertOne: createStateOperator(upsertOneMutably),
                    addAll: createStateOperator(addAllMutably),
                    addMany: createStateOperator(addManyMutably),
                    updateMany: createStateOperator(updateManyMutably),
                    upsertMany: createStateOperator(upsertManyMutably),
                    map: createStateOperator(mapMutably),
                };
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @template T
             * @param {?=} options
             * @return {?}
             */
            function createEntityAdapter(options) {
                if (options === void 0) { options = {}; }
                var _a = Object.assign({ sortComparer: false, selectId: ( /**
                         * @param {?} instance
                         * @return {?}
                         */function (instance) { return instance.id; }) }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
                /** @type {?} */
                var stateFactory = createInitialStateFactory();
                /** @type {?} */
                var selectorsFactory = createSelectorsFactory();
                /** @type {?} */
                var stateAdapter = sortComparer
                    ? createSortedStateAdapter(selectId, sortComparer)
                    : createUnsortedStateAdapter(selectId);
                return Object.assign({ selectId: selectId,
                    sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @abstract
             * @template T
             */
            var Dictionary = /** @class */ (function () {
                function Dictionary() {
                }
                return Dictionary;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=entity.js.map
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.getUsers = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/users.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return Object
                            .keys(response)
                            .map(function (key) { return (Object.assign({}, response[key], { DOB: new Date(response[key].DOB) })); });
                    }));
                };
                UserService.prototype.getUserById = function (payload) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/users/" + payload + ".json");
                };
                UserService.prototype.createUser = function (payload) {
                    return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/users/" + payload.id + ".json", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return Object.assign({}, payload, { id: response.name, DOB: new Date(payload.DOB) });
                    }));
                };
                UserService.prototype.updateUser = function (user) {
                    return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl + "/users/" + user.id + ".json", user);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/store/effects/user.effects.ts": 
        /*!***********************************************!*\
          !*** ./src/app/store/effects/user.effects.ts ***!
          \***********************************************/
        /*! exports provided: UserEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function () { return UserEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var UserEffects = /** @class */ (function () {
                function UserEffects(actions$, userService) {
                    var _this = this;
                    this.actions$ = actions$;
                    this.userService = userService;
                    this.loadUsers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].LOAD_USERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (users) { return new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUsersSuccess"](users); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUsersFail"](err)); })); }));
                    this.loadUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].LOAD_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.userService.getUserById(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) { return new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUserSuccess"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUserFail"](err)); })); }));
                    this.createUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].CREATE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (user) { return _this.userService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (newUser) { return new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUserSuccess"](newUser); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUserFail"](err)); })); }));
                    this.updateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].UPDATE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (user) { return _this.userService.updateUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (updateUser) { return new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserSuccess"]({
                        id: updateUser.id,
                        changes: updateUser
                    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserFail"](err)); })); }));
                }
                return UserEffects;
            }());
            UserEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/store/reducers/user.reducer.ts": 
        /*!************************************************!*\
          !*** ./src/app/store/reducers/user.reducer.ts ***!
          \************************************************/
        /*! exports provided: userAdapter, defaultUser, initialState, userReducer, getUsers, getUsersLoading, getUsersLoaded, getUsersError, getCurrentUserId, getCurrentUser */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAdapter", function () { return userAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUser", function () { return defaultUser; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function () { return userReducer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function () { return getUsers; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoading", function () { return getUsersLoading; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function () { return getUsersLoaded; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersError", function () { return getUsersError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserId", function () { return getCurrentUserId; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function () { return getCurrentUser; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
            var userAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_3__["createEntityAdapter"])();
            var defaultUser = {
                ids: [],
                entities: {},
                selectedUserId: null,
                loading: false,
                loaded: false,
                error: ''
            };
            var initialState = userAdapter.getInitialState(defaultUser);
            function userReducer(state, action) {
                if (state === void 0) { state = initialState; }
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
            var getUserFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('users');
            var getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, userAdapter.getSelectors().selectAll);
            var getUsersLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, function (state) { return state.loading; });
            var getUsersLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, function (state) { return state.loaded; });
            var getUsersError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, function (state) { return state.error; });
            var getCurrentUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, function (state) { return state.selectedUserId; });
            var getCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserFeatureState, getCurrentUserId, function (state) { return state.entities[state.selectedUserId]; });
            /***/ 
        })
    }]);
//# sourceMappingURL=default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d-es2015.js.map
//# sourceMappingURL=default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d-es5.js.map
//# sourceMappingURL=default~app-components-incidents-incidents-module~app-components-process-process-module~app-componen~c190ce4d-es5.js.map