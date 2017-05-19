webpackJsonp([7,10],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(6);
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
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(6)]],
            password2: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(6)]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(2)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(2)]],
        });
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.form.controls.email.markAsTouched();
        this.form.controls.password.markAsTouched();
        this.form.controls.password2.markAsTouched();
        this.form.controls.name.markAsTouched();
        this.form.controls.lastname.markAsTouched();
        console.log("FORMS", this.form);
        if (valid) {
            this.auth.register(value)
                .then(function (res) {
                console.log("result", res);
                _this.router.navigate(['/profile/', res.id_user]);
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
        styles: [__webpack_require__(627)],
        template: __webpack_require__(645),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DialogRef */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/register.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vol_details_modal_vol_details_modal_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_card_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal_view_all_modal_view_all_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_end_modal_end_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_profile_modal_profile_component__ = __webpack_require__(475);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */],
            __WEBPACK_IMPORTED_MODULE_15__modal_end_modal_end_component__["a" /* ModalEndComponent */],
            __WEBPACK_IMPORTED_MODULE_16__modal_profile_modal_profile_component__["a" /* ModalProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_10__card_card_component__["a" /* CardComponent */], __WEBPACK_IMPORTED_MODULE_6__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_14__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __WEBPACK_IMPORTED_MODULE_15__modal_end_modal_end_component__["a" /* ModalEndComponent */], __WEBPACK_IMPORTED_MODULE_16__modal_profile_modal_profile_component__["a" /* ModalProfileComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["LOCALE_ID"], useValue: "pt-PT" }, __WEBPACK_IMPORTED_MODULE_13__shared_service__["a" /* SharedService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/shared.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
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
}(__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalViewAllComponent = (function () {
    function ModalViewAllComponent(dialog, /*private volsService: VolDetailsModalService,*/ SharedService) {
        this.dialog = dialog;
        this.SharedService = SharedService;
        this.context = dialog.context;
        this.context.isBlocking = false;
    }
    ModalViewAllComponent.prototype.ngOnInit = function () {
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
    return ModalViewAllComponent;
}());
ModalViewAllComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'view-all-modal',
        template: __webpack_require__(652),
        styles: [__webpack_require__(634)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["d" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], ModalViewAllComponent);

var _a, _b;
/*
     this.volsService.getVol(this.context.idVol)
      .then(res => {
        this.volDetails = res.vol;
        console.log(this.volDetails);
      })
      .catch(err => console.log(err));
  }
*/
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-view-all.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_view_all_modal_view_all_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Auth_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vol_details_modal_service__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
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
}(__WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var VolDetailsModalComponent = (function () {
    function VolDetailsModalComponent(overlay, vcRef, modal, dialog, volsService, authService) {
        this.modal = modal;
        this.dialog = dialog;
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
                console.log(_this.volDetails);
                _this.checkState(_this.context.idVol);
                _this.getAddress(_this.volDetails.lat, _this.volDetails.long);
                _this.lat = _this.volDetails.lat;
                _this.lng = _this.volDetails.long;
                _this.ready = true;
            })
                .catch(function (err) { return console.log(err); });
        });
    };
    VolDetailsModalComponent.prototype.ngOnInit = function () {
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
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_modal__["b" /* overlayConfigFactory */])({ type: type, idVol: id_vol }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VolDetailsModalComponent.prototype.openCandidates = function (type, id_vol) {
        if ((type == 1 && this.numberCandidates > 0) || (type == 2 && this.numberConfirmeds > 0)) {
            return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_modal__["b" /* overlayConfigFactory */])({ type: type, idVol: id_vol }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
        }
    };
    VolDetailsModalComponent.prototype.openRemoveConfirm = function (type, name, id_user, idVol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_modal__["b" /* overlayConfigFactory */])({ type: type, idVol: idVol, nameVol: name, id_user: id_user }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VolDetailsModalComponent.prototype.sendComment = function (comment) {
        var _this = this;
        if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {
            this.volsService.sendComment(comment, this.context.idVol).then(function (res) {
                _this.comentario = '';
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
            if (this.numberComments > 0) {
                this.volsService.getComments(this.context.idVol)
                    .then(function (res) {
                    _this.comments = res.comments;
                    console.log(res);
                })
                    .catch(function (err) { return console.log(err); });
            }
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
        this.likeState = 1;
        this.numberLikes++;
        this.volsService.like(id_vol).then(function (res) {
            console.log(res);
        });
    };
    VolDetailsModalComponent.prototype.dislike = function (id_vol) {
        this.likeState = 0;
        this.numberLikes--;
        this.volsService.dislike(id_vol).then(function (res) {
            console.log(res);
        });
    };
    VolDetailsModalComponent.prototype.getAddress = function (lat, long) {
        var _this = this;
        if (lat && long) {
            this.volsService.getAddress(lat, long)
                .then(function (res) {
                _this.addressData = res.results;
                _this.address = _this.addressData[0].formatted_address;
                _this.addressName = _this.addressData[0].address_components[0].short_name;
            });
        }
    };
    VolDetailsModalComponent.prototype.apply = function (id_vol) {
        var _this = this;
        console.log(id_vol);
        this.volsService.apply(this.id_user, id_vol).then(function (res) {
            _this.state = 3;
            console.log(res);
        });
    };
    VolDetailsModalComponent.prototype.checkState = function (id_vol) {
        var _this = this;
        this.volsService.checkState(this.id_user, id_vol).then(function (res) {
            _this.state = res.state;
            console.log(res);
        });
    };
    return VolDetailsModalComponent;
}());
VolDetailsModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'vol-details-modal',
        template: __webpack_require__(653),
        styles: [__webpack_require__(635)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__vol_details_modal_service__["a" /* VolDetailsModalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_modal__["c" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_modal__["c" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_modal__["d" /* DialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__vol_details_modal_service__["a" /* VolDetailsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vol_details_modal_service__["a" /* VolDetailsModalService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object])
], VolDetailsModalComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/vol-details-modal.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_socket_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(6);
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
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(3)]]
        });
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
        styles: [__webpack_require__(624)],
        template: __webpack_require__(642),
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_socket_service__["a" /* SocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["d" /* DialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/login.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_feed_service__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
    function MapComponent(http, feedService) {
        this.http = http;
        this.feedService = feedService;
        this.lat = 41.100856;
        this.lng = -8.544893;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedService.getPrivates()
            .then(function (res) {
            _this.privateVols = res.vols;
            console.log(_this.privateVols);
        })
            .catch(function (err) { return console.log(err); });
        this.feedService.getInstVol().then(function (res) {
            _this.instVols = res.vols;
        }).catch(function (err) {
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(643),
        styles: [__webpack_require__(625)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__feed_feed_service__["a" /* FeedService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__feed_feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__feed_feed_service__["a" /* FeedService */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/map.component.js.map

/***/ }),

/***/ 284:
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
        template: __webpack_require__(644),
        styles: [__webpack_require__(626)]
    }),
    __metadata("design:paramtypes", [])
], NotificationsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/notifications.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(646),
        styles: [__webpack_require__(628)],
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/search.component.js.map

/***/ }),

