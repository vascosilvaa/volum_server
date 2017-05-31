webpackJsonp([10],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__(616);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__chat__["a" /* Chat */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* Chat */]),
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__chat__["a" /* Chat */]
        ]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_client__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
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
    }
    ChatService.prototype.getConversations = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.getMessages = function (id_conversation) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + '/messages').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.sendMessage = function (id_conversation, message) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + "/message", { message: message }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    ChatService.prototype.getLastMessage = function (id_conversation) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/" + id_conversation + "/messages/last").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */]])
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_client__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getProfile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UsersService.prototype.follow = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/follow", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UsersService.prototype.unfollow = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/unfollow", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UsersService.prototype.listFollows = function (id_user, type) {
        if (type == 1) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/users').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else if (type == 2) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/inst').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    UsersService.prototype.countFollows = function (id_user, type) {
        if (type == 1) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/users/count').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
        else if (type == 2) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/follows/inst/count').toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (error) { return console.log(error); });
        }
    };
    UsersService.prototype.checkState = function (id_user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/users/" + id_user + '/checkFollow').toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UsersService.prototype.engageConversation = function (id_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/chat/", { id_user: id_user }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_http_client__["a" /* HttpClient */]])
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_users_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
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
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Chat = (function () {
    function Chat(navCtrl, navParams, userService, actionSheetCtrl, chatService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.chatService = chatService;
        this.platform = platform;
        this.conversations = [];
    }
    Chat.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.chatService.getConversations().then(function (res) {
            console.log("res", res);
            _this.conversations = res.conversations;
            _this.getUsersAndLastMessage();
        });
    };
    Chat.prototype.getUsersAndLastMessage = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.userService.getProfile(this_1.conversations[i].id_user).then(function (res) {
                _this.conversations[i].photo_url = res.user.photo;
                _this.conversations[i].name = res.user.username;
                console.log(res);
            });
            this_1.chatService.getLastMessage(this_1.conversations[i].id_conversation).then(function (res) {
                _this.conversations[i].message = res.messages[0].message;
                _this.conversations[i].date = res.messages[0].date;
                console.log(res);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.conversations.length; i++) {
            _loop_1(i);
        }
    };
    Chat.prototype.goMessage = function (id_conversation, name, photo) {
        this.navCtrl.push("ChatMessage", { id_conversation: id_conversation, name: name, photo: photo });
    };
    Chat.prototype.newMessage = function () {
        this.navCtrl.push("NewMessage");
    };
    Chat.prototype.openSettings = function (id_conversation) {
        var actionSheet = this.actionSheetCtrl.create({
            cssClass: 'action-sheets-chat',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    cssClass: 'textColor',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'textColor',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return Chat;
}());
Chat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Pedro\desktop\volum_mobile\src\pages\chat\chat.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="white" (click)="newMessage()">\n\n                <ion-icon name="create"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-toolbar color="primary">\n\n            <ion-searchbar placeholder="Procurar"></ion-searchbar>\n\n        </ion-toolbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- UTILIZAR COMPONENT USER!!!! -->\n\n<ion-content class="content-background">\n\n    <ion-list no-lines no-border margin-top>\n\n        <button ion-item class="fixAvatar" mode="md" (tap)="goMessage(conversation.id_conversation, conversation.name, conversation.photo_url)" (press)="openSettings(conversation.id_conversation)" *ngFor="let conversation of conversations">\n\n            <ion-avatar item-left>\n\n                <img [src]="conversation?.photo_url">\n\n            </ion-avatar>\n\n            <p text-wrap><span class="bold font-grey4">{{conversation?.name}}</span></p>\n\n            <p class="font-sm font-grey4 bold"><span>{{conversation?.message}}</span></p>\n\n            <ion-note item-right>\n\n                <p class="font-grey4 font-sm bold">{{conversation?.date | date}} </p>\n\n            </ion-note>\n\n        </button>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pedro\desktop\volum_mobile\src\pages\chat\chat.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_0__services_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */]])
], Chat);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map