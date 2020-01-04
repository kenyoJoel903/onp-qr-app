(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesor-profesor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"wrapper__inner\">\n      <div nz-row [nzGutter]=\"16\">\n        <div nz-col [nzSpan]=\"8\">\n          <nz-breadcrumb>\n            <nz-breadcrumb-item>\n              <i nz-icon nzType=\"home\"></i>\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item>\n              <a><i nz-icon nzType=\"team\"></i><span>Profesores</span></a>\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item>\n              Edición\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </div>\n      </div>\n      <nz-page-header nzBackIcon [nzGhost]=\"false\">\n        <nz-page-header-title>Profesores</nz-page-header-title>\n        <nz-page-header-subtitle>Formulario de Edición</nz-page-header-subtitle>\n\n      </nz-page-header>\n        <div class=\"title-form\">\n            <h3>Modificar Profesor</h3>\n        </div>\n      <div class=\"nell-filter border-form\">\n        <form  nz-form (ngSubmit)=\"validaCampos()\" [formGroup]=\"form\" class=\"login-form\">\n            <nz-spin [nzSpinning]=\"procesando\">\n                <input type=\"hidden\" nz-input formControlName=\"idProfesor\" />\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col  [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Tipo de doocumento</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Seleccione un tipo de documento\">\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar tipo de documento\"\n                                        formControlName=\"tipoDocumento\" nzDisabled>\n                                        <nz-option *ngFor=\"let item of listaTiposDocumentos\" [nzLabel]=\"item.name\"\n                                            [nzValue]=\"item.id\"></nz-option>\n                                    </nz-select>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Nro. de documento</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese número de documento\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese cnúmero de documento\"\n                                formControlName=\"dni\" [disabled]=\"true\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                            <nz-form-item>\n                                <nz-form-label nzRequired>Nombres</nz-form-label>\n                                <nz-form-control nzErrorTip=\"Ingrese número de documento\">\n                                    <input type=\"text\" nz-input placeholder=\"Ingrese nombre\"\n                                    formControlName=\"nombre\" />\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                </div>\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col  [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Apellido Paterno</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese apellido paterno\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese apellido paterno\"\n                                formControlName=\"apellidoPaterno\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Apellido Materno</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese apellido materno\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese apellido materno\"\n                                formControlName=\"apellidoMaterno\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                            <nz-form-item>\n                                <nz-form-label nzRequired>Sexo</nz-form-label>\n                                <nz-form-control nzErrorTip=\"Seleccione sexo\">\n                                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar sexo\"\n                                            formControlName=\"sexo\">\n                                            <nz-option *ngFor=\"let item of listaSexo\" [nzLabel]=\"item.name\"\n                                                [nzValue]=\"item.id\"></nz-option>\n                                        </nz-select>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                </div>\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Telefono</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese telefono\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese telefono\"\n                                formControlName=\"telefono\" maxlength=\"12\"/>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                    \n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Estado</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Seleccione\">\n                                <nz-switch  formControlName=\"activo_flag\"></nz-switch>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                </div>\n                <div nz-row [nzGutter]=\"16\">\n                  <div nz-col [nzSpan]=\"24\">\n                      <div class=\"button-action\">\n                        <button nz-button nzType=\"primary\" type=\"submit\" ><i nz-icon nzType=\"plus\"></i>Guardar</button>\n                        <button nz-button nzType=\"default\" type=\"button\" (click)=\"cancelar()\" ><i nz-icon nzType=\"close\"></i>Cancelar</button>\n                      </div>\n                  </div>\n                </div>\n\n            </nz-spin>\n        </form>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-lista/profesor-lista.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-lista/profesor-lista.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"wrapper__inner\">\n      <div nz-row [nzGutter]=\"16\">\n        <div nz-col [nzSpan]=\"8\">\n          <nz-breadcrumb>\n            <nz-breadcrumb-item>\n              <i nz-icon nzType=\"home\"></i>\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item>\n              <a><i nz-icon nzType=\"team\"></i><span>Profesores</span></a>\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item>\n              Lista\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </div>\n      </div>\n      <nz-page-header nzBackIcon [nzGhost]=\"false\">\n        <nz-page-header-title>Profesores</nz-page-header-title>\n        <nz-page-header-subtitle>Lista de Profesores</nz-page-header-subtitle>\n        <nz-page-header-extra>\n          <button type=\"submit\" nz-button nzType=\"primary\" (click)=\"irNuevo()\">\n            <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Nuevo\n          </button>\n        </nz-page-header-extra>\n      </nz-page-header>\n\n        <div class=\"title-form\">\n            <h3>Búsqueda Profesor</h3>\n        </div>\n        <div class=\"nell-filter border-form\">\n            <!-- <div nz-row [nzGutter]=\"16\">\n                <div nz-col [nzSpan]=\"24\">\n                    <h2 class=\"subtitle\">Búsqueda</h2>\n                </div>\n            </div> -->\n            <form nz-form (ngSubmit)=\"handleFilter()\" [formGroup]=\"form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label>Tipo de documento</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Seleccione un tipo de documento\">\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar tipo de documento\"\n                                    formControlName=\"tipoDocumento\" [nzAutoFocus] = \"true\" nzSize=\"default\">\n                                    <nz-option *ngFor=\"let item of listaTiposDocumentos\" [nzLabel]=\"item.name\"\n                                        [nzValue]=\"item.id\"></nz-option>\n                                </nz-select>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label>Nro. de documento</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese número de documento\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese número de documento\"\n                                    formControlName=\"dni\"  />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label>Apellido Paterno</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese apellido paterno\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese apellido paterno\"\n                                    formControlName=\"apellidoPaterno\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label>Apellido Materno</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese apellido materno\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese apellido materno\"\n                                    formControlName=\"apellidoMaterno\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label>Nombres</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese número de documento\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese nombre\" formControlName=\"nombre\" />\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                </div>\n\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col [nzSpan]=\"24\">\n                        <div class=\"button-action\">\n                            <button type=\"submit\" nz-button nzType=\"primary\" [nzLoading]=\"procesando\"><i nz-icon\n                                    nzType=\"search\"></i>Buscar</button>\n\n                            <button type=\"button\" nz-button nzType=\"default\" [nzLoading]=\"procesando\" (click)=\"cancelarFiltro()\">\n                                <i nz-icon\n                                    nzType=\"close\" ></i>Cancelar</button>\n\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <br/>\n\n        <div nz-row [nzGutter]=\"16\">\n            <div nz-col [nzSpan]=\"24\">\n                <nz-spin [nzSpinning]=\"procesando\">\n                    <nz-table #listaTablaProfesores [nzData]=\"listaProfesores\" nzPaginationPosition=\"bottom\" nzSize=\"small\">\n                        <thead>\n                            <tr>\n                                <th>No.</th>\n                                <th>DNI</th>\n                                <th>Ape. Paterno</th>\n                                <th>Ape. Materno</th>\n                                <th>Nombres</th>\n                                <th>Teléfono</th>\n                                <th>Sexo</th>\n                                <!--th nzShowCheckbox nzShowRowSelection [nzSelections]=\"optionsOfSelecctionProfesores\"\n                                        [(nzChecked)]=\"isAllProfesoresDisplayDataChecked\" [nzIndeterminate]=\"isIndeterminateProfesores\"\n                                        (nzCheckedChange)=\"checkAllProfesores($event)\"></th-->\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let data of listaTablaProfesores.data; let i = index\">\n                                <td>{{i+1}}</td>\n                                <td><a (click)=\"irEditar(data.idProfesor)\" nz-tooltip=\"Editar\">{{data.dni}}</a></td>\n                                <td>{{data.apellidoPaterno}}</td>\n                                <td>{{data.apellidoMaterno}}</td>\n                                <td>{{data.nombre}}</td>\n                                <td>{{data.telefono}}</td>\n                                <td>{{data.sexo }}</td>\n                                <!-- <td>{{data.sexo == 'M' ? 'Masculino' : 'Femenino'}}</td> -->\n                                <!-- <td>{{data.activo == 'A' ? 'Activo' : 'Inactivo'}}</td> -->\n                                <!--td nzShowCheckbox [(nzChecked)]=\"mapOfProfesoresSelected[data.idProfesor]\"\n                                        (nzCheckedChange)=\"refreshStatusProfesores()\"></td-->\n                            </tr>\n                        </tbody>\n                    </nz-table>\n                </nz-spin>\n            </div>\n        </div>\n        <br/>\n        <div nz-row [nzGutter]=\"16\">\n            <div nz-col [nzSpan]=\"24\">\n                <button type=\"button\" nz-button nzType=\"danger\"  *ngIf=\"profesoresSeleccionados.length > 0\"\n                        nz-popconfirm nzTitle=\"¿Está seguro de eliminar los registros seleccionados?\"\n                        (nzOnConfirm)=\"eliminarSeleccionados()\">\n                    <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Eliminar\n                </button>\n\n                <button type=\"button\" nz-button nzType=\"primary\" *ngIf=\"profesoresSeleccionados.length == 1\"\n                (click)=\"clonarSeleccionado()\">\n                    <i nz-icon nzType=\"copy\" nzTheme=\"outline\"></i>Clonar\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"wrapper__inner\">\n      <div nz-row [nzGutter]=\"16\">\n        <div nz-col [nzSpan]=\"8\">\n          <nz-breadcrumb>\n            <nz-breadcrumb-item>\n              <i nz-icon nzType=\"home\"></i>\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item>\n              <a><i nz-icon nzType=\"team\"></i><span>Profesores</span></a>\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item>\n              Agregar\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </div>\n      </div>\n      <nz-page-header nzBackIcon [nzGhost]=\"false\">\n        <nz-page-header-title>Profesores</nz-page-header-title>\n        <nz-page-header-subtitle>Formulario de Registro</nz-page-header-subtitle>\n\n      </nz-page-header>\n      <div class=\"title-form\">\n        <h3>Nuevo Profesor</h3>\n      </div>\n      <div class=\"nell-filter border-form\">\n        <form  nz-form (ngSubmit)=\"validaCampos()\" [formGroup]=\"form\" class=\"login-form\">\n            <nz-spin [nzSpinning]=\"procesando\">\n                <input type=\"hidden\" nz-input formControlName=\"idProfesor\" />\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col  [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Tipo de documento</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Seleccione un tipo de documento\">\n                                <nz-select nzAllowClear\n                                (ngModelChange)=\"changeTipDoc($event)\"\n                                nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar tipo de documento\"\n                                        formControlName=\"tipoDocumento\" [nzAutoFocus] = \"true\">\n                                        <nz-option *ngFor=\"let item of listaTiposDocumentos\" [nzLabel]=\"item.name\"\n                                            [nzValue]=\"item.id\"></nz-option>\n                                    </nz-select>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Nro. de documento</nz-form-label>\n                            <nz-form-control [nzErrorTip]=\"userErrorTpl\">\n                                    <input type=\"text\" nz-input placeholder=\"Ingrese número de documento\"\n                                    formControlName=\"dni\" (keypress)=\"numberOnly($event)\" />\n                                    <ng-template #userErrorTpl let-control2>\n                                        <ng-container *ngIf=\"control2.hasError('required')\">\n                                            Ingrese número de documento\n                                        </ng-container>\n                                        <ng-container *ngIf=\"control2.hasError('confirm')\">\n                                            Longitud de documento incorrecta\n                                        </ng-container>\n                                        <ng-container *ngIf=\"control2.hasError('confirm2')\">\n                                            Debe de seleccionar un tipo de documento\n                                        </ng-container>  \n                                      </ng-template>\n                                </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                            <nz-form-item>\n                                <nz-form-label nzRequired>Nombres</nz-form-label>\n                                <nz-form-control nzErrorTip=\"Ingrese nombre\">\n                                    <input type=\"text\" nz-input placeholder=\"Ingrese nombre\"\n                                    formControlName=\"nombre\" />\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                </div>\n                <div nz-row [nzGutter]=\"16\">\n                    <div nz-col  [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Apellido Paterno</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese apellido paterno\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese apellido paterno\"\n                                formControlName=\"apellidoPaterno\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Apellido Materno</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Ingrese apellido materno\">\n                                <input type=\"text\" nz-input placeholder=\"Ingrese apellido materno\"\n                                formControlName=\"apellidoMaterno\" />\n                            </nz-form-control>\n\n                        </nz-form-item>\n                    </div>\n\n                    <div nz-col [nzSpan]=\"8\">\n                            <nz-form-item>\n                                <nz-form-label nzRequired>Sexo</nz-form-label>\n                                <nz-form-control nzErrorTip=\"Seleccione sexo\">\n                                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar sexo\"\n                                            formControlName=\"sexo\">\n                                            <nz-option *ngFor=\"let item of listaSexo\" [nzLabel]=\"item.name\"\n                                                [nzValue]=\"item.id\"></nz-option>\n                                        </nz-select>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                   \n                </div>\n                <div nz-row [nzGutter]=\"16\">\n                        <div nz-col [nzSpan]=\"8\">\n                                <nz-form-item>\n                                    <nz-form-label nzRequired>Teléfono</nz-form-label>\n                                    <nz-form-control nzErrorTip=\"Ingrese número de teléfono\">\n                                        <input type=\"text\" nz-input placeholder=\"Ingrese número de teléfono\"\n                                        formControlName=\"telefono\" />\n                                    </nz-form-control>\n                                </nz-form-item>\n                            </div>\n                    \n                    <div nz-col [nzSpan]=\"8\">\n                        <nz-form-item>\n                            <nz-form-label nzRequired>Estado</nz-form-label>\n                            <nz-form-control nzErrorTip=\"Seleccione estado\">\n                                <nz-switch  formControlName=\"activo_flag\"></nz-switch>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </div>\n                </div>\n                <div nz-row [nzGutter]=\"16\">\n                  <div nz-col [nzSpan]=\"24\">\n                      <div class=\"button-action\">\n                        <button nz-button nzType=\"primary\" type=\"submit\" ><i nz-icon nzType=\"plus\"></i>Guardar</button>\n                        &nbsp;&nbsp;\n                        <button nz-button nzType=\"default\" type=\"button\" (click)=\"cancelar()\" ><i nz-icon nzType=\"close\"></i>Cancelar</button>\n                      </div>\n                  </div>\n                </div>\n            </nz-spin>\n        </form>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-shell/profesor-shell.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-shell/profesor-shell.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-form{\n    border-radius: 0 0 20px 20px;\n    margin-top: 0 !important;\n}\n.title-form{\n  display: inline-block;\n  background-color: #60808d;;\n  width: 100%;\n  border-radius: 15px 15px 0 0;\n  padding: 15px;\n}\n.title-form h3{\n    color: white;\n    margin: 0!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmVzb3IvcHJvZmVzb3ItZWRpY2lvbi9wcm9mZXNvci1lZGljaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmO0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmVzb3IvcHJvZmVzb3ItZWRpY2lvbi9wcm9mZXNvci1lZGljaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLWZvcm17XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4udGl0bGUtZm9ybXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA4MDhkOztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50aXRsZS1mb3JtIGgze1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfesorEdicionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorEdicionComponent", function() { return ProfesorEdicionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profesor.service */ "./src/app/services/profesor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_cn_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cn-data.service */ "./src/app/services/cn-data.service.ts");








let ProfesorEdicionComponent = class ProfesorEdicionComponent {
    constructor(profesorService, activatedRoute, formBuilder, message, router, cnDataService, modalService) {
        this.profesorService = profesorService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.message = message;
        this.router = router;
        this.cnDataService = cnDataService;
        this.modalService = modalService;
        this.profesorSeleccionado = {};
        this.procesando = false;
        this.listaTiposDocumentos = [];
        this.listaSexo = [];
    }
    ngOnInit() {
        this._loadLists();
        this._createForm();
        this._loadInit();
    }
    _loadLists() {
        this.procesando = true;
        this.cnDataService.getCnData('sexo')
            .then(res => {
            this.listaSexo = res;
        });
        this.cnDataService.getCnData('tipo_documentos')
            .then(res => {
            this.listaTiposDocumentos = res;
        });
        this.procesando = false;
    }
    _loadInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
                if (this.id > 0) {
                    this.profesorService.getProfesor(this.id).toPromise()
                        .then(res => {
                        if (res['codigo'] == 100) {
                            this.profesorSeleccionado = res['data'];
                            this._updateForm();
                        }
                    });
                }
            }
            catch (error) {
            }
        });
    }
    _createForm() {
        this.form = this.formBuilder.group({
            idProfesor: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            apellidoPaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            apellidoMaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            activo_flag: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    _updateForm() {
        let tipoDoc = this.profesorSeleccionado['tipoDocumento'];
        tipoDoc = tipoDoc.trim().trim();
        let activo = this.profesorSeleccionado['activo'] == 'A' ? true : false;
        this.form.controls['tipoDocumento'].setValue(tipoDoc);
        this.form.controls['dni'].setValue(this.profesorSeleccionado['dni']);
        this.form.controls['nombre'].setValue(this.profesorSeleccionado['nombre']);
        this.form.controls['apellidoPaterno'].setValue(this.profesorSeleccionado['apellidoPaterno']);
        this.form.controls['apellidoMaterno'].setValue(this.profesorSeleccionado['apellidoMaterno']);
        this.form.controls['sexo'].setValue(this.profesorSeleccionado['sexo']);
        this.form.controls['telefono'].setValue(this.profesorSeleccionado['telefono']);
        this.form.controls['activo_flag'].setValue(activo);
        this.form.controls['idProfesor'].setValue(this.id);
    }
    _createMessage(type, message) {
        this.message.create(type, `${message}`);
    }
    validaCampos() {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        this.procesando = true;
        if (this.form.status === 'VALID') {
            this.procesando = false;
            this.modalConfirm();
        }
        else {
            this.procesando = false;
            this.message.error('Ingresar todos los campos obligatorios');
        }
    }
    modalConfirm() {
        this.modalService.confirm({
            nzTitle: 'Actualizar Profesor',
            nzContent: '¿Estás seguro de modificar los datos del profesor?',
            nzCancelText: 'NO',
            nzOkText: 'SI',
            nzOnOk: () => new Promise((resolve, reject) => {
                this.guardar();
                resolve();
            })
        });
    }
    guardar() {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        this.procesando = true;
        if (this.form.status === 'VALID') {
            let _data = this.form.value;
            if (_data.activo_flag === true) {
                _data.activo = 'A';
            }
            else {
                _data.activo = 'I';
            }
            _data.nombre = new String(_data.nombre).toUpperCase();
            _data.apellidoPaterno = new String(_data.apellidoPaterno).toUpperCase();
            _data.apellidoMaterno = new String(_data.apellidoMaterno).toUpperCase();
            delete _data.activo_flag;
            console.log(_data);
            this.profesorService.create(_data).toPromise()
                .then(res => {
                this.procesando = false;
                if (res['codigo'] === '100') {
                    this.message.success('Se han actualizado los datos del profesor con éxito.');
                    this.form.reset();
                    this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultRoute}/profesor/lista`]);
                }
                else {
                    this.message.success(res['message']);
                }
            }, err => {
                this.procesando = false;
                this.message.error(`Hubo un error al procesar en la modificación. Error ${err.status}: ${err.statusText}`);
            });
        }
        else {
            this.procesando = false;
            this.message.error('Ingresar todos los campos obligatorios');
        }
    }
    cancelar() {
        this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultRoute}/profesor/lista`]);
    }
};
ProfesorEdicionComponent.ctorParameters = () => [
    { type: src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_3__["ProfesorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_cn_data_service__WEBPACK_IMPORTED_MODULE_7__["CnDataService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
ProfesorEdicionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profesor-edicion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profesor-edicion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profesor-edicion.component.css */ "./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.css")).default]
    })
], ProfesorEdicionComponent);



