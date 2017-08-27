webpackJsonp(["main"],{

/***/ "../../../../../locale/messages.ru.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATION_RU; });
var TRANSLATION_RU = "\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n    <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n        <body>\n            <trans-unit id=\"4e7f5f07ae8e67878f35b34bcee10e39300ff41a\" datatype=\"html\">\n                <source>Orders</source>\n                <target>\u0417\u0430\u043A\u0430\u0437\u044B</target>\n            </trans-unit>\n            <trans-unit id=\"61e0f26d843eec0b33ff475e111b0c2f7a80b835\" datatype=\"html\">\n                <source>Statistics</source>\n                <target>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</target>\n            </trans-unit>\n            <trans-unit id=\"532152365f64d8738343423767f1130c1a451e78\" datatype=\"html\">\n                <source>Catalog</source>\n                <target>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</target>\n            </trans-unit>\n            <trans-unit id=\"121cc5391cd2a5115bc2b3160379ee5b36cd7716\" datatype=\"html\">\n                <source>Settings</source>\n                <target>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</target>\n            </trans-unit>\n            <trans-unit id=\"1f332ec66f3bc8d943c248091be7f92772ba280f\" datatype=\"html\">\n                <source>Expand</source>\n                <target>\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C</target>\n            </trans-unit>\n            <trans-unit id=\"e8bcb762b48cf52fbea66ce9c4f6b970b99a80fd\" datatype=\"html\">\n                <source>Collapse</source>\n                <target>\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C</target>\n            </trans-unit>\n        </body>\n    </file>\n</xliff>\n";
//# sourceMappingURL=messages.ru.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_component__ = __webpack_require__("../../../../../src/app/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalog_component__ = __webpack_require__("../../../../../src/app/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_types_component__ = __webpack_require__("../../../../../src/app/content-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_types_component__ = __webpack_require__("../../../../../src/app/field-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stat_component__ = __webpack_require__("../../../../../src/app/stat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_component__ = __webpack_require__("../../../../../src/app/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_3__orders_component__["a" /* OrdersComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_4__catalog_component__["a" /* CatalogComponent */] },
    { path: 'catalog/category/:categoryId', component: __WEBPACK_IMPORTED_MODULE_4__catalog_component__["a" /* CatalogComponent */] },
    { path: 'catalog/content_types', component: __WEBPACK_IMPORTED_MODULE_5__content_types_component__["b" /* ContentTypesComponent */] },
    { path: 'catalog/field_types', component: __WEBPACK_IMPORTED_MODULE_6__field_types_component__["b" /* FieldTypesComponent */] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_7__stat_component__["a" /* StatisticsComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConfirmModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmModalContent = (function () {
    function ConfirmModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmModalContent.prototype.accept = function () {
        this.activeModal.close('accept');
    };
    return ConfirmModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ConfirmModalContent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ConfirmModalContent.prototype, "modalContent", void 0);
ConfirmModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'modal_confirm',
        template: __webpack_require__("../../../../../src/app/templates/modal_confirm.html"),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], ConfirmModalContent);

var AlertModalContent = (function () {
    function AlertModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return AlertModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AlertModalContent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AlertModalContent.prototype, "modalContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AlertModalContent.prototype, "messageType", void 0);
AlertModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'modal_alert',
        template: __webpack_require__("../../../../../src/app/templates/modal_alert.html"),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object])
], AlertModalContent);

var AppComponent = (function () {
    function AppComponent(tooltipConfig) {
        this.title = 'Shopkeeper';
        tooltipConfig.placement = 'bottom';
        tooltipConfig.container = 'body';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/templates/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_component__ = __webpack_require__("../../../../../src/app/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__catalog_component__ = __webpack_require__("../../../../../src/app/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_component__ = __webpack_require__("../../../../../src/app/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_component__ = __webpack_require__("../../../../../src/app/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_types_component__ = __webpack_require__("../../../../../src/app/content-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__field_types_component__ = __webpack_require__("../../../../../src/app/field-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stat_component__ = __webpack_require__("../../../../../src/app/stat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_component__ = __webpack_require__("../../../../../src/app/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_recursive_component__ = __webpack_require__("../../../../../src/app/list-recursive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__table_component__ = __webpack_require__("../../../../../src/app/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filter_field_by_group_pipe__ = __webpack_require__("../../../../../src/app/filter-field-by-group.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_content_types_service__ = __webpack_require__("../../../../../src/app/services/content_types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["b" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_6__orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_9__categories_component__["b" /* CategoriesMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__catalog_component__["a" /* CatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_10__content_types_component__["b" /* ContentTypesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__field_types_component__["b" /* FieldTypesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__stat_component__["a" /* StatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__filter_field_by_group_pipe__["a" /* filterFieldByGroup */],
            __WEBPACK_IMPORTED_MODULE_14__list_recursive_component__["a" /* ListRecursiveComponent */],
            __WEBPACK_IMPORTED_MODULE_15__table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_9__categories_component__["a" /* CategoriesListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AlertModalContent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["c" /* ConfirmModalContent */],
            __WEBPACK_IMPORTED_MODULE_8__product_component__["a" /* ProductModalContent */],
            __WEBPACK_IMPORTED_MODULE_10__content_types_component__["a" /* ContentTypeModalContent */],
            __WEBPACK_IMPORTED_MODULE_9__categories_component__["c" /* CategoriesModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__field_types_component__["a" /* FieldTypeModalContent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_18__services_content_types_service__["a" /* ContentTypesService */], __WEBPACK_IMPORTED_MODULE_19__services_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AlertModalContent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["c" /* ConfirmModalContent */],
            __WEBPACK_IMPORTED_MODULE_8__product_component__["a" /* ProductModalContent */],
            __WEBPACK_IMPORTED_MODULE_10__content_types_component__["a" /* ContentTypeModalContent */],
            __WEBPACK_IMPORTED_MODULE_9__categories_component__["c" /* CategoriesModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__field_types_component__["a" /* FieldTypeModalContent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["b" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_component__ = __webpack_require__("../../../../../src/app/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_category_model__ = __webpack_require__("../../../../../src/app/models/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CatalogComponent = (function () {
    function CatalogComponent(router, modalService, titleService, categoriesService, productsService) {
        this.router = router;
        this.modalService = modalService;
        this.titleService = titleService;
        this.categoriesService = categoriesService;
        this.productsService = productsService;
        this.title = 'Каталог';
        this.errorMessage = '';
        this.loading = false;
        this.categories = [];
        this.items = [];
        this.selectedIds = [];
        //TODO: get from settings
        //TODO: add field format option
        this.tableFields = [
            {
                name: 'id',
                title: 'ID',
                output_type: 'text'
            },
            {
                name: 'name',
                title: 'Системное имя',
                output_type: 'text'
            },
            {
                name: 'title',
                title: 'Название',
                output_type: 'text'
            },
            {
                name: 'price',
                title: 'Цена',
                output_type: 'number'
            },
            {
                name: 'published',
                title: 'Статус',
                output_type: 'boolean'
            }
        ];
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
    };
    CatalogComponent.prototype.openCategory = function (category) {
        this.currentCategory = __WEBPACK_IMPORTED_MODULE_7_lodash__["clone"](category);
        this.titleService.setTitle(this.title + ' / ' + this.currentCategory.title);
        this.getProducts();
    };
    CatalogComponent.prototype.openRootCategory = function () {
        this.currentCategory = new __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* Category */](0, 0, 'root', '', '', '');
        this.titleService.setTitle(this.title);
        this.getProducts();
    };
    CatalogComponent.prototype.getProducts = function () {
        var _this = this;
        this.loading = true;
        this.productsService.getList(this.currentCategory.id)
            .subscribe(function (items) {
            _this.items = items;
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    CatalogComponent.prototype.modalProductOpen = function (itemId) {
        var _this = this;
        this.modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__product_component__["a" /* ProductModalContent */], { size: 'lg' });
        this.modalRef.componentInstance.modalTitle = 'Add product';
        this.modalRef.componentInstance.itemId = itemId || 0;
        this.modalRef.componentInstance.category = this.currentCategory;
        this.modalRef.result.then(function (result) {
            if (result.reason && result.reason == 'edit') {
            }
            else {
                _this.getProducts();
            }
        }, function (reason) {
        });
    };
    CatalogComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    CatalogComponent.prototype.selectAll = function (event) {
        this.selectedIds = [];
        if (event.target.checked) {
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.selectedIds.push(item.id);
            }
        }
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shk-catalog',
        template: __webpack_require__("../../../../../src/app/templates/page_catalog.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_products_service__["a" /* ProductsService */]) === "function" && _e || Object])
], CatalogComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CategoriesModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategoriesMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_content_types_service__ = __webpack_require__("../../../../../src/app/services/content_types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_category_model__ = __webpack_require__("../../../../../src/app/models/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_recursive_component__ = __webpack_require__("../../../../../src/app/list-recursive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * @class CategoriesModalComponent
 */
var CategoriesModalComponent = (function () {
    function CategoriesModalComponent(fb, contentTypesService, categoriesService, activeModal) {
        this.fb = fb;
        this.contentTypesService = contentTypesService;
        this.categoriesService = categoriesService;
        this.activeModal = activeModal;
        this.categories = [];
        this.submitted = false;
        this.loading = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* Category */](0, 0, '', '', '', '');
        this.contentTypes = [];
        this.formErrors = {
            parent_id: '',
            name: '',
            title: '',
            content_type: ''
        };
        this.validationMessages = {
            parent_id: {
                required: 'Parent is required.'
            },
            title: {
                required: 'Title is required.'
            },
            name: {
                required: 'Name is required.',
                pattern: 'The name must contain only Latin letters.'
            },
            content_type: {
                required: 'Content type is required.'
            }
        };
    }
    /** On initialize */
    CategoriesModalComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getContentTypes();
        if (this.itemId) {
            this.getModelData();
        }
    };
    CategoriesModalComponent.prototype.getModelData = function () {
        var _this = this;
        this.loading = true;
        this.categoriesService.getItem(this.itemId)
            .then(function (item) {
            if (_this.isItemCopy) {
                item.id = 0;
                item.name = '';
            }
            _this.model = item;
            _this.loading = false;
        });
    };
    CategoriesModalComponent.prototype.getContentTypes = function () {
        var _this = this;
        this.contentTypesService.getList()
            .then(function (items) {
            _this.contentTypes = items;
        }, function (error) { return _this.errorMessage = error; });
    };
    CategoriesModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.form = this.fb.group({
            parent_id: [this.model.parent_id, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]],
            title: [this.model.title, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]],
            name: [this.model.name, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[A-Za-z0-9_-]+')]],
            description: [this.model.description, []],
            content_type: [this.model.content_type, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]]
        });
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    /**
     * On form value changed
     * @param data
     */
    CategoriesModalComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = this.form.get(field);
            if (control && (control.dirty || this.submitted) && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    /**
     * On form submit
     */
    CategoriesModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.form.valid) {
            this.onValueChanged();
            return;
        }
        if (this.model.id) {
            this.categoriesService.editItem(this.model.id, this.model)
                .then(function (res) {
                if (res.success) {
                    _this.closeModal();
                }
                else {
                    if (res.msg) {
                        _this.errorMessage = res.msg;
                    }
                }
            });
        }
        else {
            this.categoriesService.createItem(this.model)
                .then(function (res) {
                if (res.success) {
                    _this.closeModal();
                }
                else {
                    if (res.msg) {
                        _this.errorMessage = res.msg;
                    }
                }
            });
        }
    };
    CategoriesModalComponent.prototype.closeModal = function () {
        var reason = this.itemId ? 'edit' : 'create';
        this.activeModal.close({ reason: reason, data: this.model });
    };
    return CategoriesModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CategoriesModalComponent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CategoriesModalComponent.prototype, "itemId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CategoriesModalComponent.prototype, "isItemCopy", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CategoriesModalComponent.prototype, "categories", void 0);
CategoriesModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'category-modal-content',
        template: __webpack_require__("../../../../../src/app/templates/modal_category.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_content_types_service__["a" /* ContentTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_content_types_service__["a" /* ContentTypesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _d || Object])
], CategoriesModalComponent);

/**
 * @class CategoriesListComponent
 */
var CategoriesListComponent = (function (_super) {
    __extends(CategoriesListComponent, _super);
    function CategoriesListComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CategoriesListComponent;
}(__WEBPACK_IMPORTED_MODULE_8__list_recursive_component__["a" /* ListRecursiveComponent */]));
CategoriesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'categories-list',
        template: "        \n        <ul class=\"dropdown-menu dropdown-menu-hover\" *ngIf=\"items.length > 0\" [class.shadow]=\"parentId != 0\">\n            <li class=\"dropdown-item active\" *ngFor=\"let item of items\" [class.active]=\"item.id == currentId\" [class.current-level]=\"getIsActiveParent(item.id)\">\n                <a href=\"#/catalog/category/{{item.id}}\">\n                    {{item.title}}\n                </a>\n                <categories-list [inputItems]=\"inputItems\" [parentId]=\"item.id\" [currentId]=\"currentId\"></categories-list>\n            </li>\n        </ul>\n    "
    })
], CategoriesListComponent);

