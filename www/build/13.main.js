webpackJsonp([13],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_details__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsModule", function() { return CardDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardDetailsModule = (function () {
    function CardDetailsModule() {
    }
    return CardDetailsModule;
}());
CardDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card_details__["a" /* CardDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_details__["a" /* CardDetails */]),
            __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__card_details__["a" /* CardDetails */]
        ]
    })
], CardDetailsModule);

//# sourceMappingURL=card-details.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vols_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardDetails = (function () {
    function CardDetails(navCtrl, navParams, modalController, popoverCtrl, volsService, loadingCtrl, auth, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.popoverCtrl = popoverCtrl;
        this.volsService = volsService;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.volDetails = {};
        //LOGGED USER
        this.user = {};
    }
    CardDetails.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_moment__["locale"]('pt-pt');
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        // SET TABS
        this.tabs = 'about';
        // GET DATA PARAMS
        this.getVolId = this.navParams.get('volId');
        this.volName = this.navParams.get('volName');
        // GET ID LOGGED USER
        this.auth.userPromise.then(function (res) {
            _this.user = res.user;
            _this.userId = res.user.id_user;
            console.log("USER", _this.user);
        });
        // GET VOL DETAILS DATA
        this.volsService.getVolDetails(this.getVolId).then(function (res) {
            _this.volDetails = res.vol;
            console.log("VOLs", res.vol);
            // ADDRESS
            _this.lat = res.vol.lat;
            _this.lng = res.vol.lng;
            if (_this.lat != 0 && _this.lng != 0) {
                _this.getAddress(res.vol.lat, res.vol.lng);
            }
            // TIME
            _this.start_time = res.vol.start_time;
            _this.end_time = res.vol.end_time;
            if ((_this.start_time != null && _this.end_time != null) || (_this.start_time != null && _this.end_time == null)) {
                _this.getTime(res.vol.start_time, res.vol.end_time);
            }
            // CONFIRMED
            _this.getConfirmed(res.vol.id_vol, 10);
            _this.countConfirmeds(res.vol.id_vol);
            // CANDIDATES
            _this.getCandidates(res.vol.id_vol, 10);
            _this.countCandidates(res.vol.id_vol);
            // GET COMMENTS
            _this.getComments();
            // APPLY
            _this.checkState(res.vol.id_vol);
            // HIDE LOADING
            loading.dismiss();
        });
    };
    CardDetails.prototype.getAddress = function (lat, lng) {
        var _this = this;
        if (this.lat && this.lng) {
            this.volsService.getAddress(lat, lng).then(function (res) {
                _this.addressData = res.results;
                _this.address = _this.addressData[0].formatted_address;
                _this.addressSub = _this.addressData[0].formatted_address;
            });
        }
    };
    CardDetails.prototype.getTime = function (start, end) {
        if (start != null && end != null) {
            this.hora_inicio = start.slice(0, 2);
            this.minutos_inicio = start.slice(3, 5);
            this.hora_fim = end.slice(0, 2);
            this.minutos_fim = end.slice(3, 5);
        }
        else {
            this.hora_inicio = start.slice(0, 2);
            this.minutos_inicio = start.slice(3, 5);
        }
    };
    // GET CONFIRMED 
    CardDetails.prototype.getConfirmed = function (volId, amount) {
        var _this = this;
        this.volsService.getConfirmed(volId, amount)
            .then(function (res) {
            _this.confirmeds = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    // COUNT CONFIRMED
    CardDetails.prototype.countConfirmeds = function (volId) {
        var _this = this;
        this.volsService.countConfirmeds(volId)
            .then(function (res) {
            _this.numberConfirmeds = res.count;
        })
            .catch(function (err) { return console.log(err); });
    };
    // GET CANDIDATES
    CardDetails.prototype.getCandidates = function (volId, amount) {
        var _this = this;
        this.volsService.getCandidates(volId, amount)
            .then(function (res) {
            _this.candidates = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    // COUNT CANDIDATES
    CardDetails.prototype.countCandidates = function (volId) {
        var _this = this;
        this.volsService.countCandidates(volId)
            .then(function (res) {
            _this.numberCandidates = res.count;
        })
            .catch(function (err) { return console.log(err); });
    };
    // GET COMMENTS
    CardDetails.prototype.getComments = function () {
        var _this = this;
        this.volsService.getComments(this.getVolId)
            .then(function (res) {
            _this.comments = res.comments;
            console.log(res.comments);
        })
            .catch(function (err) { return console.log(err); });
    };
    CardDetails.prototype.applyConfirmAlert = function (id_vol) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmar candidatura',
            message: 'Ao confirmar, compromete-se a participar na ação de voluntariado.',
            buttons: [
                {
                    text: 'Fechar',
                    cssClass: 'closeAlert',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    cssClass: 'confirmAlert',
                    handler: function () {
                        _this.applyConfirm(id_vol);
                    }
                }
            ]
        });
        confirm.present();
    };
    CardDetails.prototype.applyCancelarAlert = function (id_vol) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Cancelar candidatura',
            message: 'Tem mesmo a certeza que deseja cancelar a sua candidatura?',
            buttons: [
                {
                    text: 'Fechar',
                    cssClass: 'closeAlert',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirmar',
                    cssClass: 'confirmAlert',
                    handler: function () {
                        if (_this.state == 1) {
                            _this.applyCancel(id_vol);
                        }
                        else if (_this.state == 2) {
                            _this.applyCancelConfirm(id_vol);
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    // APPLY CONFIRM
    CardDetails.prototype.applyConfirm = function (id_vol) {
        var _this = this;
        this.volsService.apply(this.userId, id_vol).then(function (res) {
            var toast = _this.toastCtrl.create({
                message: 'Candidatura enviada com sucesso!',
                duration: 3000,
                cssClass: "toast-success",
            });
            toast.present();
            _this.state = 1;
            _this.countCandidates(id_vol);
            _this.getCandidates(id_vol, 10);
        })
            .catch(function (err) {
        });
    };
    // APPLY CANCEL
    CardDetails.prototype.applyCancel = function (id_vol) {
        var _this = this;
        this.volsService.cancelApply(this.userId, id_vol).then(function (res) {
            var toast = _this.toastCtrl.create({
                message: 'Candidatura cancelada com sucesso!',
                duration: 3000,
                cssClass: "toast-success",
            });
            toast.present();
            _this.state = 0;
            _this.countCandidates(id_vol);
            _this.getCandidates(id_vol, 10);
        });
    };
    CardDetails.prototype.applyCancelConfirm = function (id_vol) {
        var _this = this;
        this.volsService.cancelApply(this.userId, id_vol).then(function (res) {
            var toast = _this.toastCtrl.create({
                message: 'Candidatura cancelada com sucesso!',
                duration: 3000,
                cssClass: "toast-success",
            });
            toast.present();
            _this.state = 0;
            _this.countConfirmeds(id_vol);
            _this.getConfirmed(id_vol, 10);
        });
    };
    // CHECK STATE VOL
    CardDetails.prototype.checkState = function (id_vol) {
        var _this = this;
        this.volsService.checkState(this.userId, id_vol).then(function (res) {
            _this.state = res.state;
            console.log(_this.state);
        });
    };
    // APPLY TO VOL
    /*
    apply(id_vol) {
        this.volsService.apply(this.context.id_user, id_vol).then(res => {
        });
    }
    */
    CardDetails.prototype.goParticipants = function (value) {
        this.navCtrl.push("Participants", {
            participants: value,
            volId: this.getVolId
        });
    };
    CardDetails.prototype.openModalNewDiscussion = function () {
        var _this = this;
        var modal = this.modalController.create("ModalDiscussion", { user: this.user, volId: this.getVolId });
        modal.onDidDismiss(function (data) {
            _this.getComments();
        });
        modal.present();
    };
    CardDetails.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '0', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    CardDetails.prototype.openMenus = function (ev, creatorId, volId) {
        var popover = this.popoverCtrl.create("Popover", { creatorId: creatorId, volId: volId, popOver: 0 });
        popover.present({
            ev: ev
        });
    };
    return CardDetails;
}());
CardDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-card-details',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\shared\card\card-details\card-details.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            {{volName}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="white" (click)="openMenusHeader($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-segment [(ngModel)]="tabs" class="segmentDetails" color="light" mode="md">\n\n        <ion-segment-button value="about">\n\n            Sobre\n\n        </ion-segment-button>\n\n        <ion-segment-button value="discussion">\n\n            Discussão\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background" [ngSwitch]="tabs" padding-top>\n\n    <div *ngSwitchCase="\'about\'">\n\n\n\n        <ion-list no-lines no-margin>\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                    <img [src]="volDetails.user?.photo_url">\n\n                </ion-avatar>\n\n                <p text-wrap>\n\n                    <span class="font-primary bold font-md2">\n\n                         {{volDetails.user?.name}}\n\n                    </span>\n\n                    <ion-icon *ngIf="volDetails.user?.certification == 1" name="checkmark-circle" color="primary" class="font-md font-md2"></ion-icon> \n\n                    <span class="font-grey4">criou a</span>\n\n                    <span class="bold font-third">ação</span>\n\n                </p>\n\n                <p class="font-sm">{{volDetails?.date_creation | date:"d/M"}} às {{volDetails?.date_creation | amDateFormat: \'HH:mm\'}}</p>\n\n                <button ion-button clear item-right icon-only color="grey3" (click)="openMenus($event, volDetails.user.id_user, volDetails.id_vol)">\n\n                    <ion-icon name="more"></ion-icon>\n\n                </button>\n\n            </ion-item> \n\n        </ion-list>\n\n\n\n        <!-- DESCRIPTION -->\n\n        <div class="listDescription" padding margin-top>\n\n            <div class="descriptionTitle font-primary">{{volDetails.name}}</div>\n\n            <div class="description">{{volDetails.description}}</div>\n\n        </div>\n\n\n\n        <!-- LIST TIME LOCATIONS -->\n\n        <ion-list no-lines no-margin margin-bottom margin-top class="listTimeLocation">\n\n            <ion-item>\n\n                <ion-icon name="time" item-left color="grey3"></ion-icon>\n\n                <h2 class="font-grey4 font-md bold" *ngIf="!volDetails?.date_end">Início a {{volDetails?.date_begin | date:"d"}} de {{volDetails?.date_begin | date:"MMMM"}}</h2>\n\n                <h2 class="font-grey4 font-md bold" *ngIf="volDetails?.date_end">De {{volDetails?.date_begin | date:"d"}} de {{volDetails?.date_begin | date:"MMMM"}} até {{volDetails?.date_end | date:"d"}} de {{volDetails?.date_end | date:"MMMM"}}</h2>\n\n                <p color="grey3" class="font-md">\n\n                    <span *ngIf="volDetails?.start_time && volDetails?.end_time">{{hora_inicio}}:{{minutos_inicio}}h até às {{hora_fim}}:{{minutos_fim}}h</span>\n\n                    <span *ngIf="volDetails?.start_time && !volDetails?.end_time">{{hora_inicio}}:{{minutos_inicio}}h</span>\n\n                    <span *ngIf="volDetails?.start_time && volDetails?.duration"> - </span>\n\n                    <span *ngIf="volDetails?.duration > 1">{{volDetails?.duration}} horas diárias</span><span *ngIf="volDetails?.duration < 2 && volDetails?.duration > 0">{{volDetails?.duration}} hora diária</span>\n\n                </p>\n\n            </ion-item>\n\n            <ion-item *ngIf="address">\n\n                <ion-icon name="navigate" item-left color="grey3"></ion-icon>\n\n                <h2 class="font-grey4 font-md bold" text-wrap>{{address}}</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- LIST TIME LOCATIONS -->\n\n        <ion-list no-border no-lines no-margin margin-bottom margin-top>\n\n            <ion-item>\n\n                <h2 class="font-md2 font-grey4">Categoria</h2><ion-badge item-right color="third">Defesa do Consumidor</ion-badge>\n\n            </ion-item>\n\n            <ion-item *ngIf="volDetails?.insurance == 1">\n\n                <h2 class="font-md2 font-grey4">Seguro</h2><ion-badge item-right color="four">Sim</ion-badge>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- VOLUMS -->\n\n        <div class="volun" [ngClass]="{\'marginBottomVol\': state == 0}">\n\n            <div class="v-confirm">\n\n                <div class="v-text">\n\n                    <span class="v-number font-primary">{{numberConfirmeds}}</span><span class="font-md font-grey4"> <span *ngIf="numberConfirmeds == 1">confirmado</span><span *ngIf="numberConfirmeds > 1 || numberConfirmeds == 0">confirmados</span></span>\n\n                </div>\n\n                <div class="v-imgs-confirm">\n\n                    <div *ngFor="let confirmed of confirmeds">\n\n                        <img [src]="confirmed?.photo_url">\n\n                    </div>\n\n                   \n\n                    <div class="lastCount" *ngIf="numberConfirmeds>10">\n\n                        +{{numberConfirmeds-10}}\n\n                    </div>\n\n                </div>\n\n                <div *ngIf="numberConfirmeds == 0" class="font-md bold font-grey4" style="margin-left: -10px">Não existem confirmados.</div>\n\n                <div class="v-button" item-right *ngIf="numberConfirmeds > 0">\n\n                    <button ion-button small clear item-right (tap)="goParticipants(\'confirmed\')">Ver tudo</button>\n\n                </div>\n\n            </div>\n\n\n\n            <div class="v-offer">\n\n                <div class="v-text">\n\n                    <span class="v-number font-second">{{numberCandidates}}</span><span class="font-md font-grey4"> <span *ngIf="numberCandidates == 1">candidato</span><span *ngIf="numberCandidates > 1 || numberCandidates == 0">candidatos</span></span>\n\n                </div>\n\n                <div class="v-imgs-confirm">\n\n                    <div *ngFor="let candidate of candidates">\n\n                        <img [src]="candidate?.photo_url">\n\n                    </div>\n\n                    <div class="lastCount" *ngIf="numberCandidates>10">\n\n                        +{{numberCandidates-10}}\n\n                    </div>\n\n                </div>\n\n                <div *ngIf="numberCandidates == 0" class="font-md bold font-grey4" style="margin-left: -10px">Não existem candidados.</div>\n\n                <div class="v-button" item-right *ngIf="numberCandidates > 0">\n\n                    <button color="secondary" ion-button small clear item-right (tap)="goParticipants(\'candidates\')">Ver tudo</button>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="btnFooter" *ngIf="state == 0 && volDetails.active == 1">\n\n            <button class="btnOffer" ion-button color="secondary" no-margin full mode="ios" (tap)="applyConfirmAlert(volDetails.id_vol)" *ngIf="volDetails.active == 1 && state == 0">Candidatar</button>\n\n           \n\n        </div>\n\n\n\n        <div class="btnFooterNoFixed" *ngIf="state == 1 || state == 2 || state == 4" margin-top>\n\n            <button class="btnOffer" ion-button color="grey3" no-margin full mode="ios" (tap)="applyCancelarAlert(volDetails.id_vol)" *ngIf="volDetails.active== 1 && state == 1">Cancelar candidatura</button>\n\n            <button class="btnOffer" ion-button color="grey3" no-margin full mode="ios" (tap)="applyCancelarAlert(volDetails.id_vol)" *ngIf="volDetails.active== 1 && state == 2">Cancelar candidatura</button>\n\n            <div class="actionEnd" *ngIf="volDetails.active== 1 && state == 4">Candidatura regeitada</div>\n\n        </div>\n\n\n\n    </div>\n\n\n\n    <!-- DISCUSSION -->\n\n    <div *ngSwitchCase="\'discussion\'">\n\n\n\n        <ion-list no-lines no-margin margin-bottom>\n\n            <ion-item (tap)="openModalNewDiscussion()">\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/imgs/avatar5.png">\n\n                </ion-avatar>\n\n                <h2 ion-text color="grey4" class="font-md2">Escreva algo...</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-card class="cardVolum fixCard" no-margin margin-bottom *ngFor="let comment of comments">\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                     <img [src]="comment?.photo_url">\n\n                </ion-avatar>\n\n                <p ion-text color="primary" class="font-md bold">{{comment?.name}}</p>\n\n                <p ion-text color="grey3" class="marginTopNeg font-sm">{{comment?.date | amTimeAgo:true}}</p>\n\n                <button ion-button clear item-right icon-only color="grey3" (click)="openMenusCard($event)">\n\n                    <ion-icon name="more"></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n\n\n            <ion-card-content>\n\n                <span ion-text class="font-md font-grey4" text-wrap>{{comment?.message}}</span>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n<!--\n\n<ion-footer no-border *hidden="tabs == \'about\'">\n\n    <ion-toolbar color="light" padding *ngIf="tabs == \'about\'">\n\n        <button class="btnOffer" ion-button color="secondary" no-margin full mode="ios">Candidatar</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n-->'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\shared\card\card-details\card-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* AlertController */]])
], CardDetails);

//# sourceMappingURL=card-details.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map