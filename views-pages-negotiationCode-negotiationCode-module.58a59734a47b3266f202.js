(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-negotiationCode-negotiationCode-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a [routerLink]=\"['/negotiationCode']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button>\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"sty-default\">Kembali</span>\n\t\t\t</a>\n\t\t\t<button href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit(false)\" [disabled]=\"loading\" mat-raised-button>\n\t\t\t\t<span class=\"sty-default\">Simpan</span>\n\t\t\t</button>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n\t\t<section class=\"customStyle\">\n\t\t\t<div class=\"section\">\n\t\t\t\t<!-- Form Input START -->\n\t\t\t\t<form [formGroup]=\"negotiationCodeForm\" class=\"kt-form kt-form--group-seperator-dashed\">\n\t\t\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\"> Oh snap! Change a few things up and try submitting again. </kt-alert>\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"row form-input\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row mb-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Tanggal Buat</label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Tanggal Buat is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row mb-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Harga yang ditentukan</label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Harga yang ditentukan is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row form-input\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row mb-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Pilih Produk</label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Pilih Produk is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row mb-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Pilih Pengguna</label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Pilih Pengguna is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row form-input\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row mb-5\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" [disabled]=\"true\" mat-raised-button>\n\t\t\t\t\t\t\t\t\t\t<span class=\"sty-default\">Generate Kode Negosiasi</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row form-input\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Kode Negosiasi</label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<input matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Kode Negosiasi is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Pesan Kode Negosiasi (silahkan copy) </label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<textarea matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\"></textarea>\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Pesan Kode Negosiasi (silahkan copy) is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row form-input\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 row mb-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"crdate\" class=\"label-custom col-sm-6\">Deskripsi </label>\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<textarea matInput class=\"inpt-custom\" formControlName=\"name\" autocomplete=\"off\"></textarea>\n\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t>Deskripsi is\n\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!-- Form Input END -->\n\t\t\t</div>\n\t\t</section>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Daftar Kode Negosiasi'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"dataSource.loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['add']\" mat-raised-button color=\"primary\" class=\"sty-default\">Tambah Baru</button>\n\t\t</ng-container>\n\n\t\t<!-- <ng-container ktPortletTools>\n\t\t\t<button (click)=\"export()\" mat-raised-button color=\"primary\" class=\"ml-2 sty-default\">Export</button>\n\t\t</ng-container> -->\n\t</kt-portlet-header>\n\n\t<!-- Modal -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile sty-default\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid sty-default\">\n\t\t\t\t\t\t\t<input matInput class=\"sty-default\" placeholder=\"Search unit type\" #searchInput placeholder=\"Pencarian\" />\n\t\t\t\t\t\t\t<mat-hint align=\"start\"> <strong class=\"sty-default\">Cari</strong> berdasarkan Kode Negosiasi </mat-hint>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end::FILTERS -->\n\n\t\t\t<!-- start::GROUP ACTIONS -->\n\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\n\t\t\t<!-- Group actions are shared for all LISTS -->\n\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\" [ngClass]=\"{ show: selection.selected.length > 0 }\">\n\t\t\t\t<!-- We show 'Group Actions' div if smth are selected -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\n\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\n\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\"> <span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }} </label>\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\n\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"kt-form__control kt-form__group--inline\">\n\t\t\t\t\t\t\t<button (click)=\"fetchNegotiationCode()\" mat-raised-button matTooltip=\"Fetch selected unit\"  class=\"mat-button-mt-4\">\n\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\n\t\t\t\t\t\t\t\tFetch Selected\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end::GROUP ACTIONS -->\n\t\t</div>\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\n\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\n\t\t<div class=\"mat-table__wrapper\">\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\" matSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear>\n\t\t\t\t<!-- <ng-container matColumnDef=\"negotiationCodeCode\" >\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef >NegotiationCode ID</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">{{\tnegotiationCode.description | titlecase \t}}</mat-cell>\n\t\t\t\t</ng-container> -->\n\n\t\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef>Kode Negosiasi</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">{{ negotiationCode.description }}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"type\">\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef>Pengguna</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">{{ negotiationCode.description }}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"time\">\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef>Harga</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">{{ negotiationCode.description }}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"price\">\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef>Tanggal</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">{{ negotiationCode.description }}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"status\">\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef>Status</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">{{ negotiationCode.description }}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell class=\"sty-default\" *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell class=\"sty-default\" *matCellDef=\"let negotiationCode\">\n\t\t\t\t\t\t<button (click)=\"editNegotiationCode(negotiationCode.description)\" mat-icon-button color=\"primary\" matTooltip=\"Edit\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon></button\n\t\t\t\t\t\t>&nbsp;\n\t\t\t\t\t\t<!-- <button (click)=\"viewNegotiationCode(negotiationCode.description)\"  mat-icon-button color=\"primary\" matTooltip=\"View\">\n\t\t\t\t\t\t\t<mat-icon>visibility</mat-icon></button\n\t\t\t\t\t\t>&nbsp; -->\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"Delete\" type=\"button\" (click)=\"deleteNegotiationCode(negotiationCode)\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div>\n\t\t\t<!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\n\t\t</div>\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[10, 20, 50, 100, 500, 1000, 2000]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/negotiationCode.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/negotiationCode.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a [routerLink]=\"['/negotiationCode']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button>\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"sty-default\">Kembali</span>\n\t\t\t</a>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tNegotiationCode Info\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template matTabContent>\n\t\t\t\t\t<!--begin::Form-->\n\t\t\t\t\t<div *ngIf=\"negotiationCode\">\n\t\t\t\t\t\t<form [formGroup]=\"negotiationCodeForm\" class=\"kt-form kt-form--group-seperator-dashed\">\n\t\t\t\t\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\"> Oh snap! Change a few things up and try submitting again. </kt-alert>\n\t\t\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"NegotiationCode Id\" formControlName=\"negotiationCodeCode\" />\n\t\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t\t>NegotiationCode Id is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"NegotiationCode Name\" formControlName=\"negotiationCode\" />\n\t\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t\t>NegotiationCode Name is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Max Login\" formControlName=\"max_login\" />\n\t\t\t\t\t\t\t\t\t\t\t<mat-error\n\t\t\t\t\t\t\t\t\t\t\t\t>Max Login is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox [(ngModel)]=\"checker\" formControlName=\"active\">Active</mat-checkbox>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--end::Form-->\n\t\t\t\t</ng-template>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.action.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.action.ts ***!
  \****************************************************************/
/*! exports provided: NegotiationCodeActionTypes, NegotiationCodeOnServerCreated, NegotiationCodeCreated, NegotiationCodeUpdated, NegotiationCodeDeleted, NegotiationCodePageRequested, NegotiationCodePageLoaded, NegotiationCodePageCancelled, NegotiationCodePageToggleLoading, NegotiationCodeActionToggleLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeActionTypes", function() { return NegotiationCodeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeOnServerCreated", function() { return NegotiationCodeOnServerCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeCreated", function() { return NegotiationCodeCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeUpdated", function() { return NegotiationCodeUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeDeleted", function() { return NegotiationCodeDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodePageRequested", function() { return NegotiationCodePageRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodePageLoaded", function() { return NegotiationCodePageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodePageCancelled", function() { return NegotiationCodePageCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodePageToggleLoading", function() { return NegotiationCodePageToggleLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeActionToggleLoading", function() { return NegotiationCodeActionToggleLoading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Models
var NegotiationCodeActionTypes;
(function (NegotiationCodeActionTypes) {
    NegotiationCodeActionTypes["AllUsersRequested"] = "[NegotiationCode Module] All NegotiationCode Requested";
    NegotiationCodeActionTypes["AllUsersLoaded"] = "[NegotiationCode API] All NegotiationCode Loaded";
    NegotiationCodeActionTypes["NegotiationCodeOnServerCreated"] = "[Edit NegotiationCode Component] NegotiationCode On Server Created";
    NegotiationCodeActionTypes["NegotiationCodeCreated"] = "[Edit NegotiationCode Dialog] NegotiationCode Created";
    NegotiationCodeActionTypes["NegotiationCodeUpdated"] = "[Edit NegotiationCode Dialog] NegotiationCode Updated";
    NegotiationCodeActionTypes["NegotiationCodeDeleted"] = "[NegotiationCode List Page] NegotiationCode Deleted";
    NegotiationCodeActionTypes["NegotiationCodePageRequested"] = "[NegotiationCode List Page] NegotiationCode Page Requested";
    NegotiationCodeActionTypes["NegotiationCodePageLoaded"] = "[NegotiationCode API] NegotiationCode Page Loaded";
    NegotiationCodeActionTypes["NegotiationCodePageCancelled"] = "[NegotiationCode API] NegotiationCode Page Cancelled";
    NegotiationCodeActionTypes["NegotiationCodePageToggleLoading"] = "[NegotiationCode] NegotiationCode Page Toggle Loading";
    NegotiationCodeActionTypes["NegotiationCodeActionToggleLoading"] = "[NegotiationCode] NegotiationCode Action Toggle Loading";
})(NegotiationCodeActionTypes || (NegotiationCodeActionTypes = {}));
var NegotiationCodeOnServerCreated = /** @class */ (function () {
    function NegotiationCodeOnServerCreated(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodeOnServerCreated;
    }
    return NegotiationCodeOnServerCreated;
}());

var NegotiationCodeCreated = /** @class */ (function () {
    function NegotiationCodeCreated(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodeCreated;
    }
    return NegotiationCodeCreated;
}());

var NegotiationCodeUpdated = /** @class */ (function () {
    function NegotiationCodeUpdated(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodeUpdated;
    }
    return NegotiationCodeUpdated;
}());

var NegotiationCodeDeleted = /** @class */ (function () {
    function NegotiationCodeDeleted(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodeDeleted;
    }
    return NegotiationCodeDeleted;
}());

var NegotiationCodePageRequested = /** @class */ (function () {
    function NegotiationCodePageRequested(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodePageRequested;
    }
    return NegotiationCodePageRequested;
}());

var NegotiationCodePageLoaded = /** @class */ (function () {
    function NegotiationCodePageLoaded(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodePageLoaded;
    }
    return NegotiationCodePageLoaded;
}());

var NegotiationCodePageCancelled = /** @class */ (function () {
    function NegotiationCodePageCancelled() {
        this.type = NegotiationCodeActionTypes.NegotiationCodePageCancelled;
    }
    return NegotiationCodePageCancelled;
}());

var NegotiationCodePageToggleLoading = /** @class */ (function () {
    function NegotiationCodePageToggleLoading(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodePageToggleLoading;
    }
    return NegotiationCodePageToggleLoading;
}());

var NegotiationCodeActionToggleLoading = /** @class */ (function () {
    function NegotiationCodeActionToggleLoading(payload) {
        this.payload = payload;
        this.type = NegotiationCodeActionTypes.NegotiationCodeActionToggleLoading;
    }
    return NegotiationCodeActionToggleLoading;
}());



/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.datasource.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.datasource.ts ***!
  \********************************************************************/
/*! exports provided: NegotiationCodeDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeDataSource", function() { return NegotiationCodeDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _base_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _negotiationCode_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./negotiationCode.selector */ "./src/app/core/negotiationCode/negotiationCode.selector.ts");

