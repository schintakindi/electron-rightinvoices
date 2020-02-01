webpackJsonp([3],{

/***/ "../../../../../src/app/modules/invoice/components/customer-additional/customer-additional.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n  <!-- <md-select fxFlex=\"33.333\" class=\"padding-side\" placeholder=\"Terms of Payment\" \r\n    [formControl]=\"myForm.controls.sales_termsOfPayment\" [(ngModel)]=\"sales.paymentTerms\">\r\n      <md-option *ngFor=\"let item of termsList\" [value]=\"item.key\">\r\n        {{item.value}}\r\n      </md-option>\r\n    </md-select>\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_termsOfPayment \"> </form-messages>\r\n    </md-hint> -->\r\n\r\n  <md-input-container fxFlex=\"33.333\" class=\"padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"Invoice Date\"\r\n      [formControl]=\"myForm.controls.sales_invoiceDate\"\r\n      [(ngModel)]=\"sales.invoiceDate\"\r\n      [mdDatepicker]=\"invoiceDateToggle\"\r\n      readonly\r\n    />\r\n    <!-- [max]=\"max\"\r\n      [max]=\"sales.dueDate\" -->\r\n    <button mdSuffix [mdDatepickerToggle]=\"invoiceDateToggle\"></button>\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_invoiceDate\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n  <md-datepicker #invoiceDateToggle></md-datepicker>\r\n  <md-input-container fxFlex=\"33.333\" class=\"padding-side\">\r\n    <input\r\n      mdInput\r\n      placeholder=\"Due Date\"\r\n      [formControl]=\"myForm.controls.sales_dueDate\"\r\n      [(ngModel)]=\"sales.dueDate\"\r\n      [mdDatepicker]=\"dueDateToggle\"\r\n      readonly\r\n    />\r\n    <!-- [min]=\"sales.invoiceDate\" -->\r\n    <button mdSuffix [mdDatepickerToggle]=\"dueDateToggle\"></button>\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_dueDate\"> </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n  <md-datepicker #dueDateToggle></md-datepicker>\r\n  <md-input-container fxFlex=\"33.333\" class=\"padding-side\">\r\n    <input\r\n      mdInput\r\n      placeholder=\"Purchase order no\"\r\n      [formControl]=\"myForm.controls.sales_purchaseOrder\"\r\n      [(ngModel)]=\"sales.purchaseOrder\"\r\n    />\r\n    <md-hint>\r\n      <form-messages\r\n        [control]=\"myForm.controls.sales_purchaseOrder\"\r\n      ></form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n</div>\r\n<div\r\n  fxLayout=\"row\"\r\n  fxLayoutAlign=\"space-evenly center\"\r\n  style=\"padding-bottom: 10px;\"\r\n>\r\n  <md-select\r\n    required\r\n    fxFlex=\"33.333\"\r\n    class=\"padding-side\"\r\n    placeholder=\"Invoice Type\"\r\n    [formControl]=\"myForm.controls.sales_invoiceType\"\r\n    [(ngModel)]=\"sales.invoiceType\"\r\n  >\r\n    <md-option *ngFor=\"let invoiceType of invoiceTypes\" [value]=\"invoiceType\">\r\n      {{ invoiceType }}\r\n    </md-option>\r\n  </md-select>\r\n  <md-hint>\r\n    <form-messages\r\n      [control]=\"myForm.controls.sales_invoiceType\"\r\n    ></form-messages>\r\n  </md-hint>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/customer-additional/customer-additional.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/customer-additional/customer-additional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_invoice_form__ = __webpack_require__("../../../../../src/app/forms/invoice.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAdditionalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerAdditionalComponent = (function () {
    function CustomerAdditionalComponent(appService) {
        this.appService = appService;
        this.invoiceTypes = [
            "Regular",
            "SEZ supplies with payment",
            "SEZ supplies without payment",
            "Deemed Exp",
            "Sale from Bonded WH"
        ];
        this.max = new Date();
        this.max.setDate(this.max.getDate());
        // this.min = new Date();
        // this.min.setDate(this.min.getDate());
    }
    CustomerAdditionalComponent.prototype.ngOnInit = function () {
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            var itemSelectedInvoice = __WEBPACK_IMPORTED_MODULE_4__shared_utils_storage__["a" /* Storage */].getLocalItem("selectedItem");
            this.sales = itemSelectedInvoice;
            var start = new Date();
            // start = document.getElementById('Stardate').value ;
            this.sales.dueDate = itemSelectedInvoice.dueDate;
            this.sales.invoiceDate = itemSelectedInvoice.invoiceDate;
            var invoiceDate = invoiceDate.getFullYear();
            var dueDate = dueDate.getFullYear();
        }
        else {
            this.sales.invoiceDate = new Date();
            this.mindate = new Date();
            this.minDate = new Date();
            this.sales.invoiceType = "Regular";
        }
    };
    CustomerAdditionalComponent.prototype.onIsEcommerceChange = function (event) {
        if (event.checked) {
            __WEBPACK_IMPORTED_MODULE_0__forms_invoice_form__["a" /* InvoiceFormGroup */].ecommerce(this.myForm, true);
        }
        else {
            this.sales.ecommerceGSTIN = "";
            __WEBPACK_IMPORTED_MODULE_0__forms_invoice_form__["a" /* InvoiceFormGroup */].ecommerce(this.myForm, false);
        }
    };
    return CustomerAdditionalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomerAdditionalComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomerAdditionalComponent.prototype, "termsList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], CustomerAdditionalComponent.prototype, "sales", void 0);
CustomerAdditionalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "app-customer-additional",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/customer-additional/customer-additional.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/customer-additional/customer-additional.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object])
], CustomerAdditionalComponent);

var _a, _b;
//# sourceMappingURL=customer-additional.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- <md-input-container class=\"col-xs-4 padding-side\">\r\n        <input\r\n            mdInput\r\n            placeholder=\"Customer Name\"\r\n            [(ngModel)]=\"customer.firstName\"\r\n            required\r\n            [formControl]=\"myForm.controls.sales_firstName\"\r\n        >\r\n        <md-hint>\r\n            <form-messages [control]=\"myForm.controls.sales_firstName\"></form-messages>\r\n        </md-hint>\r\n    </md-input-container> -->\r\n    <!-- <md-input-container class=\"col-xs-4 padding-side\">\r\n        <input\r\n            mdInput\r\n            placeholder=\"Address\"\r\n            [(ngModel)]=\"customer.inlineAddress\"\r\n            [ngModelOptions]=\"{standalone: true}\"\r\n        >\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n        <input\r\n            mdInput\r\n            placeholder=\"Customer Email\"\r\n            [(ngModel)]=\"customer.email\"\r\n            [formControl]=\"myForm.controls.sales_email\"\r\n        >\r\n        <md-hint>\r\n            <form-messages [control]=\"myForm.controls.sales_email\"></form-messages>\r\n        </md-hint>\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n        <input\r\n            mdInput\r\n            placeholder=\"State\"\r\n            [(ngModel)]=\"customer.address.state\"\r\n            [ngModelOptions]=\"{standalone: true}\"\r\n        >\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n        <input\r\n            mdInput\r\n            placeholder=\"Website\"\r\n            [(ngModel)]=\"customer.webSite\"\r\n            [formControl]=\"myForm.controls.sales_website\"\r\n        >\r\n        <md-hint>\r\n            <form-messages [control]=\"myForm.controls.sales_website\"></form-messages>\r\n        </md-hint>\r\n    </md-input-container> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/customer/customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_customer_entity__ = __webpack_require__("../../../../../src/app/entities/customer.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = (function () {
    function CustomerComponent() {
        //  sales:Sales = new Sales();
        this.customers = [];
        // InvoiceFormGroup.edit(this.myForm);
        // this.termsLoad();
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    return CustomerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomerComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_customer_entity__["a" /* Customer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_customer_entity__["a" /* Customer */]) === "function" && _a || Object)
], CustomerComponent.prototype, "customer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomerComponent.prototype, "termsList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], CustomerComponent.prototype, "sales", void 0);
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/customer/customer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CustomerComponent);

var _a, _b;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/grand-total/grand-total.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card style=\"margin-left: 17px;margin-right: 17px;\">\r\n  <div\r\n    layout=\"row\"\r\n    layout-align=\"space-between start\"\r\n    class=\"invoice-form-grand-tot\"\r\n  >\r\n    <div flex=\"30\">\r\n      <div layout=\"column\">\r\n        <!-- <div>\r\n                <span>Words</span>\r\n                <b> :</b>\r\n            </div> -->\r\n        <div>\r\n          <md-input-container>\r\n            <input\r\n              mdInput\r\n              placeholder=\"Message diplayed on Invoice\"\r\n              [formControl]=\"myForm.controls.sales_invoiceMessage\"\r\n              [(ngModel)]=\"sales.invoiceMessage\"\r\n            />\r\n          </md-input-container>\r\n        </div>\r\n        <!-- <div>\r\n                <md-input-container>\r\n                    <textarea mdInput required type=\"textarea\" placeholder=\"Statement Memo\" [formControl]=\"myForm.controls.sales_memo\" [(ngModel)]=\"sales.memo\"></textarea>\r\n                    <md-hint>\r\n                        <form-messages [control]=\"myForm.controls.sales_memo\"> </form-messages>\r\n                    </md-hint>\r\n                </md-input-container>\r\n            </div> -->\r\n      </div>\r\n    </div>\r\n    <div flex-offset=\"30\">\r\n      <div layout=\"row\" layout-align=\"end\">\r\n        <div class=\"row\">\r\n           \r\n          <div class=\"col-xs-12\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              style=\"margin:10px;\"\r\n              layout=\"row\"\r\n              layout-align=\"start\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"60\" fxLayoutAlign=\"end end\" >\r\n                Total Amount:</span\r\n              >\r\n               <!-- fxFlexOffset=\"50\" -->\r\n              <b flex=\"30\" class=\"padding-side\" style=\"font-weight: 400\">\r\n                {{ sales.subTotal | amount }}</b\r\n              >\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"col-xs-12\" *ngIf=\"amount\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              style=\"margin:10px;\"\r\n              layout=\"row\"\r\n              layout-align=\"start\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"60\" fxLayoutAlign=\"end end\">\r\n                Paid Amount:</span\r\n              >\r\n              <b flex=\"30\" class=\"padding-side\" style=\"font-weight: 400\">\r\n                <input\r\n                  mdInput\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"sales.paidAmount\"\r\n                  (change)=\"total($event)\"\r\n              /></b>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"col-xs-12\" *ngIf=\"amount\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              style=\"margin:10px;\"\r\n              layout=\"row\"\r\n              layout-align=\"start\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"60\" fxLayoutAlign=\"end end\"\r\n                >Due Amount:</span\r\n              >\r\n              <b flex=\"30\" class=\"padding-side\" style=\"font-weight: 400\">\r\n                {{ sales.dueAmount | amount }}</b\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/grand-total/grand-total.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/grand-total/grand-total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrandTotalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GrandTotalComponent = (function () {
    function GrandTotalComponent(appService) {
        this.appService = appService;
        this.cessChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GrandTotalComponent.prototype.ngOnInit = function () {
        // this.total();
        this.sales.total;
    };
    GrandTotalComponent.prototype.changeTotalCalCulate = function ($event) {
        this.cessChangeEmitter.emit(null);
    };
    GrandTotalComponent.prototype.total = function () {
        this.amount = true;
        // this.amountEmitter.emit();
        if (this.sales.paidAmount > this.sales.total) {
            // this.sales.paidAmount = 0;
            // this.sales.dueAmount = 0;
            this.appService.showMessage("The Total Amount is greater than Paid Amount");
        }
        else {
            this.sales.dueAmount = this.sales.total - this.sales.paidAmount;
        }
    };
    GrandTotalComponent.prototype.due = function () {
        if (this.sales.paidAmount && this.sales.total != null) {
            this.sales.dueAmount = this.sales.total - this.sales.paidAmount;
        }
    };
    return GrandTotalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GrandTotalComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], GrandTotalComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], GrandTotalComponent.prototype, "cessChangeEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GrandTotalComponent.prototype, "amount", void 0);
GrandTotalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-grand-total",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/grand-total/grand-total.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/grand-total/grand-total.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__["a" /* AppService */]) === "function" && _c || Object])
], GrandTotalComponent);

