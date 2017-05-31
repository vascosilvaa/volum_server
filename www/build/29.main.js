webpackJsonp([29],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register0__ = __webpack_require__(620);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register0Module", function() { return Register0Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register0Module = (function () {
    function Register0Module() {
    }
    return Register0Module;
}());
Register0Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register0__["a" /* Register0 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register0__["a" /* Register0 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register0__["a" /* Register0 */]
        ]
    })
], Register0Module);

//# sourceMappingURL=register0.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register0; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Register0 = (function () {
    function Register0(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = 0;
    }
    Register0.prototype.onSubmit = function () {
        this.navCtrl.push("Register1", { type: this.type });
    };
    return Register0;
}());
Register0 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register0',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register0\register0.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent color="primary">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-top class="backgroundBlue">\n\n    <ion-list class="listRegister" no-lines radio-group [(ngModel)]="type">\n\n        <ion-item>\n\n            <h1 class="textWhite" text-wrap>Diga-nos se é um utilizador ou uma instituição.</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Utilizador</ion-label>\n\n            <ion-radio value="0" color="secondary"></ion-radio>\n\n        </ion-item>\n\n        <ion-item padding-bottom>\n\n            <ion-label>Instituição</ion-label>\n\n            <ion-radio value="1" color="secondary"></ion-radio>\n\n        </ion-item>\n\n        <ion-item padding-top>\n\n            <button ion-fab color="light" item-right no-margin mode="ios" (tap)="onSubmit()"><ion-icon name="arrow-forward"></ion-icon></button>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register0\register0.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Register0);

//# sourceMappingURL=register0.js.map

/***/ })

});
//# sourceMappingURL=29.main.js.map