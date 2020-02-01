webpackJsonp([8],{

/***/ "../../../../../src/app/modules/import-export/import-export.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" fxLayoutAlign=\"center center\">\r\n  <h2>Customer Import</h2>\r\n</div>\r\n\r\n<md-card class=\"col-xs-12\" style=\"margin:1em\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div>\r\n      <div class=\"file-input-wrapper\">\r\n        <button md-raised-button class=\"btn-file-input\" color=\"primary\">\r\n          Upload File\r\n        </button>\r\n\r\n        <input\r\n          type=\"file\"\r\n          name=\"file\"\r\n          (change)=\"viewFile($event)\"\r\n          (click)=\"clickDom($event.target)\"\r\n          accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n        />\r\n      </div>\r\n\r\n      <!--\r\n        <input\r\n            type=\"file\"\r\n            id=\"files\"\r\n            name=\"files\"\r\n\r\n        >\r\n      -->\r\n      <!--\r\n        <button\r\n         *ngIf=\"myFile\"\r\n            md-raised-button\r\n            color=\"primary\"\r\n            (click)=\"upload()\"\r\n        >\r\n            Upload\r\n        </button>\r\n      -->\r\n    </div>\r\n    <button md-raised-button>Total Records : {{ totalRecords }}</button>\r\n\r\n    <a md-raised-button color=\"accent\" href=\"{{url}}\"> Download Sample File </a>\r\n  </div>\r\n</md-card>\r\n\r\n<md-card class=\"col-xs-12\" style=\"margin:1em\">\r\n  <md-tab-group (selectedTabChange)=\"tabClick($event)\">\r\n    <md-tab label=\"Successful Records {{successfulRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>\r\n              Name\r\n              <!-- <div>Table attribute name</div> -->\r\n            </th>\r\n            <th>\r\n              Mobile\r\n              <!-- <div>Value</div> -->\r\n            </th>\r\n            <th>\r\n              Email\r\n              <!-- <div>Description</div> -->\r\n            </th>\r\n            <!--\r\n              <th>\r\n                      BusinessName\r\n              </th>\r\n            -->\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"successfulRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of successfulRecords\">\r\n            <td>{{ item.firstName }} {{ item.lastName }}</td>\r\n            <td>{{ item.mobile }}</td>\r\n            <td>{{ item.email }}</td>\r\n            <!--\r\n              <td>\r\n                  {{item.businessName}}\r\n              </td>\r\n            -->\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n    <md-tab label=\"Duplicate Records {{duplicateRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>\r\n              Name\r\n              <!-- <div>Table attribute name</div> -->\r\n            </th>\r\n            <th>\r\n              Mobile\r\n              <!-- <div>Value</div> -->\r\n            </th>\r\n            <th>\r\n              Email\r\n              <!-- <div>Description</div> -->\r\n            </th>\r\n            <!--\r\n              <th>\r\n                         BusinessName\r\n                 </th>\r\n            -->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"duplicateRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of duplicateRecords\">\r\n            <td>{{ item.firstName }} {{ item.lastName }}</td>\r\n            <td>{{ item.mobile }}</td>\r\n            <td>{{ item.email }}</td>\r\n            <!--\r\n              <td>\r\n                     {{item.businessName}}\r\n                 </td>\r\n            -->\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n    <md-tab label=\"Failed Records {{failureRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>\r\n              Name\r\n              <!-- <div>Table attribute name</div> -->\r\n            </th>\r\n            <th>\r\n              Mobile\r\n              <!-- <div>Value</div> -->\r\n            </th>\r\n            <th>\r\n              Email\r\n              <!-- <div>Description</div> -->\r\n            </th>\r\n            <!--\r\n              <th>\r\n                         BusinessName\r\n                 </th>\r\n            -->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"failureRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of failureRecords\">\r\n            <td>{{ item.firstName }} {{ item.lastName }}</td>\r\n            <td>{{ item.mobile }}</td>\r\n            <td>{{ item.email }}</td>\r\n            <!--\r\n              <td>\r\n                     {{item.businessName}}\r\n                 </td>\r\n            -->\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-export.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-spacing: 0;\n  width: 100%; }\n\ntd + td {\n  border-left: 1px solid #eee; }\n\ntd,\nth {\n  border-bottom: 1px solid #eee;\n  color: #000;\n  padding: 10px 25px; }\n\nth {\n  color: #000 !important;\n  white-space: nowrap;\n  border-left: 1px solid #eee; }\n\nth div {\n  position: absolute;\n  background: transparent;\n  color: #fff;\n  padding: 9px 25px;\n  top: 0;\n  margin-left: -25px;\n  line-height: normal;\n  border-left: 1px solid #ffffff; }\n\nth:first-child div {\n  border: none; }\n\n.file-input-wrapper {\n  width: 200px;\n  height: 40px;\n  overflow: hidden;\n  position: relative; }\n\n.file-input-wrapper > input[type=\"file\"] {\n  font-size: 200px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0; }\n\n.header {\n  text-align: left !important; }\n\nth {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportExportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportExportComponent = (function () {
    function ImportExportComponent(restService) {
        this.restService = restService;
        this.data = [];
        this.failureRecordsNo = 0;
        this.duplicateRecordsNo = 0;
        this.successfulRecordsNo = 0;
        this.totalRecords = 0;
        this.failureRecords = [];
        this.duplicateRecords = [];
        this.successfulRecords = [];
    }
    ImportExportComponent.prototype.ngOnInit = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_3__common_props__["a" /* Prop */].REPORT_URL + "import/customer";
        this.companyId = __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__["a" /* Storage */].getSessionUser().company.id;
    };
    ImportExportComponent.prototype.viewFile = function (event) {
        var _this = this;
        var fileList = event.target.files;
        var file = fileList[0];
        this.myFile = file;
        var _formData = new FormData();
        _formData.append("file", this.myFile);
        _formData.append("companyId", this.companyId);
        this.restService.customerImport(_formData).then(function (data) {
            _this.data = data.SuccessfulRecords.data;
            _this.failureRecordsNo = data.FailedRecords.total;
            _this.successfulRecordsNo = data.SuccessfulRecords.total;
            _this.duplicateRecordsNo = data.DuplicateRecords.total;
            _this.failureRecords = data.FailedRecords.data;
            _this.successfulRecords = data.SuccessfulRecords.data;
            _this.duplicateRecords = data.DuplicateRecords.data;
            _this.totalRecords = data.totalRecords;
            _this.myFile = [];
            fileList = null;
            file = null;
        });
    };
    ImportExportComponent.prototype.upload = function () { };
    // download() {
    //   let data = {
    //   }
    //   this.restService.customerExport(data, 'report', '.xlsx')
    // }
    ImportExportComponent.prototype.tabClick = function ($event) {
        console.log($event);
    };
    ImportExportComponent.prototype.clickDom = function ($dom) {
        $dom.value = "";
    };
    return ImportExportComponent;
}());
ImportExportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-import-export",
        template: __webpack_require__("../../../../../src/app/modules/import-export/import-export.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/import-export/import-export.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */]) === "function" && _a || Object])
], ImportExportComponent);