// NGRX

// CRUD


var NegotiationCodeDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NegotiationCodeDataSource, _super);
    function NegotiationCodeDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loading$ = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_3__["selectNegotiationCodePageLoading"]));
        _this.isPreloadTextViewed$ = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_3__["selectNegotiationCodeShowInitWaitingMessage"]));
        _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_3__["selectNegotiationCodeInStore"])).subscribe(function (response) {
            _this.paginatorTotalSubject.next(response.totalCount);
            _this.entitySubject.next(response.items);
        });
        return _this;
    }
    return NegotiationCodeDataSource;
}(_base_crud__WEBPACK_IMPORTED_MODULE_2__["BaseDataSource"]));



/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.effect.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.effect.ts ***!
  \****************************************************************/
/*! exports provided: NegotiationCodeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeEffect", function() { return NegotiationCodeEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _negotiationCode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./negotiationCode.service */ "./src/app/core/negotiationCode/negotiationCode.service.ts");
/* harmony import */ var _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./negotiationCode.action */ "./src/app/core/negotiationCode/negotiationCode.action.ts");

// Angular

// RxJS


// NGRX


// Services


var NegotiationCodeEffect = /** @class */ (function () {
    function NegotiationCodeEffect(actions$, negotiationCode, store) {
        var _this = this;
        this.actions$ = actions$;
        this.negotiationCode = negotiationCode;
        this.store = store;
        this.showPageLoadingDistpatcher = new _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodePageToggleLoading"]({ isLoading: true });
        this.hidePageLoadingDistpatcher = new _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodePageToggleLoading"]({ isLoading: false });
        this.showActionLoadingDistpatcher = new _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeActionToggleLoading"]({ isLoading: true });
        this.hideActionLoadingDistpatcher = new _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeActionToggleLoading"]({ isLoading: false });
        this.loadNegotiationCodePage$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeActionTypes"].NegotiationCodePageRequested), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.negotiationCode.getListNegotiationCode(payload.page);
            var lastQuery = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(payload.page);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(requestToServer, lastQuery);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(JSON.stringify(response, null, 1), "response");
            var res;
            var result = { items: response[0].data.data, totalCount: response[0].totalCount, errorMessage: "", data: [] };
            var lastQuery = response[1];
            return new _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodePageLoaded"]({
                negotiationCode: result.items,
                totalCount: result.totalCount,
                page: lastQuery,
            });
        }));
        this.deleteNegotiationCode$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeActionTypes"].NegotiationCodeDeleted), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.negotiationCode.deleteNegotiationCode(payload.id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateNegotiationCode = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeActionTypes"].NegotiationCodeUpdated), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.negotiationCode.updateNegotiationCode(payload.negotiationCode);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createBlock$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeActionTypes"].NegotiationCodeOnServerCreated), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.negotiationCode.createNegotiationCode(payload.negotiationCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
                _this.store.dispatch(new _negotiationCode_action__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeCreated"]({ negotiationCode: res }));
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
    }
    NegotiationCodeEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _negotiationCode_service__WEBPACK_IMPORTED_MODULE_6__["NegotiationCodeService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NegotiationCodeEffect.prototype, "loadNegotiationCodePage$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NegotiationCodeEffect.prototype, "deleteNegotiationCode$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NegotiationCodeEffect.prototype, "updateNegotiationCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NegotiationCodeEffect.prototype, "createBlock$", void 0);
    NegotiationCodeEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _negotiationCode_service__WEBPACK_IMPORTED_MODULE_6__["NegotiationCodeService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], NegotiationCodeEffect);
    return NegotiationCodeEffect;
}());



/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.model.ts ***!
  \***************************************************************/
/*! exports provided: NegotiationCodeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeModel", function() { return NegotiationCodeModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_base/crud */ "./src/app/core/_base/crud/index.ts");


var NegotiationCodeModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NegotiationCodeModel, _super);
    function NegotiationCodeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegotiationCodeModel.prototype.clear = function () {
        this._id = undefined;
        this.name = "";
        this.type = "";
        this.time = "";
        this.price = undefined;
        this.price_float = undefined;
        this.createdDate = "";
        this.updatedBy = "";
        this.updatedDate = "";
    };
    return NegotiationCodeModel;
}(_base_crud__WEBPACK_IMPORTED_MODULE_1__["BaseModel"]));



/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: adapter, initialNegotiationCodeState, negotiationCodeReducer, getNegotiationCodeState, selectAll, selectEntities, selectIds, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialNegotiationCodeState", function() { return initialNegotiationCodeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negotiationCodeReducer", function() { return negotiationCodeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNegotiationCodeState", function() { return getNegotiationCodeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./negotiationCode.action */ "./src/app/core/negotiationCode/negotiationCode.action.ts");
/* harmony import */ var _querynegotiationCode_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./querynegotiationCode.model */ "./src/app/core/negotiationCode/querynegotiationCode.model.ts");

var _a;
// NGRX


// Actions


var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])({ selectId: function (model) { return model._id; } });
var initialNegotiationCodeState = adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery: new _querynegotiationCode_model__WEBPACK_IMPORTED_MODULE_4__["QueryNegotiationCodeModel"]({}),
    lastCreatedNegotiationCodeId: undefined,
    showInitWaitingMessage: true,
});
function negotiationCodeReducer(state, action) {
    if (state === void 0) { state = initialNegotiationCodeState; }
    switch (action.type) {
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodePageToggleLoading:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { listLoading: action.payload.isLoading, lastCreatedNegotiationCodeId: undefined });
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodeActionToggleLoading:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { actionsloading: action.payload.isLoading });
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodeOnServerCreated:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodeCreated:
            return adapter.addOne(action.payload.negotiationCode, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { lastCreatedBlockId: action.payload.negotiationCode._id }));
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodeUpdated:
            return adapter.updateOne(action.payload.partialNegotiationCode, state);
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodeDeleted:
            return adapter.removeOne(action.payload.id, state);
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodePageCancelled:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { listLoading: false, lastQuery: new _querynegotiationCode_model__WEBPACK_IMPORTED_MODULE_4__["QueryNegotiationCodeModel"]({}) });
        case _negotiationCode_action__WEBPACK_IMPORTED_MODULE_3__["NegotiationCodeActionTypes"].NegotiationCodePageLoaded: {
            return adapter.addMany(action.payload.negotiationCode, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initialNegotiationCodeState, { totalCount: action.payload.totalCount, lastQuery: action.payload.page, listLoading: false, showInitWaitingMessage: false }));
        }
        default:
            return state;
    }
}
var getNegotiationCodeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("negotiationCode");
var selectAll = (_a = adapter.getSelectors(), _a.selectAll), selectEntities = _a.selectEntities, selectIds = _a.selectIds, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.selector.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.selector.ts ***!
  \******************************************************************/
