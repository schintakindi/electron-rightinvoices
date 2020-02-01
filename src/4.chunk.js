webpackJsonp([4],{

/***/ "../../../../../src/app/modules/goods-returned/components/customer-product-table/customer-product-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-side\">\r\n  <md-card class=\"invoice-form-table\">\r\n    <div class=\"invoice-form-th\">\r\n      <md-list>\r\n        <md-list-item layout=\"row\" layout-wrap class=\"invoice-form-list-item\">\r\n          <span flex=\"4\"> S.no</span>\r\n          <span flex=\"30\">Product</span>\r\n          <span flex=\"8\">Qty</span>\r\n          <span flex=\"9\">Rate</span>\r\n          <span flex=\"8\">Discount</span>\r\n          <span flex=\"9\">Subtotal</span>\r\n          <span flex=\"9\">Tax Amount</span>\r\n          <span flex=\"9\">Cess</span>\r\n          <span flex=\"9\">Total</span>\r\n          <span flex=\"0\">&nbsp;</span>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n    <br />\r\n    <div\r\n      class=\"invoice-form-tb\"\r\n      [style.overflow]=\"'auto'\"\r\n      [style.height.px]=\"'300'\"\r\n    >\r\n      <md-list>\r\n        <ng-template\r\n          let-index=\"index\"\r\n          let-item\r\n          let-last=\"last\"\r\n          ngFor\r\n          [ngForOf]=\"sales.productItems\"\r\n        >\r\n          <md-list-item\r\n            layout=\"row\"\r\n            layout-wrap\r\n            (click)=\"selectLineItem(item, index)\"\r\n            *ngIf=\"item.stockItemId\"\r\n          >\r\n            <span flex=\"4\"> {{ index + 1 }}</span>\r\n            <span flex=\"30\">\r\n              <md-input-container style=\"margin-top: -9px !important;\">\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Choose Stock Item\"\r\n                  [(ngModel)]=\"item.stockItemId.productName\"\r\n                  (focus)=\"filterStockItems($event.target.values)\"\r\n                  (keyup)=\"filterStockItems($event.target.value)\"\r\n                  [mdAutocomplete]=\"autoStockItems\"\r\n                  [readOnly]=\"isEditable == 'false'\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                />\r\n\r\n                <md-autocomplete #autoStockItems=\"mdAutocomplete\">\r\n                  <md-option\r\n                    *ngFor=\"\r\n                      let fitem of filteredStockItems;\r\n                      let selIndex = index\r\n                    \"\r\n                    (click)=\"selectStockItem(fitem, selIndex)\"\r\n                  >\r\n                    {{ fitem.productName }} -\r\n                    {{ fitem.stockItemPrice.stockathand }}\r\n                  </md-option>\r\n                </md-autocomplete>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"8\">\r\n              <md-input-container\r\n                style=\"width:5em;  margin-top: -4px !important; padding-left: 5px\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"quantity\"\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"item.quantity\"\r\n                  (ngModelChange)=\"itemValueChange(item)\"\r\n                  [disabled]=\"!item.stockItemId.productName\"\r\n                />\r\n              </md-input-container>\r\n              <span style=\"color: red;font-size:10px\" *ngIf=\"item.greaterStock\">\r\n                no Stock\r\n              </span>\r\n            </span>\r\n            <!-- <span flex=\"5\"> (onfocusout)=\"selectItemFromDrop(fitem)\"\r\n                {{ item.stockItemId.uqc }}\r\n              </span> -->\r\n            <span flex=\"9\">\r\n              {{ item.unit }}\r\n            </span>\r\n            <span flex=\"8\">\r\n              <md-input-container\r\n                style=\"width:4em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.discount\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <!-- <span flex=\"10\">\r\n                              {{item.discountAmount}}\r\n                          </span> -->\r\n\r\n            <span flex=\"9\">\r\n              {{ item.itemsubtotalBeforeTax }}\r\n            </span>\r\n            <span flex=\"9\">\r\n              {{ item.taxAmount }}\r\n            </span>\r\n            <span flex=\"9\">\r\n              <md-input-container\r\n                style=\"width:0em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.cessPercent\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"9\">{{ item.totalAfterTax }}</span>\r\n            <span flex=\"0\" style=\"cursor: pointer;text-align:right;\">\r\n              <md-icon\r\n                color=\"accent\"\r\n                (click)=\"removeItem(index)\"\r\n                *ngIf=\"sales.productItems.length > 1\"\r\n                >delete</md-icon\r\n              >\r\n            </span>\r\n          </md-list-item>\r\n        </ng-template>\r\n      </md-list>\r\n\r\n      <div\r\n        layout=\"row\"\r\n        layout-align=\"space-between start\"\r\n        class=\"invoice-form-grand-tot\"\r\n      >\r\n        <div flex=\"30\">\r\n          <div layout=\"column\"></div>\r\n        </div>\r\n        <div flex-offset=\"55\">\r\n          <div layout=\"column\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              layout=\"row\"\r\n              layout-align=\"space-between end\"\r\n              style=\"width: 200px; margin-bottom: 16px;\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"50\">Sub Total</span>\r\n              <b flex=\"50\"> {{ productSubTotal | amount }}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/customer-product-table/customer-product-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/customer-product-table/customer-product-table.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProductTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerProductTableComponent = (function () {
    function CustomerProductTableComponent(appService, restService) {
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
        this.getStockItemList(this.stockItemList);
    }
    CustomerProductTableComponent.prototype.getStockItemList = function (stockItemList) {
        this.stockItemList = stockItemList;
        console.log(this.stockItemList);
    };
    CustomerProductTableComponent.prototype.ngOnInit = function () {
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
    CustomerProductTableComponent.prototype.selectLineItem = function (item, index) {
        if (this.itemSelected !== item) {
            this.itemSelected = item;
            // this.quantity(item);
        }
        //this.selectedProductEmitter.emit(item);
    };
    CustomerProductTableComponent.prototype.selectStockItem = function (item, eleIndex) {
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
    CustomerProductTableComponent.prototype.selectItemFromDrop = function (ele) {
        ele.isselect = true;
    };
    CustomerProductTableComponent.prototype.itemValueChange = function (item, field) {
        this.itemCalculate(item);
        this.quantity(item);
    };
    CustomerProductTableComponent.prototype.quantity = function (item) {
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
    CustomerProductTableComponent.prototype.itemCalculate = function (item) {
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
    CustomerProductTableComponent.prototype.subTotalCalc = function () {
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
    CustomerProductTableComponent.prototype.removeItem = function (index) {
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
    CustomerProductTableComponent.prototype.onBarcodeScan = function (event) {
        alert("Scan Complete: Barcode is " + event.target.value);
    };
    CustomerProductTableComponent.prototype.addItem = function () {
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
    CustomerProductTableComponent.prototype.loadStockItems = function () {
        var _this = this;
        this.restService
            .getStockItems({ id: this.appService.getBranch().id })
            .subscribe(function (results) {
            _this.stockItemList = results;
        });
    };
    CustomerProductTableComponent.prototype.filterStockItems = function (val) {
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
    return CustomerProductTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomerProductTableComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CustomerProductTableComponent.prototype, "isCgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */]) === "function" && _a || Object)
], CustomerProductTableComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CustomerProductTableComponent.prototype, "isIgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], CustomerProductTableComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomerProductTableComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], CustomerProductTableComponent.prototype, "addItemChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _d || Object)
], CustomerProductTableComponent.prototype, "gstChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], CustomerProductTableComponent.prototype, "productSubTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], CustomerProductTableComponent.prototype, "productTaxTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], CustomerProductTableComponent.prototype, "isSubmittable", void 0);
CustomerProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-customer-product-table",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/components/customer-product-table/customer-product-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/components/customer-product-table/customer-product-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */]) === "function" && _j || Object])
], CustomerProductTableComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=customer-product-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/products-service-toggle/products-service-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<aside style=\"max-width: 98%;\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n    <div\r\n      fxLayout=\"row wrap\"\r\n      fxLayoutAlign=\"space-evenly center\"\r\n      class=\"padding-side\"\r\n      style=\"width: 100%; \"\r\n    >\r\n      <div flex=\"25\">\r\n        <span>Product</span>\r\n        <md-slide-toggle\r\n          color=\"primary\"\r\n          [(ngModel)]=\"sales.isProduct\"\r\n          (change)=\"changeProduct(false)\"\r\n          class=\"padding-side\"\r\n          [checked]=\"true\"\r\n        ></md-slide-toggle>\r\n      </div>\r\n      <div flex=\"25\">\r\n        <span>Service</span>\r\n        <md-slide-toggle\r\n          color=\"primary\"\r\n          [(ngModel)]=\"sales.isService\"\r\n          (change)=\"changeService(false)\"\r\n          class=\"padding-side\"\r\n        ></md-slide-toggle>\r\n      </div>\r\n\r\n      <div flex=\"25\">\r\n        <span>GST</span>\r\n        <md-slide-toggle\r\n          color=\"accent\"\r\n          [checked]=\"sales.isCgst\"\r\n          class=\"padding-side\"\r\n          disabled\r\n        ></md-slide-toggle>\r\n      </div>\r\n      <div flex=\"25\">\r\n        <span>IGST</span>\r\n        <md-slide-toggle\r\n          color=\"accent\"\r\n          [checked]=\"sales.isIgst\"\r\n          class=\"padding-side\"\r\n          disabled\r\n        ></md-slide-toggle>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" style=\"margin-bottom: 1em;\">\r\n      <button\r\n        md-raised-button\r\n        (click)=\"clear()\"\r\n        color=\"accent\"\r\n        flex=\"10\"\r\n        style=\"float: right;margin-right:5px;\"\r\n      >\r\n        Clear\r\n      </button>\r\n    </div>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/products-service-toggle/products-service-toggle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/products-service-toggle/products-service-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_entities_address_entity__ = __webpack_require__("../../../../../src/app/entities/address.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_entities_customerpayment_entity__ = __webpack_require__("../../../../../src/app/entities/customerpayment.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_entities_customertax_entity__ = __webpack_require__("../../../../../src/app/entities/customertax.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsServiceToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsServiceToggleComponent = (function () {
    function ProductsServiceToggleComponent(restService, appService) {
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
    ProductsServiceToggleComponent.prototype.clear = function () {
        this.clearEmitter.emit();
    };
    ProductsServiceToggleComponent.prototype.add = function () {
        this.addItemEmitter.emit();
    };
    ProductsServiceToggleComponent.prototype.ngOnInit = function () {
        this.sales.isProduct = true;
        this.sales.isService = false;
        //   this.changeProduct(true);
        // this.changeService(true);
    };
    ProductsServiceToggleComponent.prototype.changeProduct = function (item) {
        this.outputProductToggle.emit(item);
        this.sales;
    };
    ProductsServiceToggleComponent.prototype.changeService = function (item) {
        this.outputServiceToggle.emit(item);
        this.sales;
    };
    ProductsServiceToggleComponent.prototype.addProduct = function (item) {
        console.log("toggle add product");
        this.outputProductToggle.emit(item);
    };
    ProductsServiceToggleComponent.prototype.addService = function (item) {
        this.outputServiceToggle.emit(item);
    };
    ProductsServiceToggleComponent.prototype.save = function () {
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
    ProductsServiceToggleComponent.prototype.valid = function () {
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
    ProductsServiceToggleComponent.prototype.billing = function () {
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
    ProductsServiceToggleComponent.prototype.salesData = function () {
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
    return ProductsServiceToggleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductsServiceToggleComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], ProductsServiceToggleComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProductsServiceToggleComponent.prototype, "showAddress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ProductsServiceToggleComponent.prototype, "outputProductToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ProductsServiceToggleComponent.prototype, "outputServiceToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ProductsServiceToggleComponent.prototype, "addProductEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], ProductsServiceToggleComponent.prototype, "addServiceEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], ProductsServiceToggleComponent.prototype, "changeGstEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], ProductsServiceToggleComponent.prototype, "clearEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], ProductsServiceToggleComponent.prototype, "addItemEmitter", void 0);
ProductsServiceToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-products-service-toggle",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/components/products-service-toggle/products-service-toggle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/components/products-service-toggle/products-service-toggle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_common_rest_service__["a" /* RestService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_service_app_service__["a" /* AppService */]) === "function" && _k || Object])
], ProductsServiceToggleComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=products-service-toggle.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/search-customer-goods-return/customer-goods-return.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"md-select col-xs-6 padding-side\"> -->\r\n    <md-input-container class=\"col-xs-6 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"Sale Invoice Number\"\r\n        style=\"text-transform: capitalize\"\r\n        [(ngModel)]=\"invoiceNo\"\r\n        (focus)=\"filterPhones(null)\"\r\n        (keyup)=\"filterPhones($event.target.value)\"\r\n        [mdAutocomplete]=\"autoMobile\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      />\r\n      <md-autocomplete #autoMobile=\"mdAutocomplete\">\r\n        <md-option\r\n          *ngFor=\"let option of filteredPhones\"\r\n          value=\"{{ option.invoiceNumber }}\"\r\n          (click)=\"selectedInvoice(option)\"\r\n        >\r\n          {{ option.invoiceNumber }}\r\n        </md-option>\r\n      </md-autocomplete>\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-6 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"GST Number\"\r\n        [(ngModel)]=\"customerGst\"\r\n        required\r\n      />\r\n    </md-input-container>\r\n    <!-- <md-select placeholder=\"Sale Invoice Number\">\r\n        <md-option> </md-option>\r\n      </md-select>\r\n      <md-hint> </md-hint>\r\n    </div>\r\n    <md-input-container class=\"col-xs-6 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"GST Number\"\r\n        [readOnly]=\"isEditable == 'false'\"\r\n      /> -->\r\n    <!-- </md-input-container> -->\r\n    <!-- </div> -->\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"row\">\r\n      <!-- <div class=\"md-select col-xs-6 padding-side\">\r\n        <md-select placeholder=\"Customer Name\">\r\n          <md-option> </md-option>\r\n        </md-select>\r\n        <md-hint> </md-hint>\r\n      </div> -->\r\n      <md-input-container class=\"col-xs-6 padding-side\">\r\n        <input\r\n          mdInput\r\n          placeholder=\"Customer Name\"\r\n          [(ngModel)]=\"customerName\"\r\n          required\r\n        />\r\n      </md-input-container>\r\n      <!-- <md-input-container class=\"col-xs-6 padding-side\">\r\n        <input\r\n          mdInput\r\n          [mdDatepicker]=\"saleInvoiceDt\"\r\n          placeholder=\"Sale Invoice Date\"\r\n        />\r\n        <button mdSuffix [mdDatepickerToggle]=\"saleInvoiceDt\"></button>\r\n      </md-input-container> -->\r\n      <md-input-container class=\"col-xs-6 padding-side\">\r\n        <input\r\n          mdInput\r\n          [mdDatepicker]=\"saleInvoiceDt\"\r\n          placeholder=\"Sale Invoice Date\"\r\n          [(ngModel)]=\"invoiceDate\"\r\n          (ngModelChange)=\"callDataSource()\"\r\n        />\r\n        <button mdSuffix [mdDatepickerToggle]=\"saleInvoiceDt\"></button>\r\n      </md-input-container>\r\n      <md-datepicker #saleInvoiceDt></md-datepicker>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"md-select col-xs-6 padding-side\">\r\n    <md-select placeholder=\"Return/Exchange\">\r\n      <md-option> </md-option>\r\n    </md-select>\r\n    <md-hint> </md-hint>\r\n  </div> -->\r\n  <div class=\"md-select col-xs-6 padding-side\">\r\n    <md-select\r\n      placeholder=\"Return/Exchange\"\r\n      [(ngModel)]=\"returnType\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    >\r\n      <md-option *ngFor=\"let item of customerType\" [value]=\"item\">\r\n        {{ item }}\r\n      </md-option>\r\n    </md-select>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/search-customer-goods-return/customer-goods-return.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/search-customer-goods-return/customer-goods-return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__ = __webpack_require__("../../../../../src/app/entities/customer.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerGoodsReturnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerGoodsReturnComponent = (function () {
    function CustomerGoodsReturnComponent(appService, dialog, restService) {
        this.appService = appService;
        this.dialog = dialog;
        this.restService = restService;
        this.returnType = [];
        this.customerType = ["Return", "Exchange"];
        this.customers = [];
        this.filteredPhones = [];
        this.outputEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.invoiceEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.salesInvoice = [];
        this.stateList = [];
        this.stockItemList = [];
        this.filteredStates = [];
    }
    CustomerGoodsReturnComponent.prototype.ngOnChanges = function (changes) {
        //this.temp = [ ...this.dataRows ];
        // this.sales = changes['sales'].currentValue
        // console.log(this.sales)
    };
    CustomerGoodsReturnComponent.prototype.ngOnInit = function () {
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            this.invoiceNo = this.sales.invoiceNumber;
            this.customerGst = this.sales.customer.gstNo;
            this.customerName = this.sales.customer.firstName;
        }
        else {
            console.log("no selectedItem available");
        }
        this.stateLoad();
    };
    CustomerGoodsReturnComponent.prototype.changeProduct = function (item) {
        // this.outputProductToggle.emit(item);
        this.sales;
    };
    // filterPhones(val: string) {
    //   this.filteredPhones =
    //     val && val != ""
    //       ? this.customers.filter(
    //           s =>
    //             s.businessName.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
    //             s.mobile.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
    //             s.gstNo.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
    //             s.firstName.toLowerCase().indexOf(val.toLowerCase()) >= 0
    //         )
    //       : this.customers;
    // }
    CustomerGoodsReturnComponent.prototype.filterPhones = function (val) {
        this.filteredPhones =
            val && val != ""
                ? this.salesInvoice.filter(function (s) { return s.invoiceNumber.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.customers;
    };
    CustomerGoodsReturnComponent.prototype.selectedInvoice = function (item) {
        console.log(item);
        this.stockItemList = item.items.filter(function (item) {
            item.stockItemId != null;
        });
        console.log("stock Item list for the selected invoice ", item.invoiceNumber, this.stockItemList);
        if (item && typeof item == "object") {
            this.sales = item;
            this.customerGst = item.customer.gstNo;
            this.customerName = item.customer.firstName;
            this.invoiceDate = item.invoiceDate;
            // this.invoiceEmitter.emit(this.sales);
            // console.log(this.invoiceEmitter.emit(this.sales));
            this.onSelectCustomer(item.customer);
        }
        else {
            this.inputData.customer = new __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]();
            this.customerMobile = item;
            this.customerGst = item.customer.gstNo;
            this.invoiceDate = item.invoiceDate;
            this.customerName = item.customer.firstName;
            // this.invoiceEmitter.emit(item);
            // console.log(this.invoiceEmitter.emit(this.sales));
        }
    };
    CustomerGoodsReturnComponent.prototype.onSelectCustomer = function (customer) {
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
    CustomerGoodsReturnComponent.prototype.stateLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.stateList = results["stateList"];
        });
    };
    CustomerGoodsReturnComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s.key.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    return CustomerGoodsReturnComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], CustomerGoodsReturnComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomerGoodsReturnComponent.prototype, "customers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomerGoodsReturnComponent.prototype, "filteredPhones", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], CustomerGoodsReturnComponent.prototype, "outputEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], CustomerGoodsReturnComponent.prototype, "invoiceEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomerGoodsReturnComponent.prototype, "salesInvoice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */]) === "function" && _d || Object)
], CustomerGoodsReturnComponent.prototype, "inputData", void 0);
CustomerGoodsReturnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-customer-goods-return-search",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/components/search-customer-goods-return/customer-goods-return.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/components/search-customer-goods-return/customer-goods-return.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */]) === "function" && _g || Object])
], CustomerGoodsReturnComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=customer-goods-return.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/search-suppliers-goods-return/suppliers-goods-return.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"md-select col-xs-6 padding-side\"> -->\r\n    <md-input-container class=\"col-xs-6 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"Purchase Invoice Number\"\r\n        style=\"text-transform: capitalize\"\r\n        [(ngModel)]=\"invoiceNo\"\r\n        (focus)=\"filterPhones(null)\"\r\n        (keyup)=\"filterPhones($event.target.value)\"\r\n        [mdAutocomplete]=\"autoMobile\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      />\r\n      <md-autocomplete #autoMobile=\"mdAutocomplete\">\r\n        <md-option\r\n          *ngFor=\"let option of filteredPhones\"\r\n          value=\"{{ option.invoiceNumber }}\"\r\n          (click)=\"selectedInvoice(option)\"\r\n        >\r\n          {{ option.invoiceNumber }}\r\n        </md-option>\r\n      </md-autocomplete>\r\n    </md-input-container>\r\n    <md-input-container class=\"col-xs-6 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"GST Number\"\r\n        [(ngModel)]=\"customerGst\"\r\n        required\r\n      />\r\n    </md-input-container>\r\n    <!-- <md-select placeholder=\"Sale Invoice Number\">\r\n        <md-option> </md-option>\r\n      </md-select>\r\n      <md-hint> </md-hint>\r\n    </div>\r\n    <md-input-container class=\"col-xs-6 padding-side\">\r\n      <input\r\n        mdInput\r\n        placeholder=\"GST Number\"\r\n        [readOnly]=\"isEditable == 'false'\"\r\n      /> -->\r\n    <!-- </md-input-container> -->\r\n    <!-- </div> -->\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"row\">\r\n      <!-- <div class=\"md-select col-xs-6 padding-side\">\r\n        <md-select placeholder=\"Customer Name\">\r\n          <md-option> </md-option>\r\n        </md-select>\r\n        <md-hint> </md-hint>\r\n      </div> -->\r\n      <md-input-container class=\"col-xs-6 padding-side\">\r\n        <input\r\n          mdInput\r\n          placeholder=\"Supplier Name\"\r\n          [(ngModel)]=\"customerName\"\r\n          required\r\n        />\r\n      </md-input-container>\r\n      <!-- <md-input-container class=\"col-xs-6 padding-side\">\r\n        <input\r\n          mdInput\r\n          [mdDatepicker]=\"saleInvoiceDt\"\r\n          placeholder=\"Sale Invoice Date\"\r\n        />\r\n        <button mdSuffix [mdDatepickerToggle]=\"saleInvoiceDt\"></button>\r\n      </md-input-container> -->\r\n      <md-input-container class=\"col-xs-6 padding-side\">\r\n        <input\r\n          mdInput\r\n          [mdDatepicker]=\"saleInvoiceDt\"\r\n          placeholder=\"Purchase Invoice Date\"\r\n          [(ngModel)]=\"invoiceDate\"\r\n          (ngModelChange)=\"callDataSource()\"\r\n        />\r\n        <button mdSuffix [mdDatepickerToggle]=\"saleInvoiceDt\"></button>\r\n      </md-input-container>\r\n      <md-datepicker #saleInvoiceDt></md-datepicker>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"md-select col-xs-6 padding-side\">\r\n    <md-select placeholder=\"Return/Exchange\">\r\n      <md-option> </md-option>\r\n    </md-select>\r\n    <md-hint> </md-hint>\r\n  </div> -->\r\n  <div class=\"md-select col-xs-6 padding-side\">\r\n    <md-select\r\n      placeholder=\"Return/Exchange\"\r\n      [(ngModel)]=\"returnType\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    >\r\n      <md-option *ngFor=\"let item of customerType\" [value]=\"item\">\r\n        {{ item }}\r\n      </md-option>\r\n    </md-select>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/search-suppliers-goods-return/suppliers-goods-return.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/search-suppliers-goods-return/suppliers-goods-return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__ = __webpack_require__("../../../../../src/app/entities/customer.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__ = __webpack_require__("../../../../../src/app/entities/sales.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersGoodsReturnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SuppliersGoodsReturnComponent = (function () {
    function SuppliersGoodsReturnComponent(appService, dialog, restService) {
        this.appService = appService;
        this.dialog = dialog;
        this.restService = restService;
        this.returnType = [];
        this.customerType = ["Return", "Exchange"];
        this.customers = [];
        this.filteredPhones = [];
        this.outputEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.invoiceEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.salesInvoice = [];
        this.stateList = [];
        this.stockItemList = [];
        this.filteredStates = [];
    }
    SuppliersGoodsReturnComponent.prototype.ngOnChanges = function (changes) {
        //this.temp = [ ...this.dataRows ];
        // this.sales = changes['sales'].currentValue
        // console.log(this.sales)
    };
    SuppliersGoodsReturnComponent.prototype.ngOnInit = function () {
        var isEditable = this.appService.getParam("isEditable");
        if (isEditable != undefined) {
            this.invoiceNo = this.sales.invoiceNumber;
            this.customerGst = this.sales.customer.gstNo;
            this.customerName = this.sales.customer.firstName;
        }
        else {
            console.log("no selectedItem available");
        }
        this.stateLoad();
    };
    SuppliersGoodsReturnComponent.prototype.changeProduct = function (item) {
        // this.outputProductToggle.emit(item);
        this.sales;
    };
    // filterPhones(val: string) {
    //   this.filteredPhones =
    //     val && val != ""
    //       ? this.customers.filter(
    //           s =>
    //             s.businessName.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
    //             s.mobile.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
    //             s.gstNo.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
    //             s.firstName.toLowerCase().indexOf(val.toLowerCase()) >= 0
    //         )
    //       : this.customers;
    // }
    SuppliersGoodsReturnComponent.prototype.filterPhones = function (val) {
        this.filteredPhones =
            val && val != ""
                ? this.salesInvoice.filter(function (s) { return s.invoiceNumber.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.customers;
    };
    SuppliersGoodsReturnComponent.prototype.selectedInvoice = function (item) {
        console.log(item);
        this.stockItemList = item.items.filter(function (item) {
            item.stockItemId != null;
        });
        console.log("stock Item list for the selected invoice ", item.invoiceNumber, this.stockItemList);
        if (item && typeof item == "object") {
            this.sales = item;
            this.customerGst = item.customer.gstNo;
            this.customerName = item.customer.firstName;
            this.invoiceDate = item.invoiceDate;
            // this.invoiceEmitter.emit(this.sales);
            // console.log(this.invoiceEmitter.emit(this.sales));
            this.onSelectCustomer(item.customer);
        }
        else {
            this.inputData.customer = new __WEBPACK_IMPORTED_MODULE_1__entities_customer_entity__["a" /* Customer */]();
            this.customerMobile = item;
            this.customerGst = item.customer.gstNo;
            this.invoiceDate = item.invoiceDate;
            this.customerName = item.customer.firstName;
            // this.invoiceEmitter.emit(item);
            // console.log(this.invoiceEmitter.emit(this.sales));
        }
    };
    SuppliersGoodsReturnComponent.prototype.onSelectCustomer = function (customer) {
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
    SuppliersGoodsReturnComponent.prototype.stateLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.stateList = results["stateList"];
        });
    };
    SuppliersGoodsReturnComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s.key.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    return SuppliersGoodsReturnComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */]) === "function" && _a || Object)
], SuppliersGoodsReturnComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SuppliersGoodsReturnComponent.prototype, "customers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SuppliersGoodsReturnComponent.prototype, "filteredPhones", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], SuppliersGoodsReturnComponent.prototype, "outputEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], SuppliersGoodsReturnComponent.prototype, "invoiceEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SuppliersGoodsReturnComponent.prototype, "salesInvoice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_entities_sales_entity__["a" /* Sales */]) === "function" && _d || Object)
], SuppliersGoodsReturnComponent.prototype, "inputData", void 0);
SuppliersGoodsReturnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-suppliers-goods-return",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/components/search-suppliers-goods-return/suppliers-goods-return.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/components/search-suppliers-goods-return/suppliers-goods-return.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */]) === "function" && _g || Object])
], SuppliersGoodsReturnComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=suppliers-goods-return.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/supplier-product-table/supplier-product-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-side\">\r\n  <md-card class=\"invoice-form-table\">\r\n    <div class=\"invoice-form-th\">\r\n      <md-list>\r\n        <md-list-item layout=\"row\" layout-wrap class=\"invoice-form-list-item\">\r\n          <span flex=\"4\"> S.no</span>\r\n          <span flex=\"30\">Product</span>\r\n          <span flex=\"8\">Qty</span>\r\n          <span flex=\"9\">Rate</span>\r\n          <span flex=\"8\">Discount</span>\r\n          <span flex=\"9\">Subtotal</span>\r\n          <span flex=\"9\">Tax Amount</span>\r\n          <span flex=\"9\">Cess</span>\r\n          <span flex=\"9\">Total</span>\r\n          <span flex=\"0\">&nbsp;</span>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n    <br />\r\n    <div\r\n      class=\"invoice-form-tb\"\r\n      [style.overflow]=\"'auto'\"\r\n      [style.height.px]=\"'300'\"\r\n    >\r\n      <md-list>\r\n        <ng-template\r\n          let-index=\"index\"\r\n          let-item\r\n          let-last=\"last\"\r\n          ngFor\r\n          [ngForOf]=\"sales.productItems\"\r\n        >\r\n          <md-list-item\r\n            layout=\"row\"\r\n            layout-wrap\r\n            (click)=\"selectLineItem(item, index)\"\r\n            *ngIf=\"item.stockItemId\"\r\n          >\r\n            <span flex=\"4\"> {{ index + 1 }}</span>\r\n            <span flex=\"30\">\r\n              <md-input-container style=\"margin-top: -9px !important;\">\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"Choose Stock Item\"\r\n                  [(ngModel)]=\"item.stockItemId.productName\"\r\n                  (focus)=\"filterStockItems($event.target.values)\"\r\n                  (keyup)=\"filterStockItems($event.target.value)\"\r\n                  [mdAutocomplete]=\"autoStockItems\"\r\n                  [readOnly]=\"isEditable == 'false'\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                />\r\n\r\n                <md-autocomplete #autoStockItems=\"mdAutocomplete\">\r\n                  <md-option\r\n                    *ngFor=\"\r\n                      let fitem of filteredStockItems;\r\n                      let selIndex = index\r\n                    \"\r\n                    (click)=\"selectStockItem(fitem, selIndex)\"\r\n                  >\r\n                    {{ fitem.productName }} -\r\n                    {{ fitem.stockItemPrice.stockathand }}\r\n                  </md-option>\r\n                </md-autocomplete>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"8\">\r\n              <md-input-container\r\n                style=\"width:5em;  margin-top: -4px !important; padding-left: 5px\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  placeholder=\"quantity\"\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"item.quantity\"\r\n                  (ngModelChange)=\"itemValueChange(item)\"\r\n                  [disabled]=\"!item.stockItemId.productName\"\r\n                />\r\n              </md-input-container>\r\n              <span style=\"color: red;font-size:10px\" *ngIf=\"item.greaterStock\">\r\n                no Stock\r\n              </span>\r\n            </span>\r\n            <!-- <span flex=\"5\"> (onfocusout)=\"selectItemFromDrop(fitem)\"\r\n                {{ item.stockItemId.uqc }}\r\n              </span> -->\r\n            <span flex=\"9\">\r\n              {{ item.unit }}\r\n            </span>\r\n            <span flex=\"8\">\r\n              <md-input-container\r\n                style=\"width:4em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.discount\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <!-- <span flex=\"10\">\r\n                              {{item.discountAmount}}\r\n                          </span> -->\r\n\r\n            <span flex=\"9\">\r\n              {{ item.itemsubtotalBeforeTax }}\r\n            </span>\r\n            <span flex=\"9\">\r\n              {{ item.taxAmount }}\r\n            </span>\r\n            <span flex=\"9\">\r\n              <md-input-container\r\n                style=\"width:0em; margin-top: -4px !important;\"\r\n              >\r\n                <input\r\n                  mdInput\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"item.cessPercent\"\r\n                  (change)=\"itemValueChange(item)\"\r\n                />\r\n                <span mdSuffix>%</span>\r\n              </md-input-container>\r\n            </span>\r\n            <span flex=\"9\">{{ item.totalAfterTax }}</span>\r\n            <span flex=\"0\" style=\"cursor: pointer;text-align:right;\">\r\n              <md-icon\r\n                color=\"accent\"\r\n                (click)=\"removeItem(index)\"\r\n                *ngIf=\"sales.productItems.length > 1\"\r\n                >delete</md-icon\r\n              >\r\n            </span>\r\n          </md-list-item>\r\n        </ng-template>\r\n      </md-list>\r\n\r\n      <div\r\n        layout=\"row\"\r\n        layout-align=\"space-between start\"\r\n        class=\"invoice-form-grand-tot\"\r\n      >\r\n        <div flex=\"30\">\r\n          <div layout=\"column\"></div>\r\n        </div>\r\n        <div flex-offset=\"55\">\r\n          <div layout=\"column\">\r\n            <div\r\n              class=\"font-14-px\"\r\n              layout=\"row\"\r\n              layout-align=\"space-between end\"\r\n              style=\"width: 200px; margin-bottom: 16px;\"\r\n            >\r\n              <span class=\"color-dark-gray\" flex=\"50\">Sub Total</span>\r\n              <b flex=\"50\"> {{ productSubTotal | amount }}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/supplier-product-table/supplier-product-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/components/supplier-product-table/supplier-product-table.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierProductTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SupplierProductTableComponent = (function () {
    function SupplierProductTableComponent(appService, restService) {
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
        this.getStockItemList(this.stockItemList);
    }
    SupplierProductTableComponent.prototype.getStockItemList = function (stockItemList) {
        this.stockItemList = stockItemList;
        console.log(this.stockItemList);
    };
    SupplierProductTableComponent.prototype.ngOnInit = function () {
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
    SupplierProductTableComponent.prototype.selectLineItem = function (item, index) {
        if (this.itemSelected !== item) {
            this.itemSelected = item;
            // this.quantity(item);
        }
        //this.selectedProductEmitter.emit(item);
    };
    SupplierProductTableComponent.prototype.selectStockItem = function (item, eleIndex) {
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
    SupplierProductTableComponent.prototype.selectItemFromDrop = function (ele) {
        ele.isselect = true;
    };
    SupplierProductTableComponent.prototype.itemValueChange = function (item, field) {
        this.itemCalculate(item);
        this.quantity(item);
    };
    SupplierProductTableComponent.prototype.quantity = function (item) {
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
    SupplierProductTableComponent.prototype.itemCalculate = function (item) {
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
    SupplierProductTableComponent.prototype.subTotalCalc = function () {
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
    SupplierProductTableComponent.prototype.removeItem = function (index) {
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
    SupplierProductTableComponent.prototype.onBarcodeScan = function (event) {
        alert("Scan Complete: Barcode is " + event.target.value);
    };
    SupplierProductTableComponent.prototype.addItem = function () {
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
    SupplierProductTableComponent.prototype.loadStockItems = function () {
        var _this = this;
        this.restService
            .getStockItems({ id: this.appService.getBranch().id })
            .subscribe(function (results) {
            _this.stockItemList = results;
        });
    };
    SupplierProductTableComponent.prototype.filterStockItems = function (val) {
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
    return SupplierProductTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SupplierProductTableComponent.prototype, "myForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SupplierProductTableComponent.prototype, "isCgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_item_entity__["a" /* Item */]) === "function" && _a || Object)
], SupplierProductTableComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SupplierProductTableComponent.prototype, "isIgst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_sales_entity__["a" /* Sales */]) === "function" && _b || Object)
], SupplierProductTableComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SupplierProductTableComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], SupplierProductTableComponent.prototype, "addItemChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _d || Object)
], SupplierProductTableComponent.prototype, "gstChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], SupplierProductTableComponent.prototype, "productSubTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], SupplierProductTableComponent.prototype, "productTaxTotalEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], SupplierProductTableComponent.prototype, "isSubmittable", void 0);
SupplierProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-supplier-product-table",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/components/supplier-product-table/supplier-product-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/components/supplier-product-table/supplier-product-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_service_app_service__["a" /* AppService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_common_rest_service__["a" /* RestService */]) === "function" && _j || Object])
], SupplierProductTableComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=supplier-product-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" fxLayoutAlign=\"center center\">\r\n  <h2 style=\"margin-bottom:10px;\">\r\n    Goods Returned - By Customer\r\n  </h2>\r\n</div>\r\n<div class=\"padding-side\">\r\n  <md-card style=\"margin-top: 10px\">\r\n    <app-customer-goods-return-search\r\n      [(customers)]=\"customers\"\r\n      [(sales)]=\"sales\"\r\n      [(salesInvoice)]=\"sales\"\r\n      [(inputData)]=\"sales\"\r\n      (stockItemListEmitter)=\"getStockItemList($event)\"\r\n      style=\"width:100%;\"\r\n    ></app-customer-goods-return-search>\r\n\r\n    <div style=\"margin-top: 20px\">\r\n      <app-products-service-toggle\r\n        [(sales)]=\"sales\"\r\n        (outputProductToggle)=\"changeProductService($event)\"\r\n        (outputServiceToggle)=\"changeProductService($event)\"\r\n        (addProductEmitter)=\"addProduct($event)\"\r\n        (addServiceEmitter)=\"addService($event)\"\r\n        (changeGstEmitter)=\"gstChangeCheck($event)\"\r\n        (clearEmitter)=\"clear()\"\r\n        (addItemEmitter)=\"addItem()\"\r\n      >\r\n      </app-products-service-toggle>\r\n      <app-customer-product-table\r\n        *ngIf=\"sales.isProduct\"\r\n        [(myForm)]=\"myForm\"\r\n        [(sales)]=\"sales\"\r\n        [(products)]=\"products\"\r\n        (filterProductEmitter)=\"($event)\"\r\n        [addItemChange]=\"addProductItem\"\r\n        (outputEmitter)=\"changeGrandCalculate()\"\r\n        (productSubTotalEmitter)=\"getProductSubTotal($event)\"\r\n        (productTaxTotalEmitter)=\"getProductTaxTotal($event)\"\r\n        (isSubmittable)=\"getBillingEnabledStatus($event)\"\r\n        [gstChange]=\"gstChange\"\r\n      ></app-customer-product-table>\r\n    </div>\r\n  </md-card>\r\n  <div class=\"row\" style=\"padding: 1rem; margin-bottom: 7em;\">\r\n    <div class=\"col-xs-6 start-xs\">\r\n      <!-- <button md-raised-button color=\"primary\" (click)=\"printPriview()\">\r\n          Print or Preview\r\n        </button> -->\r\n    </div>\r\n    <div class=\"col-xs-6 end-xs\">\r\n      <span *ngIf=\"isSave\">\r\n        <button\r\n          *ngIf=\"!isEditable\"\r\n          md-raised-button\r\n          color=\"accent\"\r\n          (click)=\"saveInvoice()\"\r\n        >\r\n          Save\r\n        </button></span\r\n      >\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGoodsReturnedByCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CreateGoodsReturnedByCustomerComponent = (function () {
    function CreateGoodsReturnedByCustomerComponent(restService, appService, dialog) {
        this.restService = restService;
        this.appService = appService;
        this.dialog = dialog;
        // myForm: any = CustomerFormGroup.init();
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
        // this.retriveCustomer();
        this.retriveInvoice();
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
    CreateGoodsReturnedByCustomerComponent.prototype.ngOnChanges = function (changes) {
        //this.temp = [ ...this.dataRows ];
        this.sales = changes["sales"].currentValue;
        console.log(this.sales);
    };
    CreateGoodsReturnedByCustomerComponent.prototype.ngOnInit = function () {
        // let id = this..getParam("id");
        this.termsLoad();
        this.changeProductService(true);
        // this.addStockItem();
        var id = this.appService.getParam("id");
        this.isEditable = this.appService.getParam("isEditable");
        if (this.isEditable !== false) {
            // this.retriveCustomer();
            this.retriveInvoice();
            this.isEdit = true;
        }
        else {
            this.isEdit = false;
            this.isEditable = true;
        }
    };
    CreateGoodsReturnedByCustomerComponent.prototype.retrivesettings = function () { };
    // retriveCustomer() {
    //   this.restService.retriveCustomer().subscribe(result => {
    //     if (result) {
    //       this.customers = result;
    //       console.log(this.customers);
    //       this.customers.forEach(item => {
    //         item.gstRegNumber =
    //           item.gstRegNumber == "" ? "Not Registered" : item.gstRegNumber;
    //       });
    //     }
    //   });
    // }
    CreateGoodsReturnedByCustomerComponent.prototype.retriveInvoice = function () {
        var _this = this;
        this.restService.retriveInvoice().subscribe(function (result) {
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
    CreateGoodsReturnedByCustomerComponent.prototype.changeProductService = function (flipProduct) {
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
    CreateGoodsReturnedByCustomerComponent.prototype.changeGst = function (flipCgst) {
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
    CreateGoodsReturnedByCustomerComponent.prototype.addProduct = function () {
        console.log("add product");
        // setTimeout(() => {
        this.addProductItem.next();
        // }, 10);
    };
    CreateGoodsReturnedByCustomerComponent.prototype.addService = function () {
        var _this = this;
        console.log("add service");
        setTimeout(function () {
            _this.addServiceItem.next();
        }, 10);
    };
    CreateGoodsReturnedByCustomerComponent.prototype.gstChangeCheck = function () {
        console.log("gst change");
        this.gstChange.next();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.itemCalculate = function (item) {
        //this.commonItemCalculate(item);
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.getProductSubTotal = function (subTotal) {
        console.log("in add invoice getProductSubTotal() ", subTotal);
        this.productSubTotal = subTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.getProductTaxTotal = function (taxTotal) {
        console.log("in add invoice getProductTaxTotal() ", taxTotal);
        this.productTaxTotal = taxTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.getBillingEnabledStatus = function (status) {
        // this.submitEnableStatus == null
        //   ? this.submitEnableStatus.emit(false)
        //   : this.submitEnableStatus.emit(true);
        this.submitEnableStatus = status;
    };
    CreateGoodsReturnedByCustomerComponent.prototype.getServiceSubTotal = function (subTotal) {
        this.serviceSubTotal = subTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.getServiceTaxTotal = function (subTaxTotal) {
        this.serviceTaxTotal = subTaxTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.changeGrandCalculate = function ($event) {
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
    CreateGoodsReturnedByCustomerComponent.prototype.totalValid = function () {
        if (this.sales.paidAmount > this.sales.total) {
            console.log("paid is greater than sales amount");
            return false;
        }
        else {
            console.log("paid is NOT greater than sales amount");
            return true;
        }
    };
    CreateGoodsReturnedByCustomerComponent.prototype.valid = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.salesData = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.saveQuotation = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.saveInvoice = function () {
        var _this = this;
        this.sales.status = "DRAFTSAVE";
        this.salesData();
        console.log(this.sales.items);
        this.restService.saveInvoice(this.sales).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.appService.showMessage("Invoice generated successfully  ");
                _this.appService.navigate("admin/invoice-search", []);
            }
        });
        // if (this.totalValid() && this.valid()) {
        //   // this.restService.saveInvoice(this.sales).subscribe(result => {
        //   //   if (result) {
        //   //     this.appService.showMessage("Invoice generated successfully  ");
        //   //     this.appService.navigate("admin/invoice-search", []);
        //   //   }
        //   // });
        //   if (this.sales.paidAmount <= this.sales.subTotal) {
        //     this.sales.isCredit = true;
        //     console.log(this.sales.isCredit);
        //     this.restService.saveInvoice(this.sales).subscribe(result => {
        //       console.log(result);
        //       if (result) {
        //         this.appService.showMessage("Invoice generated successfully  ");
        //         this.appService.navigate("admin/invoice-search", []);
        //       }
        //     });
        //   } else if (
        //     this.sales.paidAmount == 0 &&
        //     this.sales.isToggleEnable == false
        //   ) {
        //     this.sales.isCredit = true;
        //     console.log(this.sales.isCredit);
        //     this.restService.saveInvoice(this.sales).subscribe(result => {
        //       console.log(result);
        //       if (result) {
        //         this.appService.showMessage("Invoice generated successfully  ");
        //         this.appService.navigate("admin/invoice-search", []);
        //       }
        //     });
        //   } else if ((this.sales.isToggleEnable = true)) {
        //     this.sales.isCredit = false;
        //     console.log(this.sales.isCredit);
        //     this.restService.saveInvoice(this.sales).subscribe(result => {
        //       console.log(result);
        //       if (result) {
        //         this.appService.showMessage("Invoice generated successfully  ");
        //         this.appService.navigate("admin/invoice-search", []);
        //       }
        //     });
        //   }
        // } else {
        //   this.appService.showMessage(
        //     "The Total Amount is greater than Paid Amount"
        //   );
        // }
    };
    CreateGoodsReturnedByCustomerComponent.prototype.billing = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.open = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.update = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.clear = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.addItem = function () {
        this.addProduct();
    };
    CreateGoodsReturnedByCustomerComponent.prototype.onAddressChange = function ($event) {
        if ($event.checked) {
            __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, false);
            this.showAddress = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, true);
            this.showAddress = true;
        }
    };
    CreateGoodsReturnedByCustomerComponent.prototype.isCreditChange = function ($event) {
        if ($event.checked) {
            this.amount = false;
            // this.sales.isCreditHide = false;
        }
        else {
            this.amount = true;
            // this.sales.isCreditHide = false;
        }
    };
    CreateGoodsReturnedByCustomerComponent.prototype.isQuotatioChange = function ($event) {
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
    CreateGoodsReturnedByCustomerComponent.prototype.termsLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.termsList = results["Terms"];
        });
    };
    CreateGoodsReturnedByCustomerComponent.prototype.printPriview = function () {
        this.restService.invoiceOpen(this.sales.id);
    };
    CreateGoodsReturnedByCustomerComponent.prototype.retriveServices = function () {
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
    CreateGoodsReturnedByCustomerComponent.prototype.retreiveInvoice = function (id) {
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
    return CreateGoodsReturnedByCustomerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CreateGoodsReturnedByCustomerComponent.prototype, "selectedItem", void 0);
CreateGoodsReturnedByCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-create-goods-returned-by-customer",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdDialog */]) === "function" && _c || Object])
], CreateGoodsReturnedByCustomerComponent);

var _a, _b, _c;
//# sourceMappingURL=create-goods-returned-by-customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" fxLayoutAlign=\"center center\">\r\n  <h2 style=\"margin-bottom:10px;\">\r\n    Goods Returned - By Suppliers\r\n  </h2>\r\n</div>\r\n<div class=\"padding-side\">\r\n  <md-card style=\"margin-top: 10px\">\r\n    <app-suppliers-goods-return\r\n      [(customers)]=\"customers\"\r\n      [(sales)]=\"sales\"\r\n      [(salesInvoice)]=\"sales\"\r\n      [(inputData)]=\"sales\"\r\n      (stockItemListEmitter)=\"getStockItemList($event)\"\r\n      style=\"width:100%;\"\r\n    ></app-suppliers-goods-return>\r\n\r\n    <div style=\"margin-top: 20px\">\r\n      <app-products-service-toggle\r\n        [(sales)]=\"sales\"\r\n        (outputProductToggle)=\"changeProductService($event)\"\r\n        (outputServiceToggle)=\"changeProductService($event)\"\r\n        (addProductEmitter)=\"addProduct($event)\"\r\n        (addServiceEmitter)=\"addService($event)\"\r\n        (changeGstEmitter)=\"gstChangeCheck($event)\"\r\n        (clearEmitter)=\"clear()\"\r\n        (addItemEmitter)=\"addItem()\"\r\n      >\r\n      </app-products-service-toggle>\r\n      <app-supplier-product-table\r\n        *ngIf=\"sales.isProduct\"\r\n        [(myForm)]=\"myForm\"\r\n        [(sales)]=\"sales\"\r\n        [(products)]=\"products\"\r\n        (filterProductEmitter)=\"($event)\"\r\n        [addItemChange]=\"addProductItem\"\r\n        (outputEmitter)=\"changeGrandCalculate()\"\r\n        (productSubTotalEmitter)=\"getProductSubTotal($event)\"\r\n        (productTaxTotalEmitter)=\"getProductTaxTotal($event)\"\r\n        (isSubmittable)=\"getBillingEnabledStatus($event)\"\r\n        [gstChange]=\"gstChange\"\r\n      ></app-supplier-product-table>\r\n    </div>\r\n  </md-card>\r\n  <div class=\"row\" style=\"padding: 1rem; margin-bottom: 7em;\">\r\n    <div class=\"col-xs-6 start-xs\">\r\n      <!-- <button md-raised-button color=\"primary\" (click)=\"printPriview()\">\r\n          Print or Preview\r\n        </button> -->\r\n    </div>\r\n    <div class=\"col-xs-6 end-xs\">\r\n      <span *ngIf=\"isSave\">\r\n        <button\r\n          *ngIf=\"!isEditable\"\r\n          md-raised-button\r\n          color=\"accent\"\r\n          (click)=\"saveInvoice()\"\r\n        >\r\n          Save\r\n        </button></span\r\n      >\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGoodsReturnedBySupplierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CreateGoodsReturnedBySupplierComponent = (function () {
    function CreateGoodsReturnedBySupplierComponent(restService, appService, dialog) {
        this.restService = restService;
        this.appService = appService;
        this.dialog = dialog;
        // myForm: any = CustomerFormGroup.init();
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
        // this.retriveCustomer();
        this.retriveInvoice();
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
    CreateGoodsReturnedBySupplierComponent.prototype.ngOnChanges = function (changes) {
        //this.temp = [ ...this.dataRows ];
        this.sales = changes["sales"].currentValue;
        console.log(this.sales);
    };
    CreateGoodsReturnedBySupplierComponent.prototype.ngOnInit = function () {
        // let id = this..getParam("id");
        this.termsLoad();
        this.changeProductService(true);
        // this.addStockItem();
        var id = this.appService.getParam("id");
        this.isEditable = this.appService.getParam("isEditable");
        if (this.isEditable !== false) {
            // this.retriveCustomer();
            this.retriveInvoice();
            this.isEdit = true;
        }
        else {
            this.isEdit = false;
            this.isEditable = true;
        }
    };
    CreateGoodsReturnedBySupplierComponent.prototype.retrivesettings = function () { };
    // retriveCustomer() {
    //   this.restService.retriveCustomer().subscribe(result => {
    //     if (result) {
    //       this.customers = result;
    //       console.log(this.customers);
    //       this.customers.forEach(item => {
    //         item.gstRegNumber =
    //           item.gstRegNumber == "" ? "Not Registered" : item.gstRegNumber;
    //       });
    //     }
    //   });
    // }
    CreateGoodsReturnedBySupplierComponent.prototype.retriveInvoice = function () {
        var _this = this;
        this.restService.retriveInvoice().subscribe(function (result) {
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
    CreateGoodsReturnedBySupplierComponent.prototype.changeProductService = function (flipProduct) {
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
    CreateGoodsReturnedBySupplierComponent.prototype.changeGst = function (flipCgst) {
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
    CreateGoodsReturnedBySupplierComponent.prototype.addProduct = function () {
        console.log("add product");
        // setTimeout(() => {
        this.addProductItem.next();
        // }, 10);
    };
    CreateGoodsReturnedBySupplierComponent.prototype.addService = function () {
        var _this = this;
        console.log("add service");
        setTimeout(function () {
            _this.addServiceItem.next();
        }, 10);
    };
    CreateGoodsReturnedBySupplierComponent.prototype.gstChangeCheck = function () {
        console.log("gst change");
        this.gstChange.next();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.itemCalculate = function (item) {
        //this.commonItemCalculate(item);
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.getProductSubTotal = function (subTotal) {
        console.log("in add invoice getProductSubTotal() ", subTotal);
        this.productSubTotal = subTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.getProductTaxTotal = function (taxTotal) {
        console.log("in add invoice getProductTaxTotal() ", taxTotal);
        this.productTaxTotal = taxTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.getBillingEnabledStatus = function (status) {
        // this.submitEnableStatus == null
        //   ? this.submitEnableStatus.emit(false)
        //   : this.submitEnableStatus.emit(true);
        this.submitEnableStatus = status;
    };
    CreateGoodsReturnedBySupplierComponent.prototype.getServiceSubTotal = function (subTotal) {
        this.serviceSubTotal = subTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.getServiceTaxTotal = function (subTaxTotal) {
        this.serviceTaxTotal = subTaxTotal;
        this.changeGrandCalculate();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.changeGrandCalculate = function ($event) {
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
    CreateGoodsReturnedBySupplierComponent.prototype.totalValid = function () {
        if (this.sales.paidAmount > this.sales.total) {
            console.log("paid is greater than sales amount");
            return false;
        }
        else {
            console.log("paid is NOT greater than sales amount");
            return true;
        }
    };
    CreateGoodsReturnedBySupplierComponent.prototype.valid = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.salesData = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.saveQuotation = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.saveInvoice = function () {
        var _this = this;
        this.sales.status = "DRAFTSAVE";
        this.salesData();
        console.log(this.sales.items);
        this.restService.saveInvoice(this.sales).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.appService.showMessage("Invoice generated successfully  ");
                _this.appService.navigate("admin/invoice-search", []);
            }
        });
        // if (this.totalValid() && this.valid()) {
        //   // this.restService.saveInvoice(this.sales).subscribe(result => {
        //   //   if (result) {
        //   //     this.appService.showMessage("Invoice generated successfully  ");
        //   //     this.appService.navigate("admin/invoice-search", []);
        //   //   }
        //   // });
        //   if (this.sales.paidAmount <= this.sales.subTotal) {
        //     this.sales.isCredit = true;
        //     console.log(this.sales.isCredit);
        //     this.restService.saveInvoice(this.sales).subscribe(result => {
        //       console.log(result);
        //       if (result) {
        //         this.appService.showMessage("Invoice generated successfully  ");
        //         this.appService.navigate("admin/invoice-search", []);
        //       }
        //     });
        //   } else if (
        //     this.sales.paidAmount == 0 &&
        //     this.sales.isToggleEnable == false
        //   ) {
        //     this.sales.isCredit = true;
        //     console.log(this.sales.isCredit);
        //     this.restService.saveInvoice(this.sales).subscribe(result => {
        //       console.log(result);
        //       if (result) {
        //         this.appService.showMessage("Invoice generated successfully  ");
        //         this.appService.navigate("admin/invoice-search", []);
        //       }
        //     });
        //   } else if ((this.sales.isToggleEnable = true)) {
        //     this.sales.isCredit = false;
        //     console.log(this.sales.isCredit);
        //     this.restService.saveInvoice(this.sales).subscribe(result => {
        //       console.log(result);
        //       if (result) {
        //         this.appService.showMessage("Invoice generated successfully  ");
        //         this.appService.navigate("admin/invoice-search", []);
        //       }
        //     });
        //   }
        // } else {
        //   this.appService.showMessage(
        //     "The Total Amount is greater than Paid Amount"
        //   );
        // }
    };
    CreateGoodsReturnedBySupplierComponent.prototype.billing = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.open = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.update = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.clear = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.addItem = function () {
        this.addProduct();
    };
    CreateGoodsReturnedBySupplierComponent.prototype.onAddressChange = function ($event) {
        if ($event.checked) {
            __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, false);
            this.showAddress = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__forms_invoice_form__["a" /* InvoiceFormGroup */].address(this.myForm, true);
            this.showAddress = true;
        }
    };
    CreateGoodsReturnedBySupplierComponent.prototype.isCreditChange = function ($event) {
        if ($event.checked) {
            this.amount = false;
            // this.sales.isCreditHide = false;
        }
        else {
            this.amount = true;
            // this.sales.isCreditHide = false;
        }
    };
    CreateGoodsReturnedBySupplierComponent.prototype.isQuotatioChange = function ($event) {
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
    CreateGoodsReturnedBySupplierComponent.prototype.termsLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.termsList = results["Terms"];
        });
    };
    CreateGoodsReturnedBySupplierComponent.prototype.printPriview = function () {
        this.restService.invoiceOpen(this.sales.id);
    };
    CreateGoodsReturnedBySupplierComponent.prototype.retriveServices = function () {
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
    CreateGoodsReturnedBySupplierComponent.prototype.retreiveInvoice = function (id) {
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
    return CreateGoodsReturnedBySupplierComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CreateGoodsReturnedBySupplierComponent.prototype, "selectedItem", void 0);
CreateGoodsReturnedBySupplierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-create-goods-returned-by-supplier",
        template: __webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdDialog */]) === "function" && _c || Object])
], CreateGoodsReturnedBySupplierComponent);

var _a, _b, _c;
//# sourceMappingURL=create-goods-returned-by-supplier.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/goods-returned-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_goods_returned_containers_create_goods_returned_by_supplier_create_goods_returned_by_supplier_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goods_returned_containers_create_goods_returned_by_customer_create_goods_returned_by_customer_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsReturnedRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "goodsreturnedbysupplier",
        component: __WEBPACK_IMPORTED_MODULE_2__modules_goods_returned_containers_create_goods_returned_by_supplier_create_goods_returned_by_supplier_component__["a" /* CreateGoodsReturnedBySupplierComponent */]
    },
    {
        path: "goodsreturnedbycustomer",
        component: __WEBPACK_IMPORTED_MODULE_3__goods_returned_containers_create_goods_returned_by_customer_create_goods_returned_by_customer_component__["a" /* CreateGoodsReturnedByCustomerComponent */]
    }
];
var GoodsReturnedRoutingModule = (function () {
    function GoodsReturnedRoutingModule() {
    }
    return GoodsReturnedRoutingModule;
}());
GoodsReturnedRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], GoodsReturnedRoutingModule);

//# sourceMappingURL=goods-returned-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/goods-returned/goods-returned.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_goods_returned_containers_create_goods_returned_by_supplier_create_goods_returned_by_supplier_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-supplier/create-goods-returned-by-supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goods_returned_containers_create_goods_returned_by_customer_create_goods_returned_by_customer_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/containers/create-goods-returned-by-customer/create-goods-returned-by-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goods_returned_routing_module__ = __webpack_require__("../../../../../src/app/modules/goods-returned/goods-returned-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_customer_goods_return_customer_goods_return_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/components/search-customer-goods-return/customer-goods-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_search_suppliers_goods_return_suppliers_goods_return_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/components/search-suppliers-goods-return/suppliers-goods-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_customer_product_table_customer_product_table_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/components/customer-product-table/customer-product-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_supplier_product_table_supplier_product_table_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/components/supplier-product-table/supplier-product-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_products_service_toggle_products_service_toggle_component__ = __webpack_require__("../../../../../src/app/modules/goods-returned/components/products-service-toggle/products-service-toggle.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsReturnedModule", function() { return GoodsReturnedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GoodsReturnedModule = (function () {
    function GoodsReturnedModule() {
    }
    return GoodsReturnedModule;
}());
GoodsReturnedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__goods_returned_routing_module__["a" /* GoodsReturnedRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modules_goods_returned_containers_create_goods_returned_by_supplier_create_goods_returned_by_supplier_component__["a" /* CreateGoodsReturnedBySupplierComponent */],
            __WEBPACK_IMPORTED_MODULE_3__goods_returned_containers_create_goods_returned_by_customer_create_goods_returned_by_customer_component__["a" /* CreateGoodsReturnedByCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_search_customer_goods_return_customer_goods_return_component__["a" /* CustomerGoodsReturnComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_search_suppliers_goods_return_suppliers_goods_return_component__["a" /* SuppliersGoodsReturnComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_customer_product_table_customer_product_table_component__["a" /* CustomerProductTableComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_supplier_product_table_supplier_product_table_component__["a" /* SupplierProductTableComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_products_service_toggle_products_service_toggle_component__["a" /* ProductsServiceToggleComponent */]
        ]
    })
], GoodsReturnedModule);

//# sourceMappingURL=goods-returned.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map