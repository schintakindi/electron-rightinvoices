webpackJsonp([14],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/about/about.module": [
		"../../../../../src/app/components/about/about.module.ts",
		12,
		0
	],
	"./components/admin/admin.module": [
		"../../../../../src/app/components/admin/admin.module.ts",
		1,
		0
	],
	"./components/contact/contact.module": [
		"../../../../../src/app/components/contact/contact.module.ts",
		11,
		0
	],
	"./components/pricing/pricing.module": [
		"../../../../../src/app/components/pricing/pricing.module.ts",
		10,
		0
	],
	"./components/sign/sign.module": [
		"../../../../../src/app/components/sign/sign.module.ts",
		2,
		0
	],
	"./modules/dashboard/dashboard.module": [
		"../../../../../src/app/modules/dashboard/dashboard.module.ts",
		9
	],
	"./modules/goods-returned/goods-returned.module": [
		"../../../../../src/app/modules/goods-returned/goods-returned.module.ts",
		0,
		4
	],
	"./modules/import-export/import-export.module": [
		"../../../../../src/app/modules/import-export/import-export.module.ts",
		8
	],
	"./modules/invoice/invoice.module": [
		"../../../../../src/app/modules/invoice/invoice.module.ts",
		0,
		3
	],
	"./modules/pricing/pricing.module": [
		"../../../../../src/app/modules/pricing/pricing.module.ts",
		7,
		0
	],
	"./modules/purchase-invoice/purchase-invoice.module": [
		"../../../../../src/app/modules/purchase-invoice/purchase-invoice.module.ts",
		0,
		6
	],
	"./modules/purchaseorder/purchaseorder.module": [
		"../../../../../src/app/modules/purchaseorder/purchaseorder.module.ts",
		0,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <md-progress-bar\r\n  mode=\"indeterminate\"\r\n  *ngIf=\"showLoader\"\r\n  color=\"warn\"\r\n  style=\"position: fixed; width: 100%\"\r\n></md-progress-bar> -->\r\n\r\n<link\r\n  href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"\r\n  rel=\"stylesheet\"\r\n  integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n\r\n<div *ngIf=\"showLoader\">\r\n  <!-- <md-progress-bar mode=\"indeterminate\" color=\"accent\"></md-progress-bar> -->\r\n  <apex-progress-bar></apex-progress-bar>\r\n</div>\r\n<!-- <apex-progress-bar></apex-progress-bar> -->\r\n\r\n<!-- <div *ngIf=\"showSpinner\" style=\"top: 60px; position: fixed; width:100%;\">\r\n    <md-progress-spinner mode=\"indeterminate\" color=\"accent\"></md-progress-spinner>\r\n</div> -->\r\n\r\n<header\r\n  style=\"width: 100%\"\r\n  *ngIf=\"sessionUser && sessionUser.profile && sessionUser.profile.firstName\"\r\n>\r\n  <!-- <header style=\"width: 100%\" *ngIf=\"sessionUser !== undefined && sessionUser.profile !== undefined && !(sessionUser.profile == null) && sessionUser.profile.firstName !== undefined && (sessionUser.profile.firstName !== undefined\"> -->\r\n  <md-toolbar class=\"mainhead\">\r\n    <!-- <span class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n      <md-icon>menu</md-icon> -->\r\n    <!-- <md-icon\r\n        svgIcon=\"assets:logo\"\r\n        style=\"height: 40px; width: 60px\"\r\n      ></md-icon> -->\r\n    <img\r\n      src=\"assets/icons/sidemenu/RILogo.svg\"\r\n      (click)=\"dashboard()\"\r\n      style=\"margin: 0 0 10px 10px;\"\r\n    />\r\n    <!-- </span> -->\r\n\r\n    <!-- <span class=\"title title-custom\" (click)=\"dashboard()\">\r\n      Right Invoices\r\n    </span> -->\r\n    <span class=\"spacer company-address\">\r\n      <span\r\n        class=\"company-address-title\"\r\n        style=\"position:relative;bottom:5px\"\r\n        >{{ sessionUser.company.name }}</span\r\n      >\r\n      <!-- <address>Building No 14, Mindspace Hyderabad</address> -->\r\n    </span>\r\n    <span class=\"title title-custom \"> Hi</span>&nbsp;\r\n    <span\r\n      class=\"title-custom\"\r\n      *ngIf=\"\r\n        sessionUser && sessionUser.profile && sessionUser.profile.firstName\r\n      \"\r\n      >{{ sessionUser.profile.firstName }}</span\r\n    >\r\n    <!-- <span *ngIf=\"sessionUser !== undefined && sessionUser.profile !== undefined && !(sessionUser.profile == null) && sessionUser.profile.firstName !== undefined\">{{sessionUser.profile.firstName}}</span> -->\r\n    <!-- <span *ngIf=\"isUndefined(sessionUser.profile.firstName)\"></span> -->\r\n\r\n    <!-- <md-icon class=\"padding-side padding-side-icon\">search</md-icon> -->\r\n    <md-icon class=\"padding-side padding-side-icon\" (click)=\"settings()\"\r\n      >settings</md-icon\r\n    >\r\n    <md-icon class=\"padding-side padding-side-icon\" (click)=\"sso_reports_app()\"\r\n      >insert_chart_outlined</md-icon\r\n    >\r\n    <!-- <md-icon class=\"padding-side padding-side-icon\">help</md-icon> -->\r\n    <md-icon class=\"padding-side padding-side-icon\" (click)=\"logout()\"\r\n      >exit_to_app</md-icon\r\n    >\r\n    <!-- <span class=\"title title-custome\" style=\"font-size: 12px;\">V.1.1</span>&nbsp; -->\r\n  </md-toolbar>\r\n</header>\r\n\r\n<md-sidenav-container class=\"sidenav-fab-container\">\r\n  <div\r\n    *ngIf=\"isToggled\"\r\n    class=\"example-fa\"\r\n    (click)=\"toogleNav(sidenav)\"\r\n    style=\"position: fixed;\"\r\n  >\r\n    <img\r\n      src=\"assets/icons/sidemenu/hide-2.svg\"\r\n      mdTooltip=\"Show Menu\"\r\n      mdTooltipPosition=\"right\"\r\n    />\r\n  </div>\r\n  <!-- <md-sidenav #sidenav mode=\"side\" opened=\"true\" *ngIf=\"sessionUser\">\r\n                    <span class=\"company-address-title\">{{sessionUser.company.name}}</span>\r\n -->\r\n  <!-- <input mdInput   > -->\r\n  <!-- <md-sidenav #sidenav mode=\"side\" opened=\"true\" *ngIf=\"sessionUser !== undefined && sessionUser.profile !== undefined && sessionUser.profile.firstName !== undefined\"> -->\r\n  <md-sidenav\r\n    #sidenav\r\n    mode=\"side\"\r\n    opened=\"true\"\r\n    *ngIf=\"sessionUser && sessionUser.profile && sessionUser.profile.firstName\"\r\n  >\r\n    <div class=\"scrolling-content\" style=\"padding-bottom:150px;\">\r\n      <td-expansion-panel>\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            *ngIf=\"!isToggled\"\r\n            class=\"example-fa1\"\r\n            (click)=\"toogleNav(sidenav)\"\r\n          >\r\n            <img\r\n              src=\"assets/icons/sidemenu/hide-2.svg\"\r\n              mdTooltip=\"Hide Menu\"\r\n              mdTooltipPosition=\"left\"\r\n              style=\"position: relative;\r\n              left: 165px;\r\n              top: 2px;\"\r\n            />\r\n          </div>\r\n        </ng-template>\r\n      </td-expansion-panel>\r\n      <td-expansion-panel\r\n        (expanded)=\"expand = true\"\r\n        (collapsed)=\"expand = true\"\r\n        (click)=\"states.activeItem = 'HOME'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"dashboard()\"\r\n            [ngClass]=\"{ activeMenu: 'HOME' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >dashboard</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/dashboard.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Home\">Dashboard</span>\r\n          </div>\r\n        </ng-template>\r\n      </td-expansion-panel>\r\n\r\n      <!-- dashboard\r\n            <td-expansion-panel (expanded)=\"expand = true\" (collapsed)=\"expand = true\" (click)=\"states.activeItem='HOME'\">\r\n                <ng-template td-expansion-panel-header>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" [ngClass]=\"{'activeMenu': 'HOME' == states.activeItem}\">\r\n                        <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">home</md-icon>\r\n                        <span mdTooltip=\"Home\" (click)=\"dashboard()\">Home</span>\r\n            \r\n            \r\n                    </div>\r\n                </ng-template>\r\n            </td-expansion-panel> -->\r\n\r\n      <!-- Customer Management Start  -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'CUSTOMERS'\"\r\n        (click)=\"states.activeItem = 'CUSTOMERS'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"customerSearch()\"\r\n            [ngClass]=\"{ activeMenu: 'CUSTOMERS' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >account_box</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/customers-2.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Customers\">Customers</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'NEW_CUSTOMER' == states.subActiveItem\r\n            }\"\r\n            (click)=\"customer()\"\r\n            (click)=\"states.subActiveItem = 'NEW_CUSTOMER'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"New Customers\">\r\n              New Customer\r\n            </span>\r\n          </div>\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_CUSTOMERS' == states.subActiveItem\r\n            }\"\r\n            (click)=\"customerSearch()\"\r\n            (click)=\"states.subActiveItem = 'ALL_CUSTOMERS'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"All Customers\">\r\n              All Customers\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Customer Management End  -->\r\n\r\n      <!-- Inventory management Start -->\r\n\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'STOCKITEM'\"\r\n        (click)=\"states.activeItem = 'STOCKITEM'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"stockitems()\"\r\n            [ngClass]=\"{ activeMenu: 'STOCKITEM' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >format_indent_increase</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/stock.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Stock Item\">Stock Items</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'NEW_STOCKITEM' == states.subActiveItem\r\n            }\"\r\n            (click)=\"newstockitem()\"\r\n            (click)=\"states.subActiveItem = 'NEW_STOCKITEM'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >apps</md-icon\r\n            >\r\n            <span mdTooltip=\"Stock Item\">\r\n              New Stock Item\r\n            </span>\r\n          </div>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"service()\"\r\n            [ngClass]=\"{ subActiveMenu: 'NEW_SERVICE' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'NEW_SERVICE'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >work</md-icon\r\n            >\r\n            <span mdTooltip=\"Service\">\r\n              New Service\r\n            </span>\r\n          </div>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_STOCKITEM' == states.subActiveItem\r\n            }\"\r\n            (click)=\"stockitems()\"\r\n            (click)=\"states.subActiveItem = 'ALL_STOCKITEM'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"Stock Item\">All Stock Items</span>\r\n          </div>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_SERVICEITEM' == states.subActiveItem\r\n            }\"\r\n            (click)=\"serviceitems()\"\r\n            (click)=\"states.subActiveItem = 'ALL_SERVICEITEM'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"service Item\">All Service Items</span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Inventory management End -->\r\n\r\n      <!-- Purchase Order  Start -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'PURCHASEORDER'\"\r\n        (click)=\"states.activeItem = 'PURCHASEORDER'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"purchaseorders()\"\r\n            [ngClass]=\"{ activeMenu: 'PURCHASEORDER' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >format_indent_increase</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/purchase-orders.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Purchase Orders\">Purchase Orders</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'NEW_PURCHASEORDER' == states.subActiveItem\r\n            }\"\r\n            (click)=\"newpurchaseorder()\"\r\n            (click)=\"states.subActiveItem = 'NEW_PURCHASEORDER'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >apps</md-icon\r\n            >\r\n            <span mdTooltip=\"Purchase Order\">\r\n              New Purchase Order\r\n            </span>\r\n          </div>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_PURCHASEORDER' == states.subActiveItem\r\n            }\"\r\n            (click)=\"purchaseorders()\"\r\n            (click)=\"states.subActiveItem = 'ALL_PURCHASEORDER'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"Purchase Orders\">All Purchase Orders</span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Purchase Order  End  -->\r\n\r\n      <!-- Purchase Invoice  Start -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'PURCHASEINVOICE'\"\r\n        (click)=\"states.activeItem = 'PURCHASEINVOICE'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"purchaseinvoices()\"\r\n            [ngClass]=\"{ activeMenu: 'PURCHASEINVOICE' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >format_indent_increase</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/purchase-invoices.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Purchase Invoices\">Purchase Invoices</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'NEW_PURCHASEINVOICE' == states.subActiveItem\r\n            }\"\r\n            (click)=\"newpurchaseinvoice()\"\r\n            (click)=\"states.subActiveItem = 'NEW_PURCHASEINVOICE'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >apps</md-icon\r\n            >\r\n            <span mdTooltip=\"Purchase Invoice\">\r\n              New Purchase Invoice\r\n            </span>\r\n          </div>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_PURCHASEINVOICE' == states.subActiveItem\r\n            }\"\r\n            (click)=\"purchaseinvoices()\"\r\n            (click)=\"states.subActiveItem = 'ALL_PURCHASEINVOICE'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"Purchase Invoice\">All Purchase Invoices</span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Purchase Order  End -->\r\n\r\n      <!-- Pricing -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'PRICING'\"\r\n        (click)=\"states.activeItem = 'PRICING'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"pricing()\"\r\n            [ngClass]=\"{ activeMenu: 'PRICING' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon\r\n              color=\"accent\"\r\n              class=\"center-xs padding borderbootom hover fa fa-inr fa-2x\"\r\n            ></md-icon> -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/pricing.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Pricing\">Pricing</span>\r\n          </div>\r\n        </ng-template>\r\n      </td-expansion-panel>\r\n\r\n      <!-- Quotation management Start \r\n            <td-expansion-panel [expand]=\"states.activeItem != 'QUOTATIONS'\" (click)=\"states.activeItem='QUOTATIONS'\">\r\n                <ng-template td-expansion-panel-header>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" (click)=\"quotationsSearch()\" [ngClass]=\"{'activeMenu': 'QUOTATIONS' == states.activeItem}\">\r\n                        <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover fa  fa-file-text fa-2x\"></md-icon>\r\n                        <span mdTooltip=\"Quotations\">Quotations</span>\r\n                    </div>\r\n                </ng-template>\r\n                <td-expansion-summary>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" (click)=\"quotations()\" [ngClass]=\"{'subActiveMenu': 'NEW_QUOTATION'==states.subActiveItem}\"\r\n                        (click)=\"states.subActiveItem='NEW_QUOTATION'\">\r\n                        <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">note_add</md-icon>\r\n                        <span mdTooltip=\"New Quotation\">\r\n                            New Quotation\r\n                        </span>\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" (click)=\"quotationsSearch()\" [ngClass]=\"{'subActiveMenu': 'ALL_QUOTATIONS'==states.subActiveItem}\"\r\n                        (click)=\"states.subActiveItem='ALL_QUOTATIONS'\">\r\n                        <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">find_in_page</md-icon>\r\n                        <span mdTooltip=\"All Quotations\">\r\n                            All Quotations\r\n                        </span>\r\n                    </div>\r\n\r\n                </td-expansion-summary>\r\n            </td-expansion-panel>-->\r\n      <!-- Quotation management End -->\r\n\r\n      <!-- Invoice Management Start  -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'INVOICES'\"\r\n        (click)=\"states.activeItem = 'INVOICES'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"invoiceSearch()\"\r\n            [ngClass]=\"{ activeMenu: 'INVOICES' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >format_list_bulleted</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/invoices.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Invoices\"><span>Invoices</span> </span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"invoice()\"\r\n            [ngClass]=\"{ subActiveMenu: 'NEW_INVOICE' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'NEW_INVOICE'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"New Invoice\">\r\n              New Invoice\r\n            </span>\r\n          </div>\r\n\r\n          <!-- <span mdTooltip=\"New Invoice\" (click)=\"invoice()\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                        <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">note_add</md-icon>\r\n                        <span>New Invoice</span>\r\n                    </div>\r\n                    </span> -->\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"invoiceSearch()\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_INVOICES' == states.subActiveItem\r\n            }\"\r\n            (click)=\"states.subActiveItem = 'ALL_INVOICES'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"All Invoices\">\r\n              All Invoices\r\n            </span>\r\n          </div>\r\n\r\n          <!-- <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\"\r\n                    [ngClass] = \"{'subActiveMenu': 'SAVED_INVOICES'==states.subActiveItem}\" (click)=\"states.subActiveItem='SAVED_INVOICES'\">\r\n                    <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">save</md-icon>\r\n                    <span mdTooltip=\"Saved Invoices\">\r\n                       Saved Invoice\r\n                    </span>\r\n                    </div> -->\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Invoice Management End  -->\r\n\r\n      <!-- CRDN Management Start-->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'CRDN'\"\r\n        (click)=\"states.activeItem = 'CRDN'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"crdnSearch()\"\r\n            [ngClass]=\"{ activeMenu: 'CRDN' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon\r\n              color=\"accent\"\r\n              class=\"center-xs padding borderbootom hover fa  fa-file-text fa-2x\"\r\n            ></md-icon> -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/Creditnote-2@3x.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Credit Note and Debit Note\"\r\n              >Credit or Debit Note\r\n            </span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"newCRDN()\"\r\n            [ngClass]=\"{ subActiveMenu: 'NEW_CRDN' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'NEW_CRDN'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"New Credit or Debit Note\">\r\n              New Credit or Debi Note\r\n            </span>\r\n          </div>\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"crdnSearch()\"\r\n            [ngClass]=\"{ subActiveMenu: 'ALL_CRDN' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'ALL_CRDN'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"All Credit or Debit Notes\">\r\n              All Credit or Debit Notes\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- CRDN Management End-->\r\n\r\n      <!-- Expense management Start -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'EXPENSES'\"\r\n        (click)=\"states.activeItem = 'EXPENSES'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"expenseSearch()\"\r\n            [ngClass]=\"{ activeMenu: 'EXPENSES' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon\r\n              color=\"accent\"\r\n              class=\"center-xs padding borderbootom hover fa fa-inr fa-2x\"\r\n            ></md-icon> -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/expenses.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Expenses\">Expenses </span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"expense()\"\r\n            [ngClass]=\"{ subActiveMenu: 'NEW_EXPENSE' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'NEW_EXPENSE'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"New Expense\">\r\n              New Expense\r\n            </span>\r\n          </div>\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"expenseSearch()\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_EXPENSES' == states.subActiveItem\r\n            }\"\r\n            (click)=\"states.subActiveItem = 'ALL_EXPENSES'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"All Expenses\">\r\n              All Expenses\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Expense management End -->\r\n\r\n      <!-- Payment management Start -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'PAYMENT'\"\r\n        (click)=\"states.activeItem = 'PAYMENT'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"paymentSearch()\"\r\n            [ngClass]=\"{ activeMenu: 'PAYMENT' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >payment</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/payments-received.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Payments Received\">Payments Received</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"payment()\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'NEW_PAYMENTS' == states.subActiveItem\r\n            }\"\r\n            (click)=\"states.subActiveItem = 'NEW_PAYMENTS'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"New Payment\">\r\n              New Payment Received\r\n            </span>\r\n          </div>\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"paymentSearch()\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_PAYMENTS' == states.subActiveItem\r\n            }\"\r\n            (click)=\"states.subActiveItem = 'ALL_PAYMENTS'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"All Payments\">\r\n              All Payments Received\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n      <!-- Payment management End -->\r\n\r\n      <!-- Suppliers management Start -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'SUPPLIERS'\"\r\n        (click)=\"states.activeItem = 'SUPPLIERS'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"supplierSearch()\"\r\n            [ngClass]=\"{ activeMenu: 'SUPPLIERS' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >local_shipping</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/suppliers.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Suppliers\">Suppliers</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"supplier()\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'NEW_SUPPLIER' == states.subActiveItem\r\n            }\"\r\n            (click)=\"states.subActiveItem = 'NEW_SUPPLIER'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"New Supplier\">\r\n              New Supplier\r\n            </span>\r\n          </div>\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"supplierSearch()\"\r\n            [ngClass]=\"{\r\n              subActiveMenu: 'ALL_SUPPLIERS' == states.subActiveItem\r\n            }\"\r\n            (click)=\"states.subActiveItem = 'ALL_SUPPLIERS'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"All Suppliers\">\r\n              All Suppliers\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n\r\n       <td-expansion-panel [expand]=\"states.activeItem != 'REPORTS'\" (click)=\"states.activeItem='REPORTS'\">\r\n                <ng-template td-expansion-panel-header>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" (click)=\"reports()\" [ngClass]=\"{'activeMenu': 'REPORTS' == states.activeItem}\">\r\n                        <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">description</md-icon>\r\n                        <span mdTooltip=\"Reports\">Reports </span>\r\n                    </div>\r\n                </ng-template>\r\n            </td-expansion-panel> \r\n\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'BARCODEGENERATION'\"\r\n        (click)=\"states.activeItem = 'BARCODEGENERATION'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"barcode()\"\r\n            [ngClass]=\"{ activeMenu: 'BARCODEGENERATION' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >description</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/barcode-generation.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Reports\">Barcode Generation </span>\r\n          </div>\r\n        </ng-template>\r\n      </td-expansion-panel>\r\n\r\n      <!-- Goods Returned Start -->\r\n      <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'GOODSRETURNED'\"\r\n        (click)=\"states.activeItem = 'GOODSRETURNED'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"returnByCustomer()\"\r\n            [ngClass]=\"{ activeMenu: 'GOODSRETURNED' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >local_shipping</md-icon\r\n            > -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/Goods return@3x.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <span mdTooltip=\"Goods Returned\">Goods Returned</span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"returnBySupplier()\"\r\n            [ngClass]=\"{ subActiveMenu: 'BY_SUPPLIER' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'BY_SUPPLIER'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"By Supplier\">\r\n              By Supplier\r\n            </span>\r\n          </div>\r\n\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"returnByCustomer()\"\r\n            [ngClass]=\"{ subActiveMenu: 'BY_CUSTOMER' == states.subActiveItem }\"\r\n            (click)=\"states.subActiveItem = 'BY_CUSTOMER'\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >find_in_page</md-icon\r\n            >\r\n            <span mdTooltip=\"By Customer\">\r\n              By Customer\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n\r\n      <!-- <td-expansion-panel\r\n        [expand]=\"states.activeItem != 'BARCODEGENERATION'\"\r\n        (click)=\"states.activeItem = 'BARCODEGENERATION'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            (click)=\"barcode()\"\r\n            [ngClass]=\"{ activeMenu: 'BARCODEGENERATION' == states.activeItem }\"\r\n          >\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >barcode</md-icon\r\n            >\r\n            <span mdTooltip=\"barcode\">BARCODE GENERATION </span>\r\n          </div>\r\n        </ng-template>\r\n      </td-expansion-panel> -->\r\n\r\n      <td-expansion-panel\r\n        expand=\"true\"\r\n        (click)=\"states.activeItem = 'IMPORT_EXPORT'\"\r\n      >\r\n        <ng-template td-expansion-panel-header>\r\n          <div\r\n            fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-evenly center\"\r\n            [ngClass]=\"{ activeMenu: 'IMPORT_EXPORT' == states.activeItem }\"\r\n          >\r\n            <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\"\r\n              >description</md-icon\r\n            > -->\r\n            <!-- <md-icon\r\n              svgIcon=\"icon:import_export\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n              style=\"fill:orange\"\r\n            ></md-icon> -->\r\n            <img\r\n              src=\"assets/icons/sidemenu/import.svg\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            />\r\n            <!-- <img\r\n              src=\"assets/img/svg/reports.svg\"\r\n              color=\"accent\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n            /> -->\r\n            <span mdTooltip=\"Import &amp; Export\">Import &amp; Export </span>\r\n          </div>\r\n        </ng-template>\r\n        <td-expansion-summary>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n            <md-icon\r\n              svgIcon=\"icon:upload\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n              style=\"fill:orange\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"Import Customers\" (click)=\"import()\">\r\n              Import Customers\r\n            </span>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n            <md-icon\r\n              svgIcon=\"icon:upload\"\r\n              color=\"accent\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"All Suppliers\" (click)=\"importProducts()\">\r\n              Import Products\r\n            </span>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n            <md-icon\r\n              svgIcon=\"icon:upload\"\r\n              color=\"accent\"\r\n              class=\"center-xs padding borderbootom hover\"\r\n              >note_add</md-icon\r\n            >\r\n            <span mdTooltip=\"All Suppliers\" (click)=\"importServices()\">\r\n              Import Services\r\n            </span>\r\n          </div>\r\n        </td-expansion-summary>\r\n      </td-expansion-panel>\r\n\r\n      <!-- Suppliers management End -->\r\n\r\n      <!-- <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">apps</md-icon><br>\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">settings</md-icon><br>\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">monetization_on</md-icon><br>\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">event_note</md-icon><br>\r\n            <md-icon color=\"accent\" class=\"center-xs padding borderbootom hover\">insert_drive_file</md-icon> -->\r\n    </div>\r\n  </md-sidenav>\r\n  <router-outlet></router-outlet>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_apex_service__ = __webpack_require__("../../../../../src/app/shared/service/apex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// const routerTransition = trigger("routerTransition", [
//   transition("* <=> *", [
//     query(
//       ":enter, :leave",
//       style({ position: "fixed", width: "100%", height: "100%" }),
//       {
//         optional: true
//       }
//     ),
//     group([
//       query(
//         ":enter",
//         [
//           style({ transform: "translateX(100%)" }),
//           animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
//         ],
//         { optional: true }
//       ),
//       query(
//         ":leave",
//         [
//           style({ transform: "translateX(0%)" }),
//           animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
//         ],
//         { optional: true }
//       )
//     ])
//   ])
// ]);
// animations: [routerTransition]
var AppComponent = (function () {
    function AppComponent(apexService, appService, _iconRegistry, _domSanitizer, cdr) {
        var _this = this;
        this.apexService = apexService;
        this.appService = appService;
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this.cdr = cdr;
        this.showLoader = true;
        this.isToggled = false;
        this.states = {};
        this.states.activeItem = "HOME";
        this.states.subActiveItem = "HOME";
        this.assetsIcons();
        this.menuList = null;
        // this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
        //   this.showLoader = data;
        // });
        this._loaderSubscription = this.apexService.loaderEvent.subscribe(function (data) {
            if (data != _this.showLoader) {
                setTimeout(function () {
                    _this.showLoader = data;
                }, 10);
            }
        });
        this._userSubscription = this.apexService.sessionUserEvent.subscribe(function (data) {
            _this.menuChange(data);
        });
        this.apexService.sessionUserEmit(__WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getSessionUser());
        this.apexService.showLoader(false);
    }
    AppComponent.prototype.ngAfterContentChecked = function () {
        //debugger;
        //this.sampleViewModel.DataContext = this.DataContext;
        //this.sampleViewModel.Position = this.Position;
        this.cdr.detectChanges();
    };
    AppComponent.prototype.menuChange = function (data) {
        this.sessionUser = data;
        if (this.sessionUser) {
            this.menuList = this.appService.getSessionItem("menu");
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._userSubscription.unsubscribe();
    };
    AppComponent.prototype.assetsIcons = function () {
        this._iconRegistry.addSvgIconInNamespace("assets", "logo", this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo.svg"));
        this._iconRegistry.addSvgIconInNamespace("assets", "logo2", this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo2.svg"));
        this._iconRegistry.addSvgIconSetInNamespace("icon", this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/icons.svg"));
    };
    AppComponent.prototype.toogleNav = function (nav) {
        if (nav.opened) {
            this.isToggled = true;
            nav.close();
        }
        else {
            this.isToggled = false;
            nav.open();
        }
    };
    AppComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].clearSession();
        sessionStorage.clear();
        this.menuList = null;
        this.appService.navigate("/sign/signin", null);
        this.sessionUser = null;
        //this.apexService.sessionUserEmit(null);
    };
    AppComponent.prototype.myProfile = function () {
        this.appService.navigate(__WEBPACK_IMPORTED_MODULE_4__common_props__["a" /* Prop */].MY_PROFILE_PAGE, null);
    };
    AppComponent.prototype.login = function () {
        this.appService.navigate(__WEBPACK_IMPORTED_MODULE_4__common_props__["a" /* Prop */].SIGN_IN_PAGE, null);
    };
    AppComponent.prototype.getMenuStatus = function (event) {
        console.log(event);
    };
    AppComponent.prototype.dashboard = function () {
        this.appService.navigate("admin/dashboard", []);
        // if (this.sessionUser !== null) {
        //   if (this.sessionUser.account.role == "admin") {
        //     this.appService.navigate("dashboard/dashboard", []);
        //     } else if (this.sessionUser.account.role == "user") {
        //       this.appService.navigate("dashboard/dashboard", []);
        //     }
        // }
    };
    AppComponent.prototype.invoice = function () {
        this.appService.navigate("invoice/add", []);
    };
    AppComponent.prototype.invoiceSearch = function () {
        this.appService.navigate("admin/invoice-search", []);
    };
    AppComponent.prototype.product = function () {
        this.appService.navigate("admin/product-search", []);
    };
    AppComponent.prototype.inventory = function () {
        this.appService.navigate("admin/inventory-edit", [{ isEditable: true }]);
    };
    AppComponent.prototype.noninventory = function () {
        this.appService.navigate("admin/noninventory-edit", [{ isEditable: true }]);
    };
    AppComponent.prototype.service = function () {
        this.appService.navigate("admin/service-edit", [{ isEditable: true }]);
    };
    AppComponent.prototype.customer = function () {
        this.appService.navigate("admin/custom-management", []);
    };
    AppComponent.prototype.customerSearch = function () {
        this.appService.navigate("admin/customersearch", []);
    };
    AppComponent.prototype.reports = function () {
        console.log("dbf");
        this.appService.navigate("reports/reports", []);
    };
    AppComponent.prototype.barcode = function () {
        this.appService.navigate("admin/barcode-generation", []);
    };
    //Supplier Module
    AppComponent.prototype.supplier = function () {
        this.appService.navigate("admin/supplier-management", [
            { isEditable: true }
        ]);
    };
    //Supplier Search Module
    AppComponent.prototype.supplierSearch = function () {
        this.appService.navigate("admin/suppliersearch", []);
    };
    AppComponent.prototype.payment = function () {
        this.appService.navigate("admin/payment", []);
    };
    AppComponent.prototype.paymentSearch = function () {
        this.appService.navigate("admin/payment-search", []);
    };
    AppComponent.prototype.quotations = function () {
        this.appService.navigate("quotation/add", [{ isEditable: true }]);
        // this.appService.navigate('admin/quotations', [])
    };
    AppComponent.prototype.quotationsSearch = function () {
        this.appService.navigate("admin/quotations-search", []);
    };
    //Expense Module
    AppComponent.prototype.expense = function () {
        this.appService.navigate("admin/expense-management", []);
    };
    //Expense Search Module
    AppComponent.prototype.expenseSearch = function () {
        this.appService.navigate("admin/expense-search", []);
    };
    AppComponent.prototype.import = function () {
        this.appService.navigate("import-export/import-customers", []);
    };
    AppComponent.prototype.importServices = function () {
        this.appService.navigate("import-export/import-services", []);
    };
    AppComponent.prototype.importProducts = function () {
        this.appService.navigate("import-export/import-products", []);
    };
    AppComponent.prototype.crdnSearch = function () {
        this.appService.navigate("admin/crdn-search", []);
    };
    AppComponent.prototype.newCRDN = function () {
        this.appService.navigate("admin/crdn-edit", []);
    };
    AppComponent.prototype.settings = function () {
        this.appService.navigate("admin/user-settings", []);
    };
    AppComponent.prototype.stockitems = function () {
        this.appService.navigate("admin/stockitem-search", []);
    };
    AppComponent.prototype.serviceitems = function () {
        this.appService.navigate("admin/serviceitem-search", []);
    };
    AppComponent.prototype.newstockitem = function () {
        this.appService.navigate("admin/stockitem-management", []);
    };
    AppComponent.prototype.purchaseorders = function () {
        this.appService.navigate("purchaseorder/search", []);
    };
    AppComponent.prototype.newpurchaseorder = function () {
        this.appService.navigate("purchaseorder/add", []);
    };
    AppComponent.prototype.purchaseinvoices = function () {
        this.appService.navigate("purchaseinvoice/search", []);
    };
    AppComponent.prototype.newpurchaseinvoice = function () {
        this.appService.navigate("purchaseinvoice/add", []);
    };
    AppComponent.prototype.returnBySupplier = function () {
        this.appService.navigate("goodsreturned/goodsreturnedbysupplier", []);
    };
    AppComponent.prototype.returnByCustomer = function () {
        this.appService.navigate("goodsreturned/goodsreturnedbycustomer", []);
    };
    AppComponent.prototype.pricing = function () {
        this.appService.navigate("pricing/add", []);
    };
    AppComponent.prototype.sso_reports_app = function () {
        var newWindow = window.open(__WEBPACK_IMPORTED_MODULE_4__common_props__["a" /* Prop */].REPORT_WEB_URL + "?jwt=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getJWT(), "reports");
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("sidenav"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MdSidenavModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MdSidenavModule */]) === "function" && _a || Object)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_apex_service__["a" /* ApexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_apex_service__["a" /* ApexService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_service_app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdIconRegistry */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_reports_reports_module__ = __webpack_require__("../../../../../src/app/components/reports/reports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_component_base_report_component__ = __webpack_require__("../../../../../src/app/shared/component/base.report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { JsonpModule } from '@angular/http';
//import * as $ from jquery;









// import { Invoice80mmComponent } from '.src//invoice80mm/invoice80mm.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* appRoutes */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__components_reports_reports_module__["a" /* ReportsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__app_routes__["b" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_12__shared_component_base_report_component__["a" /* BaseReportComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });

var appRoutingProviders = [];
var routes = [
    // {
    //   path: "",
    //   loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
    // },
    // {
    //   path: "landingpage",
    //   loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
    // },
    // {
    //   path: "welcome",
    //   loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
    // },
    { path: "", pathMatch: "full", redirectTo: "sign" },
    { path: "sign", loadChildren: "./components/sign/sign.module#SignModule" },
    {
        path: "admin",
        loadChildren: "./components/admin/admin.module#AdminModule"
    },
    {
        path: "pricing",
        loadChildren: "./components/pricing/pricing.module#PricingModule"
    },
    {
        path: "about",
        loadChildren: "./components/about/about.module#AboutModule"
    },
    {
        path: "contact",
        loadChildren: "./components/contact/contact.module#ContactModule"
    },
    // { path: 'product', loadChildren: './modules/product.module#ProductModule'}
    {
        path: "invoice",
        loadChildren: "./modules/invoice/invoice.module#InvoiceModule"
    },
    {
        path: "import-export",
        loadChildren: "./modules/import-export/import-export.module#ImportExportModule"
    },
    {
        path: "dashboard",
        loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
    },
    {
        path: "purchaseorder",
        loadChildren: "./modules/purchaseorder/purchaseorder.module#PurchaseorderModule"
    },
    {
        path: "purchaseinvoice",
        loadChildren: "./modules/purchase-invoice/purchase-invoice.module#PurchaseInvoiceModule"
    },
    {
        path: "goodsreturned",
        loadChildren: "./modules/goods-returned/goods-returned.module#GoodsReturnedModule"
    },
    {
        path: "pricing",
        loadChildren: "./modules/pricing/pricing.module#PricingModule"
    }
];
var appRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, {
    useHash: true,
    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* PreloadAllModules */]
});
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/common/props.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prop; });
var Prop = (function () {
    function Prop() {
    }
    return Prop;
}());

Prop.LANDING_PAGE = "/landingpage/landingpage";
Prop.SIGN_IN_PAGE = "/sign/singin";
Prop.SIGN_UP_PAGE = "/sign/singup";
Prop.FORGOT_PASSWORD_PAGE = "/sign/forgotpassword";
Prop.ADMIN_DASHBOARD_PAGE = "/admin/dashboard";
Prop.USER_DASHBOARD_PAGE = "/user/dashboard";
Prop.MY_PROFILE_PAGE = "/myprofile";
Prop.ACCOUNT_INIT_PAGE = "/sign/account-retail";
Prop.INVOICE_SEARCH_PAGE = "/admin/invoice-search";
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "../../../../../src/app/common/rest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__ = __webpack_require__("../../../../../src/app/shared/common/app.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_http_service__ = __webpack_require__("../../../../../src/app/shared/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestService = (function () {
    function RestService(httpService) {
        this.httpService = httpService;
        this.REST_TYPE_GET = "GET";
        this.REST_TYPE_POST = "POST";
        this.REST_TYPE_PUT = "PUT";
        this.REST_TYPE_DELETE = "DELETE";
        this.REST_APP_SERVICE_URL = "/rest";
        this.REST_DATA_LOAD_SERVICE_URL = "/dataload";
        this.REST_REPORT_SERVICE_URL = "/report";
        this.REST_PRINT_SERVICE_URL = "/print";
        this.REST_INVOICE_SERVICE_URL = "/invoice";
        this.reports_url = "reports/data";
        httpService.API_ENDPOINT = __WEBPACK_IMPORTED_MODULE_4__props__["a" /* Prop */].API_ENDPOINT;
        httpService.REPORT_URL = __WEBPACK_IMPORTED_MODULE_4__props__["a" /* Prop */].REPORT_URL;
        httpService.CRM_URL = __WEBPACK_IMPORTED_MODULE_4__props__["a" /* Prop */].CRM_URL;
    }
    RestService.prototype.showLoader = function (show) {
        this.httpService.showLoader(show);
    };
    RestService.prototype.showSpinner = function (show) {
        this.httpService.showSpinner(show);
    };
    RestService.prototype.dataload = function (category, data) {
        data = data ? data : {};
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "data/" + category;
        reqBody.showLoader = false;
        reqBody.reqData.data = data;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.dataloadFromFile = function (filePath) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = filePath;
        reqBody.showLoader = false;
        return this.httpService.restServiceForfile(reqBody);
    };
    RestService.prototype.signin = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "user/login";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.authMethod(reqBody);
    };
    RestService.prototype.setSession = function (data) {
        this.httpService.setSession(data);
    };
    RestService.prototype.signup = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.url = "company";
        reqBody.showLoader = true;
        reqBody.reqData.data = enitityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.reportDownload = function (reqData, fileName) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.url = "reports/download/monthly";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        return this.httpService.reportDownload(reqBody, fileName, this.httpService.XLSX_TYPE_DOWNLOAD);
    };
    // forgotpassword(enitityData: any){
    //     const reqBody: ReqBody = new ReqBody();
    //      reqBody.type = this.REST_TYPE_POST;
    //     reqBody.url =  'user/password';
    //     reqBody.showLoader = true;
    //     reqBody.reqData.data = enitityData;
    //     return this.httpService.authMethod(reqBody);
    // }
    //   sendOtp(enitityData: any){
    //     const reqBody: ReqBody = new ReqBody();
    //      reqBody.type = this.REST_TYPE_PUT;
    //     reqBody.url =  'otp/update';
    //     reqBody.showLoader = true;
    //     reqBody.reqData.data = enitityData;
    //     return this.httpService.authMethod(reqBody);
    // }
    RestService.prototype.profileDetails = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "company/" + entityData.id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.authMethod2(reqBody);
    };
    RestService.prototype.accountDetails = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "user/" + entityData.id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.otpCreate = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.url = "otp/create";
        reqBody.showLoader = true;
        reqBody.reqData.data = enitityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.otpResend = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "otp/create";
        reqBody.showLoader = true;
        reqBody.reqData.data = enitityData;
        return this.httpService.authMethod(reqBody);
    };
    // otpresend(enitityData: any){
    //     const reqBody: ReqBody = new ReqBody();
    //     reqBody.url = "otp/create";
    //     reqBody.showLoader = true;
    //     reqBody.reqData.data = enitityData;
    //     return this.httpService.restCall(reqBody);
    // }
    RestService.prototype.otpVerify = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_PUT;
        reqBody.url = "otp/update";
        reqBody.showLoader = true;
        reqBody.reqData.data = enitityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.changePassword = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.url = "user/password";
        reqBody.type = this.REST_TYPE_POST;
        reqBody.showLoader = true;
        reqBody.reqData.data = enitityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.bankDetails = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "company/bank/" + entityData;
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.profileUpdate = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "company/profile";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    // loadQualityList() {
    //     const reqBody: ReqBody = new ReqBody();
    //     reqBody.url = this.REST_DATA_LOAD_SERVICE_URL+'/qualitylist';
    //     reqBody.type = this.REST_TYPE_GET;
    //     reqBody.reqData.data = {};
    //     reqBody.reqData.data.pid = Storage.pid;
    //     reqBody.showLoader = false;
    //     return this.httpService.restCall(reqBody);
    // }
    RestService.prototype.retriveProducts = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "stockitem/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id + "?operation=invoice";
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        //reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retriveServices = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "service/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        //reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchProducts = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "product";
        reqBody.showLoader = false;
        reqBody.reqData.data = entityData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retriveCustomer = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "customer/search?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id + "&operation=list";
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        // reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retriveCustomersForInvoice = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "customer/search?companyId=" +
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id +
                "&operation=invoice";
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        // reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retriveInvoice = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "invoice/search";
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retreiveCustomerById = function (customerId) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "customer";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.customerId = customerId;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    //    retriveCustomerAllforCMB() {
    //        const reqBody: ReqBody = new ReqBody();
    //        reqBody.type = this.REST_TYPE_GET;
    //        reqBody.url = "customer/searchCombo";
    //        reqBody.showLoader = false;
    //        reqBody.reqData.data ={};
    //        return this.httpService.restCall(reqBody);
    //    }
    RestService.prototype.saveInvoice = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "invoice";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.updateInvoice = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        console.log(reqBody + "idahkgf");
        reqBody.type = this.REST_TYPE_PUT;
        reqBody.url = "invoice";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    // searchInvoice(reqData: any) {
    //   console.log('searchInvoice')
    //   const reqBody: ReqBody = new ReqBody();
    //   reqBody.type = this.REST_TYPE_GET;
    //   reqBody.url = "invoice/search";
    //   reqBody.showLoader = false;
    //   reqBody.reqData.data = reqData;
    //   reqBody.reqData.data.companyId = Storage.getBranch().id;
    //   return this.httpService.restCall(reqBody);
    // }
    RestService.prototype.searchInvoice = function (reqData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "invoice/search";
        reqBody.showLoader = false;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    //method for customer sale search for payment
    RestService.prototype.searchInvoiceByCutomerIdForPayment = function (customerId) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "invoice/search?customerId=" +
                customerId +
                "&isPayment=1&companyId=" +
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = false;
        //reqBody.reqData.data = {};
        //        reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchUnpaidCutomerFrmInvoiceForPayment = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "invoice/search?isPayment=1&companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = false;
        //  reqBody.reqData.data = {};
        // reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchCustomers = function (reqData) {
        //alert("Hi=====123");
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "customer/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.customerSave = function (entityData) {
        console.log("customerSave");
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "customer";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.customerUpdate = function (entityData) {
        console.log("customerUpdate");
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "customer";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.customerEdit = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "customer/" + id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.customerDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "customer/" + +entityData.id + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        // reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.invoiceEmail = function (id, entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "invoice/email";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.invoiceId = parseInt(id);
        reqBody.reqData.data.email = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.invoiceDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "invoice/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.invoiceOpen = function (id) {
        this.invoicePDF(id, this.httpService.PDF_TYPE_OPEN);
    };
    // invoiceEdit(id: any) {
    //   this.invoiceEdit(id, this.httpService.PDF_TYPE_EDIT);
    // }
    RestService.prototype.invoiceDownload = function (id) {
        this.invoicePDFS(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.invoicePrint = function (id) {
        this.invoicePDF(id, this.httpService.PDF_TYPE_PRINT);
    };
    RestService.prototype.invoicePDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "invoice/print?id=" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "Invoice", type);
    };
    RestService.prototype.invoicePDFS = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "invoice/pdf?id=" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.downloadPDFReport(reqBody, "Invoice", type);
    };
    RestService.prototype.inventoryEntity = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "product/" + id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        // reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.inventorySave = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "product";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.inventoryDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url = "product";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        //reqBody.reqData.data.type = type;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.serviceEntity = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "service/" + id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.serviceSave = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "service";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.serviceDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_PUT;
        reqBody.url = "service";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.supplierSave = function (entityData) {
        //alert("Hi----"+entityData);
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "suppliers";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        //reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchSupplier = function (reqData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "suppliers/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchPurchaseInvoiceBySupplierIdForPayment = function (supplierId) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "/purchase/invoices/supplier/" + supplierId;
        reqBody.showLoader = false;
        //reqBody.reqData.data = {};
        //        reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retriveSupplier = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "suppliers/search";
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getSupplier = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "supplier/" + entityData.id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.supplierEdit = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "suppliers/" + id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.supplierDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "suppliers/" + entityData.id + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.supplierPrint = function (id) {
        this.supplierPDF(id, this.httpService.PDF_TYPE_PRINT);
    };
    RestService.prototype.supplierOpen = function (id) {
        this.supplierPDF(id, this.httpService.PDF_TYPE_OPEN);
    };
    RestService.prototype.supplierDownload = function (id) {
        this.supplierPDF(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.supplierPDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "suppliers/view/" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "Payment", type);
    };
    RestService.prototype.supplierEmail = function (id, entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "suppliers/email";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.invoiceId = parseInt(id);
        reqBody.reqData.data.email = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.paymentSave = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "payment";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchPayment = function (reqData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        console.log("mm" + reqBody);
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "payment/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.paymentDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "payment/" + entityData.id + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.paymentEdit = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "payment/" + id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.paymentPrint = function (id) {
        this.paymentPDF(id, this.httpService.PDF_TYPE_PRINT);
    };
    RestService.prototype.paymentOpen = function (id) {
        this.paymentPDF(id, this.httpService.PDF_TYPE_OPEN);
    };
    RestService.prototype.paymentDownload = function (id) {
        this.paymentPDF(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.paymentPDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "payment/view/" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "Payment", type);
    };
    RestService.prototype.paymentEmail = function (id, entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "payment/email";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.invoiceId = parseInt(id);
        reqBody.reqData.data.email = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.saveQuotations = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "quotations";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchQuotations = function (reqData) {
        // alert("hi");
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "quotations/search";
        reqBody.showLoader = false;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.quotationsEmail = function (id, entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "quotations/email";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.invoiceId = parseInt(id);
        reqBody.reqData.data.email = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.quotationsDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "quotations/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.quotationsOpen = function (id) {
        this.quotationsPDF(id, this.httpService.PDF_TYPE_OPEN);
    };
    RestService.prototype.quotationsDownload = function (id) {
        this.quotationsPDFS(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.quotationsPrint = function (id) {
        this.quotationsPDF(id, this.httpService.PDF_TYPE_PRINT);
    };
    RestService.prototype.quotationsPDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "quotation/print?id=" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "Quotations", type);
    };
    RestService.prototype.quotationsPDFS = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "quotation/pdf?id=" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "Quotations", type);
    };
    RestService.prototype.quotationsEdit = function (id) {
        //alert(id);
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "quotations/" + id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.expenseSave = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "expense";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchExpense = function (reqData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        console.log("mm" + reqBody);
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "expense/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.expenseDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "expense/" + entityData.id + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.expenseEdit = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "expense/" + id + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.expensePrint = function (id) {
        this.expensePDF(id, this.httpService.PDF_TYPE_PRINT);
    };
    RestService.prototype.expenseOpen = function (id) {
        this.expensePDF(id, this.httpService.PDF_TYPE_OPEN);
    };
    RestService.prototype.expenseDownload = function (id) {
        this.expensePDF(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.expenseEmail = function (id, entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "expense/email";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.invoiceId = parseInt(id);
        reqBody.reqData.data.email = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.expensePDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "expense/view/" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "Expense", type);
    };
    RestService.prototype.retriveSuppliers = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "suppliers/search";
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.customerImport = function (formData) {
        // this.httpService.REPORT_URL = 'http://192.168.1.14:2002/'
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "import/customerjson";
        reqBody.showLoader = true;
        reqBody.reqData.data = formData;
        return this.httpService.fileUpload(reqBody);
    };
    RestService.prototype.productImport = function (formData) {
        // this.httpService.REPORT_URL = 'http://192.168.1.7:5000/'
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "import/productjson";
        reqBody.showLoader = true;
        reqBody.reqData.data = formData;
        return this.httpService.fileUpload(reqBody);
    };
    RestService.prototype.serviceImport = function (formData) {
        //  this.httpService.REPORT_URL = 'http://192.168.1.7:5000/'
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "import/servicejson";
        reqBody.showLoader = true;
        reqBody.reqData.data = formData;
        return this.httpService.fileUpload(reqBody);
    };
    // customerExport(reqData:any,filename,type){
    //   this.httpService.REPORT_URL = 'http://192.168.1.14:2002'
    //   const reqBody: ReqBody = new ReqBody();
    //   reqBody.type = this.REST_TYPE_GET;
    //   reqBody.url = "/import/customer";
    //   console.log(reqBody.url)
    //   reqBody.showLoader = true;
    //   reqBody.reqData.data = reqData;
    //   // filename
    //   return this.httpService.downloadPDFReport(reqBody,filename,type);
    // }
    RestService.prototype.crdnSave = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "crdn";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchCRDNList = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "crdn";
        reqBody.showLoader = false;
        reqBody.reqData.data = entityData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getCRDN = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "crdn/" + id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.crdnDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url = "crdn/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.retriveUserSettings = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "setting/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.settingsSave = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "setting";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getReports = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "reports/list";
        reqBody.showLoader = false;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.generateReport = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "reports/data";
        reqBody.showLoader = false;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.getMacAddress = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "license/macaddress";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.generateLicense = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "license/generatekey";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.CRM_URL);
    };
    RestService.prototype.saveLicense = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "license/savekey";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.validateLicense = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "license/validate";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.getStockItemCategories = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/category";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getStockItemCompanies = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/company";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getStockItemBrands = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/brands";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getStockItemManufacturers = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/manufacturer";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getProductItem = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/productname";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getServiceItem = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "service/servicename";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.saveStockItem = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "stockitem";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchStockItems = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "stockitem/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id + "?operation=list";
        reqBody.showLoader = true;
        // reqBody.reqData.data = {};
        // reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchServiceItems = function (enitityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "service/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        // reqBody.reqData.data = {};
        // reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getStockItems = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/company/" + entityData.id + "?operation=invoice";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.stockItemDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "stockitem/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.serviceItemDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "service/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getStockItem = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/" + id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getService = function (id) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "service/" + id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getPurchaseOrder = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "purchase/order/" +
                entityData.id +
                "?companyId=" +
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.savePurchaseOrder = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "purchase/order";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.purchaseOrderDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "purchase/order/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getInvoice = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "invoice/" + entityData.id + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getPurchaseInvoice = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url =
            "purchase/invoice/" +
                entityData.id +
                "?companyId=" +
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.savePurchaseInvoice = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "purchase/invoice";
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        console.log(reqBody.reqData.data);
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.purchaseInvoiceDelete = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_DELETE;
        reqBody.url =
            "purchase/invoice/" + entityData + "?companyId=" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getPurchasesInvoices = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "purchase/invoices/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        //reqBody.reqData.data = entityDatsa;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchPurchaseInvoice = function (reqData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        console.log("mm" + reqBody);
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "purchase/invoice/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.searchPurchaseOrder = function (reqData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        console.log("mm" + reqBody);
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "purchase/order/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = reqData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getPurchasesOrders = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "purchase/orders/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.purchaseOrderDownload = function (id) {
        this.purchaseOrderPDF(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.purchaseOrderPDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "purchaseorder/view/" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "PurchaseOrder", type);
    };
    RestService.prototype.purchaseInvoiceDownload = function (id) {
        this.purchaseInvoicePDF(id, this.httpService.PDF_TYPE_DOWNLOAD);
    };
    RestService.prototype.purchaseInvoicePDF = function (id, type) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "purchase/invoice/view/" + id;
        reqBody.showLoader = true;
        //reqBody.reqData.data =entityData;
        this.httpService.download(reqBody, "PurchaseInvoice", type);
    };
    RestService.prototype.getPayees = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "expense/payees/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.getExpenseTypes = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "expense/types/";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        return this.httpService.restCall(reqBody);
    };
    RestService.prototype.fetchStaff = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "staff";
        reqBody.showLoader = false;
        // reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.saveStaff = function (entityData) {
        if (__WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch()) {
            entityData.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        }
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "staff";
        reqBody.showLoader = false;
        reqBody.reqData.data = entityData;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL);
    };
    RestService.prototype.webReports = function (params) {
        console.log("iam in reports" + params);
        var reqBody = new __WEBPACK_IMPORTED_MODULE_0__shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.reqData = params;
        return this.httpService.restCall(reqBody, this.httpService.REPORT_URL +
            "reports/data" +
            params +
            "&companyId=" +
            __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id);
    };
    return RestService;
}());
RestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], RestService);

var _a;
//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/services/pricing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__ = __webpack_require__("../../../../../src/app/shared/common/app.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_service_http_service__ = __webpack_require__("../../../../../src/app/shared/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PricingService = (function () {
    function PricingService(httpService) {
        this.httpService = httpService;
        this.REST_TYPE_GET = "GET";
        this.REST_TYPE_POST = "POST";
    }
    PricingService.prototype.retreiveCustomers = function () {
        console.log("fetch customers for a company");
        var customerList = [];
        var reqBody = new __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "customer/search";
        reqBody.showLoader = true;
        reqBody.reqData.data = {};
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    PricingService.prototype.saveCustomerPricing = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "pricing/customer";
        reqBody.showLoader = true;
        entityData = { "pricingDiscountCustomers": entityData };
        console.log(entityData);
        reqBody.reqData.data = entityData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    PricingService.prototype.retreiveStockItem = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "stockitem/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        //reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    PricingService.prototype.saveStockItemPricing = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "pricing/stockitem";
        reqBody.showLoader = true;
        entityData = { "pricingStockItemList": entityData };
        console.log(entityData);
        reqBody.reqData.data = entityData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    PricingService.prototype.retreiveServices = function () {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_GET;
        reqBody.url = "service/company/" + __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        reqBody.showLoader = false;
        reqBody.reqData.data = {};
        //reqBody.reqData.data.companyId = Storage.getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    PricingService.prototype.saveServicePricing = function (entityData) {
        var reqBody = new __WEBPACK_IMPORTED_MODULE_1_app_shared_common_app_entity__["a" /* ReqBody */]();
        reqBody.type = this.REST_TYPE_POST;
        reqBody.url = "pricing/service";
        reqBody.showLoader = true;
        entityData = { "pricingDiscountServices": entityData };
        console.log(entityData);
        reqBody.reqData.data = entityData;
        reqBody.reqData.data.companyId = __WEBPACK_IMPORTED_MODULE_3__shared_utils_storage__["a" /* Storage */].getBranch().id;
        return this.httpService.restCall(reqBody);
    };
    return PricingService;
}());
PricingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_service_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_service_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], PricingService);

var _a;
//# sourceMappingURL=pricing.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/invoice/DialogContentExampleDialogInvoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContentExampleDialogInvoices; });
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





var DialogContentExampleDialogInvoices = (function () {
    function DialogContentExampleDialogInvoices(restService, appService, dialogRef, data) {
        this.restService = restService;
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.stockItemDataSource = [];
        this.isGST = false;
        this.isIGST = false;
        this.displayedColumns = [
            "Item",
            "HSN",
            "Qty",
            "Rate",
            "Discount",
            "Taxable Amount",
            "SGST",
            "CGST",
            "IGST",
            "CESS",
            "Total"
        ];
        this.displayedColumnsDef = [
            "stockItemId.productName",
            "stockItemId.hsnCodeNames",
            "quantity",
            "unit",
            "discountAmount",
            "itemsubtotalBeforeTax",
            "sgstAmount",
            "csgstAmount",
            "IgstAmount",
            "cessAmount",
            "totalAfterTax"
        ];
        this.companyInfo = __WEBPACK_IMPORTED_MODULE_4__shared_utils_storage__["a" /* Storage */].getSessionUser().company;
        console.log(this.companyInfo);
        this.dataSource = __WEBPACK_IMPORTED_MODULE_4__shared_utils_storage__["a" /* Storage */].getLocalItem("selectedItem");
        console.log(this.dataSource);
        this.stockItemDataSource = this.dataSource.productItems;
        this.servicesDataSource = this.dataSource.serviceItems;
        console.log(" this.stockItemDataSource ", this.stockItemDataSource);
        console.log(" this.servicesDataSource ", this.servicesDataSource);
        this.bankDetails = __WEBPACK_IMPORTED_MODULE_4__shared_utils_storage__["a" /* Storage */].getSessionUser().bankDetails;
        console.log("this.bankDetails", this.bankDetails);
        if (this.companyInfo.address.state == this.dataSource.customer.address.state) {
            this.isGST = true;
        }
        if (this.companyInfo.address.state != this.dataSource.customer.address.state) {
            this.isIGST = true;
        }
    }
    DialogContentExampleDialogInvoices.prototype.ngOnInit = function () { };
    DialogContentExampleDialogInvoices.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogContentExampleDialogInvoices.prototype.ok = function () {
        var _this = this;
        this.restService.invoiceDelete(this.id).subscribe(function (result) {
            _this.dialogRef.close();
            _this.appService.showMessage("Invoice Deleted Successfully ");
        });
    };
    DialogContentExampleDialogInvoices.prototype.print = function () {
        var printContent = document.getElementById("component1");
        var WindowPrt = window.open("", "", "left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0");
        WindowPrt.document.write(printContent.innerHTML);
        WindowPrt.document.close();
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
    };
    DialogContentExampleDialogInvoices.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return DialogContentExampleDialogInvoices;
}());
DialogContentExampleDialogInvoices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dialog-printa4.component",
        template: __webpack_require__("../../../../../src/app/components/admin/invoice/dialog-printa4.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/invoice/dialog-printa4.scss")]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _c || Object, Object])
], DialogContentExampleDialogInvoices);

var _a, _b, _c;
//# sourceMappingURL=DialogContentExampleDialogInvoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/invoice/dialog-printa4.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-y:scroll;height:500px;overflow-x: hidden;\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n    <div\r\n      fxFlex=\"100\"\r\n      fxFlex.md=\"100\"\r\n      fxFlex.lg=\"100\"\r\n      fxFlex.xs=\"100\"\r\n      fxFlex.sm=\"100\"\r\n    >\r\n      <button md-raised-button color=\"accent\" (click)=\"print()\">\r\n        Print\r\n      </button>\r\n      <button md-raised-button color=\"accent\" (click)=\"cancel()\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div id=\"component1\">\r\n    <div\r\n      fxLayout=\"row wrap\"\r\n      fxLayoutAlign=\"start start\"\r\n      style=\"margin-top:15px;margin-bottom:5px\"\r\n    >\r\n      <div\r\n        fxFlex=\"100\"\r\n        fxFlex.md=\"100\"\r\n        fxFlex.lg=\"100\"\r\n        fxFlex.xs=\"100\"\r\n        fxFlex.sm=\"100\"\r\n      >\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"50\"\r\n            fxFlex.md=\"50\"\r\n            fxFlex.lg=\"50\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"font-size:15px;font-family:arial, sans-serif;font-weight:600;\"\r\n              >{{ companyInfo.name }}</span\r\n            >\r\n          </div>\r\n          <div\r\n            fxFlex=\"50\"\r\n            fxFlex.md=\"50\"\r\n            fxFlex.lg=\"50\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"font-size:15px;font-family:arial, sans-serif;font-weight:600;float:right\"\r\n              >Total : ₹ {{ dataSource.total }}</span\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      fxLayout=\"row wrap\"\r\n      fxLayoutAlign=\"start start\"\r\n      style=\"margin-top:5px;margin-bottom:5px\"\r\n    >\r\n      <div\r\n        fxFlex=\"100\"\r\n        fxFlex.md=\"100\"\r\n        fxFlex.lg=\"100\"\r\n        fxFlex.xs=\"100\"\r\n        fxFlex.sm=\"100\"\r\n      >\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"50\"\r\n            fxFlex.md=\"50\"\r\n            fxFlex.lg=\"50\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayoutGap=\"30px\">\r\n              <span\r\n                style=\"font-size:12px;font-family:arial, sans-serif;font-weight:700;\"\r\n                >GSTIN\r\n              </span>\r\n\r\n              <span style=\"font-size:12px;font-family:arial, sans-serif\">{{\r\n                companyInfo.gstin\r\n              }}</span>\r\n            </div>\r\n          </div>\r\n          <div\r\n            fxFlex=\"50\"\r\n            fxFlex.md=\"50\"\r\n            fxFlex.lg=\"50\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div style=\"float:right\">\r\n              <span\r\n                style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                >Invoice Date :\r\n              </span>\r\n              <span\r\n                style=\"font-family:arial, sans-serif;font-size:12px;float:right\"\r\n                >{{ dataSource.invoiceDate | date }}</span\r\n              >\r\n              <br />\r\n              <span\r\n                style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                >Invoice No :\r\n              </span>\r\n              <span\r\n                style=\"font-family:arial, sans-serif;font-size:12px;float:right\"\r\n                >{{ dataSource.invoiceNumber }}</span\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n      <div\r\n        fxFlex=\"100\"\r\n        fxFlex.md=\"100\"\r\n        fxFlex.lg=\"100\"\r\n        fxFlex.xs=\"100\"\r\n        fxFlex.sm=\"100\"\r\n      >\r\n        <div fxLayout=\"row wrap\">\r\n          <div fxFlex=\"35\">\r\n            <div\r\n              style=\"width:100%; border:1px solid rgb(102, 98, 98);margin-top:15px\"\r\n            ></div>\r\n          </div>\r\n          <div fxFlex=\"30\">\r\n            <div style=\"text-align: center;\">\r\n              <span\r\n                align=\"center\"\r\n                style=\"font-family:arial, sans-serif;font-size:28px;\"\r\n                >Tax Invoice</span\r\n              >\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"35\">\r\n            <div\r\n              style=\"width:100%; border:1px solid rgb(102, 98, 98);margin-top:15px\"\r\n            ></div>\r\n          </div>\r\n        </div>\r\n        <div style=\"padding-bottom:10px\"></div>\r\n        <!-- <h3 style=\"font-family:arial, sans-serif;font-size:12px\">{{ dataSource.company.name }}</h3> -->\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"65\"\r\n            fxFlex.md=\"65\"\r\n            fxFlex.lg=\"65\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <!-- <span style=\"font-family:arial, sans-serif;font-size:12px\">GSTIN:{{ dataSource.company.gstin }}</span>\r\n            <br>\r\n          <span style=\"font-family:arial, sans-serif;font-size:12px\">PAN: {{ dataSource.company.pan }}</span> -->\r\n\r\n            <!-- <span style=\"font-family:arial, sans-serif;font-size:12px\">PHONE: {{ dataSource.company.mobile }}</span>\r\n            <br>\r\n          <span style=\"font-family:arial, sans-serif;font-size:12px\">EMAIL: {{ dataSource.company.email }}</span> -->\r\n          </div>\r\n          <!-- </ng-container> -->\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"40\"\r\n            fxFlex.md=\"40\"\r\n            fxFlex.lg=\"40\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"font-weight: 600;padding-top:10px;font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n            >\r\n              Customer Name:\r\n            </span>\r\n            <span\r\n              style=\"font-weight: 600;padding-top:10px;font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.businessName | titlecase }}</span\r\n            >\r\n            <br />\r\n            <span\r\n              style=\"font-weight: 600;padding-top:10px;font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n            >\r\n              Customer GSTIN:\r\n            </span>\r\n            <span\r\n              style=\"font-weight: 600;padding-top:10px;font-family:arial, sans-serif;font-size:12px\"\r\n              >{{ dataSource.customer.gstNo }}</span\r\n            >\r\n          </div>\r\n          <div\r\n            fxFlex=\"30\"\r\n            fxFlex.md=\"30\"\r\n            fxFlex.lg=\"30\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div\r\n              style=\"font-weight: 600;padding-top:10px;font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n            >\r\n              Billing Address\r\n            </div>\r\n            <div style=\"font-family:arial, sans-serif;font-size:12px\">\r\n              {{ dataSource.customer.businessName | titlecase }}\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.billingAddress.lane\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.billingAddress.lane }}\r\n              <span\r\n                *ngIf=\"dataSource.customer.billingAddress.street\"\r\n                style=\"font-family:arial, sans-serif;font-size:12px\"\r\n              >\r\n                {{ dataSource.customer.billingAddress.street }}</span\r\n              >\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.billingAddress.area\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.billingAddress.area }}\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.billingAddress.city\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.billingAddress.city }}\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.billingAddress.state\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.billingAddress.state }} -\r\n\r\n              <span\r\n                *ngIf=\"dataSource.customer.billingAddress.zipCode\"\r\n                style=\"font-family:arial, sans-serif;font-size:12px\"\r\n              >\r\n                {{ dataSource.customer.billingAddress.zipCode }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div\r\n            fxFlex=\"30\"\r\n            fxFlex.md=\"30\"\r\n            fxFlex.lg=\"30\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div\r\n              style=\"font-weight: 600;padding-top:10px;font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n            >\r\n              Shipping Address\r\n            </div>\r\n\r\n            <div style=\"font-family:arial, sans-serif;font-size:12px\">\r\n              {{ dataSource.customer.businessName | titlecase }}\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.shippingAddress.street\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.shippingAddress.street }}\r\n              <span\r\n                *ngIf=\"dataSource.customer.shippingAddress.area\"\r\n                style=\"font-family:arial, sans-serif;font-size:12px\"\r\n              >\r\n                {{ dataSource.customer.shippingAddress.area }}\r\n              </span>\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.shippingAddress.city\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.shippingAddress.city }}\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"dataSource.customer.shippingAddress.state\"\r\n              style=\"font-family:arial, sans-serif;font-size:12px\"\r\n            >\r\n              {{ dataSource.customer.shippingAddress.state }} -\r\n              <span\r\n                *ngIf=\"dataSource.customer.shippingAddress.zipCode\"\r\n                style=\"font-family:arial, sans-serif;font-size:12px\"\r\n              >\r\n                {{ dataSource.customer.shippingAddress.zipCode }}</span\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div fxFlex=\"100\">\r\n            <div fxLayout=\"row wrap\" style=\"margin-top:10px;\">\r\n              <div fxFlex=\"33.3333\">\r\n                <span\r\n                  style=\"font-weight:700;margin-bottom:10px;font-family:arial, sans-serif;font-size:12px\"\r\n                  >Payment Terms</span\r\n                >\r\n              </div>\r\n              <div fxFlex=\"33.3333\">\r\n                <span\r\n                  style=\"font-weight:700;margin-bottom:10px;font-family:arial, sans-serif;font-size:12px\"\r\n                  >Due Date</span\r\n                >\r\n                <span\r\n                  style=\"padding: 3px;font-family:arial, sans-serif;font-size:12px\"\r\n                >\r\n                  {{ dataSource.dueDate | date }}\r\n                </span>\r\n              </div>\r\n              <div fxFlex=\"33.3333\">\r\n                <span\r\n                  style=\"font-weight:700;margin-bottom:10px;font-family:arial, sans-serif;font-size:12px\"\r\n                  >Place Of Supply</span\r\n                >\r\n                <span\r\n                  style=\"padding: 3px;font-family:arial, sans-serif;font-size:12px\"\r\n                >\r\n                  {{ dataSource.customer.shippingAddress.state }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"padding-bottom:21px\"></div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <table *ngIf=\"stockItemDataSource.length <= 0\">\r\n            <tbody>\r\n              <tr>\r\n                <td>No data found</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <table\r\n            style=\" font-family: arial, sans-serif;\r\n      border-collapse: collapse;\r\n      width: 100%;font-size:12px\"\r\n            *ngIf=\"stockItemDataSource.length > 0\"\r\n          >\r\n            <tr>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700\"\r\n              >\r\n                Item\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700\"\r\n              >\r\n                Hsn\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700\"\r\n              >\r\n                Qty\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n              >\r\n                Rate\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n              >\r\n                Discount\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n              >\r\n                Taxable Amount(₹)\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n                *ngIf=\"isGST\"\r\n              >\r\n                SGST ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n                *ngIf=\"isGST\"\r\n              >\r\n                CGST ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n                *ngIf=\"isIGST\"\r\n              >\r\n                IGST ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n              >\r\n                CESS ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n              >\r\n                Total ₹\r\n              </th>\r\n            </tr>\r\n            <tr *ngFor=\"let row of stockItemDataSource\">\r\n              <td\r\n                style=\" border: 1px solid #dddddd;\r\n            text-align: left;\r\n            padding: 8px;\"\r\n              >\r\n                {{ row.stockItemId.productName }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.stockItemId.hsnCodeNames }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.quantity }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.unit }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.discountAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.totalAmount }}\r\n              </td>\r\n              <td\r\n                *ngIf=\"isGST\"\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.sgstAmount | number }}\r\n              </td>\r\n              <td\r\n                *ngIf=\"isGST\"\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.cgstAmount | number }}\r\n              </td>\r\n              <td\r\n                *ngIf=\"isIGST\"\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px; \"\r\n              >\r\n                {{ row.igstAmount | number }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.cessAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.totalAfterTax }}\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <br />\r\n        <br />\r\n        <br />\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <table\r\n            style=\" font-family: arial, sans-serif;\r\n          border-collapse: collapse;\r\n          width: 100%;font-size:12px\"\r\n            *ngIf=\"servicesDataSource.length > 0\"\r\n          >\r\n            <tr>\r\n              <th\r\n                style=\"border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700\"\r\n              >\r\n                Item\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n              >\r\n                Rate\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n              >\r\n                Discount\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n              >\r\n                Taxable Amount(₹)\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n                *ngIf=\"isGST\"\r\n              >\r\n                SGST ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n                *ngIf=\"isGST\"\r\n              >\r\n                CGST ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n                *ngIf=\"isIGST\"\r\n              >\r\n                IGST ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n              >\r\n                CESS ₹\r\n              </th>\r\n              <th\r\n                style=\" border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;font-weight:700;\"\r\n              >\r\n                Total ₹\r\n              </th>\r\n            </tr>\r\n            <tr *ngFor=\"let row of servicesDataSource\">\r\n              <td\r\n                style=\" border: 1px solid #dddddd;\r\n          text-align: left;\r\n          padding: 8px;\"\r\n              >\r\n                {{ row.service.serviceName }}\r\n              </td>\r\n\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.unit }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.discountAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.totalAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n                *ngIf=\"isGST\"\r\n              >\r\n                {{ row.sgstAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n                *ngIf=\"isGST\"\r\n              >\r\n                {{ row.cgstAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px; \"\r\n                *ngIf=\"isIGST\"\r\n              >\r\n                {{ row.igstAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.cessAmount }}\r\n              </td>\r\n              <td\r\n                style=\" border: 1px solid #dddddd;text-align: left;padding: 8px;\"\r\n              >\r\n                {{ row.totalAfterTax }}\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\r\n          <table>\r\n            <tr>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th\r\n                style=\"\r\n          text-align: left;\r\n          padding: 8px;font-weight:700;\"\r\n              >\r\n                Total(₹)\r\n              </th>\r\n              <th></th>\r\n              <th style=\"text-align: left;padding: 8px;font-weight:700;\">\r\n                {{ dataSource.totalTax }}\r\n              </th>\r\n              <th style=\" text-align: left;padding: 8px;font-weight:700;\">\r\n                {{ dataSource.cumilativeSgst }}\r\n              </th>\r\n              <th style=\" text-align: left;padding: 8px;font-weight:700;\">\r\n                {{ dataSource.cumilativeCgst }}\r\n              </th>\r\n              <th style=\"text-align: left;padding: 8px;font-weight:700;\">\r\n                {{ dataSource.cumilativeIgst }}\r\n              </th>\r\n              <th style=\"text-align: left;padding: 8px;font-weight:700;\">\r\n                {{ dataSource.cessAmount }}\r\n              </th>\r\n              <th style=\" text-align: left;padding: 8px;font-weight:700;\">\r\n                {{ dataSource.total }}\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div> -->\r\n        <div style=\"padding-bottom:10px\"></div>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:14px;font-weight:500\"\r\n                    >Taxable Amount :\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:13px;font-weight:500\"\r\n                    >₹ {{ dataSource.totalBeforeTax }}</span\r\n                  >\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:14px;font-weight:500\"\r\n                    >Total Tax :\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:13px;font-weight:500\"\r\n                  >\r\n                    ₹ {{ dataSource.totalTax }}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:14px;font-weight:500\"\r\n                    >Invoice Total :\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:13px;font-weight:500\"\r\n                  >\r\n                    ₹ {{ dataSource.total }}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:14px;font-weight:500\"\r\n                    >Invoice Total (In Words):\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:13px;font-weight:500;color: black;\"\r\n                  >\r\n                    {{ dataSource.total | numberToWords }}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:14px;font-weight:500\"\r\n                    >Due Amount :\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:13px;font-weight:500\"\r\n                  >\r\n                    ₹ {{ dataSource.dueAmount }}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:14px;font-weight:500\"\r\n                    >Paid Amount :\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                fxFlex=\"50\"\r\n                fxFlex.md=\"50\"\r\n                fxFlex.lg=\"50\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div style=\"text-align: right;padding:0px 10px\">\r\n                  <span\r\n                    style=\"font-family:arial, sans-serif;font-size:13px;font-weight:500\"\r\n                  >\r\n                    ₹ {{ dataSource.paidAmount }}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"margin-bottom:10px\"></div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\r\n          <div\r\n            fxFlex=\"70\"\r\n            fxFlex.md=\"70\"\r\n            fxFlex.lg=\"70\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"padding: 3px;font-family:arial, sans-serif;font-size:14px;font-weight:600\"\r\n              >Bank Account Details</span\r\n            >\r\n            <div style=\"width:36%; border:1px solid rgb(102, 98, 98)\"></div>\r\n            <div style=\"margin-bottom:5px\"></div>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"100\"\r\n                fxFlex.md=\"100\"\r\n                fxFlex.lg=\"100\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                  <div\r\n                    fxFlex=\"32\"\r\n                    fxFlex.md=\"32\"\r\n                    fxFlex.lg=\"32\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                        >Bank Name\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"10\"\r\n                    fxFlex.md=\"10\"\r\n                    fxFlex.lg=\"10\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div\r\n                      style=\"text-align: left;padding:0px 10px;font-weight:700\"\r\n                    >\r\n                      :&nbsp;\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"30\"\r\n                    fxFlex.md=\"30\"\r\n                    fxFlex.lg=\"30\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;\"\r\n                      >\r\n                        {{ bankDetails.bankName }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"100\"\r\n                fxFlex.md=\"100\"\r\n                fxFlex.lg=\"100\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                  <div\r\n                    fxFlex=\"32\"\r\n                    fxFlex.md=\"32\"\r\n                    fxFlex.lg=\"32\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                        >Account Number\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"10\"\r\n                    fxFlex.md=\"10\"\r\n                    fxFlex.lg=\"10\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div\r\n                      style=\"text-align: left;padding:0px 10px;font-weight:700\"\r\n                    >\r\n                      :&nbsp;\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"30\"\r\n                    fxFlex.md=\"30\"\r\n                    fxFlex.lg=\"30\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;\"\r\n                      >\r\n                        {{ bankDetails.accountNumber }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"100\"\r\n                fxFlex.md=\"100\"\r\n                fxFlex.lg=\"100\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                  <div\r\n                    fxFlex=\"32\"\r\n                    fxFlex.md=\"32\"\r\n                    fxFlex.lg=\"32\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                        >Branch Name\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"10\"\r\n                    fxFlex.md=\"10\"\r\n                    fxFlex.lg=\"10\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div\r\n                      style=\"text-align: left;padding:0px 10px;font-weight:700\"\r\n                    >\r\n                      :&nbsp;\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"30\"\r\n                    fxFlex.md=\"30\"\r\n                    fxFlex.lg=\"30\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;\"\r\n                      >\r\n                        {{ bankDetails.branch }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"100\"\r\n                fxFlex.md=\"100\"\r\n                fxFlex.lg=\"100\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                  <div\r\n                    fxFlex=\"32\"\r\n                    fxFlex.md=\"32\"\r\n                    fxFlex.lg=\"32\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                        >Address\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"10\"\r\n                    fxFlex.md=\"10\"\r\n                    fxFlex.lg=\"10\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div\r\n                      style=\"text-align: left;padding:0px 10px;font-weight:700\"\r\n                    >\r\n                      :&nbsp;\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"30\"\r\n                    fxFlex.md=\"30\"\r\n                    fxFlex.lg=\"30\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;\"\r\n                      >\r\n                        {{ bankDetails.bankAddress }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n              <div\r\n                fxFlex=\"100\"\r\n                fxFlex.md=\"100\"\r\n                fxFlex.lg=\"100\"\r\n                fxFlex.xs=\"100\"\r\n                fxFlex.sm=\"100\"\r\n              >\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                  <div\r\n                    fxFlex=\"32\"\r\n                    fxFlex.md=\"32\"\r\n                    fxFlex.lg=\"32\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;font-weight:700\"\r\n                        >IFSC\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"10\"\r\n                    fxFlex.md=\"10\"\r\n                    fxFlex.lg=\"10\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div\r\n                      style=\"text-align: left;padding:0px 10px;font-weight:700\"\r\n                    >\r\n                      :&nbsp;\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    fxFlex=\"30\"\r\n                    fxFlex.md=\"30\"\r\n                    fxFlex.lg=\"30\"\r\n                    fxFlex.xs=\"100\"\r\n                    fxFlex.sm=\"100\"\r\n                  >\r\n                    <div style=\"text-align: left;padding:0px 10px\">\r\n                      <span\r\n                        style=\"font-family:arial, sans-serif;font-size:12px;\"\r\n                      >\r\n                        {{ bankDetails.ifscCode }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"margin-bottom: 10px\"></div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"padding-bottom:10px;font-family: arial,sans-serif;font-size:12px;font-weight:700\"\r\n              >Notes:</span\r\n            >\r\n            <div style=\"margin-bottom: 5px\"></div>\r\n            <p\r\n              style=\"padding-bottom:10px;font-family: arial,sans-serif;font-size:12px\"\r\n            >\r\n              1. All disputes are subject to Hyderabad jurisdiction only.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\r\n          <div\r\n            fxFlex=\"50\"\r\n            fxFlex.md=\"50\"\r\n            fxFlex.lg=\"50\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"font-size: 12px;\r\n        padding: 7px;\r\n        float: left;\r\n        font-family: arial,sans-serif;font-weight:700\"\r\n              >Thank you for your business</span\r\n            >\r\n          </div>\r\n          <div\r\n            fxFlex=\"50\"\r\n            fxFlex.md=\"50\"\r\n            fxFlex.lg=\"50\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <span\r\n              style=\"float:right;\r\n        font-size: 12px;\r\n        padding: 5px;\r\n        font-family: arial,sans-serif;font-weight:700;\"\r\n              >Powered by\r\n              <svg\r\n                id=\"svg\"\r\n                version=\"1.1\"\r\n                width=\"15\"\r\n                height=\"15\"\r\n                viewBox=\"0 0 400 530\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                style=\"vertical-align: middle\"\r\n              >\r\n                <g id=\"svgg\">\r\n                  <path\r\n                    id=\"path0\"\r\n                    d=\"M341.500 7.872 C 339.355 7.958,337.600 8.176,337.600 8.356 C 337.600 8.536,335.485 8.808,332.900 8.962 C 330.315 9.115,328.140 9.411,328.067 9.620 C 327.993 9.829,327.318 10.000,326.567 10.000 C 325.815 10.000,325.200 10.163,325.200 10.362 C 325.200 10.562,324.300 10.849,323.200 11.000 C 322.100 11.151,321.200 11.424,321.200 11.606 C 321.200 11.788,320.660 12.055,320.000 12.200 C 319.340 12.345,318.800 12.610,318.800 12.788 C 318.800 12.967,318.370 13.221,317.844 13.353 C 314.952 14.079,316.432 14.800,320.813 14.800 C 323.471 14.800,325.200 14.958,325.200 15.200 C 325.200 15.420,324.570 15.600,323.800 15.600 C 323.030 15.600,322.400 15.756,322.400 15.947 C 322.400 16.138,321.654 16.395,320.742 16.517 C 319.831 16.639,318.976 16.907,318.842 17.112 C 318.709 17.317,317.925 17.609,317.100 17.760 C 316.275 17.912,315.600 18.188,315.600 18.373 C 315.600 18.558,314.790 18.831,313.800 18.979 C 312.810 19.128,312.000 19.418,312.000 19.625 C 312.000 19.831,311.550 20.000,311.000 20.000 C 310.450 20.000,310.000 20.160,310.000 20.355 C 310.000 20.550,309.190 20.831,308.200 20.979 C 307.210 21.128,306.400 21.405,306.400 21.596 C 306.400 21.786,305.410 22.066,304.200 22.217 C 302.990 22.368,302.000 22.635,302.000 22.809 C 302.000 22.983,301.100 23.249,300.000 23.400 C 298.900 23.551,298.000 23.817,298.000 23.991 C 298.000 24.165,297.653 24.397,297.230 24.508 C 296.688 24.650,296.523 24.544,296.674 24.151 C 296.792 23.844,297.318 23.485,297.844 23.353 C 298.370 23.221,298.800 22.967,298.800 22.788 C 298.800 22.610,299.340 22.345,300.000 22.200 C 300.660 22.055,301.200 21.791,301.200 21.614 C 301.200 21.436,302.010 21.169,303.000 21.021 C 303.990 20.872,304.800 20.582,304.800 20.375 C 304.800 20.169,305.430 20.000,306.200 20.000 C 306.970 20.000,307.600 19.836,307.600 19.635 C 307.600 19.434,308.320 19.149,309.200 19.000 C 310.080 18.851,310.800 18.585,310.800 18.408 C 310.800 18.231,311.255 17.973,311.810 17.833 C 313.418 17.430,315.048 15.600,313.800 15.600 C 313.470 15.600,313.200 15.763,313.200 15.962 C 313.200 16.162,312.300 16.449,311.200 16.600 C 310.100 16.751,309.200 17.027,309.200 17.213 C 309.200 17.399,308.390 17.672,307.400 17.821 C 306.410 17.969,305.600 18.234,305.600 18.408 C 305.600 18.583,303.890 18.854,301.800 19.010 C 299.710 19.167,298.000 19.454,298.000 19.648 C 298.000 19.841,297.370 20.000,296.600 20.000 C 295.830 20.000,295.200 20.163,295.200 20.362 C 295.200 20.562,294.300 20.849,293.200 21.000 C 292.100 21.151,291.200 21.424,291.200 21.606 C 291.200 21.788,290.660 22.055,290.000 22.200 C 289.340 22.345,288.800 22.610,288.800 22.788 C 288.800 22.967,288.370 23.221,287.844 23.353 C 284.952 24.079,286.432 24.800,290.813 24.800 C 293.471 24.800,295.200 24.958,295.200 25.200 C 295.200 25.420,294.750 25.600,294.200 25.600 C 293.650 25.600,293.200 25.763,293.200 25.962 C 293.200 26.162,292.300 26.449,291.200 26.600 C 290.100 26.751,289.200 27.027,289.200 27.213 C 289.200 27.399,288.390 27.672,287.400 27.821 C 286.410 27.969,285.600 28.236,285.600 28.414 C 285.600 28.591,285.060 28.855,284.400 29.000 C 283.740 29.145,283.200 29.429,283.200 29.632 C 283.200 29.834,282.930 30.000,282.600 30.000 C 282.270 30.000,282.000 30.160,282.000 30.357 C 282.000 30.553,281.550 30.826,281.000 30.964 C 280.450 31.102,280.000 31.392,280.000 31.608 C 280.000 31.823,279.739 32.000,279.419 32.000 C 279.100 32.000,278.227 32.630,277.479 33.400 C 276.731 34.170,275.986 34.800,275.824 34.800 C 275.661 34.800,277.535 32.801,279.989 30.358 C 282.442 27.915,284.339 25.805,284.203 25.670 C 284.067 25.534,283.831 25.620,283.678 25.861 C 283.525 26.102,282.815 26.426,282.100 26.582 C 281.385 26.737,280.800 27.009,280.800 27.187 C 280.800 27.365,280.170 27.629,279.400 27.774 C 278.630 27.918,278.000 28.208,278.000 28.418 C 278.000 28.628,277.724 28.800,277.387 28.800 C 277.051 28.800,276.671 29.070,276.545 29.400 C 276.418 29.730,276.064 30.000,275.757 30.000 C 275.451 30.000,275.200 30.163,275.200 30.362 C 275.200 30.562,274.300 30.849,273.200 31.000 C 272.100 31.151,271.200 31.424,271.200 31.606 C 271.200 31.788,270.660 32.055,270.000 32.200 C 269.340 32.345,268.800 32.610,268.800 32.788 C 268.800 32.967,268.370 33.221,267.844 33.353 C 264.952 34.079,266.432 34.800,270.813 34.800 C 273.471 34.800,275.200 34.958,275.200 35.200 C 275.200 35.420,274.570 35.600,273.800 35.600 C 273.030 35.600,272.400 35.756,272.400 35.947 C 272.400 36.138,271.654 36.395,270.742 36.517 C 269.831 36.639,268.976 36.907,268.842 37.112 C 268.709 37.317,267.925 37.609,267.100 37.760 C 266.275 37.912,265.600 38.191,265.600 38.381 C 265.600 38.570,263.890 38.854,261.800 39.010 C 259.710 39.167,258.000 39.454,258.000 39.648 C 258.000 39.841,257.370 40.000,256.600 40.000 C 255.830 40.000,255.200 40.160,255.200 40.355 C 255.200 40.551,254.570 40.829,253.800 40.974 C 253.030 41.118,252.400 41.394,252.400 41.586 C 252.400 41.779,251.860 42.055,251.200 42.200 C 250.540 42.345,250.000 42.610,250.000 42.788 C 250.000 42.967,249.507 43.237,248.904 43.388 C 248.301 43.540,247.716 43.805,247.604 43.978 C 247.492 44.151,246.953 44.432,246.407 44.602 C 245.750 44.808,246.942 43.392,249.932 40.414 C 252.417 37.940,254.339 35.805,254.203 35.670 C 254.067 35.534,253.829 35.629,253.674 35.880 C 253.519 36.131,252.899 36.460,252.296 36.612 C 251.693 36.763,251.200 37.033,251.200 37.212 C 251.200 37.390,250.660 37.655,250.000 37.800 C 249.340 37.945,248.800 38.215,248.800 38.400 C 248.800 38.585,248.260 38.855,247.600 39.000 C 246.940 39.145,246.400 39.429,246.400 39.632 C 246.400 39.834,246.130 40.000,245.800 40.000 C 245.470 40.000,245.200 40.163,245.200 40.362 C 245.200 40.562,244.300 40.849,243.200 41.000 C 242.100 41.151,241.200 41.424,241.200 41.606 C 241.200 41.788,240.660 42.055,240.000 42.200 C 239.340 42.345,238.800 42.610,238.800 42.788 C 238.800 42.967,238.370 43.221,237.844 43.353 C 234.952 44.079,236.432 44.800,240.813 44.800 C 243.471 44.800,245.200 44.958,245.200 45.200 C 245.200 45.420,244.750 45.600,244.200 45.600 C 243.650 45.600,243.200 45.759,243.200 45.954 C 243.200 46.149,242.210 46.432,241.000 46.583 C 239.790 46.734,238.800 47.022,238.800 47.224 C 238.800 47.426,238.080 47.706,237.200 47.846 C 236.320 47.987,235.600 48.245,235.600 48.419 C 235.600 48.594,235.060 48.855,234.400 49.000 C 233.740 49.145,233.200 49.429,233.200 49.632 C 233.200 49.834,232.930 50.000,232.600 50.000 C 232.270 50.000,232.000 50.160,232.000 50.357 C 232.000 50.553,231.550 50.826,231.000 50.964 C 230.450 51.102,230.000 51.392,230.000 51.608 C 230.000 51.823,229.739 52.000,229.419 52.000 C 229.100 52.000,228.227 52.630,227.479 53.400 C 226.731 54.170,225.986 54.800,225.824 54.800 C 225.661 54.800,227.535 52.801,229.989 50.358 C 232.442 47.915,234.339 45.805,234.203 45.670 C 234.067 45.534,233.831 45.620,233.678 45.861 C 233.525 46.102,232.815 46.426,232.100 46.582 C 231.385 46.737,230.800 47.009,230.800 47.187 C 230.800 47.365,230.170 47.629,229.400 47.774 C 228.630 47.918,228.000 48.208,228.000 48.418 C 228.000 48.628,227.724 48.800,227.387 48.800 C 227.051 48.800,226.671 49.070,226.545 49.400 C 226.418 49.730,226.064 50.000,225.757 50.000 C 225.451 50.000,225.200 50.163,225.200 50.362 C 225.200 50.562,224.300 50.849,223.200 51.000 C 222.100 51.151,221.200 51.424,221.200 51.606 C 221.200 51.788,220.660 52.055,220.000 52.200 C 219.340 52.345,218.800 52.610,218.800 52.788 C 218.800 52.967,218.370 53.221,217.844 53.353 C 214.952 54.079,216.432 54.800,220.813 54.800 C 223.471 54.800,225.200 54.958,225.200 55.200 C 225.200 55.420,224.570 55.600,223.800 55.600 C 223.030 55.600,222.400 55.759,222.400 55.954 C 222.400 56.149,221.365 56.437,220.100 56.595 C 218.835 56.752,217.700 57.042,217.577 57.239 C 217.455 57.436,215.970 57.714,214.277 57.857 C 212.585 58.000,211.200 58.250,211.200 58.413 C 211.200 58.575,210.210 58.832,209.000 58.983 C 207.790 59.134,206.800 59.425,206.800 59.629 C 206.800 59.833,206.440 60.000,206.000 60.000 C 205.560 60.000,205.200 60.160,205.200 60.355 C 205.200 60.551,204.570 60.829,203.800 60.974 C 203.030 61.118,202.400 61.394,202.400 61.586 C 202.400 61.779,201.860 62.055,201.200 62.200 C 200.540 62.345,200.000 62.610,200.000 62.788 C 200.000 62.967,199.507 63.237,198.904 63.388 C 198.301 63.540,197.716 63.805,197.604 63.978 C 197.492 64.151,196.953 64.432,196.407 64.602 C 195.750 64.808,196.942 63.392,199.932 60.414 C 202.417 57.940,204.339 55.805,204.203 55.670 C 204.067 55.534,203.829 55.629,203.674 55.880 C 203.519 56.131,202.899 56.460,202.296 56.612 C 201.693 56.763,201.200 57.033,201.200 57.212 C 201.200 57.390,200.660 57.655,200.000 57.800 C 199.340 57.945,198.800 58.215,198.800 58.400 C 198.800 58.585,198.260 58.855,197.600 59.000 C 196.940 59.145,196.400 59.429,196.400 59.632 C 196.400 59.834,196.130 60.000,195.800 60.000 C 195.470 60.000,195.200 60.163,195.200 60.362 C 195.200 60.562,194.300 60.849,193.200 61.000 C 192.100 61.151,191.200 61.424,191.200 61.606 C 191.200 61.788,190.660 62.055,190.000 62.200 C 189.340 62.345,188.800 62.610,188.800 62.788 C 188.800 62.967,188.370 63.221,187.844 63.353 C 184.952 64.079,186.432 64.800,190.813 64.800 C 193.471 64.800,195.200 64.958,195.200 65.200 C 195.200 65.420,194.750 65.600,194.200 65.600 C 193.650 65.600,193.200 65.759,193.200 65.954 C 193.200 66.149,192.210 66.432,191.000 66.583 C 189.790 66.734,188.800 67.022,188.800 67.224 C 188.800 67.426,188.080 67.706,187.200 67.846 C 186.320 67.987,185.600 68.245,185.600 68.419 C 185.600 68.594,185.060 68.855,184.400 69.000 C 183.740 69.145,183.200 69.429,183.200 69.632 C 183.200 69.834,182.930 70.000,182.600 70.000 C 182.270 70.000,182.000 70.160,182.000 70.357 C 182.000 70.553,181.550 70.826,181.000 70.964 C 180.450 71.102,180.000 71.392,180.000 71.608 C 180.000 71.823,179.739 72.000,179.419 72.000 C 179.100 72.000,178.227 72.630,177.479 73.400 C 176.731 74.170,175.986 74.800,175.824 74.800 C 175.661 74.800,177.535 72.801,179.989 70.358 C 182.442 67.915,184.339 65.805,184.203 65.670 C 184.067 65.534,183.831 65.620,183.678 65.861 C 183.525 66.102,182.815 66.426,182.100 66.582 C 181.385 66.737,180.800 67.009,180.800 67.187 C 180.800 67.365,180.170 67.629,179.400 67.774 C 178.630 67.918,178.000 68.208,178.000 68.418 C 178.000 68.628,177.724 68.800,177.387 68.800 C 177.051 68.800,176.671 69.070,176.545 69.400 C 176.355 69.893,175.328 70.000,170.757 70.000 C 167.701 70.000,165.200 70.163,165.200 70.362 C 165.200 70.562,164.300 70.849,163.200 71.000 C 162.100 71.151,161.200 71.424,161.200 71.606 C 161.200 71.788,160.660 72.055,160.000 72.200 C 159.340 72.345,158.800 72.610,158.800 72.788 C 158.800 72.967,158.370 73.221,157.844 73.353 C 154.952 74.079,156.432 74.800,160.813 74.800 C 163.471 74.800,165.200 74.958,165.200 75.200 C 165.200 75.420,164.840 75.600,164.400 75.600 C 163.960 75.600,163.600 75.760,163.600 75.955 C 163.600 76.151,162.970 76.429,162.200 76.574 C 161.430 76.718,160.800 76.988,160.800 77.174 C 160.800 77.359,160.170 77.629,159.400 77.774 C 158.630 77.918,158.000 78.208,158.000 78.418 C 158.000 78.628,157.724 78.800,157.387 78.800 C 157.051 78.800,156.671 79.070,156.545 79.400 C 156.418 79.730,156.064 80.000,155.757 80.000 C 155.451 80.000,155.200 80.160,155.200 80.355 C 155.200 80.551,154.570 80.829,153.800 80.974 C 153.030 81.118,152.400 81.394,152.400 81.586 C 152.400 81.779,151.860 82.055,151.200 82.200 C 150.540 82.345,150.000 82.610,150.000 82.788 C 150.000 82.967,149.507 83.237,148.904 83.388 C 148.301 83.540,147.716 83.805,147.604 83.978 C 147.492 84.151,146.953 84.432,146.407 84.602 C 145.750 84.808,146.942 83.392,149.932 80.414 C 152.417 77.940,154.339 75.805,154.203 75.670 C 154.067 75.534,153.829 75.629,153.674 75.880 C 153.519 76.131,152.899 76.460,152.296 76.612 C 151.693 76.763,151.200 77.033,151.200 77.212 C 151.200 77.390,150.660 77.655,150.000 77.800 C 149.340 77.945,148.800 78.215,148.800 78.400 C 148.800 78.585,148.260 78.855,147.600 79.000 C 146.940 79.145,146.400 79.429,146.400 79.632 C 146.400 79.834,146.130 80.000,145.800 80.000 C 145.470 80.000,145.200 80.163,145.200 80.362 C 145.200 80.562,144.300 80.849,143.200 81.000 C 142.100 81.151,141.200 81.424,141.200 81.606 C 141.200 81.788,140.660 82.055,140.000 82.200 C 139.340 82.345,138.800 82.610,138.800 82.788 C 138.800 82.967,138.370 83.221,137.844 83.353 C 134.952 84.079,136.432 84.800,140.813 84.800 C 143.471 84.800,145.200 84.958,145.200 85.200 C 145.200 85.420,144.840 85.600,144.400 85.600 C 143.960 85.600,143.600 85.760,143.600 85.955 C 143.600 86.151,142.970 86.429,142.200 86.574 C 141.430 86.718,140.800 86.988,140.800 87.174 C 140.800 87.359,140.170 87.629,139.400 87.774 C 138.630 87.918,138.000 88.208,138.000 88.418 C 138.000 88.628,137.724 88.800,137.387 88.800 C 137.051 88.800,136.671 89.070,136.545 89.400 C 136.418 89.730,136.146 90.000,135.940 90.000 C 135.398 90.000,132.643 92.618,125.000 100.397 C 124.780 100.621,123.565 101.797,122.300 103.010 C 121.035 104.224,120.000 105.483,120.000 105.808 C 120.000 106.134,119.834 106.400,119.632 106.400 C 119.429 106.400,119.145 106.940,119.000 107.600 C 118.855 108.260,118.585 108.800,118.400 108.800 C 118.215 108.800,117.945 109.340,117.800 110.000 C 117.655 110.660,117.385 111.200,117.200 111.200 C 117.015 111.200,116.745 111.740,116.600 112.400 C 116.455 113.060,116.184 113.600,115.998 113.600 C 115.811 113.600,115.576 113.915,115.476 114.300 C 115.375 114.685,115.272 113.065,115.246 110.700 C 115.221 108.335,115.033 106.400,114.829 106.400 C 114.258 106.400,113.200 107.588,113.200 108.229 C 113.200 108.543,113.034 108.800,112.832 108.800 C 112.629 108.800,112.345 109.340,112.200 110.000 C 112.055 110.660,111.791 111.200,111.614 111.200 C 111.436 111.200,111.169 112.010,111.021 113.000 C 110.872 113.990,110.582 114.800,110.375 114.800 C 110.157 114.800,110.000 117.541,110.000 121.367 C 110.000 125.901,109.860 127.980,109.547 128.084 C 109.237 128.188,109.029 130.944,108.888 136.805 C 108.733 143.255,108.549 145.509,108.141 145.916 C 107.844 146.214,107.600 146.695,107.600 146.986 C 107.600 147.277,107.330 147.618,107.000 147.745 C 106.670 147.871,106.400 148.251,106.400 148.587 C 106.400 148.924,106.232 149.200,106.027 149.200 C 105.822 149.200,105.545 149.544,105.411 149.965 C 105.233 150.525,104.639 150.802,103.184 151.002 C 102.093 151.152,101.200 151.424,101.200 151.606 C 101.200 151.788,100.660 152.055,100.000 152.200 C 99.340 152.345,98.800 152.610,98.800 152.788 C 98.800 152.967,98.370 153.221,97.844 153.353 C 94.952 154.079,96.432 154.800,100.813 154.800 C 103.471 154.800,105.200 154.958,105.200 155.200 C 105.200 155.420,104.750 155.600,104.200 155.600 C 103.650 155.600,103.200 155.759,103.200 155.954 C 103.200 156.149,102.210 156.432,101.000 156.583 C 99.790 156.734,98.800 157.022,98.800 157.224 C 98.800 157.426,98.080 157.706,97.200 157.846 C 96.320 157.987,95.600 158.239,95.600 158.406 C 95.600 158.573,94.790 158.831,93.800 158.979 C 92.810 159.128,92.000 159.418,92.000 159.625 C 92.000 159.831,91.550 160.000,91.000 160.000 C 90.450 160.000,90.000 160.160,90.000 160.355 C 90.000 160.550,89.190 160.831,88.200 160.979 C 87.210 161.128,86.400 161.405,86.400 161.596 C 86.400 161.786,85.410 162.066,84.200 162.217 C 82.990 162.368,82.000 162.635,82.000 162.809 C 82.000 162.983,81.100 163.249,80.000 163.400 C 78.900 163.551,78.000 163.817,78.000 163.991 C 78.000 164.165,77.653 164.397,77.230 164.508 C 76.688 164.650,76.523 164.544,76.674 164.151 C 76.792 163.844,77.318 163.485,77.844 163.353 C 78.370 163.221,78.800 162.967,78.800 162.788 C 78.800 162.610,79.340 162.345,80.000 162.200 C 80.660 162.055,81.200 161.788,81.200 161.606 C 81.200 161.424,82.100 161.151,83.200 161.000 C 84.300 160.849,85.200 160.562,85.200 160.362 C 85.200 160.163,85.740 160.000,86.400 160.000 C 87.060 160.000,87.600 159.836,87.600 159.635 C 87.600 159.434,88.320 159.149,89.200 159.000 C 90.080 158.851,90.800 158.585,90.800 158.408 C 90.800 158.231,91.255 157.973,91.810 157.833 C 93.418 157.430,95.048 155.600,93.800 155.600 C 93.470 155.600,93.200 155.763,93.200 155.962 C 93.200 156.162,92.300 156.449,91.200 156.600 C 90.100 156.751,89.200 157.027,89.200 157.213 C 89.200 157.399,88.390 157.672,87.400 157.821 C 86.410 157.969,85.600 158.234,85.600 158.408 C 85.600 158.583,83.890 158.854,81.800 159.010 C 79.710 159.167,78.000 159.454,78.000 159.648 C 78.000 159.841,77.370 160.000,76.600 160.000 C 75.830 160.000,75.200 160.163,75.200 160.362 C 75.200 160.562,74.300 160.849,73.200 161.000 C 72.100 161.151,71.200 161.424,71.200 161.606 C 71.200 161.788,70.660 162.055,70.000 162.200 C 69.340 162.345,68.800 162.610,68.800 162.788 C 68.800 162.967,68.370 163.221,67.844 163.353 C 64.952 164.079,66.432 164.800,70.813 164.800 C 73.471 164.800,75.200 164.958,75.200 165.200 C 75.200 165.420,74.570 165.600,73.800 165.600 C 73.030 165.600,72.400 165.762,72.400 165.961 C 72.400 166.159,71.320 166.447,70.000 166.600 C 68.680 166.753,67.600 167.020,67.600 167.193 C 67.600 167.366,66.610 167.632,65.400 167.783 C 64.190 167.934,63.200 168.222,63.200 168.424 C 63.200 168.626,62.480 168.906,61.600 169.046 C 60.720 169.187,60.000 169.459,60.000 169.651 C 60.000 169.843,59.730 170.000,59.400 170.000 C 59.070 170.000,58.800 170.166,58.800 170.368 C 58.800 170.571,58.260 170.855,57.600 171.000 C 56.940 171.145,56.400 171.416,56.400 171.603 C 56.400 171.790,55.410 172.066,54.200 172.217 C 52.990 172.368,52.000 172.635,52.000 172.809 C 52.000 172.983,51.100 173.249,50.000 173.400 C 48.900 173.551,48.000 173.817,48.000 173.991 C 48.000 174.165,47.653 174.397,47.230 174.508 C 46.688 174.650,46.523 174.544,46.674 174.151 C 46.792 173.844,47.318 173.485,47.844 173.353 C 48.370 173.221,48.800 172.967,48.800 172.788 C 48.800 172.610,49.340 172.345,50.000 172.200 C 50.660 172.055,51.200 171.788,51.200 171.606 C 51.200 171.424,52.100 171.151,53.200 171.000 C 54.300 170.849,55.200 170.562,55.200 170.362 C 55.200 170.163,55.470 170.000,55.800 170.000 C 56.130 170.000,56.400 169.834,56.400 169.632 C 56.400 169.429,56.940 169.145,57.600 169.000 C 58.260 168.855,58.800 168.585,58.800 168.400 C 58.800 168.215,59.340 167.945,60.000 167.800 C 60.660 167.655,61.200 167.384,61.200 167.198 C 61.200 167.011,61.515 166.765,61.900 166.650 C 62.285 166.536,61.790 166.544,60.800 166.668 C 59.810 166.793,58.940 167.053,58.866 167.248 C 58.793 167.442,58.028 167.714,57.166 167.852 C 56.305 167.990,55.600 168.242,55.600 168.414 C 55.600 168.585,53.890 168.854,51.800 169.010 C 49.710 169.167,48.000 169.454,48.000 169.648 C 48.000 169.841,47.370 170.000,46.600 170.000 C 45.830 170.000,45.200 170.163,45.200 170.362 C 45.200 170.562,44.300 170.849,43.200 171.000 C 42.100 171.151,41.200 171.424,41.200 171.606 C 41.200 171.788,40.660 172.055,40.000 172.200 C 39.340 172.345,38.800 172.610,38.800 172.788 C 38.800 172.967,38.370 173.221,37.844 173.353 C 34.952 174.079,36.432 174.800,40.813 174.800 C 43.471 174.800,45.200 174.958,45.200 175.200 C 45.200 175.420,44.750 175.600,44.200 175.600 C 43.650 175.600,43.200 175.759,43.200 175.954 C 43.200 176.149,42.210 176.432,41.000 176.583 C 39.790 176.734,38.800 177.022,38.800 177.224 C 38.800 177.426,38.080 177.706,37.200 177.846 C 36.320 177.987,35.600 178.245,35.600 178.419 C 35.600 178.594,35.060 178.855,34.400 179.000 C 33.740 179.145,33.200 179.429,33.200 179.632 C 33.200 179.834,32.930 180.000,32.600 180.000 C 32.270 180.000,32.000 180.160,32.000 180.357 C 32.000 180.553,31.550 180.826,31.000 180.964 C 30.450 181.102,30.000 181.392,30.000 181.608 C 30.000 181.823,29.739 182.000,29.419 182.000 C 29.100 182.000,28.227 182.630,27.479 183.400 C 26.731 184.170,25.986 184.800,25.824 184.800 C 25.661 184.800,27.535 182.801,29.989 180.358 C 32.442 177.915,34.339 175.805,34.203 175.670 C 34.067 175.534,33.831 175.620,33.678 175.861 C 33.525 176.102,32.815 176.426,32.100 176.582 C 31.385 176.737,30.800 177.009,30.800 177.187 C 30.800 177.365,30.170 177.629,29.400 177.774 C 28.630 177.918,28.000 178.208,28.000 178.418 C 28.000 178.628,27.724 178.800,27.387 178.800 C 27.051 178.800,26.671 179.070,26.545 179.400 C 26.418 179.730,26.064 180.000,25.757 180.000 C 25.451 180.000,25.200 180.168,25.200 180.373 C 25.200 180.578,24.802 180.872,24.315 181.027 C 23.290 181.352,21.473 183.083,21.089 184.100 C 20.944 184.485,20.639 184.800,20.413 184.800 C 20.186 184.800,20.000 185.250,20.000 185.800 C 20.000 186.350,19.833 186.800,19.629 186.800 C 19.425 186.800,19.134 187.790,18.983 189.000 C 18.832 190.210,18.568 191.200,18.396 191.200 C 18.225 191.200,17.954 192.865,17.795 194.900 C 17.635 196.935,17.329 198.711,17.114 198.847 C 16.880 198.995,16.699 203.119,16.662 209.145 C 16.614 216.884,16.485 219.196,16.100 219.197 C 15.701 219.199,15.600 250.548,15.600 374.600 L 15.600 530.000 120.600 530.000 L 225.600 530.000 225.600 527.405 L 225.600 524.809 227.200 524.554 C 228.080 524.413,228.800 524.155,228.800 523.981 C 228.800 523.806,229.340 523.545,230.000 523.400 C 230.660 523.255,231.200 522.985,231.200 522.800 C 231.200 522.615,231.740 522.345,232.400 522.200 C 233.060 522.055,233.600 521.774,233.600 521.576 C 233.600 521.378,234.050 521.102,234.600 520.964 C 235.150 520.826,235.600 520.553,235.600 520.357 C 235.600 520.160,235.870 520.000,236.200 520.000 C 236.530 520.000,236.800 519.834,236.800 519.632 C 236.800 519.429,237.340 519.145,238.000 519.000 C 238.660 518.855,239.200 518.591,239.200 518.413 C 239.200 518.235,239.830 517.971,240.600 517.826 C 241.370 517.682,242.000 517.411,242.000 517.225 C 242.000 517.039,242.493 516.763,243.096 516.612 C 243.699 516.460,244.319 516.131,244.474 515.880 C 244.629 515.629,244.901 515.578,245.078 515.766 C 245.255 515.955,245.174 516.190,244.897 516.289 C 244.621 516.388,243.607 517.285,242.645 518.282 C 240.497 520.509,240.517 520.489,238.248 522.679 C 236.153 524.702,236.094 524.805,237.200 524.516 C 237.640 524.401,238.000 524.156,238.000 523.971 C 238.000 523.787,238.630 523.518,239.400 523.374 C 240.170 523.229,240.800 522.971,240.800 522.799 C 240.800 522.627,241.293 522.363,241.896 522.212 C 242.499 522.060,243.122 521.726,243.281 521.468 C 243.474 521.154,245.547 520.958,249.585 520.871 C 252.924 520.800,255.600 520.577,255.600 520.371 C 255.600 520.167,256.050 520.000,256.600 520.000 C 257.150 520.000,257.600 519.836,257.600 519.635 C 257.600 519.434,258.320 519.149,259.200 519.000 C 260.080 518.851,260.800 518.585,260.800 518.408 C 260.800 518.231,261.255 517.973,261.810 517.833 C 262.727 517.603,264.400 516.290,264.400 515.800 C 264.400 515.690,262.420 515.600,260.000 515.600 C 255.554 515.600,254.086 515.052,257.200 514.554 C 258.080 514.413,258.800 514.155,258.800 513.981 C 258.800 513.806,259.340 513.545,260.000 513.400 C 260.660 513.255,261.200 512.985,261.200 512.800 C 261.200 512.615,261.740 512.345,262.400 512.200 C 263.060 512.055,263.600 511.774,263.600 511.576 C 263.600 511.378,264.050 511.102,264.600 510.964 C 265.150 510.826,265.600 510.553,265.600 510.357 C 265.600 510.160,265.870 510.000,266.200 510.000 C 266.530 510.000,266.800 509.834,266.800 509.632 C 266.800 509.429,267.340 509.145,268.000 509.000 C 268.660 508.855,269.200 508.591,269.200 508.413 C 269.200 508.235,269.830 507.971,270.600 507.826 C 271.370 507.682,272.000 507.411,272.000 507.225 C 272.000 507.039,272.493 506.763,273.096 506.612 C 273.699 506.460,274.319 506.131,274.474 505.880 C 274.629 505.629,274.901 505.578,275.078 505.766 C 275.255 505.955,275.174 506.190,274.897 506.289 C 274.621 506.388,273.607 507.285,272.645 508.282 C 270.497 510.509,270.517 510.489,268.248 512.679 C 266.153 514.702,266.094 514.805,267.200 514.516 C 267.640 514.401,268.000 514.156,268.000 513.971 C 268.000 513.787,268.630 513.518,269.400 513.374 C 270.170 513.229,270.800 512.965,270.800 512.787 C 270.800 512.609,271.340 512.345,272.000 512.200 C 272.660 512.055,273.200 511.785,273.200 511.600 C 273.200 511.415,273.740 511.145,274.400 511.000 C 275.060 510.855,275.600 510.571,275.600 510.368 C 275.600 510.166,276.050 510.000,276.600 510.000 C 277.150 510.000,277.600 509.836,277.600 509.635 C 277.600 509.434,278.320 509.149,279.200 509.000 C 280.080 508.851,280.800 508.585,280.800 508.408 C 280.800 508.231,281.255 507.973,281.810 507.833 C 282.727 507.603,284.400 506.290,284.400 505.800 C 284.400 505.690,282.420 505.600,280.000 505.600 C 275.799 505.600,274.297 505.142,276.600 504.564 C 277.150 504.426,277.600 504.153,277.600 503.957 C 277.600 503.760,277.810 503.600,278.066 503.600 C 278.547 503.600,278.877 503.329,281.103 501.103 C 283.329 498.877,283.600 498.547,283.600 498.066 C 283.600 497.810,283.780 497.600,284.000 497.600 C 284.220 497.600,284.400 497.330,284.400 497.000 C 284.400 496.670,284.568 496.400,284.773 496.400 C 284.978 496.400,285.260 496.040,285.400 495.601 C 285.539 495.161,286.091 494.692,286.627 494.558 C 287.162 494.423,287.600 494.153,287.600 493.957 C 287.600 493.760,287.810 493.600,288.066 493.600 C 288.547 493.600,288.877 493.329,291.103 491.103 C 293.329 488.877,293.600 488.547,293.600 488.066 C 293.600 487.810,293.780 487.600,294.000 487.600 C 294.220 487.600,294.400 487.407,294.400 487.171 C 294.400 486.936,294.670 486.473,295.000 486.143 C 295.533 485.610,295.600 486.035,295.600 489.971 C 295.600 492.407,295.690 494.400,295.800 494.400 C 296.290 494.400,297.603 492.727,297.833 491.810 C 297.973 491.255,298.231 490.800,298.408 490.800 C 298.585 490.800,298.851 490.080,299.000 489.200 C 299.149 488.320,299.434 487.600,299.635 487.600 C 299.836 487.600,300.000 487.150,300.000 486.600 C 300.000 486.050,300.166 485.600,300.368 485.600 C 300.571 485.600,300.855 485.060,301.000 484.400 C 301.145 483.740,301.415 483.200,301.600 483.200 C 301.785 483.200,302.055 482.660,302.200 482.000 C 302.345 481.340,302.609 480.800,302.787 480.800 C 302.965 480.800,303.229 480.170,303.374 479.400 C 303.518 478.630,303.787 478.000,303.971 478.000 C 304.156 478.000,304.401 477.640,304.516 477.200 C 304.806 476.091,304.704 476.150,302.627 478.300 C 301.618 479.345,300.610 480.380,300.387 480.600 C 296.899 484.049,295.946 484.880,295.727 484.661 C 295.584 484.517,295.662 484.400,295.902 484.400 C 296.141 484.400,296.455 483.860,296.600 483.200 C 296.745 482.540,297.021 482.000,297.214 482.000 C 297.406 482.000,297.682 481.370,297.826 480.600 C 297.971 479.830,298.235 479.200,298.413 479.200 C 298.591 479.200,298.855 478.660,299.000 478.000 C 299.145 477.340,299.429 476.800,299.632 476.800 C 299.834 476.800,300.000 476.530,300.000 476.200 C 300.000 475.870,300.164 475.600,300.364 475.600 C 300.564 475.600,300.856 474.070,301.011 472.200 C 301.167 470.330,301.429 468.800,301.593 468.800 C 301.756 468.800,301.988 467.591,302.106 466.113 C 302.225 464.635,302.520 463.360,302.762 463.279 C 303.003 463.199,303.314 462.428,303.452 461.566 C 303.590 460.705,303.836 460.000,304.000 460.000 C 304.163 460.000,304.419 459.078,304.569 457.951 C 304.896 455.482,305.338 454.982,307.523 454.613 C 308.445 454.457,309.200 454.186,309.200 454.009 C 309.200 453.833,309.830 453.571,310.600 453.426 C 311.370 453.282,312.000 452.992,312.000 452.782 C 312.000 452.572,312.230 452.400,312.511 452.400 C 312.792 452.400,313.330 452.040,313.707 451.600 C 314.084 451.160,314.664 450.800,314.996 450.800 C 315.328 450.800,315.600 450.620,315.600 450.400 C 315.600 450.180,315.870 450.000,316.200 450.000 C 316.530 450.000,316.800 449.834,316.800 449.632 C 316.800 449.429,317.340 449.145,318.000 449.000 C 318.660 448.855,319.200 448.591,319.200 448.413 C 319.200 448.235,319.830 447.971,320.600 447.826 C 321.370 447.682,322.000 447.411,322.000 447.225 C 322.000 447.039,322.493 446.763,323.096 446.612 C 323.699 446.460,324.319 446.131,324.474 445.880 C 324.629 445.629,324.901 445.578,325.078 445.766 C 325.255 445.955,325.174 446.190,324.897 446.289 C 324.621 446.388,323.607 447.285,322.645 448.282 C 320.490 450.517,320.408 450.598,318.196 452.732 C 316.156 454.699,316.097 454.804,317.200 454.516 C 317.640 454.401,318.000 454.156,318.000 453.971 C 318.000 453.787,318.630 453.518,319.400 453.374 C 320.170 453.229,320.800 452.965,320.800 452.787 C 320.800 452.609,321.340 452.345,322.000 452.200 C 322.660 452.055,323.200 451.785,323.200 451.600 C 323.200 451.415,323.740 451.145,324.400 451.000 C 325.060 450.855,325.600 450.571,325.600 450.368 C 325.600 450.166,326.050 450.000,326.600 450.000 C 327.150 450.000,327.600 449.836,327.600 449.635 C 327.600 449.434,328.320 449.149,329.200 449.000 C 330.080 448.851,330.800 448.585,330.800 448.408 C 330.800 448.231,331.255 447.973,331.810 447.833 C 332.727 447.603,334.400 446.290,334.400 445.800 C 334.400 445.690,332.420 445.600,330.000 445.600 C 325.327 445.600,324.121 445.042,327.800 444.583 C 329.010 444.432,330.000 444.172,330.000 444.005 C 330.000 443.839,330.720 443.587,331.600 443.446 C 332.480 443.306,333.200 443.036,333.200 442.846 C 333.200 442.657,333.920 442.387,334.800 442.246 C 335.680 442.106,336.400 441.827,336.400 441.627 C 336.400 441.427,336.940 441.145,337.600 441.000 C 338.260 440.855,338.800 440.571,338.800 440.368 C 338.800 440.166,339.070 440.000,339.400 440.000 C 339.730 440.000,340.000 439.832,340.000 439.627 C 340.000 439.422,340.377 439.134,340.838 438.988 C 341.300 438.841,342.384 437.993,343.248 437.103 C 344.111 436.213,344.949 435.625,345.109 435.797 C 345.269 435.969,345.174 436.190,344.897 436.289 C 344.621 436.388,343.607 437.285,342.645 438.282 C 340.490 440.517,340.408 440.598,338.196 442.732 C 336.064 444.787,336.092 444.707,337.600 444.485 C 338.260 444.388,338.800 444.164,338.800 443.986 C 338.800 443.809,339.340 443.545,340.000 443.400 C 340.660 443.255,341.200 442.990,341.200 442.812 C 341.200 442.633,341.672 442.368,342.248 442.224 C 342.825 442.079,343.558 441.699,343.877 441.380 C 344.328 440.929,345.694 440.800,350.029 440.800 C 353.476 440.800,355.600 440.648,355.600 440.400 C 355.600 440.180,356.050 440.000,356.600 440.000 C 357.150 440.000,357.600 439.836,357.600 439.635 C 357.600 439.434,358.320 439.149,359.200 439.000 C 360.080 438.851,360.800 438.585,360.800 438.408 C 360.800 438.231,361.255 437.973,361.810 437.833 C 362.727 437.603,364.400 436.290,364.400 435.800 C 364.400 435.690,362.420 435.600,360.000 435.600 C 355.554 435.600,354.086 435.052,357.200 434.554 C 358.080 434.413,358.800 434.155,358.800 433.981 C 358.800 433.806,359.340 433.545,360.000 433.400 C 360.660 433.255,361.200 432.985,361.200 432.800 C 361.200 432.615,361.740 432.345,362.400 432.200 C 363.060 432.055,363.600 431.774,363.600 431.576 C 363.600 431.378,364.050 431.102,364.600 430.964 C 365.150 430.826,365.600 430.553,365.600 430.357 C 365.600 430.160,365.870 430.000,366.200 430.000 C 366.530 430.000,366.800 429.834,366.800 429.632 C 366.800 429.429,367.340 429.145,368.000 429.000 C 368.660 428.855,369.200 428.591,369.200 428.413 C 369.200 428.235,369.830 427.971,370.600 427.826 C 371.370 427.682,372.000 427.411,372.000 427.225 C 372.000 427.039,372.493 426.763,373.096 426.612 C 373.699 426.460,374.319 426.131,374.474 425.880 C 374.629 425.629,374.901 425.578,375.078 425.766 C 375.255 425.955,375.174 426.190,374.897 426.289 C 374.621 426.388,373.584 427.308,372.593 428.334 C 370.389 430.617,370.509 430.497,368.248 432.679 C 366.153 434.702,366.094 434.805,367.200 434.516 C 367.640 434.401,368.000 434.156,368.000 433.971 C 368.000 433.787,368.630 433.518,369.400 433.374 C 370.170 433.229,370.800 432.965,370.800 432.787 C 370.800 432.609,371.340 432.345,372.000 432.200 C 372.660 432.055,373.200 431.785,373.200 431.600 C 373.200 431.415,373.740 431.145,374.400 431.000 C 375.060 430.855,375.600 430.571,375.600 430.368 C 375.600 430.166,376.050 430.000,376.600 430.000 C 377.150 430.000,377.600 429.836,377.600 429.635 C 377.600 429.434,378.320 429.149,379.200 429.000 C 380.080 428.851,380.800 428.585,380.800 428.408 C 380.800 428.231,381.255 427.973,381.810 427.833 C 382.727 427.603,384.400 426.290,384.400 425.800 C 384.400 425.690,382.420 425.600,380.000 425.600 C 375.554 425.600,374.086 425.052,377.200 424.554 C 378.080 424.413,378.800 424.155,378.800 423.981 C 378.800 423.806,379.340 423.545,380.000 423.400 C 380.660 423.255,381.200 422.990,381.200 422.812 C 381.200 422.633,381.672 422.368,382.248 422.224 C 382.825 422.079,383.558 421.699,383.877 421.380 C 384.887 420.370,386.800 421.159,386.800 422.586 C 386.800 422.877,387.070 423.218,387.400 423.345 C 387.730 423.471,388.000 423.851,388.000 424.187 C 388.000 424.524,388.165 424.800,388.366 424.800 C 388.567 424.800,388.858 426.150,389.013 427.800 C 389.167 429.450,389.453 430.800,389.647 430.800 C 389.841 430.800,390.000 431.340,390.000 432.000 C 390.000 433.745,389.345 433.470,389.046 431.600 C 388.906 430.720,388.632 430.000,388.439 430.000 C 388.245 430.000,387.973 429.547,387.834 428.994 C 387.567 427.929,386.434 426.400,385.911 426.400 C 385.443 426.400,385.537 427.512,386.019 427.673 C 386.250 427.750,386.545 428.845,386.675 430.106 C 386.805 431.368,387.038 432.400,387.192 432.400 C 387.346 432.400,387.595 437.027,387.744 442.681 C 387.893 448.336,388.170 453.061,388.358 453.181 C 388.547 453.302,388.779 457.619,388.875 462.775 C 389.001 469.522,389.183 472.194,389.525 472.308 C 389.866 472.422,390.000 474.320,390.000 479.033 C 390.000 482.645,390.160 485.600,390.355 485.600 C 390.550 485.600,390.831 486.410,390.979 487.400 C 391.128 488.390,391.398 489.200,391.580 489.200 C 391.762 489.200,392.029 489.830,392.174 490.600 C 392.318 491.370,392.608 492.000,392.818 492.000 C 393.028 492.000,393.200 492.230,393.200 492.511 C 393.200 492.982,394.555 494.400,395.005 494.400 C 395.112 494.400,395.200 492.420,395.200 490.000 L 395.200 485.600 397.600 485.600 L 400.000 485.600 400.000 247.800 L 400.000 10.000 396.233 10.000 C 394.162 10.000,392.407 9.828,392.333 9.617 C 392.260 9.407,390.220 9.110,387.800 8.958 C 385.380 8.806,383.281 8.497,383.135 8.273 C 382.868 7.863,349.655 7.543,341.500 7.872 M364.700 9.098 C 362.335 9.169,358.465 9.169,356.100 9.098 C 353.735 9.028,355.670 8.970,360.400 8.970 C 365.130 8.970,367.065 9.028,364.700 9.098 M351.200 9.600 C 351.200 9.820,350.480 10.000,349.600 10.000 C 348.720 10.000,348.000 9.820,348.000 9.600 C 348.000 9.380,348.720 9.200,349.600 9.200 C 350.480 9.200,351.200 9.380,351.200 9.600 M372.400 9.600 C 372.400 9.820,371.680 10.000,370.800 10.000 C 369.920 10.000,369.200 9.820,369.200 9.600 C 369.200 9.380,369.920 9.200,370.800 9.200 C 371.680 9.200,372.400 9.380,372.400 9.600 M345.200 10.343 C 345.200 10.531,343.540 10.811,341.511 10.964 C 339.481 11.117,337.726 11.389,337.611 11.568 C 337.495 11.747,336.185 12.022,334.700 12.179 C 333.215 12.335,332.000 12.612,332.000 12.794 C 332.000 12.976,331.100 13.249,330.000 13.400 C 328.900 13.551,328.000 13.817,328.000 13.991 C 328.000 14.165,327.653 14.397,327.230 14.508 C 326.688 14.650,326.523 14.544,326.674 14.151 C 326.792 13.844,327.318 13.485,327.844 13.353 C 328.370 13.221,328.800 12.967,328.800 12.788 C 328.800 12.610,329.340 12.345,330.000 12.200 C 330.660 12.055,331.200 11.788,331.200 11.606 C 331.200 11.424,332.100 11.151,333.200 11.000 C 334.300 10.849,335.200 10.562,335.200 10.362 C 335.200 10.163,337.450 10.000,340.200 10.000 C 342.950 10.000,345.200 10.154,345.200 10.343 M385.600 10.355 C 385.600 10.550,386.410 10.831,387.400 10.979 C 388.390 11.128,389.200 11.398,389.200 11.580 C 389.200 11.762,389.830 12.029,390.600 12.174 C 391.370 12.318,392.000 12.608,392.000 12.818 C 392.000 13.028,392.230 13.200,392.511 13.200 C 392.792 13.200,393.344 13.576,393.737 14.035 C 394.436 14.852,394.431 14.864,393.526 14.581 C 393.017 14.422,392.505 14.145,392.388 13.965 C 392.271 13.785,391.416 13.516,390.488 13.368 C 389.560 13.219,388.800 12.955,388.800 12.781 C 388.800 12.606,387.585 12.335,386.100 12.179 C 384.615 12.022,383.305 11.747,383.189 11.568 C 383.074 11.389,381.319 11.117,379.289 10.964 C 373.982 10.563,374.748 10.000,380.600 10.000 C 383.350 10.000,385.600 10.160,385.600 10.355 M372.467 15.975 C 372.540 16.182,374.445 16.401,376.700 16.463 C 379.708 16.545,380.800 16.712,380.800 17.088 C 380.800 17.369,381.025 17.603,381.300 17.607 C 382.240 17.620,383.600 19.482,383.600 20.756 C 383.600 21.468,383.814 22.014,384.100 22.032 C 384.500 22.057,384.500 22.104,384.100 22.265 C 383.508 22.504,383.419 24.400,384.000 24.400 C 384.574 24.400,384.494 25.489,383.900 25.767 C 383.500 25.953,383.500 26.047,383.900 26.233 C 384.496 26.512,384.565 27.478,384.002 27.667 C 383.783 27.740,383.486 29.735,383.341 32.100 C 383.177 34.790,382.914 36.402,382.639 36.406 C 382.398 36.409,382.470 36.589,382.800 36.806 C 383.270 37.115,383.291 37.271,382.894 37.527 C 382.575 37.734,382.335 39.080,382.243 41.173 C 382.146 43.394,381.916 44.620,381.549 44.877 C 381.124 45.174,381.113 45.307,381.500 45.464 C 382.089 45.703,382.169 46.675,381.616 46.867 C 381.404 46.940,381.133 48.710,381.014 50.800 C 380.894 52.890,380.617 54.660,380.398 54.733 C 380.179 54.807,380.000 56.007,380.000 57.400 C 380.000 59.036,379.823 60.016,379.500 60.167 C 379.100 60.353,379.100 60.447,379.500 60.633 C 380.104 60.915,380.162 61.879,379.586 62.071 C 379.333 62.156,379.078 65.149,378.926 69.805 C 378.791 73.982,378.523 77.503,378.331 77.629 C 378.133 77.759,377.984 138.230,377.988 217.143 C 377.993 347.794,377.951 356.444,377.314 356.688 C 376.354 357.057,375.200 358.101,375.200 358.601 C 375.200 358.833,374.840 359.283,374.400 359.600 C 373.960 359.917,373.600 360.409,373.600 360.692 C 373.600 360.976,373.240 361.516,372.800 361.893 C 372.360 362.270,372.000 362.808,372.000 363.089 C 372.000 363.370,371.730 363.600,371.400 363.600 C 371.070 363.600,370.800 363.768,370.800 363.973 C 370.800 364.178,370.404 364.472,369.920 364.625 C 369.436 364.779,368.390 365.601,367.597 366.452 C 366.769 367.340,365.779 368.000,365.277 368.000 C 364.795 368.000,364.400 368.166,364.400 368.368 C 364.400 368.571,363.860 368.855,363.200 369.000 C 362.540 369.145,362.000 369.429,362.000 369.632 C 362.000 369.834,361.550 370.000,361.000 370.000 C 360.450 370.000,360.000 370.153,360.000 370.341 C 360.000 370.528,358.528 370.795,356.728 370.934 C 354.928 371.073,353.353 371.350,353.228 371.551 C 353.103 371.751,351.605 372.046,349.900 372.205 C 348.195 372.364,346.800 372.642,346.800 372.822 C 346.800 373.003,345.990 373.272,345.000 373.421 C 344.010 373.569,343.200 373.836,343.200 374.014 C 343.200 374.191,342.660 374.455,342.000 374.600 C 341.193 374.777,340.800 375.106,340.800 375.605 C 340.800 376.018,340.409 376.470,339.919 376.626 C 339.434 376.780,338.791 377.152,338.490 377.453 C 338.189 377.754,337.686 378.000,337.371 378.000 C 337.057 378.000,336.800 378.164,336.800 378.365 C 336.800 378.566,336.080 378.851,335.200 379.000 C 334.320 379.149,333.600 379.434,333.600 379.635 C 333.600 379.836,333.240 380.000,332.800 380.000 C 332.360 380.000,332.000 380.168,332.000 380.373 C 332.000 380.577,330.560 380.871,328.800 381.024 C 327.040 381.178,325.600 381.447,325.600 381.623 C 325.600 381.799,324.610 382.066,323.400 382.217 C 322.190 382.368,321.200 382.628,321.200 382.795 C 321.200 382.961,320.480 383.213,319.600 383.354 C 318.720 383.494,318.000 383.773,318.000 383.973 C 318.000 384.173,317.468 384.453,316.818 384.596 C 316.155 384.742,315.529 385.195,315.391 385.628 C 315.256 386.053,314.838 386.400,314.462 386.400 C 314.086 386.400,313.470 386.760,313.093 387.200 C 312.716 387.640,312.136 388.000,311.804 388.000 C 311.472 388.000,311.200 388.166,311.200 388.368 C 311.200 388.571,310.660 388.855,310.000 389.000 C 309.340 389.145,308.800 389.429,308.800 389.632 C 308.800 389.834,308.260 390.000,307.600 390.000 C 306.940 390.000,306.400 390.159,306.400 390.353 C 306.400 390.548,305.230 390.832,303.800 390.985 C 302.246 391.152,301.198 391.452,301.194 391.732 C 301.190 392.003,301.022 391.948,300.794 391.600 C 300.512 391.170,300.315 391.130,300.100 391.459 C 299.935 391.712,298.765 392.048,297.500 392.205 C 296.235 392.363,295.200 392.628,295.200 392.795 C 295.200 392.961,294.480 393.213,293.600 393.354 C 292.720 393.494,292.000 393.787,292.000 394.005 C 292.000 394.222,291.738 394.400,291.418 394.400 C 291.098 394.400,290.386 394.850,289.836 395.400 C 289.286 395.950,288.688 396.400,288.507 396.400 C 288.326 396.400,287.870 396.760,287.493 397.200 C 287.116 397.640,286.536 398.000,286.204 398.000 C 285.872 398.000,285.600 398.180,285.600 398.400 C 285.600 398.620,285.144 398.800,284.587 398.800 C 284.031 398.800,283.471 399.070,283.345 399.400 C 283.216 399.736,282.621 400.000,281.991 400.000 C 281.372 400.000,280.796 400.211,280.710 400.469 C 280.433 401.300,265.200 401.480,265.200 400.652 C 265.200 400.269,264.874 400.000,264.408 400.000 C 263.902 400.000,263.527 399.648,263.372 399.029 C 263.237 398.495,262.874 397.961,262.564 397.841 C 262.254 397.722,262.000 397.169,262.000 396.613 C 262.000 396.056,261.823 395.600,261.606 395.600 C 261.351 395.600,261.175 382.322,261.106 357.933 C 261.022 328.231,260.894 320.231,260.500 320.100 C 260.225 320.008,260.000 319.759,260.000 319.547 C 260.000 318.996,257.410 316.400,256.860 316.400 C 256.607 316.400,256.400 316.220,256.400 316.000 C 256.400 315.780,256.130 315.600,255.800 315.600 C 255.470 315.600,255.200 315.870,255.200 316.200 C 255.200 316.530,255.020 316.800,254.800 316.800 C 254.580 316.800,254.400 317.070,254.400 317.400 C 254.400 317.730,254.228 318.000,254.018 318.000 C 253.808 318.000,253.518 318.630,253.374 319.400 C 253.229 320.170,252.965 320.800,252.787 320.800 C 252.609 320.800,252.345 321.340,252.200 322.000 C 252.055 322.660,251.771 323.200,251.568 323.200 C 251.366 323.200,251.200 323.476,251.200 323.813 C 251.200 324.149,250.930 324.529,250.600 324.655 C 250.270 324.782,250.000 325.207,250.000 325.600 C 250.000 325.993,249.730 326.418,249.400 326.545 C 249.070 326.671,248.800 326.958,248.800 327.183 C 248.800 327.679,247.538 329.200,247.126 329.200 C 246.652 329.200,243.200 332.685,243.200 333.164 C 243.200 333.404,243.028 333.600,242.818 333.600 C 242.608 333.600,242.318 334.230,242.174 335.000 C 242.029 335.770,241.751 336.400,241.555 336.400 C 241.360 336.400,241.200 336.747,241.200 337.171 C 241.200 337.596,240.930 338.213,240.600 338.543 C 240.270 338.873,240.000 339.260,240.000 339.402 C 240.000 339.824,237.859 341.824,237.100 342.111 C 236.715 342.256,236.400 342.561,236.400 342.787 C 236.400 343.014,236.158 343.200,235.861 343.200 C 234.861 343.200,233.563 344.718,233.328 346.164 C 233.200 346.954,232.955 347.600,232.783 347.600 C 232.611 347.600,232.349 348.320,232.200 349.200 C 232.051 350.080,231.766 350.800,231.565 350.800 C 231.364 350.800,231.200 351.019,231.200 351.287 C 231.200 351.555,230.783 352.140,230.272 352.587 C 229.762 353.034,229.228 353.715,229.085 354.100 C 228.942 354.485,228.549 354.800,228.213 354.800 C 227.876 354.800,227.600 355.070,227.600 355.400 C 227.600 356.075,226.213 357.600,225.600 357.600 C 225.380 357.600,225.200 357.870,225.200 358.200 C 225.200 358.530,225.020 358.800,224.800 358.800 C 224.580 358.800,224.400 359.070,224.400 359.400 C 224.400 359.730,224.223 360.000,224.008 360.000 C 223.792 360.000,223.502 360.450,223.364 361.000 C 223.226 361.550,222.967 362.000,222.788 362.000 C 222.610 362.000,222.348 362.525,222.207 363.167 C 222.066 363.808,221.692 364.433,221.376 364.554 C 221.059 364.676,220.800 365.191,220.800 365.699 C 220.800 366.207,220.440 366.883,220.000 367.200 C 219.560 367.517,219.200 367.967,219.200 368.199 C 219.200 368.704,217.757 370.000,217.195 370.000 C 216.978 370.000,216.800 370.186,216.800 370.413 C 216.800 370.639,216.485 370.944,216.100 371.090 C 215.228 371.420,214.400 372.219,214.400 372.729 C 214.400 372.941,214.130 373.218,213.800 373.345 C 213.470 373.471,213.200 373.851,213.200 374.187 C 213.200 374.524,213.036 374.800,212.835 374.800 C 212.634 374.800,212.349 375.520,212.200 376.400 C 212.051 377.280,211.785 378.000,211.608 378.000 C 211.431 378.000,211.174 378.450,211.036 379.000 C 210.898 379.550,210.608 380.000,210.392 380.000 C 210.177 380.000,210.000 380.194,210.000 380.431 C 210.000 381.141,207.777 383.140,206.680 383.416 C 206.118 383.557,205.561 383.926,205.441 384.236 C 205.322 384.546,204.859 384.800,204.413 384.800 C 203.924 384.800,203.600 385.063,203.600 385.460 C 203.600 386.269,201.262 388.600,200.071 388.978 C 199.592 389.130,199.200 389.422,199.200 389.627 C 199.200 389.832,198.945 390.000,198.633 390.000 C 198.322 390.000,197.996 390.211,197.910 390.469 C 197.605 391.385,193.757 391.102,192.887 390.100 C 192.458 389.605,191.942 389.200,191.742 389.200 C 191.302 389.200,190.000 387.733,190.000 387.238 C 190.000 387.044,189.730 386.782,189.400 386.655 C 189.070 386.529,188.800 386.149,188.800 385.813 C 188.800 385.041,187.542 383.762,186.439 383.413 C 185.978 383.266,185.600 383.002,185.600 382.826 C 185.600 382.650,184.839 382.403,183.909 382.278 C 182.978 382.154,182.155 381.866,182.079 381.638 C 182.004 381.411,181.325 381.110,180.571 380.968 C 179.817 380.827,179.200 380.565,179.200 380.386 C 179.200 380.208,178.660 379.522,178.000 378.862 C 177.340 378.202,176.800 377.462,176.800 377.218 C 176.800 376.974,176.530 376.671,176.200 376.545 C 175.870 376.418,175.600 375.988,175.600 375.589 C 175.600 375.108,175.195 374.775,174.400 374.600 C 173.740 374.455,173.200 374.194,173.200 374.019 C 173.200 373.845,172.480 373.587,171.600 373.446 C 170.720 373.306,170.000 373.032,170.000 372.839 C 170.000 372.645,169.550 372.374,169.000 372.236 C 168.450 372.098,168.000 371.822,168.000 371.624 C 168.000 371.426,167.468 371.147,166.818 371.004 C 166.168 370.861,165.533 370.418,165.406 370.020 C 165.280 369.621,164.636 369.187,163.976 369.055 C 162.804 368.821,160.800 367.075,160.800 366.289 C 160.800 365.759,159.203 364.400,158.582 364.400 C 158.309 364.400,157.982 364.130,157.855 363.800 C 157.729 363.470,157.349 363.200,157.013 363.200 C 156.676 363.200,156.400 363.020,156.400 362.800 C 156.400 362.580,156.158 362.400,155.861 362.400 C 155.565 362.400,154.907 362.040,154.400 361.600 C 153.893 361.160,153.247 360.800,152.966 360.800 C 152.684 360.800,152.340 360.440,152.200 360.000 C 151.664 358.310,150.800 359.945,150.800 362.650 C 150.800 363.173,150.620 363.600,150.400 363.600 C 150.136 363.600,150.000 377.533,150.000 404.600 C 150.000 431.667,150.136 445.600,150.400 445.600 C 150.620 445.600,150.800 445.848,150.800 446.152 C 150.800 446.906,153.855 450.000,154.600 450.000 C 154.930 450.000,155.200 450.180,155.200 450.400 C 155.200 450.620,155.470 450.800,155.800 450.800 C 156.130 450.800,156.400 450.620,156.400 450.400 C 156.400 450.180,157.030 450.000,157.800 450.000 C 158.570 450.000,159.200 449.845,159.200 449.656 C 159.200 449.466,160.144 449.200,161.298 449.063 C 162.451 448.926,163.456 448.631,163.531 448.407 C 163.606 448.183,164.090 448.000,164.608 448.000 C 165.140 448.000,166.039 447.475,166.675 446.794 C 169.924 443.312,170.763 442.591,172.031 442.195 C 172.564 442.028,173.118 441.708,173.263 441.482 C 173.408 441.257,175.433 440.987,177.763 440.884 C 180.093 440.780,182.000 440.539,182.000 440.348 C 182.000 440.156,182.990 440.000,184.200 440.000 C 185.410 440.000,186.400 439.834,186.400 439.632 C 186.400 439.429,186.940 439.145,187.600 439.000 C 188.260 438.855,188.800 438.571,188.800 438.368 C 188.800 438.166,189.059 438.000,189.375 438.000 C 189.691 438.000,190.456 437.457,191.075 436.794 C 194.858 432.739,195.279 432.429,197.390 432.139 C 198.385 432.003,199.200 431.753,199.200 431.584 C 199.200 431.415,201.090 431.148,203.400 430.991 C 205.710 430.833,207.600 430.546,207.600 430.352 C 207.600 430.158,208.320 430.000,209.200 430.000 C 210.080 430.000,210.800 429.841,210.800 429.646 C 210.800 429.451,211.823 429.164,213.073 429.008 C 215.250 428.736,215.475 428.593,218.418 425.607 C 220.107 423.892,221.919 422.355,222.445 422.191 C 222.970 422.026,223.528 421.691,223.685 421.446 C 223.863 421.168,225.934 420.947,229.185 420.860 C 232.053 420.783,234.400 420.558,234.400 420.360 C 234.400 420.162,234.940 420.000,235.600 420.000 C 236.260 420.000,236.800 419.834,236.800 419.632 C 236.800 419.429,237.340 419.145,238.000 419.000 C 238.660 418.855,239.200 418.571,239.200 418.368 C 239.200 418.166,239.566 418.000,240.013 418.000 C 240.459 418.000,240.922 417.746,241.041 417.436 C 241.161 417.126,241.695 416.763,242.229 416.628 C 242.797 416.486,243.200 416.092,243.200 415.681 C 243.200 414.816,244.446 413.704,245.794 413.366 C 246.347 413.227,246.800 412.973,246.800 412.802 C 246.800 412.631,247.655 412.363,248.700 412.206 C 249.745 412.050,250.723 411.723,250.873 411.481 C 251.246 410.879,259.529 410.844,259.915 411.442 C 260.072 411.686,260.901 412.014,261.757 412.171 C 262.614 412.329,263.572 412.715,263.886 413.029 C 264.200 413.343,264.894 413.600,265.429 413.600 C 265.963 413.600,266.400 413.757,266.400 413.948 C 266.400 414.140,267.480 414.419,268.800 414.568 L 271.200 414.840 271.200 416.387 C 271.200 417.249,271.421 418.023,271.700 418.136 C 272.076 418.289,272.052 418.444,271.600 418.763 C 271.193 419.051,271.161 419.190,271.500 419.194 C 271.814 419.198,272.000 419.783,272.000 420.767 C 272.000 421.645,271.780 422.422,271.500 422.536 C 271.119 422.691,271.137 422.834,271.575 423.139 C 272.016 423.446,272.182 424.832,272.288 429.070 C 272.365 432.142,272.598 434.659,272.813 434.733 C 273.326 434.910,273.314 436.800,272.800 436.800 C 272.217 436.800,272.309 439.891,272.900 440.167 C 273.300 440.353,273.300 440.447,272.900 440.633 C 272.625 440.762,272.400 441.122,272.400 441.433 C 272.400 441.745,272.625 442.003,272.900 442.006 C 273.260 442.011,273.244 442.111,272.845 442.364 C 272.468 442.602,272.296 443.497,272.306 445.157 C 272.317 446.993,272.182 447.600,271.761 447.600 C 271.236 447.600,271.056 448.179,271.141 449.600 C 271.165 450.003,271.104 450.036,270.955 449.700 C 270.610 448.921,270.000 449.112,270.000 450.000 C 270.000 450.440,269.820 450.800,269.600 450.800 C 269.380 450.800,269.200 450.607,269.200 450.371 C 269.200 450.136,268.917 450.226,268.571 450.571 C 268.226 450.917,267.686 451.200,267.371 451.200 C 267.057 451.200,266.800 451.380,266.800 451.600 C 266.800 451.820,266.440 452.000,266.000 452.000 C 265.560 452.000,265.200 452.250,265.200 452.555 C 265.200 452.874,264.602 453.223,263.800 453.374 C 263.030 453.518,262.400 453.808,262.400 454.018 C 262.400 454.228,261.095 454.402,259.500 454.403 C 253.562 454.411,252.400 454.716,252.400 456.268 C 252.400 457.105,252.170 457.713,251.800 457.855 C 251.470 457.982,251.200 458.516,251.200 459.043 C 251.200 459.627,250.966 460.000,250.600 460.000 C 250.270 460.000,250.000 460.180,250.000 460.400 C 250.000 460.620,249.743 460.800,249.429 460.800 C 249.114 460.800,248.613 461.044,248.316 461.342 C 248.018 461.639,246.880 462.017,245.787 462.181 C 244.694 462.344,243.706 462.630,243.591 462.815 C 243.477 463.000,241.092 463.278,238.291 463.434 C 235.491 463.590,233.200 463.871,233.200 464.058 C 233.200 464.589,232.095 464.461,231.833 463.900 C 231.647 463.500,231.553 463.500,231.367 463.900 C 231.216 464.222,230.241 464.400,228.625 464.400 C 223.348 464.400,221.200 464.813,221.200 465.828 C 221.200 466.738,220.264 468.000,219.590 468.000 C 219.395 468.000,219.119 468.625,218.976 469.390 C 218.748 470.603,218.530 470.814,217.257 471.048 C 216.456 471.195,215.695 471.476,215.568 471.672 C 215.440 471.868,214.630 472.140,213.768 472.276 C 212.905 472.412,212.102 472.672,211.981 472.854 C 211.861 473.035,208.981 473.303,205.581 473.449 C 202.182 473.596,199.340 473.869,199.267 474.058 C 199.059 474.591,198.001 474.460,197.994 473.900 C 197.990 473.554,197.897 473.536,197.694 473.840 C 197.532 474.082,196.052 474.390,194.405 474.524 C 192.758 474.659,191.347 474.959,191.269 475.192 C 191.192 475.424,190.875 475.868,190.564 476.179 C 190.254 476.489,190.000 476.949,190.000 477.200 C 190.000 477.451,189.738 477.919,189.417 478.240 C 189.096 478.561,188.887 479.043,188.951 479.312 C 189.016 479.580,188.993 479.665,188.901 479.500 C 188.593 478.948,188.057 479.192,187.800 480.000 C 187.660 480.440,187.301 480.800,187.002 480.800 C 186.702 480.800,186.215 481.042,185.919 481.339 C 185.622 481.635,184.665 482.011,183.791 482.175 C 182.917 482.339,182.088 482.658,181.948 482.884 C 181.801 483.121,179.055 483.384,175.447 483.505 C 172.011 483.620,169.200 483.843,169.200 483.999 C 169.200 484.156,167.404 484.383,165.210 484.504 C 161.019 484.734,160.000 485.170,160.000 486.729 C 160.000 487.161,159.711 487.625,159.358 487.761 C 158.992 487.901,158.815 488.263,158.946 488.603 C 159.101 489.008,158.921 489.200,158.387 489.200 C 157.867 489.200,157.600 489.471,157.600 490.000 C 157.600 490.440,157.420 490.800,157.200 490.800 C 156.980 490.800,156.800 490.607,156.800 490.371 C 156.800 490.136,156.517 490.226,156.171 490.571 C 155.826 490.917,155.363 491.200,155.143 491.200 C 154.923 491.200,154.473 491.470,154.143 491.800 C 153.813 492.130,153.031 492.400,152.405 492.400 C 151.779 492.400,151.205 492.584,151.131 492.808 C 151.056 493.033,149.106 493.324,146.797 493.455 C 144.362 493.593,142.477 493.883,142.306 494.146 C 142.095 494.471,142.011 494.458,142.006 494.100 C 142.002 493.796,141.450 493.600,140.600 493.600 C 139.750 493.600,139.198 493.796,139.194 494.100 C 139.190 494.439,139.051 494.407,138.763 494.000 C 138.444 493.548,138.289 493.524,138.136 493.900 C 138.024 494.176,137.257 494.400,136.425 494.400 C 132.084 494.400,130.000 494.873,130.000 495.857 C 130.000 496.376,129.820 496.800,129.600 496.800 C 129.380 496.800,129.200 497.070,129.200 497.400 C 129.200 497.730,128.930 498.000,128.600 498.000 C 127.879 498.000,127.785 498.786,128.500 498.832 C 128.807 498.851,128.769 498.952,128.400 499.094 C 128.070 499.221,127.530 499.631,127.200 500.005 C 126.870 500.379,126.150 500.826,125.600 500.997 C 125.050 501.168,124.495 501.470,124.368 501.668 C 124.240 501.866,123.430 502.140,122.568 502.276 C 121.705 502.412,120.898 502.678,120.774 502.866 C 120.649 503.054,117.949 503.324,114.774 503.465 C 111.312 503.618,108.880 503.897,108.700 504.161 C 108.494 504.463,108.277 504.413,108.006 504.000 C 107.789 503.670,107.609 503.598,107.606 503.841 C 107.602 504.111,106.198 504.372,103.968 504.517 C 100.236 504.759,98.800 505.474,98.800 507.090 C 98.800 507.885,97.882 508.714,96.663 509.020 C 96.094 509.163,95.508 509.658,95.362 510.121 C 94.958 511.393,94.348 511.839,92.629 512.118 C 91.769 512.257,90.944 512.568,90.795 512.807 C 90.637 513.064,88.401 513.341,85.363 513.481 C 82.350 513.620,80.062 513.903,79.870 514.160 C 79.634 514.473,79.481 514.456,79.336 514.100 C 79.108 513.536,78.000 513.411,78.000 513.948 C 78.000 514.140,76.200 514.425,74.000 514.581 C 70.289 514.844,69.266 515.191,70.500 515.767 C 70.898 515.952,70.896 516.048,70.493 516.236 C 69.549 516.675,68.833 517.620,69.039 518.157 C 69.172 518.504,68.826 518.775,68.054 518.929 C 67.366 519.067,66.760 519.495,66.618 519.944 C 66.482 520.371,65.928 520.832,65.386 520.968 C 64.844 521.104,64.400 521.392,64.400 521.608 C 64.400 521.823,64.143 522.000,63.829 522.000 C 63.514 522.000,62.985 522.272,62.653 522.604 C 62.244 523.014,60.853 523.284,58.325 523.445 C 56.276 523.576,54.499 523.845,54.375 524.044 C 54.049 524.567,40.248 524.543,40.073 524.019 C 39.996 523.789,39.543 523.597,39.067 523.593 C 37.349 523.579,36.400 521.960,36.400 519.044 C 36.400 517.548,36.226 516.400,36.000 516.400 C 35.734 516.400,35.600 462.533,35.600 355.600 C 35.600 248.667,35.734 194.800,36.000 194.800 C 36.579 194.800,36.493 193.304,35.900 193.064 C 35.553 192.923,35.531 192.760,35.829 192.530 C 36.591 191.944,36.828 190.800,36.187 190.800 C 35.864 190.800,35.600 190.620,35.600 190.400 C 35.600 190.180,36.050 190.000,36.600 190.000 C 37.833 190.000,37.841 189.630,36.631 188.631 C 35.705 187.867,35.704 187.855,36.477 187.031 C 37.212 186.247,37.285 186.240,37.772 186.900 C 38.405 187.759,38.800 187.797,38.800 187.000 C 38.800 186.670,38.620 186.400,38.400 186.400 C 38.180 186.400,38.000 186.220,38.000 186.000 C 38.000 185.780,38.270 185.600,38.600 185.600 C 38.930 185.600,39.200 185.870,39.200 186.200 C 39.200 187.029,40.662 186.956,41.203 186.100 C 41.521 185.599,41.706 185.542,41.857 185.900 C 42.105 186.491,44.400 186.582,44.400 186.000 C 44.400 185.426,45.489 185.506,45.767 186.100 C 45.953 186.500,46.047 186.500,46.233 186.100 C 46.410 185.720,48.771 185.600,56.033 185.600 C 62.144 185.600,65.600 185.456,65.600 185.200 C 65.600 184.980,65.828 184.800,66.107 184.800 C 66.481 184.800,66.605 183.896,66.577 181.381 C 66.546 178.664,66.668 177.885,67.169 177.588 C 67.726 177.258,67.730 177.168,67.200 176.813 C 66.778 176.531,66.752 176.410,67.113 176.406 C 67.394 176.403,67.729 176.670,67.855 177.000 C 68.234 177.986,69.200 177.698,69.200 176.600 C 69.200 176.050,69.380 175.600,69.600 175.600 C 69.820 175.600,70.000 175.887,70.000 176.238 C 70.000 176.941,74.061 176.675,74.333 175.953 C 74.532 175.427,75.499 175.526,75.767 176.100 C 75.953 176.500,76.047 176.500,76.233 176.100 C 76.411 175.719,78.878 175.600,86.567 175.600 L 96.667 175.600 96.667 173.365 C 96.667 171.875,96.856 171.008,97.233 170.765 C 97.718 170.453,97.713 170.341,97.200 169.993 C 96.676 169.637,96.689 169.533,97.300 169.173 C 97.685 168.946,97.997 168.544,97.994 168.280 C 97.990 167.957,97.875 167.978,97.641 168.347 C 97.361 168.789,97.131 168.731,96.447 168.047 C 95.448 167.048,95.427 166.952,96.150 166.674 C 96.487 166.545,96.681 166.716,96.650 167.114 C 96.617 167.549,96.964 167.795,97.700 167.858 C 98.554 167.931,98.800 167.779,98.800 167.176 C 98.800 166.749,98.620 166.400,98.400 166.400 C 98.180 166.400,98.000 166.220,98.000 166.000 C 98.000 165.780,98.270 165.600,98.600 165.600 C 98.930 165.600,99.200 165.793,99.200 166.029 C 99.200 166.452,100.170 167.600,100.528 167.600 C 100.630 167.600,100.826 167.150,100.964 166.600 C 101.232 165.534,102.400 165.200,102.400 166.190 C 102.400 166.856,104.878 166.587,105.148 165.891 C 105.230 165.681,105.469 165.755,105.679 166.055 C 105.975 166.478,106.106 166.488,106.264 166.100 C 106.419 165.718,108.875 165.600,116.633 165.600 C 123.144 165.600,126.800 165.456,126.800 165.200 C 126.800 164.980,127.091 164.800,127.447 164.800 C 127.888 164.800,128.029 164.556,127.892 164.030 C 127.751 163.490,127.856 163.323,128.245 163.473 C 128.817 163.692,129.053 162.608,128.500 162.299 C 128.335 162.207,128.447 162.194,128.748 162.272 C 129.118 162.366,129.230 162.159,129.093 161.636 C 128.951 161.090,129.055 160.923,129.445 161.073 C 129.769 161.197,130.000 161.031,130.000 160.676 C 130.000 160.341,130.225 159.975,130.500 159.864 C 130.874 159.712,130.883 159.577,130.536 159.329 C 130.267 159.137,131.103 158.972,132.523 158.938 C 133.898 158.905,135.038 158.686,135.120 158.440 C 135.201 158.198,135.522 158.000,135.833 158.000 C 136.145 158.000,136.414 157.685,136.432 157.300 C 136.450 156.882,136.544 156.801,136.665 157.100 C 136.900 157.683,137.872 157.771,138.067 157.226 C 138.140 157.021,139.820 156.796,141.800 156.726 L 145.400 156.600 145.525 157.900 C 145.594 158.615,145.794 159.200,145.970 159.200 C 146.145 159.200,146.399 160.131,146.534 161.270 C 146.669 162.408,146.952 163.447,147.163 163.577 C 147.375 163.708,147.673 164.757,147.825 165.908 C 147.978 167.058,148.242 168.000,148.411 168.000 C 148.580 168.000,148.845 169.260,149.000 170.800 C 149.155 172.340,149.443 173.600,149.641 173.600 C 149.852 173.600,150.000 199.202,150.000 235.600 C 150.000 270.044,149.847 297.600,149.655 297.600 C 149.466 297.600,149.190 298.780,149.042 300.223 L 148.773 302.845 150.539 304.562 C 151.510 305.506,152.597 306.390,152.953 306.526 C 153.309 306.663,153.600 306.945,153.600 307.152 C 153.600 307.360,154.320 307.651,155.200 307.800 C 156.080 307.949,156.800 308.234,156.800 308.435 C 156.800 308.636,157.256 308.800,157.813 308.800 C 158.369 308.800,158.929 309.070,159.055 309.400 C 159.182 309.730,159.545 310.000,159.862 310.000 C 160.550 310.000,162.400 311.907,162.400 312.616 C 162.400 312.890,162.670 313.218,163.000 313.345 C 163.330 313.471,163.600 314.031,163.600 314.587 C 163.600 315.314,163.814 315.600,164.357 315.600 C 164.774 315.600,165.218 315.870,165.345 316.200 C 165.471 316.530,166.031 316.800,166.587 316.800 C 167.144 316.800,167.600 316.964,167.600 317.165 C 167.600 317.366,168.320 317.651,169.200 317.800 C 170.080 317.949,170.800 318.234,170.800 318.435 C 170.800 318.636,171.076 318.800,171.413 318.800 C 171.749 318.800,172.129 319.070,172.255 319.400 C 172.382 319.730,172.654 320.000,172.860 320.000 C 173.213 320.000,173.682 320.331,174.985 321.500 C 175.292 321.775,175.673 322.000,175.831 322.000 C 176.274 322.000,178.800 324.705,178.800 325.180 C 178.800 325.411,179.070 325.600,179.400 325.600 C 179.730 325.600,180.000 325.777,180.000 325.992 C 180.000 326.208,180.437 326.494,180.971 326.628 C 181.505 326.763,182.039 327.126,182.159 327.436 C 182.278 327.746,182.636 328.000,182.954 328.000 C 183.273 328.000,183.597 328.191,183.675 328.424 C 183.862 328.986,186.402 329.044,186.742 328.494 C 186.888 328.257,187.501 327.940,188.104 327.788 C 188.707 327.637,189.200 327.353,189.200 327.157 C 189.200 326.960,189.566 326.800,190.013 326.800 C 190.459 326.800,190.929 326.530,191.055 326.200 C 191.182 325.870,191.459 325.600,191.671 325.600 C 192.181 325.600,192.980 324.772,193.310 323.900 C 193.456 323.515,193.937 323.200,194.380 323.200 C 194.898 323.200,195.271 322.855,195.428 322.229 C 195.563 321.695,195.926 321.161,196.236 321.041 C 196.546 320.922,196.800 320.459,196.800 320.013 C 196.800 319.566,196.980 319.200,197.200 319.200 C 197.420 319.200,197.600 318.924,197.600 318.587 C 197.600 318.251,197.865 317.873,198.189 317.749 C 198.513 317.624,198.893 316.910,199.034 316.161 C 199.174 315.413,199.449 314.800,199.645 314.800 C 199.840 314.800,200.000 314.530,200.000 314.200 C 200.000 313.870,200.180 313.600,200.400 313.600 C 200.620 313.600,200.800 313.393,200.800 313.140 C 200.800 312.888,201.430 312.069,202.200 311.321 C 202.970 310.573,203.600 309.790,203.600 309.581 C 203.600 309.371,203.897 309.200,204.260 309.200 C 205.333 309.200,207.629 306.531,207.879 304.993 C 208.003 304.227,208.247 303.600,208.421 303.600 C 208.594 303.600,208.855 303.060,209.000 302.400 C 209.145 301.740,209.429 301.200,209.632 301.200 C 209.834 301.200,210.000 301.006,210.000 300.768 C 210.000 300.027,213.442 296.855,214.548 296.577 C 215.220 296.409,215.600 296.040,215.600 295.557 C 215.600 295.140,215.772 294.800,215.982 294.800 C 216.192 294.800,216.482 294.170,216.626 293.400 C 216.771 292.630,217.041 292.000,217.226 292.000 C 217.412 292.000,217.682 291.370,217.826 290.600 C 217.971 289.830,218.249 289.200,218.445 289.200 C 218.640 289.200,218.800 288.924,218.800 288.587 C 218.800 288.251,219.070 287.871,219.400 287.745 C 219.730 287.618,220.000 287.264,220.000 286.957 C 220.000 286.651,220.168 286.400,220.373 286.400 C 220.578 286.400,220.873 286.001,221.027 285.514 C 221.349 284.502,224.518 281.200,225.168 281.200 C 225.406 281.200,225.600 280.930,225.600 280.600 C 225.600 280.270,225.777 280.000,225.992 280.000 C 226.208 280.000,226.494 279.563,226.628 279.029 C 226.763 278.495,227.126 277.961,227.436 277.841 C 227.746 277.722,228.000 277.349,228.000 277.013 C 228.000 276.676,228.160 276.400,228.355 276.400 C 228.551 276.400,228.829 275.770,228.974 275.000 C 229.118 274.230,229.408 273.600,229.618 273.600 C 229.828 273.600,230.000 273.330,230.000 273.000 C 230.000 272.670,230.180 272.400,230.400 272.400 C 230.620 272.400,230.800 272.124,230.800 271.787 C 230.800 271.451,231.063 271.074,231.385 270.950 C 231.706 270.827,232.078 270.383,232.211 269.964 C 232.344 269.545,232.891 269.092,233.427 268.958 C 233.962 268.823,234.400 268.572,234.400 268.400 C 234.400 268.228,234.847 267.974,235.394 267.837 C 236.007 267.683,236.483 267.207,236.637 266.594 C 236.774 266.047,237.045 265.600,237.239 265.600 C 237.432 265.600,237.706 264.880,237.846 264.000 C 237.987 263.120,238.259 262.400,238.451 262.400 C 238.643 262.400,238.800 262.053,238.800 261.629 C 238.800 261.204,239.070 260.587,239.400 260.257 C 239.730 259.927,240.000 259.540,240.000 259.397 C 240.000 259.078,243.448 255.600,243.764 255.600 C 244.239 255.600,245.600 254.200,245.600 253.711 C 245.600 253.430,245.766 253.200,245.968 253.200 C 246.171 253.200,246.455 252.660,246.600 252.000 C 246.745 251.340,247.009 250.800,247.187 250.800 C 247.365 250.800,247.629 250.170,247.774 249.400 C 247.918 248.630,248.208 248.000,248.418 248.000 C 248.628 248.000,248.800 247.724,248.800 247.387 C 248.800 247.051,249.070 246.671,249.400 246.545 C 249.730 246.418,250.000 245.974,250.000 245.557 C 250.000 245.141,250.180 244.800,250.400 244.800 C 250.620 244.800,250.800 244.596,250.800 244.347 C 250.800 243.881,254.555 240.000,255.006 240.000 C 255.397 240.000,256.217 239.073,256.510 238.300 C 256.656 237.915,256.958 237.600,257.183 237.600 C 257.407 237.600,257.706 236.880,257.846 236.000 C 257.987 235.120,258.233 234.400,258.393 234.400 C 258.553 234.400,258.798 233.186,258.936 231.702 C 259.075 230.218,259.371 228.943,259.594 228.869 C 259.817 228.794,260.000 228.223,260.000 227.600 C 260.000 226.977,260.197 226.401,260.439 226.320 C 260.689 226.237,260.971 224.674,261.095 222.687 C 261.215 220.769,261.467 219.200,261.656 219.200 C 261.845 219.200,262.000 218.570,262.000 217.800 C 262.000 217.030,261.820 216.400,261.600 216.400 C 261.336 216.400,261.200 202.472,261.200 175.416 C 261.200 138.655,261.135 134.378,260.572 133.916 C 260.226 133.632,259.646 133.085,259.283 132.700 C 258.920 132.315,258.392 132.000,258.111 132.000 C 257.830 132.000,257.600 131.832,257.600 131.627 C 257.600 131.422,257.195 131.128,256.700 130.973 C 256.205 130.819,255.668 130.491,255.506 130.246 C 255.292 129.922,255.211 129.925,255.206 130.258 C 255.202 130.540,253.967 130.826,252.000 131.000 C 250.240 131.156,248.800 131.432,248.800 131.613 C 248.800 131.794,247.810 132.066,246.600 132.217 C 245.390 132.368,244.400 132.649,244.400 132.841 C 244.400 133.033,243.680 133.306,242.800 133.446 C 241.920 133.587,241.200 133.840,241.200 134.008 C 241.200 134.176,240.750 134.426,240.200 134.564 C 239.650 134.702,239.200 134.992,239.200 135.208 C 239.200 135.423,238.930 135.600,238.600 135.600 C 238.270 135.600,238.000 135.766,238.000 135.968 C 238.000 136.171,237.460 136.455,236.800 136.600 C 236.140 136.745,235.600 137.021,235.600 137.214 C 235.600 137.406,234.925 137.688,234.100 137.840 C 233.275 137.991,232.496 138.274,232.370 138.468 C 232.243 138.662,231.208 138.931,230.070 139.066 C 228.931 139.201,228.000 139.466,228.000 139.656 C 228.000 139.845,227.370 140.000,226.600 140.000 C 225.830 140.000,225.200 140.161,225.200 140.358 C 225.200 140.555,223.760 140.844,222.000 141.000 C 220.240 141.156,218.800 141.424,218.800 141.596 C 218.800 141.767,217.810 142.032,216.600 142.183 C 215.390 142.334,214.400 142.602,214.400 142.778 C 214.400 142.954,213.680 143.213,212.800 143.354 C 211.920 143.494,211.200 143.773,211.200 143.973 C 211.200 144.173,210.660 144.455,210.000 144.600 C 209.340 144.745,208.800 145.029,208.800 145.232 C 208.800 145.434,208.530 145.600,208.200 145.600 C 207.870 145.600,207.600 145.777,207.600 145.992 C 207.600 146.208,207.150 146.498,206.600 146.636 C 206.050 146.774,205.600 147.027,205.600 147.198 C 205.600 147.369,204.790 147.631,203.800 147.779 C 202.810 147.928,202.000 148.205,202.000 148.396 C 202.000 148.586,201.010 148.866,199.800 149.017 C 198.590 149.168,197.600 149.451,197.600 149.646 C 197.600 149.841,196.880 150.000,196.000 150.000 C 195.120 150.000,194.400 150.161,194.400 150.358 C 194.400 150.555,192.960 150.844,191.200 151.000 C 189.440 151.156,188.000 151.424,188.000 151.596 C 188.000 151.767,187.010 152.032,185.800 152.183 C 184.590 152.334,183.600 152.605,183.600 152.784 C 183.600 152.964,182.970 153.229,182.200 153.374 C 181.430 153.518,180.800 153.808,180.800 154.018 C 180.800 154.228,180.434 154.400,179.987 154.400 C 179.541 154.400,179.071 154.670,178.945 155.000 C 178.818 155.330,178.464 155.600,178.157 155.600 C 177.851 155.600,177.600 155.766,177.600 155.968 C 177.600 156.171,177.060 156.455,176.400 156.600 C 175.740 156.745,175.200 157.013,175.200 157.197 C 175.200 157.380,174.480 157.651,173.600 157.800 C 172.720 157.949,172.000 158.214,172.000 158.389 C 172.000 158.564,170.830 158.832,169.400 158.985 C 167.970 159.138,166.800 159.429,166.800 159.632 C 166.800 159.834,166.080 160.000,165.200 160.000 C 164.320 160.000,163.600 160.159,163.600 160.353 C 163.600 160.547,162.070 160.833,160.200 160.989 C 158.330 161.144,156.800 161.436,156.800 161.636 C 156.800 162.168,155.633 162.081,154.985 161.500 C 153.843 160.475,153.228 160.000,153.047 160.000 C 152.944 160.000,151.750 158.917,150.393 157.593 L 147.926 155.187 147.707 142.693 C 147.587 135.822,147.331 130.098,147.138 129.973 C 146.466 129.536,146.533 106.019,147.207 105.550 C 147.655 105.240,147.677 105.089,147.300 104.936 C 146.706 104.695,146.624 103.600,147.200 103.600 C 147.661 103.600,147.751 101.351,147.300 101.099 C 147.135 101.007,147.245 100.994,147.544 101.070 C 147.929 101.168,148.023 100.943,147.863 100.305 C 147.600 99.248,149.275 97.352,150.049 97.830 C 150.316 97.995,150.776 97.792,151.107 97.361 C 151.556 96.777,151.739 96.727,151.894 97.145 C 152.040 97.538,152.177 97.562,152.382 97.230 C 152.569 96.927,155.027 96.684,159.533 96.522 C 163.310 96.386,166.400 96.123,166.400 95.938 C 166.400 95.752,167.210 95.600,168.200 95.600 C 169.213 95.600,170.000 95.413,170.000 95.171 C 170.000 94.936,170.272 94.471,170.604 94.139 C 170.936 93.807,171.104 93.368,170.978 93.164 C 170.610 92.568,171.201 91.200,171.827 91.200 C 172.142 91.200,172.400 90.930,172.400 90.600 C 172.400 90.270,172.580 90.000,172.800 90.000 C 173.020 90.000,173.221 89.685,173.246 89.300 C 173.291 88.633,173.302 88.633,173.476 89.300 C 173.746 90.335,174.400 90.150,174.400 89.038 C 174.400 88.179,174.628 88.044,176.500 87.789 C 177.655 87.632,178.728 87.300,178.885 87.052 C 179.077 86.748,181.861 86.554,187.385 86.459 C 191.903 86.381,195.600 86.156,195.600 85.959 C 195.600 85.762,195.793 85.600,196.029 85.600 C 196.839 85.600,197.470 84.585,197.693 82.922 C 197.900 81.380,198.119 80.955,199.500 79.415 C 199.775 79.108,200.000 78.676,200.000 78.456 C 200.000 77.894,201.425 77.503,202.500 77.769 C 202.995 77.892,203.175 77.889,202.900 77.763 C 201.504 77.122,203.058 76.867,210.000 76.600 C 214.180 76.439,217.600 76.148,217.600 75.954 C 217.600 75.759,218.301 75.600,219.157 75.600 C 220.172 75.600,220.795 75.391,220.945 75.000 C 221.085 74.635,220.945 74.400,220.587 74.400 C 220.264 74.400,220.000 74.220,220.000 74.000 C 220.000 73.780,220.463 73.600,221.029 73.600 C 221.977 73.600,222.007 73.550,221.409 72.951 C 221.052 72.595,220.814 72.025,220.880 71.685 C 221.043 70.846,222.000 70.574,222.000 71.367 C 222.000 71.715,221.790 72.000,221.533 72.000 C 221.277 72.000,221.189 72.122,221.338 72.271 C 221.690 72.624,223.024 71.185,223.378 70.069 C 223.542 69.554,223.984 69.200,224.464 69.200 C 224.915 69.200,225.360 68.873,225.467 68.464 C 225.606 67.935,226.066 67.712,227.101 67.673 C 227.893 67.643,228.660 67.426,228.806 67.191 C 228.972 66.921,232.103 66.677,237.235 66.533 C 241.726 66.407,245.460 66.146,245.533 65.952 C 245.607 65.758,246.102 65.600,246.633 65.600 C 247.165 65.600,247.623 65.375,247.651 65.100 C 247.679 64.825,247.746 64.158,247.800 63.617 C 247.855 63.076,248.102 62.566,248.349 62.484 C 248.597 62.401,248.800 62.001,248.800 61.595 C 248.800 61.189,249.099 60.558,249.465 60.192 C 250.029 59.628,250.044 59.468,249.565 59.137 C 249.146 58.848,249.220 58.809,249.850 58.985 C 250.483 59.162,250.755 59.015,250.913 58.411 C 251.067 57.823,251.456 57.600,252.329 57.600 C 252.991 57.600,253.595 57.416,253.670 57.191 C 253.751 56.946,256.603 56.689,260.803 56.548 C 264.651 56.420,267.860 56.154,267.933 55.957 C 268.007 55.761,268.950 55.600,270.029 55.600 C 272.516 55.600,273.650 54.749,273.325 53.124 C 273.138 52.188,273.213 52.030,273.749 52.236 C 274.184 52.403,274.400 52.272,274.400 51.843 C 274.400 51.186,274.998 50.959,275.301 51.500 C 275.393 51.665,275.416 51.580,275.351 51.312 C 275.287 51.043,275.496 50.561,275.817 50.240 C 276.138 49.919,276.400 49.284,276.400 48.829 C 276.400 48.049,276.964 47.796,278.305 47.971 C 278.583 48.008,278.918 47.759,279.048 47.419 C 279.332 46.679,281.048 46.590,281.336 47.300 C 281.491 47.681,281.635 47.663,281.940 47.224 C 282.253 46.774,283.772 46.614,288.871 46.492 C 292.462 46.406,295.460 46.170,295.533 45.968 C 295.607 45.766,296.192 45.600,296.833 45.600 C 297.863 45.600,298.000 45.459,298.000 44.400 C 298.000 43.740,298.180 43.200,298.400 43.200 C 298.862 43.200,298.950 41.350,298.500 41.099 C 298.335 41.007,298.410 40.980,298.668 41.041 C 299.308 41.191,301.005 39.667,300.609 39.297 C 300.434 39.134,300.210 39.225,300.112 39.500 C 300.014 39.775,299.663 40.000,299.333 40.000 C 298.420 40.000,298.941 39.018,299.931 38.872 C 300.409 38.802,300.800 38.593,300.800 38.407 C 300.800 38.222,301.565 37.942,302.500 37.786 C 303.435 37.630,304.295 37.352,304.412 37.170 C 304.529 36.987,307.769 36.721,311.612 36.579 C 315.455 36.436,318.660 36.158,318.733 35.960 C 318.807 35.762,319.596 35.600,320.487 35.600 C 321.684 35.600,322.341 35.349,322.998 34.640 C 323.487 34.112,324.228 33.616,324.644 33.537 C 325.219 33.428,325.429 32.986,325.523 31.697 C 325.607 30.542,325.830 30.000,326.223 30.000 C 326.571 30.000,326.800 29.605,326.800 29.005 C 326.800 28.153,327.031 27.973,328.400 27.754 C 329.280 27.613,330.000 27.296,330.001 27.049 C 330.001 26.741,332.045 26.557,336.500 26.463 C 340.338 26.382,343.102 26.159,343.251 25.918 C 343.407 25.665,343.586 25.717,343.721 26.055 C 343.900 26.502,344.016 26.492,344.370 26.000 C 344.752 25.467,344.844 25.467,345.194 26.000 C 345.457 26.401,345.590 26.434,345.594 26.100 C 345.597 25.825,346.050 25.600,346.600 25.600 C 347.503 25.600,347.604 25.435,347.645 23.900 C 347.753 19.794,347.844 19.594,350.683 17.206 C 351.304 16.684,352.400 16.680,352.400 17.200 C 352.400 17.420,352.580 17.600,352.800 17.600 C 353.020 17.600,353.200 17.346,353.200 17.036 C 353.200 16.606,353.884 16.466,356.097 16.445 C 357.691 16.431,359.055 16.234,359.130 16.009 C 359.306 15.483,372.280 15.450,372.467 15.975 M132.804 86.697 C 131.630 87.157,127.136 91.717,126.689 92.900 C 126.544 93.285,126.497 93.600,126.584 93.600 C 126.800 93.600,133.600 86.787,133.600 86.571 C 133.600 86.379,133.622 86.376,132.804 86.697 M122.804 96.697 C 121.630 97.157,117.136 101.717,116.689 102.900 C 116.544 103.285,116.497 103.600,116.584 103.600 C 116.800 103.600,123.600 96.787,123.600 96.571 C 123.600 96.379,123.622 96.376,122.804 96.697 M114.900 126.665 C 114.625 126.776,114.400 127.122,114.400 127.433 C 114.400 127.745,114.240 128.000,114.045 128.000 C 113.850 128.000,113.563 128.855,113.406 129.900 C 113.250 130.945,112.921 131.924,112.676 132.076 C 112.391 132.253,112.172 134.682,112.066 138.854 C 111.944 143.661,111.757 145.500,111.350 145.907 C 111.048 146.210,110.800 146.702,110.800 147.002 C 110.800 147.301,110.449 147.657,110.020 147.794 C 109.592 147.930,109.118 148.428,108.968 148.902 C 108.817 149.375,108.424 150.033,108.094 150.363 C 107.561 150.896,107.529 150.854,107.801 149.981 C 107.970 149.442,108.249 148.908,108.422 148.796 C 108.595 148.684,108.860 148.099,109.012 147.496 C 109.163 146.893,109.447 146.400,109.643 146.400 C 109.840 146.400,110.000 143.790,110.000 140.600 C 110.000 137.252,110.159 134.800,110.375 134.800 C 110.582 134.800,110.872 133.990,111.021 133.000 C 111.169 132.010,111.436 131.200,111.614 131.200 C 111.791 131.200,112.055 130.660,112.200 130.000 C 112.345 129.340,112.629 128.800,112.832 128.800 C 113.034 128.800,113.200 128.543,113.200 128.229 C 113.200 127.523,114.291 126.389,114.929 126.432 C 115.260 126.454,115.252 126.523,114.900 126.665 M36.680 187.336 C 36.348 188.201,37.106 189.146,37.563 188.436 C 37.951 187.834,37.721 186.800,37.200 186.800 C 37.027 186.800,36.793 187.041,36.680 187.336 M390.964 449.289 C 391.117 451.319,391.393 453.074,391.577 453.189 C 391.761 453.305,391.978 456.782,392.059 460.916 C 392.156 465.879,392.358 468.529,392.654 468.716 C 392.900 468.872,393.230 469.765,393.386 470.700 C 393.542 471.635,393.834 472.400,394.035 472.400 C 394.236 472.400,394.400 472.655,394.400 472.967 C 394.400 473.278,394.625 473.614,394.900 473.712 C 395.175 473.810,395.282 474.018,395.138 474.174 C 394.796 474.544,393.200 473.174,393.200 472.511 C 393.200 472.230,393.028 472.000,392.818 472.000 C 392.608 472.000,392.318 471.370,392.174 470.600 C 392.029 469.830,391.762 469.200,391.580 469.200 C 391.398 469.200,391.128 468.390,390.979 467.400 C 390.831 466.410,390.550 465.600,390.355 465.600 C 390.158 465.600,390.000 461.146,390.000 455.600 C 390.000 445.487,390.453 442.522,390.964 449.289 M305.600 460.200 C 305.600 465.495,305.505 465.390,308.045 462.900 C 310.775 460.223,310.706 460.292,312.679 458.248 C 313.661 457.232,314.629 456.400,314.832 456.400 C 315.034 456.400,315.200 456.220,315.200 456.000 C 315.200 455.756,313.333 455.600,310.400 455.600 L 305.600 455.600 305.600 460.200 M285.600 500.200 C 285.600 505.495,285.505 505.390,288.045 502.900 C 290.775 500.223,290.706 500.292,292.679 498.248 C 293.661 497.232,294.629 496.400,294.832 496.400 C 295.034 496.400,295.200 496.220,295.200 496.000 C 295.200 495.756,293.333 495.600,290.400 495.600 L 285.600 495.600 285.600 500.200 \"\r\n                    stroke=\"none\"\r\n                    fill=\"#94cc54\"\r\n                    fill-rule=\"evenodd\"\r\n                  ></path>\r\n                  <path\r\n                    id=\"path1\"\r\n                    d=\"M140.300 156.710 C 139.035 156.782,138.000 157.011,138.000 157.220 C 138.000 157.781,136.900 157.682,136.665 157.100 C 136.544 156.801,136.450 156.882,136.432 157.300 C 136.414 157.685,136.145 158.000,135.833 158.000 C 135.522 158.000,135.201 158.198,135.120 158.440 C 135.038 158.686,133.898 158.905,132.523 158.938 C 131.103 158.972,130.267 159.137,130.536 159.329 C 130.883 159.577,130.874 159.712,130.500 159.864 C 130.225 159.975,130.000 160.341,130.000 160.676 C 130.000 161.031,129.769 161.197,129.445 161.073 C 129.055 160.923,128.951 161.090,129.093 161.636 C 129.230 162.159,129.118 162.366,128.748 162.272 C 128.447 162.194,128.335 162.207,128.500 162.299 C 129.053 162.608,128.817 163.692,128.245 163.473 C 127.856 163.323,127.751 163.490,127.892 164.030 C 128.029 164.556,127.888 164.800,127.447 164.800 C 127.091 164.800,126.800 164.980,126.800 165.200 C 126.800 165.456,123.144 165.600,116.633 165.600 C 108.875 165.600,106.419 165.718,106.264 166.100 C 106.106 166.488,105.975 166.478,105.679 166.055 C 105.469 165.755,105.230 165.681,105.148 165.891 C 104.878 166.587,102.400 166.856,102.400 166.190 C 102.400 165.200,101.232 165.534,100.964 166.600 C 100.826 167.150,100.630 167.600,100.528 167.600 C 100.170 167.600,99.200 166.452,99.200 166.029 C 99.200 165.793,98.930 165.600,98.600 165.600 C 98.270 165.600,98.000 165.780,98.000 166.000 C 98.000 166.220,98.180 166.400,98.400 166.400 C 98.620 166.400,98.800 166.749,98.800 167.176 C 98.800 167.779,98.554 167.931,97.700 167.858 C 96.964 167.795,96.617 167.549,96.650 167.114 C 96.681 166.716,96.487 166.545,96.150 166.674 C 95.427 166.952,95.448 167.048,96.447 168.047 C 97.131 168.731,97.361 168.789,97.641 168.347 C 97.875 167.978,97.990 167.957,97.994 168.280 C 97.997 168.544,97.685 168.946,97.300 169.173 C 96.689 169.533,96.676 169.637,97.200 169.993 C 97.713 170.341,97.718 170.453,97.233 170.765 C 96.856 171.008,96.667 171.875,96.667 173.365 L 96.667 175.600 86.567 175.600 C 78.878 175.600,76.411 175.719,76.233 176.100 C 76.047 176.500,75.953 176.500,75.767 176.100 C 75.499 175.526,74.532 175.427,74.333 175.953 C 74.061 176.675,70.000 176.941,70.000 176.238 C 70.000 175.887,69.820 175.600,69.600 175.600 C 69.380 175.600,69.200 176.050,69.200 176.600 C 69.200 177.698,68.234 177.986,67.855 177.000 C 67.729 176.670,67.394 176.403,67.113 176.406 C 66.752 176.410,66.778 176.531,67.200 176.813 C 67.730 177.168,67.726 177.258,67.169 177.588 C 66.668 177.885,66.546 178.664,66.577 181.381 C 66.605 183.896,66.481 184.800,66.107 184.800 C 65.828 184.800,65.600 184.980,65.600 185.200 C 65.600 185.456,62.144 185.600,56.033 185.600 C 48.771 185.600,46.410 185.720,46.233 186.100 C 46.047 186.500,45.953 186.500,45.767 186.100 C 45.489 185.506,44.400 185.426,44.400 186.000 C 44.400 186.582,42.105 186.491,41.857 185.900 C 41.706 185.542,41.521 185.599,41.203 186.100 C 40.662 186.956,39.200 187.029,39.200 186.200 C 39.200 185.870,38.930 185.600,38.600 185.600 C 38.270 185.600,38.000 185.780,38.000 186.000 C 38.000 186.220,38.180 186.400,38.400 186.400 C 38.620 186.400,38.800 186.670,38.800 187.000 C 38.800 187.797,38.405 187.759,37.772 186.900 C 37.285 186.240,37.212 186.247,36.477 187.031 C 35.704 187.855,35.705 187.867,36.631 188.631 C 37.841 189.630,37.833 190.000,36.600 190.000 C 36.050 190.000,35.600 190.180,35.600 190.400 C 35.600 190.620,35.864 190.800,36.187 190.800 C 36.828 190.800,36.591 191.944,35.829 192.530 C 35.531 192.760,35.553 192.923,35.900 193.064 C 36.493 193.304,36.579 194.800,36.000 194.800 C 35.734 194.800,35.600 248.667,35.600 355.600 C 35.600 462.533,35.734 516.400,36.000 516.400 C 36.226 516.400,36.403 517.571,36.407 519.100 C 36.414 522.028,37.363 523.600,39.123 523.600 C 39.569 523.600,39.996 523.789,40.073 524.019 C 40.248 524.543,54.049 524.567,54.375 524.044 C 54.499 523.845,56.276 523.576,58.325 523.445 C 60.853 523.284,62.244 523.014,62.653 522.604 C 62.985 522.272,63.514 522.000,63.829 522.000 C 64.143 522.000,64.400 521.823,64.400 521.608 C 64.400 521.392,64.844 521.104,65.386 520.968 C 65.928 520.832,66.482 520.371,66.618 519.944 C 66.760 519.495,67.366 519.067,68.054 518.929 C 68.826 518.775,69.172 518.504,69.039 518.157 C 68.833 517.620,69.549 516.675,70.493 516.236 C 70.896 516.048,70.898 515.952,70.500 515.767 C 69.266 515.191,70.289 514.844,74.000 514.581 C 76.200 514.425,78.000 514.140,78.000 513.948 C 78.000 513.411,79.108 513.536,79.336 514.100 C 79.481 514.456,79.634 514.473,79.870 514.160 C 80.062 513.903,82.350 513.620,85.363 513.481 C 88.401 513.341,90.637 513.064,90.795 512.807 C 90.944 512.568,91.769 512.257,92.629 512.118 C 94.348 511.839,94.958 511.393,95.362 510.121 C 95.508 509.658,96.094 509.163,96.663 509.020 C 97.882 508.714,98.800 507.885,98.800 507.090 C 98.800 505.474,100.236 504.759,103.968 504.517 C 106.198 504.372,107.602 504.111,107.606 503.841 C 107.609 503.598,107.789 503.670,108.006 504.000 C 108.277 504.413,108.494 504.463,108.700 504.161 C 108.880 503.897,111.312 503.618,114.774 503.465 C 117.949 503.324,120.649 503.054,120.774 502.866 C 120.898 502.678,121.705 502.412,122.568 502.276 C 123.430 502.140,124.240 501.866,124.368 501.668 C 124.495 501.470,125.050 501.168,125.600 500.997 C 126.150 500.826,126.870 500.379,127.200 500.005 C 127.530 499.631,128.070 499.221,128.400 499.094 C 128.769 498.952,128.807 498.851,128.500 498.832 C 127.785 498.786,127.879 498.000,128.600 498.000 C 128.930 498.000,129.200 497.730,129.200 497.400 C 129.200 497.070,129.380 496.800,129.600 496.800 C 129.820 496.800,130.000 496.376,130.000 495.857 C 130.000 494.873,132.084 494.400,136.425 494.400 C 137.257 494.400,138.024 494.176,138.136 493.900 C 138.289 493.524,138.444 493.548,138.763 494.000 C 139.051 494.407,139.190 494.439,139.194 494.100 C 139.198 493.796,139.750 493.600,140.600 493.600 C 141.450 493.600,142.002 493.796,142.006 494.100 C 142.011 494.458,142.095 494.471,142.306 494.146 C 142.477 493.883,144.362 493.593,146.797 493.455 C 149.106 493.324,151.056 493.033,151.131 492.808 C 151.205 492.584,151.779 492.400,152.405 492.400 C 153.031 492.400,153.813 492.130,154.143 491.800 C 154.473 491.470,154.923 491.200,155.143 491.200 C 155.363 491.200,155.826 490.917,156.171 490.571 C 156.517 490.226,156.800 490.136,156.800 490.371 C 156.800 490.607,156.980 490.800,157.200 490.800 C 157.420 490.800,157.600 490.440,157.600 490.000 C 157.600 489.471,157.867 489.200,158.387 489.200 C 158.921 489.200,159.101 489.008,158.946 488.603 C 158.815 488.263,158.992 487.901,159.358 487.761 C 159.711 487.625,160.000 487.161,160.000 486.729 C 160.000 485.170,161.019 484.734,165.210 484.504 C 167.404 484.383,169.200 484.156,169.200 483.999 C 169.200 483.843,172.011 483.620,175.447 483.505 C 179.055 483.384,181.801 483.121,181.948 482.884 C 182.088 482.658,182.917 482.339,183.791 482.175 C 184.665 482.011,185.622 481.635,185.919 481.339 C 186.215 481.042,186.702 480.800,187.002 480.800 C 187.301 480.800,187.660 480.440,187.800 480.000 C 188.057 479.192,188.593 478.948,188.901 479.500 C 188.993 479.665,189.016 479.580,188.951 479.312 C 188.887 479.043,189.096 478.561,189.417 478.240 C 189.738 477.919,190.000 477.451,190.000 477.200 C 190.000 476.949,190.254 476.489,190.564 476.179 C 190.875 475.868,191.192 475.424,191.269 475.192 C 191.347 474.959,192.758 474.659,194.405 474.524 C 196.052 474.390,197.532 474.082,197.694 473.840 C 197.897 473.536,197.990 473.554,197.994 473.900 C 198.001 474.460,199.059 474.591,199.267 474.058 C 199.340 473.869,202.182 473.596,205.581 473.449 C 208.981 473.303,211.861 473.035,211.981 472.854 C 212.102 472.672,212.905 472.412,213.768 472.276 C 214.630 472.140,215.440 471.868,215.568 471.672 C 215.695 471.476,216.456 471.195,217.257 471.048 C 218.530 470.814,218.748 470.603,218.976 469.390 C 219.119 468.625,219.395 468.000,219.590 468.000 C 220.264 468.000,221.200 466.738,221.200 465.828 C 221.200 464.813,223.348 464.400,228.625 464.400 C 230.241 464.400,231.216 464.222,231.367 463.900 C 231.553 463.500,231.647 463.500,231.833 463.900 C 232.095 464.461,233.200 464.589,233.200 464.058 C 233.200 463.871,235.491 463.590,238.291 463.434 C 241.092 463.278,243.477 463.000,243.591 462.815 C 243.706 462.630,244.694 462.344,245.787 462.181 C 246.880 462.017,248.018 461.639,248.316 461.342 C 248.613 461.044,249.114 460.800,249.429 460.800 C 249.743 460.800,250.000 460.620,250.000 460.400 C 250.000 460.180,250.270 460.000,250.600 460.000 C 250.966 460.000,251.200 459.627,251.200 459.043 C 251.200 458.516,251.470 457.982,251.800 457.855 C 252.170 457.713,252.400 457.105,252.400 456.268 C 252.400 454.716,253.562 454.411,259.500 454.403 C 261.095 454.402,262.400 454.228,262.400 454.018 C 262.400 453.808,263.030 453.518,263.800 453.374 C 264.602 453.223,265.200 452.874,265.200 452.555 C 265.200 452.250,265.560 452.000,266.000 452.000 C 266.440 452.000,266.800 451.820,266.800 451.600 C 266.800 451.380,267.057 451.200,267.371 451.200 C 267.686 451.200,268.226 450.917,268.571 450.571 C 268.917 450.226,269.200 450.136,269.200 450.371 C 269.200 450.607,269.380 450.800,269.600 450.800 C 269.820 450.800,270.000 450.440,270.000 450.000 C 270.000 449.112,270.610 448.921,270.955 449.700 C 271.104 450.036,271.165 450.003,271.141 449.600 C 271.056 448.179,271.236 447.600,271.761 447.600 C 272.182 447.600,272.317 446.993,272.306 445.157 C 272.296 443.497,272.468 442.602,272.845 442.364 C 273.244 442.111,273.260 442.011,272.900 442.006 C 272.251 441.998,272.251 440.936,272.900 440.633 C 273.300 440.447,273.300 440.353,272.900 440.167 C 272.309 439.891,272.217 436.800,272.800 436.800 C 273.314 436.800,273.326 434.910,272.813 434.733 C 272.598 434.659,272.365 432.142,272.288 429.070 C 272.182 424.832,272.016 423.446,271.575 423.139 C 271.137 422.834,271.119 422.691,271.500 422.536 C 271.780 422.422,272.000 421.645,272.000 420.767 C 272.000 419.783,271.814 419.198,271.500 419.194 C 271.161 419.190,271.193 419.051,271.600 418.763 C 272.052 418.444,272.076 418.289,271.700 418.136 C 271.421 418.023,271.200 417.249,271.200 416.387 L 271.200 414.840 268.800 414.568 C 267.480 414.419,266.400 414.140,266.400 413.948 C 266.400 413.757,265.963 413.600,265.429 413.600 C 264.894 413.600,264.200 413.343,263.886 413.029 C 263.572 412.715,262.614 412.329,261.757 412.171 C 260.901 412.014,260.072 411.686,259.915 411.442 C 259.529 410.844,251.246 410.879,250.873 411.481 C 250.723 411.723,249.745 412.050,248.700 412.206 C 247.655 412.363,246.800 412.631,246.800 412.802 C 246.800 412.973,246.347 413.227,245.794 413.366 C 244.446 413.704,243.200 414.816,243.200 415.681 C 243.200 416.092,242.797 416.486,242.229 416.628 C 241.695 416.763,241.161 417.126,241.041 417.436 C 240.922 417.746,240.459 418.000,240.013 418.000 C 239.566 418.000,239.200 418.166,239.200 418.368 C 239.200 418.571,238.660 418.855,238.000 419.000 C 237.340 419.145,236.800 419.429,236.800 419.632 C 236.800 419.834,236.260 420.000,235.600 420.000 C 234.940 420.000,234.400 420.162,234.400 420.360 C 234.400 420.558,232.053 420.783,229.185 420.860 C 225.934 420.947,223.863 421.168,223.685 421.446 C 223.528 421.691,222.970 422.026,222.445 422.191 C 221.919 422.355,220.107 423.892,218.418 425.607 C 215.475 428.593,215.250 428.736,213.073 429.008 C 211.823 429.164,210.800 429.451,210.800 429.646 C 210.800 429.841,210.080 430.000,209.200 430.000 C 208.320 430.000,207.600 430.158,207.600 430.352 C 207.600 430.546,205.710 430.833,203.400 430.991 C 201.090 431.148,199.200 431.415,199.200 431.584 C 199.200 431.753,198.385 432.003,197.390 432.139 C 195.279 432.429,194.858 432.739,191.075 436.794 C 190.456 437.457,189.691 438.000,189.375 438.000 C 189.059 438.000,188.800 438.166,188.800 438.368 C 188.800 438.571,188.260 438.855,187.600 439.000 C 186.940 439.145,186.400 439.429,186.400 439.632 C 186.400 439.834,185.410 440.000,184.200 440.000 C 182.990 440.000,182.000 440.156,182.000 440.348 C 182.000 440.539,180.093 440.780,177.763 440.884 C 175.433 440.987,173.408 441.257,173.263 441.482 C 173.118 441.708,172.564 442.028,172.031 442.195 C 170.763 442.591,169.924 443.312,166.675 446.794 C 166.039 447.475,165.140 448.000,164.608 448.000 C 164.090 448.000,163.606 448.183,163.531 448.407 C 163.456 448.631,162.451 448.926,161.298 449.063 C 160.144 449.200,159.200 449.466,159.200 449.656 C 159.200 449.845,158.570 450.000,157.800 450.000 C 157.030 450.000,156.400 450.180,156.400 450.400 C 156.400 450.620,156.130 450.800,155.800 450.800 C 155.470 450.800,155.200 450.620,155.200 450.400 C 155.200 450.180,154.930 450.000,154.600 450.000 C 153.855 450.000,150.800 446.906,150.800 446.152 C 150.800 445.848,150.620 445.600,150.400 445.600 C 149.823 445.600,149.849 363.717,150.426 363.525 C 151.062 363.313,151.132 357.115,150.500 356.902 C 150.225 356.809,150.000 356.388,150.000 355.966 C 150.000 355.097,146.995 352.000,146.152 352.000 C 145.848 352.000,145.600 351.834,145.600 351.632 C 145.600 351.429,145.060 351.145,144.400 351.000 C 143.740 350.855,143.200 350.571,143.200 350.368 C 143.200 350.166,142.930 350.000,142.600 350.000 C 142.270 350.000,142.000 349.832,142.000 349.627 C 142.000 349.422,141.595 349.128,141.100 348.973 C 140.605 348.819,139.011 347.457,137.557 345.946 C 136.104 344.436,134.619 343.200,134.257 343.200 C 133.896 343.200,133.600 343.034,133.600 342.832 C 133.600 342.629,133.075 342.348,132.433 342.207 C 131.792 342.066,131.167 341.692,131.046 341.376 C 130.924 341.059,130.459 340.800,130.013 340.800 C 129.566 340.800,129.200 340.620,129.200 340.400 C 129.200 340.180,128.930 340.000,128.600 340.000 C 128.270 340.000,128.000 339.820,128.000 339.600 C 128.000 339.380,127.724 339.200,127.387 339.200 C 127.051 339.200,126.671 338.930,126.545 338.600 C 126.418 338.270,126.060 338.000,125.749 338.000 C 125.438 338.000,123.968 336.765,122.482 335.256 C 120.997 333.746,119.380 332.384,118.891 332.229 C 118.401 332.073,118.000 331.793,118.000 331.605 C 118.000 331.417,117.460 331.145,116.800 331.000 C 116.140 330.855,115.600 330.571,115.600 330.368 C 115.600 330.166,115.330 330.000,115.000 330.000 C 114.670 330.000,114.400 329.840,114.400 329.643 C 114.400 329.447,113.950 329.174,113.400 329.036 C 112.850 328.898,112.400 328.608,112.400 328.392 C 112.400 328.177,112.170 328.000,111.889 328.000 C 111.402 328.000,110.000 326.639,110.000 326.167 C 110.000 326.044,109.730 325.673,109.400 325.343 C 109.070 325.013,108.800 324.396,108.800 323.971 C 108.800 323.547,108.634 323.200,108.432 323.200 C 108.229 323.200,107.945 322.660,107.800 322.000 C 107.655 321.340,107.391 320.800,107.213 320.800 C 107.035 320.800,106.771 320.170,106.626 319.400 C 106.482 318.630,106.186 318.000,105.969 318.000 C 105.752 318.000,105.458 317.685,105.315 317.300 C 105.172 316.915,104.683 316.261,104.228 315.846 C 103.650 315.320,103.552 315.038,103.903 314.912 C 104.759 314.605,108.000 311.169,108.000 310.568 C 108.000 310.256,108.177 310.000,108.392 310.000 C 108.608 310.000,108.898 309.550,109.036 309.000 C 109.174 308.450,109.447 308.000,109.643 308.000 C 109.840 308.000,110.000 307.730,110.000 307.400 C 110.000 307.070,110.166 306.800,110.368 306.800 C 110.571 306.800,110.855 306.260,111.000 305.600 C 111.145 304.940,111.429 304.400,111.632 304.400 C 111.834 304.400,112.000 304.144,112.000 303.831 C 112.000 303.172,115.148 300.000,115.802 300.000 C 116.230 300.000,118.000 297.894,118.000 297.384 C 118.000 297.110,118.270 296.782,118.600 296.655 C 118.930 296.529,119.200 296.072,119.200 295.640 C 119.200 295.207,119.542 294.745,119.960 294.613 C 120.378 294.480,120.827 293.948,120.957 293.430 C 121.099 292.865,121.594 292.388,122.197 292.237 C 122.748 292.098,123.200 291.808,123.200 291.592 C 123.200 291.377,123.457 291.200,123.771 291.200 C 124.086 291.200,124.626 290.917,124.971 290.571 C 125.317 290.226,125.600 290.134,125.600 290.367 C 125.600 290.600,126.320 290.906,127.200 291.046 C 128.080 291.187,128.800 291.440,128.800 291.608 C 128.800 291.776,129.250 292.026,129.800 292.164 C 130.350 292.302,130.800 292.592,130.800 292.808 C 130.800 293.023,131.005 293.200,131.256 293.200 C 131.507 293.200,132.500 294.010,133.462 295.000 C 134.424 295.990,135.460 296.800,135.763 296.800 C 136.066 296.800,136.418 297.070,136.545 297.400 C 136.671 297.730,137.051 298.000,137.387 298.000 C 137.724 298.000,138.000 298.172,138.000 298.382 C 138.000 298.592,138.624 298.881,139.386 299.024 C 140.211 299.179,140.865 299.575,141.001 300.002 C 141.126 300.397,141.715 300.843,142.310 300.992 C 142.905 301.141,143.504 301.444,143.640 301.665 C 143.776 301.885,144.966 302.163,146.284 302.283 L 148.680 302.500 148.940 301.200 C 149.083 300.485,149.200 299.382,149.200 298.750 C 149.200 298.118,149.380 297.600,149.600 297.600 C 149.865 297.600,150.000 276.667,150.000 235.600 C 150.000 199.202,149.852 173.600,149.641 173.600 C 149.443 173.600,149.155 172.340,149.000 170.800 C 148.845 169.260,148.580 168.000,148.411 168.000 C 148.242 168.000,147.978 167.058,147.825 165.908 C 147.673 164.757,147.375 163.708,147.163 163.577 C 146.952 163.447,146.669 162.408,146.534 161.270 C 146.399 160.131,146.145 159.200,145.970 159.200 C 145.794 159.200,145.594 158.622,145.525 157.916 C 145.386 156.489,145.158 156.436,140.300 156.710 M37.720 187.336 C 38.052 188.201,37.294 189.146,36.837 188.436 C 36.449 187.834,36.679 186.800,37.200 186.800 C 37.373 186.800,37.607 187.041,37.720 187.336 \"\r\n                    stroke=\"none\"\r\n                    fill=\"#4cbbeb\"\r\n                    fill-rule=\"evenodd\"\r\n                  ></path>\r\n                  <path\r\n                    id=\"path2\"\r\n                    d=\"M356.100 9.098 C 358.465 9.169,362.335 9.169,364.700 9.098 C 367.065 9.028,365.130 8.970,360.400 8.970 C 355.670 8.970,353.735 9.028,356.100 9.098 M348.000 9.600 C 348.000 9.820,348.720 10.000,349.600 10.000 C 350.480 10.000,351.200 9.820,351.200 9.600 C 351.200 9.380,350.480 9.200,349.600 9.200 C 348.720 9.200,348.000 9.380,348.000 9.600 M369.200 9.600 C 369.200 9.820,369.920 10.000,370.800 10.000 C 371.680 10.000,372.400 9.820,372.400 9.600 C 372.400 9.380,371.680 9.200,370.800 9.200 C 369.920 9.200,369.200 9.380,369.200 9.600 M335.200 10.362 C 335.200 10.562,334.300 10.849,333.200 11.000 C 332.100 11.151,331.200 11.424,331.200 11.606 C 331.200 11.788,330.660 12.055,330.000 12.200 C 329.340 12.345,328.800 12.610,328.800 12.788 C 328.800 12.967,328.370 13.221,327.844 13.353 C 327.318 13.485,326.792 13.844,326.674 14.151 C 326.523 14.544,326.688 14.650,327.230 14.508 C 327.653 14.397,328.000 14.165,328.000 13.991 C 328.000 13.817,328.900 13.551,330.000 13.400 C 331.100 13.249,332.000 12.976,332.000 12.794 C 332.000 12.612,333.215 12.335,334.700 12.179 C 336.185 12.022,337.495 11.747,337.611 11.568 C 337.726 11.389,339.481 11.117,341.511 10.964 C 346.818 10.563,346.052 10.000,340.200 10.000 C 337.450 10.000,335.200 10.163,335.200 10.362 M375.600 10.343 C 375.600 10.531,377.260 10.811,379.289 10.964 C 381.319 11.117,383.074 11.389,383.189 11.568 C 383.305 11.747,384.615 12.022,386.100 12.179 C 387.585 12.335,388.800 12.606,388.800 12.781 C 388.800 12.955,389.560 13.219,390.488 13.368 C 391.416 13.516,392.271 13.785,392.388 13.965 C 392.505 14.145,393.017 14.422,393.526 14.581 C 394.431 14.864,394.436 14.852,393.737 14.035 C 393.344 13.576,392.792 13.200,392.511 13.200 C 392.230 13.200,392.000 13.028,392.000 12.818 C 392.000 12.608,391.370 12.318,390.600 12.174 C 389.830 12.029,389.200 11.762,389.200 11.580 C 389.200 11.398,388.390 11.128,387.400 10.979 C 386.410 10.831,385.600 10.550,385.600 10.355 C 385.600 10.160,383.350 10.000,380.600 10.000 C 377.850 10.000,375.600 10.154,375.600 10.343 M314.125 16.205 C 313.424 16.957,312.389 17.688,311.825 17.829 C 311.261 17.971,310.800 18.231,310.800 18.408 C 310.800 18.585,310.080 18.851,309.200 19.000 C 308.320 19.149,307.600 19.434,307.600 19.635 C 307.600 19.836,306.970 20.000,306.200 20.000 C 305.430 20.000,304.800 20.169,304.800 20.375 C 304.800 20.582,303.990 20.872,303.000 21.021 C 302.010 21.169,301.200 21.436,301.200 21.614 C 301.200 21.791,300.660 22.055,300.000 22.200 C 299.340 22.345,298.800 22.610,298.800 22.788 C 298.800 22.967,298.370 23.221,297.844 23.353 C 297.318 23.485,296.792 23.844,296.674 24.151 C 296.523 24.544,296.688 24.650,297.230 24.508 C 297.653 24.397,298.000 24.165,298.000 23.991 C 298.000 23.817,298.900 23.551,300.000 23.400 C 301.100 23.249,302.000 22.983,302.000 22.809 C 302.000 22.635,302.990 22.368,304.200 22.217 C 305.410 22.066,306.400 21.786,306.400 21.596 C 306.400 21.405,307.210 21.128,308.200 20.979 C 309.190 20.831,310.000 20.550,310.000 20.355 C 310.000 20.160,310.450 20.000,311.000 20.000 C 311.550 20.000,312.000 19.831,312.000 19.625 C 312.000 19.418,312.810 19.128,313.800 18.979 C 314.790 18.831,315.600 18.558,315.600 18.373 C 315.600 18.188,316.275 17.912,317.100 17.760 C 317.925 17.609,318.709 17.317,318.842 17.112 C 318.976 16.907,319.831 16.639,320.742 16.517 C 321.654 16.395,322.400 16.138,322.400 15.947 C 322.400 15.756,323.030 15.600,323.800 15.600 C 324.570 15.600,325.200 15.420,325.200 15.200 C 325.200 14.954,323.313 14.807,320.300 14.819 L 315.400 14.838 314.125 16.205 M280.468 29.825 C 277.755 32.561,275.667 34.800,275.828 34.800 C 275.988 34.800,276.731 34.170,277.479 33.400 C 278.227 32.630,279.100 32.000,279.419 32.000 C 279.739 32.000,280.000 31.823,280.000 31.608 C 280.000 31.392,280.450 31.102,281.000 30.964 C 281.550 30.826,282.000 30.553,282.000 30.357 C 282.000 30.160,282.270 30.000,282.600 30.000 C 282.930 30.000,283.200 29.834,283.200 29.632 C 283.200 29.429,283.740 29.145,284.400 29.000 C 285.060 28.855,285.600 28.591,285.600 28.414 C 285.600 28.236,286.410 27.969,287.400 27.821 C 288.390 27.672,289.200 27.399,289.200 27.213 C 289.200 27.027,290.100 26.751,291.200 26.600 C 292.300 26.449,293.200 26.162,293.200 25.962 C 293.200 25.763,293.650 25.600,294.200 25.600 C 294.750 25.600,295.200 25.420,295.200 25.200 C 295.200 24.954,293.317 24.810,290.300 24.825 L 285.400 24.851 280.468 29.825 M250.413 39.880 C 247.152 43.169,245.768 44.802,246.413 44.601 C 246.956 44.431,247.492 44.151,247.604 43.978 C 247.716 43.805,248.301 43.540,248.904 43.388 C 249.507 43.237,250.000 42.967,250.000 42.788 C 250.000 42.610,250.540 42.345,251.200 42.200 C 251.860 42.055,252.400 41.779,252.400 41.586 C 252.400 41.394,253.030 41.118,253.800 40.974 C 254.570 40.829,255.200 40.551,255.200 40.355 C 255.200 40.160,255.830 40.000,256.600 40.000 C 257.370 40.000,258.000 39.841,258.000 39.648 C 258.000 39.454,259.710 39.167,261.800 39.010 C 263.890 38.854,265.600 38.570,265.600 38.381 C 265.600 38.191,266.275 37.912,267.100 37.760 C 267.925 37.609,268.709 37.317,268.842 37.112 C 268.976 36.907,269.831 36.639,270.742 36.517 C 271.654 36.395,272.400 36.138,272.400 35.947 C 272.400 35.756,273.030 35.600,273.800 35.600 C 274.570 35.600,275.200 35.420,275.200 35.200 C 275.200 34.943,271.650 34.809,265.300 34.825 L 255.400 34.851 250.413 39.880 M230.468 49.825 C 227.755 52.561,225.667 54.800,225.828 54.800 C 225.988 54.800,226.731 54.170,227.479 53.400 C 228.227 52.630,229.100 52.000,229.419 52.000 C 229.739 52.000,230.000 51.823,230.000 51.608 C 230.000 51.392,230.450 51.102,231.000 50.964 C 231.550 50.826,232.000 50.553,232.000 50.357 C 232.000 50.160,232.270 50.000,232.600 50.000 C 232.930 50.000,233.200 49.834,233.200 49.632 C 233.200 49.429,233.740 49.145,234.400 49.000 C 235.060 48.855,235.600 48.594,235.600 48.419 C 235.600 48.245,236.320 47.987,237.200 47.846 C 238.080 47.706,238.800 47.426,238.800 47.224 C 238.800 47.022,239.790 46.734,241.000 46.583 C 242.210 46.432,243.200 46.149,243.200 45.954 C 243.200 45.759,243.650 45.600,244.200 45.600 C 244.750 45.600,245.200 45.420,245.200 45.200 C 245.200 44.954,243.317 44.810,240.300 44.825 L 235.400 44.851 230.468 49.825 M200.413 59.880 C 197.152 63.169,195.768 64.802,196.413 64.601 C 196.956 64.431,197.492 64.151,197.604 63.978 C 197.716 63.805,198.301 63.540,198.904 63.388 C 199.507 63.237,200.000 62.967,200.000 62.788 C 200.000 62.610,200.540 62.345,201.200 62.200 C 201.860 62.055,202.400 61.779,202.400 61.586 C 202.400 61.394,203.030 61.118,203.800 60.974 C 204.570 60.829,205.200 60.551,205.200 60.355 C 205.200 60.160,205.560 60.000,206.000 60.000 C 206.440 60.000,206.800 59.833,206.800 59.629 C 206.800 59.425,207.790 59.134,209.000 58.983 C 210.210 58.832,211.200 58.575,211.200 58.413 C 211.200 58.250,212.585 58.000,214.277 57.857 C 215.970 57.714,217.455 57.436,217.577 57.239 C 217.700 57.042,218.835 56.752,220.100 56.595 C 221.365 56.437,222.400 56.149,222.400 55.954 C 222.400 55.759,223.030 55.600,223.800 55.600 C 224.570 55.600,225.200 55.420,225.200 55.200 C 225.200 54.943,221.650 54.809,215.300 54.825 L 205.400 54.851 200.413 59.880 M180.468 69.825 C 177.755 72.561,175.667 74.800,175.828 74.800 C 175.988 74.800,176.731 74.170,177.479 73.400 C 178.227 72.630,179.100 72.000,179.419 72.000 C 179.739 72.000,180.000 71.823,180.000 71.608 C 180.000 71.392,180.450 71.102,181.000 70.964 C 181.550 70.826,182.000 70.553,182.000 70.357 C 182.000 70.160,182.270 70.000,182.600 70.000 C 182.930 70.000,183.200 69.834,183.200 69.632 C 183.200 69.429,183.740 69.145,184.400 69.000 C 185.060 68.855,185.600 68.594,185.600 68.419 C 185.600 68.245,186.320 67.987,187.200 67.846 C 188.080 67.706,188.800 67.426,188.800 67.224 C 188.800 67.022,189.790 66.734,191.000 66.583 C 192.210 66.432,193.200 66.149,193.200 65.954 C 193.200 65.759,193.650 65.600,194.200 65.600 C 194.750 65.600,195.200 65.420,195.200 65.200 C 195.200 64.954,193.317 64.810,190.300 64.825 L 185.400 64.851 180.468 69.825 M150.413 79.880 C 147.152 83.169,145.768 84.802,146.413 84.601 C 146.956 84.431,147.492 84.151,147.604 83.978 C 147.716 83.805,148.301 83.540,148.904 83.388 C 149.507 83.237,150.000 82.967,150.000 82.788 C 150.000 82.610,150.540 82.345,151.200 82.200 C 151.860 82.055,152.400 81.779,152.400 81.586 C 152.400 81.394,153.030 81.118,153.800 80.974 C 154.570 80.829,155.200 80.551,155.200 80.355 C 155.200 80.160,155.451 80.000,155.757 80.000 C 156.064 80.000,156.418 79.730,156.545 79.400 C 156.671 79.070,157.051 78.800,157.387 78.800 C 157.724 78.800,158.000 78.628,158.000 78.418 C 158.000 78.208,158.630 77.918,159.400 77.774 C 160.170 77.629,160.800 77.359,160.800 77.174 C 160.800 76.988,161.430 76.718,162.200 76.574 C 162.970 76.429,163.600 76.151,163.600 75.955 C 163.600 75.760,163.960 75.600,164.400 75.600 C 164.840 75.600,165.200 75.420,165.200 75.200 C 165.200 74.954,163.317 74.810,160.300 74.825 L 155.400 74.851 150.413 79.880 M125.300 94.990 L 115.200 105.129 115.246 110.065 C 115.272 112.779,115.375 114.685,115.476 114.300 C 115.576 113.915,115.811 113.600,115.998 113.600 C 116.184 113.600,116.455 113.060,116.600 112.400 C 116.745 111.740,117.015 111.200,117.200 111.200 C 117.385 111.200,117.655 110.660,117.800 110.000 C 117.945 109.340,118.215 108.800,118.400 108.800 C 118.585 108.800,118.855 108.260,119.000 107.600 C 119.145 106.940,119.429 106.400,119.632 106.400 C 119.834 106.400,120.000 106.134,120.000 105.808 C 120.000 105.483,121.035 104.224,122.300 103.010 C 123.565 101.797,124.756 100.644,124.947 100.449 C 132.246 93.001,135.404 90.000,135.940 90.000 C 136.146 90.000,136.418 89.730,136.545 89.400 C 136.671 89.070,137.051 88.800,137.387 88.800 C 137.724 88.800,138.000 88.628,138.000 88.418 C 138.000 88.208,138.630 87.918,139.400 87.774 C 140.170 87.629,140.800 87.359,140.800 87.174 C 140.800 86.988,141.430 86.718,142.200 86.574 C 142.970 86.429,143.600 86.151,143.600 85.955 C 143.600 85.760,143.960 85.600,144.400 85.600 C 144.840 85.600,145.200 85.420,145.200 85.200 C 145.200 84.954,143.317 84.810,140.300 84.826 L 135.400 84.851 125.300 94.990 M113.829 127.029 C 113.483 127.374,113.200 127.914,113.200 128.229 C 113.200 128.543,113.034 128.800,112.832 128.800 C 112.629 128.800,112.345 129.340,112.200 130.000 C 112.055 130.660,111.791 131.200,111.614 131.200 C 111.436 131.200,111.169 132.010,111.021 133.000 C 110.872 133.990,110.582 134.800,110.375 134.800 C 110.159 134.800,110.000 137.252,110.000 140.600 C 110.000 143.790,109.840 146.400,109.643 146.400 C 109.447 146.400,109.163 146.893,109.012 147.496 C 108.860 148.099,108.595 148.684,108.422 148.796 C 108.249 148.908,107.970 149.442,107.801 149.981 C 107.529 150.854,107.561 150.896,108.094 150.363 C 108.424 150.033,108.817 149.375,108.968 148.902 C 109.118 148.428,109.592 147.930,110.020 147.794 C 110.449 147.657,110.800 147.301,110.800 147.002 C 110.800 146.702,111.048 146.210,111.350 145.907 C 111.757 145.500,111.944 143.661,112.066 138.854 C 112.172 134.682,112.391 132.253,112.676 132.076 C 112.921 131.924,113.250 130.945,113.406 129.900 C 113.563 128.855,113.850 128.000,114.045 128.000 C 114.240 128.000,114.400 127.745,114.400 127.433 C 114.400 127.122,114.625 126.776,114.900 126.665 C 115.252 126.523,115.260 126.454,114.929 126.432 C 114.669 126.414,114.174 126.683,113.829 127.029 M94.125 156.205 C 93.424 156.957,92.389 157.688,91.825 157.829 C 91.261 157.971,90.800 158.231,90.800 158.408 C 90.800 158.585,90.080 158.851,89.200 159.000 C 88.320 159.149,87.600 159.434,87.600 159.635 C 87.600 159.836,87.060 160.000,86.400 160.000 C 85.740 160.000,85.200 160.163,85.200 160.362 C 85.200 160.562,84.300 160.849,83.200 161.000 C 82.100 161.151,81.200 161.424,81.200 161.606 C 81.200 161.788,80.660 162.055,80.000 162.200 C 79.340 162.345,78.800 162.610,78.800 162.788 C 78.800 162.967,78.370 163.221,77.844 163.353 C 77.318 163.485,76.792 163.844,76.674 164.151 C 76.523 164.544,76.688 164.650,77.230 164.508 C 77.653 164.397,78.000 164.165,78.000 163.991 C 78.000 163.817,78.900 163.551,80.000 163.400 C 81.100 163.249,82.000 162.983,82.000 162.809 C 82.000 162.635,82.990 162.368,84.200 162.217 C 85.410 162.066,86.400 161.786,86.400 161.596 C 86.400 161.405,87.210 161.128,88.200 160.979 C 89.190 160.831,90.000 160.550,90.000 160.355 C 90.000 160.160,90.450 160.000,91.000 160.000 C 91.550 160.000,92.000 159.831,92.000 159.625 C 92.000 159.418,92.810 159.128,93.800 158.979 C 94.790 158.831,95.600 158.573,95.600 158.406 C 95.600 158.239,96.320 157.987,97.200 157.846 C 98.080 157.706,98.800 157.426,98.800 157.224 C 98.800 157.022,99.790 156.734,101.000 156.583 C 102.210 156.432,103.200 156.149,103.200 155.954 C 103.200 155.759,103.650 155.600,104.200 155.600 C 104.750 155.600,105.200 155.420,105.200 155.200 C 105.200 154.954,103.313 154.807,100.300 154.819 L 95.400 154.838 94.125 156.205 M65.200 165.200 C 65.200 165.420,64.840 165.600,64.400 165.600 C 63.960 165.600,63.600 165.766,63.600 165.968 C 63.600 166.171,63.060 166.455,62.400 166.600 C 61.740 166.745,61.200 167.015,61.200 167.200 C 61.200 167.385,60.660 167.655,60.000 167.800 C 59.340 167.945,58.800 168.215,58.800 168.400 C 58.800 168.585,58.260 168.855,57.600 169.000 C 56.940 169.145,56.400 169.429,56.400 169.632 C 56.400 169.834,56.130 170.000,55.800 170.000 C 55.470 170.000,55.200 170.163,55.200 170.362 C 55.200 170.562,54.300 170.849,53.200 171.000 C 52.100 171.151,51.200 171.424,51.200 171.606 C 51.200 171.788,50.660 172.055,50.000 172.200 C 49.340 172.345,48.800 172.610,48.800 172.788 C 48.800 172.967,48.370 173.221,47.844 173.353 C 47.318 173.485,46.792 173.844,46.674 174.151 C 46.523 174.544,46.688 174.650,47.230 174.508 C 47.653 174.397,48.000 174.165,48.000 173.991 C 48.000 173.817,48.900 173.551,50.000 173.400 C 51.100 173.249,52.000 172.983,52.000 172.809 C 52.000 172.635,52.990 172.368,54.200 172.217 C 55.410 172.066,56.400 171.790,56.400 171.603 C 56.400 171.416,56.940 171.145,57.600 171.000 C 58.260 170.855,58.800 170.571,58.800 170.368 C 58.800 170.166,59.070 170.000,59.400 170.000 C 59.730 170.000,60.000 169.843,60.000 169.651 C 60.000 169.459,60.720 169.187,61.600 169.046 C 62.480 168.906,63.200 168.626,63.200 168.424 C 63.200 168.222,64.190 167.934,65.400 167.783 C 66.610 167.632,67.600 167.366,67.600 167.193 C 67.600 167.020,68.680 166.753,70.000 166.600 C 71.320 166.447,72.400 166.159,72.400 165.961 C 72.400 165.762,73.030 165.600,73.800 165.600 C 74.570 165.600,75.200 165.420,75.200 165.200 C 75.200 164.955,73.267 164.800,70.200 164.800 C 67.133 164.800,65.200 164.955,65.200 165.200 M30.468 179.825 C 27.755 182.561,25.667 184.800,25.828 184.800 C 25.988 184.800,26.731 184.170,27.479 183.400 C 28.227 182.630,29.100 182.000,29.419 182.000 C 29.739 182.000,30.000 181.823,30.000 181.608 C 30.000 181.392,30.450 181.102,31.000 180.964 C 31.550 180.826,32.000 180.553,32.000 180.357 C 32.000 180.160,32.270 180.000,32.600 180.000 C 32.930 180.000,33.200 179.834,33.200 179.632 C 33.200 179.429,33.740 179.145,34.400 179.000 C 35.060 178.855,35.600 178.594,35.600 178.419 C 35.600 178.245,36.320 177.987,37.200 177.846 C 38.080 177.706,38.800 177.426,38.800 177.224 C 38.800 177.022,39.790 176.734,41.000 176.583 C 42.210 176.432,43.200 176.149,43.200 175.954 C 43.200 175.759,43.650 175.600,44.200 175.600 C 44.750 175.600,45.200 175.420,45.200 175.200 C 45.200 174.954,43.317 174.810,40.300 174.825 L 35.400 174.851 30.468 179.825 M284.900 207.898 C 284.625 207.991,284.400 208.322,284.400 208.633 C 284.400 208.945,284.223 209.200,284.008 209.200 C 283.792 209.200,283.502 209.650,283.364 210.200 C 283.226 210.750,282.965 211.200,282.784 211.200 C 282.602 211.200,282.331 211.588,282.180 212.062 C 282.030 212.537,281.477 213.322,280.953 213.808 C 280.429 214.294,280.000 214.896,280.000 215.146 C 280.000 215.396,279.820 215.600,279.600 215.600 C 279.380 215.600,279.200 215.856,279.200 216.169 C 279.200 216.894,276.914 219.200,276.196 219.200 C 275.898 219.200,275.543 219.551,275.406 219.980 C 275.270 220.408,274.826 220.865,274.419 220.994 C 274.012 221.123,273.568 221.672,273.432 222.214 C 273.296 222.756,273.008 223.200,272.792 223.200 C 272.577 223.200,272.400 223.476,272.400 223.813 C 272.400 224.149,272.151 224.521,271.847 224.637 C 271.543 224.754,271.181 225.558,271.042 226.425 C 270.904 227.291,270.613 228.000,270.395 228.000 C 270.178 228.000,270.000 228.188,270.000 228.417 C 270.000 228.646,269.817 229.051,269.594 229.317 C 267.945 231.278,267.206 231.944,266.393 232.202 C 265.881 232.365,265.268 232.659,265.031 232.855 C 263.078 234.475,262.453 235.247,262.213 236.339 C 262.061 237.033,261.785 237.600,261.600 237.600 C 261.415 237.600,261.153 238.105,261.017 238.722 C 260.881 239.340,260.417 240.099,259.985 240.411 C 259.553 240.722,259.200 241.138,259.200 241.335 C 259.200 241.853,256.178 244.800,255.647 244.800 C 255.401 244.800,255.200 245.148,255.200 245.573 C 255.200 245.998,254.853 246.456,254.428 246.591 C 253.995 246.729,253.542 247.355,253.396 248.018 C 253.253 248.668,252.974 249.200,252.776 249.200 C 252.578 249.200,252.302 249.650,252.164 250.200 C 252.026 250.750,251.772 251.200,251.600 251.200 C 251.428 251.200,251.174 251.650,251.036 252.200 C 250.898 252.750,250.608 253.200,250.392 253.200 C 250.177 253.200,250.000 253.470,250.000 253.800 C 250.000 254.130,249.840 254.400,249.643 254.400 C 249.447 254.400,249.168 254.874,249.023 255.452 C 248.745 256.558,245.573 260.000,244.832 260.000 C 244.594 260.000,244.400 260.194,244.400 260.431 C 244.400 260.668,243.860 261.402,243.200 262.062 C 242.540 262.722,242.000 263.518,242.000 263.831 C 242.000 264.144,241.822 264.400,241.605 264.400 C 241.387 264.400,241.095 265.115,240.955 265.989 C 240.786 267.047,240.451 267.657,239.951 267.816 C 239.538 267.947,239.200 268.297,239.200 268.593 C 239.200 269.279,236.312 272.400,235.677 272.400 C 235.415 272.400,235.200 272.568,235.200 272.773 C 235.200 272.978,234.840 273.260,234.400 273.400 C 233.960 273.540,233.600 273.899,233.600 274.198 C 233.600 274.498,233.358 274.985,233.061 275.281 C 232.765 275.578,232.397 276.491,232.243 277.310 C 232.090 278.130,231.811 278.800,231.625 278.800 C 231.439 278.800,231.174 279.250,231.036 279.800 C 230.898 280.350,230.608 280.800,230.392 280.800 C 230.177 280.800,230.000 281.070,230.000 281.400 C 230.000 281.730,229.820 282.000,229.600 282.000 C 229.380 282.000,229.200 282.207,229.200 282.460 C 229.200 282.712,228.566 283.567,227.791 284.360 C 225.458 286.746,225.200 287.052,225.200 287.439 C 225.200 287.643,224.750 288.148,224.200 288.561 C 223.650 288.974,223.200 289.628,223.200 290.013 C 223.200 290.399,222.930 290.818,222.600 290.945 C 222.270 291.071,222.000 291.451,222.000 291.787 C 222.000 292.124,221.834 292.400,221.632 292.400 C 221.429 292.400,221.145 292.940,221.000 293.600 C 220.855 294.260,220.571 294.800,220.368 294.800 C 220.166 294.800,220.000 295.141,220.000 295.557 C 220.000 295.974,219.730 296.418,219.400 296.545 C 219.070 296.671,218.800 296.974,218.800 297.218 C 218.800 297.462,218.260 298.202,217.600 298.862 C 216.940 299.522,216.400 300.228,216.400 300.431 C 216.400 300.634,216.158 300.800,215.862 300.800 C 215.150 300.800,213.200 302.494,213.200 303.113 C 213.200 303.381,213.023 303.600,212.808 303.600 C 212.592 303.600,212.302 304.050,212.164 304.600 C 212.026 305.150,211.776 305.600,211.608 305.600 C 211.440 305.600,211.189 306.308,211.051 307.173 C 210.877 308.260,210.552 308.825,210.000 309.000 C 209.560 309.140,209.200 309.539,209.200 309.887 C 209.200 310.594,206.981 312.895,205.900 313.308 C 205.515 313.455,205.200 313.748,205.200 313.960 C 205.200 314.173,204.859 314.454,204.442 314.587 C 203.972 314.736,203.585 315.355,203.424 316.214 C 203.281 316.976,203.006 317.600,202.814 317.600 C 202.621 317.600,202.345 318.140,202.200 318.800 C 202.055 319.460,201.785 320.000,201.600 320.000 C 201.415 320.000,201.153 320.505,201.017 321.122 C 200.881 321.740,200.417 322.499,199.985 322.811 C 199.553 323.122,199.200 323.613,199.200 323.901 C 199.200 324.189,198.930 324.529,198.600 324.655 C 198.270 324.782,198.000 325.163,198.000 325.502 C 198.000 326.277,195.632 328.609,194.471 328.978 C 193.992 329.130,193.600 329.422,193.600 329.627 C 193.600 329.832,193.330 330.000,193.000 330.000 C 192.670 330.000,192.400 330.178,192.400 330.395 C 192.400 330.613,191.680 330.906,190.800 331.046 C 189.920 331.187,189.200 331.451,189.200 331.633 C 189.200 331.815,188.570 332.082,187.800 332.226 C 187.030 332.371,186.400 332.649,186.400 332.845 C 186.400 333.040,185.950 333.200,185.400 333.200 C 184.850 333.200,184.400 333.043,184.400 332.851 C 184.400 332.659,183.680 332.387,182.800 332.246 C 181.920 332.106,181.200 331.832,181.200 331.639 C 181.200 331.445,180.750 331.174,180.200 331.036 C 179.650 330.898,179.200 330.608,179.200 330.392 C 179.200 330.177,178.930 330.000,178.600 330.000 C 178.270 330.000,178.000 329.820,178.000 329.600 C 178.000 329.380,177.724 329.200,177.387 329.200 C 177.051 329.200,176.671 328.930,176.545 328.600 C 176.418 328.270,176.056 328.000,175.740 328.000 C 175.424 328.000,174.115 326.920,172.832 325.600 C 171.548 324.280,170.225 323.200,169.892 323.200 C 169.558 323.200,169.182 322.930,169.055 322.600 C 168.929 322.270,168.549 322.000,168.213 322.000 C 167.876 322.000,167.600 321.834,167.600 321.632 C 167.600 321.429,167.060 321.145,166.400 321.000 C 165.740 320.855,165.200 320.571,165.200 320.368 C 165.200 320.166,164.859 320.000,164.443 320.000 C 164.026 320.000,163.582 319.730,163.455 319.400 C 163.329 319.070,163.026 318.800,162.782 318.800 C 162.317 318.800,160.000 316.644,160.000 316.211 C 160.000 315.759,157.331 313.200,156.860 313.200 C 156.607 313.200,156.400 313.023,156.400 312.808 C 156.400 312.592,155.950 312.302,155.400 312.164 C 154.850 312.026,154.400 311.772,154.400 311.600 C 154.400 311.428,153.950 311.174,153.400 311.036 C 152.850 310.898,152.400 310.622,152.400 310.423 C 152.400 310.224,151.860 309.522,151.200 308.862 C 150.540 308.202,150.000 307.483,150.000 307.264 C 150.000 307.046,149.816 306.805,149.591 306.730 C 149.365 306.655,149.065 305.877,148.923 305.000 C 148.587 302.934,148.197 302.591,145.818 302.264 C 144.732 302.116,143.742 301.829,143.618 301.629 C 143.494 301.428,142.905 301.141,142.310 300.992 C 141.715 300.843,141.126 300.397,141.001 300.002 C 140.865 299.575,140.211 299.179,139.386 299.024 C 138.624 298.881,138.000 298.592,138.000 298.382 C 138.000 298.172,137.724 298.000,137.387 298.000 C 137.051 298.000,136.671 297.730,136.545 297.400 C 136.418 297.070,136.066 296.800,135.763 296.800 C 135.460 296.800,134.424 295.990,133.462 295.000 C 132.500 294.010,131.507 293.200,131.256 293.200 C 131.005 293.200,130.800 293.023,130.800 292.808 C 130.800 292.592,130.350 292.302,129.800 292.164 C 129.250 292.026,128.800 291.776,128.800 291.608 C 128.800 291.440,128.080 291.187,127.200 291.046 C 126.320 290.906,125.600 290.600,125.600 290.367 C 125.600 290.134,125.317 290.226,124.971 290.571 C 124.626 290.917,124.086 291.200,123.771 291.200 C 123.457 291.200,123.200 291.377,123.200 291.592 C 123.200 291.808,122.748 292.098,122.197 292.237 C 121.594 292.388,121.099 292.865,120.957 293.430 C 120.827 293.948,120.378 294.480,119.960 294.613 C 119.542 294.745,119.200 295.207,119.200 295.640 C 119.200 296.072,118.930 296.529,118.600 296.655 C 118.270 296.782,118.000 297.110,118.000 297.384 C 118.000 297.894,116.230 300.000,115.802 300.000 C 115.148 300.000,112.000 303.172,112.000 303.831 C 112.000 304.144,111.834 304.400,111.632 304.400 C 111.429 304.400,111.145 304.940,111.000 305.600 C 110.855 306.260,110.571 306.800,110.368 306.800 C 110.166 306.800,110.000 307.070,110.000 307.400 C 110.000 307.730,109.840 308.000,109.643 308.000 C 109.447 308.000,109.174 308.450,109.036 309.000 C 108.898 309.550,108.608 310.000,108.392 310.000 C 108.177 310.000,108.000 310.256,108.000 310.568 C 108.000 311.169,104.759 314.605,103.903 314.912 C 103.560 315.035,103.686 315.347,104.300 315.893 C 104.795 316.333,105.200 316.903,105.200 317.159 C 105.200 317.416,105.465 317.727,105.789 317.851 C 106.113 317.976,106.493 318.690,106.634 319.439 C 106.774 320.187,107.035 320.800,107.213 320.800 C 107.391 320.800,107.655 321.340,107.800 322.000 C 107.945 322.660,108.229 323.200,108.432 323.200 C 108.634 323.200,108.800 323.547,108.800 323.971 C 108.800 324.396,109.070 325.013,109.400 325.343 C 109.730 325.673,110.000 326.044,110.000 326.167 C 110.000 326.639,111.402 328.000,111.889 328.000 C 112.170 328.000,112.400 328.177,112.400 328.392 C 112.400 328.608,112.850 328.898,113.400 329.036 C 113.950 329.174,114.400 329.447,114.400 329.643 C 114.400 329.840,114.670 330.000,115.000 330.000 C 115.330 330.000,115.600 330.166,115.600 330.368 C 115.600 330.571,116.140 330.855,116.800 331.000 C 117.460 331.145,118.000 331.417,118.000 331.605 C 118.000 331.793,118.401 332.073,118.891 332.229 C 119.380 332.384,120.997 333.746,122.482 335.256 C 123.968 336.765,125.438 338.000,125.749 338.000 C 126.060 338.000,126.418 338.270,126.545 338.600 C 126.671 338.930,127.051 339.200,127.387 339.200 C 127.724 339.200,128.000 339.380,128.000 339.600 C 128.000 339.820,128.270 340.000,128.600 340.000 C 128.930 340.000,129.200 340.180,129.200 340.400 C 129.200 340.620,129.566 340.800,130.013 340.800 C 130.459 340.800,130.924 341.059,131.046 341.376 C 131.167 341.692,131.792 342.066,132.433 342.207 C 133.075 342.348,133.600 342.629,133.600 342.832 C 133.600 343.034,133.896 343.200,134.257 343.200 C 134.619 343.200,136.104 344.436,137.557 345.946 C 139.011 347.457,140.605 348.819,141.100 348.973 C 141.595 349.128,142.000 349.422,142.000 349.627 C 142.000 349.832,142.270 350.000,142.600 350.000 C 142.930 350.000,143.200 350.166,143.200 350.368 C 143.200 350.571,143.740 350.855,144.400 351.000 C 145.060 351.145,145.600 351.429,145.600 351.632 C 145.600 351.834,145.848 352.000,146.152 352.000 C 147.012 352.000,150.000 355.106,150.000 356.000 C 150.000 356.440,150.160 356.800,150.357 356.800 C 150.553 356.800,150.826 357.250,150.964 357.800 C 151.210 358.781,152.204 359.182,152.467 358.406 C 152.652 357.860,156.410 357.768,156.739 358.302 C 156.887 358.541,157.501 358.860,158.104 359.012 C 158.707 359.163,159.200 359.447,159.200 359.643 C 159.200 359.840,159.560 360.000,160.000 360.000 C 160.440 360.000,160.800 360.180,160.800 360.400 C 160.800 360.620,161.033 360.800,161.319 360.800 C 161.604 360.800,162.279 361.332,162.819 361.983 C 163.358 362.634,164.115 363.174,164.500 363.183 C 164.885 363.192,165.200 363.470,165.200 363.800 C 165.200 364.130,165.470 364.400,165.800 364.400 C 166.130 364.400,166.400 364.670,166.400 365.000 C 166.400 365.330,166.589 365.600,166.819 365.600 C 167.050 365.600,167.635 366.025,168.119 366.544 C 168.604 367.064,169.405 367.616,169.900 367.771 C 170.395 367.927,170.800 368.207,170.800 368.395 C 170.800 368.583,171.340 368.855,172.000 369.000 C 172.660 369.145,173.200 369.429,173.200 369.632 C 173.200 369.834,173.470 370.000,173.800 370.000 C 174.130 370.000,174.400 370.160,174.400 370.357 C 174.400 370.553,174.874 370.832,175.452 370.977 C 176.031 371.123,177.336 372.044,178.352 373.025 C 180.613 375.207,180.618 375.212,182.078 376.752 C 182.729 377.439,183.441 378.000,183.659 378.000 C 183.878 378.000,184.327 378.270,184.657 378.600 C 184.987 378.930,185.604 379.200,186.029 379.200 C 186.453 379.200,186.800 379.380,186.800 379.600 C 186.800 379.820,187.070 380.000,187.400 380.000 C 187.730 380.000,188.000 380.180,188.000 380.400 C 188.000 380.620,188.242 380.800,188.539 380.800 C 188.835 380.800,189.493 381.160,190.000 381.600 C 190.507 382.040,191.153 382.400,191.434 382.400 C 191.716 382.400,192.067 382.782,192.215 383.248 C 192.636 384.573,195.128 386.802,195.871 386.518 C 196.223 386.382,197.472 385.311,198.647 384.136 C 199.821 382.961,201.037 382.000,201.349 382.000 C 201.660 382.000,202.018 381.730,202.145 381.400 C 202.271 381.070,202.651 380.800,202.987 380.800 C 203.324 380.800,203.600 380.620,203.600 380.400 C 203.600 380.180,203.870 380.000,204.200 380.000 C 204.945 380.000,208.000 376.906,208.000 376.152 C 208.000 375.848,208.166 375.600,208.368 375.600 C 208.571 375.600,208.855 375.060,209.000 374.400 C 209.145 373.740,209.429 373.200,209.632 373.200 C 209.834 373.200,210.000 372.930,210.000 372.600 C 210.000 372.270,210.180 372.000,210.400 372.000 C 210.620 372.000,210.800 371.758,210.800 371.461 C 210.800 371.165,211.160 370.507,211.600 370.000 C 212.040 369.493,212.400 368.847,212.400 368.566 C 212.400 368.284,212.805 367.927,213.300 367.771 C 214.400 367.426,216.800 364.958,216.800 364.172 C 216.800 363.857,216.966 363.600,217.168 363.600 C 217.371 363.600,217.655 363.060,217.800 362.400 C 217.945 361.740,218.210 361.200,218.388 361.200 C 218.567 361.200,218.826 360.750,218.964 360.200 C 219.102 359.650,219.392 359.200,219.608 359.200 C 219.823 359.200,220.000 358.930,220.000 358.600 C 220.000 358.270,220.166 358.000,220.368 358.000 C 220.571 358.000,220.855 357.460,221.000 356.800 C 221.145 356.140,221.417 355.600,221.605 355.600 C 221.793 355.600,222.069 355.212,222.220 354.738 C 222.506 353.836,224.272 352.000,224.854 352.000 C 225.490 352.000,226.800 350.622,226.800 349.954 C 226.800 349.586,227.070 349.182,227.400 349.055 C 227.730 348.929,228.000 348.549,228.000 348.213 C 228.000 347.876,228.177 347.600,228.392 347.600 C 228.608 347.600,228.898 347.150,229.036 346.600 C 229.174 346.050,229.447 345.600,229.643 345.600 C 229.840 345.600,230.000 345.330,230.000 345.000 C 230.000 344.670,230.160 344.400,230.357 344.400 C 230.553 344.400,230.832 343.927,230.977 343.349 C 231.122 342.771,231.772 341.767,232.420 341.118 C 233.069 340.469,233.600 339.784,233.600 339.596 C 233.600 339.408,233.998 339.128,234.485 338.973 C 235.728 338.578,237.510 336.699,237.823 335.451 C 237.968 334.873,238.233 334.400,238.412 334.400 C 238.590 334.400,238.855 333.860,239.000 333.200 C 239.145 332.540,239.429 332.000,239.632 332.000 C 239.834 332.000,240.000 331.730,240.000 331.400 C 240.000 331.070,240.180 330.800,240.400 330.800 C 240.620 330.800,240.800 330.434,240.800 329.987 C 240.800 329.541,241.070 329.071,241.400 328.945 C 241.730 328.818,242.000 328.471,242.000 328.174 C 242.000 327.877,243.080 326.567,244.400 325.264 C 245.720 323.960,246.800 322.692,246.800 322.447 C 246.800 322.201,246.977 322.000,247.192 322.000 C 247.408 322.000,247.698 321.550,247.836 321.000 C 247.974 320.450,248.228 320.000,248.400 320.000 C 248.572 320.000,248.826 319.550,248.964 319.000 C 249.102 318.450,249.392 318.000,249.608 318.000 C 249.823 318.000,250.000 317.730,250.000 317.400 C 250.000 317.070,250.166 316.800,250.368 316.800 C 250.571 316.800,250.855 316.260,251.000 315.600 C 251.145 314.940,251.429 314.400,251.632 314.400 C 251.834 314.400,252.000 314.144,252.000 313.831 C 252.000 313.186,254.251 310.800,254.859 310.800 C 255.442 310.800,256.254 309.891,256.574 308.881 C 256.728 308.397,257.007 308.000,257.195 308.000 C 257.383 308.000,257.655 307.460,257.800 306.800 C 257.945 306.140,258.206 305.600,258.381 305.600 C 258.555 305.600,258.813 304.880,258.954 304.000 C 259.094 303.120,259.387 302.400,259.605 302.400 C 259.822 302.400,260.000 302.130,260.000 301.800 C 260.000 301.470,260.180 301.200,260.400 301.200 C 260.620 301.200,260.800 300.952,260.800 300.648 C 260.800 299.944,263.832 296.800,264.511 296.800 C 265.326 296.800,266.445 295.235,266.684 293.758 C 266.805 293.011,267.047 292.400,267.221 292.400 C 267.394 292.400,267.655 291.860,267.800 291.200 C 267.945 290.540,268.210 290.000,268.388 290.000 C 268.567 290.000,268.826 289.550,268.964 289.000 C 269.102 288.450,269.392 288.000,269.608 288.000 C 269.823 288.000,270.000 287.730,270.000 287.400 C 270.000 287.070,270.160 286.800,270.357 286.800 C 270.553 286.800,270.826 286.350,270.964 285.800 C 271.102 285.250,271.392 284.800,271.608 284.800 C 271.823 284.800,272.003 284.575,272.007 284.300 C 272.015 283.690,273.742 282.000,274.356 282.000 C 274.964 282.000,276.400 280.517,276.400 279.889 C 276.400 279.608,276.760 279.070,277.200 278.693 C 277.640 278.316,278.000 277.736,278.000 277.404 C 278.000 277.072,278.166 276.800,278.368 276.800 C 278.571 276.800,278.855 276.260,279.000 275.600 C 279.145 274.940,279.429 274.400,279.632 274.400 C 279.834 274.400,280.000 274.130,280.000 273.800 C 280.000 273.470,280.180 273.200,280.400 273.200 C 280.620 273.200,280.800 272.960,280.800 272.667 C 280.800 272.000,283.717 268.800,284.325 268.800 C 285.235 268.800,287.499 266.061,287.766 264.638 C 287.915 263.847,288.185 263.200,288.367 263.200 C 288.549 263.200,288.806 262.523,288.938 261.696 C 289.072 260.858,289.538 259.933,289.989 259.608 C 290.435 259.286,290.800 258.863,290.800 258.668 C 290.800 258.229,292.487 256.416,292.904 256.407 C 293.400 256.396,295.600 254.152,295.600 253.657 C 295.600 253.406,295.760 253.200,295.957 253.200 C 296.153 253.200,296.426 252.750,296.564 252.200 C 296.702 251.650,296.978 251.200,297.176 251.200 C 297.374 251.200,297.655 250.660,297.800 250.000 C 297.945 249.340,298.210 248.800,298.388 248.800 C 298.567 248.800,298.835 248.316,298.983 247.724 C 299.132 247.132,299.576 246.367,299.970 246.024 C 300.363 245.681,300.824 244.963,300.992 244.429 C 301.291 243.482,303.620 240.800,304.144 240.800 C 304.604 240.800,306.800 238.532,306.800 238.057 C 306.800 237.806,306.977 237.600,307.192 237.600 C 307.408 237.600,307.698 237.150,307.836 236.600 C 307.974 236.050,308.234 235.600,308.415 235.600 C 308.595 235.600,308.866 234.610,309.017 233.400 C 309.168 232.190,309.451 231.200,309.646 231.200 C 309.841 231.200,310.000 230.930,310.000 230.600 C 310.000 230.270,310.157 230.000,310.349 230.000 C 310.541 230.000,310.810 229.300,310.947 228.444 C 311.083 227.588,311.467 226.783,311.798 226.656 C 313.042 226.179,311.530 223.200,310.043 223.200 C 309.799 223.200,308.900 222.480,308.046 221.600 C 307.192 220.720,306.369 220.000,306.216 220.000 C 306.063 220.000,305.398 219.460,304.738 218.800 C 304.078 218.140,303.282 217.600,302.969 217.600 C 302.656 217.600,302.400 217.343,302.400 217.028 C 302.400 216.242,300.000 213.774,298.900 213.429 C 298.405 213.273,298.000 212.993,298.000 212.805 C 298.000 212.617,297.460 212.345,296.800 212.200 C 296.140 212.055,295.600 211.784,295.600 211.597 C 295.600 211.410,294.610 211.134,293.400 210.983 C 292.190 210.832,291.200 210.549,291.200 210.354 C 291.200 210.159,290.750 210.000,290.200 210.000 C 289.650 210.000,289.200 209.834,289.200 209.632 C 289.200 209.429,288.660 209.145,288.000 209.000 C 287.340 208.855,286.800 208.592,286.800 208.415 C 286.800 208.011,285.565 207.675,284.900 207.898 M383.877 421.380 C 383.558 421.699,382.825 422.079,382.248 422.224 C 381.672 422.368,381.200 422.633,381.200 422.812 C 381.200 422.990,380.660 423.255,380.000 423.400 C 379.340 423.545,378.800 423.806,378.800 423.981 C 378.800 424.155,378.080 424.413,377.200 424.554 C 373.969 425.070,375.605 425.600,380.431 425.600 C 385.739 425.600,387.142 426.235,387.823 428.949 C 387.968 429.527,388.245 430.000,388.439 430.000 C 388.632 430.000,388.906 430.720,389.046 431.600 C 389.345 433.470,390.000 433.745,390.000 432.000 C 390.000 431.340,389.841 430.800,389.647 430.800 C 389.453 430.800,389.167 429.450,389.013 427.800 C 388.858 426.150,388.567 424.800,388.366 424.800 C 388.165 424.800,388.000 424.524,388.000 424.187 C 388.000 423.851,387.730 423.471,387.400 423.345 C 387.070 423.218,386.800 422.877,386.800 422.586 C 386.800 421.159,384.887 420.370,383.877 421.380 M374.400 425.968 C 374.400 426.171,373.860 426.455,373.200 426.600 C 372.540 426.745,372.000 427.021,372.000 427.214 C 372.000 427.406,371.370 427.682,370.600 427.826 C 369.830 427.971,369.200 428.235,369.200 428.413 C 369.200 428.591,368.660 428.855,368.000 429.000 C 367.340 429.145,366.800 429.429,366.800 429.632 C 366.800 429.834,366.530 430.000,366.200 430.000 C 365.870 430.000,365.600 430.160,365.600 430.357 C 365.600 430.553,365.150 430.826,364.600 430.964 C 364.050 431.102,363.600 431.378,363.600 431.576 C 363.600 431.774,363.060 432.055,362.400 432.200 C 361.740 432.345,361.200 432.615,361.200 432.800 C 361.200 432.985,360.660 433.255,360.000 433.400 C 359.340 433.545,358.800 433.806,358.800 433.981 C 358.800 434.155,358.080 434.413,357.200 434.554 C 353.969 435.070,355.605 435.600,360.432 435.600 L 365.264 435.600 367.680 433.248 C 370.629 430.377,370.491 430.515,372.679 428.248 C 373.661 427.232,374.629 426.400,374.832 426.400 C 375.034 426.400,375.200 426.220,375.200 426.000 C 375.200 425.780,375.020 425.600,374.800 425.600 C 374.580 425.600,374.400 425.766,374.400 425.968 M343.146 437.172 C 342.347 438.022,341.312 438.838,340.846 438.985 C 340.381 439.133,340.000 439.422,340.000 439.627 C 340.000 439.832,339.730 440.000,339.400 440.000 C 339.070 440.000,338.800 440.166,338.800 440.368 C 338.800 440.571,338.260 440.855,337.600 441.000 C 336.940 441.145,336.400 441.427,336.400 441.627 C 336.400 441.827,335.680 442.106,334.800 442.246 C 333.920 442.387,333.200 442.657,333.200 442.846 C 333.200 443.036,332.480 443.306,331.600 443.446 C 330.720 443.587,330.000 443.839,330.000 444.005 C 330.000 444.172,329.010 444.432,327.800 444.583 C 323.986 445.059,325.385 445.600,330.432 445.600 L 335.264 445.600 337.680 443.248 C 340.629 440.377,340.491 440.515,342.679 438.248 C 343.661 437.232,344.629 436.400,344.832 436.400 C 345.034 436.400,345.200 436.220,345.200 436.000 C 345.200 435.275,344.620 435.606,343.146 437.172 M324.400 445.968 C 324.400 446.171,323.860 446.455,323.200 446.600 C 322.540 446.745,322.000 447.021,322.000 447.214 C 322.000 447.406,321.370 447.682,320.600 447.826 C 319.830 447.971,319.200 448.235,319.200 448.413 C 319.200 448.591,318.660 448.855,318.000 449.000 C 317.340 449.145,316.800 449.429,316.800 449.632 C 316.800 449.834,316.530 450.000,316.200 450.000 C 315.870 450.000,315.600 450.180,315.600 450.400 C 315.600 450.620,315.328 450.800,314.996 450.800 C 314.664 450.800,314.084 451.160,313.707 451.600 C 313.330 452.040,312.792 452.400,312.511 452.400 C 312.230 452.400,312.000 452.572,312.000 452.782 C 312.000 452.992,311.370 453.282,310.600 453.426 C 309.830 453.571,309.200 453.833,309.200 454.009 C 309.200 454.186,308.445 454.457,307.523 454.613 C 305.338 454.982,304.896 455.482,304.569 457.951 C 304.419 459.078,304.163 460.000,304.000 460.000 C 303.836 460.000,303.590 460.705,303.452 461.566 C 303.314 462.428,303.003 463.199,302.762 463.279 C 302.520 463.360,302.225 464.635,302.106 466.113 C 301.988 467.591,301.756 468.800,301.593 468.800 C 301.429 468.800,301.167 470.330,301.011 472.200 C 300.856 474.070,300.564 475.600,300.364 475.600 C 300.164 475.600,300.000 475.870,300.000 476.200 C 300.000 476.530,299.834 476.800,299.632 476.800 C 299.429 476.800,299.145 477.340,299.000 478.000 C 298.855 478.660,298.591 479.200,298.413 479.200 C 298.235 479.200,297.971 479.830,297.826 480.600 C 297.682 481.370,297.406 482.000,297.214 482.000 C 297.021 482.000,296.745 482.540,296.600 483.200 C 296.455 483.860,296.141 484.400,295.902 484.400 C 295.662 484.400,295.584 484.517,295.727 484.661 C 295.947 484.880,296.919 484.032,300.439 480.548 C 300.690 480.299,301.954 479.009,303.248 477.680 L 305.600 475.264 305.600 465.432 L 305.600 455.600 310.432 455.600 L 315.264 455.600 317.680 453.248 C 320.629 450.377,320.491 450.515,322.679 448.248 C 323.661 447.232,324.629 446.400,324.832 446.400 C 325.034 446.400,325.200 446.220,325.200 446.000 C 325.200 445.780,325.020 445.600,324.800 445.600 C 324.580 445.600,324.400 445.766,324.400 445.968 M390.000 455.600 C 390.000 461.146,390.158 465.600,390.355 465.600 C 390.550 465.600,390.831 466.410,390.979 467.400 C 391.128 468.390,391.398 469.200,391.580 469.200 C 391.762 469.200,392.029 469.830,392.174 470.600 C 392.318 471.370,392.608 472.000,392.818 472.000 C 393.028 472.000,393.200 472.230,393.200 472.511 C 393.200 473.174,394.796 474.544,395.138 474.174 C 395.282 474.018,395.175 473.810,394.900 473.712 C 394.625 473.614,394.400 473.278,394.400 472.967 C 394.400 472.655,394.236 472.400,394.035 472.400 C 393.834 472.400,393.542 471.635,393.386 470.700 C 393.230 469.765,392.900 468.872,392.654 468.716 C 392.358 468.529,392.156 465.879,392.059 460.916 C 391.978 456.782,391.761 453.305,391.577 453.189 C 391.393 453.074,391.117 451.319,390.964 449.289 C 390.453 442.522,390.000 445.487,390.000 455.600 M294.900 486.198 C 294.625 486.511,294.400 486.954,294.400 487.183 C 294.400 487.412,294.220 487.600,294.000 487.600 C 293.780 487.600,293.600 487.810,293.600 488.066 C 293.600 488.547,293.329 488.877,291.103 491.103 C 288.877 493.329,288.547 493.600,288.066 493.600 C 287.810 493.600,287.600 493.760,287.600 493.957 C 287.600 494.153,287.162 494.423,286.627 494.558 C 286.091 494.692,285.539 495.161,285.400 495.601 C 285.260 496.040,284.978 496.400,284.773 496.400 C 284.568 496.400,284.400 496.670,284.400 497.000 C 284.400 497.330,284.220 497.600,284.000 497.600 C 283.780 497.600,283.600 497.810,283.600 498.066 C 283.600 498.547,283.329 498.877,281.103 501.103 C 278.877 503.329,278.547 503.600,278.066 503.600 C 277.810 503.600,277.600 503.760,277.600 503.957 C 277.600 504.153,277.150 504.426,276.600 504.564 C 274.192 505.169,275.858 505.600,280.600 505.600 L 285.600 505.600 285.600 500.600 L 285.600 495.600 290.600 495.600 L 295.600 495.600 295.600 490.600 C 295.600 487.850,295.555 485.607,295.500 485.615 C 295.445 485.624,295.175 485.886,294.900 486.198 M395.200 490.600 L 395.200 495.600 397.600 495.600 L 400.000 495.600 400.000 490.600 L 400.000 485.600 397.600 485.600 L 395.200 485.600 395.200 490.600 M274.400 505.968 C 274.400 506.171,273.860 506.455,273.200 506.600 C 272.540 506.745,272.000 507.021,272.000 507.214 C 272.000 507.406,271.370 507.682,270.600 507.826 C 269.830 507.971,269.200 508.235,269.200 508.413 C 269.200 508.591,268.660 508.855,268.000 509.000 C 267.340 509.145,266.800 509.429,266.800 509.632 C 266.800 509.834,266.530 510.000,266.200 510.000 C 265.870 510.000,265.600 510.160,265.600 510.357 C 265.600 510.553,265.150 510.826,264.600 510.964 C 264.050 511.102,263.600 511.378,263.600 511.576 C 263.600 511.774,263.060 512.055,262.400 512.200 C 261.740 512.345,261.200 512.615,261.200 512.800 C 261.200 512.985,260.660 513.255,260.000 513.400 C 259.340 513.545,258.800 513.806,258.800 513.981 C 258.800 514.155,258.080 514.413,257.200 514.554 C 253.969 515.070,255.605 515.600,260.432 515.600 L 265.264 515.600 267.680 513.248 C 270.629 510.377,270.491 510.515,272.679 508.248 C 273.661 507.232,274.629 506.400,274.832 506.400 C 275.034 506.400,275.200 506.220,275.200 506.000 C 275.200 505.780,275.020 505.600,274.800 505.600 C 274.580 505.600,274.400 505.766,274.400 505.968 M244.400 515.968 C 244.400 516.171,243.860 516.455,243.200 516.600 C 242.540 516.745,242.000 517.021,242.000 517.214 C 242.000 517.406,241.370 517.682,240.600 517.826 C 239.830 517.971,239.200 518.235,239.200 518.413 C 239.200 518.591,238.660 518.855,238.000 519.000 C 237.340 519.145,236.800 519.429,236.800 519.632 C 236.800 519.834,236.530 520.000,236.200 520.000 C 235.870 520.000,235.600 520.160,235.600 520.357 C 235.600 520.553,235.150 520.826,234.600 520.964 C 234.050 521.102,233.600 521.378,233.600 521.576 C 233.600 521.774,233.060 522.055,232.400 522.200 C 231.740 522.345,231.200 522.615,231.200 522.800 C 231.200 522.985,230.660 523.255,230.000 523.400 C 229.340 523.545,228.800 523.806,228.800 523.981 C 228.800 524.155,228.080 524.413,227.200 524.554 L 225.600 524.809 225.600 527.405 L 225.600 530.000 230.600 530.000 L 235.600 530.000 235.600 527.608 C 235.600 525.219,235.602 525.215,237.900 523.010 C 240.480 520.535,240.256 520.758,242.679 518.248 C 243.661 517.232,244.629 516.400,244.832 516.400 C 245.034 516.400,245.200 516.220,245.200 516.000 C 245.200 515.780,245.020 515.600,244.800 515.600 C 244.580 515.600,244.400 515.766,244.400 515.968 \"\r\n                    stroke=\"none\"\r\n                    fill=\"#f0f7f4\"\r\n                    fill-rule=\"evenodd\"\r\n                  ></path>\r\n                  <path\r\n                    id=\"path3\"\r\n                    d=\"M361.133 15.957 C 361.060 16.153,359.322 16.388,357.272 16.479 C 354.621 16.596,353.427 16.811,353.141 17.222 C 352.835 17.662,352.691 17.681,352.536 17.300 C 352.295 16.706,351.200 16.624,351.200 17.200 C 351.200 17.420,350.956 17.600,350.658 17.600 C 349.894 17.600,348.000 19.439,348.000 20.181 C 348.000 20.521,348.225 20.803,348.500 20.806 C 348.840 20.810,348.813 20.931,348.414 21.183 C 347.877 21.523,347.722 22.219,347.632 24.700 C 347.608 25.385,347.361 25.600,346.600 25.600 C 346.050 25.600,345.597 25.825,345.594 26.100 C 345.590 26.434,345.457 26.401,345.194 26.000 C 344.844 25.467,344.756 25.467,344.400 26.000 C 344.067 26.499,343.941 26.508,343.648 26.055 C 343.455 25.755,343.230 25.684,343.148 25.897 C 343.067 26.111,340.147 26.391,336.637 26.521 C 333.138 26.650,330.168 26.920,330.037 27.120 C 329.907 27.321,329.125 27.609,328.300 27.760 C 327.049 27.990,326.800 28.199,326.800 29.018 C 326.800 29.607,326.569 30.000,326.223 30.000 C 325.830 30.000,325.607 30.542,325.523 31.697 C 325.429 32.986,325.219 33.428,324.644 33.537 C 324.228 33.616,323.487 34.112,322.998 34.640 C 322.341 35.349,321.684 35.600,320.487 35.600 C 319.596 35.600,318.807 35.762,318.733 35.960 C 318.660 36.158,315.455 36.436,311.612 36.579 C 307.769 36.721,304.529 36.987,304.412 37.170 C 304.295 37.352,303.435 37.630,302.500 37.786 C 301.565 37.942,300.800 38.222,300.800 38.407 C 300.800 38.593,300.409 38.802,299.931 38.872 C 299.454 38.942,298.989 39.225,298.898 39.500 C 298.683 40.154,299.878 40.154,300.112 39.500 C 300.210 39.225,300.434 39.134,300.609 39.297 C 301.005 39.667,299.308 41.191,298.668 41.041 C 298.410 40.980,298.335 41.007,298.500 41.099 C 298.950 41.350,298.862 43.200,298.400 43.200 C 298.180 43.200,298.000 43.740,298.000 44.400 C 298.000 45.459,297.863 45.600,296.833 45.600 C 296.192 45.600,295.607 45.766,295.533 45.968 C 295.460 46.170,292.462 46.406,288.871 46.492 C 283.772 46.614,282.253 46.774,281.940 47.224 C 281.635 47.663,281.491 47.681,281.336 47.300 C 281.048 46.590,279.332 46.679,279.048 47.419 C 278.918 47.759,278.583 48.008,278.305 47.971 C 276.964 47.796,276.400 48.049,276.400 48.829 C 276.400 49.284,276.138 49.919,275.817 50.240 C 275.496 50.561,275.287 51.043,275.351 51.312 C 275.416 51.580,275.393 51.665,275.301 51.500 C 274.998 50.959,274.400 51.186,274.400 51.843 C 274.400 52.272,274.184 52.403,273.749 52.236 C 273.213 52.030,273.138 52.188,273.325 53.124 C 273.650 54.749,272.516 55.600,270.029 55.600 C 268.950 55.600,268.007 55.761,267.933 55.957 C 267.860 56.154,264.651 56.420,260.803 56.548 C 256.603 56.689,253.751 56.946,253.670 57.191 C 253.595 57.416,252.991 57.600,252.329 57.600 C 251.456 57.600,251.067 57.823,250.913 58.411 C 250.755 59.015,250.483 59.162,249.850 58.985 C 249.220 58.809,249.146 58.848,249.565 59.137 C 250.044 59.468,250.029 59.628,249.465 60.192 C 249.099 60.558,248.800 61.189,248.800 61.595 C 248.800 62.001,248.597 62.401,248.349 62.484 C 248.102 62.566,247.855 63.076,247.800 63.617 C 247.746 64.158,247.679 64.825,247.651 65.100 C 247.623 65.375,247.165 65.600,246.633 65.600 C 246.102 65.600,245.607 65.758,245.533 65.952 C 245.460 66.146,241.726 66.407,237.235 66.533 C 232.745 66.659,228.965 66.925,228.835 67.123 C 228.706 67.322,227.925 67.609,227.100 67.760 C 226.181 67.930,225.600 68.261,225.600 68.618 C 225.600 68.965,225.214 69.200,224.643 69.200 C 223.667 69.200,223.200 69.858,223.200 71.233 C 223.200 71.655,222.975 72.003,222.700 72.006 C 221.628 72.019,220.941 72.761,221.600 73.194 C 222.112 73.530,222.097 73.589,221.492 73.594 C 220.938 73.599,220.839 73.817,221.036 74.600 C 221.276 75.558,221.210 75.600,219.443 75.600 C 218.430 75.600,217.600 75.759,217.600 75.954 C 217.600 76.148,214.180 76.439,210.000 76.600 C 203.058 76.867,201.504 77.122,202.900 77.763 C 203.175 77.889,202.995 77.892,202.500 77.769 C 201.434 77.505,200.000 77.892,200.000 78.444 C 200.000 78.816,199.660 79.297,198.460 80.625 C 198.164 80.953,197.819 81.979,197.695 82.905 C 197.470 84.583,196.841 85.600,196.029 85.600 C 195.793 85.600,195.600 85.762,195.600 85.959 C 195.600 86.156,191.903 86.381,187.385 86.459 C 181.861 86.554,179.077 86.748,178.885 87.052 C 178.728 87.300,177.655 87.632,176.500 87.789 C 174.628 88.044,174.400 88.179,174.400 89.038 C 174.400 90.150,173.746 90.335,173.476 89.300 C 173.302 88.633,173.291 88.633,173.246 89.300 C 173.221 89.685,173.020 90.000,172.800 90.000 C 172.580 90.000,172.400 90.270,172.400 90.600 C 172.400 90.930,172.142 91.200,171.827 91.200 C 171.201 91.200,170.610 92.568,170.978 93.164 C 171.104 93.368,170.936 93.807,170.604 94.139 C 170.272 94.471,170.000 94.936,170.000 95.171 C 170.000 95.413,169.213 95.600,168.200 95.600 C 167.210 95.600,166.400 95.752,166.400 95.938 C 166.400 96.123,163.310 96.386,159.533 96.522 C 155.027 96.684,152.569 96.927,152.382 97.230 C 152.177 97.562,152.040 97.538,151.894 97.145 C 151.739 96.727,151.556 96.777,151.107 97.361 C 150.760 97.812,150.321 97.998,150.030 97.819 C 149.741 97.640,149.227 97.850,148.781 98.328 C 148.244 98.905,148.165 99.199,148.512 99.340 C 148.885 99.492,148.875 99.627,148.470 99.912 C 148.178 100.117,147.839 101.031,147.717 101.942 C 147.595 102.854,147.338 103.600,147.147 103.600 C 146.611 103.600,146.737 104.708,147.300 104.936 C 147.677 105.089,147.655 105.240,147.207 105.550 C 146.533 106.019,146.466 129.536,147.138 129.973 C 147.331 130.098,147.587 135.822,147.707 142.693 L 147.926 155.187 150.393 157.593 C 151.750 158.917,152.944 160.000,153.047 160.000 C 153.228 160.000,153.843 160.475,154.985 161.500 C 155.633 162.081,156.800 162.168,156.800 161.636 C 156.800 161.436,158.330 161.144,160.200 160.989 C 162.070 160.833,163.600 160.547,163.600 160.353 C 163.600 160.159,164.320 160.000,165.200 160.000 C 166.080 160.000,166.800 159.834,166.800 159.632 C 166.800 159.429,167.970 159.138,169.400 158.985 C 170.830 158.832,172.000 158.564,172.000 158.389 C 172.000 158.214,172.720 157.949,173.600 157.800 C 174.480 157.651,175.200 157.380,175.200 157.197 C 175.200 157.013,175.740 156.745,176.400 156.600 C 177.060 156.455,177.600 156.171,177.600 155.968 C 177.600 155.766,177.851 155.600,178.157 155.600 C 178.464 155.600,178.818 155.330,178.945 155.000 C 179.071 154.670,179.541 154.400,179.987 154.400 C 180.434 154.400,180.800 154.228,180.800 154.018 C 180.800 153.808,181.430 153.518,182.200 153.374 C 182.970 153.229,183.600 152.964,183.600 152.784 C 183.600 152.605,184.590 152.334,185.800 152.183 C 187.010 152.032,188.000 151.767,188.000 151.596 C 188.000 151.424,189.440 151.156,191.200 151.000 C 192.960 150.844,194.400 150.555,194.400 150.358 C 194.400 150.161,195.120 150.000,196.000 150.000 C 196.880 150.000,197.600 149.841,197.600 149.646 C 197.600 149.451,198.590 149.168,199.800 149.017 C 201.010 148.866,202.000 148.586,202.000 148.396 C 202.000 148.205,202.810 147.928,203.800 147.779 C 204.790 147.631,205.600 147.369,205.600 147.198 C 205.600 147.027,206.050 146.774,206.600 146.636 C 207.150 146.498,207.600 146.208,207.600 145.992 C 207.600 145.777,207.870 145.600,208.200 145.600 C 208.530 145.600,208.800 145.434,208.800 145.232 C 208.800 145.029,209.340 144.745,210.000 144.600 C 210.660 144.455,211.200 144.173,211.200 143.973 C 211.200 143.773,211.920 143.494,212.800 143.354 C 213.680 143.213,214.400 142.954,214.400 142.778 C 214.400 142.602,215.390 142.334,216.600 142.183 C 217.810 142.032,218.800 141.767,218.800 141.596 C 218.800 141.424,220.240 141.156,222.000 141.000 C 223.760 140.844,225.200 140.555,225.200 140.358 C 225.200 140.161,225.830 140.000,226.600 140.000 C 227.370 140.000,228.000 139.845,228.000 139.656 C 228.000 139.466,228.931 139.201,230.070 139.066 C 231.208 138.931,232.243 138.662,232.370 138.468 C 232.496 138.274,233.275 137.991,234.100 137.840 C 234.925 137.688,235.600 137.406,235.600 137.214 C 235.600 137.021,236.140 136.745,236.800 136.600 C 237.460 136.455,238.000 136.171,238.000 135.968 C 238.000 135.766,238.270 135.600,238.600 135.600 C 238.930 135.600,239.200 135.423,239.200 135.208 C 239.200 134.992,239.650 134.702,240.200 134.564 C 240.750 134.426,241.200 134.176,241.200 134.008 C 241.200 133.840,241.920 133.587,242.800 133.446 C 243.680 133.306,244.400 133.033,244.400 132.841 C 244.400 132.649,245.390 132.368,246.600 132.217 C 247.810 132.066,248.800 131.794,248.800 131.613 C 248.800 131.432,250.240 131.156,252.000 131.000 C 253.967 130.826,255.202 130.540,255.206 130.258 C 255.211 129.925,255.292 129.922,255.506 130.246 C 255.668 130.491,256.205 130.819,256.700 130.973 C 257.195 131.128,257.600 131.422,257.600 131.627 C 257.600 131.832,257.830 132.000,258.111 132.000 C 258.392 132.000,258.920 132.315,259.283 132.700 C 259.646 133.085,260.226 133.632,260.572 133.916 C 261.135 134.378,261.200 138.655,261.200 175.416 C 261.200 198.050,261.354 216.400,261.544 216.400 C 261.734 216.400,261.999 217.331,262.134 218.470 C 262.269 219.608,262.549 220.645,262.758 220.774 C 262.966 220.903,263.260 221.501,263.412 222.104 C 263.563 222.707,263.847 223.200,264.043 223.200 C 264.240 223.200,264.400 223.451,264.400 223.757 C 264.400 224.064,264.670 224.418,265.000 224.545 C 265.450 224.717,265.600 224.479,265.600 223.587 C 265.600 222.934,265.764 222.400,265.965 222.400 C 266.166 222.400,266.451 221.680,266.600 220.800 C 266.749 219.920,267.015 219.200,267.192 219.200 C 267.369 219.200,267.628 218.741,267.769 218.181 C 267.910 217.620,268.615 216.585,269.336 215.881 C 270.057 215.176,270.765 214.285,270.911 213.900 C 271.056 213.515,271.451 213.200,271.787 213.200 C 272.124 213.200,272.400 213.023,272.400 212.808 C 272.400 212.592,272.850 212.302,273.400 212.164 C 273.950 212.026,274.400 211.772,274.400 211.600 C 274.400 211.428,274.850 211.174,275.400 211.036 C 276.052 210.872,276.400 210.505,276.400 209.980 C 276.400 209.537,276.670 209.071,277.000 208.945 C 277.330 208.818,277.600 208.462,277.600 208.153 C 277.600 207.845,277.960 207.284,278.400 206.907 C 278.840 206.530,279.200 205.902,279.200 205.511 C 279.200 205.120,279.380 204.800,279.600 204.800 C 279.820 204.800,280.000 204.530,280.000 204.200 C 280.000 203.870,280.186 203.600,280.413 203.600 C 280.639 203.600,280.944 203.285,281.090 202.900 C 281.433 201.994,282.224 201.200,282.784 201.200 C 283.027 201.200,283.329 200.930,283.455 200.600 C 283.582 200.270,284.011 200.000,284.409 200.000 C 284.808 200.000,285.224 199.775,285.335 199.500 C 285.496 199.100,285.543 199.100,285.568 199.500 C 285.586 199.782,286.124 200.000,286.800 200.000 C 287.460 200.000,288.000 200.172,288.000 200.382 C 288.000 200.592,288.630 200.882,289.400 201.026 C 290.170 201.171,290.800 201.449,290.800 201.645 C 290.800 201.840,291.007 202.000,291.260 202.000 C 291.512 202.000,292.314 202.585,293.041 203.300 C 294.900 205.127,295.505 205.600,295.983 205.600 C 296.212 205.600,296.400 205.769,296.400 205.975 C 296.400 206.182,297.210 206.472,298.200 206.621 C 299.190 206.769,300.000 207.031,300.000 207.202 C 300.000 207.373,300.450 207.626,301.000 207.764 C 301.550 207.902,302.000 208.178,302.000 208.376 C 302.000 208.574,302.532 208.853,303.182 208.996 C 303.845 209.142,304.471 209.595,304.609 210.028 C 304.744 210.453,305.136 210.800,305.480 210.800 C 306.068 210.800,310.000 214.459,310.000 215.006 C 310.000 215.351,311.077 216.400,311.431 216.400 C 311.590 216.400,312.331 217.030,313.079 217.800 C 313.827 218.570,314.700 219.200,315.019 219.200 C 315.339 219.200,315.600 219.380,315.600 219.600 C 315.600 219.820,315.794 220.000,316.032 220.000 C 316.594 220.000,320.000 223.406,320.000 223.968 C 320.000 224.206,320.180 224.400,320.400 224.400 C 320.620 224.400,320.800 224.940,320.800 225.600 C 320.800 226.260,320.620 226.800,320.400 226.800 C 320.180 226.800,320.000 227.070,320.000 227.400 C 320.000 227.730,319.820 228.000,319.600 228.000 C 319.380 228.000,319.200 228.272,319.200 228.605 C 319.200 228.938,318.120 230.300,316.800 231.632 C 315.480 232.965,314.400 234.222,314.400 234.427 C 314.400 234.632,314.245 234.800,314.056 234.800 C 313.866 234.800,313.601 235.731,313.466 236.870 C 313.331 238.008,313.059 239.043,312.861 239.170 C 312.663 239.296,312.374 239.985,312.218 240.700 C 312.063 241.415,311.765 242.000,311.556 242.000 C 311.346 242.000,311.057 242.306,310.914 242.680 C 310.770 243.054,309.353 244.660,307.763 246.250 C 306.173 247.839,304.754 249.513,304.610 249.970 C 304.465 250.426,304.193 250.800,304.005 250.800 C 303.817 250.800,303.548 251.325,303.407 251.967 C 303.266 252.608,302.892 253.233,302.576 253.354 C 302.259 253.476,302.000 253.851,302.000 254.187 C 302.000 254.524,301.844 254.800,301.652 254.800 C 301.461 254.800,301.206 255.408,301.086 256.151 C 300.866 257.501,297.753 261.200,296.836 261.200 C 296.596 261.200,296.400 261.360,296.400 261.557 C 296.400 261.753,295.950 262.026,295.400 262.164 C 294.850 262.302,294.400 262.682,294.400 263.008 C 294.400 263.333,294.223 263.600,294.008 263.600 C 293.792 263.600,293.502 264.050,293.364 264.600 C 293.226 265.150,292.973 265.600,292.802 265.600 C 292.631 265.600,292.369 266.410,292.221 267.400 C 292.072 268.390,291.782 269.200,291.575 269.200 C 291.369 269.200,291.200 269.498,291.200 269.861 C 291.200 270.627,288.125 273.600,287.333 273.600 C 287.040 273.600,286.800 273.780,286.800 274.000 C 286.800 274.220,286.570 274.400,286.289 274.400 C 285.555 274.400,284.400 275.870,284.400 276.805 C 284.400 277.242,284.236 277.600,284.035 277.600 C 283.834 277.600,283.549 278.320,283.400 279.200 C 283.251 280.080,282.980 280.800,282.797 280.800 C 282.613 280.800,282.348 281.325,282.207 281.967 C 282.066 282.608,281.692 283.233,281.376 283.354 C 281.059 283.476,280.800 283.811,280.800 284.099 C 280.800 284.387,280.440 284.883,280.000 285.200 C 279.560 285.517,279.200 285.985,279.200 286.240 C 279.200 286.707,276.198 290.000,275.772 290.000 C 275.379 290.000,274.400 291.121,274.400 291.571 C 274.400 291.807,274.220 292.000,274.000 292.000 C 273.780 292.000,273.600 292.276,273.600 292.613 C 273.600 292.949,273.329 293.329,272.998 293.456 C 272.667 293.583,272.283 294.388,272.147 295.244 C 272.010 296.100,271.764 296.800,271.601 296.800 C 271.438 296.800,271.200 297.446,271.072 298.236 C 270.943 299.026,270.502 299.971,270.091 300.336 C 269.681 300.701,269.228 301.315,269.085 301.700 C 268.942 302.085,268.549 302.400,268.213 302.400 C 267.876 302.400,267.600 302.568,267.600 302.773 C 267.600 302.978,267.222 303.266,266.761 303.413 C 265.317 303.871,264.400 305.109,264.400 306.600 C 264.400 307.370,264.243 308.000,264.052 308.000 C 263.860 308.000,263.580 309.248,263.430 310.774 C 263.280 312.300,262.988 313.605,262.781 313.674 C 262.574 313.743,262.287 315.465,262.143 317.500 C 261.998 319.535,261.727 321.200,261.540 321.200 C 261.353 321.200,261.200 337.940,261.200 358.400 C 261.200 382.933,261.336 395.600,261.600 395.600 C 261.820 395.600,262.000 396.056,262.000 396.613 C 262.000 397.169,262.254 397.722,262.564 397.841 C 262.874 397.961,263.237 398.495,263.372 399.029 C 263.522 399.630,263.904 400.000,264.374 400.000 C 264.792 400.000,265.209 400.225,265.301 400.500 C 265.542 401.214,280.464 401.207,280.703 400.492 C 280.793 400.222,281.372 400.000,281.991 400.000 C 282.621 400.000,283.216 399.736,283.345 399.400 C 283.471 399.070,284.031 398.800,284.587 398.800 C 285.144 398.800,285.600 398.620,285.600 398.400 C 285.600 398.180,285.872 398.000,286.204 398.000 C 286.536 398.000,287.116 397.640,287.493 397.200 C 287.870 396.760,288.326 396.400,288.507 396.400 C 288.688 396.400,289.286 395.950,289.836 395.400 C 290.386 394.850,291.098 394.400,291.418 394.400 C 291.738 394.400,292.000 394.222,292.000 394.005 C 292.000 393.787,292.720 393.494,293.600 393.354 C 294.480 393.213,295.200 392.961,295.200 392.795 C 295.200 392.628,296.235 392.363,297.500 392.205 C 298.765 392.048,299.935 391.712,300.100 391.459 C 300.315 391.130,300.512 391.170,300.794 391.600 C 301.022 391.948,301.190 392.003,301.194 391.732 C 301.198 391.452,302.246 391.152,303.800 390.985 C 305.230 390.832,306.400 390.548,306.400 390.353 C 306.400 390.159,306.940 390.000,307.600 390.000 C 308.260 390.000,308.800 389.834,308.800 389.632 C 308.800 389.429,309.340 389.145,310.000 389.000 C 310.660 388.855,311.200 388.571,311.200 388.368 C 311.200 388.166,311.472 388.000,311.804 388.000 C 312.136 388.000,312.716 387.640,313.093 387.200 C 313.470 386.760,314.086 386.400,314.462 386.400 C 314.838 386.400,315.256 386.053,315.391 385.628 C 315.529 385.195,316.155 384.742,316.818 384.596 C 317.468 384.453,318.000 384.173,318.000 383.973 C 318.000 383.773,318.720 383.494,319.600 383.354 C 320.480 383.213,321.200 382.961,321.200 382.795 C 321.200 382.628,322.190 382.368,323.400 382.217 C 324.610 382.066,325.600 381.799,325.600 381.623 C 325.600 381.447,327.040 381.178,328.800 381.024 C 330.560 380.871,332.000 380.577,332.000 380.373 C 332.000 380.168,332.360 380.000,332.800 380.000 C 333.240 380.000,333.600 379.836,333.600 379.635 C 333.600 379.434,334.320 379.149,335.200 379.000 C 336.080 378.851,336.800 378.566,336.800 378.365 C 336.800 378.164,337.057 378.000,337.371 378.000 C 337.686 378.000,338.189 377.754,338.490 377.453 C 338.791 377.152,339.434 376.780,339.919 376.626 C 340.409 376.470,340.800 376.018,340.800 375.605 C 340.800 375.106,341.193 374.777,342.000 374.600 C 342.660 374.455,343.200 374.191,343.200 374.014 C 343.200 373.836,344.010 373.569,345.000 373.421 C 345.990 373.272,346.800 373.003,346.800 372.822 C 346.800 372.642,348.195 372.364,349.900 372.205 C 351.605 372.046,353.103 371.751,353.228 371.551 C 353.353 371.350,354.928 371.073,356.728 370.934 C 358.528 370.795,360.000 370.528,360.000 370.341 C 360.000 370.153,360.450 370.000,361.000 370.000 C 361.550 370.000,362.000 369.834,362.000 369.632 C 362.000 369.429,362.540 369.145,363.200 369.000 C 363.860 368.855,364.400 368.571,364.400 368.368 C 364.400 368.166,364.795 368.000,365.277 368.000 C 365.779 368.000,366.769 367.340,367.597 366.452 C 368.390 365.601,369.436 364.779,369.920 364.625 C 370.404 364.472,370.800 364.178,370.800 363.973 C 370.800 363.768,371.070 363.600,371.400 363.600 C 371.730 363.600,372.000 363.370,372.000 363.089 C 372.000 362.808,372.360 362.270,372.800 361.893 C 373.240 361.516,373.600 360.976,373.600 360.692 C 373.600 360.409,373.960 359.917,374.400 359.600 C 374.840 359.283,375.200 358.833,375.200 358.601 C 375.200 358.101,376.354 357.057,377.314 356.688 C 377.951 356.444,377.993 347.794,377.988 217.143 C 377.984 138.230,378.133 77.759,378.331 77.629 C 378.523 77.503,378.791 73.982,378.926 69.805 C 379.078 65.149,379.333 62.156,379.586 62.071 C 380.162 61.879,380.104 60.915,379.500 60.633 C 379.100 60.447,379.100 60.353,379.500 60.167 C 379.823 60.016,380.000 59.036,380.000 57.400 C 380.000 56.007,380.179 54.807,380.398 54.733 C 380.617 54.660,380.894 52.890,381.014 50.800 C 381.133 48.710,381.404 46.940,381.616 46.867 C 382.169 46.675,382.089 45.703,381.500 45.464 C 381.113 45.307,381.124 45.174,381.549 44.877 C 381.916 44.620,382.146 43.394,382.243 41.173 C 382.335 39.080,382.575 37.734,382.894 37.527 C 383.291 37.271,383.270 37.115,382.800 36.806 C 382.470 36.589,382.403 36.409,382.652 36.406 C 382.950 36.402,383.202 34.569,383.393 31.000 C 383.552 28.030,383.844 25.600,384.041 25.600 C 384.238 25.600,384.400 25.330,384.400 25.000 C 384.400 24.670,384.220 24.400,384.000 24.400 C 383.777 24.400,383.600 23.319,383.600 21.956 C 383.600 19.475,382.622 17.625,381.300 17.607 C 381.025 17.603,380.800 17.369,380.800 17.088 C 380.800 16.712,379.708 16.545,376.700 16.463 C 374.445 16.401,372.540 16.182,372.467 15.975 C 372.296 15.496,361.312 15.478,361.133 15.957 M221.067 71.067 C 220.606 71.527,220.775 72.000,221.400 72.000 C 221.730 72.000,222.000 71.730,222.000 71.400 C 222.000 70.775,221.527 70.606,221.067 71.067 \"\r\n                    stroke=\"none\"\r\n                    fill=\"#fcdc04\"\r\n                    fill-rule=\"evenodd\"\r\n                  ></path>\r\n                  <path\r\n                    id=\"path4\"\r\n                    d=\"M359.200 16.000 C 359.200 16.220,359.650 16.400,360.200 16.400 C 360.750 16.400,361.200 16.220,361.200 16.000 C 361.200 15.780,360.750 15.600,360.200 15.600 C 359.650 15.600,359.200 15.780,359.200 16.000 M383.600 27.000 C 383.600 27.330,383.780 27.600,384.000 27.600 C 384.220 27.600,384.400 27.330,384.400 27.000 C 384.400 26.670,384.220 26.400,384.000 26.400 C 383.780 26.400,383.600 26.670,383.600 27.000 M285.232 199.500 C 285.214 199.775,284.840 200.000,284.400 200.000 C 283.960 200.000,283.600 200.186,283.600 200.413 C 283.600 200.639,283.285 200.944,282.900 201.090 C 282.011 201.427,281.427 202.011,281.090 202.900 C 280.944 203.285,280.639 203.600,280.413 203.600 C 280.186 203.600,280.000 203.870,280.000 204.200 C 280.000 204.530,279.820 204.800,279.600 204.800 C 279.380 204.800,279.200 205.120,279.200 205.511 C 279.200 205.902,278.840 206.530,278.400 206.907 C 277.960 207.284,277.600 207.845,277.600 208.153 C 277.600 208.462,277.330 208.818,277.000 208.945 C 276.670 209.071,276.400 209.537,276.400 209.980 C 276.400 210.505,276.052 210.872,275.400 211.036 C 274.850 211.174,274.400 211.428,274.400 211.600 C 274.400 211.772,273.950 212.026,273.400 212.164 C 272.850 212.302,272.400 212.592,272.400 212.808 C 272.400 213.023,272.124 213.200,271.787 213.200 C 271.451 213.200,271.056 213.515,270.911 213.900 C 270.765 214.285,270.057 215.176,269.336 215.881 C 268.615 216.585,267.910 217.620,267.769 218.181 C 267.628 218.741,267.369 219.200,267.192 219.200 C 267.015 219.200,266.749 219.920,266.600 220.800 C 266.451 221.680,266.166 222.400,265.965 222.400 C 265.764 222.400,265.600 222.934,265.600 223.587 C 265.600 224.479,265.450 224.717,265.000 224.545 C 264.670 224.418,264.400 224.064,264.400 223.757 C 264.400 223.451,264.234 223.200,264.032 223.200 C 263.829 223.200,263.545 222.660,263.400 222.000 C 263.255 221.340,262.971 220.800,262.768 220.800 C 262.566 220.800,262.400 220.440,262.400 220.000 C 262.400 219.560,262.155 219.200,261.856 219.200 C 261.456 219.200,261.255 220.122,261.095 222.687 C 260.971 224.674,260.689 226.237,260.439 226.320 C 260.197 226.401,260.000 226.977,260.000 227.600 C 260.000 228.223,259.817 228.794,259.594 228.869 C 259.371 228.943,259.075 230.218,258.936 231.702 C 258.798 233.186,258.553 234.400,258.393 234.400 C 258.233 234.400,257.987 235.120,257.846 236.000 C 257.706 236.880,257.407 237.600,257.183 237.600 C 256.958 237.600,256.656 237.915,256.510 238.300 C 256.217 239.073,255.397 240.000,255.006 240.000 C 254.555 240.000,250.800 243.881,250.800 244.347 C 250.800 244.596,250.620 244.800,250.400 244.800 C 250.180 244.800,250.000 245.141,250.000 245.557 C 250.000 245.974,249.730 246.418,249.400 246.545 C 249.070 246.671,248.800 247.051,248.800 247.387 C 248.800 247.724,248.628 248.000,248.418 248.000 C 248.208 248.000,247.918 248.630,247.774 249.400 C 247.629 250.170,247.365 250.800,247.187 250.800 C 247.009 250.800,246.745 251.340,246.600 252.000 C 246.455 252.660,246.171 253.200,245.968 253.200 C 245.766 253.200,245.600 253.430,245.600 253.711 C 245.600 254.200,244.239 255.600,243.764 255.600 C 243.448 255.600,240.000 259.078,240.000 259.397 C 240.000 259.540,239.730 259.927,239.400 260.257 C 239.070 260.587,238.800 261.204,238.800 261.629 C 238.800 262.053,238.643 262.400,238.451 262.400 C 238.259 262.400,237.987 263.120,237.846 264.000 C 237.706 264.880,237.432 265.600,237.239 265.600 C 237.045 265.600,236.774 266.047,236.637 266.594 C 236.483 267.207,236.007 267.683,235.394 267.837 C 234.847 267.974,234.400 268.228,234.400 268.400 C 234.400 268.572,233.962 268.823,233.427 268.958 C 232.891 269.092,232.344 269.545,232.211 269.964 C 232.078 270.383,231.706 270.827,231.385 270.950 C 231.063 271.074,230.800 271.451,230.800 271.787 C 230.800 272.124,230.620 272.400,230.400 272.400 C 230.180 272.400,230.000 272.670,230.000 273.000 C 230.000 273.330,229.828 273.600,229.618 273.600 C 229.408 273.600,229.118 274.230,228.974 275.000 C 228.829 275.770,228.551 276.400,228.355 276.400 C 228.160 276.400,228.000 276.676,228.000 277.013 C 228.000 277.349,227.746 277.722,227.436 277.841 C 227.126 277.961,226.763 278.495,226.628 279.029 C 226.494 279.563,226.208 280.000,225.992 280.000 C 225.777 280.000,225.600 280.270,225.600 280.600 C 225.600 280.930,225.406 281.200,225.168 281.200 C 224.518 281.200,221.349 284.502,221.027 285.514 C 220.873 286.001,220.578 286.400,220.373 286.400 C 220.168 286.400,220.000 286.651,220.000 286.957 C 220.000 287.264,219.730 287.618,219.400 287.745 C 219.070 287.871,218.800 288.251,218.800 288.587 C 218.800 288.924,218.640 289.200,218.445 289.200 C 218.249 289.200,217.971 289.830,217.826 290.600 C 217.682 291.370,217.412 292.000,217.226 292.000 C 217.041 292.000,216.771 292.630,216.626 293.400 C 216.482 294.170,216.192 294.800,215.982 294.800 C 215.772 294.800,215.600 295.140,215.600 295.557 C 215.600 296.040,215.220 296.409,214.548 296.577 C 213.442 296.855,210.000 300.027,210.000 300.768 C 210.000 301.006,209.834 301.200,209.632 301.200 C 209.429 301.200,209.145 301.740,209.000 302.400 C 208.855 303.060,208.594 303.600,208.421 303.600 C 208.247 303.600,208.003 304.227,207.879 304.993 C 207.629 306.531,205.333 309.200,204.260 309.200 C 203.897 309.200,203.600 309.371,203.600 309.581 C 203.600 309.790,202.970 310.573,202.200 311.321 C 201.430 312.069,200.800 312.888,200.800 313.140 C 200.800 313.393,200.620 313.600,200.400 313.600 C 200.180 313.600,200.000 313.870,200.000 314.200 C 200.000 314.530,199.840 314.800,199.645 314.800 C 199.449 314.800,199.174 315.413,199.034 316.161 C 198.893 316.910,198.513 317.624,198.189 317.749 C 197.865 317.873,197.600 318.251,197.600 318.587 C 197.600 318.924,197.420 319.200,197.200 319.200 C 196.980 319.200,196.800 319.566,196.800 320.013 C 196.800 320.459,196.546 320.922,196.236 321.041 C 195.926 321.161,195.563 321.695,195.428 322.229 C 195.271 322.855,194.898 323.200,194.380 323.200 C 193.937 323.200,193.456 323.515,193.310 323.900 C 192.980 324.772,192.181 325.600,191.671 325.600 C 191.459 325.600,191.182 325.870,191.055 326.200 C 190.929 326.530,190.459 326.800,190.013 326.800 C 189.566 326.800,189.200 326.960,189.200 327.157 C 189.200 327.353,188.707 327.637,188.104 327.788 C 187.501 327.940,186.888 328.257,186.742 328.494 C 186.402 329.044,183.862 328.986,183.675 328.424 C 183.597 328.191,183.273 328.000,182.954 328.000 C 182.636 328.000,182.278 327.746,182.159 327.436 C 182.039 327.126,181.505 326.763,180.971 326.628 C 180.437 326.494,180.000 326.208,180.000 325.992 C 180.000 325.777,179.730 325.600,179.400 325.600 C 179.070 325.600,178.800 325.411,178.800 325.180 C 178.800 324.705,176.274 322.000,175.831 322.000 C 175.673 322.000,175.292 321.775,174.985 321.500 C 173.682 320.331,173.213 320.000,172.860 320.000 C 172.654 320.000,172.382 319.730,172.255 319.400 C 172.129 319.070,171.749 318.800,171.413 318.800 C 171.076 318.800,170.800 318.636,170.800 318.435 C 170.800 318.234,170.080 317.949,169.200 317.800 C 168.320 317.651,167.600 317.366,167.600 317.165 C 167.600 316.964,167.144 316.800,166.587 316.800 C 166.031 316.800,165.471 316.530,165.345 316.200 C 165.218 315.870,164.774 315.600,164.357 315.600 C 163.814 315.600,163.600 315.314,163.600 314.587 C 163.600 314.031,163.330 313.471,163.000 313.345 C 162.670 313.218,162.400 312.890,162.400 312.616 C 162.400 311.907,160.550 310.000,159.862 310.000 C 159.545 310.000,159.182 309.730,159.055 309.400 C 158.929 309.070,158.369 308.800,157.813 308.800 C 157.256 308.800,156.800 308.636,156.800 308.435 C 156.800 308.234,156.094 307.951,155.231 307.805 C 154.369 307.660,153.564 307.284,153.444 306.970 C 153.324 306.657,153.037 306.400,152.807 306.400 C 152.578 306.400,151.478 305.484,150.364 304.364 C 149.250 303.244,148.223 302.444,148.081 302.586 C 147.939 302.727,148.015 302.969,148.250 303.122 C 148.484 303.275,148.790 304.119,148.929 304.997 C 149.068 305.875,149.365 306.655,149.591 306.730 C 149.816 306.805,150.000 307.046,150.000 307.264 C 150.000 307.483,150.540 308.202,151.200 308.862 C 151.860 309.522,152.400 310.224,152.400 310.423 C 152.400 310.622,152.850 310.898,153.400 311.036 C 153.950 311.174,154.400 311.428,154.400 311.600 C 154.400 311.772,154.850 312.026,155.400 312.164 C 155.950 312.302,156.400 312.592,156.400 312.808 C 156.400 313.023,156.607 313.200,156.860 313.200 C 157.331 313.200,160.000 315.759,160.000 316.211 C 160.000 316.626,162.150 318.627,162.900 318.911 C 163.285 319.056,163.600 319.361,163.600 319.587 C 163.600 319.814,163.960 320.000,164.400 320.000 C 164.840 320.000,165.200 320.166,165.200 320.368 C 165.200 320.571,165.740 320.855,166.400 321.000 C 167.060 321.145,167.600 321.429,167.600 321.632 C 167.600 321.834,167.876 322.000,168.213 322.000 C 168.549 322.000,168.929 322.270,169.055 322.600 C 169.182 322.930,169.558 323.200,169.892 323.200 C 170.225 323.200,171.548 324.280,172.832 325.600 C 174.115 326.920,175.424 328.000,175.740 328.000 C 176.056 328.000,176.418 328.270,176.545 328.600 C 176.671 328.930,177.051 329.200,177.387 329.200 C 177.724 329.200,178.000 329.380,178.000 329.600 C 178.000 329.820,178.270 330.000,178.600 330.000 C 178.930 330.000,179.200 330.177,179.200 330.392 C 179.200 330.608,179.650 330.898,180.200 331.036 C 180.750 331.174,181.200 331.445,181.200 331.639 C 181.200 331.832,181.920 332.106,182.800 332.246 C 183.680 332.387,184.400 332.659,184.400 332.851 C 184.400 333.043,184.850 333.200,185.400 333.200 C 185.950 333.200,186.400 333.040,186.400 332.845 C 186.400 332.649,187.030 332.371,187.800 332.226 C 188.570 332.082,189.200 331.815,189.200 331.633 C 189.200 331.451,189.920 331.187,190.800 331.046 C 191.680 330.906,192.400 330.613,192.400 330.395 C 192.400 330.178,192.670 330.000,193.000 330.000 C 193.330 330.000,193.600 329.832,193.600 329.627 C 193.600 329.422,193.992 329.130,194.471 328.978 C 195.632 328.609,198.000 326.277,198.000 325.502 C 198.000 325.163,198.270 324.782,198.600 324.655 C 198.930 324.529,199.200 324.189,199.200 323.901 C 199.200 323.613,199.553 323.122,199.985 322.811 C 200.417 322.499,200.881 321.740,201.017 321.122 C 201.153 320.505,201.415 320.000,201.600 320.000 C 201.785 320.000,202.055 319.460,202.200 318.800 C 202.345 318.140,202.621 317.600,202.814 317.600 C 203.006 317.600,203.281 316.976,203.424 316.214 C 203.579 315.386,203.975 314.735,204.405 314.598 C 204.802 314.473,205.227 314.106,205.350 313.785 C 205.474 313.463,205.769 313.200,206.007 313.200 C 206.685 313.200,209.200 310.590,209.200 309.887 C 209.200 309.539,209.560 309.140,210.000 309.000 C 210.552 308.825,210.877 308.260,211.051 307.173 C 211.189 306.308,211.440 305.600,211.608 305.600 C 211.776 305.600,212.026 305.150,212.164 304.600 C 212.302 304.050,212.592 303.600,212.808 303.600 C 213.023 303.600,213.200 303.381,213.200 303.113 C 213.200 302.494,215.150 300.800,215.862 300.800 C 216.158 300.800,216.400 300.634,216.400 300.431 C 216.400 300.228,216.940 299.522,217.600 298.862 C 218.260 298.202,218.800 297.462,218.800 297.218 C 218.800 296.974,219.070 296.671,219.400 296.545 C 219.730 296.418,220.000 295.974,220.000 295.557 C 220.000 295.141,220.166 294.800,220.368 294.800 C 220.571 294.800,220.855 294.260,221.000 293.600 C 221.145 292.940,221.429 292.400,221.632 292.400 C 221.834 292.400,222.000 292.124,222.000 291.787 C 222.000 291.451,222.270 291.071,222.600 290.945 C 222.930 290.818,223.200 290.399,223.200 290.013 C 223.200 289.628,223.650 288.974,224.200 288.561 C 224.750 288.148,225.200 287.643,225.200 287.439 C 225.200 287.052,225.458 286.746,227.791 284.360 C 228.566 283.567,229.200 282.712,229.200 282.460 C 229.200 282.207,229.380 282.000,229.600 282.000 C 229.820 282.000,230.000 281.730,230.000 281.400 C 230.000 281.070,230.177 280.800,230.392 280.800 C 230.608 280.800,230.898 280.350,231.036 279.800 C 231.174 279.250,231.439 278.800,231.625 278.800 C 231.811 278.800,232.090 278.130,232.243 277.310 C 232.397 276.491,232.765 275.578,233.061 275.281 C 233.358 274.985,233.600 274.498,233.600 274.198 C 233.600 273.899,233.960 273.540,234.400 273.400 C 234.840 273.260,235.200 272.978,235.200 272.773 C 235.200 272.568,235.415 272.400,235.677 272.400 C 236.312 272.400,239.200 269.279,239.200 268.593 C 239.200 268.297,239.538 267.947,239.951 267.816 C 240.451 267.657,240.786 267.047,240.955 265.989 C 241.095 265.115,241.387 264.400,241.605 264.400 C 241.822 264.400,242.000 264.144,242.000 263.831 C 242.000 263.518,242.540 262.722,243.200 262.062 C 243.860 261.402,244.400 260.668,244.400 260.431 C 244.400 260.194,244.594 260.000,244.832 260.000 C 245.573 260.000,248.745 256.558,249.023 255.452 C 249.168 254.874,249.447 254.400,249.643 254.400 C 249.840 254.400,250.000 254.130,250.000 253.800 C 250.000 253.470,250.177 253.200,250.392 253.200 C 250.608 253.200,250.898 252.750,251.036 252.200 C 251.174 251.650,251.428 251.200,251.600 251.200 C 251.772 251.200,252.026 250.750,252.164 250.200 C 252.302 249.650,252.578 249.200,252.776 249.200 C 252.974 249.200,253.253 248.668,253.396 248.018 C 253.542 247.355,253.995 246.729,254.428 246.591 C 254.853 246.456,255.200 245.998,255.200 245.573 C 255.200 245.148,255.401 244.800,255.647 244.800 C 256.178 244.800,259.200 241.853,259.200 241.335 C 259.200 241.138,259.553 240.722,259.985 240.411 C 260.417 240.099,260.881 239.340,261.017 238.722 C 261.153 238.105,261.415 237.600,261.600 237.600 C 261.785 237.600,262.061 237.033,262.213 236.339 C 262.453 235.247,263.078 234.475,265.031 232.855 C 265.268 232.659,265.881 232.365,266.393 232.202 C 267.206 231.944,267.945 231.278,269.594 229.317 C 269.817 229.051,270.000 228.646,270.000 228.417 C 270.000 228.188,270.178 228.000,270.395 228.000 C 270.613 228.000,270.904 227.291,271.042 226.425 C 271.181 225.558,271.543 224.754,271.847 224.637 C 272.151 224.521,272.400 224.149,272.400 223.813 C 272.400 223.476,272.577 223.200,272.792 223.200 C 273.008 223.200,273.296 222.756,273.432 222.214 C 273.568 221.672,274.012 221.123,274.419 220.994 C 274.826 220.865,275.270 220.408,275.406 219.980 C 275.543 219.551,275.898 219.200,276.196 219.200 C 276.914 219.200,279.200 216.894,279.200 216.169 C 279.200 215.856,279.380 215.600,279.600 215.600 C 279.820 215.600,280.000 215.396,280.000 215.146 C 280.000 214.896,280.429 214.294,280.953 213.808 C 281.477 213.322,282.030 212.537,282.180 212.062 C 282.331 211.588,282.602 211.200,282.784 211.200 C 282.965 211.200,283.226 210.750,283.364 210.200 C 283.502 209.650,283.792 209.200,284.008 209.200 C 284.223 209.200,284.400 208.945,284.400 208.633 C 284.400 208.322,284.625 207.991,284.900 207.898 C 285.565 207.675,286.800 208.011,286.800 208.415 C 286.800 208.592,287.340 208.855,288.000 209.000 C 288.660 209.145,289.200 209.429,289.200 209.632 C 289.200 209.834,289.650 210.000,290.200 210.000 C 290.750 210.000,291.200 210.159,291.200 210.354 C 291.200 210.549,292.190 210.832,293.400 210.983 C 294.610 211.134,295.600 211.410,295.600 211.597 C 295.600 211.784,296.140 212.055,296.800 212.200 C 297.460 212.345,298.000 212.617,298.000 212.805 C 298.000 212.993,298.405 213.273,298.900 213.429 C 300.000 213.774,302.400 216.242,302.400 217.028 C 302.400 217.343,302.656 217.600,302.969 217.600 C 303.282 217.600,304.078 218.140,304.738 218.800 C 305.398 219.460,306.063 220.000,306.216 220.000 C 306.369 220.000,307.192 220.720,308.046 221.600 C 308.900 222.480,309.799 223.200,310.043 223.200 C 311.530 223.200,313.042 226.179,311.798 226.656 C 311.467 226.783,311.083 227.588,310.947 228.444 C 310.810 229.300,310.541 230.000,310.349 230.000 C 310.157 230.000,310.000 230.270,310.000 230.600 C 310.000 230.930,309.841 231.200,309.646 231.200 C 309.451 231.200,309.168 232.190,309.017 233.400 C 308.866 234.610,308.595 235.600,308.415 235.600 C 308.234 235.600,307.974 236.050,307.836 236.600 C 307.698 237.150,307.408 237.600,307.192 237.600 C 306.977 237.600,306.800 237.806,306.800 238.057 C 306.800 238.532,304.604 240.800,304.144 240.800 C 303.620 240.800,301.291 243.482,300.992 244.429 C 300.824 244.963,300.363 245.681,299.970 246.024 C 299.576 246.367,299.132 247.132,298.983 247.724 C 298.835 248.316,298.567 248.800,298.388 248.800 C 298.210 248.800,297.945 249.340,297.800 250.000 C 297.655 250.660,297.374 251.200,297.176 251.200 C 296.978 251.200,296.702 251.650,296.564 252.200 C 296.426 252.750,296.153 253.200,295.957 253.200 C 295.760 253.200,295.600 253.406,295.600 253.657 C 295.600 254.123,293.409 256.400,292.960 256.400 C 292.542 256.400,290.814 258.175,290.807 258.612 C 290.803 258.838,290.435 259.286,289.989 259.608 C 289.538 259.933,289.072 260.858,288.938 261.696 C 288.806 262.523,288.549 263.200,288.367 263.200 C 288.185 263.200,287.915 263.847,287.766 264.638 C 287.499 266.061,285.235 268.800,284.325 268.800 C 283.717 268.800,280.800 272.000,280.800 272.667 C 280.800 272.960,280.620 273.200,280.400 273.200 C 280.180 273.200,280.000 273.470,280.000 273.800 C 280.000 274.130,279.834 274.400,279.632 274.400 C 279.429 274.400,279.145 274.940,279.000 275.600 C 278.855 276.260,278.571 276.800,278.368 276.800 C 278.166 276.800,278.000 277.072,278.000 277.404 C 278.000 277.736,277.640 278.316,277.200 278.693 C 276.760 279.070,276.400 279.608,276.400 279.889 C 276.400 280.517,274.964 282.000,274.356 282.000 C 273.742 282.000,272.015 283.690,272.007 284.300 C 272.003 284.575,271.823 284.800,271.608 284.800 C 271.392 284.800,271.102 285.250,270.964 285.800 C 270.826 286.350,270.553 286.800,270.357 286.800 C 270.160 286.800,270.000 287.070,270.000 287.400 C 270.000 287.730,269.823 288.000,269.608 288.000 C 269.392 288.000,269.102 288.450,268.964 289.000 C 268.826 289.550,268.567 290.000,268.388 290.000 C 268.210 290.000,267.945 290.540,267.800 291.200 C 267.655 291.860,267.394 292.400,267.221 292.400 C 267.047 292.400,266.805 293.011,266.684 293.758 C 266.445 295.235,265.326 296.800,264.511 296.800 C 263.832 296.800,260.800 299.944,260.800 300.648 C 260.800 300.952,260.620 301.200,260.400 301.200 C 260.180 301.200,260.000 301.470,260.000 301.800 C 260.000 302.130,259.822 302.400,259.605 302.400 C 259.387 302.400,259.094 303.120,258.954 304.000 C 258.813 304.880,258.555 305.600,258.381 305.600 C 258.206 305.600,257.945 306.140,257.800 306.800 C 257.655 307.460,257.383 308.000,257.195 308.000 C 257.007 308.000,256.728 308.397,256.574 308.881 C 256.254 309.891,255.442 310.800,254.859 310.800 C 254.251 310.800,252.000 313.186,252.000 313.831 C 252.000 314.144,251.834 314.400,251.632 314.400 C 251.429 314.400,251.145 314.940,251.000 315.600 C 250.855 316.260,250.571 316.800,250.368 316.800 C 250.166 316.800,250.000 317.070,250.000 317.400 C 250.000 317.730,249.823 318.000,249.608 318.000 C 249.392 318.000,249.102 318.450,248.964 319.000 C 248.826 319.550,248.572 320.000,248.400 320.000 C 248.228 320.000,247.974 320.450,247.836 321.000 C 247.698 321.550,247.408 322.000,247.192 322.000 C 246.977 322.000,246.800 322.201,246.800 322.447 C 246.800 322.692,245.720 323.960,244.400 325.264 C 243.080 326.567,242.000 327.877,242.000 328.174 C 242.000 328.471,241.730 328.818,241.400 328.945 C 241.070 329.071,240.800 329.541,240.800 329.987 C 240.800 330.434,240.620 330.800,240.400 330.800 C 240.180 330.800,240.000 331.070,240.000 331.400 C 240.000 331.730,239.834 332.000,239.632 332.000 C 239.429 332.000,239.145 332.540,239.000 333.200 C 238.855 333.860,238.590 334.400,238.412 334.400 C 238.233 334.400,237.968 334.873,237.823 335.451 C 237.510 336.699,235.728 338.578,234.485 338.973 C 233.998 339.128,233.600 339.408,233.600 339.596 C 233.600 339.784,233.069 340.469,232.420 341.118 C 231.772 341.767,231.122 342.771,230.977 343.349 C 230.832 343.927,230.553 344.400,230.357 344.400 C 230.160 344.400,230.000 344.670,230.000 345.000 C 230.000 345.330,229.840 345.600,229.643 345.600 C 229.447 345.600,229.174 346.050,229.036 346.600 C 228.898 347.150,228.608 347.600,228.392 347.600 C 228.177 347.600,228.000 347.876,228.000 348.213 C 228.000 348.549,227.730 348.929,227.400 349.055 C 227.070 349.182,226.800 349.586,226.800 349.954 C 226.800 350.622,225.490 352.000,224.854 352.000 C 224.272 352.000,222.506 353.836,222.220 354.738 C 222.069 355.212,221.793 355.600,221.605 355.600 C 221.417 355.600,221.145 356.140,221.000 356.800 C 220.855 357.460,220.571 358.000,220.368 358.000 C 220.166 358.000,220.000 358.270,220.000 358.600 C 220.000 358.930,219.823 359.200,219.608 359.200 C 219.392 359.200,219.102 359.650,218.964 360.200 C 218.826 360.750,218.567 361.200,218.388 361.200 C 218.210 361.200,217.945 361.740,217.800 362.400 C 217.655 363.060,217.371 363.600,217.168 363.600 C 216.966 363.600,216.800 363.857,216.800 364.172 C 216.800 364.958,214.400 367.426,213.300 367.771 C 212.805 367.927,212.400 368.284,212.400 368.566 C 212.400 368.847,212.040 369.493,211.600 370.000 C 211.160 370.507,210.800 371.165,210.800 371.461 C 210.800 371.758,210.620 372.000,210.400 372.000 C 210.180 372.000,210.000 372.270,210.000 372.600 C 210.000 372.930,209.834 373.200,209.632 373.200 C 209.429 373.200,209.145 373.740,209.000 374.400 C 208.855 375.060,208.571 375.600,208.368 375.600 C 208.166 375.600,208.000 375.848,208.000 376.152 C 208.000 376.906,204.945 380.000,204.200 380.000 C 203.870 380.000,203.600 380.180,203.600 380.400 C 203.600 380.620,203.324 380.800,202.987 380.800 C 202.651 380.800,202.271 381.070,202.145 381.400 C 202.018 381.730,201.660 382.000,201.349 382.000 C 201.037 382.000,199.821 382.961,198.647 384.136 C 197.472 385.311,196.223 386.382,195.871 386.518 C 195.128 386.802,192.636 384.573,192.215 383.248 C 192.067 382.782,191.716 382.400,191.434 382.400 C 191.153 382.400,190.507 382.040,190.000 381.600 C 189.493 381.160,188.835 380.800,188.539 380.800 C 188.242 380.800,188.000 380.620,188.000 380.400 C 188.000 380.180,187.730 380.000,187.400 380.000 C 187.070 380.000,186.800 379.820,186.800 379.600 C 186.800 379.380,186.453 379.200,186.029 379.200 C 185.604 379.200,184.987 378.930,184.657 378.600 C 184.327 378.270,183.878 378.000,183.659 378.000 C 183.441 378.000,182.729 377.439,182.078 376.752 C 178.506 372.985,176.506 371.242,175.452 370.977 C 174.874 370.832,174.400 370.553,174.400 370.357 C 174.400 370.160,174.130 370.000,173.800 370.000 C 173.470 370.000,173.200 369.834,173.200 369.632 C 173.200 369.429,172.660 369.145,172.000 369.000 C 171.340 368.855,170.800 368.583,170.800 368.395 C 170.800 368.207,170.395 367.927,169.900 367.771 C 169.405 367.616,168.604 367.064,168.119 366.544 C 167.635 366.025,167.050 365.600,166.819 365.600 C 166.589 365.600,166.400 365.330,166.400 365.000 C 166.400 364.670,166.130 364.400,165.800 364.400 C 165.470 364.400,165.200 364.130,165.200 363.800 C 165.200 363.470,164.885 363.192,164.500 363.183 C 164.115 363.174,163.358 362.634,162.819 361.983 C 162.279 361.332,161.604 360.800,161.319 360.800 C 161.033 360.800,160.800 360.620,160.800 360.400 C 160.800 360.180,160.440 360.000,160.000 360.000 C 159.560 360.000,159.200 359.840,159.200 359.643 C 159.200 359.447,158.707 359.163,158.104 359.012 C 157.501 358.860,156.887 358.541,156.739 358.302 C 156.410 357.768,152.652 357.860,152.467 358.406 C 152.393 358.623,152.065 358.800,151.738 358.800 C 151.225 358.800,151.230 358.887,151.771 359.429 C 152.117 359.774,152.400 360.224,152.400 360.429 C 152.400 360.633,152.642 360.800,152.939 360.800 C 153.235 360.800,153.893 361.160,154.400 361.600 C 154.907 362.040,155.565 362.400,155.861 362.400 C 156.158 362.400,156.400 362.580,156.400 362.800 C 156.400 363.020,156.676 363.200,157.013 363.200 C 157.349 363.200,157.729 363.470,157.855 363.800 C 157.982 364.130,158.309 364.400,158.582 364.400 C 159.203 364.400,160.800 365.759,160.800 366.289 C 160.800 367.075,162.804 368.821,163.976 369.055 C 164.636 369.187,165.280 369.621,165.406 370.020 C 165.533 370.418,166.168 370.861,166.818 371.004 C 167.468 371.147,168.000 371.426,168.000 371.624 C 168.000 371.822,168.450 372.098,169.000 372.236 C 169.550 372.374,170.000 372.645,170.000 372.839 C 170.000 373.032,170.720 373.306,171.600 373.446 C 172.480 373.587,173.200 373.845,173.200 374.019 C 173.200 374.194,173.740 374.455,174.400 374.600 C 175.225 374.781,175.600 375.103,175.600 375.632 C 175.600 376.054,175.786 376.400,176.013 376.400 C 176.239 376.400,176.544 376.715,176.689 377.100 C 176.835 377.485,177.459 378.309,178.077 378.931 C 178.695 379.553,179.200 380.208,179.200 380.386 C 179.200 380.565,179.817 380.827,180.571 380.968 C 181.325 381.110,182.004 381.411,182.079 381.638 C 182.155 381.866,182.978 382.154,183.909 382.278 C 184.839 382.403,185.600 382.650,185.600 382.826 C 185.600 383.002,185.978 383.266,186.439 383.413 C 187.542 383.762,188.800 385.041,188.800 385.813 C 188.800 386.149,189.070 386.529,189.400 386.655 C 189.730 386.782,190.000 387.044,190.000 387.238 C 190.000 387.733,191.302 389.200,191.742 389.200 C 191.942 389.200,192.458 389.605,192.887 390.100 C 193.757 391.102,197.605 391.385,197.910 390.469 C 197.996 390.211,198.322 390.000,198.633 390.000 C 198.945 390.000,199.200 389.832,199.200 389.627 C 199.200 389.422,199.592 389.130,200.071 388.978 C 201.262 388.600,203.600 386.269,203.600 385.460 C 203.600 385.063,203.924 384.800,204.413 384.800 C 204.859 384.800,205.322 384.546,205.441 384.236 C 205.561 383.926,206.118 383.557,206.680 383.416 C 207.777 383.140,210.000 381.141,210.000 380.431 C 210.000 380.194,210.177 380.000,210.392 380.000 C 210.608 380.000,210.898 379.550,211.036 379.000 C 211.174 378.450,211.431 378.000,211.608 378.000 C 211.785 378.000,212.051 377.280,212.200 376.400 C 212.349 375.520,212.634 374.800,212.835 374.800 C 213.036 374.800,213.200 374.524,213.200 374.187 C 213.200 373.851,213.470 373.471,213.800 373.345 C 214.130 373.218,214.400 372.941,214.400 372.729 C 214.400 372.204,215.440 371.200,215.984 371.200 C 216.227 371.200,216.529 370.930,216.655 370.600 C 216.782 370.270,217.044 370.000,217.238 370.000 C 217.766 370.000,219.200 368.684,219.200 368.199 C 219.200 367.967,219.560 367.517,220.000 367.200 C 220.440 366.883,220.800 366.207,220.800 365.699 C 220.800 365.191,221.059 364.676,221.376 364.554 C 221.692 364.433,222.066 363.808,222.207 363.167 C 222.348 362.525,222.610 362.000,222.788 362.000 C 222.967 362.000,223.226 361.550,223.364 361.000 C 223.502 360.450,223.792 360.000,224.008 360.000 C 224.223 360.000,224.400 359.730,224.400 359.400 C 224.400 359.070,224.580 358.800,224.800 358.800 C 225.020 358.800,225.200 358.530,225.200 358.200 C 225.200 357.870,225.380 357.600,225.600 357.600 C 226.213 357.600,227.600 356.075,227.600 355.400 C 227.600 355.070,227.876 354.800,228.213 354.800 C 228.549 354.800,228.942 354.485,229.085 354.100 C 229.228 353.715,229.762 353.034,230.272 352.587 C 230.783 352.140,231.200 351.555,231.200 351.287 C 231.200 351.019,231.364 350.800,231.565 350.800 C 231.766 350.800,232.051 350.080,232.200 349.200 C 232.349 348.320,232.611 347.600,232.783 347.600 C 232.955 347.600,233.200 346.954,233.328 346.164 C 233.563 344.718,234.861 343.200,235.861 343.200 C 236.158 343.200,236.400 343.014,236.400 342.787 C 236.400 342.561,236.715 342.256,237.100 342.111 C 237.859 341.824,240.000 339.824,240.000 339.402 C 240.000 339.260,240.270 338.873,240.600 338.543 C 240.930 338.213,241.200 337.596,241.200 337.171 C 241.200 336.747,241.360 336.400,241.555 336.400 C 241.751 336.400,242.029 335.770,242.174 335.000 C 242.318 334.230,242.608 333.600,242.818 333.600 C 243.028 333.600,243.200 333.404,243.200 333.164 C 243.200 332.685,246.652 329.200,247.126 329.200 C 247.538 329.200,248.800 327.679,248.800 327.183 C 248.800 326.958,249.070 326.671,249.400 326.545 C 249.730 326.418,250.000 325.993,250.000 325.600 C 250.000 325.207,250.270 324.782,250.600 324.655 C 250.930 324.529,251.200 324.149,251.200 323.813 C 251.200 323.476,251.366 323.200,251.568 323.200 C 251.771 323.200,252.055 322.660,252.200 322.000 C 252.345 321.340,252.609 320.800,252.787 320.800 C 252.965 320.800,253.229 320.170,253.374 319.400 C 253.518 318.630,253.808 318.000,254.018 318.000 C 254.228 318.000,254.400 317.730,254.400 317.400 C 254.400 317.070,254.580 316.800,254.800 316.800 C 255.020 316.800,255.200 316.530,255.200 316.200 C 255.200 315.870,255.470 315.600,255.800 315.600 C 256.130 315.600,256.400 315.780,256.400 316.000 C 256.400 316.220,256.607 316.400,256.860 316.400 C 257.428 316.400,260.000 319.004,260.000 319.580 C 260.000 319.811,260.180 320.000,260.400 320.000 C 260.620 320.000,260.800 320.270,260.800 320.600 C 260.800 320.930,261.043 321.200,261.340 321.200 C 261.736 321.200,261.950 320.210,262.143 317.500 C 262.287 315.465,262.574 313.743,262.781 313.674 C 262.988 313.605,263.280 312.300,263.430 310.774 C 263.580 309.248,263.860 308.000,264.052 308.000 C 264.243 308.000,264.400 307.370,264.400 306.600 C 264.400 305.109,265.317 303.871,266.761 303.413 C 267.222 303.266,267.600 302.978,267.600 302.773 C 267.600 302.568,267.876 302.400,268.213 302.400 C 268.549 302.400,268.942 302.085,269.085 301.700 C 269.228 301.315,269.681 300.701,270.091 300.336 C 270.502 299.971,270.943 299.026,271.072 298.236 C 271.200 297.446,271.438 296.800,271.601 296.800 C 271.764 296.800,272.010 296.100,272.147 295.244 C 272.283 294.388,272.667 293.583,272.998 293.456 C 273.329 293.329,273.600 292.949,273.600 292.613 C 273.600 292.276,273.780 292.000,274.000 292.000 C 274.220 292.000,274.400 291.807,274.400 291.571 C 274.400 291.121,275.379 290.000,275.772 290.000 C 276.198 290.000,279.200 286.707,279.200 286.240 C 279.200 285.985,279.560 285.517,280.000 285.200 C 280.440 284.883,280.800 284.387,280.800 284.099 C 280.800 283.811,281.059 283.476,281.376 283.354 C 281.692 283.233,282.066 282.608,282.207 281.967 C 282.348 281.325,282.613 280.800,282.797 280.800 C 282.980 280.800,283.251 280.080,283.400 279.200 C 283.549 278.320,283.834 277.600,284.035 277.600 C 284.236 277.600,284.400 277.242,284.400 276.805 C 284.400 275.870,285.555 274.400,286.289 274.400 C 286.570 274.400,286.800 274.220,286.800 274.000 C 286.800 273.780,287.040 273.600,287.333 273.600 C 288.125 273.600,291.200 270.627,291.200 269.861 C 291.200 269.498,291.369 269.200,291.575 269.200 C 291.782 269.200,292.072 268.390,292.221 267.400 C 292.369 266.410,292.631 265.600,292.802 265.600 C 292.973 265.600,293.226 265.150,293.364 264.600 C 293.502 264.050,293.792 263.600,294.008 263.600 C 294.223 263.600,294.400 263.333,294.400 263.008 C 294.400 262.682,294.850 262.302,295.400 262.164 C 295.950 262.026,296.400 261.753,296.400 261.557 C 296.400 261.360,296.596 261.200,296.836 261.200 C 297.753 261.200,300.866 257.501,301.086 256.151 C 301.206 255.408,301.461 254.800,301.652 254.800 C 301.844 254.800,302.000 254.524,302.000 254.187 C 302.000 253.851,302.259 253.476,302.576 253.354 C 302.892 253.233,303.266 252.608,303.407 251.967 C 303.548 251.325,303.817 250.800,304.005 250.800 C 304.193 250.800,304.465 250.426,304.610 249.970 C 304.754 249.513,306.173 247.839,307.763 246.250 C 309.353 244.660,310.770 243.054,310.914 242.680 C 311.057 242.306,311.346 242.000,311.556 242.000 C 311.765 242.000,312.063 241.415,312.218 240.700 C 312.374 239.985,312.663 239.296,312.861 239.170 C 313.059 239.043,313.331 238.008,313.466 236.870 C 313.601 235.731,313.866 234.800,314.056 234.800 C 314.245 234.800,314.400 234.632,314.400 234.427 C 314.400 234.222,315.480 232.965,316.800 231.632 C 318.120 230.300,319.200 228.938,319.200 228.605 C 319.200 228.272,319.380 228.000,319.600 228.000 C 319.820 228.000,320.000 227.730,320.000 227.400 C 320.000 227.070,320.180 226.800,320.400 226.800 C 320.620 226.800,320.800 226.260,320.800 225.600 C 320.800 224.940,320.620 224.400,320.400 224.400 C 320.180 224.400,320.000 224.206,320.000 223.968 C 320.000 223.406,316.594 220.000,316.032 220.000 C 315.794 220.000,315.600 219.820,315.600 219.600 C 315.600 219.380,315.339 219.200,315.019 219.200 C 314.700 219.200,313.827 218.570,313.079 217.800 C 312.331 217.030,311.590 216.400,311.431 216.400 C 311.077 216.400,310.000 215.351,310.000 215.006 C 310.000 214.459,306.068 210.800,305.480 210.800 C 305.136 210.800,304.744 210.453,304.609 210.028 C 304.471 209.595,303.845 209.142,303.182 208.996 C 302.532 208.853,302.000 208.574,302.000 208.376 C 302.000 208.178,301.550 207.902,301.000 207.764 C 300.450 207.626,300.000 207.373,300.000 207.202 C 300.000 207.031,299.190 206.769,298.200 206.621 C 297.210 206.472,296.400 206.182,296.400 205.975 C 296.400 205.769,296.212 205.600,295.983 205.600 C 295.505 205.600,294.900 205.127,293.041 203.300 C 292.314 202.585,291.512 202.000,291.260 202.000 C 291.007 202.000,290.800 201.840,290.800 201.645 C 290.800 201.449,290.170 201.171,289.400 201.026 C 288.630 200.882,288.000 200.592,288.000 200.382 C 288.000 200.172,287.475 200.000,286.833 200.000 C 286.192 200.000,285.576 199.775,285.465 199.500 C 285.304 199.100,285.257 199.100,285.232 199.500 \"\r\n                    stroke=\"none\"\r\n                    fill=\"#e1e471\"\r\n                    fill-rule=\"evenodd\"\r\n                  ></path>\r\n                </g>\r\n              </svg>\r\n              Right Invoices</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div style=\"margin-bottom:5px\"></div>\r\n        <hr />\r\n        <div style=\"margin-bottom:5px\"></div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <div\r\n            fxFlex=\"100\"\r\n            fxFlex.md=\"100\"\r\n            fxFlex.lg=\"100\"\r\n            fxFlex.xs=\"100\"\r\n            fxFlex.sm=\"100\"\r\n          >\r\n            <p\r\n              style=\"font-family: arial,sans-serif;font-size: 12px;text-align: center;\"\r\n            >\r\n              <span>{{ companyInfo.name }},</span>\r\n              <span>{{ companyInfo.address.city }},</span>\r\n              <span>Street No : {{ companyInfo.address.street }},</span>\r\n              <span>{{ companyInfo.address.city }},</span>\r\n              <span>\r\n                {{ companyInfo.address.state }} -\r\n                {{ companyInfo.address.zipCode }}</span\r\n              >\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/invoice/dialog-printa4.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\">\r\n  <h2 style=\"text-align: center;\">Reports</h2>\r\n</div>\r\n\r\n <md-card style=\"margin: 1rem\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"padding-side col-xs-2\">\r\n      <md-select\r\n        required\r\n        placeholder=\"Report Type\"\r\n        [(ngModel)]=\"reportFilter.report\"\r\n        [formControl]=\"myForm.controls.reports_name\"\r\n      >\r\n        <md-option *ngFor=\"let rpt of reports\" [value]=\"rpt.reportName\">\r\n          {{ rpt.displayName }}\r\n        </md-option>\r\n      </md-select>\r\n      <md-hint>\r\n        <form-messages [control]=\"myForm.controls.reports_name\">\r\n        </form-messages>\r\n      </md-hint>\r\n    </div>\r\n    <div class=\"padding-side col-xs-2\" *ngIf=\"!reportFilter.isDateRange\">\r\n      <md-select\r\n        placeholder=\"Month\"\r\n        [(ngModel)]=\"reportFilter.month\"\r\n        [formControl]=\"myForm.controls.reports_month\"\r\n      >\r\n        <md-option *ngFor=\"let item of months\" [value]=\"item.id\">\r\n          {{ item.name }}\r\n        </md-option>\r\n      </md-select>\r\n      <md-hint>\r\n        <form-messages [control]=\"myForm.controls.reports_month\">\r\n        </form-messages>\r\n      </md-hint>\r\n    </div>\r\n    <div class=\"padding-side col-xs-2\" *ngIf=\"!reportFilter.isDateRange\">\r\n      <md-select\r\n        placeholder=\"Year\"\r\n        [(ngModel)]=\"reportFilter.year\"\r\n        [formControl]=\"myForm.controls.reports_year\"\r\n      >\r\n        <md-option *ngFor=\"let item of years\" [value]=\"item\">\r\n          {{ item }}\r\n        </md-option>\r\n      </md-select>\r\n      <md-hint>\r\n        <form-messages [control]=\"myForm.controls.reports_year\">\r\n        </form-messages>\r\n      </md-hint>\r\n    </div>\r\n    <div class=\"col-xs-2 padding-side\" *ngIf=\"reportFilter.isDateRange\">\r\n      <md-input-container>\r\n        <input\r\n          mdInput\r\n          placeholder=\"From\"\r\n          [formControl]=\"myForm.controls.reports_fromdate\"\r\n          [(ngModel)]=\"reportFilter.fromDate\"\r\n          [mdDatepicker]=\"fromDateToggle\"\r\n          readonly\r\n        />\r\n        <button\r\n          mdSuffix\r\n          [mdDatepickerToggle]=\"fromDateToggle\"\r\n          *ngIf=\"reportFilter.isDateRange\"\r\n        ></button>\r\n        <md-hint>\r\n          <form-messages [control]=\"myForm.controls.reports_fromdate\">\r\n          </form-messages>\r\n        </md-hint>\r\n      </md-input-container>\r\n      <md-datepicker #fromDateToggle> </md-datepicker>\r\n    </div>\r\n    <div class=\"col-xs-2 padding-side\" *ngIf=\"reportFilter.isDateRange\">\r\n      <md-input-container>\r\n        <input\r\n          mdInput\r\n          placeholder=\"To\"\r\n          [formControl]=\"myForm.controls.reports_fromdate\"\r\n          [(ngModel)]=\"reportFilter.toDate\"\r\n          [mdDatepicker]=\"poDateToggle\"\r\n          readonly\r\n        />\r\n        <button\r\n          mdSuffix\r\n          [mdDatepickerToggle]=\"poDateToggle\"\r\n          *ngIf=\"reportFilter.isDateRange\"\r\n        ></button>\r\n        <md-hint>\r\n          <form-messages [control]=\"myForm.controls.reports_fromdate\">\r\n          </form-messages>\r\n        </md-hint>\r\n      </md-input-container>\r\n      <md-datepicker #poDateToggle> </md-datepicker>\r\n    </div>\r\n    <div class=\"col-xs-2 padding-side\">\r\n      <md-checkbox\r\n        [(ngModel)]=\"reportFilter.isDateRange\"\r\n        title=\"Date Range\"\r\n        (change)=\"drchkChanged()\"\r\n      >\r\n      </md-checkbox>\r\n    </div>\r\n    <div class=\"padding-side col-xs-2\">\r\n      <button\r\n        md-raised-button\r\n        color=\"accent\"\r\n        (click)=\"generateReport()\"\r\n        style=\"height: 40px;\"\r\n      >\r\n        Generate\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"report-table\" *ngIf=\"reportData.length <= 0\">\r\n        <tbody>\r\n          <tr>\r\n            <td>No data found</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"report-table\" *ngIf=\"reportData.length > 0\">\r\n        <thead>\r\n          <tr>\r\n            <th *ngFor=\"let columnName of displayedColumns\">\r\n              {{ columnName }}\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let row of reportData\">\r\n            <td *ngFor=\"let columnName of displayedColumns\">\r\n              {{ row[columnName] }}\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</md-card> \r\n<!-- <div class=\"row center-xs padding\">\r\n        <div class=\"col-xs-12 \">\r\n            <div class=\"start-xs \">\r\n                <md-table #table  [dataSource]=\"dataSource\" mdSort style=\"height: 500px; overflow-y: auto\">\r\n                    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n                    <md-row *cdkRowDef=\"let row; columns: displayedColumns\"></md-row>\r\n\r\n                    <ng-container *ngFor=\"let tableColumn of displayedColumns\" [cdkColumnDef]=\"tableColumn\">\r\n                        <md-header-cell *cdkHeaderCellDef md-sort-header style=\"position: sticky; top: 0\">\r\n                            {{tableColumn}}\r\n                        </md-header-cell>\r\n                        <md-cell *cdkCellDef=\"let row\">\r\n                            <div> {{row[tableColumn]}} </div>\r\n                        </md-cell>\r\n                    </ng-container>\r\n                </md-table>\r\n            </div>\r\n        </div>\r\n        <md-paginator #paginator style=\"width: 100%\" [length]=\"dataSource.data.length\" [pageIndex]=\"0\" [pageSize]=\"10\"\r\n            [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n        </md-paginator>\r\n    </div>  -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports_datasource__ = __webpack_require__("../../../../../src/app/components/reports/reports.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_report_filter_entity__ = __webpack_require__("../../../../../src/app/entities/report-filter.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_http_service__ = __webpack_require__("../../../../../src/app/shared/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_reports_form__ = __webpack_require__("../../../../../src/app/forms/reports.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReportsComponent = (function () {
    function ReportsComponent(appService, restService, httpService) {
        this.appService = appService;
        this.restService = restService;
        this.httpService = httpService;
        this.myForm = __WEBPACK_IMPORTED_MODULE_7__forms_reports_form__["a" /* ReportFormGroup */].init();
        this.months = [
            { id: 1, name: "January" },
            { id: 2, name: "February" },
            { id: 3, name: "March" },
            { id: 4, name: "April" },
            { id: 5, name: "May" },
            { id: 6, name: "June" },
            { id: 7, name: "July" },
            { id: 8, name: "August" },
            { id: 9, name: "September" },
            { id: 10, name: "October" },
            { id: 11, name: "November" },
            { id: 12, name: "December" }
        ];
        this.date = new Date();
        this.years = [];
        this.reports = [];
        this.dataSource = null;
        this.displayedColumns = []; // ["Brand","CreatedBy","CreatedDate","ItemName","SKU"];
        this.reportTypes = [];
        this.reportData = [];
        __WEBPACK_IMPORTED_MODULE_7__forms_reports_form__["a" /* ReportFormGroup */].reports(this.myForm);
        __WEBPACK_IMPORTED_MODULE_7__forms_reports_form__["a" /* ReportFormGroup */].reportsMonthAndYear(this.myForm);
        this.currentYear = this.date.getFullYear();
        this.reportFilter = new __WEBPACK_IMPORTED_MODULE_2__entities_report_filter_entity__["a" /* ReportFilter */]();
        // this.restService.dataloadFromFile("./assets/json/reporttypes.json")
        //   .subscribe(results => {
        //     this.reportTypes = results["data"];
        //     console.log(this.reportTypes);
        //     this.loadReportColumns("INVOICE");
        //   })
    }
    ReportsComponent.prototype.ngOnInit = function () {
        for (var i = this.currentYear; i > this.currentYear - 5; i--) {
            this.years.push(i);
        }
        this.loadReports();
        this.reportFilter.report = "DAYREPORT";
        this.reportFilter.year = this.currentYear.toString();
        this.reportFilter.month = this.date.getMonth.toString();
        //this.callDataSource();
    };
    ReportsComponent.prototype.ngOnChanges = function (changes) {
        this.displayedColumns = changes["displayedColumns"].currentValue;
        this.reportData = changes["reportData"].currentValue;
        this.myForm = changes["myForm"].currentValue;
    };
    ReportsComponent.prototype.callDataSource = function () {
        // this.reportFilter.fromDate = "2019-03-22";
        // this.reportFilter.toDate = "2019-03-25";
        // this.reportFilter.year = "2019";
        // this.reportFilter.month = "Jan";
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__reports_datasource__["a" /* ReportDataSource */](this.restService, this.reportFilter, this.sort, this.paginator);
    };
    ReportsComponent.prototype.loadReports = function () {
        var _this = this;
        this.restService
            .getReports({ reporttype: "MONTHLY" })
            .subscribe(function (results) {
            if (results) {
                _this.reports = results;
                _this.restService.showLoader(false);
            }
        });
    };
    ReportsComponent.prototype.loadReportColumns = function (report) {
        //this.displayedColumns = this.reportTypes.find(e => e.reporttype == report).Columns;
        //console.log(this.displayedColumns);
    };
    ReportsComponent.prototype.drchkChanged = function () {
        if (this.reportFilter.isDateRange) {
            // this.reportFilter.month = "";
            // this.reportFilter.year = "";
            //this.myForm = ReportFormGroup.init();
            __WEBPACK_IMPORTED_MODULE_7__forms_reports_form__["a" /* ReportFormGroup */].reportsDateRange(this.myForm);
        }
        else {
            // this.reportFilter.fromDate = "";
            // this.reportFilter.toDate = "";
            //this.myForm = ReportFormGroup.init();
            __WEBPACK_IMPORTED_MODULE_7__forms_reports_form__["a" /* ReportFormGroup */].reportsMonthAndYear(this.myForm);
        }
    };
    ReportsComponent.prototype.loadReportData = function () {
        var _this = this;
        if (!this.reportFilter.isDateRange) {
            var daysInMonth = new Date(parseInt(this.reportFilter.year), parseInt(this.reportFilter.month) + 1, 0).getDate();
            this.reportFilter.fromDate =
                this.reportFilter.year + "-" + this.reportFilter.month + "-01";
            this.reportFilter.toDate =
                this.reportFilter.year +
                    "-" +
                    this.reportFilter.month +
                    "-" +
                    daysInMonth.toString();
        }
        this.restService.generateReport(this.reportFilter).subscribe(function (results) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_util__["isArray"])(results)) {
                _this.reportData = results;
                _this.displayedColumns = Object.keys(_this.reportData[0]);
            }
            else {
                _this.reportData = [];
                _this.displayedColumns = [];
            }
        });
    };
    ReportsComponent.prototype.generateReport = function () {
        //this.callDataSource();
        this.loadReportData();
    };
    return ReportsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MdSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MdSort */]) === "function" && _a || Object)
], ReportsComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MdPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MdPaginator */]) === "function" && _b || Object)
], ReportsComponent.prototype, "paginator", void 0);
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: "app-reports",
        template: __webpack_require__("../../../../../src/app/components/reports/reports.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_rest_service__["a" /* RestService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_http_service__["a" /* HttpService */]) === "function" && _e || Object])
], ReportsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDataSource; });
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





var ReportDataSource = (function (_super) {
    __extends(ReportDataSource, _super);
    //public displayColumns: string[] = [];
    function ReportDataSource(restService, searchObj, sort, paginator) {
        var _this = _super.call(this) || this;
        _this.restService = restService;
        _this.searchObj = searchObj;
        _this.sort = sort;
        _this.paginator = paginator;
        _this.data = [];
        _this.getDataList();
        return _this;
    }
    ReportDataSource.prototype.getDataList = function () {
        var _this = this;
        this.restService.showLoader(true);
        this.restService
            .generateReport(this.searchObj)
            .subscribe(function (results) {
            if (results) {
                _this.data = results;
                _this.restService.showLoader(false);
                // this.displayColumns = Object.keys(this.data[0]);
                // console.log(this.displayColumns);
            }
        });
    };
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ReportDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.restService.generateReport(this.searchObj),
            this.sort.mdSortChange,
            this.paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var myData = _this.getSortedData();
            ;
            // Grab the page's slice of data.
            var startIndex = _this.paginator.pageIndex * _this.paginator.pageSize;
            return myData.splice(startIndex, _this.paginator.pageSize);
        });
    };
    ReportDataSource.prototype.disconnect = function () { };
    ReportDataSource.prototype.getSortedData = function () {
        var _this = this;
        var data = this.data.slice();
        if (!this.sort.active || this.sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this.sort.active) {
                case 'stockItem':
                    _a = [a.stockItem, b.stockItem], propertyA = _a[0], propertyB = _a[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this.sort.direction == 'asc' ? 1 : -1);
            var _a;
        });
    };
    return ReportDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk__["_1" /* DataSource */]));

//# sourceMappingURL=reports.datasource.js.map

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_component__ = __webpack_require__("../../../../../src/app/components/reports/reports.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_4__reports_component__["a" /* ReportsComponent */] },
    { path: 'reports/reports', component: __WEBPACK_IMPORTED_MODULE_4__reports_component__["a" /* ReportsComponent */] },
];
var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__reports_component__["a" /* ReportsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ "../../../../../src/app/entities/address.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = (function () {
    function Address() {
        this.country = 101;
        // discount: number = 10;
    }
    return Address;
}());

//# sourceMappingURL=address.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/company.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address_entity__ = __webpack_require__("../../../../../src/app/entities/address.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });

var Company = (function () {
    function Company() {
        this.id = null;
        this.currency = 'INR';
        this.address = new __WEBPACK_IMPORTED_MODULE_0__address_entity__["a" /* Address */]();
    }
    return Company;
}());

//# sourceMappingURL=company.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/report-filter.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFilter; });
var ReportFilter = (function () {
    function ReportFilter() {
        this.isDateRange = false;
    }
    return ReportFilter;
}());

//# sourceMappingURL=report-filter.entity.js.map

/***/ }),

/***/ "../../../../../src/app/entities/suppliermanagement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address_entity__ = __webpack_require__("../../../../../src/app/entities/address.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_entity__ = __webpack_require__("../../../../../src/app/entities/company.entity.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierManagement; });


var SupplierManagement = (function () {
    function SupplierManagement() {
        this.active = true;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__company_entity__["a" /* Company */]();
        this.address = new __WEBPACK_IMPORTED_MODULE_0__address_entity__["a" /* Address */]();
    }
    return SupplierManagement;
}());

//# sourceMappingURL=suppliermanagement.js.map

/***/ }),

/***/ "../../../../../src/app/entities/web-report-filter.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebReportFilter; });
var WebReportFilter = (function () {
    function WebReportFilter() {
        this.month = 0;
        this.year = 0;
        this.isDateRange = false;
    }
    return WebReportFilter;
}());

//# sourceMappingURL=web-report-filter.entity.js.map

/***/ }),

/***/ "../../../../../src/app/forms/reports.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_common_app_form__ = __webpack_require__("../../../../../src/app/shared/common/app.form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFormGroup; });
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

var ReportFormGroup = (function (_super) {
    __extends(ReportFormGroup, _super);
    function ReportFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportFormGroup.init = function () {
        return this.getFormGroup();
    };
    ReportFormGroup.reports = function (group) {
        group.addControl("reports_name", this.getController(true, this.TYPE_DATA, null, 50));
        // group.addControl("reports_month", this.getController(false, this.TYPE_DATA, null, 20));
        // group.addControl("reports_year", this.getController(false, this.TYPE_DATA, null, 20))
        // group.addControl("reports_fromdate", this.getController(false, this.TYPE_DATE, null, 20));
        // group.addControl("reports_todate", this.getController(false, this.TYPE_DATE, null, 20))
    };
    ReportFormGroup.reportsMonthAndYear = function (group) {
        group.removeControl("reports_fromdate");
        group.removeControl("reports_todate");
        group.addControl("reports_month", this.getController(true, this.TYPE_DATA, null, 20));
        group.addControl("reports_year", this.getController(true, this.TYPE_DATA, null, 20));
    };
    ReportFormGroup.reportsDateRange = function (group) {
        group.removeControl("reports_month");
        group.removeControl("reports_year");
        group.addControl("reports_fromdate", this.getController(true, this.TYPE_DATE, null, 20));
        group.addControl("reports_todate", this.getController(true, this.TYPE_DATE, null, 20));
    };
    ReportFormGroup.removeAll = function (group) {
        group.removeControl("reports_month");
        group.removeControl("reports_year");
        group.removeControl("reports_fromdate");
        group.removeControl("reports_todate");
    };
    return ReportFormGroup;
}(__WEBPACK_IMPORTED_MODULE_0__shared_common_app_form__["a" /* AppFormGroup */]));

//# sourceMappingURL=reports.form.js.map

/***/ }),

/***/ "../../../../../src/app/forms/supplier.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_common_app_form__ = __webpack_require__("../../../../../src/app/shared/common/app.form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierFormGroup; });
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

var SupplierFormGroup = (function (_super) {
    __extends(SupplierFormGroup, _super);
    function SupplierFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SupplierFormGroup.init = function () {
        return this.getFormGroup();
    };
    SupplierFormGroup.details = function (group) {
        group.addControl("supplier_title", this.getController(null, this.TYPE_ALFA_NUM_DES_SPACE, 1, 20));
        group.addControl("supplier_firstName", this.getController(null, this.TYPE_ALFA, 2, 20));
        group.addControl("supplier_middleName", this.getController(null, this.TYPE_ALFA, 2, 20));
        group.addControl("supplier_lastName", this.getController(null, this.TYPE_ALFA, 2, 20));
        group.addControl("supplier_companyName", this.getController(null, this.TYPE_ALFA, 3, 50));
        group.addControl("supplier_email", this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl("supplier_mobile", this.getController(null, this.TYPE_MOBILE_NO, 10, 10));
        group.addControl("supplier_fax", this.getController(null, this.TYPE_ALFA_NUM_DES_SPACE, 10, 15));
        group.addControl("supplier_phone", this.getController(null, this.TYPE_NUMBER, 10, 10));
        group.addControl("supplier_pan", this.getController(null, this.TYPE_ALFA_NUM, 10, 10));
        group.addControl("supplier_website", this.getController(null, this.TYPE_WEBSITE, null, 99));
        group.addControl("supplier_gstin", this.getController(false, this.GST_CODE_PATTERN, 15, 15));
        group.addControl("supplier_openingBalance", this.getController(null, this.TYPE_DECIMAL, null, 10));
        group.addControl("supplier_openingBalanceDate", this.getController(null, this.TYPE_DATE, 8, 10));
        group.addControl("supplier_billingRate", this.getController(null, this.TYPE_DECIMAL, 1, 10));
        group.addControl("supplier_termsOfPayment", this.getController(null, this.TYPE_DATA, null, 50));
    };
    SupplierFormGroup.address = function (group) {
        group.addControl("supplier_address_lane", this.getController(null, this.TYPE_ALFA_NUM_DES_SPACE, null, 20));
        group.addControl("supplier_address_area", this.getController(null, this.TYPE_ALFA_NUM_DES_SPACE, null, 20));
        group.addControl("supplier_address_city", this.getController(null, this.TYPE_ALFA_DES, 1, 20));
        group.addControl("supplier_address_state", this.getController(true, this.TYPE_ALL, null, 50));
        group.addControl("supplier_address_street", this.getController(null, this.TYPE_ALFA_NUM_DES_SPACE, null, 20));
        group.addControl("supplier_address_zipCode", this.getController(null, this.TYPE_NUMBER, 6, 6));
    };
    SupplierFormGroup.bankAccountDetails = function (group) {
        group.addControl("supplier_accountNumber", this.getController(null, this.TYPE_NUMBER, 7, 15));
        group.addControl("supplier_ifscCode", this.getController(null, this.TYPE_IFSC_CODE, null, 11));
        group.addControl("supplier_bankBranch", this.getController(null, this.TYPE_ALFA_NUM_DES_SPACE, 3, 50));
        group.addControl("supplier_micrCode", this.getController(null, this.TYPE_NUMBER, 9, 9));
        group.addControl("supplier_others", this.getController(null, this.TYPE_DATA, null, 99));
    };
    return SupplierFormGroup;
}(__WEBPACK_IMPORTED_MODULE_0__shared_common_app_form__["a" /* AppFormGroup */]));

//# sourceMappingURL=supplier.form.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/app.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReqBody; });
/* unused harmony export SessionUser */
/* unused harmony export KeyValue */
/* unused harmony export LoadMore */
/* unused harmony export NameList */
/* unused harmony export ReportData */
/* unused harmony export Report */
var ReqBody = (function () {
    function ReqBody() {
        this.url = '';
        this.type = 'POST';
        this.showLoader = false;
        this.reqData = {};
    }
    return ReqBody;
}());

var SessionUser = (function () {
    function SessionUser() {
        this.branchId = 'NONE';
        this.branchName = 'NONE';
    }
    return SessionUser;
}());

var KeyValue = (function () {
    function KeyValue() {
    }
    return KeyValue;
}());

var LoadMore = (function () {
    function LoadMore() {
        this.orderBy = "UPDATED_DATE";
        this.isAsc = false;
        this.limit = 10;
        this.offset = 0;
    }
    return LoadMore;
}());

var NameList = (function () {
    function NameList() {
        this.list = [];
    }
    return NameList;
}());

var ReportData = (function () {
    function ReportData() {
        this.status = false;
    }
    return ReportData;
}());

var Report = (function () {
    function Report() {
    }
    return Report;
}());

//# sourceMappingURL=app.entity.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/app.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFormGroup; });

var AppFormGroup = (function () {
    function AppFormGroup() {
    }
    //static IFSC_CODE_PATTERN: string = '([0-9]{2,2}|[0-9]{4,4}|[0-9]{6,6}|[0-9]{8,8})';
    // static IFSC_CODE_PATTERN: string = '/^[A-Z|a-z]{4,4}[0-9]{6}$';
    AppFormGroup.getFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* FormBuilder */]().group({});
    };
    AppFormGroup.getController = function (require, type, minLength, maxLength) {
        var compose = [];
        if (require) {
            compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required);
        }
        if (type) {
            switch (type) {
                case AppFormGroup.TYPE_ALL:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALL_PATTERN));
                    break;
                case AppFormGroup.TYPE_DATA:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.DATA_PATTERN));
                    break;
                case AppFormGroup.TYPE_DECIMAL:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.DECIMAL_PATTERN));
                    break;
                case AppFormGroup.TYPE_NUMBER:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.NUMBER_PATTERN));
                    break;
                case AppFormGroup.TYPE_DATE:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.DATE_PATTERN));
                    break;
                case AppFormGroup.TYPE_EMAIL:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.EMAIL_PATTERN));
                    break;
                case AppFormGroup.TYPE_WEBSITE:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.WEBSITE_PATTERN));
                    break;
                case AppFormGroup.TYPE_ALFA:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALFA_PATTERN));
                    break;
                case AppFormGroup.TYPE_ZIP_CODE:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ZIP_CODE_PATTERN));
                    break;
                case AppFormGroup.GST_CODE_PATTERN:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.GST_CODE_PATTERN));
                    break;
                case AppFormGroup.TYPE_PAN_NO:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.PAN_NO_PATTERN));
                    break;
                case AppFormGroup.TYPE_PHONE_NO:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.PHONE_NO_PATTERN));
                    break;
                case AppFormGroup.TYPE_MOBILE_NO:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.MOBILE_NO_PATTERN));
                    break;
                case AppFormGroup.TYPE_ALFA_DES:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALFA_DES_PATTERN));
                    break;
                case AppFormGroup.TYPE_BUSI_NAME:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.BUSI_NAME_PATTERN));
                    break;
                case AppFormGroup.TYPE_IFSC_CODE:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.IFSC_CODE_PATTERN));
                    break;
                case AppFormGroup.TYPE_COMBI_NUM:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.HSN_PATTERN));
                    break;
                case AppFormGroup.TYPE_ALFA_NUM_DES_SPACE:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALFA_NUM_DES_SPACE_PATTERN));
                    break;
                case AppFormGroup.TYPE_ALFA_NUM_DES_SPACE_HIFEN:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALFA_NUM_DES_SPACE_HIFEN_PATTERN));
                    break;
                case AppFormGroup.HSN_PATTERN:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.HSN_PATTERN));
                    break;
                case AppFormGroup.TYPE_ALFA_NUM:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALFA_NUM_PATTERN));
                    break;
                default:
                    compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(AppFormGroup.ALL_PATTERN));
                    break;
            }
        }
        if (minLength) {
            compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].minLength(minLength));
        }
        if (maxLength) {
            compose.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].maxLength(maxLength));
        }
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].compose(compose));
    };
    return AppFormGroup;
}());

AppFormGroup.TYPE_ALL = "ALL";
AppFormGroup.TYPE_DATA = "DATA";
AppFormGroup.TYPE_DECIMAL = "DECIMAL";
AppFormGroup.TYPE_NUMBER = "NUMBER";
AppFormGroup.TYPE_DATE = "DATE";
AppFormGroup.TYPE_EMAIL = "EMAIL";
AppFormGroup.TYPE_WEBSITE = "WEBSITE";
AppFormGroup.TYPE_ALFA = "CHAR";
AppFormGroup.TYPE_ALFA_DES = "CHAR_DES";
AppFormGroup.TYPE_ALFA_NUM_DES_SPACE = "TYPE_ALFA_NUM_DES_SPACE";
AppFormGroup.TYPE_ALFA_NUM_DES_SPACE_HIFEN = "ALFA_NUM_DES_SPACE_HIFEN";
AppFormGroup.TYPE_ALFA_NUM = "ALFA_NUM";
AppFormGroup.TYPE_COMBI_NUM = "COMBI_NUM";
AppFormGroup.TYPE_IFSC_CODE = "IFSC_CODE";
AppFormGroup.TYPE_ZIP_CODE = "ZIP_CODE";
AppFormGroup.TYPE_GST_CODE = "GST_CODE";
AppFormGroup.TYPE_PAN_NO = "PAN_NO";
AppFormGroup.TYPE_MOBILE_NO = "MOBILE_NO";
AppFormGroup.TYPE_BUSI_NAME = "BUSI_NAME";
AppFormGroup.TYPE_PHONE_NO = "PHONE_NO";
//static EMAIL_PATTERN: string = '([a-zA-Z0-9.-_]){1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
AppFormGroup.EMAIL_PATTERN = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
AppFormGroup.SIGN_UP_EMAIL_PATTERN = "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$";
//static WEBSITE_PATTERN: string = 'w{3}\.[a-z]+\.?[a-z]{2,3}(|\.[a-z]{2,3})';
AppFormGroup.WEBSITE_PATTERN = "(http://|https://|ftp://)?(www.)?[A-Za-z0-9]+.[a-z]{2,3}";
AppFormGroup.ALFA_PATTERN = "^[a-zA-Z ]+";
//static ALFA_DES_PATTERN: string = '^[a-zA-Z\ -\']+';
AppFormGroup.ALFA_DES_PATTERN = "^[0-9a-zA-Z.,&@:;!#-= ]+$";
AppFormGroup.ALL_PATTERN = "(.*?)";
AppFormGroup.DATA_PATTERN = "[\\w\\d\\s.,&@:;!#-=]*";
AppFormGroup.DECIMAL_PATTERN = "(\\d+(\\.\\d{1,2})?)";
AppFormGroup.NUMBER_PATTERN = "[0-9]*$";
AppFormGroup.HSN_PATTERN = "([0-9]{2,2}|[0-9]{4,4}|[0-9]{6,6}|[0-9]{8,8})";
//static NUMBER_PATTERN: string = '[1-9]?\d';
//static DATE_PATTERN: string = '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(T?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';
AppFormGroup.DATE_PATTERN = "[\\w\\d\\s.,&@:;!#-=]*";
AppFormGroup.ALFA_NUM_DES_SPACE_PATTERN = "^[0-9a-zA-Z.,&@:;!#-= ]+$";
AppFormGroup.ALFA_NUM_DES_SPACE_HIFEN_PATTERN = "^[A-Za-z0-9? ,_-]+$";
AppFormGroup.ALFA_NUM_PATTERN = "^[a-zA-Z0-9]+";
AppFormGroup.IFSC_CODE_PATTERN = "^[A-Za-z]{4}0[A-Z0-9a-z]{6}$";
AppFormGroup.ZIP_CODE_PATTERN = "([1-9])([0-9]){5}$";
AppFormGroup.GST_CODE_PATTERN = "^([0][1-9]|[1-2][0-9]|[0-9][1-9])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$";
AppFormGroup.PAN_NO_PATTERN = "[A-Z|a-z]{3}(p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G)[A-Z|a-z][0-9]{4}[A-Z|a-z]$";
AppFormGroup.MOBILE_NO_PATTERN = "^[6-9][0-9]{9}$";
//static BUSI_NAME_PATTERN: string = '([A-Za-z])+( [A-Za-z]+)';
AppFormGroup.BUSI_NAME_PATTERN = "^[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%! ]*$";
AppFormGroup.PHONE_NO_PATTERN = "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}";
AppFormGroup.ALFA_SPACE_PATTERN = "[a-zA-Z0-9_ ]*$";
AppFormGroup.PIN_CODE_PATTERN = "^[1-9][0-9]{5}$";
//# sourceMappingURL=app.form.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/app.datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDataTableComponent = (function () {
    function AppDataTableComponent() {
        this.loadingIndicator = true;
        this.selectedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tempData = [];
    }
    AppDataTableComponent.prototype.ngOnInit = function () {
    };
    AppDataTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes['dataRows'] && changes['dataRows'].currentValue.length > 0) {
            //this.temp = [ ...this.dataRows ];
            this.displayData(this.dataRows.slice());
        }
    };
    AppDataTableComponent.prototype.dataRowValue = function (row, item) {
        if (!item)
            return '';
        if (item && item.indexOf('.') < 0)
            return row[item];
        var splitItems = item.split('.');
        var length = splitItems.length;
        switch (length) {
            case 2: {
                if (row[splitItems[0]]) {
                    return row[splitItems[0]][splitItems[1]];
                }
                return '';
            }
            case 3: {
                if (row[splitItems[0]]) {
                    if (row[splitItems[0]][splitItems[1]]) {
                        return row[splitItems[0]][splitItems[1]][splitItems[2]];
                    }
                }
                return '';
            }
            case 4: {
                if (row[splitItems[0]]) {
                    if (row[splitItems[0]][splitItems[1]]) {
                        if (row[splitItems[0]][splitItems[1]][splitItems[2]]) {
                            return row[splitItems[0]][splitItems[1]][splitItems[2]][splitItems[3]];
                        }
                    }
                }
                return '';
            }
            default: return '';
        }
    };
    AppDataTableComponent.prototype.displayData = function (dataList) {
        var tempData = [];
        var data = {};
        for (var _i = 0, dataList_1 = dataList; _i < dataList_1.length; _i++) {
            var item = dataList_1[_i];
            data = {};
            for (var _a = 0, _b = this.dataColumns; _a < _b.length; _a++) {
                var keyItem = _b[_a];
                if (keyItem['name']) {
                    data[keyItem.prop] = this.dataRowValue(item, keyItem.prop);
                }
                else {
                    data['img'] = this.dataRowValue(item, keyItem.img);
                }
            }
            tempData.push(data);
        }
        this.tempData = tempData;
        this.filterData = tempData.slice();
    };
    AppDataTableComponent.prototype.onSelect = function (item) {
        this.selectedData.emit(item);
    };
    AppDataTableComponent.prototype.updateFilter = function (event) {
        var value = (event.target.value ? event.target.value.toLowerCase() : null);
        var temp = this.filterData.filter(function (it) {
            if (value && value != "") {
                // for(let column of this.dataColumns){
                //     let item = column.prop ? column.prop : null;
                //      console.log(it);
                //     let data = this.dataRowValue(it, item);
                //     console.log(data);
                //     if(data.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                //         return true;
                //     } else {
                //         return false;
                //     }
                // console.log(column);
                // console.log(item);
                // if(item && !column.hidden && item.indexOf('.') > 0 ) {
                //      const splitItems: any = item.split('.');
                //      if(splitItems.length == 2){
                //         if(it[splitItems[0]][splitItems[1]].toString().toLowerCase().indexOf(value.toLowerCase()) > -1){
                //             return true;
                //           }
                //      } else {
                //          return true;
                //      }
                //     // if(it[splitItems[0]] === 'Object'){
                // } else {
                //     if (item && it[item].toString().toLowerCase().indexOf(value.toLowerCase()) > -1) {
                //         return true;
                //     }
                // }
                //  }
                for (var item in it) {
                    if (item != 'img') {
                        if (it[item].toString().toLowerCase().indexOf(value.toLowerCase()) > -1) {
                            return true;
                        }
                    }
                }
                //return true;
            }
            else {
                return true;
            }
            return false;
        });
        // update the rows
        this.tempData = temp.slice();
    };
    return AppDataTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AppDataTableComponent.prototype, "loadingIndicator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AppDataTableComponent.prototype, "dataColumns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AppDataTableComponent.prototype, "dataRows", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AppDataTableComponent.prototype, "selectedData", void 0);
AppDataTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datatable',
        styles: [' [hidden] { display: none !important; }'],
        template: "\n        <aside  class=\"padding-side\" >\n           <div  class=\"row center-xs\">\n            <md-toolbar class=\"col-xs-12 col-sm-6\">\n            <input\n               type='text'\n               class=\"filter-search\"\n              placeholder='Search'\n              (keyup)='updateFilter($event)'\n            />\n          </md-toolbar>\n        </div>\n            <md-card *ngFor=\"let eachRow of tempData\" style=\"margin-bottom: 1rem\">\n                <div (click)=\"onSelect(eachRow)\">\n                    <div *ngIf=\"eachRow['img']\" style=\"float: left; margin-right: 1rem; \">\n                        <img src=\"{{eachRow['img']}}\" height=100px width=100px>\n                    </div>\n                    <div class=\"flex-container\">\n                       <div *ngFor=\"let eachColumn of dataColumns\" class=\"flex-item\" [hidden]=\" (!eachColumn.name) || eachColumn.hidden\">\n                            <div class=\"mpair\">\n                                <div>{{eachColumn.name}}</div>\n                                <div>{{eachRow[eachColumn.prop]}}</div>\n                            </div>\n                        </div>                 \n                    </div>\n\n                </div>\n            </md-card>\n            <p></p>\n        </aside>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppDataTableComponent);

var _a;
//# sourceMappingURL=app.datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/app.imgupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppImgUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppImgUploadComponent = AppImgUploadComponent_1 = (function () {
    function AppImgUploadComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(AppImgUploadComponent.prototype, "placeholder", {
        get: function () {
            return this._placeHolderSafe;
        },
        enumerable: true,
        configurable: true
    });
    AppImgUploadComponent.prototype.imgChange = function () {
        if (!this.innerValue) {
            this.innerValue = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzI4MzUzRDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHgxPSIyNSIgeTE9IjIiIHgyPSI0MyIgeTI9IjIwIi8+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMyODM1M0Q7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNNDMsMjB2MjQuNQoJYzAsMS45LTEuNiwzLjUtMy41LDMuNWgtMjlDOC42LDQ4LDcsNDYuNCw3LDQ0LjV2LTM5QzcsMy42LDguNiwyLDEwLjUsMkgyNSIvPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMjgzNTNEO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTQzLDIwSDI4LjUKCWMtMS45LDAtMy41LTEuNi0zLjUtMy41VjIiLz4KPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzI4MzUzRDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHgxPSIyNSIgeTE9IjM1LjMiIHgyPSIyNSIgeTI9IjI3LjMiLz4KPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzI4MzUzRDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHgxPSIyMC45IiB5MT0iMzAuMyIgeDI9IjI1LjEiIHkyPSIyNi4xIi8+CjxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMyODM1M0Q7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB4MT0iMjkuMyIgeTE9IjMwLjMiIHgyPSIyNS4xIiB5Mj0iMjYuMSIvPgo8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMjgzNTNEO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgeDE9IjE2LjkiIHkxPSIzNS4zIiB4Mj0iMTYuOSIgeTI9IjQwIi8+CjxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMyODM1M0Q7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB4MT0iMzMuMSIgeTE9IjM1LjMiIHgyPSIzMy4xIiB5Mj0iNDAiLz4KPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzI4MzUzRDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHgxPSIxNi45IiB5MT0iNDAiIHgyPSIzMy4xIiB5Mj0iNDAiLz4KPC9zdmc+Cg==";
        }
        this._placeHolderSafe = this.sanitizer.bypassSecurityTrustUrl(this.innerValue);
    };
    AppImgUploadComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.imgChange();
        }
    };
    AppImgUploadComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AppImgUploadComponent.prototype.registerOnTouched = function () { };
    AppImgUploadComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    AppImgUploadComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.propagateChange(myReader.result);
            _this.innerValue = myReader.result;
            _this.imgChange();
        };
        myReader.readAsDataURL(file);
    };
    return AppImgUploadComponent;
}());
AppImgUploadComponent = AppImgUploadComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-imgupload',
        template: "<div style=\"position: relative; left: 0; top: 0; width: 150px; height: 150px;\">\n                  <img  alt=\"placeholder\" [src]=\"placeholder\" style=\"position: relative; top: 0; left: 0; width: inherit;\"/>\n                </div>\n               <input type=\"file\" class=\"upload\" accept=\"*\" (change)=\"changeListener($event)\">  \n              ",
        styles: [''],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */], useExisting: AppImgUploadComponent_1, multi: true }
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], AppImgUploadComponent);

var AppImgUploadComponent_1, _a;
//# sourceMappingURL=app.imgupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/base.report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_entities_web_report_filter_entity__ = __webpack_require__("../../../../../src/app/entities/web-report-filter.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseReportComponent = (function () {
    function BaseReportComponent(restService) {
        this.restService = restService;
        // companyInfo: any;
        this.reportFilter = new __WEBPACK_IMPORTED_MODULE_0_app_entities_web_report_filter_entity__["a" /* WebReportFilter */]();
        this.Date = new Date();
    }
    // this.companyInfo = Storage.getSessionUser().company;
    BaseReportComponent.prototype.getDS = function (reportFilter) {
        var fromDate;
        var toDate;
        var params = "?";
        params += reportFilter.report;
        var month;
        if (reportFilter.year > 0) {
            // for the reports ---income&expense, sales, Expenses Types----------//
            reportFilter.month = this.Date.getMonth() + 1;
            fromDate = reportFilter.year + "-" + reportFilter.month + "-01";
            reportFilter.month = this.Date.getMonth();
            if (reportFilter.month == 0) {
                reportFilter.month = 12;
                toDate = reportFilter.year + "-" + reportFilter.month + "-31";
            }
            else {
                toDate = reportFilter.year + 1 + "-" + reportFilter.month + "-31";
            }
            reportFilter.month = 0;
            reportFilter.year = 0;
            // console.log("from date is " + fromDate);
            // console.log("to date is " + toDate);
        }
        else if (reportFilter.month > 0) {
            // for the reports ---receivables, payables, stocks----------//
            this.currentYear = this.Date.getFullYear();
            reportFilter.year = this.currentYear - 1;
            fromDate = reportFilter.year + "-" + reportFilter.month + "-01";
            toDate = reportFilter.year + "-" + reportFilter.month + "-31";
            reportFilter.year = 0;
            // console.log("from date is " + fromDate);
            // console.log("to date is " + toDate);
        }
        else {
            //-------- for default reports ---------------//
            this.currentYear = this.Date.getFullYear();
            reportFilter.year = this.currentYear - 1;
            reportFilter.month = this.Date.getMonth() + 1;
            fromDate = reportFilter.year + "-" + reportFilter.month + "-01";
            reportFilter.year = this.Date.getFullYear();
            reportFilter.month = this.Date.getMonth();
            if (reportFilter.month == 0) {
                reportFilter.month = 12;
                toDate = reportFilter.year - 1 + "-" + reportFilter.month + "-31";
            }
            else {
                toDate = reportFilter.year + "-" + reportFilter.month + "-31";
            }
            reportFilter.month = 0;
            reportFilter.year = 0;
            // console.log("from date is " + fromDate);
            // console.log("to date is " + toDate);
        }
        params += "&fromDate=" + fromDate + "&toDate=" + toDate;
        return this.restService.webReports(params);
    };
    return BaseReportComponent;
}());
BaseReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_rest_service__["a" /* RestService */]) === "function" && _a || Object])
], BaseReportComponent);

var _a;
//# sourceMappingURL=base.report.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/createsupplierdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_suppliermanagement__ = __webpack_require__("../../../../../src/app/entities/suppliermanagement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_supplier_form__ = __webpack_require__("../../../../../src/app/forms/supplier.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSupplierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateSupplierComponent = (function () {
    function CreateSupplierComponent(dialogRef, appService, restService) {
        this.dialogRef = dialogRef;
        this.appService = appService;
        this.restService = restService;
        this.myForm = __WEBPACK_IMPORTED_MODULE_4__forms_supplier_form__["a" /* SupplierFormGroup */].init();
        this.stateList = [];
        this.filteredStates = [];
        this.supplierManagement = new __WEBPACK_IMPORTED_MODULE_1__entities_suppliermanagement__["a" /* SupplierManagement */]();
        this.supplierManagement.company.id = this.appService.getBranch().id;
        __WEBPACK_IMPORTED_MODULE_4__forms_supplier_form__["a" /* SupplierFormGroup */].details(this.myForm);
        __WEBPACK_IMPORTED_MODULE_4__forms_supplier_form__["a" /* SupplierFormGroup */].address(this.myForm);
    }
    CreateSupplierComponent.prototype.ngOnInit = function () {
        this.stateLoad();
    };
    CreateSupplierComponent.prototype.stateLoad = function () {
        var _this = this;
        this.restService
            .dataloadFromFile("./assets/json/common.json")
            .subscribe(function (results) {
            _this.stateList = results["stateList"];
        });
    };
    CreateSupplierComponent.prototype.filterStates = function (val) {
        console.log(val);
        this.filteredStates =
            val && val != ""
                ? this.stateList.filter(function (s) { return s.value.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
                : this.stateList;
    };
    CreateSupplierComponent.prototype.save = function () {
        var _this = this;
        this.restService
            .supplierSave(this.supplierManagement)
            .subscribe(function (results) {
            _this.supplierManagement = results;
            _this.dialogRef.closeAll();
            _this.appService.showMessage("Saved successfully.");
            _this.appService.navigate("purchaseorder/add", []);
            _this.myForm.reset();
        });
    };
    return CreateSupplierComponent;
}());
CreateSupplierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-createsupplier",
        template: "\n    <div id=\"page-header\" fxLayoutAlign=\"center center\">\n      <h2>New Supplier</h2>\n    </div>\n    <aside>\n      <div id=\"page-content\" style=\"margin: 20px 0;\">\n        <form [formGroup]=\"myForm\" novalidate autocomplete=\"off\">\n          <div class=\"row\">\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                placeholder=\"First Name\"\n                required\n                [formControl]=\"myForm.controls.supplier_firstName\"\n                [(ngModel)]=\"supplierManagement.firstName\"\n                style=\"text-transform: capitalize\"\n              />\n              <md-hint>\n                <form-messages [control]=\"myForm.controls.supplier_firstName\">\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                placeholder=\"Company Name\"\n                required\n                [formControl]=\"myForm.controls.supplier_companyName\"\n                [(ngModel)]=\"supplierManagement.companyName\"\n                style=\"text-transform: capitalize\"\n              />\n              <md-hint>\n                <form-messages [control]=\"myForm.controls.supplier_companyName\">\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                required\n                placeholder=\"Mobile No.\"\n                [formControl]=\"myForm.controls.supplier_mobile\"\n                [(ngModel)]=\"supplierManagement.mobileNumber\"\n              />\n              <md-hint>\n                <form-messages [control]=\"myForm.controls.supplier_mobile\">\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                required\n                placeholder=\"Email\"\n                [formControl]=\"myForm.controls.supplier_email\"\n                [(ngModel)]=\"supplierManagement.emailId\"\n              />\n              <md-hint>\n                <form-messages [control]=\"myForm.controls.supplier_email\">\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                placeholder=\"Address Lane\"\n                [formControl]=\"myForm.controls.supplier_address_lane\"\n                [(ngModel)]=\"supplierManagement.address.lane\"\n                style=\"text-transform: capitalize\"\n              />\n              <md-hint>\n                <form-messages\n                  [control]=\"myForm.controls.supplier_address_lane\"\n                >\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                placeholder=\"Area\"\n                [formControl]=\"myForm.controls.supplier_address_area\"\n                [(ngModel)]=\"supplierManagement.address.area\"\n                style=\"text-transform: capitalize\"\n              />\n              <md-hint>\n                <form-messages\n                  [control]=\"myForm.controls.supplier_address_area\"\n                >\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                placeholder=\"City\"\n                [formControl]=\"myForm.controls.supplier_address_city\"\n                [(ngModel)]=\"supplierManagement.address.city\"\n                style=\"text-transform: capitalize\"\n                required\n              />\n              <md-hint>\n                <form-messages\n                  [control]=\"myForm.controls.supplier_address_city\"\n                >\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                required\n                placeholder=\"Choose State\"\n                [formControl]=\"myForm.controls.supplier_address_state\"\n                [(ngModel)]=\"supplierManagement.address.state\"\n                [mdAutocomplete]=\"address\"\n                (focus)=\"filterStates(null)\"\n                (keyup)=\"filterStates($event.target.value)\"\n              />\n              <md-autocomplete #address=\"mdAutocomplete\">\n                <md-option\n                  *ngFor=\"let option of filteredStates\"\n                  [value]=\"option.value\"\n                >\n                  {{ option.value }}\n                </md-option>\n              </md-autocomplete>\n              <md-hint>\n                <form-messages\n                  [control]=\"myForm.controls.supplier_address_state\"\n                >\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"col-xs-6 padding-side\">\n              <input\n                mdInput\n                placeholder=\"Pincode\"\n                [formControl]=\"myForm.controls.supplier_address_zipCode\"\n                [(ngModel)]=\"supplierManagement.address.zipCode\"\n              />\n              <md-hint>\n                <form-messages\n                  [control]=\"myForm.controls.supplier_address_zipCode\"\n                >\n                </form-messages>\n              </md-hint>\n            </md-input-container>\n          </div>\n        </form>\n\n        <button\n          md-raised-button\n          color=\"accent\"\n          [disabled]=\"!myForm.valid\"\n          (click)=\"save()\"\n          style=\"float: right;\"\n        >\n          Save\n        </button>\n      </div>\n    </aside>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_rest_service__["a" /* RestService */]) === "function" && _c || Object])
], CreateSupplierComponent);

var _a, _b, _c;
//# sourceMappingURL=createsupplierdialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/dynamic.chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicChartComponent = (function () {
    function DynamicChartComponent() {
        this.single = [
            {
                "name": "Janauary",
                "value": 100
            },
            {
                "name": "Feb",
                "value": 200
            },
            {
                "name": "March",
                "value": 150
            },
            {
                "name": "April",
                "value": 175
            },
            {
                "name": "May",
                "value": 125
            }
        ];
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        // this.single: any[];
        // this.multi: any[];
        this.view = [500, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        // autoScale = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // Object.assign(this, { single })
    }
    DynamicChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return DynamicChartComponent;
}());
DynamicChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dynamic-chart',
        template: "\n  <ngx-charts-bar-vertical\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [gradient]=\"gradient\"\n  [xAxis]=\"showXAxis\"\n  [yAxis]=\"showYAxis\"\n  [legend]=\"showLegend\"\n  [showXAxisLabel]=\"showXAxisLabel\"\n  [showYAxisLabel]=\"showYAxisLabel\"\n  [xAxisLabel]=\"xAxisLabel\"\n  [yAxisLabel]=\"yAxisLabel\"\n  [barPadding]=\"10\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-bar-vertical>",
        styles: [".chart-wrapper {\n  height: 200px;width:200px;\n\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], DynamicChartComponent);

//# sourceMappingURL=dynamic.chart.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/dynamic2.chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dynamic2ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dynamic2ChartComponent = (function () {
    function Dynamic2ChartComponent() {
        this.single = [
            {
                "name": "Janauary",
                "value": 100
            },
            {
                "name": "Feb",
                "value": 200
            },
            {
                "name": "March",
                "value": 150
            },
            {
                "name": "April",
                "value": 175
            },
            {
                "name": "May",
                "value": 125
            }
        ];
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        this.view = [500, 300];
        // options
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // Object.assign(this, {single, multi})   
    }
    Dynamic2ChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return Dynamic2ChartComponent;
}());
Dynamic2ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dynamic2-chart',
        template: "\n  <ngx-charts-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [legend]=\"showLegend\"\n  [explodeSlices]=\"explodeSlices\"\n  [labels]=\"showLabels\"\n  [doughnut]=\"doughnut\"\n  [gradient]=\"gradient\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-pie-chart>"
    }),
    __metadata("design:paramtypes", [])
], Dynamic2ChartComponent);

//# sourceMappingURL=dynamic2.chart.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/form.messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_validation_service__ = __webpack_require__("../../../../../src/app/shared/service/validation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormMessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormMessagesComponent = (function () {
    function FormMessagesComponent() {
    }
    Object.defineProperty(FormMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__service_validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return FormMessagesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]) === "function" && _a || Object)
], FormMessagesComponent.prototype, "control", void 0);
FormMessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-messages',
        template: "<div class='error-message' *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>",
        styles: ['.error-message { color: red; font-size: 100% !important}']
    }),
    __metadata("design:paramtypes", [])
], FormMessagesComponent);

var _a;
//# sourceMappingURL=form.messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_apex_service__ = __webpack_require__("../../../../../src/app/shared/service/apex.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressBarComponent = (function () {
    function ProgressBarComponent(apexService) {
        var _this = this;
        this.apexService = apexService;
        this.apexService.loadEvent().subscribe(function (result) {
            setTimeout(function () {
                _this.showLoading = result;
            }, 10);
        });
        // this.cd.detectChanges();
    }
    return ProgressBarComponent;
}());
ProgressBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "apex-progress-bar",
        template: "\n    <div class=\"block-page\" *ngIf=\"showLoading\">\n      <div class=\"loading\">\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n      </div>\n    </div>\n  ",
        styles: [
            "\n      .loading {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        z-index: 1000;\n      }\n      .loading-bar {\n        display: inline-block;\n        width: 4px;\n        height: 18px;\n        border-radius: 4px;\n        animation: loading 1s ease-in-out infinite;\n      }\n      .loading-bar:nth-child(1) {\n        background-color: #3498db;\n        animation-delay: 0;\n      }\n      .loading-bar:nth-child(2) {\n        background-color: #c0392b;\n        animation-delay: 0.09s;\n      }\n      .loading-bar:nth-child(3) {\n        background-color: #f1c40f;\n        animation-delay: 0.18s;\n      }\n      .loading-bar:nth-child(4) {\n        background-color: #27ae60;\n        animation-delay: 0.27s;\n      }\n\n      @keyframes loading {\n        0% {\n          transform: scale(1);\n        }\n        20% {\n          transform: scale(1, 2.2);\n        }\n        40% {\n          transform: scale(1);\n        }\n      }\n      .block-page {\n        background-color: rgba(0, 0, 0, 0.7);\n        top: 0px;\n        bottom: 0px;\n        letf: 0px;\n        right: 0px;\n        position: fixed;\n        height: 100vh;\n        width: 100vw;\n        z-index: 999;\n      }\n    "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_apex_service__["a" /* ApexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_apex_service__["a" /* ApexService */]) === "function" && _a || Object])
], ProgressBarComponent);

var _a;
//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/component/radar.chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadarChartComponent = (function () {
    function RadarChartComponent() {
        this.single = [
            {
                "name": "Janauary",
                "value": 100
            },
            {
                "name": "Feb",
                "value": 200
            },
            {
                "name": "March",
                "value": 150
            }
        ];
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        this.view = [500, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        // szz
    }
    RadarChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return RadarChartComponent;
}());
RadarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'radar-chart',
        template: "\n  \n  <ngx-charts-line-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"multi\"\n  [gradient]=\"gradient\"\n  [xAxis]=\"showXAxis\"\n  [yAxis]=\"showYAxis\"\n  [legend]=\"showLegend\"\n  [showXAxisLabel]=\"showXAxisLabel\"\n  [showYAxisLabel]=\"showYAxisLabel\"\n  [xAxisLabel]=\"xAxisLabel\"\n  [yAxisLabel]=\"yAxisLabel\"\n  [autoScale]=\"autoScale\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-line-chart>\n"
    }),
    __metadata("design:paramtypes", [])
], RadarChartComponent);

//# sourceMappingURL=radar.chart.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/apex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApexService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApexService = (function () {
    function ApexService(_iconRegistry, _domSanitizer, _snackBarService) {
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this._snackBarService = _snackBarService;
        this.sessionUserEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.menuEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.loaderEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this._loaderSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    ApexService.prototype.showMessage = function (message) {
        //this._snackBarService.open(message, 'x', { duration: 99999 });
        this._snackBarService.open(message, "x", { duration: 6000 });
        //  snackBarRef.onAction().subscribe( data => {console.log(data) ; });
    };
    ApexService.prototype.showMessages = function (message, duration) {
        this._snackBarService.open(message, "x", { duration: duration });
        //  snackBarRef.onAction().subscribe( data => {console.log(data) ; });
    };
    ApexService.prototype.loadEvent = function () {
        return this._loaderSubject.asObservable();
    };
    ApexService.prototype.showLoader = function (show) {
        this._loaderSubject.next(show);
    };
    ApexService.prototype.showSpinner = function (show) {
        this._loaderSubject.next(show);
    };
    ApexService.prototype.sessionUserEmit = function (sessionUser) {
        this.sessionUserEvent.emit(sessionUser);
    };
    ApexService.prototype.menuEmit = function (menu) {
        this.menuEvent.next(menu);
    };
    return ApexService;
}());
ApexService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MdSnackBar */]) === "function" && _c || Object])
], ApexService);

var _a, _b, _c;
//# sourceMappingURL=apex.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_service__ = __webpack_require__("../../../../../src/app/shared/service/apex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {DomSanitizer} from '@angular/platform-browser';
var AppService = (function () {
    function AppService(router, route, apexService) {
        this.router = router;
        this.route = route;
        this.apexService = apexService;
    }
    AppService.prototype.getNativeWindow = function () {
        return window;
    };
    AppService.prototype.navigate = function (url, params) {
        console.log("url::::::::: " + url);
        if (params) {
            var param = {};
            if (params instanceof Array) {
                for (var i = 0; i < params.length; i++) {
                    for (var key in params[i]) {
                        param[key] = params[i][key];
                    }
                }
            }
            else {
                param = params;
            }
            var navigationExtras = {
                queryParams: param
            };
            this.router.navigate([url], navigationExtras);
        }
        else {
            this.router.navigate([url]);
        }
    };
    AppService.prototype.getParam = function (key) {
        // console.log(this.route.snapshot);
        //  this.route.params.subscribe(params => {console.log( parseInt(params['id'], 10) )});
        return this.route.snapshot.queryParams[key];
    };
    AppService.prototype.isAccess = function (path) {
        return true;
    };
    //isAccess(path: String){
    //    let returnValue = false;
    //    for(let menu of Util.RoleMenu()){
    //        if(menu.link.toLowerCase() == path.toLowerCase()) {
    //            returnValue =  true;
    //            break;
    //        }
    //    }
    //    return returnValue;
    //}
    AppService.prototype.getLocalItem = function (key) {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].getLocalItem(key);
    };
    AppService.prototype.setLocalItem = function (key, value) {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setLocalItem(key, value);
    };
    AppService.prototype.getSessionItem = function (key) {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].getSessionItem(key);
    };
    AppService.prototype.setSessionItem = function (key, value) {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setSessionItem(key, value);
    };
    AppService.prototype.showMessage = function (message) {
        this.apexService.showMessage(message);
    };
    AppService.prototype.sessionUserEmit = function (data) {
        this.apexService.sessionUserEmit(data);
    };
    AppService.prototype.getBranch = function () {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].getBranch();
    };
    AppService.prototype.getSessionUser = function () {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].getSessionUser();
    };
    AppService.prototype.getcrdnDocTypes = function () {
        return [
            { name: "D - Debit Note", value: "D" },
            { name: "C - Credit Note", value: "C" }
        ];
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__apex_service__["a" /* ApexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_service__["a" /* ApexService */]) === "function" && _c || Object])
], AppService);

var _a, _b, _c;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__("../../../../../src/app/shared/utils/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_service__ = __webpack_require__("../../../../../src/app/shared/service/apex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpService = (function () {
    function HttpService(http, apexService) {
        this.http = http;
        this.apexService = apexService;
        this.PDF_TYPE_PRINT = "PRINT";
        this.PDF_TYPE_OPEN = "OPEN";
        this.PDF_TYPE_DOWNLOAD = "DOWNLOAD";
        this.CSV_TYPE_DOWNLOAD = "CSV";
        this.XLSX_TYPE_DOWNLOAD = "XLSX";
        this.host = __WEBPACK_IMPORTED_MODULE_6_app_common_props__["a" /* Prop */].API_ENDPOINT;
        this.CONTENT_TYPE = "application/json; charset=utf-8";
        this.http = http;
        this.appendHeaders();
    }
    HttpService.prototype.createAuthorizationHeader = function () {
        var jwt = this.getJwt();
        if (jwt) {
            //  this.headers.append('Accept', jwt);
        }
        else {
            this.headers.append("Accept", "*/*");
        }
        //console.log(this.headers);
    };
    HttpService.prototype.appendHeaders = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", this.CONTENT_TYPE);
        this.createAuthorizationHeader();
    };
    HttpService.prototype.restCall = function (reqBody, endPoint) {
        if (endPoint === void 0) { endPoint = null; }
        // if(reqBody.cmd != '' && !reqBody.reqData.cmd){
        //     reqBody.reqData.cmd = reqBody.cmd;
        // }
        if (reqBody.showLoader && reqBody.showLoader === true) {
            this.showLoader(true);
        }
        var jwt = this.getJwt();
        // if(jwt == null ){
        this.appendHeaders();
        //  }
        // if( (this.headers.get('Accept').length < 5) && jwt) {
        //   this.headers.delete('Accept');
        //  this.headers.append('Accept', jwt);
        // }
        //  this.appendHeaders();
        return this.restService(reqBody, endPoint);
    };
    HttpService.prototype.restService = function (reqBody, endPoint) {
        if (endPoint === void 0) { endPoint = null; }
        //alert(reqBody.type);
        if (reqBody.type == "GET") {
            return this.getMethod(reqBody, endPoint);
        }
        else if (reqBody.type == "POST") {
            return this.postMethod(reqBody, endPoint);
        }
        else if (reqBody.type == "PUT") {
            return this.putMethod(reqBody, endPoint);
        }
        else if (reqBody.type == "DELETE") {
            return this.deleteMethod(reqBody, endPoint);
        }
    };
    HttpService.prototype.restServiceForfile = function (reqBody) {
        var _this = this;
        var url = reqBody.url;
        return this.http
            .get(url, { headers: this.headers })
            .map(function (resp) {
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json()) {
                _this.showLoader(false);
                return resp.json();
            }
            else {
                _this.showLoader(false);
                _this.errorMessage(resp.json());
                return null;
            }
        });
    };
    HttpService.prototype.getMethod = function (reqBody, endPoint) {
        var _this = this;
        if (endPoint === void 0) { endPoint = null; }
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(reqBody.reqData ? reqBody.reqData.data : {});
        var url = this.API_ENDPOINT + reqBody.url + paramString;
        if (endPoint != null)
            url = endPoint + reqBody.url + paramString;
        return this.http
            .get(url, { headers: this.headers })
            .map(function (resp) {
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json().status == 1) {
                _this.showLoader(false);
                return resp.json().data;
            }
            else {
                _this.showLoader(false);
                _this.errorMessage(resp.json().error);
                return null;
            }
        });
    };
    HttpService.prototype.get = function (url, data, loader) {
        this.apexService.showLoader(loader ? true : false);
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(data ? data.data : {});
        console.log(paramString);
        url = this.host + url + paramString;
        console.log(url);
        return this.http.get(url);
    };
    HttpService.prototype.postMethod = function (reqBody, endPoint) {
        var _this = this;
        if (endPoint === void 0) { endPoint = null; }
        var url = this.API_ENDPOINT + reqBody.url;
        if (endPoint != null)
            url = endPoint + reqBody.url;
        var $http = this.http.post(url, JSON.stringify(reqBody.reqData), {
            headers: this.headers
        });
        return $http.map(function (resp) {
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json().status == 1) {
                _this.showLoader(false);
                return resp.json().data;
            }
            else {
                _this.showLoader(false);
                _this.errorMessage(resp.json().error);
                return null;
            }
        }, function (error) {
            _this.showLoader(false);
            console.log("error Message :" + JSON.stringify(error));
        });
    };
    HttpService.prototype.putMethod = function (reqBody, endPoint) {
        var _this = this;
        if (endPoint === void 0) { endPoint = null; }
        var url = this.API_ENDPOINT + reqBody.url;
        if (endPoint != null)
            url = endPoint + reqBody.url;
        return this.http
            .put(url, JSON.stringify(reqBody.reqData), { headers: this.headers })
            .map(function (resp) {
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json().status == 1) {
                _this.showLoader(false);
                return resp.json().data;
            }
            else {
                _this.showLoader(false);
                _this.errorMessage(resp.json().error);
                return null;
            }
        }, function (error) {
            _this.showLoader(false);
            console.log("error Message :" + JSON.stringify(error));
        });
    };
    HttpService.prototype.deleteMethod = function (reqBody, endPoint) {
        var _this = this;
        if (endPoint === void 0) { endPoint = null; }
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(reqBody.reqData ? reqBody.reqData.data : {});
        var url = this.API_ENDPOINT + reqBody.url + paramString;
        if (endPoint != null)
            url = endPoint + reqBody.url + paramString;
        console.log(url);
        return this.http.delete(url).map(function (resp) {
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json().status == 1) {
                _this.showLoader(false);
                return resp.json().data;
            }
            else {
                _this.showLoader(false);
                _this.errorMessage(resp.json().error);
                return null;
            }
        });
    };
    HttpService.prototype.authMethod = function (reqBody) {
        var _this = this;
        if (reqBody.showLoader && reqBody.showLoader === true) {
            this.showLoader(true);
        }
        if (reqBody.cmd != "" && !reqBody.reqData.cmd) {
            reqBody.reqData.cmd = reqBody.cmd;
        }
        var url = this.API_ENDPOINT + reqBody.url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", this.CONTENT_TYPE);
        return this.http
            .post(url, JSON.stringify(reqBody.reqData), { headers: this.headers })
            .map(function (resp) {
            console.log(resp.json());
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json().status == 1) {
                return resp.json().data;
            }
            else {
                _this.errorMessage(resp.json().error);
                return null;
            }
        }, function (error) {
            console.log("error Message :" + JSON.stringify(error));
        });
    };
    HttpService.prototype.setSession = function (data) {
        __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setJWT(data.jwt);
        __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setSessionUser(data);
        __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setMenuList(data.menuList);
        __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setBranch(data.company);
        this.apexService.sessionUserEmit(data);
    };
    HttpService.prototype.authMethod2 = function (reqBody) {
        var _this = this;
        if (reqBody.showLoader && reqBody.showLoader === true) {
            this.showLoader(true);
        }
        if (reqBody.cmd != "" && !reqBody.reqData.cmd) {
            reqBody.reqData.cmd = reqBody.cmd;
        }
        var url = this.API_ENDPOINT + reqBody.url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", this.CONTENT_TYPE);
        return this.http.get(url, { headers: this.headers }).map(function (resp) {
            if (reqBody.showLoader && reqBody.showLoader === true) {
                _this.showLoader(false);
            }
            if (resp.json().status == 1) {
                __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setJWT(resp.json().data.jwt);
                __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setSessionUser(resp.json().data.account);
                __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setMenuList(resp.json().data.menuList);
                __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].setBranch(resp.json().data.company);
                _this.apexService.sessionUserEmit(resp.json().data.account);
                // this.createAuthorizationHeader();
                // console.log("check session----------------- "+resp.json().data.account);
                return resp.json().data.account;
            }
            else {
                _this.errorMessage(resp.json().error);
                return null;
            }
        }, function (error) {
            console.log("error Message :" + JSON.stringify(error));
        });
    };
    HttpService.prototype.getJwt = function () {
        return __WEBPACK_IMPORTED_MODULE_3__utils_storage__["a" /* Storage */].getJWT();
    };
    HttpService.prototype.report = function (reqBody) {
        var _this = this;
        this.showLoader(true);
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(reqBody.reqData ? reqBody.reqData.data : {});
        var url = this.API_ENDPOINT + reqBody.url + paramString;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.setRequestHeader("Content-type", _this.CONTENT_TYPE);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 0 || xhr.readyState == 4) {
                    _this.showLoader(false);
                    var data = JSON.parse(xhr.response);
                    if (data.status == 1) {
                        resolve(data.data);
                    }
                    else {
                        _this.errorMessage(data.error);
                        reject(data);
                    }
                }
            };
            xhr.send();
        });
    };
    HttpService.prototype.download = function (reqBody, fileName, type) {
        var _this = this;
        this.showLoader(true);
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(reqBody.reqData ? reqBody.reqData.data : {});
        var url = this.REPORT_URL + reqBody.url + paramString;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        //xhr.responseType = "blob";
        xhr.setRequestHeader("Content-type", this.CONTENT_TYPE);
        xhr.onload = function () {
            if (xhr.status === 200) {
                _this.showLoader(false);
                var blob = xhr.response;
                var checkMessage = null;
                try {
                    checkMessage = JSON.parse(blob);
                }
                catch (error) {
                    checkMessage = blob;
                }
                if (checkMessage && (checkMessage.status || checkMessage.status > -1)) {
                    _this.errorMessage(checkMessage);
                    return;
                }
                if (_this.PDF_TYPE_PRINT == type) {
                    _this.printPopup(blob);
                }
                else if (_this.PDF_TYPE_OPEN == type) {
                    _this.openPopup(blob);
                }
                else if (_this.PDF_TYPE_DOWNLOAD == type) {
                    _this.downloadPDF(blob, fileName);
                }
                else if (_this.CSV_TYPE_DOWNLOAD == type) {
                    _this.downloadCSV(blob, fileName);
                }
            }
        };
        xhr.send();
    };
    HttpService.prototype.downloadPDFReport = function (reqBody, fileName, type) {
        var _this = this;
        this.showLoader(true);
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(reqBody.reqData ? reqBody.reqData.data : {});
        var url = this.REPORT_URL + reqBody.url + paramString;
        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.setRequestHeader("Content-type", this.CONTENT_TYPE);
        xhr.onload = function () {
            if (xhr.status === 200) {
                _this.showLoader(false);
                var blob = xhr.response;
                var checkMessage = null;
                try {
                    checkMessage = JSON.parse(blob);
                }
                catch (error) {
                    checkMessage = blob;
                }
                if (checkMessage && (checkMessage.status || checkMessage.status > -1)) {
                    _this.errorMessage(checkMessage);
                    return;
                }
                if (_this.PDF_TYPE_PRINT == type) {
                    _this.printPopup(blob);
                }
                else if (_this.PDF_TYPE_OPEN == type) {
                    _this.openPopup(blob);
                }
                else if (_this.PDF_TYPE_DOWNLOAD == type) {
                    _this.downloadPDF(blob, fileName);
                }
                else if (_this.CSV_TYPE_DOWNLOAD == type) {
                    _this.downloadCSV(blob, fileName);
                }
            }
        };
        xhr.send();
    };
    HttpService.prototype.reportDownload = function (reqBody, fileName, type) {
        var _this = this;
        this.showLoader(true);
        var paramString = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* Util */].GetParamString(reqBody.reqData ? reqBody.reqData.data : {});
        var url = this.REPORT_URL + reqBody.url + paramString;
        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.setRequestHeader("Content-type", this.CONTENT_TYPE);
        xhr.onload = function () {
            if (xhr.status === 200) {
                _this.showLoader(false);
                var blob = xhr.response;
                var checkMessage = null;
                try {
                    checkMessage = JSON.parse(blob);
                }
                catch (error) {
                    checkMessage = blob;
                }
                if (checkMessage && (checkMessage.status || checkMessage.status > -1)) {
                    _this.errorMessage(checkMessage);
                    return;
                }
                if (_this.PDF_TYPE_PRINT == type) {
                    _this.printPopup(blob);
                }
                else if (_this.PDF_TYPE_OPEN == type) {
                    _this.openPopup(blob);
                }
                else if (_this.PDF_TYPE_DOWNLOAD == type) {
                    _this.downloadPDF(blob, fileName);
                }
                else if (_this.CSV_TYPE_DOWNLOAD == type) {
                    _this.downloadCSV(blob, fileName);
                }
                else if (_this.XLSX_TYPE_DOWNLOAD == type) {
                    _this.downloadXLSX(blob, fileName);
                }
            }
        };
        xhr.send();
    };
    HttpService.prototype.showLoader = function (show) {
        this.apexService.showLoader(show);
    };
    HttpService.prototype.showSpinner = function (show) {
        this.apexService.showSpinner(show);
    };
    HttpService.prototype.errorMessage = function (err) {
        var message = err.message ? err.message : err;
        message = message.error ? message.error : message;
        console.log(message);
        this.apexService.showMessage(message);
    };
    HttpService.prototype.printPopup = function (data) {
        //    console.log(data);
        // if(typeof cordova === 'undefined') {
        var frame1 = document.createElement("iframe");
        frame1.name = "frame1";
        frame1.style.position = "absolute";
        frame1.style.top = "-1000000px";
        document.body.appendChild(frame1);
        var frameDoc = frame1.contentWindow
            ? frame1.contentWindow
            : frame1.contentDocument["document"]
                ? frame1.contentDocument["document"]
                : frame1.contentDocument;
        frameDoc.document.open();
        frameDoc.document.write(data);
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            document.body.removeChild(frame1);
        }, 500);
        return false;
        // }else {
        //     cordova.plugins.printer.print(data, {duplex: 'long'}, function (res : any) {
        //         alert(res ? 'Done' : 'Canceled');
        //     });
        // }
    };
    HttpService.prototype.openPopup = function (data) {
        var innerContents = data;
        var popupWinindow = window.open("", "_blank", "width=850,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no");
        popupWinindow.document.open();
        popupWinindow.document.write(data);
        popupWinindow.document.close();
        return false;
    };
    HttpService.prototype.downloadPDF = function (data, fileName) {
        //var printDoc: jsPDF = new jsPDF();
        // printDoc.setFontSize(10);
        // printDoc.fromHTML(data, 10, 10, { width: 180 });
        // printDoc.save("invoice" + new Date().toISOString() + ".pdf");
        //popenPopup(data)
        // var blob = new Blob([data], { type: "application/pdf" });
        var blob = data;
        var link = document.createElement("a");
        if (link.download !== undefined) {
            // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        //window.open(data, "_blank", "fullscreen=yes");
        return false;
    };
    HttpService.prototype.downloadCSV = function (data, fileName) {
        var blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
        if (navigator.msSaveBlob) {
            // IE 10+
            navigator.msSaveBlob(blob, fileName);
        }
        else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
        return false;
    };
    HttpService.prototype.downloadXLSX = function (data, fileName) {
        var blob = new Blob([data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        if (navigator.msSaveBlob) {
            // IE 10+
            navigator.msSaveBlob(blob, fileName);
        }
        else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                console.log("URL:" + url);
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
        return false;
    };
    HttpService.prototype.fileUpload = function (reqBody) {
        var _this = this;
        this.showLoader(true);
        var url = this.REPORT_URL + reqBody.url;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 0 || xhr.readyState == 4) {
                    _this.showLoader(false);
                    var data = JSON.parse(xhr.response);
                    if (data.status == 1) {
                        resolve(data.data);
                    }
                    else {
                        _this.errorMessage(data.error);
                        reject(data);
                    }
                }
            };
            xhr.send(reqBody.reqData.data);
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__apex_service__["a" /* ApexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_service__["a" /* ApexService */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'pattern': 'Invalid Value',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'maxlength': "Max length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_apex_service__ = __webpack_require__("../../../../../src/app/shared/service/apex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_http_service__ = __webpack_require__("../../../../../src/app/shared/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_app_service__ = __webpack_require__("../../../../../src/app/shared/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_rest_service__ = __webpack_require__("../../../../../src/app/common/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_app_datatable_component__ = __webpack_require__("../../../../../src/app/shared/component/app.datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_app_imgupload_component__ = __webpack_require__("../../../../../src/app/shared/component/app.imgupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_form_messages_component__ = __webpack_require__("../../../../../src/app/shared/component/form.messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_pipes__ = __webpack_require__("../../../../../src/app/shared/utils/pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_dynamic_chart__ = __webpack_require__("../../../../../src/app/shared/component/dynamic.chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_dynamic2_chart__ = __webpack_require__("../../../../../src/app/shared/component/dynamic2.chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_radar_chart__ = __webpack_require__("../../../../../src/app/shared/component/radar.chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_invoice_DialogContentExampleDialogInvoices_component__ = __webpack_require__("../../../../../src/app/components/admin/invoice/DialogContentExampleDialogInvoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_services_pricing_service__ = __webpack_require__("../../../../../src/app/common/services/pricing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_createsupplierdialog_component__ = __webpack_require__("../../../../../src/app/shared/component/createsupplierdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_progress_bar_component__ = __webpack_require__("../../../../../src/app/shared/component/progress-bar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_apex_service__["a" /* ApexService */],
                __WEBPACK_IMPORTED_MODULE_6__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_7__service_app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_8__common_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_21__common_services_pricing_service__["a" /* PricingService */]
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_cdk__["_0" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["c" /* CovalentDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["d" /* CovalentSearchModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["e" /* CovalentExpansionPanelModule */],
            __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__["NgxChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["b" /* KeyValuesPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["c" /* DecodeURIPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["e" /* DateTimePipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["f" /* FlagPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["g" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["h" /* AmountPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["i" /* NumberToWordsPipe */],
            __WEBPACK_IMPORTED_MODULE_9__component_app_datatable_component__["a" /* AppDataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_23__component_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_form_messages_component__["a" /* FormMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_app_imgupload_component__["a" /* AppImgUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_16__component_dynamic_chart__["a" /* DynamicChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_dynamic2_chart__["a" /* Dynamic2ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_radar_chart__["a" /* RadarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_invoice_DialogContentExampleDialogInvoices_component__["a" /* DialogContentExampleDialogInvoices */],
            __WEBPACK_IMPORTED_MODULE_22__component_createsupplierdialog_component__["a" /* CreateSupplierComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_cdk__["_0" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["c" /* CovalentDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["d" /* CovalentSearchModule */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["b" /* KeyValuesPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["c" /* DecodeURIPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["e" /* DateTimePipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["f" /* FlagPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["g" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["h" /* AmountPipe */],
            __WEBPACK_IMPORTED_MODULE_12__utils_pipes__["i" /* NumberToWordsPipe */],
            __WEBPACK_IMPORTED_MODULE_11__component_form_messages_component__["a" /* FormMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_app_datatable_component__["a" /* AppDataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_23__component_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_app_imgupload_component__["a" /* AppImgUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_15__covalent_core__["e" /* CovalentExpansionPanelModule */],
            __WEBPACK_IMPORTED_MODULE_16__component_dynamic_chart__["a" /* DynamicChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_dynamic2_chart__["a" /* Dynamic2ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_radar_chart__["a" /* RadarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_invoice_DialogContentExampleDialogInvoices_component__["a" /* DialogContentExampleDialogInvoices */],
            __WEBPACK_IMPORTED_MODULE_22__component_createsupplierdialog_component__["a" /* CreateSupplierComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_22__component_createsupplierdialog_component__["a" /* CreateSupplierComponent */], __WEBPACK_IMPORTED_MODULE_20__components_admin_invoice_DialogContentExampleDialogInvoices_component__["a" /* DialogContentExampleDialogInvoices */]]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utils/pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("../../../../../src/app/shared/utils/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KeyValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CurrencyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AmountPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DecodeURIPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DateTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FlagPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NumberToWordsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, args, val) {
        var fields;
        var value;
        if (args) {
            fields = args;
            value = val;
        }
        if (!items)
            return [];
        //  if(!value || value.length < 3) return [];
        return items.filter(function (it) {
            if (value && value != "") {
                for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                    var item = fields_1[_i];
                    if (item.indexOf(".") > 0) {
                        var splitItems = item.split(".");
                        if (splitItems.length == 2) {
                            if (it[splitItems[0]][splitItems[1]]
                                .toString()
                                .toLowerCase()
                                .indexOf(value.toLowerCase()) > -1) {
                                return true;
                            }
                        }
                        else {
                            return true;
                        }
                        // if(it[splitItems[0]] === 'Object'){
                    }
                    else {
                        if (it[item]
                            .toString()
                            .toLowerCase()
                            .indexOf(value.toLowerCase()) > -1) {
                            return true;
                        }
                    }
                }
            }
            else {
                return true;
            }
            return false;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "filter"
    })
], FilterPipe);

var KeyValuesPipe = (function () {
    function KeyValuesPipe() {
    }
    KeyValuesPipe.prototype.transform = function (items, args) {
        var keys = [];
        var item = "";
        for (item in items) {
            keys.push({ key: item, value: items[item] });
        }
        return keys;
    };
    return KeyValuesPipe;
}());
KeyValuesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "keyvalues" })
], KeyValuesPipe);

var CurrencyPipe = (function () {
    function CurrencyPipe() {
    }
    CurrencyPipe.prototype.transform = function (value, args) {
        if (!value) {
            value = 0.0;
        }
        var sign = "";
        if (args && args[0]) {
            sign = args[0];
        }
        else {
            sign = sessionStorage.getItem("CurrencySign");
            if (!sign) {
                sign = "\u0024";
            }
        }
        var p = value.toFixed(2).split(".");
        return (sign +
            p[0]
                .split("")
                .reverse()
                .reduce(function (acc, num, i, orig) {
                return num + (i && !(i % 3) ? "," : "") + acc;
            }, "") +
            "." +
            p[1]);
    };
    return CurrencyPipe;
}());
CurrencyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "currency" })
], CurrencyPipe);

var AmountPipe = (function () {
    function AmountPipe() {
    }
    AmountPipe.prototype.transform = function (value, args) {
        if (!value) {
            value = 0.0;
        }
        // var sign = "";
        // if(args && args[0]){
        //     sign = args[0];
        // } else {
        //     sign = sessionStorage.getItem("CurrencySign");
        //     if(!sign){
        //        // sign="\u0024"
        //        sign = "";
        //     }
        // }
        var p = value.toFixed(2).split(".");
        return (p[0]
            .split("")
            .reverse()
            .reduce(function (acc, num, i, orig) {
            return num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
            "." +
            p[1]);
    };
    return AmountPipe;
}());
AmountPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "amount" })
], AmountPipe);

var DecodeURIPipe = (function () {
    function DecodeURIPipe() {
    }
    DecodeURIPipe.prototype.transform = function (value, args) {
        if (!value || value == "") {
            value = "";
        }
        else {
            value = decodeURIComponent(value.replace(/\+/g, " "));
        }
        return value;
    };
    return DecodeURIPipe;
}());
DecodeURIPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "decodeURI" })
], DecodeURIPipe);

var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].DateFormate(value);
    };
    return DatePipe;
}());
DatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "date" })
], DatePipe);

var DateTimePipe = (function () {
    function DateTimePipe() {
    }
    DateTimePipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].DateTimeFormate(value);
    };
    return DateTimePipe;
}());
DateTimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "datetime" })
], DateTimePipe);

var FlagPipe = (function () {
    function FlagPipe() {
    }
    FlagPipe.prototype.transform = function (value, args) {
        return value ? "Active" : "De-active";
    };
    return FlagPipe;
}());
FlagPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "flag" })
], FlagPipe);

var NumberToWordsPipe = (function () {
    function NumberToWordsPipe() {
        this.a = [
            "",
            "One ",
            "Two ",
            "Three ",
            "Four ",
            "Five ",
            "Six ",
            "Seven ",
            "Eight ",
            "Nine ",
            "Ten ",
            "Eleven ",
            "Twelve ",
            "Thirteen ",
            "Fourteen ",
            "Fifteen ",
            "Sixteen ",
            "Seventeen ",
            "Eighteen ",
            "Nineteen "
        ];
        this.b = [
            "",
            "",
            "Twenty",
            "Thirty",
            "Forty",
            "Fifty",
            "Sixty",
            "Seventy",
            "Eighty",
            "Ninety"
        ];
    }
    NumberToWordsPipe.prototype.transform = function (value, args) {
        if (value) {
            var num = Number(value);
            if (num) {
                if ((num = num.toString()).length > 9) {
                    return "We are not the Iron Bank, you can lower down the stakes :)";
                }
                var n = ("000000000" + num)
                    .substr(-9)
                    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
                if (!n) {
                    return "";
                }
                var str = "";
                str +=
                    Number(n[1]) !== 0
                        ? (this.a[Number(n[1])] ||
                            this.b[n[1][0]] + " " + this.a[n[1][1]]) + "Crore "
                        : "";
                str +=
                    Number(n[2]) !== 0
                        ? (this.a[Number(n[2])] ||
                            this.b[n[2][0]] + " " + this.a[n[2][1]]) + "Lakh "
                        : "";
                str +=
                    Number(n[3]) !== 0
                        ? (this.a[Number(n[3])] ||
                            this.b[n[3][0]] + " " + this.a[n[3][1]]) + "Thousand "
                        : "";
                str +=
                    Number(n[4]) !== 0
                        ? (this.a[Number(n[4])] ||
                            this.b[n[4][0]] + " " + this.a[n[4][1]]) + "Hundred "
                        : "";
                str +=
                    Number(n[5]) !== 0
                        ? (str !== "" ? "And " : "") +
                            (this.a[Number(n[5])] ||
                                this.b[n[5][0]] + " " + this.a[n[5][1]]) +
                            "Rupees Only"
                        : "";
                return str;
            }
            else {
                return "";
            }
        }
        else {
            return "";
        }
    };
    return NumberToWordsPipe;
}());
NumberToWordsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "numberToWords"
    })
], NumberToWordsPipe);

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utils/storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });
/** Storage  */
var Storage = (function () {
    function Storage() {
    }
    Storage.setLocalItem = function (key, val) {
        key = this.pid + "-" + key;
        if (val) {
            if (typeof val === "object") {
                val = JSON.stringify(val);
            }
            localStorage.setItem(key, val);
        }
    };
    Storage.getLocalItem = function (key) {
        key = this.pid + "-" + key;
        var val = localStorage.getItem(key);
        if (val) {
            if (val.indexOf("{") > -1) {
                val = JSON.parse(val);
            }
            else if (val.indexOf("[") > -1) {
                val = JSON.parse(val);
            }
            return val;
        }
        else {
            return null;
        }
    };
    Storage.removeLocalItem = function (key) {
        key = this.pid + "-" + key;
        localStorage.removeItem(key);
    };
    Storage.setSessionItem = function (key, val) {
        key = this.pid + "-" + key;
        if (val) {
            if (typeof val === "object") {
                val = JSON.stringify(val);
            }
            sessionStorage.setItem(key, val);
        }
    };
    Storage.getSessionItem = function (key) {
        key = this.pid + "-" + key;
        var val = sessionStorage.getItem(key);
        if (val) {
            if (val.indexOf("{") > -1) {
                val = JSON.parse(val);
            }
            else if (val.indexOf("[") > -1) {
                val = JSON.parse(val);
            }
            return val;
        }
        else {
            return null;
        }
    };
    Storage.removeSessionItem = function (key) {
        key = this.pid + "-" + key;
        sessionStorage.removeItem(key);
    };
    Storage.sessionClear = function () {
        sessionStorage.clear();
    };
    Storage.setJWT = function (val) {
        if (val) {
            this.setSessionItem("jwt", val);
        }
    };
    Storage.getJWT = function () {
        return this.getSessionItem("jwt");
    };
    Storage.setSessionUser = function (val) {
        if (val) {
            this.setSessionItem("user", val);
        }
    };
    Storage.getSessionUser = function () {
        return this.getSessionItem("user");
    };
    Storage.setMenuList = function (val) {
        if (val) {
            this.setSessionItem("menu", val);
        }
    };
    Storage.getMenuList = function () {
        return this.getSessionItem("menu");
    };
    Storage.setBranch = function (val) {
        if (val) {
            this.setSessionItem("branch", val);
        }
    };
    Storage.getBranch = function () {
        return this.getSessionItem("branch");
    };
    // static setProject(val: any) {
    //     if(val) {
    //         this.setSessionItem('project', val);
    //     }
    // }
    // static getProject(): string{
    //     return this.getSessionItem('project');
    // }
    Storage.clearSession = function () {
        this.sessionClear();
        this.removeSessionItem("jwt");
        this.removeSessionItem("user");
        this.removeSessionItem("menu");
        this.removeSessionItem("branch");
        //this.removeSessionItem('project');
    };
    Storage.filterStates = function (stateList, val) {
        console.log(val);
        var filteredStates = val && val != ""
            ? stateList.filter(function (s) { return s.key.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
            : stateList;
        return filteredStates;
    };
    Storage.filterLayoutSize = function (pageLayoutList, val) {
        console.log(val);
        var filteredLayoutSize = val && val != ""
            ? pageLayoutList.filter(function (s) { return s.key.toLowerCase().indexOf(val.toLowerCase()) >= 0; })
            : pageLayoutList;
        return filteredLayoutSize;
    };
    return Storage;
}());

Storage.pid = "RI";
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utils/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__("../../../../../src/app/shared/utils/storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
//import {environment} from '../../../assets/environments/environment';

var Util = (function () {
    function Util() {
    }
    Util.Init = function () { };
    Util.UID = function () {
        var time = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) { }
            time = new Date().getTime();
        }
        this.uniqueId = time;
        var id = time.toString(36).toUpperCase();
        return id;
    };
    Util.GetSessionUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* Storage */].getSessionUser();
    };
    Util.RoleMenu = function () {
        var menuList = this.GetSessionUser().roleList;
        return menuList;
    };
    Util.ShowLoader = function (show) {
        //       ES.ShowLoader(show);
    };
    Util.Message = function (message) {
        //     ES.Toast(message);
    };
    Util.GetParamString = function (data) {
        var returnValue = "";
        if (data) {
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var key = _a[_i];
                if (data[key] && data[key] != null && data[key] != "") {
                    returnValue = returnValue == "" ? "?" : returnValue + "&";
                    returnValue = returnValue + key + "=" + data[key];
                }
            }
        }
        return returnValue;
    };
    Util.ISODate = function (val) {
        var returnDate = "";
        val = this.UTC(val);
        if (val != null) {
            returnDate =
                val.getFullYear() + "-" + (val.getMonth() + 1) + "-" + val.getDate();
        }
        return returnDate;
    };
    Util.UTC = function (val) {
        if (val && val != null && val != "" && val != "null") {
            var parts = val.match(/\d+/g);
            var isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
            val = new Date(isoTime);
        }
        else {
            val = null;
        }
        return val;
    };
    Util.DateFormate = function (val) {
        var returnDate = "";
        val = this.UTC(val);
        if (val != null) {
            returnDate =
                val.getDate() +
                    "-" +
                    this.Month[val.getMonth()] +
                    "-" +
                    val.getFullYear();
        }
        return returnDate;
    };
    Util.DateTimeFormate = function (val) {
        var returnDate = "";
        val = this.UTC(val);
        if (val != null) {
            var minutes = "" + val.getMinutes();
            returnDate =
                val.getDate() +
                    "-" +
                    this.Month[val.getMonth()] +
                    "-" +
                    val.getFullYear() +
                    " " +
                    val.getHours() +
                    ":" +
                    (minutes.length == 1 ? "0" + minutes : minutes);
        }
        return returnDate;
    };
    Util.CurrentISODate = function () {
        var d = new Date();
        return ("" +
            d.getFullYear() +
            "-" +
            ("0" + (d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + d.getDate()).slice(-2) +
            "T" +
            ("0" + d.getHours()).slice(-2) +
            ":" +
            ("0" + d.getMinutes()).slice(-2) +
            ":" +
            ("0" + d.getSeconds()).slice(-2) +
            ".000Z");
    };
    Util.DecodeURI = function (val) {
        if (!val || val == "") {
            val = "";
        }
        else {
            val = decodeURIComponent(val.replace(/\+/g, " "));
        }
        return val;
    };
    Util.IsEmpty = function (val) {
        var returnVal = true;
        if (typeof val === "number") {
            val = val.toString();
            if (val == "NaN") {
                val = "";
            }
        }
        if (val) {
            val = val.toString();
            returnVal = val.trim() == "" ? true : false;
        }
        else {
            console.log("is Empty else place");
        }
        return returnVal;
    };
    Util.GetNumber = function () {
        return Math.floor(Math.random() * 9) + 1;
    };
    return Util;
}());

Util.IS_MOBILE_VIEW = true;
Util.Month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
Util.uniqueId = 0;
//# sourceMappingURL=util.js.map

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
    production: false,
    // api: "http://api.rightinvoices.com/",
    api: "http://localhost:8081/",
    REPORT_URL: "http://localhost:5000/",
    CRM_URL: "http://localhost:2008/rightinvoices/",
    REPORT_WEB_URL: "http://localhost:4201"
    // REPORT_URL: "http://reports.rightinvoices.com/"
    // REPORT_URL: "http://reports-prd.rightinvoices.com/" // api: "http://api-prd.rightinvoices.com/rightinvoices/",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common_props__ = __webpack_require__("../../../../../src/app/common/props.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__WEBPACK_IMPORTED_MODULE_4__app_common_props__["a" /* Prop */].API_ENDPOINT = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api;
__WEBPACK_IMPORTED_MODULE_4__app_common_props__["a" /* Prop */].REPORT_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].REPORT_URL;
__WEBPACK_IMPORTED_MODULE_4__app_common_props__["a" /* Prop */].CRM_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CRM_URL;
__WEBPACK_IMPORTED_MODULE_4__app_common_props__["a" /* Prop */].REPORT_WEB_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].REPORT_WEB_URL;
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map