/*! exports provided: selectNegotiationCodeState, selectNegotiationCodeById, selectNegotiationCodePageLoading, selectNegotiationCodeActionLoading, selectLastCreatedNegotiationCodeId, selectNegotiationCodePageLastQuery, selectNegotiationCodeInStore, selectNegotiationCodeShowInitWaitingMessage, selectHasNegotiationCodeInStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodeState", function() { return selectNegotiationCodeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodeById", function() { return selectNegotiationCodeById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodePageLoading", function() { return selectNegotiationCodePageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodeActionLoading", function() { return selectNegotiationCodeActionLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLastCreatedNegotiationCodeId", function() { return selectLastCreatedNegotiationCodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodePageLastQuery", function() { return selectNegotiationCodePageLastQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodeInStore", function() { return selectNegotiationCodeInStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNegotiationCodeShowInitWaitingMessage", function() { return selectNegotiationCodeShowInitWaitingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHasNegotiationCodeInStore", function() { return selectHasNegotiationCodeInStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _base_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

// NGRX

// CRUD


var selectNegotiationCodeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("negotiationCode");
var selectNegotiationCodeById = function (negotiationCodeId) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) { return negotiationCodeState.entities[negotiationCodeId]; }); };
var selectNegotiationCodePageLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) {
    return negotiationCodeState.listLoading;
});
var selectNegotiationCodeActionLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) { return negotiationCodeState.actionsloading; });
var selectLastCreatedNegotiationCodeId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) { return negotiationCodeState.lastCreatedNegotiationCodeId; });
var selectNegotiationCodePageLastQuery = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) { return negotiationCodeState.lastQuery; });
var selectNegotiationCodeInStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) {
    var items = [];
    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["each"])(negotiationCodeState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new _base_crud__WEBPACK_IMPORTED_MODULE_2__["HttpExtenstionsModel"]();
    var result = httpExtension.sortArray(items, negotiationCodeState.lastQuery.sortField, negotiationCodeState.lastQuery.sortOrder);
    return new _base_crud__WEBPACK_IMPORTED_MODULE_2__["QueryResultsModel"](result, negotiationCodeState.totalCount, "");
});
var selectNegotiationCodeShowInitWaitingMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (negotiationCodeState) { return negotiationCodeState.showInitWaitingMessage; });
var selectHasNegotiationCodeInStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNegotiationCodeState, function (queryResult) {
    if (!queryResult.totalCount) {
        return false;
    }
    return true;
});


/***/ }),

/***/ "./src/app/core/negotiationCode/negotiationCode.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/negotiationCode/negotiationCode.service.ts ***!
  \*****************************************************************/
/*! exports provided: NegotiationCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeService", function() { return NegotiationCodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");







var API_NEGOTIATIONCODE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI + "/api/negotiation-codes";
var API_CSV = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI + "/api/excel/negotiationCode/export";
var NegotiationCodeService = /** @class */ (function () {
    function NegotiationCodeService(http) {
        this.http = http;
    }
    // get list negotiation code
    NegotiationCodeService.prototype.getListNegotiationCode = function (queryParams) {
        return axios__WEBPACK_IMPORTED_MODULE_6__["default"]
            .get(API_NEGOTIATIONCODE_URL + "?pagination[pageSize]=10&pagination[page]=1")
            .then(function (res) {
            var response = {
                status: "success",
                data: res.data,
                totalCount: 0,
            };
            return response;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NegotiationCodeService.prototype.findNegotiationCodeById = function (_id) {
        return this.http.get(API_NEGOTIATIONCODE_URL + "/" + _id);
    };
    NegotiationCodeService.prototype.deleteNegotiationCode = function (negotiationCodeId) {
        var url = API_NEGOTIATIONCODE_URL + "/delete/" + negotiationCodeId;
        return this.http.delete(url);
    };
    NegotiationCodeService.prototype.updateNegotiationCode = function (negotiationCode) {
        var url = API_NEGOTIATIONCODE_URL + "/edit/" + negotiationCode._id;
        return this.http.patch(url, negotiationCode);
    };
    NegotiationCodeService.prototype.createNegotiationCode = function (negotiationCode) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        httpHeaders.set("Content-Type", "application/json");
        return this.http.post(API_NEGOTIATIONCODE_URL + "/create", negotiationCode, { headers: httpHeaders });
    };
    NegotiationCodeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    NegotiationCodeService.prototype.generateNegotiationCodeCode = function () {
        var url = API_NEGOTIATIONCODE_URL + "/generate/code";
        return this.http.get(url);
    };
    NegotiationCodeService.prototype.exportExcel = function () {
        return file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"]("" + API_CSV, "export-negotiationCode.xlsx");
    };
    NegotiationCodeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NegotiationCodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NegotiationCodeService);
    return NegotiationCodeService;
}());



/***/ }),

/***/ "./src/app/core/negotiationCode/querynegotiationCode.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/negotiationCode/querynegotiationCode.model.ts ***!
  \********************************************************************/
/*! exports provided: QueryNegotiationCodeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryNegotiationCodeModel", function() { return QueryNegotiationCodeModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var QueryNegotiationCodeModel = /** @class */ (function () {
    // constructor overrides
    function QueryNegotiationCodeModel(_filter, _sortOrder, _sortField, _pageNumber, _limit) {
        if (_sortOrder === void 0) { _sortOrder = "asc"; }
        if (_sortField === void 0) { _sortField = ""; }
        if (_pageNumber === void 0) { _pageNumber = 1; }
        if (_limit === void 0) { _limit = 10; }
        this.filter = _filter;
        this.sortOrder = _sortOrder;
        this.sortField = _sortField;
        this.pageNumber = _pageNumber;
        this.limit = _limit;
    }
    return QueryNegotiationCodeModel;
}());



/***/ }),

