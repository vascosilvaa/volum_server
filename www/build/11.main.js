webpackJsonp([11],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(662);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentsModule = (function () {
    function CommentsModule() {
    }
    return CommentsModule;
}());
CommentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* Comments */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments__["a" /* Comments */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* Comments */]
        ]
    })
], CommentsModule);

//# sourceMappingURL=comments.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Comments = (function () {
    function Comments(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Comments.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Comments');
    };
    //POPOVER HEADER
    Comments.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '0', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    Comments.prototype.openMenusCard = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '3', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    return Comments;
}());
Comments = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-comments',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\shared\card\comments\comments.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Comentários  \n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="white" (click)="openMenusHeader($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background" padding-top>\n\n    <ion-card class="cardVolum fixCard" no-margin margin-bottom>\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/imgs/caritas.png">\n\n            </ion-avatar>\n\n            <h2 ion-text color="primary" class="font-md bold">Cáritas Aveiro</h2>\n\n            <p ion-text color="grey3" class="marginTopNeg font-sm">3 horas</p>\n\n            <button ion-button clear item-right icon-only color="grey3" (click)="openMenusCard($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <span ion-text class="font-md font-grey4">Hoje em dia, as instituições apenas recebem os alimentos do Banco Alimentar e muitas delas organizam recolhas de alimentos para atenuar essa falta, adiantou Isabel Jonet.</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="cardVolum fixCard" no-margin margin-bottom>\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/imgs/vasco.png">\n\n            </ion-avatar>\n\n            <h2 ion-text color="primary" class="font-md bold">Vasco Silva</h2>\n\n            <p ion-text color="grey3" class="marginTopNeg font-sm">1 horas</p>\n\n            <button ion-button clear item-right icon-only color="grey3" (click)="openMenusCard($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <span ion-text class="font-md font-grey4">Alimentos para atenuar essa falta, adiantou Isabel Jonet.</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\shared\card\comments\comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
], Comments);

//# sourceMappingURL=comments.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map