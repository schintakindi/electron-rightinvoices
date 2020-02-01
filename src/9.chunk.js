webpackJsonp([9],{

/***/ "../../../../../src/app/modules/dashboard/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" style=\"cursor: pointer;\">\r\n  <div\r\n    fxFlex.xs=\"100\"\r\n    fxFlex.sm=\"50\"\r\n    fxFlex.md=\"25\"\r\n    fxFlex.lg=\"25\"\r\n    fxFlex.xl=\"25\"\r\n    *ngFor=\"let item of accounting\"\r\n  >\r\n    <div\r\n      fxLayout=\"column\"\r\n      fxLayoutAlign=\"space-around center\"\r\n      class=\"box\"\r\n      (click)=\"onClick(item.route)\"\r\n    >\r\n      <!-- <img src={{item.imagepath}} style=\"width:100px;height:70%;\"> -->\r\n      <md-icon\r\n        svgIcon=\"{{ item.imagepath }}\"\r\n        style=\"width:100px;height:70%; fill: gray\"\r\n      ></md-icon>\r\n      <div\r\n        fxLayout=\"column\"\r\n        fxLayoutAlign=\"start center\"\r\n        style=\"width:100%;height:15%;\"\r\n      >\r\n        <div style=\"height:1px;width: 100%;background-color: #bebebe;\"></div>\r\n        <h2>{{ item.name }}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/components/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\n  width: auto;\n  height: 300px;\n  margin: 10px;\n  border-radius: 4px;\n  box-shadow: 0px 0px 6px 1px #cecece;\n  border: solid 1px #eeeeee;\n  background-color: #ffffff; }\n\n.box img {\n  width: 100%; }\n\n.box h2 {\n  font-size: 1em;\n  color: #575757;\n  text-align: center;\n  padding-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryComponent = (function () {
    function CategoryComponent(router) {
        this.router = router;
        this.accounting = [
            {
                id: 1,
                name: "Customers ",
                imagepath: "icon:customer",
                route: "/admin/custom-management"
            },
            // {
            //   id: 2,
            //   name: "Stock Items",
            //   imagepath: "icon:stockitems",
            //   route: "/admin/stockitem-management"
            // },
            // {
            //   id: 3,
            //   name: "Purchase Orders ",
            //   imagepath: "icon:purchaseorder",
            //   route: "/purchaseorder/add"
            // },
            // {
            //   id: 4,
            //   name: "Purchase Invoices",
            //   imagepath: "icon:purchaseinvoice",
            //   route: "/purchaseinvoice/search"
            // },
            // {
            //   id: 5,
            //   name: "Pricing",
            //   imagepath: "icon:pricing",
            //   route: "/pricing/add"
            // },
            {
                id: 5,
                name: "Invoice",
                imagepath: "icon:invoices",
                route: "/invoice/add"
            },
            {
                id: 6,
                name: "Expenses ",
                imagepath: "icon:expenses",
                route: "/admin/expense-management"
            },
            {
                id: 7,
                name: "Payments Received ",
                imagepath: "icon:payments",
                route: "/admin/payment"
            },
            {
                id: 8,
                name: "Suppliers",
                imagepath: "icon:suppliers",
                route: "/admin/supplier-management?isEditable=true"
            }
            // {
            //   id: 9,
            //   name: "Barcode Generation",
            //   imagepath: "icon:barcodegeneration",
            //   route: "/admin/barcode-generation"
            // },
            // {
            //   id: 8,
            //   name: "Reports",
            //   imagepath: "icon:reports",
            //   route: "/reports/reports"
            // }
            // {
            //   id: 2,
            //   name: "Inventory Management ",
            //   imagepath: "icon:inventory",
            //   route: "/admin/inventory-edit?isEditable=true"
            // },
            // {
            //   id: 3,
            //   name: "Quotations",
            //   imagepath: "icon:quotation",
            //   route: "/quotation/add?isEditable=true"
            // },
        ];
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent.prototype.onClick = function (route) {
        this.router.navigateByUrl(route);
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-category",
        template: __webpack_require__("../../../../../src/app/modules/dashboard/components/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/dashboard/components/category/category.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CategoryComponent);

var _a;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/container/dashboard/dashboard.container.html":
/***/ (function(module, exports) {

module.exports = "<app-category></app-category>"

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/container/dashboard/dashboard.container.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardContainer = (function () {
    function DashboardContainer() {
    }
    DashboardContainer.prototype.ngOnInit = function () { };
    DashboardContainer.prototype.dashboard = function () { };
    return DashboardContainer;
}());
DashboardContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__("../../../../../src/app/modules/dashboard/container/dashboard/dashboard.container.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardContainer);

//# sourceMappingURL=dashboard.container.js.map

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_dashboard_dashboard_container__ = __webpack_require__("../../../../../src/app/modules/dashboard/container/dashboard/dashboard.container.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_2__container_dashboard_dashboard_container__["a" /* DashboardContainer */] }];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_dashboard_dashboard_container__ = __webpack_require__("../../../../../src/app/modules/dashboard/container/dashboard/dashboard.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_category_category_component__ = __webpack_require__("../../../../../src/app/modules/dashboard/components/category/category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { DashboardComponent } from "./components/dashboard/dashboard.component";

var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__container_dashboard_dashboard_container__["a" /* DashboardContainer */], __WEBPACK_IMPORTED_MODULE_6__components_category_category_component__["a" /* CategoryComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map