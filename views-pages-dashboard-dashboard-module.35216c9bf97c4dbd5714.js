(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/accounting/accounting.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/accounting/accounting.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-template [ngIf]=\"!loading && data\" [ngIfElse]=\"onLoading\">\r\n  <div class=\"col-sm-12 col-md-12 animated\">\r\n    <div class=\"ds-panel bg-blue full-width\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 ds-panel__icon\">\r\n          <span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/building.svg'\"></span>\r\n        </div>\r\n  \r\n        <div class=\"col-md-5 ds-panel__section\">\r\n          <span class=\"ds-panel__section-label\">Total Unit  ACCOUNTING</span>\r\n          <span class=\"ds-panel__section-value\">{{ data?.unit.total }}</span>\r\n        </div>\r\n  \r\n        <div class=\"col-md-5 ds-panel__section has-multiple-child\">\r\n          <div class=\"ds-panel__mini-section\">\r\n            <span class=\"ds-panel__mini-section-value\">{{ data?.unit.bast }}</span>\r\n            <span class=\"ds-panel__mini-section-label\">BAST</span>\r\n          </div>\r\n          <div class=\"ds-panel__mini-section\">\r\n            <span class=\"ds-panel__mini-section-value\">{{ data?.unit.available }}</span>\r\n            <span class=\"ds-panel__mini-section-label\">Available</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-sm-12 col-md-12 row animated\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"ds-panel full-height bg-orange\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 pl-0 d-flex align-items-center justify-content-center\">\r\n            <span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket.svg'\"></span>\r\n          </div>\r\n          <div class=\"col-md-9 d-flex align-items-center\">\r\n            <span class=\"ds-panel__label\">Total Ticket</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"offset-md-3 col-md-9\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.total }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"col-md-7 panel-inline-grouping\">\r\n      <!-- Full inline panel -->\r\n      <div class=\"ds-panel full-inline bg-red row\">\r\n        <div class=\"col-md-1 d-flex align-items-center p-0\">\r\n          <span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket-open.svg'\"></span>\r\n        </div>\r\n        <div class=\"col-md-7 d-flex align-items-center ds-panel__label\">\r\n          <span class=\"ds-panel__label-text\">Ticketing (Open)</span>\r\n        </div>\r\n        <div class=\"col-md-4 d-flex align-items-center justify-content-center bl-4-solid\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.open.total }}</span>\r\n        </div>\r\n      </div>\r\n      <!-- ./Full inline panel -->\r\n      \r\n      <div class=\"ds-panel full-inline bg-brown row\">\r\n        <div class=\"col-md-1 d-flex align-items-center p-0\">\r\n          <span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket-progress.svg'\"></span>\r\n        </div>\r\n        <div class=\"col-md-7 d-flex align-items-center ds-panel__label\">\r\n          <span class=\"ds-panel__label-text\">Ticketing (Progress)</span>\r\n        </div>\r\n        <div class=\"col-md-4 d-flex align-items-center justify-content-center bl-4-solid\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.progress.total }}</span>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"ds-panel full-inline bg-pink row\">\r\n        <div class=\"col-md-1 d-flex align-items-center p-0\">\r\n          <span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket-done.svg'\"></span>\r\n        </div>\r\n        <div class=\"col-md-7 d-flex align-items-center ds-panel__label\">\r\n          <span class=\"ds-panel__label-text\">Ticketing (Done)</span>\r\n        </div>\r\n        <div class=\"col-md-4 d-flex align-items-center justify-content-center bl-4-solid\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.done.total }}</span>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-sm-12 mt-4 animated\">\r\n    <div class=\"ds-progress\">\r\n      <div class=\"ds-progress-label\">\r\n        <span class=\"ds-progress-label-text\">Ticketing (Open)</span>\r\n        <span class=\"ds-progress-label-value\">\r\n          {{ '(' + data?.ticket.open.total + '/' + data?.ticket.total + ') ' + (data?.ticket.open.percentage ? data?.ticket.open.percentage : '0') + '%' }}\r\n        </span>\r\n      </div>\r\n  \r\n      <div class=\"ds-progress-bar\">\r\n        <div class=\"ds-progress-bar-inner\" [ngStyle]=\"{'width': data?.ticket.open.percentage + '%'}\"></div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"ds-progress\">\r\n      <div class=\"ds-progress-label\">\r\n        <span class=\"ds-progress-label-text\">Ticketing (Progress)</span>\r\n        <span class=\"ds-progress-label-value\">\r\n          {{ '(' + data?.ticket.progress.total + '/' + data?.ticket.total + ') ' + (data?.ticket.progress.percentage ? data?.ticket.progress.percentage : '0') + '%' }}\r\n        </span>\r\n      </div>\r\n  \r\n      <div class=\"ds-progress-bar brown\">\r\n        <div class=\"ds-progress-bar-inner\" [ngStyle]=\"{'width': data?.ticket.progress.percentage + '%'}\"></div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"ds-progress\">\r\n      <div class=\"ds-progress-label\">\r\n        <span class=\"ds-progress-label-text\">Ticketing (Done)</span>\r\n        <span class=\"ds-progress-label-value\">\r\n          {{ '(' + data?.ticket.done.total + '/' + data?.ticket.total + ') ' + (data?.ticket.done.percentage ? data?.ticket.done.percentage : '0') + '%' }}\r\n        </span>\r\n      </div>\r\n  \r\n      <div class=\"ds-progress-bar pink\">\r\n        <div class=\"ds-progress-bar-inner\" [ngStyle]=\"{'width': data?.ticket.done.percentage + '%'}\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #onLoading>\r\n  <div *ngIf=\"loading; else hasError\" class=\"col-md-12 loader animated\">\r\n    <mat-spinner diameter=\"35\"></mat-spinner>\r\n    <p>Loading Content</p>\r\n  </div>\r\n\r\n  <ng-template #hasError>\r\n    <div class=\"col-md-12 failure animated\">\r\n      <p>Something went wrong, click the button below to try again.</p>\r\n      <button (click)=\"loadData()\">\r\n        Let's try again\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/eng/eng.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/eng/eng.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-template [ngIf]=\"!loading && data\" [ngIfElse]=\"onLoading\">\r\n  \r\n  <div class=\"col-sm-12 col-md-12 row animated\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"ds-panel full-height bg-orange\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 pl-0 d-flex align-items-center justify-content-center\">\r\n            <span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket.svg'\"></span>\r\n          </div>\r\n          <div class=\"col-md-6 d-flex align-items-center\">\r\n            <span class=\"ds-panel__label\">Total Ticket</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"offset-md-3 col-md-3\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.total }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 col-md-12 row animated\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"ds-panel full-height bg-orange\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9 d-flex align-items-center\">\r\n            <span class=\"ds-panel__label\">Total Ticket ( Waiting for Schedule )</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"offset-md-3 col-md-9\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.total }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"ds-panel full-height bg-orange\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9 d-flex align-items-center\">\r\n            <span class=\"ds-panel__label\">Total Ticket ( Schedule )</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"offset-md-3 col-md-9\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.total }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"ds-panel full-height bg-orange\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9 d-flex align-items-center\">\r\n            <span class=\"ds-panel__label\">Total Ticket ( Fixed )</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"offset-md-3 col-md-9\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.total }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"ds-panel full-height bg-orange\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9 d-flex align-items-center\">\r\n            <span class=\"ds-panel__label\">Total Ticket ( Done )</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"offset-md-3 col-md-9\">\r\n          <span class=\"ds-panel__value\">{{ data?.ticket.total }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #onLoading>\r\n  <div *ngIf=\"loading; else hasError\" class=\"col-md-12 loader animated\">\r\n    <mat-spinner diameter=\"35\"></mat-spinner>\r\n    <p>Loading Content</p>\r\n  </div>\r\n\r\n  <ng-template #hasError>\r\n    <div class=\"col-md-12 failure animated\">\r\n      <p>Something went wrong, click the button below to try again.</p>\r\n      <button (click)=\"loadData()\">\r\n        Let's try again\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/general/general.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/general/general.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"!loading && data\" [ngIfElse]=\"onLoading\">\r\n\t<div class=\"col-sm-12 col-md-12 animated\">\r\n\t\t<div class=\"ds-panel bg-blue full-width\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-5 ds-panel__section\">\r\n\t\t\t\t\t<span class=\"ds-panel__section-label\">Jumlah Pesanan</span>\r\n\t\t\t\t\t<span class=\"ds-panel__section-value\">{{ dataOffline + dataOnline }}</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-5 ds-panel__section has-multiple-child\">\r\n\t\t\t\t\t<div class=\"ds-panel__mini-section\">\r\n\t\t\t\t\t\t<span class=\"ds-panel__mini-section-value\">0</span>\r\n\t\t\t\t\t\t<span class=\"ds-panel__mini-section-label\">Online</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ds-panel__mini-section\">\r\n\t\t\t\t\t\t<span class=\"ds-panel__mini-section-value\">{{ dataOffline }}</span>\r\n\t\t\t\t\t\t<span class=\"ds-panel__mini-section-label\">Offline</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-sm-12 col-md-12 row animated\">\r\n\t\t<div class=\"col-md-5\">\r\n\t\t\t<div class=\"ds-panel full-height bg-orange d-flex align-items-center justify-content-center flex-column\">\r\n\t\t\t\t<div class=\"d-flex align-items-center justify-content-center\">\r\n\t\t\t\t\t<span class=\"ds-panel__label\">Jumlah Produk</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"d-flex justify-content-center\">\r\n\t\t\t\t\t<span class=\"ds-panel__value\">0</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-7 panel-inline-grouping\">\r\n\t\t\t<!-- Full inline panel -->\r\n\t\t\t<div class=\"ds-panel full-inline bg-red row\">\r\n\t\t\t\t<div class=\"col-md-1 d-flex align-items-center p-0\">\r\n\t\t\t\t\t<span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket-open.svg'\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-7 d-flex align-items-center ds-panel__label\">\r\n\t\t\t\t\t<span class=\"ds-panel__label-text\">Dalam Proses</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 d-flex align-items-center justify-content-center bl-4-solid\">\r\n\t\t\t\t\t<span class=\"ds-panel__value\">0</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- ./Full inline panel -->\r\n\r\n\t\t\t<div class=\"ds-panel full-inline bg-brown row\">\r\n\t\t\t\t<div class=\"col-md-1 d-flex align-items-center p-0\">\r\n\t\t\t\t\t<span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket-progress.svg'\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-7 d-flex align-items-center ds-panel__label\">\r\n\t\t\t\t\t<span class=\"ds-panel__label-text\">Dikirim</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 d-flex align-items-center justify-content-center bl-4-solid\">\r\n\t\t\t\t\t<span class=\"ds-panel__value\">0</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ds-panel full-inline bg-pink row\">\r\n\t\t\t\t<div class=\"col-md-1 d-flex align-items-center p-0\">\r\n\t\t\t\t\t<span class=\"kt-grid-nav__icon\" [inlineSVG]=\"'./assets/media/icons/svg/Dashboard/ticket-done.svg'\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-7 d-flex align-items-center ds-panel__label\">\r\n\t\t\t\t\t<span class=\"ds-panel__label-text\">Selesai</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 d-flex align-items-center justify-content-center bl-4-solid\">\r\n\t\t\t\t\t<span class=\"ds-panel__value\">0</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n\r\n<ng-template #onLoading>\r\n\t<div *ngIf=\"loading; else hasError\" class=\"col-md-12 loader animated\">\r\n\t\t<mat-spinner diameter=\"35\"></mat-spinner>\r\n\t\t<p>Loading Content</p>\r\n\t</div>\r\n\r\n\t<ng-template #hasError>\r\n\t\t<div class=\"col-md-12 failure animated\">\r\n\t\t\t<p>Something went wrong, click the button below to try again.</p>\r\n\t\t\t<button (click)=\"loadData()\">Let's try again</button>\r\n\t\t</div>\r\n\t</ng-template>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/views/pages/dashboard/accounting/accounting.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/accounting/accounting.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel-inline-grouping {\n  padding-left: 20px;\n  padding-right: 0;\n}\n\n.ds-panel {\n  margin-bottom: 20px;\n  padding: 25px;\n  border-radius: 25px;\n}\n\n.ds-panel.bg-blue {\n  background-color: #5C94FF;\n  color: #ffffff;\n}\n\n.ds-panel.bg-orange {\n  background-color: #E7B201;\n  color: #ffffff;\n}\n\n.ds-panel.bg-red {\n  background-color: #DC6464;\n  color: #ffffff;\n}\n\n.ds-panel.bg-brown {\n  background-color: #8D7044;\n  color: #ffffff;\n}\n\n.ds-panel.bg-pink {\n  background-color: #C364DA;\n  color: #ffffff;\n}\n\n.ds-panel .ds-panel__label {\n  font-size: 32px;\n}\n\n.ds-panel .ds-panel__value {\n  font-size: 72px;\n  font-weight: 600;\n}\n\n.ds-panel.full-width {\n  padding-left: 45px;\n  padding-right: 45px;\n}\n\n.ds-panel.full-width .ds-panel__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ds-panel.full-width .ds-panel__icon .kt-grid-nav__icon > svg {\n  max-height: 125px;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) {\n  padding: 1em 2em;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) .ds-panel__section-label {\n  display: block;\n  font-size: 28px;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) .ds-panel__section-value {\n  display: block;\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 100%;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child {\n  display: flex;\n  flex-direction: column;\n  padding-left: 2em;\n  border-left: 4px solid white;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section {\n  flex: 1;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section-label {\n  font-size: 24px;\n  line-height: 100%;\n  display: block;\n  margin-top: -5px;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section-value {\n  display: block;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section:first-child {\n  padding-top: 0;\n  border-bottom: 4px solid;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section:last-child {\n  padding-bottom: 0;\n}\n\n.ds-panel.full-height {\n  height: calc(100% - 15px);\n}\n\n.ds-panel.full-inline {\n  padding: 20px 20px 20px 40px;\n  margin-bottom: 10px;\n}\n\n.ds-panel.full-inline .ds-panel__label-text {\n  font-size: 18px;\n}\n\n.ds-panel.full-inline .ds-panel__value {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.ds-panel.full-inline .bl-4-solid {\n  border-left: 4px solid;\n}\n\n.ds-panel .sb-20 {\n  margin-bottom: 20px;\n}\n\n.ds-progress {\n  margin-bottom: 2em;\n}\n\n.ds-progress-label {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  color: #000000;\n  font-size: 18px;\n}\n\n.ds-progress-bar {\n  position: relative;\n  height: 20px;\n  border-radius: 20px;\n  background-color: #C4C4C4;\n  overflow: hidden;\n}\n\n.ds-progress-bar-inner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  border-radius: 20px;\n  background-color: #DC6464;\n  transition: 0.25s all ease;\n}\n\n.ds-progress-bar.brown .ds-progress-bar-inner {\n  background-color: #8D7044;\n}\n\n.ds-progress-bar.pink .ds-progress-bar-inner {\n  background-color: #C364DA;\n}\n\n.loader,\n.failure {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 50vh;\n}\n\n.loader p,\n.failure p {\n  margin: 10px 0 0;\n  font-size: 18px;\n}\n\n.failure p {\n  margin: 0 0 10px;\n  max-width: 75%;\n  font-size: 16px;\n}\n\n.failure button {\n  padding: 5px 10px;\n  color: #2739c1;\n  font-size: 16px;\n  border: none;\n}\n\n.animated {\n  -webkit-animation: fadein 0.5s ease;\n          animation: fadein 0.5s ease;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2FjY291bnRpbmcvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGRvY3VtZW50c19kb25ueVxcZGV2ZWxvcGthblxccHJvamVjdHNcXHB1c2F0Y2V0YWtpbmRvbmVzaWFcXHNvdXJjZV9jb2RlXFxkYXNoYm9hcmQtb3BlcmF0aW9uYWwvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZGFzaGJvYXJkXFxhY2NvdW50aW5nXFxhY2NvdW50aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvYWNjb3VudGluZy9hY2NvdW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRE47O0FER007RUFDRSxpQkFBQTtBQ0RSOztBRE1NO0VBQ0UsZ0JBQUE7QUNKUjs7QURNUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDSlY7O0FETVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKVjs7QURRTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNOUjs7QURRUTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTlY7O0FET1U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMWjs7QURPVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0xaOztBRFFVO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FDTlo7O0FEUVU7RUFDRSxpQkFBQTtBQ05aOztBRGFFO0VBQ0UseUJBQUE7QUNYSjs7QURjRTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURlTTtFQUNFLGVBQUE7QUNiUjs7QURpQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNmTjs7QURrQkk7RUFDRSxzQkFBQTtBQ2hCTjs7QURvQkU7RUFBUyxtQkFBQTtBQ2pCWDs7QURvQkE7RUFDRSxrQkFBQTtBQ2pCRjs7QURrQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNoQko7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDakJKOztBRG1CSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDakJOOztBRHFCTTtFQUNFLHlCQUFBO0FDbkJSOztBRHdCTTtFQUNFLHlCQUFBO0FDdEJSOztBRDRCQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ3pCRjs7QUQyQkU7O0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDeEJKOztBRDZCRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUMxQko7O0FENkJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUMzQko7O0FEK0JBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQzVCRjs7QUQ4QkU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzVCSjtFRCtCRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzdCSjtBQUNGOztBRG9CRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDNUJKO0VEK0JFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDN0JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvYWNjb3VudGluZy9hY2NvdW50aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWlubGluZS1ncm91cGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5kcy1wYW5lbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblxyXG4gICYuYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM5NEZGO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICYuYmctb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0IyMDE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgJi5iZy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDNjQ2NDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmLmJnLWJyb3duIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RDcwNDQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgJi5iZy1waW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzY0REE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5kcy1wYW5lbF9fbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAuZHMtcGFuZWxfX3ZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gICYuZnVsbC13aWR0aCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgXHJcbiAgICAuZHMtcGFuZWxfX2ljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5rdC1ncmlkLW5hdl9faWNvbiA+IHN2ZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZHMtcGFuZWxfX3NlY3Rpb24ge1xyXG4gICAgICAmOm5vdCguaGFzLW11bHRpcGxlLWNoaWxkKSB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDJlbTtcclxuXHJcbiAgICAgICAgLmRzLXBhbmVsX19zZWN0aW9uLWxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHMtcGFuZWxfX3NlY3Rpb24tdmFsdWUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmhhcy1tdWx0aXBsZS1jaGlsZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgICAgIC5kcy1wYW5lbF9fbWluaS1zZWN0aW9uIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgJi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi12YWx1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZ1bGwtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgfVxyXG5cclxuICAmLmZ1bGwtaW5saW5lIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbiAgICAuZHMtcGFuZWxfX2xhYmVsIHtcclxuICAgICAgJi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRzLXBhbmVsX192YWx1ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYmwtNC1zb2xpZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNiLTIwIHsgbWFyZ2luLWJvdHRvbTogMjBweCB9XHJcbn1cclxuXHJcbi5kcy1wcm9ncmVzcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICYtbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gICYtYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmLWlubmVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RDNjQ2NDtcclxuICAgICAgdHJhbnNpdGlvbjogLjI1cyBhbGwgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmJyb3duIHtcclxuICAgICAgLmRzLXByb2dyZXNzLWJhci1pbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhENzA0NDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucGluayB7XHJcbiAgICAgIC5kcy1wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzY0REE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2FkZXIsXHJcbi5mYWlsdXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5mYWlsdXJlIHtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiAjMjczOWMxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuICBhbmltYXRpb246IGZhZGVpbiAuNXMgZWFzZTtcclxuXHJcbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi5wYW5lbC1pbmxpbmUtZ3JvdXBpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5kcy1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uZHMtcGFuZWwuYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qzk0RkY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRzLXBhbmVsLmJnLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0IyMDE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRzLXBhbmVsLmJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQzY0NjQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRzLXBhbmVsLmJnLWJyb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhENzA0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZHMtcGFuZWwuYmctcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzY0REE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRzLXBhbmVsIC5kcy1wYW5lbF9fbGFiZWwge1xuICBmb250LXNpemU6IDMycHg7XG59XG4uZHMtcGFuZWwgLmRzLXBhbmVsX192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIHtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX2ljb24gLmt0LWdyaWQtbmF2X19pY29uID4gc3ZnIHtcbiAgbWF4LWhlaWdodDogMTI1cHg7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb246bm90KC5oYXMtbXVsdGlwbGUtY2hpbGQpIHtcbiAgcGFkZGluZzogMWVtIDJlbTtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbjpub3QoLmhhcy1tdWx0aXBsZS1jaGlsZCkgLmRzLXBhbmVsX19zZWN0aW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbjpub3QoLmhhcy1tdWx0aXBsZS1jaGlsZCkgLmRzLXBhbmVsX19zZWN0aW9uLXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb24uaGFzLW11bHRpcGxlLWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgd2hpdGU7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb24uaGFzLW11bHRpcGxlLWNoaWxkIC5kcy1wYW5lbF9fbWluaS1zZWN0aW9uIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbi12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQ7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb24uaGFzLW11bHRpcGxlLWNoaWxkIC5kcy1wYW5lbF9fbWluaS1zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5kcy1wYW5lbC5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XG59XG4uZHMtcGFuZWwuZnVsbC1pbmxpbmUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmRzLXBhbmVsLmZ1bGwtaW5saW5lIC5kcy1wYW5lbF9fbGFiZWwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5kcy1wYW5lbC5mdWxsLWlubGluZSAuZHMtcGFuZWxfX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRzLXBhbmVsLmZ1bGwtaW5saW5lIC5ibC00LXNvbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbn1cbi5kcy1wYW5lbCAuc2ItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZHMtcHJvZ3Jlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uZHMtcHJvZ3Jlc3MtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5kcy1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kcy1wcm9ncmVzcy1iYXItaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREM2NDY0O1xuICB0cmFuc2l0aW9uOiAwLjI1cyBhbGwgZWFzZTtcbn1cbi5kcy1wcm9ncmVzcy1iYXIuYnJvd24gLmRzLXByb2dyZXNzLWJhci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4RDcwNDQ7XG59XG4uZHMtcHJvZ3Jlc3MtYmFyLnBpbmsgLmRzLXByb2dyZXNzLWJhci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzY0REE7XG59XG5cbi5sb2FkZXIsXG4uZmFpbHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwdmg7XG59XG4ubG9hZGVyIHAsXG4uZmFpbHVyZSBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmFpbHVyZSBwIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mYWlsdXJlIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzI3MzljMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hbmltYXRlZCB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMgZWFzZTtcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/accounting/accounting.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/accounting/accounting.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccountingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingComponent", function() { return AccountingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/environments/environment */ "./src/environments/environment.ts");





