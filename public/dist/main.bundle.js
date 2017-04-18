webpackJsonp([5,8],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalConstants; });
var GlobalConstants = (function () {
    function GlobalConstants() {
    }
    Object.defineProperty(GlobalConstants, "API_ENDPOINT", {
        // public static get API_ENDPOINT(): string { return 'http://localhost:8080/api'; }
        get: function () { return 'http://146.185.137.215/api'; },
        enumerable: true,
        configurable: true
    });
    return GlobalConstants;
}());

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/global-constants.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
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
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/http-client.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
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
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var VolDetailsModalComponent = (function () {
    function VolDetailsModalComponent(dialog) {
        this.dialog = dialog;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.size = "lg";
    }
    VolDetailsModalComponent.prototype.ngOnInit = function () {
    };
    return VolDetailsModalComponent;
}());
VolDetailsModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vol-details-modal',
        template: __webpack_require__(467),
        styles: [__webpack_require__(457)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["b" /* DialogRef */]) === "function" && _a || Object])
], VolDetailsModalComponent);

var _a;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/vol-details-modal.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
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
}(__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var LoginComponent = (function () {
    function LoginComponent(_fb, auth, dialog) {
        this._fb = _fb;
        this.auth = auth;
        this.dialog = dialog;
        this.stateEmail = 0;
        this.statePass = 0;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(3)]]
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
        })
            .catch(function (err) { return console.log(err); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'login',
        styles: [__webpack_require__(453)],
        template: __webpack_require__(462),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/login.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_feed_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
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
        template: __webpack_require__(463),
        styles: [__webpack_require__(454)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__feed_feed_service__["a" /* FeedService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__feed_feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__feed_feed_service__["a" /* FeedService */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/map.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
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
}(__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

var RegisterComponent = (function () {
    function RegisterComponent(_fb, auth, dialog) {
        this._fb = _fb;
        this.auth = auth;
        this.dialog = dialog;
        this.emailRegist = 0;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(6)]],
            password2: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(6)]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(2)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(2)]],
        });
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
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
        })
            .catch(function (err) { return console.log(err); });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'register',
        styles: [__webpack_require__(455)],
        template: __webpack_require__(464),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["b" /* DialogRef */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/register.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/components/feed/feed.module": [
		512,
		1
	],
	"../app/components/profile/profile.module": [
		514,
		0
	],
	"app/components/profile/following/following.module": [
		513,
		3
	],
	"app/components/profile/settings/settings.module": [
		515,
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
webpackAsyncContext.id = 315;


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(381);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/main.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
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
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FeedService);

var _a;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/feed.service.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_card_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(35);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_7__card_card_component__["a" /* CardComponent */], __WEBPACK_IMPORTED_MODULE_3__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */]],
    })
], SharedModule);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/shared.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_register_register_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
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
    function AppComponent(overlay, vcRef, modal, router, auth) {
        this.modal = modal;
        this.router = router;
        this.auth = auth;
        overlay.defaultViewContainer = vcRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                _this.user = res.user;
                console.log(_this.user);
                var id = localStorage.getItem('USER_ID');
                _this.idLogin = id;
            });
        }
    };
    AppComponent.prototype.openLogin = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    AppComponent.prototype.openRegister = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__components_register_register_component__["a" /* RegisterComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.user = null;
    };
    AppComponent.prototype.onSelect = function (profile) {
        this.router.navigate(['/profile/' + profile + '/activity']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(460),
        styles: [__webpack_require__(451)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["g" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/app.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_map_map_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_filter_filter_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_client__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_layout_layout_component__ = __webpack_require__(377);
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
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_1__shared_filter_filter_component__["a" /* FilterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__components_map_map_module__["a" /* MapModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_map_map_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
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
                path: 'profile/:id',
                loadChildren: '../app/components/profile/profile.module#ProfileModule'
            },
            {
                path: 'feed',
                loadChildren: '../app/components/feed/feed.module#FeedModule'
            },
            {
                path: 'map',
                component: __WEBPACK_IMPORTED_MODULE_0__components_map_map_component__["a" /* MapComponent */]
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/app.routing.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(overlay, vcRef, modal) {
        this.modal = modal;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.open = function () {
        this.modal.alert()
            .size('sm')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'layout',
        template: __webpack_require__(461),
        styles: [__webpack_require__(452)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["g" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _c || Object])
], LayoutComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/layout.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(5);
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

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/map.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vol_details_modal_vol_details_modal_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
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
    function CardComponent(overlay, vcRef, modal, router) {
        this.modal = modal;
        this.router = router;
        this.foto1 = 1;
        this.foto2 = 0;
        this.foto3 = 0;
        overlay.defaultViewContainer = vcRef;
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.openVolDetails = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
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
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "userCreator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "dateCreation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "desc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "avatar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "username", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "verified", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "map", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'vol-card',
        template: __webpack_require__(465),
        styles: [__webpack_require__(456)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["g" /* Overlay */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], CardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/card.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterComponent = (function () {
    function FilterComponent() {
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(466),
        styles: [__webpack_require__(458)]
    }),
    __metadata("design:paramtypes", [])
], FilterComponent);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/filter.component.js.map

/***/ }),