/***/ }),

/***/ "./src/app/pages/profesor/profesor-lista/profesor-lista.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-lista/profesor-lista.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tr:nth-child(even) {\n    background-color: #E3F2FD;\n}\n\n.border-form{\n    border-radius: 0 0 20px 20px;\n    margin-top: 0 !important;\n}\n\n.title-form{\n    display: inline-block;\n    background-color: #60808d;\n    width: 100%;\n    border-radius: 15px 15px 0 0;\n    padding: 15px;\n}\n\n.title-form h3{\n    color: white;\n    margin: 0!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmVzb3IvcHJvZmVzb3ItbGlzdGEvcHJvZmVzb3ItbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9mZXNvci9wcm9mZXNvci1saXN0YS9wcm9mZXNvci1saXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xufVxuXG4uYm9yZGVyLWZvcm17XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4udGl0bGUtZm9ybXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwODA4ZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50aXRsZS1mb3JtIGgze1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/profesor/profesor-lista/profesor-lista.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-lista/profesor-lista.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfesorListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorListaComponent", function() { return ProfesorListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profesor.service */ "./src/app/services/profesor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ProfesorListaComponent = class ProfesorListaComponent {
    constructor(profesorService, message, router, formBuilder, modalService) {
        this.profesorService = profesorService;
        this.message = message;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.procesando = false;
        this.listaProfesores = [];
        this.listaTiposDocumentos = [];
        this.listaSexo = [];
        this.optionsOfSelecctionProfesores = [
            {
                text: 'Seleccionar todos',
                onSelect: () => {
                    this.checkAllProfesores(true);
                }
            }
        ];
        this.mapOfProfesoresSelected = {};
        this.isAllProfesoresDisplayDataChecked = false;
        this.isIndeterminateProfesores = false;
        this.profesoresSeleccionados = [];
    }
    ngOnInit() {
        this._loadLists();
        this._createForm();
        this._getProfesores();
    }
    _loadLists() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaTiposDocumentos.push({ 'id': '0101', 'name': 'Documento nacional de identidad' });
            this.listaTiposDocumentos.push({ 'id': '0102', 'name': 'Carné de extranjeria' });
            this.listaSexo.push("Femenino");
            this.listaSexo.push("Masculino");
        });
    }
    _createForm() {
        this.form = this.formBuilder.group({
            tipoDocumento: [''],
            dni: [''],
            nombre: [''],
            apellidoPaterno: [''],
            apellidoMaterno: ['']
        });
    }
    _getProfesores() {
        this.procesando = true;
        this.profesorService.getAll().toPromise()
            .then(res => {
            this.listaProfesores = res['data'] || [];
            this.procesando = false;
            this.profesoresSeleccionados = [];
            //this.message.success('Datos fueron recuperados on éxito.');
        }, err => {
            this.procesando = false;
            this.message.error('ocurrió un error al realizar esta operación');
        });
    }
    irEditar(id) {
        this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultRoute}/profesor/modificar/${id}`]);
    }
    irNuevo() {
        this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultRoute}/profesor/nuevo`]);
    }
    eliminar(id) {
        this.modalService.confirm({
            nzTitle: 'Eliminar registro',
            nzContent: '¿Estás seguro de eliminar este registro?',
            nzOnOk: () => new Promise((resolve, reject) => {
                this.profesorService.delete(id).subscribe(() => {
                    this._getProfesores();
                    this.message.success('Se eliminó registro satisfactoriamente.');
                    resolve();
                });
            })
        });
    }
    eliminarSeleccionados() {
        this.procesando = true;
        this.profesorService.deleteGroup(this.profesoresSeleccionados).toPromise()
            .then(res => {
            if (res['codigo'] == 100) {
                this.message.success('Se eliminó registros satisfactoriamente.');
                this.procesando = false;
                this._getProfesores();
            }
            else {
                this.message.error("Error al realizar esta operación");
                this.procesando = false;
            }
        }, err => {
            this.message.error("Error al realizar esta operación");
            this.procesando = false;
        });
        this.profesoresSeleccionados = [];
    }
    clonarSeleccionado() {
        this.procesando = true;
        this.profesorService.getProfesor(this.profesoresSeleccionados[0]).toPromise()
            .then(res => {
            if (res['codigo'] == 100) {
                let clonado = res['data'];
                delete clonado.idProfesor;
                this.profesorService.create(clonado).toPromise()
                    .then(_res => {
                    if (_res['codigo'] == 100) {
                        this.procesando = false;
                        this._getProfesores();
                    }
                    else {
                        this.procesando = false;
                        this.message.error('No se puede clonar este registro');
                    }
                }, _err => {
                    this.procesando = false;
                    this.message.error('No se puede clonar este registro');
                });
            }
            else {
                this.procesando = false;
                this.message.error('No se puede clonar este registro');
            }
        }, err => {
            this.procesando = false;
            this.message.error('Ocurrió un error al realizar esta operación');
        });
    }
    handleFilter() {
        let _data = this.form.value;
        _data.nombre = _data.nombre != null ? new String(_data.nombre).toUpperCase() : null;
        _data.apellidoPaterno = _data.apellidoPaterno != null ? new String(_data.apellidoPaterno).toUpperCase() : null;
        _data.apellidoMaterno = _data.apellidoMaterno != null ? new String(_data.apellidoMaterno).toUpperCase() : null;
        this.procesando = true;
        this.profesorService.filter(_data).toPromise()
            .then(res => {
            this.listaProfesores = res['data'] || [];
            this.procesando = false;
            //this.message.success('Datos fueron recuperados on éxito.');
            this.profesoresSeleccionados = [];
        }, err => {
            this.procesando = false;
            this.message.error('ocurrió un error al realizar esta operación');
        });
    }
    cancelarFiltro() {
        this.form.reset();
        this._getProfesores();
    }
    checkAllProfesores(value) {
        this.listaProfesores.forEach(item => (this.mapOfProfesoresSelected[item.idProfesor] = value));
        this.refreshStatusProfesores();
    }
    refreshStatusProfesores() {
        this.isAllProfesoresDisplayDataChecked = this.listaProfesores.every(item => this.mapOfProfesoresSelected[item.idProfesor]);
        this.isIndeterminateProfesores = this.listaProfesores.some(item => this.mapOfProfesoresSelected[item.idProfesor] && !this.isAllProfesoresDisplayDataChecked);
        this.profesoresSeleccionados = [];
        for (let i in this.mapOfProfesoresSelected) {
            if (this.mapOfProfesoresSelected[i] == true) {
                this.profesoresSeleccionados.push(Number(i));
            }
        }
    }
};
ProfesorListaComponent.ctorParameters = () => [
    { type: src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_3__["ProfesorService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }
];
ProfesorListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profesor-lista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profesor-lista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-lista/profesor-lista.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profesor-lista.component.css */ "./src/app/pages/profesor/profesor-lista/profesor-lista.component.css")).default]
    })
], ProfesorListaComponent);



