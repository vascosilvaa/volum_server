webpackJsonp([13],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register6__ = __webpack_require__(626);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register6Module", function() { return Register6Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register6Module = (function () {
    function Register6Module() {
    }
    return Register6Module;
}());
Register6Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register6__["a" /* Register6 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register6__["a" /* Register6 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register6__["a" /* Register6 */]
        ]
    })
], Register6Module);

//# sourceMappingURL=register6.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryService = (function () {
    function EntryService(http) {
        this.http = http;
    }
    EntryService.prototype.checkEmail = function (email) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/auth/checkEmail", { email: email }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    EntryService.prototype.getCategories = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/list/categories").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    EntryService.prototype.registerUser = function (email, birth_date, name, gender, type, password) {
        var body = { email: email, birth_date: birth_date, name: name, gender: gender, type: type, password: password };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/auth/register", body).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return EntryService;
}());
EntryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], EntryService);

//# sourceMappingURL=entry.service.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entry_service__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register6; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register6 = (function () {
    function Register6(navCtrl, navParams, entryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryService = entryService;
        this.categoryChecked = [];
        this.count = 0;
        // GET DATA
        this.type = this.navParams.get('type');
        this.name = this.navParams.get('name');
        this.email = this.navParams.get('email');
        this.password = this.navParams.get('password');
        this.birthday = this.navParams.get('birthday');
        this.gender = this.navParams.get('gender');
        this.entryService.getCategories().then(function (res) {
            console.log(res);
            _this.categories = res.categories;
            for (var i = 0; i < _this.categories.length; i++) {
                _this.categories[i].checked = false;
            }
        });
        this.disableButton = true;
    }
    Register6.prototype.checked = function () {
        this.count = 0;
        for (var i = 0; i < this.categories.length; i++) {
            if (!this.categories[i].checked) {
                this.count++;
            }
        }
        if (this.count == this.categories.length) {
            this.disableButton = true;
        }
        else {
            this.disableButton = false;
        }
    };
    Register6.prototype.onSubmit = function () {
        var _this = this;
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].checked) {
                this.categoryChecked.push(this.categories[i].id_category);
            }
        }
        if (this.type == 0) {
            this.entryService.registerUser(this.email, new Date(this.birthday), this.name, this.gender, this.type, this.password).then(function (res) {
                _this.navCtrl.push("Register7");
            })
                .catch(function (err) {
                console.log("ERRO");
            });
        }
        else {
        }
        this.categoryChecked = [];
    };
    return Register6;
}());
Register6 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-register6',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register6\register6.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent color="primary">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding-top class="backgroundBlue">\n\n\n\n    <ion-list class="listRegister" no-lines radio-group>\n\n        <ion-item>\n\n            <h1 class="textWhite" text-wrap>Quais as suas áreas de interesse?</h1>\n\n        </ion-item>\n\n        <span *ngFor="let category of categories">\n\n            <ion-item>\n\n                <ion-label>{{category.name}}</ion-label>\n\n                <ion-checkbox class="checkboxColor" color="secondary" [(ngModel)]=\'category.checked\' (ionChange)="checked()"></ion-checkbox>\n\n            </ion-item>\n\n        </span>\n\n        <ion-item padding-top>\n\n            <button ion-fab color="light" item-right no-margin (tap)="onSubmit()" [disabled]="disableButton" mode="ios"><ion-icon name="arrow-forward"></ion-icon></button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register6\register6.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__entry_service__["a" /* EntryService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__entry_service__["a" /* EntryService */]])
], Register6);

//# sourceMappingURL=register6.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map