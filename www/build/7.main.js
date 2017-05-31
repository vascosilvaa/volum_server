webpackJsonp([7],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card_list_card_list_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_invite_invite_module__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(614);
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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_client__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VolsService = (function () {
    function VolsService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    VolsService.prototype.getVols = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols", { amount: 100, startAt: 0 }).toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    VolsService.prototype.getVolHistory = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + '/vols').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolsService.prototype.getMyVols = function (id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + "/my-vols").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolsService.prototype.getMyApplies = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/vols/my-applies").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolsService.prototype.getMyConfirms = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/vols/confirmed").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    // GET VOLS COMPLETO
    VolsService.prototype.getVolDetails = function (volId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + volId).toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    // GET VOL ADDRESS
    VolsService.prototype.getAddress = function (lat, lng) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    // GET CONFIRMED
    VolsService.prototype.getConfirmed = function (id_vol, amount) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed", { amount: amount }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    // COUNT CONFIRMED
    VolsService.prototype.countConfirmeds = function (id_vol) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    // GET CANDIDATES
    VolsService.prototype.getCandidates = function (id_vol, amount) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates", { amount: amount }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    // COUNT CANDIDATES
    VolsService.prototype.countCandidates = function (id_vol) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    // APPLY TO VOL
    VolsService.prototype.apply = function (id_user, id_vol) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + '/apply', { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return VolsService;
}());
VolsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_client__["a" /* HttpClient */]) === "function" && _b || Object])
], VolsService);

var _a, _b;
//# sourceMappingURL=vols.service.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_get_day_pipe__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_list__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardListModule = (function () {
    function CardListModule() {
    }
    return CardListModule;
}());
CardListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__card_list__["a" /* CardList */],
            __WEBPACK_IMPORTED_MODULE_0__pipes_get_day_pipe__["a" /* getDayPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__card_list__["a" /* CardList */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__card_list__["a" /* CardList */]
        ]
    })
], CardListModule);

//# sourceMappingURL=card-list.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardList = (function () {
    function CardList() {
        this.name = '123';
        this.data = new Date();
        console.log('Hello CardList Component');
        this.text = 'Hello World';
        console.log("data", this.data);
    }
    CardList.prototype.ionViewDidLoad = function () {
    };
    return CardList;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardList.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardList.prototype, "photo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date)
], CardList.prototype, "date", void 0);
CardList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cardList',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\components\card-list\card-list.html"*/'<button ion-item>\n\n                <ion-thumbnail item-left>\n\n                    <img [src]="photo">\n\n                    <span class="searchDay"><div class="searchDaySize"></div>  {{date | date:"d"}}<div class="searchMounthSize">{{date | date:"MMM"}}</div></span>\n\n                </ion-thumbnail>\n\n                <div style="margin-top:-2px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">\n\n                    <p><span class="bold font-grey4">{{name}}</span></p>\n\n                    <p class="font-sm"><span class="font-grey4">Criado por <span class="bold font-third">Banco Alimentar</span></span></p>\n\n                    <p class="font-sm"><span class="font-grey3">{{date}} </span></p>\n\n                </div>\n\n            </button>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\components\card-list\card-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], CardList);

//# sourceMappingURL=card-list.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDayPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var getDayPipe = (function () {
    function getDayPipe() {
    }
    getDayPipe.prototype.transform = function (value) {
        if (!value)
            return null;
        console.log("value", value);
        console.log(value.getDate());
        return value.getDate();
    };
    return getDayPipe;
}());
getDayPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'getDay' })
], getDayPipe);

//# sourceMappingURL=get-day.pipe.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite__ = __webpack_require__(613);
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

/***/ 613:
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

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_vols_service__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
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
            console.log("a", res);
            _this.my_applies = res.vols;
            console.log("applies", _this.my_applies);
        });
    };
    Actions.prototype.getMyConfirmed = function () {
        var _this = this;
        this.volsService.getMyConfirms().then(function (res) {
            console.log("a", res);
            _this.my_confirmeds = res.vols;
        });
    };
    return Actions;
}());
Actions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-actions',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\actions\actions.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Ações\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="light" (click)="openMenusHeader($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-segment [(ngModel)]="tabsActions" class="segmentColor" mode="md" color="white">\n\n        <ion-segment-button value="nextActions">\n\n            Explorar\n\n        </ion-segment-button>\n\n        <ion-segment-button value="myActions" color="white">\n\n            Minhas ações\n\n        </ion-segment-button>\n\n        <ion-segment-button value="invites" color="white">\n\n            Convites\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background" [ngSwitch]="tabsActions">\n\n\n\n    <!-- NEXT ACTIONS -->\n\n    <div *ngSwitchCase="\'nextActions\'">\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações próximas</ion-item>\n\n            <cardList *ngFor="let vol of my_confirmeds" [name]="vol.name" [photo]="vol.photos[0]" [date]="vol.date_begin"></cardList>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações a aguardar confirmação</ion-item>\n\n            <cardList *ngFor="let vol of my_applies" [name]="vol.name" [photo]="vol.photos[0]" [date]="vol.date_begin"></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n    <!-- NEXT ACTIONS -->\n\n\n\n    <!-- MINE -->\n\n    <div *ngSwitchCase="\'myActions\'">\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações ativas</ion-item>\n\n            <cardList></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações passadas que criaste</ion-item>\n\n            <cardList></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações passadas onde participaste</ion-item>\n\n            <cardList></cardList>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver tudo<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n    <!-- MINE -->\n\n\n\n    <!-- INVITES -->\n\n    <div *ngSwitchCase="\'invites\'">\n\n        <invite></invite>\n\n    </div>\n\n    <!-- INVITES -->\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="secondary" mode="ios" (tap)="newAction()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\actions\actions.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_vols_service__["a" /* VolsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_0__shared_vols_service__["a" /* VolsService */]])
], Actions);

//# sourceMappingURL=actions.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map