/***/ "./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sty-default {\n  font-family: \"Poppins\", sans-serif;\n}\n\n::ng-deep section.customStyle .section {\n  color: #3d3d3d;\n  font-family: \"Poppins\", sans-serif;\n}\n\n::ng-deep section.customStyle .section .form-input-date .mat-form-field-infix {\n  font-family: \"Poppins\", sans-serif;\n  background-color: white;\n  width: 100%;\n  padding: 5px;\n  border: 1.5px solid rgba(0, 0, 0, 0.257);\n  border-radius: 3px;\n}\n\n::ng-deep section.customStyle .section .form-input-date .ic-date {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n::ng-deep section.customStyle .section .form-input-date .label-custom {\n  font-weight: 600;\n}\n\n::ng-deep section.customStyle .section .form-input .label-custom {\n  font-weight: 600;\n}\n\n::ng-deep section.customStyle .section .form-input .mat-form-field-infix {\n  font-family: \"Poppins\", sans-serif;\n  background-color: white;\n  border: 1.5px solid rgba(0, 0, 0, 0.257);\n  border-radius: 3px;\n  padding: 5px;\n}\n\n::ng-deep section.customStyle .section .inpt-custom {\n  font-family: \"Poppins\", sans-serif;\n}\n\n::ng-deep section.customStyle .section .fnt-disabled {\n  color: #3d3d3d74;\n}\n\n::ng-deep section.customStyle .section .clr-data {\n  background-color: #adadad22;\n}\n\n::ng-deep section.customStyle .section .n-card {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n/* faq.component.css */\n\n/* faq.component.css */\n\n.faq-item {\n  margin-bottom: 15px;\n}\n\n.submenu {\n  margin-top: 5px;\n}\n\n.submenu-item {\n  margin-top: 5px;\n}\n\n.nested-submenu {\n  margin-left: 15px;\n}\n\n.cst-btn {\n  background-color: #5d78ff;\n  padding: 2px 8px;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  font-size: 12px;\n  border: 2px solid #5d78ff;\n}\n\n.cst-btn-outline {\n  background-color: #fff;\n  padding: 2px 8px;\n  border-radius: 5px;\n  border: none;\n  color: #5d78ff;\n  font-size: 12px;\n  border: 2px solid #5d78ff;\n}\n\n.bg-prnt-zero {\n  align-items: center;\n}\n\n.bg-prnt-zero p {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n}\n\n.bg-prnt-zero .title-txt {\n  font-weight: 600;\n}\n\n.bg-prnt {\n  background-color: #fff;\n  border: 1.5px solid rgba(0, 0, 0, 0.164);\n  align-items: center;\n  padding: 12px;\n  border-radius: 5px;\n}\n\n.bg-prnt p {\n  margin: 0;\n  padding: 0;\n}\n\n.bg-prnt .title-txt {\n  font-weight: 500;\n}\n\n.bg-prnt-depth-2 {\n  background-color: #eff1ff;\n  border: 1.5px solid rgba(0, 0, 0, 0.164);\n  align-items: center;\n  padding: 12px;\n  border-radius: 5px;\n  margin-left: 10px;\n}\n\n.bg-prnt-depth-2 p {\n  margin: 0;\n  padding: 0;\n}\n\n.bg-prnt-depth-2 .title-txt {\n  font-weight: 500;\n}\n\n.bg-prnt-depth-3 {\n  background-color: #eff1ff;\n  border: 1.5px solid rgba(0, 0, 0, 0.164);\n  align-items: center;\n  padding: 12px;\n  border-radius: 5px;\n  margin-left: 20px;\n  margin-top: 5px;\n}\n\n.bg-prnt-depth-3 p {\n  margin: 0;\n  padding: 0;\n}\n\n.bg-prnt-depth-3 .title-txt {\n  font-weight: 500;\n}\n\n.bg-prnt-depth-4 {\n  background-color: rgba(255, 213, 25, 0.234);\n  border: 1.5px solid rgba(0, 0, 0, 0.164);\n  align-items: center;\n  padding: 12px;\n  border-radius: 5px;\n  margin-left: 30px;\n  margin-top: 5px;\n}\n\n.bg-prnt-depth-4 p {\n  margin: 0;\n  padding: 0;\n}\n\n.bg-prnt-depth-4 .title-txt {\n  font-weight: 500;\n}\n\n.bg-prnt-zero .title-txt,\n.bg-prnt .title-txt,\n.bg-prnt-depth-2 .title-txt,\n.bg-prnt-depth-3 .title-txt,\n.bg-prnt-depth-4 .title-txt,\n.bg-prnt-zero .btn-bg-2,\n.bg-prnt .btn-bg-2,\n.bg-prnt-depth-2 .btn-bg-2,\n.bg-prnt-depth-3 .btn-bg-2,\n.bg-prnt-depth-4 .btn-bg-2,\n.bg-prnt-zero .btn-bg-3,\n.bg-prnt .btn-bg-3,\n.bg-prnt-depth-3 .btn-bg-3,\n.bg-prnt-depth-3 .btn-bg-3,\n.bg-prnt-depth-4 .btn-bg-3 {\n  width: 33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbmVnb3RpYXRpb25Db2RlL2FkZC1uZWdvdGlhdGlvbkNvZGUvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGRvY3VtZW50c19kb25ueVxcZGV2ZWxvcGthblxccHJvamVjdHNcXHB1c2F0Y2V0YWtpbmRvbmVzaWFcXHNvdXJjZV9jb2RlXFxkYXNoYm9hcmQtb3BlcmF0aW9uYWwvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbmVnb3RpYXRpb25Db2RlXFxhZGQtbmVnb3RpYXRpb25Db2RlXFxhZGQtbmVnb3RpYXRpb25Db2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9uZWdvdGlhdGlvbkNvZGUvYWRkLW5lZ290aWF0aW9uQ29kZS9hZGQtbmVnb3RpYXRpb25Db2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0NBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7RUFDQSxrQ0FBQTtBQ0NEOztBREVDO0VBQ0Msa0NBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElDO0VBQ0MsZ0JBQUE7QUNGRjs7QURNQztFQUNDLGdCQUFBO0FDSkY7O0FET0M7RUFDQyxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQztFQUNDLGtDQUFBO0FDTkY7O0FEU0M7RUFDQyxnQkFBQTtBQ1BGOztBRFNDO0VBQ0MsMkJBQUE7QUNQRjs7QURVQztFQUNDLCtCQUFBO0VBQ0EsZ0NBQUE7QUNSRjs7QURhQSxzQkFBQTs7QUFFQSxzQkFBQTs7QUFFQTtFQUNDLG1CQUFBO0FDWkQ7O0FEZUE7RUFDQyxlQUFBO0FDWkQ7O0FEZUE7RUFDQyxlQUFBO0FDWkQ7O0FEZUE7RUFDQyxpQkFBQTtBQ1pEOztBRGdCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDYkQ7O0FEZUE7RUFDQyxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ1pEOztBRGdCQTtFQUNDLG1CQUFBO0FDYkQ7O0FEZ0JBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2JEOztBRGdCQTtFQUNDLGdCQUFBO0FDYkQ7O0FEZ0JBO0VBQ0Msc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDYkQ7O0FEZ0JBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUNiRDs7QURnQkE7RUFDQyxnQkFBQTtBQ2JEOztBRGlCQTtFQUNDLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDZEQ7O0FEaUJBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUNkRDs7QURpQkE7RUFDQyxnQkFBQTtBQ2REOztBRGtCQTtFQUNDLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2ZEOztBRGtCQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FDZkQ7O0FEa0JBO0VBQ0MsZ0JBQUE7QUNmRDs7QURrQkE7RUFDQywyQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNmRDs7QURrQkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQ2ZEOztBRGtCQTtFQUNDLGdCQUFBO0FDZkQ7O0FEa0JBOzs7Ozs7Ozs7Ozs7Ozs7RUFlQyxVQUFBO0FDZkQiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9uZWdvdGlhdGlvbkNvZGUvYWRkLW5lZ290aWF0aW9uQ29kZS9hZGQtbmVnb3RpYXRpb25Db2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eS1kZWZhdWx0IHtcblx0Zm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgc2VjdGlvbi5jdXN0b21TdHlsZSAuc2VjdGlvbiB7XG5cdGNvbG9yOiAjM2QzZDNkO1xuXHRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG5cblx0Ly8gIFN0eWxlIEZvcm0gRGF0ZVxuXHQuZm9ybS1pbnB1dC1kYXRlIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG5cdFx0Zm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0Ym9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjU3KTtcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdH1cblxuXHQuZm9ybS1pbnB1dC1kYXRlIC5pYy1kYXRlIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHR9XG5cblx0LmZvcm0taW5wdXQtZGF0ZSAubGFiZWwtY3VzdG9tIHtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cblx0Ly8gIFN0eWxlIEZvcm0gSW5wdXRcblx0LmZvcm0taW5wdXQgLmxhYmVsLWN1c3RvbSB7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXG5cdC5mb3JtLWlucHV0IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG5cdFx0Zm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0XHRib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNTcpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdH1cblxuXHQuaW5wdC1jdXN0b20ge1xuXHRcdGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcblx0fVxuXG5cdC5mbnQtZGlzYWJsZWQge1xuXHRcdGNvbG9yOiAjM2QzZDNkNzQ7XG5cdH1cblx0LmNsci1kYXRhIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhZGFkMjI7XG5cdH1cblxuXHQubi1jYXJkIHtcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuXHR9XG59XG5cbi8vIEN1c3RvbSBBY2NvcmRpbmdcbi8qIGZhcS5jb21wb25lbnQuY3NzICovXG5cbi8qIGZhcS5jb21wb25lbnQuY3NzICovXG5cbi5mYXEtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zdWJtZW51IHtcblx0bWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3VibWVudS1pdGVtIHtcblx0bWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubmVzdGVkLXN1Ym1lbnUge1xuXHRtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLy8gICBDdXN0b20gU3R5bGUgVXBkXG4uY3N0LWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1ZDc4ZmY7XG5cdHBhZGRpbmc6IDJweCA4cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjNWQ3OGZmO1xufVxuLmNzdC1idG4tb3V0bGluZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHBhZGRpbmc6IDJweCA4cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogIzVkNzhmZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjNWQ3OGZmO1xufVxuXG4vLyBEZXB0aCAwXG4uYmctcHJudC16ZXJvIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJnLXBybnQtemVybyBwIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmctcHJudC16ZXJvIC50aXRsZS10eHQge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuLy8gRGVwdGggMVxuLmJnLXBybnQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNjQpO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAxMnB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5iZy1wcm50IHAge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5iZy1wcm50IC50aXRsZS10eHQge1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4vLyBEZXB0aC0yXG4uYmctcHJudC1kZXB0aC0yIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcblx0Ym9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY0KTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMTJweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJnLXBybnQtZGVwdGgtMiBwIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4uYmctcHJudC1kZXB0aC0yIC50aXRsZS10eHQge1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4vLyBEZXB0aC0zXG4uYmctcHJudC1kZXB0aC0zIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcblx0Ym9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY0KTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMTJweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRtYXJnaW4tbGVmdDogMjBweDtcblx0bWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYmctcHJudC1kZXB0aC0zIHAge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5iZy1wcm50LWRlcHRoLTMgLnRpdGxlLXR4dCB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4vLyBEZXB0aC00XG4uYmctcHJudC1kZXB0aC00IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxMywgMjUsIDAuMjM0KTtcblx0Ym9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY0KTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMTJweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRtYXJnaW4tbGVmdDogMzBweDtcblx0bWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYmctcHJudC1kZXB0aC00IHAge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5iZy1wcm50LWRlcHRoLTQgLnRpdGxlLXR4dCB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5iZy1wcm50LXplcm8gLnRpdGxlLXR4dCxcbi5iZy1wcm50IC50aXRsZS10eHQsXG4uYmctcHJudC1kZXB0aC0yIC50aXRsZS10eHQsXG4uYmctcHJudC1kZXB0aC0zIC50aXRsZS10eHQsXG4uYmctcHJudC1kZXB0aC00IC50aXRsZS10eHQsXG4uYmctcHJudC16ZXJvIC5idG4tYmctMixcbi5iZy1wcm50IC5idG4tYmctMixcbi5iZy1wcm50LWRlcHRoLTIgLmJ0bi1iZy0yLFxuLmJnLXBybnQtZGVwdGgtMyAuYnRuLWJnLTIsXG4uYmctcHJudC1kZXB0aC00IC5idG4tYmctMixcbi5iZy1wcm50LXplcm8gLmJ0bi1iZy0zLFxuLmJnLXBybnQgLmJ0bi1iZy0zLFxuLmJnLXBybnQtZGVwdGgtMyAuYnRuLWJnLTMsXG4uYmctcHJudC1kZXB0aC0zIC5idG4tYmctMyxcbi5iZy1wcm50LWRlcHRoLTQgLmJ0bi1iZy0zIHtcblx0d2lkdGg6IDMzJTtcbn1cbiIsIi5zdHktZGVmYXVsdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIHNlY3Rpb24uY3VzdG9tU3R5bGUgLnNlY3Rpb24ge1xuICBjb2xvcjogIzNkM2QzZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuOjpuZy1kZWVwIHNlY3Rpb24uY3VzdG9tU3R5bGUgLnNlY3Rpb24gLmZvcm0taW5wdXQtZGF0ZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNTcpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46Om5nLWRlZXAgc2VjdGlvbi5jdXN0b21TdHlsZSAuc2VjdGlvbiAuZm9ybS1pbnB1dC1kYXRlIC5pYy1kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuOjpuZy1kZWVwIHNlY3Rpb24uY3VzdG9tU3R5bGUgLnNlY3Rpb24gLmZvcm0taW5wdXQtZGF0ZSAubGFiZWwtY3VzdG9tIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjo6bmctZGVlcCBzZWN0aW9uLmN1c3RvbVN0eWxlIC5zZWN0aW9uIC5mb3JtLWlucHV0IC5sYWJlbC1jdXN0b20ge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOjpuZy1kZWVwIHNlY3Rpb24uY3VzdG9tU3R5bGUgLnNlY3Rpb24gLmZvcm0taW5wdXQgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjU3KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG59XG46Om5nLWRlZXAgc2VjdGlvbi5jdXN0b21TdHlsZSAuc2VjdGlvbiAuaW5wdC1jdXN0b20ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG46Om5nLWRlZXAgc2VjdGlvbi5jdXN0b21TdHlsZSAuc2VjdGlvbiAuZm50LWRpc2FibGVkIHtcbiAgY29sb3I6ICMzZDNkM2Q3NDtcbn1cbjo6bmctZGVlcCBzZWN0aW9uLmN1c3RvbVN0eWxlIC5zZWN0aW9uIC5jbHItZGF0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGFkYWQyMjtcbn1cbjo6bmctZGVlcCBzZWN0aW9uLmN1c3RvbVN0eWxlIC5zZWN0aW9uIC5uLWNhcmQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLyogZmFxLmNvbXBvbmVudC5jc3MgKi9cbi8qIGZhcS5jb21wb25lbnQuY3NzICovXG4uZmFxLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc3VibWVudSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnN1Ym1lbnUtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5lc3RlZC1zdWJtZW51IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jc3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNzhmZjtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ZDc4ZmY7XG59XG5cbi5jc3QtYnRuLW91dGxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM1ZDc4ZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzVkNzhmZjtcbn1cblxuLmJnLXBybnQtemVybyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZy1wcm50LXplcm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJnLXBybnQtemVybyAudGl0bGUtdHh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJnLXBybnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNjQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5iZy1wcm50IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iZy1wcm50IC50aXRsZS10eHQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYmctcHJudC1kZXB0aC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY0KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJnLXBybnQtZGVwdGgtMiBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYmctcHJudC1kZXB0aC0yIC50aXRsZS10eHQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYmctcHJudC1kZXB0aC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY0KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYmctcHJudC1kZXB0aC0zIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iZy1wcm50LWRlcHRoLTMgLnRpdGxlLXR4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5iZy1wcm50LWRlcHRoLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjEzLCAyNSwgMC4yMzQpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNjQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5iZy1wcm50LWRlcHRoLTQgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJnLXBybnQtZGVwdGgtNCAudGl0bGUtdHh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJnLXBybnQtemVybyAudGl0bGUtdHh0LFxuLmJnLXBybnQgLnRpdGxlLXR4dCxcbi5iZy1wcm50LWRlcHRoLTIgLnRpdGxlLXR4dCxcbi5iZy1wcm50LWRlcHRoLTMgLnRpdGxlLXR4dCxcbi5iZy1wcm50LWRlcHRoLTQgLnRpdGxlLXR4dCxcbi5iZy1wcm50LXplcm8gLmJ0bi1iZy0yLFxuLmJnLXBybnQgLmJ0bi1iZy0yLFxuLmJnLXBybnQtZGVwdGgtMiAuYnRuLWJnLTIsXG4uYmctcHJudC1kZXB0aC0zIC5idG4tYmctMixcbi5iZy1wcm50LWRlcHRoLTQgLmJ0bi1iZy0yLFxuLmJnLXBybnQtemVybyAuYnRuLWJnLTMsXG4uYmctcHJudCAuYnRuLWJnLTMsXG4uYmctcHJudC1kZXB0aC0zIC5idG4tYmctMyxcbi5iZy1wcm50LWRlcHRoLTMgLmJ0bi1iZy0zLFxuLmJnLXBybnQtZGVwdGgtNCAuYnRuLWJnLTMge1xuICB3aWR0aDogMzMlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddNegotiationCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNegotiationCodeComponent", function() { return AddNegotiationCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.model */ "./src/app/core/negotiationCode/negotiationCode.model.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.selector */ "./src/app/core/negotiationCode/negotiationCode.selector.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.service */ "./src/app/core/negotiationCode/negotiationCode.service.ts");




