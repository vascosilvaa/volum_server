webpackJsonp([25],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register5__ = __webpack_require__(625);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register5Module", function() { return Register5Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register5Module = (function () {
    function Register5Module() {
    }
    return Register5Module;
}());
Register5Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register5__["a" /* Register5 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register5__["a" /* Register5 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register5__["a" /* Register5 */]
        ]
    })
], Register5Module);

//# sourceMappingURL=register5.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register5; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Register5 = (function () {
    function Register5(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // GET DATA
        this.type = this.navParams.get('type');
        this.name = this.navParams.get('name');
        this.email = this.navParams.get('email');
        this.password = this.navParams.get('password');
        this.birthday = this.navParams.get('birthday');
        this.gender = 0;
    }
    Register5.prototype.onSubmit = function () {
        this.navCtrl.push("Register6", { type: this.type, name: this.name, email: this.email, password: this.password, birthday: this.birthday, gender: this.gender });
    };
    return Register5;
}());
Register5 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register5',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register5\register5.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent color="primary">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-top class="backgroundBlue">\n\n    <ion-list class="listRegister" no-lines radio-group [(ngModel)]="gender">\n\n        <ion-item>\n\n            <h1 class="textWhite" text-wrap>Qual é o seu género?</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Feminino</ion-label>\n\n            <ion-radio value="0" color="secondary"></ion-radio>\n\n        </ion-item>\n\n        <ion-item padding-bottom>\n\n            <ion-label>Masculino</ion-label>\n\n            <ion-radio value="1" color="secondary"></ion-radio>\n\n        </ion-item>\n\n        <ion-item padding-top>\n\n            <button ion-fab color="light" item-right no-margin mode="ios" (tap)="onSubmit()"><ion-icon name="arrow-forward"></ion-icon></button>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register5\register5.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Register5);

//# sourceMappingURL=register5.js.map

/***/ })

});
//# sourceMappingURL=25.main.js.map