/***/ }),

/***/ "./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-form{\n    border-radius: 0 0 20px 20px;\n    margin-top: 0 !important;\n}\n.title-form{\n    display: inline-block;\n    background-color: #60808d;;\n    width: 100%;\n    border-radius: 15px 15px 0 0;\n    padding: 15px;\n}\n.title-form h3{\n    color: white;\n    margin: 0!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmVzb3IvcHJvZmVzb3ItbnVldm8vcHJvZmVzb3ItbnVldm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmVzb3IvcHJvZmVzb3ItbnVldm8vcHJvZmVzb3ItbnVldm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItZm9ybXtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi50aXRsZS1mb3Jte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA4MDhkOztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50aXRsZS1mb3JtIGgze1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfesorNuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorNuevoComponent", function() { return ProfesorNuevoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profesor.service */ "./src/app/services/profesor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_cn_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cn-data.service */ "./src/app/services/cn-data.service.ts");








let ProfesorNuevoComponent = class ProfesorNuevoComponent {
    constructor(formBuilder, message, profesorService, router, cnDataService, modalService) {
        this.formBuilder = formBuilder;
        this.message = message;
        this.profesorService = profesorService;
        this.router = router;
        this.cnDataService = cnDataService;
        this.modalService = modalService;
        this.procesando = false;
        this.listaTiposDocumentos = [];
        this.listaSexo = [];
        // validamos el tipo de documento x longitud
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else {
                var tipDoc = this.form.get('tipoDocumento').value;
                var numDoc = control.value;
                if (tipDoc == '' && numDoc.length == 0) {
                    return { required: true };
                }
                else if (tipDoc == '' && numDoc.length > 0) {
                    return { confirm2: true, error: true };
                }
                else if (tipDoc == '0101' && (numDoc.length < 8 || numDoc.length >= 9)) {
                    return { confirm: true, error: true };
                }
                else if (tipDoc == '0102' && (numDoc.length < 12 || numDoc.length >= 13)) {
                    return { confirm: true, error: true };
                }
                else {
                    return {};
                }
            }
        };
    }
    ngOnInit() {
        this._loadLists();
        this._createForm();
    }
    _loadLists() {
        this.procesando = true;
        this.cnDataService.getCnData('sexo')
            .then(res => {
            this.listaSexo = res;
        });
        this.cnDataService.getCnData('tipo_documentos')
            .then(res => {
            this.listaTiposDocumentos = res;
        });
        this.procesando = false;
    }
    _createForm() {
        this.form = this.formBuilder.group({
            idProfesor: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // dni: ['', Validators.required],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.confirmationValidator]],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            apellidoPaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            apellidoMaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            activo_flag: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    validaCampos() {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        this.procesando = true;
        if (this.form.status === 'VALID') {
            this.procesando = false;
            this.modalConfirm();
        }
        else {
            this.procesando = false;
            this.message.error('Ingresar todos los campos obligatorios');
        }
    }
    modalConfirm() {
        this.modalService.confirm({
            nzTitle: 'Nuevo Profesor',
            nzContent: '¿Estás seguro de crear al profesor?',
            nzCancelText: 'NO',
            nzOkText: 'SI',
            nzOnOk: () => new Promise((resolve, reject) => {
                this.guardar();
                resolve();
            })
        });
    }
    guardar() {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        this.procesando = true;
        if (this.form.status === 'VALID') {
            let _data = this.form.value;
            if (_data.activo_flag === true) {
                _data.activo = 'A';
            }
            else {
                _data.activo = 'I';
            }
            _data.usuarioCreacion = 'JMATOS';
            delete _data.activo_flag;
            delete _data.idProfesor;
            _data.nombre = new String(_data.nombre).toUpperCase();
            _data.apellidoPaterno = new String(_data.apellidoPaterno).toUpperCase();
            _data.apellidoMaterno = new String(_data.apellidoMaterno).toUpperCase();
            this.profesorService.create(_data).toPromise()
                .then(res => {
                this.procesando = false;
                if (res['codigo'] == 100) {
                    this.message.success('El profesor ha sido registrado con éxito.');
                    this.form.reset();
                    this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultRoute}/profesor/lista`]);
                }
                else {
                    this.procesando = false;
                    this.message.error(`Hubo un error al procesar el registro.`);
                }
            }, err => {
                this.procesando = false;
                this.message.error(`Hubo un error al procesar el registro. Error ${err.status}: ${err.statusText}`);
            });
        }
        else {
            this.procesando = false;
            this.message.error('Ingresar todos los campos obligatorios');
        }
    }
    cancelar() {
        this.router.navigate([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultRoute}/evento/lista`]);
    }
    //solo numero del 0 al 9
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    // limpiamos campo de dni cuando cambia el tipo de documento
    changeTipDoc(deviceValue) {
        this.form.get('dni').setValue("");
    }
};
ProfesorNuevoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_4__["ProfesorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_cn_data_service__WEBPACK_IMPORTED_MODULE_7__["CnDataService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
ProfesorNuevoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profesor-nuevo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profesor-nuevo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profesor-nuevo.component.css */ "./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.css")).default]
    })
], ProfesorNuevoComponent);