/**
 * @class CategoriesMenuComponent
 */
var CategoriesMenuComponent = (function () {
    function CategoriesMenuComponent(router, route, modalService, categoriesService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.categoriesService = categoriesService;
        this.rootTitle = 'Категории';
        this.changeRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.currentCategory = new __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* Category */](0, 0, 'root', this.rootTitle, '', '');
        this.categories = [];
        this.errorMessage = '';
        this.categoryId = 0;
    }
    /** On initialize component */
    CategoriesMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategories();
        var categoryId = this.route.snapshot.params['categoryId']
            ? parseInt(this.route.snapshot.params['categoryId'])
            : 0;
        this.route.paramMap
            .subscribe(function (params) {
            _this.categoryId = params.get('categoryId')
                ? parseInt(params.get('categoryId'))
                : 0;
            _this.selectCurrent();
        });
        if (!categoryId) {
            this.openRootCategory();
        }
    };
    /** Select current category */
    CategoriesMenuComponent.prototype.selectCurrent = function () {
        if (this.currentCategory.id === this.categoryId) {
            return;
        }
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.id == this.categoryId) {
                this.currentCategory = category;
                this.changeRequest.emit(this.currentCategory);
                break;
            }
        }
    };
    /** Get categories */
    CategoriesMenuComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getList()
            .subscribe(function (items) {
            _this.categories = items;
            _this.selectCurrent();
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Open modal category
     * @param itemId
     * @param isItemCopy
     */
    CategoriesMenuComponent.prototype.openModalCategory = function (itemId, isItemCopy) {
        var _this = this;
        this.modalRef = this.modalService.open(CategoriesModalComponent, { size: 'lg' });
        this.modalRef.componentInstance.modalTitle = itemId && !isItemCopy ? 'Edit category' : 'Add category';
        this.modalRef.componentInstance.itemId = itemId || 0;
        this.modalRef.componentInstance.isItemCopy = isItemCopy || false;
        this.modalRef.componentInstance.categories = this.categories;
        this.modalRef.result.then(function (result) {
            if (result.reason && result.reason == 'edit') {
                _this.updateCategoryData(result.data.id, result.data);
            }
            else {
                _this.getCategories();
            }
        }, function (reason) {
        });
    };
    /**
     * Update category data
     * @param itemId
     * @param data
     */
    CategoriesMenuComponent.prototype.updateCategoryData = function (itemId, data) {
        var index = __WEBPACK_IMPORTED_MODULE_10_lodash__["findIndex"](this.categories, { id: itemId });
        if (index === -1) {
            return;
        }
        var category = this.categories[index];
        if (category.parent_id == data.parent_id) {
            Object.keys(category).forEach(function (k, i) {
                if (data[k]) {
                    category[k] = data[k];
                }
            });
        }
        else {
            this.getCategories();
        }
    };
    /**
     * Confirm delete category
     * @param itemId
     */
    CategoriesMenuComponent.prototype.deleteCategoryItemConfirm = function (itemId) {
        var _this = this;
        var index = __WEBPACK_IMPORTED_MODULE_10_lodash__["findIndex"](this.categories, { id: itemId });
        if (index == -1) {
            return;
        }
        this.modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__app_component__["c" /* ConfirmModalContent */]);
        this.modalRef.componentInstance.modalTitle = 'Confirm';
        this.modalRef.componentInstance.modalContent = 'Are you sure you want to remove category "' + this.categories[index].title + '"?';
        this.modalRef.result.then(function (result) {
            if (result == 'accept') {
                _this.deleteCategoryItem(itemId);
            }
        }, function (reason) {
        });
    };
    /**
     * Delete category
     * @param itemId
     */
    CategoriesMenuComponent.prototype.deleteCategoryItem = function (itemId) {
        var _this = this;
        this.categoriesService.deleteItem(itemId)
            .then(function (res) {
            if (res.success) {
                _this.openRootCategory();
                _this.getCategories();
            }
            else {
                if (res.msg) {
                    _this.errorMessage = res.msg;
                }
            }
        });
    };
    /** Open root category */
    CategoriesMenuComponent.prototype.openRootCategory = function () {
        this.currentCategory = new __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* Category */](0, 0, 'root', this.rootTitle, '', '');
        this.changeRequest.emit(this.currentCategory);
    };
    /** Go to root category */
    CategoriesMenuComponent.prototype.goToRootCategory = function () {
        this.router.navigate(['/catalog']);
    };
    /**
     * Select category
     * @param category
     */
    CategoriesMenuComponent.prototype.selectCategory = function (category) {
        this.router.navigate(['/catalog/category', category.id]);
    };
    /** Copy category */
    CategoriesMenuComponent.prototype.copyCategory = function () {
        this.openModalCategory(this.currentCategory.id, true);
    };
    /** Move category */
    CategoriesMenuComponent.prototype.moveCategory = function () {
        console.log('moveCategory');
    };
    return CategoriesMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CategoriesMenuComponent.prototype, "rootTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CategoriesMenuComponent.prototype, "changeRequest", void 0);
CategoriesMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'categories-menu',
        template: __webpack_require__("../../../../../src/app/templates/categories-menu.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */]) === "function" && _h || Object])
], CategoriesMenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentTypeModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__ = __webpack_require__("../../../../../src/app/services/content_types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_content_field_model__ = __webpack_require__("../../../../../src/app/models/content_field.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_content_type_model__ = __webpack_require__("../../../../../src/app/models/content_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContentTypeModalContent = (function () {
    function ContentTypeModalContent(fb, contentTypesService, activeModal, tooltipConfig) {
        this.fb = fb;
        this.contentTypesService = contentTypesService;
        this.activeModal = activeModal;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__models_content_type_model__["a" /* ContentType */]('', '', '', '', 'products', [], ['Содержание', 'Служебное'], true);
        this.submitted = false;
        this.fieldSubmitted = false;
        this.loading = false;
        this.action = 'add_field';
        this.currentFieldName = '';
        this.collections = ['products'];
        this.formErrors = {
            contentType: {
                name: '',
                title: '',
                new_collection: ''
            },
            field: {
                name: '',
                title: '',
                input_type: '',
                output_type: '',
                group: '',
                new_group: ''
            }
        };
        this.validationMessages = {
            contentType: {
                title: {
                    required: 'Title is required.'
                },
                name: {
                    required: 'Name is required.',
                    pattern: 'The name must contain only Latin letters.'
                },
                new_collection: {
                    pattern: 'The collection name must contain only Latin letters.',
                    exists: 'Collection with the same name already exists.'
                }
            },
            field: {
                title: {
                    required: 'Title is required.'
                },
                name: {
                    required: 'Name is required.',
                    pattern: 'The name must contain only Latin letters.'
                },
                input_type: {
                    required: 'Input type is required.'
                },
                output_type: {
                    required: 'Output type is required.'
                },
                group: {
                    required: 'Group is required.'
                },
                new_group: {
                    exists: 'Group with the same name already exists.'
                }
            }
        };
        tooltipConfig.placement = 'bottom';
        tooltipConfig.container = 'body';
    }
    /** On initialize */
    ContentTypeModalContent.prototype.ngOnInit = function () {
        this.buildForm();
        if (this.itemId) {
            this.getModelData();
        }
    };
    /** Build form groups */
    ContentTypeModalContent.prototype.buildForm = function () {
        var _this = this;
        this.contentTypeForm = this.fb.group({
            title: [this.model.title, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            name: [this.model.name, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('[A-Za-z0-9_-]+')]],
            description: [this.model.description, []],
            collection: [this.model.collection, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            new_collection: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('[A-Za-z0-9_-]+')]]
        });
        this.contentTypeForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged('contentType', data); });
        this.fieldForm = this.fb.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('[A-Za-z0-9_-]+')]],
            description: ['', []],
            input_type: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            output_type: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            is_filter: ['', []],
            required: ['', []],
            group: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            new_group: ['', []]
        });
        this.fieldForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged('field', data); });
    };
    /** Element display toggle */
    ContentTypeModalContent.prototype.displayToggle = function (element, display) {
        display = display || element.style.display == 'none';
        element.style.display = display ? 'block' : 'none';
    };
    /**
     * On form value changed
     * @param type
     * @param data
     */
    ContentTypeModalContent.prototype.onValueChanged = function (type, data) {
        if (!this.contentTypeForm) {
            return;
        }
        var form = type == 'contentType'
            ? this.contentTypeForm
            : this.fieldForm;
        var isSubmitted = type == 'contentType'
            ? this.submitted
            : this.fieldSubmitted;
        for (var field in this.formErrors[type]) {
            this.formErrors[type][field] = '';
            var control = form.get(field);
            if (control && (control.dirty || isSubmitted) && !control.valid) {
                var messages = this.validationMessages[type][field];
                for (var key in control.errors) {
                    this.formErrors[type][field] += messages[key] + ' ';
                }
            }
        }
    };
    /** Get model data */
    ContentTypeModalContent.prototype.getModelData = function () {
        var _this = this;
        this.loading = true;
        this.contentTypesService.getItem(this.itemId)
            .then(function (item) {
            if (_this.isItemCopy) {
                item.id = '';
                item.name = '';
            }
            _this.model = item;
            _this.loading = false;
        });
    };
    /** Add collection */
    ContentTypeModalContent.prototype.addCollection = function () {
        var fieldName = 'new_collection';
        var control = this.contentTypeForm.get(fieldName);
        if (!control.valid) {
            return false;
        }
        this.formErrors.contentType[fieldName] = '';
        var value = control.value;
        var exists = false;
        for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
            var name = _a[_i];
            if (value == name) {
                exists = true;
                break;
            }
        }
        if (exists) {
            this.formErrors.contentType[fieldName] += this.validationMessages.contentType[fieldName].exists;
            return false;
        }
        this.collections.push(value);
        this.elementAddCollectionBlock.nativeElement.style.display = 'none';
        return true;
    };
    /** Delete collection */
    ContentTypeModalContent.prototype.deleteCollection = function () {
        console.log('deleteCollection');
    };
    /** Add group */
    ContentTypeModalContent.prototype.addGroup = function () {
        var fieldName = 'new_group';
        var control = this.fieldForm.get(fieldName);
        if (!control || !control.valid || !control.value) {
            return false;
        }
        this.formErrors.field[fieldName] = '';
        var value = control.value;
        var index = this.model.groups.indexOf(value);
        if (index > -1) {
            this.formErrors.field[fieldName] += this.validationMessages.field[fieldName].exists;
            return false;
        }
        this.model.groups.push(value);
        this.elementAddGroupBlock.nativeElement.style.display = 'none';
        return true;
    };
    /** Delete group */
    ContentTypeModalContent.prototype.deleteGroup = function () {
        var currentGroupName = this.fieldForm.get('group').value;
        var index = __WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"](this.model.fields, { group: currentGroupName });
        this.errorFieldMessage = '';
        if (index > -1) {
            this.errorFieldMessage = 'You can\'t delete a group because it is not empty.';
            return;
        }
        index = this.model.groups.indexOf(currentGroupName);
        if (index > -1) {
            this.model.groups.splice(index, 1);
        }
    };
    /**
     * Edit field
     * @param field
     */
    ContentTypeModalContent.prototype.editField = function (field) {
        var defaults = new __WEBPACK_IMPORTED_MODULE_5__models_content_field_model__["a" /* ContentField */]('', '', '', '', '', [], '', [], '', false, false);
        field = __WEBPACK_IMPORTED_MODULE_8_lodash__["extend"](defaults, field);
        this.fieldForm.setValue(__WEBPACK_IMPORTED_MODULE_8_lodash__["omit"](field, ['id', 'input_type_options', 'output_type_options']));
        this.currentFieldName = field.name;
        this.fieldSubmitted = false;
        this.action = 'edit_field';
    };
    /**
     * Copy field
     * @param field
     */
    ContentTypeModalContent.prototype.copyField = function (field) {
        var data = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](field);
        data.name = '';
        this.fieldForm.setValue(data);
        this.currentFieldName = '';
        this.fieldSubmitted = false;
        this.action = 'add_field';
    };
    /**
     * Delete field
     * @param field
     */
    ContentTypeModalContent.prototype.deleteField = function (field) {
        var index = __WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"](this.model.fields, { name: field.name });
        if (index == -1) {
            this.errorMessage = 'Field not found.';
            return;
        }
        this.model.fields.splice(index, 1);
    };
    /** Reset field form */
    ContentTypeModalContent.prototype.resetFieldForm = function () {
        this.errorMessage = '';
        this.errorFieldMessage = '';
        this.fieldSubmitted = false;
        this.currentFieldName = '';
        this.action = 'add_field';
        this.fieldForm.reset();
    };
    /** Cancel edit field */
    ContentTypeModalContent.prototype.editFieldCancel = function () {
        this.resetFieldForm();
        this.onValueChanged('field');
    };
    /** Submit field */
    ContentTypeModalContent.prototype.submitField = function () {
        this.fieldSubmitted = true;
        if (!this.fieldForm.valid) {
            this.onValueChanged('field');
            return;
        }
        var data = this.fieldForm.value;
        var index = __WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"](this.model.fields, { name: data.name });
        if (index > -1 && this.currentFieldName != data.name) {
            this.errorMessage = 'A field named "' + data.name + '" already exists.';
            return;
        }
        if (this.action == 'add_field') {
            this.model.fields.push(__WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](data));
        }
        else if (this.action == 'edit_field') {
            index = __WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"](this.model.fields, { name: this.currentFieldName });
            if (index > -1) {
                this.model.fields[index] = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](data);
            }
        }
        this.resetFieldForm();
    };
    /** Submit Content type form */
    ContentTypeModalContent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.contentTypeForm.valid) {
            this.onValueChanged('contentType');
            return;
        }
        if (this.model.fields.length == 0) {
            this.errorMessage = 'You have not created any fields.';
            return;
        }
        if (this.model.id) {
            this.contentTypesService.editItem(this.model.id, this.model)
                .then(function (res) {
                if (res.success) {
                    _this.closeModal();
                }
                else {
                    if (res.msg) {
                        _this.errorMessage = res.msg;
                    }
                }
            });
        }
        else {
            this.contentTypesService.createItem(this.model)
                .then(function (res) {
                if (res.success) {
                    _this.closeModal();
                }
                else {
                    if (res.msg) {
                        _this.errorMessage = res.msg;
                    }
                }
            });
        }
    };
    /** Close modal */
    ContentTypeModalContent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    return ContentTypeModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContentTypeModalContent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContentTypeModalContent.prototype, "itemId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContentTypeModalContent.prototype, "isItemCopy", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('addCollectionBlock'),
    __metadata("design:type", Object)
], ContentTypeModalContent.prototype, "elementAddCollectionBlock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('addGroupBlock'),
    __metadata("design:type", Object)
], ContentTypeModalContent.prototype, "elementAddGroupBlock", void 0);
ContentTypeModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'content-type-modal-content',
        template: __webpack_require__("../../../../../src/app/templates/modal_content_types.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]) === "function" && _d || Object])
], ContentTypeModalContent);

