webpackJsonp([17],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_settings__ = __webpack_require__(656);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSettingsModule", function() { return ModalSettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalSettingsModule = (function () {
    function ModalSettingsModule() {
    }
    return ModalSettingsModule;
}());
ModalSettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_settings__["a" /* ModalSettings */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_settings__["a" /* ModalSettings */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal_settings__["a" /* ModalSettings */]
        ]
    })
], ModalSettingsModule);

//# sourceMappingURL=modal-settings.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSettings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalSettings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalSettings = (function () {
    function ModalSettings(navCtrl, navParams, viewCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.typeSettings = navParams.get('typeSettings');
        if (this.typeSettings == 0) {
            this.textHeader = "Sobre mim";
        }
        else if (this.typeSettings == 1) {
            this.textHeader = "Hobbies e interesses";
        }
        else if (this.typeSettings == 2) {
            this.textHeader = "Tipos de voluntariado favoritos";
        }
        else if (this.typeSettings == 3) {
            this.textHeader = "Historial do voluntariado";
        }
        else if (this.typeSettings == 9) {
            this.textHeader = "Privacidade";
            this.textHeaderList = "Quem pode ver a minha actividade";
        }
        else if (this.typeSettings == 10) {
            this.textHeader = "Privacidade";
            this.textHeaderList = "Quem me pode contactar";
        }
    }
    ModalSettings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalSettings');
    };
    ModalSettings.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalSettings.prototype.openModalChoose = function () {
        var modal = this.modalController.create("ModalChoose", { typeSettings: this.typeSettings });
        modal.present();
    };
    return ModalSettings;
}());
ModalSettings = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal-settings',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\settings\profile-settings\modal-settings\modal-settings.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n        {{textHeader}}\n\n    </ion-title>\n\n    <ion-buttons start showWhen="ios">\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="light" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons start showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n         <ion-icon name="checkmark" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="ios">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n        <span ion-text color="light" showWhen="ios">Guardar</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background">\n\n    <ion-list no-lines no-border margin-top *ngIf="typeSettings == 1">\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Ações criadas</ion-item>\n\n            <button ion-item (tap)="openModalChoose()">\n\n                <p text-wrap><span class="bold font-grey4">Tipo</span></p>\n\n                <p class="font-sm"><span color="grey3">{{textHeader}}</span></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n\n\n\n\n    <!--PRIVACITY -->\n\n\n\n    <!-- QUEM PODE VER A MINHA ATIVIDADE -->\n\n    <ion-list radio-group no-lines no-border margin-top *ngIf="typeSettings == 9">\n\n        <ion-item class="font-md bold font-grey4 border-bottom">{{textHeaderList}}</ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey4" class="bold font-md">Público</ion-label>\n\n            <ion-radio value="0" checked></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey4" class="bold font-md">Seguidores</ion-label>\n\n            <ion-radio value="1"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey4" class="bold font-md">Apenas eu</ion-label>\n\n            <ion-radio value="2"></ion-radio>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <!-- QUEM ME PODE CONTACTAR -->\n\n    <ion-list no-lines no-border margin-top *ngIf="typeSettings == 10">\n\n        <ion-item class="font-md bold font-grey4 border-bottom">{{textHeaderList}}</ion-item>\n\n            <button ion-item (tap)="openModalChoose()">\n\n                <p text-wrap><span class="bold font-grey4">Tipo</span></p>\n\n                <p class="font-sm"><span color="grey3">{{textHeader}}</span></p>\n\n            </button>\n\n    </ion-list>\n\n\n\n    <!--PRIVACITY -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\settings\profile-settings\modal-settings\modal-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], ModalSettings);

//# sourceMappingURL=modal-settings.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map