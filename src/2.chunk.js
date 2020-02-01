webpackJsonp([2],{

/***/ "../../../../../src/app/components/sign/account/account.address.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\r\n  <md-card class=\"center-xs\">\r\n    <form [formGroup]=\"myForm\" novalidate autocomplete=\"off\">\r\n      <div class=\"row padding-side\">\r\n        <md-input-container class=\"col-xs-6  padding-side\">\r\n          <input\r\n            mdInput\r\n            placeholder=\"Address Line\"\r\n            required\r\n            [formControl]=\"myForm.controls.account_address_lane\"\r\n            [(ngModel)]=\"account.address.lane\"\r\n          />\r\n          <md-hint>\r\n            <form-messages [control]=\"myForm.controls.account_address_lane\">\r\n            </form-messages>\r\n          </md-hint>\r\n        </md-input-container>\r\n\r\n        <md-input-container class=\"col-xs-6 padding-side\">\r\n          <input\r\n            mdInput\r\n            placeholder=\"Street \"\r\n            required\r\n            [formControl]=\"myForm.controls.account_address_street\"\r\n            [(ngModel)]=\"account.address.street\"\r\n          />\r\n          <md-hint>\r\n            <form-messages [control]=\"myForm.controls.account_address_street\">\r\n            </form-messages>\r\n          </md-hint>\r\n        </md-input-container>\r\n        <md-input-container class=\"col-xs-6 padding-side\">\r\n          <input\r\n            mdInput\r\n            placeholder=\"Area\"\r\n            required\r\n            [formControl]=\"myForm.controls.account_address_area\"\r\n            [(ngModel)]=\"account.address.area\"\r\n          />\r\n          <md-hint>\r\n            <form-messages [control]=\"myForm.controls.account_address_area\">\r\n            </form-messages>\r\n          </md-hint>\r\n        </md-input-container>\r\n\r\n        <md-input-container class=\"col-xs-6 padding-side\">\r\n          <input\r\n            mdInput\r\n            placeholder=\"City\"\r\n            required\r\n            [formControl]=\"myForm.controls.account_address_city\"\r\n            [(ngModel)]=\"account.address.city\"\r\n          />\r\n          <md-hint>\r\n            <form-messages [control]=\"myForm.controls.account_address_city\">\r\n            </form-messages>\r\n          </md-hint>\r\n        </md-input-container>\r\n        <!-- <md-input-container class=\"col-xs-6  padding-side\">\r\n                    <input mdInput placeholder=\"State\" required [formControl]=\"myForm.controls.account_address_state\" [(ngModel)]=\"account.address.state\">\r\n                    <md-hint>\r\n                        <form-messages [control]=\"myForm.controls.account_address_state\"> </form-messages>\r\n                    </md-hint>\r\n                </md-input-container> -->\r\n\r\n        <!-- <md-input-container class=\"col-xs-6 padding-side\">\r\n                    <input mdInput placeholder=\"Choose State\" [(ngModel)]=\"account.address.state\" (focus)=\"filterStates(null)\" (keyup)=\"filterStates($event.target.value)\"\r\n                        [mdAutocomplete]=\"address\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <md-autocomplete #address=\"mdAutocomplete\">\r\n                        <md-option *ngFor=\"let option of filteredStates\" (select)=\"selectedAddress(option)\" [value]=\"account.address.state\">\r\n                            {{ option[0]}}\r\n                        </md-option>\r\n                    </md-autocomplete>\r\n                </md-input-container> -->\r\n\r\n        <md-input-container class=\"col-xs-6 padding-side\">\r\n          <input\r\n            mdInput\r\n            placeholder=\"Choose State\"\r\n            [formControl]=\"myForm.controls.account_address_state\"\r\n            [(ngModel)]=\"account.address.state\"\r\n            [mdAutocomplete]=\"address\"\r\n            (focus)=\"filterStates(null)\"\r\n            (keyup)=\"filterStates($event.target.value)\"\r\n            (focusout)=\"focusOutFunction()\"\r\n          />\r\n          <md-autocomplete #address=\"mdAutocomplete\">\r\n            <md-option\r\n              *ngFor=\"let option of filteredStates\"\r\n              [value]=\"option[0]\"\r\n            >\r\n              {{ option[0] }}\r\n            </md-option>\r\n          </md-autocomplete>\r\n          <md-hint>\r\n            <form-messages [control]=\"myForm.controls.account_address_state\">\r\n            </form-messages>\r\n          </md-hint>\r\n        </md-input-container>\r\n\r\n        <!-- <div class=\"md-select col-xs-6 padding-side\">\r\n                    <md-select required placeholder=\"State\" [formControl]=\"myForm.controls.account_address_state\" [(ngModel)]=\"account.address.state\">\r\n                        <md-option *ngFor=\"let keyValues of stateList\" [value]=\"keyValues[0]\">\r\n                            {{keyValues[1]}}\r\n                        </md-option>\r\n                    </md-select>\r\n                    <md-hint>\r\n                        <form-messages [control]=\"myForm.controls.account_address_state\">\r\n                        </form-messages>\r\n                    </md-hint>\r\n                </div> -->\r\n\r\n        <md-input-container class=\"col-xs-6 padding-side\">\r\n          <input\r\n            mdInput\r\n            placeholder=\"Postal Code\"\r\n            required\r\n            [formControl]=\"myForm.controls.account_address_zipCode\"\r\n            [(ngModel)]=\"account.address.zipcode\"\r\n          />\r\n          <md-hint>\r\n            <form-messages [control]=\"myForm.controls.account_address_zipCode\">\r\n            </form-messages>\r\n          </md-hint>\r\n        </md-input-container>\r\n      </div>\r\n    </form>\r\n    <md-card-actions fxLayout=\"row\" fxLayoutAligment=\"space-between center\">\r\n      <div>\r\n        <button md-button color=\"accent\" (click)=\"back()\">Back</button>\r\n      </div>\r\n      <div>\r\n        <button\r\n          md-raised-button\r\n          color=\"accent\"\r\n          [disabled]=\"!myForm.valid\"\r\n          (click)=\"next()\"\r\n        >\r\n          Next\r\n        </button>\r\n      </div>\r\n    </md-card-actions>\r\n  </md-card>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_account_entity__ = __webpack_require__("../../../../../src/app/entities/account.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountAddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountAddressComponent = (function () {
    function AccountAddressComponent(appService, restService) {
        this.appService = appService;
        this.restService = restService;
        this.filteredStates = [];
        this.address = [];
        this.outputEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addressEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.backEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // stateList1: Array<string> = new Array<string>();
        this.stateList = [];
        this.stateListTemp = [];
        this.account = new __WEBPACK_IMPORTED_MODULE_4__entities_account_entity__["a" /* Account */]();
        this.account.address.state = "";
        this.myForm = __WEBPACK_IMPORTED_MODULE_2__forms_sign_form__["a" /* SignFormGroup */].AccountAddressFormGroup();
    }
    AccountAddressComponent.prototype.ngOnInit = function () {
        console.log("Account Address");
        this.stateLoad();
    };
    AccountAddressComponent.prototype.next = function () {
        this.addressEvent.emit();
    };
    AccountAddressComponent.prototype.back = function () {
        this.backEvent.emit();
    };
    //   signup(){
    //     this.appService.navigate('/signup',[]);
    //   }
    AccountAddressComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s[0].toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    AccountAddressComponent.prototype.selectedAddress = function (item) {
        if (item) {
            this.account.address.state = item[0];
        }
    };
    AccountAddressComponent.prototype.stateLoad = function () {
        var _this = this;
        this.restService.dataload("State").subscribe(function (results) {
            _this.stateList = results;
        });
    };
    AccountAddressComponent.prototype.focusOutFunction = function () {
        var _this = this;
        var array = [];
        this.stateList.forEach(function (item) {
            if (_this.account.address.state == item[0]) {
                array.push(item[0]);
            }
        });
        if (array.length == 0) {
            // this.appService.showMessage('Please Select Correct State Value')
            this.account.address.state = null;
        }
    };
    return AccountAddressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AccountAddressComponent.prototype, "filteredStates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AccountAddressComponent.prototype, "address", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AccountAddressComponent.prototype, "outputEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccountAddressComponent.prototype, "inputData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("account"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__entities_account_entity__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__entities_account_entity__["a" /* Account */]) === "function" && _b || Object)
], AccountAddressComponent.prototype, "account", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("addressEvent"),
    __metadata("design:type", Object)
], AccountAddressComponent.prototype, "addressEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("backEvent"),
    __metadata("design:type", Object)
], AccountAddressComponent.prototype, "backEvent", void 0);
AccountAddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-account-address",
        template: __webpack_require__("../../../../../src/app/components/sign/account/account.address.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _d || Object])
], AccountAddressComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=account.address.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.bussiness.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\r\n    <md-card>\r\n        <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n            <md-grid-list cols=\"2\" rowHeight=\"4rem\" gutterSize=\"1rem\">\r\n                <md-grid-tile>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"Bussiness Type\" required [formControl]=\"myForm.controls.account_company_type\"\r\n                            [(ngModel)]=\"account.company.type\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_company_type\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                </md-grid-tile>\r\n                <md-grid-tile>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"GSTIN\" [formControl]=\"myForm.controls.account_company_gstin\"\r\n                        [(ngModel)]=\"account.company.gstin\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_company_gstin\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                </md-grid-tile>\r\n                <md-grid-tile>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"Currency \" required [formControl]=\"myForm.controls. account_company_currency \"\r\n                            [(ngModel)]=\"account.company.currency \" readonly>\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls. account_company_currency\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                </md-grid-tile>\r\n            </md-grid-list>\r\n            <md-grid-list cols=\"2\" rowHeight=\"4rem\" gutterSize=\"1rem\">\r\n                <md-grid-tile>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"Account Number\" required [formControl]=\"myForm.controls.account_bank_accno\"\r\n                            [(ngModel)]=\"account.bankDetailsPayload.accountNumber\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_bank_accno\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                </md-grid-tile>\r\n                <md-grid-tile>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"IFSC Code \" required [formControl]=\"myForm.controls. account_bank_ifscCode \"\r\n                            [(ngModel)]=\"account.bankDetailsPayload.ifscCode\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls. account_bank_ifscCode\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                </md-grid-tile>\r\n            </md-grid-list>\r\n            <md-card-actions fxLayout=\"row\" fxLayoutAligment=\"space-between center\">\r\n                <button md-button color=\"accent\" (click)=\"back()\">Back</button>\r\n                <button md-raised-button color=\"accent\" [disabled]=\"(myForm.invalid)\" (click)=\"next()\">Finish\r\n                </button>\r\n            </md-card-actions>\r\n        </form>\r\n    </md-card>\r\n</aside>\r\n\r\n<!--<aside>\r\n    <md-card class=\"center-xs row\">\r\n\r\n\r\n        <div class=\"col-xs-11 col-md-11\">\r\n            <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                <div class=\"row padding-side\">\r\n\r\n\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <md-card-actions class=\"row\">\r\n            <div class=\"col-xs-6 end-xs\">\r\n                <button md-button color=\"accent\"  (click)=\"back()\">Back</button>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n                <button md-raised-button color=\"accent\" [disabled]=\"!myForm.valid\" (click)=\"next()\">Finish </button>\r\n            </div>\r\n        </md-card-actions>\r\n    </md-card>\r\n</aside>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.bussiness.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__ = __webpack_require__("../../../../../src/app/entities/account.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountBusinessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountBusinessComponent = (function () {
    function AccountBusinessComponent(appService, restService, dialog) {
        this.appService = appService;
        this.restService = restService;
        this.dialog = dialog;
        this.isBankThere = false;
        this.account = new __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__["a" /* Account */]();
        this.businessEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.backEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBankThere = false;
        this.myForm = __WEBPACK_IMPORTED_MODULE_2__forms_sign_form__["a" /* SignFormGroup */].AccountBusinessFormGroup();
    }
    AccountBusinessComponent.prototype.ngOnInit = function () {
        console.log("Account Bussiness");
    };
    AccountBusinessComponent.prototype.next = function () {
        this.businessEvent.emit();
    };
    // openDialog() {
    //   const dialogRef = this.dialog.open(ModalPopupComponent);
    //   dialogRef.afterClosed().subscribe(result => {
    //       if(result){
    //         if(this.myForm.valid){
    //           this.businessEvent.emit();
    //         } else{
    //           this.appService.showMessage("Please enter form details.")
    //         }
    //       } else {
    //         this.appService.showMessage("Registration Successfull")
    //       }
    //   });
    // }
    AccountBusinessComponent.prototype.back = function () {
        this.backEvent.emit();
    };
    AccountBusinessComponent.prototype.focusOutFunction = function () {
        var _this = this;
        console.log("Here");
        console.log(this.account.bankDetailsPayload.ifscCode);
        this.restService
            .bankDetails(this.account.bankDetailsPayload.ifscCode)
            .subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.isBankThere = true;
                _this.account.bankDetailsPayload.bankName = result.bankName;
                _this.account.bankDetailsPayload.bankAddress = result.address;
                _this.account.bankDetailsPayload.branch = result.branch;
            }
            else {
                _this.isBankThere = false;
            }
        });
    };
    return AccountBusinessComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("account"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__["a" /* Account */]) === "function" && _a || Object)
], AccountBusinessComponent.prototype, "account", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("businessEvent"),
    __metadata("design:type", Object)
], AccountBusinessComponent.prototype, "businessEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("backEvent"),
    __metadata("design:type", Object)
], AccountBusinessComponent.prototype, "backEvent", void 0);
AccountBusinessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-account-business",
        template: __webpack_require__("../../../../../src/app/components/sign/account/account.bussiness.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_rest_service__["a" /* RestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialog */]) === "function" && _d || Object])
], AccountBusinessComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=account.bussiness.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"page-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\r\n\r\n        <div class=\" title\" style=\"width:800px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"> \r\n            <h1> Welcome to &nbsp; </h1>\r\n            <md-icon svgIcon=\"assets:logo2\" style=\"height: 80px; width: 200px\"></md-icon>\r\n        </div>\r\n\r\n        <div style=\"width:800px; background-color: white\">\r\n            <td-steps  mode=\"horizontal\">\r\n                <td-step #step1 label=\"Contact Details\" [active]=\"true\" (activated)=\"changeEvent(step1, step2, step3)\" >\r\n                    <app-account-profile [account]=\"account\" (profileEvent)=\"profileEvent($event)\">\r\n                        </app-account-profile>\r\n                </td-step>\r\n                <td-step #step2 label=\"Address Details\"     >\r\n                    <app-account-address [account]=\"account\" (addressEvent)=\"addressEvent($event)\" (backEvent)=\"backEvent()\" >\r\n\r\n                    </app-account-address>\r\n                </td-step>\r\n                <td-step #step3 label=\"Business Details\">\r\n                    <app-account-business [account]=\"account\" (businessEvent)=\"businessEvent($event)\" (backEvent)=\"backEvent()\">\r\n\r\n                    </app-account-business>\r\n                </td-step>                \r\n            </td-steps>\r\n        </div>\r\n\r\n\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__ = __webpack_require__("../../../../../src/app/entities/account.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = (function () {
    function AccountComponent(dialog, appService, restService) {
        //const dialogRef = this.dialog.open(ModalPopupComponent);
        this.dialog = dialog;
        this.appService = appService;
        this.restService = restService;
        this.currentStep = 1;
        this.dialogConfig = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MdDialogConfig */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__["a" /* Account */]();
        this.dialogConfig.panelClass = "signup-dialog";
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.changeStep();
            var id = _this.appService.getParam("id");
            if (id) {
                _this.profileDetails(id);
            }
            else {
                _this.appService.navigate("/", null);
            }
        }, 100);
    };
    AccountComponent.prototype.profileDetails = function (id) {
        var _this = this;
        this.restService.profileDetails({ id: id }).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.account.email = result.email;
                _this.account.mobile = result.mobile;
                _this.account.role = "user";
                _this.account.id = result.id;
            }
            else {
                _this.appService.navigate("/", null);
            }
        });
    };
    AccountComponent.prototype.changeEvent = function (event1, event2, event3) {
        this.step1 = event1;
        this.step2 = event2;
        this.step3 = event3;
    };
    AccountComponent.prototype.changeStep = function () {
        this.step1.disabled = true;
        this.step2.disabled = true;
        this.step3.disabled = true;
        this.step1.active = false;
        this.step2.active = false;
        this.step3.active = false;
        var activeStep = this.getActiveStep();
        activeStep.disabled = false;
        activeStep.active = true;
    };
    AccountComponent.prototype.getActiveStep = function () {
        switch (this.currentStep) {
            case 1:
                return this.step1;
            case 2:
                return this.step2;
            case 3:
                return this.step3;
            default:
                return this.step1;
        }
    };
    //   signup(){
    //     this.appService.navigate('/signup',[]);
    //   }
    AccountComponent.prototype.profileEvent = function ($event) {
        var activeStep = this.getActiveStep();
        activeStep.state = "complete";
        this.currentStep = 2;
        this.changeStep();
    };
    AccountComponent.prototype.addressEvent = function ($event) {
        var activeStep = this.getActiveStep();
        activeStep.state = "complete";
        this.currentStep = 3;
        this.changeStep();
    };
    AccountComponent.prototype.businessEvent = function ($event) {
        var _this = this;
        console.log($event);
        var reqData = {};
        reqData.profile = this.account.profile;
        reqData.address = this.account.address;
        //delete reqData.address.area;
        reqData.company = this.account.company;
        reqData.bankDetailsPayload = this.account.bankDetailsPayload;
        //delete reqData.company.website;
        //delete reqData.company.currency;
        reqData.account = {};
        reqData.account.email = this.account.email;
        reqData.account.mobile = this.account.mobile;
        reqData.account.role = this.account.role;
        reqData.account.id = this.account.id;
        // const dialogRef = this.dialog.open(ModalPopupComponent);
        this.restService.profileUpdate(reqData).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.appService.navigate("/sign/license", { userId: _this.account.id, mobile: _this.account.mobile, email: _this.account.email });
                // this.dialogConfig.data = {
                //   title: "Registration successful !"
                // };
                // const dialogRef = this.dialog.open(
                //   ModalPopupComponent,
                //   this.dialogConfig
                // );
                // dialogRef.afterClosed().subscribe(result => {
                //   this.appService.navigate("/sign/signin", null);
                // });
            }
        });
    };
    AccountComponent.prototype.backEvent = function () {
        var activeStep = this.getActiveStep();
        activeStep.state = "none";
        this.currentStep = this.currentStep - 1;
        this.changeStep();
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-account",
        template: __webpack_require__("../../../../../src/app/components/sign/account/account.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.license.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"page-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div class=\" title\" style=\"width:800px\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <h1> Welcome to &nbsp; </h1>\r\n        <md-icon svgIcon=\"assets:logo2\" style=\"height: 80px; width: 200px\"></md-icon>\r\n    </div>\r\n    <md-card class=\"row\">\r\n        <md-card-title class=\"center-xs\" style=\"color: #f6c344;\"> Please wait validating your license </md-card-title>\r\n        <md-card-content>\r\n            <div *ngIf=\"showSpinner\">\r\n                <md-progress-spinner mode=\"indeterminate\" color=\"accent\"></md-progress-spinner>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div *ngIf=\"showRetry\" class=\"col-md-12\">\r\n                    <button md-raised-button color=\"accent\" (click)=\"onRetry()\">Retry</button>\r\n                </div>\r\n            </div>\r\n        </md-card-content>\r\n    </md-card>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.license.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/account/modal.popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLicenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountLicenseComponent = (function () {
    function AccountLicenseComponent(dialog, appService, restService) {
        this.dialog = dialog;
        this.appService = appService;
        this.restService = restService;
        this.showRetry = false;
        this.showSpinner = true;
        this.dialogConfig = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MdDialogConfig */]();
    }
    AccountLicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAccountId = this.appService.getParam("userId");
        this.mobile = this.appService.getParam("mobile");
        this.email = this.appService.getParam("email");
        //this.getMacAddress();
        setTimeout(function () {
            _this.generateLicense();
        }, 1000);
    };
    AccountLicenseComponent.prototype.onRetry = function () {
        this.generateLicense();
    };
    AccountLicenseComponent.prototype.onFailed = function () {
        this.showSpinner = false;
        this.showRetry = true;
    };
    AccountLicenseComponent.prototype.onSuccess = function () {
        this.showSpinner = false;
        this.showRetry = false;
    };
    AccountLicenseComponent.prototype.generateLicense = function () {
        var _this = this;
        this.restService.getMacAddress(null).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.macAddress = result.macAddress;
                if (_this.macAddress != null && _this.macAddress != "") {
                    _this.restService.generateLicense({ mac: _this.macAddress, mobile: _this.mobile, email: _this.email })
                        .subscribe(function (result) {
                        console.log("DSFDSFDSFDSFDF" + result);
                        if (result) {
                            var licenseKey = result.licenseKey;
                            _this.restService.saveLicense({ userAccountId: _this.userAccountId, licenseKey: licenseKey })
                                .subscribe(function (result) {
                                console.log(result);
                                if (result) {
                                    _this.dialogConfig.data = {
                                        title: "Registration successful !"
                                    };
                                    var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__modal_popup_component__["a" /* ModalPopupComponent */], _this.dialogConfig);
                                    dialogRef.afterClosed().subscribe(function (result) {
                                        _this.appService.navigate("/sign/signin", null);
                                    });
                                }
                                else {
                                    _this.onFailed();
                                }
                            });
                        }
                        else {
                            _this.onFailed();
                        }
                    });
                }
                else {
                    _this.onFailed();
                }
            }
        });
    };
    return AccountLicenseComponent;
}());
AccountLicenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-account-license',
        template: __webpack_require__("../../../../../src/app/components/sign/account/account.license.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_common_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], AccountLicenseComponent);

var _a, _b, _c;
//# sourceMappingURL=account.license.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.profile.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\r\n    <md-card class=\"row\">\r\n        <md-card-content>\r\n          <div class=\"row\">\r\n        <div class=\"col-xs-8 col-md-8\">\r\n            <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                <div class=\"row \">\r\n                    <md-input-container class=\"col-xs-12\">\r\n                        <input mdInput placeholder=\"Business Name\" required [formControl]=\"myForm.controls.account_company_name\" [(ngModel)]=\"account.company.name\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_company_name\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                    <md-input-container class=\"col-xs-6 \">\r\n                        <input mdInput placeholder=\"First Name\" required [formControl]=\"myForm.controls.account_profile_firstName\" [(ngModel)]=\"account.profile.firstName\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_profile_firstName\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"col-xs-6 padding-side\">\r\n                        <input mdInput placeholder=\"Last Name\" required [formControl]=\"myForm.controls.account_profile_lastName\" [(ngModel)]=\"account.profile.lastName\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_profile_lastName\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                    <md-input-container class=\"col-xs-6\">\r\n                        <input mdInput placeholder=\"PAN\" required [formControl]=\"myForm.controls.account_company_tan\" [(ngModel)]=\"account.company.tan\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_company_tan\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"col-xs-6 padding-side\">\r\n                        <input mdInput placeholder=\"Mobile\" required [formControl]=\"myForm.controls.account_profile_phone\" [(ngModel)]=\"account.mobile\" readonly>\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_profile_phone\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                    <md-input-container class=\"col-xs-6\">\r\n                        <input mdInput placeholder=\"Email\" required [formControl]=\"myForm.controls.account_profile_email\" [(ngModel)]=\"account.email\" readonly>\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_profile_email\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"col-xs-6 padding-side\">\r\n                        <input mdInput placeholder=\"Web Site\"  [formControl]=\"myForm.controls.account_company_website\" [(ngModel)]=\"account.company.webSite\">\r\n                        <md-hint>\r\n                            <form-messages [control]=\"myForm.controls.account_company_website\"> </form-messages>\r\n                        </md-hint>\r\n                    </md-input-container>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-xs-4 col-md-4\">\r\n            <div class=\"row center-xs\" style=\"padding-top: 5rem;\">\r\n                    <md-icon style=\"font-size: 80px;\">file_upload</md-icon>\r\n            </div>\r\n        </div>\r\n        </div>  \r\n        </md-card-content>\r\n        <md-card-actions class=\"row end-xs\">\r\n            <div class=\"col-xs-12\">\r\n                <button md-raised-button color=\"accent\" [disabled]=\"!myForm.valid\" (click)=\"next()\">Next </button>\r\n            </div>\r\n        </md-card-actions>\r\n    </md-card>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__ = __webpack_require__("../../../../../src/app/entities/account.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountProfileComponent = (function () {
    function AccountProfileComponent(appService) {
        this.appService = appService;
        this.profileEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.myForm = __WEBPACK_IMPORTED_MODULE_2__forms_sign_form__["a" /* SignFormGroup */].AccontProfileFormGroup();
    }
    AccountProfileComponent.prototype.ngAfterContentInit = function () {
        console.log("Account Profile");
    };
    AccountProfileComponent.prototype.next = function () {
        this.profileEvent.emit();
    };
    return AccountProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('account'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__entities_account_entity__["a" /* Account */]) === "function" && _a || Object)
], AccountProfileComponent.prototype, "account", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('profileEvent'),
    __metadata("design:type", Object)
], AccountProfileComponent.prototype, "profileEvent", void 0);
AccountProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-profile',
        template: __webpack_require__("../../../../../src/app/components/sign/account/account.profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object])
], AccountProfileComponent);