var ContentTypesComponent = (function () {
    function ContentTypesComponent(contentTypesService, modalService, titleService) {
        this.contentTypesService = contentTypesService;
        this.modalService = modalService;
        this.titleService = titleService;
        this.items = [];
        this.title = 'Типы товаров';
        this.loading = false;
        this.selectedIds = [];
        //TODO: get from settings
        this.tableFields = [
            {
                name: 'name',
                title: 'Системное имя',
                output_type: 'text'
            },
            {
                name: 'title',
                title: 'Название',
                output_type: 'text'
            },
            {
                name: 'collection',
                title: 'Коллекция',
                output_type: 'text'
            },
            {
                name: 'published',
                title: 'Статус',
                output_type: 'boolean'
            }
        ];
    }
    ContentTypesComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
        this.getList();
    };
    ContentTypesComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ContentTypesComponent.prototype.getList = function () {
        var _this = this;
        this.loading = true;
        this.contentTypesService.getList()
            .then(function (items) {
            _this.items = items;
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    ContentTypesComponent.prototype.modalOpen = function (itemId, isItemCopy) {
        var _this = this;
        this.modalRef = this.modalService.open(ContentTypeModalContent, { size: 'lg' });
        this.modalRef.componentInstance.modalTitle = itemId && !isItemCopy
            ? 'Edit content type'
            : 'Add content type';
        this.modalRef.componentInstance.itemId = itemId || 0;
        this.modalRef.componentInstance.isItemCopy = isItemCopy || false;
        this.modalRef.result.then(function (result) {
            _this.getList();
        }, function (reason) {
            //console.log( 'reason', reason );
        });
    };
    ContentTypesComponent.prototype.copyItem = function (itemId) {
        this.modalOpen(itemId, true);
    };
    ContentTypesComponent.prototype.modalClose = function () {
        this.modalRef.close();
    };
    ContentTypesComponent.prototype.deleteItemConfirm = function (itemId) {
        var _this = this;
        this.modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__app_component__["c" /* ConfirmModalContent */]);
        this.modalRef.componentInstance.modalTitle = 'Confirm';
        this.modalRef.componentInstance.modalContent = 'Are you sure you want to remove this item?';
        this.modalRef.result.then(function (result) {
            if (result == 'accept') {
                _this.deleteItem(itemId);
            }
        }, function (reason) {
        });
    };
    ContentTypesComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.contentTypesService.deleteItem(itemId)
            .then(function (res) {
            if (res.success) {
                _this.getList();
            }
            else {
                if (res.msg) {
                    //this.errorMessage = res.msg;
                }
            }
        });
    };
    ContentTypesComponent.prototype.selectAll = function (event) {
        this.selectedIds = [];
        if (event.target.checked) {
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.selectedIds.push(item.id);
            }
        }
    };
    ContentTypesComponent.prototype.setSelected = function (event, itemId) {
        var index = this.selectedIds.indexOf(itemId);
        if (event.target.checked) {
            if (index == -1) {
                this.selectedIds.push(itemId);
            }
        }
        else if (index > -1) {
            this.selectedIds.splice(index, 1);
        }
    };
    ContentTypesComponent.prototype.getIsSelected = function (itemId) {
        return this.selectedIds.lastIndexOf(itemId) > -1;
    };
    return ContentTypesComponent;
}());
ContentTypesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shk-content-types',
        template: __webpack_require__("../../../../../src/app/templates/page_content_types.html")
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _g || Object])
], ContentTypesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=content-types.component.js.map

/***/ }),

/***/ "../../../../../src/app/field-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FieldTypesService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FieldTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_field_type_property_model__ = __webpack_require__("../../../../../src/app/models/field-type-property.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service_abstract__ = __webpack_require__("../../../../../src/app/services/data-service.abstract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_table_abstract__ = __webpack_require__("../../../../../src/app/page-table.abstract.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FieldTypesService = (function (_super) {
    __extends(FieldTypesService, _super);
    function FieldTypesService(http) {
        var _this = _super.call(this, http) || this;
        _this.setRequestUrl('admin/field_types');
        return _this;
    }
    return FieldTypesService;
}(__WEBPACK_IMPORTED_MODULE_6__services_data_service_abstract__["a" /* DataService */]));
FieldTypesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FieldTypesService);

var FieldTypeModalContent = (function (_super) {
    __extends(FieldTypeModalContent, _super);
    function FieldTypeModalContent(fb, dataService, activeModal, tooltipConfig) {
        var _this = _super.call(this, fb, dataService, activeModal, tooltipConfig) || this;
        _this.formFields = {
            name: {
                value: '',
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('[A-Za-z0-9_-]+')],
                messages: {
                    required: 'Name is required.',
                    pattern: 'The name must contain only Latin letters and numbers.'
                }
            },
            title: {
                value: '',
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
                messages: {
                    required: 'Title is required.'
                }
            },
            description: {
                value: '',
                validators: [],
                messages: {}
            }
        };
        return _this;
    }
    FieldTypeModalContent.prototype.addRow = function () {
        if (!this.data.properties) {
            this.data.properties = [];
        }
        this.data.properties.push(new __WEBPACK_IMPORTED_MODULE_5__models_field_type_property_model__["a" /* FieldTypeProperty */]('', '', ''));
    };
    FieldTypeModalContent.prototype.deleteRow = function (index) {
        if (this.data.properties.length < index + 1) {
            return;
        }
        this.data.properties.splice(index, 1);
    };
    FieldTypeModalContent.prototype.save = function () {
        this.submitted = true;
        if (!this.form.valid) {
            this.onValueChanged(this.form.value);
            this.submitted = false;
        }
        else {
            var callback = function (res) {
                if (res.success) {
                    this.closeModal();
                }
                else {
                    if (res.msg) {
                        this.submitted = false;
                        this.errorMessage = res.msg;
                    }
                }
            };
            if (this.data.id) {
                this.dataService.update(this.data).then(callback.bind(this));
            }
            else {
                this.dataService.create(this.data).then(callback.bind(this));
            }
        }
    };
    return FieldTypeModalContent;
}(__WEBPACK_IMPORTED_MODULE_7__page_table_abstract__["a" /* ModalContentAbstractComponent */]));
FieldTypeModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'field-type-modal-content',
        template: __webpack_require__("../../../../../src/app/templates/modal_field_type.html"),
        providers: [FieldTypesService]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, FieldTypesService, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]) === "function" && _d || Object])
], FieldTypeModalContent);

var FieldTypesComponent = (function (_super) {
    __extends(FieldTypesComponent, _super);
    function FieldTypesComponent(dataService, activeModal, modalService, titleService) {
        var _this = _super.call(this, dataService, activeModal, modalService, titleService) || this;
        _this.title = 'Field types';
        _this.tableFields = [
            {
                name: 'name',
                title: 'Системное имя',
                output_type: 'text'
            },
            {
                name: 'title',
                title: 'Название',
                output_type: 'text'
            }
        ];
        return _this;
    }
    FieldTypesComponent.prototype.getList = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getList()
            .subscribe(function (items) {
            _this.items = items;
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    FieldTypesComponent.prototype.getModalContent = function () {
        return FieldTypeModalContent;
    };
    return FieldTypesComponent;
}(__WEBPACK_IMPORTED_MODULE_7__page_table_abstract__["b" /* PageTableAbstractComponent */]));
FieldTypesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shk-field-types',
        template: __webpack_require__("../../../../../src/app/templates/page_field_types.html"),
        providers: [FieldTypesService]
    }),
    __metadata("design:paramtypes", [FieldTypesService, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _g || Object])
], FieldTypesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=field-types.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter-field-by-group.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterFieldByGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var filterFieldByGroup = (function () {
    function filterFieldByGroup() {
    }
    filterFieldByGroup.prototype.transform = function (allFields, groupName) {
        return allFields.filter(function (field) { return field.group == groupName; });
    };
    return filterFieldByGroup;
}());
filterFieldByGroup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'filterFieldByGroup' })
], filterFieldByGroup);

//# sourceMappingURL=filter-field-by-group.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/i18n-providers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTranslationProviders;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_messages_ru__ = __webpack_require__("../../../../../locale/messages.ru.ts");