var _a;
//# sourceMappingURL=import-export.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-export.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__import_export_component__ = __webpack_require__("../../../../../src/app/modules/import-export/import-export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__import_services_component__ = __webpack_require__("../../../../../src/app/modules/import-export/import-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__import_products_component__ = __webpack_require__("../../../../../src/app/modules/import-export/import-products.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExportModule", function() { return ImportExportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'import-customers', component: __WEBPACK_IMPORTED_MODULE_5__import_export_component__["a" /* ImportExportComponent */] },
    { path: 'import-services', component: __WEBPACK_IMPORTED_MODULE_6__import_services_component__["a" /* ImportServicesComponent */] },
    { path: 'import-products', component: __WEBPACK_IMPORTED_MODULE_7__import_products_component__["a" /* ImportProductsComponent */] },
];
var ImportExportModule = (function () {
    function ImportExportModule() {
    }
    return ImportExportModule;
}());
ImportExportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__import_export_component__["a" /* ImportExportComponent */],
            __WEBPACK_IMPORTED_MODULE_6__import_services_component__["a" /* ImportServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__import_products_component__["a" /* ImportProductsComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
    })
], ImportExportModule);

//# sourceMappingURL=import-export.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" fxLayoutAlign=\"center center\">\r\n  <h2>Products Import</h2>\r\n</div>\r\n\r\n<md-card class=\"col-xs-12\" style=\"margin:1em\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div>\r\n      <div class=\"file-input-wrapper\">\r\n        <button md-raised-button class=\"btn-file-input\" color=\"primary\">\r\n          Upload File\r\n        </button>\r\n        <input\r\n          type=\"file\"\r\n          name=\"file\"\r\n          (change)=\"viewFile($event)\"\r\n          (click)=\"clickDom($event.target)\"\r\n          accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n        />\r\n      </div>\r\n\r\n      <!--\r\n        <input\r\n            type=\"file\"\r\n            id=\"files\"\r\n            name=\"files\"\r\n\r\n        >\r\n      -->\r\n      <!--\r\n        <button\r\n         *ngIf=\"myFile\"\r\n            md-raised-button\r\n            color=\"primary\"\r\n            (click)=\"upload()\"\r\n        >\r\n            Upload\r\n        </button>\r\n      -->\r\n    </div>\r\n    <button md-raised-button>Total Records : {{ totalRecords }}</button>\r\n    <a md-raised-button color=\"accent\" href=\"{{url}}\"> Download Sample File </a>\r\n  </div>\r\n</md-card>\r\n\r\n<md-card class=\"col-xs-12\" style=\"margin:1em\">\r\n  <md-tab-group (selectedTabChange)=\"tabClick($event)\">\r\n    <md-tab label=\"Successful Records {{successfulRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>Product Code</th>\r\n            <th>Name</th>\r\n\r\n            <th>HSN Code</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"successfulRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of successfulRecords\">\r\n            <td>{{ item.productCode }}</td>\r\n            <td>{{ item.Name }}</td>\r\n            <td>{{ item.hsnCode }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n    <md-tab label=\"Duplicate Records {{duplicateRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>Product Code</th>\r\n            <th>Name</th>\r\n\r\n            <th>HSN Code</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"duplicateRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of duplicateRecords\">\r\n            <td>{{ item.productCode }}</td>\r\n            <td>{{ item.Name }}</td>\r\n            <td>{{ item.hsnCode }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n    <md-tab label=\"Failed Records {{failureRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>Product Code</th>\r\n            <th>Name</th>\r\n\r\n            <th>HSN Code</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"failureRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of failureRecords\">\r\n            <td>{{ item.productCode }}</td>\r\n            <td>{{ item.Name }}</td>\r\n            <td>{{ item.hsnCode }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportProductsComponent = (function () {
    function ImportProductsComponent(restService) {
        this.restService = restService;
        this.data = [];
        this.failureRecordsNo = 0;
        this.duplicateRecordsNo = 0;
        this.successfulRecordsNo = 0;
        this.totalRecords = 0;
        this.failureRecords = [];
        this.duplicateRecords = [];
        this.successfulRecords = [];
    }
    ImportProductsComponent.prototype.ngOnInit = function () {
        //  this.url = 'http://192.168.1.7:5000/import/productjson'
        this.url = __WEBPACK_IMPORTED_MODULE_3__common_props__["a" /* Prop */].REPORT_URL + "import/productjson";
        this.companyId = __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__["a" /* Storage */].getSessionUser().company.id;
    };
    ImportProductsComponent.prototype.viewFile = function (event) {
        var _this = this;
        var fileList = event.target.files;
        var file = fileList[0];
        this.myFile = file;
        var _formData = new FormData();
        _formData.append("file", this.myFile);
        _formData.append("companyId", this.companyId);
        this.restService.productImport(_formData).then(function (data) {
            _this.data = data.SuccessfulRecords.data;
            _this.failureRecordsNo = data.FailedRecords.total;
            _this.successfulRecordsNo = data.SuccessfulRecords.total;
            _this.duplicateRecordsNo = data.DuplicateRecords.total;
            _this.totalRecords = data.totalRecords;
            _this.failureRecords = data.FailedRecords.data;
            _this.successfulRecords = data.SuccessfulRecords.data;
            _this.duplicateRecords = data.DuplicateRecords.data;
            _this.myFile = [];
            fileList = null;
            file = null;
        });
    };
    ImportProductsComponent.prototype.upload = function () { };
    // download() {
    //   let data = {
    //   }
    //   this.restService.customerExport(data, 'report', '.xlsx')
    // }
    ImportProductsComponent.prototype.tabClick = function ($event) {
        console.log($event);
    };
    ImportProductsComponent.prototype.clickDom = function ($dom) {
        $dom.value = "";
    };
    return ImportProductsComponent;
}());
ImportProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-import-products",
        template: __webpack_require__("../../../../../src/app/modules/import-export/import-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/import-export/import-export.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */]) === "function" && _a || Object])
], ImportProductsComponent);

