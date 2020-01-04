(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-layout-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/layout/wrapper/wrapper.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/layout/wrapper/wrapper.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout class=\"layout\">\n    <nz-spin [nzSpinning]=\"isLoading\" size=\"large\">\n        <nz-layout>\n          <nz-sider\n\n            [nzCollapsed]=\"isCollapsed\"\n            [nzBreakpoint]=\"'md'\"\n            [nzCollapsedWidth]=\"80\"\n            (nzCollapsedChange)=\"collapseChange()\"\n            [nzWidth]=\"200\"\n            >\n            <div class=\"nav-secondary\">\n              <ng-content></ng-content>\n              <ng-template #contentTemplate>\n                <div>\n                  <p>Perfil: Administrador</p>\n                  <p>Usuario: Admin</p>\n                </div>\n              </ng-template>\n              <div nz-row style=\"text-align: center; background-color: #3b5065; height: 120px;\">\n                  <br />\n                  <img src=\"../../../assets/logo_pag.png\" width=\"75px\" height=\"75px\" alt=\"logo\">\n\n              </div>\n              <div nz-row style=\"text-align: center;\" class=\"btn_collapse\">\n                <i nz-icon nzType=\"caret-left\" nzTheme=\"outline\" (click)=\"collapse()\" *ngIf=\"!isCollapsed\"></i>\n                <i nz-icon nzType=\"caret-right\" nzTheme=\"outline\" (click)=\"collapse()\" *ngIf=\"isCollapsed\"></i>\n              </div>\n              <ul nz-menu nzMode=\"inline\" nzMode=\"inline\" [nzInlineCollapsed]=\"isCollapsed\">\n                <ng-container *ngFor=\"let item of options\">\n                  <ng-template [ngIf]=\"item.submenu\" [ngIfElse]=\"withoutSubmenu\">\n                    <li nz-submenu nzTitle=\"{{item.title}}\" nzIcon=\"{{ item.icon }}\">\n                      <ul style=\"background: #000c17 !important;\">\n                        <li *ngFor=\"let sub of item.submenu\" (click)=\"menuChange.emit(item)\" [routerLink]=\"[sub.url]\" routerLinkActive=\"ant-menu-item-selected\" class=\"onp_menu\" nz-menu-item>\n                          {{sub.title}}\n                        </li>\n                      </ul>\n                    </li>\n                  </ng-template>\n                  <ng-template #withoutSubmenu>\n                    <li nz-menu-item [routerLink]=\"[item.url]\"  (click)=\"menuChange.emit(item)\" routerLinkActive=\"ant-menu-item-selected\" class=\"onp_menu\">\n                      <span>\n                        <i nz-icon nzType=\"{{item.icon}}\" nzTheme=\"outline\"></i>\n                        <span>{{item.title}}</span>\n                      </span>\n                    </li>\n                  </ng-template>\n                </ng-container>\n              </ul>\n            </div>\n          </nz-sider>\n          <nz-layout>\n              <nz-header>\n                  <div nz-row>\n                    <div nz-col nzSpan=\"1\">\n                      <div class=\"logo\">\n                        <img src=\"../../../assets/qr_logo.png\" width=\"50%\" height=\"50%\" class=\"logo\" alt=\"logo\">\n                      </div>\n                    </div>\n                      <div nz-col [nzSpan]=\"6\" style=\"padding: 10px;\">\n                        <nz-form-item>\n                          <nz-input-group [nzSuffix]=\"suffixIconSearch\">\n                            <input type=\"text\" nz-input placeholder=\"Buscar en Sistema\"\n                                  style=\"background-color: #000c17; border-color: #001529; color: #f5f5f5;\"/>\n                          </nz-input-group>\n                          <ng-template #suffixIconSearch>\n                            <i nz-icon nzType=\"search\" style=\"color: #ffffff;\"></i>\n                          </ng-template>\n                        </nz-form-item>\n                      </div>\n                    <div nz-col [nzSpan]=\"14\">\n                      <span style=\"color: #ffff; font-size: 18px;font-family: Arial, Helvetica, sans-serif;\">\n                      </span>\n                    </div>\n                    <div nz-col [nzSpan]=\"2\" [nzPush] =\"4\">\n\n                    </div>\n                    <div nz-col [nzSpan]=\"12\" [nzPush] =\"4\">\n                      <a class=\"menu-user\" nz-dropdown [nzDropdownMenu]=\"menu\" [nzPlacement]=\"'bottomRight'\">\n                        Administrador\n                        <i nz-icon nzType=\"down\"></i>\n                      </a>\n                      <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n                        <ul nz-menu nzSelectable>\n                          <!-- <li nz-menu-item nzDisabled>Configurar cuenta</li>\n                          <li nz-menu-divider></li> -->\n                          <li nz-menu-item (click)=\"logout()\">Cerrar sesión</li>\n                        </ul>\n                      </nz-dropdown-menu>\n                    </div>\n                  </div>\n                  <ul nz-menu *ngIf=\"false\" [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\">\n                      <li nz-menu-item [routerLink]=\"['profesor']\" routerLinkActive=\"ant-menu-item-selected\"><i nz-icon nzType=\"team\" nzTheme=\"outline\"></i><span class=\"MainMenu--iconText\">Profesores</span></li>\n                      <li nz-menu-item [routerLink]=\"['evento']\" routerLinkActive=\"ant-menu-item-selected\"><i nz-icon nzType=\"carry-out\" nzTheme=\"outline\"></i><span class=\"MainMenu--iconText\">Eventos</span></li>\n                      <li nz-menu-item [routerLink]=\"['personas']\" routerLinkActive=\"ant-menu-item-selected\"><i nz-icon nzType=\"user\" nzTheme=\"outline\"></i><span class=\"MainMenu--iconText\">Personal</span></li>\n                      <li nz-menu-item [routerLink]=\"['reportes']\" routerLinkActive=\"ant-menu-item-selected\"><i nz-icon nzType=\"printer\" nzTheme=\"outline\"></i><span class=\"MainMenu--iconText\">Reportes</span></li>\n                  </ul>\n                </nz-header>\n                <nz-content class=\"main-content\">\n                    <router-outlet></router-outlet>\n                    <nz-footer>Oficina Nacional Previsional ©2020 Todos los derechos reservados.</nz-footer>\n                 </nz-content>\n          </nz-layout>\n\n\n\n\n      </nz-layout>\n\n    </nz-spin>\n\n  </nz-layout>\n");

