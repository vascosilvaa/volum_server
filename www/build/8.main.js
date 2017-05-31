webpackJsonp([8],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_users_users_module__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card_list_card_list_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search__ = __webpack_require__(635);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__search__["a" /* Search */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__components_card_list_card_list_module__["a" /* CardListModule */],
            __WEBPACK_IMPORTED_MODULE_0__components_users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__search__["a" /* Search */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__search__["a" /* Search */]
        ]
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

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

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(501);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */]
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Users = (function () {
    function Users() {
    }
    return Users;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Users.prototype, "typeUser", void 0);
Users = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'users',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\components\users\users.html"*/'<button *ngIf="typeUser == 0" ion-item class="fixAvatar">\n\n    <ion-avatar item-left>\n\n        <img src="./assets/imgs/caritas.png">\n\n    </ion-avatar>\n\n    <p text-wrap><span class="bold font-grey4">Cáritas</span></p>\n\n    <p class="font-sm"><span color="grey3">233 ações criadas</span></p>\n\n</button>\n\n\n\n<button *ngIf="typeUser == 1" ion-item class="fixAvatar">\n\n    <ion-avatar item-left>\n\n        <img src="./assets/imgs/vasco.png">\n\n    </ion-avatar>\n\n    <p text-wrap><span class="bold font-grey4">Vasco Silva</span></p>\n\n    <p class="font-sm"><span color="grey3">10 ações criadas</span></p>\n\n</button>\n\n\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\components\users\users.html"*/
    }),
    __metadata("design:paramtypes", [])
], Users);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Search = (function () {
    function Search(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Search.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Search');
    };
    //POPOVER HEADER
    Search.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '0', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    return Search;
}());
Search = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\search\search.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="white" (click)="openMenusHeader($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-toolbar color="primary">\n\n            <ion-searchbar placeholder="Procurar"></ion-searchbar>\n\n        </ion-toolbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content-background" padding-top>\n\n    <ion-list no-lines no-border no-shadow>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Instituições</ion-item>\n\n        <users [typeUser]="0"></users>     \n\n    </ion-list>\n\n\n\n    <ion-list no-lines no-border no-shadow>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Voluntários</ion-item>\n\n        <users [typeUser]="1"></users>     \n\n        <button ion-item mode="md" text-center class="border-top">\n\n            <p class="font-grey3 font-md">Ver mais<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n        </button>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines no-border no-shadow>\n\n        <ion-item class="font-md bold font-grey4 border-bottom">Ações</ion-item>\n\n        <cardList></cardList>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
], Search);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map