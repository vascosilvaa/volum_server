webpackJsonp([18],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(638);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Settings = (function () {
    function Settings(navCtrl, navParams, popoverCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalController = modalController;
    }
    Settings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Settings');
    };
    //POPOVER HEADER
    Settings.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '4', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    //PROFILE SETTING 
    Settings.prototype.goProfileSetting = function (value) {
        var type = value;
        this.navCtrl.push("ProfileSettings", { type: type });
    };
    //OPEN MODAL PRIVACITY
    Settings.prototype.openModalPrivacity = function (value) {
        var modal = this.modalController.create("ModalSettings", { typeSettings: value });
        modal.present();
    };
    return Settings;
}());
Settings = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\settings\settings.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n        Definições\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only color="light" (click)="openMenusHeader($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content-background">\n\n\n\n    <ion-list no-lines no-border margin-top>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Definições de perfil</ion-item>\n\n        <button ion-item (tap)="goProfileSetting(0)">\n\n            <p text-wrap><span class="bold font-grey4">Alterar foto de perfil</span></p>\n\n        </button>\n\n        <button ion-item (tap)="goProfileSetting(1)">\n\n            <p text-wrap><span class="bold font-grey4">Alterar foto de capa</span></p>\n\n        </button>\n\n        <button ion-item (tap)="goProfileSetting(2)">\n\n            <p text-wrap><span class="bold font-grey4">Dados pessoais</span></p>\n\n        </button>\n\n        <button ion-item (tap)="goProfileSetting(3)">\n\n            <p text-wrap><span class="bold font-grey4">Acerca de mim</span></p>\n\n        </button>\n\n        <button ion-item (tap)="goProfileSetting(4)">\n\n            <p text-wrap><span class="bold font-grey4">Educação e formação</span></p>\n\n        </button>\n\n        <button ion-item (tap)="goProfileSetting(5)">\n\n            <p text-wrap><span class="bold font-grey4">Redes sociais</span></p>\n\n        </button>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines no-border margin-top>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Definições de conta</ion-item>\n\n        <button ion-item (tap)="goProfileSetting(6)">\n\n            <p text-wrap><span class="bold font-grey4">Verificação de conta</span></p>\n\n            \n\n            <p class="font-md"><span color="grey3">Conta verificada</span></p>\n\n        </button>\n\n        <button ion-item (tap)="goProfileSetting(7)">\n\n            <p text-wrap><span class="bold font-grey4">Desativar conta</span></p>\n\n        </button>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines no-border margin-top>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Segurança</ion-item>\n\n        <button ion-item (tap)="goProfileSetting(8)">\n\n            <p text-wrap><span class="bold font-grey4">Alterar senha</span></p>\n\n        </button>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines no-border margin-top>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Privacidade</ion-item>\n\n        <button ion-item (tap)="openModalPrivacity(9)">\n\n            <p text-wrap><span class="bold font-grey4">Quem pode ver a minha actividade</span></p>\n\n            <p class="font-md"><span color="grey3">Apenas seguidores</span></p>\n\n        </button>\n\n        <button ion-item (tap)="openModalPrivacity(10)">\n\n            <p text-wrap><span class="bold font-grey4">Quem me pode contactar</span></p>\n\n            <p class="font-md"><span color="grey3">Apenas seguidores</span></p>\n\n        </button>\n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map