webpackJsonp([16],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_settings__ = __webpack_require__(657);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsModule", function() { return ProfileSettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileSettingsModule = (function () {
    function ProfileSettingsModule() {
    }
    return ProfileSettingsModule;
}());
ProfileSettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_settings__["a" /* ProfileSettings */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_settings__["a" /* ProfileSettings */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_settings__["a" /* ProfileSettings */]
        ]
    })
], ProfileSettingsModule);

//# sourceMappingURL=profile-settings.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSettings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileSettings = (function () {
    function ProfileSettings(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.edit = 0;
        var type = this.navParams.get('type');
        if (type == 0) {
            this.headerTitle = "Alterar foto de perfil";
            this.typeSettings = 0;
        }
        else if (type == 1) {
            this.headerTitle = "Alterar foto de capa";
            this.typeSettings = 1;
        }
        else if (type == 2) {
            this.headerTitle = "Dados pessoais";
            this.typeSettings = 2;
        }
        else if (type == 3) {
            this.headerTitle = "Acerca de mim";
            this.typeSettings = 3;
        }
        else if (type == 4) {
            this.headerTitle = "Educação e formação";
            this.typeSettings = 4;
        }
        else if (type == 5) {
            this.headerTitle = "Redes sociais";
            this.typeSettings = 5;
        }
        else if (type == 6) {
            this.headerTitle = "Verificação de conta";
            this.typeSettings = 6;
        }
        else if (type == 7) {
            this.headerTitle = "Desativar conta";
            this.typeSettings = 7;
        }
        else if (type == 8) {
            this.headerTitle = "Alterar senha";
            this.typeSettings = 8;
        }
        else {
            this.navCtrl.push("Tabs");
        }
    }
    ProfileSettings.prototype.ionViewDidLoad = function () {
    };
    ProfileSettings.prototype.openPopOver = function (ev, x) {
        var typeNumber = x;
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '5', userId: '1', typeSettings: typeNumber });
        popover.present({
            ev: ev
        });
    };
    return ProfileSettings;
}());
ProfileSettings = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-settings',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\settings\profile-settings\profile-settings.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n        {{headerTitle}}\n\n    </ion-title>\n\n    <!--\n\n    <ion-buttons start showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n         <ion-icon name="checkmark" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="ios">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n        <span ion-text color="light" showWhen="ios">Guardar</span>\n\n      </button>\n\n    </ion-buttons>\n\n    -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background">\n\n  \n\n        <!-- DADOS PESSOAIS -->\n\n        <ion-list no-lines no-border margin-top *ngIf="typeSettings == 2">\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2">Nome</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="Vasco"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2">Apelido</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="Silva"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2 sizeLabel" text-wrap>Data de nascimento</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="22"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2">Email</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="vascosilva@ua.pt" text-wrap></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2">Vive em</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="Vila Nova de Gaia, Avintes" text-wrap></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2">Género</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="Silva"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed color="grey3" class="font-md2">Telemóvel</ion-label>\n\n                <ion-input type="text" class="font-grey4 bold font-md2" text-right value="919283843"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <!-- DADOS PESSOAIS -->\n\n\n\n        <!-- ACERCA DE MIM -->\n\n        <ion-list no-lines no-border margin-top *ngIf="typeSettings == 3">\n\n            <ion-item >\n\n                <div class="aboutMeHeader">\n\n                    <div><p class="font-grey4 bold">Sobre mim</p></div>\n\n                    <div class="aboutMeButton">\n\n                        <button ion-button icon-only clear color="grey3" align-right (click)="openPopOver($event, 0)">\n\n                            <ion-icon name="more"></ion-icon>\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n                <p class="font-grey4" text-wrap>O projecto foi lançado em 2006 pela Entrajuda para agilizar "o contacto entre as necessidades e as vontades de voluntariado", reunindo numa plataforma online voluntários, instituições, empresas, escolas, universidades e outros grupos, permitindo assim o encontro entre as diferentes partes.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <div class="aboutMeHeader">\n\n                    <div><p class="font-grey4 bold">Hobbies e interesses</p></div>\n\n                    <div class="aboutMeButton">\n\n                        <button ion-button icon-only clear color="grey3" align-right (click)="openPopOver($event, 1)">\n\n                            <ion-icon name="more"></ion-icon>\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n                <p class="font-grey4" text-wrap>A Bolsa de Voluntariado é "uma porta de entrada para qualquer pessoa ou entidade que queira oferecer o seu tempo, trabalho, conhecimento e experiência", refere a Entrajuda, instituição criada pelo Banco Alimentar para apoiar outras "entidades não lucrativas" ao nível da organização e gestão.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <div class="aboutMeHeader">\n\n                    <div><p class="font-grey4 bold">Tipos de voluntariado favoritos</p></div>\n\n                    <div class="aboutMeButton">\n\n                        <button ion-button icon-only clear color="grey3" align-right (click)="openPopOver($event, 2)">\n\n                            <ion-icon name="more"></ion-icon>\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n                <p class="font-grey4" text-wrap>Segundo a coordenadora da plataforma, Marta Vinhas, a Bolsa do Voluntariado foi "o primeiro site português a promover o encontro entre pessoas que querem dar o seu tempo" e "as organizações que precisam deste voluntariado".</p>\n\n            </ion-item>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Adicionar<ion-icon name="add" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n        <!-- ACERCA DE MIM -->\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar no-padding mode="ios">\n\n        <button ion-button color="primary" no-margin full mode="ios">Guardar</button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\settings\profile-settings\profile-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
], ProfileSettings);

//# sourceMappingURL=profile-settings.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map