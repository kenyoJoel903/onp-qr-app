(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/profesor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/profesor.service.ts ***!
  \**********************************************/
/*! exports provided: ProfesorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorService", function() { return ProfesorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProfesorService = class ProfesorService {
    constructor(api) {
        this.api = api;
        this._path = 'profesor';
    }
    getPaginado(page) {
        return this.api.get(`${this._path}?page=${page ? page : 1}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    filter(data) {
        return this.api.post(`${this._path}/find/criteria`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getAll(page) {
        return this.api.get(`${this._path}/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getProfesor(id) {
        return this.api.get(`${this._path}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    create(data) {
        return this.api.post(`${this._path}/create`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    update(person) {
        return this.api.put(`${this._path}`, person).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    delete(id) {
        return this.api.delete(`${this._path}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    deleteGroup(ids) {
        return this.api.post(`${this._path}/delete`, ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
};
ProfesorService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ProfesorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfesorService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map