/***/ }),

/***/ "./src/app/pages/profesor/profesor-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profesor/profesor-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfesorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorRoutingModule", function() { return ProfesorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profesor_shell_profesor_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profesor-shell/profesor-shell.component */ "./src/app/pages/profesor/profesor-shell/profesor-shell.component.ts");
/* harmony import */ var _profesor_edicion_profesor_edicion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profesor-edicion/profesor-edicion.component */ "./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.ts");
/* harmony import */ var _profesor_lista_profesor_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profesor-lista/profesor-lista.component */ "./src/app/pages/profesor/profesor-lista/profesor-lista.component.ts");
/* harmony import */ var _profesor_nuevo_profesor_nuevo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profesor-nuevo/profesor-nuevo.component */ "./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.ts");







const routes = [
    { path: '', component: _profesor_shell_profesor_shell_component__WEBPACK_IMPORTED_MODULE_3__["ProfesorShellComponent"], children: [
            { path: '', redirectTo: 'lista' },
            { path: 'lista', component: _profesor_lista_profesor_lista_component__WEBPACK_IMPORTED_MODULE_5__["ProfesorListaComponent"] },
            { path: 'nuevo', component: _profesor_nuevo_profesor_nuevo_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorNuevoComponent"] },
            { path: 'modificar/:id', component: _profesor_edicion_profesor_edicion_component__WEBPACK_IMPORTED_MODULE_4__["ProfesorEdicionComponent"] }
        ]
    }
];
let ProfesorRoutingModule = class ProfesorRoutingModule {
};
ProfesorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfesorRoutingModule);



