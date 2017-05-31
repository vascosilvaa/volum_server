webpackJsonp([12],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__participants__ = __webpack_require__(661);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsModule", function() { return ParticipantsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParticipantsModule = (function () {
    function ParticipantsModule() {
    }
    return ParticipantsModule;
}());
ParticipantsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__participants__["a" /* Participants */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__participants__["a" /* Participants */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__participants__["a" /* Participants */]
        ]
    })
], ParticipantsModule);

//# sourceMappingURL=participants.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vols_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Participants; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Participants = (function () {
    function Participants(navCtrl, navParams, volsService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.volsService = volsService;
        this.loadingCtrl = loadingCtrl;
        this.disabledCandidates = false;
        this.disabledConfirmeds = false;
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        this.tabs = this.navParams.get('participants');
        this.volId = this.navParams.get('volId');
        this.getConfirmed(this.volId, 10);
        if (this.tabs == "candidates") {
            this.getCandidates(this.volId, 10);
            this.getConfirmed(this.volId, 10);
            loading.dismiss();
        }
        else if (this.tabs == "confirmed") {
            this.getConfirmed(this.volId, 10);
            this.getCandidates(this.volId, 10);
            loading.dismiss();
        }
    }
    // GET CONFIRMED 
    Participants.prototype.getConfirmed = function (volId, amount) {
        var _this = this;
        this.volsService.getConfirmed(volId, amount)
            .then(function (res) {
            if (res.users.length == 0) {
                _this.disabledConfirmeds = true;
            }
            else {
                _this.confirmeds = res.users;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    // GET CANDIDATES
    Participants.prototype.getCandidates = function (volId, amount) {
        var _this = this;
        this.volsService.getCandidates(volId, amount)
            .then(function (res) {
            console.log();
            if (res.users.length == 0) {
                _this.disabledCandidates = true;
            }
            else {
                _this.candidates = res.users;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    //GO PROFILE
    Participants.prototype.goProfile = function (id_user) {
        this.navCtrl.push("Profile", { id_user: id_user });
    };
    return Participants;
}());
Participants = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-participants',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\shared\card\card-details\participants\participants.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n           Voluntários\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="light" (click)="openMenus($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-segment [(ngModel)]="tabs" class="segmentDetails" color="light" mode="md">\n\n        <ion-segment-button value="confirmed" [disabled]="disabledConfirmed">\n\n            Confirmados\n\n        </ion-segment-button>\n\n        <ion-segment-button value="candidates" [disabled]="disabledCandidates">\n\n            Candidatos\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n\n\n\n\n<ion-content  class="content-background" [ngSwitch]="tabs" padding-top>\n\n     <!-- CONFIRMADOS -->\n\n    <div *ngSwitchCase="\'confirmed\'">\n\n        <ion-list no-border no-lines mode="md">\n\n            <button ion-item *ngFor="let confirmed of confirmeds" (tap)="goProfile(confirmed.id_user)">\n\n                <ion-avatar item-left>\n\n                    <img [src]="confirmed?.photo_url">\n\n                </ion-avatar>\n\n                <h2 class="font-grey4 font-md bold">{{confirmed?.name}}</h2>\n\n                <div class="marginTopNeg">\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                </div>\n\n                <!--\n\n                <button ion-button color="danger" item-right icon-left mode="ios">\n\n                    Remover\n\n                </button>\n\n                -->\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'candidates\'">\n\n       <ion-list no-border no-lines mode="md">\n\n            <button ion-item *ngFor="let candidate of candidates" (tap)="goProfile(candidate.id_user)">\n\n                <ion-avatar item-left>\n\n                    <img [src]="candidate?.photo_url">\n\n                </ion-avatar>\n\n                <h2 class="font-grey4 font-md bold">{{candidate?.name}}</h2>\n\n                <div class="marginTopNeg">\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                    <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n                </div>\n\n                <!--\n\n                <button ion-button color="yellow" item-right icon-left class="btnRemove" mode="ios">\n\n                    Aceitar\n\n                </button>\n\n                -->\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\shared\card\card-details\participants\participants.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */]])
], Participants);

//# sourceMappingURL=participants.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map