/***/ 286:
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
        template: __webpack_require__(647),
        styles: [__webpack_require__(629)]
    }),
    __metadata("design:paramtypes", [])
], SocialRequestsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/social-requests.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalConstants; });
var GlobalConstants = (function () {
    function GlobalConstants() {
    }
    Object.defineProperty(GlobalConstants, "API_ENDPOINT", {
        get: function () { return 'http://localhost:8080/api'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalConstants, "SOCKET_ENDPOINT", {
        get: function () { return 'http://localhost:8080/'; },
        enumerable: true,
        configurable: true
    });
    return GlobalConstants;
}());

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/global-constants.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_client__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_constants__ = __webpack_require__(30);
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
            localStorage.setItem("USER_ID", res.json().user_id);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/authentication.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url + this.serialize(queryParams), {
            headers: headers
        });
    };
    HttpClient.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.delete = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HttpClient);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/http-client.js.map

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/components/chat/chat.module": [
		705,
		4
	],
	"../app/components/feed/feed.module": [
		706,
		0
	],
	"../app/components/profile/profile.module": [
		709,
		1
	],
	"app/components/profile/actions/actions.module": [
		707,
		5
	],
	"app/components/profile/following/following.module": [
		708,
		3
	],
	"app/components/profile/settings/settings.module": [
		710,
		2
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
webpackAsyncContext.id = 471;


/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(539);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
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
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalProfileComponent = (function () {
    function ModalProfileComponent(dialog /*, private volsService: VolDetailsModalService*/) {
        this.dialog = dialog; /*, private volsService: VolDetailsModalService*/
        this.context = dialog.context;
        this.context.isBlocking = false;
    }
    ModalProfileComponent.prototype.ngOnInit = function () {
    };
    return ModalProfileComponent;
}());
ModalProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-profile',
        template: __webpack_require__(651),
        styles: [__webpack_require__(633)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */]) === "function" && _a || Object])
], ModalProfileComponent);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-profile.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_client__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_global_constants__ = __webpack_require__(30);
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
    ChatService.prototype.getConversations = function (id_user) {
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
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat.service.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.getPrivates = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/?type=private").toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    FeedService.prototype.getInstVol = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/?type=inst").toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    FeedService.prototype.getVols = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols").toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            return err.json();
        });
    };
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FeedService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/feed.service.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
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
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var ModalEndComponent = (function () {
    function ModalEndComponent(dialog /*, private volsService: VolDetailsModalService*/) {
        this.dialog = dialog; /*, private volsService: VolDetailsModalService*/
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
        this.evaluation = 1;
        this.evalAll = 0;
        console.log(this.context.idVol);
        /*this.volsService.getVol(this.context.idVol)
         .then(res => {
           this.volDetails = res.vol;
           console.log(this.volDetails);
         })
         .catch(err => console.log(err));
         */
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
    return ModalEndComponent;
}());
ModalEndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-end',
        template: __webpack_require__(650),
        styles: [__webpack_require__(632)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */]) === "function" && _a || Object])
], ModalEndComponent);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/modal-end.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chat_chat_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
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
    function AppComponent(overlay, route, vcRef, modal, router, auth, socketService, appService, chatService) {
        this.route = route;
        this.modal = modal;
        this.router = router;
        this.auth = auth;
        this.socketService = socketService;
        this.appService = appService;
        this.chatService = chatService;
        this.conversations = [];
        this.notifications = [];
        this.requests = [];
        overlay.defaultViewContainer = vcRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_10_moment__["locale"]('pt-pt');
        __WEBPACK_IMPORTED_MODULE_10_moment__["updateLocale"]('pt', {
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
                });
                _this.socketService.onRequest().subscribe(function (res) {
                    _this.newRequestsCount++;
                });
                _this.socketService.onConnect(res.user.id_user);
                _this.getNotificationCount(res.user.id_user);
                _this.getRequestCount(res.user.id_user);
                var id = localStorage.getItem('USER_ID');
                _this.idLogin = id;
            });
        }
    };
    AppComponent.prototype.getConversations = function (id_user) {
        var _this = this;
        this.chatService.getConversations(id_user).then(function (res) {
            _this.conversations = res.conversations;
            console.log(_this.conversations);
        });
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
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_angular2_modal__["b" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_9_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    AppComponent.prototype.openRegister = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_angular2_modal__["b" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_9_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(641),
        styles: [__webpack_require__(623)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_0__components_chat_chat_service__["a" /* ChatService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_modal__["c" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_modal__["c" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__components_chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__components_chat_chat_service__["a" /* ChatService */]) === "function" && _j || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_map_map_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_client__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_search_search_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_notifications_notifications_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_social_requests_social_requests_component__ = __webpack_require__(286);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_social_requests_social_requests_component__["a" /* SocialRequestsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__components_map_map_module__["a" /* MapModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_18__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_social_requests_social_requests_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notifications_notifications_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_map_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(29);
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
                path: 'feed',
                loadChildren: '../app/components/feed/feed.module#FeedModule'
            },
            {
                path: 'map',
                component: __WEBPACK_IMPORTED_MODULE_3__components_map_map_component__["a" /* MapComponent */]
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_2__components_search_search_component__["a" /* SearchComponent */]
            },
            {
                path: 'notifications',
                component: __WEBPACK_IMPORTED_MODULE_1__components_notifications_notifications_component__["a" /* NotificationsComponent */]
            },
            {
                path: 'requests',
                component: __WEBPACK_IMPORTED_MODULE_0__components_social_requests_social_requests_component__["a" /* SocialRequestsComponent */]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/app.routing.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_client__ = __webpack_require__(42);
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

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(6);
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
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
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

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_register_register_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Auth_authentication_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
        overlay.defaultViewContainer = vcRef;
    }
    CardComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.login = 1;
            this.checkLike();
        }
        else {
            this.login = 0;
        }
        this.countLikes();
        __WEBPACK_IMPORTED_MODULE_8_moment__["locale"]('pt-pt');
        __WEBPACK_IMPORTED_MODULE_8_moment__["updateLocale"]('pt', {
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: "Agora mesmo",
                m: "há 1 min",
                mm: "há %d m",
                h: "há 1h",
                hh: "há %d horas",
                d: "há 1 dia",
                dd: "há %d dias",
                M: "há 1 mo",
                MM: "há %d meses",
                y: "1 yr",
                yy: "%d yrs"
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
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__components_register_register_component__["a" /* RegisterComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_angular2_modal__["b" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    CardComponent.prototype.countLikes = function () {
        var _this = this;
        this.sharedService.countLikes(this.idVol)
            .then(function (res) {
            _this.numberLikes = res.likes;
        })
            .catch(function (err) { return console.log(err); });
    };
    CardComponent.prototype.openVolDetails = function (idVol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_angular2_modal__["b" /* overlayConfigFactory */])({ idVol: idVol }, __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    CardComponent.prototype.onSelect = function (profile) {
        this.router.navigate(['/profile/' + profile + '/activity']);
    };
    CardComponent.prototype.changePhoto1 = function () {
        this.foto1 = 1;
        this.foto3 = 0;
        this.foto2 = 0;
    };
    CardComponent.prototype.changePhoto2 = function () {
        this.foto1 = 0;
        this.foto2 = 1;
        this.foto3 = 0;
    };
    CardComponent.prototype.changePhoto3 = function () {
        this.foto1 = 0;
        this.foto2 = 0;
        this.foto3 = 1;
    };
    CardComponent.prototype.showFoto = function (foto) {
        if (foto == 1) {
            this.foto1 = 1;
            this.foto2 = 0;
            this.foto3 = 0;
        }
        if (foto == 2) {
            this.foto1 = 0;
            this.foto2 = 1;
            this.foto3 = 0;
        }
        if (foto == 3) {
            this.foto1 = 0;
            this.foto2 = 0;
            this.foto3 = 1;
        }
    };
    CardComponent.prototype.checkLike = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.sharedService.checkLike(this.idVol)
                .then(function (res) {
                _this.likeState = res.state;
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    CardComponent.prototype.like = function (id_vol) {
        this.likeState = 1;
        this.numberLikes++;
        this.sharedService.like(id_vol).then(function (res) {
            console.log(res);
        });
    };
    CardComponent.prototype.dislike = function (id_vol) {
        this.likeState = 0;
        this.numberLikes--;
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
], CardComponent.prototype, "desc", void 0);
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
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'vol-card',
        template: __webpack_require__(648),
        styles: [__webpack_require__(630)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_modal__["c" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_modal__["c" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object])
], CardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/card.component.js.map

/***/ }),

/***/ 537:
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
        template: __webpack_require__(649),
        styles: [__webpack_require__(631)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/footer.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_client__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolDetailsModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VolDetailsModalService = (function () {
    function VolDetailsModalService(http) {
        this.http = http;
    }
    VolDetailsModalService.prototype.getUser = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.getVol = function (idVol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + idVol).toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.checkState = function (id_user, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + '/checkState', { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    VolDetailsModalService.prototype.apply = function (id_user, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + '/apply', { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.getAddress = function (lat, lng) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.countLikes = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/likes/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.checkLike = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/checkLike").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.like = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/like", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.dislike = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/dislike", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.getComments = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id + "/comments").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.sendComment = function (message, id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/comment", { message: message }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.countCandidates = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.countConfirmeds = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.getCandidates = function (id_vol, amount) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates", { amount: amount }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.getConfirmed = function (id_vol, amount) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed", { amount: amount }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    VolDetailsModalService.prototype.countComments = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/comments/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return VolDetailsModalService;
}());
VolDetailsModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], VolDetailsModalService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/vol-details-modal.service.js.map

/***/ }),

/***/ 539:
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

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n/* HEADER */\n.brandBackground {\n  padding-top: 6px; }\n\n.header-background {\n  background-color: #0F76F7;\n  height: 50px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 10; }\n\n.titleBrand a {\n  color: #FFFFFF;\n  font-weight: 600;\n  letter-spacing: 8px;\n  font-size: 1.45rem;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  padding-right: 15px;\n  text-decoration: none; }\n\n.menuHeader {\n  text-align: right; }\n\n.menuHeader ul {\n  padding-top: 8px;\n  padding-left: 15px; }\n\n.menuHeader ul li {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 5px;\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.menuHeader ul li:last-child {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 0;\n  padding-left: 8px;\n  padding-right: 0; }\n\n.navbar-user-picture {\n  width: 35px;\n  height: 35px;\n  border-radius: 35px;\n  margin-right: 5px; }\n\n.navbar-namePicture-arrow {\n  display: inline-block;\n  vertical-align: middle; }\n\n.menuHeader ul li:hover {\n  cursor: pointer; }\n\n/deep/ .mat-menu-panel {\n  /* box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12); */\n  width: 220px;\n  margin-top: 40px; }\n\n/deep/ .cdk-overlay-pane {\n  margin-left: -10px; }\n\n/deep/ .mat-menu-ripple {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #919191 !important; }\n\n/deep/ .mat-menu-ripple:hover {\n  border-bottom: 1px solid #919191 !important; }\n\n/deep/ .mat-menu-content {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n  border-bottom: 1px solid #F7F8FA !important; }\n\n/deep/ .mat-menu-item {\n  font-size: 14px !important;\n  font-family: Lato !important; }\n\n/deep/ .mat-menu-item:hover {\n  font-size: 14px !important;\n  font-family: Lato !important;\n  color: #4A4A4A !important;\n  background: #FFFFFF !important; }\n\n.message-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px;\n  border-bottom: 1px solid #E6E5E5; }\n\n.profile-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px 20px;\n  border: 0; }\n\n.profile-item .icon {\n  color: #919191;\n  padding-top: 1px; }\n\n.profile-item .icon i {\n  font-size: 20px; }\n\n.profile-item .desc {\n  color: #4A4A4A;\n  font-size: 13px;\n  margin-left: 15px;\n  padding-top: 2px; }\n\n.profile-item:hover {\n  background: #f5f5f5; }\n\n.actions-profile {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E6E5E5; }\n\nhr {\n  margin: 0; }\n\n/*\r\n/deep/ .popover {\r\n    max-width: 350px !important;\r\n    width: 100% !important;\r\n    /* Max Width of the popover (depending on the container!)\r\n\r\n}\r\n*/\n.image img {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.image {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.message-info {\n  margin-left: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 500px;\n  padding-top: 0px;\n  font-size: 14px;\n  margin-top: -1px; }\n\n.notification-info {\n  width: 250px;\n  margin-left: 12px;\n  height: 50px;\n  font-size: 14px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical; }\n\n.dropdown-menu .new {\n  background: rgba(15, 118, 247, 0.1); }\n\n.message-item:hover {\n  background: #f5f5f5; }\n\n.message-item .time {\n  color: #919191;\n  font-weight: normal;\n  font-size: 11px; }\n\n.nameMsg {\n  font-weight: bold;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.textMsg {\n  color: #919191;\n  font-size: 13px; }\n\n.message-info div:first-child {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message-info .text {\n  font-weight: 12px; }\n\n#dropdown-user {\n  left: -40px;\n  top: 42px;\n  border-radius: 0px;\n  right: 0; }\n\n#dropdown-user .dropdown-item {\n  padding: 10px !important;\n  height: initial; }\n\n#dropdown-messages {\n  left: -385px;\n  top: 40px;\n  border-radius: 0px;\n  width: 450px;\n  padding: 0; }\n\n.dropdown-menu-profile {\n  padding: 0 !important; }\n\n.dropdown-menu:before {\n  position: absolute;\n  top: -7px;\n  right: 36px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ccc;\n  border-left: 8px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n\n.dropdown-menu-profile:before {\n  position: absolute;\n  top: -7px;\n  right: 3px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ccc;\n  border-left: 8px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n\n.dropdown-toggle:after {\n  display: none; }\n\n.dropdown-menu:after {\n  position: absolute;\n  top: -7px;\n  right: 36px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  content: ''; }\n\n.dropdown-menu-profile:after {\n  position: absolute;\n  top: -7px;\n  right: 3px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  content: ''; }\n\n.badge-notify {\n  background: red;\n  position: absolute;\n  top: 0px;\n  left: 25px; }\n\n.arrow_dropdown {\n  position: relative;\n  top: 5px; }\n\n.dropdown-header {\n  font-size: 10px;\n  padding: 10px 20px 10px;\n  border-bottom: 1px solid #E6E5E5;\n  color: #919191; }\n\n.dropdown-footer {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 0px 10px;\n  color: #0F76F7;\n  text-align: center; }\n\n.dropdown-footer:focus {\n  outline: none; }\n\n.nameDropdown {\n  margin-top: -5px; }\n\n.btn-notification {\n  padding: 6px; }\n\n.btnConfirm:hover {\n  background: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.containerLogin {\n  padding: 32px; }\n\nbutton {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  font-size: 16px;\n  font-family: Lato; }\n\n.facebookLogin {\n  background: #4568B2;\n  color: #fff;\n  border: 1px solid #4568B2;\n  margin-bottom: 6px; }\n\n.facebookLogin:hover {\n  background: #7996e4;\n  border: 1px solid #7996e4; }\n\n.googleLogin {\n  background: #FFFFFF;\n  color: #919191;\n  border: 1px solid #E6E5E5; }\n\n.googleLogin:hover {\n  color: #919191;\n  border: 1px solid #cccccc; }\n\n.normalLogin {\n  background: #FF8A65;\n  color: #FFFFFF;\n  border: 1px solid #FF8A65;\n  margin-top: 15px;\n  cursor: pointer; }\n\n.normalLogin:hover {\n  background: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.orLogin {\n  margin-top: 10px;\n  margin-bottom: 23px; }\n\n.divider-hr {\n  margin-top: -10px; }\n\n.divider-or {\n  padding: 6px;\n  background: #FFFFFF;\n  font-family: Lato;\n  color: #919191; }\n\ninput {\n  width: 100%;\n  border-radius: 3px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  color: #919191;\n  font-size: 16px;\n  font-family: Lato;\n  border: 1px solid #E6E5E5; }\n\n.inputEmailLogin {\n  margin-bottom: 6px; }\n\n.inputPasswordLogin {\n  margin-bottom: 6px; }\n\n.forgotPass {\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px;\n  font-family: Lato; }\n\n.forgotPass:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.footerLogin {\n  margin-top: 20px; }\n\n.registerBtn {\n  width: 110px;\n  border-radius: 0px;\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  padding-left: 21px !important;\n  padding-right: 21px !important;\n  background: #FFFFFF;\n  color: #FF8A65;\n  font-size: 14px;\n  font-family: Lato;\n  border: 1px solid #FF8A65; }\n\n.registerBtn:hover {\n  color: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.btnRegister {\n  margin-top: -30px; }\n\n.registerAdvice {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 16px;\n  color: #4A4A4A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sebm-google-map-container {\n  height: calc( 100vh - 50px);\n  z-index: 1; }\n\n.cardsSection {\n  overflow-y: scroll;\n  height: calc( 100vh - 170px); }\n\n.searchSection {\n  height: 100px;\n  background: #FFFFFF;\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.areaSearch {\n  padding-left: 30px;\n  padding-right: 35px; }\n\n.mapFull {\n  overflow: hidden; }\n\n.searchTitle {\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 10px 20px; }\n\n.inputSearch {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #E6E5E5;\n  border-radius: 3px;\n  padding: 15px;\n  font-size: 14px;\n  color: #919191; }\n\n.areaInput {\n  padding: 0px 20px; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\n.map {\n  margin-right: -20px; }\n\n.cardsSection::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.cardsSection::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.cardsSection::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.titleCard {\n  font-weight: 600; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.image img {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.image {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.not-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.notDesc {\n  margin-left: 15px;\n  margin-top: 4px;\n  color: #4A4A4A;\n  font-size: 15px; }\n\n.not-name {\n  font-weight: 600; }\n\n.notTime {\n  font-size: 14px;\n  color: #919191; }\n\n.notEvent {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.not-item {\n  border-bottom: 1px solid #E6E5E5;\n  cursor: pointer; }\n\n.titleCard {\n  margin-top: 4px; }\n\n.iconCard {\n  margin-top: 5px;\n  color: #919191; }\n\n.not-icon {\n  margin-top: -38px;\n  float: left; }\n\n.not-icon i {\n  color: #919191; }\n\n.not-item:hover {\n  background: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.containerLogin {\n  padding: 32px; }\n\ninput {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  background: #FFFFFF;\n  color: #919191;\n  font-size: 16px;\n  font-family: Lato;\n  border: 1px solid #E6E5E5;\n  margin-bottom: 6px; }\n\nbutton {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  font-size: 16px;\n  font-family: Lato;\n  margin-bottom: 6px;\n  cursor: pointer; }\n\n.facebookLogin {\n  background: #4568B2;\n  color: #fff;\n  border: 1px solid #4568B2; }\n\n.facebookLogin:hover {\n  background: #7996e4;\n  border: 1px solid #7996e4; }\n\n.googleLogin {\n  background: #FFFFFF;\n  color: #919191;\n  border: 1px solid #E6E5E5; }\n\n.googleLogin:hover {\n  color: #919191;\n  border: 1px solid #cccccc; }\n\n.normalLogin {\n  background: #FF8A65;\n  color: #FFFFFF;\n  border: 1px solid #FF8A65;\n  margin-top: 15px; }\n\n.normalLogin:hover {\n  background: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.orLogin {\n  margin-top: 10px;\n  margin-bottom: 23px; }\n\n.divider-hr {\n  margin-top: -10px; }\n\n.divider-or {\n  padding: 6px;\n  background: #FFFFFF;\n  font-family: Lato;\n  color: #919191; }\n\n.forgotPass {\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px;\n  font-family: Lato; }\n\n.forgotPass:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.footerLogin {\n  margin-top: 20px; }\n\n.registerBtn {\n  border-radius: 0px;\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  padding-left: 21px !important;\n  padding-right: 21px !important;\n  width: 110px;\n  background: #FFFFFF;\n  color: #FF8A65;\n  font-size: 14px;\n  font-family: Lato;\n  border: 1px solid #FF8A65; }\n\n.registerBtn:hover {\n  color: #ffbb93;\n  border: 1px solid #ffbb93; }\n\n.btnRegister {\n  margin-top: -30px; }\n\n.registerAdvice {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 16px;\n  color: #4A4A4A; }\n\n.registerAdvice1 {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 14px;\n  color: #4A4A4A; }\n\n.adviceSocial {\n  color: #0F76F7;\n  cursor: pointer; }\n\n.adviceSocial:hover {\n  text-decoration: underline; }\n\n.serviceAdvice {\n  color: #919191;\n  font-size: 12px;\n  margin-top: 15px;\n  font-family: Lato;\n  margin-bottom: 0; }\n\n.registSuccess {\n  color: #4A4A4A;\n  font-size: 14px;\n  font-family: Lato; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.mini-card-social {\n  background: #FFFFFF;\n  padding: 20px 0px;\n  margin-top: 15px;\n  border-radius: 3px; }\n\n.for-img {\n  max-width: 48px; }\n\n.for-imgInst {\n  max-width: 48px;\n  margin-top: 3px; }\n\n.name-person {\n  font-weight: 600; }\n\n.desc-person {\n  color: #919191; }\n\n.btnConfirm {\n  padding: 5px; }\n\n.for-btn {\n  margin-top: 5px; }\n\n.for-input {\n  background: #FFFFFF;\n  padding: 20px;\n  margin-top: 15px;\n  border-radius: 3px;\n  border: 1px solid #F7F8FA; }\n\n.inputSearch {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #E6E5E5;\n  border-radius: 3px;\n  padding: 15px;\n  font-size: 14px;\n  color: #919191; }\n\n.searchTitle {\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 600; }\n\n.title-filter {\n  font-weight: 600;\n  margin-top: 30px; }\n\n.moreResults {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: 13px;\n  cursor: pointer;\n  color: #0F76F7;\n  font-weight: 600; }\n\n.moreResults:hover {\n  color: #000; }\n\n.headerInput {\n  font-size: 16px;\n  color: #4A4A4A;\n  font-weight: 600;\n  margin-bottom: 10px; }\n\n.rowInst {\n  min-width: 160px; }\n\n.btnInst {\n  margin-top: 10px;\n  margin-right: 15px; }\n\n.text-vol {\n  margin-left: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.titleCard {\n  font-weight: 600; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.image img {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.image {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.not-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.notDesc {\n  margin-left: 15px;\n  margin-top: 4px;\n  color: #4A4A4A;\n  font-size: 15px; }\n\n.not-name {\n  font-weight: 600; }\n\n.notTime {\n  font-size: 14px;\n  color: #919191; }\n\n.notEvent {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.not-item {\n  border-bottom: 1px solid #E6E5E5;\n  cursor: pointer; }\n\n.titleCard {\n  margin-top: 4px; }\n\n.iconCard {\n  margin-top: 5px;\n  color: #919191; }\n\n.not-icon {\n  margin-top: -42px;\n  float: left; }\n\n.not-icon i {\n  color: #919191; }\n\n.not-item:hover {\n  background: #f5f5f5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickableName:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px;\n  cursor: pointer; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A;\n  width: 100%; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%;\n  max-width: 95%;\n  height: 45px; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px;\n  cursor: pointer; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 250px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  text-decoration: underline; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  padding-right: 10px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n\n.cardLikesContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 600px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnBlack {\n  color: #4A4A4A !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.footerText {\n  margin-top: 150px;\n  color: #919191;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: solid 1px #E6E5E5;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.modalHeader {\n  background: #0F76F7;\n  padding: 15px 20px; }\n\n.day-w-border {\n  width: 60px;\n  border: 2px solid #FFFFFF;\n  border-radius: 7px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 5px; }\n\n.modalTitle {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.containerDatePlace {\n  margin-top: 10px; }\n\n.modalTitleDesc {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-weight: 600; }\n\n.modalSubtitle {\n  font-size: 13px;\n  color: #FFFFFF; }\n\n.modal-end-content {\n  padding: 15px 20px;\n  background: #FFFFFF; }\n\n.modal-textarea {\n  width: 100%;\n  border: 1px solid #E6E5E5; }\n\n.modal-content-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #4A4A4A; }\n\n.modal-content-desc {\n  font-size: 14px; }\n\n.modal-textarea {\n  margin-top: 10px;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.modal-textarea::-webkit-input-placeholder {\n  font-size: 14px;\n  color: #919191;\n  font-family: Lato; }\n\n.evaluation {\n  margin-top: 10px; }\n\n.evaluation-option {\n  font-size: 14px;\n  color: #4A4A4A;\n  font-weight: normal;\n  margin-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.evaluation-option input {\n  margin-top: 4px;\n  margin-right: 5px; }\n\n.user-rate {\n  padding-left: 0;\n  padding-top: 5px;\n  margin-left: -7px; }\n\n.user-rate-all {\n  padding-left: 15px !important;\n  margin-top: -3px !important; }\n\n.user-rate-all md-icon {\n  cursor: pointer;\n  color: #E6E5E5; }\n\n.user-rate md-icon {\n  cursor: pointer; }\n\n.yellow {\n  color: #FFCB2B !important; }\n\n.grey {\n  color: #E6E5E5 !important; }\n\n.yellow:hover {\n  color: #919191 !important; }\n\n.grey:hover {\n  color: #919191 !important; }\n\n.individual {\n  height: 150px;\n  margin-top: 25px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n.individual::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.individual::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.individual::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 2px 0px; }\n\n.card-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px;\n  margin: 0; }\n\n.candidateName {\n  font-weight: normal;\n  font-size: 14px;\n  color: #4A4A4A;\n  padding-left: 5px; }\n\n.modal-end-footer {\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.cardFriends {\n  background: #fff;\n  border: 0;\n  border-radius: 0;\n  width: 100%; }\n\n.profile-user-picture {\n  text-align: center;\n  margin-top: -50px !important; }\n\n.profile-user-picture img {\n  width: 100px;\n  height: 100px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  text-align: center !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.friendsName {\n  text-align: center;\n  font-weight: 600;\n  margin-top: 5px; }\n\n.friendsPlace {\n  text-align: center;\n  color: #919191;\n  font-size: 12px; }\n\n.friendsEvents {\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-top: 20px; }\n\n.friendsCardNumber {\n  font-weight: 600;\n  font-size: 14px; }\n\n.friendsCardNumberDesc {\n  color: #919191;\n  font-size: 12px;\n  text-align: center; }\n\n.friendsBtns {\n  margin-top: 28px; }\n\n.friendsBackground {\n  height: 100px;\n  background-size: cover; }\n\n.coverImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.desc-modal-profile {\n  margin-top: 5px;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.title-modal {\n  font-weight: 600;\n  margin-top: 15px;\n  color: #919191;\n  font-size: 15px; }\n\n.row-details {\n  margin-top: 10px; }\n\n.details {\n  margin-top: 20px; }\n\n.btn-modal {\n  margin-top: 35px;\n  margin-bottom: 15px; }\n\n.user-rate {\n  margin-left: 10px;\n  margin-top: -4px;\n  padding-bottom: 15px; }\n\n.user-rate md-icon {\n  color: #FFCB2B;\n  font-size: 16px;\n  padding-left: -10px;\n  margin-left: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.modal-card {\n  padding: 10px 20px 10px 20px;\n  font-weight: 600;\n  font-size: 16px;\n  color: #4A4A4A;\n  border-bottom: 1px solid #E6E5E5; }\n\n.modal-list-content {\n  padding: 10px 20px 10px 20px;\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n.modal-list-content::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.modal-list-content::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.modal-list-content::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n\n.card-user-image img {\n  width: 35px;\n  height: 35px;\n  border-radius: 45px;\n  margin: 0; }\n\n.card-user-image {\n  max-width: 250px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.full-width {\n  max-width: 100% !important; }\n\n.user-desc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px 0px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.modal-remove-content {\n  padding: 10px 20px; }\n\n.modal-btns {\n  padding: 10px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: auto;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickableName:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px;\n  cursor: pointer; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A;\n  width: 100%; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%;\n  max-width: 95%;\n  height: 45px; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px;\n  cursor: pointer; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 250px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  text-decoration: underline; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  padding-right: 10px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n\n.cardLikesContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 600px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnBlack {\n  color: #4A4A4A !important; }\n\n.card-Comments {\n  border-top: 1px solid #E6E5E5;\n  width: 100%; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5;\n  padding: 15px 10px 0px 10px; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5;\n  padding: 10px 10px 20px 10px; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  padding-top: 10px; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnLike {\n  padding-top: 6px !important; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5;\n  border: 0;\n  background: #fff; }\n\n.card-user-comments-image-comments {\n  margin-top: 15px;\n  margin-left: 5px !important;\n  max-width: 50px; }\n\n.text-confirm {\n  color: #4A4A4A; }\n\n.action-confirm {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.modalHeader {\n  background: #0F76F7;\n  padding: 15px 20px; }\n\n.day-w-border {\n  width: 60px;\n  border: 2px solid #FFFFFF;\n  border-radius: 7px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 5px; }\n\n.modalTitle {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.containerDatePlace {\n  margin-top: 10px; }\n\n.modalTitleDesc {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-weight: 600; }\n\n.modalSubtitle {\n  font-size: 13px;\n  color: #FFFFFF; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px; }\n\n.card-user-nd {\n  padding-left: 10px; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.card-user-name:hover {\n  text-decoration: underline; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.modalContainer {\n  background: #FFFFFF;\n  padding: 20px;\n  padding-bottom: 0px !important; }\n\n.card-user-desc {\n  color: #4A4A4A; }\n\n.card-user-event {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.btnCandidate {\n  background: #FFCB2B;\n  font-size: 12px;\n  border: 0;\n  border-radius: 4px;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 12px 16px; }\n\n.modalTextArea {\n  margin-top: 15px;\n  text-indent: 30px;\n  text-align: justify; }\n\n.sectionDatePlace {\n  width: 100%;\n  border-top: 1px solid #E6E5E5;\n  margin-top: 20px; }\n\n.iconDate {\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 15px; }\n\n.daysEvent {\n  font-weight: 600;\n  margin-top: 5px;\n  color: #4A4A4A; }\n\n.descDatePlace {\n  padding-left: 15px; }\n\n.daysEventFull {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-side {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.sebm-google-map-container {\n  height: 100px; }\n\n.mapContent {\n  margin-top: 15px; }\n\n.friendsContainer {\n  margin-top: 10px; }\n\n.likeImgs {\n  margin-top: 2.5px;\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.numberYellow {\n  font-size: 18px;\n  color: #FFCB2B;\n  font-weight: 600; }\n\n.numberBlue {\n  font-size: 18px;\n  color: #0F76F7;\n  font-weight: 600; }\n\n.normalText {\n  font-size: 13px;\n  color: #4A4A4A; }\n\n.comments-back {\n  background: #E6E5E5; }\n\n.card-volum-footer {\n  padding-bottom: 0; }\n\n.card-volum-footer {\n  border-top: 1px solid #E6E5E5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  margin-top: 20px; }\n\n.comments-header, .comments-content {\n  margin-right: -20px;\n  margin-left: -20px; }\n\n.card-Comments {\n  border: 0px; }\n\n.modalTextBold {\n  font-weight: 600;\n  margin-top: 5px; }\n\n.typeVol {\n  background: orange;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: white; }\n\n.insuBool {\n  background: #3C765A;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: white;\n  margin-left: 6px; }\n\n.details-vol {\n  margin-top: 10px;\n  text-indent: 0px !important; }\n\n.see-all-participants {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  font-size: 12px;\n  color: #fff;\n  line-height: 30px;\n  text-align: center;\n  background: #0F76F7;\n  margin-left: -10px;\n  cursor: pointer; }\n\n.see-all-participants:hover {\n  background: #6aa4ff; }\n\n.btnCancel:hover {\n  background: #FFFFFF;\n  color: #919191; }\n\n.loadingHeight {\n  height: 550px; }\n\n.btnCancel {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 330,
	"./af.js": 330,
	"./ar": 337,
	"./ar-dz": 331,
	"./ar-dz.js": 331,
	"./ar-kw": 332,
	"./ar-kw.js": 332,
	"./ar-ly": 333,
	"./ar-ly.js": 333,
	"./ar-ma": 334,
	"./ar-ma.js": 334,
	"./ar-sa": 335,
	"./ar-sa.js": 335,
	"./ar-tn": 336,
	"./ar-tn.js": 336,
	"./ar.js": 337,
	"./az": 338,
	"./az.js": 338,
	"./be": 339,
	"./be.js": 339,
	"./bg": 340,
	"./bg.js": 340,
	"./bn": 341,
	"./bn.js": 341,
	"./bo": 342,
	"./bo.js": 342,
	"./br": 343,
	"./br.js": 343,
	"./bs": 344,
	"./bs.js": 344,
	"./ca": 345,
	"./ca.js": 345,
	"./cs": 346,
	"./cs.js": 346,
	"./cv": 347,
	"./cv.js": 347,
	"./cy": 348,
	"./cy.js": 348,
	"./da": 349,
	"./da.js": 349,
	"./de": 352,
	"./de-at": 350,
	"./de-at.js": 350,
	"./de-ch": 351,
	"./de-ch.js": 351,
	"./de.js": 352,
	"./dv": 353,
	"./dv.js": 353,
	"./el": 354,
	"./el.js": 354,
	"./en-au": 355,
	"./en-au.js": 355,
	"./en-ca": 356,
	"./en-ca.js": 356,
	"./en-gb": 357,
	"./en-gb.js": 357,
	"./en-ie": 358,
	"./en-ie.js": 358,
	"./en-nz": 359,
	"./en-nz.js": 359,
	"./eo": 360,
	"./eo.js": 360,
	"./es": 362,
	"./es-do": 361,
	"./es-do.js": 361,
	"./es.js": 362,
	"./et": 363,
	"./et.js": 363,
	"./eu": 364,
	"./eu.js": 364,
	"./fa": 365,
	"./fa.js": 365,
	"./fi": 366,
	"./fi.js": 366,
	"./fo": 367,
	"./fo.js": 367,
	"./fr": 370,
	"./fr-ca": 368,
	"./fr-ca.js": 368,
	"./fr-ch": 369,
	"./fr-ch.js": 369,
	"./fr.js": 370,
	"./fy": 371,
	"./fy.js": 371,
	"./gd": 372,
	"./gd.js": 372,
	"./gl": 373,
	"./gl.js": 373,
	"./gom-latn": 374,
	"./gom-latn.js": 374,
	"./he": 375,
	"./he.js": 375,
	"./hi": 376,
	"./hi.js": 376,
	"./hr": 377,
	"./hr.js": 377,
	"./hu": 378,
	"./hu.js": 378,
	"./hy-am": 379,
	"./hy-am.js": 379,
	"./id": 380,
	"./id.js": 380,
	"./is": 381,
	"./is.js": 381,
	"./it": 382,
	"./it.js": 382,
	"./ja": 383,
	"./ja.js": 383,
	"./jv": 384,
	"./jv.js": 384,
	"./ka": 385,
	"./ka.js": 385,
	"./kk": 386,
	"./kk.js": 386,
	"./km": 387,
	"./km.js": 387,
	"./kn": 388,
	"./kn.js": 388,
	"./ko": 389,
	"./ko.js": 389,
	"./ky": 390,
	"./ky.js": 390,
	"./lb": 391,
	"./lb.js": 391,
	"./lo": 392,
	"./lo.js": 392,
	"./lt": 393,
	"./lt.js": 393,
	"./lv": 394,
	"./lv.js": 394,
	"./me": 395,
	"./me.js": 395,
	"./mi": 396,
	"./mi.js": 396,
	"./mk": 397,
	"./mk.js": 397,
	"./ml": 398,
	"./ml.js": 398,
	"./mr": 399,
	"./mr.js": 399,
	"./ms": 401,
	"./ms-my": 400,
	"./ms-my.js": 400,
	"./ms.js": 401,
	"./my": 402,
	"./my.js": 402,
	"./nb": 403,
	"./nb.js": 403,
	"./ne": 404,
	"./ne.js": 404,
	"./nl": 406,
	"./nl-be": 405,
	"./nl-be.js": 405,
	"./nl.js": 406,
	"./nn": 407,
	"./nn.js": 407,
	"./pa-in": 408,
	"./pa-in.js": 408,
	"./pl": 409,
	"./pl.js": 409,
	"./pt": 411,
	"./pt-br": 410,
	"./pt-br.js": 410,
	"./pt.js": 411,
	"./ro": 412,
	"./ro.js": 412,
	"./ru": 413,
	"./ru.js": 413,
	"./sd": 414,
	"./sd.js": 414,
	"./se": 415,
	"./se.js": 415,
	"./si": 416,
	"./si.js": 416,
	"./sk": 417,
	"./sk.js": 417,
	"./sl": 418,
	"./sl.js": 418,
	"./sq": 419,
	"./sq.js": 419,
	"./sr": 421,
	"./sr-cyrl": 420,
	"./sr-cyrl.js": 420,
	"./sr.js": 421,
	"./ss": 422,
	"./ss.js": 422,
	"./sv": 423,
	"./sv.js": 423,
	"./sw": 424,
	"./sw.js": 424,
	"./ta": 425,
	"./ta.js": 425,
	"./te": 426,
	"./te.js": 426,
	"./tet": 427,
	"./tet.js": 427,
	"./th": 428,
	"./th.js": 428,
	"./tl-ph": 429,
	"./tl-ph.js": 429,
	"./tlh": 430,
	"./tlh.js": 430,
	"./tr": 431,
	"./tr.js": 431,
	"./tzl": 432,
	"./tzl.js": 432,
	"./tzm": 434,
	"./tzm-latn": 433,
	"./tzm-latn.js": 433,
	"./tzm.js": 434,
	"./uk": 435,
	"./uk.js": 435,
	"./ur": 436,
	"./ur.js": 436,
	"./uz": 438,
	"./uz-latn": 437,
	"./uz-latn.js": 437,
	"./uz.js": 438,
	"./vi": 439,
	"./vi.js": 439,
	"./x-pseudo": 440,
	"./x-pseudo.js": 440,
	"./yo": 441,
	"./yo.js": 441,
	"./zh-cn": 442,
	"./zh-cn.js": 442,
	"./zh-hk": 443,
	"./zh-hk.js": 443,
	"./zh-tw": 444,
	"./zh-tw.js": 444
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
webpackContext.id = 638;


/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-background\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2 col-12 brandBackground\">\r\n            <div class=\"titleBrand\">\r\n                <a routerLink=\"/feed\">VOLUM</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-12 menuHeader\">\r\n            <ul>\r\n                <li *ngIf=\"user\" routerLink=\"map\">\r\n                    <md-icon>place</md-icon>\r\n                </li>\r\n                <li *ngIf=\"user\" ngbDropdown (click)=\"getRequests(user.id_user)\">\r\n                    <md-icon ngbDropdownToggle>people</md-icon>\r\n\r\n                    <span class=\"badge badge-notify\" *ngIf=\"newRequestsCount > 0\">{{newRequestsCount}}</span>\r\n\r\n                    <div id=\"dropdown-messages\" class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-header\">PEDIDOS</div>\r\n                        <div class=\"message-item\" *ngIf=\"!requests\">Loading...</div>\r\n                        <div class=\"message-item\" *ngFor=\"let request of requests\" routerLink='./profile/{{request.id_user}}/activity'>\r\n\r\n                            <div class=\"image\">\r\n                                <img [src]=\"request.photo_url\">\r\n                            </div>\r\n                            <div class=\"notification-info\">\r\n                                <b>{{request.user_name}}</b> começou a seguir-te <span class=\"time\">{{request.date | amTimeAgo:true}}</span>\r\n                            </div>\r\n                            <div class=\"text-right\">\r\n                                <div class=\"btn-notification\">\r\n                                    <button class=\"btn btnConfirm\" routerLink='./profile/{{request.id_user}}/activity'>VER</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div routerLink=\"/requests\" class=\"dropdown-footer\">Ver todos os pedidos</div>\r\n\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"user\" ngbDropdown (click)=\"getConversations(user.id_user)\">\r\n\r\n                    <md-icon ngbDropdownToggle>chat_bubble</md-icon>\r\n\r\n                    <div id=\"dropdown-messages\" class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-header\">MENSAGENS</div>\r\n                        <div class=\"message-item\" *ngIf=\"!conversations\">Loading...</div>\r\n                        <div class=\"message-item\" *ngFor=\"let conversation of conversations\">\r\n                            <div class=\"image\">\r\n                                <img [src]=\"conversation.photo_url\">\r\n                            </div>\r\n                            <div class=\"message-info\" (click)=\"goToMessages(conversation.id_user, conversation.user_name)\">\r\n                                <div>\r\n                                    <span class=\"nameMsg\">{{conversation.user_name}}</span>\r\n                                    <span class=\"time\">20:00</span>\r\n                                </div>\r\n\r\n                                <span class=\"textMsg\"> Olá Estatíco </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown-footer\" routerLink=\"/chat/msg\">Ver todas as mensagens</div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"user\" ngbDropdown (click)=\"getNotifications(user.id_user)\">\r\n                    <md-icon ngbDropdownToggle>notifications</md-icon>\r\n                    <span class=\"badge badge-notify\" *ngIf=\"newNotificationCount > 0\">{{newNotificationCount}}</span>\r\n\r\n                    <div id=\"dropdown-messages\" class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-header\">NOTIFICAÇÕES</div>\r\n                        <div class=\"message-item\" *ngIf=\"!notifications\">Loading...</div>\r\n\r\n                        <div class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                            <div class=\"image\">\r\n                                <img [src]=\"notification.photo_url\">\r\n                            </div>\r\n                            <div class=\"notification-info\">\r\n                                <div>\r\n                                    <p *ngIf=\"notification.type == 1\"><b>{{notification?.user_name}}</b> candidatou-se a <b>{{notification?.vol_name}}</b>\r\n                                        <span class=\"time\">{{notification?.date | amTimeAgo:true }}</span> </p>\r\n\r\n                                </div>\r\n                                <div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div routerLink=\"/notifications\" class=\"dropdown-footer\">Ver todas as notificações</div>\r\n\r\n                    </div>\r\n\r\n                </li>\r\n                <li (click)=\"openRegister()\" *ngIf=\"!user\"> Registar</li>\r\n                <li (click)=\"openLogin()\" *ngIf=\"!user\"> Entrar</li>\r\n\r\n                <li *ngIf=\"user\" class=\"nameDropdown\" ngbDropdown ngbDropdownToggle>\r\n\r\n                    <span>\r\n                    <img class=\"navbar-user-picture\" [src]=\"user?.photo\">\r\n                    <span>{{user?.username}}</span>\r\n                    <i class=\"material-icons arrow_dropdown\">arrow_drop_down</i>\r\n\r\n\r\n                    </span>\r\n\r\n\r\n                    <div id=\"dropdown-user\" class=\"dropdown-menu dropdown-menu-profile\">\r\n                        <div class=\"dropdown-header\">A MINHA CONTA</div>\r\n                        <div class=\"actions-profile\">\r\n                            <div class=\"profile-item\" (click)=\"onSelect(idLogin)\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">portrait</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Perfil\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" (click)=\"onSelectSettings(idLogin)\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">settings</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Definições de perfil\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" (click)=\"logout()\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">power_settings_new</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Log out\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown-header\">SOCIAL</div>\r\n                        <div class=\"actions-profile\">\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">chat_bubble</i>\r\n                                </div>\r\n                                <div class=\"desc\" routerLink=\"/chat/msg\">\r\n                                    Mensagens\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" routerLink=\"/notifications\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">notifications</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Notificações\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\" routerLink=\"/requests\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">people</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Pedidos\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown-header\">SOBRE O VOLUM</div>\r\n                        <div class=\"actions-profile\">\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">toc</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Termos e condições\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">forum</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    Contactos\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profile-item\">\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">help_outline</i>\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    FAQS\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--\r\n                    <div class=\"dropdown-menu\" id=\"dropdown-user\">\r\n                        <button class=\"dropdown-item\" (click)=\"onSelect(idLogin)\" *ngIf=\"user\" styles=\"font-size:10px!important\">Perfil</button>\r\n                        <button class=\"dropdown-item\" *ngIf=\"user\">Definições</button>\r\n                        <button class=\"dropdown-item\" (click)=\"logout()\" *ngIf=\"user\">Sair</button>\r\n                    </div>\r\n-->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!--\r\n<form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n    <br> Login <input type=\"text\" formControlName=\"login\">\r\n    <small *ngIf=\"!form.controls.login.valid && form.controls.login.touched\" style=\"color:red\">Invalido</small>\r\n    <br> Password <input type=\"password\" formControlName=\"password\">\r\n    <br>\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n-->\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 containerLogin\">\r\n            <form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                <div class=\"col-12\">\r\n                    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <button class=\"googleLogin\">Entrar com o Google</button>\r\n                </div>\r\n                <div class=\"col-12 text-center orLogin\">\r\n                    <span class=\"divider-or\">ou</span>\r\n                    <hr class=\"divider-hr\">\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"error\">\r\n                    <div class=\"textError\">{{error}}</div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <input [class.borda]=\"!form.controls.email.valid && form.controls.email.touched\" type=\"email\" formControlName=\"email\" class=\"inputEmailLogin form-control\"\r\n                        placeholder=\"Endereço de e-mail\">\r\n                    <div *ngIf=\"!form.controls.email.valid && form.controls.email.touched\" class=\"textError\">Endereço de email inválido.</div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <input [class.borda]=\"!form.controls.password.valid && form.controls.password.touched\" type=\"password\" class=\"inputPasswordLogin form-control\"\r\n                        formControlName=\"password\" placeholder=\"Palavra-passe\">\r\n                    <div *ngIf=\"!form.controls.password.valid && form.controls.password.touched\" class=\"textError\">Palavra passe inválida</div>\r\n                </div>\r\n                <div class=\"col-12 text-right forgotPass\">\r\n                    <span>Esqueceu a sua palavra passe?</span>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <button type=\"submit\" class=\"normalLogin\">Entrar</button>\r\n                </div>\r\n                <div class=\"col-12 footerLogin\">\r\n                    <hr>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <span class=\"registerAdvice\">Ainda não tem uma conta?</span>\r\n                </div>\r\n                <div class=\"col text-right btnRegister\">\r\n                    <button class=\"registerBtn\">Registe-se</button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <div class=\"container\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-padding mapFull\">\r\n    <div class=\"row no-padding\">\r\n        <div class=\"col-7 map\">\r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n            </sebm-google-map>\r\n        </div>\r\n        <div class=\"col-5 \">\r\n            <div class=\"row\">\r\n                <div class=\"areaSearch col-12\">\r\n                    <div class=\"searchSection\">\r\n                        <div class=\"searchTitle\">Pesquisar voluntariados por local específico:</div>\r\n                        <div class=\"areaInput\">\r\n                            <input type=\"text\" class=\"inputSearch\" placeholder=\"Inserir localização...\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardsSection col-12\">\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [likes]=\"33\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [likes]=\"32\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [likes]=\"16\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [likes]=\"12\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [likes]=\"6\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row headerNotifications\">\r\n              <div class=\"col titleCard\">\r\n                Notificações\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"assets/imgs/andre.jpg\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">André Martins</span> gostou do teu evento <span class=\"notEvent\">Solidariedade com os pobres</span>.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              \r\n           \r\n              </div>\r\n            </div>\r\n             <div class=\"col text-right not-icon no-padding\">\r\n                <i class=\"material-icons edit\">event_note</i>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"assets/imgs/andre.jpg\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">André Martins</span> aderiu ao teu evento <span class=\"notEvent\">Solidariedade com os pobres</span>.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                <i class=\"material-icons edit\">event_note</i>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"assets/imgs/andre.jpg\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">André Martins</span> aderiu ao teu evento <span class=\"notEvent\">Solidariedade com os pobres</span>.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                <i class=\"material-icons edit\">event_note</i>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!--\r\n<form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n    <br> Login <input type=\"text\" formControlName=\"login\">\r\n    <small *ngIf=\"!form.controls.login.valid && form.controls.login.touched\" style=\"color:red\">Invalido</small>\r\n    <br> Password <input type=\"password\" formControlName=\"password\">\r\n    <br>\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n-->\r\n    <div class=\"row\">\r\n        <div class=\"col-12 containerLogin\">\r\n            <form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                <div *ngIf=\"emailRegist==0\">\r\n                    <div class=\"col-12\">\r\n                        <button class=\"facebookLogin\">Registar com o Facebook</button>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button class=\"googleLogin\">Registar com o Google</button>\r\n                    </div>\r\n                    <div class=\"col-12 text-center orLogin\">\r\n                        <span class=\"divider-or\">ou</span>\r\n                        <hr class=\"divider-hr\">\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button class=\"normalLogin\" (click)=\"openEmailRegist()\">Registar com o e-mail</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==1\">\r\n                    <div class=\"col-12 text-center\">\r\n                        <span class=\"registerAdvice1\">Registe-se com o <span class=\"adviceSocial\">Facebook</span> ou\r\n                        <span class=\"adviceSocial\">Google</span>.</span>\r\n                    </div>\r\n                    <hr>\r\n                    <form (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                        <div class=\"col-12\">\r\n                            <input type=\"email\" maxlength=\"120\" [class.borda]=\"!form.controls.email.valid && form.controls.email.touched\" formControlName=\"email\"\r\n                                class=\"inputEmailLogin form-control\" placeholder=\"Endereço de e-mail\">\r\n                            <div *ngIf=\"form.controls.email.errors?.required && form.controls.email.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input type=\"text\" maxlength=\"120\" [class.borda]=\"!form.controls.name.valid && form.controls.name.touched\" formControlName=\"name\"\r\n                                class=\"inputEmailLogin form-control\" placeholder=\"Primeiro nome\">\r\n                            <div *ngIf=\"form.controls.name.errors?.required && form.controls.name.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input type=\"text\" maxlength=\"120\" [class.borda]=\"!form.controls.lastname.valid && form.controls.lastname.touched\" formControlName=\"lastname\"\r\n                                class=\"inputEmailLogin form-control\" placeholder=\"Último Nome\">\r\n                            <div *ngIf=\"form.controls.lastname.errors?.required && form.controls.lastname.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input maxlength=\"120\" [class.borda]=\"!form.controls.password.valid && form.controls.password.touched\" type=\"password\" class=\"inputPasswordLogin form-control\"\r\n                                formControlName=\"password\" placeholder=\"Inserir palavra-passe\">\r\n                            <div *ngIf=\"form.controls.password.errors?.actualLength < form.controls.password.errors?.requiredLength && form.controls.password.touched\" class=\"text-danger\">A password não é forte o suficiente</div>\r\n                            <div *ngIf=\"form.controls.password.errors?.required && form.controls.password2.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <input maxlength=\"120\" [class.borda]=\"!form.controls.password2.valid && form.controls.password.touched\" type=\"password\" class=\"inputPasswordLogin form-control\"\r\n                                formControlName=\"password2\" placeholder=\"Confirmar palavra-passe\">\r\n                            <div *ngIf=\"form.controls.password2.errors?.required && form.controls.password2.touched\" class=\"text-danger\">Campo Obrigatório</div>\r\n                            <div *ngIf=\"form.controls.password2.errors?.actualLength < form.controls.password2.errors?.requiredLength && form.controls.password2.touched\" class=\"text-danger\">A password não é forte o suficiente</div>\r\n\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <p class=\"serviceAdvice\">Ao fazer o registo, concordo com os Termos de Serviço e a Política de Privacidade da Volum. </p>\r\n                        </div>\r\n\r\n                        <div class=\"col-12\">\r\n                            <button class=\"normalLogin\" type=\"submit\">Registar</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==2\">\r\n                    <div class=\"col-12\">\r\n                        <span class=\"registerAdvice1\">Registo efetuado com sucesso.</span>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-12\">\r\n                        <p class=\"registSuccess\">Obrigado por se registar!</p>\r\n                        <p class=\"registSuccess\">Irá receber um e-mail de confirmação. Clique no link para começar a utilizar a Volum.</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==1 || emailRegist==0\">\r\n                    <div class=\"col-12 footerLogin\">\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <span class=\"registerAdvice\">Já se encontra registado?</span>\r\n                    </div>\r\n                    <div class=\"col text-right btnRegister\">\r\n                        <button type=\"button\" class=\"registerBtn\">Entrar</button>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n            </form>\r\n\r\n\r\n            <!-- registar com e-mail -->\r\n\r\n\r\n\r\n\r\n            <!-- registar com e-mail -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n  <div class=\"row no-padding\">\r\n    <div class=\"col-12\">\r\n      <div class=\"for-input\">\r\n        <div class=\"headerInput\">Procurar pessoas/instituições ou ações de voluntariado</div>\r\n        <input type=\"text\" class=\"inputSearch\" placeholder=\"Pesquisa pessoas/instituições ou ações de voluntariado\" >\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"title-filter\">\r\n    Utilizadores\r\n  </div>\r\n  <div class=\"row card-people\">\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/pedro.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n       <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n       <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/cunha.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n       <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/vasco.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n     <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/avatar2.png\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/avatar.png\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 text-center\">\r\n        <div class=\"moreResults\">\r\n          Carregar mais...\r\n        </div>\r\n      </div>\r\n      \r\n  </div>\r\n   <div class=\"title-filter\">\r\n    Instituições\r\n  </div>\r\n    <div class=\"row card-people\">\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/caritas.png\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n       <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/abrigoseguro.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n       <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/caritas_logo.gif\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n       <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/ondaverde.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n     <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row\">\r\n          <div class=\"col for-img\">\r\n              <img class=\"thumbnail\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-person\">\r\n          <div class=\"ts14 name-person\">Pedro Araújo</div>\r\n          <div class=\"ts13 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn\">\r\n             <button class=\"btnConfirm\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n        <div class=\"col-12 text-center\">\r\n        <div class=\"moreResults\">\r\n          Carregar mais...\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"title-filter\">\r\n    Ações/Eventos de Voluntariado\r\n  </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row card-people\">\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row rowInst\">\r\n          <div class=\"col for-imgInst\">\r\n              <img class=\"thumbnail4\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-vol no-padding\">\r\n          <div class=\"ts14 name-person\">Jardineiro</div>\r\n          <div class=\"ts12 desc-person\">Criado por André Martins</div>\r\n          <div class=\"ts12 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn no-padding\">\r\n             <button class=\"btnConfirm btnInst\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row rowInst\">\r\n          <div class=\"col for-imgInst\">\r\n              <img class=\"thumbnail4\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-vol no-padding\">\r\n          <div class=\"ts14 name-person\">Jardineiro</div>\r\n          <div class=\"ts12 desc-person\">Criado por André Martins</div>\r\n          <div class=\"ts12 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn no-padding\">\r\n             <button class=\"btnConfirm btnInst\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div><div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row rowInst\">\r\n          <div class=\"col for-imgInst\">\r\n              <img class=\"thumbnail4\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-vol no-padding\">\r\n          <div class=\"ts14 name-person\">Jardineiro</div>\r\n          <div class=\"ts12 desc-person\">Criado por André Martins</div>\r\n          <div class=\"ts12 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn no-padding\">\r\n             <button class=\"btnConfirm btnInst\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div><div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row rowInst\">\r\n          <div class=\"col for-imgInst\">\r\n              <img class=\"thumbnail4\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-vol no-padding\">\r\n          <div class=\"ts14 name-person\">Jardineiro</div>\r\n          <div class=\"ts12 desc-person\">Criado por André Martins</div>\r\n          <div class=\"ts12 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn no-padding\">\r\n             <button class=\"btnConfirm btnInst\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row rowInst\">\r\n          <div class=\"col for-imgInst\">\r\n              <img class=\"thumbnail4\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-vol no-padding\">\r\n          <div class=\"ts14 name-person\">Jardineiro</div>\r\n          <div class=\"ts12 desc-person\">Criado por André Martins</div>\r\n          <div class=\"ts12 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn no-padding\">\r\n             <button class=\"btnConfirm btnInst\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\"> \r\n         <div class=\"container\">\r\n        <div class=\"mini-card-social row rowInst\">\r\n          <div class=\"col for-imgInst\">\r\n              <img class=\"thumbnail4\" src=\"assets/imgs/andre.jpg\">\r\n          </div>\r\n          <div class=\"col text-vol no-padding\">\r\n          <div class=\"ts14 name-person\">Jardineiro</div>\r\n          <div class=\"ts12 desc-person\">Criado por André Martins</div>\r\n          <div class=\"ts12 desc-person\">Porto, Portugal</div>\r\n          </div>\r\n           <div class=\"col btn-person text-right for-btn no-padding\">\r\n             <button class=\"btnConfirm btnInst\">VER</button>\r\n          </div>\r\n            \r\n</div>\r\n        </div>\r\n      </div>\r\n        <div class=\"col-12 text-center\">\r\n        <div class=\"moreResults\">\r\n          Carregar mais...\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row headerNotifications\">\r\n              <div class=\"col titleCard\">\r\n                Pedidos\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/3357_1123036710971_1800417_n.jpg?oh=ec245f1e04108ea03f280841e7f68113&oe=5987337C\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">Miguel Silva</span> pediu para te seguir.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              \r\n           \r\n              </div>\r\n            </div>\r\n             <div class=\"col text-right not-icon no-padding\">\r\n              \r\n                 <button class=\"btn btnCancel\">IGNORAR</button>\r\n                   <button class=\"btn btnConfirm\">ACEITAR</button>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/1907411_695457873857488_7989953224523266502_n.jpg?oh=7a72f65c8badd2409a0754e47dafe60e&oe=597BEF33\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">Vasco Coimbra</span> pediu para te seguir.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                 <button class=\"btn btnCancel\">IGNORAR</button>\r\n                   <button class=\"btn btnConfirm\">ACEITAR</button>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-block not-item\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"col-12 not-content\">\r\n                <div class=\"image\">\r\n                    <img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/12348043_1121276874551360_3925448066232133540_n.jpg?oh=3c6b1ad15e9a062b710ae58096445c97&oe=5973F4A1\">\r\n                </div>\r\n                <div class=\"notDesc\">\r\n                  <span class=\"not-name\">Hugo Fontão</span> pediu para te seguir.\r\n                <div class=\"notTime\">\r\n                  há 4 horas\r\n                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-right not-icon no-padding\">\r\n                 <button class=\"btn btnCancel\">IGNORAR</button>\r\n                   <button class=\"btn btnConfirm\">ACEITAR</button>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-volum\">\r\n    <!-- HEADER CARD -->\r\n    <div class=\"row no-margin\">\r\n        <div (click)=\"onSelect(userCreator)\" class=\"col card-user-image col-md-auto\">\r\n            <img src=\"{{avatar}}\">\r\n        </div>\r\n        <div class=\"col-6 col-lg-8 card-user-nd\">\r\n            <div *ngIf=\"verified==1\" class=\"card-user-name ts16\">\r\n                <a *ngIf=\"login\" class=\"clickableName\" (click)=\"onSelect(userCreator)\">{{username}}</a>\r\n                <a *ngIf=\"!login\">{{username}}</a>\r\n                <button type=\"button\" class=\"btn btn-secondary verified\" placement=\"right\" ngbTooltip=\"Instituição verificada\">\r\n                <i class=\"material-icons md-18\">verified_user</i></button></div>\r\n            <div *ngIf=\"verified==0\" class=\"card-user-name ts16\"><a (click)=\"onSelect(userCreator)\">{{username}}</a> </div>\r\n            <div class=\"card-date ts14\">{{dateCreation | amTimeAgo:true }}</div>\r\n        </div>\r\n        <div *ngIf=\"login==1\" class=\"col card-option text-right\">\r\n            <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n            <md-menu #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                <md-icon>share</md-icon>\r\n                <span>Partilhar</span>\r\n              </button>\r\n                <button md-menu-item>\r\n                <md-icon>do_not_disturb</md-icon>\r\n                <span>Denunciar</span>\r\n              </button>\r\n                <button md-menu-item>\r\n                <md-icon>visibility_off</md-icon>\r\n                <span>Bloquear</span>\r\n              </button>\r\n            </md-menu>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER CARD -->\r\n\r\n    <!-- CONTENT CARD -->\r\n    <div *ngIf=\"map!=true\">\r\n        <div class=\"imgSlider\">\r\n            <img *ngIf=\"foto1==1\" class=\"imgSliderInd\" src=\"../assets/imgs/banco_alimentar.jpg\">\r\n            <img *ngIf=\"foto2==1\" class=\"imgSliderInd\" src=\"../assets/imgs/testemaps.PNG\">\r\n            <img *ngIf=\"foto3==1\" class=\"imgSliderInd\" src=\"../assets/imgs/jardin.jpg\">\r\n        </div>\r\n        <div class=\"balls\">\r\n            <div class=\"row\">\r\n                <div (click)=\"changePhoto1()\" *ngIf=\"foto1==1\" class=\"ball1\"></div>\r\n                <div (click)=\"changePhoto1()\" *ngIf=\"foto1==0\" class=\"ball1Empty\"></div>\r\n                <div (click)=\"changePhoto2()\" *ngIf=\"foto2==1\" class=\"ball2\"></div>\r\n                <div (click)=\"changePhoto2()\" *ngIf=\"foto2==0\" class=\"ball2Empty\"></div>\r\n                <div (click)=\"changePhoto3()\" *ngIf=\"foto3==1\" class=\"ball3\"></div>\r\n                <div (click)=\"changePhoto3()\" *ngIf=\"foto3==0\" class=\"ball3Empty\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- foto1 -->\r\n        <div class=\"rightArrow\" (click)=\"showFoto(2)\" *ngIf=\"foto1==1\">\r\n            <i class=\"material-icons iconRight\">keyboard_arrow_right</i>\r\n        </div>\r\n        <div class=\"leftArrow\" (click)=\"showFoto(3)\" *ngIf=\"foto1==1\">\r\n            <i class=\"material-icons iconRight\">keyboard_arrow_left</i>\r\n        </div>\r\n        <!-- foto2 -->\r\n        <div class=\"rightArrow\" (click)=\"showFoto(3)\" *ngIf=\"foto2==1\">\r\n            <i class=\"material-icons iconRight\">keyboard_arrow_right</i>\r\n        </div>\r\n        <div class=\"leftArrow\" (click)=\"showFoto(1)\" *ngIf=\"foto2==1\">\r\n            <i class=\"material-icons iconRight\">keyboard_arrow_left</i>\r\n        </div>\r\n        <!-- foto3 -->\r\n        <div class=\"rightArrow\" (click)=\"showFoto(1)\" *ngIf=\"foto3==1\">\r\n            <i class=\"material-icons iconRight\">keyboard_arrow_right</i>\r\n        </div>\r\n        <div class=\"leftArrow\" (click)=\"showFoto(2)\" *ngIf=\"foto3==1\">\r\n            <i class=\"material-icons iconRight\">keyboard_arrow_left</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-margin card-volum-content\" (click)=\"openVolDetails(idVol)\">\r\n        <div class=\"col ts18 card-volum-title\">\r\n            {{title}}\r\n        </div>\r\n        <div class=\"col-12 ts14 card-volum-description\">\r\n            {{desc}}\r\n        </div>\r\n    </div>\r\n\r\n    <!-- /CONTENT CARD -->\r\n\r\n    <!-- FOOTER CARD -->\r\n    <div class=\"card-volum-footer\">\r\n        <div class=\"cardLikesContent\">\r\n        <div class=\"cardLikes\">\r\n            <md-icon (click)=\"dislike(idVol)\" *ngIf=\"login && (likeState==1)\" class=\"btnLike\">favorite</md-icon>\r\n             <md-icon (click)=\"like(idVol)\" *ngIf=\"login && (!numberLikes || likeState==0)\" class=\"btnLike btnBlack\">favorite_border</md-icon>\r\n             <md-icon *ngIf=\"!login\" class=\"btnLike\">favorite</md-icon>\r\n        </div>\r\n        <!--<div class=\"likesNumber ts12\">\r\n            {{numberLikes}}\r\n        </div>\r\n        -->\r\n        <!--<div *ngIf=\"login &&type=='private' && numberLikes>=1\" class=\"likeImgs\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar3.png\">\r\n            <img src=\"assets/imgs/avatar04.png\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar.png\">\r\n        </div>\r\n        -->\r\n        <div *ngIf=\"login &&  type=='private'\" class=\"likesText ts12\">\r\n           <!-- <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto -->\r\n           <span *ngIf=\"likeState==1\" class=\"likesTestMe\">Tu</span> \r\n           <span *ngIf=\"likeState==1 && numberLikes<2\">gostas disto.</span>\r\n           <span *ngIf=\"likeState==1 && numberLikes>=2\">e mais</span>\r\n           <span *ngIf=\"likeState==1 && numberLikes>=2\">{{numberLikes-1}} pessoa<span *ngIf=\"numberLikes>2\">s</span> gostam disto.</span>\r\n           <span *ngIf=\"likeState==0 && numberLikes>=1\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=2\">s</span>\r\n                gosta<span *ngIf=\"numberLikes>=2\">m\r\n                    </span> \r\n                    disto.</span>\r\n            <span *ngIf=\"likeState==0 && !numberLikes\">Sê o primeiro a gostar disto!</span>\r\n        </div>\r\n        <div *ngIf=\"!login\" class=\"likesText ts12\">\r\n            <span *ngIf=\"numberLikes>=1\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=1\">s</span> gostam disto.</span>\r\n            <span *ngIf=\"!numberLikes || numberLikes==0\">Sê o primeiro a gostar disto. <span (click)=\"openRegister()\" class=\"likesTestMe clickable\" style=\"cursor:pointer\">Regista-te já</span></span>\r\n                \r\n        </div>\r\n        </div>\r\n        <!--\r\n        <div *ngIf=\"type=='private'\" class=\"cardComments ts12\">\r\n            <div>\r\n                <md-icon class=\"btnComments\">textsms</md-icon>\r\n            </div>\r\n            <div (click)=\"openComments()\" class=\"textComments\"><span class=\"commentsNumber\">16</span> comentários</div>\r\n        </div>\r\n        -->\r\n        <div class=\"btnView\">\r\n            <button md-raised-button (click)=\"openVolDetails(idVol)\">VER</button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- /FOOTER CARD -->\r\n\r\n\r\n    \r\n</div>"

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"footerText\">\r\n      @ Volum, Inc.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = "<!-- APAGAR AÇÃO -->\r\n<div *ngIf=\"context.type==1\">\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\">\r\n            <div>\r\n                MAR\r\n                <!--{{volDetails?.date_begin | date:\"MMM\" | uppercase}}-->\r\n            </div>\r\n            <div>\r\n                23\r\n                <!--{{volDetails?.date_begin | date:\"d\"}}-->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\">\r\n            <div class=\"modalTitleDesc\">\r\n                Ajudar os pobres\r\n                <!--{{volDetails?.name}}-->\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n                sabado, 29 de Abril de 2019\r\n                <!--{{volDetails?.date_begin | date:\"fullDate\"}}-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-end-content row\">\r\n        <div class=\"modal-content-title col-12\">\r\n            Cancelar ação de voluntariado\r\n        </div>\r\n        <div class=\"modal-content-desc col-12\" style=\"margin-top:2px; margin-bottom:2px;\">\r\n            Tem a certeza que quer cancelar esta ação de voluntariado? Se sim, indique o motivo para informar os seus participantes.\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <textarea rows=\"4\" class=\"modal-textarea\" placeholder=\"Escrever motivo de cancelamento da ação...\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 modal-end-footer text-right\">\r\n            <button class=\"btn btnCancel\">NÃO</button>\r\n            <button class=\"btn btnConfirm\">SIM</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- FINALIZAR -->\r\n<div *ngIf=\"context.type==2\">\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\">\r\n            <div>\r\n                MAR\r\n                <!--{{volDetails?.date_begin | date:\"MMM\" | uppercase}}-->\r\n            </div>\r\n            <div>\r\n                23\r\n                <!--{{volDetails?.date_begin | date:\"d\"}}-->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\">\r\n            <div class=\"modalTitleDesc\">\r\n                Ajudar os pobres\r\n                <!--{{volDetails?.name}}-->\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n                sabado, 29 de Abril de 2019\r\n                <!--{{volDetails?.date_begin | date:\"fullDate\"}}-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-end-content row\">\r\n        <div class=\"modal-content-title col-12\">\r\n            Finalizar Ação de Voluntariado\r\n        </div>\r\n        <div class=\"modal-content-desc col-12\">\r\n            Se desejar, pode inserir um sumário desta ação de voluntariado. Todos os participantes serão notificados.\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <textarea rows=\"4\" class=\"modal-textarea\" placeholder=\"Escrever sumário descritivo da ação...\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 modal-content-title evaluation\">\r\n            Avaliar participantes\r\n            <form>\r\n                <div class=\"evaluation-option\">\r\n                    Atribuir a mesma classificação a todos os participantes:\r\n                    <div class=\"user-rate-all\">\r\n                        <md-icon (click)=\"evAll(1)\" class=\"yellow\" *ngIf=\"evalAll!=0\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(1)\" class=\"grey\" *ngIf=\"evalAll<1\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(2)\" class=\"yellow\" *ngIf=\"evalAll>=2\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(2)\" class=\"grey\" *ngIf=\"evalAll<2\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(3)\" class=\"yellow\" *ngIf=\"evalAll>=3\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(3)\" class=\"grey\" *ngIf=\"evalAll<3\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(4)\" class=\"yellow\" *ngIf=\"evalAll>=4\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(4)\" class=\"grey\" *ngIf=\"evalAll<4\">star_rate</md-icon>\r\n\r\n                        <md-icon (click)=\"evAll(5)\" class=\"yellow\" *ngIf=\"evalAll>=5\">star_rate</md-icon>\r\n                        <md-icon (click)=\"evAll(5)\" class=\"grey\" *ngIf=\"evalAll<5\">star_rate</md-icon>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n            <div class=\"individual\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let person of people; let i=index\" class=\"listPerson no-border no-margin\">\r\n                        <div class=\"row no-margin\">\r\n                            <div class=\"card-user-image\">\r\n                                <img src=\"../assets/imgs/avatar04.png\">\r\n                                <span class=\"candidateName\">Pedro Araújo</span>\r\n                            </div>\r\n                            <div class=\"col text-right no-padding\">\r\n                                <div class=\"user-rate\">\r\n                                    <md-icon (click)=\"ev(i,1)\" class=\"yellow\" *ngIf=\"person?.eval!='NULL'\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,1)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<1\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,2)\" class=\"yellow\" *ngIf=\"person?.eval>=2\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,2)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<2\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,3)\" class=\"yellow\" *ngIf=\"person?.eval>=3\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,3)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<3\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,4)\" class=\"yellow\" *ngIf=\"person?.eval>=4\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,4)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<4\">star_rate</md-icon>\r\n\r\n                                    <md-icon (click)=\"ev(i,5)\" class=\"yellow\" *ngIf=\"person?.eval>=5\">star_rate</md-icon>\r\n                                    <md-icon (click)=\"ev(i,5)\" class=\"grey\" *ngIf=\"person?.eval=='NULL' || person?.eval<5\">star_rate</md-icon>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-12 modal-end-footer text-right\">\r\n            <button class=\"btn btnCancel\">CANCELAR</button>\r\n            <button class=\"btn btnConfirm\">FINALIZAR</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n    <div class=\"col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='./assets/imgs/fundo_andre.jpg'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"./assets/imgs/andre.jpg\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"col user-rate\">\r\n                    <md-icon class=\"rate1\">star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                </div>\r\n            <div class=\"friendsName\">\r\n              André Martins\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Sever do Vouga, Aveiro\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-12 details\">\r\n      <div class=\"friendsCardNumber\">E-mail</div>\r\n      <div class=\"friendsCardNumberDesc\">vascosilvaa@gmail.com</div>\r\n    </div>\r\n    <div class=\"col-12 row-details\">\r\n      <div class=\"friendsCardNumber\">Data de Nascimento</div>\r\n      <div class=\"friendsCardNumberDesc\">18 de Janeiro de 1996</div>\r\n    </div>\r\n    <div class=\"col-md-8 offset-md-2 row-details\">\r\n      <div class=\"friendsCardNumber\">Descrição</div>\r\n      <div class=\"friendsCardNumberDesc\">Sou um rapaz natural de Aveiro e sempre procurei ajudar aqueles que necessitam. Gosto muito de voluntariado.</div>\r\n    </div>\r\n\r\n    <div class=\"col-6 text-right no-padding btn-modal\" style=\"padding-right:5px;\">\r\n      <button class=\"btn btnCancel\">ELIMINAR</button>\r\n    </div>\r\n    <div class=\"col-6 btn-modal no-padding\" style=\"padding-left:5px; text-align:left\">\r\n      <button class=\"btn btnConfirm\">VER</button>\r\n    </div>\r\n    \r\n\r\n  </div>"

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<!-- CANDIDATOS -->\r\n<div *ngIf=\"context.type==1\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Candidatos\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let candidate of candidates\" class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"{{candidate?.photo_url}}\">\r\n                <span class=\"candidateName\">{{candidate?.name}}</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary btnCancel\">RECUSAR</button>\r\n                <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\">ACEITAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONFIRMADOS -->\r\n\r\n<div *ngIf=\"context.type==2\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Confirmados\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let confirmed of confirmeds\" class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"{{candidate?.photo_url}}\">\r\n                <span class=\"candidateName\">{{candidate?.name}}</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnRemove\">REMOVER</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONVITES -->\r\n\r\n<div *ngIf=\"context.type==3\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Convites\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"../assets/imgs/avatar04.png\">\r\n                <span class=\"candidateName\">Pedro Araújo</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnCancel\">CANCELAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"../assets/imgs/avatar04.png\">\r\n                <span class=\"candidateName\">Pedro Araújo</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnCancel\">CANCELAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image\">\r\n                <img src=\"../assets/imgs/avatar04.png\">\r\n                <span class=\"candidateName\">Pedro Araújo</span>\r\n              </div>\r\n              <div class=\"col text-right no-padding\">\r\n                <button type=\"button\" class=\"btn btnCancel\">CANCELAR</button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- REMOVER  CONFIRMADOS-->\r\n<div *ngIf=\"context.type==4\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Remover {{context.name}}\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que deseja remover {{context.name}} dos confirmados?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\">NÃO</button>\r\n        <button class=\"btn btnConfirm\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- REMOVER  CANDIDATOS-->\r\n<div *ngIf=\"context.type==5\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Recusar {{context.name}}\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que deseja recusar {{context.name}} como voluntário?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\">NÃO</button>\r\n        <button class=\"btn btnConfirm\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONFIRMAR CANCELAR CANDIDATURA -->\r\n<div *ngIf=\"context.type==6\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Cancelar candidatura\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n       Tem a certeza que quer cancelar a sua candidatura para a ação de voluntariado \"{{context.nameVol}}\"?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\">NÃO</button>\r\n        <button class=\"btn btnConfirm\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- CONFIRMAR CANDIDATURA -->\r\n<div *ngIf=\"context.type==7\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Candidatar a Ação de voluntariado\r\n      </div>\r\n      <div class=\"col-12 modal-remove-content\">\r\n        Tem a certeza que se quer candidatar como voluntário para a ação de voluntariado \"{{context.name}}\"?\r\n      </div>\r\n      <div class=\"col-12 text-right modal-btns\">\r\n        <button class=\"btn btnCancel\">NÃO</button>\r\n        <button class=\"btn btnConfirm\">SIM</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Likes -->\r\n<div *ngIf=\"context.type==8\" class=\"container-fluid no-padding\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"modal-card\">\r\n        Gostos\r\n      </div>\r\n      <div class=\"modal-list-content\">\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let like of likes\" class=\"listPerson no-border no-margin\">\r\n            <div class=\"row no-margin user-desc\">\r\n              <div class=\"card-user-image full-width\">\r\n                <img src=\"{{like?.photo_url}}\">\r\n                <span class=\"candidateName\">{{like?.name}}</span>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "<div class=\"no-padding\">\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\" *ngIf=\"ready\">\r\n            <div>\r\n                {{volDetails?.date_begin | date:\"MMM\" | uppercase}}\r\n            </div>\r\n            <div>\r\n                {{volDetails?.date_begin | date:\"d\"}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\" *ngIf=\"ready\">\r\n            <div class=\"modalTitleDesc\">\r\n                {{volDetails?.name}}\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n                {{volDetails?.date_begin | date:\"fullDate\"}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modalContainer row\" [class.loadingHeight]=\"!ready\">\r\n\r\n    <div class=\"col-12\" *ngIf=\"!ready\">\r\n        Loading..\r\n    </div>\r\n    <ng-container *ngIf=\"ready\">\r\n        <div class=\"card-user-image col-md-auto\">\r\n            <img src={{volDetails?.user.photo_url}}>\r\n        </div>\r\n        <div class=\"card-user-nd\">\r\n            <div><span class=\"card-user-name ts16\">{{volDetails?.user.name}}</span><span class=\"ts14 card-user-desc\"> criou o </span>\r\n                <span class=\"card-user-event ts14\">evento</span>\r\n            </div>\r\n            <div class=\"card-date ts13\">{{volDetails?.date_creation | date:\"d/M\"}} às {{volDetails?.date_creation | date:\"shortTime\"}}</div>\r\n        </div>\r\n        <div class=\"col text-right no-padding\">\r\n            <!-- <button class=\"btn btnCandidate\" (click)=\"apply(volDetails.id_vol)\" *ngIf=\"state == 0\">CANDIDATAR</button> -->\r\n            <button class=\"btn btnCandidate\" (click)=\"openRemoveConfirm(7, volDetails.name, id_user, volDetails.id_vol)\" *ngIf=\"volDetails.active==1 && state == 0\">CANDIDATAR</button>\r\n            <button class=\"btn btnRemove\" (click)=\"openRemoveConfirm(6, volDetails.name, id_user, volDetails.id_vol)\" *ngIf=\"volDetails.active==1 && state == 1 && !candCancel\">CANCELAR CANDIDATURA</button>\r\n            <button class=\"btn btn-success \" *ngIf=\"volDetails.active==1 && state == 2\">Confirmado</button>\r\n            <button class=\"btn btn-success\" *ngIf=\"volDetails.active==1 && state == 3\">Sucesso <i class=\"fa fa-check\"></i></button>\r\n            <button class=\"btn btnCancel\" *ngIf=\"volDetails.active==0\">AÇÃO FINALIZADA</button>\r\n\r\n        </div>\r\n\r\n        <div class=\"modalTextArea col-12 no-padding\">\r\n            <div class=\"ts13 col-12 no-padding\">\r\n                {{volDetails?.desc}}\r\n            </div>\r\n            <div class=\"details-vol\">\r\n                <span class=\"typeVol\">Solidariedade Social</span> <span class=\"insuBool\">Seguro</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"sectionDatePlace container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 no-padding\" style=\"display:flex\">\r\n                    <div style=\"display:flex; margin-top:5px\">\r\n                        <div>\r\n                            <i class=\"material-icons iconDate\">query_builder</i>\r\n                        </div>\r\n                        <div class=\"descDatePlace\">\r\n                            <div class=\"daysEvent ts13\" *ngIf=\"!volDetails?.date_end\">\r\n                                Início a {{volDetails?.date_begin | date:\"d\"}} de {{volDetails?.date_begin | date:\"MMMM\"}}\r\n                            </div>\r\n                            <div class=\"daysEvent ts13\" *ngIf=\"volDetails?.date_end\">\r\n                                {{volDetails?.date_begin | date:\"d\"}} de {{volDetails?.date_begin | date:\"MMMM\"}} - {{volDetails?.date_end | date:\"d\"}} de\r\n                                {{volDetails?.date_end | date:\"MMMM\"}}\r\n                            </div>\r\n                            <div class=\"daysEventFull ts13\" *ngIf=\"volDetails?.duration > 1\">\r\n                                {{volDetails?.duration}} horas diárias\r\n                            </div>\r\n                            <div class=\"daysEventFull ts13\" *ngIf=\"volDetails?.duration < 2\">\r\n                                {{volDetails?.duration}} hora diária\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"margin-left: auto; display:flex; margin-top:5px\">\r\n                        <div>\r\n                            <i class=\"material-icons iconDate\">place</i>\r\n                        </div>\r\n                        <div class=\"descDatePlace \">\r\n                            <div *ngIf=\"addressName\" class=\"daysEvent ts13\">\r\n                                {{addressName}}\r\n                            </div>\r\n                            <div *ngIf=\"address\" class=\"daysEventFull ts13\">\r\n                                {{address}}\r\n                            </div>\r\n                            <div *ngIf=\"!addressName && !address\" class=\"daysEvent ts13\" style=\"padding-top:9px\">Sem localização definida</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 no-padding mapContent\" *ngIf=\"login\">\r\n\r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n            </sebm-google-map>\r\n\r\n        </div>\r\n\r\n        <div class=\"container friendsContainer\" *ngIf=\"login\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 no-padding\" style=\"display:flex; margin-top:5px\">\r\n                    <div>\r\n                        <div class=\"daysEventFull ts13\" (click)=\"openCandidates(1, volDetails.id_vol)\" [class.pointer]=\"numberCandidates > 0\">\r\n                            <span class=\"numberYellow\">{{numberCandidates}}</span><span class=\"normalText\"> candidatos</span>\r\n                        </div>\r\n                        <div *ngIf=\"login\" class=\"likeImgs\">\r\n                            <img *ngFor=\"let candidate of candidates\" src=\"{{candidate?.photo_url}}\">\r\n                            <div *ngIf=\"numberCandidates>10\" class=\"see-all-participants\" (click)=\"openCandidates(1, volDetails.id_vol)\">{{numberCandidates-10}}</div>\r\n                            <div *ngIf=\"!numberCandidates\" class=\"ts13\" style=\"margin-top:5px\">Não existem candidatos.</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"\" style=\"text-align:right; margin-left:auto\">\r\n                        <div class=\"ts13\" (click)=\"openCandidates(2, volDetails.id_vol)\" [class.pointer]=\"numberConfirmeds > 0\">\r\n                            <span class=\"numberBlue\">{{numberConfirmeds}}</span><span class=\"normalText\"> confirmados</span>\r\n                        </div>\r\n                        <div *ngIf=\"login\" class=\"likeImgs\">\r\n                            <img *ngFor=\"let confirmed of confirmeds\" src=\"{{confirmed?.photo_url}}\">\r\n                            <div *ngIf=\"numberConfirmeds>10\" class=\"see-all-participants\" (click)=\"openCandidates(2, volDetails.id_vol)\">{{numberConfirmeds-10}}</div>\r\n                            <div *ngIf=\"!numberConfirmeds\" class=\"ts13\" style=\"margin-top:5px\">Não existem confirmados.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-volum-footer no-padding-side\" *ngIf=\"login\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 no-padding\" style=\"display:flex; align-items:center\">\r\n                        <div class=\"cardLikes\">\r\n                            <md-icon (click)=\"dislike(this.context.idVol)\" *ngIf=\"likeState==1\" class=\"btnLike\">favorite</md-icon>\r\n                            <md-icon (click)=\"like(this.context.idVol)\" *ngIf=\"!numberLikes || likeState==0\" class=\"btnLike btnBlack\">favorite_border</md-icon>\r\n                        </div>\r\n                        <div *ngIf=\"login\" class=\"likesText ts12\">\r\n                            <!-- <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto -->\r\n                            <span *ngIf=\"likeState==1\" class=\"likesTestMe\">Tu</span>\r\n                            <span *ngIf=\"likeState==1 && numberLikes<2\">gostas disto.</span>\r\n                            <span *ngIf=\"likeState==1 && numberLikes>=2\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">e mais</span>\r\n                            <span *ngIf=\"likeState==1 && numberLikes>=2\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">{{numberLikes-1}} pessoa<span *ngIf=\"numberLikes>2\">s</span>                            gostam disto.</span>\r\n                            <span *ngIf=\"likeState==0 && numberLikes>=1\" style=\"cursor:pointer\" (click)=\"openLikesModal(8, volDetails.id_vol)\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=2\">s</span>                            gosta\r\n                            <span *ngIf=\"numberLikes>=2\">m\r\n                                    </span> disto.\r\n                            </span>\r\n                            <span *ngIf=\"likeState==0 && !numberLikes\">Sê o primeiro a gostar disto!</span>\r\n                        </div>\r\n                        <div *ngIf=\"!login\" class=\"likesText ts12\">\r\n                            <span *ngIf=\"numberLikes>=1\">{{numberLikes}} pessoa<span *ngIf=\"numberLikes>=1\">s</span> gostam\r\n                            disto.\r\n                            </span>\r\n                            <span *ngIf=\"!numberLikes || numberLikes==0\">Sê o primeiro a gostar disto. <span (click)=\"openRegister()\" class=\"likesTestMe clickable\" style=\"cursor:pointer\">Regista-te já</span></span>\r\n\r\n                        </div>\r\n                        <div (click)=\"getComments()\" class=\"text-right\" style=\"margin-left:auto\">\r\n                            <div class=\"cardComments ts12\">\r\n                                <div>\r\n                                    <md-icon class=\"btnComments\">textsms</md-icon>\r\n                                </div>\r\n                                <div *ngIf=\"numberComments>0\" class=\"textComments\"><span class=\"commentsNumber\">{{numberComments}}</span> comentário<span *ngIf=\"numberComments>1\">s</span></div>\r\n                                <div *ngIf=\"numberComments==0\" class=\"textComments\">Sê o primeiro a comentar!</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row no-margin card-Comments\" *ngIf=\"showComments && login\">\r\n            <div class=\"col-12 comments-back no-padding\" *ngFor=\"let comment of comments\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"{{comment.photo_url}}\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">{{comment.name}}</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col no-padding card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        {{comment.message}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n            <div class=\"col-12 insert-comment \">\r\n                <div class=\"row\">\r\n                    <div class=\"col no-padding card-user--comments-image card-user-comments-image-comments\">\r\n                        <img src=\"{{userLogin.photo}}\">\r\n                    </div>\r\n                    <div class=\"col no-padding\">\r\n                        <md-input-container class=\"width100\">\r\n                            <input autofocus mdInput [(ngModel)]=\"comentario\" (keyup.enter)=\"sendComment(comentario)\">\r\n                        </md-input-container>\r\n                    </div>\r\n                    <!--<div class=\"col-1 btnSend text-right no-padding\">\r\n                    \r\n                </div>-->\r\n\r\n                    <button (click)=\"sendComment(comentario)\" type=\"submit\" class=\"btnSendIcon btnSendColorGrey\">\r\n                   <md-icon class=\"send\">send</md-icon>\r\n                </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(472);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
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
    function SharedService(http) {
        this.http = http;
    }
    SharedService.prototype.getProfile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.getCandidates = function (id_vol, amount) {
        if (amount == null) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates").toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates", { amount: amount }).toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    SharedService.prototype.getConfirmed = function (id_vol, amount) {
        if (amount == null) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed").toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed", { amount: amount }).toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    SharedService.prototype.countLikes = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/likes/count").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.checkLike = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/checkLike").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.like = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/like", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.dislike = function (id_vol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/dislike", null).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    SharedService.prototype.getLikes = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/likes").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], SharedService);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/shared.service.js.map

/***/ })

},[702]);
//# sourceMappingURL=main.bundle.js.map