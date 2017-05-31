webpackJsonp([21],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register4__ = __webpack_require__(651);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register4Module", function() { return Register4Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register4Module = (function () {
    function Register4Module() {
    }
    return Register4Module;
}());
Register4Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register4__["a" /* Register4 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register4__["a" /* Register4 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register4__["a" /* Register4 */]
        ]
    })
], Register4Module);

//# sourceMappingURL=register4.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register4; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register4 = (function () {
    function Register4(navCtrl, navParams, _fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        // GET DATA
        this.type = this.navParams.get('type');
        this.name = this.navParams.get('name');
        this.email = this.navParams.get('email');
        this.password = this.navParams.get('password');
        this.registo4 = this._fb.group({
            birthday: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
    }
    Register4.prototype.onSubmit = function (value, valid) {
        this.registo4.controls.birthday.markAsTouched();
        if (valid == true) {
            this.navCtrl.push("Register5", { type: this.type, name: this.name, email: this.email, password: this.password, birthday: value.birthday });
        }
    };
    return Register4;
}());
Register4 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register4',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register4\register4.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent color="primary">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-top class="backgroundBlue">\n\n    <ion-list class="listRegister" no-lines>\n\n        <ion-item>\n\n            <h1 class="textWhite" text-wrap>Quando é o seu aniversário?</h1>\n\n        </ion-item>\n\n        <form [formGroup]="registo4" (ngSubmit)="onSubmit(registo4.value, registo4.valid)">\n\n            <ion-item padding-top padding-bottom>\n\n                <ion-label stacked mode="ios">DATA DE NASCIMENTO</ion-label>\n\n                <ion-datetime formControlName="birthday" displayFormat="MM DD YYYY"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item padding-top>\n\n                <button ion-fab color="light" item-right no-margin mode="ios" [disabled]="!registo4.valid" type="submit"><ion-icon name="arrow-forward"></ion-icon></button>\n\n            </ion-item>\n\n        </form>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register4\register4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], Register4);

//# sourceMappingURL=register4.js.map

/***/ })

});
//# sourceMappingURL=21.main.js.map