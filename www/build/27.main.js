webpackJsonp([27],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register3__ = __webpack_require__(623);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register3Module", function() { return Register3Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register3Module = (function () {
    function Register3Module() {
    }
    return Register3Module;
}());
Register3Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register3__["a" /* Register3 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register3__["a" /* Register3 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register3__["a" /* Register3 */]
        ]
    })
], Register3Module);

//# sourceMappingURL=register3.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register3; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register3 = (function () {
    function Register3(navCtrl, navParams, _fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.toastCtrl = toastCtrl;
        // GET DATA
        this.type = this.navParams.get('type');
        this.name = this.navParams.get('name');
        this.email = this.navParams.get('email');
        // DISABLE
        this.disabledConfirmPassword = true;
        this.registo3 = this._fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]],
        });
    }
    Register3.prototype.validate = function (value) {
        if (value == 0 && this.registo3.controls.password.errors) {
            if (this.registo3.controls.password.value != "") {
                if (this.registo3.controls.password.errors.minlength) {
                    var toast = this.toastCtrl.create({
                        message: 'Password inválida!',
                        duration: 3000,
                        cssClass: "toast-error"
                    });
                    toast.present();
                }
            }
        }
        else if (value == 0 && !this.registo3.controls.password.errors) {
            this.disabledConfirmPassword = false;
        }
        else if (value == 1 && this.registo3.controls.confirmPassword.errors) {
            if (this.registo3.controls.confirmPassword.value != "") {
                if (this.registo3.controls.confirmPassword.errors.minlength) {
                    var toast = this.toastCtrl.create({
                        message: 'Password inválida!',
                        duration: 3000,
                        cssClass: "toast-error"
                    });
                    toast.present();
                }
            }
        }
    };
    Register3.prototype.onSubmit = function (value, valid) {
        this.registo3.controls.password.markAsTouched();
        this.registo3.controls.confirmPassword.markAsTouched();
        if (this.registo3.controls.password.value == this.registo3.controls.confirmPassword.value) {
            if (valid == true) {
                if (this.type == 0) {
                    this.navCtrl.push("Register4", { type: this.type, name: this.name, email: this.email, password: value.password });
                }
                else {
                    this.navCtrl.push("Register6", { type: this.type, name: this.name, email: this.email, password: value.password });
                }
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'As senhas não coincidem!',
                duration: 3000,
                cssClass: "toast-error"
            });
            toast.present();
        }
    };
    return Register3;
}());
Register3 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register3',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register3\register3.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent color="primary">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-top class="backgroundBlue">\n\n\n\n    <ion-list class="listRegister" no-lines>\n\n        <form [formGroup]="registo3" (ngSubmit)="onSubmit(registo3.value, registo3.valid)">\n\n            <ion-item>\n\n                <h1 class="textWhite" text-wrap>Criar uma senha.</h1>\n\n                <h2 text-wrap class="textWhite" padding-top><span class="textWhite">A sua senha deve ter 8 ou mais caracteres.</span></h2>\n\n            </ion-item>\n\n            <ion-item padding-top>\n\n                <ion-label stacked mode="ios">SENHA</ion-label>\n\n                <ion-input type="password" formControlName="password" (blur)="validate(0)"></ion-input>\n\n            </ion-item>\n\n            <ion-item padding-top padding-bottom>\n\n                <ion-label stacked mode="ios">CONFIRMAR SENHA</ion-label>\n\n                <ion-input type="password" formControlName="confirmPassword" (blur)="validate(1)" [disabled]="disabledConfirmPassword"></ion-input>\n\n            </ion-item>\n\n            <ion-item padding-top>\n\n                <button ion-fab color="light" item-right no-margin mode="ios" [disabled]="!registo3.valid" type="submit"><ion-icon name="arrow-forward" color="primary"></ion-icon></button>\n\n            </ion-item>\n\n        </form>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register3\register3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], Register3);

//# sourceMappingURL=register3.js.map

/***/ })

});
//# sourceMappingURL=27.main.js.map