/***/ }),

/***/ "./src/app/pages/layout/layout-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/layout-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/pages/layout/layout.component.ts");




const routes = [
    {
        path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], children: [
            { path: '', redirectTo: 'profesor' },
            {
                path: 'profesor',
                loadChildren: () => Promise.all(/*! import() | profesor-profesor-module */[__webpack_require__.e("common"), __webpack_require__.e("profesor-profesor-module")]).then(__webpack_require__.bind(null, /*! ../profesor/profesor.module */ "./src/app/pages/profesor/profesor.module.ts")).then(m => m.ProfesorModule)
            },
            {
                path: 'evento',
                loadChildren: () => Promise.all(/*! import() | evento-evento-module */[__webpack_require__.e("common"), __webpack_require__.e("evento-evento-module")]).then(__webpack_require__.bind(null, /*! ../evento/evento.module */ "./src/app/pages/evento/evento.module.ts")).then(m => m.EventoModule)
            },
            {
                path: 'personas',
                loadChildren: () => __webpack_require__.e(/*! import() | personas-personas-module */ "personas-personas-module").then(__webpack_require__.bind(null, /*! ../personas/personas.module */ "./src/app/pages/personas/personas.module.ts")).then(m => m.PersonasModule)
            },
            {
                path: 'reportes',
                loadChildren: () => __webpack_require__.e(/*! import() | reportes-reportes-module */ "reportes-reportes-module").then(__webpack_require__.bind(null, /*! ../reportes/reportes.module */ "./src/app/pages/reportes/reportes.module.ts")).then(m => m.ReportesModule)
            },
        ]
    }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LayoutRoutingModule);