var _a, _b;
//# sourceMappingURL=account.profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.retail.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"page-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div\r\n    class=\" title\"\r\n    style=\"width:800px\"\r\n    fxLayout=\"row\"\r\n    fxLayoutAlign=\"start center\"\r\n  >\r\n    <h1>Welcome to &nbsp;</h1>\r\n    <md-icon\r\n      svgIcon=\"assets:logo2\"\r\n      style=\"height: 80px; width: 200px\"\r\n    ></md-icon>\r\n  </div>\r\n\r\n  <div style=\"width:1000px; background-color: white\">\r\n    <md-card class=\"row\">\r\n      <md-card-content>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-md-12\">\r\n            <form [formGroup]=\"myForm\" novalidate autocomplete=\"off\">\r\n              <div\r\n                fxLayout=\"row\"\r\n                fxLayoutAlign=\"space-evenly center\"\r\n                style=\"cursor: text;\"\r\n              >\r\n                <md-icon\r\n                  color=\"accent\"\r\n                  class=\"center-xs padding borderbootom hover\"\r\n                  >arrow_forward_ios</md-icon\r\n                >\r\n                <span mdTooltip=\"Business details\" style=\"font-size: 14px;\"\r\n                  >Business Details\r\n                </span>\r\n              </div>\r\n              <div class=\"row \">\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Business Name\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_company_name\"\r\n                    [(ngModel)]=\"account.company.name\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_company_name\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"First Name\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_profile_firstName\"\r\n                    [(ngModel)]=\"account.profile.firstName\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_profile_firstName\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Last Name\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_profile_lastName\"\r\n                    [(ngModel)]=\"account.profile.lastName\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_profile_lastName\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n                <!-- <md-input-container class=\"col-xs-4\">\r\n                                    <input mdInput placeholder=\"PAN\" required [formControl]=\"myForm.controls.account_company_tan\"\r\n                                        [(ngModel)]=\"account.company.tan\">\r\n                                    <md-hint>\r\n                                        <form-messages [control]=\"myForm.controls.account_company_tan\"> </form-messages>\r\n                                    </md-hint>\r\n                                </md-input-container> -->\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Mobile\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_profile_phone\"\r\n                    [(ngModel)]=\"account.mobile\"\r\n                    readonly\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_profile_phone\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Email\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_profile_email\"\r\n                    [(ngModel)]=\"account.email\"\r\n                    readonly\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_profile_email\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Web Site\"\r\n                    [formControl]=\"myForm.controls.account_company_website\"\r\n                    [(ngModel)]=\"account.company.webSite\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_company_website\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n              </div>\r\n              <!-- <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" style=\"cursor: text;\">\r\n                                <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">arrow_forward_ios</md-icon>\r\n                                <span mdTooltip=\"Address details\" style=\"font-size: 14px;\">Address Details </span>\r\n                            </div> -->\r\n              <div class=\"row\">\r\n                <md-input-container class=\"col-xs-4  padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Address Line\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_address_lane\"\r\n                    [(ngModel)]=\"account.address.lane\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_address_lane\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Street \"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_address_street\"\r\n                    [(ngModel)]=\"account.address.street\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_address_street\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Area\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_address_area\"\r\n                    [(ngModel)]=\"account.address.area\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_address_area\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"City\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_address_city\"\r\n                    [(ngModel)]=\"account.address.city\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_address_city\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    required\r\n                    placeholder=\"Choose State\"\r\n                    [formControl]=\"myForm.controls.account_address_state\"\r\n                    [(ngModel)]=\"account.address.state\"\r\n                    [mdAutocomplete]=\"address\"\r\n                    (focus)=\"filterStates($event.target.values)\"\r\n                    (keyup)=\"filterStates($event.target.value)\"\r\n                  />\r\n                  <md-autocomplete #address=\"mdAutocomplete\">\r\n                    <md-option\r\n                      *ngFor=\"let option of filteredStates\"\r\n                      [value]=\"option.key\"\r\n                    >\r\n                      {{ option.key }}\r\n                    </md-option>\r\n                  </md-autocomplete>\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_address_state\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n\r\n                <md-input-container class=\"col-xs-4 padding-side\">\r\n                  <input\r\n                    mdInput\r\n                    placeholder=\"Postal Code\"\r\n                    required\r\n                    [formControl]=\"myForm.controls.account_address_zipCode\"\r\n                    [(ngModel)]=\"account.address.zipcode\"\r\n                  />\r\n                  <md-hint>\r\n                    <form-messages\r\n                      [control]=\"myForm.controls.account_address_zipCode\"\r\n                    >\r\n                    </form-messages>\r\n                  </md-hint>\r\n                </md-input-container>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"row end-xs padding-side\">\r\n          <div class=\"col-xs-12 padding-side\" style=\"padding-bottom: 20px;\">\r\n            <button\r\n              md-raised-button\r\n              color=\"accent\"\r\n              [disabled]=\"!myForm.valid\"\r\n              (click)=\"updateProfile()\"\r\n            >\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/account.retail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_account_entity__ = __webpack_require__("../../../../../src/app/entities/account.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountRetailComponent = (function () {
    function AccountRetailComponent(dialog, appService, restService) {
        this.dialog = dialog;
        this.appService = appService;
        this.restService = restService;
        this.dialogConfig = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MdDialogConfig */]();
        this.stateList = [];
        this.stateListTemp = [];
        this.filteredStates = [];
        this.myForm = __WEBPACK_IMPORTED_MODULE_0__forms_sign_form__["a" /* SignFormGroup */].AccountRetailFormGroup();
        this.account = new __WEBPACK_IMPORTED_MODULE_1__entities_account_entity__["a" /* Account */]();
        this.dialogConfig.panelClass = "signup-dialog";
    }
    AccountRetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var id = _this.appService.getParam("id");
            if (id) {
                //    alert(id)
                _this.accountDetails(id);
                _this.stateLoad();
            }
            else {
                _this.appService.navigate("/", null);
            }
        }, 100);
    };
    AccountRetailComponent.prototype.accountDetails = function (id) {
        var _this = this;
        this.restService.accountDetails({ id: id }).subscribe(function (result) {
            console.log("account details --" + result);
            if (result) {
                _this.account.email = result.email;
                _this.account.mobile = result.mobile;
                _this.account.role = "user";
                _this.account.id = result.id;
            }
            else {
                alert("stoped in profile details ");
                _this.appService.navigate("/", null);
            }
        });
    };
    AccountRetailComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s.key.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    AccountRetailComponent.prototype.selectedAddress = function (item) {
        if (item) {
            this.account.address.state = item[0];
        }
    };
    AccountRetailComponent.prototype.stateLoad = function () {
        var _this = this;
        //this.restService.dataloadFromFile()
        this.restService
            .dataloadFromFile("./assets/json/states.json")
            .subscribe(function (results) {
            _this.stateList = results["states"];
            console.log(_this.stateList);
        });
    };
    AccountRetailComponent.prototype.focusOutFunction = function () {
        var _this = this;
        var array = [];
        this.stateList.forEach(function (item) {
            if (_this.account.address.state == item[0]) {
                array.push(item[0]);
            }
        });
        if (array.length == 0) {
            // this.appService.showMessage('Please Select Correct State Value')
            this.account.address.state = null;
        }
    };
    AccountRetailComponent.prototype.updateProfile = function () {
        var _this = this;
        // alert('update profile reading to submit')
        var reqData = {};
        reqData.profile = this.account.profile;
        reqData.address = this.account.address;
        reqData.company = this.account.company;
        reqData.company.type = "Retail";
        reqData.bankDetailsPayload = this.account.bankDetailsPayload;
        reqData.account = {};
        // reqData.account.email = this.account.email;
        reqData.account.mobile = this.account.mobile;
        reqData.account.role = this.account.role;
        reqData.account.id = this.account.id;
        this.restService.profileUpdate(reqData).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.appService.navigate("/sign/license", {
                    userId: _this.account.id,
                    mobile: _this.account.mobile,
                    email: _this.account.email
                });
            }
        });
    };
    return AccountRetailComponent;
}());
AccountRetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: "app-account-retail",
        template: __webpack_require__("../../../../../src/app/components/sign/account/account.retail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], AccountRetailComponent);

var _a, _b, _c;
//# sourceMappingURL=account.retail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/account/modal.popup.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\r\n\r\n    <div style=\"background-image: linear-gradient(117deg, #3da7dc, #e3d824);width:560px; height: 450px;\">\r\n\r\n        <h3 style=\"text-align:center;padding: 35px;text-align: center;padding: 35px;font-size: 20px;font-family: sans-serif;font-weight: 600;color: white;\">\r\n            {{title}} </h3>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div style=\"background-color:white;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);\">\r\n                <img src=\"assets/img/popuprest.png\" width=\"300px\">\r\n                <!-- <p>successfull Registration!</p>\r\n                <button>next</button> -->\r\n            </div>\r\n            <div class=\"info\" style=\"background-color:white;width:300px; height: 100px;\">\r\n                <!-- <p style=\"text-align:center;padding: 20px;\">{{title}}</p> -->\r\n                <button style=\"width: 85px;height: 30px;border-radius: 8px;cursor:pointer;background-color: #94c850;border:none;display: block;margin-left: auto;margin-right: auto;font-size: 14px;color: white;font-weight: 600;\"\r\n                    (click)=\"agree()\">Now Sign in !</button>\r\n                <!-- <button md-button color=\"accent\" (click)=\"agree()\">OK </button> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</aside>\r\n\r\n\r\n<!-- \r\n    <div class=\"row center-xs\">\r\n    \r\n\r\n        <p style=\"line-height: 22px\">\r\n            Registration successfull\r\n        </p>\r\n    \r\n    \r\n        <div class=\"col-xs-12 end-xs\">\r\n            <button md-button color=\"accent\" (click)=\"agree()\">OK </button>\r\n        </div>\r\n    </div> -->"

/***/ }),