var _a, _b, _c;
//# sourceMappingURL=grand-total.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/invoice-search/invoice-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <md-input-container class=\"col-xs-4 padding-side\" *ngIf=\"showSearchCustomer\">\r\n    <input\r\n      mdInput\r\n      placeholder=\"Choose Customer\"\r\n      style=\"text-transform: capitalize\"\r\n      [ngModel]=\"customerMobile\"\r\n      (focus)=\"filterPhones(null)\"\r\n      (keyup)=\"filterPhones($event.target.value)\"\r\n      [mdAutocomplete]=\"autoMobile\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n    <md-autocomplete #autoMobile=\"mdAutocomplete\">\r\n      <md-option\r\n        *ngFor=\"let option of filteredPhones\"\r\n        value=\"{{ option.businessName }} {{ option.mobile }}\"\r\n        (click)=\"selectedCustomer(option)\"\r\n      >\r\n        {{ option.displayName }}\r\n      </md-option>\r\n    </md-autocomplete>\r\n  </md-input-container>\r\n  <md-input-container class=\"col-xs-4 padding-side\" *ngIf=\"showSearchCustomer\">\r\n    <input\r\n      mdInput\r\n      placeholder=\"GST Number\"\r\n      [(ngModel)]=\"customerGst\"\r\n      required\r\n    />\r\n  </md-input-container>\r\n  <div class=\"col-xs-4 padding-side\" style=\"margin-top: 25px\">\r\n    <span>\r\n      New Customer :\r\n    </span>\r\n    <md-slide-toggle\r\n      color=\"primary\"\r\n      [(checked)]=\"showMyToggle\"\r\n      (change)=\"newcustomerToggle($event.checked)\"\r\n      class=\"padding-side\"\r\n    ></md-slide-toggle>\r\n  </div>\r\n  <!-- <div class=\"col-xs-4 padding-side\" style=\"margin-top: 25px\">\r\n    <span>\r\n      Quotation :\r\n    </span>\r\n    <md-slide-toggle color=\"primary\" class=\"padding-side\"></md-slide-toggle>\r\n  </div> -->\r\n</div>\r\n\r\n<div *ngIf=\"showCustomer\">\r\n  <div class=\"row\">\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"Name\"\r\n        required\r\n        [(ngModel)]=\"inputData.customer.firstName\"\r\n        style=\"text-transform: capitalize\"\r\n      />\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"Business Name\"\r\n        [(ngModel)]=\"inputData.customer.businessName\"\r\n        style=\"text-transform: capitalize\"\r\n      />\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        required\r\n        placeholder=\"Mobile\"\r\n        [(ngModel)]=\"inputData.customer.mobile\"\r\n        required\r\n      />\r\n    </md-input-container>\r\n  </div>\r\n  <div class=\"row\">\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"Address Lane\"\r\n        [(ngModel)]=\"inputData.customer.billingAddress.lane\"\r\n        style=\"text-transform: capitalize\"\r\n        required\r\n      />\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        required\r\n        placeholder=\"Choose State\"\r\n        [(ngModel)]=\"inputData.customer.billingAddress.state\"\r\n        [mdAutocomplete]=\"address\"\r\n        (focus)=\"filterStates(null)\"\r\n        (keyup)=\"filterStates($event.target.value)\"\r\n        required\r\n      />\r\n      <md-autocomplete #address=\"mdAutocomplete\">\r\n        <md-option *ngFor=\"let option of filteredStates\" [value]=\"option.value\">\r\n          {{ option.value }}\r\n        </md-option>\r\n      </md-autocomplete>\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        required\r\n        placeholder=\"Pincode\"\r\n        [(ngModel)]=\"inputData.customer.billingAddress.zipCode\"\r\n        required\r\n      />\r\n    </md-input-container>\r\n  </div>\r\n  <div class=\"row\">\r\n    <md-input-container class=\"col-xs-4 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"GST Number\"\r\n        [(ngModel)]=\"inputData.customer.gstNo\"\r\n        required\r\n      />\r\n    </md-input-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/invoice-search/invoice-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__ = __webpack_require__("../../../../../src/app/entities/customer.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceSearchComponent = (function () {
    function InvoiceSearchComponent(appService, dialog, restService) {
        this.appService = appService;
        this.dialog = dialog;
        this.restService = restService;
        this.customers = [];
        this.filteredPhones = [];
        this.outputEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stateList = [];
        this.showMyToggle = false;
        this.filteredStates = [];
        this.showCustomer = false;
        this.showSearchCustomer = true;
    }
    InvoiceSearchComponent.prototype.ngOnChanges = function (changes) {
        //this.temp = [ ...this.dataRows ];
        // this.sales = changes['sales'].currentValue
        // console.log(this.sales)
    };
    InvoiceSearchComponent.prototype.ngOnInit = function () {
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            this.customerMobile =
                this.sales.customer.businessName + " - " + this.sales.customer.mobile;
            console.log("the customer mobile ", this.customerMobile);
            this.customerGst = this.sales.customer.gstNo;
        }
        else {
            console.log("no selectedItem available");
        }
        this.stateLoad();
    };
    InvoiceSearchComponent.prototype.changeProduct = function (item) {
        // this.outputProductToggle.emit(item);
        this.sales;
    };
    InvoiceSearchComponent.prototype.filterPhones = function (val) {
        this.filteredPhones =
            val && val != ""
                ? this.customers.filter(function (s) {
                    return s.businessName.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                        s.mobile.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                        s.gstNo.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                        s.firstName.toLowerCase().indexOf(val.toLowerCase()) >= 0;
                })
                : this.customers;
    };
    InvoiceSearchComponent.prototype.selectedCustomer = function (item) {
        console.log(item);
        if (item && typeof item == "object") {
            this.inputData.customer = item;
            this.customerMobile = item.businessName + " - " + item.mobile;
            this.customerGst = item.gstNo;
            this.onSelectCustomer(item);
        }
        else {
            this.inputData.customer = new __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]();
            this.customerMobile = item;
            this.customerGst = item.gstNo;
        }
        this.showMyToggle = false;
    };
    InvoiceSearchComponent.prototype.onSelectCustomer = function (customer) {
        var companyInfo = __WEBPACK_IMPORTED_MODULE_5__shared_utils_storage__["a" /* Storage */].getSessionUser().company;
        console.log(companyInfo);
        if (companyInfo.address.state == customer.shippingAddress.state) {
            this.sales.isCgst = true;
            this.sales.isIgst = false;
        }
        else {
            this.sales.isCgst = false;
            this.sales.isIgst = true;
        }
    };
    // onGstChange(event: any) {
    //   if (event.checked) {
    //     CustomerFormGroup.gstNumber(this.myForm, true);
    //   } else {
    //     this.sales.customer.gstNo = "";
    //     CustomerFormGroup.gstNumber(this.myForm, false);
    //   }
    // }
    InvoiceSearchComponent.prototype.stateLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.stateList = results["stateList"];
        });
    };
    InvoiceSearchComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s.key.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    InvoiceSearchComponent.prototype.newcustomerToggle = function (event) {
        console.log(event.val);
        if (event == true) {
            this.showCustomer = true;
            this.showSearchCustomer = false;
            this.inputData.customer = new __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]();
        }
        else {
            this.showCustomer = false;
            this.showSearchCustomer = true;
        }
    };
    return InvoiceSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], InvoiceSearchComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], InvoiceSearchComponent.prototype, "customers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], InvoiceSearchComponent.prototype, "filteredPhones", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], InvoiceSearchComponent.prototype, "outputEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */]) === "function" && _c || Object)
], InvoiceSearchComponent.prototype, "inputData", void 0);
InvoiceSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-invoice-search",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/invoice-search/invoice-search.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */]) === "function" && _f || Object])
], InvoiceSearchComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=invoice-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/products-servrvice-toggle/products-servrvice-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<aside style=\"max-width: 98%;\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n    <div\r\n      fxLayout=\"row wrap\"\r\n      fxLayoutAlign=\"space-evenly center\"\r\n      class=\"padding-side\"\r\n      style=\"width: 100%; \"\r\n    >\r\n      <div flex=\"25\">\r\n        <span>Product</span>\r\n        <md-slide-toggle\r\n          color=\"primary\"\r\n          [(ngModel)]=\"sales.isProduct\"\r\n          (change)=\"changeProduct(false)\"\r\n          class=\"padding-side\"\r\n          [checked]=\"true\"\r\n        ></md-slide-toggle>\r\n      </div>\r\n      <div flex=\"25\">\r\n        <span>Service</span>\r\n        <md-slide-toggle\r\n          color=\"primary\"\r\n          [(ngModel)]=\"sales.isService\"\r\n          (change)=\"changeService(false)\"\r\n          class=\"padding-side\"\r\n        ></md-slide-toggle>\r\n      </div>\r\n\r\n      <div flex=\"25\">\r\n        <span>GST</span>\r\n        <md-slide-toggle\r\n          color=\"accent\"\r\n          [checked]=\"sales.isCgst\"\r\n          class=\"padding-side\"\r\n          disabled\r\n        ></md-slide-toggle>\r\n      </div>\r\n      <div flex=\"25\">\r\n        <span>IGST</span>\r\n        <md-slide-toggle\r\n          color=\"accent\"\r\n          [checked]=\"sales.isIgst\"\r\n          class=\"padding-side\"\r\n          disabled\r\n        ></md-slide-toggle>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" style=\"margin-bottom: 1em;\">\r\n      <button\r\n        md-raised-button\r\n        (click)=\"clear()\"\r\n        color=\"accent\"\r\n        flex=\"10\"\r\n        style=\"float: right;margin-right:5px;\"\r\n      >\r\n        Clear\r\n      </button>\r\n    </div>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/products-servrvice-toggle/products-servrvice-toggle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/products-servrvice-toggle/products-servrvice-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_entities_address_entity__ = __webpack_require__("../../../../../src/app/entities/address.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_entities_customerpayment_entity__ = __webpack_require__("../../../../../src/app/entities/customerpayment.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_entities_customertax_entity__ = __webpack_require__("../../../../../src/app/entities/customertax.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsServrviceToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsServrviceToggleComponent = (function () {
    function ProductsServrviceToggleComponent(restService, appService) {
        this.restService = restService;
        this.appService = appService;
        this.showAddress = false;
        this.outputProductToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.outputServiceToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addProductEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addServiceEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeGstEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clearEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addItemEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // this.sales.isProduct = false;
    }
    ProductsServrviceToggleComponent.prototype.clear = function () {
        this.clearEmitter.emit();
    };
    ProductsServrviceToggleComponent.prototype.add = function () {
        this.addItemEmitter.emit();
    };
    ProductsServrviceToggleComponent.prototype.ngOnInit = function () {
        this.sales.isProduct = true;
        this.sales.isService = false;
        //   this.changeProduct(true);
        // this.changeService(true);
    };
    ProductsServrviceToggleComponent.prototype.changeProduct = function (item) {
        this.outputProductToggle.emit(item);
        this.sales;
    };
    ProductsServrviceToggleComponent.prototype.changeService = function (item) {
        this.outputServiceToggle.emit(item);
        this.sales;
    };
    ProductsServrviceToggleComponent.prototype.addProduct = function (item) {
        console.log("toggle add product");
        this.outputProductToggle.emit(item);
    };
    ProductsServrviceToggleComponent.prototype.addService = function (item) {
        this.outputServiceToggle.emit(item);
    };
    ProductsServrviceToggleComponent.prototype.save = function () {
        var _this = this;
        this.sales.status = "DRAFTSAVE";
        this.salesData();
        console.log(this.sales.items);
        if (this.valid()) {
            this.restService.saveInvoice(this.sales).subscribe(function (result) {
                if (result) {
                    _this.appService.showMessage("Invoice generated successfully : " + result.invoiceNumber);
                    _this.appService.navigate("admin/invoice-search", []);
                }
            });
        }
    };
    ProductsServrviceToggleComponent.prototype.valid = function () {
        var returnVal = true;
        if (returnVal &&
            (!this.sales.customer.mobile ||
                this.sales.customer.mobile == "0" ||
                !this.sales.customer.firstName)) {
            returnVal = false;
            this.appService.showMessage("please select customer name and mobile");
        }
        return returnVal;
    };
    ProductsServrviceToggleComponent.prototype.billing = function () {
        var _this = this;
        this.sales.status = "BILLING";
        this.salesData();
        console.log(this.sales);
        if (this.valid()) {
            this.restService.saveInvoice(this.sales).subscribe(function (result) {
                if (result) {
                    _this.appService.showMessage("Bill save successfully : " + result.invoiceNumber);
                    _this.appService.navigate("admin/invoice-search", []);
                }
            });
        }
    };
    ProductsServrviceToggleComponent.prototype.salesData = function () {
        var productItems = [];
        var serviceItems = [];
        if (this.sales.isProduct) {
            productItems = this.sales.productItems.filter(function (item) {
                if (item.stockItemId.id != null) {
                    item.service = null;
                    return item;
                }
            });
        }
        if (this.sales.isService) {
            serviceItems = this.sales.serviceItems.filter(function (item) {
                if (item.service) {
                    if (item.service.id != null) {
                        item.stockItemId.id = null;
                        return item;
                    }
                }
            });
        }
        this.sales.items = productItems.concat(serviceItems);
        if (this.sales.items == null || this.sales.items.length == 0) {
            this.appService.showMessage("Please select atleast one product or service.");
        }
        if (this.sales.customer.id == null) {
            if (!this.sales.customer.address) {
                this.sales.customer.address = new __WEBPACK_IMPORTED_MODULE_4_app_entities_address_entity__["a" /* Address */]();
            }
            this.sales.customer.address.lane = this.sales.customer.inlineAddress;
            if (this.sales.isBillingAddress) {
                this.sales.customer.shippingAddress = this.sales.customer.address;
            }
            else {
                this.sales.customer.shippingAddress = this.sales.address;
            }
            this.sales.customer.customerPayment = new __WEBPACK_IMPORTED_MODULE_5_app_entities_customerpayment_entity__["a" /* CustomerPayment */]();
            this.sales.customer.customerTax = new __WEBPACK_IMPORTED_MODULE_6_app_entities_customertax_entity__["a" /* CustomerTax */]();
        }
        this.sales.userId = 1; // this.appService.getSessionUser().id;
        console.log(this.appService.getSessionUser());
    };
    return ProductsServrviceToggleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductsServrviceToggleComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], ProductsServrviceToggleComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProductsServrviceToggleComponent.prototype, "showAddress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ProductsServrviceToggleComponent.prototype, "outputProductToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ProductsServrviceToggleComponent.prototype, "outputServiceToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ProductsServrviceToggleComponent.prototype, "addProductEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], ProductsServrviceToggleComponent.prototype, "addServiceEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], ProductsServrviceToggleComponent.prototype, "changeGstEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], ProductsServrviceToggleComponent.prototype, "clearEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], ProductsServrviceToggleComponent.prototype, "addItemEmitter", void 0);
ProductsServrviceToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-products-servrvice-toggle",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/products-servrvice-toggle/products-servrvice-toggle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/products-servrvice-toggle/products-servrvice-toggle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_common_rest_service__["a" /* RestService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__["a" /* AppService */]) === "function" && _k || Object])
], ProductsServrviceToggleComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=products-servrvice-toggle.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/products-table/products-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-side\">\r\n  <md-card class=\"invoice-form-table\">\r\n    <div class=\"invoice-form-th\">\r\n      <md-list>\r\n        <md-list-item layout=\"row\" layout-wrap class=\"invoice-form-list-item\">\r\n          <span flex=\"4\"> S.no</span>\r\n          <span flex=\"30\">Product</span>\r\n          <span flex=\"8\">Qty</span>\r\n          <span flex=\"9\">Rate</span>\r\n          <span flex=\"8\">Discount</span>\r\n          <span flex=\"9\">Subtotal</span>\r\n          <span flex=\"9\">Tax Amount</span>\r\n          <span flex=\"9\">Cess</span>\r\n          <span flex=\"9\">Total</span>\r\n          <span flex=\"0\">&nbsp;</span>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n    <br />\r\n    <div\r\n      class=\"invoice-form-tb\"\r\n      [style.overflow]=\"'auto'\"\r\n      [style.height.px]=\"'300'\"\r\n    >\r\n      <md-list>\r\n        <ng-template\r\n          let-index=\"index\"\r\n          let-item\r\n          let-last=\"last\"\r\n          ngFor\r\n          [ngForOf]=\"sales.productItems\"\r\n        >\r\n          <md-list-item\r\n            layout=\"row\"\r\n            layout-wrap\r\n            (click)=\"selectLineItem(item, index)\"\r\n            *ngIf=\"item.stockItemId\"\r\n          >\r\n            <span flex=\"4\"> {{ index + 1 }}</span>\r\n            <span flex=\"30\">\r\n              <!-- <md-input-container style=\"margin-top: -4px !important;\">\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Choose Stock Item\"\r\n                  [(ngModel)]=\"item.stockItemId.productName\"\r\n                  (focus)=\"filterStockItems($event.target.values)\"\r\n                  (keyup)=\"filterStockItems($event.target.value)\"\r\n                  [mdAutocomplete]=\"autoStockItems\"\r\n                  [readOnly]=\"isEditable == 'false'\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                />\r\n\r\n                <md-autocomplete #autoStockItems=\"mdAutocomplete\">\r\n                  <md-option\r\n                    *ngFor=\"let fitem of filteredStockItems\"\r\n                    (click)=\"selectStockItem(fitem)\"\r\n                  >\r\n                    {{ fitem.productName }} -\r\n                    {{ fitem.stockItemPrice.stockathand }}\r\n                  </md-option>\r\n                </md-autocomplete>\r\n              </md-input-container> -->\r\n              <md-input-container style=\"margin-top: -9px !important;\">\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Choose Stock Item\"\r\n                  [(ngModel)]=\"item.stockItemId.productName\"\r\n                  (focus)=\"filterStockItems($event.target.values)\"\r\n                  (keyup)=\"filterStockItems($event.target.value)\"\r\n                  [mdAutocomplete]=\"autoStockItems\"\r\n                  [readOnly]=\"isEditable == 'false'\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                />\r\n\r\n                <md-autocomplete #autoStockItems=\"mdAutocomplete\">\r\n                  <md-option\r\n                    *ngFor=\"\r\n                      let fitem of filteredStockItems;\r\n                      let selIndex = index\r\n                    \"\r\n                    (click)=\"selectStockItem(fitem, selIndex)\"\r\n                  >\r\n                    {{ fitem.productName }} -\r\n                    {{ fitem.stockItemPrice.stockathand }}\r\n                  </md-option>\r\n                </md-autocomplete>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"8\">\r\n              <md-input-container\r\n                style=\"width:5em;  margin-top: -4px !important; padding-left: 5px\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"quantity\"\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"item.quantity\"\r\n                  (ngModelChange)=\"itemValueChange(item)\"\r\n                  [disabled]=\"!item.stockItemId.productName\"\r\n                />\r\n              </md-input-container>\r\n              <span style=\"color: red;font-size:10px\" *ngIf=\"item.greaterStock\">\r\n                no Stock\r\n              </span>\r\n            </span>\r\n            <!-- <span flex=\"5\"> (onfocusout)=\"selectItemFromDrop(fitem)\"\r\n              {{ item.stockItemId.uqc }}\r\n            </span> -->\r\n            <span flex=\"9\">\r\n              {{ item.unit }}\r\n            </span>\r\n            <span flex=\"8\">\r\n              <md-input-container\r\n                style=\"width:4em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.discount\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <!-- <span flex=\"10\">\r\n                            {{item.discountAmount}}\r\n                        </span> -->\r\n\r\n            <span flex=\"9\">\r\n              {{ item.itemsubtotalBeforeTax }}\r\n            </span>\r\n            <span flex=\"9\">\r\n              {{ item.taxAmount }}\r\n            </span>\r\n            <span flex=\"9\">\r\n              <md-input-container\r\n                style=\"width:0em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.cessPercent\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"9\">{{ item.totalAfterTax }}</span>\r\n            <span flex=\"0\" style=\"cursor: pointer;text-align:right;\">\r\n              <md-icon\r\n                color=\"accent\"\r\n                (click)=\"removeItem(index)\"\r\n                *ngIf=\"sales.productItems.length > 1\"\r\n                >delete</md-icon\r\n              >\r\n            </span>\r\n          </md-list-item>\r\n        </ng-template>\r\n      </md-list>\r\n\r\n      <!-- <div *ngIf=\"noRecords\">\r\n        <div fxLayout=\"row\" style=\"height:300px;width:100%\" class=\"padding-one\">\r\n          <span class=\"mat-caption app-alt-color\">\r\n            No Stock items &nbsp;\r\n          </span>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div\r\n        layout=\"row\"\r\n        layout-align=\"space-between start\"\r\n        class=\"invoice-form-grand-tot\"\r\n      >\r\n        <div flex=\"30\">\r\n          <div layout=\"column\"></div>\r\n        </div>\r\n        <div flex-offset=\"55\">\r\n          <div layout=\"column\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              layout=\"row\"\r\n              layout-align=\"space-between end\"\r\n              style=\"width: 200px; margin-bottom: 16px;\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"50\">Sub Total</span>\r\n              <b flex=\"50\"> {{ productSubTotal | amount }}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/products-table/products-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/products-table/products-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__ = __webpack_require__("../../../../../src/app/entities/item.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsTableComponent = (function () {
    function ProductsTableComponent(appService, restService) {
        this.appService = appService;
        this.restService = restService;
        this.products = [];
        this.noRecords = false;
        this.showMsg = false;
        this.stockItemList = [];
        this.filteredStockItems = [];
        this.isEditable = "true";
        this.productSubTotalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.productTaxTotalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemIndex = 0;
        this.fieldDisable = false;
        this.rowCount = 0;
        this.isSubmittable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadStockItems();
    }
    ProductsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            var itemSelectedInvoice = __WEBPACK_IMPORTED_MODULE_6__shared_utils_storage__["a" /* Storage */].getLocalItem("selectedItem");
            this.sales = itemSelectedInvoice;
            // this.productSubTotal = itemSelectedInvoice.totalBeforeTax;
            this.addItem();
            this.subTotalCalc();
        }
        else {
            this.addItemChange.subscribe(function (v) {
                console.log("----------------------------------");
                console.log(_this.sales.productItems.length);
                _this.addItem();
                console.log("----------------------------------");
                console.log(_this.sales.productItems.length);
            });
            this.gstChange.subscribe(function (v) {
                _this.sales.productItems.forEach(function (element) {
                    _this.itemCalculate(element);
                    // this.quantity(element);
                });
            });
        }
    };
    // filterProducts(){
    //   this.filterProductEmitter.emit();
    // }
    ProductsTableComponent.prototype.selectLineItem = function (item, index) {
        if (this.itemSelected !== item) {
            this.itemSelected = item;
            // this.quantity(item);
        }
        //this.selectedProductEmitter.emit(item);
    };
    ProductsTableComponent.prototype.selectStockItem = function (item, eleIndex) {
        if (item && typeof item == "object") {
            var sp = item.stockItemPrice.sellingPrice;
            var customerDiscount = (this.sales.customer.discount * sp) / 100;
            var stockDiscount = (item.stockItemPrice.discount * sp) / 100;
            this.itemSelected.unit = sp - (customerDiscount + stockDiscount);
            // this.itemSelected.quantity = 1;
            this.itemSelected.stockItemId.productName =
                item.productName +
                    " Qty: ".concat(item.stockItemPrice.stockathand != null
                        ? item.stockItemPrice.stockathand
                        : 0);
            //this.itemSelected.productCode = item.hsnCodeNames;
            this.itemSelected.taxrate = item.stockItemPrice.tax.toString();
            //   this.itemSelected.stockItemId = item; //+item.id;
            console.log(this.itemSelected.stockItemId);
            this.itemSelected.stockItemId.id = item.id;
            this.itemSelected.stockItemId.uqc = item.uqc;
            this.itemSelected.cgst = 0;
            this.itemSelected.sgst = 0;
            this.itemSelected.discount = 0;
            this.itemSelected.cessPercent = 0;
            this.itemSelected.quantity = 1;
            this.itemCalculate(this.itemSelected);
            console.log(this.itemSelected);
            this.itemSelected.stockDisplayValue = item.stockItemPrice.stockathand;
            console.log(this.itemSelected.stockDisplayValue);
            item.isselect = true;
            //  this.fieldDisable = item.stockItemPrice.stockathand <= 0 ? true : false;
            item.isNewRow = true;
            //this.filteredStockItems.splice(eleIndex, 1);
        }
        this.addItem();
    };
    ProductsTableComponent.prototype.selectItemFromDrop = function (ele) {
        ele.isselect = true;
    };
    ProductsTableComponent.prototype.itemValueChange = function (item, field) {
        this.itemCalculate(item);
        this.quantity(item);
    };
    ProductsTableComponent.prototype.quantity = function (item) {
        if (item.quantity > this.itemSelected.stockDisplayValue) {
            console.log("iadhfkbiayhefdsddssd");
            this.itemSelected.quantity = 0;
            this.itemCalculate(item);
            return (item.greaterStock = true);
        }
        else if (item.quantity < this.itemSelected.stockDisplayValue) {
            console.log("iadhfkbiayhefd");
            return (item.greaterStock = false);
        }
    };
    ProductsTableComponent.prototype.itemCalculate = function (item) {
        console.log("***************item C method");
        var total = 0;
        var cessAmount = 0;
        var discountAmount = 0;
        var beforeTaxAmount = item.unit * item.quantity;
        discountAmount = beforeTaxAmount * (item.discount / 100);
        item.discountAmount = +discountAmount.toFixed(2) + 0.0;
        item.itemsubtotalBeforeTax = beforeTaxAmount - item.discountAmount + 0.0;
        total = +item.itemsubtotalBeforeTax.toFixed(2);
        cessAmount = total * (item.cessPercent / 100);
        item.cessAmount = +cessAmount.toFixed(2);
        if (this.sales.isCgst) {
            if (item.taxrate && item.taxrate != "Nil") {
                item.cgst =
                    (total * (parseFloat(item.taxrate.replace("%", "")) / 100)) / 2;
                item.sgst =
                    (total * (parseFloat(item.taxrate.replace("%", "")) / 100)) / 2;
                var taxAmount = item.cgst + item.sgst;
                item.taxAmount = +taxAmount.toFixed(2) + 0.0;
                console.log("total is " + total);
                console.log("item.taxAmount is " + item.taxAmount);
                console.log("item.cessAmount is " + item.cessAmount);
                var itemAmount = total + item.taxAmount + item.cessAmount;
                item.totalAfterTax = +itemAmount.toFixed(2) + 0.0;
                console.log(item.totalAfterTax);
            }
            else {
                item.cgst = 0;
                item.sgst = 0;
                item.totalAfterTax = total + cessAmount;
            }
        }
        if (this.sales.isIgst) {
            if (item.taxrate && item.taxrate != "Nil") {
                item.igst = total * (parseFloat(item.taxrate.replace("%", "")) / 100);
                //item.taxAmount = item.igst;
                item.totalAfterTax =
                    total +
                        total * (parseFloat(item.taxrate.replace("%", "")) / 100) +
                        cessAmount;
            }
            else {
                item.igst = 0;
                item.totalAfterTax = total + cessAmount;
            }
        }
        this.sales.total = total + cessAmount;
        this.subTotalCalc();
    };
    ProductsTableComponent.prototype.subTotalCalc = function () {
        var _this = this;
        console.log("****************subtotal c method");
        console.log("product items " + this.sales.productItems);
        var subTotal = 0;
        var totalTax = 0;
        this.productSubTotal = subTotal;
        var totalBeforeTax = 0;
        this.sales.productItems.forEach(function (element) {
            if (element.stockItemId != null && element.stockItemId.id != null) {
                totalBeforeTax = totalBeforeTax + element.itemsubtotalBeforeTax;
                subTotal = subTotal + element.totalAfterTax;
                totalTax = totalTax + element.taxAmount;
                _this.productSubTotal = +subTotal.toFixed(2) + 0.0;
                console.log(_this.productSubTotal);
                _this.productSubTotalEmitter.emit(_this.productSubTotal);
                _this.productTaxTotalEmitter.emit(totalTax);
            }
        });
        this.sales.totalBeforeTax = totalBeforeTax;
        this.sales.totalTax = totalTax;
        console.log("subTotalCalc :: productSubTotal", this.productSubTotal);
        if (!this.sales.isProduct) {
            this.productSubTotal = 0;
            this.productSubTotalEmitter.emit(this.productSubTotal);
        }
    };
    ProductsTableComponent.prototype.removeItem = function (index) {
        var _this = this;
        this.sales.productItems[index].stockItemId = null;
        setTimeout(function () {
            _this.sales.productItems.splice(index, 1);
        }, 10);
        this.sales.paidAmount = 0;
        this.sales.dueAmount = 0;
        this.productSubTotal = 0;
        this.subTotalCalc();
        this.productSubTotalEmitter.emit(this.productSubTotal);
        this.rowCount--;
        this.rowCount == 1 &&
            this.sales.productItems[this.rowCount - 1].stockItemId == null
            ? this.isSubmittable.emit(false)
            : this.isSubmittable.emit(true);
    };
    ProductsTableComponent.prototype.onBarcodeScan = function (event) {
        alert("Scan Complete: Barcode is " + event.target.value);
    };
    ProductsTableComponent.prototype.addItem = function () {
        if (this.sales.productItems.length == 0 ||
            this.sales.productItems[this.sales.productItems.length - 1].stockItemId
                .id != null) {
            var item = new __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */]();
            item.id = null;
            //item.company = this.sales.company;
            //  item.product = this.newProduct();
            item.unit = 0;
            item.cgst = 0;
            item.sgst = 0;
            item.igst = 0;
            item.igst = 0;
            item.quantity = 0;
            item.cessPercent = 0;
            item.cessAmount = 0;
            item.isNewRow = true;
            // this.filteredStockItems = null;
            this.sales.productItems.push(item);
            if (item.quantity == null || item.quantity == 0 || item.quantity == "") {
                this.showMsg = false;
            }
        }
        this.rowCount++;
        this.rowCount == 1 && this.sales.productItems[this.rowCount] == null
            ? this.isSubmittable.emit(false)
            : this.isSubmittable.emit(true);
    };
    ProductsTableComponent.prototype.loadStockItems = function () {
        var _this = this;
        this.restService
            .getStockItems({ id: this.appService.getBranch().id })
            .subscribe(function (results) {
            _this.stockItemList = results;
        });
    };
    // newProduct() {
    //   return {
    //261 after row this.rowCount .stockItemId
    //     id: null,
    //     productCode: Math.floor(Math.random() * (999999999 - 1)),
    //     productName: null,
    //     hsnCode: Math.floor(Math.random() * (9999 - 1)),
    //     companyId: this.sales.companyId,
    //     active: true,
    //     productPurchasing: {
    //       id: null,
    //       leadTimeDays: 0,
    //       cgsTax: "0",
    //       sgsTax: "0",
    //       igsTax: "0"
    //     },
    //     productPriceListItems: {
    //       id: null,
    //       initialStockAtHand: "100",
    //       unitPrice: 1,
    //       unitSellPrice: 1,
    //       stockAsOfDate: "2000-01-01T18:30:00.000Z",
    //       stockAlertQty: 10,
    //       purchaseTaxInclusive: "1",
    //       taxInclusive: "0"
    //     }
    //   };
    // }
    ProductsTableComponent.prototype.filterStockItems = function (val) {
        if (this.isEditable == "true") {
            this.filteredStockItems =
                val && val != ""
                    ? this.stockItemList.filter(function (s) { return s.productName.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                    : this.stockItemList;
            var len = this.filteredStockItems.length;
            for (var j = 0; j < len; j++) {
                if (this.filteredStockItems[j].isselect == true) {
                    console.log(this.filteredStockItems[j]);
                }
            }
        }
        else {
            this.stockItemList = [];
        }
        if (this.stockItemList.length == 0) {
            this.noRecords = true;
        }
        else {
            this.noRecords = false;
        }
    };
    return ProductsTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductsTableComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProductsTableComponent.prototype, "isCgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */]) === "function" && _a || Object)
], ProductsTableComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProductsTableComponent.prototype, "isIgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], ProductsTableComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductsTableComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], ProductsTableComponent.prototype, "addItemChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _d || Object)
], ProductsTableComponent.prototype, "gstChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], ProductsTableComponent.prototype, "productSubTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], ProductsTableComponent.prototype, "productTaxTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], ProductsTableComponent.prototype, "isSubmittable", void 0);
ProductsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-products-table",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/products-table/products-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/products-table/products-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */]) === "function" && _j || Object])
], ProductsTableComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=products-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/service-table/service-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-side\">\r\n  <md-card class=\"invoice-form-table\">\r\n    <div class=\"invoice-form-th\">\r\n      <md-list>\r\n        <md-list-item layout=\"row\" layout-wrap class=\"invoice-form-list-item\">\r\n          <span flex=\"5\"> S.no</span>\r\n          <span flex=\"20\">Service</span>\r\n          <span flex=\"10\"></span>\r\n          <!-- // SAC Code -->\r\n          <span flex=\"5\"></span>\r\n          <span flex=\"10\">Discount</span>\r\n          <span flex=\"10\">Subtotal</span>\r\n\r\n          <span flex=\"10\">Tax Amount</span>\r\n          <span flex=\"10\">Cess</span>\r\n          <span flex=\"5\">Amount</span>\r\n          <span flex=\"0\">&nbsp;</span>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n    <br />\r\n\r\n    <div\r\n      class=\"invoice-form-tb\"\r\n      [style.overflow]=\"'auto'\"\r\n      [style.height.px]=\"'300'\"\r\n    >\r\n      <md-list>\r\n        <ng-template\r\n          let-index=\"index\"\r\n          let-item\r\n          let-last=\"last\"\r\n          ngFor\r\n          [ngForOf]=\"sales.serviceItems\"\r\n        >\r\n          <md-list-item\r\n            layout=\"row\"\r\n            (click)=\"selectedLineItem(item, index)\"\r\n            *ngIf=\"item.service\"\r\n          >\r\n            <span flex=\"5\"> {{ index + 1 }}</span>\r\n            <span flex=\"20\">\r\n              <md-input-container style=\"margin-top: -4px !important;\">\r\n                <input\r\n                  placeholder=\"Search By Service\"\r\n                  mdInput\r\n                  [(ngModel)]=\"item.service.serviceName\"\r\n                  (focus)=\"filterServiceItems($event.target.values)\"\r\n                  (keyup)=\"filterServiceItems($event.target.value)\"\r\n                  [mdAutocomplete]=\"autoServices\"\r\n                  [readOnly]=\"isEditable == 'false'\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                />\r\n                <md-autocomplete #autoServices=\"mdAutocomplete\">\r\n                  <md-option\r\n                    *ngFor=\"let option of filteredServices\"\r\n                    [value]=\"option.serviceName\"\r\n                    (click)=\"selectedService(option)\"\r\n                  >\r\n                    <b> {{ option.serviceName }} </b> - {{ option.serviceCode }}\r\n                  </md-option>\r\n                </md-autocomplete>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"10\"></span>\r\n            <!-- <span flex=\"5\">\r\n                                <md-input-container style=\"width:3em;  margin-top: -4px !important; padding-left: 5px\">\r\n                                    <input mdInput type=\"number\" [(ngModel)]=\"item.quantity\" (change)=\"itemValueChange(item)\">\r\n                                </md-input-container>\r\n                            </span> -->\r\n            <!-- <span flex=\"5\">\r\n                                {{item.service.uqc}}\r\n                            </span> -->\r\n            <span flex=\"5\">\r\n              {{ item.service.salesUnit }}\r\n            </span>\r\n            <span flex=\"10\">\r\n              <md-input-container\r\n                style=\"width:4em;  margin-top: -4px !important; padding-left: 5px\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.discount\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"10\">\r\n              {{ item.itemsubtotalBeforeTax }}\r\n            </span>\r\n            <!-- <span flex=\"5\" *ngIf=\"sales.isCgst\">{{item.cgst | amount}}</span>\r\n                            <span flex=\"5\" *ngIf=\"sales.isCgst\">{{item.sgst | amount}}</span>\r\n                            <span flex=\"10\" *ngIf=\"sales.isIgst\">{{item.igst | amount}}</span> -->\r\n            <span flex=\"10\">\r\n              {{ item.taxAmount }}\r\n            </span>\r\n            <span flex=\"10\">\r\n              <md-input-container\r\n                style=\"width:4em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.cessPercent\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"10\">{{ item.totalAfterTax | amount }}</span>\r\n            <span flex=\"0\" style=\"cursor: pointer;text-align:right;\">\r\n              <md-icon\r\n                color=\"accent\"\r\n                (click)=\"removeItem(index)\"\r\n                *ngIf=\"sales.serviceItems.length > 1\"\r\n                >delete</md-icon\r\n              >\r\n            </span>\r\n          </md-list-item>\r\n        </ng-template>\r\n      </md-list>\r\n      <div\r\n        layout=\"row\"\r\n        layout-align=\"space-between start\"\r\n        class=\"invoice-form-grand-tot\"\r\n      >\r\n        <div flex=\"30\">\r\n          <div layout=\"column\"></div>\r\n        </div>\r\n        <div flex-offset=\"55\">\r\n          <div layout=\"column\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              layout=\"row\"\r\n              layout-align=\"space-between end\"\r\n              style=\"width: 200px; margin-bottom: 16px;\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"50\">Sub Total</span>\r\n              <b flex=\"50\"> {{ serviceSubTotal | amount }}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/service-table/service-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/service-table/service-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__ = __webpack_require__("../../../../../src/app/entities/item.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceTableComponent = (function () {
    function ServiceTableComponent(appService, restService) {
        this.appService = appService;
        this.restService = restService;
        this.services = [];
        this.isEditable = "true";
        this.noRecords = false;
        this.filteredServices = [];
        // Service: any;
        this.rowCount = 0;
        this.isSubmittable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.serviceSubTotalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.serviceTaxTotalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemIndex = 0;
        this.serviceItemList = [];
        this.loadServiceItems();
    }
    // ngOnInit() {
    //   this.addItemChange.subscribe(v => {
    //     this.addItem();
    //   });
    //   this.gstChange.subscribe(v => {
    //     this.sales.serviceItems.forEach(element => {
    //       this.itemCalculate(element);
    //     });
    //   });
    // }
    ServiceTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            var itemSelectedInvoice = __WEBPACK_IMPORTED_MODULE_6__shared_utils_storage__["a" /* Storage */].getLocalItem("selectedItem");
            this.sales = itemSelectedInvoice;
            console.log(this.sales);
            this.serviceSubTotal = itemSelectedInvoice.serviceItems.totalAfterTax;
            this.addItem();
            this.subTotalCalc();
        }
        else {
            this.addItemChange.subscribe(function (v) {
                console.log("----------------------------------");
                console.log(_this.sales.serviceItems.length);
                _this.addItem();
                console.log("----------------------------------");
                console.log(_this.sales.serviceItems.length);
            });
            this.gstChange.subscribe(function (v) {
                _this.sales.serviceItems.forEach(function (element) {
                    _this.itemCalculate(element);
                });
            });
        }
    };
    ServiceTableComponent.prototype.onBarcodeScan = function (event) {
        alert("Scan Complete: Barcode is " + event.target.value);
    };
    // filterProducts(){
    //   this.filterProductEmitter.emit();
    // }
    ServiceTableComponent.prototype.selectedLineItem = function (item, index) {
        console.log(index);
        if (this.itemSelected == null || this.itemSelected != item) {
            this.itemSelected = item;
        }
        this.itemIndex = index;
        console.log(item);
        //this.selectedProductEmitter.emit(item);
    };
    ServiceTableComponent.prototype.selectedService = function (item) {
        console.log(item);
        if (item && typeof item == "object") {
            // this.itemSelected.unit = item.salesUnit;
            var sp = item.salesUnit;
            var customerDiscount = (this.sales.customer.discount * sp) / 100;
            var serviceDiscount = (item.discount * sp) / 100;
            this.itemSelected.unit = sp - (customerDiscount + serviceDiscount);
            this.itemSelected.quantity = 1;
            // this.itemSelected.serviceName = item.serviceName
            // this.itemSelected.serviceCode = item.serviceCode;
            this.itemSelected.taxrate = item.tax;
            // this.itemSelected.service.serviceName = item.serviceName;
            this.itemSelected.service.id = item.id;
            // this.itemSelected.service = item.id;
            // this.itemSelected.productSubTotal = item.subTotal;
            this.itemSelected.cgst = 0;
            this.itemSelected.sgst = 0;
            this.itemSelected.discount = 0;
            this.itemSelected.cessPercent = 0;
            console.log(this.itemSelected);
            this.itemCalculate(this.itemSelected);
        }
        this.addItem();
    };
    ServiceTableComponent.prototype.itemValueChange = function (item) {
        this.itemCalculate(item);
    };
    ServiceTableComponent.prototype.itemCalculate = function (item) {
        var total = 0;
        var cessAmount = 0;
        var discountAmount = 0;
        var beforeTaxAmount = item.unit * item.quantity;
        discountAmount = beforeTaxAmount * (item.discount / 100);
        item.discountAmount = discountAmount;
        item.discountAmount = +discountAmount.toFixed(2) + 0.0;
        item.itemsubtotalBeforeTax = beforeTaxAmount - item.discountAmount + 0.0;
        total = +item.itemsubtotalBeforeTax.toFixed(2);
        item.cessAmount = total * (item.cessPercent / 100);
        cessAmount = item.cessAmount;
        if (this.sales.isCgst) {
            if (item.taxrate && item.taxrate != "Nil") {
                item.cgst =
                    (total * (parseFloat(item.taxrate.replace("%", "")) / 100)) / 2;
                item.sgst =
                    (total * (parseFloat(item.taxrate.replace("%", "")) / 100)) / 2;
                var taxAmount = item.cgst + item.sgst;
                item.taxAmount = +taxAmount.toFixed(2) + 0.0;
                console.log("total is " + total);
                console.log("item.taxAmount is " + item.taxAmount);
                console.log("item.cessAmount is " + item.cessAmount);
                var itemAmount = total + item.taxAmount + item.cessAmount;
                item.totalAfterTax = +itemAmount.toFixed(2) + 0.0;
                console.log(item.totalAfterTax);
            }
            else {
                item.cgst = 0;
                item.sgst = 0;
                item.totalAfterTax = total + cessAmount;
            }
        }
        else if (this.sales.isIgst) {
            if (item.taxrate && item.taxrate != "Nil") {
                item.igst = total * (parseFloat(item.taxrate.replace("%", "")) / 100);
                var taxAmount = item.cgst + item.sgst;
                item.taxAmount = +taxAmount.toFixed(2) + 0.0;
                console.log("total is " + total);
                console.log("item.taxAmount is " + item.taxAmount);
                console.log("item.cessAmount is " + item.cessAmount);
                var itemAmount = total + item.taxAmount + item.cessAmount;
                item.totalAfterTax = +itemAmount.toFixed(2) + 0.0;
                console.log(item.totalAfterTax);
            }
            else {
                item.igst = 0;
                item.totalAfterTax = total + cessAmount;
            }
        }
        this.sales.total = total + cessAmount;
        this.subTotalCalc();
    };
    ServiceTableComponent.prototype.subTotalCalc = function () {
        var _this = this;
        console.log("****************subtotal c method");
        console.log("product items " + this.sales.productItems);
        var subTotal = 0;
        var totalTax = 0;
        this.serviceSubTotal = subTotal;
        var totalBeforeTax = 0;
        this.sales.serviceItems.forEach(function (element) {
            if (element.service.id != null && element.service.id != null) {
                totalBeforeTax = totalBeforeTax + element.itemsubtotalBeforeTax;
                subTotal = subTotal + element.totalAfterTax;
                totalTax = totalTax + element.taxAmount;
                _this.serviceSubTotal = +subTotal.toFixed(2) + 0.0;
            }
            _this.serviceSubTotalEmitter.emit(_this.serviceSubTotal);
            _this.serviceTaxTotalEmitter.emit(totalTax);
        });
        this.sales.totalBeforeTax = totalBeforeTax;
        this.sales.totalTax = totalTax;
        console.log("subTotalCalc :: productSubTotal", this.serviceSubTotal);
        if (!this.sales.isProduct) {
            this.serviceSubTotal = 0;
            this.serviceSubTotalEmitter.emit(this.serviceSubTotal);
        }
    };
    // itemCalculate(item){
    //   this.outputEmitter.emit(item);
    // }
    ServiceTableComponent.prototype.removeItem = function (index) {
        var _this = this;
        this.sales.serviceItems[index].service = null;
        setTimeout(function () {
            _this.sales.serviceItems.splice(index, 1);
        }, 10);
        this.sales.paidAmount = 0;
        this.sales.dueAmount = 0;
        this.serviceSubTotal = 0;
        this.serviceSubTotalEmitter.emit(this.serviceSubTotal);
        this.subTotalCalc();
        this.rowCount--;
        this.rowCount == 1 &&
            this.sales.serviceItems[this.rowCount - 1].service == null
            ? this.isSubmittable.emit(false)
            : this.isSubmittable.emit(true);
    };
    ServiceTableComponent.prototype.addItem = function () {
        if (this.sales.serviceItems.length == 0 ||
            this.sales.serviceItems[this.sales.serviceItems.length - 1].service.id !=
                null) {
            var item = new __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */]();
            item.id = null;
            //item.company = this.sales.company;
            // item.service = Object.assign({}, this.service);
            item.unit = 0;
            item.cgst = 0;
            item.sgst = 0;
            item.igst = 0;
            item.igst = 0;
            item.cessPercent = 0;
            item.cessAmount = 0;
            this.sales.serviceItems.push(item);
        }
        this.rowCount++;
        this.rowCount == 1 && this.sales.serviceItems[this.rowCount] == null
            ? this.isSubmittable.emit(false)
            : this.isSubmittable.emit(true);
    };
    ServiceTableComponent.prototype.loadServiceItems = function () {
        var _this = this;
        this.restService
            .getStockItems({ id: this.appService.getBranch().id })
            .subscribe(function (results) {
            _this.serviceItemList = results;
        });
    };
    // serviceName: any;
    // filterServices(val: string) {
    //   if (val) {
    //     this.serviceName = val;
    //   }
    //   this.filteredServices =
    //     val && val != ""
    //       ? this.services.filter(
    //           s => s.serviceName.toLowerCase().indexOf(val.toLowerCase()) >= 0
    //         )
    //       : this.services;
    // }
    // serviceName: any;
    ServiceTableComponent.prototype.filterServiceItems = function (val) {
        if (this.isEditable == "true") {
            if (val) {
                this.serviceName = val;
            }
            this.filteredServices =
                val && val != ""
                    ? this.services.filter(function (s) { return s.serviceName.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                    : this.services;
        }
        else {
            this.services = [];
        }
        if (this.services.length == 0) {
            this.noRecords = true;
        }
        else {
            this.noRecords = false;
        }
    };
    return ServiceTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ServiceTableComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */]) === "function" && _a || Object)
], ServiceTableComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ServiceTableComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], ServiceTableComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ServiceTableComponent.prototype, "services", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], ServiceTableComponent.prototype, "addItemChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _d || Object)
], ServiceTableComponent.prototype, "gstChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], ServiceTableComponent.prototype, "serviceSubTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], ServiceTableComponent.prototype, "serviceTaxTotalEmitter", void 0);
ServiceTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-service-table",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/service-table/service-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/service-table/service-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */]) === "function" && _h || Object])
], ServiceTableComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=service-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/shipping-address/shipping-address.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"padding\">Billing Address is same as Shipping address:</span>\r\n<md-slide-toggle\r\n  color=\"primary\"\r\n  [(ngModel)]=\"sales.isBillingAddress\"\r\n  (change)=\"onAddressChange($event)\"\r\n>\r\n</md-slide-toggle>\r\n<span class=\"padding\">\r\n  Quotation :\r\n</span>\r\n<md-slide-toggle\r\n  color=\"primary\"\r\n  class=\"padding-side\"\r\n  [(ngModel)]=\"sales.isQuotationToggle\"\r\n  (change)=\"isQuotatioChange($event)\"\r\n></md-slide-toggle>\r\n<span class=\"padding\" *ngIf=\"isCreditHide\">\r\n  Credit :\r\n\r\n  <md-slide-toggle\r\n    color=\"primary\"\r\n    class=\"padding-side\"\r\n    [(ngModel)]=\"sales.isToggleEnable\"\r\n    (change)=\"isCreditChange($event)\"\r\n  ></md-slide-toggle>\r\n</span>\r\n<aside class=\"row\" *ngIf=\"showAddress\">\r\n  <md-input-container class=\"col-xs-4 padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"H.no\"\r\n      [formControl]=\"myForm.controls.sales_address_lane\"\r\n      [(ngModel)]=\"sales.address.lane\"\r\n    />\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_address_lane\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n\r\n  <md-input-container class=\"col-xs-4 padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"Street\"\r\n      [formControl]=\"myForm.controls.sales_address_street\"\r\n      [(ngModel)]=\"sales.address.street\"\r\n    />\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_address_street\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n\r\n  <md-input-container class=\"col-xs-4 padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"Area\"\r\n      [formControl]=\"myForm.controls.sales_address_area\"\r\n      [(ngModel)]=\"sales.address.area\"\r\n    />\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_address_area\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n\r\n  <md-input-container class=\"col-xs-4 padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"City\"\r\n      [formControl]=\"myForm.controls.sales_address_city\"\r\n      [(ngModel)]=\"sales.address.city\"\r\n    />\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_address_city\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n\r\n  <md-input-container class=\"col-xs-4 padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"State\"\r\n      [formControl]=\"myForm.controls.sales_address_state\"\r\n      [(ngModel)]=\"sales.address.state\"\r\n      [mdAutocomplete]=\"address\"\r\n      (focus)=\"filterStates(null)\"\r\n      (keyup)=\"filterStates($event.target.value)\"\r\n    />\r\n    <md-autocomplete #address=\"mdAutocomplete\">\r\n      <md-option *ngFor=\"let option of filteredStates\" [value]=\"option.value\">\r\n        {{ option.value }}\r\n      </md-option>\r\n    </md-autocomplete>\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_address_state\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n\r\n  <!--<md-input-container class=\"col-xs-4 padding-side\">\r\n                            <input mdInput placeholder=\"Country\" [(ngModel)]=\"sales.address.country\">\r\n                        </md-input-container>-->\r\n\r\n  <md-input-container class=\"col-xs-4 padding-side\">\r\n    <input\r\n      mdInput\r\n      required\r\n      placeholder=\"Pincode\"\r\n      [formControl]=\"myForm.controls.sales_address_zipCode\"\r\n      [(ngModel)]=\"sales.address.zipcode\"\r\n    />\r\n    <md-hint>\r\n      <form-messages [control]=\"myForm.controls.sales_address_zipCode\">\r\n      </form-messages>\r\n    </md-hint>\r\n  </md-input-container>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/shipping-address/shipping-address.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/invoice/components/shipping-address/shipping-address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__ = __webpack_require__("../../../../../src/app/entities/customer.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShippingAddressComponent = (function () {
    function ShippingAddressComponent(restService) {
        this.restService = restService;
        this.isCreditHide = true;
        this.outputEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.outputEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.quotationEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stateList = [];
        this.stateListTemp = [];
        this.filteredStates = [];
    }
    ShippingAddressComponent.prototype.ngOnInit = function () { };
    ShippingAddressComponent.prototype.onAddressChange = function (item) {
        this.outputEmitter.emit(item);
        this.stateLoad();
    };
    ShippingAddressComponent.prototype.isCreditChange = function (item) {
        this.outputEvent.emit(item);
    };
    ShippingAddressComponent.prototype.isQuotatioChange = function (item) {
        this.quotationEvent.emit(item);
    };
    ShippingAddressComponent.prototype.stateLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.stateList = results["stateList"];
            _this.stateListTemp = results;
        });
    };
    ShippingAddressComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s.value.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    return ShippingAddressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ShippingAddressComponent.prototype, "isCreditHide", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShippingAddressComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]) === "function" && _a || Object)
], ShippingAddressComponent.prototype, "customer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ShippingAddressComponent.prototype, "termsList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], ShippingAddressComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ShippingAddressComponent.prototype, "showAddress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ShippingAddressComponent.prototype, "outputEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ShippingAddressComponent.prototype, "outputEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], ShippingAddressComponent.prototype, "quotationEvent", void 0);
ShippingAddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-shipping-address",
        template: __webpack_require__("../../../../../src/app/modules/invoice/components/shipping-address/shipping-address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/invoice/components/shipping-address/shipping-address.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _f || Object])
], ShippingAddressComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=shipping-address.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/container/invoice-add/invoice-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div\r\n  id=\"page-header\"\r\n  fxLayoutAlign=\"center center\"\r\n  *ngIf=\"isEditable == 'true'\"\r\n>\r\n  <h2>{{ isEdit ? \"Edit Invoice\" : \"New Invoice\" }}</h2>\r\n</div>\r\n<h2 *ngIf=\"!isEditable\" fxLayoutAlign=\"center center\">New Invoice</h2>\r\n<aside id=\"page-content\" style=\"margin-top: 16px\">\r\n  <div class=\"row center-xs parent-container\">\r\n    <md-card class=\"col-xs-12 child-container padding\" style=\"max-width:950px;\">\r\n      <md-card-content class=\"start-xs \">\r\n        <form [formGroup]=\"myForm\" novalidate autocomplete=\"off\">\r\n          <div class=\"row \">\r\n            <app-invoice-search\r\n              [(customers)]=\"customers\"\r\n              [(sales)]=\"sales\"\r\n              [(inputData)]=\"sales\"\r\n              style=\"width:100%;\"\r\n            >\r\n            </app-invoice-search>\r\n            <!-- <app-customer [(myForm)]=\"myForm\" [(customer)]=\"sales.customer\"></app-customer> -->\r\n            <app-customer-additional\r\n              [(myForm)]=\"myForm\"\r\n              [(termsList)]=\"termsList\"\r\n              [(sales)]=\"sales\"\r\n              style=\"width:100%;\"\r\n            >\r\n            </app-customer-additional>\r\n            <app-shipping-address\r\n              [(myForm)]=\"myForm\"\r\n              [(showAddress)]=\"showAddress\"\r\n              [(sales)]=\"sales\"\r\n              [(isCreditHide)]=\"isCreditHide\"\r\n              (outputEmitter)=\"onAddressChange($event)\"\r\n              (outputEvent)=\"isCreditChange($event)\"\r\n              (quotationEvent)=\"isQuotatioChange($event)\"\r\n            >\r\n            </app-shipping-address>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <app-products-servrvice-toggle\r\n    [(sales)]=\"sales\"\r\n    (outputProductToggle)=\"changeProductService($event)\"\r\n    (outputServiceToggle)=\"changeProductService($event)\"\r\n    (addProductEmitter)=\"addProduct($event)\"\r\n    (addServiceEmitter)=\"addService($event)\"\r\n    (changeGstEmitter)=\"gstChangeCheck($event)\"\r\n    (clearEmitter)=\"clear()\"\r\n    (addItemEmitter)=\"addItem()\"\r\n  >\r\n  </app-products-servrvice-toggle>\r\n  <app-products-table\r\n    *ngIf=\"sales.isProduct\"\r\n    [(myForm)]=\"myForm\"\r\n    [(sales)]=\"sales\"\r\n    [(products)]=\"products\"\r\n    (filterProductEmitter)=\"($event)\"\r\n    [addItemChange]=\"addProductItem\"\r\n    (outputEmitter)=\"changeGrandCalculate()\"\r\n    (productSubTotalEmitter)=\"getProductSubTotal($event)\"\r\n    (productTaxTotalEmitter)=\"getProductTaxTotal($event)\"\r\n    (isSubmittable)=\"getBillingEnabledStatus($event)\"\r\n    [gstChange]=\"gstChange\"\r\n  >\r\n  </app-products-table>\r\n  <app-service-table\r\n    *ngIf=\"sales.isService\"\r\n    [(myForm)]=\"myForm\"\r\n    [(sales)]=\"sales\"\r\n    [(services)]=\"services\"\r\n    (filterServiceEmitter)=\"($event)\"\r\n    [addItemChange]=\"addServiceItem\"\r\n    (outputEmitter)=\"changeGrandCalculate()\"\r\n    (serviceSubTotalEmitter)=\"getServiceSubTotal($event)\"\r\n    (serviceTaxTotalEmitter)=\"getServiceTaxTotal($event)\"\r\n    [gstChange]=\"gstChange\"\r\n  >\r\n  </app-service-table>\r\n  <!-- <div *ngIf=\"grandTotal\"> -->\r\n  <app-grand-total\r\n    [(myForm)]=\"myForm\"\r\n    [(sales)]=\"sales\"\r\n    [(amount)]=\"amount\"\r\n    (cessChangeEmitter)=\"changeGrandCalculate($event)\"\r\n  >\r\n    <!-- (amountEmitter)=\"hideAmount($event)\" -->\r\n  </app-grand-total>\r\n  <!-- </div> -->\r\n  <div class=\"row\" style=\"padding: 1rem; margin-bottom: 7em;\">\r\n    <div class=\"col-xs-6 start-xs\">\r\n      <!-- <button md-raised-button color=\"primary\" (click)=\"printPriview()\">\r\n        Print or Preview\r\n      </button> -->\r\n    </div>\r\n    <div class=\"col-xs-6 end-xs\">\r\n      <button\r\n        *ngIf=\"isBilling\"\r\n        md-raised-button\r\n        color=\"accent\"\r\n        (click)=\"billing()\"\r\n        [disabled]=\"!myForm.valid || !submitEnableStatus\"\r\n      >\r\n        Billing\r\n      </button>\r\n      <!-- <button\r\n        md-raised-button\r\n        color=\"accent\"\r\n        (click)=\"update()\"\r\n        *ngIf=\"isEditable\"\r\n        [disabled]=\"!myForm.valid || !submitEnableStatus\"\r\n      >\r\n        Billing\r\n      </button> -->\r\n      <button\r\n        *ngIf=\"isQuotationSave\"\r\n        md-raised-button\r\n        color=\"accent\"\r\n        (click)=\"saveQuotation()\"\r\n        [disabled]=\"!myForm.valid || !submitEnableStatus\"\r\n      >\r\n        Save Quotation\r\n      </button>\r\n      <span *ngIf=\"isSave\">\r\n        <button\r\n          *ngIf=\"!isEditable\"\r\n          md-raised-button\r\n          color=\"accent\"\r\n          (click)=\"saveInvoice()\"\r\n          [disabled]=\"!myForm.valid || !submitEnableStatus\"\r\n        >\r\n          Save\r\n        </button></span\r\n      >\r\n      <!-- *ngIf=\"isEditable !== false\" -->\r\n      <button\r\n        md-raised-button\r\n        color=\"accent\"\r\n        (click)=\"update()\"\r\n        [disabled]=\"!myForm.valid || !submitEnableStatus\"\r\n        *ngIf=\"isEditable\"\r\n      >\r\n        Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/container/invoice-add/invoice-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__ = __webpack_require__("../../../../../src/app/entities/customer.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__ = __webpack_require__("../../../../../src/app/forms/invoice.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_customerpayment_entity__ = __webpack_require__("../../../../../src/app/entities/customerpayment.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_customertax_entity__ = __webpack_require__("../../../../../src/app/entities/customertax.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_address_entity__ = __webpack_require__("../../../../../src/app/entities/address.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_invoice_DialogContentExampleDialogInvoices_component__ = __webpack_require__("../../../../../src/app/components/admin/invoice/DialogContentExampleDialogInvoices.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var InvoiceAddComponent = (function () {
    function InvoiceAddComponent(restService, appService, dialog) {
        this.restService = restService;
        this.appService = appService;
        this.dialog = dialog;
        this.myForm = __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].init();
        this.amount = true;
        this.isCreditHide = true;
        this.addProductItem = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.addServiceItem = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.gstChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        // customer: Customer = new Customer();
        this.customers = [];
        this.showAddress = false;
        this.isEdit = false;
        this.products = [];
        this.services = [];
        this.isPrintEnable = false;
        this.productSubTotal = 0;
        this.productTaxTotal = 0;
        this.serviceTaxTotal = 0;
        this.serviceSubTotal = 0;
        this.isBilling = true;
        this.isSave = true;
        this.isQuotationSave = false;
        this.sales = new __WEBPACK_IMPORTED_MODULE_4__entities_sales_entity__["a" /* Sales */]();
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            var selectedItemInvoice = __WEBPACK_IMPORTED_MODULE_9__shared_utils_storage__["a" /* Storage */].getLocalItem("selectedItem");
            this.sales = selectedItemInvoice;
            this.isEdit = true;
            this.sales.companyId = this.appService.getBranch().id;
        }
        else {
            this.sales.companyId = this.appService.getBranch().id;
            this.sales.userId = this.appService.getSessionUser().id;
            this.sales.isBillingAddress = true;
            this.sales.customer = new __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]();
        }
        __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].edit(this.myForm);
        this.retriveCustomer();
        // this.restService.retriveUserSettings().subscribe(result => {
        //   if (result) {
        //     // this.sales.isProduct = result.isProduct;
        //     // this.sales.isService = result.isService;
        //     console.log("restts", result);
        //   }
        // });
        //var sett = new this.retrivesettings();
        this.sales.isService = false;
        this.retriveServices();
    }
    InvoiceAddComponent.prototype.ngOnChanges = function (changes) {
        //this.temp = [ ...this.dataRows ];
        this.sales = changes["sales"].currentValue;
        console.log(this.sales);
    };
    InvoiceAddComponent.prototype.ngOnInit = function () {
        // let id = this..getParam("id");
        this.termsLoad();
        this.changeProductService(true);
        // this.addStockItem();
        var id = this.appService.getParam("id");
        this.isEditable = this.appService.getParam("isEditable");
        if (this.isEditable !== false) {
            this.retriveCustomer();
            this.isEdit = true;
        }
        else {
            this.isEdit = false;
            this.isEditable = true;
        }
    };
    InvoiceAddComponent.prototype.retrivesettings = function () { };
    InvoiceAddComponent.prototype.retriveCustomer = function () {
        var _this = this;
        this.restService.retriveCustomersForInvoice().subscribe(function (result) {
            if (result) {
                _this.customers = result;
                console.log(_this.customers);
                _this.customers.forEach(function (item) {
                    item.gstRegNumber =
                        item.gstRegNumber == "" ? "Not Registered" : item.gstRegNumber;
                });
            }
        });
    };
    // removeItem(item) {
    //   let index = this.sales.items.indexOf(item);
    //   this.sales.items.splice(index, 1);
    // }
    InvoiceAddComponent.prototype.changeProductService = function (flipProduct) {
        var _this = this;
        setTimeout(function () {
            if (!_this.sales.isProduct) {
                _this.productSubTotal = 0;
                _this.sales.productItems = [];
                _this.changeGrandCalculate();
            }
            if (!_this.sales.isService) {
                _this.serviceSubTotal = 0;
                _this.sales.serviceItems = [];
                _this.changeGrandCalculate();
            }
            console.log(_this.sales.productItems);
            if (_this.sales.isProduct &&
                _this.sales.productItems != null &&
                _this.sales.productItems.length == 0) {
                _this.addProduct();
            }
            if (_this.sales.isService &&
                _this.sales.serviceItems != null &&
                _this.sales.serviceItems.length == 0) {
                console.log("isService is true");
                _this.addService();
            }
        }, 10);
    };
    InvoiceAddComponent.prototype.changeGst = function (flipCgst) {
        if (flipCgst) {
            if (this.sales.isCgst) {
                this.sales.isIgst = false;
            }
            else {
                this.sales.isIgst = true;
            }
        }
        else {
            if (this.sales.isIgst) {
                this.sales.isCgst = false;
            }
            else {
                this.sales.isCgst = true;
            }
        }
    };
    InvoiceAddComponent.prototype.addProduct = function () {
        console.log("add product");
        // setTimeout(() => {
        this.addProductItem.next();
        // }, 10);
    };
    InvoiceAddComponent.prototype.addService = function () {
        var _this = this;
        console.log("add service");
        setTimeout(function () {
            _this.addServiceItem.next();
        }, 10);
    };
    InvoiceAddComponent.prototype.gstChangeCheck = function () {
        console.log("gst change");
        this.gstChange.next();
    };
    InvoiceAddComponent.prototype.itemCalculate = function (item) {
        //this.commonItemCalculate(item);
        this.changeGrandCalculate();
    };
    InvoiceAddComponent.prototype.getProductSubTotal = function (subTotal) {
        console.log("in add invoice getProductSubTotal() ", subTotal);
        this.productSubTotal = subTotal;
        this.changeGrandCalculate();
    };
    InvoiceAddComponent.prototype.getProductTaxTotal = function (taxTotal) {
        console.log("in add invoice getProductTaxTotal() ", taxTotal);
        this.productTaxTotal = taxTotal;
        this.changeGrandCalculate();
    };
    InvoiceAddComponent.prototype.getBillingEnabledStatus = function (status) {
        // this.submitEnableStatus == null
        //   ? this.submitEnableStatus.emit(false)
        //   : this.submitEnableStatus.emit(true);
        this.submitEnableStatus = status;
    };
    InvoiceAddComponent.prototype.getServiceSubTotal = function (subTotal) {
        this.serviceSubTotal = subTotal;
        this.changeGrandCalculate();
    };
    InvoiceAddComponent.prototype.getServiceTaxTotal = function (subTaxTotal) {
        this.serviceTaxTotal = subTaxTotal;
        this.changeGrandCalculate();
    };
    InvoiceAddComponent.prototype.changeGrandCalculate = function ($event) {
        this.sales.subTotal = this.productSubTotal + this.serviceSubTotal;
        this.sales.totalTax = this.productTaxTotal + this.serviceTaxTotal;
        console.log("in add invoice changeGrandCalculate() ", this.sales.subTotal);
        if (this.sales.subTotal) {
            this.sales.cessValue = this.sales.subTotal * (this.sales.cess / 100);
            this.sales.total = this.sales.subTotal + this.sales.cessValue;
        }
        // this.sales.cessValue = this.sales.subTotal * (this.sales.cess / 100);
        // this.sales.total = this.sales.subTotal + this.sales.cessValue;
        // console.log("total is ", this.sales.total);
    };
    InvoiceAddComponent.prototype.totalValid = function () {
        if (this.sales.paidAmount > this.sales.total) {
            console.log("paid is greater than sales amount");
            return false;
        }
        else {
            console.log("paid is NOT greater than sales amount");
            return true;
        }
    };
    InvoiceAddComponent.prototype.valid = function () {
        var returnVal = true;
        if (returnVal &&
            (!this.sales.customer.mobile ||
                this.sales.customer.mobile == "0" ||
                !this.sales.customer.firstName)) {
            returnVal = false;
            this.appService.showMessage("please select customer name and mobile");
        }
        return returnVal;
    };
    InvoiceAddComponent.prototype.salesData = function () {
        var productItems = [];
        var serviceItems = [];
        if (this.sales.isProduct) {
            productItems = this.sales.productItems.filter(function (item) {
                if (item.stockItemId.id != null) {
                    item.service = null;
                    return item;
                }
            });
        }
        if (this.sales.isService) {
            serviceItems = this.sales.serviceItems.filter(function (item) {
                if (item.service) {
                    if (item.service.id != null) {
                        item.stockItemId.id = null;
                        return item;
                    }
                }
            });
        }
        this.sales.items = productItems.concat(serviceItems);
        if (this.sales.items == null || this.sales.items.length == 0) {
            this.appService.showMessage("Please select atleast one product or service.");
        }
        if (this.sales.customer.id == null) {
            if (!this.sales.customer.address) {
                this.sales.customer.address = new __WEBPACK_IMPORTED_MODULE_8__entities_address_entity__["a" /* Address */]();
            }
            this.sales.customer.address.lane = this.sales.customer.inlineAddress;
            if (this.sales.isBillingAddress) {
                this.sales.customer.shippingAddress = this.sales.customer.address;
            }
            else {
                this.sales.customer.shippingAddress = this.sales.address;
            }
            this.sales.customer.customerPayment = new __WEBPACK_IMPORTED_MODULE_6__entities_customerpayment_entity__["a" /* CustomerPayment */]();
            this.sales.customer.customerTax = new __WEBPACK_IMPORTED_MODULE_7__entities_customertax_entity__["a" /* CustomerTax */]();
        }
        this.sales.userId = 1; // this.appService.getSessionUser().id;
        console.log(this.appService.getSessionUser());
    };
    // addStockItem() {
    //   if (
    //     this.sales.items.length == 0 ||
    //     this.sales.items[this.sales.items.length - 1].stockItemId.id != null
    //   ) {
    //     let item = new Item();
    //     item.id = null;
    //     item.quantity = 1;
    //     this.sales.items.push(item);
    //   }
    // }
    // selectLineItem(lineItem, index) {
    //   if (this.itemSelected !== lineItem) {
    //     this.itemSelected = lineItem;
    //   }
    // }
    // selectStockItem(item: any) {
    //   this.itemSelected.stockItemId.id = item.id;
    //   this.itemSelected.stockItemId.productName = item.productName;
    //   this.addStockItem();
    // }
    InvoiceAddComponent.prototype.saveQuotation = function () {
        var _this = this;
        this.sales.status = "DRAFTSAVE";
        this.salesData();
        console.log(this.sales.items);
        if (this.valid()) {
            this.sales.isCredit = false;
            this.restService.saveQuotations(this.sales).subscribe(function (result) {
                console.log(result);
                if (result) {
                    _this.appService.showMessage("Quotation generated successfully  ");
                    _this.appService.navigate("admin/invoice-search", []);
                }
                else {
                    _this.appService.showMessage("Error while generating the quotation");
                }
            });
        }
    };
    InvoiceAddComponent.prototype.saveInvoice = function () {
        var _this = this;
        this.sales.status = "DRAFTSAVE";
        this.salesData();
        console.log(this.sales.items);
        if (this.totalValid() && this.valid()) {
            // this.restService.saveInvoice(this.sales).subscribe(result => {
            //   if (result) {
            //     this.appService.showMessage("Invoice generated successfully  ");
            //     this.appService.navigate("admin/invoice-search", []);
            //   }
            // });
            if (this.sales.paidAmount <= this.sales.subTotal) {
                this.sales.isCredit = true;
                console.log(this.sales.isCredit);
                this.restService.saveInvoice(this.sales).subscribe(function (result) {
                    console.log(result);
                    if (result) {
                        _this.appService.showMessage("Invoice generated successfully  ");
                        _this.appService.navigate("admin/invoice-search", []);
                    }
                });
            }
            else if (this.sales.paidAmount == 0 &&
                this.sales.isToggleEnable == false) {
                this.sales.isCredit = true;
                console.log(this.sales.isCredit);
                this.restService.saveInvoice(this.sales).subscribe(function (result) {
                    console.log(result);
                    if (result) {
                        _this.appService.showMessage("Invoice generated successfully  ");
                        _this.appService.navigate("admin/invoice-search", []);
                    }
                });
            }
            else if ((this.sales.isToggleEnable = true)) {
                this.sales.isCredit = false;
                console.log(this.sales.isCredit);
                this.restService.saveInvoice(this.sales).subscribe(function (result) {
                    console.log(result);
                    if (result) {
                        _this.appService.showMessage("Invoice generated successfully  ");
                        _this.appService.navigate("admin/invoice-search", []);
                    }
                });
            }
        }
        else {
            this.appService.showMessage("The Total Amount is greater than Paid Amount");
        }
    };
    InvoiceAddComponent.prototype.billing = function () {
        var _this = this;
        this.sales.status = "BILLING";
        this.salesData();
        __WEBPACK_IMPORTED_MODULE_9__shared_utils_storage__["a" /* Storage */].setLocalItem("selectedItem", this.selectedItem);
        if (this.valid()) {
            this.restService.saveInvoice(this.sales).subscribe(function (result) {
                if (result) {
                    _this.invoiceBill = result;
                    setTimeout(function () {
                        _this.open();
                    }, 1000);
                }
            });
        }
    };
    InvoiceAddComponent.prototype.open = function () {
        // let pageLayoutId : string = Storage.getLocalItem('pageLayoutId');
        __WEBPACK_IMPORTED_MODULE_9__shared_utils_storage__["a" /* Storage */].setLocalItem("selectedItem", this.invoiceBill);
        var companyInfo = __WEBPACK_IMPORTED_MODULE_9__shared_utils_storage__["a" /* Storage */].getSessionUser();
        var pageLayoutId = companyInfo.company.settingPayload.printLayoutId;
        if (parseInt(pageLayoutId) == 1) {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__components_admin_invoice_DialogContentExampleDialogInvoices_component__["a" /* DialogContentExampleDialogInvoices */], {
                data: null
            });
        }
    };
    InvoiceAddComponent.prototype.update = function () {
        var _this = this;
        this.sales.status = "BILLING";
        this.salesData();
        console.log(this.sales);
        if (this.valid()) {
            this.restService.updateInvoice(this.sales).subscribe(function (res) {
                if (res) {
                    _this.appService.showMessage("Bill update successfully : " + res);
                    _this.appService.navigate("admin/invoice-search", []);
                }
            });
        }
    };
    InvoiceAddComponent.prototype.clear = function () {
        var _this = this;
        this.sales = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_4__entities_sales_entity__["a" /* Sales */]());
        this.sales.companyId = {};
        this.sales.companyId.id = this.appService.getBranch().id;
        this.sales.companyId.name = this.appService.getBranch().name;
        this.sales.companyId = this.appService.getBranch().id;
        this.sales.customer = new __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]();
        this.isPrintEnable = false;
        this.myForm = __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].init();
        __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].edit(this.myForm);
        __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, false);
        this.showAddress = false;
        this.sales.isProduct = true;
        this.sales.isService = false;
        setTimeout(function () {
            _this.sales.isProduct = true;
            _this.sales.isService = true;
            _this.changeProductService(true);
        }, 100);
        //this.myForm.reset();
    };
    InvoiceAddComponent.prototype.addItem = function () {
        this.addProduct();
    };
    InvoiceAddComponent.prototype.onAddressChange = function ($event) {
        if ($event.checked) {
            __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, false);
            this.showAddress = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, true);
            this.showAddress = true;
        }
    };
    InvoiceAddComponent.prototype.isCreditChange = function ($event) {
        if ($event.checked) {
            this.amount = false;
            // this.sales.isCreditHide = false;
        }
        else {
            this.amount = true;
            // this.sales.isCreditHide = false;
        }
    };
    InvoiceAddComponent.prototype.isQuotatioChange = function ($event) {
        if ($event.checked) {
            this.amount = false;
            this.isBilling = false;
            this.isCreditHide = false;
            this.isSave = false;
            this.isQuotationSave = true;
        }
        else {
            this.amount = true;
            this.isBilling = true;
            this.isCreditHide = true;
            this.isSave = true;
            this.isQuotationSave = false;
        }
    };
    InvoiceAddComponent.prototype.termsLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.termsList = results["Terms"];
        });
    };
    InvoiceAddComponent.prototype.printPriview = function () {
        this.restService.invoiceOpen(this.sales.id);
    };
    InvoiceAddComponent.prototype.retriveServices = function () {
        var _this = this;
        this.restService.retriveServices().subscribe(function (result) {
            if (result) {
                _this.services = result;
            }
            else {
                _this.services = [];
            }
        });
    };
    InvoiceAddComponent.prototype.retreiveInvoice = function (id) {
        var _this = this;
        this.restService.getInvoice(id).subscribe(function (results) {
            if (results) {
                _this.sales = results;
                _this.customerMobile =
                    _this.sales.customer.displayName + " " + _this.sales.customer.mobile;
            }
            else {
                console.log("no results");
            }
        });
    };
    return InvoiceAddComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InvoiceAddComponent.prototype, "selectedItem", void 0);
InvoiceAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-invoice-add",
        template: __webpack_require__("../../../../../src/app/modules/invoice/container/invoice-add/invoice-add.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdDialog */]) === "function" && _c || Object])
], InvoiceAddComponent);

var _a, _b, _c;
//# sourceMappingURL=invoice-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/container/invoice-retail/invoice-retail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"invoice-retail-bg\">\r\n  <div id=\"page-header\" fxLayoutAlign=\"center center\" style=\"padding:20px;\">\r\n    <h2><u>NEW INVOICE</u></h2>\r\n  </div>\r\n  <div\r\n    fxLayout=\"row\"\r\n    fxLayoutAlign=\"space-around center\"\r\n    style=\"font-size: 16px;\"\r\n  >\r\n    <div fxFlex=\"40\">\r\n      <h4 style=\"margin-left: -18px;\">Item</h4>\r\n    </div>\r\n    <div fxFlex=\"10\">\r\n      <h4 style=\"margin-left: 15px;\">Quantity</h4>\r\n    </div>\r\n    <div fxFlex=\"10\">\r\n      <h4>Price/KG</h4>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"retailStocks\">\r\n    <div fxFlex=\"40\">\r\n      <!-- <input\r\n        type=\"text\"\r\n        placeholder=\"Retail Products\"\r\n        style=\"text-transform: capitalize;width: 100%;padding: 20px;margin: 15px 15px 15px -18px\"\r\n      /> -->\r\n      <md-input-container>\r\n        <input\r\n          mdInput\r\n          placeholder=\"Choose Stock Item\"\r\n          [(ngModel)]=\"stockItemList.productName\"\r\n          (focus)=\"filterStockItems($event.target.values)\"\r\n          (keyup)=\"filterStockItems($event.target.value)\"\r\n          [mdAutocomplete]=\"autoStockItems\"\r\n          [readOnly]=\"isEditable == 'false'\"\r\n          [ngModelOptions]=\"{ standalone: true }\"\r\n        />\r\n\r\n        <md-autocomplete #autoStockItems=\"mdAutocomplete\">\r\n          <md-option\r\n            *ngFor=\"let fitem of filteredStockItems; let selIndex = index\"\r\n            (click)=\"selectStockItem(fitem, selIndex)\"\r\n          >\r\n            {{ fitem.productName }} -\r\n            {{ fitem.stockItemPrice.stockathand }}</md-option\r\n          >\r\n        </md-autocomplete>\r\n      </md-input-container>\r\n    </div>\r\n    <div fxFlex=\"10\">\r\n      <!-- <input\r\n        type=\"number\"\r\n        placeholder=\"0\"\r\n        style=\"width: 100%;padding:20px;margin: 15px;\"\r\n      /> -->\r\n      <md-input-container>\r\n        <input\r\n          mdInput\r\n          placeholder=\"quantity\"\r\n          type=\"number\"\r\n          (ngModelChange)=\"itemValueChange(item)\"\r\n        />\r\n      </md-input-container>\r\n      <!-- <span style=\"color: red;font-size:10px\" *ngIf=\"item.greaterStock\">\r\n        no Stock\r\n      </span> -->\r\n    </div>\r\n    <div fxFlex=\"10\">\r\n      <h2></h2>\r\n    </div>\r\n  </div>\r\n  <div\r\n    fxLayout=\"row\"\r\n    fxLayoutAlign=\"space-around center\"\r\n    style=\"margin-top:10px\"\r\n  >\r\n    <div fxFlex.lg=\"60\" fxFlexAlign=\"start\">\r\n      <div class=\"\">\r\n        <md-card class=\"invoice-form-table\">\r\n          <div class=\"invoice-retail-form-th\">\r\n            <md-list>\r\n              <md-list-item\r\n                layout=\"row\"\r\n                layout-wrap\r\n                class=\"invoice-form-list-item\"\r\n              >\r\n                <span flex=\"30\">Item</span>\r\n                <span flex=\"10\">Price</span>\r\n                <span flex=\"10\">Qty</span>\r\n                <span flex=\"15\">Discount</span>\r\n                <span flex=\"20\">Tax</span>\r\n                <span flex=\"10\">Total</span>\r\n                <span flex=\"5\">&nbsp;</span>\r\n              </md-list-item>\r\n            </md-list>\r\n          </div>\r\n          <br />\r\n          <div\r\n            class=\"invoice-form-tb\"\r\n            [style.overflow]=\"'auto'\"\r\n            [style.height.px]=\"'150'\"\r\n          >\r\n            <md-list>\r\n              <ng-template\r\n                let-index=\"index\"\r\n                let-item\r\n                let-last=\"last\"\r\n                ngFor\r\n                [ngForOf]=\"itemSelected\"\r\n              >\r\n                <md-list-item layout=\"row\" layout-wrap *ngIf=\"item.stockItemId\">\r\n                  <span flex=\"30\">{{ item.stockItemId.productName }} </span>\r\n                  <span flex=\"10\"> {{ item.unit }}</span>\r\n\r\n                  <span flex=\"10\">\r\n                    {{ item.quantity }}\r\n                  </span>\r\n                  <span flex=\"10\">{{ item.discount }} </span>\r\n\r\n                  <span flex=\"10\"> {{ item.taxAmount }} </span>\r\n                  <span flex=\"10\">\r\n                    {{ item.totalAfterTax }}\r\n                  </span>\r\n                  <span flex=\"10\" style=\"cursor: pointer;text-align:right;\">\r\n                    <md-icon (click)=\"removeItem(index)\" color=\"primary\"\r\n                      >delete</md-icon\r\n                    >\r\n                  </span>\r\n                </md-list-item>\r\n              </ng-template>\r\n            </md-list>\r\n          </div>\r\n        </md-card>\r\n      </div>\r\n      <h3 style=\"margin:20px 0 10px;\">Customer Details</h3>\r\n      <div fxLayout=\"row\">\r\n        <md-card style=\"width: 100%;\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n            <div flex=\"45\">\r\n              <md-input-container>\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Name\"\r\n                  style=\"text-transform: capitalize\"\r\n                />\r\n              </md-input-container>\r\n            </div>\r\n            <div flex=\"45\">\r\n              <md-input-container>\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Mobile Number\"\r\n                  style=\"text-transform: capitalize\"\r\n                />\r\n              </md-input-container>\r\n            </div>\r\n          </div>\r\n        </md-card>\r\n      </div>\r\n    </div>\r\n    <div fxFlex.lg=\"20\">\r\n      <md-card style=\"height: 350px;\">\r\n        <md-card-content class=\"in-retail\">\r\n          <div fxLayout=\"row\">\r\n            <div flex=\"50\">\r\n              <h3>Sub Total</h3>\r\n            </div>\r\n            <div flex=\"50\" align=\"right\">\r\n              <h3>₹ 367</h3>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div fxLayout=\"row\">\r\n            <div flex=\"50\">\r\n              <h3>Discount</h3>\r\n            </div>\r\n            <div flex=\"50\" align=\"right\">\r\n              <h3>₹ 80</h3>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div fxLayout=\"row\">\r\n            <div flex=\"50\">\r\n              <h3>Tax</h3>\r\n            </div>\r\n            <div flex=\"50\" align=\"right\">\r\n              <h3>₹ 50</h3>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div fxLayout=\"row\">\r\n            <div flex=\"50\">\r\n              <h3>Round Off</h3>\r\n            </div>\r\n            <div flex=\"50\" align=\"right\">\r\n              <h3>-₹ 0.50</h3>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div fxLayout=\"row\" style=\"padding-top: 20px;\">\r\n            <div flex=\"50\">\r\n              <h3>Total</h3>\r\n            </div>\r\n            <div flex=\"50\" align=\"right\">\r\n              <h3>₹ 334</h3>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div fxLayout=\"row\">\r\n            <button (click)=\"saveInvoice()\">SAVE</button>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <button (click)=\"billing()\">BILL</button>\r\n          </div>\r\n        </md-card-content>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/invoice/container/invoice-retail/invoice-retail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_entities_item_entity__ = __webpack_require__("../../../../../src/app/entities/item.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceRetailComponent = (function () {
    function InvoiceRetailComponent(appService, restService) {
        this.appService = appService;
        this.restService = restService;
        this.products = [];
        this.noRecords = false;
        this.showMsg = false;
        this.stockItemList = [];
        this.filteredStockItems = [];
        this.isEditable = "true";
        this.productSubTotalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.productTaxTotalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemIndex = 0;
        this.fieldDisable = false;
        this.rowCount = 0;
        this.isSubmittable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadStockItems();
    }
    InvoiceRetailComponent.prototype.ngOnInit = function () {
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            var itemSelectedInvoice = __WEBPACK_IMPORTED_MODULE_6__shared_utils_storage__["a" /* Storage */].getLocalItem("selectedItem");
            this.sales = itemSelectedInvoice;
            // this.productSubTotal = itemSelectedInvoice.totalBeforeTax;
            this.addItem();
            this.subTotalCalc();
        }
        else {
            // this.addItemChange.subscribe(v => {
            //   console.log("----------------------------------");
            //   console.log(this.sales.productItems.length);
            //   this.addItem();
            //   console.log("----------------------------------");
            //   console.log(this.sales.productItems.length);
            // });
            // this.gstChange.subscribe(v => {
            //   this.sales.productItems.forEach(element => {
            //     this.itemCalculate(element);
            //     // this.quantity(element);
            //   });
            // });
        }
    };
    // filterProducts(){
    //   this.filterProductEmitter.emit();
    // }
    InvoiceRetailComponent.prototype.selectLineItem = function (item, index) {
        if (this.itemSelected !== item) {
            this.itemSelected = item;
            // this.quantity(item);
        }
        //this.selectedProductEmitter.emit(item);
    };
    InvoiceRetailComponent.prototype.selectStockItem = function (item, eleIndex) {
        if (item && typeof item == "object") {
            var sp = item.stockItemPrice.sellingPrice;
            // var customerDiscount = (this.sales.customer.discount * sp) / 100;
            // var stockDiscount = (item.stockItemPrice.discount * sp) / 100;
            this.itemSelected.unit = sp;
            // this.itemSelected.quantity = 1;
            this.itemSelected.stockItemId.productName =
                item.productName +
                    " Qty: ".concat(item.stockItemPrice.stockathand != null
                        ? item.stockItemPrice.stockathand
                        : 0);
            //this.itemSelected.productCode = item.hsnCodeNames;
            this.itemSelected.taxrate = item.stockItemPrice.tax.toString();
            //   this.itemSelected.stockItemId = item; //+item.id;
            console.log(this.itemSelected.stockItemId);
            this.itemSelected.stockItemId.id = item.id;
            this.itemSelected.stockItemId.uqc = item.uqc;
            this.itemSelected.cgst = 0;
            this.itemSelected.sgst = 0;
            this.itemSelected.discount = 0;
            this.itemSelected.cessPercent = 0;
            this.itemSelected.quantity = 1;
            this.itemCalculate(this.itemSelected);
            console.log(this.itemSelected);
            this.itemSelected.stockDisplayValue = item.stockItemPrice.stockathand;
            console.log(this.itemSelected.stockDisplayValue);
            item.isselect = true;
            //  this.fieldDisable = item.stockItemPrice.stockathand <= 0 ? true : false;
            item.isNewRow = true;
            //this.filteredStockItems.splice(eleIndex, 1);
        }
        this.addItem();
    };
    InvoiceRetailComponent.prototype.selectItemFromDrop = function (ele) {
        ele.isselect = true;
    };
    InvoiceRetailComponent.prototype.itemValueChange = function (item, field) {
        this.itemCalculate(item);
        this.quantity(item);
    };
    InvoiceRetailComponent.prototype.quantity = function (item) {
        if (item.quantity > this.itemSelected.stockDisplayValue) {
            console.log("iadhfkbiayhefdsddssd");
            this.itemSelected.quantity = 0;
            this.itemCalculate(item);
            return (item.greaterStock = true);
        }
        else if (item.quantity < this.itemSelected.stockDisplayValue) {
            console.log("iadhfkbiayhefd");
            return (item.greaterStock = false);
        }
    };
    InvoiceRetailComponent.prototype.itemCalculate = function (item) {
        console.log("***************item C method");
        var total = 0;
        var cessAmount = 0;
        var discountAmount = 0;
        var beforeTaxAmount = item.unit * item.quantity;
        discountAmount = beforeTaxAmount * (item.discount / 100);
        item.discountAmount = +discountAmount.toFixed(2) + 0.0;
        item.itemsubtotalBeforeTax = beforeTaxAmount - item.discountAmount + 0.0;
        total = +item.itemsubtotalBeforeTax.toFixed(2);
        cessAmount = total * (item.cessPercent / 100);
        item.cessAmount = +cessAmount.toFixed(2);
        if (this.sales.isCgst) {
            if (item.taxrate && item.taxrate != "Nil") {
                item.cgst =
                    (total * (parseFloat(item.taxrate.replace("%", "")) / 100)) / 2;
                item.sgst =
                    (total * (parseFloat(item.taxrate.replace("%", "")) / 100)) / 2;
                var taxAmount = item.cgst + item.sgst;
                item.taxAmount = +taxAmount.toFixed(2) + 0.0;
                console.log("total is " + total);
                console.log("item.taxAmount is " + item.taxAmount);
                console.log("item.cessAmount is " + item.cessAmount);
                var itemAmount = total + item.taxAmount + item.cessAmount;
                item.totalAfterTax = +itemAmount.toFixed(2) + 0.0;
                console.log(item.totalAfterTax);
            }
            else {
                item.cgst = 0;
                item.sgst = 0;
                item.totalAfterTax = total + cessAmount;
            }
        }
        if (this.sales.isIgst) {
            if (item.taxrate && item.taxrate != "Nil") {
                item.igst = total * (parseFloat(item.taxrate.replace("%", "")) / 100);
                //item.taxAmount = item.igst;
                item.totalAfterTax =
                    total +
                        total * (parseFloat(item.taxrate.replace("%", "")) / 100) +
                        cessAmount;
            }
            else {
                item.igst = 0;
                item.totalAfterTax = total + cessAmount;
            }
        }
        this.sales.total = total + cessAmount;
        this.subTotalCalc();
    };
    InvoiceRetailComponent.prototype.subTotalCalc = function () {
        var _this = this;
        console.log("****************subtotal c method");
        console.log("product items " + this.sales.productItems);
        var subTotal = 0;
        var totalTax = 0;
        this.productSubTotal = subTotal;
        var totalBeforeTax = 0;
        this.sales.productItems.forEach(function (element) {
            if (element.stockItemId != null && element.stockItemId.id != null) {
                totalBeforeTax = totalBeforeTax + element.itemsubtotalBeforeTax;
                subTotal = subTotal + element.totalAfterTax;
                totalTax = totalTax + element.taxAmount;
                _this.productSubTotal = +subTotal.toFixed(2) + 0.0;
                console.log(_this.productSubTotal);
                _this.productSubTotalEmitter.emit(_this.productSubTotal);
                _this.productTaxTotalEmitter.emit(totalTax);
            }
        });
        this.sales.totalBeforeTax = totalBeforeTax;
        this.sales.totalTax = totalTax;
        console.log("subTotalCalc :: productSubTotal", this.productSubTotal);
        if (!this.sales.isProduct) {
            this.productSubTotal = 0;
            this.productSubTotalEmitter.emit(this.productSubTotal);
        }
    };
    InvoiceRetailComponent.prototype.removeItem = function (index) {
        var _this = this;
        this.sales.productItems[index].stockItemId = null;
        setTimeout(function () {
            _this.sales.productItems.splice(index, 1);
        }, 10);
        this.sales.paidAmount = 0;
        this.sales.dueAmount = 0;
        this.productSubTotal = 0;
        this.subTotalCalc();
        this.productSubTotalEmitter.emit(this.productSubTotal);
        this.rowCount--;
        this.rowCount == 1 &&
            this.sales.productItems[this.rowCount - 1].stockItemId == null
            ? this.isSubmittable.emit(false)
            : this.isSubmittable.emit(true);
    };
    InvoiceRetailComponent.prototype.onBarcodeScan = function (event) {
        alert("Scan Complete: Barcode is " + event.target.value);
    };
    InvoiceRetailComponent.prototype.addItem = function () {
        if (this.sales.productItems.length == 0 ||
            this.sales.productItems[this.sales.productItems.length - 1].stockItemId
                .id != null) {
            var item = new __WEBPACK_IMPORTED_MODULE_1_app_entities_item_entity__["a" /* Item */]();
            item.id = null;
            //item.company = this.sales.company;
            //  item.product = this.newProduct();
            item.unit = 0;
            item.cgst = 0;
            item.sgst = 0;
            item.igst = 0;
            item.igst = 0;
            item.quantity = 0;
            item.cessPercent = 0;
            item.cessAmount = 0;
            item.isNewRow = true;
            // this.filteredStockItems = null;
            this.sales.productItems.push(item);
            if (item.quantity == null || item.quantity == 0 || item.quantity == "") {
                this.showMsg = false;
            }
        }
        this.rowCount++;
        this.rowCount == 1 && this.sales.productItems[this.rowCount] == null
            ? this.isSubmittable.emit(false)
            : this.isSubmittable.emit(true);
    };
    InvoiceRetailComponent.prototype.loadStockItems = function () {
        var _this = this;
        this.restService
            .getStockItems({ id: this.appService.getBranch().id })
            .subscribe(function (results) {
            _this.stockItemList = results;
        });
    };
    InvoiceRetailComponent.prototype.filterStockItems = function (val) {
        if (this.isEditable == "true") {
            this.filteredStockItems =
                val && val != ""
                    ? this.stockItemList.filter(function (s) { return s.productName.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                    : this.stockItemList;
            var len = this.filteredStockItems.length;
            for (var j = 0; j < len; j++) {
                if (this.filteredStockItems[j].isselect == true) {
                    console.log(this.filteredStockItems[j]);
                }
            }
        }
        else {
            this.stockItemList = [];
        }
        if (this.stockItemList.length == 0) {
            this.noRecords = true;
        }
        else {
            this.noRecords = false;
        }
    };
    return InvoiceRetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InvoiceRetailComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InvoiceRetailComponent.prototype, "isCgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_entities_item_entity__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_entities_item_entity__["a" /* Item */]) === "function" && _a || Object)
], InvoiceRetailComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InvoiceRetailComponent.prototype, "isIgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], InvoiceRetailComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InvoiceRetailComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], InvoiceRetailComponent.prototype, "addItemChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]) === "function" && _d || Object)
], InvoiceRetailComponent.prototype, "gstChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], InvoiceRetailComponent.prototype, "productSubTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], InvoiceRetailComponent.prototype, "productTaxTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], InvoiceRetailComponent.prototype, "isSubmittable", void 0);
InvoiceRetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-invoice-retail",
        template: __webpack_require__("../../../../../src/app/modules/invoice/container/invoice-retail/invoice-retail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_service_app_service__["a" /* AppService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_common_rest_service__["a" /* RestService */]) === "function" && _j || Object])
], InvoiceRetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=invoice-retail.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/invoice-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_invoice_add_invoice_add_component__ = __webpack_require__("../../../../../src/app/modules/invoice/container/invoice-add/invoice-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_invoice_retail_invoice_retail_component__ = __webpack_require__("../../../../../src/app/modules/invoice/container/invoice-retail/invoice-retail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_2__container_invoice_add_invoice_add_component__["a" /* InvoiceAddComponent */] },
    { path: "retail", component: __WEBPACK_IMPORTED_MODULE_3__container_invoice_retail_invoice_retail_component__["a" /* InvoiceRetailComponent */] }
];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    return InvoiceRoutingModule;
}());
InvoiceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], InvoiceRoutingModule);