/***/ }),

/***/ "./src/app/pages/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: '<app-wrapper></app-wrapper>'
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/pages/layout/layout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/layout/layout.module.ts ***!
  \***********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/pages/layout/layout-routing.module.ts");
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "./src/app/pages/layout/wrapper/wrapper.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/pages/layout/layout.component.ts");







let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
            _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/pages/layout/wrapper/wrapper.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/layout/wrapper/wrapper.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nz-header {\n    padding: 0;\n    height: 50px;\n  }\n\n  .image{\n    width: 100%\n  }\n\n  .logo {\n    color: #fff;\n    vertical-align: top;\n    text-transform: uppercase;\n    font-size: 1rem;\n    /*margin-left: 28px; */\n    padding-right: 18px;\n    letter-spacing: 4px;\n    margin-bottom: 20px;\n    width: 7rem;\n  }\n\n  ul[nz-menu]{\n    display: inline-block;\n    line-height: 52px;\n  }\n\n  /**\n  User menu\n  */\n\n  .menu-user{\n    float: right;\n    transition: all .3s;\n    padding: 0 18px;\n    color: #fff;\n  }\n\n  .menu-user:hover{\n    background: #303446;\n  }\n\n  nz-spin {\n    display: inline-block;\n  }\n\n  nz-footer {\n    text-align: center;\n  }\n\n  .ant-menu {\n\n  }\n\n  @media (max-width: 820px) {\n    .ant-layout-header .logo{\n      width: 5rem;\n    }\n    ul[nz-menu] li.ant-menu-item{\n      padding: 0 5px;\n    }\n    ul[nz-menu] li.ant-menu-item .anticon{\n      margin: 10px;\n    }\n    [nz-icon]{\n      font-size: 16px;\n    }\n    .MainMenu--iconText{\n      display: none;\n    }\n    .menu-user {\n      font-size: 0;\n    }\n  }\n\n  nz-avatar {\n    margin-top: 16px;\n    margin-right: 16px;\n  }\n\n  .btn_collapse{\n    cursor: pointer;\n    background: #ECEFF1;\n    opacity: 0.4;\n    height: 30x;\n    color: #60808d;\n  }\n\n  .onp_menu{\n    color: whitesmoke !important;\n  }\n\n  nz-menu-item{\n    color: whitesmoke;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0L3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7O0VBRUE7O0dBRUM7O0VBQ0Q7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7O0VBRUE7O0VBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0L3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5pbWFnZXtcbiAgICB3aWR0aDogMTAwJVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgLyptYXJnaW4tbGVmdDogMjhweDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogN3JlbTtcbiAgfVxuXG4gIHVsW256LW1lbnVde1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgfVxuXG4gIC8qKlxuICBVc2VyIG1lbnVcbiAgKi9cbiAgLm1lbnUtdXNlcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVudS11c2VyOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMzMDM0NDY7XG4gIH1cblxuICBuei1zcGluIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICBuei1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hbnQtbWVudSB7XG5cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgIC5hbnQtbGF5b3V0LWhlYWRlciAubG9nb3tcbiAgICAgIHdpZHRoOiA1cmVtO1xuICAgIH1cbiAgICB1bFtuei1tZW51XSBsaS5hbnQtbWVudS1pdGVte1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuICAgIHVsW256LW1lbnVdIGxpLmFudC1tZW51LWl0ZW0gLmFudGljb257XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIFtuei1pY29uXXtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLk1haW5NZW51LS1pY29uVGV4dHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tZW51LXVzZXIge1xuICAgICAgZm9udC1zaXplOiAwO1xuICAgIH1cbiAgfVxuXG4gIG56LWF2YXRhciB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIH1cblxuICAuYnRuX2NvbGxhcHNle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBoZWlnaHQ6IDMweDtcbiAgICBjb2xvcjogIzYwODA4ZDtcbiAgfVxuXG4gIC5vbnBfbWVudXtcbiAgICBjb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgbnotbWVudS1pdGVte1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/layout/wrapper/wrapper.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/wrapper/wrapper.component.ts ***!
  \***********************************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WrapperComponent = class WrapperComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = { name: 'Admin' };
        this.currentAccount = null;
        this.listAccounts = null;
        this.isLoading = false;
        this.menuChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //@Input() public options: any[];
        this.isCollapsed = false;
        this.options = [
            {
                icon: 'user',
                title: 'Profesores',
                url: 'profesor',
                submenu: [
                    {
                        icon: 'usergroup-add',
                        title: 'Crear Profesor',
                        url: 'profesor/nuevo'
                    },
                    {
                        icon: 'usergroup-add',
                        title: 'Modifica / busca profesor',
                        url: 'profesor/lista'
                    }
                ]
            },
            {
                icon: 'calendar',
                title: 'Eventos',
                url: 'evento',
                submenu: [
                    {
                        icon: 'usergroup-add',
                        title: 'Crear Evento',
                        url: 'evento/nuevo'
                    },
                    {
                        icon: 'usergroup-add',
                        title: 'Modifica / busca evento',
                        url: 'evento/lista'
                    }
                ]
            },
            {
                icon: 'team',
                title: 'Personas',
                url: 'personas',
                submenu: [
                    {
                        icon: 'user',
                        title: 'Carga relación de participantes',
                        url: 'personas'
                    },
                    {
                        icon: 'user',
                        title: 'Modifica/busca Participante',
                        url: 'personas/lista'
                    },
                    {
                        icon: 'user',
                        title: 'Reenvío de QR',
                        url: 'personas_b'
                    },
                    {
                        icon: 'user',
                        title: 'Baja de participante',
                        url: 'personas/baja'
                    }
                ]
            },
            {
                icon: 'printer',
                title: 'Reportes',
                url: 'reportes',
                submenu: [
                    {
                        icon: 'user',
                        title: 'Reporte por Fecha',
                        url: 'reportes'
                    },
                    {
                        icon: 'user',
                        title: 'Reporte Detallado',
                        url: 'personas_a'
                    },
                    {
                        icon: 'user',
                        title: 'Reporte General',
                        url: 'personas_a'
                    },
                ]
            },
        ];
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]:
                    this.isLoading = true;
                    break;
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
                    this.isLoading = false;
                    break;
                default:
                    break;
            }
        });
    }
    ngOnInit() {
        if (screen.width < 500) {
            this.isCollapsed = true;
        }
        this.loadDataComponent();
    }
    loadDataComponent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getUserActive();
        });
    }
    getUserActive() {
        return this.activatedRoute.data.subscribe(res => this.user = res.data);
    }
    logout() {
        this.isLoading = true;
        sessionStorage.removeItem("USUARIO");
        this.router.navigate(['login']);
        this.isLoading = false;
    }
    handleCollapse() {
        window.innerWidth < 768 ? this.isCollapsed = true : null;
    }
    collapseChange() {
        window.innerWidth < 768 ? this.isCollapsed = false : null;
    }
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        console.log(this.isCollapsed);
    }
};
WrapperComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WrapperComponent.prototype, "menuChange", void 0);
WrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wrapper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/layout/wrapper/wrapper.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wrapper.component.css */ "./src/app/pages/layout/wrapper/wrapper.component.css")).default]
    })
], WrapperComponent);



/***/ })

}]);
//# sourceMappingURL=pages-layout-layout-module-es2015.js.map