/***/ "../../../../../src/app/components/sign/account/modal.popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ModalPopupComponent = (function () {
    function ModalPopupComponent(appService, mdDialogRef, data) {
        this.appService = appService;
        this.mdDialogRef = mdDialogRef;
        this.title = data.title;
    }
    ModalPopupComponent.prototype.ngOnInit = function () { };
    ModalPopupComponent.prototype.agree = function () {
        this.mdDialogRef.close(true);
    };
    return ModalPopupComponent;
}());
ModalPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-modalpopup",
        template: __webpack_require__("../../../../../src/app/components/sign/account/modal.popup.component.html")
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdDialogRef */]) === "function" && _b || Object, Object])
], ModalPopupComponent);

var _a, _b;
//# sourceMappingURL=modal.popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/forgetpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"page-content\" class=\"container-fluid\" class=\"bg-flat\" *ngIf=\"condition == 'mobile'\">\r\n    <div class=\"row center-xs\">\r\n        <div class=\"start-xs\" style=\"width: 460px; padding-top: 4rem;\">\r\n            <md-icon svgIcon=\"assets:logo\" style=\"height: 80px; width: 100px\"></md-icon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row center-xs\">\r\n        <md-card class=\"col-xs-11 col-sm-8 col-md-6 start-xs \" style=\"padding: 2rem; max-width:460px\">\r\n            <md-card-title>Get help signing into Right Invoices</md-card-title>\r\n            <md-card-content>\r\n                <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Enter your Phone Number or Email\" required [formControl]=\"myForm.controls.forgotpassword_mobile_conformmobile \" [(ngModel)]=\"forgotpassword.mobile\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.forgotpassword_mobile_conformmobile \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                </form>\r\n            </md-card-content>\r\n            <md-card-actions class=\"row start-xs\">\r\n                <div class=\"col-xs-6 col-md-6\">\r\n                    <button md-button (click)=\"login()\" color=\"accent\">Back to signin</button>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-6\">\r\n                    <button md-raised-button color=\"accent\" (click)=\"otpInit()\" [disabled]=\"!myForm.valid\" style=\"width: 100%\">Continue</button>\r\n                </div>\r\n            </md-card-actions>\r\n\r\n        </md-card>\r\n    </div>\r\n</aside>\r\n<aside id=\"page-content\" class=\"container-fluid\" class=\"bg-flat\" *ngIf=\"condition == 'otp'\">\r\n    <div class=\"row center-xs\">\r\n        <div class=\"start-xs\" style=\"width: 460px; padding-top: 4rem;\">\r\n            <md-icon svgIcon=\"assets:logo\" style=\"height: 80px; width: 100px\"></md-icon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row center-xs\">\r\n        <md-card class=\"col-xs-11 col-sm-8 col-md-6 start-xs \" style=\"padding: 2rem; max-width:460px\">\r\n            <md-card-title>Check Your Phone or Email</md-card-title>\r\n            <md-card-subtitle>We sent a code to your Mobile and Email</md-card-subtitle>\r\n            <md-card-content>\r\n                <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Enter the code\" required [formControl]=\"myForm.controls.forgotpassword_otp_otp \" [(ngModel)]=\"forgotpassword.otp\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.forgotpassword_otp_otp \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                </form>\r\n            </md-card-content>\r\n\r\n            <md-card-actions class=\"row\">\r\n                <div class=\"col-xs-4 col-md-4\">\r\n                    <button md-button (click)=\"otpResend()\" color=\"accent\">Resend OTP</button>\r\n                </div>\r\n                <div class=\"col-xs-4 col-md-4\">\r\n                    <button md-raised-button color=\"accent\" (click)=\"otpVerify()\" style=\"width: 100%\" [disabled]=\"!myForm.valid\">Continue </button>\r\n                </div>\r\n            </md-card-actions>\r\n\r\n        </md-card>\r\n    </div>\r\n</aside>\r\n\r\n<aside id=\"page-content\" class=\"container-fluid\" class=\"bg-flat\" *ngIf=\"condition == 'change'\">\r\n    <div class=\"row center-xs\">\r\n        <div class=\"start-xs\" style=\"width: 460px; padding-top: 4rem;\">\r\n            <md-icon svgIcon=\"assets:logo\" style=\"height: 80px; width: 100px\"></md-icon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row center-xs\">\r\n        <md-card class=\"col-xs-11 col-sm-8 col-md-6 start-xs\" style=\"padding: 2rem; max-width:460px\">\r\n            <md-card-subtitle class=\"title\">Enter a new Password</md-card-subtitle>\r\n            <md-card-content>\r\n                <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Mobile\" required [formControl]=\"myForm.controls.forgotpassword_change_mobile \" [(ngModel)]=\"forgotpassword.mobile\" readonly>\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.forgotpassword_change_mobile \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <!--<div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Password\" type=\"password\" required [formControl]=\"myForm.controls.forgotpassword_change_password \" [(ngModel)]=\"forgotpassword.password\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.forgotpassword_change_password \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>-->\r\n\r\n                    <div class=\"row\">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-11\">\r\n                                    <input mdInput type=\"{{showorhide}}\" placeholder=\"Password\" required [formControl]=\"myForm.controls.forgotpassword_change_password\" [(ngModel)]=\"forgotpassword.password\">\r\n                                </div>\r\n                                <div class=\"col-xs-1 end-xs\">\r\n                                    <md-icon *ngIf=\"isVisible == 'hide'\" (click)=\"showPassword()\" style=\"color: black;\">visibility_off</md-icon>\r\n                                    <md-icon *ngIf=\"isVisible == 'show'\" (click)=\"hidePassword()\" style=\"color: black;\">visibility</md-icon>\r\n                                </div>\r\n                            </div>\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.forgotpassword_change_password\"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                </form>\r\n            </md-card-content>\r\n            <md-card-actions class=\"row  end-xs\">\r\n                <div class=\"col-xs-12 col-md-12\">\r\n                    <button md-raised-button color=\"accent\" [disabled]=\"!myForm.valid\" (click)=\"changePassword()\" style=\"width: 50%\">Reset Password </button>\r\n                </div>\r\n            </md-card-actions>\r\n\r\n        </md-card>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/forgetpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_forgotpassword_entity__ = __webpack_require__("../../../../../src/app/entities/forgotpassword.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_otp_entity__ = __webpack_require__("../../../../../src/app/entities/otp.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_modal_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/account/modal.popup.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgotComponent = (function () {
    function ForgotComponent(dialog, appService, restService) {
        this.dialog = dialog;
        this.appService = appService;
        this.restService = restService;
        this.isResetPassword = false;
        this.dialogConfig = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MdDialogConfig */]();
        this.myForm = __WEBPACK_IMPORTED_MODULE_3__forms_sign_form__["a" /* SignFormGroup */].ForgotFormGroup();
        this.forgotpassword = new __WEBPACK_IMPORTED_MODULE_2__entities_forgotpassword_entity__["a" /* Forgot */]();
        this.isResetPassword = false;
        this.condition = "mobile";
        this.showorhide = "password";
        this.isVisible = "show";
        this.dialogConfig.panelClass = "signup-dialog";
    }
    ForgotComponent.prototype.ngOnInit = function () { };
    ForgotComponent.prototype.showPassword = function () {
        this.showorhide = "password";
        this.isVisible = "show";
    };
    ForgotComponent.prototype.hidePassword = function () {
        this.showorhide = "text";
        this.isVisible = "hide";
    };
    ForgotComponent.prototype.otpInit = function () {
        this.condition = "change";
        // if (this.forgotpassword) {
        //   this.otp = new Otp();
        //   this.otp.type = 'forgot';
        //   if (!isNaN(this.forgotpassword.mobile)) {
        //     this.otp.mobile = this.forgotpassword.mobile;
        //     this.otp.email = '';
        //   } else {
        //     this.otp.mobile = '';
        //     this.otp.email = this.forgotpassword.mobile;
        //   }
        //   this
        //     .restService
        //     .otpCreate(this.otp)
        //     .subscribe(result => {
        //       if (result) {
        //         this
        //           .appService
        //           .showMessage(result.message);
        //         this.condition = 'otp'
        //       }
        //     });
        // }
    };
    ForgotComponent.prototype.otpSend = function () {
        this.condition = "change";
    };
    ForgotComponent.prototype.otpResend = function () {
        var _this = this;
        if (this.forgotpassword) {
            this.otp = new __WEBPACK_IMPORTED_MODULE_5__entities_otp_entity__["a" /* Otp */]();
            this.otp.type = "forgot";
            if (!isNaN(this.forgotpassword.mobile)) {
                this.otp.mobile = this.forgotpassword.mobile;
                this.otp.email = "";
            }
            else {
                this.otp.mobile = "";
                this.otp.email = this.forgotpassword.mobile;
            }
            this.restService.otpResend(this.otp).subscribe(function (result) {
                if (result) {
                    _this.appService.showMessage(result.message);
                }
            });
        }
    };
    ForgotComponent.prototype.changePassword = function () {
        var _this = this;
        var reqData = {};
        if (!isNaN(this.forgotpassword.mobile)) {
            reqData.mobile = this.forgotpassword.mobile;
            reqData.email = null;
        }
        else {
            reqData.mobile = null;
            reqData.email = this.forgotpassword.mobile;
        }
        reqData.password = this.forgotpassword.password;
        this.restService.changePassword(reqData).subscribe(function (result) {
            if (result) {
                // this.appService.showMessage(result.message);
                _this.dialogConfig.data = {
                    title: "The password is successfully reset. Sign in"
                };
                var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__account_modal_popup_component__["a" /* ModalPopupComponent */], _this.dialogConfig);
                dialogRef.afterClosed().subscribe(function (result) {
                    _this.appService.navigate("/sign/signin", []);
                });
                // this.appService.navigate("/sign/signin", []);
            }
        });
    };
    ForgotComponent.prototype.login = function () {
        this.appService.navigate("/sign/signin", []);
    };
    ForgotComponent.prototype.otpVerify = function () {
        var _this = this;
        if (!this.forgotpassword.otp) {
            this.appService.showMessage("Otp Code is required");
            return;
        }
        else {
            this.otp = new __WEBPACK_IMPORTED_MODULE_5__entities_otp_entity__["a" /* Otp */]();
            this.otp.type = "forgot";
            if (!isNaN(this.forgotpassword.mobile)) {
                this.otp.mobile = this.forgotpassword.mobile;
                this.otp.email = "";
            }
            else {
                this.otp.mobile = "";
                this.otp.email = this.forgotpassword.mobile;
            }
            this.otp.otpCode = this.forgotpassword.otp;
            this.restService.otpVerify(this.otp).subscribe(function (result) {
                if (result) {
                    _this.appService.showMessage(result.message);
                    _this.condition = "change";
                }
            });
        }
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-forgotpassword",
        template: __webpack_require__("../../../../../src/app/components/sign/forgetpassword/forgotpassword.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], ForgotComponent);

var _a, _b, _c;
//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/newpassword/newpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"page-content\" class=\"container-fluid\" class=\"bg-flat\">\r\n    <div class=\"row center-xs\">\r\n        <div class=\"start-xs\" style=\"width: 460px; padding-top: 4rem;\">\r\n            <md-icon svgIcon=\"assets:logo\" style=\"height: 80px; width: 100px\"></md-icon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row center-xs\">\r\n        <md-card class=\"col-xs-11 col-sm-8 col-md-6 start-xs\">\r\n            <md-card-subtitle class=\"title\">Enter a new Password</md-card-subtitle>\r\n            <md-card-content>\r\n                <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Email\" required [formControl]=\"myForm.controls.newpassword_email \" [(ngModel)]=\"newpassword.email\"\r\n                                readonly>\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.newpassword_email \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Password\" required [formControl]=\"myForm.controls.newpassword_password \" [(ngModel)]=\"newpassword.password\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.newpassword_password \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                </form>\r\n            </md-card-content>\r\n            <md-card-actions class=\"row  end-xs\">\r\n                <div class=\"col-xs-12 col-md-12\">\r\n                    <button md-raised-button color=\"accent\" [disabled]=\"!myForm.valid\" (click)=\"changePassword()\" style=\"width: 50%\">Reset\r\n                        Password </button>\r\n                </div>\r\n            </md-card-actions>\r\n\r\n        </md-card>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/newpassword/newpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_newpassword_entity__ = __webpack_require__("../../../../../src/app/entities/newpassword.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { LoginUser } from '../../shared/entities/loginUser.entity';
// import { Storage} from '../../shared/utils/storage';
// import { Signup } from './../../shared/entities/signup.entity';
// import { ReqBody } from './../../shared/entities/app.entity';



var NewPasswordComponent = (function () {
    //  isResetPassword: boolean = false;
    function NewPasswordComponent(appService) {
        this.appService = appService;
        this.myForm = __WEBPACK_IMPORTED_MODULE_3__forms_sign_form__["a" /* SignFormGroup */].NewPasswordFormGroup();
        this.newpassword = new __WEBPACK_IMPORTED_MODULE_2__entities_newpassword_entity__["a" /* NewPassword */]();
        // this.isResetPassword = false;
    }
    NewPasswordComponent.prototype.ngOnInit = function () {
    };
    NewPasswordComponent.prototype.changePassword = function () {
        //   const reqBody: ReqBody = new ReqBody();
        //  reqBody.url = '/forgotpassword';
        //  reqBody.reqData = this.forgotpassword;
        //  const promise = this.appService.auth(reqBody.url, reqBody.reqData);
        //   promise.subscribe((result: any) => {
        //     if (result) {
        //       this.appService.showMessage(result.message);
        //       this.login();
        //     }
        //   });
    };
    return NewPasswordComponent;
}());
NewPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newpassword',
        template: __webpack_require__("../../../../../src/app/components/sign/newpassword/newpassword.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object])
], NewPasswordComponent);

var _a;
//# sourceMappingURL=newpassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/otp/otp.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"container-fluid\" class=\"bg-flat\">\r\n    <div class=\"row center-xs\">\r\n        <md-card class=\"col-xs-11 col-sm-8 col-md-6 start-xs \">\r\n            <md-card-title>Check Your Phone or Email</md-card-title>\r\n            <md-card-subtitle>We sent a code to your Mobile and Email</md-card-subtitle>\r\n            <md-card-content>\r\n                <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Mobile\" required [formControl]=\"myForm.controls.otp_mobile \" [(ngModel)]=\"otp.mobile\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.otp_mobile \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                </form>\r\n            </md-card-content>\r\n\r\n            <md-card-actions class=\"row\">\r\n                <div class=\"col-xs-6 col-md-6\">\r\n                    <button md-button (click)=\"otpResend()\" color=\"accent\">Resend OTP</button>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-6\">\r\n                    <button md-raised-button color=\"accent\" (click)=\"changePassword()\" style=\"width: 100%\" [disabled]=\"!myForm.valid\">Continue </button>\r\n                </div>\r\n            </md-card-actions>\r\n\r\n        </md-card>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/otp/otp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_otp_entity__ = __webpack_require__("../../../../../src/app/entities/otp.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Prop } from "../../shared/common/props";
// import { AnimationService } from '../../shared/service/animation.service';
// import { LoginUser } from '../../shared/entities/loginUser.entity';
// import { Storage} from '../../shared/utils/storage';
// import { Signup } from './../../shared/entities/signup.entity';
// import { ReqBody } from './../../shared/entities/app.entity';


var OtpComponent = (function () {
    //  isResetPassword: boolean = false;
    function OtpComponent(appService, mdDialogRef) {
        this.appService = appService;
        this.mdDialogRef = mdDialogRef;
        this.myForm = __WEBPACK_IMPORTED_MODULE_4__forms_sign_form__["a" /* SignFormGroup */].OtpFormGroup();
        this.otp = new __WEBPACK_IMPORTED_MODULE_0__entities_otp_entity__["a" /* Otp */]();
        // this.isResetPassword = false;
    }
    OtpComponent.prototype.ngOnInit = function () {
    };
    OtpComponent.prototype.login = function () {
        this.appService.navigate('/sign/signin', []);
    };
    OtpComponent.prototype.changePassword = function () {
        this.appService.navigate('/sign/newpassword', []);
    };
    OtpComponent.prototype.otpResend = function () {
        //   const reqBody: ReqBody = new ReqBody();
        //  reqBody.url = '/otpresend';
        //  reqBody.reqData = this.forgotpassword;
        //  const promise = this.appService.auth(reqBody.url, reqBody.reqData);
        //   promise.subscribe((result: any) => {
        //     if (result) {
        //       this.appService.showMessage(result.message);
        //     }
        //   });
    };
    return OtpComponent;
}());
OtpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-otp',
        template: __webpack_require__("../../../../../src/app/components/sign/otp/otp.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _b || Object])
], OtpComponent);