// NGRX

// Layout





var AddNegotiationCodeComponent = /** @class */ (function () {
    function AddNegotiationCodeComponent(activatedRoute, router, negotiationCodeFB, subheaderService, layoutUtilsService, store, service, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.negotiationCodeFB = negotiationCodeFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.service = service;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.date1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.hasFormErrors = false;
        this.negotiationCodeName = "";
        this.faqs = [];
        this.features = [];
        this.selectedFeature = [];
        // Private properties
        this.subscriptions = [];
    }
    AddNegotiationCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_negotiationCode_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_8__["selectNegotiationCodeActionLoading"]));
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params.id;
            if (id) {
                _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_core_negotiationCode_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_8__["selectNegotiationCodeById"])(id))).subscribe(function (res) {
                    if (res) {
                        _this.negotiationCode = res;
                        _this.oldNegotiationCode = Object.assign({}, _this.negotiationCode);
                    }
                });
            }
            else {
                _this.negotiationCode = new _core_negotiationCode_negotiationCode_model__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeModel"]();
                _this.negotiationCode.clear();
            }
            _this.createForm();
        });
        this.subscriptions.push(routeSubscription);
    };
    AddNegotiationCodeComponent.prototype.createForm = function () {
        if (this.negotiationCode._id) {
            this.negotiationCodeForm = this.negotiationCodeFB.group({
                name: [this.negotiationCode.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                type: [this.negotiationCode.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                time: [this.negotiationCode.time, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                price: [this.negotiationCode.price, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                price_float: [this.negotiationCode.price_float],
            });
        }
        else {
            // this.getNumber();
            this.negotiationCodeForm = this.negotiationCodeFB.group({
                name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                price_float: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
    };
    AddNegotiationCodeComponent.prototype.goBackWithId = function () {
        var url = "/negotiationCode";
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    AddNegotiationCodeComponent.prototype.refreshNegotiationCode = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = ""; }
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = "/negotiationCode/edit/" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    AddNegotiationCodeComponent.prototype.onSubmit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.negotiationCodeForm.controls;
        /** check form */
        if (this.negotiationCodeForm.invalid) {
            Object.keys(controls).forEach(function (controlName) { return controls[controlName].markAsTouched(); });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        this.loading = true;
        var editedNegotiationCode = this.prepareNegotiationCode();
        if (this.faqs.length === 0) {
            var message = "Menu not detected, please refresh page";
            this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, true);
            return;
        }
        if (editedNegotiationCode._id) {
            this.updateNegotiationCode(editedNegotiationCode, withBack);
            return;
        }
        this.addNegotiationCode(editedNegotiationCode, withBack);
    };
    AddNegotiationCodeComponent.prototype.prepareNegotiationCode = function () {
        var controls = this.negotiationCodeForm.controls;
        var _negotiationCode = new _core_negotiationCode_negotiationCode_model__WEBPACK_IMPORTED_MODULE_7__["NegotiationCodeModel"]();
        _negotiationCode.clear();
        _negotiationCode._id = this.negotiationCode._id;
        _negotiationCode.name = controls.name.value;
        _negotiationCode.type = controls.type.value;
        _negotiationCode.time = controls.time.value;
        _negotiationCode.price = controls.price.value;
        return _negotiationCode;
    };
    AddNegotiationCodeComponent.prototype.addNegotiationCode = function (_negotiationCode, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        var addSubscription = this.service.createNegotiationCode(_negotiationCode).subscribe(function (res) {
            var message = "New NegotiationCode successfully has been added.";
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, true);
            var url = "/negotiationCode";
            _this.router.navigateByUrl(url, { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.error(err);
            var message = "Error while adding negotiationCode | " + err.statusText;
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, false);
        });
        this.subscriptions.push(addSubscription);
    };
    AddNegotiationCodeComponent.prototype.updateNegotiationCode = function (_negotiationCode, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        // Update User
        // tslint:disable-next-line:prefer-const
        var addSubscription = this.service.updateNegotiationCode(_negotiationCode).subscribe(function (res) {
            var message = "NegotiationCode successfully has been saved.";
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update, 5000, true, true);
            var url = "/negotiationCode";
            _this.router.navigateByUrl(url, { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.error(err);
            var message = "Error while adding negotiationCode | " + err.statusText;
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update, 5000, true, false);
        });
        this.subscriptions.push(addSubscription);
    };
    AddNegotiationCodeComponent.prototype.getComponentTitle = function () {
        var result = "Buat Kode Negosiasi";
        if (!this.negotiationCode || !this.negotiationCode._id) {
            return result;
        }
        result = "Edit NegotiationCode";
        return result;
    };
    AddNegotiationCodeComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    AddNegotiationCodeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * toggleSubMenu
     * @param item
     */
    AddNegotiationCodeComponent.prototype.toggleSubMenu = function (item) {
        item.showSubMenu = !item.showSubMenu;
    };
    /**
     * toggleNestedSubMenu
     * @param parentSubMenu
     * @param index
     */
    AddNegotiationCodeComponent.prototype.toggleNestedSubMenu = function (parentSubMenu, index) {
        parentSubMenu.submenu[index].showSubMenu = !parentSubMenu.submenu[index].showSubMenu;
    };
    /**
     * toggleNestedSubMenu
     * @param parentSubMenu
     * @param index
     */
    AddNegotiationCodeComponent.prototype.toggleNestedSubMenu2 = function (parentSubMenu, index, indexNested) {
        parentSubMenu.submenu[index].submenu[indexNested].showSubMenu = !parentSubMenu.submenu[index].submenu[indexNested].showSubMenu;
    };
    /**
     * handleNegotiationCodeNameChange
     * @param event
     */
    AddNegotiationCodeComponent.prototype.handleNegotiationCodeNameChange = function (event) {
        this.negotiationCodeName = event.target.value;
    };
    /**
     * shouldCheckboxBeChecked
     * @param faq
     * @returns
     */
    AddNegotiationCodeComponent.prototype.shouldCheckboxBeChecked = function (faq) {
        if (this.negotiationCode._id) {
            // return faq.negotiationCode.includes(this.negotiationCode.negotiationCode);
        }
        else
            return false;
    };
    /**
     * shouldFeatureCheckboxBeChecked
     * @param faq
     * @returns
     */
    AddNegotiationCodeComponent.prototype.shouldFeatureCheckboxBeChecked = function (featureName, type) {
        var controls = this.negotiationCodeForm.controls;
        var negotiationCodeName = controls.negotiationCode.value;
        var findSelectedFeature = this.features.find(function (data) { return data.name === featureName; });
        var findSelectedFeatureData = this.selectedFeature.find(function (data) { return data.name === featureName; });
        if (findSelectedFeatureData) {
            var findNegotiationCodeAccess = findSelectedFeatureData.negotiationCode_access.find(function (data) { return data.negotiationCode === negotiationCodeName; });
            if (findNegotiationCodeAccess) {
                if (type === "add")
                    return findNegotiationCodeAccess.add;
                else if (type === "edit")
                    return findNegotiationCodeAccess.edit;
                else if (type === "view")
                    return findNegotiationCodeAccess.view;
                else if (type === "delete")
                    return findNegotiationCodeAccess.delete;
                else if (type === "full-access")
                    return findNegotiationCodeAccess.fullAccess;
                else
                    return false;
            }
            else
                return false;
        }
        else if (findSelectedFeature) {
            var findNegotiationCodeAccess = findSelectedFeature.negotiationCode_access.find(function (data) { return data.negotiationCode === negotiationCodeName; });
            if (findNegotiationCodeAccess) {
                if (type === "add")
                    return findNegotiationCodeAccess.add;
                else if (type === "edit")
                    return findNegotiationCodeAccess.edit;
                else if (type === "view")
                    return findNegotiationCodeAccess.view;
                else if (type === "delete")
                    return findNegotiationCodeAccess.delete;
                else if (type === "full-access")
                    return findNegotiationCodeAccess.fullAccess;
                else
                    return false;
            }
            else
                return false;
        }
        else
            return false;
    };
    /**
     * handleCheckboxDepth1
     * @param event
     * @param faqIndex
     */
    AddNegotiationCodeComponent.prototype.handleCheckboxDepth1 = function (event, faqIndex) {
        var controls = this.negotiationCodeForm.controls;
        if (event.checked) {
            this.addNegotiationCodeToHierarchy(this.faqs[faqIndex], controls.negotiationCode.value);
        }
        else {
            this.removeNegotiationCodeFromHierarchy(this.faqs[faqIndex], controls.negotiationCode.value);
        }
    };
    /**
     * handleCheckboxDepth2
     * @param event
     * @param faqIndex
     * @param submenuIndex
     */
    AddNegotiationCodeComponent.prototype.handleCheckboxDepth2 = function (event, faqIndex, submenuIndex) {
        var controls = this.negotiationCodeForm.controls;
        if (event.checked) {
            this.addNegotiationCodeToHierarchy(this.faqs[faqIndex].submenu[submenuIndex], controls.negotiationCode.value);
        }
        else {
            this.removeNegotiationCodeFromHierarchy(this.faqs[faqIndex].submenu[submenuIndex], controls.negotiationCode.value);
        }
    };
    /**
     * handleCheckboxDepth3
     * @param event
     * @param faqIndex
     * @param submenuIndex
     * @param nestedIndex
     */
    AddNegotiationCodeComponent.prototype.handleCheckboxDepth3 = function (event, faqIndex, submenuIndex, nestedIndex) {
        var controls = this.negotiationCodeForm.controls;
        if (event.checked) {
            this.addNegotiationCodeToHierarchy(this.faqs[faqIndex].submenu[submenuIndex].submenu[nestedIndex], controls.negotiationCode.value);
        }
        else {
            this.removeNegotiationCodeFromHierarchy(this.faqs[faqIndex].submenu[submenuIndex].submenu[nestedIndex], controls.negotiationCode.value);
        }
    };
    /**
     * handleCheckboxDepth4
     * @param event
     * @param faqIndex
     * @param submenuIndex
     * @param nestedIndex
     */
    AddNegotiationCodeComponent.prototype.handleCheckboxDepth4 = function (event, faqIndex, submenuIndex, nestedIndex, nestedIndexAgain) {
        var controls = this.negotiationCodeForm.controls;
        if (event.checked) {
            this.addNegotiationCodeToHierarchy(this.faqs[faqIndex].submenu[submenuIndex].submenu[nestedIndex].submenu[nestedIndexAgain], controls.negotiationCode.value);
        }
        else {
            this.removeNegotiationCodeFromHierarchy(this.faqs[faqIndex].submenu[submenuIndex].submenu[nestedIndex].submenu[nestedIndexAgain], controls.negotiationCode.value);
        }
    };
    /**
     * handleCheckboxFeatureAccess
     * @param event
     * @param feature
     * @param accessType
     */
    AddNegotiationCodeComponent.prototype.handleCheckboxFeatureAccess = function (event, feature, accessType) {
        // Find the index of the feature in selectedFeature array
        var controls = this.negotiationCodeForm.controls;
        var index = this.selectedFeature.findIndex(function (item) { return item.name === feature; });
        if (event.checked) {
            // If checked, add or update the feature in selectedFeature array
            if (index !== -1) {
                // Update the specific access type
                if (accessType === "full-access") {
                    this.selectedFeature[index].negotiationCode_access[0]["add"] = true;
                    this.selectedFeature[index].negotiationCode_access[0]["edit"] = true;
                    this.selectedFeature[index].negotiationCode_access[0]["view"] = true;
                    this.selectedFeature[index].negotiationCode_access[0]["delete"] = true;
                    this.selectedFeature[index].negotiationCode_access[0]["fullAccess"] = true;
                }
                else {
                    this.selectedFeature[index].negotiationCode_access[0][accessType] = true;
                }
            }
            else if (accessType === "full-access") {
                // Add the feature to selectedFeature array with the specific access type
                var dataFindNegotiationCodeAccess = null;
                var findFeatureAccess = this.features.find(function (data) { return data.name == feature; });
                if (findFeatureAccess) {
                    var findNegotiationCodeAccess = findFeatureAccess.negotiationCode_access.find(function (data) { return data.negotiationCode == controls.negotiationCode.value; });
                    if (findNegotiationCodeAccess)
                        dataFindNegotiationCodeAccess = findNegotiationCodeAccess;
                }
                var newFeature = {
                    name: feature,
                    negotiationCode_access: [
                        {
                            negotiationCode: controls.negotiationCode.value,
                            edit: true,
                            view: true,
                            add: true,
                            delete: true,
                            fullAccess: true,
                        },
                    ],
                };
                newFeature.negotiationCode_access[0]["fullAccess"] = true;
                this.selectedFeature.push(newFeature);
            }
            else {
                // Add the feature to selectedFeature array with the specific access type
                var dataFindNegotiationCodeAccess = null;
                var findFeatureAccess = this.features.find(function (data) { return data.name == feature; });
                if (findFeatureAccess) {
                    var findNegotiationCodeAccess = findFeatureAccess.negotiationCode_access.find(function (data) { return data.negotiationCode == controls.negotiationCode.value; });
                    if (findNegotiationCodeAccess)
                        dataFindNegotiationCodeAccess = findNegotiationCodeAccess;
                }
                var newFeature = {
                    name: feature,
                    negotiationCode_access: [
                        {
                            negotiationCode: controls.negotiationCode.value,
                            edit: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.edit : false,
                            view: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.view : false,
                            add: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.add : false,
                            delete: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.delete : false,
                            fullAccess: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.fullAccess : false,
                        },
                    ],
                };
                newFeature.negotiationCode_access[0][accessType] = true;
                this.selectedFeature.push(newFeature);
            }
        }
        else {
            // If unchecked, update the specific access type to false or remove the feature from selectedFeature array
            if (index !== -1) {
                // Update the specific access type
                if (accessType === "full-access") {
                    this.selectedFeature[index].negotiationCode_access[0]["add"] = false;
                    this.selectedFeature[index].negotiationCode_access[0]["edit"] = false;
                    this.selectedFeature[index].negotiationCode_access[0]["view"] = false;
                    this.selectedFeature[index].negotiationCode_access[0]["delete"] = false;
                    this.selectedFeature[index].negotiationCode_access[0]["fullAccess"] = false;
                }
                else {
                    this.selectedFeature[index].negotiationCode_access[0][accessType] = false;
                }
            }
            else if (accessType === "full-access") {
                // Add the feature to selectedFeature array with the specific access type
                var dataFindNegotiationCodeAccess = null;
                var findFeatureAccess = this.features.find(function (data) { return data.name == feature; });
                if (findFeatureAccess) {
                    var findNegotiationCodeAccess = findFeatureAccess.negotiationCode_access.find(function (data) { return data.negotiationCode == controls.negotiationCode.value; });
                    if (findNegotiationCodeAccess)
                        dataFindNegotiationCodeAccess = findNegotiationCodeAccess;
                }
                var newFeature = {
                    name: feature,
                    negotiationCode_access: [
                        {
                            negotiationCode: controls.negotiationCode.value,
                            edit: false,
                            view: false,
                            add: false,
                            delete: false,
                            fullAccess: false,
                        },
                    ],
                };
                newFeature.negotiationCode_access[0]["fullAccess"] = false;
                this.selectedFeature.push(newFeature);
            }
            else {
                // Add the feature to selectedFeature array with the specific access type
                var dataFindNegotiationCodeAccess = null;
                var findFeatureAccess = this.features.find(function (data) { return data.name == feature; });
                if (findFeatureAccess) {
                    var findNegotiationCodeAccess = findFeatureAccess.negotiationCode_access.find(function (data) { return data.negotiationCode == controls.negotiationCode.value; });
                    if (findNegotiationCodeAccess)
                        dataFindNegotiationCodeAccess = findNegotiationCodeAccess;
                }
                var newFeature = {
                    name: feature,
                    negotiationCode_access: [
                        {
                            negotiationCode: controls.negotiationCode.value,
                            edit: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.edit : false,
                            view: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.view : false,
                            add: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.add : false,
                            delete: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.delete : false,
                            fullAccess: dataFindNegotiationCodeAccess ? dataFindNegotiationCodeAccess.fullAccess : false,
                        },
                    ],
                };
                newFeature.negotiationCode_access[0][accessType] = false;
                this.selectedFeature.push(newFeature);
            }
        }
    };
    /**
     * changeAmount
     * @param event
     * @param id
     */
    AddNegotiationCodeComponent.prototype.changeAmount = function (event) {
        this.toCurrency(event);
    };
    /**
     * toCurrency
     * @param event
     * @param id
     * @returns
     */
    AddNegotiationCodeComponent.prototype.toCurrency = function (event) {
        var controls = this.negotiationCodeForm.controls;
        var value = event.target.value;
        var number_string = value.replace(/[^-\d,]/g, "").toString(), isNegative = false;
        if (number_string.startsWith("-")) {
            isNegative = true;
            number_string = number_string.substr(1);
        }
        var split = number_string.split(","), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        // tambahkan titik jika yang di input sudah menjadi value ribuan
        var separator;
        if (ribuan) {
            separator = sisa ? "." : "";
            rupiah += separator + ribuan.join(".");
        }
        if (split.length > 1) {
            rupiah += "," + split[1];
        }
        if (isNegative) {
            rupiah = "-" + rupiah;
        }
        controls.price.setValue(rupiah);
        controls.price_float.setValue(rupiah);
        return rupiah;
    };
    // Helper function to add a negotiationCode to the hierarchy
    AddNegotiationCodeComponent.prototype.addNegotiationCodeToHierarchy = function (item, negotiationCode) {
        if (item.negotiationCode.indexOf(negotiationCode) === -1) {
            item.negotiationCode.push(negotiationCode);
        }
    };
    // Helper function to remove a negotiationCode from the hierarchy
    AddNegotiationCodeComponent.prototype.removeNegotiationCodeFromHierarchy = function (item, negotiationCode) {
        var negotiationCodeIndex = item.negotiationCode.indexOf(negotiationCode);
        if (negotiationCodeIndex !== -1) {
            item.negotiationCode.splice(negotiationCodeIndex, 1);
        }
    };
    AddNegotiationCodeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_9__["NegotiationCodeService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] }
    ]; };
    AddNegotiationCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-add-negotiationCode",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-negotiationCode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-negotiationCode.component.scss */ "./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["SubheaderService"], _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_9__["NegotiationCodeService"], _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"]])
    ], AddNegotiationCodeComponent);
    return AddNegotiationCodeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-sort-header-container:not(.mat-sort-header-sorted) .mat-sort-header-arrow {\n  opacity: 0.54 !important;\n  transform: translateY(0px) !important;\n}\n\n.sty-default {\n  font-family: \"Poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbmVnb3RpYXRpb25Db2RlL2xpc3QtbmVnb3RpYXRpb25Db2RlL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxkb2N1bWVudHNfZG9ubnlcXGRldmVsb3BrYW5cXHByb2plY3RzXFxwdXNhdGNldGFraW5kb25lc2lhXFxzb3VyY2VfY29kZVxcZGFzaGJvYXJkLW9wZXJhdGlvbmFsL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG5lZ290aWF0aW9uQ29kZVxcbGlzdC1uZWdvdGlhdGlvbkNvZGVcXGxpc3QtbmVnb3RpYXRpb25Db2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9uZWdvdGlhdGlvbkNvZGUvbGlzdC1uZWdvdGlhdGlvbkNvZGUvbGlzdC1uZWdvdGlhdGlvbkNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbmVnb3RpYXRpb25Db2RlL2xpc3QtbmVnb3RpYXRpb25Db2RlL2xpc3QtbmVnb3RpYXRpb25Db2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyOm5vdCgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCkgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgb3BhY2l0eTogMC41NCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5zdHktZGVmYXVsdCB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn0iLCI6Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXI6bm90KC5tYXQtc29ydC1oZWFkZXItc29ydGVkKSAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgb3BhY2l0eTogMC41NCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSAhaW1wb3J0YW50O1xufVxuXG4uc3R5LWRlZmF1bHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ListUnittypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUnittypeComponent", function() { return ListUnittypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.action */ "./src/app/core/negotiationCode/negotiationCode.action.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.datasource */ "./src/app/core/negotiationCode/negotiationCode.datasource.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.service */ "./src/app/core/negotiationCode/negotiationCode.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_negotiationCode_querynegotiationCode_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/negotiationCode/querynegotiationCode.model */ "./src/app/core/negotiationCode/querynegotiationCode.model.ts");

// Angular


// Material


// RXJS


// NGRX

//services








var ListUnittypeComponent = /** @class */ (function () {
    function ListUnittypeComponent(activatedRoute, store, router, service, layoutUtilsService, subheaderService, cdr, http, modalService) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.service = service;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.http = http;
        this.modalService = modalService;
        this.displayedColumns = ["name", "type", "time", "price", "status", "actions"];
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.negotiationCodeResult = [];
        this.data = localStorage.getItem("currentUser");
        this.dataUser = JSON.parse(this.data);
        this.negotiationCode = this.dataUser.role;
        // Subscriptions
        this.featureAccess = null;
        this.subscriptions = [];
    }
    ListUnittypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.loadNegotiationCodeList();
        }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.searchInput.nativeElement, "keyup")
            .pipe(
        // tslint:disable-next-line:max-line-length
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(50), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), // This operator will eliminate duplicate values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadNegotiationCodeList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle("Kode Negosiasi");
        // Init DataSource
        this.dataSource = new _core_negotiationCode_negotiationCode_datasource__WEBPACK_IMPORTED_MODULE_10__["NegotiationCodeDataSource"](this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (res) {
            _this.negotiationCodeResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First Load
        this.loadNegotiationCodeList();
    };
    ListUnittypeComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value.toLowerCase();
        filter.name = "" + searchText;
        return filter;
    };
    ListUnittypeComponent.prototype.loadNegotiationCodeList = function () {
        this.selection.clear();
        var queryParams = new _core_negotiationCode_querynegotiationCode_model__WEBPACK_IMPORTED_MODULE_15__["QueryNegotiationCodeModel"](this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex + 1, this.paginator.pageSize);
        this.store.dispatch(new _core_negotiationCode_negotiationCode_action__WEBPACK_IMPORTED_MODULE_9__["NegotiationCodePageRequested"]({ page: queryParams }));
        this.selection.clear();
    };
    ListUnittypeComponent.prototype.deleteNegotiationCode = function (_item) {
        var _this = this;
        // tslint:disable-next-line:variable-name
        var _title = "Kode Negosiasi Delete";
        // tslint:disable-next-line:variable-name
        var _description = "Are you sure to permanently delete this negotiationCode?";
        var _waitDesciption = "Kode Negosiasi is deleting...";
        var _deleteMessage = "Kode Negosiasi has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new _core_negotiationCode_negotiationCode_action__WEBPACK_IMPORTED_MODULE_9__["NegotiationCodeDeleted"]({ id: _item._id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["MessageType"].Delete);
        });
    };
    ListUnittypeComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.negotiationCodeResult.length;
        return numSelected === numRows;
    };
    ListUnittypeComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.negotiationCodeResult.length) {
            this.selection.clear();
        }
        else {
            this.negotiationCodeResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    ListUnittypeComponent.prototype.editNegotiationCode = function (id) {
        this.router.navigate(["edit", id], { relativeTo: this.activatedRoute });
    };
    ListUnittypeComponent.prototype.viewNegotiationCode = function (id) {
        this.router.navigate(["view", id], { relativeTo: this.activatedRoute });
    };
    ListUnittypeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    ListUnittypeComponent.prototype.export = function () {
        this.service.exportExcel();
    };
    ListUnittypeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_12__["NegotiationCodeService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_11__["SubheaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ListUnittypeComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sort1", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ListUnittypeComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("searchInput", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ListUnittypeComponent.prototype, "searchInput", void 0);
    ListUnittypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-list-negotiationCode",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-negotiationCode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-negotiationCode.component.scss */ "./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_12__["NegotiationCodeService"], _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"], _core_base_layout__WEBPACK_IMPORTED_MODULE_11__["SubheaderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"]])
    ], ListUnittypeComponent);
    return ListUnittypeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/negotiationCode/negotiationCode.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/negotiationCode.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL25lZ290aWF0aW9uQ29kZS9uZWdvdGlhdGlvbkNvZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/pages/negotiationCode/negotiationCode.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/negotiationCode.component.ts ***!
  \**************************************************************************/