var _a;
//# sourceMappingURL=import-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" fxLayoutAlign=\"center center\">\r\n  <h2>Service Import</h2>\r\n</div>\r\n\r\n<md-card class=\"col-xs-12\" style=\"margin:1em\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div>\r\n      <div class=\"file-input-wrapper\">\r\n        <button md-raised-button class=\"btn-file-input\" color=\"primary\">\r\n          Upload File\r\n        </button>\r\n        <input\r\n          type=\"file\"\r\n          name=\"file\"\r\n          (click)=\"clickDom($event.target)\"\r\n          (change)=\"viewFile($event)\"\r\n          accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n        />\r\n      </div>\r\n\r\n      <!--\r\n        <input\r\n            type=\"file\"\r\n            id=\"files\"\r\n            name=\"files\"\r\n\r\n        >\r\n      -->\r\n      <!--\r\n        <button\r\n         *ngIf=\"myFile\"\r\n            md-raised-button\r\n            color=\"primary\"\r\n            (click)=\"upload()\"\r\n        >\r\n            Upload\r\n        </button>\r\n      -->\r\n    </div>\r\n    <button md-raised-button>Total Records : {{ totalRecords }}</button>\r\n    <a md-raised-button color=\"accent\" href=\"{{url}}\"> Download Sample File </a>\r\n  </div>\r\n</md-card>\r\n\r\n<md-card class=\"col-xs-12\" style=\"margin:1em\">\r\n  <md-tab-group (selectedTabChange)=\"tabClick($event)\">\r\n    <md-tab label=\"Successful Records {{successfulRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>Service Code</th>\r\n            <th>Name</th>\r\n\r\n            <th>Sales Unit</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"successfulRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of successfulRecords\">\r\n            <td>{{ item.serviceCode }}</td>\r\n            <td>{{ item.Name }}</td>\r\n            <td>{{ item.salesUnit }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n    <md-tab label=\"Duplicate Records {{duplicateRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>Service Code</th>\r\n            <th>Name</th>\r\n\r\n            <th>Sales Unit</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"duplicateRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of duplicateRecords\">\r\n            <td>{{ item.serviceCode }}</td>\r\n            <td>{{ item.Name }}</td>\r\n            <td>{{ item.salesUnit }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n    <md-tab label=\"Failed Records {{failureRecordsNo}}\">\r\n      <table>\r\n        <thead>\r\n          <tr class=\"header\">\r\n            <th>Service Code</th>\r\n            <th>Name</th>\r\n\r\n            <th>Sales Unit</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <div\r\n            style=\"margin:1em;font-size: 16px;\"\r\n            *ngIf=\"failureRecords.length == 0\"\r\n          >\r\n            No Records Found\r\n          </div>\r\n          <tr *ngFor=\"let item of failureRecords\">\r\n            <td>{{ item.serviceCode }}</td>\r\n            <td>{{ item.Name }}</td>\r\n            <td>{{ item.salesUnit }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/import-export/import-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportServicesComponent = (function () {
    function ImportServicesComponent(restService) {
        this.restService = restService;
        this.data = [];
        this.failureRecordsNo = 0;
        this.duplicateRecordsNo = 0;
        this.successfulRecordsNo = 0;
        this.failureRecords = [];
        this.duplicateRecords = [];
        this.successfulRecords = [];
        this.totalRecords = 0;
    }
    ImportServicesComponent.prototype.ngOnInit = function () {
        // this.url = 'http://192.168.1.7:5000/import/servicejson'
        this.url = __WEBPACK_IMPORTED_MODULE_3__common_props__["a" /* Prop */].REPORT_URL + "import/servicejson";
        this.companyId = __WEBPACK_IMPORTED_MODULE_2__shared_utils_storage__["a" /* Storage */].getSessionUser().company.id;
    };
    ImportServicesComponent.prototype.viewFile = function (event) {
        var _this = this;
        var fileList = event.target.files;
        var file = fileList[0];
        this.myFile = file;
        var _formData = new FormData();
        _formData.append("file", this.myFile);
        _formData.append("companyId", this.companyId);
        this.restService.serviceImport(_formData).then(function (data) {
            _this.data = data.SuccessfulRecords.data;
            _this.failureRecordsNo = data.FailedRecords.total;
            _this.successfulRecordsNo = data.SuccessfulRecords.total;
            _this.duplicateRecordsNo = data.DuplicateRecords.total;
            _this.totalRecords = data.totalRecords;
            _this.failureRecords = data.FailedRecords.data;
            _this.successfulRecords = data.SuccessfulRecords.data;
            _this.duplicateRecords = data.DuplicateRecords.data;
            _this.myFile = [];
            fileList = null;
            file = null;
        });
    };
    ImportServicesComponent.prototype.upload = function () { };
    // download() {
    //   let data = {
    //   }
    //   this.restService.customerExport(data, 'report', '.xlsx')
    // }
    ImportServicesComponent.prototype.tabClick = function ($event) {
        console.log($event);
    };
    ImportServicesComponent.prototype.clickDom = function ($dom) {
        $dom.value = "";
    };
    return ImportServicesComponent;
}());
ImportServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-import-services",
        template: __webpack_require__("../../../../../src/app/modules/import-export/import-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/import-export/import-export.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */]) === "function" && _a || Object])
], ImportServicesComponent);

var _a;
//# sourceMappingURL=import-services.component.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map