var _a, _b;
//# sourceMappingURL=otp.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/sign.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_account_license_component__ = __webpack_require__("../../../../../src/app/components/sign/account/account.license.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__ = __webpack_require__("../../../../../src/app/components/sign/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgetpassword_forgotpassword_component__ = __webpack_require__("../../../../../src/app/components/sign/forgetpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__otp_otp_component__ = __webpack_require__("../../../../../src/app/components/sign/otp/otp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newpassword_newpassword_component__ = __webpack_require__("../../../../../src/app/components/sign/newpassword/newpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_terms_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/terms.popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_otp_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/otp.popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_modal_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/account/modal.popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_account_component__ = __webpack_require__("../../../../../src/app/components/sign/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_account_profile_component__ = __webpack_require__("../../../../../src/app/components/sign/account/account.profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_account_address_component__ = __webpack_require__("../../../../../src/app/components/sign/account/account.address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_account_bussiness_component__ = __webpack_require__("../../../../../src/app/components/sign/account/account.bussiness.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_account_retail_component__ = __webpack_require__("../../../../../src/app/components/sign/account/account.retail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignModule", function() { return SignModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { NgProgressCustomBrowserXhr } from 'ngx-progressbar';
var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */] },
    { path: "signin", component: __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */] },
    { path: "forgotpassword", component: __WEBPACK_IMPORTED_MODULE_7__forgetpassword_forgotpassword_component__["a" /* ForgotComponent */] },
    { path: "otp", component: __WEBPACK_IMPORTED_MODULE_8__otp_otp_component__["a" /* OtpComponent */] },
    { path: "newpassword", component: __WEBPACK_IMPORTED_MODULE_9__newpassword_newpassword_component__["a" /* NewPasswordComponent */] },
    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */] },
    { path: "termspopup", component: __WEBPACK_IMPORTED_MODULE_11__signup_terms_popup_component__["a" /* TermsPopupComponent */] },
    { path: "modalpopup", component: __WEBPACK_IMPORTED_MODULE_13__account_modal_popup_component__["a" /* ModalPopupComponent */] },
    { path: "otppopup", component: __WEBPACK_IMPORTED_MODULE_12__signup_otp_popup_component__["a" /* OtpPopupComponent */] },
    { path: "account", component: __WEBPACK_IMPORTED_MODULE_14__account_account_component__["a" /* AccountComponent */] },
    { path: "account-retail", component: __WEBPACK_IMPORTED_MODULE_18__account_account_retail_component__["a" /* AccountRetailComponent */] },
    { path: "license", component: __WEBPACK_IMPORTED_MODULE_0__account_account_license_component__["a" /* AccountLicenseComponent */] }
];
var SignModule = (function () {
    function SignModule() {
    }
    return SignModule;
}());
SignModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_7__forgetpassword_forgotpassword_component__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_8__otp_otp_component__["a" /* OtpComponent */],
            __WEBPACK_IMPORTED_MODULE_9__newpassword_newpassword_component__["a" /* NewPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__signup_terms_popup_component__["a" /* TermsPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signup_otp_popup_component__["a" /* OtpPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__account_modal_popup_component__["a" /* ModalPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_15__account_account_profile_component__["a" /* AccountProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__account_account_address_component__["a" /* AccountAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_17__account_account_bussiness_component__["a" /* AccountBusinessComponent */],
            __WEBPACK_IMPORTED_MODULE_0__account_account_license_component__["a" /* AccountLicenseComponent */],
            __WEBPACK_IMPORTED_MODULE_18__account_account_retail_component__["a" /* AccountRetailComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]]
    })
], SignModule);

//# sourceMappingURL=sign.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <aside\r\n  class=\"container-fluid\"\r\n  class=\"bg-flat\"\r\n  style=\"background: url(../../../../assets/img/welcome/group-3.jpg) no-repeat center center; background-size: cover; padding: 1rem;\"\r\n>\r\n  <div\r\n    class=\"row center-xs\"\r\n    style=\"background: url(../../../../assets/img/welcome/group-5.jpg) no-repeat center center; padding: 1rem; height: 100vh;\"\r\n  >\r\n    <div class=\"row center\">\r\n      <md-card\r\n        class=\"col-xs-12 \"\r\n        style=\"padding: 1rem !important; max-width:260px;margin-left:290px\"\r\n      >\r\n        <md-card-title class=\"center-xs\" style=\"color: #f6c344;\">\r\n          Sign in\r\n        </md-card-title>\r\n        <md-card-content class=\"start-xs\">\r\n          <form\r\n            [formGroup]=\"myForm\"\r\n            novalidate\r\n            autocomplete=\"off\"\r\n            (keyup.enter)=\"connect()\"\r\n          >\r\n            <div class=\"row \">\r\n              <div *ngIf=\"showSpinner\">\r\n                <md-progress-spinner\r\n                  mode=\"indeterminate\"\r\n                  color=\"accent\"\r\n                ></md-progress-spinner>\r\n              </div>\r\n              <md-input-container class=\"col-xs-12\">\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Email or Mobile\"\r\n                  required\r\n                  [formControl]=\"myForm.controls.signin_userId\"\r\n                  [(ngModel)]=\"signin.userId\"\r\n                />\r\n                <md-hint>\r\n                  <form-messages [control]=\"myForm.controls.signin_userId\">\r\n                  </form-messages>\r\n                </md-hint>\r\n              </md-input-container>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <md-input-container class=\"col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-11\">\r\n                    <input\r\n                      mdInput\r\n                      type=\"{{ showorhide }}\"\r\n                      placeholder=\"Password\"\r\n                      required\r\n                      [formControl]=\"myForm.controls.signin_password\"\r\n                      [(ngModel)]=\"signin.password\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"col-xs-1 end-xs\">\r\n                    <md-icon\r\n                      *ngIf=\"isVisible == 'hide'\"\r\n                      (click)=\"showPassword()\"\r\n                      style=\"color: black;\"\r\n                      >visibility_off</md-icon\r\n                    >\r\n                    <md-icon\r\n                      *ngIf=\"isVisible == 'show'\"\r\n                      (click)=\"hidePassword()\"\r\n                      style=\"color: black;\"\r\n                      >visibility</md-icon\r\n                    >\r\n                  </div>\r\n                </div>\r\n                <md-hint>\r\n                  <form-messages [control]=\"myForm.controls.signin_password\">\r\n                  </form-messages>\r\n                </md-hint>\r\n              </md-input-container>\r\n            </div>\r\n          </form>\r\n        </md-card-content>\r\n\r\n        <md-card-actions class=\"row\">\r\n          <div class=\"row start-xs\">\r\n            <div class=\"col-xs-12 \" style=\"padding: 0 1rem;\">\r\n              <button\r\n                md-raised-button\r\n                type=\"submit\"\r\n                color=\"accent\"\r\n                [disabled]=\"!myForm.valid\"\r\n                (click)=\"connect($event)\"\r\n                style=\"width: 99%; margin-right: -1em;\"\r\n              >\r\n                Sign In\r\n              </button>\r\n            </div>\r\n            <div class=\"col-xs-6\" style=\"padding: 1em;\">\r\n              <button md-button (click)=\"forgotPassword()\" color=\"accent\">\r\n                Forgot password?\r\n              </button>\r\n            </div>\r\n            <div class=\"col-xs-6 \" style=\"padding: 1em; text-align: right\">\r\n              <button md-button (click)=\"signup()\" color=\"primary\">\r\n                Create account\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </md-card-actions>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n</aside> -->\r\n\r\n<div\r\n  class=\"container-fluid\"\r\n  style=\" display: flex;\r\njustify-content: center;\r\nalign-items: center;height: 98vh;\"\r\n>\r\n  <div fxHide.xs>\r\n    <div class=\"corner \" style=\"position: fixed;top:0;right: 0;\">\r\n      <img src=\"assets/img/welcome/fill-1.svg\" />\r\n    </div>\r\n    <div class=\"corner \" style=\"position: fixed;bottom:0;right: 0;\">\r\n      <img src=\"assets/img/welcome/signin-cornerimg.svg\" />\r\n    </div>\r\n    <div fxHide.xs style=\"position: fixed;bottom:35px;right: 240px;\">\r\n      <p\r\n        style=\"max-width:460px;text-align: justify;font-family: 'Roboto', sans-serif;font-style: italic;font-weight: 600;font-size: 14px;\"\r\n      >\r\n        Invite your friends and get 10% referral bonus! Lacs of users are\r\n        earning Rs 1000s when their friends registered. Don't miss out.Invite\r\n        your friends and get 10% lifetime referral bonus!\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div fxHide.sm fxHide.md fxHide.lg fxHide.xl>\r\n    <div class=\"corner \" style=\"position: fixed;top:0;right: 0;\">\r\n      <img src=\"assets/img/welcome/fill-sm.svg\" />\r\n    </div>\r\n    <div class=\"corner \" style=\"position: fixed;bottom:0;right: 0;\">\r\n      <img src=\"assets/img/welcome/signin-cornerimg-sm.svg\" />\r\n    </div>\r\n    <div style=\"position: fixed;bottom:10px;right: 100px;\">\r\n      <p\r\n        style=\"max-width:200px;text-align: justify;font-family: 'Roboto', sans-serif;font-style: italic;font-weight: 600;font-size: 9px;\"\r\n      >\r\n        Invite your friends and get 10% referral bonus! Lacs of users are\r\n        earning Rs 1000s when their friends registered. Don't miss out.Invite\r\n        your friends and get 10% lifetime referral bonus!\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" align=\"center\" style=\"margin: auto;\">\r\n    <div\r\n      class=\"col-lg-6 col-md-6\"\r\n      fxHide.xs\r\n      fxHide.sm\r\n      fxLayout=\"column\"\r\n      fxLayoutAlign=\"center center\"\r\n    >\r\n      <h1\r\n        style=\"font-family: 'Roboto', sans-serif;color: #0093d7;font-size: 35px;margin:20px;\r\n        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);\"\r\n      >\r\n        HIGHLIGHTS\r\n      </h1>\r\n      <div\r\n        class=\"row d-none d-lg-block\"\r\n        style=\"font-family: 'Roboto', sans-serif;color: black;font-size: 16px;\"\r\n      >\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <h4 style=\"margin: 30px 0 10px;\">\r\n            Customer<br />\r\n            Management\r\n          </h4>\r\n          <img src=\"assets/img/welcome/customer.svg\" />\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <h4 style=\"margin: 30px 0 10px;\">Inventory <br />Management</h4>\r\n          <img src=\"assets/img/welcome/inventory.svg\" />\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <h4 style=\"margin: 30px 0 10px;\">Invoice <br />Management</h4>\r\n          <img src=\"assets/img/welcome/invoice.svg\" />\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <h4 style=\"margin: 30px 0 10px;\">Expenses <br />Management</h4>\r\n          <img src=\"assets/img/welcome/expenses.svg\" />\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <h4 style=\"margin: 30px 0 10px;\">Bookkeeping</h4>\r\n          <img src=\"assets/img/welcome/bookkeeping.svg\" />\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <h4 style=\"margin: 30px 0 10px;\">Reports</h4>\r\n          <img\r\n            src=\"assets/img/welcome/reports.png\"\r\n            width=\"128px\"\r\n            height=\"auto\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"col-lg-6 col-md-6 col-sm-12 col-12\"\r\n      style=\" display: flex;\r\n    justify-content: center;\r\n    align-items: center;height: 98vh;\"\r\n    >\r\n      <div class=\"row align-items-center\">\r\n        <div\r\n          class=\"col-lg-12\"\r\n          [ngStyle.lg]=\"{ position: 'relative', 'right.px': 50 }\"\r\n        >\r\n          <md-card\r\n            class=\"col-xs-12 \"\r\n            style=\"padding: 1rem 1rem 2rem!important; max-width:285px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\"\r\n          >\r\n            <md-card-title class=\"center-xs\" style=\"margin-top: 15px;\">\r\n              <img src=\"assets/icons/RI-logo.svg\" />\r\n              <h2 style=\"font-size: 24px;font-weight: 600;\">Sign in</h2>\r\n            </md-card-title>\r\n            <md-card-content class=\"start-xs\">\r\n              <form\r\n                [formGroup]=\"myForm\"\r\n                novalidate\r\n                autocomplete=\"off\"\r\n                (keyup.enter)=\"connect()\"\r\n              >\r\n                <div class=\"row \">\r\n                  <div *ngIf=\"showSpinner\">\r\n                    <md-progress-spinner\r\n                      mode=\"indeterminate\"\r\n                      color=\"accent\"\r\n                    ></md-progress-spinner>\r\n                  </div>\r\n                  <md-input-container class=\"col-xs-12\">\r\n                    <input\r\n                      mdInput\r\n                      placeholder=\"Email or Mobile\"\r\n                      required\r\n                      [formControl]=\"myForm.controls.signin_userId\"\r\n                      [(ngModel)]=\"signin.userId\"\r\n                    />\r\n                    <md-hint>\r\n                      <form-messages [control]=\"myForm.controls.signin_userId\">\r\n                      </form-messages>\r\n                    </md-hint>\r\n                  </md-input-container>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <md-input-container class=\"col-xs-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-11\">\r\n                        <input\r\n                          mdInput\r\n                          type=\"{{ showorhide }}\"\r\n                          placeholder=\"Password\"\r\n                          required\r\n                          [formControl]=\"myForm.controls.signin_password\"\r\n                          [(ngModel)]=\"signin.password\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-xs-1 end-xs\" style=\"height: 10px;\">\r\n                        <md-icon\r\n                          *ngIf=\"isVisible == 'hide'\"\r\n                          (click)=\"showPassword()\"\r\n                          style=\"color: #666666;transform: scale(0.7);\"\r\n                          >visibility_off</md-icon\r\n                        >\r\n                        <md-icon\r\n                          *ngIf=\"isVisible == 'show'\"\r\n                          (click)=\"hidePassword()\"\r\n                          style=\"color: #666666;transform: scale(0.7);\"\r\n                          >visibility</md-icon\r\n                        >\r\n                      </div>\r\n                    </div>\r\n                    <md-hint>\r\n                      <form-messages\r\n                        [control]=\"myForm.controls.signin_password\"\r\n                      >\r\n                      </form-messages>\r\n                    </md-hint>\r\n                  </md-input-container>\r\n                </div>\r\n              </form>\r\n            </md-card-content>\r\n\r\n            <md-card-actions class=\"row\">\r\n              <div class=\"row start-xs\">\r\n                <div\r\n                  class=\"col-xs-12 signbutton \"\r\n                  style=\"padding: 0 1rem;\"\r\n                  align=\"center\"\r\n                >\r\n                  <button\r\n                    md-raised-button\r\n                    type=\"submit\"\r\n                    [disabled]=\"!myForm.valid\"\r\n                    (click)=\"connect($event)\"\r\n                    color=\"primary\"\r\n                    style=\"width: 50%;color:#ffffff;\"\r\n                  >\r\n                    Sign In\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-xs-6\" style=\"padding: 1em;\">\r\n                  <button\r\n                    md-button\r\n                    (click)=\"forgotPassword()\"\r\n                    color=\"primary\"\r\n                    style=\"font-size: 13px;\"\r\n                  >\r\n                    Forgot password?\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-xs-6 \" style=\"padding: 1em; text-align: right;\">\r\n                  <button\r\n                    md-button\r\n                    (click)=\"signup()\"\r\n                    color=\"primary\"\r\n                    style=\"font-size: 13px;\"\r\n                  >\r\n                    Create account\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </md-card-actions>\r\n          </md-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_signin_entity__ = __webpack_require__("../../../../../src/app/entities/signin.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_apex_service__ = __webpack_require__("../../../../../src/app/shared/service/apex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SigninComponent = (function () {
    function SigninComponent(appService, apexService, restService) {
        var _this = this;
        this.appService = appService;
        this.apexService = apexService;
        this.restService = restService;
        this.showSpinner = false;
        this.myForm = __WEBPACK_IMPORTED_MODULE_5__forms_sign_form__["a" /* SignFormGroup */].SigninFormGroup();
        this.signin = new __WEBPACK_IMPORTED_MODULE_4__entities_signin_entity__["a" /* Signin */]();
        __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__["a" /* Storage */].clearSession();
        this.showorhide = "password";
        this.isVisible = "show";
        this._loaderSubscription = this.apexService.loaderEvent.subscribe(function (data) {
            _this.showSpinner = data;
        });
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.elem = document.documentElement;
        __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__["a" /* Storage */].clearSession();
        this.appService.sessionUserEmit(null);
    };
    // openFullScreen() {
    //   fscreen.fullscreenEnabled = true;
    //   if (fscreen.fullscreenEnabled) {
    //     fscreen.addEventListener("fullscreenchange", handler, false);
    //     fscreen.requestFullscreen(this.elem);
    //   }
    //   function handler() {
    //     if (fscreen.fullscreenElement !== null) {
    //       console.log("Entered fullscreen mode");
    //     } else {
    //       console.log("Exited fullscreen mode");
    //     }
    //   }
    // }
    SigninComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            alert("you just clicked enter");
            // rest of your code
        }
    };
    SigninComponent.prototype.showPassword = function () {
        this.showorhide = "password";
        this.isVisible = "show";
    };
    SigninComponent.prototype.hidePassword = function () {
        this.showorhide = "text";
        this.isVisible = "hide";
    };
    SigninComponent.prototype.connect = function ($event) {
        var _this = this;
        // this.openFullScreen();
        this.restService.showSpinner(true);
        this.restService.signin(this.signin).subscribe(function (data) {
            if (data) {
                console.log(data);
                if (data.account.regStatus == 0) {
                    _this.appService.navigate(__WEBPACK_IMPORTED_MODULE_7__common_props__["a" /* Prop */].ACCOUNT_INIT_PAGE, [
                        { id: data.account.id }
                    ]);
                }
                if (data.account.regStatus == 1) {
                    _this.appService.navigate("/sign/license", {
                        userId: data.account.id,
                        mobile: data.account.mobile,
                        email: data.account.email
                    });
                }
                else {
                    _this.restService
                        .validateLicense({
                        userAccountId: data.account.id,
                        licenseKey: data.account.licenseKey
                            ? data.account.licenseKey
                            : "invalid"
                    })
                        .subscribe(function (license) {
                        console.log(license);
                        //console.log("1----");
                        _this.restService.showSpinner(false);
                        if (license) {
                            _this.restService.setSession(data);
                            //console.log("2----");
                            _this.restService.showSpinner(false);
                            _this.appService.navigate("/admin/dashboard", null);
                        }
                    });
                }
            }
        });
    };
    SigninComponent.prototype.signup = function () {
        this.appService.navigate("/sign/signup", []);
    };
    SigninComponent.prototype.forgotPassword = function () {
        this.appService.navigate("/sign/forgotpassword", []);
    };
    SigninComponent.prototype.landingpage = function () {
        this.appService.navigate("landingpage", []);
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: "app-signin", template: __webpack_require__("../../../../../src/app/components/sign/signin/signin.component.html") }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_apex_service__["a" /* ApexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_apex_service__["a" /* ApexService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/otp.popup.component.html":
/***/ (function(module, exports) {

module.exports = "<aside style=\"width: 500px\">\r\n    <div class=\"title\">Please check your Mobile or Email for OTP</div>\r\n    <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n        <div class=\"row \">\r\n            <md-input-container class=\"col-xs-12\">\r\n                <input mdInput placeholder=\"Enter the code\" required [formControl]=\"myForm.controls.otp_otp\" [(ngModel)]=\"otp.otpCode\">\r\n                <md-hint>\r\n                    <form-messages [control]=\"myForm.controls.otp_otp \"> </form-messages>\r\n                </md-hint>\r\n            </md-input-container>\r\n        </div>\r\n    </form>\r\n    <div class=\"row end-xs\">\r\n        <button md-button color=\"accent\" [disabled]=\"!myForm.valid\" (click)=\"otpVerify()\">Verify</button>\r\n        <button md-button color=\"accent\" (click)=\"otpResend()\">Resend OTP</button>\r\n        <button md-button color=\"accent\" (click)=\"close()\">Close</button>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/otp.popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_otp_entity__ = __webpack_require__("../../../../../src/app/entities/otp.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtpPopupComponent = (function () {
    function OtpPopupComponent(appService, restService, mdDialogRef) {
        this.appService = appService;
        this.restService = restService;
        this.mdDialogRef = mdDialogRef;
        this.myForm = __WEBPACK_IMPORTED_MODULE_3__forms_sign_form__["a" /* SignFormGroup */].OtpFormGroup();
        this.otp = new __WEBPACK_IMPORTED_MODULE_5__entities_otp_entity__["a" /* Otp */]();
        this.otp.type = "register";
    }
    OtpPopupComponent.prototype.ngOnInit = function () { };
    OtpPopupComponent.prototype.account = function () {
        this.appService.navigate("/sign/account", []);
    };
    OtpPopupComponent.prototype.otpResend = function () {
        var _this = this;
        if (this.signup) {
            this.otp.mobile = this.signup.mobile;
            this.otp.email = this.signup.email;
            this.restService.otpResend(this.otp).subscribe(function (result) {
                if (result) {
                    _this.appService.showMessage(result.message);
                }
            });
        }
    };
    OtpPopupComponent.prototype.otpVerify = function () {
        var _this = this;
        if (!this.otp.otpCode) {
            this.appService.showMessage("Otp Code is required");
            return;
        }
        else {
            this.otp.mobile = this.signup.mobile;
            this.otp.email = this.signup.email;
            this.restService.otpVerify(this.otp).subscribe(function (result) {
                if (result) {
                    _this.mdDialogRef.close(result);
                    _this.appService.showMessage(result.message);
                }
            });
        }
    };
    OtpPopupComponent.prototype.close = function () {
        this.mdDialogRef.close(false);
    };
    return OtpPopupComponent;
}());
OtpPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-otppopup",
        template: __webpack_require__("../../../../../src/app/components/sign/signup/otp.popup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdDialogRef */]) === "function" && _c || Object])
], OtpPopupComponent);

var _a, _b, _c;
//# sourceMappingURL=otp.popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"container-fluid\" class=\"bg-flat\">\r\n    <div class=\"row center-xs\">\r\n        <div class=\"start-xs\" style=\"width: 460px; padding-top: 4rem;\">\r\n            <md-icon svgIcon=\"assets:logo\" style=\"height: 80px; width: 100px\"></md-icon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row center-xs\">\r\n        <md-card class=\"col-xs-12\" style=\"max-width: 460px; padding: 2rem !important;\">\r\n            <md-card-title class=\"start-xs\">Create an account</md-card-title>\r\n\r\n            <md-card-content>\r\n                <form [formGroup]=\"myForm\" novalidate autocomplete='off'>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Mobile\" required [formControl]=\"myForm.controls.signup_mobile \" [(ngModel)]=\"signup.mobile\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.signup_mobile \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"row \">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <input mdInput placeholder=\"Email\" required [formControl]=\"myForm.controls.signup_email\" [(ngModel)]=\"signup.email\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.signup_email \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <!--<div class=\"row \">\r\n                        <md-input-container class=\"col-xs-11\">\r\n                            <input mdInput placeholder=\"Password\" type=\"{{showorhide}}\" required [formControl]=\"myForm.controls.signup_password \" [(ngModel)]=\"signup.password\">\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.signup_password \"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>-->\r\n                    <div class=\"row\">\r\n                        <md-input-container class=\"col-xs-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-11\">\r\n                                    <input mdInput type=\"{{showorhide}}\" placeholder=\"Password\" required [formControl]=\"myForm.controls.signup_password\" [(ngModel)]=\"signup.password\">\r\n                                </div>\r\n                                <div class=\"col-xs-1 end-xs\">\r\n                                    <md-icon *ngIf=\"isVisible == 'hide'\" (click)=\"showPassword()\" style=\"color: black;\">visibility_off</md-icon>\r\n                                    <md-icon *ngIf=\"isVisible == 'show'\" (click)=\"hidePassword()\" style=\"color: black;\">visibility</md-icon>\r\n                                </div>\r\n                            </div>\r\n                            <md-hint>\r\n                                <form-messages [control]=\"myForm.controls.signup_password\"> </form-messages>\r\n                            </md-hint>\r\n                        </md-input-container>\r\n                    </div>\r\n\r\n                </form>\r\n            </md-card-content>\r\n\r\n            <md-card-actions class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <span>By clicking sign Up, you agree to the </span>\r\n                    <button md-button (click)=\"openDialog()\" color=\"accent\">Licence Agreement</button>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-6\">\r\n                    <button md-raised-button color=\"accent\" style=\"width: 50%\" (click)=\"cancel()\">Cancel </button>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-6 end-xs\">\r\n                    <button md-raised-button color=\"accent\" style=\"width: 50%\" [disabled]=\"!myForm.valid\" (click)=\"openDialog()\">Sign up\r\n                        </button>\r\n                </div>\r\n            </md-card-actions>\r\n        </md-card>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_signup_entity__ = __webpack_require__("../../../../../src/app/entities/signup.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_sign_form__ = __webpack_require__("../../../../../src/app/forms/sign.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/terms.popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__otp_popup_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/otp.popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LoginUser } from '../../shared/entities/loginUser.entity';







var SignupComponent = (function () {
    //   private loginUser: LoginUser;
    function SignupComponent(appService, restService, dialog) {
        this.appService = appService;
        this.restService = restService;
        this.dialog = dialog;
        this.otp = {};
        this.myForm = __WEBPACK_IMPORTED_MODULE_6__forms_sign_form__["a" /* SignFormGroup */].SignUpFormGroup();
        //   this.loginUser = new LoginUser();
        this.signup = new __WEBPACK_IMPORTED_MODULE_4__entities_signup_entity__["a" /* Signup */]();
        this.showorhide = "password";
        this.isVisible = "show";
    }
    SignupComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].clearSession();
        this.appService.sessionUserEmit(null);
    };
    SignupComponent.prototype.showPassword = function () {
        this.showorhide = "password";
        this.isVisible = "show";
    };
    SignupComponent.prototype.hidePassword = function () {
        this.showorhide = "text";
        this.isVisible = "hide";
    };
    SignupComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__terms_popup_component__["a" /* TermsPopupComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (_this.myForm.valid) {
                    _this.otpInit();
                }
                else {
                    _this.appService.showMessage("Please enter form details.");
                }
            }
            else {
                _this.appService.showMessage("Please agree terms and conditions for proceed.");
            }
        });
    };
    SignupComponent.prototype.openDialogOtp = function () {
        var _this = this;
        console.log(this.signup);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__otp_popup_component__["a" /* OtpPopupComponent */]);
        dialogRef.componentInstance.signup = this.signup;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.restService.signup(_this.signup).subscribe(function (result) {
                    _this.appService.navigate(__WEBPACK_IMPORTED_MODULE_9__common_props__["a" /* Prop */].ACCOUNT_INIT_PAGE, [{ id: result.id }]);
                });
            }
            else {
                //this.appService.showMessage("Please agree terms and conditions for proceed.")
            }
        });
    };
    SignupComponent.prototype.login = function () {
        this.appService.navigate("/sign/signin", []);
    };
    SignupComponent.prototype.save = function () {
        var _this = this;
        this.restService.signup(this.signup).subscribe(function (result) {
            if (result) {
                _this.appService.showMessage(result.message);
                _this.login();
            }
        });
    };
    SignupComponent.prototype.otpInit = function () {
        // if(this.signup){
        //    this.otp.type= 'register';
        //   this.otp.mobile = this.signup.mobile;
        //   this.otp.email = this.signup.email;
        //   this.restService.otpCreate(this.otp)
        //     .subscribe( result => {
        //       if(result){
        //         this.openDialogOtp();
        //         this.appService.showMessage(result.message);
        //       }
        var _this = this;
        //     });
        // }
        this.restService.signup(this.signup).subscribe(function (result) {
            _this.appService.navigate(__WEBPACK_IMPORTED_MODULE_9__common_props__["a" /* Prop */].ACCOUNT_INIT_PAGE, [{ id: result.id }]);
        });
    };
    SignupComponent.prototype.cancel = function () {
        this.appService.navigate("/landingpage", []);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-signup",
        template: __webpack_require__("../../../../../src/app/components/sign/signup/signup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_rest_service__["a" /* RestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/terms.popup.component.html":
/***/ (function(module, exports) {

module.exports = "<aside style=\"max-width:550px\">\r\n  <div class=\"row center-xs\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"title\">Terms and Conditions</div>\r\n    </div>\r\n    <md-card class=\"col-xs-12 \">\r\n      <p style=\"line-height: 22px\">\r\n        Lorem Ipsum is simply dummy text of the printing and typesetting\r\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\r\n        since the 1500s, when an unknown printer took a galley of type and\r\n        scrambled it to make a type specimen book. It has survived not only five\r\n        centuries, but also the leap into electronic typesetting, remaining\r\n        essentially unchanged. It was popularised in the 1960s with the release\r\n        of Letraset sheets containing Lorem Ipsum passages, and more recently\r\n        with desktop publishing software like Aldus PageMaker including versions\r\n        of Lorem Ipsum.\r\n      </p>\r\n      <p style=\"line-height: 22px\">\r\n        Lorem Ipsum is simply dummy text of the printing and typesetting\r\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\r\n        since the 1500s, when an unknown printer took a galley of type and\r\n        scrambled it to make a type specimen book. It has survived not only five\r\n        centuries, but also the leap into electronic typesetting\r\n      </p>\r\n      <p style=\"line-height: 22px\">\r\n        remaining essentially unchanged. It was popularised in the 1960s with\r\n        the release of Letraset sheets containing Lorem Ipsum passages, and more\r\n        recently with desktop publishing software like Aldus PageMaker including\r\n        versions of Lorem Ipsum.\r\n      </p>\r\n    </md-card>\r\n    <div class=\"col-xs-12 end-xs\">\r\n      <button md-button color=\"accent\" (click)=\"agree()\">Okay</button>\r\n    </div>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/terms.popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsPopupComponent = (function () {
    function TermsPopupComponent(appService, mdDialogRef) {
        this.appService = appService;
        this.mdDialogRef = mdDialogRef;
    }
    TermsPopupComponent.prototype.ngOnInit = function () {
    };
    TermsPopupComponent.prototype.agree = function () {
        this.mdDialogRef.close(true);
    };
    return TermsPopupComponent;
}());
TermsPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-termspopup',
        template: __webpack_require__("../../../../../src/app/components/sign/signup/terms.popup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdDialogRef */]) === "function" && _b || Object])
], TermsPopupComponent);

var _a, _b;
//# sourceMappingURL=terms.popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/entities/forgotpassword.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forgot; });
var Forgot = (function () {
    function Forgot() {
        this.id = '0';
    }
    return Forgot;
}());

//# sourceMappingURL=forgotpassword.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/newpassword.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPassword; });
var NewPassword = (function () {
    function NewPassword() {
        this.id = '0';
    }
    return NewPassword;
}());

//# sourceMappingURL=newpassword.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/otp.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Otp; });
var Otp = (function () {
    function Otp() {
    }
    return Otp;
}());

//# sourceMappingURL=otp.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/signin.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signin; });
var Signin = (function () {
    function Signin() {
        this.userId = "";
        this.password = "";
    }
    return Signin;
}());

//# sourceMappingURL=signin.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/signup.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
var Signup = (function () {
    function Signup() {
        this.id = '0';
        this.role = "init";
    }
    return Signup;
}());

//# sourceMappingURL=signup.entity.js.map

/***/ }),