/*! exports provided: NegotiationCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeComponent", function() { return NegotiationCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NegotiationCodeComponent = /** @class */ (function () {
    function NegotiationCodeComponent() {
    }
    NegotiationCodeComponent.prototype.ngOnInit = function () { };
    NegotiationCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-negotiationCode",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./negotiationCode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/negotiationCode.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./negotiationCode.component.scss */ "./src/app/views/pages/negotiationCode/negotiationCode.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NegotiationCodeComponent);
    return NegotiationCodeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/negotiationCode/negotiationCode.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/negotiationCode.module.ts ***!
  \***********************************************************************/
/*! exports provided: NegotiationCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationCodeModule", function() { return NegotiationCodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _partials_content_crud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../partials/content/crud */ "./src/app/views/partials/content/crud/index.ts");
/* harmony import */ var _negotiationCode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./negotiationCode.component */ "./src/app/views/pages/negotiationCode/negotiationCode.component.ts");
/* harmony import */ var _list_negotiationCode_list_negotiationCode_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-negotiationCode/list-negotiationCode.component */ "./src/app/views/pages/negotiationCode/list-negotiationCode/list-negotiationCode.component.ts");
/* harmony import */ var _add_negotiationCode_add_negotiationCode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-negotiationCode/add-negotiationCode.component */ "./src/app/views/pages/negotiationCode/add-negotiationCode/add-negotiationCode.component.ts");
/* harmony import */ var _view_negotiationCode_view_negotiationCode_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-negotiationCode/view-negotiationCode.component */ "./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_negotiationCode_negotiationCode_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/negotiationCode/negotiationCode.reducer */ "./src/app/core/negotiationCode/negotiationCode.reducer.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_effect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/negotiationCode/negotiationCode.effect */ "./src/app/core/negotiationCode/negotiationCode.effect.ts");

// Angular





// NGRX


// Translate


// Services

// Shared

// Components




// Material



var routes = [
    {
        path: "",
        component: _negotiationCode_component__WEBPACK_IMPORTED_MODULE_12__["NegotiationCodeComponent"],
        children: [
            {
                path: "",
                component: _list_negotiationCode_list_negotiationCode_component__WEBPACK_IMPORTED_MODULE_13__["ListUnittypeComponent"],
            },
            {
                path: "add",
                component: _add_negotiationCode_add_negotiationCode_component__WEBPACK_IMPORTED_MODULE_14__["AddNegotiationCodeComponent"],
            },
            {
                path: "edit/:id",
                component: _add_negotiationCode_add_negotiationCode_component__WEBPACK_IMPORTED_MODULE_14__["AddNegotiationCodeComponent"],
            },
            {
                path: "view/:id",
                component: _view_negotiationCode_view_negotiationCode_component__WEBPACK_IMPORTED_MODULE_15__["ViewNegotiationCodeComponent"],
            },
        ],
    },
];
var NegotiationCodeModule = /** @class */ (function () {
    function NegotiationCodeModule() {
    }
    NegotiationCodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__["PartialsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature("negotiationCode", _core_negotiationCode_negotiationCode_reducer__WEBPACK_IMPORTED_MODULE_17__["negotiationCodeReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_core_negotiationCode_negotiationCode_effect__WEBPACK_IMPORTED_MODULE_18__["NegotiationCodeEffect"]]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(), _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]],
            providers: [
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["InterceptService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["InterceptService"],
                    multi: true,
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DEFAULT_OPTIONS"],
                    useValue: {
                        hasBackdrop: true,
                        panelClass: "kt-mat-dialog-container__wrapper",
                        height: "auto",
                        width: "900px",
                    },
                },
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["HttpUtilsService"],
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["TypesUtilsService"],
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["LayoutUtilsService"],
            ],
            entryComponents: [_partials_content_crud__WEBPACK_IMPORTED_MODULE_11__["ActionNotificationComponent"], _negotiationCode_component__WEBPACK_IMPORTED_MODULE_12__["NegotiationCodeComponent"]],
            declarations: [_negotiationCode_component__WEBPACK_IMPORTED_MODULE_12__["NegotiationCodeComponent"], _list_negotiationCode_list_negotiationCode_component__WEBPACK_IMPORTED_MODULE_13__["ListUnittypeComponent"], _add_negotiationCode_add_negotiationCode_component__WEBPACK_IMPORTED_MODULE_14__["AddNegotiationCodeComponent"], _view_negotiationCode_view_negotiationCode_component__WEBPACK_IMPORTED_MODULE_15__["ViewNegotiationCodeComponent"]],
        })
    ], NegotiationCodeModule);
    return NegotiationCodeModule;
}());



