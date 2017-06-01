webpackJsonp([4,10],{

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_routing__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_message_chat_message_component__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_accordion__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_new_chat_new_component__ = __webpack_require__(896);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__chat_routing__["a" /* ChatRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0_angular2_moment__["MomentModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__chat_message_chat_message_component__["a" /* ChatMessageComponent */], __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_11__chat_new_chat_new_component__["a" /* ChatNewComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["LOCALE_ID"], useValue: "pt-PT" }
        ],
    })
], ChatModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__(885);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });


/** Displays collapsible content panels for presenting information in a limited amount of space. */
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    // tslint:disable-next-line
                    host: {
                        '[class.panel-group]': 'true',
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__accordion_config__["a" /* AccordionConfig */], },
    ]; };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionComponent;
}());
//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionConfig; });

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
    return AccordionConfig;
}());
//# sourceMappingURL=accordion.config.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__(884);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPanelComponent; });



/*
 * ### Accordion heading

 Instead of using `heading` attribute on the `accordion-group`, you can use an `accordion-heading` attribute on `any` element inside of a group that will be used as group's header template.

 * */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "\n<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\">\n    <div class=\"panel-title card-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <div *ngIf=\"heading\"[ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</div>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */],] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'panelClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.panel-open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionPanelComponent;
}());
//# sourceMappingURL=accordion-group.component.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return win; });
/* unused harmony export document */
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(887);
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__(885);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionModule; });






var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.forRoot = function () { return { ngModule: AccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_5__accordion_config__["a" /* AccordionConfig */]] }; };
    AccordionModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__["a" /* CollapseModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = function () { return []; };
    return AccordionModule;
}());
//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__(886);
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__(884);
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(889);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(885);
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseDirective; });

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        this._el = _el;
        this._renderer = _renderer;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    /* tslint:disable-next-line */
                    host: { '[class.collapse]': 'true' } /*,
                    animations: [
                      trigger('active', [
                        state('void', style({height: 0})),
                        state('closed', style({height: 0})),
                        state('open', style({height: '*'})),
                        transition('void => closed', [animate(0)]),
                        transition('closed => open', [animate('350ms ease-out')]),
                        transition('open => closed', [animate('350ms ease-out')])
                      ])
                    ]*/
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'expanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.display',] },],
        'isExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.in',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.show',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapse',] },],
        'isCollapsing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapsing',] },],
        'collapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CollapseDirective;
}());
//# sourceMappingURL=collapse.directive.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__(891);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseModule; });


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
    return CollapseModule;
}());
//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_chat_service__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatMessageComponent = (function () {
    function ChatMessageComponent(router, chatService, auth, socket, activatedRoute) {
        this.router = router;
        this.chatService = chatService;
        this.auth = auth;
        this.socket = socket;
        this.activatedRoute = activatedRoute;
        this.messages = [];
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationName = this.chatService.conversation;
        this.chatService.conversationUpdate.subscribe(function (name) {
            _this.conversationName = name;
            console.log("NAME", name);
        });
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                _this.id_user = res.user.id_user;
                _this.activatedRoute.params.subscribe(function (params) {
                    _this.id_conversation = params.id;
                    _this.getProfile(_this.id_conversation);
                    _this.socket.joinRoom(params.id);
                    _this.getMessages(params.id);
                });
            });
        }
        this.scrollToBottom();
        this.socket.onMessage().subscribe(function (res) {
            console.log("rees", res);
            if (res.from_id == _this.id_user) {
            }
            else {
                _this.messages.push({
                    from_id: res.from_id,
                    message: res.message
                });
            }
        });
    };
    ChatMessageComponent.prototype.navigate_profile = function (profile) {
        this.router.navigate(['/profile/' + profile + '/activity']);
    };
    ChatMessageComponent.prototype.getProfile = function (id_conversation) {
        var _this = this;
        this.chatService.getProfile(id_conversation).then(function (res) {
            _this.profile = res.result;
            console.log(_this.profile);
        });
    };
    ChatMessageComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatMessageComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatMessageComponent.prototype.getMessages = function (id_conversation) {
        var _this = this;
        this.chatService.getMessages(this.id_conversation).then(function (res) {
            _this.messages = res.messages;
            console.log("messages", _this.messages);
        });
    };
    ChatMessageComponent.prototype.sendMessage = function (message) {
        var _this = this;
        if (typeof message == 'string' && message.length > 0 && message && message.replace(/^\s+/g, '').length) {
            this.chatService.sendMessage(this.id_conversation, message).then(function (res) {
                _this.message = '';
                _this.messages.push({
                    from_id: _this.id_user,
                    message: message
                });
            });
        }
    };
    return ChatMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatMessageComponent.prototype, "myScrollContainer", void 0);
ChatMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-chat-message',
        template: __webpack_require__(954),
        styles: [__webpack_require__(925)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_chat_service__["a" /* ChatService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__["a" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], ChatMessageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat-message.component.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatNewComponent = (function () {
    function ChatNewComponent() {
    }
    ChatNewComponent.prototype.ngOnInit = function () {
    };
    return ChatNewComponent;
}());
ChatNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-new',
        template: __webpack_require__(955),
        styles: [__webpack_require__(926)]
    }),
    __metadata("design:paramtypes", [])
], ChatNewComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat-new.component.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(chatService, route, socket, router, auth, profileService) {
        this.chatService = chatService;
        this.route = route;
        this.socket = socket;
        this.router = router;
        this.auth = auth;
        this.profileService = profileService;
        this.searchAtive = 0;
        this.conversations = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                _this.router.navigate(['./msg', 26], { relativeTo: _this.route }).then((function (a) {
                    _this.getConversations();
                }));
                _this.id_user = res.user.id_user;
            });
        }
    };
    ChatComponent.prototype.getConversations = function () {
        var _this = this;
        this.chatService.getConversations().then(function (res) {
            _this.conversations = res.conversations;
            console.log("CONVERSATIONS", _this.conversations);
            _this.getUsersAndLastMessage();
            _this.navigate(_this.conversations[0].id_conversation, _this.conversations[0].id_user);
        });
    };
    ChatComponent.prototype.navigate = function (id, name) {
        console.log(id);
        this.chatService.conversation = name;
        this.router.navigate(['./msg', id], { relativeTo: this.route });
        this.socket.joinRoom(id);
    };
    ChatComponent.prototype.getUsersAndLastMessage = function () {
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
                console.log(res);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.conversations.length; i++) {
            _loop_1(i);
        }
    };
    ChatComponent.prototype.activeSearch = function () {
        if (this.searchAtive) {
            this.searchAtive = 0;
        }
        else if (!this.searchAtive) {
            this.searchAtive = 1;
        }
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(956),
        styles: [__webpack_require__(927)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _f || Object])
], ChatComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat.component.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_new_chat_new_component__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_message_chat_message_component__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */],
        children: [
            {
                path: 'msg',
                component: __WEBPACK_IMPORTED_MODULE_1__chat_message_chat_message_component__["a" /* ChatMessageComponent */]
            },
            {
                path: 'msg/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__chat_message_chat_message_component__["a" /* ChatMessageComponent */]
            },
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_0__chat_new_chat_new_component__["a" /* ChatNewComponent */]
            }
        ]
    },
];
var ChatRoutingModule = (function () {
    function ChatRoutingModule() {
    }
    return ChatRoutingModule;
}());
ChatRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]]
    })
], ChatRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/chat.routing.js.map

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.chat-content {\n  overflow-y: scroll;\n  height: calc(100vh - 155px); }\n\n.header-msg {\n  background: #FFFFFF;\n  padding: 15px 0px 15px 0px;\n  border-bottom: 1px solid #E6E5E5;\n  font-weight: 600;\n  font-size: 16px;\n  width: 100%;\n  height: 55px; }\n\n.area-insert {\n  position: absolute;\n  top: calc( 100vh - 100px);\n  height: 50px;\n  background: #FFFFFF;\n  border: 1px solid #E6E5E5;\n  padding-top: 5px; }\n\n.inputSearch {\n  width: 100%;\n  height: 35px;\n  border: 0;\n  border-radius: 3px;\n  padding: 15px;\n  padding-top: 10px;\n  font-size: 14px;\n  color: #4A4A4A; }\n\n.writeSection {\n  padding-right: 15px;\n  padding-top: 5px; }\n\n.item-mine {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  text-align: right; }\n\n.item-mine .msg-mine {\n  border-radius: 20px;\n  background: #0F76F7;\n  color: #FFFFFF;\n  padding: 5px 15px;\n  border: 0;\n  font-size: 14px;\n  text-align: left;\n  max-width: 50%;\n  word-wrap: break-word; }\n\n.item-friend {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n  padding: 15px 10px; }\n\n.item-friend .msg-text {\n  margin-left: 10px; }\n\n.item-friend .msg-friend {\n  border-radius: 20px;\n  background: #E6E5E5;\n  color: #4A4A4A;\n  padding: 5px 15px;\n  border: 0;\n  font-size: 14px;\n  text-align: left;\n  max-width: 50%;\n  word-wrap: break-word; }\n\n.item-friend .image img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.chat-content::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.chat-content::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.chat-content::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n\n.area-profile {\n  border-left: 1px solid #E6E5E5;\n  height: calc( 100vh - 105px);\n  width: 100%;\n  background: #FFFFFF;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto; }\n\n.img-profile {\n  border-radius: 100px;\n  height: 130px;\n  width: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px; }\n\n.desc-profile {\n  width: 100%;\n  margin-top: 50px; }\n\n.name-profile {\n  font-weight: 600;\n  font-size: 19px;\n  color: #4A4A4A; }\n\n.desc-name-profile {\n  color: #919191;\n  font-size: 16px; }\n\n.details-profile {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.img-user {\n  border-radius: 100px;\n  height: 30px;\n  width: 30px;\n  margin-right: 5px; }\n\n.table-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  color: #919191;\n  margin-top: 10px; }\n\n.bold {\n  font-weight: 600;\n  color: #4A4A4A;\n  padding-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.header-msg {\n  background: #FFFFFF;\n  padding: 10px 0px 10px 15px;\n  border-bottom: 1px solid #E6E5E5;\n  font-weight: 600;\n  font-size: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.area-insert {\n  position: absolute;\n  top: calc( 100vh - 100px);\n  height: 50px;\n  background: #FFFFFF;\n  border: 1px solid #E6E5E5;\n  padding-top: 5px; }\n\n.inputSearch {\n  width: 100%;\n  height: 35px;\n  border: 0;\n  border-radius: 3px;\n  padding: 15px;\n  font-size: 14px;\n  color: #4A4A4A; }\n\n.inputSearch::-webkit-input-placeholder {\n  color: #919191;\n  font-size: 13px; }\n\n.span-input {\n  color: #0F76F7;\n  font-size: 14px;\n  font-weight: 600 !important;\n  margin-top: 7px; }\n\n.inputSearchHeader {\n  width: 100%;\n  height: 35px;\n  border: 0;\n  border-radius: 3px;\n  padding-left: 5px;\n  font-size: 14px;\n  color: #4A4A4A; }\n\n.inputSearchHeader::-webkit-input-placeholder {\n  color: #919191;\n  font-size: 13px; }\n\n.writeSection {\n  padding-right: 15px;\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.recent-msgs {\n  background: #FFFFFF;\n  height: calc( 100vh - 105px);\n  padding: 0;\n  overflow-y: auto;\n  border-right: 1px solid #E6E5E5; }\n\n.title-msgs {\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0px 15px 0px; }\n\n.msg-item {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 15px 10px 15px; }\n\n.msg-item:hover {\n  background: #E6E5E5; }\n\n.active {\n  background: #E6E5E5 !important; }\n\n.msg-item .image img {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.message-info {\n  margin-left: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 500px;\n  padding-top: 5px;\n  font-size: 14px;\n  margin-top: -1px; }\n\n.nameMsg {\n  font-weight: bold;\n  color: #4A4A4A;\n  font-size: 14px; }\n\n.textMsg {\n  color: #919191;\n  font-size: 13px; }\n\n.content-msgs {\n  padding: 10px 0px; }\n\n.time {\n  color: #919191;\n  font-weight: normal;\n  font-size: 11px;\n  float: right;\n  margin-top: -20px; }\n\n.search-msgs {\n  background: #FFFFFF;\n  padding: 0px 15px 0px 15px;\n  border-bottom: 1px solid #E6E5E5; }\n\n.inputSearch {\n  width: 100%;\n  height: 35px;\n  border: 1px solid #E6E5E5;\n  border-radius: 0;\n  padding: 15px;\n  font-size: 14px;\n  color: #919191; }\n\n.recent-msgs::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 10px; }\n\n.recent-msgs::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset #919191; }\n\n.recent-msgs::-webkit-scrollbar-thumb {\n  background-color: #919191; }\n\n.search-icon, .add-icon {\n  padding-top: 15px;\n  cursor: pointer; }\n\n.search-icon:focus, .add-icon:focus {\n  outline: 0 !important; }\n\n.search-icon i, .add-icon i {\n  color: #919191; }\n\n.search-icon i:hover, .add-icon i:hover {\n  color: #4A4A4A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let prof of profile\" class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8 no-padding\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 header-msg text-center no-padding\">\r\n            {{prof.name}}\r\n          </div>\r\n\r\n          <div class=\"col-12 no-padding\">\r\n            <div class=\"chat-content\" #scrollMe>\r\n              <div *ngFor=\"let message of messages\" [class.item-mine]=\"message.from_id == id_user\" [class.item-friend]=\"message.from_id != id_user\">\r\n                <div><img class=\"img-user\" *ngIf=\"message.from_id != id_user\" src=\"{{prof.photo_url}}\"></div><button [class.msg-mine]=\"message.from_id == id_user\"\r\n                  [class.msg-friend]=\"message.from_id != id_user\">{{message.message}}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12 area-insert\">\r\n            <div class=\"writeSection row\">\r\n              <div class=\"col\">\r\n                <input autofocus type=\"text\" class=\"inputSearch\" [(ngModel)]=\"message\" placeholder=\"Escrever uma mensagem\" (keyup.enter)=\"sendMessage(message)\">\r\n\r\n              </div>\r\n              <div class=\".align-items-lg-end\">\r\n                <button class=\"btn btnConfirm\" (click)=\"sendMessage(message)\">ENVIAR</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 no-padding\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"header-msg text-center \">\r\n\r\n          </div>\r\n          <div class=\"area-profile text-center\">\r\n             \r\n            <div class=\"desc-profile\">\r\n               <img class=\"img-profile\" src=\"{{prof.photo_url}}\">\r\n              <div class=\"name-profile pointer underline\" (click)=\"navigate_profile(prof.id_user)\">\r\n                {{prof.name}}\r\n              </div>\r\n\r\n              <div class=\"desc-name-profile\" *ngIf=\"prof.type_user==2\">\r\n                Voluntário\r\n              </div>\r\n\r\n              <div class=\"desc-name-profile\" *ngIf=\"prof.type_user==1\">\r\n                Instituição de voluntariado\r\n              </div>\r\n\r\n            <div class=\"desc-name-profile\" *ngIf=\"prof.type_user==3\">\r\n                Voluntário/ Instituição de voluntariado\r\n              </div>\r\n\r\n              <div style=\"margin-top:40px\">\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    E-mail:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    {{prof.email}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Vive em:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    Aveiro, Portugal\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Data de Nascimento\r\n                  </div>\r\n                  <div class=\"\">\r\n                    {{prof.birth_date | date}}\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Profissão:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    Estudante\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                   Já participou em:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    7 ações de voluntariado\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Classificação média:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    4\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\" style=\"margin-top: 40px;\">\r\n                  <div class=\"bold\">\r\n                    Facebook:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    https://www.facebook.com/vascorafaelsilva\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Linkedin:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    https://www.facebook.com/vascorafaelsilva\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Instagram:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    https://www.facebook.com/vascorafaelsilva\r\n                  </div>\r\n                </div>\r\n                <div class=\"justify-content-center table-flex\">\r\n                  <div class=\"bold\">\r\n                    Twitter:\r\n                  </div>\r\n                  <div class=\"\">\r\n                    https://www.facebook.com/vascorafaelsilva\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 header-msg no-padding\">\r\n     <span class=\"span-input\">Para:</span><input autofocus type=\"text\" class=\"inputSearchHeader\" placeholder=\"Escreve o nome da pessoa ou instituição\">\r\n    </div>\r\n\r\n    <div class=\"col-12 area-insert\">\r\n      <div class=\"writeSection row\" >\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"inputSearch\" placeholder=\"Escreve uma mensagem...\">\r\n             \r\n          </div>\r\n            <div class=\".align-items-lg-end\">\r\n              <button class=\"btn btnConfirm\">ENVIAR</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3 no-padding\">\r\n\r\n      <div class=\"search-msgs d-flex justify-content-between\">\r\n\r\n        <div class=\"search-icon\" (click)=\"activeSearch()\">\r\n          <i class=\"material-icons\">search</i>\r\n        </div>\r\n\r\n        <div class=\"title-msgs text-center\">\r\n          Ultimas mensagens\r\n        </div>\r\n\r\n        <div class=\"add-icon\" routerLink=\"/chat/new\">\r\n          <i class=\"material-icons\">add</i>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"recent-msgs\">\r\n        <div class=\"searchSection\" *ngIf=\"searchAtive\" style=\"padding-top:5px;\">\r\n          <div class=\"areaInput\">\r\n            <input type=\"text\" class=\"inputSearch\" autofocus placeholder=\"Pesquisar contactos\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"content-msgs\">\r\n          <div class=\"msg-item\" *ngFor=\"let conversation of conversations\" (click)=\"navigate(conversation.id_conversation, conversation.username)\"\r\n            routerLinkActive=\"active\">\r\n            <div class=\"image\">\r\n              <img [src]=\"conversation?.photo_url\">\r\n            </div>\r\n            <div class=\"message-info\">\r\n              <div>\r\n\r\n                <div class=\"nameMsg\">{{conversation?.name}}</div>\r\n                <div class=\"time\">{{conversation.date | amTimeAgo:true}}</div>\r\n              </div>\r\n\r\n              <span class=\"textMsg\">{{conversation.message}} </span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-9 no-padding\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map