/***/ "../../../../../src/app/forms/sign.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_app_form__ = __webpack_require__("../../../../../src/app/shared/common/app.form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignFormGroup; });
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


var SignFormGroup = (function (_super) {
    __extends(SignFormGroup, _super);
    function SignFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignFormGroup.SigninFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            signin_userId: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)])
            ],
            signin_password: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)])
            ]
        });
    };
    /*-----signup----*/
    SignFormGroup.SignUpFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            signup_mobile: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.MOBILE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            signup_email: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.SIGN_UP_EMAIL_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            signup_password: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.DATA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ]
        });
    };
    /*----forgot password--*/
    SignFormGroup.ForgotFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            forgotpassword_mobile_conformmobile: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.MOBILE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            // forgotpassword_mobile_email                             : ['', Validators.compose([ Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
            forgotpassword_otp_otp: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.NUMBER_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(9)
                ])
            ],
            forgotpassword_change_mobile: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.MOBILE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            forgotpassword_change_password: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.DATA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ]
        });
    };
    SignFormGroup.OtpFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            otp_email: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.EMAIL_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            otp_mobile: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.MOBILE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            otp_otp: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.NUMBER_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(9)
                ])
            ]
            // forgotpassword_newpassword 		                   : ['', Validators.compose([Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
        });
    };
    SignFormGroup.NewPasswordFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            newpassword_email: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.EMAIL_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            newpassword_mobile: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.MOBILE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            newpassword_password: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.DATA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ]
            // forgotpassword_otp               :['', Validators.compose([Validators.pattern(this.NUMBER_PATTERN), Validators.maxLength(4)]) ],
            // forgotpassword_newpassword 		                   : ['', Validators.compose([Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
        });
    };
    SignFormGroup.AccontProfileFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            account_profile_firstName: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_profile_lastName: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_name: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.BUSI_NAME_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_profile_email: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.SIGN_UP_EMAIL_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_website: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.WEBSITE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_tan: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.PAN_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(11)
                ])
            ],
            account_profile_phone: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.PHONE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ]
        });
    };
    SignFormGroup.AccountAddressFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            account_address_lane: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_city: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_area: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_state: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.DATA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_street: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_zipCode: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.PIN_CODE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(8)
                ])
            ]
        });
    };
    SignFormGroup.AccountBusinessFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            account_company_currency: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.DATA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_type: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_gstin: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.GST_CODE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(45)
                ])
            ],
            account_bank_accno: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)])],
            account_bank_ifscCode: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)])
            ]
        });
    };
    SignFormGroup.AccountRetailFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({
            account_profile_firstName: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_profile_lastName: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_name: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.BUSI_NAME_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_profile_email: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.SIGN_UP_EMAIL_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_company_website: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.WEBSITE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            // account_company_tan: [
            //   "",
            //   Validators.compose([
            //     Validators.pattern(this.PAN_NO_PATTERN),
            //     Validators.maxLength(11)
            //   ])
            // ],
            account_profile_phone: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.PHONE_NO_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            account_address_lane: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_city: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_area: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_state: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_street: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.ALFA_NUM_DES_SPACE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(99)
                ])
            ],
            account_address_zipCode: [
                "",
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(this.PIN_CODE_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(8)
                ])
            ]
        });
    };
    return SignFormGroup;
}(__WEBPACK_IMPORTED_MODULE_1__shared_common_app_form__["a" /* AppFormGroup */]));

//# sourceMappingURL=sign.form.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map