var AccountingComponent = /** @class */ (function () {
    function AccountingComponent(http, ktDialogueService, ref) {
        this.http = http;
        this.ktDialogueService = ktDialogueService;
        this.ref = ref;
        this.subs = [];
    }
    AccountingComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    // Module to stop loading
    AccountingComponent.prototype.stopLoading = function () {
        this.loading = false;
        this.ref.markForCheck();
        this.ktDialogueService.hide();
    };
    AccountingComponent.prototype.loadData = function () {
        var _this = this;
        var url = _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI + "/api/dashboard";
        this.loading = true;
        // Save the subs for to be unsubs
        this.subs.push(this.http.get(url).subscribe(function (resp) {
            // Handler when error
            _this.data = resp.data;
            _this.stopLoading();
        }, function (error) {
            _this.stopLoading();
        }));
    };
    AccountingComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe all subs event to prevent memory leak
        this.subs.map(function (item) {
            item.unsubscribe();
        });
    };
    AccountingComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["KtDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AccountingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-general',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accounting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/accounting/accounting.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accounting.component.scss */ "./src/app/views/pages/dashboard/accounting/accounting.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["KtDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AccountingComponent);
    return AccountingComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxkb2N1bWVudHNfZG9ubnlcXGRldmVsb3BrYW5cXHByb2plY3RzXFxwdXNhdGNldGFraW5kb25lc2lhXFxzb3VyY2VfY29kZVxcZGFzaGJvYXJkLW9wZXJhdGlvbmFsL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsYUFBQTtBQ0RIIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCBuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general/general.component */ "./src/app/views/pages/dashboard/general/general.component.ts");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accounting/accounting.component */ "./src/app/views/pages/dashboard/accounting/accounting.component.ts");
/* harmony import */ var _eng_eng_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eng/eng.component */ "./src/app/views/pages/dashboard/eng/eng.component.ts");

