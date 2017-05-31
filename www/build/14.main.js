webpackJsonp([14],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(531);
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

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ })

});
//# sourceMappingURL=14.main.js.map