webpackJsonp([21],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_action__ = __webpack_require__(632);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewActionModule", function() { return NewActionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewActionModule = (function () {
    function NewActionModule() {
    }
    return NewActionModule;
}());
NewActionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__new_action__["a" /* NewAction */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_action__["a" /* NewAction */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__new_action__["a" /* NewAction */]
        ]
    })
], NewActionModule);

//# sourceMappingURL=new-action.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAction; });
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
 * Generated class for the NewAction page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewAction = (function () {
    function NewAction(navCtrl, navParams, popoverCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalController = modalController;
    }
    NewAction.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAction');
    };
    //POPOVER HEADER
    NewAction.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '0', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    NewAction.prototype.openModalCategory = function () {
        var modal = this.modalController.create("ModalCartegory");
        modal.present();
    };
    NewAction.prototype.openModalLocation = function () {
        var modal = this.modalController.create("ModalLocation");
        modal.present();
    };
    return NewAction;
}());
NewAction = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-new-action',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\new-action\new-action.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n        Nova ação\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only color="light" (click)="openMenusHeader($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background" padding-top>\n\n    <ion-list no-lines no-border>\n\n        <ion-item>\n\n            <ion-label fixed color="grey3">Titulo</ion-label>\n\n            <ion-input type="text" class="inputColor"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed color="grey3">Descrição</ion-label>\n\n            <ion-textarea type="text" class="inputColor"></ion-textarea>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines>\n\n         <button ion-item (tap)="openModalLocation()">\n\n            <span class="font-grey3">Localização</span>\n\n        </button>\n\n        <button ion-item (tap)="openModalCategory()">\n\n            <span class="font-grey3">Categoria</span>\n\n        </button>\n\n        <ion-item>\n\n            <ion-label color="grey3">Seguro</ion-label>\n\n            <ion-toggle checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey3">Os convidados podem convidar</ion-label>\n\n            <ion-toggle checked="false"></ion-toggle>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines class="listLoadPicture">\n\n         <button ion-item>\n\n            <span class="font-grey3">Carregar foto(s)</span>\n\n        </button>\n\n    </ion-list>\n\n    <!--\n\n    <ion-slides pager color="blue" class="newAction-Slide">\n\n        <ion-slide>\n\n            <img src="./assets/imgs/lel.png" />\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n            <img src="./assets/imgs/lelel.jpg" />\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n            <img src="./assets/imgs/lel.png" />\n\n        </ion-slide>\n\n    </ion-slides>       \n\n    -->\n\n\n\n    <ion-list no-lines class="marginList">\n\n        <ion-item>\n\n            <ion-label color="grey3">Data de início</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" class="inputColor"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey3">Data de fim</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" class="inputColor"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines>\n\n        <ion-item>\n\n            <ion-label color="grey3">Hora de início</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" class="inputColor"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey3">Hora de fim</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" class="inputColor"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="grey3">Horas diárias</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" class="inputColor"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>  \n\n\n\n</ion-content>\n\n\n\n<!--\n\n<ion-footer no-border>\n\n    <ion-toolbar color="light" padding>\n\n        <button class="btnNewAction" ion-button color="secondary"  no-margin full mode="ios" disabled>Criar ação</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n-->'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\new-action\new-action.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], NewAction);

//# sourceMappingURL=new-action.js.map

/***/ })

});
//# sourceMappingURL=21.main.js.map