// Angular



// Core Module








// import { EngineerComponent } from './engineer/engineer.component';
var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"]
            },
            {
                path: 'accounting',
                component: _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_10__["AccountingComponent"]
            },
            {
                path: 'engineer',
                component: _eng_eng_component__WEBPACK_IMPORTED_MODULE_11__["EngComponent"]
            },
        ]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
            ],
            providers: [],
            entryComponents: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"],
                _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_10__["AccountingComponent"],
                _eng_eng_component__WEBPACK_IMPORTED_MODULE_11__["EngComponent"]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/eng/eng.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/eng/eng.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel-inline-grouping {\n  padding-left: 20px;\n  padding-right: 0;\n}\n\n.ds-panel {\n  margin-bottom: 20px;\n  padding: 25px;\n  border-radius: 25px;\n}\n\n.ds-panel.bg-blue {\n  background-color: #5C94FF;\n  color: #ffffff;\n}\n\n.ds-panel.bg-orange {\n  background-color: #E7B201;\n  color: #ffffff;\n}\n\n.ds-panel.bg-red {\n  background-color: #DC6464;\n  color: #ffffff;\n}\n\n.ds-panel.bg-brown {\n  background-color: #8D7044;\n  color: #ffffff;\n}\n\n.ds-panel.bg-pink {\n  background-color: #C364DA;\n  color: #ffffff;\n}\n\n.ds-panel .ds-panel__label {\n  font-size: 32px;\n}\n\n.ds-panel .ds-panel__value {\n  font-size: 72px;\n  font-weight: 600;\n}\n\n.ds-panel.full-width {\n  padding-left: 45px;\n  padding-right: 45px;\n}\n\n.ds-panel.full-width .ds-panel__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ds-panel.full-width .ds-panel__icon .kt-grid-nav__icon > svg {\n  max-height: 150px;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) {\n  padding: 1em 2em;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) .ds-panel__section-label {\n  display: block;\n  font-size: 28px;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) .ds-panel__section-value {\n  display: block;\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 100%;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child {\n  display: flex;\n  flex-direction: column;\n  padding-left: 2em;\n  border-left: 4px solid white;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section {\n  flex: 1;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section-label {\n  font-size: 24px;\n  line-height: 100%;\n  display: block;\n  margin-top: -5px;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section-value {\n  display: block;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section:first-child {\n  padding-top: 0;\n  border-bottom: 4px solid;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section:last-child {\n  padding-bottom: 0;\n}\n\n.ds-panel.full-height {\n  height: calc(100% - 15px);\n}\n\n.ds-panel.full-inline {\n  padding: 20px 20px 20px 40px;\n  margin-bottom: 10px;\n}\n\n.ds-panel.full-inline .ds-panel__label-text {\n  font-size: 1px;\n}\n\n.ds-panel.full-inline .ds-panel__value {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.ds-panel.full-inline .bl-4-solid {\n  border-left: 4px solid;\n}\n\n.ds-panel .sb-20 {\n  margin-bottom: 20px;\n}\n\n.ds-progress {\n  margin-bottom: 2em;\n}\n\n.ds-progress-label {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  color: #000000;\n  font-size: 18px;\n}\n\n.ds-progress-bar {\n  position: relative;\n  height: 20px;\n  border-radius: 20px;\n  background-color: #C4C4C4;\n  overflow: hidden;\n}\n\n.ds-progress-bar-inner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  border-radius: 20px;\n  background-color: #DC6464;\n  transition: 0.25s all ease;\n}\n\n.ds-progress-bar.brown .ds-progress-bar-inner {\n  background-color: #8D7044;\n}\n\n.ds-progress-bar.pink .ds-progress-bar-inner {\n  background-color: #C364DA;\n}\n\n.loader,\n.failure {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 50vh;\n}\n\n.loader p,\n.failure p {\n  margin: 10px 0 0;\n  font-size: 18px;\n}\n\n.failure p {\n  margin: 0 0 10px;\n  max-width: 75%;\n  font-size: 16px;\n}\n\n.failure button {\n  padding: 5px 10px;\n  color: #2739c1;\n  font-size: 16px;\n  border: none;\n}\n\n.animated {\n  -webkit-animation: fadein 0.5s ease;\n          animation: fadein 0.5s ease;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2VuZy9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcZG9jdW1lbnRzX2Rvbm55XFxkZXZlbG9wa2FuXFxwcm9qZWN0c1xccHVzYXRjZXRha2luZG9uZXNpYVxcc291cmNlX2NvZGVcXGRhc2hib2FyZC1vcGVyYXRpb25hbC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxkYXNoYm9hcmRcXGVuZ1xcZW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZW5nL2VuZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZOOztBRElNO0VBQ0UsaUJBQUE7QUNGUjs7QURPTTtFQUNFLGdCQUFBO0FDTFI7O0FET1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0xWOztBRE9RO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTFY7O0FEU007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDUFI7O0FEU1E7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1BWOztBRFFVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTlo7O0FEUVU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOWjs7QURTVTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQ1BaOztBRFNVO0VBQ0UsaUJBQUE7QUNQWjs7QURjRTtFQUNFLHlCQUFBO0FDWko7O0FEZUU7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FDYko7O0FEZ0JNO0VBQ0UsY0FBQTtBQ2RSOztBRGtCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2hCTjs7QURtQkk7RUFDRSxzQkFBQTtBQ2pCTjs7QURxQkU7RUFBUyxtQkFBQTtBQ2xCWDs7QURxQkE7RUFDRSxrQkFBQTtBQ2xCRjs7QURtQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNqQko7O0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRG9CSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDbEJOOztBRHNCTTtFQUNFLHlCQUFBO0FDcEJSOztBRHlCTTtFQUNFLHlCQUFBO0FDdkJSOztBRDZCQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQzFCRjs7QUQ0QkU7O0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDekJKOztBRDhCRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUMzQko7O0FEOEJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUM1Qko7O0FEZ0NBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQzdCRjs7QUQrQkU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzdCSjtFRGdDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzlCSjtBQUNGOztBRHFCRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDN0JKO0VEZ0NFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDOUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZW5nL2VuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1pbmxpbmUtZ3JvdXBpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZHMtcGFuZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICAmLmJnLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDOTRGRjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmLmJnLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdCMjAxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICYuYmctcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQzY0NjQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgJi5iZy1icm93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEQ3MDQ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICYuYmctcGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM2NERBO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAuZHMtcGFuZWxfX2xhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG4gIC5kcy1wYW5lbF9fdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgJi5mdWxsLXdpZHRoIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgICBcclxuICAgIC5kcy1wYW5lbF9faWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgLmt0LWdyaWQtbmF2X19pY29uID4gc3ZnIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcy1wYW5lbF9fc2VjdGlvbiB7XHJcbiAgICAgICY6bm90KC5oYXMtbXVsdGlwbGUtY2hpbGQpIHtcclxuICAgICAgICBwYWRkaW5nOiAxZW0gMmVtO1xyXG5cclxuICAgICAgICAuZHMtcGFuZWxfX3NlY3Rpb24tbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcy1wYW5lbF9fc2VjdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGFzLW11bHRpcGxlLWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgLmRzLXBhbmVsX19taW5pLXNlY3Rpb24ge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLXZhbHVlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyNSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZnVsbC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXB4KTtcclxuICB9XHJcblxyXG4gICYuZnVsbC1pbmxpbmUge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBcclxuICAgIC5kcy1wYW5lbF9fbGFiZWwge1xyXG4gICAgICAmLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kcy1wYW5lbF9fdmFsdWUge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJsLTQtc29saWQge1xyXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zYi0yMCB7IG1hcmdpbi1ib3R0b206IDIwcHggfVxyXG59XHJcblxyXG4uZHMtcHJvZ3Jlc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAmLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAmLWJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJi1pbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQzY0NjQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4yNXMgYWxsIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5icm93biB7XHJcbiAgICAgIC5kcy1wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4RDcwNDQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnBpbmsge1xyXG4gICAgICAuZHMtcHJvZ3Jlc3MtYmFyLWlubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM2NERBO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyLFxyXG4uZmFpbHVyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFpbHVyZSB7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogIzI3MzljMTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlaW4gLjVzIGVhc2U7XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIucGFuZWwtaW5saW5lLWdyb3VwaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uZHMtcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmRzLXBhbmVsLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM5NEZGO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbC5iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdCMjAxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbC5iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREM2NDY0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbC5iZy1icm93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4RDcwNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRzLXBhbmVsLmJnLXBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM2NERBO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbCAuZHMtcGFuZWxfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLmRzLXBhbmVsIC5kcy1wYW5lbF9fdmFsdWUge1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCB7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19pY29uIC5rdC1ncmlkLW5hdl9faWNvbiA+IHN2ZyB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uOm5vdCguaGFzLW11bHRpcGxlLWNoaWxkKSB7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb246bm90KC5oYXMtbXVsdGlwbGUtY2hpbGQpIC5kcy1wYW5lbF9fc2VjdGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb246bm90KC5oYXMtbXVsdGlwbGUtY2hpbGQpIC5kcy1wYW5lbF9fc2VjdGlvbi12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbiB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbi5oYXMtbXVsdGlwbGUtY2hpbGQgLmRzLXBhbmVsX19taW5pLXNlY3Rpb24tbGFiZWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbi5oYXMtbXVsdGlwbGUtY2hpbGQgLmRzLXBhbmVsX19taW5pLXNlY3Rpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbi5oYXMtbXVsdGlwbGUtY2hpbGQgLmRzLXBhbmVsX19taW5pLXNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZHMtcGFuZWwuZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1cHgpO1xufVxuLmRzLXBhbmVsLmZ1bGwtaW5saW5lIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kcy1wYW5lbC5mdWxsLWlubGluZSAuZHMtcGFuZWxfX2xhYmVsLXRleHQge1xuICBmb250LXNpemU6IDFweDtcbn1cbi5kcy1wYW5lbC5mdWxsLWlubGluZSAuZHMtcGFuZWxfX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRzLXBhbmVsLmZ1bGwtaW5saW5lIC5ibC00LXNvbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbn1cbi5kcy1wYW5lbCAuc2ItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZHMtcHJvZ3Jlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uZHMtcHJvZ3Jlc3MtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5kcy1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kcy1wcm9ncmVzcy1iYXItaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREM2NDY0O1xuICB0cmFuc2l0aW9uOiAwLjI1cyBhbGwgZWFzZTtcbn1cbi5kcy1wcm9ncmVzcy1iYXIuYnJvd24gLmRzLXByb2dyZXNzLWJhci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4RDcwNDQ7XG59XG4uZHMtcHJvZ3Jlc3MtYmFyLnBpbmsgLmRzLXByb2dyZXNzLWJhci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzY0REE7XG59XG5cbi5sb2FkZXIsXG4uZmFpbHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwdmg7XG59XG4ubG9hZGVyIHAsXG4uZmFpbHVyZSBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmFpbHVyZSBwIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mYWlsdXJlIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzI3MzljMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hbmltYXRlZCB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMgZWFzZTtcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/eng/eng.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/dashboard/eng/eng.component.ts ***!
  \************************************************************/
/*! exports provided: EngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngComponent", function() { return EngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/environments/environment */ "./src/environments/environment.ts");





