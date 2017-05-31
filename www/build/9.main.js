webpackJsonp([9,17],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(503);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */]
        ]
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover__ = __webpack_require__(646);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PopoverModule = (function () {
    function PopoverModule() {
    }
    return PopoverModule;
}());
PopoverModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__popover__["a" /* Popover */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs_module__["TabsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__popover__["a" /* Popover */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__popover__["a" /* Popover */]
        ]
    })
], PopoverModule);

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tabs = (function () {
    function Tabs(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = "Feed";
        this.tab2Root = "Search";
        this.tab3Root = "Actions";
        this.tab4Root = "Chat";
        this.tab5Root = "Notifications";
        this.tabIndex = 0;
        var tabIndex = this.navParams.get('tabIndex');
        if (tabIndex) {
            this.tabIndex = tabIndex;
        }
    }
    return Tabs;
}());
Tabs = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\tabs\tabs.html"*/'<ion-tabs no-shadow #tabsVolum [selectedIndex]=\'tabIndex\'>\n\n    <ion-tab [root]="tab1Root" tabTitle="Feed" tabIcon="md-list"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Procurar" tabIcon="search"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Ações" tabIcon="icon-volum"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Mensagens" tabIcon="chatbubbles" tabBadge="1" tabBadgeStyle="danger"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="Notificações" tabIcon="notifications" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n\n</ion-tabs>\n\n '/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Tabs);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_authentication_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Popover = (function () {
    function Popover(navCtrl, navParams, viewCtrl, app, modalController, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.modalController = modalController;
        this.auth = auth;
        this.loggedUserId = {};
        this.volId = navParams.get('volId');
        this.creatorId = navParams.get('creatorId');
        this.popOver = navParams.get('popOver');
        this.typePopOver = navParams.get('typePopOver');
        this.typeSettings = navParams.get('typeSettings');
        // CARD 
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                console.log("res", res);
                if (res.success) {
                    console.log(res);
                    _this.loggedUserId = res.user.id_user;
                    if (_this.creatorId == _this.loggedUserId) {
                        _this.cardUser = 0;
                    }
                    else {
                        _this.cardUser = 1;
                    }
                }
            });
        }
    }
    Popover.prototype.logout = function () {
        this.app.getRootNav().push("Entry");
        this.auth.logout();
    };
    Popover.prototype.settings = function () {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.app.getRootNav().push("Settings");
        });
    };
    Popover.prototype.profile = function () {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.app.getRootNav().push("Profile");
        });
        /*
        this.viewCtrl.dismiss().then(() => {
            this.app.getRootNav().push("Tabs", {tabIndex: 4});
        });
        */
    };
    Popover.prototype.openModal = function () {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            var modal = _this.modalController.create("ModalSettings", { typeSettings: _this.typeSettings });
            modal.present();
        });
    };
    return Popover;
}());
Popover = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-popover',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\shared\popover\popover.html"*/'<!-- POP HEADER -->\n\n<ion-list *ngIf="typePopOver == 0" no-lines no-margin>\n\n    <button ion-item (tap)="profile()">\n\n        <ion-icon name="person" item-left color="grey3"></ion-icon>\n\n        <span class="font-md2 font-grey4">Perfil</span>\n\n    </button>\n\n    <button ion-item (tap)="settings()">\n\n        <ion-icon name="settings" item-left color="grey3"></ion-icon>\n\n        <span class="font-md2 font-grey4">Definições</span>\n\n    </button>\n\n    <button ion-item (tap)="logout()">\n\n        <ion-icon name="exit" item-left color="grey3"></ion-icon>\n\n        <span class="font-md2 font-grey4" >Sair</span>\n\n    </button>\n\n</ion-list>\n\n\n\n<!-- POP HEADER PERFIL -->\n\n<ion-list *ngIf="typePopOver == 1" no-lines no-margin>\n\n    <button ion-item (tap)="settings()">\n\n        <ion-icon name="settings" item-left color="grey3"></ion-icon>\n\n        <span class="font-md2 font-grey4">Definições</span>\n\n    </button>\n\n    <button ion-item>\n\n        <ion-icon name="exit" item-left color="grey3"></ion-icon>\n\n        <span class="font-md2 font-grey4">Sair</span> \n\n    </button>\n\n</ion-list>\n\n\n\n\n\n<!-- POP CARD MY -->\n\n<ion-list *ngIf="cardUser == 0 && popOver == 0" no-lines no-margin>\n\n    <button ion-item>\n\n        <ion-icon name="create" item-left color="four"></ion-icon>\n\n        <span class="font-md2 font-grey4">Editar</span>\n\n    </button>\n\n    <button ion-item>\n\n        <ion-icon name="trash" item-left color="danger"></ion-icon>\n\n        <span class="font-md2 font-grey4">Eliminar</span>\n\n    </button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="cardUser == 1 && popOver == 0" no-lines no-margin>\n\n    <button ion-item>\n\n        <ion-icon name="alert" item-left color="secondary"></ion-icon>\n\n        <span class="font-md2 font-grey4">Denunciar</span>\n\n    </button>\n\n</ion-list>\n\n\n\n\n\n<ion-list *ngIf="typePopOver == 4" no-lines no-margin>\n\n    <button ion-item>\n\n        <ion-icon name="exit" item-left color="grey3"></ion-icon>\n\n        <span class="font-md2 font-grey4">Sair</span> \n\n    </button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="typePopOver == 5" no-lines no-margin>\n\n    <button ion-item (tap)="openModal()">\n\n        <ion-icon name="create" item-left color="four"></ion-icon>\n\n        <span class="font-md2 font-grey4">Editar</span>\n\n    </button>\n\n    <button ion-item>\n\n        <ion-icon name="trash" item-left color="danger"></ion-icon>\n\n        <span class="font-md2 font-grey4">Eliminar</span>\n\n    </button>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\shared\popover\popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__auth_authentication_service__["a" /* AuthenticationService */]])
], Popover);

//# sourceMappingURL=popover.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map