/***/ 381:
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
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/environment.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n/* HEADER */\n.header-background {\n  background-color: #0F76F7;\n  height: 50px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 10; }\n\n.titleBrand a {\n  color: #FFFFFF;\n  font-weight: 600;\n  letter-spacing: 8px;\n  font-size: 1.45rem;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  padding-right: 15px;\n  text-decoration: none; }\n\n.menuHeader {\n  text-align: right; }\n\n.menuHeader ul {\n  padding-top: 8px;\n  padding-left: 15px; }\n\n.menuHeader ul li {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 2px;\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.menuHeader ul li:last-child {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 0;\n  padding-left: 8px;\n  padding-right: 0; }\n\n.navbar-user-picture img {\n  width: 35px;\n  height: 35px;\n  border-radius: 35px;\n  margin-right: 5px; }\n\n.navbar-namePicture-arrow {\n  display: inline-block;\n  vertical-align: middle; }\n\n.menuHeader ul li:hover {\n  cursor: pointer; }\n\n/deep/ .mat-menu-panel {\n  /* box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12); */\n  width: 220px;\n  margin-top: 40px; }\n\n/deep/ .cdk-overlay-pane {\n  margin-left: -10px; }\n\n/deep/ .mat-menu-ripple {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #919191 !important; }\n\n/deep/ .mat-menu-ripple:hover {\n  border-bottom: 1px solid #919191 !important; }\n\n/deep/ .mat-menu-content {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n  border-bottom: 1px solid #F7F8FA !important; }\n\n/deep/ .mat-menu-item {\n  font-size: 14px !important;\n  font-family: Lato !important; }\n\n/deep/ .mat-menu-item:hover {\n  font-size: 14px !important;\n  font-family: Lato !important;\n  color: #4A4A4A !important;\n  background: #FFFFFF !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n/* HEADER */\n.header-background {\n  background-color: #0F76F7;\n  height: 180px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.titleBrand a {\n  color: #FFFFFF;\n  font-weight: 600;\n  letter-spacing: 8px;\n  font-size: 1.45rem;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  padding-right: 15px;\n  text-decoration: none; }\n\n.menuHeader {\n  text-align: right; }\n\n.menuHeader ul {\n  padding-top: 8px;\n  padding-left: 15px; }\n\n.menuHeader ul li {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 2px;\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.menuHeader ul li:last-child {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  padding-top: 0;\n  padding-left: 8px;\n  padding-right: 0; }\n\n.navbar-user-picture img {\n  width: 35px;\n  height: 35px;\n  border-radius: 35px;\n  margin-right: 5px; }\n\n.navbar-namePicture-arrow {\n  display: inline-block;\n  vertical-align: middle; }\n\n.menuHeader ul li:hover {\n  cursor: pointer; }\n\n/* HEADER */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.containerLogin {\n  padding: 32px; }\n\nbutton {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  font-size: 16px;\n  font-family: Lato; }\n\n.facebookLogin {\n  background: #4568B2;\n  color: #fff;\n  border: 1px solid #4568B2;\n  margin-bottom: 6px; }\n\n.googleLogin {\n  background: #FFFFFF;\n  color: #919191;\n  border: 1px solid #E6E5E5; }\n\n.normalLogin {\n  background: #FF8A65;\n  color: #FFFFFF;\n  border: 1px solid #FF8A65;\n  margin-top: 15px; }\n\n.orLogin {\n  margin-top: 10px;\n  margin-bottom: 23px; }\n\n.divider-hr {\n  margin-top: -10px; }\n\n.divider-or {\n  padding: 6px;\n  background: #FFFFFF;\n  font-family: Lato;\n  color: #919191; }\n\ninput {\n  width: 100%;\n  border-radius: 3px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  color: #919191;\n  font-size: 16px;\n  font-family: Lato;\n  border: 1px solid #E6E5E5; }\n\n.inputEmailLogin {\n  margin-bottom: 6px; }\n\n.inputPasswordLogin {\n  margin-bottom: 6px; }\n\n.forgotPass {\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px;\n  font-family: Lato; }\n\n.forgotPass:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.footerLogin {\n  margin-top: 20px; }\n\n.registerBtn {\n  width: 110px;\n  border-radius: 0px;\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  padding-left: 21px !important;\n  padding-right: 21px !important;\n  background: #FFFFFF;\n  color: #FF8A65;\n  font-size: 14px;\n  font-family: Lato;\n  border: 1px solid #FF8A65; }\n\n.btnRegister {\n  margin-top: -30px; }\n\n.registerAdvice {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 16px;\n  color: #4A4A4A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.sebm-google-map-container {\n  height: 100vh;\n  top: -50px;\n  position: relative;\n  z-index: 1; }\n\n.cardsSection {\n  overflow-y: scroll;\n  height: 75vh; }\n\n.searchSection {\n  height: 100px;\n  background: #FFFFFF;\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.areaSearch {\n  padding-left: 30px;\n  padding-right: 45px; }\n\n.mapFull {\n  overflow: hidden; }\n\n.searchTitle {\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 10px 20px; }\n\n.inputSearch {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #E6E5E5;\n  border-radius: 3px;\n  padding: 15px;\n  font-size: 14px;\n  color: #919191; }\n\n.areaInput {\n  padding: 0px 20px; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\n.map {\n  margin-right: -20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.containerLogin {\n  padding: 32px; }\n\ninput {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  background: #FFFFFF;\n  color: #919191;\n  font-size: 16px;\n  font-family: Lato;\n  border: 1px solid #E6E5E5;\n  margin-bottom: 6px; }\n\nbutton {\n  width: 100%;\n  border-radius: 0px;\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-left: 27px !important;\n  padding-right: 27px !important;\n  font-size: 16px;\n  font-family: Lato;\n  margin-bottom: 6px;\n  cursor: pointer; }\n\n.facebookLogin {\n  background: #4568B2;\n  color: #fff;\n  border: 1px solid #4568B2; }\n\n.googleLogin {\n  background: #FFFFFF;\n  color: #919191;\n  border: 1px solid #E6E5E5; }\n\n.normalLogin {\n  background: #FF8A65;\n  color: #FFFFFF;\n  border: 1px solid #FF8A65;\n  margin-top: 15px; }\n\n.orLogin {\n  margin-top: 10px;\n  margin-bottom: 23px; }\n\n.divider-hr {\n  margin-top: -10px; }\n\n.divider-or {\n  padding: 6px;\n  background: #FFFFFF;\n  font-family: Lato;\n  color: #919191; }\n\n.forgotPass {\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px;\n  font-family: Lato; }\n\n.forgotPass:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.footerLogin {\n  margin-top: 20px; }\n\n.registerBtn {\n  border-radius: 0px;\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  padding-left: 21px !important;\n  padding-right: 21px !important;\n  width: 110px;\n  background: #FFFFFF;\n  color: #FF8A65;\n  font-size: 14px;\n  font-family: Lato;\n  border: 1px solid #FF8A65; }\n\n.btnRegister {\n  margin-top: -30px; }\n\n.registerAdvice {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 16px;\n  color: #4A4A4A; }\n\n.registerAdvice1 {\n  margin-top: 10px;\n  font-family: Lato;\n  font-size: 14px;\n  color: #4A4A4A; }\n\n.adviceSocial {\n  color: #0F76F7;\n  cursor: pointer; }\n\n.adviceSocial:hover {\n  text-decoration: underline; }\n\n.serviceAdvice {\n  color: #919191;\n  font-size: 12px;\n  margin-top: 15px;\n  font-family: Lato;\n  margin-bottom: 0; }\n\n.registSuccess {\n  color: #4A4A4A;\n  font-size: 14px;\n  font-family: Lato; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600;\n  cursor: pointer; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-top: 10px;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 110px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.card-Comments {\n  border-top: 1px solid #E6E5E5; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  padding-top: 10px; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5; }\n\n.card-user-comments-image-comments {\n  padding-top: 5px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600;\n  cursor: pointer; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-top: 10px;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 110px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.card-Comments {\n  border-top: 1px solid #E6E5E5; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  padding-top: 10px; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5; }\n\n.card-user-comments-image-comments {\n  padding-top: 5px; }\n\n.imgSlider {\n  margin-top: 10px; }\n\n.imgSliderInd {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ball1, .ball2, .ball3 {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #0F76F7;\n  border: 1px solid #0F76F7;\n  border-radius: 50px; }\n\n.ball1Empty, .ball2Empty, .ball3Empty {\n  margin-top: 4px;\n  margin-right: 3px;\n  width: 7px;\n  height: 7px;\n  background: #E6E5E5;\n  border: 1px solid #E6E5E5;\n  border-radius: 50px; }\n\n.balls {\n  margin-left: 270px; }\n\n.rightArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 12;\n  background-color: #E6E5E5;\n  width: 70px;\n  margin-top: -260px;\n  margin-left: 470px;\n  cursor: pointer; }\n\n.rightArrow:hover {\n  opacity: 0.1; }\n\n.leftArrow {\n  height: 250px;\n  opacity: 0;\n  z-index: 10;\n  width: 70px;\n  margin-top: -254px;\n  background-color: #E6E5E5;\n  margin-left: 0;\n  cursor: pointer; }\n\n.leftArrow:hover {\n  opacity: 0.1; }\n\n.iconRight {\n  margin-top: 120px;\n  margin-left: 30px;\n  color: #fff; }\n\n.modalHeader {\n  background: #0F76F7;\n  padding: 15px 20px; }\n\n.day-w-border {\n  width: 60px;\n  border: 2px solid #FFFFFF;\n  border-radius: 7px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 5px; }\n\n.modalTitle {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.containerDatePlace {\n  margin-top: 10px; }\n\n.modalTitleDesc {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-weight: 600; }\n\n.modalSubtitle {\n  font-size: 13px;\n  color: #FFFFFF; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px; }\n\n.card-user-nd {\n  padding-left: 10px; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.modalContainer {\n  background: #FFFFFF;\n  padding: 20px;\n  padding-bottom: 0px; }\n\n.card-user-desc {\n  color: #4A4A4A; }\n\n.card-user-event {\n  color: #FF8A65;\n  font-weight: 600; }\n\n.btnCandidate {\n  background: #FFCB2B;\n  font-size: 12px;\n  border: 0;\n  border-radius: 4px;\n  color: #FFFFFF;\n  font-weight: 600;\n  padding: 12px 16px; }\n\n.modalTextArea {\n  margin-top: 15px;\n  text-indent: 10px;\n  text-align: justify; }\n\n.sectionDatePlace {\n  height: 10px;\n  width: 100%;\n  border-top: 1px solid #E6E5E5;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.iconDate {\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 15px; }\n\n.daysEvent {\n  font-weight: 600;\n  margin-top: 5px;\n  color: #4A4A4A; }\n\n.descDatePlace {\n  padding-left: 15px; }\n\n.daysEventFull {\n  font-weight: 300;\n  color: #4A4A4A; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-side {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.sebm-google-map-container {\n  height: 100px; }\n\n.mapContent {\n  margin-top: 40px; }\n\n.friendsContainer {\n  margin-top: 10px; }\n\n.likeImgs {\n  margin-top: 2.5px;\n  margin-left: 15px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -15px;\n  border-radius: 30px; }\n\n.numberYellow {\n  font-size: 18px;\n  color: #FFCB2B;\n  font-weight: 600; }\n\n.numberBlue {\n  font-size: 18px;\n  color: #0F76F7;\n  font-weight: 600; }\n\n.normalText {\n  font-size: 13px;\n  color: #4A4A4A; }\n\n.comments-back {\n  background: #E6E5E5; }\n\n.card-volum-footer {\n  padding: 0; }\n\n.card-volum-footer {\n  border-top: 1px solid #E6E5E5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  margin-top: 20px; }\n\n.comments-header, .comments-content {\n  margin-right: -20px;\n  margin-left: -20px; }\n\n.card-Comments {\n  border: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-background\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2 col-12 brandBackground\">\r\n            <div class=\"titleBrand\">\r\n                <a routerLink=\"/feed\">VOLUM</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-10 col-12 menuHeader\">\r\n            <ul>\r\n                <li *ngIf=\"user\" routerLink=\"map\">\r\n                    <md-icon>place</md-icon>\r\n                </li>\r\n                <li *ngIf=\"user\">\r\n                    <md-icon>people</md-icon>\r\n                </li>\r\n\r\n                <li *ngIf=\"user\">\r\n                    <md-icon>chat_bubble</md-icon>\r\n                </li>\r\n\r\n                <li *ngIf=\"user\">\r\n                    <md-icon>notifications</md-icon>\r\n                </li>\r\n\r\n               <li (click)=\"openRegister()\" *ngIf=\"!user\">\r\n                    Registar\r\n                </li>\r\n                \r\n                <li (click)=\"openLogin()\" *ngIf=\"!user\" >\r\n                    Entrar\r\n                </li>\r\n                \r\n                \r\n                <li *ngIf=\"user\" [mdMenuTriggerFor]=\"menu\">\r\n                    <span class=\"navbar-user-picture\">\r\n                     <img [src]=\"user?.photo\">\r\n                     \r\n                 </span> {{user?.username}}\r\n                  <div class=\"navbar-namePicture-arrow\">\r\n                        <md-icon>arrow_drop_down</md-icon>\r\n                    </div>\r\n                    <md-menu #menu=\"mdMenu\">\r\n                        <button md-menu-item (click)=\"onSelect(idLogin)\" *ngIf=\"user\" styles=\"font-size:10px!important\">Perfil</button>\r\n                        <button md-menu-item *ngIf=\"user\">Definições</button>\r\n                        <button md-menu-item (click)=\"logout()\" *ngIf=\"user\">Sair</button>\r\n                    </md-menu>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!--\r\n<form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n    <br> Login <input type=\"text\" formControlName=\"login\">\r\n    <small *ngIf=\"!form.controls.login.valid && form.controls.login.dirty\" style=\"color:red\">Invalido</small>\r\n    <br> Password <input type=\"password\" formControlName=\"password\">\r\n    <br>\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n-->\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 containerLogin\">\r\n            <form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                <div class=\"col-12\">\r\n                    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <button class=\"googleLogin\">Entrar com o Google</button>\r\n                </div>\r\n                <div class=\"col-12 text-center orLogin\">\r\n                    <span class=\"divider-or\">ou</span>\r\n                    <hr class=\"divider-hr\">\r\n                </div>\r\n                <div class=\"col-12\" >\r\n                    <input [class.borda]=\"!form.controls.email.valid && form.controls.email.dirty\" type=\"email\" formControlName=\"email\"\r\n                        class=\"inputEmailLogin form-control\" placeholder=\"Endereço de e-mail\">\r\n                    <div *ngIf=\"!form.controls.email.valid && form.controls.email.dirty\" class=\"textError\">Endereço de email inválido.</div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <input [class.borda]=\"!form.controls.password.valid && form.controls.password.dirty\"  type=\"password\" class=\"inputPasswordLogin form-control\" formControlName=\"password\" placeholder=\"Palavra-passe\">\r\n                    <div *ngIf=\"!form.controls.password.valid && form.controls.password.dirty\" class=\"textError\">Palavra passe inválida</div>\r\n                </div>\r\n                <div class=\"col-12 text-right forgotPass\">\r\n                    <span>Esqueceu a sua palavra passe?</span>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <button type=\"submit\" class=\"normalLogin\">Entrar</button>\r\n                </div>\r\n                <div class=\"col-12 footerLogin\">\r\n                    <hr>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <span class=\"registerAdvice\">Ainda não tem uma conta?</span>\r\n                </div>\r\n                <div class=\"col text-right btnRegister\">\r\n                    <button class=\"registerBtn\">Registe-se</button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <div class=\"container\">\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-padding mapFull\">\r\n    <div class=\"row no-padding\">\r\n        <div class=\"col-7 map\">\r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n            </sebm-google-map>\r\n        </div>\r\n        <div class=\"col-5 \">\r\n            <div class=\"row\">\r\n                <div class=\"areaSearch col-12\">\r\n                    <div class=\"searchSection\">\r\n                        <div class=\"searchTitle\">Pesquisar voluntariados por local específico:</div>\r\n                        <div class=\"areaInput\">\r\n                            <input type=\"text\" class=\"inputSearch\" placeholder=\"Inserir localização...\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardsSection col-12\">\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngFor=\"let vol of privateVols\">\r\n                        <vol-card [map]=\"true\" [verified]=\"true\" class=\"swiper-slide\" type='private' [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.name\"\r\n                            [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                        </vol-card>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<!--\r\n<form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n    <button class=\"facebookLogin\">Entrar com o Facebook</button>\r\n    <br> Login <input type=\"text\" formControlName=\"login\">\r\n    <small *ngIf=\"!form.controls.login.valid && form.controls.login.dirty\" style=\"color:red\">Invalido</small>\r\n    <br> Password <input type=\"password\" formControlName=\"password\">\r\n    <br>\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n-->\r\n    <div class=\"row\">\r\n        <div class=\"col-12 containerLogin\">\r\n            <form novalidate (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n                <div *ngIf=\"emailRegist==0\">\r\n                    <div class=\"col-12\">\r\n                        <button class=\"facebookLogin\">Registar com o Facebook</button>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button class=\"googleLogin\">Registar com o Google</button>\r\n                    </div>\r\n                    <div class=\"col-12 text-center orLogin\">\r\n                        <span class=\"divider-or\">ou</span>\r\n                        <hr class=\"divider-hr\">\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <button class=\"normalLogin\" (click)=\"openEmailRegist()\">Registar com o e-mail</button>\r\n                    </div>\r\n                </div>\r\n            \r\n                <div *ngIf=\"emailRegist==1\">\r\n                    <div class=\"col-12 text-center\">\r\n                        <span class=\"registerAdvice1\">Registe-se com o <span class=\"adviceSocial\">Facebook</span> ou <span class=\"adviceSocial\">Google</span>.</span>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-12\">\r\n                        <input type=\"email\" [class.borda]=\"!form.controls.email.valid && form.controls.email.dirty\" formControlName=\"email\"\r\n                        class=\"inputEmailLogin form-control\" placeholder=\"Endereço de e-mail\">\r\n                        <div *ngIf=\"!form.controls.email.valid && form.controls.email.dirty\" class=\"textError\">Endereço de email inválido.</div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <input type=\"text\" [class.borda]=\"!form.controls.name.valid && form.controls.name.dirty\" formControlName=\"name\"\r\n                        class=\"inputEmailLogin form-control\" placeholder=\"Primeiro nome\">\r\n                        <div *ngIf=\"!form.controls.name.valid && form.controls.name.dirty\" class=\"textError\">Nome inválido</div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <input type=\"text\" [class.borda]=\"!form.controls.lastname.valid && form.controls.lastname.dirty\" formControlName=\"lastname\"\r\n                        class=\"inputEmailLogin form-control\" placeholder=\"Último Nome\">\r\n                        <div *ngIf=\"!form.controls.lastname.valid && form.controls.lastname.dirty\" class=\"textError\">Último Nome inválido</div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <input [class.borda]=\"!form.controls.password.valid && form.controls.password.dirty\"  type=\"password\" class=\"inputPasswordLogin form-control\" formControlName=\"password\" placeholder=\"Inserir palavra-passe\">\r\n                    </div>\r\n                    <div *ngIf=\"!form.controls.password.valid && form.controls.password.dirty\" class=\"textError\">Endereço de email inválido.</div>\r\n                    <div class=\"col-12\">\r\n                        <input [class.borda]=\"!form.controls.password2.valid && form.controls.password.dirty\"  type=\"password\" class=\"inputPasswordLogin form-control\" formControlName=\"password2\" placeholder=\"Confirmar palavra-passe\">\r\n                    </div>\r\n                    <div *ngIf=\"!form.controls.password2.valid && form.controls.password2.dirty\" class=\"textError\">Endereço de email inválido.</div>\r\n                    <div class=\"col-12\">\r\n                        <p class=\"serviceAdvice\">Ao fazer o registo, concordo com os Termos de Serviço e a Política de Privacidade da Volum. </p>\r\n                    </div>\r\n\r\n                    <div class=\"col-12\">\r\n                    <button class=\"normalLogin\" (click)=\"openConfirmationEmail()\">Registar com o e-mail</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"emailRegist==2\">\r\n                     <div class=\"col-12\">\r\n                        <span class=\"registerAdvice1\">Registo efetuado com sucesso.</span>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-12\">\r\n                        <p class=\"registSuccess\">Obrigado por se registar!</p>\r\n                        <p class=\"registSuccess\">Irá receber um e-mail de confirmação. Clique no link para começar a utilizar a Volum.</p>\r\n                    </div>\r\n                </div>\r\n\r\n               <div *ngIf=\"emailRegist==1 || emailRegist==0\">\r\n                    <div class=\"col-12 footerLogin\">\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <span class=\"registerAdvice\">Já se encontra registado?</span>\r\n                    </div>\r\n                    <div class=\"col text-right btnRegister\">\r\n                        <button class=\"registerBtn\">Entrar</button>\r\n                    </div>\r\n                </div>\r\n               \r\n                \r\n                \r\n            </form>\r\n\r\n\r\n               <!-- registar com e-mail -->\r\n                \r\n\r\n\r\n                \r\n                <!-- registar com e-mail -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-volum\">\r\n    <!-- HEADER CARD -->\r\n    <div class=\"row no-margin\">\r\n        <div (click)=\"onSelect(userCreator)\" class=\"col card-user-image col-md-auto\">\r\n            <img src=\"{{avatar}}\">\r\n        </div>\r\n        <div class=\"col-6 col-lg-8 card-user-nd\">\r\n            <div *ngIf=\"verified==1\" class=\"card-user-name ts16\"><a (click)=\"onSelect(userCreator)\">{{username}}</a> <button type=\"button\" class=\"btn btn-secondary verified\" placement=\"right\" ngbTooltip=\"Instituição verificada\"><i class=\"material-icons md-18\">verified_user</i></button></div>\r\n            <div *ngIf=\"verified==0\" class=\"card-user-name ts16\"><a (click)=\"onSelect(userCreator)\">{{username}}</a> </div>\r\n            <div class=\"card-date ts14\">{{dateCreation | date}}</div>\r\n        </div>\r\n        <div class=\"col card-option text-right\">\r\n            <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n            <md-menu #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                <md-icon>dialpad</md-icon>\r\n                <span>Redial</span>\r\n              </button>\r\n                <button md-menu-item disabled>\r\n                <md-icon>voicemail</md-icon>\r\n                <span>Check voicemail</span>\r\n              </button>\r\n                <button md-menu-item>\r\n                <md-icon>notifications_off</md-icon>\r\n                <span>Disable alerts</span>\r\n              </button>\r\n            </md-menu>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER CARD -->\r\n\r\n    <!-- CONTENT CARD -->\r\n    <div *ngIf=\"map!=true\">\r\n    <div class=\"imgSlider\">\r\n            <img *ngIf=\"foto1==1\" class=\"imgSliderInd\" src=\"../assets/imgs/testemaps2.PNG\">\r\n            <img *ngIf=\"foto2==1\" class=\"imgSliderInd\" src=\"../assets/imgs/testemaps.PNG\">\r\n            <img *ngIf=\"foto3==1\" class=\"imgSliderInd\" src=\"../assets/imgs/fundo_vasco.jpg\">\r\n    </div>\r\n    <div class=\"balls\">\r\n        <div class=\"row\">\r\n            <div (click)=\"changePhoto1()\" *ngIf=\"foto1==1\"class=\"ball1\"></div>\r\n            <div (click)=\"changePhoto1()\" *ngIf=\"foto1==0\" class=\"ball1Empty\"></div>\r\n            <div (click)=\"changePhoto2()\" *ngIf=\"foto2==1\" class=\"ball2\"></div>\r\n            <div (click)=\"changePhoto2()\" *ngIf=\"foto2==0\" class=\"ball2Empty\"></div>\r\n            <div (click)=\"changePhoto3()\" *ngIf=\"foto3==1\" class=\"ball3\"></div>\r\n            <div (click)=\"changePhoto3()\" *ngIf=\"foto3==0\" class=\"ball3Empty\"></div>\r\n        </div>\r\n    </div>\r\n    <!-- foto1 -->\r\n    <div class=\"rightArrow\" (click)=\"showFoto(2)\" *ngIf=\"foto1==1\">\r\n        <i class=\"material-icons iconRight\">keyboard_arrow_right</i>\r\n    </div>\r\n    <div class=\"leftArrow\" (click)=\"showFoto(3)\" *ngIf=\"foto1==1\">\r\n        <i class=\"material-icons iconRight\">keyboard_arrow_left</i>\r\n    </div>\r\n    <!-- foto2 -->\r\n     <div class=\"rightArrow\" (click)=\"showFoto(3)\" *ngIf=\"foto2==1\">\r\n        <i class=\"material-icons iconRight\">keyboard_arrow_right</i>\r\n    </div>\r\n    <div class=\"leftArrow\" (click)=\"showFoto(1)\" *ngIf=\"foto2==1\">\r\n        <i class=\"material-icons iconRight\">keyboard_arrow_left</i>\r\n    </div>\r\n    <!-- foto3 -->\r\n     <div class=\"rightArrow\" (click)=\"showFoto(1)\" *ngIf=\"foto3==1\">\r\n        <i class=\"material-icons iconRight\">keyboard_arrow_right</i>\r\n    </div>\r\n    <div class=\"leftArrow\" (click)=\"showFoto(2)\" *ngIf=\"foto3==1\">\r\n        <i class=\"material-icons iconRight\">keyboard_arrow_left</i>\r\n    </div>\r\n    </div>\r\n    <div class=\"row no-margin card-volum-content\">\r\n        <div class=\"col-12 ts18 card-volum-title\">\r\n            {{title}}\r\n        </div>\r\n        <div class=\"col-12 ts14 card-volum-description\">\r\n            {{desc}}\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- /CONTENT CARD -->\r\n\r\n    <!-- FOOTER CARD -->\r\n    <div class=\"card-volum-footer\">\r\n        <div class=\"cardLikes\">\r\n            <md-icon class=\"btnLike\">favorite</md-icon>\r\n        </div>\r\n        <div class=\"likesNumber ts12\">\r\n            300\r\n        </div>\r\n        <div *ngIf=\"type=='private'\" class=\"likeImgs\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar3.png\">\r\n            <img src=\"assets/imgs/avatar04.png\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar.png\">\r\n        </div>\r\n        <div *ngIf=\"type=='private'\" class=\"likesText ts12\">\r\n            <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto\r\n        </div>\r\n        <div *ngIf=\"type=='private'\" class=\"cardComments ts12\">\r\n            <div>\r\n                <md-icon class=\"btnComments\">textsms</md-icon>\r\n            </div>\r\n            <div class=\"textComments\"><span class=\"commentsNumber\">16</span> comentários</div>\r\n        </div>\r\n        <div class=\"btnView\">\r\n            <button md-raised-button (click)=\"openVolDetails()\">VER</button>\r\n        </div>\r\n    </div>\r\n    <!-- /FOOTER CARD -->\r\n\r\n<!--\r\n    <div *ngIf=\"type=='private'\">\r\n        <div class=\"row no-margin card-Comments\">\r\n            <div class=\"col-12\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n\r\n            <div class=\"ts14 more-Comments\">\r\n                <span class=\"textMoreComments\">Carregar mais comentários</span><span class=\"moreIcon\"> +</span>\r\n            </div>\r\n\r\n            <div class=\"col-12 insert-comment\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1 card-user--comments-image card-user-comments-image-comments\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <md-input-container class=\"width100\">\r\n                            <input mdInput>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"col-1 btnSend text-center\">\r\n                        <md-icon class=\"btnSendIcon btnSendColorGrey\">send</md-icon>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    -->\r\n</div>"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  filter works!\r\n</p>\r\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"modalHeader row\">\r\n        <div class=\"day-w-border\">\r\n            <div>\r\n                MAR\r\n            </div> \r\n            <div>\r\n                2\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modalTitle\">\r\n            <div class=\"modalTitleDesc\">\r\n                Lorem Ipsum\r\n            </div>\r\n            <div class=\"modalSubtitle\">\r\n                Sábado, às 20:00\r\n            </div>    \r\n    </div>   \r\n    </div>\r\n</div>\r\n\r\n<div class=\"modalContainer row\">\r\n\r\n        <div class=\"card-user-image col-md-auto\">\r\n            <img src=\"../assets/imgs/caritas_logo.gif\">\r\n        </div>\r\n        <div class=\"card-user-nd\">\r\n            <div><span class=\"card-user-name ts16\">Cáritas </span><span class=\"ts14 card-user-desc\"> criou o </span><span class=\"card-user-event ts14\">evento</span></div>\r\n            <div class=\"card-date ts13\">2 de Abril às 9:43</div>\r\n        </div>\r\n        <div class=\"col text-right no-padding\">\r\n            <button class=\"btnCandidate\">CANDIDATAR</button>\r\n        </div>\r\n\r\n        <div class=\"modalTextArea ts13\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla nibh et metus tristique luctus. Donec a volutpat massa. Praesent et mauris sed mi pulvinar bibendum. Vestibulum iaculis libero mi, a lacinia ex semper et. Nullam dignissim mauris tortor, vel hendrerit urna viverra pellentesque. Pellentesque tincidunt nisi ut neque tristique, in sollicitudin ex pharetra. Aliquam dapibus scelerisque tortor, id posuere purus.\r\n        </div>\r\n\r\n        \r\n        <div class=\"sectionDatePlace container\">\r\n        <div class=\"row containerDatePlace\">\r\n            <div class=\"col-6 no-padding\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1\">\r\n                        <i class=\"material-icons iconDate\">query_builder</i>\r\n                    </div>\r\n                    <div class=\"col descDatePlace\">\r\n                        <div class=\"daysEvent ts13\">\r\n                            8 de Março - 12 de Março\r\n                        </div>\r\n                        <div class=\"daysEventFull ts13\">\r\n                            Horário fixo das 10:00 às 12:00\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 no-padding\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1\">\r\n                        <i class=\"material-icons iconDate\">place</i>\r\n                    </div>\r\n                    <div class=\"col descDatePlace\">\r\n                        <div class=\"daysEvent ts13\">\r\n                           Universidade de Aveiro\r\n                        </div>\r\n                        <div class=\"daysEventFull ts13\">\r\n                            3810-164, Aveiro, Portugal\r\n                        </div>\r\n                    </div>\r\n                 </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 no-padding mapContent\">\r\n                         \r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n            <!--<sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" ></sebm-google-map-marker>-->\r\n            </sebm-google-map>\r\n             \r\n        </div>\r\n\r\n\r\n          <div class=\"friendsContainer container\">\r\n        <div class=\"row containerDatePlace\">\r\n            <div class=\"col-6 no-padding\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"daysEventFull ts13\">\r\n                           <span class=\"numberYellow\">20</span><span class=\"normalText\"> candidatos</span>\r\n                        </div>\r\n                        <div class=\"likeImgs\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar3.png\">\r\n                            <img src=\"assets/imgs/avatar04.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar3.png\">\r\n                            <img src=\"assets/imgs/avatar04.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar.png\">\r\n                            <img src=\"assets/imgs/avatar04.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 no-padding\">\r\n                <div class=\"row\">\r\n                    <div class=\"col \">\r\n                        <div class=\"ts13\">\r\n                           <span class=\"numberBlue\">20</span><span class=\"normalText\"> confirmados</span>\r\n                        </div>\r\n                        <div class=\"likeImgs\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar3.png\">\r\n                            <img src=\"assets/imgs/avatar04.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar3.png\">\r\n                            <img src=\"assets/imgs/avatar04.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                            <img src=\"assets/imgs/avatar.png\">\r\n                            <img src=\"assets/imgs/avatar04.png\">\r\n                            <img src=\"assets/imgs/avatar2.png\">\r\n                        </div>\r\n                    </div>\r\n                 </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n          \r\n        \r\n<div class=\"card-volum-footer no-margin\">\r\n        <div class=\"cardLikes\">\r\n            <md-icon class=\"btnLike\">favorite</md-icon>\r\n        </div>\r\n        <div class=\"likesNumber ts12\">\r\n            300\r\n        </div>\r\n       \r\n        <div class=\"cardComments ts12 text-right\">\r\n            <div>\r\n                <md-icon class=\"btnComments\">textsms</md-icon>\r\n            </div>\r\n            <div class=\"textComments\"><span class=\"commentsNumber\">16</span> comentários</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-margin card-Comments\">\r\n            <div class=\"col-12 comments-back no-padding\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n            <div class=\"col-12 comments-back no-padding\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n            <div class=\"col-12 insert-comment no-padding-side\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1 card-user--comments-image card-user-comments-image-comments\">\r\n                        <img src=\"assets/imgs/avatar3.png\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <md-input-container class=\"width100\">\r\n                            <input mdInput>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"col-1 btnSend text-center\">\r\n                        <md-icon class=\"btnSendIcon btnSendColorGrey\">send</md-icon>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        \r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_client__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_constants__ = __webpack_require__(155);
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
        var temp = this.http.get(__WEBPACK_IMPORTED_MODULE_4__global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/profile/" + id).toPromise()
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
//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/authentication.service.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(316);


/***/ })

},[509]);
//# sourceMappingURL=main.bundle.js.map