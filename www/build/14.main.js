webpackJsonp([14],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_discussion__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDiscussionModule", function() { return ModalDiscussionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDiscussionModule = (function () {
    function ModalDiscussionModule() {
    }
    return ModalDiscussionModule;
}());
ModalDiscussionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_discussion__["a" /* ModalDiscussion */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_discussion__["a" /* ModalDiscussion */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal_discussion__["a" /* ModalDiscussion */]
        ]
    })
], ModalDiscussionModule);

//# sourceMappingURL=modal-discussion.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDiscussion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDiscussion = (function () {
    function ModalDiscussion(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalDiscussion.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalDiscussion;
}());
ModalDiscussion = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal-discussion',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\shared\modal-discussion\modal-discussion.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n        Nova publicação\n\n    </ion-title>\n\n    <ion-buttons start showWhen="ios">\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="light" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons start showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n         <ion-icon name="checkmark" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="android,windows">\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end showWhen="ios">\n\n      <button ion-button (click)="dismiss()" disabled>\n\n        <span ion-text color="light" showWhen="ios">Publicar</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\shared\modal-discussion\modal-discussion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
], ModalDiscussion);

//# sourceMappingURL=modal-discussion.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map