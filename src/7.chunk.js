webpackJsonp([7],{

/***/ "../../../../../src/app/common/utils/customer.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerUtils; });
var CustomerUtils = (function () {
    function CustomerUtils() {
    }
    CustomerUtils.filteredCustomer = function (val, customers) {
        var filteredCustomers = val && val != ""
            ? customers.filter(function (s) {
                return s.businessName.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                    s.mobile.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                    s.gstNo.toLowerCase().indexOf(val.toLowerCase()) >= 0;
            })
            : customers;
        return filteredCustomers;
    };
    return CustomerUtils;
}());

//# sourceMappingURL=customer.utils.js.map

/***/ }),

/***/ "../../../../../src/app/common/utils/service.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesUtils; });
var ServicesUtils = (function () {
    function ServicesUtils() {
    }
    ServicesUtils.filteredServices = function (val, services) {
        var filteredServices = val && val != ""
            ? services.filter(function (s) { return s.serviceName.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
            : services;
        return filteredServices;
    };
    return ServicesUtils;
}());

//# sourceMappingURL=service.utils.js.map

/***/ }),

/***/ "../../../../../src/app/common/utils/stockitem.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockItemUtils; });
var StockItemUtils = (function () {
    function StockItemUtils() {
    }
    StockItemUtils.filteredStockItems = function (val, stockItem) {
        var filteredStockItem = val && val != ""
            ? stockItem.filter(function (s) { return s.productName.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
            : stockItem;
        return filteredStockItem;
    };
    return StockItemUtils;
}());

//# sourceMappingURL=stockitem.utils.js.map

/***/ }),

/***/ "../../../../../src/app/entities/customerpricing.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPricing; });
var CustomerPricing = (function () {
    function CustomerPricing() {
        this.customerPricingDetails = [];
    }
    return CustomerPricing;
}());

//# sourceMappingURL=customerpricing.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/servicepricing.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePricing; });
var ServicePricing = (function () {
    function ServicePricing() {
    }
    return ServicePricing;
}());

//# sourceMappingURL=servicepricing.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/stockitempricing.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockItemPricing; });
var StockItemPricing = (function () {
    function StockItemPricing() {
        this.pricingDiscount = 0;
    }
    return StockItemPricing;
}());

//# sourceMappingURL=stockitempricing.entity.js.map

/***/ }),

/***/ "../../../../../src/app/modules/pricing/pricing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/modules/pricing/pricing/pricing.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "add",
        component: __WEBPACK_IMPORTED_MODULE_2__pricing_pricing_component__["a" /* PricingComponent */]
    }
];
var PricingRoutingModule = (function () {
    function PricingRoutingModule() {
    }
    return PricingRoutingModule;
}());
PricingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], PricingRoutingModule);

//# sourceMappingURL=pricing-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/pricing/pricing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pricing_routing_module__ = __webpack_require__("../../../../../src/app/modules/pricing/pricing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/modules/pricing/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModule", function() { return PricingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PricingModule = (function () {
    function PricingModule() {
    }
    return PricingModule;
}());
PricingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__pricing_routing_module__["a" /* PricingRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__pricing_pricing_component__["a" /* PricingComponent */]]
    })
], PricingModule);