var EngComponent = /** @class */ (function () {
    function EngComponent(http, ktDialogueService, ref) {
        this.http = http;
        this.ktDialogueService = ktDialogueService;
        this.ref = ref;
        this.subs = [];
    }
    EngComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    // Module to stop loading
    EngComponent.prototype.stopLoading = function () {
        this.loading = false;
        this.ref.markForCheck();
        this.ktDialogueService.hide();
    };
    EngComponent.prototype.loadData = function () {
        var _this = this;
        var url = _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI + "/api/dashboard";
        this.loading = true;
        // Save the subs for to be unsubs
        this.subs.push(this.http.get(url).subscribe(function (resp) {
            // Handler when error
            _this.data = resp.data;
            _this.stopLoading();
        }, function (error) {
            _this.stopLoading();
        }));
    };
    EngComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe all subs event to prevent memory leak
        this.subs.map(function (item) {
            item.unsubscribe();
        });
    };
    EngComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["KtDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    EngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-general',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/eng/eng.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eng.component.scss */ "./src/app/views/pages/dashboard/eng/eng.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["KtDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EngComponent);
    return EngComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/general/general.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/dashboard/general/general.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel-inline-grouping {\n  padding-left: 20px;\n  padding-right: 0;\n}\n\n.ds-panel {\n  margin-bottom: 20px;\n  padding: 25px;\n  border-radius: 25px;\n}\n\n.ds-panel.bg-blue {\n  background-color: #5c94ff;\n  color: #ffffff;\n}\n\n.ds-panel.bg-orange {\n  background-color: #e7b201;\n  color: #ffffff;\n}\n\n.ds-panel.bg-red {\n  background-color: #dc6464;\n  color: #ffffff;\n}\n\n.ds-panel.bg-brown {\n  background-color: #8d7044;\n  color: #ffffff;\n}\n\n.ds-panel.bg-pink {\n  background-color: #c364da;\n  color: #ffffff;\n}\n\n.ds-panel .ds-panel__label {\n  font-size: 32px;\n}\n\n.ds-panel .ds-panel__value {\n  font-size: 72px;\n  font-weight: 600;\n}\n\n.ds-panel.full-width {\n  padding-left: 45px;\n  padding-right: 45px;\n}\n\n.ds-panel.full-width .ds-panel__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ds-panel.full-width .ds-panel__icon .kt-grid-nav__icon > svg {\n  max-height: 125px;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) {\n  padding: 1em 2em;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) .ds-panel__section-label {\n  display: block;\n  font-size: 28px;\n}\n\n.ds-panel.full-width .ds-panel__section:not(.has-multiple-child) .ds-panel__section-value {\n  display: block;\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 100%;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child {\n  display: flex;\n  flex-direction: column;\n  padding-left: 2em;\n  border-left: 4px solid white;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section {\n  flex: 1;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section-label {\n  font-size: 24px;\n  line-height: 100%;\n  display: block;\n  margin-top: -5px;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section-value {\n  display: block;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section:first-child {\n  padding-top: 0;\n  border-bottom: 4px solid;\n}\n\n.ds-panel.full-width .ds-panel__section.has-multiple-child .ds-panel__mini-section:last-child {\n  padding-bottom: 0;\n}\n\n.ds-panel.full-height {\n  height: calc(100% - 15px);\n}\n\n.ds-panel.full-inline {\n  padding: 20px 20px 20px 40px;\n  margin-bottom: 10px;\n}\n\n.ds-panel.full-inline .ds-panel__label-text {\n  font-size: 18px;\n}\n\n.ds-panel.full-inline .ds-panel__value {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.ds-panel.full-inline .bl-4-solid {\n  border-left: 4px solid;\n}\n\n.ds-panel .sb-20 {\n  margin-bottom: 20px;\n}\n\n.ds-progress {\n  margin-bottom: 2em;\n}\n\n.ds-progress-label {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  color: #000000;\n  font-size: 18px;\n}\n\n.ds-progress-bar {\n  position: relative;\n  height: 20px;\n  border-radius: 20px;\n  background-color: #c4c4c4;\n  overflow: hidden;\n}\n\n.ds-progress-bar-inner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  border-radius: 20px;\n  background-color: #dc6464;\n  transition: 0.25s all ease;\n}\n\n.ds-progress-bar.brown .ds-progress-bar-inner {\n  background-color: #8d7044;\n}\n\n.ds-progress-bar.pink .ds-progress-bar-inner {\n  background-color: #c364da;\n}\n\n.loader,\n.failure {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 50vh;\n}\n\n.loader p,\n.failure p {\n  margin: 10px 0 0;\n  font-size: 18px;\n}\n\n.failure p {\n  margin: 0 0 10px;\n  max-width: 75%;\n  font-size: 16px;\n}\n\n.failure button {\n  padding: 5px 10px;\n  color: #2739c1;\n  font-size: 16px;\n  border: none;\n}\n\n.animated {\n  -webkit-animation: fadein 0.5s ease;\n          animation: fadein 0.5s ease;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2dlbmVyYWwvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGRvY3VtZW50c19kb25ueVxcZGV2ZWxvcGthblxccHJvamVjdHNcXHB1c2F0Y2V0YWtpbmRvbmVzaWFcXHNvdXJjZV9jb2RlXFxkYXNoYm9hcmQtb3BlcmF0aW9uYWwvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZGFzaGJvYXJkXFxnZW5lcmFsXFxnZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURDQztFQUNDLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENDO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0M7RUFDQyx5QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQztFQUNDLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENDO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUM7RUFDQyxlQUFBO0FDQUY7O0FERUM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREg7O0FER0c7RUFDQyxpQkFBQTtBQ0RKOztBRE1HO0VBQ0MsZ0JBQUE7QUNKSjs7QURNSTtFQUNDLGNBQUE7RUFDQSxlQUFBO0FDSkw7O0FETUk7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKTDs7QURRRztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNOSjs7QURRSTtFQUNDLE9BQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTkw7O0FET0s7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMTjs7QURPSztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0xOOztBRFFLO0VBQ0MsY0FBQTtFQUNBLHdCQUFBO0FDTk47O0FEUUs7RUFDQyxpQkFBQTtBQ05OOztBRGFDO0VBQ0MseUJBQUE7QUNYRjs7QURjQztFQUNDLDRCQUFBO0VBQ0EsbUJBQUE7QUNaRjs7QURlRztFQUNDLGVBQUE7QUNiSjs7QURpQkU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNmSDs7QURrQkU7RUFDQyxzQkFBQTtBQ2hCSDs7QURvQkM7RUFDQyxtQkFBQTtBQ2xCRjs7QURzQkE7RUFDQyxrQkFBQTtBQ25CRDs7QURvQkM7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNsQkY7O0FEcUJDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDbkJGOztBRHFCRTtFQUNDLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDbkJIOztBRHVCRztFQUNDLHlCQUFBO0FDckJKOztBRDBCRztFQUNDLHlCQUFBO0FDeEJKOztBRDhCQTs7RUFFQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQzNCRDs7QUQ2QkM7O0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FDMUJGOztBRCtCQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM1QkY7O0FEK0JDO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUM3QkY7O0FEaUNBO0VBQ0MsbUNBQUE7VUFBQSwyQkFBQTtBQzlCRDs7QURnQ0M7RUFDQztJQUNDLG1CQUFBO0lBQ0EsVUFBQTtFQzlCRDtFRGlDQTtJQUNDLG1CQUFBO0lBQ0EsVUFBQTtFQy9CRDtBQUNGOztBRHNCQztFQUNDO0lBQ0MsbUJBQUE7SUFDQSxVQUFBO0VDOUJEO0VEaUNBO0lBQ0MsbUJBQUE7SUFDQSxVQUFBO0VDL0JEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWlubGluZS1ncm91cGluZyB7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5kcy1wYW5lbCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRwYWRkaW5nOiAyNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblxyXG5cdCYuYmctYmx1ZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWM5NGZmO1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cdCYuYmctb3JhbmdlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlN2IyMDE7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblx0Ji5iZy1yZWQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2RjNjQ2NDtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHQmLmJnLWJyb3duIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM4ZDcwNDQ7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblx0Ji5iZy1waW5rIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMzY0ZGE7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC5kcy1wYW5lbF9fbGFiZWwge1xyXG5cdFx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdH1cclxuXHQuZHMtcGFuZWxfX3ZhbHVlIHtcclxuXHRcdGZvbnQtc2l6ZTogNzJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cclxuXHQmLmZ1bGwtd2lkdGgge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0NXB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogNDVweDtcclxuXHJcblx0XHQuZHMtcGFuZWxfX2ljb24ge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHRcdC5rdC1ncmlkLW5hdl9faWNvbiA+IHN2ZyB7XHJcblx0XHRcdFx0bWF4LWhlaWdodDogMTI1cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuZHMtcGFuZWxfX3NlY3Rpb24ge1xyXG5cdFx0XHQmOm5vdCguaGFzLW11bHRpcGxlLWNoaWxkKSB7XHJcblx0XHRcdFx0cGFkZGluZzogMWVtIDJlbTtcclxuXHJcblx0XHRcdFx0LmRzLXBhbmVsX19zZWN0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuZHMtcGFuZWxfX3NlY3Rpb24tdmFsdWUge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDcycHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLmhhcy1tdWx0aXBsZS1jaGlsZCB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMmVtO1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgd2hpdGU7XHJcblxyXG5cdFx0XHRcdC5kcy1wYW5lbF9fbWluaS1zZWN0aW9uIHtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTRweDtcclxuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cdFx0XHRcdFx0Ji1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ji12YWx1ZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMjUlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmLmZ1bGwtaGVpZ2h0IHtcclxuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XHJcblx0fVxyXG5cclxuXHQmLmZ1bGwtaW5saW5lIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHRcdC5kcy1wYW5lbF9fbGFiZWwge1xyXG5cdFx0XHQmLXRleHQge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5kcy1wYW5lbF9fdmFsdWUge1xyXG5cdFx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LmJsLTQtc29saWQge1xyXG5cdFx0XHRib3JkZXItbGVmdDogNHB4IHNvbGlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnNiLTIwIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uZHMtcHJvZ3Jlc3Mge1xyXG5cdG1hcmdpbi1ib3R0b206IDJlbTtcclxuXHQmLWxhYmVsIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG5cclxuXHQmLWJhciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdFx0Ji1pbm5lciB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkYzY0NjQ7XHJcblx0XHRcdHRyYW5zaXRpb246IDAuMjVzIGFsbCBlYXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuYnJvd24ge1xyXG5cdFx0XHQuZHMtcHJvZ3Jlc3MtYmFyLWlubmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ3MDQ0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5waW5rIHtcclxuXHRcdFx0LmRzLXByb2dyZXNzLWJhci1pbm5lciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2MzNjRkYTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmxvYWRlcixcclxuLmZhaWx1cmUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGhlaWdodDogNTB2aDtcclxuXHJcblx0cCB7XHJcblx0XHRtYXJnaW46IDEwcHggMCAwO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmZhaWx1cmUge1xyXG5cdHAge1xyXG5cdFx0bWFyZ2luOiAwIDAgMTBweDtcclxuXHRcdG1heC13aWR0aDogNzUlO1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHJcblx0YnV0dG9uIHtcclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0Y29sb3I6ICMyNzM5YzE7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG59XHJcblxyXG4uYW5pbWF0ZWQge1xyXG5cdGFuaW1hdGlvbjogZmFkZWluIDAuNXMgZWFzZTtcclxuXHJcblx0QGtleWZyYW1lcyBmYWRlaW4ge1xyXG5cdFx0ZnJvbSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dG8ge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIucGFuZWwtaW5saW5lLWdyb3VwaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uZHMtcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmRzLXBhbmVsLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM5NGZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbC5iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdiMjAxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbC5iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2NDY0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbC5iZy1icm93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDcwNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRzLXBhbmVsLmJnLXBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM2NGRhO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kcy1wYW5lbCAuZHMtcGFuZWxfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLmRzLXBhbmVsIC5kcy1wYW5lbF9fdmFsdWUge1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCB7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19pY29uIC5rdC1ncmlkLW5hdl9faWNvbiA+IHN2ZyB7XG4gIG1heC1oZWlnaHQ6IDEyNXB4O1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uOm5vdCguaGFzLW11bHRpcGxlLWNoaWxkKSB7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb246bm90KC5oYXMtbXVsdGlwbGUtY2hpbGQpIC5kcy1wYW5lbF9fc2VjdGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uZHMtcGFuZWwuZnVsbC13aWR0aCAuZHMtcGFuZWxfX3NlY3Rpb246bm90KC5oYXMtbXVsdGlwbGUtY2hpbGQpIC5kcy1wYW5lbF9fc2VjdGlvbi12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbiB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbi5oYXMtbXVsdGlwbGUtY2hpbGQgLmRzLXBhbmVsX19taW5pLXNlY3Rpb24tbGFiZWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbi5oYXMtbXVsdGlwbGUtY2hpbGQgLmRzLXBhbmVsX19taW5pLXNlY3Rpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbn1cbi5kcy1wYW5lbC5mdWxsLXdpZHRoIC5kcy1wYW5lbF9fc2VjdGlvbi5oYXMtbXVsdGlwbGUtY2hpbGQgLmRzLXBhbmVsX19taW5pLXNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkO1xufVxuLmRzLXBhbmVsLmZ1bGwtd2lkdGggLmRzLXBhbmVsX19zZWN0aW9uLmhhcy1tdWx0aXBsZS1jaGlsZCAuZHMtcGFuZWxfX21pbmktc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZHMtcGFuZWwuZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1cHgpO1xufVxuLmRzLXBhbmVsLmZ1bGwtaW5saW5lIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kcy1wYW5lbC5mdWxsLWlubGluZSAuZHMtcGFuZWxfX2xhYmVsLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZHMtcGFuZWwuZnVsbC1pbmxpbmUgLmRzLXBhbmVsX192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kcy1wYW5lbC5mdWxsLWlubGluZSAuYmwtNC1zb2xpZCB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG59XG4uZHMtcGFuZWwgLnNiLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRzLXByb2dyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLmRzLXByb2dyZXNzLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZHMtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZHMtcHJvZ3Jlc3MtYmFyLWlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjNjQ2NDtcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2U7XG59XG4uZHMtcHJvZ3Jlc3MtYmFyLmJyb3duIC5kcy1wcm9ncmVzcy1iYXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ3MDQ0O1xufVxuLmRzLXByb2dyZXNzLWJhci5waW5rIC5kcy1wcm9ncmVzcy1iYXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM2NGRhO1xufVxuXG4ubG9hZGVyLFxuLmZhaWx1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLmxvYWRlciBwLFxuLmZhaWx1cmUgcCB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZhaWx1cmUgcCB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIG1heC13aWR0aDogNzUlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZmFpbHVyZSBidXR0b24ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6ICMyNzM5YzE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYW5pbWF0ZWQge1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzIGVhc2U7XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/general/general.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/dashboard/general/general.component.ts ***!
  \********************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_offlineOrders_offlineOrders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/offlineOrders/offlineOrders.service */ "./src/app/core/offlineOrders/offlineOrders.service.ts");





var GeneralComponent = /** @class */ (function () {
    function GeneralComponent(http, offlineOrdersService, ktDialogueService, ref, subheaderService) {
        this.http = http;
        this.offlineOrdersService = offlineOrdersService;
        this.ktDialogueService = ktDialogueService;
        this.ref = ref;
        this.subheaderService = subheaderService;
        this.subs = [];
        this.dataOffline = 0;
        this.dataOnline = 0;
    }
    GeneralComponent.prototype.ngOnInit = function () {
        this.loadData();
        // Set title to page breadCrumbs
        this.subheaderService.setTitle("Dashboard");
    };
    // Module to stop loading
    GeneralComponent.prototype.stopLoading = function () {
        this.loading = false;
        this.ref.markForCheck();
        this.ktDialogueService.hide();
    };
    GeneralComponent.prototype.loadData = function () {
        this.loading = false;
        this.data = ["access"];
        this.loadOrderOffline();
    };
    GeneralComponent.prototype.loadOrderOffline = function () {
        var _this = this;
        this.offlineOrdersService.getListOfflineOrdersAll().subscribe(function (response) {
            _this.dataOffline = response.totalCount;
            _this.ref.markForCheck();
        }, function (error) {
            console.error("Error fetching data:", error);
        });
    };
    GeneralComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe all subs event to prevent memory leak
        this.subs.map(function (item) {
            item.unsubscribe();
        });
    };
    GeneralComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_offlineOrders_offlineOrders_service__WEBPACK_IMPORTED_MODULE_4__["OfflineOrdersService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["KtDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-general",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/general/general.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general.component.scss */ "./src/app/views/pages/dashboard/general/general.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_offlineOrders_offlineOrders_service__WEBPACK_IMPORTED_MODULE_4__["OfflineOrdersService"], _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["KtDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], GeneralComponent);
    return GeneralComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-dashboard-dashboard-module.35216c9bf97c4dbd5714.js.map