/***/ }),

/***/ "./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL25lZ290aWF0aW9uQ29kZS92aWV3LW5lZ290aWF0aW9uQ29kZS92aWV3LW5lZ290aWF0aW9uQ29kZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ViewNegotiationCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNegotiationCodeComponent", function() { return ViewNegotiationCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.selector */ "./src/app/core/negotiationCode/negotiationCode.selector.ts");
/* harmony import */ var _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/negotiationCode/negotiationCode.service */ "./src/app/core/negotiationCode/negotiationCode.service.ts");




// NGRX

// Layout




var ViewNegotiationCodeComponent = /** @class */ (function () {
    function ViewNegotiationCodeComponent(activatedRoute, router, negotiationCodeFB, subheaderService, layoutUtilsService, store, service, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.negotiationCodeFB = negotiationCodeFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.service = service;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.date1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.hasFormErrors = false;
        // Private properties
        this.subscriptions = [];
    }
    ViewNegotiationCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_negotiationCode_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_7__["selectNegotiationCodeActionLoading"]));
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params.id;
            if (id) {
                _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_core_negotiationCode_negotiationCode_selector__WEBPACK_IMPORTED_MODULE_7__["selectNegotiationCodeById"])(id))).subscribe(function (res) {
                    if (res) {
                        // this.checker = res.active;
                        _this.negotiationCode = res;
                        _this.oldNegotiationCode = Object.assign({}, _this.negotiationCode);
                        _this.initNegotiationCode();
                    }
                });
            }
        });
        this.subscriptions.push(routeSubscription);
    };
    ViewNegotiationCodeComponent.prototype.initNegotiationCode = function () {
        this.createForm();
    };
    ViewNegotiationCodeComponent.prototype.createForm = function () {
        if (this.negotiationCode._id) {
            this.negotiationCodeForm = this.negotiationCodeFB.group({
            // negotiationCodeCode: [{value:this.negotiationCode.negotiationCodeCode, disabled:true}],
            // negotiationCode: [{value:this.negotiationCode.negotiationCode, disabled:true}],
            // active: [{value:this.negotiationCode.active, disabled:true}],
            // max_login: [{value:this.negotiationCode.max_login, disabled:true}],
            });
        }
    };
    ViewNegotiationCodeComponent.prototype.goBackWithId = function () {
        var url = "/negotiationCode";
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    ViewNegotiationCodeComponent.prototype.refreshNegotiationCode = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = ""; }
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = "/negotiationCode/edit/" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    ViewNegotiationCodeComponent.prototype.getComponentTitle = function () {
        var result = "View NegotiationCode";
        return result;
    };
    ViewNegotiationCodeComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ViewNegotiationCodeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    ViewNegotiationCodeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_8__["NegotiationCodeService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] }
    ]; };
    ViewNegotiationCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-view-negotiationCode",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-negotiationCode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-negotiationCode.component.scss */ "./src/app/views/pages/negotiationCode/view-negotiationCode/view-negotiationCode.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["SubheaderService"], _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _core_negotiationCode_negotiationCode_service__WEBPACK_IMPORTED_MODULE_8__["NegotiationCodeService"], _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"]])
    ], ViewNegotiationCodeComponent);
    return ViewNegotiationCodeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-negotiationCode-negotiationCode-module.58a59734a47b3266f202.js.map