//# sourceMappingURL=pricing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/pricing/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" fxLayoutAlign=\"center center\">\r\n  <h2 style=\"margin-bottom:10px;\">\r\n    Pricing\r\n  </h2>\r\n</div>\r\n<div class=\"padding-side\">\r\n   <!-- <form [formGroup]=\"myForm\" autocomplete=\"off\"> -->\r\n  <md-card>\r\n    <section class=\"example-section\">\r\n      <div\r\n        class=\"col-xs-12\"\r\n        align=\"center\"\r\n        style=\"margin-top:15px;margin-bottom:15px\"\r\n      >\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-4\">\r\n            <md-checkbox\r\n              class=\"example-margin\"\r\n              [(checked)]=\"isCustomerToggle\"\r\n              (change)=\"onCustomerToggleChange($event)\"\r\n              >Customer</md-checkbox\r\n            >\r\n          </div>\r\n          <div class=\"col-xs-4\">\r\n            <md-checkbox\r\n              class=\"example-margin\"\r\n              [(checked)]=\"isStockToggle\"\r\n              (change)=\"onStockToggleChange($event)\"\r\n              >Stock</md-checkbox\r\n            >\r\n          </div>\r\n          <div class=\"col-xs-4\">\r\n            <md-checkbox\r\n              class=\"example-margin\"\r\n              [(checked)]=\"isServiceToggle\"\r\n              (change)=\"onServiceToggleChange($event)\"\r\n              >Service</md-checkbox\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <aside id=\"page-content\" style=\"overflow: auto\">\r\n      <div class=\"padding-side\">\r\n        <md-card class=\"invoice-form-table\">\r\n          <div class=\"invoice-form-th\">\r\n            <md-list>\r\n              <md-list-item\r\n                layout=\"row\"\r\n                layout-wrap\r\n                class=\"invoice-form-list-item\"\r\n              >\r\n                <span flex=\"15\" class=\"padding-side\">S.no</span>\r\n                <span flex=\"45\" class=\"padding-side\" *ngIf=\"isCustomerToggle\"\r\n                  >Customer</span\r\n                >\r\n                <span flex=\"45\" class=\"padding-side\" *ngIf=\"isStockToggle\"\r\n                  >Stock</span\r\n                >\r\n\r\n                <span flex=\"45\" class=\"padding-side\" *ngIf=\"isServiceToggle\"\r\n                  >Service</span\r\n                >\r\n\r\n                <span flex=\"30\" class=\"padding-side\">Discount</span>\r\n                <span flex=\"10\" class=\"padding-side\" align=\"center\"\r\n                  >Delete</span\r\n                >\r\n              </md-list-item>\r\n            </md-list>\r\n          </div>\r\n          <br />\r\n          <div class=\"invoice-form-tb\" *ngIf=\"isCustomerToggle\">\r\n            <md-list>\r\n              <ng-template\r\n                let-index=\"index\"\r\n                let-item\r\n                let-last=\"last\"\r\n                ngFor\r\n                [ngForOf]=\"customerPricingList\"\r\n              >\r\n                <md-list-item\r\n                  layout=\"row\"\r\n                  layout-wrap\r\n                  (click)=\"selectLineItem(item, index)\"\r\n                 \r\n                >\r\n                  <span\r\n                    class=\"invoice-form-list-item-index\"\r\n                    flex=\"15\"\r\n                    class=\"padding-side\"\r\n                  >\r\n                    {{ index + 1 }}</span\r\n                  >\r\n\r\n                  <span flex=\"45\" class=\"padding-side\">\r\n                    <md-input-container class=\"col-xs-12\">\r\n                      <input\r\n                        mdInput\r\n                        placeholder=\"Choose Customer\"\r\n                        style=\"text-transform: capitalize\"\r\n                        [ngModel]=\"item.displayName\"\r\n                        (focus)=\"filterCustomers(null)\"\r\n                        (keyup)=\"filterCustomers($event.target.values)\"\r\n                        [mdAutocomplete]=\"autoMobile\"\r\n                       \r\n                      />\r\n                      <!-- [formControl]=\"myForm.controls.pricing_displayName\" -->\r\n                      <md-autocomplete #autoMobile=\"mdAutocomplete\">\r\n                        <md-option\r\n                          *ngFor=\"let option of filteredCustomers\"\r\n                          value=\"{{ option.businessName }} {{ option.mobile }}\"\r\n                          (click)=\"selectedCustomer(option)\"\r\n                        >\r\n                          {{ option.displayName }}\r\n                        </md-option>\r\n                      </md-autocomplete>\r\n                    </md-input-container>\r\n                  </span>\r\n                  <span flex=\"30\" class=\"padding-side\">\r\n                    <md-input-container>\r\n                      <input\r\n                        mdInput\r\n                          [(ngModel)]=\"item.pricingDiscount\" \r\n                          \r\n                        (change)=\"itemValueChange(item)\"\r\n                        (keypress)=\"onlyNumberKey($event)\"\r\n                      />\r\n                      <!-- [formControl]=\"myForm.controls.pricing_pricingDiscount\" -->\r\n                      <span mdSuffix>%</span>\r\n                    </md-input-container>\r\n                  </span>\r\n\r\n                  <span\r\n                    flex=\"10\"\r\n                    style=\"cursor: pointer;text-align:center;\"\r\n                    class=\"padding-side\"\r\n                    *ngIf=\"isEditable == 'true'\"\r\n                  >\r\n                    <md-icon\r\n                      color=\"accent\"\r\n                      (click)=\"removeItem(index)\"\r\n                      *ngIf=\"customerPricingList.length > 1\"\r\n                      >delete</md-icon\r\n                    >\r\n                  </span>\r\n                </md-list-item>\r\n              </ng-template>\r\n            </md-list>\r\n         \r\n            <div style=\"padding-top:20px\">\r\n              <div class=\"col-xs-12 end-xs padding-side\">\r\n                <button\r\n                  md-raised-button\r\n                  color=\"accent\"\r\n                  (click)=\"saveCustomer()\"\r\n                >\r\n                  Save\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"invoice-form-tb\" *ngIf=\"isStockToggle\">\r\n            <md-list>\r\n              <ng-template\r\n                let-index=\"index\"\r\n                let-item\r\n                let-last=\"last\"\r\n                ngFor\r\n                [ngForOf]=\"stockItemPricingList\"\r\n              >\r\n                <md-list-item\r\n                  layout=\"row\"\r\n                  layout-wrap\r\n                  (click)=\"selectLineItem1(item, index)\"\r\n                  \r\n                >\r\n                  <span\r\n                    class=\"invoice-form-list-item-index\"\r\n                    flex=\"15\"\r\n                    class=\"padding-side\"\r\n                  >\r\n                    {{ index + 1 }}\r\n                  </span>\r\n                  <span flex=\"45\" class=\"padding-side\">\r\n                    <md-input-container class=\"col-xs-12\">\r\n                      <input\r\n                        mdInput\r\n                        placeholder=\"Choose Stock Item\"\r\n                        [ngModel]=\"item.productName\"\r\n                        (focus)=\"filterStockItems($event.target.values)\"\r\n                        (keyup)=\"filterStockItems($event.target.values)\"\r\n                        [mdAutocomplete]=\"autoStockItems\"\r\n                        [ngModelOptions]=\"{ standalone: true }\"\r\n                      />\r\n                      <md-autocomplete #autoStockItems=\"mdAutocomplete\">\r\n                        <md-option\r\n                          *ngFor=\"let fitem of filteredStockItems\"\r\n                          value=\"{{ fitem.productName }}\"\r\n                          (click)=\"selectStockItem(fitem)\"\r\n                        >\r\n                          {{ fitem.productName }}\r\n                        </md-option>\r\n                      </md-autocomplete>\r\n                    </md-input-container>\r\n                  </span>\r\n                  <span flex=\"30\" class=\"padding-side\">\r\n                    <md-input-container>\r\n                      <input\r\n                        mdInput\r\n                        [(ngModel)]=\"item.pricingDiscount\"\r\n                        (change)=\"itemValueChange1(item)\"\r\n                        (keypress)=\"onlyNumberKey($event)\"\r\n                      />\r\n                      <span mdSuffix>%</span>\r\n                    </md-input-container>\r\n                  </span>\r\n                  <span\r\n                    flex=\"10\"\r\n                    style=\"cursor: pointer;text-align:center;\"\r\n                    class=\"padding-side\"\r\n                    *ngIf=\"isEditable == 'true'\"\r\n                  >\r\n                    <md-icon\r\n                      color=\"accent\"\r\n                      (click)=\"removeItem1(index)\"\r\n                      *ngIf=\"stockItemPricingList.length > 1\"\r\n                      >delete</md-icon\r\n                    >\r\n                  </span>\r\n                </md-list-item>\r\n              </ng-template>\r\n            </md-list>\r\n            <div style=\"padding-top:20px\">\r\n              <div class=\"col-xs-12 end-xs padding-side\">\r\n                <button\r\n                  md-raised-button\r\n                  color=\"accent\"\r\n                  (click)=\"saveStockItem()\"\r\n                >\r\n                  Save\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"invoice-form-tb\" *ngIf=\"isServiceToggle\">\r\n            <md-list>\r\n              <ng-template\r\n                let-index=\"index\"\r\n                let-item\r\n                let-last=\"last\"\r\n                ngFor\r\n                [ngForOf]=\"servicePricingList\"\r\n              >\r\n                <md-list-item\r\n                  layout=\"row\"\r\n                  layout-wrap\r\n                  (click)=\"selectLineItem2(item, index)\"\r\n                  \r\n                >\r\n                  <span\r\n                    class=\"invoice-form-list-item-index\"\r\n                    flex=\"15\"\r\n                    class=\"padding-side\"\r\n                  >\r\n                    {{ index + 1 }}\r\n                  </span>\r\n                  <span flex=\"45\" class=\"padding-side\">\r\n                    <md-input-container class=\"col-xs-12\">\r\n                      <input\r\n                        mdInput\r\n                        placeholder=\"Choose Service\"\r\n                        style=\"text-transform: capitalize\"\r\n                        [ngModel]=\"item.serviceName\"\r\n                        (focus)=\"filterServices(null)\"\r\n                        (keyup)=\"filterServices($event.target.value)\"\r\n                        [mdAutocomplete]=\"autoMobile\"\r\n                        [ngModelOptions]=\"{ standalone: true }\"\r\n                      />\r\n                      <md-autocomplete #autoMobile=\"mdAutocomplete\">\r\n                        <md-option\r\n                          *ngFor=\"let fitem of filteredServices\"\r\n                          value=\"{{ fitem.serviceName }}\"\r\n                          (click)=\"selectServices(fitem)\"\r\n                        >\r\n                          {{ fitem.serviceName }}\r\n                        </md-option>\r\n                      </md-autocomplete>\r\n                    </md-input-container>\r\n                  </span>\r\n                  <span flex=\"30\" class=\"padding-side\">\r\n                    <md-input-container>\r\n                      <input\r\n                        mdInput\r\n                        [(ngModel)]=\"item.pricingDiscount\"\r\n                        (change)=\"itemValueChange2(item)\"\r\n                        (keypress)=\"onlyNumberKey($event)\"\r\n                      />\r\n                      <span mdSuffix>%</span>\r\n                    </md-input-container>\r\n                  </span>\r\n                  <span\r\n                    flex=\"10\"\r\n                    style=\"cursor: pointer;text-align:center;\"\r\n                    class=\"padding-side\"\r\n                    *ngIf=\"isEditable == 'true'\"\r\n                  >\r\n                    <md-icon\r\n                      color=\"accent\"\r\n                      (click)=\"removeItem2(index)\"\r\n                      *ngIf=\"servicePricingList.length > 1\"\r\n                      >delete</md-icon\r\n                    >\r\n                  </span>\r\n                </md-list-item>\r\n              </ng-template>\r\n            </md-list>\r\n            <div style=\"padding-top:20px\">\r\n              <div class=\"col-xs-12 end-xs padding-side\">\r\n                <button\r\n                  md-raised-button\r\n                  color=\"accent\"\r\n                  (click)=\"saveServices()\"\r\n                >\r\n                  Save\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <br />\r\n          <div fxLayout=\"row\" style=\"font-size: 16px;\"></div>\r\n        </md-card>\r\n      </div>\r\n    </aside>\r\n  </md-card>\r\n  <!-- </form> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/pricing/pricing/pricing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/pricing/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_crdn_entity__ = __webpack_require__("../../../../../src/app/entities/crdn.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_crdn_form__ = __webpack_require__("../../../../../src/app/forms/crdn.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_pricing_service__ = __webpack_require__("../../../../../src/app/common/services/pricing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_common_utils_customer_utils__ = __webpack_require__("../../../../../src/app/common/utils/customer.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_customerpricing_entity__ = __webpack_require__("../../../../../src/app/entities/customerpricing.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_stockitempricing_entity__ = __webpack_require__("../../../../../src/app/entities/stockitempricing.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_servicepricing_entity__ = __webpack_require__("../../../../../src/app/entities/servicepricing.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_utils_stockitem_utils__ = __webpack_require__("../../../../../src/app/common/utils/stockitem.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_utils_service_utils__ = __webpack_require__("../../../../../src/app/common/utils/service.utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PricingComponent = (function () {
    function PricingComponent(appService, dialog, pricingService, restService) {
        this.appService = appService;
        this.dialog = dialog;
        this.pricingService = pricingService;
        this.restService = restService;
        //barcodeFrom: any = BARCODEFormGroup.init();
        // myForm: any = PricingFormGroup.init();
        this.index = 0;
        this.supplierList = [];
        this.filteredSuppliers = [];
        this.supplierSelected = "";
        this.isStockToggle = false;
        this.isServiceToggle = false;
        this.isCustomerToggle = true;
        this.customerPricingList = [];
        this.stockItemPricingList = [];
        this.servicePricingList = [];
        this.filteredStockItems = [];
        this.filteredServices = [];
        this.crdn = new __WEBPACK_IMPORTED_MODULE_3__entities_crdn_entity__["a" /* CRDN */]();
        this.isEditable = "true";
        this.isEdit = false;
        this.customers = [];
        this.filteredCustomers = [];
        this.stock = [];
        this.stockItemList = [];
        this.crdnFrom = __WEBPACK_IMPORTED_MODULE_5__forms_crdn_form__["a" /* CRDNFormGroup */].init();
        // PricingFormGroup.pricingGroup(this.myForm);
    }
    PricingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pricingService.retreiveCustomers().subscribe(function (results) {
            _this.filteredCustomers = results;
        });
        this.pricingService.retreiveStockItem().subscribe(function (results) {
            _this.filteredStockItems = results;
        });
        this.pricingService.retreiveServices().subscribe(function (results) {
            _this.filteredServices = results;
        });
        console.log("customer size is ", this.filteredCustomers.length);
        console.log("stockitem size is", this.filteredStockItems.length);
        console.log("services size is", this.filteredServices.length);
        this.addCustomer();
        this.addStockItem();
        this.addServices();
        this.isCustomerToggle = true;
        // this.customerPricing = new CustomerPricing();
        // form.reset();
    };
    PricingComponent.prototype.addCustomer = function () {
        if (this.customerPricingList.length == 0 ||
            (this.customerPricingList[this.customerPricingList.length - 1]
                .customerId != null &&
                this.customerPricingList[this.customerPricingList.length - 1]
                    .customerId != " ")) {
            var item = new __WEBPACK_IMPORTED_MODULE_8__entities_customerpricing_entity__["a" /* CustomerPricing */]();
            item.pricingDiscount = 0;
            item.customerId = null;
            this.customerPricingList.push(item);
            console.log(this.customerPricingList);
        }
    };
    PricingComponent.prototype.addStockItem = function () {
        if (this.stockItemPricingList.length == 0 ||
            (this.stockItemPricingList[this.stockItemPricingList.length - 1]
                .stockItemId != null &&
                this.stockItemPricingList[this.stockItemPricingList.length - 1]
                    .stockItemId != " ")) {
            var item = new __WEBPACK_IMPORTED_MODULE_9__entities_stockitempricing_entity__["a" /* StockItemPricing */]();
            item.stockItemId = null;
            this.stockItemPricingList.push(item);
        }
    };
    PricingComponent.prototype.addServices = function () {
        if (this.servicePricingList.length == 0 ||
            (this.servicePricingList[this.servicePricingList.length - 1].serviceId !=
                null &&
                this.servicePricingList[this.servicePricingList.length - 1].serviceId !=
                    " ")) {
            var item = new __WEBPACK_IMPORTED_MODULE_10__entities_servicepricing_entity__["a" /* ServicePricing */]();
            item.pricingDiscount = 0;
            item.serviceId = null;
            this.servicePricingList.push(item);
        }
    };
    PricingComponent.prototype.onCustomerToggleChange = function ($event) {
        this.isCustomerToggle = true;
        this.isStockToggle = false;
        this.isServiceToggle = false;
        // if (this.customers.length == 0) {
        //   this.filteredCustomers = this.pricingService.retreiveCustomers();
        // }
        console.log("customer list" + this.customers.length);
    };
    PricingComponent.prototype.filterCustomers = function (val) {
        this.filteredCustomers = __WEBPACK_IMPORTED_MODULE_7_app_common_utils_customer_utils__["a" /* CustomerUtils */].filteredCustomer(val, this.filteredCustomers);
    };
    PricingComponent.prototype.filterStockItems = function (val) {
        this.filteredStockItems = __WEBPACK_IMPORTED_MODULE_11__common_utils_stockitem_utils__["a" /* StockItemUtils */].filteredStockItems(val, this.filteredStockItems);
    };
    PricingComponent.prototype.filterServices = function (val) {
        this.filteredServices = __WEBPACK_IMPORTED_MODULE_12__common_utils_service_utils__["a" /* ServicesUtils */].filteredServices(val, this.filteredServices);
    };
    PricingComponent.prototype.onStockToggleChange = function ($event) {
        this.isStockToggle = true;
        this.isServiceToggle = false;
        this.isCustomerToggle = false;
    };
    PricingComponent.prototype.onServiceToggleChange = function ($event) {
        this.isServiceToggle = true;
        this.isStockToggle = false;
        this.isCustomerToggle = false;
    };
    PricingComponent.prototype.selectLineItem = function (lineItem, index) {
        if (this.customerPricing != lineItem) {
            this.customerPricing = lineItem;
        }
    };
    PricingComponent.prototype.selectLineItem1 = function (lineItem, index) {
        if (this.stockItemPricing != lineItem) {
            this.stockItemPricing = lineItem;
        }
    };
    PricingComponent.prototype.selectLineItem2 = function (lineItem, index) {
        if (this.servicePricing != lineItem) {
            this.servicePricing = lineItem;
        }
    };
    PricingComponent.prototype.itemValueChange = function (item) {
        var numberArray = Array(parseInt(item.pricingDiscount)).fill(1);
        console.log("numberArray", numberArray);
        // this.customerPricing.qtyArray = numberArray;
        this.addCustomer();
    };
    PricingComponent.prototype.itemValueChange1 = function (item) {
        var numberArray = Array(parseInt(item.pricingDiscount)).fill(1);
        console.log("numberArray", numberArray);
        // this.stockItemPricing.qtyArray = numberArray;
        this.addStockItem();
    };
    PricingComponent.prototype.itemValueChange2 = function (item) {
        var numberArray = Array(parseInt(item.pricingDiscount)).fill(1);
        console.log("numberArray", numberArray);
        // this.servicePricing.qtyArray = numberArray;
        this.addServices();
    };
    PricingComponent.prototype.removeItem = function (index) {
        var _this = this;
        this.customerPricingList[index].customerId = null;
        if (this.customerPricingList.length > 0) {
            setTimeout(function () {
                _this.customerPricingList.splice(index, 1);
            }, 10);
        }
    };
    PricingComponent.prototype.removeItem1 = function (index) {
        var _this = this;
        this.stockItemPricingList[index].stockItemId = null;
        if (this.stockItemPricingList.length > 0) {
            setTimeout(function () {
                _this.stockItemPricingList.splice(index, 1);
            }, 10);
        }
    };
    PricingComponent.prototype.removeItem2 = function (index) {
        var _this = this;
        this.servicePricingList[index].serviceId = null;
        if (this.servicePricingList.length > 0) {
            setTimeout(function () {
                _this.servicePricingList.splice(index, 1);
            }, 10);
        }
    };
    PricingComponent.prototype.valid = function () {
        if (this.isStockToggle)
            this.crdn.serviceId = null;
        else
            this.crdn.productId = null;
        return true;
    };
    PricingComponent.prototype.selectedCustomer = function (item) {
        this.customerPricing.customerId = item.displayName;
        this.customerPricing.customerId = item.id;
        console.log(this.customerPricing.customerId);
    };
    PricingComponent.prototype.selectStockItem = function (item) {
        this.stockItemPricing.stockItemId = item.productName;
        this.stockItemPricing.stockItemId = item.id;
    };
    PricingComponent.prototype.selectServices = function (item) {
        this.servicePricing.serviceId = item.serviceName;
        this.servicePricing.serviceId = item.id;
    };
    PricingComponent.prototype.clearItem = function () {
        var _this = this;
        if (this.customerPricingList) {
            this.customerPricingList = [];
            setTimeout(function () {
                _this.addCustomer();
            }, 10);
        }
        if (this.stockItemPricingList) {
            this.stockItemPricingList = [];
            setTimeout(function () {
                _this.addStockItem();
            }, 10);
        }
        if (this.servicePricingList) {
            // servicePricingList
            this.servicePricingList = [];
            setTimeout(function () {
                _this.addServices();
            }, 10);
        }
    };
    PricingComponent.prototype.saveCustomer = function () {
        var _this = this;
        var customerPriceList = this.customerPricingList.filter(function (s) { return s.customerId != null; });
        console.log(customerPriceList);
        this.pricingService
            .saveCustomerPricing(customerPriceList)
            .subscribe(function (result) {
            if (result) {
                _this.customerPricing = result;
                console.log(_this.customerPricing);
                _this.appService.showMessage("Customers Discount updated successfully");
                _this.clearItem();
                // this.customerPricing = new CustomerPricing();
                // form.reset();
                //  this.myForm.form.reset();
                // this.appService.navigate("pricing/add",[]);
            }
        });
    };
    PricingComponent.prototype.saveStockItem = function () {
        var _this = this;
        var stockItemPriceList = this.stockItemPricingList.filter(function (s) { return s.stockItemId != null; });
        console.log(stockItemPriceList);
        this.pricingService
            .saveStockItemPricing(stockItemPriceList)
            .subscribe(function (result) {
            if (result) {
                _this.stockItemPricing = result;
                console.log(_this.stockItemPricing);
                _this.appService.showMessage("Products Discount Updated Successfully");
                _this.clearItem();
            }
        });
    };
    PricingComponent.prototype.saveServices = function () {
        var _this = this;
        var servicePriceList = this.servicePricingList.filter(function (s) { return s.serviceId != null; });
        console.log(servicePriceList);
        this.pricingService
            .saveServicePricing(servicePriceList)
            .subscribe(function (result) {
            if (result) {
                _this.servicePricing = result;
                console.log(_this.servicePricing);
                _this.appService.showMessage("Services Discount Updated Successfully");
                _this.clearItem();
            }
        });
    };
    PricingComponent.prototype.onlyNumberKey = function (event) {
        return event.charCode == 8 || event.charCode == 0
            ? null
            : event.charCode >= 48 && event.charCode <= 57;
    };
    return PricingComponent;
}());
PricingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-pricing",
        template: __webpack_require__("../../../../../src/app/modules/pricing/pricing/pricing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/pricing/pricing/pricing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_services_pricing_service__["a" /* PricingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_services_pricing_service__["a" /* PricingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */]) === "function" && _d || Object])
], PricingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pricing.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map