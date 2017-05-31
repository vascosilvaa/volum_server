webpackJsonp([7,10],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedComponent = (function () {
    function FeedComponent(http, volsService, auth) {
        this.http = http;
        this.volsService = volsService;
        this.auth = auth;
        this.ready = false;
        this.loading = false;
        this.sum = 0;
        this.config = {
            pagination: 'null',
            spaceBetween: 30,
            slidesPerView: 2,
            loopedSlides: 1,
            zoom: true
        };
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.login = 1;
        }
        else {
            this.login = 0;
        }
        //VERIFICAR LOGIN
        if (this.login) {
            this.getVols(0, 5, true);
        }
        else if (!this.login) {
            this.volsService.getPrivates()
                .then(function (res) {
                _this.privateVols = res.vols;
                _this.ready = true;
            })
                .catch(function (err) { return console.log(err); });
            this.volsService.getInstVol()
                .then(function (res) {
                _this.instVols = res.vols;
                console.log(res);
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    FeedComponent.prototype.getVols = function (startAt, amount, replace) {
        var _this = this;
        this.volsService.getVols(startAt, amount)
            .then(function (res) {
            if (replace) {
                _this.vols = res.vols;
            }
            else {
                console.log("rs", res.vols);
                _this.loading = false;
                _this.vols = _this.vols.concat(res.vols);
                console.log(_this.vols);
            }
            console.log("VOLS", _this.vols);
            _this.ready = true;
            var _loop_1 = function (i) {
                _this.volsService.countLikes(_this.vols[i].vol.id_vol)
                    .then(function (res) {
                    _this.vols[i].vol.likes = res.likes;
                });
                _this.volsService.checkLike(_this.vols[i].vol.id_vol)
                    .then(function (res) {
                    _this.vols[i].vol.likeState = parseInt(res.state);
                });
            };
            for (var i = 0; i < _this.vols.length; i++) {
                _loop_1(i);
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    FeedComponent.prototype.onScroll = function () {
        this.loading = true;
        console.log("scroll");
        this.sum = this.sum + 5;
        this.getVols(this.sum, 5, false);
    };
    return FeedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('swiper1'),
    __metadata("design:type", Object)
], FeedComponent.prototype, "swiper1", void 0);
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'feed',
        template: __webpack_require__(810),
        styles: [__webpack_require__(733)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_services_vols_service__["a" /* volsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_vols_service__["a" /* volsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], FeedComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/feed.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_validation__);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var RegisterComponent = (function () {
    function RegisterComponent(_fb, router, auth, dialog) {
        this._fb = _fb;
        this.router = router;
        this.auth = auth;
        this.dialog = dialog;
        this.emailRegist = 0;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_6_ng2_validation__["CustomValidators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(6)]],
            password2: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(6)]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(2)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(2)]],
            birth_date: [''],
            type: [''],
            gender: ['']
        });
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log("value", value);
        console.log("valid", valid);
        this.form.controls.email.markAsTouched();
        this.form.controls.password.markAsTouched();
        this.form.controls.password2.markAsTouched();
        this.form.controls.name.markAsTouched();
        this.form.controls.lastname.markAsTouched();
        this.form.patchValue({ type: 2, birth_date: '17-07-1996', gender: [''] });
        console.log("FORMS", this.form);
        if (valid) {
            this.auth.register(value)
                .then(function (res) {
                console.log("result", res);
                if (res.success) {
                    _this.router.navigate(['/profile/', res.id_user]);
                    location.reload();
                }
                else {
                }
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    RegisterComponent.prototype.openEmailRegist = function () {
        this.emailRegist = 1;
    };
    RegisterComponent.prototype.openConfirmationEmail = function () {
        this.emailRegist = 2;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'register',
        styles: [__webpack_require__(737)],
        template: __webpack_require__(814),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* DialogRef */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/register.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_timeago_pipe__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vol_details_modal_vol_details_modal_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__card_card_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_google_maps_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_view_all_modal_view_all_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_end_modal_end_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modal_profile_modal_profile_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modal_invite_modal_invite_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__edit_modal_edit_modal_component__ = __webpack_require__(548);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */],
            __WEBPACK_IMPORTED_MODULE_17__modal_end_modal_end_component__["a" /* ModalEndComponent */],
            __WEBPACK_IMPORTED_MODULE_18__modal_profile_modal_profile_component__["a" /* ModalProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_1__pipes_timeago_pipe__["a" /* timeAgoPipe */],
            __WEBPACK_IMPORTED_MODULE_19__modal_invite_modal_invite_component__["a" /* ModalInviteComponent */],
            __WEBPACK_IMPORTED_MODULE_20__edit_modal_edit_modal_component__["a" /* EditModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_14_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_13__card_card_component__["a" /* CardComponent */], __WEBPACK_IMPORTED_MODULE_9__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_16__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __WEBPACK_IMPORTED_MODULE_17__modal_end_modal_end_component__["a" /* ModalEndComponent */], __WEBPACK_IMPORTED_MODULE_18__modal_profile_modal_profile_component__["a" /* ModalProfileComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["LOCALE_ID"], useValue: "pt-PT" }, __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */],
            __WEBPACK_IMPORTED_MODULE_18__modal_profile_modal_profile_component__["a" /* ModalProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/shared.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEndComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalEndComponent = (function () {
    function ModalEndComponent(dialog, SharedService) {
        this.dialog = dialog;
        this.SharedService = SharedService;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.eval1 = Array;
        this.eval2 = Array;
        this.eval3 = Array;
        this.eval4 = Array;
        this.eval5 = Array;
        this.people = [
            {
                'id': 0,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            }, {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            },
            {
                'id': 1,
                'eval': 'NULL'
            }
        ];
        this.context = dialog.context;
        this.context.isBlocking = false;
        if (this.context.type == 1) {
        }
        else if (this.context.type == 2) {
            this.context.size = "lg";
        }
    }
    ModalEndComponent.prototype.ngOnInit = function () {
        if (this.context.type == 2) {
            this.evaluation = 1;
            this.evalAll = 0;
        }
    };
    ModalEndComponent.prototype.deleteAction = function (id_vol) {
        this.SharedService.deleteAction(id_vol).then(function (res) {
            console.log(res);
        });
    };
    ModalEndComponent.prototype.ev = function (id, estrela) {
        this.people[id].eval = estrela;
    };
    ModalEndComponent.prototype.evAll = function (estrela) {
        this.evalAll = estrela;
        for (var i = 0; i <= this.people.length; i++) {
            this.people[i].eval = this.evalAll;
        }
    };
    ModalEndComponent.prototype.close = function () {
        this.dialog.dismiss();
    };
    return ModalEndComponent;
}());
ModalEndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'modal-end',
        template: __webpack_require__(820),
        styles: [__webpack_require__(743)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], ModalEndComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-end.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService() {
        this.url = __WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].SOCKET_ENDPOINT;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        console.log(this.socket);
        console.log(this.url);
    }
    SocketService.prototype.onConnect = function (id_user) {
        this.socket.emit("user", id_user);
    };
    SocketService.prototype.onNotification = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('notification', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.onRequest = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('request', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.joinRoom = function (id) {
        this.socket.emit("join", id);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/socket.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_constants__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HttpClient } from '../http-client';
//import { User } from '../user/user';

var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.errorHandler = function (error) { return console.log('AuthenticationService error', error); };
        //TODO load information about the roles
        this.LOCAL_TOKEN_KEY = 'yourTokenKey';
        this.authenticated = false;
        this.dataAvailable = false;
        this.loadUserCredentials();
    }
    AuthenticationService.prototype.reloadUser = function (id, self) {
        var _this = this;
        var temp = this.http.get(__WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) {
            var response = res.json();
            _this.dataAvailable = true;
            return response;
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            _this.errorHandler(err);
            return err.json();
        });
        if (self) {
            this.userPromise = temp;
        }
        return temp;
    };
    AuthenticationService.prototype.login = function (loginInfo) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/auth/login", loginInfo).toPromise()
            .then(function (res) {
            _this.storeUserCredentials(res.json().id_token);
            localStorage.setItem("USER_ID", res.json().id_user);
            return res.json();
        })
            .catch(function (err) {
            _this.errorHandler(err);
            return err.json();
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.destroyUserCredentials();
    };
    AuthenticationService.prototype.register = function (value) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/auth/register", value).toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.errorHandler(err);
            return err.json();
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    AuthenticationService.prototype.loadUserCredentials = function () {
        var token = localStorage.getItem(this.LOCAL_TOKEN_KEY);
        var id = localStorage.getItem("USER_ID");
        if (token) {
            this.useCredentials(token);
            this.reloadUser(id, true);
        }
    };
    AuthenticationService.prototype.storeUserCredentials = function (token) {
        localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
        this.useCredentials(token);
    };
    AuthenticationService.prototype.useCredentials = function (token) {
        this.authenticated = true;
        this.authToken = token;
        this.http.setAuthHeader(this.authToken);
    };
    AuthenticationService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.authenticated = false;
        this.http.removeAuthHeader();
        localStorage.removeItem(this.LOCAL_TOKEN_KEY);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/authentication.service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_global_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return volsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var volsService = (function () {
    function volsService(http) {
        this.http = http;
    }
    volsService.prototype.confirmCandidate = function (id_vol, id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/accept", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.countConfirmed = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.getVol = function (idVol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + idVol).toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.checkState = function (id_user, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + '/checkState', { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    volsService.prototype.apply = function (id_user, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + '/apply', { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.cancelApply = function (id_user, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/cancel", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.like = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/like", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.dislike = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/dislike", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.getComments = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id + "/comments").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.sendComment = function (message, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/comment", { message: message }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.countCandidates = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.countConfirmeds = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.getCandidates = function (id_vol, amount) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates", { amount: amount }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.getConfirmed = function (id_vol, amount) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed", { amount: amount }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.countComments = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/comments/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.getPrivates = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/?type=private").toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    volsService.prototype.getInstVol = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/?type=inst").toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    volsService.prototype.countLikes = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/likes/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.getVols = function (startAt, amount) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols", { startAt: startAt, amount: amount }).toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    volsService.prototype.checkLike = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/checkLike").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.search = function (query) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/search?search=" + query).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.nearby = function (lat, lng) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/nearby/", { lat: lat, lng: lng }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    volsService.prototype.bounds = function (swlat, swlng, nwlat, nwlng) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/bounds/", { swlat: swlat, swlng: swlng, nwlat: nwlat, nwlng: nwlng }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return volsService;
}());
volsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], volsService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/vols.service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modal_profile_modal_profile_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_profile_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_feed_feed_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_modal__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ActionComponent = (function () {
    function ActionComponent(modal, route, router, overlay, injector, SharedService, volsService, authService) {
        this.modal = modal;
        this.route = route;
        this.router = router;
        this.injector = injector;
        this.SharedService = SharedService;
        this.volsService = volsService;
        this.authService = authService;
        this.ready = false;
    }
    ActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.vol = _this.router.snapshot.params['id'];
        });
        setTimeout(function () {
            _this.getComments();
            _this.getCandidates();
            _this.getConfirmed();
            if (_this.authService.isAuthenticated()) {
                _this.authService.userPromise.then(function (res) {
                    _this.userLogin = res.user;
                    console.log(_this.userLogin);
                });
                _this.login = 1;
                _this.checkLike();
                _this.authService.userPromise.then(function (res) {
                    _this.id_user = res.user.id_user;
                    _this.photo = res.user.photo;
                    _this.name = res.user.username;
                });
            }
            else {
                _this.login = 0;
            }
            _this.countConfirmeds();
            _this.countCandidates();
            _this.countLikes();
            _this.countComments();
            _this.volsService.getVol(_this.vol)
                .then(function (res) {
                _this.volDetails = res.vol;
                console.log("vol-details ----- > ", _this.volDetails);
                _this.checkState(_this.vol);
                _this.getAddress(_this.volDetails.lat, _this.volDetails.lng);
                _this.lat = parseFloat(_this.volDetails.lat);
                _this.lng = parseFloat(_this.volDetails.lng);
                console.log(_this.lat, _this.lng);
                _this.ready = true;
            })
                .catch(function (err) { return console.log(err); });
        }, 250);
    };
    ActionComponent.prototype.onSelect = function (id_profile) {
        this.route.navigate(['/profile/' + id_profile + '/activity']);
    };
    ActionComponent.prototype.openProfileModal = function (idProfile) {
        var _this = this;
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__shared_modal_profile_modal_profile_component__["a" /* ModalProfileComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_angular2_modal__["n" /* overlayConfigFactory */])({ idProfile: idProfile }, __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */])).then(function (d) { return d.result; })
            .then(function (r) {
            setTimeout(function () {
                _this.route.navigate(['/profile/' + idProfile + '/activity']);
            }, 500);
        }, function (error) { console.log(error); });
        ;
    };
    ActionComponent.prototype.countComments = function () {
        var _this = this;
        this.volsService.countComments(this.vol)
            .then(function (res) {
            _this.numberComments = res.count;
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.getCandidates = function () {
        var _this = this;
        this.volsService.getCandidates(this.vol, 10)
            .then(function (res) {
            _this.candidates = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.getConfirmed = function () {
        var _this = this;
        this.volsService.getConfirmed(this.vol, 10)
            .then(function (res) {
            _this.confirmeds = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.openLikesModal = function (type, id_vol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, idVol: id_vol }, __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    ActionComponent.prototype.openCandidates = function (type, id_vol) {
        if ((type == 1 && this.numberCandidates > 0) || (type == 2 && this.numberConfirmeds > 0)) {
            return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, idVol: id_vol }, __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
        }
    };
    ActionComponent.prototype.openRemoveConfirm = function (type, name, id_user, idVol) {
        var _this = this;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, idVol: idVol, nameVol: name, id_user: id_user }, __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]))
            .then(function (d) { return d.result; })
            .then(function (r) {
            console.log(r.result);
            if (_this.state == 1) {
                _this.state = 0; // Candidatar
            }
            else if (_this.state == 0) {
                _this.state = 3; //Sucesso
            }
        }, function (error) { console.log(error); });
    };
    ActionComponent.prototype.sendComment = function (comment) {
        var _this = this;
        if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {
            this.volsService.sendComment(comment, this.vol).then(function (res) {
                _this.comentario = '';
                _this.numberComments++;
                _this.comments.push({
                    id_user: _this.id_user,
                    message: comment,
                    photo_url: _this.photo,
                    name: _this.name,
                });
            });
        }
    };
    ActionComponent.prototype.getComments = function () {
        var _this = this;
        if (!this.showComments) {
            this.showComments = 1;
            this.volsService.getComments(this.vol)
                .then(function (res) {
                _this.comments = res.comments;
                console.log(res);
            })
                .catch(function (err) { return console.log(err); });
        }
        else {
            this.showComments = 0;
        }
    };
    ActionComponent.prototype.countLikes = function () {
        var _this = this;
        this.volsService.countLikes(this.vol)
            .then(function (res) {
            _this.numberLikes = res.likes;
            console.log(_this.numberLikes);
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.countConfirmeds = function () {
        var _this = this;
        this.volsService.countConfirmeds(this.vol)
            .then(function (res) {
            _this.numberConfirmeds = res.count;
            console.log(_this.numberConfirmeds);
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.countCandidates = function () {
        var _this = this;
        this.volsService.countCandidates(this.vol)
            .then(function (res) {
            _this.numberCandidates = res.count;
            console.log(_this.numberCandidates);
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.checkLike = function () {
        var _this = this;
        this.volsService.checkLike(this.vol)
            .then(function (res) {
            _this.likeState = parseInt(res.state);
        })
            .catch(function (err) { return console.log(err); });
    };
    ActionComponent.prototype.like = function (id_vol) {
        this.likeState = 1;
        this.numberLikes++;
        this.volsService.like(id_vol).then(function (res) {
        });
    };
    ActionComponent.prototype.dislike = function (id_vol) {
        this.likeState = 0;
        this.numberLikes--;
        this.volsService.dislike(id_vol).then(function (res) {
            console.log(res);
        });
    };
    ActionComponent.prototype.getAddress = function (lat, long) {
        var _this = this;
        if (lat && long) {
            this.SharedService.getAddress(lat, long)
                .then(function (res) {
                _this.addressData = res.results;
                _this.address = _this.addressData[0].formatted_address;
                //this.addressName = this.addressData[0].address_components[0].short_name;
            });
        }
    };
    ActionComponent.prototype.checkState = function (id_vol) {
        var _this = this;
        this.volsService.checkState(this.id_user, id_vol).then(function (res) {
            _this.state = res.state;
            console.log(res);
        });
    };
    ActionComponent.prototype.goDetails = function (id_vol) {
        this.route.navigate(['/profile/' + this.id_user + '/details/' + id_vol]);
    };
    return ActionComponent;
}());
ActionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
        selector: 'app-action',
        template: __webpack_require__(809),
        styles: [__webpack_require__(732)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_7__components_feed_feed_component__["a" /* FeedComponent */], __WEBPACK_IMPORTED_MODULE_6__shared_services_shared_service__["a" /* SharedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular2_modal__["g" /* Overlay */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_core__["Injector"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_vols_service__["a" /* volsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _h || Object])
], ActionComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/action.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_socket_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(2);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var LoginComponent = (function () {
    function LoginComponent(_fb, auth, dialog, socketService) {
        this._fb = _fb;
        this.auth = auth;
        this.dialog = dialog;
        this.socketService = socketService;
        this.stateEmail = 0;
        this.statePass = 0;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3)]]
        });
    };
    LoginComponent.prototype.loginFacebook = function () {
        window.open('http://volum.ddns.net/api/auth/facebook');
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.auth.login(value)
            .then(function (res) {
            console.log(res);
            if (res.success) {
                _this.dialog.close();
                location.reload();
            }
            else {
                _this.error = res.message;
                console.log(_this.error);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'login',
        styles: [__webpack_require__(734)],
        template: __webpack_require__(811),
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_socket_service__["a" /* SocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* DialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/login.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(http, volsService, map, _loader) {
        this.http = http;
        this.volsService = volsService;
        this.map = map;
        this._loader = _loader;
        this.vols = [];
        this.ready = false;
        this.lats = {};
        this.location = {};
    }
    MapComponent.prototype.setPosition = function (position) {
        this.location = position.coords;
        console.log(position.coords.latitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.teste = {
            lat: this.lat,
            lng: this.lng
        };
    };
    MapComponent.prototype.ngOnInit = function () {
        this.getLocation();
    };
    MapComponent.prototype.search = function () {
        var _this = this;
        this.volsService.bounds(this.lats.swlat, this.lats.swlng, this.lats.nwlat, this.lats.nwlng)
            .then(function (res) {
            _this.vols = res.vols;
            console.log("res", res);
            _this.ready = true;
        })
            .catch(function (err) { return console.log(err); });
    };
    MapComponent.prototype.getVols = function (event) {
        console.log(event);
        this.lats = {
            swlat: event.getSouthWest().lat(),
            swlng: event.getSouthWest().lng(),
            nwlat: event.getNorthEast().lat(),
            nwlng: event.getNorthEast().lng()
        };
    };
    MapComponent.prototype.convertStringToNumber = function (value) {
        return +value;
    };
    MapComponent.prototype.getLocation = function () {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(812),
        styles: [__webpack_require__(735)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */], __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _d || Object])
], MapComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/map.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(813),
        styles: [__webpack_require__(736)]
    }),
    __metadata("design:paramtypes", [])
], NotificationsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/notifications.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modal_profile_modal_profile_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_vol_details_modal_vol_details_modal_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_modal__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchComponent = (function () {
    function SearchComponent(overlay, vcRef, volsService, modal, route, router) {
        this.volsService = volsService;
        this.modal = modal;
        this.route = route;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = "";
        this.route.params.subscribe(function (params) {
            _this.search_query = _this.route.snapshot.params['q'];
            console.log(_this.search_query);
        });
        this.search(this.search_query);
    };
    SearchComponent.prototype.search = function (query) {
        var _this = this;
        console.log(query);
        this.volsService.search(query).then(function (res) {
            _this.searchResult = res;
            console.log(_this.searchResult);
            if (_this.searchResult.success == true) {
                _this.elements = _this.searchResult.message;
            }
            else {
                _this.elements = 0;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    SearchComponent.prototype.openVolDetails = function (idVol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__shared_vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ idVol: idVol }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    SearchComponent.prototype.openUser = function (id_user) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__shared_modal_profile_modal_profile_component__["a" /* ModalProfileComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ idProfile: id_user }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(815),
        styles: [__webpack_require__(738)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */], __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["g" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/search.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRequestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialRequestsComponent = (function () {
    function SocialRequestsComponent() {
    }
    SocialRequestsComponent.prototype.ngOnInit = function () {
    };
    return SocialRequestsComponent;
}());
SocialRequestsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-social-requests',
        template: __webpack_require__(816),
        styles: [__webpack_require__(739)]
    }),
    __metadata("design:paramtypes", [])
], SocialRequestsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/social-requests.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SharedService = (function () {
    function SharedService(http, Http) {
        this.http = http;
        this.Http = Http;
    }
    SharedService.prototype.getAddress = function (lat, lng) {
        return this.Http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.getProfile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.getCandidates = function (id_vol, amount) {
        if (amount == null) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates").toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates", { amount: amount }).toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    SharedService.prototype.getConfirmed = function (id_vol, amount) {
        if (amount == null) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed").toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed", { amount: amount }).toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    SharedService.prototype.checkLike = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/checkLike").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.like = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/like", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.dislike = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/dislike", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.getLikes = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/likes").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.deleteAction = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/delete", { id_vol: id_vol }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.denyCandidate = function (id_vol, id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/deny", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _b || Object])
], SharedService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/shared.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalConstants; });
var GlobalConstants = (function () {
    function GlobalConstants() {
    }
    Object.defineProperty(GlobalConstants, "API_ENDPOINT", {
        //  public static get API_ENDPOINT(): string { return 'http://localhost:8080/api'; }
        // public static get SOCKET_ENDPOINT(): string { return 'http://localhost:8080/'; }
        get: function () { return 'http://146.185.137.215/api'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalConstants, "SOCKET_ENDPOINT", {
        get: function () { return 'http://146.185.137.215/'; },
        enumerable: true,
        configurable: true
    });
    return GlobalConstants;
}());

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/global-constants.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpClient = (function () {
    function HttpClient(http, router) {
        this.http = http;
        this.router = router;
        this.http = http;
    }
    HttpClient.prototype.setAuthHeader = function (header) {
        this.theHeader = header;
    };
    HttpClient.prototype.removeAuthHeader = function () {
        this.theHeader = undefined;
    };
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', this.theHeader);
    };
    HttpClient.prototype.get = function (url, queryParams) {
        if (queryParams === void 0) { queryParams = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url + this.serialize(queryParams), {
            headers: headers
        });
    };
    HttpClient.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.delete = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.serialize = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        if (str.length > 0) {
            return "?" + str.join("&");
        }
        return "";
    };
    return HttpClient;
}());
HttpClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HttpClient);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/http-client.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/components/chat/chat.module": [
		878,
		4
	],
	"../app/components/feed/feed.module": [
		879,
		2
	],
	"../app/components/profile/profile.module": [
		882,
		1
	],
	"app/components/profile/actions/actions.module": [
		880,
		5
	],
	"app/components/profile/following/following.module": [
		881,
		3
	],
	"app/components/profile/settings/settings.module": [
		883,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 544;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(609);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/main.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModalComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_8_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var EditModalComponent = (function () {
    function EditModalComponent(router, dialog, parser, _fb, volsService, ProfileService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.parser = parser;
        this._fb = _fb;
        this.volsService = volsService;
        this.ProfileService = ProfileService;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.schedule = 0;
        this.img = 0;
        this.formatter = function (x) { return x.formatted_address; };
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this.ProfileService.search(term)
                    .do(function () { _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.size = "lg";
    }
    EditModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProfileService.getCategories().then(function (res) {
            _this.categories = res.categories;
            console.log(res);
        });
        this.form = this._fb.group({
            name: ['', []],
            description: ['', []],
            category: ['', []],
            insurance: ['', []],
            date_begin: ['', []],
            date_end: ['',],
            start_time: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
            end_time: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
            duration: ['',],
        });
    };
    EditModalComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.form.controls.name.markAsTouched();
        this.form.controls.description.markAsTouched();
        this.form.controls.category.markAsTouched();
        this.form.controls.insurance.markAsTouched();
        this.form.controls.date_begin.markAsTouched();
        this.form.controls.date_end.markAsTouched();
        this.form.controls.start_time.markAsTouched();
        this.form.controls.end_time.markAsTouched();
        this.form.controls.duration.markAsTouched();
        if (form.valid && this.coord) {
            console.log('you submitted value:', form.value);
            if (form.value.date_begin instanceof Date) {
            }
            else {
                form.value.date_begin = new Date(this.parser.format(form.value.date_begin));
                form.value.date_end = new Date(this.parser.format(form.value.date_end));
            }
            form.value.lat = this.lat;
            form.value.lng = this.lng;
            console.log("VALUE", form.value);
            this.ProfileService.newAction(form.value).then(function (res) {
                console.log(res);
                if (res.error) {
                    console.log('erro');
                }
                else {
                    _this.router.navigate(['/profile/' + _this.idProfile + '/details/' + res.id_vol]);
                }
            });
        }
        else {
            this.coordAdvice = true;
        }
    };
    EditModalComponent.prototype.navigate = function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.coord = true;
    };
    EditModalComponent.prototype.readUrl = function (event) {
        var _this = this;
        console.log(event.target.files.length);
        if (event.target.files.length > 3) {
            this.errorFiles = 1;
        }
        else {
            this.errorFiles = 0;
            if (event.target.files && event.target.files[0] && event.target.files[1]) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.url1 = event.target['result'];
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            if (event.target.files && event.target.files[0] && !event.target.files[1]) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.url1 = event.target['result'];
                    _this.url2 = undefined;
                    _this.url3 = undefined;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            if (event.target.files && event.target.files[1] && event.target.files[2]) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.url2 = event.target['result'];
                };
                reader.readAsDataURL(event.target.files[1]);
            }
            if (event.target.files && event.target.files[1] && !event.target.files[2]) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.url2 = event.target['result'];
                    _this.url3 = undefined;
                };
                reader.readAsDataURL(event.target.files[1]);
            }
            if (event.target.files && event.target.files[2]) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.url3 = event.target['result'];
                };
                reader.readAsDataURL(event.target.files[2]);
            }
        }
    };
    /*change(id) {
      if (id==1 && this.name=="Insira aqui o título da ação de voluntariado") { // name
        this.name="";
      } else if (id==2 && this.desc=="Descrição das funções do voluntário") {// descrição
         this.desc="";
      }
      else if (id==3 &&  this.localization == "Insira a localização do voluntariado") {// localização
         this.localization="";
      }
      else if (id==4 && this.start_time== "Hora inicial da ação de voluntariado") {// start time
         this.start_time="";
      }
      else if (id==5 && this.end_time=="Hora final da ação de voluntariado") {// end time
         this.end_time="";
      }
      else if (id==6 && this.duration == "Duração diária da ação de voluntariado") {// duração
         this.duration="";
      }
    }
     changeOut(id) {
      if (id==1 && this.name == "") { // name
        this.name="Insira aqui o título da ação de voluntariado";
      } else if (id==2 && this.desc =="") {// descrição
        this.desc="Descrição das funções do voluntário";
      }
      else if (id==3 && this.localization == "") {// localização
        this.localization = "Insira a localização do voluntariado";
      }
      else if (id==4 && this.start_time == "") {// start time
        this.start_time="Hora inicial da ação de voluntariado ";
      }
      else if (id==5 && this.end_time == "") {// end time
        this.end_time="Hora final da ação de voluntariado";
      }
      else if (id==6 && this.duration == "") {// duração
        this.duration = "Duração diária da ação de voluntariado";
      }
    }
  */
    EditModalComponent.prototype.showSchedule = function () {
        this.schedule = 1;
    };
    EditModalComponent.prototype.hideSchedule = function () {
        this.schedule = 0;
    };
    EditModalComponent.prototype.showImgs = function () {
        this.img = 1;
    };
    EditModalComponent.prototype.hideImgs = function () {
        this.img = 0;
    };
    return EditModalComponent;
}());
EditModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-edit-modal',
        template: __webpack_require__(818),
        styles: [__webpack_require__(741)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["b" /* DialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbDateParserFormatter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbDateParserFormatter */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_vols_service__["a" /* volsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */]) === "function" && _f || Object])
], EditModalComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/edit-modal.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_global_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
        this.conversationUpdate = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    ChatService.prototype.activeConversation = function (value) {
        this.conversation = value;
        this.conversationUpdate.next(this.conversation);
    };
    ChatService.prototype.getConversations = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.getMessages = function (id_conversation) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + '/messages').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.sendMessage = function (id_conversation, message) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + "/message", { message: message }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.getLastMessage = function (id_conversation) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + "/messages/last").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.getProfile = function (id_conversation) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + "/user").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat.service.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppComponent = (function () {
    function AppComponent(overlay, route, vcRef, modal, router, auth, socketService, appService, chatService, profileService) {
        this.route = route;
        this.modal = modal;
        this.router = router;
        this.auth = auth;
        this.socketService = socketService;
        this.appService = appService;
        this.chatService = chatService;
        this.profileService = profileService;
        this.notification = new Audio();
        this.conversations = [];
        this.notifications = [];
        this.requests = [];
        this.messagesReady = false;
        overlay.defaultViewContainer = vcRef;
        this.notification.src = "http://www.wavsource.com/snds_2017-05-21_1278357624936861/sfx/boing_x.wav";
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_11_moment__["locale"]('pt-pt');
        __WEBPACK_IMPORTED_MODULE_11_moment__["updateLocale"]('pt', {
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: "Agora mesmo",
                m: "1 min",
                mm: "%d m",
                h: "1h",
                hh: "%d hrs",
                d: "1 dia",
                dd: "%d dias",
                M: "1 mês",
                MM: "%d meses",
                y: "1 ano",
                yy: "%d anos"
            }
        });
        this.getUser();
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                _this.user = res.user;
                _this.socketService.onNotification().subscribe(function (res) {
                    _this.newNotificationCount++;
                    console.log("NEW NOTIFICATION", res);
                    _this.notification.play();
                });
                _this.socketService.onRequest().subscribe(function (res) {
                    _this.newRequestsCount++;
                    console.log("NEW REQUEST", res);
                    _this.notification.play();
                });
                _this.socketService.onConnect(res.user.id_user);
                _this.getNotificationCount(res.user.id_user);
                _this.getRequestCount(res.user.id_user);
                var id = localStorage.getItem('USER_ID');
                _this.idLogin = id;
            });
        }
    };
    AppComponent.prototype.getConversations = function () {
        var _this = this;
        this.chatService.getConversations().then(function (res) {
            _this.conversations = res.conversations;
            console.log("Conversations", _this.conversations);
            _this.getUsersAndLastMessage();
        });
    };
    AppComponent.prototype.getUsersAndLastMessage = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.profileService.getProfile(this_1.conversations[i].id_user).then(function (res) {
                _this.conversations[i].photo_url = res.user.photo;
                _this.conversations[i].name = res.user.username;
                console.log(res);
            });
            this_1.chatService.getLastMessage(this_1.conversations[i].id_conversation).then(function (res) {
                _this.conversations[i].message = res.messages[0].message;
                _this.conversations[i].date = res.messages[0].date;
                _this.messagesReady = true;
                console.log(res);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.conversations.length; i++) {
            _loop_1(i);
        }
    };
    AppComponent.prototype.getLastMessage = function (id) {
    };
    AppComponent.prototype.getNotificationCount = function (id) {
        var _this = this;
        this.appService.newNotificationCount(id).then(function (res) {
            _this.newNotificationCount = res.count;
            console.log(res);
        });
    };
    AppComponent.prototype.getRequestCount = function (id) {
        var _this = this;
        this.appService.newRequestCount(id).then(function (res) {
            _this.newRequestsCount = res.count;
            console.log(res);
        });
    };
    AppComponent.prototype.getNotifications = function (id) {
        var _this = this;
        this.appService.getNotifications(id).then(function (res) {
            _this.notifications = res.notifications;
            console.log("NOTIFICATIONS", res);
            _this.cleanNotifications();
        });
    };
    AppComponent.prototype.getRequests = function (id) {
        var _this = this;
        this.appService.getRequests(id).then(function (res) {
            _this.requests = res.notifications;
            _this.cleanRequests();
            console.log("requests", res);
        });
    };
    AppComponent.prototype.cleanRequests = function () {
        var _this = this;
        if (this.newRequestsCount > 0) {
            this.appService.cleanRequests(this.user.id_user).then(function (res) {
                console.log("requestsaa", res);
                _this.newRequestsCount = 0;
            });
        }
    };
    AppComponent.prototype.cleanNotifications = function () {
        var _this = this;
        if (this.newNotificationCount > 0) {
            this.appService.cleanNotifications(this.user.id_user).then(function (res) {
                console.log("requestsaabb", res);
                _this.newNotificationCount = 0;
            });
        }
    };
    AppComponent.prototype.goToMessages = function (id, name) {
        console.log("name", name);
        this.chatService.conversation = name;
        this.router.navigate(['./chat/msg', id], { relativeTo: this.route });
    };
    AppComponent.prototype.openLogin = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    AppComponent.prototype.openRegister = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.user = null;
    };
    AppComponent.prototype.onSelect = function (profile) {
        this.router.navigate(['/profile/' + profile + '/activity']);
    };
    AppComponent.prototype.onSelectSettings = function (profile) {
        this.router.navigate(['/profile/' + profile + '/settings']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(808),
        styles: [__webpack_require__(731)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angular2_modal__["g" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_service__["a" /* SocketService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__["a" /* ChatService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _k || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modal_end_modal_end_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_map_map_module__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_google_maps_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_vol_details_modal_vol_details_modal_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_search_search_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_notifications_notifications_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_social_requests_social_requests_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_action_action_component__ = __webpack_require__(318);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_social_requests_social_requests_component__["a" /* SocialRequestsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_action_action_component__["a" /* ActionComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_map_map_module__["a" /* MapModule */],
            __WEBPACK_IMPORTED_MODULE_16_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_18_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_15_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __WEBPACK_IMPORTED_MODULE_1__shared_modal_end_modal_end_component__["a" /* ModalEndComponent */], __WEBPACK_IMPORTED_MODULE_22__shared_vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_Auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__shared_http_client__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__shared_services_vols_service__["a" /* volsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_action_action_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_social_requests_social_requests_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notifications_notifications_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_search_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_map_map_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '*', redirectTo: 'feed', pathMatch: 'full' },
    { path: '', redirectTo: 'feed', pathMatch: 'full' },
    { path: '',
        // canActivateChild: [AuthenticationGuard],
        children: [
            {
                path: 'chat',
                loadChildren: '../app/components/chat/chat.module#ChatModule'
            },
            {
                path: 'profile/:id',
                loadChildren: '../app/components/profile/profile.module#ProfileModule'
            },
            {
                path: 'action/:id',
                component: __WEBPACK_IMPORTED_MODULE_0__components_action_action_component__["a" /* ActionComponent */]
            },
            {
                path: 'feed',
                loadChildren: '../app/components/feed/feed.module#FeedModule'
            },
            {
                path: 'map',
                component: __WEBPACK_IMPORTED_MODULE_4__components_map_map_component__["a" /* MapComponent */]
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_3__components_search_search_component__["a" /* SearchComponent */],
            },
            {
                path: 'notifications',
                component: __WEBPACK_IMPORTED_MODULE_2__components_notifications_notifications_component__["a" /* NotificationsComponent */]
            },
            {
                path: 'requests',
                component: __WEBPACK_IMPORTED_MODULE_1__components_social_requests_social_requests_component__["a" /* SocialRequestsComponent */]
            },
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.routing.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.newNotificationCount = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/not-read/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    AppService.prototype.newRequestCount = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/requests/not-read/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    AppService.prototype.getNotifications = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    AppService.prototype.getRequests = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/requests").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    AppService.prototype.cleanRequests = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/requests/read-all", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    AppService.prototype.cleanNotifications = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/notifications/read-all", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.service.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__map_component__["a" /* MapComponent */]],
    })
], MapModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/map.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeAgoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var timeAgoPipe = (function () {
    function timeAgoPipe() {
    }
    timeAgoPipe.prototype.transform = function (time) {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date)
                    time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'segundos', 1],
            [120, 'há 1 m', ''],
            [3600, 'm', 60],
            [7200, 'há 1h', '1 hour from now'],
            [86400, 'horas', 3600],
            [172800, 'Ontem', 'Tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'A semana passada', 'Next week'],
            [2419200, 'semanas', 604800],
            [4838400, '1 mês', 'Next month'],
            [29030400, 'Meses', 2419200],
            [58060800, 'O Ano passado', 'Next year'],
            [2903040000, 'anos', 29030400],
            [5806080000, 'Last century', 'Next century'],
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000, token = 'atrás', list_choice = 1;
        if (seconds == 0) {
            return 'Agora mesmo';
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'atrás';
            list_choice = 2;
        }
        var i = 0, format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time;
    };
    return timeAgoPipe;
}());
timeAgoPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'timeAgo' })
], timeAgoPipe);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/timeago.pipe.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_register_register_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_timezone__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CardComponent = (function () {
    function CardComponent(overlay, vcRef, modal, sharedService, router, auth) {
        this.modal = modal;
        this.sharedService = sharedService;
        this.router = router;
        this.auth = auth;
        this.foto1 = 1;
        this.foto2 = 0;
        this.foto3 = 0;
        this.comments = 0;
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            noSwiping: true
        };
        overlay.defaultViewContainer = vcRef;
    }
    CardComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.login = 1;
        }
        else {
            this.login = 0;
        }
        console.log("LIKES", this.likes);
        __WEBPACK_IMPORTED_MODULE_8_moment_timezone__["tz"]("Europe/Lisbon");
        __WEBPACK_IMPORTED_MODULE_8_moment_timezone__["tz"]("Europe/Lisbon").locale('pt-pt');
        __WEBPACK_IMPORTED_MODULE_8_moment_timezone__["updateLocale"]('pt', {
            relativeTime: {
                future: "Daqui a %s",
                past: "%s",
                s: "Agora mesmo",
                m: "1 min",
                mm: "%d m",
                h: "1h",
                hh: "%d hrs",
                d: "1 dia",
                dd: "%d dias",
                M: "1 mês",
                MM: "%d meses",
                y: "1 ano",
                yy: "%d anos"
            }
        });
        /*  this.sharedService.getComments(this.idVol)
            .then(res => {
              this.commentsResult = res.vols;
              console.log(this.commentsResult);
            })
            .catch(err => console.log(err));
       
            */
    };
    CardComponent.prototype.openRegister = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_1__components_register_register_component__["a" /* RegisterComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    CardComponent.prototype.openVolDetails = function (idVol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_angular2_modal__["n" /* overlayConfigFactory */])({ idVol: idVol, indexVol: this.index }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    CardComponent.prototype.onSelect = function (profile) {
        this.router.navigate(['/profile/' + profile + '/activity']);
    };
    CardComponent.prototype.like = function (id_vol) {
        this.likeState = 1;
        this.likes++;
        this.sharedService.like(id_vol).then(function (res) {
            console.log(res);
        });
    };
    CardComponent.prototype.dislike = function (id_vol) {
        this.likeState = 0;
        this.likes--;
        this.sharedService.dislike(id_vol).then(function (res) {
            console.log(res);
        });
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "userCreator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "dateCreation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "avatar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "username", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "verified", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "likes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "idVol", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "photos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "likeState", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'vol-card',
        template: __webpack_require__(817),
        styles: [__webpack_require__(740)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_modal__["g" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object])
], CardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/card.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(819),
        styles: [__webpack_require__(742)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/footer.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalInviteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalInviteComponent = (function () {
    function ModalInviteComponent() {
    }
    ModalInviteComponent.prototype.ngOnInit = function () {
    };
    return ModalInviteComponent;
}());
ModalInviteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-invite',
        template: __webpack_require__(821),
        styles: [__webpack_require__(744)]
    }),
    __metadata("design:paramtypes", [])
], ModalInviteComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-invite.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/environment.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_global_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_http_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProfileService = (function () {
    function ProfileService(http, HTTP) {
        this.http = http;
        this.HTTP = HTTP;
        this.dataStringSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        // Observable string stream
        this.dataString$ = this.dataStringSource.asObservable();
    }
    // Service message commands
    ProfileService.prototype.saveActiveUser = function (data) {
        this.dataStringSource.next(data);
    };
    ProfileService.prototype.search = function (term) {
        if (term === '') {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of([]);
        }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('address', term);
        var url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y";
        var array = [];
        return this.HTTP
            .get(url, { params: params })
            .map(function (response) { return array = response.json().results; });
    };
    ProfileService.prototype.getCoord = function (address) {
        console.log(address);
        return this.HTTP.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.getCategories = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/list/categories").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.newAction = function (body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/", body).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.getProfile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.checkOnline = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + "/checkOnline").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.getVolHistory = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + '/vols').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.getMyVols = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + "/my-vols").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.follow = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/follow", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.unfollow = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/unfollow", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.listFollows = function (id_user, type) {
        if (type == 1) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/users').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else if (type == 2) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/inst').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    ProfileService.prototype.countFollows = function (id_user, type) {
        if (type == 1) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/users/count').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else if (type == 2) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/inst/count').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    ProfileService.prototype.checkState = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/checkFollow').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.engageConversation = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ProfileService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProfileComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalProfileComponent = (function () {
    function ModalProfileComponent(router, modal, sharedService, dialog /*, private volsService: VolDetailsModalService*/) {
        this.router = router;
        this.modal = modal;
        this.sharedService = sharedService;
        this.dialog = dialog; /*, private volsService: VolDetailsModalService*/
        this.context = dialog.context;
        this.context.isBlocking = false;
    }
    ModalProfileComponent.prototype.ngOnInit = function () {
    };
    ModalProfileComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getUser();
        }, 250);
    };
    ModalProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.sharedService.getProfile(this.context.idProfile)
            .then(function (res) {
            _this.user = res.user;
        })
            .catch(function (err) { return console.log(err); });
    };
    ModalProfileComponent.prototype.onSelect = function (profile) {
        this.dialog.close("done");
    };
    ModalProfileComponent.prototype.close = function () {
        this.dialog.dismiss();
    };
    return ModalProfileComponent;
}());
ModalProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'modal-profile',
        template: __webpack_require__(822),
        styles: [__webpack_require__(745)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */]) === "function" && _d || Object])
], ModalProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-profile.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalViewAllComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalViewAllComponent = (function () {
    function ModalViewAllComponent(dialog, injector, volsService, SharedService) {
        this.dialog = dialog;
        this.injector = injector;
        this.volsService = volsService;
        this.SharedService = SharedService;
        this.confirmedArray = [];
        this.context = dialog.context;
        this.context.isBlocking = false;
    }
    ModalViewAllComponent.prototype.ngOnInit = function () {
        //  this.main_modal = this.injector.get(VolDetailsModalComponent);
        if (this.context.type == 1) {
            this.getCandidates(this.context.idVol);
        }
        else if (this.context.type == 2) {
            this.getConfirmed(this.context.idVol);
        }
        else if (this.context.type == 6) {
            console.log(this.context.type, this.context.nameVol, this.context.id_user, this.context.idVol);
        }
        else if (this.context.type == 7) {
        }
        else if (this.context.type == 8) {
            this.getLikes(this.context.idVol);
        }
    };
    ModalViewAllComponent.prototype.getLikes = function (idVol) {
        var _this = this;
        this.SharedService.getLikes(idVol)
            .then(function (res) {
            _this.likes = res.body;
        })
            .catch(function (err) { return console.log(err); });
    };
    ModalViewAllComponent.prototype.getCandidates = function (idVol) {
        var _this = this;
        this.SharedService.getCandidates(idVol, 50)
            .then(function (res) {
            _this.candidates = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    ModalViewAllComponent.prototype.getConfirmed = function (idVol) {
        var _this = this;
        this.SharedService.getConfirmed(idVol, 50)
            .then(function (res) {
            _this.confirmeds = res.users;
            console.log(_this.confirmeds);
        })
            .catch(function (err) { return console.log(err); });
    };
    ModalViewAllComponent.prototype.apply = function (id_vol) {
        var _this = this;
        console.log(id_vol);
        this.volsService.apply(this.context.id_user, id_vol).then(function (res) {
            _this.dialog.close("applied");
        });
    };
    ModalViewAllComponent.prototype.cancelApply = function (id_vol) {
        var _this = this;
        console.log(id_vol);
        this.volsService.cancelApply(this.context.id_user, id_vol).then(function (res) {
            _this.dialog.close("canceled");
        });
    };
    ModalViewAllComponent.prototype.close = function () {
        this.dialog.dismiss();
    };
    ModalViewAllComponent.prototype.denyCandidate = function (id_user) {
        var _this = this;
        this.SharedService.denyCandidate(this.context.idVol, id_user)
            .then(function (res) {
            _this.dialog.close(1);
        });
    };
    return ModalViewAllComponent;
}());
ModalViewAllComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'view-all-modal',
        template: __webpack_require__(823),
        styles: [__webpack_require__(746)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* volsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["b" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_vols_service__["a" /* volsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], ModalViewAllComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-view-all.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n/* HEADER */\n.brandBackground {\n  padding-top: 6px; }\n\n.header-background {\n  background-color: #0F76F7;\n  height: 50px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 10; }\n\n.titleBrand a {\n  color: #FFFFFF;\n  font-weight: 600;\n  letter-spacing: 8px;\n  font-size: 1.45rem;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  padding-right: 15px;\n  text-decoration: none; }\n\n.menuHeader {\n  text-align: right; }\n\n.menuHeader ul {\n  padding-top: 8px;\n  padding-left: 15px; }\n\n.menuHeader ul li {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 5px;\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.menuHeader ul li:last-child {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 0;\n  padding-left: 8px;\n  padding-right: 0; }\n\n.navbar-user-picture {\n  width: 35px;\n  height: 35px;\n  border-radius: 35px;\n  margin-right: 5px; }\n\n.navbar-namePicture-arrow {\n  display: inline-block;\n  vertical-align: middle; }\n\n.menuHeader ul li:hover {\n  cursor: pointer; }\n\n/deep/ .mat-menu-panel {\n  /* box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12); */\n  width: 220px;\n  margin-top: 40px; }\n\n/deep/ .cdk-overlay-pane {\n  margin-left: -10px; }\n\n/deep/ .mat-menu-ripple {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #919191 !important; }\n\n/deep/ .mat-menu-ripple:hover {\n  border-bottom: 1px solid #919191 !important; }\n\n/deep/ .mat-menu-content {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n  border-bottom: 1px solid #F7F8FA !important; }\n\n/deep/ .mat-menu-item {\n  font-size: 14px !important;\n  font-family: Lato !important; }\n\n/deep/ .mat-menu-item:hover {\n  font-size: 14px !important;\n  font-family: Lato !important;\n  color: #4A4A4A !important;\n  background: #FFFFFF !important; }\n\n.message-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px;\n  border-bottom: 1px solid #E6E5E5; }\n\n.profile-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px 20px;\n  border: 0; }\n\n.profile-item .icon {\n  color: #919191;\n  padding-top: 1px; }\n\n.profile-item .icon i {\n  font-size: 20px; }\n\n.profile-item .desc {\n  color: #4A4A4A;\n  font-size: 13px;\n  margin-left: 15px;\n  padding-top: 2px; }\n\n.profile-item:hover {\n  background: #f5f5f5; }\n\n.actions-profile {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E6E5E5; }\n\nhr {\n  margin: 0; }\n\n/*\r\n/deep/ .popover {\r\n    max-width: 350px !important;\r\n    width: 100% !important;\r\n    /* Max Width of the popover (depending on the container!)\r\n\r\n}\r\n*/\n.image img {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.image {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.message-info {\n  margin-left: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 500px;\n  padding-top: 0px;\n  font-size: 14px;\n  margin-top: -1px; }\n\n.notification-info {\n  width: 250px;\n  margin-left: 12px;\n  height: 50px;\n  font-size: 14px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical; }\n\n.dropdown-menu .new {\n  background: rgba(15, 118, 247, 0.1); }\n\n.message-item:hover {\n  background: #f5f5f5; }\n\n.message-item .time {\n  color: #919191;\n  font-weight: normal;\n  font-size: 11px; }\n\n.nameMsg {\n  font-weight: bold;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.textMsg {\n  color: #919191;\n  font-size: 13px; }\n\n.message-info div:first-child {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message-info .text {\n  font-weight: 12px; }\n\n#dropdown-user {\n  left: -40px;\n  top: 42px;\n  border-radius: 0px;\n  right: 0; }\n\n#dropdown-user .dropdown-item {\n  padding: 10px !important;\n  height: initial; }\n\n#dropdown-messages {\n  left: -385px;\n  top: 40px;\n  border-radius: 0px;\n  width: 450px;\n  padding: 0; }\n\n.dropdown-menu-profile {\n  padding: 0 !important; }\n\n.dropdown-menu:before {\n  position: absolute;\n  top: -7px;\n  right: 36px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ccc;\n  border-left: 8px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n\n.dropdown-menu-profile:before {\n  position: absolute;\n  top: -7px;\n  right: 3px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ccc;\n  border-left: 8px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n\n.dropdown-toggle:after {\n  display: none; }\n\n.dropdown-menu:after {\n  position: absolute;\n  top: -7px;\n  right: 36px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  content: ''; }\n\n.dropdown-menu-profile:after {\n  position: absolute;\n  top: -7px;\n  right: 3px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  content: ''; }\n\n.badge-notify {\n  background: red;\n  position: absolute;\n  top: 0px;\n  left: 25px; }\n\n.arrow_dropdown {\n  position: relative;\n  top: 5px; }\n\n.dropdown-header {\n  font-size: 10px;\n  padding: 10px 20px 10px;\n  border-bottom: 1px solid #E6E5E5;\n  color: #919191; }\n\n.dropdown-footer {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 0px 10px;\n  color: #0F76F7;\n  text-align: center; }\n\n.dropdown-footer:focus {\n  outline: none; }\n\n.nameDropdown {\n  margin-top: -5px; }\n\n.btn-notification {\n  padding: 6px; }\n\n.btnConfirm:hover {\n  background: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickableName:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191;\n  margin-top: -4px; }\n\n.swiper-button-next {\n  background: none;\n  height: 100%;\n  top: 0;\n  margin-top: initial;\n  margin-right: -10px; }\n\n.swiper-button-prev {\n  top: 0;\n  background: none;\n  height: 100%;\n  margin-left: -10px;\n  margin-top: initial; }\n\n.swiper-button-prev:hover {\n  background: #fff;\n  opacity: 0.3; }\n\n.swiper-button-next:hover {\n  background: #fff;\n  opacity: 0.3; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px;\n  cursor: pointer; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A;\n  width: 100%; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%;\n  max-width: 95%;\n  height: 45px; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px;\n  cursor: pointer; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 250px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  text-decoration: underline; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  padding-right: 10px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n\n.cardLikesContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 600px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnBlack {\n  color: #4A4A4A !important; }\n\n.card-Comments {\n  border-top: 1px solid #E6E5E5; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5;\n  padding: 15px 10px 0px 10px; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5;\n  padding: 10px 10px 20px 10px; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  background: #FFFFFF; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnLike {\n  padding-top: 6px !important; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5;\n  border: 0;\n  background: #fff; }\n\n.card-user-comments-image-comments {\n  margin-top: 15px;\n  margin-left: 5px !important;\n  max-width: 50px; }\n\n.text-confirm {\n  color: #4A4A4A; }\n\n.action-confirm {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.modalHeader {\n  background: #0F76F7;\n  padding: 15px 20px; }\n\n.day-w-border {\n  width: 60px;\n  border: 2px solid #FFFFFF;\n  border-radius: 7px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 5px; }\n\n.modalTitle {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.containerDatePlace {\n  margin-top: 10px; }\n\n.modalTitleDesc {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-weight: 600; }\n\n.modalSubtitle {\n  font-size: 13px;\n  color: #FFFFFF; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px; }\n\n.card-user-nd {\n  padding-left: 10px; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.card-user-name:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.modalContainer {\n  background: #FFFFFF;\n  padding: 15px;\n  padding-bottom: 0px !important; }\n\n.card-user-desc {\n  color: #4A4A4A; }\n\n.card-user-event {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.btnCandidate {\n  background: #FFCB2B;\n  font-size: 12px;\n  border: 0;\n  border-radius: 4px;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 12px 16px; }\n\n.modalTextArea {\n  margin-top: 15px;\n  text-align: justify; }\n\n.sectionDatePlace {\n  width: 100%;\n  border-top: 1px solid #E6E5E5;\n  margin-top: 20px; }\n\n.iconDate {\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 15px; }\n\n.daysEvent {\n  font-weight: 600;\n  margin-top: 5px;\n  color: #4A4A4A; }\n\n.descDatePlace {\n  padding-left: 15px; }\n\n.daysEventFull {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-side {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.sebm-google-map-container {\n  height: 100px; }\n\n.mapContent {\n  margin-top: 15px; }\n\n.friendsContainer {\n  margin-top: 10px; }\n\n.likeImgs {\n  margin-top: 2.5px;\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.numberYellow {\n  font-size: 18px;\n  color: #FFCB2B;\n  font-weight: 600; }\n\n.numberBlue {\n  font-size: 18px;\n  color: #0F76F7;\n  font-weight: 600; }\n\n.normalText {\n  font-size: 13px;\n  color: #4A4A4A; }\n\n.comments-back {\n  background: #E6E5E5; }\n\n.card-volum-footer {\n  padding-bottom: 0; }\n\n.card-volum-footer {\n  border-top: 1px solid #E6E5E5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  margin-top: 20px; }\n\n.card-Comments {\n  border: 0px; }\n\n.scrollArea {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 297px; }\n\n.scrollArea::-webkit-scrollbar {\n  width: 5px;\n  background: #E6E5E5;\n  border: 0; }\n\n.scrollArea::-webkit-scrollbar-thumb {\n  background-color: #919191;\n  border: 0; }\n\n.modalTextBold {\n  font-weight: 600;\n  border: 0;\n  margin-top: 5px; }\n\n.typeVol {\n  background: orange;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: white; }\n\n.insuBool {\n  background: #3C765A;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: white;\n  margin-left: 6px; }\n\n.details-vol {\n  margin-top: 10px;\n  text-indent: 0px !important; }\n\n.Rgt {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.see-all-participants {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  font-size: 12px;\n  color: #fff;\n  line-height: 30px;\n  text-align: center;\n  background: #0F76F7;\n  margin-left: -10px;\n  cursor: pointer; }\n\n.see-all-participants:hover {\n  background: #6aa4ff; }\n\n.btnCancel:hover {\n  background: #FFFFFF;\n  color: #919191; }\n\n.loadingHeight {\n  height: 550px; }\n\n.btnCancel {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n@media screen and (max-width: 992px) {\n  #main-navbar {\n    clear: both; } }\n\n@media (min-width: 320px) {\n  .btnSearch {\n    display: none; }\n  .city3 {\n    display: none; }\n  .city4 {\n    display: none; }\n  .city5 {\n    display: none; }\n  .city6 {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .btnSearch {\n    display: none; }\n  .city3 {\n    display: block; }\n  .city4 {\n    display: none; }\n  .city5 {\n    display: none; }\n  .city6 {\n    display: none; } }\n\n@media (min-width: 600px) {\n  .btnSearch {\n    display: none; }\n  .city4 {\n    display: block; }\n  .city5 {\n    display: none; }\n  .city6 {\n    display: none; } }\n\n@media (min-width: 801px) {\n  .btnSearch {\n    display: block; }\n  .city4 {\n    display: block; }\n  .city5 {\n    display: block; }\n  .city6 {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  .btnSearch {\n    display: block; }\n  .city4 {\n    display: block; }\n  .city5 {\n    display: block; }\n  .city6 {\n    display: block; } }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.headerFeed {\n  margin-top: -80px; }\n\n.carousel-indicators li {\n  display: none !important; }\n\n.lista {\n  float: right; }\n\n.header {\n  background: #0F76F7;\n  min-height: 300px;\n  padding-top: 100px; }\n\n.titleFeed {\n  font-weight: 600;\n  font-size: 18px;\n  margin-top: 50px; }\n\n.search-areas {\n  width: 100%; }\n\n.search-voluntario {\n  width: 100%;\n  margin-top: 15px; }\n\n.btn-search {\n  background-color: #0F76F7;\n  color: #FFFFFF;\n  font-size: 18px;\n  width: 130px;\n  height: 45px; }\n\n.v-header-title {\n  font-weight: 600;\n  color: #FFFFFF;\n  font-size: 58px; }\n\n.v-header-subtitle {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 100;\n  margin-top: -5px; }\n\n.header-home-search {\n  margin-top: 30px; }\n\n.header-title-search {\n  color: #A28F9F;\n  font-size: 15px;\n  margin-top: 3px; }\n\n.cityCard {\n  background-color: #0F76F7;\n  margin-top: 20px;\n  padding: 10px; }\n\n.askedQuestions {\n  border-top: 3px;\n  border-style: solid;\n  border-bottom: 0;\n  border-left: 0;\n  border-right: 0;\n  border-color: #0F76F7;\n  margin-top: 10px; }\n\n.titleAskedQuestions {\n  font-weight: 600;\n  font-size: 18px;\n  margin-top: 35px; }\n\n.textAskedQuestions {\n  margin-top: 5px; }\n\n.cityAveiro {\n  background-size: cover;\n  height: 200px; }\n\n.cityPorto {\n  background-size: cover;\n  height: 200px; }\n\n.city {\n  text-align: center; }\n\n.cityLisboa {\n  background-size: cover;\n  height: 200px; }\n\n.cityCoimbra {\n  background-size: cover;\n  height: 200px; }\n\n.cityBraga {\n  background-size: cover;\n  height: 200px; }\n\n.cityGuimaraes {\n  background-size: cover;\n  height: 200px; }\n\n.cityText {\n  color: #fff;\n  font-weight: 600;\n  font-size: 1.4em;\n  padding-top: 70px; }\n\n.slider-prev1 {\n  top: 350px;\n  left: -30px; }\n\n.slider-next1 {\n  top: 350px;\n  right: -30px; }\n\n.slider-prev2 {\n  top: 930px;\n  left: -30px; }\n\n.slider-buttons {\n  position: absolute;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer; }\n\n.slider-next2 {\n  top: 930px;\n  right: -30px; }\n\n.disabled {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.containerLogin {\n  padding: 32px; }\n\nbutton {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  font-size: 16px;\n  font-family: Lato; }\n\n.facebookLogin {\n  background: #4568B2;\n  color: #fff;\n  border: 1px solid #4568B2;\n  margin-bottom: 6px; }\n\n.facebookLogin:hover {\n  background: #7996e4;\n  border: 1px solid #7996e4; }\n\n.googleLogin {\n  background: #FFFFFF;\n  color: #919191;\n  border: 1px solid #E6E5E5; }\n\n.googleLogin:hover {\n  color: #919191;\n  border: 1px solid #cccccc; }\n\n.normalLogin {\n  background: #FF8A65;\n  color: #FFFFFF;\n  border: 1px solid #FF8A65;\n  margin-top: 15px;\n  cursor: pointer; }\n\n.normalLogin:hover {\n  background: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.orLogin {\n  margin-top: 10px;\n  margin-bottom: 23px; }\n\n.divider-hr {\n  margin-top: -10px; }\n\n.divider-or {\n  padding: 6px;\n  background: #FFFFFF;\n  font-family: Lato;\n  color: #919191; }\n\ninput {\n  width: 100%;\n  border-radius: 3px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  color: #919191;\n  font-size: 16px;\n  font-family: Lato;\n  border: 1px solid #E6E5E5; }\n\n.inputEmailLogin {\n  margin-bottom: 6px; }\n\n.inputPasswordLogin {\n  margin-bottom: 6px; }\n\n.forgotPass {\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px;\n  font-family: Lato; }\n\n.forgotPass:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.footerLogin {\n  margin-top: 20px; }\n\n.registerBtn {\n  width: 110px;\n  border-radius: 0px;\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  padding-left: 21px !important;\n  padding-right: 21px !important;\n  background: #FFFFFF;\n  color: #FF8A65;\n  font-size: 14px;\n  font-family: Lato;\n  border: 1px solid #FF8A65; }\n\n.registerBtn:hover {\n  color: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.btnRegister {\n  margin-top: -30px; }\n\n.registerAdvice {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 16px;\n  color: #4A4A4A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.sebm-google-map-container {\n  height: calc( 100vh - 50px);\n  z-index: 1; }\n\n.cardsSection {\n  overflow-y: scroll;\n  height: calc( 100vh - 170px); }\n\n.searchSection {\n  height: 100px;\n  background: #FFFFFF;\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.areaSearch {\n  padding-left: 30px;\n  padding-right: 35px; }\n\n.mapFull {\n  overflow: hidden; }\n\n.searchTitle {\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 10px 20px; }\n\n.inputSearch {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #E6E5E5;\n  border-radius: 3px;\n  padding: 15px;\n  font-size: 14px;\n  color: #919191; }\n\n.areaInput {\n  padding: 0px 20px; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\n.map {\n  margin-right: -20px; }\n\n.cardsSection::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.cardsSection::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.cardsSection::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.titleCard {\n  font-weight: 600; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.image img {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.image {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.not-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.notDesc {\n  margin-left: 15px;\n  margin-top: 4px;\n  color: #4A4A4A;\n  font-size: 15px; }\n\n.not-name {\n  font-weight: 600; }\n\n.notTime {\n  font-size: 14px;\n  color: #919191; }\n\n.notEvent {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.not-item {\n  border-bottom: 1px solid #E6E5E5;\n  cursor: pointer; }\n\n.titleCard {\n  margin-top: 4px; }\n\n.iconCard {\n  margin-top: 5px;\n  color: #919191; }\n\n.not-icon {\n  margin-top: -38px;\n  float: left; }\n\n.not-icon i {\n  color: #919191; }\n\n.not-item:hover {\n  background: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.containerLogin {\n  padding: 32px; }\n\ninput {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  background: #FFFFFF;\n  color: #919191;\n  font-size: 16px;\n  font-family: Lato;\n  border: 1px solid #E6E5E5;\n  margin-bottom: 6px; }\n\nbutton {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  font-size: 16px;\n  font-family: Lato;\n  margin-bottom: 6px;\n  cursor: pointer; }\n\n.facebookLogin {\n  background: #4568B2;\n  color: #fff;\n  border: 1px solid #4568B2; }\n\n.facebookLogin:hover {\n  background: #7996e4;\n  border: 1px solid #7996e4; }\n\n.googleLogin {\n  background: #FFFFFF;\n  color: #919191;\n  border: 1px solid #E6E5E5; }\n\n.googleLogin:hover {\n  color: #919191;\n  border: 1px solid #cccccc; }\n\n.normalLogin {\n  background: #FF8A65;\n  color: #FFFFFF;\n  border: 1px solid #FF8A65;\n  margin-top: 15px; }\n\n.normalLogin:hover {\n  background: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.orLogin {\n  margin-top: 10px;\n  margin-bottom: 23px; }\n\n.divider-hr {\n  margin-top: -10px; }\n\n.divider-or {\n  padding: 6px;\n  background: #FFFFFF;\n  font-family: Lato;\n  color: #919191; }\n\n.forgotPass {\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px;\n  font-family: Lato; }\n\n.forgotPass:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.footerLogin {\n  margin-top: 20px; }\n\n.registerBtn {\n  border-radius: 0px;\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  padding-left: 21px !important;\n  padding-right: 21px !important;\n  width: 110px;\n  background: #FFFFFF;\n  color: #FF8A65;\n  font-size: 14px;\n  font-family: Lato;\n  border: 1px solid #FF8A65; }\n\n.registerBtn:hover {\n  color: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.btnRegister {\n  margin-top: -30px; }\n\n.registerAdvice {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 16px;\n  color: #4A4A4A; }\n\n.registerAdvice1 {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 14px;\n  color: #4A4A4A; }\n\n.adviceSocial {\n  color: #0F76F7;\n  cursor: pointer; }\n\n.adviceSocial:hover {\n  text-decoration: underline; }\n\n.serviceAdvice {\n  color: #919191;\n  font-size: 12px;\n  margin-top: 15px;\n  font-family: Lato;\n  margin-bottom: 0; }\n\n.registSuccess {\n  color: #4A4A4A;\n  font-size: 14px;\n  font-family: Lato; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.mini-card-social {\n  background: #FFFFFF;\n  margin-top: 15px;\n  border-radius: 3px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px 15px; }\n\n.for-img {\n  max-width: 48px; }\n\n.for-imgInst {\n  max-width: 48px;\n  margin-top: 3px; }\n\n.name-person {\n  font-weight: 600;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  word-break: break-word;\n  padding: 0px 10px;\n  min-width: 170px;\n  max-width: 170px; }\n\n.desc-person {\n  color: #919191;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  word-break: break-word;\n  padding: 0px 10px;\n  min-width: 170px;\n  max-width: 170px; }\n\n.btnConfirm {\n  padding: 5px; }\n\n.btnConfirmPadding {\n  padding: 10px !important;\n  margin-left: 10px; }\n\n.for-btn {\n  margin-top: 5px; }\n\n.for-input {\n  background: #FFFFFF;\n  padding: 20px;\n  margin-top: 15px;\n  border-radius: 3px;\n  border: 1px solid #F7F8FA; }\n\n.inputSearch {\n  width: 89%;\n  height: 40px;\n  border: 1px solid #E6E5E5;\n  border-radius: 3px;\n  padding: 15px;\n  font-size: 14px;\n  color: #919191; }\n\n.searchTitle {\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 600; }\n\n.title-filter {\n  font-weight: 600;\n  margin-top: 30px; }\n\n.moreResults {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: 13px;\n  cursor: pointer;\n  color: #0F76F7;\n  font-weight: 600; }\n\n.moreResults:hover {\n  color: #000; }\n\n.headerInput {\n  font-size: 16px;\n  color: #4A4A4A;\n  font-weight: 600;\n  margin-bottom: 10px; }\n\n.rowInst {\n  min-width: 160px; }\n\n.btnInst {\n  margin-top: 10px;\n  margin-right: 15px; }\n\n.text-vol {\n  margin-left: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.titleCard {\n  font-weight: 600; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.image img {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.image {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.not-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.notDesc {\n  margin-left: 15px;\n  margin-top: 4px;\n  color: #4A4A4A;\n  font-size: 15px; }\n\n.not-name {\n  font-weight: 600; }\n\n.notTime {\n  font-size: 14px;\n  color: #919191; }\n\n.notEvent {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.not-item {\n  border-bottom: 1px solid #E6E5E5;\n  cursor: pointer; }\n\n.titleCard {\n  margin-top: 4px; }\n\n.iconCard {\n  margin-top: 5px;\n  color: #919191; }\n\n.not-icon {\n  margin-top: -42px;\n  float: left; }\n\n.not-icon i {\n  color: #919191; }\n\n.not-item:hover {\n  background: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vols_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_feed_feed_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_profile_modal_profile_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_view_all_modal_view_all_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Auth_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__ = __webpack_require__(16);
/* unused harmony export ModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolDetailsModalComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(__WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var VolDetailsModalComponent = (function () {
    function VolDetailsModalComponent(router, overlay, injector, modal, dialog, SharedService, volsService, authService) {
        this.router = router;
        this.injector = injector;
        this.modal = modal;
        this.dialog = dialog;
        this.SharedService = SharedService;
        this.volsService = volsService;
        this.authService = authService;
        this.ready = false;
        this.context = dialog.context;
        this.context.isBlocking = false;
        if (this.authService.isAuthenticated()) {
            this.context.size = "lg";
        }
    }
    VolDetailsModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getCandidates();
            _this.getConfirmed();
            console.log(_this.context.idVol);
            if (_this.authService.isAuthenticated()) {
                _this.authService.userPromise.then(function (res) {
                    _this.userLogin = res.user;
                    console.log(_this.userLogin);
                });
                _this.login = 1;
                _this.checkLike();
                _this.authService.userPromise.then(function (res) {
                    _this.id_user = res.user.id_user;
                    _this.photo = res.user.photo;
                    _this.name = res.user.username;
                });
            }
            else {
                _this.login = 0;
            }
            _this.countConfirmeds();
            _this.countCandidates();
            _this.countLikes();
            _this.countComments();
            _this.volsService.getVol(_this.context.idVol)
                .then(function (res) {
                _this.volDetails = res.vol;
                console.log("vol-details ----- > ", _this.volDetails);
                _this.checkState(_this.context.idVol);
                _this.getAddress(_this.volDetails.lat, _this.volDetails.lng);
                _this.lat = parseFloat(_this.volDetails.lat);
                _this.lng = parseFloat(_this.volDetails.lng);
                console.log(_this.lat, _this.lng);
                _this.ready = true;
            })
                .catch(function (err) { return console.log(err); });
        }, 250);
    };
    VolDetailsModalComponent.prototype.ngOnInit = function () {
        this.feed = this.injector.get(__WEBPACK_IMPORTED_MODULE_3__components_feed_feed_component__["a" /* FeedComponent */]);
    };
    VolDetailsModalComponent.prototype.onSelect = function (id_profile) {
        this.dialog.dismiss();
        this.router.navigate(['/profile/' + id_profile + '/activity']);
    };
    VolDetailsModalComponent.prototype.openProfileModal = function (idProfile) {
        var _this = this;
        this.modal.open(__WEBPACK_IMPORTED_MODULE_5__modal_profile_modal_profile_component__["a" /* ModalProfileComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_angular2_modal__["n" /* overlayConfigFactory */])({ idProfile: idProfile }, __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */])).then(function (d) { return d.result; })
            .then(function (r) {
            _this.dialog.dismiss();
            setTimeout(function () {
                _this.router.navigate(['/profile/' + idProfile + '/activity']);
            }, 500);
        }, function (error) { console.log(error); });
        ;
    };
    VolDetailsModalComponent.prototype.countComments = function () {
        var _this = this;
        this.volsService.countComments(this.context.idVol)
            .then(function (res) {
            _this.numberComments = res.count;
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.getCandidates = function () {
        var _this = this;
        this.volsService.getCandidates(this.context.idVol, 10)
            .then(function (res) {
            _this.candidates = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.getConfirmed = function () {
        var _this = this;
        this.volsService.getConfirmed(this.context.idVol, 10)
            .then(function (res) {
            _this.confirmeds = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.openLikesModal = function (type, id_vol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_6__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, idVol: id_vol }, __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VolDetailsModalComponent.prototype.openCandidates = function (type, id_vol) {
        if ((type == 1 && this.numberCandidates > 0) || (type == 2 && this.numberConfirmeds > 0)) {
            return this.modal.open(__WEBPACK_IMPORTED_MODULE_6__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, idVol: id_vol }, __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
        }
    };
    VolDetailsModalComponent.prototype.openRemoveConfirm = function (type, name, id_user, idVol) {
        var _this = this;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_6__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, idVol: idVol, nameVol: name, id_user: id_user }, __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]))
            .then(function (d) { return d.result; })
            .then(function (r) {
            console.log(r.result);
            if (_this.state == 1) {
                _this.state = 0; // Candidatar
            }
            else if (_this.state == 0) {
                _this.state = 3; //Sucesso
            }
        }, function (error) { console.log(error); });
    };
    VolDetailsModalComponent.prototype.sendComment = function (comment) {
        var _this = this;
        if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {
            this.volsService.sendComment(comment, this.context.idVol).then(function (res) {
                _this.comentario = '';
                _this.numberComments++;
                _this.comments.push({
                    id_user: _this.id_user,
                    message: comment,
                    photo_url: _this.photo,
                    name: _this.name,
                });
            });
        }
    };
    VolDetailsModalComponent.prototype.getComments = function () {
        var _this = this;
        if (!this.showComments) {
            this.showComments = 1;
            this.volsService.getComments(this.context.idVol)
                .then(function (res) {
                _this.comments = res.comments;
                console.log(res);
            })
                .catch(function (err) { return console.log(err); });
        }
        else {
            this.showComments = 0;
        }
    };
    VolDetailsModalComponent.prototype.countLikes = function () {
        var _this = this;
        this.volsService.countLikes(this.context.idVol)
            .then(function (res) {
            _this.numberLikes = res.likes;
            console.log(_this.numberLikes);
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.countConfirmeds = function () {
        var _this = this;
        this.volsService.countConfirmeds(this.context.idVol)
            .then(function (res) {
            _this.numberConfirmeds = res.count;
            console.log(_this.numberLikes);
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.countCandidates = function () {
        var _this = this;
        this.volsService.countCandidates(this.context.idVol)
            .then(function (res) {
            _this.numberCandidates = res.count;
            console.log(_this.numberLikes);
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.checkLike = function () {
        var _this = this;
        this.volsService.checkLike(this.context.idVol)
            .then(function (res) {
            _this.likeState = parseInt(res.state);
        })
            .catch(function (err) { return console.log(err); });
    };
    VolDetailsModalComponent.prototype.like = function (id_vol) {
        var _this = this;
        this.likeState = 1;
        this.numberLikes++;
        this.volsService.like(id_vol).then(function (res) {
            _this.feed.vols[_this.context.indexVol].vol.likes = _this.numberLikes;
            _this.feed.vols[_this.context.indexVol].vol.likeState = 1;
        });
    };
    VolDetailsModalComponent.prototype.dislike = function (id_vol) {
        var _this = this;
        this.likeState = 0;
        this.numberLikes--;
        this.volsService.dislike(id_vol).then(function (res) {
            _this.feed.vols[_this.context.indexVol].vol.likes = _this.numberLikes;
            _this.feed.vols[_this.context.indexVol].vol.likeState = 0;
            console.log(res);
        });
    };
    VolDetailsModalComponent.prototype.getAddress = function (lat, long) {
        var _this = this;
        if (lat && long) {
            this.SharedService.getAddress(lat, long)
                .then(function (res) {
                _this.addressData = res.results;
                _this.address = _this.addressData[0].formatted_address;
                //this.addressName = this.addressData[0].address_components[0].short_name;
            });
        }
    };
    VolDetailsModalComponent.prototype.checkState = function (id_vol) {
        var _this = this;
        this.volsService.checkState(this.id_user, id_vol).then(function (res) {
            _this.state = res.state;
            console.log(res);
        });
    };
    VolDetailsModalComponent.prototype.goDetails = function (id_vol) {
        var _this = this;
        this.dialog.dismiss();
        setTimeout(function () {
            _this.router.navigate(['/profile/' + _this.id_user + '/details/' + id_vol]);
        }, 500);
    };
    return VolDetailsModalComponent;
}());
VolDetailsModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'vol-details-modal',
        template: __webpack_require__(824),
        styles: [__webpack_require__(747)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__components_feed_feed_component__["a" /* FeedComponent */], __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angular2_modal__["g" /* Overlay */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_core__["Injector"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angular2_modal__["b" /* DialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vols_service__["a" /* volsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _h || Object])
], VolDetailsModalComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/vol-details-modal.component.js.map

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickableName:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191;\n  margin-top: -4px; }\n\n.swiper-button-next {\n  background: none;\n  height: 100%;\n  top: 0;\n  margin-top: initial;\n  margin-right: -10px; }\n\n.swiper-button-prev {\n  top: 0;\n  background: none;\n  height: 100%;\n  margin-left: -10px;\n  margin-top: initial; }\n\n.swiper-button-prev:hover {\n  background: #fff;\n  opacity: 0.3; }\n\n.swiper-button-next:hover {\n  background: #fff;\n  opacity: 0.3; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px;\n  cursor: pointer; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A;\n  width: 100%; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%;\n  max-width: 95%;\n  height: 45px; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px;\n  cursor: pointer; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 250px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  text-decoration: underline; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  padding-right: 10px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n\n.cardLikesContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 600px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnBlack {\n  color: #4A4A4A !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px;\n  word-break: break-word; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 30px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px;\n  cursor: pointer;\n  color: #FFFFFF !important; }\n\n.btnDescart:hover {\n  color: #FFFFFF;\n  background-color: #919191;\n  border: 1px solid #919191; }\n\n.btnSave:hover {\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  border: 1px solid #0F76F7; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 22px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n\n.inputProfile3 {\n  margin-top: 27px; }\n\n.text-error {\n  color: #F51111;\n  font-size: 11px;\n  padding-top: 5px; }\n\nform > .control {\n  position: relative; }\n\nform > .control > label {\n  position: absolute; }\n\nlabel {\n  position: absolute;\n  top: 10px;\n  font-size: 11px;\n  color: #919191; }\n\ninput:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.error-label {\n  font-weight: 600; }\n\n.label-for-select {\n  position: absolute;\n  padding-left: 15px;\n  z-index: 10 !important; }\n\nselect:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\ntextarea:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.select-input {\n  padding-top: 25px;\n  height: 60px !important;\n  font-size: 14px !important; }\n\n.date_picker {\n  padding-left: 15px !important; }\n\n/deep/ .dropdown-item {\n  margin-left: 0px !important;\n  font-size: 14px;\n  color: #919191; }\n\n/deep/ .dropdown-item.active {\n  background: #0F76F7;\n  color: #FFFFFF; }\n\n/deep/ .control .dropdown-menu {\n  width: 1070px;\n  left: 15px !important;\n  border-radius: 0 !important;\n  top: 54px !important;\n  padding: 0px; }\n\n.searched {\n  padding-left: 5px; }\n\n.content-search {\n  padding: 10px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.imgPreview {\n  height: 75px;\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-red {\n  color: #F51111 !important; }\n\n.inputProfile2 {\n  margin-top: 30px; }\n\n.inputProfile3 {\n  margin-top: 27px; }\n\n.addEducation {\n  padding-left: 20px; }\n\n.imageVol {\n  height: 75px;\n  border: 1px dashed #E6E5E5;\n  border-radius: 6px;\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n.btnSave {\n  cursor: pointer;\n  color: #FFFFFF !important; }\n\n.btnSave:hover {\n  color: #0F76F7 !important; }\n\n.text-error {\n  color: #F51111;\n  font-size: 11px;\n  padding-top: 5px; }\n\nform > .control {\n  position: relative; }\n\nform > .control > label {\n  position: absolute; }\n\nlabel {\n  position: absolute;\n  top: 10px;\n  font-size: 11px;\n  color: #919191; }\n\ninput:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.error-label {\n  font-weight: 600; }\n\n.label-for-select {\n  position: absolute;\n  padding-left: 15px;\n  z-index: 10 !important; }\n\nselect:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\ntextarea:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.select-input {\n  padding-top: 25px;\n  height: 60px !important;\n  font-size: 14px !important; }\n\n.date_picker {\n  padding-left: 15px !important; }\n\n/deep/ .dropdown-item {\n  margin-left: 0px !important;\n  font-size: 14px;\n  color: #919191; }\n\n/deep/ .dropdown-item.active {\n  background: #0F76F7;\n  color: #FFFFFF; }\n\n/deep/ .control .dropdown-menu {\n  width: 447px !important;\n  left: 15px !important;\n  border-radius: 0 !important;\n  top: 54px !important;\n  padding: 0px; }\n\n.searched {\n  padding-left: 5px; }\n\n.content-search {\n  padding: 10px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.imgPreview {\n  height: 75px;\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-red {\n  color: #F51111 !important; }\n\n.sebm-google-map-container {\n  height: 150px; }\n\n.primaryCard {\n  margin-top: 15px; }\n\n.card-block {\n  padding: 20px 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.footerText {\n  margin-top: 150px;\n  color: #919191;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: solid 1px #E6E5E5;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.modalHeader {\n  background: #0F76F7;\n  padding: 15px 20px; }\n\n.day-w-border {\n  width: 60px;\n  border: 2px solid #FFFFFF;\n  border-radius: 7px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 5px; }\n\n.modalTitle {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.containerDatePlace {\n  margin-top: 10px; }\n\n.modalTitleDesc {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-weight: 600; }\n\n.modalSubtitle {\n  font-size: 13px;\n  color: #FFFFFF; }\n\n.modal-end-content {\n  padding: 15px 20px;\n  background: #FFFFFF; }\n\n.modal-textarea {\n  width: 100%;\n  border: 1px solid #E6E5E5; }\n\n.modal-content-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #4A4A4A; }\n\n.modal-content-desc {\n  font-size: 14px; }\n\n.modal-textarea {\n  margin-top: 10px;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.modal-textarea::-webkit-input-placeholder {\n  font-size: 14px;\n  color: #919191;\n  font-family: Lato; }\n\n.evaluation {\n  margin-top: 10px; }\n\n.evaluation-option {\n  font-size: 14px;\n  color: #4A4A4A;\n  font-weight: normal;\n  margin-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.evaluation-option input {\n  margin-top: 4px;\n  margin-right: 5px; }\n\n.user-rate {\n  padding-left: 0;\n  padding-top: 5px;\n  margin-left: -7px; }\n\n.user-rate-all {\n  padding-left: 15px !important;\n  margin-top: -3px !important; }\n\n.user-rate-all md-icon {\n  cursor: pointer;\n  color: #E6E5E5; }\n\n.user-rate md-icon {\n  cursor: pointer; }\n\n.yellow {\n  color: #FFCB2B !important; }\n\n.grey {\n  color: #E6E5E5 !important; }\n\n.yellow:hover {\n  color: #919191 !important; }\n\n.grey:hover {\n  color: #919191 !important; }\n\n.individual {\n  height: 150px;\n  margin-top: 25px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n.individual::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.individual::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.individual::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 2px 0px; }\n\n.card-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px;\n  margin: 0; }\n\n.candidateName {\n  font-weight: normal;\n  font-size: 14px;\n  color: #4A4A4A;\n  padding-left: 5px; }\n\n.modal-end-footer {\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.cardFriends {\n  background: #fff;\n  border: 0;\n  border-radius: 0;\n  width: 100%; }\n\n.profile-user-picture {\n  text-align: center;\n  margin-top: -50px !important; }\n\n.profile-user-picture img {\n  width: 100px;\n  height: 100px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  text-align: center !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.friendsName {\n  text-align: center;\n  font-weight: 600;\n  margin-top: 5px; }\n\n.friendsPlace {\n  text-align: center;\n  color: #919191;\n  font-size: 12px; }\n\n.friendsEvents {\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-top: 20px; }\n\n.friendsCardNumber {\n  font-weight: 600;\n  font-size: 14px; }\n\n.friendsCardNumberDesc {\n  color: #919191;\n  font-size: 12px;\n  text-align: center; }\n\n.friendsBtns {\n  margin-top: 28px; }\n\n.friendsBackground {\n  height: 100px;\n  background-size: cover; }\n\n.coverImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.desc-modal-profile {\n  margin-top: 5px;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.title-modal {\n  font-weight: 600;\n  margin-top: 15px;\n  color: #919191;\n  font-size: 15px; }\n\n.row-details {\n  margin-top: 10px; }\n\n.details {\n  margin-top: 20px; }\n\n.btn-modal {\n  margin-top: 35px;\n  margin-bottom: 15px; }\n\n.user-rate {\n  margin-left: 10px;\n  margin-top: -4px;\n  padding-bottom: 15px; }\n\n.user-rate md-icon {\n  color: #FFCB2B;\n  font-size: 16px;\n  padding-left: -10px;\n  margin-left: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.modal-card {\n  padding: 10px 20px 10px 20px;\n  font-weight: 600;\n  font-size: 16px;\n  color: #4A4A4A;\n  border-bottom: 1px solid #E6E5E5; }\n\n.modal-list-content {\n  padding: 10px 20px 10px 20px;\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n.modal-list-content::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.modal-list-content::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.modal-list-content::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n\n.card-user-image img {\n  width: 35px;\n  height: 35px;\n  border-radius: 45px;\n  margin: 0; }\n\n.card-user-image {\n  max-width: 250px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.full-width {\n  max-width: 100% !important; }\n\n.user-desc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px 0px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.modal-remove-content {\n  padding: 10px 20px; }\n\n.modal-btns {\n  padding: 10px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickableName:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191;\n  margin-top: -4px; }\n\n.swiper-button-next {\n  background: none;\n  height: 100%;\n  top: 0;\n  margin-top: initial;\n  margin-right: -10px; }\n\n.swiper-button-prev {\n  top: 0;\n  background: none;\n  height: 100%;\n  margin-left: -10px;\n  margin-top: initial; }\n\n.swiper-button-prev:hover {\n  background: #fff;\n  opacity: 0.3; }\n\n.swiper-button-next:hover {\n  background: #fff;\n  opacity: 0.3; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px;\n  cursor: pointer; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A;\n  width: 100%; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%;\n  max-width: 95%;\n  height: 45px; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px;\n  cursor: pointer; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 250px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  text-decoration: underline; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  padding-right: 10px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n\n.cardLikesContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 600px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnBlack {\n  color: #4A4A4A !important; }\n\n.card-Comments {\n  border-top: 1px solid #E6E5E5; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5;\n  padding: 15px 10px 0px 10px; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5;\n  padding: 10px 10px 20px 10px; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  background: #FFFFFF; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnLike {\n  padding-top: 6px !important; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5;\n  border: 0;\n  background: #fff; }\n\n.card-user-comments-image-comments {\n  margin-top: 15px;\n  margin-left: 5px !important;\n  max-width: 50px; }\n\n.text-confirm {\n  color: #4A4A4A; }\n\n.action-confirm {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.modalHeader {\n  background: #0F76F7;\n  padding: 15px 20px; }\n\n.day-w-border {\n  width: 60px;\n  border: 2px solid #FFFFFF;\n  border-radius: 7px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 5px; }\n\n.modalTitle {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.containerDatePlace {\n  margin-top: 10px; }\n\n.modalTitleDesc {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-weight: 600; }\n\n.modalSubtitle {\n  font-size: 13px;\n  color: #FFFFFF; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px; }\n\n.card-user-nd {\n  padding-left: 10px; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.card-user-name:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.modalContainer {\n  background: #FFFFFF;\n  padding: 15px;\n  padding-bottom: 0px !important; }\n\n.card-user-desc {\n  color: #4A4A4A; }\n\n.card-user-event {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.btnCandidate {\n  background: #FFCB2B;\n  font-size: 12px;\n  border: 0;\n  border-radius: 4px;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 12px 16px; }\n\n.modalTextArea {\n  margin-top: 15px;\n  text-align: justify; }\n\n.sectionDatePlace {\n  width: 100%;\n  border-top: 1px solid #E6E5E5;\n  margin-top: 20px; }\n\n.iconDate {\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 15px; }\n\n.daysEvent {\n  font-weight: 600;\n  margin-top: 5px;\n  color: #4A4A4A; }\n\n.descDatePlace {\n  padding-left: 15px; }\n\n.daysEventFull {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-side {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.sebm-google-map-container {\n  height: 100px; }\n\n.mapContent {\n  margin-top: 15px; }\n\n.friendsContainer {\n  margin-top: 10px; }\n\n.likeImgs {\n  margin-top: 2.5px;\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.numberYellow {\n  font-size: 18px;\n  color: #FFCB2B;\n  font-weight: 600; }\n\n.numberBlue {\n  font-size: 18px;\n  color: #0F76F7;\n  font-weight: 600; }\n\n.normalText {\n  font-size: 13px;\n  color: #4A4A4A; }\n\n.comments-back {\n  background: #E6E5E5; }\n\n.card-volum-footer {\n  padding-bottom: 0; }\n\n.card-volum-footer {\n  border-top: 1px solid #E6E5E5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  margin-top: 20px; }\n\n.card-Comments {\n  border: 0px; }\n\n.scrollArea {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 297px; }\n\n.scrollArea::-webkit-scrollbar {\n  width: 5px;\n  background: #E6E5E5;\n  border: 0; }\n\n.scrollArea::-webkit-scrollbar-thumb {\n  background-color: #919191;\n  border: 0; }\n\n.modalTextBold {\n  font-weight: 600;\n  border: 0;\n  margin-top: 5px; }\n\n.typeVol {\n  background: orange;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: white; }\n\n.insuBool {\n  background: #3C765A;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: white;\n  margin-left: 6px; }\n\n.details-vol {\n  margin-top: 10px;\n  text-indent: 0px !important; }\n\n.Rgt {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.see-all-participants {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  font-size: 12px;\n  color: #fff;\n  line-height: 30px;\n  text-align: center;\n  background: #0F76F7;\n  margin-left: -10px;\n  cursor: pointer; }\n\n.see-all-participants:hover {\n  background: #6aa4ff; }\n\n.btnCancel:hover {\n  background: #FFFFFF;\n  color: #919191; }\n\n.loadingHeight {\n  height: 550px; }\n\n.btnCancel {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 381,
	"./af.js": 381,
	"./ar": 388,
	"./ar-dz": 382,
	"./ar-dz.js": 382,
	"./ar-kw": 383,
	"./ar-kw.js": 383,
	"./ar-ly": 384,
	"./ar-ly.js": 384,
	"./ar-ma": 385,
	"./ar-ma.js": 385,
	"./ar-sa": 386,
	"./ar-sa.js": 386,
	"./ar-tn": 387,
	"./ar-tn.js": 387,
	"./ar.js": 388,
	"./az": 389,
	"./az.js": 389,
	"./be": 390,
	"./be.js": 390,
	"./bg": 391,
	"./bg.js": 391,
	"./bn": 392,
	"./bn.js": 392,
	"./bo": 393,
	"./bo.js": 393,
	"./br": 394,
	"./br.js": 394,
	"./bs": 395,
	"./bs.js": 395,
	"./ca": 396,
	"./ca.js": 396,
	"./cs": 397,
	"./cs.js": 397,
	"./cv": 398,
	"./cv.js": 398,
	"./cy": 399,
	"./cy.js": 399,
	"./da": 400,
	"./da.js": 400,
	"./de": 403,
	"./de-at": 401,
	"./de-at.js": 401,
	"./de-ch": 402,
	"./de-ch.js": 402,
	"./de.js": 403,
	"./dv": 404,
	"./dv.js": 404,
	"./el": 405,
	"./el.js": 405,
	"./en-au": 406,
	"./en-au.js": 406,
	"./en-ca": 407,
	"./en-ca.js": 407,
	"./en-gb": 408,
	"./en-gb.js": 408,
	"./en-ie": 409,
	"./en-ie.js": 409,
	"./en-nz": 410,
	"./en-nz.js": 410,
	"./eo": 411,
	"./eo.js": 411,
	"./es": 413,
	"./es-do": 412,
	"./es-do.js": 412,
	"./es.js": 413,
	"./et": 414,
	"./et.js": 414,
	"./eu": 415,
	"./eu.js": 415,
	"./fa": 416,
	"./fa.js": 416,
	"./fi": 417,
	"./fi.js": 417,
	"./fo": 418,
	"./fo.js": 418,
	"./fr": 421,
	"./fr-ca": 419,
	"./fr-ca.js": 419,
	"./fr-ch": 420,
	"./fr-ch.js": 420,
	"./fr.js": 421,
	"./fy": 422,
	"./fy.js": 422,
	"./gd": 423,
	"./gd.js": 423,
	"./gl": 424,
	"./gl.js": 424,
	"./gom-latn": 425,
	"./gom-latn.js": 425,
	"./he": 426,
	"./he.js": 426,
	"./hi": 427,
	"./hi.js": 427,
	"./hr": 428,
	"./hr.js": 428,
	"./hu": 429,
	"./hu.js": 429,
	"./hy-am": 430,
	"./hy-am.js": 430,
	"./id": 431,
	"./id.js": 431,
	"./is": 432,
	"./is.js": 432,
	"./it": 433,
	"./it.js": 433,
	"./ja": 434,
	"./ja.js": 434,
	"./jv": 435,
	"./jv.js": 435,
	"./ka": 436,
	"./ka.js": 436,
	"./kk": 437,
	"./kk.js": 437,
	"./km": 438,
	"./km.js": 438,
	"./kn": 439,
	"./kn.js": 439,
	"./ko": 440,
	"./ko.js": 440,
	"./ky": 441,
	"./ky.js": 441,
	"./lb": 442,
	"./lb.js": 442,
	"./lo": 443,
	"./lo.js": 443,
	"./lt": 444,
	"./lt.js": 444,
	"./lv": 445,
	"./lv.js": 445,
	"./me": 446,
	"./me.js": 446,
	"./mi": 447,
	"./mi.js": 447,
	"./mk": 448,
	"./mk.js": 448,
	"./ml": 449,
	"./ml.js": 449,
	"./mr": 450,
	"./mr.js": 450,
	"./ms": 452,
	"./ms-my": 451,
	"./ms-my.js": 451,
	"./ms.js": 452,
	"./my": 453,
	"./my.js": 453,
	"./nb": 454,
	"./nb.js": 454,
	"./ne": 455,
	"./ne.js": 455,
	"./nl": 457,
	"./nl-be": 456,
	"./nl-be.js": 456,
	"./nl.js": 457,
	"./nn": 458,
	"./nn.js": 458,
	"./pa-in": 459,
	"./pa-in.js": 459,
	"./pl": 460,
	"./pl.js": 460,
	"./pt": 462,
	"./pt-br": 461,
	"./pt-br.js": 461,
	"./pt.js": 462,
	"./ro": 463,
	"./ro.js": 463,
	"./ru": 464,
	"./ru.js": 464,
	"./sd": 465,
	"./sd.js": 465,
	"./se": 466,
	"./se.js": 466,
	"./si": 467,
	"./si.js": 467,
	"./sk": 468,
	"./sk.js": 468,
	"./sl": 469,
	"./sl.js": 469,
	"./sq": 470,
	"./sq.js": 470,
	"./sr": 472,
	"./sr-cyrl": 471,
	"./sr-cyrl.js": 471,
	"./sr.js": 472,
	"./ss": 473,
	"./ss.js": 473,
	"./sv": 474,
	"./sv.js": 474,
	"./sw": 475,
	"./sw.js": 475,
	"./ta": 476,
	"./ta.js": 476,
	"./te": 477,
	"./te.js": 477,
	"./tet": 478,
	"./tet.js": 478,
	"./th": 479,
	"./th.js": 479,
	"./tl-ph": 480,
	"./tl-ph.js": 480,
	"./tlh": 481,
	"./tlh.js": 481,
	"./tr": 482,
	"./tr.js": 482,
	"./tzl": 483,
	"./tzl.js": 483,
	"./tzm": 485,
	"./tzm-latn": 484,
	"./tzm-latn.js": 484,
	"./tzm.js": 485,
	"./uk": 486,
	"./uk.js": 486,
	"./ur": 487,
	"./ur.js": 487,
	"./uz": 489,
	"./uz-latn": 488,
	"./uz-latn.js": 488,
	"./uz.js": 489,
	"./vi": 490,
	"./vi.js": 490,
	"./x-pseudo": 491,
	"./x-pseudo.js": 491,
	"./yo": 492,
	"./yo.js": 492,
	"./zh-cn": 493,
	"./zh-cn.js": 493,
	"./zh-hk": 494,
	"./zh-hk.js": 494,
	"./zh-tw": 495,
	"./zh-tw.js": 495
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 754;


/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-background\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2 col-12 brandBackground\">\r\n            <div class=\"titleBrand\">\r\n                <a routerLink=\"/feed\">BEVOLUN</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-12 menuHeader\">\r\n            <ul>\r\n                <li *ngIf=\"user\" routerLink=\"map\">\r\n                    <md-icon>place</md-icon>\r\n                </li>\r\n                <li *ngIf=\"user\" ngbDropdown (click)=\"getRequests(user.id_user)\">\r\n                    <md-icon ngbDropdownToggle>people</md-icon>\r\n\r\n                    <span class=\"badge badge-notify\" *ngIf=\"newRequestsCount > 0\">{{newRequestsCount}}</span>\r\n\r\n                    <div id=\"dropdown-messages\" class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-header\">PEDIDOS</div>\r\n                        <div class=\"message-item\" *ngIf=\"!requests\">\r\n\r\n                            <div class=\"sk-fading-circle\">\r\n                                <div class=\"sk-circle1 sk-circle\"></div>\r\n                                <div class=\"sk-circle2 sk-circle\"></div>\r\n                                <div class=\"sk-circle3 sk-circle\"></div>\r\n                                <div class=\"sk-circle4 sk-circle\"></div>\r\n                                <div class=\"sk-circle5 sk-circle\"></div>\r\n                                <div class=\"sk-circle6 sk-circle\"></div>\r\n                                <div class=\"sk-circle7 sk-circle\"></div>\r\n                                <div class=\"sk-circle8 sk-circle\"></div>\r\n                                <div class=\"sk-circle9 sk-circle\"></div>\r\n                                <div class=\"sk-circle10 sk-circle\"></div>\r\n                                <div class=\"sk-circle11 sk-circle\"></div>\r\n                                <div class=\"sk-circle12 sk-circle\"></div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"message-item\" *ngFor=\"let request of requests\" routerLink='./profile/{{request.id_user}}/activity'>\r\n\r\n                            <div class=\"image\">\r\n                                <img [src]=\"request.photo_url\">\r\n                            </div>\r\n                            <div class=\"notification-info\">\r\n                                <b>{{request.user_name}}</b> começou a seguir-te <span class=\"time\">{{request.date | amTimeAgo:true}}</span>\r\n                            </div>\r\n                            <div class=\"text-right\">\r\n                                <div class=\"btn-notification\">\r\n                                    <button class=\"btn btnConfirm\" routerLink='./profile/{{request.id_user}}/activity'>VER</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div routerLink=\"/requests\" class=\"dropdown-footer\">Ver todos os pedidos</div>\r\n\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"user\" ngbDropdown (click)=\"getConversations(user.id_user)\">\r\n\r\n                    <md-icon ngbDropdownToggle>chat_bubble</md-icon>\r\n\r\n                    <div id=\"dropdown-messages\" class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-header\">MENSAGENS</div>\r\n                        <div class=\"message-item\" *ngIf=\"!messagesReady\">\r\n\r\n                            <div class=\"sk-fading-circle\">\r\n                                <div class=\"sk-circle1 sk-circle\"></div>\r\n                                <div class=\"sk-circle2 sk-circle\"></div>\r\n                                <div class=\"sk-circle3 sk-circle\"></div>\r\n                                <div class=\"sk-circle4 sk-circle\"></div>\r\n                                <div class=\"sk-circle5 sk-circle\"></div>\r\n                                <div class=\"sk-circle6 sk-circle\"></div>\r\n                                <div class=\"sk-circle7 sk-circle\"></div>\r\n                                <div class=\"sk-circle8 sk-circle\"></div>\r\n                                <div class=\"sk-circle9 sk-circle\"></div>\r\n                                <div class=\"sk-circle10 sk-circle\"></div>\r\n                                <div class=\"sk-circle11 sk-circle\"></div>\r\n                                <div class=\"sk-circle12 sk-circle\"></div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <ng-container *ngIf=\"messagesReady\">\r\n                            <div class=\"message-item\" *ngFor=\"let conversation of conversations\">\r\n                                <div class=\"image\">\r\n                                    <img [src]=\"conversation.photo_url\" onerror=\"http://santetotal.com/wp-content/uploads/2014/05/default-user.png\">\r\n                                </div>\r\n                                <div class=\"message-info\" (click)=\"goToMessages(conversation.id_conversation, conversation.user_name)\">\r\n                                    <div>\r\n                                        <span class=\"nameMsg\">{{conversation.name}}</span>\r\n                                        <span class=\"time\">{{conversation.date | amTimeAgo:true}}</span>\r\n                                    </div>\r\n\r\n                                    <span class=\"textMsg\"> {{conversation.message }}</span>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div class=\"dropdown-footer\" [routerLink]=\"['/chat/msg/', conversations[0]?.id_conversation] \">Ver todas as mensagens</div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"user\" ngbDropdown (click)=\"getNotifications(user.id_user)\">\r\n                    <md-icon ngbDropdownToggle>notifications</md-icon>\r\n                    <span class=\"badge badge-notify\" *ngIf=\"newNotificationCount > 0\">{{newNotificationCount}}</span>\r\n\r\n                    <div id=\"dropdown-messages\" class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-header\">NOTIFICAÇÕES</div>\r\n                        <div class=\"message-item\" *ngIf=\"!notifications\">\r\n\r\n\r\n                            <div class=\"sk-fading-circle\">\r\n                                <div class=\"sk-circle1 sk-circle\"></div>\r\n                                <div class=\"sk-circle2 sk-circle\"></div>\r\n                                <div class=\"sk-circle3 sk-circle\"></div>\r\n                                <div class=\"sk-circle4 sk-circle\"></div>\r\n                                <div class=\"sk-circle5 sk-circle\"></div>\r\n                                <div class=\"sk-circle6 sk-circle\"></div>\r\n                                <div class=\"sk-circle7 sk-circle\"></div>\r\n                                <div class=\"sk-circle8 sk-circle\"></div>\r\n                                <div class=\"sk-circle9 sk-circle\"></div>\r\n                                <div class=\"sk-circle10 sk-circle\"></div>\r\n                                <div class=\"sk-circle11 sk-circle\"></div>\r\n                                <div class=\"sk-circle12 sk-circle\"></div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                            <div class=\"image\">\r\n                                <img [src]=\"notification.photo_url\">\r\n                            </div>\r\n                            <div class=\"notification-info\">\r\n                                <div>\r\n                                    <p *ngIf=\"notification.type == 1\"><b>{{notification?.user_name}}</b> candidatou-se a <b>{{notification?.vol_name}}</b>\r\n                                        <span class=\"time\">{{notification?.date | amTimeAgo:true }}</span> </p>\r\n\r\n                                </div>\r\n                                <div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div routerLink=\"/notifications\" class=\"dropdown-footer\">Ver todas as notificações</div>\r\n\r\n                    </div>\r\n\r\n                </li>\r\n                <li (click)=\"openRegister()\" *ngIf=\"!user\"> Registar</li>\r\n                <li (click)=\"openLogin()\" *ngIf=\"!user\"> Entrar</li>\r\n\r\n                <li *ngIf=\"user\" class=\"nameDropdown\" ngbDropdown ngbDropdownToggle>\r\n\r\n                    <span>\r\n                    <img class=\"navbar-user-picture\" [src]=\"user?.photo\" (error)=\"this.user.photo = 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png'\"> \r\n                    <span>{{user?.username}}</span>\r\n                    <i class=\"material-icons arrow_dropdown\">arrow_drop_down</i>\r\n\r\n\r\n                    </span>\r\n\r\n\r\n                    <div id=\"dropdown-user\" class=\"dropdown-menu dropdown-menu-profile\">\r\n                        <div class=\"dropdown-header\">A MINHA CONTA</div>\r\n                        <div class=\"actions-profile\">\r\n                            <div class=\"profile-item\" (click)=\"onSelect(idLogin)\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">portrait</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Perfil\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" (click)=\"onSelectSettings(idLogin)\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">settings</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Definições de perfil\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" (click)=\"logout()\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">power_settings_new</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Log out\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown-header\">SOCIAL</div>\r\n                        <div class=\"actions-profile\">\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">chat_bubble</i>\r\n                                </div>\r\n                                <div class=\"desc\" routerLink=\"/chat/msg\">\r\n                                    Mensagens\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" routerLink=\"/notifications\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">notifications</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Notificações\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" routerLink=\"/requests\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">people</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Pedidos\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown-header\">SOBRE O VOLUM</div>\r\n                        <div class=\"actions-profile\">\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">toc</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Termos e condições\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">forum</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Contactos\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">help_outline</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    FAQS\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--\r\n                    <div class=\"dropdown-menu\" id=\"dropdown-user\">\r\n                        <button class=\"dropdown-item\" (click)=\"onSelect(idLogin)\" *ngIf=\"user\" styles=\"font-size:10px!important\">Perfil</button>\r\n                        <button class=\"dropdown-item\" *ngIf=\"user\">Definições</button>\r\n                        <button class=\"dropdown-item\" (click)=\"logout()\" *ngIf=\"user\">Sair</button>\r\n                    </div>\r\n-->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background:white; margin-top:50px\">\r\n  <div class=\"no-padding\">\r\n    <div class=\"modalHeader row\">\r\n      <div class=\"day-w-border\">\r\n        <div>\r\n          {{volDetails?.date_begin | date:\"MMM\" | uppercase}}\r\n        </div>\r\n        <div>\r\n          {{volDetails?.date_begin | date:\"d\"}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modalTitle\">\r\n        <div class=\"modalTitleDesc\">\r\n          {{volDetails?.name}}\r\n        </div>\r\n        <div class=\"modalSubtitle\">\r\n          {{volDetails?.date_begin | date:\"fullDate\"}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n    <ng-container>\r\n\r\n\r\n      <div style=\"display:flex; margin-top:20px\">\r\n        <div class=\"card-user-image col-md-auto\">\r\n        <img src={{volDetails?.user.photo_url}}>\r\n      </div>\r\n      <div class=\"card-user-nd\">\r\n        <div><span class=\"card-user-name ts16 pointer\" data-dismiss=\"dialog\" (click)=\"onSelect(volDetails?.user.id_user)\">{{volDetails?.user.name}}</span>\r\n          <span class=\"ts14 card-user-desc\"> criou o </span>\r\n          <span class=\"card-user-event ts14\">evento</span>\r\n        </div>\r\n        <div class=\"card-date ts13\">{{volDetails?.date_creation | date:\"d/M\"}} às {{volDetails?.date_creation | date:\"shortTime\"}}</div>\r\n      </div>\r\n      <div class=\"col text-right no-padding\">\r\n        <!-- <button class=\"btn btnCandidate\" (click)=\"apply(volDetails.id_vol)\" *ngIf=\"state == 0\">CANDIDATAR</button> -->\r\n        <div *ngIf=\"volDetails?.user.id_user!=id_user\">\r\n          <button class=\"btn pointer btnCandidate\" (click)=\"openRemoveConfirm(7, volDetails.name, id_user, volDetails.id_vol)\" *ngIf=\"volDetails?.active==1 && state == 0\">CANDIDATAR</button>\r\n          <button class=\"btn pointer btnRemove\" (click)=\"openRemoveConfirm(6, volDetails.name, id_user, volDetails.id_vol)\" *ngIf=\"volDetails?.active==1 && state == 1 && !candCancel\">CANCELAR CANDIDATURA</button>\r\n          <button class=\"btn pointer btnGreen \" *ngIf=\"volDetails?.active==1 && state == 2\">CONFIRMADO COMO PARTICIPANTE</button>\r\n          <button class=\"btn pointer btnGreenOut\" *ngIf=\"volDetails?.active==1 && state == 3\">CANDIDATURA ENVIADA COM SUCESSO</button>\r\n          <button class=\"btn btnCancel\" *ngIf=\"volDetails?.active==0\">AÇÃO FINALIZADA</button>\r\n          <button class=\"btn pointer btnCancel\" *ngIf=\"volDetails?.active==1 && state == 4\">CANDIDATURA REJEITADA</button>\r\n        </div>\r\n        <div *ngIf=\"volDetails?.user.id_user==id_user\">\r\n          <button class=\"btn pointer btnCandidate\" (click)=\"goDetails(volDetails?.id_vol)\" *ngIf=\"volDetails?.active==1\">ÁREA DE GESTÃO</button>\r\n          <button class=\"btn btnCancel\" *ngIf=\"volDetail?.active==0\">AÇÃO FINALIZADA</button>\r\n        </div>\r\n\r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"modalTextArea col-12 no-padding\">\r\n        <div class=\"ts14 col-12 no-padding\" style=\"font-weight: bold\">\r\n          {{volDetails?.name}}\r\n        </div>\r\n        <div class=\"ts13 col-12 no-padding\">\r\n          {{volDetails?.description}}\r\n        </div>\r\n        <div class=\"details-vol\">\r\n          <span class=\"typeVol\">Solidariedade Social</span> <span class=\"insuBool\">Seguro</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"sectionDatePlace container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 no-padding\" style=\"display:flex\">\r\n            <div style=\"display:flex; margin-top:5px\">\r\n              <div>\r\n                <i class=\"material-icons iconDate\">query_builder</i>\r\n              </div>\r\n              <div class=\"descDatePlace\">\r\n                <div class=\"daysEvent ts13\" *ngIf=\"!volDetails?.date_end\">\r\n                  Início a {{volDetails?.date_begin | date:\"d\"}} de {{volDetails?.date_begin | date:\"MMMM\"}}\r\n                </div>\r\n                <div class=\"daysEvent ts13\" *ngIf=\"volDetails?.date_end\">\r\n                  {{volDetails?.date_begin | date:\"d\"}} de {{volDetails?.date_begin | date:\"MMMM\"}} - {{volDetails?.date_end | date:\"d\"}} de\r\n                  {{volDetails?.date_end | date:\"MMMM\"}}\r\n                </div>\r\n                <div class=\"daysEventFull ts13\" *ngIf=\"volDetails?.duration > 1\">\r\n                  {{volDetails?.duration}} horas diárias\r\n                </div>\r\n                <div class=\"daysEventFull ts13\" *ngIf=\"volDetails?.duration < 2\">\r\n                  {{volDetails?.duration}} hora diária\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div style=\"margin-left: auto; display:flex; margin-top:5px\">\r\n              <div>\r\n                <i class=\"material-icons iconDate\">place</i>\r\n              </div>\r\n              <div class=\"descDatePlace \">\r\n                <div *ngIf=\"address\" class=\"daysEvent ts13\" style=\"padding-top:10px\">\r\n                  {{address}}\r\n                </div>\r\n                <div *ngIf=\"!addressName && !address\" class=\"daysEvent ts13\" style=\"padding-top:9px\">Sem localização definida</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 no-padding mapContent\" *ngIf=\"login\">\r\n\r\n        <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n          <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n        </sebm-google-map>\r\n\r\n      </div>\r\n\r\n      <div class=\"container friendsContainer\" *ngIf=\"login\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 no-padding\" style=\"display:flex; margin-top:5px\">\r\n            <div>\r\n              <div class=\"daysEventFull ts13\" (click)=\"openCandidates(1, volDetails.id_vol)\" [class.pointer]=\"numberCandidates > 0\">\r\n                <span class=\"numberYellow\">{{numberCandidates}}</span><span class=\"normalText\"> candidatos</span>\r\n              </div>\r\n              <div *ngIf=\"login\" class=\"likeImgs\">\r\n                <img *ngFor=\"let candidate of candidates\" src=\"{{candidate?.photo_url}}\" (click)=\"openProfileModal(candidate?.id_user)\" class=\"pointer\">\r\n                <div *ngIf=\"numberCandidates>10\" class=\"see-all-participants\" (click)=\"openCandidates(1, volDetails.id_vol)\">{{numberCandidates-10}}</div>\r\n                <div *ngIf=\"!numberCandidates\" class=\"ts13\" style=\"margin-left: -10px; margin-top:5px\">Não existem candidatos.</div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"\" style=\"text-align:right; margin-left:auto\">\r\n              <div class=\"ts13\" (click)=\"openCandidates(2, volDetails.id_vol)\" [class.pointer]=\"numberConfirmeds > 0\">\r\n                <span class=\"numberBlue\">{{numberConfirmeds}}</span><span class=\"normalText\"> confirmados</span>\r\n              </div>\r\n              <div *ngIf=\"login\" class=\"likeImgs Rgt\">\r\n                <img *ngFor=\"let confirmed of confirmeds\" src=\"{{confirmed?.photo_url}}\" (click)=\"openProfileModal(confirmed?.id_user)\" class=\"pointer\">\r\n                <div *ngIf=\"numberConfirmeds>10\" class=\"see-all-participants\" (click)=\"openCandidates(2, volDetails.id_vol)\">{{numberConfirmeds-10}}</div>\r\n                <div *ngIf=\"!numberConfirmeds\" class=\"ts13\" style=\"margin-top:5px\">Não existem confirmados.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-volum-footer no-padding-side\" *ngIf=\"login\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 no-padding\" style=\"display:flex; align-items:center\">\r\n              <div class=\"cardLikes\">\r\n                <md-icon (click)=\"dislike(this.vol)\" *ngIf=\"likeState==1\" class=\"btnLike\">favorite</md-icon>\r\n                <md-icon (click)=\"like(this.vol)\" *ngIf=\"!numberLikes || likeState==0\" class=\"btnLike btnBlack\">favorite_border</md-icon>\r\n              </div>\r\n              <div *ngIf=\"login\" class=\"likesText ts12\">\r\n                <!-- <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto -->\r\n                <span *ngIf=\"likeState==1\" class=\"likesTestMe\">Tu</span>\r\n                <span *ngIf=\"likeState==1 && numberLikes<2\">gostas disto.</span>\r\n                <span *ngIf=\"likeState==1 && numberLikes>=2\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">e mais</span>\r\n                <span *ngIf=\"likeState==1 && numberLikes>=2\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">{{numberLikes-1}} pessoa<span *ngIf=\"numberLikes>2\">s</span>                gostam disto.</span>\r\n                <span *ngIf=\"likeState==0 && numberLikes>=1\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=2\">s</span>                gosta\r\n                <span *ngIf=\"numberLikes>=2\">m\r\n                                      </span> disto.\r\n                </span>\r\n                <span *ngIf=\"likeState==0 && !numberLikes\">Sê o primeiro a gostar disto!</span>\r\n              </div>\r\n              <div *ngIf=\"!login\" class=\"likesText ts12\">\r\n                <span *ngIf=\"numberLikes>=1\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=1\">s</span> gostam disto.\r\n                </span>\r\n                <span *ngIf=\"!numberLikes || numberLikes==0 \">Sê o primeiro a gostar disto. <span (click)=\"openRegister()\" class=\"likesTestMe clickable\" style=\"cursor:pointer\">Regista-te já</span></span>\r\n\r\n              </div>\r\n              <div (click)=\"getComments()\" class=\"text-right\" style=\"margin-left:auto\">\r\n                <div class=\"cardComments ts12\">\r\n                  <div>\r\n                    <md-icon class=\"btnComments\">textsms</md-icon>\r\n                  </div>\r\n                  <div *ngIf=\"numberComments>0\" class=\"textComments\"><span class=\"commentsNumber\">{{numberComments}}</span> comentário<span *ngIf=\"numberComments>1\">s</span></div>\r\n                  <div *ngIf=\"numberComments==0\" class=\"textComments\">Sê o primeiro a comentar!</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  <div class=\"row card-Comments\" *ngIf=\"showComments && login\">\r\n    <div class=\"scrollArea col-12 no-padding\">\r\n      <div class=\"col-12 comments-back\" *ngFor=\"let comment of comments\">\r\n        <div class=\"row comments-header\">\r\n          <div class=\"col card-user--comments-image col-md-auto\">\r\n            <img src=\"{{comment.photo_url}}\">\r\n          </div>\r\n          <div class=\"col-8 card-user-nd\">\r\n            <div class=\"card-user-name-comments ts13\">{{comment.name}}</div>\r\n            <div class=\"card-date-comments ts12\">10 horas</div>\r\n          </div>\r\n          <div class=\"col no-padding card-option-comments text-right\">\r\n            <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n            <md-menu #menu=\"mdMenu\">\r\n              <button md-menu-item>\r\n                      <md-icon>dialpad</md-icon>\r\n                      <span>Redial</span>\r\n                    </button>\r\n              <button md-menu-item disabled>\r\n                      <md-icon>voicemail</md-icon>\r\n                      <span>Check voicemail</span>\r\n                    </button>\r\n              <button md-menu-item>\r\n                      <md-icon>notifications_off</md-icon>\r\n                      <span>Disable alerts</span>\r\n                    </button>\r\n            </md-menu>\r\n          </div>\r\n        </div>\r\n        <div class=\"row comments-content\">\r\n          <div class=\"col-12 ts13\">\r\n            {{comment.message}}\r\n          </div>\r\n        </div>\r\n        <div class=\"borderComments\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 insert-comment \">\r\n      <div class=\"row\" style=\"padding-left:15px; padding-right:15px;\">\r\n        <div class=\"col no-padding card-user--comments-image card-user-comments-image-comments\">\r\n          <img src=\"{{userLogin.photo}}\">\r\n        </div>\r\n        <div class=\"col no-padding\">\r\n          <md-input-container class=\"width100\">\r\n            <input autofocus mdInput [(ngModel)]=\"comentario\" (keyup.enter)=\"sendComment(comentario)\">\r\n          </md-input-container>\r\n        </div>\r\n        <!--<div class=\"col-1 btnSend text-right no-padding\">\r\n                      \r\n                  </div>-->\r\n\r\n        <button (click)=\"sendComment(comentario)\" type=\"submit\" class=\"btnSendIcon btnSendColorGrey\">\r\n                    <md-icon class=\"send\">send</md-icon>\r\n                  </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"container headerFeed no-padding\">\r\n      <div class=\"v-header-title\">Da compaixão à ação.</div>\r\n      <div class=\"v-header-subtitle\">A solidariedade é o sentimento que melhor expressa o respeito pela dignidade humana.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"padding: 0; margin-top: 25px\">\r\n      <!-- TODO: LIMPAR ESTE CSS -->\r\n      <search></search>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!login\" class=\"container\">\r\n  <!-- PUBLICO -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"titleFeed\">Instituições</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"slider\">\r\n    <swiper [config]=\"config\" #swiper1>\r\n      <div class=\"swiper-wrapper\">\r\n        <vol-card *ngFor=\"let vol of instVols\" [userCreator]=\"vol.user.id_user\" [title]=\"vol.vol.name\" [idVol]=\"vol.vol.id_vol\" [likes]=\"vol.vol.likes\"\r\n          [verified]=\"true\" class=\"swiper-slide\" [type]=\"private\" [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n          [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [description]=\"vol.vol.description\" [photos]=\"vol.vol.photos\">\r\n        </vol-card>\r\n      </div>\r\n      <!-- Add Pagination -->\r\n      <!-- Add Arrows -->\r\n    </swiper>\r\n\r\n    <!--   <div class=\"swiper-button-prev slider-prev1\" (click)=\"swiper1.Swiper.slidePrev()\"></div>\r\n           <div class=\"swiper-button-next slider-next1\" (click)=\"swiper1.Swiper.slideNext()\"></div> -->\r\n    <md-icon class=\"slider-buttons slider-prev1\" (click)=\"swiper1.Swiper.slidePrev()\">keyboard_arrow_left</md-icon>\r\n    <md-icon class=\"slider-buttons slider-next1\" (click)=\"swiper1.Swiper.slideNext()\">keyboard_arrow_right</md-icon>\r\n  </div>\r\n\r\n  <!-- PUBLICO -->\r\n  <!-- PRIVADO -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"titleFeed\">Privado</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"slider\">\r\n    <swiper [config]=\"config\" #swiper2>\r\n      <div class=\"swiper-wrapper\">\r\n        <vol-card *ngFor=\"let vol of privateVols\" [userCreator]=\"vol.user.id_user\" [title]=\"vol.vol.name\" [likes]=\"vol.vol.likes\"\r\n          [idVol]=\"vol.vol.id_vol\" [verified]=\"true\" [type]=\"private\" class=\"swiper-slide\" [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n          [dateCreation]=\"vol.vol.date_begin\" [description]=\"vol.vol.description\" [photos]=\"vol.vol.photos\">\r\n        </vol-card>\r\n      </div>\r\n      <!-- Add Pagination -->\r\n      <!-- Add Arrows -->\r\n    </swiper>\r\n\r\n    <md-icon class=\"slider-buttons slider-prev2\" (click)=\"swiper2.Swiper.slidePrev()\">keyboard_arrow_left</md-icon>\r\n    <md-icon class=\"slider-buttons slider-next2\" (click)=\"swiper2.Swiper.slideNext()\">keyboard_arrow_right</md-icon>\r\n  </div>\r\n\r\n\r\n  <!-- PRIVADO -->\r\n  <!-- CIDADES -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"titleFeed\">Cidades</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-2 col-sm-4 col-md-3 city city1\">\r\n      <div class=\"cityCard cityAveiro\">\r\n        <div class=\"cityText\">Aveiro</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-lg-2 col-sm-4 col-md-3 city city2\">\r\n      <div class=\"cityCard cityPorto\">\r\n        <div class=\"cityText\">Porto</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-lg-2 col-sm-4 col-md-3 city city3\">\r\n      <div class=\"cityCard cityLisboa\">\r\n        <div class=\"cityText\">Lisboa</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-lg-2 col-sm-3 col-md-3 city city4\">\r\n      <div class=\"cityCard cityCoimbra\">\r\n        <div class=\"cityText\">Coimbra</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-lg-2 col-md-2 city city5\">\r\n      <div class=\"cityCard cityBraga\">\r\n        <div class=\"cityText\">Braga</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-lg-2 col-md-2 city city6\">\r\n      <div class=\"cityCard cityGuimaraes\">\r\n        <div class=\"cityText\">Guimarães</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- CIDADES -->\r\n  <!-- QUESTIONS -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"titleFeed\">Perguntas Frequentes</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"col-lg-12 askedQuestions\">\r\n      </div>\r\n      <div class=\"titleAskedQuestions\">\r\n        O que é a Volum?\r\n      </div>\r\n      <div class=\"textAskedQuestions\">\r\n        A Volum foi lançada pela ENTRAJUDA em 2006. É um projecto inovador, de âmbito nacional, sem fronteiras, transversal a toda\r\n        a sociedade e economia que fomenta o exercício da Cidadania e da Responsabilidade Social. Trata-se de uma ferramenta\r\n        de gestão e desenvolvimento on line em tempo real, que aproveita as qualificações dos voluntariado e permite a capacitação\r\n        das organizações. </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"col-lg-12 askedQuestions\">\r\n\r\n      </div>\r\n      <div class=\"titleAskedQuestions\">\r\n        Como funciona a Volum?\r\n      </div>\r\n      <div class=\"textAskedQuestions\">\r\n\r\n\r\n        Os Voluntários podem escolher onde pretendem realizar a sua actividade, de acordo com as suas aptidões, disponibilidade de\r\n        tempo, áreas de interesse, preferência de localização. Podem seleccionar uma causa ou necessidade social, procurar\r\n        uma instituição ou organização perto do local da sua residência, participar numa acção pontual.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"col-lg-12 askedQuestions\">\r\n      </div>\r\n      <div class=\"titleAskedQuestions\">\r\n        A Volum é só para atuais voluntários?\r\n      </div>\r\n      <div class=\"textAskedQuestions\">\r\n        Não, porque o voluntariado não se limita à área da solidariedade Social. São contempladas outras áreas onde o voluntariado\r\n        tem grande expressão e pode ser uma mais-valia: Ambiente/Animais, Cultura, Cidadania e Política, Desporto, Direitos\r\n        Humanos, entre outras. Qualquer pessoa com vontade de ajudar o próximo pode fazer parte desta comunidade\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- QUESTIONS -->\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- LOGADO -->\r\n\r\n<div *ngIf=\"login\" class=\"container\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"300\" (scrolled)=\"onScroll()\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\" *ngFor=\"let vol of vols; let i = index;\">\r\n      <vol-card [userCreator]=\"vol.user.id_user\" [title]=\"vol.vol.name\" [likes]=\"vol.vol.likes\" [idVol]=\"vol.vol.id_vol\" [verified]=\"true\"\r\n        type=\"private\" class=\"swiper-slide\" [avatar]=\"vol.user.photo_url\" [photos]=\"vol.vol.photos\" [username]=\"vol.user.name\"\r\n        [likeState]=\"vol.vol.likeState\" [dateCreation]=\"vol.vol.date_creation\" [description]=\"vol.vol.description\" [index]=\"i\">\r\n      </vol-card>\r\n\r\n    </div>\r\n    <div class=\"sk-fading-circle\" *ngIf=\"loading\">\r\n      <div class=\"sk-circle1 sk-circle\"></div>\r\n      <div class=\"sk-circle2 sk-circle\"></div>\r\n      <div class=\"sk-circle3 sk-circle\"></div>\r\n      <div class=\"sk-circle4 sk-circle\"></div>\r\n      <div class=\"sk-circle5 sk-circle\"></div>\r\n      <div class=\"sk-circle6 sk-circle\"></div>\r\n      <div class=\"sk-circle7 sk-circle\"></div>\r\n      <div class=\"sk-circle8 sk-circle\"></div>\r\n      <div class=\"sk-circle9 sk-circle\"></div>\r\n      <div class=\"sk-circle10 sk-circle\"></div>\r\n      <div class=\"sk-circle11 sk-circle\"></div>\r\n      <div class=\"sk-circle12 sk-circle\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!--\r\n<form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n    <br> Login <input type=\"text\" formControlName=\"login\">\r\n    <small *ngIf=\"!form.controls.login.valid && form.controls.login.touched\" style=\"color:red\">Invalido</small>\r\n    <br> Password <input type=\"password\" formControlName=\"password\">\r\n    <br>\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n-->\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 containerLogin\">\r\n      <form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n        <div class=\"col-12\">\r\n          <button class=\"facebookLogin\" type=\"button\" (click)=\"loginFacebook()\">Entrar com o Facebook</button>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <button class=\"googleLogin\">Entrar com o Google</button>\r\n        </div>\r\n        <div class=\"col-12 text-center orLogin\">\r\n          <span class=\"divider-or\">ou</span>\r\n          <hr class=\"divider-hr\">\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"error\">\r\n          <div class=\"textError\">{{error}}</div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <input [class.borda]=\"!form.controls.email.valid && form.controls.email.touched\" type=\"email\" formControlName=\"email\" class=\"inputEmailLogin form-control\"\r\n            placeholder=\"Endereço de e-mail\">\r\n          <div *ngIf=\"!form.controls.email.valid && form.controls.email.touched\" class=\"textError\">Endereço de email inválido.</div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <input [class.borda]=\"!form.controls.password.valid && form.controls.password.touched\" type=\"password\" class=\"inputPasswordLogin form-control\"\r\n            formControlName=\"password\" placeholder=\"Palavra-passe\">\r\n          <div *ngIf=\"!form.controls.password.valid && form.controls.password.touched\" class=\"textError\">Palavra passe inválida</div>\r\n        </div>\r\n        <div class=\"col-12 text-right forgotPass\">\r\n          <span>Esqueceu a sua palavra passe?</span>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <button type=\"submit\" class=\"normalLogin\">Entrar</button>\r\n        </div>\r\n        <div class=\"col-12 footerLogin\">\r\n          <hr>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <span class=\"registerAdvice\">Ainda não tem uma conta?</span>\r\n        </div>\r\n        <div class=\"col text-right btnRegister\">\r\n          <button class=\"registerBtn\">Registe-se</button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <div class=\"container\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-padding mapFull\">\r\n    <div class=\"row no-padding\">\r\n        <div class=\"col-7 map\">\r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\" [styles]=\"Terrain\" (boundsChange)=\"getVols($event)\">\r\n\r\n                <sebm-google-map-marker *ngFor=\"let vol of vols; let i = index\" [latitude]=\"convertStringToNumber(vol.vol.lat)\" [longitude]=\"convertStringToNumber(vol.vol.lng)\">\r\n\r\n                    <sebm-google-map-info-window>\r\n\r\n                        <div>\r\n                            <b style='display: block'>{{vols[i].vol.name}}   </b>\r\n                            <img [src]='vols[i].vol.photos[0]' class='img-responsive' style='    width: 200px;\r\n    height: 100px;\r\n    margin: 10px;'>\r\n                        </div>\r\n\r\n\r\n                    </sebm-google-map-info-window>\r\n\r\n                </sebm-google-map-marker>\r\n\r\n\r\n            </sebm-google-map>\r\n        </div>\r\n        <div class=\"col-5 \">\r\n            <div class=\"row\">\r\n                <div class=\"areaSearch col-12\">\r\n                    <div class=\"searchSection\">\r\n                        <div class=\"searchTitle\">Pesquisar voluntariados por local específico:</div>\r\n                        <div class=\"areaInput\">\r\n                            <input type=\"text\" class=\"inputSearch\" placeholder=\"Inserir localização...\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" (click)=\"search()\">Search</button>\r\n                <div class=\"cardsSection col-12\">\r\n                    <div class=\"col-12\" *ngFor=\"let vol of vols\">\r\n                        <vol-card [map]=\"true\" [likes]=\"33\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.vol.name\" [description]=\"vol.vol.description\"\r\n                            [photos]=\"vol.vol.photos\">\r\n                        </vol-card>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row headerNotifications\">\r\n              <div class=\"col titleCard\">\r\n                Notificações\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"assets/imgs/andre.jpg\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">André Martins</span> gostou do teu evento <span class=\"notEvent\">Solidariedade com os pobres</span>.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              \r\n           \r\n              </div>\r\n            </div>\r\n             <div class=\"col text-right not-icon no-padding\">\r\n                <i class=\"material-icons edit\">event_note</i>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"assets/imgs/andre.jpg\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">André Martins</span> aderiu ao teu evento <span class=\"notEvent\">Solidariedade com os pobres</span>.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                <i class=\"material-icons edit\">event_note</i>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"assets/imgs/andre.jpg\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">André Martins</span> aderiu ao teu evento <span class=\"notEvent\">Solidariedade com os pobres</span>.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                <i class=\"material-icons edit\">event_note</i>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!--\r\n<form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n    <br> Login <input type=\"text\" formControlName=\"login\">\r\n    <small *ngIf=\"!form.controls.login.valid && form.controls.login.touched\" style=\"color:red\">Invalido</small>\r\n    <br> Password <input type=\"password\" formControlName=\"password\">\r\n    <br>\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n-->\r\n    <div class=\"row\">\r\n        <div class=\"col-12 containerLogin\">\r\n            <form (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                <div *ngIf=\"emailRegist==0\">\r\n                    <div class=\"col-12\">\r\n                        <button class=\"facebookLogin\">Registar com o Facebook</button>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button class=\"googleLogin\">Registar com o Google</button>\r\n                    </div>\r\n                    <div class=\"col-12 text-center orLogin\">\r\n                        <span class=\"divider-or\">ou</span>\r\n                        <hr class=\"divider-hr\">\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button class=\"normalLogin\" (click)=\"openEmailRegist()\">Registar com o e-mail</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==1\">\r\n                    <div class=\"col-12 text-center\">\r\n                        <span class=\"registerAdvice1\">Registe-se com o <span class=\"adviceSocial\">Facebook</span> ou\r\n                        <span class=\"adviceSocial\">Google</span>.</span>\r\n                    </div>\r\n                    <hr>\r\n                    <form (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                        <div class=\"col-12\">\r\n                            <input type=\"email\" maxlength=\"120\" [class.borda]=\"!form.controls.email.valid && form.controls.email.touched\" formControlName=\"email\"\r\n                                class=\"inputEmailLogin form-control\" placeholder=\"Endereço de e-mail\">\r\n                            <div *ngIf=\"form.controls.email.errors?.required && form.controls.email.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input type=\"text\" maxlength=\"120\" [class.borda]=\"!form.controls.name.valid && form.controls.name.touched\" formControlName=\"name\"\r\n                                class=\"inputEmailLogin form-control\" placeholder=\"Primeiro nome\">\r\n                            <div *ngIf=\"form.controls.name.errors?.required && form.controls.name.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input type=\"text\" maxlength=\"120\" [class.borda]=\"!form.controls.lastname.valid && form.controls.lastname.touched\" formControlName=\"lastname\"\r\n                                class=\"inputEmailLogin form-control\" placeholder=\"Último Nome\">\r\n                            <div *ngIf=\"form.controls.lastname.errors?.required && form.controls.lastname.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input maxlength=\"120\" [class.borda]=\"!form.controls.password.valid && form.controls.password.touched\" type=\"password\" class=\"inputPasswordLogin form-control\"\r\n                                formControlName=\"password\" placeholder=\"Inserir palavra-passe\">\r\n                            <div *ngIf=\"form.controls.password.errors?.actualLength < form.controls.password.errors?.requiredLength && form.controls.password.touched\"\r\n                                class=\"text-danger\">A password não é forte o suficiente</div>\r\n                            <div *ngIf=\"form.controls.password.errors?.required && form.controls.password2.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input maxlength=\"120\" [class.borda]=\"!form.controls.password2.valid && form.controls.password.touched\" type=\"password\" class=\"inputPasswordLogin form-control\"\r\n                                formControlName=\"password2\" placeholder=\"Confirmar palavra-passe\">\r\n                            <div *ngIf=\"form.controls.password2.errors?.required && form.controls.password2.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                            <div *ngIf=\"form.controls.password2.errors?.actualLength < form.controls.password2.errors?.requiredLength && form.controls.password2.touched\"\r\n                                class=\"text-danger\">A password não é forte o suficiente</div>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <p class=\"serviceAdvice\">Ao fazer o registo, concordo com os Termos de Serviço e a Política de Privacidade da Volum. </p>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <button class=\"normalLogin\" type=\"submit\">Registar</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==2\">\r\n                    <div class=\"col-12\">\r\n                        <span class=\"registerAdvice1\">Registo efetuado com sucesso.</span>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-12\">\r\n                        <p class=\"registSuccess\">Obrigado por se registar!</p>\r\n                        <p class=\"registSuccess\">Irá receber um e-mail de confirmação. Clique no link para começar a utilizar a Volum.</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==1 || emailRegist==0\">\r\n                    <div class=\"col-12 footerLogin\">\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <span class=\"registerAdvice\">Já se encontra registado?</span>\r\n                    </div>\r\n                    <div class=\"col text-right btnRegister\">\r\n                        <button type=\"button\" class=\"registerBtn\">Entrar</button>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n            </form>\r\n\r\n\r\n            <!-- registar com e-mail -->\r\n\r\n\r\n\r\n\r\n            <!-- registar com e-mail -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row no-padding\">\r\n    <div class=\"col-12\">\r\n      <div class=\"for-input\">\r\n        <div class=\"headerInput\">Procurar pessoas/instituições ou ações de voluntariado</div>\r\n\r\n        <input type=\"text\"  (keyup.enter)=\"search(model)\" [(ngModel)]=\"model\" class=\"inputSearch\" placeholder=\"Pesquisa pessoas/instituições ou ações de voluntariado\">\r\n        <button\r\n          (keyup.enter)=\"search(model)\" (click)=\"search(model)\" class=\"btn btnConfirm btnConfirmPadding\">PESQUISAR</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"elements!=0\">\r\n    <div class=\"title-filter\">\r\n      Utilizadores\r\n    </div>\r\n    <div class=\"row card-people\">\r\n      <span *ngFor=\"let element of elements\">\r\n      <div *ngIf=\"element.type==1\" class=\"col-12\"> \r\n        <div  class=\"mini-card-social\">\r\n          <div class=\"for-img\">\r\n              <img *ngIf=\"element.type==1 || element.type==2\" class=\"thumbnail\" src=\"{{element?.photo_url}}\">\r\n          </div>\r\n          <div class=\"text-person\">\r\n          <div class=\"ts14 name-person\">{{element?.name}}</div>\r\n          <div class=\"ts13 desc-person\" >Utilizador</div>\r\n          </div>\r\n           <div class=\"btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\" (click)=\"openUser(element.id)\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n      </div>\r\n      </span>\r\n    </div>\r\n    <!--\r\n     <div class=\"col-12 text-center\">\r\n    <div class=\"moreResults\">\r\n          Carregar mais...\r\n    </div>\r\n  </div>\r\n  -->\r\n    <div class=\"title-filter\">\r\n      Instituições\r\n    </div>\r\n    <div class=\"row card-people\">\r\n      <span *ngFor=\"let element of elements\">\r\n      <div *ngIf=\"element.type==2\" class=\"col-12\"> \r\n        <div class=\"mini-card-social\">\r\n          <div class=\"for-img\">\r\n              <img class=\"thumbnail\" src=\"{{element?.photo_url}}\">\r\n          </div>\r\n          <div class=\"text-person\">\r\n          <div class=\"ts14 name-person\">{{element?.name}}</div>\r\n          <div class=\"ts13 desc-person\">Instituição</div>\r\n          </div>\r\n           <div class=\"btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\" (click)=\"openUser(element.id)\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n      </div>\r\n      </span>\r\n    </div>\r\n    <!--\r\n    <div class=\"col-12 text-center\">\r\n        <div class=\"moreResults\">\r\n          Carregar mais...\r\n        </div>\r\n      </div>\r\n      -->\r\n    <div class=\"title-filter\">\r\n      Ações de Voluntariado\r\n    </div>\r\n    <div class=\"row card-people\">\r\n      <span *ngFor=\"let element of elements\">\r\n      <div *ngIf=\"element.type==0\" class=\"col-12\"> \r\n        <div class=\"mini-card-social\">\r\n          <div class=\"for-img\">\r\n              <img  class=\"thumbnail4\" src=\"http://www.ids.edu.pt/wp-content/uploads/2017/03/bolsa-voluntariado-7.png\">\r\n          </div>\r\n          <div class=\"text-person\">\r\n          <div class=\"ts14 name-person\">{{element?.name}}</div>\r\n          <div class=\"ts13 desc-person\">Ação de Voluntariado</div>\r\n          </div>\r\n           <div class=\"btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\" (click)=\"openVolDetails(element.id)\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n      </div>\r\n      </span>\r\n    </div>\r\n   <!-- <div class=\"col-12 text-center\">\r\n      <div class=\"moreResults\">\r\n        Carregar mais...\r\n      </div>\r\n    </div>\r\n    -->\r\n  </div>\r\n  <div *ngIf=\"elements==0\">Não existem resultados.</div>\r\n\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row headerNotifications\">\r\n              <div class=\"col titleCard\">\r\n                Pedidos\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/3357_1123036710971_1800417_n.jpg?oh=ec245f1e04108ea03f280841e7f68113&oe=5987337C\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">Miguel Silva</span> pediu para te seguir.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              \r\n           \r\n              </div>\r\n            </div>\r\n             <div class=\"col text-right not-icon no-padding\">\r\n              \r\n                 <button class=\"btn btnCancel\">IGNORAR</button>\r\n                   <button class=\"btn btnConfirm\">ACEITAR</button>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/1907411_695457873857488_7989953224523266502_n.jpg?oh=7a72f65c8badd2409a0754e47dafe60e&oe=597BEF33\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">Vasco Coimbra</span> pediu para te seguir.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                 <button class=\"btn btnCancel\">IGNORAR</button>\r\n                   <button class=\"btn btnConfirm\">ACEITAR</button>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/12348043_1121276874551360_3925448066232133540_n.jpg?oh=3c6b1ad15e9a062b710ae58096445c97&oe=5973F4A1\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">Hugo Fontão</span> pediu para te seguir.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                 <button class=\"btn btnCancel\">IGNORAR</button>\r\n                   <button class=\"btn btnConfirm\">ACEITAR</button>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-volum\">\r\n    <!-- HEADER CARD -->\r\n    <div class=\"row no-margin\">\r\n        <div (click)=\"onSelect(userCreator)\" class=\"col card-user-image col-md-auto\">\r\n            <img src=\"{{avatar}}\" (error)=\"this.avatar = 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png'\">\r\n        </div>\r\n        <div class=\"col-6 col-lg-8 card-user-nd\">\r\n            <div *ngIf=\"verified==1\" class=\"card-user-name ts16\">\r\n                <a *ngIf=\"login\" class=\"clickable clickableName\" (click)=\"onSelect(userCreator)\">{{username}}</a>\r\n                <a *ngIf=\"!login\">{{username}}</a>\r\n                <button type=\"button\" class=\"btn btn-secondary verified\" placement=\"right\" ngbTooltip=\"Instituição verificada\">\r\n                <i class=\"material-icons md-18\">verified_user</i></button></div>\r\n            <div *ngIf=\"verified==0\" class=\"card-user-name ts16\"><a (click)=\"onSelect(userCreator)\">{{username}}</a> </div>\r\n            <div class=\"card-date ts14\">{{dateCreation | timeAgo}}</div>\r\n        </div>\r\n        <div *ngIf=\"login==1\" class=\"col card-option text-right\">\r\n            <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n            <md-menu #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                <md-icon>share</md-icon>\r\n                <span>Partilhar</span>\r\n              </button>\r\n                <button md-menu-item>\r\n                <md-icon>do_not_disturb</md-icon>\r\n                <span>Denunciar</span>\r\n              </button>\r\n                <button md-menu-item>\r\n                <md-icon>visibility_off</md-icon>\r\n                <span>Bloquear</span>\r\n              </button>\r\n            </md-menu>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER CARD -->\r\n\r\n    <!-- CONTENT CARD -->\r\n    \r\n        <img class=\"imgSliderInd \" [src]=\"photos[0]\">\r\n\r\n    <div class=\"row no-margin card-volum-content\" (click)=\"openVolDetails(idVol)\">\r\n        <div class=\"col ts18 card-volum-title\">\r\n            {{title}}\r\n        </div>\r\n        <div class=\"col-12 ts14 card-volum-description\">\r\n            {{description}}\r\n        </div>\r\n    </div>\r\n\r\n    <!-- /CONTENT CARD -->\r\n\r\n    <!-- FOOTER CARD -->\r\n    <div class=\"card-volum-footer\">\r\n        <div class=\"cardLikesContent\">\r\n            <div class=\"cardLikes\">\r\n                <md-icon (click)=\"dislike(idVol)\" *ngIf=\"login && (likeState==1)\" class=\"btnLike\">favorite</md-icon>\r\n                <md-icon (click)=\"like(idVol)\" *ngIf=\"login && (!likes || likeState==0)\" class=\"btnLike btnBlack\">favorite_border</md-icon>\r\n                <md-icon *ngIf=\"!login\" class=\"btnLike\">favorite</md-icon>\r\n            </div>\r\n            <!--<div class=\"likesNumber ts12\">\r\n            {{likes}}\r\n        </div>\r\n        -->\r\n            <!--<div *ngIf=\"login &&type=='private' && likes>=1\" class=\"likeImgs\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar3.png\">\r\n            <img src=\"assets/imgs/avatar04.png\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar.png\">\r\n        </div>\r\n        -->\r\n            <div *ngIf=\"login &&  type=='private'\" class=\"likesText ts12\">\r\n                <!-- <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto -->\r\n                <span *ngIf=\"likeState==1\" class=\"likesTestMe\">Tu</span>\r\n                <span *ngIf=\"likeState==1 && likes<2\">gostas disto.</span>\r\n                <span *ngIf=\"likeState==1 && likes>=2\">e mais</span>\r\n                <span *ngIf=\"likeState==1 && likes>=2\">{{likes-1}} pessoa<span *ngIf=\"likes>2\">s</span> gostam disto.</span>\r\n                <span *ngIf=\"likeState==0 && likes>=1\">{{likes}} pessoa<span *ngIf=\"likes>=2\">s</span> gosta\r\n                <span *ngIf=\"likes>=2\">m\r\n                    </span> disto.\r\n                </span>\r\n                <span *ngIf=\"likeState==0 && !likes\">Sê o primeiro a gostar disto!</span>\r\n            </div>\r\n            <div *ngIf=\"!login\" class=\"likesText ts12\">\r\n                <span *ngIf=\"likes>=1\">{{likes}} pessoa<span *ngIf=\"likes>=1\">s</span> gostam disto.</span>\r\n                <span *ngIf=\"!likes || likes==0\">Sê o primeiro a gostar disto. <span (click)=\"openRegister()\" class=\"likesTestMe clickable\" style=\"cursor:pointer\">Regista-te já</span></span>\r\n\r\n            </div>\r\n        </div>\r\n        <!--\r\n        <div *ngIf=\"type=='private'\" class=\"cardComments ts12\">\r\n            <div>\r\n                <md-icon class=\"btnComments\">textsms</md-icon>\r\n            </div>\r\n            <div (click)=\"openComments()\" class=\"textComments\"><span class=\"commentsNumber\">16</span> comentários</div>\r\n        </div>\r\n        -->\r\n        <div class=\"btnView\">\r\n            <button md-raised-button (click)=\"openVolDetails(idVol)\">VER</button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- /FOOTER CARD -->\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\" id=\"template-search\">\r\n        <div (click)=\"navigate(r.geometry.location.lat, r.geometry.location.lng)\" class=\"row no-padding content-search\">\r\n            <span class=\"searched\"> {{r.formatted_address}}</span>\r\n        </div>\r\n</ng-template>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"row\">\r\n            <div class=\"col titleCard\">\r\n              Editar ação de voluntariado\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"card-block\">\r\n        <form class=\"float-label\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\" >\r\n          <div class=\"row\">\r\n              <div class=\"col-12 inputProfile no-margin\">\r\n                <div class=\"control\">\r\n                 <input type=\"text\" minlength=\"10\" maxlength=\"60\" formControlName=\"name\" class=\"\" name=\"title\" placeholder=\"Título da ação de voluntariado\" [(ngModel)]=\"name\" required />\r\n                 <label [class.error-label]=\"!form.controls.name.valid && form.controls.name.touched\" for=\"title\">\r\n                   Título\r\n                    <span class=\"text-error\" *ngIf=\"form.controls.name.errors?.maxlength && form.controls.name.touched\" >\r\n                    - - Inválido\r\n                    </span>\r\n                    <span class=\"text-error\" *ngIf=\"form.controls.name.errors?.minlength && form.controls.name.touched\" >\r\n                     - Inválido\r\n                    </span>\r\n\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <div class=\"control\">\r\n                  <textarea class=\"textAreaProfile\" minlength=\"50\" formControlName=\"description\" name=\"textarea\" required rows=\"4\" [(ngModel)]=\"desc\" placeholder=\"Descrição\">Descrição das funções do voluntário</textarea>\r\n                  <label [class.error-label]=\"!form.controls.description.valid && form.controls.description.touched\" for=\"textarea\">\r\n                    Descrição\r\n                    <span *ngIf=\"form.controls.description.errors?.minlength && form.controls.description.touched\" class=\"text-error\">- Inválido.</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n            <div class=\"col-6 inputProfile\" >\r\n              <select name=\"categorie\" class=\"form-control select-input inputText form-control-lg disabled\" formControlName=\"category\">\r\n                <option *ngFor=\"let category of categories\" [value]='category.id_category'>{{category.name}}</option>\r\n              </select>\r\n               <label [class.error-label]=\"!form.controls.category.valid && form.controls.category.touched\" for=\"categorie\" class=\"label-for-select\">\r\n                 Categoria\r\n                 </label>\r\n            </div>\r\n              \r\n               <div class=\"col-6 inputProfile\">\r\n              <select class=\"form-control inputText  select-input form-control-lg disabled\" formControlName=\"insurance\">\r\n                <option selected value=\"1\">Sim</option>\r\n                <option value=\"0\">Não</option>\r\n              </select>\r\n              <label [class.error-label]=\"!form.controls.insurance.valid && form.controls.insurance.touched\" for=\"insurance\" class=\"label-for-select\">\r\n                Seguro\r\n              </label>\r\n            </div>\r\n\r\n        \r\n     \r\n\r\n                 <div class=\"col-12 inputProfile\">\r\n                <div class=\"control\">\r\n                 <input type=\"text\" class=\"\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"model\" (keyup.enter)=\"navigate(model.geometry.location.lat, model.geometry.location.lng)\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" name=\"localization\" placeholder=\"Insira a localização do voluntariado\"  required />\r\n                 <label  for=\"localization\">Localização\r\n                 </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" ></sebm-google-map-marker>\r\n                </sebm-google-map>\r\n             \r\n               </div>\r\n\r\n\r\n               <div class=\"col-6 inputProfile2\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\" \r\n                           name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"date_begin\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                   <label  [class.error-label]=\"!form.controls.date_begin.valid && form.controls.date_begin.touched\" for=\"dp\" class=\"label-for-select\">\r\n                     Data de início\r\n                    </label>  \r\n                </div>\r\n            </div>\r\n\r\n        <div class=\"col-6 inputProfile2\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\"\r\n                           name=\"dp2\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"date_end\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d2.toggle()\" >\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                   <label for=\"dp2\" [class.error-label]=\"!form.controls.date_end.valid && form.controls.date_end.touched\" class=\"label-for-select\">\r\n                     Data de fim\r\n                     <span *ngIf=\"form.controls.date_end.errors?.pattern && form.controls.date_end.touched\" class=\"text-error\">- - Inválido.</span>\r\n                     </label>\r\n                </div>\r\n            </div>\r\n\r\n\r\n  \r\n\r\n          <div  class=\"col-6 inputProfile\">\r\n                  <div class=\"control\">\r\n                    <input type=\"text\" class=\"\" name=\"date_begin\" placeholder=\"Hora de entrada\" [(ngModel)]=\"start_time\" formControlName=\"start_time\" value=\"09:00\" required />\r\n                     <label [class.error-label]=\"!form.controls.start_time.valid && form.controls.start_time.touched\" for=\"date_begin\">\r\n                       Hora de entrada\r\n                       <span  *ngIf=\"form.controls.start_time.errors?.pattern && form.controls.start_time.touched\" class=\"text-error\">- - Inválido.</span>\r\n                       </label>\r\n                  </div>              \r\n                  \r\n                </div>\r\n          <div  class=\"col-6 inputProfile\">\r\n                  <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" name=\"date_end\" placeholder=\"Hora de saída\"  [(ngModel)]=\"end_time\" formControlName=\"end_time\" value=\"17:00\" required />\r\n                     <label [class.error-label]=\"!form.controls.end_time.valid && form.controls.end_time.touched\" for=\"date_end\">\r\n                       Hora de saída\r\n                       <span *ngIf=\"form.controls.end_time.errors?.pattern && form.controls.end_time.touched\" class=\"text-error\">- - Inválido.</span>\r\n                       </label>\r\n                  </div>          \r\n                </div>\r\n          <div class=\"col-12 inputProfile\">\r\n                  <div class=\"control\">\r\n                  <input type=\"number\" class=\"\" name=\"duration\" placeholder=\"Duração diária em horas\" [(ngModel)]=\"duration\" formControlName=\"duration\" value=\"5\" required />\r\n                     <label for=\"duration\">Duração</label>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n         \r\n\r\n\r\n\r\n               \r\n\r\n\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnDescart\" routerLink=\"/\">CANCELAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <button class=\"btn btn-outline-primary btnSave\" type=\"submit\">GUARDAR</button>\r\n              </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"footerText\">\r\n      @ Volum, Inc.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<!-- APAGAR AÇÃO -->\r\n<div *ngIf=\"context.type==1\">\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\">\r\n            <div>\r\n                {{this.context.date | date:\"MMM\" | uppercase}}\r\n            </div>\r\n            <div>\r\n                {{this.context.date | date:\"d\"}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\">\r\n            <div class=\"modalTitleDesc\">\r\n                {{this.context.name}}\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n               {{this.context.date | date:\"fullDate\"}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-end-content row\">\r\n        <div class=\"modal-content-title col-12\">\r\n            Cancelar ação de voluntariado\r\n        </div>\r\n        <div class=\"modal-content-desc col-12\" style=\"margin-top:2px; margin-bottom:2px;\">\r\n            Tem a certeza que quer cancelar esta ação de voluntariado? Se sim, indique o motivo para informar os seus participantes.\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <textarea rows=\"4\" class=\"modal-textarea\" placeholder=\"Escrever motivo de cancelamento da ação...\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 modal-end-footer text-right\">\r\n            <button class=\"btn btnCancel\" (click)=\"close()\">NÃO</button>\r\n            <button class=\"btn btnConfirm\" (click)=\"deleteAction(this.context.idVol)\">SIM</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- FINALIZAR -->\r\n<div *ngIf=\"context.type==2\">\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\">\r\n            <div>\r\n                MAR\r\n                <!--{{volDetails?.date_begin | date:\"MMM\" | uppercase}}-->\r\n            </div>\r\n            <div>\r\n                23\r\n                <!--{{volDetails?.date_begin | date:\"d\"}}-->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\">\r\n            <div class=\"modalTitleDesc\">\r\n                Ajudar os pobres\r\n                <!--{{volDetails?.name}}-->\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n                sabado, 29 de Abril de 2019\r\n                <!--{{volDetails?.date_begin | date:\"fullDate\"}}-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-end-content row\">\r\n        <div class=\"modal-content-title col-12\">\r\n            Finalizar Ação de Voluntariado\r\n        </div>\r\n        <div class=\"modal-content-desc col-12\">\r\n            Se desejar, pode inserir um sumário desta ação de voluntariado. Todos os participantes serão notificados.\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <textarea rows=\"4\" class=\"modal-textarea\" placeholder=\"Escrever sumário descritivo da ação...\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 modal-content-title evaluation\">\r\n            Avaliar participantes\r\n            <form>\r\n                <div class=\"evaluation-option\">\r\n                    Atribuir a mesma classificação a todos os participantes:\r\n                    <div class=\"user-rate-all\">\r\n                        <md-icon (click)=\"evAll(1)\" class=\"yellow\" *ngIf=\"evalAll!=0\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(1)\" class=\"grey\" *ngIf=\"evalAll<1\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(2)\" class=\"yellow\" *ngIf=\"evalAll>=2\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(2)\" class=\"grey\" *ngIf=\"evalAll<2\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(3)\" class=\"yellow\" *ngIf=\"evalAll>=3\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(3)\" class=\"grey\" *ngIf=\"evalAll<3\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(4)\" class=\"yellow\" *ngIf=\"evalAll>=4\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(4)\" class=\"grey\" *ngIf=\"evalAll<4\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(5)\" class=\"yellow\" *ngIf=\"evalAll>=5\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(5)\" class=\"grey\" *ngIf=\"evalAll<5\">star_rate</md-icon>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n            <div class=\"individual\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let person of people; let i=index\" class=\"listPerson no-border no-margin\">\r\n                        <div class=\"row no-margin\">\r\n                            <div class=\"card-user-image\">\r\n                                <img src=\"../assets/imgs/avatar04.png\">\r\n                                <span class=\"candidateName\">Pedro Araújo</span>\r\n                            </div>\r\n                            <div class=\"col text-right no-padding\">\r\n                                <div class=\"user-rate\">\r\n                                    <md-icon (click)=\"ev(i,1)\" class=\"yellow\" *ngIf=\"person?.eval!='NULL'\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,1)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<1\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,2)\" class=\"yellow\" *ngIf=\"person?.eval>=2\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,2)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<2\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,3)\" class=\"yellow\" *ngIf=\"person?.eval>=3\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,3)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<3\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,4)\" class=\"yellow\" *ngIf=\"person?.eval>=4\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,4)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<4\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,5)\" class=\"yellow\" *ngIf=\"person?.eval>=5\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,5)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<5\">star_rate</md-icon>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 modal-end-footer text-right\">\r\n            <button class=\"btn btnCancel\">CANCELAR</button>\r\n            <button class=\"btn btnConfirm\">FINALIZAR</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modal-invite works!\r\n</p>\r\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n    <div class=\"col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='{{user?.photo}}'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"{{user?.photo}}\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"col user-rate\">\r\n                    <md-icon class=\"rate1\">star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                </div>\r\n            <div class=\"friendsName\">\r\n              {{user?.username}}\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Sever do Vouga, Aveiro\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-12 details\">\r\n      <div class=\"friendsCardNumber\">E-mail</div>\r\n      <div class=\"friendsCardNumberDesc\">{{user?.email}}</div>\r\n    </div>\r\n    <div class=\"col-12 row-details\">\r\n      <div class=\"friendsCardNumber\">Data de Nascimento</div>\r\n      <div class=\"friendsCardNumberDesc\">18 de Janeiro de 1996</div>\r\n    </div>\r\n    <div class=\"col-md-8 offset-md-2 row-details\">\r\n      <div class=\"friendsCardNumber\">Descrição</div>\r\n      <div class=\"friendsCardNumberDesc\">Sou um rapaz natural de Aveiro e sempre procurei ajudar aqueles que necessitam. Gosto muito de voluntariado.</div>\r\n    </div>\r\n\r\n    <div class=\"col-6 text-right no-padding btn-modal\" style=\"padding-right:5px;\">\r\n      <button class=\"btn btnCancel\" (click)=\"close()\">FECHAR</button>\r\n    </div>\r\n    <div class=\"col-6 btn-modal no-padding\" style=\"padding-left:5px; text-align:left\">\r\n      <button class=\"btn btnConfirm\" (click)=\"onSelect(userCreator)\">VER</button>\r\n    </div>\r\n    \r\n\r\n  </div>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<!-- CANDIDATOS -->\r\n<div *ngIf=\"context.type==1\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Candidatos\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let candidate of candidates\" class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"{{candidate?.photo_url}}\">\r\n                <span class=\"candidateName\">{{candidate?.name}}</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary btnCancel\">RECUSAR</button>\r\n                <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\">ACEITAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONFIRMADOS -->\r\n\r\n<div *ngIf=\"context.type==2\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Confirmados\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let confirmed of confirmeds\" class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"{{confirmed?.photo_url}}\">\r\n                <span class=\"candidateName\">{{confirmed?.name}}</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnRemove\">REMOVER</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONVITES -->\r\n\r\n<div *ngIf=\"context.type==3\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Convites\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"../assets/imgs/avatar04.png\">\r\n                <span class=\"candidateName\">Pedro Araújo</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnCancel\">CANCELAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"../assets/imgs/avatar04.png\">\r\n                <span class=\"candidateName\">Pedro Araújo</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnCancel\">CANCELAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"../assets/imgs/avatar04.png\">\r\n                <span class=\"candidateName\">Pedro Araújo</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnCancel\">CANCELAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- REMOVER  CONFIRMADOS-->\r\n<div *ngIf=\"context.type==4\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Remover {{context.name}}\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que deseja remover {{context.name}} dos confirmados?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\" (click)=\"close()\">NÃO</button>\r\n        <button class=\"btn btnConfirm\" (click)=\"denyCandidate(this.context.idUser)\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- REMOVER  CANDIDATOS-->\r\n<div *ngIf=\"context.type==5\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Recusar {{context.name}}\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que deseja recusar {{context.name}} como voluntário?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\" (click)=\"close()\">NÃO</button>\r\n        <button class=\"btn btnConfirm\" (click)=\"denyCandidate(this.context.idUser)\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONFIRMAR CANCELAR CANDIDATURA -->\r\n<div *ngIf=\"context.type==6\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Cancelar candidatura\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que quer cancelar a sua candidatura para a ação de voluntariado \"{{context.nameVol}}\"?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\" (click)=\"close()\">NÃO</button>\r\n        <button class=\"btn btnConfirm\" (click)=\"cancelApply(context.idVol)\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- CONFIRMAR CANDIDATURA -->\r\n<div *ngIf=\"context.type==7\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Candidatar a Ação de voluntariado\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que se quer candidatar como voluntário para a ação de voluntariado \"{{context.nameVol}}\"?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\" (click)=\"close()\">NÃO</button>\r\n        <button class=\"btn btnConfirm\" (click)=\"apply(context.idVol)\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Likes -->\r\n<div *ngIf=\"context.type==8\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Gostos\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let like of likes\" class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image full-width\">\r\n                <img src=\"{{like?.photo_url}}\">\r\n                <span class=\"candidateName\">{{like?.name}}</span>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div class=\"no-padding\">\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\" *ngIf=\"ready\">\r\n            <div>\r\n                {{volDetails?.date_begin | date:\"MMM\" | uppercase}}\r\n            </div>\r\n            <div>\r\n                {{volDetails?.date_begin | date:\"d\"}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\" *ngIf=\"ready\">\r\n            <div class=\"modalTitleDesc\">\r\n                {{volDetails?.name}}\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n                {{volDetails?.date_begin | date:\"fullDate\"}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modalContainer row\" [class.loadingHeight]=\"!ready\">\r\n    <div class=\"col-12\" *ngIf=\"!ready\">\r\n        <div class=\"sk-fading-circle\">\r\n            <div class=\"sk-circle1 sk-circle\"></div>\r\n            <div class=\"sk-circle2 sk-circle\"></div>\r\n            <div class=\"sk-circle3 sk-circle\"></div>\r\n            <div class=\"sk-circle4 sk-circle\"></div>\r\n            <div class=\"sk-circle5 sk-circle\"></div>\r\n            <div class=\"sk-circle6 sk-circle\"></div>\r\n            <div class=\"sk-circle7 sk-circle\"></div>\r\n            <div class=\"sk-circle8 sk-circle\"></div>\r\n            <div class=\"sk-circle9 sk-circle\"></div>\r\n            <div class=\"sk-circle10 sk-circle\"></div>\r\n            <div class=\"sk-circle11 sk-circle\"></div>\r\n            <div class=\"sk-circle12 sk-circle\"></div>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"ready\">\r\n\r\n\r\n        <div class=\"card-user-image col-md-auto\">\r\n            <img src={{volDetails?.user.photo_url}}>\r\n        </div>\r\n        <div class=\"card-user-nd\">\r\n            <div><span class=\"card-user-name ts16 pointer\" data-dismiss=\"dialog\" (click)=\"onSelect(volDetails.user.id_user)\">{{volDetails?.user.name}}</span>\r\n                <span class=\"ts14 card-user-desc\"> criou o </span>\r\n                <span class=\"card-user-event ts14\">evento</span>\r\n            </div>\r\n            <div class=\"card-date ts13\">{{volDetails?.date_creation | date:\"d/M\"}} às {{volDetails?.date_creation | date:\"shortTime\"}}</div>\r\n        </div>\r\n        <div class=\"col text-right no-padding\">\r\n            <!-- <button class=\"btn btnCandidate\" (click)=\"apply(volDetails.id_vol)\" *ngIf=\"state == 0\">CANDIDATAR</button> -->\r\n            <div *ngIf=\"volDetails.user.id_user!=id_user\">\r\n                <button class=\"btn pointer btnCandidate\" (click)=\"openRemoveConfirm(7, volDetails.name, id_user, volDetails.id_vol)\" *ngIf=\"volDetails.active==1 && state == 0\">CANDIDATAR</button>\r\n                <button class=\"btn pointer btnRemove\" (click)=\"openRemoveConfirm(6, volDetails.name, id_user, volDetails.id_vol)\" *ngIf=\"volDetails.active==1 && state == 1 && !candCancel\">CANCELAR CANDIDATURA</button>\r\n                <button class=\"btn pointer btnGreen \" *ngIf=\"volDetails.active==1 && state == 2\">CONFIRMADO COMO PARTICIPANTE</button>\r\n                <button class=\"btn pointer btnGreenOut\" *ngIf=\"volDetails.active==1 && state == 3\">CANDIDATURA ENVIADA COM SUCESSO</button>\r\n                <button disabled class=\"btn btnCancel\" *ngIf=\"volDetails.active==0\">AÇÃO FINALIZADA</button>\r\n                <button disabled class=\"btn btnCancel\" *ngIf=\"volDetails.active==1 && state == 4\">CANDIDATURA REJEITADA</button>\r\n            </div>\r\n              <div *ngIf=\"volDetails.user.id_user==id_user\">\r\n                <button class=\"btn pointer btnCandidate\" (click)=\"goDetails(volDetails.id_vol)\" *ngIf=\"volDetails.active==1\">ÁREA DE GESTÃO</button>\r\n                <button disabled class=\"btn btnCancel\" *ngIf=\"volDetails.active==0\">AÇÃO FINALIZADA</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"modalTextArea col-12 no-padding\">\r\n            <div class=\"ts14 col-12 no-padding\" style=\"font-weight: bold\">\r\n                {{volDetails?.name}}\r\n            </div>\r\n            <div class=\"ts13 col-12 no-padding\">\r\n                {{volDetails?.description}}\r\n            </div>\r\n            <div class=\"details-vol\">\r\n                <span class=\"typeVol\">Solidariedade Social</span> <span class=\"insuBool\">Seguro</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"sectionDatePlace container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 no-padding\" style=\"display:flex\">\r\n                    <div style=\"display:flex; margin-top:5px\">\r\n                        <div>\r\n                            <i class=\"material-icons iconDate\">query_builder</i>\r\n                        </div>\r\n                        <div class=\"descDatePlace\">\r\n                            <div class=\"daysEvent ts13\" *ngIf=\"!volDetails?.date_end\">\r\n                                Início a {{volDetails?.date_begin | date:\"d\"}} de {{volDetails?.date_begin | date:\"MMMM\"}}\r\n                            </div>\r\n                            <div class=\"daysEvent ts13\" *ngIf=\"volDetails?.date_end\">\r\n                                {{volDetails?.date_begin | date:\"d\"}} de {{volDetails?.date_begin | date:\"MMMM\"}} - {{volDetails?.date_end | date:\"d\"}} de\r\n                                {{volDetails?.date_end | date:\"MMMM\"}}\r\n                            </div>\r\n                            <div class=\"daysEventFull ts13\" *ngIf=\"volDetails?.duration > 1\">\r\n                                {{volDetails?.duration}} horas diárias\r\n                            </div>\r\n                            <div class=\"daysEventFull ts13\" *ngIf=\"volDetails?.duration < 2\">\r\n                                {{volDetails?.duration}} hora diária\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"margin-left: auto; display:flex; margin-top:5px\">\r\n                        <div>\r\n                            <i class=\"material-icons iconDate\">place</i>\r\n                        </div>\r\n                        <div class=\"descDatePlace \">\r\n                            <div *ngIf=\"address\" class=\"daysEvent ts13\" style=\"padding-top:10px\">\r\n                                {{address}}\r\n                            </div>\r\n                            <div *ngIf=\"!addressName && !address\" class=\"daysEvent ts13\" style=\"padding-top:9px\">Sem localização definida</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 no-padding mapContent\" *ngIf=\"login\">\r\n\r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n            </sebm-google-map>\r\n\r\n        </div>\r\n\r\n        <div class=\"container friendsContainer\" *ngIf=\"login\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 no-padding\" style=\"display:flex; margin-top:5px\">\r\n                    <div>\r\n                        <div class=\"daysEventFull ts13\" (click)=\"openCandidates(1, volDetails.id_vol)\" [class.pointer]=\"numberCandidates > 0\">\r\n                            <span class=\"numberYellow\">{{numberCandidates}}</span><span class=\"normalText\"> candidatos</span>\r\n                        </div>\r\n                        <div *ngIf=\"login\" class=\"likeImgs\">\r\n                            <img *ngFor=\"let candidate of candidates\" src=\"{{candidate?.photo_url}}\" (click)=\"openProfileModal(candidate?.id_user)\" class=\"pointer\">\r\n                            <div *ngIf=\"numberCandidates>10\" class=\"see-all-participants\" (click)=\"openCandidates(1, volDetails.id_vol)\">{{numberCandidates-10}}</div>\r\n                            <div *ngIf=\"!numberCandidates\" class=\"ts13\" style=\"margin-left: -10px; margin-top:5px\">Não existem candidatos.</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"\" style=\"text-align:right; margin-left:auto\">\r\n                        <div class=\"ts13\" (click)=\"openCandidates(2, volDetails.id_vol)\" [class.pointer]=\"numberConfirmeds > 0\">\r\n                            <span class=\"numberBlue\">{{numberConfirmeds}}</span><span class=\"normalText\"> confirmados</span>\r\n                        </div>\r\n                        <div *ngIf=\"login\" class=\"likeImgs Rgt\">\r\n                            <img *ngFor=\"let confirmed of confirmeds\" src=\"{{confirmed?.photo_url}}\" (click)=\"openProfileModal(confirmed?.id_user)\" class=\"pointer\">\r\n                            <div *ngIf=\"numberConfirmeds>10\" class=\"see-all-participants\" (click)=\"openCandidates(2, volDetails.id_vol)\">{{numberConfirmeds-10}}</div>\r\n                            <div *ngIf=\"!numberConfirmeds\" class=\"ts13\" style=\"margin-top:5px\">Não existem confirmados.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-volum-footer no-padding-side\" *ngIf=\"login\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 no-padding\" style=\"display:flex; align-items:center\">\r\n                        <div class=\"cardLikes\">\r\n                            <md-icon (click)=\"dislike(this.context.idVol)\" *ngIf=\"likeState==1\" class=\"btnLike\">favorite</md-icon>\r\n                            <md-icon (click)=\"like(this.context.idVol)\" *ngIf=\"!numberLikes || likeState==0\" class=\"btnLike btnBlack\">favorite_border</md-icon>\r\n                        </div>\r\n                        <div *ngIf=\"login\" class=\"likesText ts12\">\r\n                            <!-- <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto -->\r\n                            <span *ngIf=\"likeState==1\" class=\"likesTestMe\">Tu</span>\r\n                            <span *ngIf=\"likeState==1 && numberLikes<2\">gostas disto.</span>\r\n                            <span *ngIf=\"likeState==1 && numberLikes>=2\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">e mais</span>\r\n                            <span *ngIf=\"likeState==1 && numberLikes>=2\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">{{numberLikes-1}} pessoa<span *ngIf=\"numberLikes>2\">s</span>                            gostam disto.</span>\r\n                            <span *ngIf=\"likeState==0 && numberLikes>=1\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=2\">s</span>                            gosta\r\n                            <span *ngIf=\"numberLikes>=2\">m\r\n                                    </span> disto.\r\n                            </span>\r\n                            <span *ngIf=\"likeState==0 && !numberLikes\">Sê o primeiro a gostar disto!</span>\r\n                        </div>\r\n                        <div *ngIf=\"!login\" class=\"likesText ts12\">\r\n                            <span *ngIf=\"numberLikes>=1\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=1\">s</span> gostam\r\n                            disto.\r\n                            </span>\r\n                            <span *ngIf=\"!numberLikes || numberLikes==0 \">Sê o primeiro a gostar disto. <span (click)=\"openRegister()\" class=\"likesTestMe clickable\" style=\"cursor:pointer\">Regista-te já</span></span>\r\n\r\n                        </div>\r\n                        <div (click)=\"getComments()\" class=\"text-right\" style=\"margin-left:auto\">\r\n                            <div class=\"cardComments ts12\">\r\n                                <div>\r\n                                    <md-icon class=\"btnComments\">textsms</md-icon>\r\n                                </div>\r\n                                <div *ngIf=\"numberComments>0\" class=\"textComments\"><span class=\"commentsNumber\">{{numberComments}}</span> comentário<span *ngIf=\"numberComments>1\">s</span></div>\r\n                                <div *ngIf=\"numberComments==0\" class=\"textComments\">Sê o primeiro a comentar!</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n<div class=\"row card-Comments\" *ngIf=\"showComments && login\">\r\n    <div class=\"scrollArea col-12 no-padding\">\r\n        <div class=\"col-12 comments-back\" *ngFor=\"let comment of comments\">\r\n            <div class=\"row comments-header\">\r\n                <div class=\"col card-user--comments-image col-md-auto\">\r\n                    <img src=\"{{comment.photo_url}}\">\r\n                </div>\r\n                <div class=\"col-8 card-user-nd\">\r\n                    <div class=\"card-user-name-comments ts13\">{{comment.name}}</div>\r\n                    <div class=\"card-date-comments ts12\">10 horas</div>\r\n                </div>\r\n                <div class=\"col no-padding card-option-comments text-right\">\r\n                    <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                    <md-menu #menu=\"mdMenu\">\r\n                        <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                        <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                        <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                    </md-menu>\r\n                </div>\r\n            </div>\r\n            <div class=\"row comments-content\">\r\n                <div class=\"col-12 ts13\">\r\n                    {{comment.message}}\r\n                </div>\r\n            </div>\r\n            <div class=\"borderComments\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 insert-comment \">\r\n        <div class=\"row\" style=\"padding-left:15px; padding-right:15px;\">\r\n            <div class=\"col no-padding card-user--comments-image card-user-comments-image-comments\">\r\n                <img src=\"{{userLogin.photo}}\">\r\n            </div>\r\n            <div class=\"col no-padding\">\r\n                <md-input-container class=\"width100\">\r\n                    <input autofocus mdInput [(ngModel)]=\"comentario\" (keyup.enter)=\"sendComment(comentario)\">\r\n                </md-input-container>\r\n            </div>\r\n            <!--<div class=\"col-1 btnSend text-right no-padding\">\r\n                    \r\n                </div>-->\r\n\r\n            <button (click)=\"sendComment(comentario)\" type=\"submit\" class=\"btnSendIcon btnSendColorGrey\">\r\n                   <md-icon class=\"send\">send</md-icon>\r\n                </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ })

},[875]);
//# sourceMappingURL=main.bundle.js.map