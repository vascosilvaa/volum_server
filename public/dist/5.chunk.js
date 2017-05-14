webpackJsonp([5,10],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_routing__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting_waiting_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invites_invites_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_actions_my_actions_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsModule", function() { return ActionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ActionsModule = (function () {
    function ActionsModule() {
    }
    return ActionsModule;
}());
ActionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__actions_routing__["a" /* ActionsRoutingModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__actions_component__["a" /* ActionsComponent */], __WEBPACK_IMPORTED_MODULE_4__my_actions_my_actions_component__["a" /* MyActionsComponent */], __WEBPACK_IMPORTED_MODULE_3__invites_invites_component__["a" /* InvitesComponent */], __WEBPACK_IMPORTED_MODULE_2__waiting_waiting_component__["a" /* WaitingComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["LOCALE_ID"], useValue: "pt-PT" },
        ]
    })
], ActionsModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/actions.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
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
    }
    ProfileService.prototype.getProfile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.getVolHistory = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + '/vols').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.getMyVols = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + '/my-vols').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ProfileService.prototype.follow = function (id_user, id_user1) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follow', { id_user: id_user1 }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ProfileService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.service.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_service__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionsComponent = (function () {
    function ActionsComponent(route, http, profileService, auth, router) {
        this.route = route;
        this.http = http;
        this.profileService = profileService;
        this.auth = auth;
        this.router = router;
        this.invite = 0;
    }
    ActionsComponent.prototype.ngOnInit = function () {
        /*this.route.params.subscribe((params) => {
            this.idProfile = this.route.parent.snapshot.params['id'];
            this.profileService.getProfile(this.idProfile).then(res => {
              this.user = res.user;
            });
      
          });
          this.getUser();
        }
        getUser() {
          if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(res => {
              this.userLogin = res.user;
              let id = localStorage.getItem('USER_ID');
              this.idLogin = id;
             }
            );
      
          }
        }
        onSelect(profile) {
          this.router.navigate(['/profile/' + profile + '/details']);
        }
      */ 
    };
    return ActionsComponent;
}());
ActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-actions',
        template: __webpack_require__(793),
        styles: [__webpack_require__(764)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object])
], ActionsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/actions.component.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvitesComponent = (function () {
    function InvitesComponent() {
    }
    InvitesComponent.prototype.ngOnInit = function () {
    };
    return InvitesComponent;
}());
InvitesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invites',
        template: __webpack_require__(794),
        styles: [__webpack_require__(765)]
    }),
    __metadata("design:paramtypes", [])
], InvitesComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/invites.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_actions_service__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyActionsComponent = (function () {
    function MyActionsComponent(route, myactionsservice, router) {
        this.route = route;
        this.myactionsservice = myactionsservice;
        this.router = router;
        this.address = [];
        this.addressName = [];
    }
    MyActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idProfile = _this.route.parent.parent.parent.snapshot.params['id'];
        });
        this.getMyActions(this.idProfile);
    };
    MyActionsComponent.prototype.getMyActions = function (id) {
        var _this = this;
        this.myactionsservice.getMyActions(id)
            .then(function (res) {
            _this.myVols = res.vols;
            _this.getAddress();
        });
    };
    MyActionsComponent.prototype.getAddress = function () {
        var _this = this;
        console.log(this.myVols);
        var _loop_1 = function (vol) {
            this_1.myactionsservice.getAddress(vol.lat, vol.long)
                .then(function (res) {
                _this.addressData = res.results;
                _this.address[vol.id_vol] = _this.addressData[0].formatted_address;
                console.log(_this.address[vol.id_vol]);
                _this.addressName[vol.id_vol] = _this.addressData[0].address_components[0].short_name;
                console.log(_this.addressName[vol.id_vol]);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.myVols; _i < _a.length; _i++) {
            var vol = _a[_i];
            _loop_1(vol);
        }
    };
    MyActionsComponent.prototype.seeDetails = function (id_vol) {
        this.router.navigate(['/profile/' + this.idProfile + '/details/' + id_vol]);
    };
    return MyActionsComponent;
}());
MyActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-my-actions',
        template: __webpack_require__(795),
        styles: [__webpack_require__(766)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__my_actions_service__["a" /* MyActionsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__my_actions_service__["a" /* MyActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__my_actions_service__["a" /* MyActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object])
], MyActionsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/my-actions.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaitingComponent = (function () {
    function WaitingComponent() {
    }
    WaitingComponent.prototype.ngOnInit = function () {
    };
    return WaitingComponent;
}());
WaitingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-waiting',
        template: __webpack_require__(796),
        styles: [__webpack_require__(767)]
    }),
    __metadata("design:paramtypes", [])
], WaitingComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/waiting.component.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__waiting_waiting_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invites_invites_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_actions_my_actions_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__actions_component__["a" /* ActionsComponent */],
        children: [
            {
                path: '',
                redirectTo: 'my-actions'
            },
            {
                path: 'my-actions',
                component: __WEBPACK_IMPORTED_MODULE_2__my_actions_my_actions_component__["a" /* MyActionsComponent */]
            },
            {
                path: 'invites',
                component: __WEBPACK_IMPORTED_MODULE_1__invites_invites_component__["a" /* InvitesComponent */]
            },
            {
                path: 'waiting',
                component: __WEBPACK_IMPORTED_MODULE_0__waiting_waiting_component__["a" /* WaitingComponent */]
            },
        ]
    },
];
var ActionsRoutingModule = (function () {
    function ActionsRoutingModule() {
    }
    return ActionsRoutingModule;
}());
ActionsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]]
    })
], ActionsRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/actions.routing.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyActionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyActionsService = (function () {
    function MyActionsService(http, HTTP) {
        this.http = http;
        this.HTTP = HTTP;
    }
    MyActionsService.prototype.getMyActions = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id + "/my-vols").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    MyActionsService.prototype.getAddress = function (lat, lng) {
        return this.HTTP.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return MyActionsService;
}());
MyActionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _b || Object])
], MyActionsService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/my-actions.service.js.map

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 \">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\" card-block noPadding\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2 col-6 navCard vcenter titleNavLink\">\r\n                <a routerLink=\"my-actions\" [routerLinkActive]=\"['navLinkAtive']\" class=\"navLink\">Minhas ações</a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-6 navCard vcenter titleNavLink\">\r\n                <a routerLink=\"invites\" [routerLinkActive]=\"['navLinkAtive']\"  class=\"navLink\">Convites<span class=\"badge badge-pill badge-primary\">2</span></a>\r\n              </div>\r\n               <div class=\"col-lg-2 col-6 navCard vcenter titleNavLink\">\r\n                <a routerLink=\"waiting\"  [routerLinkActive]=\"['navLinkAtive']\"  class=\"navLink\">Em espera</a>\r\n              </div>\r\n             <!-- <div class=\"col text-right titleNavLink iconCard \">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n<!-- detalhes -->\r\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\r\n    <div class=\"col-12 table\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-inverse\" class=\"cabecalho\">\r\n          <tr>\r\n            <th>TITULO</th>\r\n            <th>LOCALIZAÇÃO</th>\r\n            <th>DATA</th>\r\n            <th>CRIADO POR</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Técnico de juventude</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Centro ocupacional AME</div>\r\n              <div class=\"\">Rua dos pardais, 4430-826</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n\r\n            <td>\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">André Martins</span>\r\n            </td>\r\n\r\n           \r\n\r\n            <td class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\"(click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n            <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Enfermeiros voluntários</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Centro de Saúde de Aveiro</div>\r\n              <div class=\"\">Rua das Corujas Pretas, 3810-164</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n           \r\n            <td>\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">Vasco Silva</span>\r\n            </td>\r\n\r\n          \r\n\r\n            <td class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\"(click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n            <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Dinamização de matrículas</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Universidade de Aveiro</div>\r\n              <div class=\"\">Universidade de Aveiro, 3810-164</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n         \r\n\r\n            <td>\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">Pedro Araújo</span>\r\n            </td>\r\n\r\n            \r\n\r\n            <td  class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\"(click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n            <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Limpeza de Rio Febros</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Rio Febros</div>\r\n              <div class=\"\">Rua do Febros, 3810-164</div>\r\n              <div>Porto, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n            <td >\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">Pedro Cunha</span>\r\n            </td>\r\n\r\n\r\n            <td class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\r\n    <div class=\"col-12 table\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-inverse\" class=\"cabecalho\">\r\n          <tr>\r\n            <th>TITULO</th>\r\n            <th>LOCALIZAÇÃO</th>\r\n            <th>DATA</th>\r\n            <th>CONFIRMADOS</th>\r\n            <th>CANDIDATOS</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"tableText\" *ngFor=\"let vol of myVols; let i=index\">\r\n            <th class=\"tableBold tableTitle\">{{vol.name}}</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">{{addressName[vol.id_vol]}}</div>\r\n              <div class=\"\">{{address[vol.id_vol]}}</div>\r\n\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">{{vol?.date_begin | date:\"d\"}} de {{vol?.date_begin | date:\"MMMM\"}} - {{vol?.date_end | date:\"d\"}} de {{vol?.date_end | date:\"MMMM\"}}</div>\r\n              <div class=\"\">{{vol?.date_begin | date:\"d\"}} de {{vol?.date_begin | date:\"MMMM\"}} às {{vol?.start_time}} até {{vol?.date_end | date:\"d\"}} de {{vol?.date_end | date:\"MMMM\"}} às {{vol?.start_time}}</div>\r\n            </td>\r\n\r\n            <td>\r\n                <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n            </td>\r\n\r\n            <td>\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/fundo_vasco.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n            </td>\r\n\r\n\r\n    \r\n\r\n            <td  class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"seeDetails(vol.id_vol)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >APAGAR</button>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\r\n    <div class=\"col-12 table\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-inverse\" class=\"cabecalho\">\r\n          <tr>\r\n            <th>TITULO</th>\r\n            <th>LOCALIZAÇÃO</th>\r\n            <th>DATA</th>\r\n            <th *ngIf=\"invite==0\">CONFIRMADOS</th>\r\n            <th *ngIf=\"invite==0\">CANDIDATOS</th>\r\n            <th *ngIf=\"invite==1\">CRIADO POR</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Técnico de juventude</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Centro ocupacional AME</div>\r\n              <div class=\"\">Rua dos pardais, 4430-826</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n                <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/fundo_vasco.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n            </td>\r\n\r\n\r\n            <td *ngIf=\"invite==1\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">André Martins</span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >APAGAR</button>\r\n              </div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\"(click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n            <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Enfermeiros voluntários</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Centro de Saúde de Aveiro</div>\r\n              <div class=\"\">Rua das Corujas Pretas, 3810-164</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n                <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/fundo_vasco.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">Vasco Silva</span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >APAGAR</button>\r\n              </div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\"(click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n            <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Dinamização de matrículas</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Universidade de Aveiro</div>\r\n              <div class=\"\">Universidade de Aveiro, 3810-164</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n          <td *ngIf=\"invite==0\">\r\n                <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/fundo_vasco.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n            </td>\r\n\r\n\r\n            <td *ngIf=\"invite==1\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">Pedro Araújo</span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >APAGAR</button>\r\n              </div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\"(click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n            <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Limpeza de Rio Febros</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Rio Febros</div>\r\n              <div class=\"\">Rua do Febros, 3810-164</div>\r\n              <div>Porto, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n         <td *ngIf=\"invite==0\">\r\n                <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/andre.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/pedro.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/fundo_vasco.jpg\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/vasco.jpg\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/cunha.jpg\"></span>\r\n              <span class=\"tableBold margin-left\">Pedro Cunha</span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >APAGAR</button>\r\n              </div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnConfirm\" (click)=\"onSelect(idLogin)\">VER</button>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <button class=\"btn btnCancel\" >REJEITAR</button>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>"

/***/ })

});
//# sourceMappingURL=5.chunk.js.map