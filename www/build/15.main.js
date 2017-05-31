webpackJsonp([15],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_choose__ = __webpack_require__(644);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChooseModule", function() { return ModalChooseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalChooseModule = (function () {
    function ModalChooseModule() {
    }
    return ModalChooseModule;
}());
ModalChooseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_choose__["a" /* ModalChoose */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_choose__["a" /* ModalChoose */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal_choose__["a" /* ModalChoose */]
        ]
    })
], ModalChooseModule);

//# sourceMappingURL=modal-choose.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalChoose; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalChoose = (function () {
    function ModalChoose(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.inicialtypeSettings = navParams.get('typeSettings');
        this.typeSettings = navParams.get('typeSettings');
        this.disableButton = true;
    }
    ModalChoose.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalChoose');
    };
    ModalChoose.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalChoose.prototype.disable = function () {
        if (this.typeSettings != this.inicialtypeSettings) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
    };
    ModalChoose.prototype.save = function () {
        this.newtypeSettings = this.typeSettings;
        var data = { newtypeSettings: this.newtypeSettings };
        this.viewCtrl.dismiss(data);
    };
    return ModalChoose;
}());
ModalChoose = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal-choose',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\shared\modal-choose\modal-choose.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n        Tipo\n\n    </ion-title>\n\n    <ion-buttons start showWhen="ios">\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="light" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons start showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n         <ion-icon name="checkmark" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="ios">\n\n      <button ion-button [disabled]="disableButton" (tap)="save()">\n\n        <span ion-text color="light" showWhen="ios">Guardar</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background">\n\n\n\n    <ion-list radio-group no-lines margin-top [(ngModel)]="typeSettings">\n\n        <ion-item>\n\n            <ion-label class="bold font-grey4 font-md2">Sobre mim</ion-label>\n\n            <ion-radio value="0" (ionSelect)="disable()"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label class="bold font-grey4 font-md2">Hobbies e interesses</ion-label>\n\n            <ion-radio value="1" (ionSelect)="disable()"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label class="bold font-grey4 font-md2">Tipos de voluntariado favoritos</ion-label>\n\n            <ion-radio value="2" (ionSelect)="disable()"></ion-radio>\n\n        </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label class="bold font-grey4 font-md2">Historial de voluntariado</ion-label>\n\n            <ion-radio value="3" (ionSelect)="disable()"></ion-radio>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\shared\modal-choose\modal-choose.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
], ModalChoose);

//# sourceMappingURL=modal-choose.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map