/***/ }),

/***/ "./src/app/pages/profesor/profesor-shell/profesor-shell.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-shell/profesor-shell.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n    background: #fff;\n    height: calc(100vh - 52px);\n    overflow-y: auto;\n }\n \n .main-content::-webkit-scrollbar {\n    width: .4em;\n }\n \n .main-content::-webkit-scrollbar-thumb {\n    background-color: #ddd;\n }\n \n .ant-layout-sider-collapsed nz-menu-item>span>span {\n    display: none;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmVzb3IvcHJvZmVzb3Itc2hlbGwvcHJvZmVzb3Itc2hlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0NBQ25COztDQUVBO0lBQ0csV0FBVztDQUNkOztDQUVBO0lBQ0csc0JBQXNCO0NBQ3pCOztDQUVBO0lBQ0csYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc29yL3Byb2Zlc29yLXNoZWxsL3Byb2Zlc29yLXNoZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUycHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gfVxuIFxuIC5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogLjRlbTtcbiB9XG4gXG4gLm1haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gfVxuIFxuIC5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCBuei1tZW51LWl0ZW0+c3Bhbj5zcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profesor/profesor-shell/profesor-shell.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profesor/profesor-shell/profesor-shell.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfesorShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorShellComponent", function() { return ProfesorShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfesorShellComponent = class ProfesorShellComponent {
    constructor() {
        this.isCollapsed = false;
        this.options = [
            {
                icon: 'file-search',
                title: 'Profesores',
                url: '../admin/profesor/lista'
            },
            {
                icon: 'file-add',
                title: 'Eventos',
                url: 'evento'
            },
            {
                icon: 'file-add',
                title: 'Personal',
                url: 'personas'
            },
            {
                icon: 'file-add',
                title: 'Reportes',
                url: 'reportes'
            },
        ];
    }
    ngOnInit() {
    }
    handleCollapse() {
        window.innerWidth < 768 ? this.isCollapsed = true : null;
    }
    collapseChange() {
        window.innerWidth < 768 ? this.isCollapsed = false : null;
    }
};
ProfesorShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profesor-shell',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profesor-shell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profesor/profesor-shell/profesor-shell.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profesor-shell.component.css */ "./src/app/pages/profesor/profesor-shell/profesor-shell.component.css")).default]
    })
], ProfesorShellComponent);



