webpackJsonp([12],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(633);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsModule = (function () {
    function NotificationsModule() {
    }
    return NotificationsModule;
}());
NotificationsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* Notifications */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* Notifications */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* Notifications */]
        ]
    })
], NotificationsModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notifications_service__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
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
 * Generated class for the Notifications page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Notifications = (function () {
    function Notifications(navCtrl, notificationService, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.notificationService = notificationService;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.notifications = [];
    }
    Notifications.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Notifications');
        this.notificationService.getNotifications().then(function (res) {
            console.log("res1", res);
            //   this.notifications = res.notifications;
            console.log(_this.notifications);
        });
        this.notificationService.getRequests().then(function (res) {
            console.log("res2", res);
            _this.notifications = res.notifications;
        });
    };
    Notifications.prototype.visit = function (id) {
        this.navCtrl.push("Profile", { id_user: id });
    };
    //POPOVER HEADER
    Notifications.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '0', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    return Notifications;
}());
Notifications = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\notifications\notifications.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Notificações\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="light" (click)="openMenusHeader($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content-background" padding-top>\n\n    <ion-list no-lines no-border>\n\n\n\n        <!-- SEGUIDORES -->\n\n        <button ion-item class="fixAvatar" *ngFor="let notification of notifications" (tap)="visit(notification.id_user)">\n\n                <ion-avatar item-left>\n\n                    <img [src]="notification.photo_url">\n\n                </ion-avatar>\n\n                <p text-wrap class="font-grey4" *ngIf="notification.type == 2"><span class="bold font-grey4">{{notification.user_name}}</span> começou a seguir-te</p>\n\n                <p class="font-sm"><ion-icon name="logo-rss" color="four" class="iconList"></ion-icon><span class="font-grey3">{{notification.date | date}}</span></p>\n\n        </button>\n\n        <!-- SEGUIDORES -->\n\n\n\n        <!-- CONVITES -->\n\n        <!--\n\n        <button ion-item class="fixAvatar">\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/imgs/caritas.png">\n\n                </ion-avatar>\n\n                <p text-wrap class="font-grey4"><span class="bold font-grey4">Cáritas Aveiro</span> convidou-te para a sua ação</p>\n\n                <p class="font-sm"><ion-icon name="calendar" color="primary" class="iconList"></ion-icon><span class="font-grey3">Há 30 minutos</span></p>\n\n        </button>\n\n\n\n        <!-- CONVITES -->\n\n        <!--\n\n        <button ion-item class="fixAvatar">\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/imgs/pedro.png">\n\n                </ion-avatar>\n\n                <p text-wrap class="font-grey4"><span class="bold font-grey4">Pedro Araújo</span> candidatou-se à tua ação <span class="bold font-third">Mundo verde</span></p>\n\n                <p class="font-sm"><ion-icon name="calendar" color="secondary" class="iconList"></ion-icon><span class="font-grey3">Há 2 dias</span></p>\n\n       </button>\n\n\n\n        <button ion-item class="fixAvatar">\n\n                <ion-avatar item-left> \n\n                    <img src="./assets/imgs/vasco.png">\n\n                </ion-avatar>\n\n                <p text-wrap class="font-grey4"><span class="bold font-grey4">Vasco Silva</span> comentou a tua ação <span class="bold font-third">Mundo verde</span></p>\n\n                <p class="font-sm"><ion-icon name="chatbubbles" color="secondary" class="iconList"></ion-icon><span class="font-grey3">Há 2 dias</span></p>\n\n        </button>\n\n\n\n        <button ion-item class="fixAvatar">\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/imgs/avatar.png">\n\n                </ion-avatar>\n\n                <p text-wrap class="font-grey4"><span class="bold font-grey4">João Tavares</span> publicou na tua ação <span class="bold font-third">Mundo verde</span></p>\n\n                <p class="font-sm"><ion-icon name="calendar" color="secondary" class="iconList"></ion-icon><span class="font-grey3">Há 2 dias</span></p>\n\n       </button>\n\n\n\n        <button ion-item class="fixAvatar">\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/imgs/andre.png">\n\n                </ion-avatar>\n\n                <p text-wrap class="font-grey4"><span class="bold font-grey4">André Martins</span> gosta da tua ação <span class="bold font-third">Mundo verde</span></p>\n\n                <p class="font-sm"><ion-icon name="heart" color="danger" class="iconList"></ion-icon><span class="font-grey3">Há 5 dias</span></p>\n\n        </button>\n\n        -->\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\notifications\notifications.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_notifications_service__["a" /* NotificationsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__services_notifications_service__["a" /* NotificationsService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */]])
], Notifications);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_client__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsService = (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.newNotificationCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/not-read/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    NotificationsService.prototype.newRequestCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/requests/not-read/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    NotificationsService.prototype.getNotifications = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    NotificationsService.prototype.getRequests = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/requests").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    NotificationsService.prototype.cleanRequests = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/requests/read-all", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    NotificationsService.prototype.cleanNotifications = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/read-all", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return NotificationsService;
}());
NotificationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */]])
], NotificationsService);

//# sourceMappingURL=notifications.service.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map