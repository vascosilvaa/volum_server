webpackJsonp([18],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_users_users_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_list_card_list_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile__ = __webpack_require__(655);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__profile__["a" /* Profile */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__components_card_list_card_list_module__["a" /* CardListModule */],
            __WEBPACK_IMPORTED_MODULE_1__components_users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__profile__["a" /* Profile */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__profile__["a" /* Profile */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vols_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
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
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Profile = (function () {
    function Profile(navCtrl, navParams, volsService, userService, popoverCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.volsService = volsService;
        this.userService = userService;
        this.popoverCtrl = popoverCtrl;
        this.auth = auth;
        this.popover = null;
        this.user = {};
        this.my_applies = [];
        this.my_vols = [];
        this.all_vols = [];
        this.tabsProfile = "actions";
        this.auth.userPromise.then(function (res) {
            console.log("PARAMS", _this.navParams.get('id_user'));
            console.log("RESSS", res);
            if (!_this.navParams.get('id_user')) {
                _this.user = res.user;
                console.log(_this.user);
            }
            else {
                _this.userService.getProfile(_this.navParams.data.id_user).then(function (result) {
                    console.log(result);
                    _this.user = result.user;
                    if (_this.user['type'] == 1) {
                        _this.volsService.getMyVols(_this.user.id_user).then(function (res) {
                            _this.my_vols = res.vols;
                            console.log(_this.my_vols);
                        }).catch(function (err) { return console.log(err); });
                    }
                    else {
                        _this.volsService.getVolHistory(_this.user.id_user)
                            .then(function (res) {
                            _this.all_vols = res.vols;
                            console.log("history", _this.all_vols);
                        })
                            .catch(function (err) { return console.log(err); });
                    }
                }).catch(function (error) {
                    console.error(error);
                });
            }
        });
    }
    Profile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profile');
    };
    Profile.prototype.getDay = function (date) {
        console.log("123", date.getDay());
        return date.getDay();
    };
    //POPOVER HEADER
    Profile.prototype.openMenusHeader = function (ev) {
        var popover = this.popoverCtrl.create("Popover", { typePopOver: '1', userId: '1' });
        popover.present({
            ev: ev
        });
    };
    return Profile;
}());
Profile = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\profile\profile.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Perfil\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="light" (click)="openMenusHeader($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background" [ngSwitch]="tabsProfile">\n\n    <div class="headerCover">\n\n        <img [src]="user.photo" />\n\n    </div>\n\n    <div style="background-color:#FFF">\n\n        <div class="headerPrifilePicture">\n\n            <img [src]="user.photo" />\n\n        </div>\n\n        <div class="headerName">\n\n            <span class="font-lg bold font-grey4">{{user.username}}</span>\n\n        </div>\n\n        <div class="headerLocation">\n\n            <span class="font-sm font-grey3">Vila Nova de Gaia, Avintes</span>\n\n        </div>\n\n        <div class="headerScore">\n\n            <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n            <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n            <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n            <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n            <ion-icon name="star" class="font-md2" color="secondary"></ion-icon>\n\n        </div>\n\n        <ion-grid no-padding class="margin-item">\n\n            <ion-segment [(ngModel)]="tabsProfile" color="primary" mode="md">\n\n                <ion-segment-button value="actions">\n\n                    Ações\n\n                </ion-segment-button>\n\n                <ion-segment-button value="about">\n\n                    Sobre\n\n                </ion-segment-button>\n\n                <ion-segment-button value="follows">\n\n                    Seguidores\n\n                </ion-segment-button>\n\n            </ion-segment>\n\n        </ion-grid>\n\n    </div>\n\n    <div *ngSwitchCase="\'actions\'">\n\n        <ion-list no-lines no-border margin-top >\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações criadas</ion-item>\n\n            <cardList *ngFor="let vol of my_vols" [name]="vol.name"  [photo]="vol.photos[0]" [date]="vol.date_begin"></cardList>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top *ngIf="user.type != 1">\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações onde que vai</ion-item>\n\n            <cardList></cardList>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top *ngIf="user.type != 1">\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Ações próximas</ion-item>\n\n            <cardList></cardList>\n\n        </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'about\'">\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Dados pessoais</ion-item>\n\n            <ion-item>\n\n                <p class="font-grey3">Email</p>\n\n                <ion-note item-right>\n\n                    <p class="font-grey4 bold">{{user.email}}</p>\n\n                </ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p class="font-grey3">Género</p>\n\n                <ion-note item-right>\n\n                    <p class="font-grey4 bold">Masculino</p>\n\n                </ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p class="font-grey3">Telemóvel</p>\n\n                <ion-note item-right>\n\n                    <p class="font-grey4 bold">915682568</p>\n\n                </ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Acerca de mim</ion-item>\n\n            <ion-item>\n\n                <p class="font-grey4 bold">Sobre mim</p>\n\n                <p class="font-grey4" text-wrap>{{user.about}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p class="font-grey4 bold">Hobbies e interesses</p>\n\n                <p class="font-grey4" text-wrap>A Bolsa de Voluntariado é "uma porta de entrada para qualquer pessoa ou entidade que queira oferecer o seu\n\n                    tempo, trabalho, conhecimento e experiência", refere a Entrajuda, instituição criada pelo Banco Alimentar\n\n                    para apoiar outras "entidades não lucrativas" ao nível da organização e gestão.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p class="font-grey4 bold">Tipos de voluntariado favoritos</p>\n\n                <p class="font-grey4" text-wrap>Segundo a coordenadora da plataforma, Marta Vinhas, a Bolsa do Voluntariado foi "o primeiro site português\n\n                    a promover o encontro entre pessoas que querem dar o seu tempo" e "as organizações que precisam deste\n\n                    voluntariado".\n\n                </p>\n\n            </ion-item>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver mais<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Educação e Formação</ion-item>\n\n            <ion-item>\n\n                <p class="font-grey4 bold">Licenciatura em Medicina</p>\n\n                <p class="font-grey4" text-wrap>Instituições, empresas, escolas, universidades e outros grupos, permitindo assim o encontro entre as diferentes\n\n                    partes.\n\n                </p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p class="font-grey4 bold">Mestrado em apoio auxiliar</p>\n\n                <p class="font-grey4" text-wrap>Instituição criada pelo Banco Alimentar para apoiar outras "entidades não lucrativas" ao nível da organização\n\n                    e gestão.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p class="font-grey4 bold">Formação em Voluntariado</p>\n\n                <p class="font-grey4" text-wrap>Primeiro site português a promover o encontro entre pessoas que querem dar o seu tempo" e "as organizações\n\n                    que precisam deste voluntariado".</p>\n\n            </ion-item>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver mais<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Redes Sociais</ion-item>\n\n            <button ion-item>\n\n                <ion-icon name="logo-facebook" color="facebook" item-left></ion-icon>\n\n                <span class="font-grey4 font-md">Facebook</span>\n\n            </button>\n\n            <button ion-item>\n\n                <ion-icon name="logo-google" color="google" item-left></ion-icon>\n\n                <span class="font-grey4 font-md">Google+</span>\n\n            </button>\n\n        </ion-list>\n\n\n\n    </div>\n\n    <div *ngSwitchCase="\'follows\'">\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Instituições</ion-item>\n\n            <users [typeUser]="0"></users>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver mais<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n        <ion-list no-lines no-border margin-top>\n\n            <ion-item class="font-md bold font-grey4 border-bottom">Voluntários</ion-item>\n\n            <users [typeUser]="1"></users>\n\n            <button ion-item mode="md" text-center class="border-top">\n\n                <p class="font-grey3 font-md">Ver mais<ion-icon name="ios-arrow-forward" class="iconViewAll"></ion-icon></p>\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\profile\profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* VolsService */], __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__shared_auth_authentication_service__["a" /* AuthenticationService */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map