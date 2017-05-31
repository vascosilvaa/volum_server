webpackJsonp([23],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register1__ = __webpack_require__(648);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register1Module", function() { return Register1Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register1Module = (function () {
    function Register1Module() {
    }
    return Register1Module;
}());
Register1Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register1__["a" /* Register1 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register1__["a" /* Register1 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register1__["a" /* Register1 */]
        ]
    })
], Register1Module);

//# sourceMappingURL=register1.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register1 = (function () {
    function Register1(navCtrl, navParams, _fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.toastCtrl = toastCtrl;
        // GET DATA
        this.type = this.navParams.get('type');
        if (this.type == 0) {
            this.registo1 = this._fb.group({
                name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^[A-z\u00E0-\u00FC]+$/i)]],
                surname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^[A-z\u00E0-\u00FC]+$/i)]],
            });
        }
        else {
            this.registo1 = this._fb.group({
                name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^[A-z\u00E0-\u00FC]+$/i)]],
            });
        }
    }
    Register1.prototype.validate = function (type) {
        var value = type;
        if (this.type == 0) {
            if (value == 0 && this.registo1.controls.name.errors) {
                if (this.registo1.controls.name.value != "") {
                    if (this.registo1.controls.name.errors.pattern) {
                        var toast = this.toastCtrl.create({
                            message: 'Nome inválido!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                    else if (this.registo1.controls.name.errors.minlength) {
                        var toast = this.toastCtrl.create({
                            message: 'O nome inserido é muito pequeno!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                    else {
                        var toast = this.toastCtrl.create({
                            message: 'Campo nome inválido!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                }
            }
            else if (value == 1 && this.registo1.controls.surname.errors) {
                if (this.registo1.controls.surname.value != "") {
                    if (this.registo1.controls.surname.errors.pattern) {
                        var toast = this.toastCtrl.create({
                            message: 'Sobrenome inválido!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                    else if (this.registo1.controls.surname.errors.minlength) {
                        var toast = this.toastCtrl.create({
                            message: 'O sobrenome é muito pequeno!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                    else {
                        var toast = this.toastCtrl.create({
                            message: 'Campo sobrenome inválido!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                }
            }
        }
        else {
            if (value == 0 && this.registo1.controls.name.errors) {
                if (this.registo1.controls.name.value != "") {
                    if (this.registo1.controls.name.errors.pattern) {
                        var toast = this.toastCtrl.create({
                            message: 'Nome inválido!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                    else if (this.registo1.controls.name.errors.minlength) {
                        var toast = this.toastCtrl.create({
                            message: 'O nome inserido é muito pequeno!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                    else {
                        var toast = this.toastCtrl.create({
                            message: 'Campo nome inválido!',
                            duration: 3000,
                            cssClass: "toast-error"
                        });
                        toast.present();
                    }
                }
            }
        }
    };
    Register1.prototype.onSubmit = function (value, valid) {
        if (this.type == 0) {
            this.registo1.controls.name.markAsTouched();
            this.registo1.controls.surname.markAsTouched();
            var completeName = value.name + " " + value.surname;
            if (valid == true) {
                this.navCtrl.push("Register2", { type: this.type, name: completeName });
            }
        }
        else {
            this.registo1.controls.name.markAsTouched();
            if (valid == true) {
                this.navCtrl.push("Register2", { type: this.type, name: value.name });
            }
        }
    };
    return Register1;
}());
Register1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register1',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register1\register1.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent color="primary">\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-top class="backgroundBlue">\n\n    <ion-list class="listRegister" no-lines>\n\n        <ion-item *ngIf="type == 0">\n\n            <h1 text-wrap>Qual é o seu nome?</h1>\n\n        </ion-item>\n\n        <ion-item *ngIf="type == 1">\n\n            <h1 text-wrap>Qual é o nome da instituição?</h1>\n\n        </ion-item>\n\n        <form [formGroup]="registo1" (ngSubmit)="onSubmit(registo1.value, registo1.valid)">\n\n            <ion-item padding-top>\n\n                <ion-label stacked mode="ios"><span *ngIf="type == 1">NOME DA INSTITUIÇÃO</span><span *ngIf="type == 0">NOME</span></ion-label>\n\n                <ion-input maxlength="50" type="text" formControlName="name" (blur)="validate(0)"></ion-input>\n\n            </ion-item>\n\n            <ion-item padding-top padding-bottom *ngIf="type == 0">\n\n                <ion-label stacked mode="ios">SOBRENOME</ion-label>\n\n                <ion-input maxlength="50" type="text" formControlName="surname" (blur)="validate(1)"></ion-input>\n\n            </ion-item>\n\n            <ion-item padding-top>\n\n                <button ion-fab color="light" item-right no-margin [disabled]="!registo1.valid" mode="ios" type="submit"><ion-icon name="arrow-forward"></ion-icon></button>\n\n            </ion-item>\n\n        </form>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\entry\register1\register1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], Register1);

//# sourceMappingURL=register1.js.map

/***/ })

});
//# sourceMappingURL=23.main.js.map