/***/ }),

/***/ "./src/app/pages/profesor/profesor.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profesor/profesor.module.ts ***!
  \***************************************************/
/*! exports provided: ProfesorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorModule", function() { return ProfesorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profesor_shell_profesor_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profesor-shell/profesor-shell.component */ "./src/app/pages/profesor/profesor-shell/profesor-shell.component.ts");
/* harmony import */ var _profesor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profesor-routing.module */ "./src/app/pages/profesor/profesor-routing.module.ts");
/* harmony import */ var _profesor_edicion_profesor_edicion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profesor-edicion/profesor-edicion.component */ "./src/app/pages/profesor/profesor-edicion/profesor-edicion.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _profesor_nuevo_profesor_nuevo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profesor-nuevo/profesor-nuevo.component */ "./src/app/pages/profesor/profesor-nuevo/profesor-nuevo.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _profesor_lista_profesor_lista_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profesor-lista/profesor-lista.component */ "./src/app/pages/profesor/profesor-lista/profesor-lista.component.ts");












let ProfesorModule = class ProfesorModule {
};
ProfesorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _profesor_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfesorRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzPopoverModule"],
        ],
        declarations: [
            _profesor_shell_profesor_shell_component__WEBPACK_IMPORTED_MODULE_3__["ProfesorShellComponent"],
            _profesor_edicion_profesor_edicion_component__WEBPACK_IMPORTED_MODULE_5__["ProfesorEdicionComponent"],
            _profesor_nuevo_profesor_nuevo_component__WEBPACK_IMPORTED_MODULE_8__["ProfesorNuevoComponent"],
            _profesor_lista_profesor_lista_component__WEBPACK_IMPORTED_MODULE_11__["ProfesorListaComponent"]
        ],
        exports: [
            _profesor_shell_profesor_shell_component__WEBPACK_IMPORTED_MODULE_3__["ProfesorShellComponent"],
            _profesor_edicion_profesor_edicion_component__WEBPACK_IMPORTED_MODULE_5__["ProfesorEdicionComponent"]
        ]
    })
], ProfesorModule);



/***/ })

}]);
//# sourceMappingURL=profesor-profesor-module-es2015.js.map