function getTranslationProviders() {
    // Get the locale id from the global
    var locale = document['locale'];
    // return no providers if fail to get translation file for locale
    var noProviders = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en-US') {
        return Promise.resolve(noProviders);
    }
    return getTranslations(locale)
        .then(function (translations) { return [
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TRANSLATIONS */], useValue: translations },
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* TRANSLATIONS_FORMAT */], useValue: 'xlf' },
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: locale }
    ]; })
        .catch(function () { return noProviders; }); // ignore if file not found
}
function getTranslations(locale) {
    var translation;
    switch (locale) {
        case 'ru':
        case 'ru-RU':
            translation = __WEBPACK_IMPORTED_MODULE_1__locale_messages_ru__["a" /* TRANSLATION_RU */];
            break;
    }
    return Promise.resolve(translation);
}
//# sourceMappingURL=i18n-providers.js.map

/***/ }),

/***/ "../../../../../src/app/list-recursive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRecursiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListRecursiveComponent = (function () {
    function ListRecursiveComponent() {
    }
    ListRecursiveComponent.prototype.ngOnInit = function () {
        this.filterInputItems();
    };
    ListRecursiveComponent.prototype.ngOnChanges = function (changes) {
        if (changes.inputItems) {
            this.filterInputItems();
        }
        if (changes.currentId) {
            this.updateParentsIds();
        }
    };
    ListRecursiveComponent.prototype.filterInputItems = function () {
        this.items = [];
        var items = this.items;
        var parentId = this.parentId;
        this.inputItems.forEach(function (item) {
            if (item.parent_id === parentId) {
                items.push(item);
            }
        });
        this.updateParentsIds();
    };
    /**
     * Update parents ids
     */
    ListRecursiveComponent.prototype.updateParentsIds = function () {
        var index = __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](this.inputItems, { id: this.currentId });
        this.currentParentsIds = [];
        if (index === -1) {
            return;
        }
        this.currentParentsIds = this.getParentIds(this.inputItems[index].parent_id);
    };
    /**
     *
     * @param parentId
     * @param parentIds
     * @returns {number[]}
     */
    ListRecursiveComponent.prototype.getParentIds = function (parentId, parentIds) {
        parentIds = parentIds || [];
        if (parentId > 0) {
            parentIds.push(parentId);
            var index = __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](this.inputItems, { id: parentId });
            if (index === -1) {
                return parentIds;
            }
            return this.getParentIds(this.inputItems[index].parent_id, parentIds);
        }
        else {
            return parentIds;
        }
    };
    /**
     * Check parent id
     * @param itemId
     * @returns {boolean}
     */
    ListRecursiveComponent.prototype.getIsActiveParent = function (itemId) {
        return this.currentParentsIds.indexOf(itemId) > -1;
    };
    return ListRecursiveComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ListRecursiveComponent.prototype, "inputItems", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ListRecursiveComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ListRecursiveComponent.prototype, "parentId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ListRecursiveComponent.prototype, "currentId", void 0);
ListRecursiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'list-recursive',
        template: "\n        <ul>\n            <li *ngFor=\"let item of items\">\n                <a class=\"dropdown-item\">\n                    {{item.title}}\n                </a>\n                <list-recursive [inputItems]=\"inputItems\" [parentId]=\"item.id\" [currentId]=\"currentId\"></list-recursive>\n            </li>\n        </ul>\n    "
    })
], ListRecursiveComponent);

//# sourceMappingURL=list-recursive.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/category.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(id, parent_id, name, title, description, content_type) {
        this.id = id;
        this.parent_id = parent_id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.content_type = content_type;
    }
    return Category;
}());

//# sourceMappingURL=category.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/content_field.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentField; });
var ContentField = (function () {
    function ContentField(id, name, title, description, input_type, input_type_options, output_type, output_type_options, group, is_filter, required) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.input_type = input_type;
        this.input_type_options = input_type_options;
        this.output_type = output_type;
        this.output_type_options = output_type_options;
        this.group = group;
        this.is_filter = is_filter;
        this.required = required;
    }
    return ContentField;
}());

//# sourceMappingURL=content_field.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/content_type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentType; });
var ContentType = (function () {
    function ContentType(id, name, title, description, collection, fields, groups, is_active) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.collection = collection;
        this.fields = fields;
        this.groups = groups;
        this.is_active = is_active;
    }
    return ContentType;
}());

//# sourceMappingURL=content_type.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/field-type-property.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeProperty; });
var FieldTypeProperty = (function () {
    function FieldTypeProperty(name, title, default_value) {
        this.name = name;
        this.title = title;
        this.default_value = default_value;
    }
    return FieldTypeProperty;
}());

//# sourceMappingURL=field-type-property.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(id, parent_id, content_type, name, title, description, price) {
        this.id = id;
        this.parent_id = parent_id;
        this.content_type = content_type;
        this.name = name;
        this.title = title;
        this.description = description;
        this.price = price;
    }
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'not-found-app',
        template: "<h3 class=\"mt-3\">Page not found.</h3>"
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = (function () {
    function OrdersComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Заказы';
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
    };
    OrdersComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shk-settings',
        template: __webpack_require__("../../../../../src/app/templates/page_orders.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], OrdersComponent);

var _a;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-table.abstract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageTableAbstractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service_abstract__ = __webpack_require__("../../../../../src/app/services/data-service.abstract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalContentAbstractComponent = (function () {
    function ModalContentAbstractComponent(fb, dataService, activeModal, tooltipConfig) {
        this.submitted = false;
        this.loading = false;
        this.formErrors = {};
        this.validationMessages = {};
        this.formFields = {};
        this.data = {};
        this.fb = fb;
        this.dataService = dataService;
        this.activeModal = activeModal;
        tooltipConfig.placement = 'bottom';
        tooltipConfig.container = 'body';
    }
    ModalContentAbstractComponent.prototype.ngOnInit = function () {
        this.buildForm(this.formFields);
        if (this.itemId) {
            this.getModelData();
        }
    };
    ModalContentAbstractComponent.prototype.getModelData = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getItem(this.itemId)
            .then(function (item) {
            if (_this.isItemCopy) {
                item.id = '';
                item.name = '';
            }
            _this.data = item;
            _this.loading = false;
        });
    };
    /** Build form groups */
    ModalContentAbstractComponent.prototype.buildForm = function (formFields) {
        var _this = this;
        var controls = {};
        for (var key in formFields) {
            var options = formFields[key];
            if (!this.data[key]) {
                this.data[key] = options.value;
            }
            controls[key] = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.data[key], options.validators);
            this.formErrors[key] = '';
            this.validationMessages[key] = options.messages;
        }
        this.form = this.fb.group(controls);
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    /** Callback on form value changed */
    ModalContentAbstractComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        for (var fieldName in data) {
            this.formErrors[fieldName] = '';
            var control = this.form.get(fieldName);
            if (control && (control.dirty || this.submitted) && !control.valid) {
                for (var key in control.errors) {
                    this.formErrors[fieldName] += this.validationMessages[fieldName][key] + ' ';
                }
            }
        }
    };
    /** Close modal */
    ModalContentAbstractComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    /** Submit form */
    ModalContentAbstractComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.closeModal();
    };
    return ModalContentAbstractComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalContentAbstractComponent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalContentAbstractComponent.prototype, "itemId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalContentAbstractComponent.prototype, "isItemCopy", void 0);
ModalContentAbstractComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({}),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service_abstract__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service_abstract__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]) === "function" && _d || Object])
], ModalContentAbstractComponent);

var PageTableAbstractComponent = (function () {
    function PageTableAbstractComponent(dataService, activeModal, modalService, titleService) {
        this.items = [];
        this.title = 'Page with data table';
        this.loading = false;
        this.selectedIds = [];
        this.dataService = dataService;
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.titleService = titleService;
    }
    PageTableAbstractComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
        this.getList();
    };
    PageTableAbstractComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PageTableAbstractComponent.prototype.modalOpen = function (itemId, isItemCopy) {
        var _this = this;
        this.modalRef = this.modalService.open(this.getModalContent(), { size: 'lg' });
        this.modalRef.componentInstance.modalTitle = itemId && !isItemCopy
            ? 'Edit'
            : 'Add';
        this.modalRef.componentInstance.itemId = itemId || 0;
        this.modalRef.componentInstance.isItemCopy = isItemCopy || false;
        this.modalRef.result.then(function (result) {
            _this.getList();
        }, function (reason) {
            //console.log( 'reason', reason );
        });
    };
    PageTableAbstractComponent.prototype.deleteItemConfirm = function (itemId) {
        var _this = this;
        this.modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__app_component__["c" /* ConfirmModalContent */]);
        this.modalRef.componentInstance.modalTitle = 'Confirm';
        this.modalRef.componentInstance.modalContent = 'Are you sure you want to remove this item?';
        this.modalRef.result.then(function (result) {
            if (result == 'accept') {
                _this.deleteItem(itemId);
            }
        }, function (reason) {
        });
    };
    PageTableAbstractComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.dataService.deleteItem(itemId)
            .then(function (res) {
            if (res.success) {
                _this.getList();
            }
            else {
                if (res.msg) {
                    _this.modalRef = _this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AlertModalContent */]);
                    _this.modalRef.componentInstance.modalContent = res.msg;
                    _this.modalRef.componentInstance.modalTitle = 'Error';
                    _this.modalRef.componentInstance.messageType = 'error';
                }
            }
        });
    };
    PageTableAbstractComponent.prototype.actionRequest = function (actionValue) {
        switch (actionValue[0]) {
            case 'edit':
                this.modalOpen(actionValue[1]);
                break;
            case 'copy':
                this.modalOpen(actionValue[1], true);
                break;
            case 'delete':
                this.deleteItemConfirm(actionValue[1]);
                break;
        }
    };
    PageTableAbstractComponent.prototype.getModalContent = function () {
        return ModalContentAbstractComponent;
    };
    PageTableAbstractComponent.prototype.getList = function () {
        this.loading = true;
    };
    return PageTableAbstractComponent;
}());
PageTableAbstractComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({}),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service_abstract__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service_abstract__["a" /* DataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _h || Object])
], PageTableAbstractComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=page-table.abstract.js.map

/***/ }),