//# sourceMappingURL=invoice-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/invoice/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_routing_module__ = __webpack_require__("../../../../../src/app/modules/invoice/invoice-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_customer_customer_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_invoice_add_invoice_add_component__ = __webpack_require__("../../../../../src/app/modules/invoice/container/invoice-add/invoice-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/invoice-search/invoice-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_customer_additional_customer_additional_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/customer-additional/customer-additional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_products_servrvice_toggle_products_servrvice_toggle_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/products-servrvice-toggle/products-servrvice-toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_products_table_products_table_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/products-table/products-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_grand_total_grand_total_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/grand-total/grand-total.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_service_table_service_table_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/service-table/service-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_shipping_address_shipping_address_component__ = __webpack_require__("../../../../../src/app/modules/invoice/components/shipping-address/shipping-address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__container_invoice_retail_invoice_retail_component__ = __webpack_require__("../../../../../src/app/modules/invoice/container/invoice-retail/invoice-retail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__invoice_routing_module__["a" /* InvoiceRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__container_invoice_add_invoice_add_component__["a" /* InvoiceAddComponent */],
            __WEBPACK_IMPORTED_MODULE_13__container_invoice_retail_invoice_retail_component__["a" /* InvoiceRetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_customer_additional_customer_additional_component__["a" /* CustomerAdditionalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_products_servrvice_toggle_products_servrvice_toggle_component__["a" /* ProductsServrviceToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_products_table_products_table_component__["a" /* ProductsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_grand_total_grand_total_component__["a" /* GrandTotalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_service_table_service_table_component__["a" /* ServiceTableComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_shipping_address_shipping_address_component__["a" /* ShippingAddressComponent */]
        ]
    })
], InvoiceModule);

//# sourceMappingURL=invoice.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map