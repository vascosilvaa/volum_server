webpackJsonp([7],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card_list_card_list_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_invite_invite_module__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(639);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsModule", function() { return ActionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ActionsModule = (function () {
    function ActionsModule() {
    }
    return ActionsModule;
}());
ActionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* Actions */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* Actions */]),
            __WEBPACK_IMPORTED_MODULE_1__components_invite_invite_module__["a" /* InviteModule */],
            __WEBPACK_IMPORTED_MODULE_0__components_card_list_card_list_module__["a" /* CardListModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* Actions */],
        ]
    })
], ActionsModule);

//# sourceMappingURL=actions.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite__ = __webpack_require__(638);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InviteModule = (function () {
    function InviteModule() {
    }
    return InviteModule;
}());
InviteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invite__["a" /* Invite */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invite__["a" /* Invite */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__invite__["a" /* Invite */]
        ]
    })
], InviteModule);

//# sourceMappingURL=invite.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invite; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Invite = (function () {
    function Invite() {
        console.log('Hello Invite Component');
        this.text = 'Hello World';
    }
    return Invite;
}());
Invite = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'invite',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\components\invite\invite.html"*/'<ion-card no-margin class="cardVolum margin-item">\n\n            <ion-item>\n\n                <ion-thumbnail item-left>\n\n                    <img src="./assets/imgs/BancoAlimentar.png">\n\n                    <span class="searchDay searchDayCard"><div class="searchDaySize">20</div><div class="searchMounthSize">maio</div></span>\n\n                </ion-thumbnail>\n\n                <p class="bold font-grey4">Recolha de Alimentos</p>\n\n                <p class="font-grey4 font-sm">Criado por <span class="font-third bold">Banco Alimentar</span></p>\n\n                <p class="font-sm font-grey3">20 de maio às 17 horas</p>\n\n            </ion-item>\n\n            <ion-row class="fixPadding">\n\n                <ion-col class="no-margin-top">\n\n                    <button ion-button small full color="grey1" class="btnInvite no-margin-top" mode="ios">\n\n                        <div>Recusar</div>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col class="no-margin-top">\n\n                    <button ion-button small full color="secondary" class="btnInvite no-margin-top" mode="ios">\n\n                        <div>Aceitar</div>\n\n                    </button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n\n\n        <ion-card no-margin class="cardVolum margin-item">\n\n            <ion-item>\n\n                <ion-thumbnail item-left>\n\n                    <span class="searchDay searchDayNoImage"><div class="searchDaySize">20</div><div class="searchMounthSize">maio</div></span>\n\n                </ion-thumbnail>\n\n                <p class="bold font-grey4">Recolha de Alimentos</p>\n\n                <p class="font-grey4 font-sm">Criado por <span class="font-third bold">Banco Alimentar</span></p>\n\n                <p class="font-sm font-grey3">20 de maio às 17 horas</p>\n\n            </ion-item>\n\n            <ion-row class="fixPadding">\n\n                <ion-col class="no-margin-top">\n\n                    <button ion-button small full color="grey1" class="btnInvite no-margin-top" mode="ios">\n\n                        <div>Recusar</div>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col class="no-margin-top">\n\n                    <button ion-button small full color="secondary" class="btnInvite no-margin-top" mode="ios">\n\n                        <div>Aceitar</div>\n\n                    </button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\components\invite\invite.html"*/
    }),
    __metadata("design:paramtypes", [])
], Invite);

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vols_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Actions = (function () {
    function Actions(navCtrl, navParams, popoverCtrl, volsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.volsService = volsService;
        this.my_applies = [];
        this.my_confirmeds = [];
        this.tabsActions = "nextActions";
    }
    Actions.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actions');
        this.getMyApplies();
        this.getMyConfirmed();
    };
    //POPOVER HEADER
    Actions.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '0', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    //NEWACTION
    Actions.prototype.newAction = function () {
        this.navCtrl.push("NewAction");
    };
    Actions.prototype.getMyApplies = function () {
        var _this = this;
        this.volsService.getMyApplies().then(function (res) {
            if (res) {
                _this.my_applies = res.vols;
            }
            else {
                console.log("LEL", res);
            }
        });
    };
    Actions.prototype.getMyConfirmed = function () {
        var _this = this;
        this.volsService.getMyConfirms().then(function (res) {
            console.log("a", res);
            if (res) {
                _this.my_confirmeds = res.vols;
            }
            else {
                console.log("LUL", res);
            }
        });
    };
    return Actions;
}());
Actions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-actions',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\actions\actions.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Ações\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="light" (click)="openMenusHeader($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-segment [(ngModel)]="tabsActions" class="segmentColor" mode="md" color="white">\n\n        <ion-segment-button value="nextActions">\n\n            Explorar\n\n        </ion-segment-button>\n\n        <ion-segment-button value="myActions" color="white">\n\n            Minhas ações\n\n        </ion-segment-button>\n\n        <ion-segment-button value="invites" color="white">\n\n            Convites\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background" [ngSwitch]="tabsActions">\n\n\n\n    <!-- NEXT ACTIONS -->\n\n    <div *ngSwitchCase="\'nextActions\'">\n\n        <ion-list no-lines no-border margin-top *ngIf="my_confirmeds">\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações próximas</ion-item>\n\n            <cardList *ngFor="let vol of my_confirmeds" [name]="vol.name" [photo]="vol.photos[0]" [date]="vol.date_begin"></cardList>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border *ngIf="my_applies">\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações a aguardar confirmação</ion-item>\n\n            <cardList *ngFor="let vol of my_applies" [name]="vol.name" [photo]="vol.photos[0]" [date]="vol.date_begin"></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n    <!-- NEXT ACTIONS -->\n\n\n\n    <!-- MINE -->\n\n    <div *ngSwitchCase="\'myActions\'">\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações ativas</ion-item>\n\n            <cardList></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações passadas que criaste</ion-item>\n\n            <cardList></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações passadas onde participaste</ion-item>\n\n            <cardList></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n    <!-- MINE -->\n\n\n\n    <!-- INVITES -->\n\n    <div *ngSwitchCase="\'invites\'">\n\n        <invite></invite>\n\n    </div>\n\n    <!-- INVITES -->\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="secondary" mode="ios" (tap)="newAction()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\actions\actions.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */]])
], Actions);

//# sourceMappingURL=actions.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map