/***/ "../../../../../src/app/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModalContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__ = __webpack_require__("../../../../../src/app/services/content_types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_content_type_model__ = __webpack_require__("../../../../../src/app/models/content_type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_category_model__ = __webpack_require__("../../../../../src/app/models/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductModalContent = (function () {
    function ProductModalContent(fb, activeModal, contentTypesService, productsService) {
        this.fb = fb;
        this.activeModal = activeModal;
        this.contentTypesService = contentTypesService;
        this.productsService = productsService;
        this.submitted = false;
        this.loading = false;
        this.contentTypes = [];
        this.currentContentType = new __WEBPACK_IMPORTED_MODULE_5__models_content_type_model__["a" /* ContentType */]('', '', '', '', '', [], [], true);
        this.formErrors = {
            parent_id: '',
            name: '',
            title: '',
            content_type: ''
        };
    }
    /** On initialize */
    ProductModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new __WEBPACK_IMPORTED_MODULE_7__models_product_model__["a" /* Product */](0, 0, this.category.content_type, '', '', '', 0);
        this.buildForm();
        if (this.itemId) {
            this.getData();
        }
        else {
            this.getContentTypes()
                .then(function (items) {
                _this.contentTypes = items;
                _this.selectCurrentContentType();
                _this.updateForm();
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    ProductModalContent.prototype.buildForm = function () {
        var group = {};
        group['content_type'] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.category.content_type, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */](group);
    };
    /** Build form */
    ProductModalContent.prototype.updateForm = function (data) {
        var _this = this;
        if (!data) {
            data = this.form.value;
        }
        var newKeys = __WEBPACK_IMPORTED_MODULE_8_lodash__["map"](this.currentContentType.fields, function (field) {
            return field.name;
        });
        newKeys.push('content_type');
        //Remove keys
        for (var key in this.form.controls) {
            if (this.form.controls.hasOwnProperty(key)) {
                if (newKeys.indexOf(key) === -1) {
                    this.form.removeControl(key);
                }
            }
        }
        //Add new controls
        this.currentContentType.fields.forEach(function (field) {
            if (!_this.form.controls[field.name]) {
                var group = field.required
                    ? new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data[field.name] || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
                    : new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data[field.name] || '');
                _this.form.addControl(field.name, group);
            }
        });
    };
    ProductModalContent.prototype.getData = function () {
        var _this = this;
        this.loading = true;
        this.productsService.getItem(this.itemId)
            .then(function (data) {
            return new Promise(function (resolve, reject) {
                _this.getContentTypes()
                    .then(function (items) {
                    _this.contentTypes = items;
                    resolve(data);
                });
            });
        })
            .then(function (data) {
            _this.setCurrentContentType(data.content_type);
            _this.updateForm(data);
            _this.loading = false;
        });
    };
    /** Select current content type */
    ProductModalContent.prototype.selectCurrentContentType = function () {
        var index = __WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"](this.contentTypes, { name: this.form.get('content_type').value });
        if (index == -1) {
            index = 0;
        }
        if (this.contentTypes[index]) {
            this.currentContentType = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.contentTypes[index]);
            this.form.get('content_type').setValue(this.currentContentType.name);
            this.updateForm();
        }
    };
    ProductModalContent.prototype.setCurrentContentType = function (contentTypeName) {
        var index = __WEBPACK_IMPORTED_MODULE_8_lodash__["findIndex"](this.contentTypes, { name: contentTypeName });
        if (index == -1) {
            index = 0;
        }
        if (this.contentTypes[index]) {
            this.currentContentType = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.contentTypes[index]);
            this.form.get('content_type').setValue(this.currentContentType.name);
        }
    };
    /** On change content type */
    ProductModalContent.prototype.onChangeContentType = function () {
        this.selectCurrentContentType();
    };
    /** Get content types */
    ProductModalContent.prototype.getContentTypes = function () {
        return this.contentTypesService.getList(true);
    };
    /**
     * On form value changed
     * @param data
     */
    ProductModalContent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        //console.log( 'onValueChange', data );
    };
    /** Submit form */
    ProductModalContent.prototype.onSubmit = function () {
        var _this = this;
        this.errorMessage = '';
        this.submitted = true;
        if (!this.form.valid) {
            this.onValueChanged();
            this.errorMessage = 'Please fix the errors fill.';
            return;
        }
        var data = this.form.value;
        data.parent_id = this.category.id;
        //TODO: write code for update
        this.productsService.createItem(data)
            .then(function (res) {
            if (res.success) {
                _this.closeModal();
            }
            else {
                if (res.msg) {
                    _this.errorMessage = res.msg;
                }
            }
        });
    };
    /** Close modal */
    ProductModalContent.prototype.closeModal = function () {
        var reason = this.itemId ? 'edit' : 'create';
        this.activeModal.close({ reason: reason, data: this.model });
    };
    return ProductModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductModalContent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ProductModalContent.prototype, "itemId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* Category */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* Category */]) === "function" && _a || Object)
], ProductModalContent.prototype, "category", void 0);
ProductModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ngbd-modal-content',
        template: __webpack_require__("../../../../../src/app/templates/modal_product.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_content_types_service__["a" /* ContentTypesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */]) === "function" && _e || Object])
], ProductModalContent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.listUrl = 'app/categories_list';
        this.oneUrl = 'app/category';
    }
    CategoriesService.prototype.createItem = function (item) {
        return this.http
            .post(this.oneUrl, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoriesService.prototype.editItem = function (id, item) {
        var url = this.oneUrl + "/" + id;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoriesService.prototype.getItem = function (id) {
        var url = this.oneUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CategoriesService.prototype.getList = function () {
        return this.http.get(this.listUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CategoriesService.prototype.deleteItem = function (id) {
        var url = this.oneUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoriesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CategoriesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CategoriesService);

var _a;
//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/content_types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentTypesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentTypesService = (function () {
    function ContentTypesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.listUrl = 'app/content_type_list';
        this.listUrlFull = 'app/content_type_list?full=1';
        this.oneUrl = 'app/content_type';
    }
    ContentTypesService.prototype.getList = function (full) {
        var url = full ? this.listUrlFull : this.listUrl;
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ContentTypesService.prototype.getItem = function (id) {
        var url = this.oneUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ContentTypesService.prototype.createItem = function (item) {
        return this.http
            .post(this.oneUrl, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContentTypesService.prototype.editItem = function (id, item) {
        var url = this.oneUrl + "/" + id;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContentTypesService.prototype.deleteItem = function (id) {
        var url = this.oneUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContentTypesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ContentTypesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return ContentTypesService;
}());
ContentTypesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContentTypesService);

var _a;
//# sourceMappingURL=content_types.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-service.abstract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.requestUrl = '';
        this.http = http;
        this.requestUrl = 'app/data_list';
    }
    DataService.prototype.setRequestUrl = function (url) {
        this.requestUrl = url;
    };
    DataService.prototype.getItem = function (id) {
        var url = this.requestUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.getList = function () {
        return this.http.get(this.requestUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.deleteItem = function (id) {
        var url = this.requestUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (item) {
        return this.http
            .post(this.requestUrl, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (item) {
        var url = this.requestUrl + "/" + item.id;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data-service.abstract.js.map

/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.listUrl = 'app/products_list';
        this.oneUrl = 'app/product';
    }
    ProductsService.prototype.createItem = function (data) {
        return this.http
            .post(this.oneUrl, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductsService.prototype.editItem = function (id, data) {
        var url = this.oneUrl + "/" + id;
        return this.http
            .put(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductsService.prototype.getList = function (categoryId) {
        return this.http.get(this.listUrl + '/' + categoryId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductsService.prototype.getItem = function (id) {
        var url = this.oneUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ProductsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return ProductsService;
}());
ProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Настройки';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
    };
    SettingsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shk-settings',
        template: __webpack_require__("../../../../../src/app/templates/page_settings.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = (function () {
    function StatisticsComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Статистика';
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
    };
    StatisticsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shk-settings',
        template: __webpack_require__("../../../../../src/app/templates/page_statistics.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], StatisticsComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ "../../../../../src/app/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function () {
    function TableComponent(router) {
        this.router = router;
        this.actionRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loading = false;
        this.selectedIds = [];
        this.sortDir = 'asc';
    }
    TableComponent.prototype.ngOnInit = function () {
        this.sortBy = this.tableFields[0].name;
    };
    TableComponent.prototype.editItem = function (itemId) {
        //this.editItemRequest.emit(itemId);
    };
    TableComponent.prototype.copyItem = function (itemId) {
        //this.copyItemRequest.emit(itemId);
    };
    TableComponent.prototype.deleteItem = function (itemId) {
        //this.deleteItemRequest.emit(itemId);
    };
    TableComponent.prototype.selectSortBy = function (fieldName) {
        if (this.sortBy == fieldName) {
            this.sortDir = this.sortDir == 'asc' ? 'desc' : 'asc';
        }
        else {
            this.sortBy = fieldName;
        }
    };
    TableComponent.prototype.selectAll = function (event) {
        this.selectedIds = [];
        if (event.target.checked) {
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.selectedIds.push(item.id);
            }
        }
    };
    TableComponent.prototype.setSelected = function (event, itemId) {
        var index = this.selectedIds.indexOf(itemId);
        if (event.target.checked) {
            if (index == -1) {
                this.selectedIds.push(itemId);
            }
        }
        else if (index > -1) {
            this.selectedIds.splice(index, 1);
        }
    };
    TableComponent.prototype.action = function (actionName, actionValue) {
        this.actionRequest.emit([actionName, actionValue]);
    };
    TableComponent.prototype.getIsSelected = function (itemId) {
        return this.selectedIds.lastIndexOf(itemId) > -1;
    };
    return TableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TableComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TableComponent.prototype, "tableFields", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TableComponent.prototype, "itemsTotal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "actionRequest", void 0);
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cmp-table',
        template: __webpack_require__("../../../../../src/app/templates/cmp-table.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], TableComponent);

var _a;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/templates/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div class=\"card-navbar\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-outline-primary\" [routerLink]=\"['/orders']\" routerLinkActive=\"active\">\n                <i class=\"icon-bag\"></i>\n                <span class=\"hidden-xs-down\" i18n>Orders</span>\n            </a>\n            <a class=\"btn btn-outline-primary\" [routerLink]=\"['/statistics']\" routerLinkActive=\"active\">\n                <i class=\"icon-bar-graph-2\"></i>\n                <span class=\"hidden-xs-down\" i18n>Statistics</span>\n            </a>\n            <a class=\"btn btn-outline-primary\" [routerLink]=\"['/catalog']\" routerLinkActive=\"active\">\n                <i class=\"icon-layers\"></i>\n                <span class=\"hidden-xs-down\" i18n>Catalog</span>\n            </a>\n            <a class=\"btn btn-outline-primary\" [routerLink]=\"['/settings']\" routerLinkActive=\"active\">\n                <i class=\"icon-cog\"></i>\n                <span class=\"hidden-xs-down\" i18n>Settings</span>\n            </a>\n        </div>\n    </div>\n\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/categories-menu.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-inline-block dropdown\">\n    <button class=\"btn btn-info dropdown-toggle dropdown-toggle-hover\">\n        <i class=\"icon-folder\"></i>\n        {{currentCategory.title}}\n    </button>\n    <div class=\"dropdown-menu shadow\" #categoriesDropdown>\n        <div class=\"dropdown-header\">\n            <button class=\"btn btn-sm btn-secondary\" ngbTooltip=\"Open root category\" (click)=\"goToRootCategory()\" *ngIf=\"currentCategory.id > 0\">\n                <i class=\"icon-home\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" ngbTooltip=\"Add new category\" (click)=\"openModalCategory()\">\n                <i class=\"icon-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" ngbTooltip=\"Edit current category\" (click)=\"openModalCategory(currentCategory.id)\" [hidden]=\"currentCategory.id == 0\">\n                <i class=\"icon-pencil\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" ngbTooltip=\"Copy category\" (click)=\"copyCategory()\" [hidden]=\"currentCategory.id == 0\">\n                <i class=\"icon-stack\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" ngbTooltip=\"Move current category\" (click)=\"moveCategory()\" [hidden]=\"currentCategory.id == 0\">\n                <i class=\"icon-arrow-right\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" ngbTooltip=\"Delete current category\" (click)=\"deleteCategoryItemConfirm(currentCategory.id)\" [hidden]=\"currentCategory.id == 0\">\n                <i class=\"icon-cross\"></i>\n            </button>\n        </div>\n        <div class=\"dropdown-divider\"></div>\n        <div class=\"dropdown-header\" *ngIf=\"categories.length == 0\">\n            No categories.\n        </div>\n\n        <categories-list [inputItems]=\"categories\" [parentId]=\"0\" [currentId]=\"currentCategory.id\"></categories-list>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/cmp-table.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" [class.loading]=\"loading\">\n    <table class=\"table table-striped table-divided mb-0\">\n        <thead>\n            <tr>\n                <th class=\"text-left\">\n                    <label class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectAll($event)\">\n                        <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </th>\n                <th *ngFor=\"let tableField of tableFields; let index=index\">\n                    <button type=\"button\" class=\"btn btn-block btn-link\" (click)=\"selectSortBy(tableField.name)\">\n                        {{tableField.title}}\n                        <i [class.icon-arrow-down]=\"sortDir == 'asc'\" [class.icon-arrow-up]=\"sortDir == 'desc'\" [style.visibility]=\"tableField.name == sortBy ? 'visible' : 'hidden'\"></i>\n                    </button>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"show-on-hover-parent\" *ngFor=\"let item of items\">\n                <td>\n                    <label class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getIsSelected(item.id)\" (click)=\"setSelected($event, item.id)\">\n                        <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </td>\n                <td *ngFor=\"let tableField of tableFields; let index=index\">\n                    <div class=\"relative\" *ngIf=\"index == tableFields.length - 1\">\n                        <div class=\"show-on-hover no-wrap\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Edit\" (click)=\"action('edit', item.id)\">\n                                <i class=\"icon-pencil\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Copy\" (click)=\"action('copy', item.id)\">\n                                <i class=\"icon-stack\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Delete\" (click)=\"action('delete', item.id)\">\n                                <i class=\"icon-cross\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    {{item[tableField.name]}}\n\n                    <!--i class=\"big text-success icon-circle-check\" [hidden]=\"!item.is_active\"></i>\n                    <i class=\"big text-muted icon-circle-cross\" [hidden]=\"item.is_active\"></i-->\n                </td>\n            </tr>\n        <tr [hidden]=\"items.length > 0\" class=\"table-active\">\n            <td [attr.colspan]=\"tableFields.length + 1\" class=\"text-center p-4\">\n                Empty.\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"card-footer\">\n\n    <div class=\"float-right\">\n        <select class=\"form-control\">\n            <option value=\"10\">10</option>\n            <option value=\"20\">20</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n        </select>\n    </div>\n\n    <ngb-pagination [class]=\"'mb-0'\" [collectionSize]=\"120\" [page]=\"1\" [maxSize]=\"8\" [rotate]=\"true\" [boundaryLinks]=\"false\"></ngb-pagination>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/modal_alert.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n</div>\n<div class=\"modal-body\">\n    {{modalContent}}\n</div>\n<div class=\"modal-footer d-block\">\n    <button type=\"button\" class=\"btn btn-info btn-wide\" (click)=\"activeModal.close()\">\n        Ok\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/modal_category.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\n    <div class=\"d-block float-right\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">\n            Close\n        </button>\n    </div>\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n</div>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" [class.loading]=\"loading\">\n\n    <div class=\"modal-body\">\n\n        <div class=\"row form-group\" [class.form-group-message]=\"formErrors.parent_id\">\n            <div class=\"col-md-5\">\n                <label for=\"fieldContentType\">Родительская папка</label>\n            </div>\n            <div class=\"col-md-7\">\n                <select id=\"fieldParent\" class=\"form-control\" name=\"parent_id\" formControlName=\"parent_id\" [(ngModel)]=\"model.parent_id\">\n                    <option value=\"0\">Корневая категория</option>\n                    <option value=\"{{category.id}}\" *ngFor=\"let category of categories\">{{category.title}}</option>\n                </select>\n                <div *ngIf=\"formErrors.parent_id\" class=\"alert alert-danger\">\n                    {{formErrors.parent_id}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group\" [class.form-group-message]=\"formErrors.name\">\n            <div class=\"col-md-5\">\n                <label for=\"fieldName\">Системное имя</label>\n            </div>\n            <div class=\"col-md-7\">\n                <input type=\"text\" id=\"fieldName\" class=\"form-control\" name=\"name\" formControlName=\"name\" [(ngModel)]=\"model.name\">\n                <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">\n                    {{formErrors.name}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group\" [class.form-group-message]=\"formErrors.title\">\n            <div class=\"col-md-5\">\n                <label for=\"fieldTitle\">Название</label>\n            </div>\n            <div class=\"col-md-7\">\n                <input type=\"text\" id=\"fieldTitle\" class=\"form-control\" formControlName=\"title\" name=\"title\" [(ngModel)]=\"model.title\">\n                <div *ngIf=\"formErrors.title\" class=\"alert alert-danger\">\n                    {{formErrors.title}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group\">\n            <div class=\"col-md-5\">\n                <label for=\"fieldDescription\">Описание</label>\n            </div>\n            <div class=\"col-md-7\">\n                <textarea type=\"text\" id=\"fieldDescription\" rows=\"4\" class=\"form-control\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"model.description\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"row form-group\" [class.form-group-message]=\"formErrors.content_type\">\n            <div class=\"col-md-5\">\n                <label for=\"fieldContentType\">Тип контента</label>\n            </div>\n            <div class=\"col-md-7\">\n                <select id=\"fieldContentType\" class=\"form-control\" name=\"content_type\" formControlName=\"content_type\" [(ngModel)]=\"model.content_type\">\n                    <option value=\"1\" *ngFor=\"let contentType of contentTypes\" [value]=\"contentType.name\">{{contentType.title}}</option>\n                </select>\n                <div *ngIf=\"formErrors.content_type\" class=\"alert alert-danger\">\n                    {{formErrors.content_type}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"alert alert-danger mt-3 mb-0\" [hidden]=\"!errorMessage\">\n            <button type=\"button\" class=\"close\" (click)=\"errorMessage = ''\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            {{errorMessage}}\n        </div>\n    </div>\n\n    <div class=\"modal-footer d-block\">\n        <button type=\"submit\" class=\"btn btn-success btn-wide\">\n            Save\n        </button>\n        <button type=\"submit\" class=\"btn btn-secondary btn-wide\" (click)=\"activeModal.dismiss()\">\n            Cancel\n        </button>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/templates/modal_confirm.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n</div>\n<div class=\"modal-body\">\n    {{modalContent}}\n</div>\n<div class=\"modal-footer d-block\">\n    <button type=\"button\" class=\"btn btn-success btn-wide\" (click)=\"accept()\">\n        Yes\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary btn-wide\" (click)=\"activeModal.close()\">\n        No\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/modal_content_types.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\n    <div class=\"d-block float-right\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">\n            Close\n        </button>\n    </div>\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n</div>\n\n<form (ngSubmit)=\"onSubmit()\" [class.loading]=\"loading\">\n\n    <div class=\"modal-body\">\n\n        <div class=\"row\">\n\n            <!-- ContentType form -->\n            <div class=\"col-lg-4\" [formGroup]=\"contentTypeForm\">\n\n                <div class=\"form-group\" [class.form-group-message]=\"formErrors.contentType.title\">\n                    <label class=\"label-filled\">\n                        Название\n                    </label>\n                    <input type=\"text\" class=\"form-control\" name=\"title\" formControlName=\"title\" [(ngModel)]=\"model.title\">\n                    <div *ngIf=\"formErrors.contentType.title\" class=\"alert alert-danger\">\n                        {{formErrors.contentType.title}}\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [class.form-group-message]=\"formErrors.contentType.name\">\n                    <label class=\"label-filled\">\n                        Системное имя\n                    </label>\n                    <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"name\" [(ngModel)]=\"model.name\">\n                    <div *ngIf=\"formErrors.contentType.name\" class=\"alert alert-danger\">\n                        {{formErrors.contentType.name}}\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"label-filled\">\n                        Описание\n                    </label>\n                    <textarea type=\"text\" class=\"form-control\" name=\"description\" formControlName=\"description\" [(ngModel)]=\"model.description\"></textarea>\n                </div>\n\n                <div class=\"form-group row\">\n                    <div class=\"col-12\">\n\n                        <div class=\"form-group\">\n                            <label class=\"label-filled\">Коллекция</label>\n                            <div class=\"input-group\">\n                                <select class=\"form-control form-control-sm\" name=\"collection\" formControlName=\"collection\" [(ngModel)]=\"model.collection\">\n                                    <option value=\"{{collection}}\" *ngFor=\"let collection of collections\">{{collection}}</option>\n                                </select>\n                                <div class=\"input-group-btn\">\n                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Add collection\" (click)=\"displayToggle(addCollectionBlock); addCollectionField.value = ''; onValueChanged(); addCollectionField.focus()\">\n                                        <i class=\"icon-plus\"></i>\n                                    </button>\n                                </div>\n                                <div class=\"input-group-btn\">\n                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Delete collection\" (click)=\"deleteCollection()\">\n                                        <i class=\"icon-cross\"></i>\n                                    </button>\n                                </div>\n                            </div>\n\n                            <div class=\"card p-1 mt-2\" #addCollectionBlock style=\"display: none;\" [class.form-group-message]=\"formErrors.contentType.new_collection\">\n                                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"new_collection\" #addCollectionField>\n                                <div *ngIf=\"formErrors.contentType.new_collection\" class=\"alert alert-danger mb-1\">\n                                    {{formErrors.contentType.new_collection}}\n                                </div>\n\n                                <div class=\"text-right mt-1\">\n                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"addCollection();\">\n                                        Add\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"addCollectionBlock.style.display = 'none'; formErrors.contentType.new_collection = ''\">\n                                        Cancel\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n            <!-- /ContentType form -->\n\n            <!-- Field form -->\n            <div class=\"col-lg-8\" [formGroup]=\"fieldForm\">\n\n                <label class=\"label-filled\" [hidden]=\"action != 'add_field'\">\n                    Добавить поле\n                </label>\n                <label class=\"label-filled\" [hidden]=\"action != 'edit_field'\">\n                    Редактировать поле\n                </label>\n\n                <div class=\"card\">\n                    <div class=\"card-body\">\n\n                        <div class=\"form-group row\" [class.form-group-message]=\"formErrors.field.title\">\n                            <div class=\"col-md-5\">\n                                <label class=\"small\">Название</label>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"field_title\" formControlName=\"title\">\n                                <div *ngIf=\"formErrors.field.title\" class=\"alert alert-danger\">\n                                    {{formErrors.field.title}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\" [class.form-group-message]=\"formErrors.field.name\">\n                            <div class=\"col-md-5\">\n                                <label class=\"small\">Системное имя</label>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"field_name\" formControlName=\"name\">\n                                <div *ngIf=\"formErrors.field.name\" class=\"alert alert-danger\">\n                                    {{formErrors.field.name}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-5\">\n                                <label class=\"small\">Описание</label>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <textarea type=\"text\" class=\"form-control form-control-sm\" name=\"field_description\" formControlName=\"description\"></textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\" [class.form-group-message]=\"formErrors.field.input_type\">\n                            <div class=\"col-md-5\">\n                                <label class=\"small\">Тип ввода</label>\n                            </div>\n                            <div class=\"col-md-7\">\n\n                                <div class=\"input-group\">\n                                    <select class=\"form-control form-control-sm\" name=\"field_input_type\" formControlName=\"input_type\">\n                                        <option value=\"text\">Текстовое поле</option>\n                                        <option value=\"textarea\">Многострочный текст</option>\n                                        <option value=\"richtext\">Текстовый редактор</option>\n                                        <option value=\"number\">Число</option>\n                                        <option value=\"select\">Выпадающий список</option>\n                                        <option value=\"checkbox\">Чекбокс</option>\n                                        <option value=\"radio\">Переключатель</option>\n                                        <option value=\"table\">Таблица</option>\n                                        <option value=\"date\">Дата</option>\n                                        <option value=\"file\">Файл</option>\n                                        <option value=\"image\">Картинка</option>\n                                    </select>\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Options\" (click)=\"displayToggle(inputTypeOptionsBlock)\">\n                                            <i class=\"icon-cog\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"formErrors.field.input_type\" class=\"alert alert-danger\">\n                                    {{formErrors.field.input_type}}\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"card card-body mb-3\" #inputTypeOptionsBlock style=\"display: none;\">\n                            <div>\n                                Тут будут параметры\n                            </div>\n                            <div class=\"text-right mt-1\">\n                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"inputTypeOptionsBlock.style.display = 'none';\">\n                                    Close\n                                </button>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\" [class.form-group-message]=\"formErrors.field.output_type\">\n                            <div class=\"col-md-5\">\n                                <label class=\"small\">Тип вывода</label>\n                            </div>\n                            <div class=\"col-md-7\">\n\n                                <div class=\"input-group\">\n                                    <select class=\"form-control form-control-sm\" name=\"field_output_type\" formControlName=\"output_type\">\n                                        <option value=\"text\">Текст</option>\n                                        <option value=\"number\">Число</option>\n                                        <option value=\"select\">Выпадающий список</option>\n                                        <option value=\"checkbox\">Чекбокс</option>\n                                        <option value=\"radio\">Переключатель</option>\n                                        <option value=\"table\">Таблица</option>\n                                        <option value=\"image\">Картинка</option>\n                                        <option value=\"boolean\">Да/Нет</option>\n                                    </select>\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Options\" (click)=\"displayToggle(outputTypeOptionsBlock)\">\n                                            <i class=\"icon-cog\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"formErrors.field.output_type\" class=\"alert alert-danger\">\n                                    {{formErrors.field.output_type}}\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"card card-body mb-3\" #outputTypeOptionsBlock style=\"display: none;\">\n                            <div>\n                                Тут будут параметры\n                            </div>\n                            <div class=\"text-right mt-1\">\n                                <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"outputTypeOptionsBlock.style.display = 'none'\">\n                                    Close\n                                </button>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-5\">\n                                <label class=\"small\">Группа</label>\n                            </div>\n                            <div class=\"col-md-7\">\n\n                                <div [class.form-group-message]=\"formErrors.field.group\">\n                                    <div class=\"input-group input-group-sm\">\n                                        <select class=\"form-control\" name=\"field_group\" formControlName=\"group\">\n                                            <option value=\"{{group}}\" *ngFor=\"let group of model.groups\">{{group}}</option>\n                                        </select>\n                                        <div class=\"input-group-btn\">\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Add group\" (click)=\"displayToggle(addGroupBlock); addGroupField.value = ''; addGroupField.focus()\">\n                                                <i class=\"icon-plus\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"input-group-btn\">\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" ngbTooltip=\"Delete group\" (click)=\"deleteGroup()\">\n                                                <i class=\"icon-cross\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"formErrors.field.group\" class=\"alert alert-danger\">\n                                        {{formErrors.field.group}}\n                                    </div>\n\n                                    <div class=\"card p-1 mt-2\" #addGroupBlock style=\"display: none;\" [class.form-group-message]=\"formErrors.field.new_group\">\n                                        <input type=\"text\" class=\"form-control form-control-sm\" #addGroupField formControlName=\"new_group\">\n                                        <div *ngIf=\"formErrors.field.new_group\" class=\"alert alert-danger mb-1\">\n                                            {{formErrors.field.new_group}}\n                                        </div>\n                                        <div class=\"text-right mt-1\">\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"addGroup();\">\n                                                Add\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"addGroupBlock.style.display = 'none'; formErrors.field.new_group = ''\">\n                                                Cancel\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row mb-0\">\n                            <div class=\"col-md-7 offset-md-5\">\n\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\" name=\"required\" formControlName=\"required\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"small\">Обязательный</span>\n                                </label>\n\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row mb-0\">\n                            <div class=\"col-md-7 offset-md-5\">\n\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\" name=\"show_in_table\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"small\">Показывать в таблице</span>\n                                </label>\n\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row mb-0\">\n                            <div class=\"col-md-7 offset-md-5\">\n\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\" name=\"is_filter\" formControlName=\"is_filter\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"small\">Показывать в фильтре</span>\n                                </label>\n\n                            </div>\n                        </div>\n\n                        <div class=\"alert alert-danger mt-3 mb-3\" [hidden]=\"!errorFieldMessage\">\n                            <button type=\"button\" class=\"close\" (click)=\"errorFieldMessage = ''\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                            {{errorFieldMessage}}\n                        </div>\n\n                        <div class=\"mt-3\">\n                            <button type=\"button\" class=\"btn btn-sm btn-info btn-wide\" (click)=\"submitField()\" [hidden]=\"action != 'add_field'\">\n                                <i class=\"icon-plus\"></i>\n                                Add field\n                            </button>\n                            <button type=\"button\" class=\"btn btn-sm btn-success btn-wide\" (click)=\"displayToggle(fieldsBlock, true); submitField()\" [hidden]=\"action != 'edit_field'\">\n                                <i class=\"icon-check\"></i>\n                                Save field\n                            </button>\n                            <button type=\"button\" class=\"btn btn-sm btn-secondary btn-wide\" (click)=\"displayToggle(fieldsBlock, true); editFieldCancel()\">\n                                Cancel\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- /Field form -->\n\n            </div>\n        </div>\n\n        <div class=\"form-group row mt-3\">\n            <div class=\"col-12\">\n\n                <label class=\"label-filled\">\n                    Поля\n                </label>\n\n                <hr class=\"mt-0 mb-0\">\n                <div class=\"text-center mb-2\" style=\"margin-top: -0.8rem;\">\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" [ngSwitch]=\"fieldsBlock.style.display\" (click)=\"displayToggle(fieldsBlock)\">\n                        <span *ngSwitchCase=\"'none'\">\n                            <i class=\"icon-plus\"></i>\n                            <span i18n>Expand</span>\n                        </span>\n                        <span *ngSwitchCase=\"'block'\">\n                            <i class=\"icon-minus\"></i>\n                            <span i18n>Collapse</span>\n                        </span>\n                    </button>\n                </div>\n\n                <div #fieldsBlock style=\"display: block;\">\n                    <table class=\"table table-striped table-divided mb-0\">\n                        <thead>\n                            <tr>\n                                <th>Название</th>\n                                <th>Системное имя</th>\n                                <th>Тип ввода</th>\n                                <th>Группа</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr class=\"show-on-hover-parent\" *ngFor=\"let item of model.fields\">\n                                <td>\n                                    {{item.title}}\n                                </td>\n                                <td>\n                                    {{item.name}}\n                                </td>\n                                <td>\n                                    {{item.input_type}}\n                                </td>\n                                <td>\n                                    <div class=\"relative\">\n                                        <div class=\"show-on-hover\">\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"displayToggle(fieldsBlock); editField(item)\" [hidden]=\"item.name == currentFieldName\" ngbTooltip=\"Edit\">\n                                                <i class=\"icon-pencil\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"displayToggle(fieldsBlock); copyField(item)\" ngbTooltip=\"Copy\">\n                                                <i class=\"icon-stack\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"deleteField(item)\" [hidden]=\"item.name == currentFieldName\" ngbTooltip=\"Delete\">\n                                                <i class=\"icon-cross\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                    {{item.group}}\n                                </td>\n                            </tr>\n                            <tr [hidden]=\"model.fields.length > 0\" class=\"table-warning\">\n                                <td colspan=\"4\" class=\"text-center\">\n                                    Empty\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <div class=\"alert alert-danger mt-3 mb-0\" [hidden]=\"!errorMessage\">\n                    <button type=\"button\" class=\"close\" (click)=\"errorMessage = ''\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    {{errorMessage}}\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n    <div class=\"modal-footer d-block\">\n        <button type=\"submit\" class=\"btn btn-success btn-wide\">\n            Save\n        </button>\n        <button type=\"submit\" class=\"btn btn-secondary btn-wide\" (click)=\"activeModal.dismiss()\">\n            Cancel\n        </button>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/templates/modal_field_type.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\n    <div class=\"d-block float-right\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">\n            Close\n        </button>\n    </div>\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n</div>\n\n<div class=\"modal-body\" [class.loading]=\"loading\">\n\n    <form #formElement=\"ngForm\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\" [class.form-group-message]=\"formErrors.name\">\n                    <label for=\"fieldName\" class=\"label-filled\">Системное имя</label>\n                    <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"name\" id=\"fieldName\" [(ngModel)]=\"data.name\">\n                    <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">\n                        {{formErrors.name}}\n                    </div>\n                </div>\n                <div class=\"form-group form-group-message\" [class.form-group-message]=\"formErrors.title\">\n                    <label for=\"fieldTitle\" class=\"label-filled\">Название</label>\n                    <input type=\"text\" class=\"form-control\" name=\"title\" formControlName=\"title\" id=\"fieldTitle\" [(ngModel)]=\"data.title\">\n                    <div *ngIf=\"formErrors.title\" class=\"alert alert-danger\">\n                        {{formErrors.title}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"fieldDescription\" class=\"label-filled\">Описание</label>\n                    <textarea class=\"form-control\" rows=\"5\" name=\"description\" formControlName=\"description\" id=\"fieldDescription\" [(ngModel)]=\"data.description\"></textarea>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <label class=\"label-filled\">Свойства</label>\n\n    <table class=\"table table-bordered table-divided mb-0\">\n        <thead>\n            <tr>\n                <th>\n                    Системное имя\n                </th>\n                <th>\n                    Название\n                </th>\n                <th>\n                    По умолчанию\n                </th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of data.properties; let index=index\">\n                <td>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.name\" name=\"name\">\n                </td>\n                <td class=\"text-center\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.title\" name=\"title\">\n                </td>\n                <td class=\"text-center\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.default_value\" name=\"default_value\">\n                </td>\n                <td class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteRow(index)\" ngbTooltip=\"Remove\">\n                        <i class=\"icon-cross\"></i>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr class=\"bg-faded\">\n                <td colspan=\"4\" class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addRow()\">\n                        <i class=\"icon-plus\"></i>\n                        Добавить\n                    </button>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n\n    <div class=\"alert alert-danger mt-3 mb-0\" [hidden]=\"!errorMessage\">\n        <button type=\"button\" class=\"close\" (click)=\"errorMessage = ''\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        {{errorMessage}}\n    </div>\n\n</div>\n<div class=\"modal-footer d-block\">\n    <button type=\"submit\" class=\"btn btn-success btn-wide\" [disabled]=\"submitted\" (click)=\"save()\">\n        Save\n    </button>\n    <button type=\"submit\" class=\"btn btn-secondary btn-wide\" (click)=\"activeModal.dismiss()\">\n        Cancel\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/modal_product.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\n    <div class=\"d-block float-right\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">\n            Close\n        </button>\n    </div>\n    <h4 class=\"modal-title\">{{modalTitle}}</h4>\n</div>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" [class.loading]=\"loading\">\n    <div class=\"modal-body\">\n\n        <div class=\"row form-group\" [class.form-group-message]=\"formErrors.content_type\">\n            <div class=\"col-md-5\">\n                <label for=\"fieldContentType\">Тип контента</label>\n            </div>\n            <div class=\"col-md-7\">\n                <select id=\"fieldContentType\" class=\"form-control\" name=\"content_type\" formControlName=\"content_type\" (change)=\"onChangeContentType()\">\n                    <option value=\"1\" *ngFor=\"let contentType of contentTypes\" [value]=\"contentType.name\">{{contentType.title}}</option>\n                </select>\n                <div *ngIf=\"formErrors.content_type\" class=\"alert alert-danger\">\n                    {{formErrors.content_type}}\n                </div>\n            </div>\n        </div>\n\n        <ngb-tabset>\n            <ngb-tab title=\"{{groupName}}\" id=\"{{i + 1}}\" *ngFor=\"let groupName of currentContentType.groups; let i=index\">\n                <ng-template ngbTabContent>\n                    <div class=\"pt-3\">\n\n                        <div class=\"row form-group\" *ngFor=\"let field of currentContentType.fields | filterFieldByGroup: groupName\">\n                            <div class=\"col-md-5\">\n                                <label for=\"field_{{field.name}}\">{{ field.title }}</label>\n                            </div>\n                            <div class=\"col-md-7\" [ngSwitch]=\"field.input_type\">\n\n                                <input *ngSwitchCase=\"'text'\" type=\"text\" id=\"field_{{field.name}}\" class=\"form-control\" [formControlName]=\"field.name\">\n\n                                <input *ngSwitchCase=\"'number'\" type=\"number\" id=\"field_{{field.name}}\" min=\"0\" class=\"form-control\" [formControlName]=\"field.name\">\n\n                                <textarea *ngSwitchCase=\"'textarea'\" rows=\"6\" id=\"field_{{field.name}}\" class=\"form-control\" [formControlName]=\"field.name\"></textarea>\n\n                                <input *ngSwitchCase=\"'image'\" type=\"file\" id=\"field_{{field.name}}\" class=\"form-control\" [formControlName]=\"field.name\">\n\n                            </div>\n                        </div>\n\n                    </div>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n\n        <div class=\"alert alert-danger mt-3 mb-0\" [hidden]=\"!errorMessage\">\n            <button type=\"button\" class=\"close\" (click)=\"errorMessage = ''\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            {{errorMessage}}\n        </div>\n\n    </div>\n    <div class=\"modal-footer d-block\">\n        <button type=\"submit\" class=\"btn btn-success btn-wide\">\n            Save\n        </button>\n        <button type=\"submit\" class=\"btn btn-secondary btn-wide\" (click)=\"activeModal.dismiss()\">\n            Cancel\n        </button>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/templates/page_catalog.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n\n    <div class=\"card-body\">\n\n        <div class=\"float-right\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['/catalog/content_types']\">\n                <i class=\"icon-box\"></i>\n                Типы товаров\n            </a>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/catalog/field_types']\">\n                <i class=\"icon-toggle\"></i>\n                Типы полей\n            </a>\n        </div>\n        <h3>\n            <i class=\"icon-layers\"></i>\n            {{title}}\n        </h3>\n\n        <hr>\n\n        <div class=\"float-right\">\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-info\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    Массовые дейсвия\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n                    <button class=\"dropdown-item\">Отключить / включить</button>\n                    <button class=\"dropdown-item\">Удалить</button>\n                </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"modalProductOpen()\">\n                <i class=\"icon-plus\"></i>\n                Add product\n            </button>\n\n        </div>\n        <div class=\"float-left\">\n\n            <categories-menu (changeRequest)=\"openCategory($event)\"></categories-menu>\n\n        </div>\n    </div>\n\n    <cmp-table [items]=\"items\" [itemsTotal]=\"100\" [tableFields]=\"tableFields\" (editItemRequest)=\"modalProductOpen($event)\"></cmp-table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/page_content_types.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <h3>\n            <i class=\"icon-box\"></i>\n            {{title}}\n        </h3>\n\n        <hr>\n\n        <div class=\"float-right\">\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-info\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    Массовые дейсвия\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n                    <button class=\"dropdown-item\">Отключить / включить</button>\n                    <button class=\"dropdown-item\">Удалить</button>\n                </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-outline-success d-inline-block btn-wide\" (click)=\"modalOpen()\">\n                <i class=\"icon-plus\"></i>\n                Add\n            </button>\n        </div>\n        <div class=\"float-left\">\n            <a class=\"btn btn-secondary\" [routerLink]=\"['/catalog']\">\n                <i class=\"icon-arrow-left\"></i>\n                Каталог\n            </a>\n        </div>\n    </div>\n\n    <cmp-table [items]=\"items\" [itemsTotal]=\"100\" [tableFields]=\"tableFields\" (editItemRequest)=\"modalOpen($event)\" (copyItemRequest)=\"copyItem($event)\" (deleteItemRequest)=\"deleteItemConfirm($event)\"></cmp-table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/page_field_types.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n\n    <div class=\"card-body\">\n\n        <h3>\n            <i class=\"icon-toggle\"></i>\n            {{title}}\n        </h3>\n\n        <hr>\n\n        <div class=\"float-right\">\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-info\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    Массовые дейсвия\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n                    <button class=\"dropdown-item\">Отключить / включить</button>\n                    <button class=\"dropdown-item\">Удалить</button>\n                </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-outline-success d-inline-block btn-wide\" (click)=\"modalOpen()\">\n                <i class=\"icon-plus\"></i>\n                Add\n            </button>\n        </div>\n\n        <div class=\"float-left\">\n            <a class=\"btn btn-secondary\" [routerLink]=\"['/catalog']\">\n                <i class=\"icon-arrow-left\"></i>\n                Каталог\n            </a>\n        </div>\n    </div>\n\n    <cmp-table [items]=\"items\" [itemsTotal]=\"100\" [tableFields]=\"tableFields\" (actionRequest)=\"actionRequest($event)\"></cmp-table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/page_orders.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n\n    <div class=\"card-body\">\n\n        <h3>\n            <i class=\"icon-bag\"></i>\n            {{title}}\n        </h3>\n\n        <hr>\n\n        <div class=\"float-right\">\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    Массовые дейсвия\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n                    <button class=\"dropdown-item\">Изменить статус</button>\n                    <button class=\"dropdown-item\">Удалить</button>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"float-left\">\n\n            <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\">\n                <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n                    <i class=\"icon-grid\"></i>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped table-divided mb-0\">\n            <thead>\n            <tr>\n                <th>\n                    <label class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\">\n                        <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </th>\n                <th>\n                    <button type=\"button\" class=\"btn btn-block btn-link\">\n                        ID\n                        <i class=\"icon-arrow-down\"></i>\n                    </button>\n                </th>\n                <th>\n                    <button type=\"button\" class=\"btn btn-block btn-link\">\n                        Статус\n                    </button>\n                </th>\n                <th>\n                    <button type=\"button\" class=\"btn btn-block btn-link\">\n                        Дата и время\n                    </button>\n                </th>\n                <th>\n                    <button type=\"button\" class=\"btn btn-block btn-link\">\n                        Кол-во товаров\n                    </button>\n                </th>\n                <th>\n                    <button type=\"button\" class=\"btn btn-block btn-link\">\n                        Общая цена\n                    </button>\n                </th>\n                <th>\n                    <button type=\"button\" class=\"btn btn-block btn-link\">\n                        Пользователь\n                    </button>\n                </th>\n            </tr>\n            </thead>\n            <tbody>\n                <tr class=\"show-on-hover-parent\">\n                    <td>\n                        <label class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\">\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </td>\n                    <th>1</th>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-sm btn-info min-width150\">\n                            Новый\n                        </button>\n                    </td>\n                    <td>\n                        01.03.2017\n                    </td>\n                    <td>\n                        2\n                    </td>\n                    <td>\n                        1 100\n                    </td>\n                    <td>\n                        <div class=\"relative\">\n                            <div class=\"show-on-hover\">\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-pencil\"></i>\n                                </button>\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-cross\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        username@domain.com\n                    </td>\n                </tr>\n                <tr class=\"show-on-hover-parent\">\n                    <td>\n                        <label class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\">\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </td>\n                    <th>2</th>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-sm btn-success min-width150\">\n                            Выполнен\n                        </button>\n                    </td>\n                    <td>\n                        22.02.2017\n                    </td>\n                    <td>\n                        3\n                    </td>\n                    <td>\n                        2 300\n                    </td>\n                    <td>\n                        <div class=\"relative\">\n                            <div class=\"show-on-hover\">\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-pencil\"></i>\n                                </button>\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-cross\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        username@domain.com\n                    </td>\n                </tr>\n                <tr class=\"show-on-hover-parent\">\n                    <td>\n                        <label class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\">\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </td>\n                    <th>3</th>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-sm btn-info min-width150\">\n                            Новый\n                        </button>\n                    </td>\n                    <td>\n                        20.02.2017\n                    </td>\n                    <td>\n                        5\n                    </td>\n                    <td>\n                        5 520\n                    </td>\n                    <td>\n                        <div class=\"relative\">\n                            <div class=\"show-on-hover\">\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-pencil\"></i>\n                                </button>\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-cross\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        username@domain.com\n                    </td>\n                </tr>\n                <tr class=\"show-on-hover-parent\">\n                    <td>\n                        <label class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\">\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </td>\n                    <th>3</th>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-sm btn-info min-width150\">\n                            Новый\n                        </button>\n                    </td>\n                    <td>\n                        20.02.2017\n                    </td>\n                    <td>\n                        5\n                    </td>\n                    <td>\n                        5 520\n                    </td>\n                    <td>\n                        <div class=\"relative\">\n                            <div class=\"show-on-hover\">\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-pencil\"></i>\n                                </button>\n                                <button class=\"btn btn-secondary btn-sm\">\n                                    <i class=\"icon-cross\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        username@domain.com\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"card-footer\">\n\n        <div class=\"float-right\">\n            <select class=\"form-control\">\n                <option value=\"10\">10</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n            </select>\n        </div>\n\n        <ngb-pagination [class]=\"'mb-0'\" [collectionSize]=\"120\" [page]=\"1\" [maxSize]=\"8\" [rotate]=\"true\" [boundaryLinks]=\"false\"></ngb-pagination>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/page_settings.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"float-right\">\n            <!--a class=\"btn btn-primary\" [routerLink]=\"['/settings/input_types']\">\n                <i class=\"icon-upload\"></i>\n                Типы ввода\n            </a>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/settings/output_types']\">\n                <i class=\"icon-download\"></i>\n                Типы вывода\n            </a-->\n        </div>\n\n        <h3>\n            <i class=\"icon-bar-graph-2\"></i>\n            {{title}}\n        </h3>\n\n        <hr>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n\n                <!-- statuses -->\n                <label class=\"label-filled\">\n                    Статусы\n                </label>\n\n                <div class=\"card\">\n                    <div class=\"card-body text-muted\">\n                        Названия статусов заказов и цвет для вывода на странице заказов в административной части.\n                    </div>\n                    <div class=\"table-responsive\">\n\n                        <table class=\"table table-divided mb-0\">\n                            <thead>\n                            <tr>\n                                <th>\n                                    Название\n                                </th>\n                                <th>\n                                    Шаблон письма\n                                </th>\n                                <th>\n                                    Цвет\n                                </th>\n                                <th></th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Новый\">\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"userEmailStatus\">\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm bg-info\" style=\"width: 30px;\">\n                                        &nbsp;\n                                    </button>\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm\">\n                                        <i class=\"icon-cross\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Принят к оплате\">\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"userEmailStatus\">\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm bg-success\" style=\"width: 30px;\">\n                                        &nbsp;\n                                    </button>\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm\">\n                                        <i class=\"icon-cross\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Отправлен\">\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"userEmailStatus\">\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm bg-warning\" style=\"width: 30px;\">\n                                        &nbsp;\n                                    </button>\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm\">\n                                        <i class=\"icon-cross\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Отменен\">\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"userEmailStatus\">\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm bg-danger\" style=\"width: 30px;\">\n                                        &nbsp;\n                                    </button>\n                                </td>\n                                <td class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm\">\n                                        <i class=\"icon-cross\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            </tbody>\n                            <tfoot>\n                            <tr class=\"bg-faded\">\n                                <td colspan=\"4\" class=\"text-center\">\n                                    <button class=\"btn btn-secondary btn-sm\">\n                                        <i class=\"icon-plus\"></i>\n                                        Добавить\n                                    </button>\n                                </td>\n                            </tr>\n                            </tfoot>\n                        </table>\n\n                    </div>\n                </div>\n                <!-- /statuses -->\n\n            </div>\n            <div class=\"col-md-6\">\n\n                <!-- delivery -->\n                <label class=\"label-filled\">\n                    Методы доставки\n                </label>\n\n                <div class=\"card mb-3\">\n                    <div class=\"card-body text-muted\">\n                        Список методов доставки для вывода в форме заказа во внешней части сайта.\n                    </div>\n                    <div class=\"table-responsive\">\n\n                        <table class=\"table table-divided mb-0\">\n                            <thead>\n                                <tr>\n                                    <th>\n                                        Название\n                                    </th>\n                                    <th>\n                                        Цена\n                                    </th>\n                                    <th>\n                                        Макс. цена\n                                    </th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Самовывоз\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input type=\"number\" class=\"form-control form-control-sm mwidth-80 m-auto\" name=\"\" value=\"0\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input type=\"number\" class=\"form-control form-control-sm mwidth-80 m-auto\" name=\"\" value=\"\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <i class=\"icon-cross\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Доставка по городу\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input type=\"number\" class=\"form-control form-control-sm mwidth-80 m-auto\" name=\"\" value=\"0\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input type=\"number\" class=\"form-control form-control-sm mwidth-80 m-auto\" name=\"\" value=\"\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <i class=\"icon-cross\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"\" value=\"Доставка по городу\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input type=\"number\" class=\"form-control form-control-sm mwidth-80 m-auto\" name=\"\" value=\"0\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <input type=\"number\" class=\"form-control form-control-sm mwidth-80 m-auto\" name=\"\" value=\"\">\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <i class=\"icon-cross\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tfoot>\n                                <tr class=\"bg-faded\">\n                                    <td colspan=\"4\" class=\"text-center\">\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <i class=\"icon-plus\"></i>\n                                            Добавить\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tfoot>\n                        </table>\n\n                    </div>\n                </div>\n                <!-- /delivery -->\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/page_statistics.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <h3>\n            <i class=\"icon-bar-graph-2\"></i>\n            {{title}}\n        </h3>\n\n        <hr>\n\n        <div class=\"float-left\">\n\n            <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\">\n                <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n                    <i class=\"icon-grid\"></i>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n    </div>\n    <div class=\"card-body border-t\">\n\n        <br>\n        <br>\n        <br>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_i18n_providers__ = __webpack_require__("../../../../../src/app/i18n-providers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
//platformBrowserDynamic().bootstrapModule(AppModule);
Object(__WEBPACK_IMPORTED_MODULE_2__app_i18n_providers__["a" /* getTranslationProviders */])().then(function (providers) {
    var options = { providers: providers };
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], options);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map