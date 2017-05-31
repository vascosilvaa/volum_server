webpackJsonp([25],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryModule", function() { return EntryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntryModule = (function () {
    function EntryModule() {
    }
    return EntryModule;
}());
EntryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__entry__["a" /* Entry */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entry__["a" /* Entry */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__entry__["a" /* Entry */]
        ]
    })
], EntryModule);

//# sourceMappingURL=entry.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Entry = (function () {
    function Entry(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Entry.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Entry');
    };
    Entry.prototype.goLogin = function () {
        this.navCtrl.push("Login");
    };
    Entry.prototype.goRegister = function () {
        this.navCtrl.push("Register0");
    };
    return Entry;
}());
Entry = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-entry',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\entry.html"*/'<ion-content class="backgroundBlue" padding-left padding-right>\n\n    <ion-grid class="contentEntry">\n\n        <ion-row>\n\n            <ion-col col-12 text-right no-padding margin-bottom>\n\n                <button ion-button clear color="light" class="btnEntryTop" (tap)="goLogin()">\n\n                    Entrar\n\n                </button>\n\n            </ion-col>\n\n\n\n            <ion-col col-12 class="textEntry logoVolum">\n\n                <img src="./assets/imgs/logoVolum.png"/>\n\n            </ion-col>\n\n\n\n            <ion-col col-12 class="font-light textEntry" padding-bottom>\n\n                <h1 class="textWhite">Bem-vindo(a) ao <br>Volum.</h1>\n\n            </ion-col>\n\n\n\n            <ion-col col-12>\n\n                <button ion-button color="light" round class="btnEntry btnEntryColor" icon-left mode="ios">\n\n                    <ion-icon name="logo-facebook" class="iconFacebookEntry"></ion-icon>\n\n                    Continuar com Facebook\n\n                </button>\n\n            </ion-col>\n\n\n\n            <ion-col col-12>\n\n                <button ion-button color="light" round class="btnEntry btnEntryColor" icon-left mode="ios">\n\n                    <ion-icon name="logo-google" class="iconFacebookEntry"></ion-icon>\n\n                    Continuar com Google\n\n                </button>\n\n            </ion-col>\n\n\n\n            <ion-col col-12 padding-bottom>\n\n                <button ion-button color="light" round outline class="btnEntry" (tap)="goRegister()" mode="ios">Criar uma conta</button>\n\n            </ion-col>\n\n\n\n            <ion-col col-12 color="white" padding-top>\n\n                <span color="white" class="font-sm font-light textEntryInfo">Ao tocar em Continuar, Criar Conta, eu concordo com os Termos de Serviço, a Política de Privacidade e a Política de Não Discriminação do Volum.</span>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content> \n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\entry.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Entry);

//# sourceMappingURL=entry.js.map

/***/ })

});
//# sourceMappingURL=25.main.js.map