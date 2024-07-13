(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/offlineOrders/offlineOrders.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/offlineOrders/offlineOrders.service.ts ***!
  \*************************************************************/
/*! exports provided: OfflineOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineOrdersService", function() { return OfflineOrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");







var API_ORDEROFFLINE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI + "/api/order-offlines";
var API_CSV = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI + "/api/excel/offlineOrders/export";
var OfflineOrdersService = /** @class */ (function () {
    function OfflineOrdersService(http) {
        this.http = http;
    }
    // get list block group
    OfflineOrdersService.prototype.getListOfflineOrders = function (queryParams) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            axios__WEBPACK_IMPORTED_MODULE_6__["default"]
                .get(API_ORDEROFFLINE_URL + "?sort[createdAt]=desc&pagination[pageSize]=" + queryParams.limit + "&pagination[page]=" + queryParams.pageNumber + "&filters[invoice_number][$containsi]=" + (queryParams.text ? queryParams.text : ""))
                .then(function (res) {
                var response = {
                    status: "success",
                    data: res.data.data,
                    totalCount: res.data.meta.pagination.total,
                };
                observer.next(response);
                observer.complete();
            })
                .catch(function (error) {
                console.error("Error fetching data:", error);
                observer.error(error);
            });
        });
    };
    // get list all no filter
    OfflineOrdersService.prototype.getListOfflineOrdersAll = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            axios__WEBPACK_IMPORTED_MODULE_6__["default"]
                .get(API_ORDEROFFLINE_URL + "?fields[0]=id")
                .then(function (res) {
                var response = {
                    status: "success",
                    data: res.data.data,
                    totalCount: res.data.meta.pagination.total,
                };
                observer.next(response);
                observer.complete();
            })
                .catch(function (error) {
                console.error("Error fetching data:", error);
                observer.error(error);
            });
        });
    };
    OfflineOrdersService.prototype.findOfflineOrdersById = function (id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            axios__WEBPACK_IMPORTED_MODULE_6__["default"]
                .get(API_ORDEROFFLINE_URL + "/" + id + "?populate=order_details")
                .then(function (res) {
                observer.next(res.data);
                observer.complete();
            })
                .catch(function (error) {
                console.error("Error fetching data:", error);
                observer.error(error);
            });
        });
    };
    OfflineOrdersService.prototype.deleteOfflineOrders = function (offlineOrdersId) {
        var url = API_ORDEROFFLINE_URL + "/delete/" + offlineOrdersId;
        return this.http.delete(url);
    };
    OfflineOrdersService.prototype.updateOfflineOrders = function (offlineOrders) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            axios__WEBPACK_IMPORTED_MODULE_6__["default"]
                .put(API_ORDEROFFLINE_URL + "/" + offlineOrders.id, offlineOrders)
                .then(function (res) {
                observer.next(res);
                observer.complete();
            })
                .catch(function (error) {
                console.log(error);
                observer.error(error);
            });
        });
    };
    OfflineOrdersService.prototype.createOfflineOrders = function (body) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            axios__WEBPACK_IMPORTED_MODULE_6__["default"]
                .post("" + API_ORDEROFFLINE_URL, body)
                .then(function (res) {
                observer.next(res);
                observer.complete();
            })
                .catch(function (error) {
                console.log(error);
                observer.error(error);
            });
        });
    };
    OfflineOrdersService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    OfflineOrdersService.prototype.generateOfflineOrdersCode = function () {
        var url = API_ORDEROFFLINE_URL + "/generate/code";
        return this.http.get(url);
    };
    OfflineOrdersService.prototype.exportExcel = function () {
        return file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"]("" + API_CSV, "export-offlineOrders.xlsx");
    };
    OfflineOrdersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OfflineOrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OfflineOrdersService);
    return OfflineOrdersService;
}());



/***/ })

}]);
//# sourceMappingURL=common.261c7683ecf01f986fbc.js.map