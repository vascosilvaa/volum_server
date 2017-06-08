webpackJsonp([1,10],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_edit_modal_edit_modal_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details_component__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activity_activity_component__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_routing__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_component__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_bootstrap_accordion__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__new_action_new_action_component__ = __webpack_require__(908);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__profile_routing__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_17__new_action_new_action_component__["a" /* NewActionComponent */], __WEBPACK_IMPORTED_MODULE_15__profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_6__activity_activity_component__["a" /* ActivityComponent */], __WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_17__new_action_new_action_component__["a" /* NewActionComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["LOCALE_ID"], useValue: "pt-PT" }
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __WEBPACK_IMPORTED_MODULE_0__shared_edit_modal_edit_modal_component__["a" /* EditModalComponent */]]
    })
], ProfileModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.module.js.map

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

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(profileService) {
        this.profileService = profileService;
        this.user = {};
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.activeProfileSource.subscribe(function (result) {
            _this.user = result;
            console.log("ASYNC User", _this.user);
        });
        if (!this.profileService.activeUser) {
            this.profileService.activeProfileSource.subscribe(function (result) {
                _this.user = result;
                console.log("ASYNC User", _this.user);
            });
        }
        else {
            this.user = this.profileService.activeUser;
        }
        console.log("THIS.user", this.user);
    };
    AboutComponent.prototype.getAge = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__().diff(date, 'years');
    };
    AboutComponent.prototype.goTo = function (network, id) {
        switch (network) {
            case 'facebook':
                window.open('http://www.facebook.com/' + id);
                break;
        }
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(958),
        styles: [__webpack_require__(929)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/about.component.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityComponent = (function () {
    function ActivityComponent(http, route, profileService, auth) {
        this.http = http;
        this.route = route;
        this.profileService = profileService;
        this.auth = auth;
        this.vols = [];
        this.ready = false;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.profileService.activeUser) {
            this.profileService.activeProfileSource.subscribe(function (result) {
                _this.user = result;
                console.log("ASYNC User", _this.user);
                _this.checkType(_this.user);
            });
        }
        else {
            this.user = this.profileService.activeUser;
            this.checkType(this.user);
        }
    };
    ActivityComponent.prototype.checkType = function (data) {
        var _this = this;
        this.user = data;
        console.log("USER TYPE", this.user.type);
        if (this.user.type == 1) {
            this.profileService.getMyVols(this.user.id_user).then(function (res) {
                _this.vols = res.vols;
                _this.ready = true;
                console.log(_this.vols);
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.profileService.getVolHistory(this.user.id_user)
                .then(function (res) {
                _this.vols = res.vols;
                _this.ready = true;
                console.log("history", _this.vols);
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    ActivityComponent.prototype.ngOnDestroy = function () {
        console.log("destroy");
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-activity',
        template: __webpack_require__(963),
        styles: [__webpack_require__(934)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], ActivityComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/activity.component.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_edit_modal_edit_modal_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_profile_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modal_end_modal_end_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modal_view_all_modal_view_all_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_Auth_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DetailsComponent = (function () {
    function DetailsComponent(route, http, overlay, vcRef, modal, sharedService, auth, router, ProfileService, volsService, SharedService) {
        this.route = route;
        this.http = http;
        this.modal = modal;
        this.sharedService = sharedService;
        this.auth = auth;
        this.router = router;
        this.ProfileService = ProfileService;
        this.volsService = volsService;
        this.SharedService = SharedService;
        this.address = [];
        this.addressName = [];
        this.candidates = [];
        this.confirmeds = [];
        this.comments = [];
        this.confirmedsReady = false;
        this.getNumber = function (num) {
            var number = Math.round(num);
            if (num < 0) {
                number = Math.abs(number);
            }
            return new Array(number);
        };
        overlay.defaultViewContainer = vcRef;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id_vol = _this.route.snapshot.params['id'];
            _this.idLogin = _this.route.parent.parent.snapshot.params['id'];
        });
        this.getVol(this.id_vol);
        this.getCandidates(this.id_vol);
        this.getConfirmed(this.id_vol);
        this.countComments(this.id_vol);
        this.countCandidates(this.id_vol);
        this.countConfirmed(this.id_vol);
    };
    DetailsComponent.prototype.openEditModal = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_0__shared_edit_modal_edit_modal_component__["a" /* EditModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ id_vol: this.id_vol }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    DetailsComponent.prototype.countCandidates = function (id_vol) {
        var _this = this;
        this.volsService.countCandidates(id_vol)
            .then(function (res) {
            _this.numberCandidates = res.count;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.countConfirmed = function (id_vol) {
        var _this = this;
        this.volsService.countConfirmeds(id_vol)
            .then(function (res) {
            _this.numberConfirms = res.count;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.sendComment = function (comment) {
        var _this = this;
        if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {
            this.volsService.sendComment(comment, this.id_vol).then(function (res) {
                _this.comentario = '';
                _this.numberComments++;
                _this.comments.push({
                    id_user: _this.vol.user.id_user,
                    message: comment,
                    photo_url: _this.vol.user.photo_url,
                    name: _this.vol.user.name,
                });
            });
        }
    };
    DetailsComponent.prototype.countComments = function (id_vol) {
        var _this = this;
        this.volsService.countComments(id_vol)
            .then(function (res) {
            _this.numberComments = res.count;
            if (_this.numberComments > 0) {
                _this.getComments(id_vol);
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getComments = function (id_vol) {
        var _this = this;
        this.volsService.getComments(id_vol)
            .then(function (res) {
            _this.comments = res.comments;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getVol = function (id_vol) {
        var _this = this;
        this.volsService.getVol(id_vol)
            .then(function (res) {
            _this.vol = res.vol;
            console.log("VOL", _this.vol);
            _this.getAddress();
            _this.lat = parseFloat(_this.vol.lat);
            _this.lng = parseFloat(_this.vol.lng);
            _this.hora_inicio = _this.vol.start_time.slice(0, 2);
            _this.minutos_inicio = _this.vol.start_time.slice(3, 5);
            _this.hora_fim = _this.vol.end_time.slice(0, 2);
            _this.minutos_fim = _this.vol.end_time.slice(3, 5);
            if (_this.vol.active == 0) {
                _this.volsService.getScores(_this.id_vol).then(function (res) {
                    console.log("RES", res);
                    for (var i = 0; i < _this.confirmeds.length; i++) {
                        for (var x = 0; x < res.results.length; x++) {
                            if (_this.confirmeds[i].id_user == res.results[x].id_user2) {
                                _this.confirmeds[i].classification = res.results[x].classification;
                            }
                        }
                    }
                    _this.confirmedsReady = true;
                    console.log("CONFIRMEDS", _this.confirmeds);
                });
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getCandidates = function (id_vol) {
        var _this = this;
        this.volsService.getCandidates(id_vol, 3)
            .then(function (res) {
            _this.candidates = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getConfirmed = function (id_vol) {
        var _this = this;
        this.volsService.getConfirmed(id_vol, 3)
            .then(function (res) {
            _this.confirmeds = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getAddress = function () {
        var _this = this;
        this.sharedService.getAddress(this.vol.lat, this.vol.lng)
            .then(function (res) {
            _this.addressData = res.results;
            _this.address[_this.vol.id_vol] = _this.addressData[0].formatted_address;
            _this.addressName[_this.vol.id_vol] = _this.addressData[0].address_components[0].short_name;
        });
    };
    DetailsComponent.prototype.openViewAll = function (type, id_vol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_5__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, id_vol: id_vol }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    DetailsComponent.prototype.openRemoveConfirm = function (type, id_vol, id_user, name, i) {
        var _this = this;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_5__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, name: name, id_vol: id_vol, id_user: id_user, index: i }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */])).then(function (d) { return d.result; })
            .then(function (r) {
            console.log(r);
            var index = _this.candidates.findIndex(function (x) { return x.id_user == id_user; });
            _this.confirmeds.splice(index, 1);
            _this.numberConfirms--;
        }, function (error) { console.log(error); });
    };
    DetailsComponent.prototype.openDelete = function (type, id_vol, date, name) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_4__shared_modal_end_modal_end_component__["a" /* ModalEndComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, id_vol: id_vol, date: date, name: name }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    DetailsComponent.prototype.openRemoveConfirmCandidate = function (type, id_vol, id_user, name, i) {
        var _this = this;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_5__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, name: name, id_vol: id_vol, id_user: id_user, index: i }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */])).then(function (d) { return d.result; })
            .then(function (r) {
            console.log(r);
            var index = _this.candidates.findIndex(function (x) { return x.id_user == id_user; });
            _this.candidates.splice(index, 1);
            _this.numberCandidates--;
        }, function (error) { console.log(error); });
    };
    DetailsComponent.prototype.openEnd = function (type, id_vol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_4__shared_modal_end_modal_end_component__["a" /* ModalEndComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_modal__["n" /* overlayConfigFactory */])({ id_vol: this.id_vol, type: type }, __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    DetailsComponent.prototype.confirmCandidate = function (id_user) {
        var _this = this;
        this.volsService.confirmCandidate(this.vol.id_vol, id_user)
            .then(function (res) {
            var index = _this.candidates.findIndex(function (x) { return x.id_user == id_user; });
            _this.confirmeds.unshift(_this.candidates[index]);
            _this.candidates.splice(index, 1);
            _this.numberConfirms++;
            _this.numberCandidates--;
            console.log(res);
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(964),
        styles: [__webpack_require__(935)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_modal__["g" /* Overlay */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_vols_service__["a" /* volsService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]) === "function" && _l || Object])
], DetailsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/details.component.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_shared_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewActionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewActionComponent = (function () {
    function NewActionComponent(Router, sharedService, router, parser, _fb, auth, profileService) {
        var _this = this;
        this.Router = Router;
        this.sharedService = sharedService;
        this.router = router;
        this.parser = parser;
        this._fb = _fb;
        this.auth = auth;
        this.profileService = profileService;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.schedule = 0;
        this.img = 0;
        this.submitted = false;
        this.photos = [];
        this.formatter = function (x) { return x.formatted_address; };
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this.profileService.search(term)
                    .do(function () { _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
    }
    NewActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.idProfile = _this.router.parent.parent.snapshot.params['id'];
        });
        this.profileService.getCategories().then(function (res) {
            _this.categories = res.categories;
            console.log(res);
        });
        this.form = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            category: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            insurance: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            date_begin: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            date_end: ['',],
            start_time: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
            end_time: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')]],
            duration: ['',],
            photos: []
        });
    };
    NewActionComponent.prototype.navigate = function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.coord = true;
    };
    NewActionComponent.prototype.readUrl = function (event) {
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
                    _this.photos.push(event.target);
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
    NewActionComponent.prototype.markerDragEnd = function (m, $event) {
        var _this = this;
        console.log('dragEnd', m, $event);
        this.lat = $event['coords']['lat'];
        this.lng = $event['coords']['lng'];
        console.log(this.lat);
        console.log(this.lng);
        console.log("model 1", this.model);
        this.sharedService.getAddress(this.lat, this.lng).then(function (res) {
            console.log(res);
            if (res.results.length > 0) {
                _this.input.nativeElement.value = res.results["0"].formatted_address;
                _this.coord = true;
            }
            console.log("model 2", _this.model);
        });
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
    NewActionComponent.prototype.showSchedule = function () {
        this.schedule = 1;
    };
    NewActionComponent.prototype.hideSchedule = function () {
        this.schedule = 0;
    };
    NewActionComponent.prototype.showImgs = function () {
        this.img = 1;
    };
    NewActionComponent.prototype.hideImgs = function () {
        this.img = 0;
    };
    NewActionComponent.prototype.onSubmit = function (form) {
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
        if (this.coord && this.form.valid && this.submitted == false) {
            this.submitted = true;
            form.value.lat = this.lat;
            form.value.lng = this.lng;
            var array = [];
            form.value.category = 1;
            if (this.url1) {
                array.push(this.url1);
            }
            if (this.url2) {
                array.push(this.url2);
            }
            if (this.url3) {
                array.push(this.url3);
            }
            form.value.photos = array;
            console.log('you submitted value:', form.value);
            if (form.value.date_begin instanceof Date) {
            }
            else {
                form.value.date_begin = new Date(this.parser.format(form.value.date_begin));
                form.value.date_end = new Date(this.parser.format(form.value.date_end));
            }
            console.log("VALUE", form.value);
            this.profileService.newAction(form.value).then(function (res) {
                console.log(res);
                if (res.error) {
                    console.log('erro');
                }
                else {
                    _this.Router.navigate(['/profile/' + _this.idProfile + '/details/' + res.id_vol]);
                }
            });
        }
        else {
            this.coordAdvice = true;
        }
    };
    return NewActionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])("input"),
    __metadata("design:type", Object)
], NewActionComponent.prototype, "input", void 0);
NewActionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-new-action',
        template: __webpack_require__(968),
        styles: [__webpack_require__(939)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbDateParserFormatter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbDateParserFormatter */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _g || Object])
], NewActionComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/new-action.component.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_shared_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = (function () {
    function ProfileComponent(http, overlay, vcRef, sharedService, route, router, injector, profileService, auth) {
        this.http = http;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
        this.injector = injector;
        this.profileService = profileService;
        this.auth = auth;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.typeProfile = 1;
        this.invite = 0;
        this.private = 'private';
        this.public = 'public';
        this.ready = false;
        this.online = 0;
        this.user = {};
        this.scoreReady = false;
        this.getNumber = function (num) {
            var number = Math.round(num);
            if (num < 0) {
                number = Math.abs(number);
            }
            console.log("NUM", num);
            return new Array(number);
        };
        overlay.defaultViewContainer = vcRef;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.route.params.subscribe(function (params) {
            _this.scoreReady = false;
            console.log("TROCOU PARAMS", params);
            _this.id_user = params.id;
            //FACEBOOK TOKEN
            _this.route.queryParams.subscribe((function (query) {
                console.log(query);
                if (query.id_token) {
                    _this.auth.storeUserCredentials(query.id_token);
                    _this.auth.reloadUser(params.id, true).then(function (res) {
                        _this.injector.get(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]).getUser();
                    });
                    _this.auth.storeFacebookToken(query.id_token);
                    console.log("TOKEN", _this.auth.facebookToken);
                    localStorage.setItem("USER_ID", params.id);
                }
            }));
            _this.getUser();
        });
        this.checkFollow();
    };
    ProfileComponent.prototype.getUser = function () {
        //SE ESTIVER AUTENTICADO
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                if (!res.user) {
                    _this.auth.logout();
                }
                else {
                    _this.id_logged_user = res.user.id_user;
                    //SE O ID DO PERFIL FOR IGUAL AO LOGADO VAI BUSCAR DADOS AO USER PROMISE
                    if (_this.id_logged_user == _this.id_user) {
                        _this.user = res.user;
                        _this.online = 1;
                        _this.ready = true;
                        _this.profileService.saveActiveUser(res.user);
                        _this.getScore();
                        //SE NAO FAZ O PEDIDO
                    }
                    else {
                        _this.profileService.getProfile(_this.id_user).then(function (result) {
                            _this.profileService.saveActiveUser(result.user);
                            console.log("USER URL PROFILE", _this.user);
                            _this.user = result.user;
                            _this.ready = true;
                            _this.checkOnline();
                            _this.getScore();
                        });
                    }
                }
            });
        }
        else {
            this.auth.logout();
        }
    };
    ProfileComponent.prototype.follow = function (id_user) {
        var _this = this;
        console.log("ID", id_user);
        this.profileService.follow(this.id_user).then(function (res) {
            _this.state = 1;
            console.log(res);
        });
    };
    ProfileComponent.prototype.unfollow = function (id_user) {
        var _this = this;
        this.profileService.unfollow(this.id_user).then(function (res) {
            _this.state = 0;
            console.log(res);
        });
    };
    ProfileComponent.prototype.checkFollow = function () {
        var _this = this;
        this.profileService.checkState(this.id_user).then(function (res) {
            _this.state = res.state;
        });
    };
    ProfileComponent.prototype.engageConversation = function () {
        var _this = this;
        this.profileService.engageConversation(this.id_user).then(function (res) {
            console.log(res);
            _this.router.navigate(['./chat/msg/', res.id_conversation]);
        }).catch(function (err) {
            _this.router.navigate(['./chat/msg/']);
        });
    };
    ProfileComponent.prototype.checkOnline = function () {
        var _this = this;
        this.profileService.checkOnline(this.user.id_user).then(function (res) {
            _this.online = res.state;
        });
    };
    ProfileComponent.prototype.getScore = function () {
        var _this = this;
        this.profileService.getScore(this.user.id_user).then(function (res) {
            _this.user['score'] = res.score;
            console.log("SCORE", _this.user.score);
            _this.scoreReady = true;
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.profileService.clearActiveUser();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(969),
        styles: [__webpack_require__(940)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["g" /* Overlay */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["Injector"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__["a" /* ProfileService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _j || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.component.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_action_new_action_component__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_details_component__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_activity_component__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_component__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__profile_component__["a" /* ProfileComponent */],
        children: [
            {
                path: 'details/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__details_details_component__["a" /* DetailsComponent */]
            },
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_0__new_action_new_action_component__["a" /* NewActionComponent */],
            },
            {
                path: 'actions',
                loadChildren: 'app/components/profile/actions/actions.module#ActionsModule'
            },
            {
                path: 'activity',
                component: __WEBPACK_IMPORTED_MODULE_2__activity_activity_component__["a" /* ActivityComponent */]
            },
            {
                path: 'about',
                component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
            },
            {
                path: 'following',
                loadChildren: 'app/components/profile/following/following.module#FollowingModule'
            },
            {
                path: 'settings',
                loadChildren: 'app/components/profile/settings/settings.module#SettingsModule'
            },
        ]
    },
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.routing.js.map

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.modal-dialog {\n  top: 10%; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\n.no-content i {\n  color: #919191 !important;\n  font-weight: normal; }\n\n.no-content span {\n  color: #919191;\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.modal-dialog {\n  top: 10%; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\n.no-content i {\n  color: #919191 !important;\n  font-weight: normal; }\n\n.no-content span {\n  color: #919191;\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px;\n  word-break: break-word; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n\n.marginAbout2 {\n  margin-top: 10px; }\n\n.marginAbout3 {\n  margin-top: 20px; }\n\n.socialButtonFacebook {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #2F5B9C;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none;\n  cursor: pointer; }\n\n.socialButtonTwitter {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #37BFF1;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none;\n  cursor: pointer; }\n\n.socialButtonLinkedin {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #0077B5;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none;\n  cursor: pointer; }\n\n.disabled {\n  cursor: default; }\n\n.socialButtonInstagram {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #F44747;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none;\n  cursor: pointer; }\n\n.card-block {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.card-header {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.titleProfile {\n  font-weight: bold;\n  font-size: 16px;\n  color: #4A4A4A; }\n\n.titleCard {\n  margin-top: 3px; }\n\n.textProfile {\n  font-size: 14px;\n  color: #919191;\n  padding-top: 3px; }\n\n.socialProfile {\n  margin-left: 5px;\n  padding-top: 15px; }\n\n.dateFormation {\n  font-size: 11px;\n  color: #919191;\n  font-weight: 300; }\n\n.formationText {\n  margin-top: 3px; }\n\n.linkInsert {\n  color: #FF8A65;\n  cursor: pointer;\n  font-weight: 600; }\n\n.linkInsert:hover {\n  cursor: pointer;\n  font-weight: 600; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".no-padding {\n  padding-right: 0 !important; }\n\n.btnCancel {\n  margin: 0; }\n\n.btnConfirm {\n  margin: 0; }\n\n.iconBack {\n  margin-left: -2px !important;\n  margin-top: 2px; }\n\n.arrow {\n  margin-top: 2px; }\n\n.user-rate md-icon {\n  color: #FFCB2B; }\n\n.titleCard {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 600; }\n\n.titleVol {\n  margin-top: 2px !important;\n  font-size: 18px; }\n\n.card-header {\n  padding: 15px 30px 15px 30px !important; }\n\n.edit {\n  margin-top: 2px;\n  font-size: 20px;\n  color: #919191; }\n\n.btnCancel {\n  margin-top: 6px; }\n\n.btnConfirm {\n  margin-top: 6px; }\n\n.btnRemove {\n  margin-top: 6px; }\n\n.btnCancel1 {\n  border-radius: 0px;\n  font-size: 14px;\n  border: 1px solid #919191;\n  background-color: #FFFFFF;\n  color: #919191 !important;\n  width: 100%;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 40px; }\n\n.btnCancel1:hover {\n  border: 1px solid #919191;\n  background-color: #919191;\n  color: #FFFFFF !important; }\n\n.btnEnd:hover {\n  border: 1px solid #0F76F7;\n  background-color: #FFFFFF;\n  color: #0F76F7 !important; }\n\n.btnEnd {\n  border-radius: 0px;\n  font-size: 14px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100%;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 40px; }\n\n.badge {\n  padding: 5px 5px;\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.see-all {\n  color: #0F76F7;\n  font-size: 15px;\n  font-weight: 600;\n  padding-top: 1px;\n  cursor: pointer; }\n\n.card-content {\n  padding: 15px 15px 15px 15px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image {\n  max-width: 290px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px 0px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.inputText {\n  height: 45px;\n  font-size: 16px;\n  border: 1px solid #E6E5E5;\n  border-radius: 5px;\n  width: 100%;\n  color: #4A4A4A;\n  padding: 10px 10px 10px 10px; }\n\n.inputText:focus {\n  outline: none; }\n\n.desc-title {\n  font-weight: 600; }\n\n.content-details {\n  margin-top: 10px; }\n\n.image-event {\n  height: 78px;\n  border: 1px dashed #E6E5E5;\n  border-radius: 6px; }\n\n.image-event img {\n  height: 78px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.m-b {\n  padding-bottom: 20px; }\n\n.inputInvite {\n  width: 100%;\n  border: 0;\n  margin-bottom: 10px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #919191; }\n\n.table th {\n  max-width: 200px; }\n\n.table td {\n  max-width: 200px; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191;\n  background: #FFFFFF;\n  border-right: 1px solid #E6E5E5;\n  border-left: 1px solid #E6E5E5; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  padding-top: 10px;\n  background: #FFFFFF;\n  border-right: 1px solid #E6E5E5;\n  border-left: 1px solid #E6E5E5;\n  border-bottom: 1px solid #E6E5E5; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5; }\n\n.card-user-comments-image-comments {\n  padding-top: 5px; }\n\n.text-no-candidates {\n  font-size: 14px;\n  color: #919191; }\n\n.icon-no-candidates {\n  font-size: 14px;\n  color: #919191; }\n\n.no-candidates {\n  padding: 62px 20px 62px 20px; }\n\n.text-see {\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  color: #0F76F7; }\n\n.text-see:hover {\n  color: #4A4A4A; }\n\n.iconCard {\n  margin-top: 2px;\n  color: #919191; }\n\n.iconCard:hover {\n  margin-top: 2px;\n  color: #0F76F7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.modal-dialog {\n  top: 10%; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\n.no-content i {\n  color: #919191 !important;\n  font-weight: normal; }\n\n.no-content span {\n  color: #919191;\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.modal-dialog {\n  top: 10%; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\n.no-content i {\n  color: #919191 !important;\n  font-weight: normal; }\n\n.no-content span {\n  color: #919191;\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px;\n  word-break: break-word; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.modal-dialog {\n  top: 10%; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\n.no-content i {\n  color: #919191 !important;\n  font-weight: normal; }\n\n.no-content span {\n  color: #919191;\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 30px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px;\n  cursor: pointer;\n  color: #FFFFFF !important; }\n\n.btnDescart:hover {\n  color: #FFFFFF;\n  background-color: #919191;\n  border: 1px solid #919191; }\n\n.btnSave:hover {\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  border: 1px solid #0F76F7; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 22px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n\n.inputProfile3 {\n  margin-top: 27px; }\n\n.text-error {\n  color: #F51111;\n  font-size: 11px;\n  padding-top: 5px; }\n\nform > .control {\n  position: relative; }\n\nform > .control > label {\n  position: absolute; }\n\nlabel {\n  position: absolute;\n  top: 10px;\n  font-size: 11px;\n  color: #919191; }\n\ninput:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.error-label {\n  font-weight: 600; }\n\n.label-for-select {\n  position: absolute;\n  padding-left: 15px;\n  z-index: 10 !important; }\n\nselect:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\ntextarea:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.select-input {\n  padding-top: 25px;\n  height: 60px !important;\n  font-size: 14px !important; }\n\n.date_picker {\n  padding-left: 15px !important; }\n\n/deep/ .dropdown-item {\n  margin-left: 0px !important;\n  font-size: 14px;\n  color: #919191; }\n\n/deep/ .dropdown-item.active {\n  background: #0F76F7;\n  color: #FFFFFF; }\n\n/deep/ .control .dropdown-menu {\n  width: 1070px;\n  left: 15px !important;\n  border-radius: 0 !important;\n  top: 54px !important;\n  padding: 0px; }\n\n.searched {\n  padding-left: 5px; }\n\n.content-search {\n  padding: 10px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.imgPreview {\n  height: 75px;\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-red {\n  color: #F51111 !important; }\n\n.inputProfile2 {\n  margin-top: 30px; }\n\n.inputProfile3 {\n  margin-top: 27px; }\n\n.addEducation {\n  padding-left: 20px; }\n\n.imageVol {\n  height: 75px;\n  border: 1px dashed #E6E5E5;\n  border-radius: 6px;\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n.btnSave {\n  cursor: pointer;\n  color: #FFFFFF !important; }\n\n.btnSave:hover {\n  color: #0F76F7 !important; }\n\n.text-error {\n  color: #F51111;\n  font-size: 11px;\n  padding-top: 5px; }\n\nform > .control {\n  position: relative; }\n\nform > .control > label {\n  position: absolute; }\n\nlabel {\n  position: absolute;\n  top: 10px;\n  font-size: 11px;\n  color: #919191; }\n\ninput:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.error-label {\n  font-weight: 600; }\n\n.label-for-select {\n  position: absolute;\n  padding-left: 15px;\n  z-index: 10 !important; }\n\nselect:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\ntextarea:focus + label {\n  font-weight: 600;\n  color: #0F76F7; }\n\n.select-input {\n  padding-top: 25px;\n  height: 60px !important;\n  font-size: 14px !important; }\n\n.date_picker {\n  padding-left: 15px !important; }\n\n/deep/ .dropdown-item {\n  margin-left: 0px !important;\n  font-size: 14px;\n  color: #919191; }\n\n/deep/ .dropdown-item.active {\n  background: #0F76F7;\n  color: #FFFFFF; }\n\n/deep/ .control .dropdown-menu {\n  width: 1070px;\n  left: 15px !important;\n  border-radius: 0 !important;\n  top: 54px !important;\n  padding: 0px; }\n\n.searched {\n  padding-left: 5px; }\n\n.content-search {\n  padding: 10px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.imgPreview {\n  height: 75px;\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-red {\n  color: #F51111 !important; }\n\n.md-checkbox label {\n  cursor: pointer; }\n  .md-checkbox label:before, .md-checkbox label:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .md-checkbox label:before {\n    width: 20px;\n    height: 20px;\n    background: #fff;\n    border: 2px solid #919191;\n    border-radius: 2px;\n    cursor: pointer;\n    -webkit-transition: background .3s;\n    transition: background .3s; }\n\n.md-checkbox input[type=\"checkbox\"] {\n  outline: 0;\n  margin-right: 10px; }\n  .md-checkbox input[type=\"checkbox\"]:checked + label:before {\n    background: #0F76F7;\n    border: none; }\n  .md-checkbox input[type=\"checkbox\"]:checked + label:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    top: 5px;\n    left: 4px;\n    width: 12px;\n    height: 6px;\n    border: 2px solid #fff;\n    border-top-style: none;\n    border-right-style: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.modal-dialog {\n  top: 10%; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\n.no-content i {\n  color: #919191 !important;\n  font-weight: normal; }\n\n.no-content span {\n  color: #919191;\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.underline:hover {\n  text-decoration: underline; }\n\n/* Sub Header */\n.sub-header-profile {\n  height: 80px; }\n\n.sub-header-background {\n  background-color: #FFFFFF; }\n\n.profile-user-picture {\n  margin-top: -90px; }\n\n.profile-user-picture img {\n  width: 120px;\n  height: 120px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.circle {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-bottom: 1px;\n  margin-left: 5px; }\n\n.online {\n  background: limegreen; }\n\n.offline {\n  background: #ccc; }\n\n.user-rate {\n  padding-left: 0;\n  padding-top: 5px;\n  margin-left: -7px; }\n\n.user-rate md-icon {\n  color: #FFCB2B; }\n\n.profile-user-name-location {\n  margin-top: -60px;\n  margin-left: -145px; }\n\n.user-name {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 600; }\n\n.user-location {\n  color: #FFFFFF;\n  font-size: 16px;\n  margin-top: -5px; }\n\n.menuSubHeader ul {\n  padding-left: 140px;\n  margin-top: -36px; }\n\n.menuSubHeader ul li {\n  display: inline-block;\n  color: #919191;\n  padding-right: 15px; }\n\n.menuSubHeader ul li a {\n  display: inline-block;\n  color: #919191;\n  text-decoration: none; }\n\n.menuSubHeader ul li a:hover {\n  display: inline-block;\n  color: #4A4A4A;\n  text-decoration: none; }\n\n.menuSubHeaderActive {\n  color: #4A4A4A !important;\n  padding: 0; }\n\n.col-new-action {\n  margin-top: -65px; }\n\n.btn-new-action {\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  background-color: #FFCB2B;\n  color: #FFFFFF;\n  font-weight: 600;\n  height: 45px;\n  line-height: 41px;\n  font-size: 14px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 17px;\n  border-radius: 4px; }\n\n.btn-new-action:hover, .btn-follow:hover {\n  text-decoration: none !important; }\n\n.btn-new-action:focus, .btn-follow:focus {\n  text-decoration: none !important; }\n\n.btn-new-action-icon {\n  display: none; }\n\n.btn-follow {\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  background-color: #FFFFFF;\n  color: #A28F9F;\n  font-weight: 600;\n  height: 45px;\n  line-height: 41px;\n  font-size: 14px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 17px;\n  border: 1px solid #E6E5E5;\n  border-radius: 4px; }\n\n@media (max-width: 1200px) {\n  .profile-user-name-location {\n    margin-left: -100px; }\n  .user-rate {\n    padding-left: 0;\n    padding-top: 5px;\n    margin-left: -5px;\n    padding-right: 0; }\n  .rate1 {\n    margin-left: -3px; } }\n\n@media (max-width: 992px) {\n  .profile-user-name-location {\n    margin-left: -40px; }\n  .col-new-action {\n    margin-left: -35px; } }\n\n@media (max-width: 767px) {\n  .sub-header-profile {\n    height: 130px; }\n  .profile-user-picture {\n    text-align: center; }\n  .profile-user-name-location {\n    text-align: center;\n    margin-left: 0;\n    margin-top: 0; }\n  .user-name {\n    color: #4A4A4A; }\n  .user-location {\n    color: #4A4A4A; }\n  .col-new-action {\n    margin-top: -54px;\n    margin-left: 0; }\n  .menuSubHeader ul {\n    padding-left: 15px;\n    margin-top: 0; }\n  .btn-new-action-text {\n    display: none; }\n  .btn-new-action-icon {\n    display: block; }\n  .btn-new-action {\n    box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n    background-color: #FFCB2B;\n    color: #FFFFFF;\n    font-weight: 600;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: -80px;\n    min-width: 40px !important;\n    text-align: center; }\n  .menuSubHeaderUl {\n    display: none; }\n  .menuSubHeader {\n    margin-top: -54px; }\n  .btn-menu {\n    box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n    background-color: #E6E5E5;\n    color: #FFFFFF;\n    font-weight: 600;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: -80px;\n    min-width: 40px !important;\n    text-align: center; } }\n\n@media (max-width: 576px) {\n  .brandBackground {\n    background-color: #FFFFFF; }\n  .titleBrand {\n    color: #FFFFFF;\n    font-weight: 600;\n    letter-spacing: 8px;\n    font-size: 1.45rem;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 15px; }\n  .titleBrand {\n    color: #0F76F7; }\n  .header-background {\n    height: 210px; }\n  .menuHeader {\n    padding-top: 5px; } }\n\n/* Sub Header */\n.headerBlue {\n  height: 110px;\n  background: #0F76F7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12 col-lg-4\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Dados Pessoais\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"titleProfile col-4\">\r\n                Nome:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                {{user.name}}\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Idade:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                <span>{{getAge(user.birth_date)}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                E-mail:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                {{user.email}}\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Género:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                <span *ngIf=\"user.gender == 0\">Masculino</span>\r\n                <span *ngIf=\"user.gender == 1\">Feminino</span>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Vive em:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                Aveiro, Portugal\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Telemóvel:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                {{user.phone}}\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Instituições\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\" col-12\">\r\n                <span class=\"table-user-image\"><img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/12508846_1081344105243012_2713893583106288598_n.jpg?oh=45119ecdbc178f43648ccf21dc86e43a&oe=59E74A53\"></span>\r\n                <span class=\"candidateName\">Abrigo Seguro</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 marginAbout\">\r\n                <span class=\"table-user-image\"><img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/25405_111558882205948_5087155_n.jpg?oh=f90f3ddbbb6ade8a29e649774e938d64&oe=59E4F811\"></span>\r\n                <span class=\"candidateName \">Onda Verde</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 marginAbout\">\r\n                <span class=\"table-user-image\"><img src=\"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/11021193_415874838574015_3732893204110208877_n.jpg?oh=9e3860bea48029237fb7a804d6db08bb&oe=59E9FD95\"></span>\r\n                <span class=\"candidateName \">Caritas</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Redes Sociais\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\" col-12 text-center\">\r\n                <button class=\"brn socialButtonFacebook\" (click)=\"goTo('facebook', user.facebook_id)\" [class.disabled]=\"!user.facebook_id\">  Facebook </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 text-center\">\r\n                <button class=\"btn socialButtonTwitter\" [class.disabled]=\"!user.twitter_id\" [attr.disabled]=\"!user.twitter_id\">Twitter</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 text-center\">\r\n                <button class=\"btn socialButtonInstagram\" [class.disabled]=\"!user.google_id\" [attr.disabled]=\"!user.google_id\">Google</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-lg-8 col-12\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Acerca de mim\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Descrição:\r\n                </div>\r\n                <div class=\"textProfile\">\r\n                  {{user.about}}\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Hobbies e interesses:\r\n                </div>\r\n                <div class=\"textProfile\">\r\n                  {{user.hobbies}}\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Tipos de voluntariado favoritos:\r\n                </div>\r\n                <div class=\"textProfile\">\r\n                  Solidariedade Social, Desporto e Apoio aos jovens.\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Historial de voluntariado:\r\n                </div>\r\n                <div class=\"textProfile\">\r\n                  <span *ngIf=\"!user.history\">Sem historial de voluntariado. <span class=\"linkInsert\">Inserir já</span></span>\r\n                  <span *ngIf=\"user.history\">{{user.history}}</span>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Idiomas:\r\n                </div>\r\n                <div class=\"textProfile\">\r\n                  {{user.languages}}\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Outros interesses:\r\n                </div>\r\n                <div class=\"textProfile\">\r\n                  {{user.other}}\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Educação e Formação\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Licenciatura em Psicologia\r\n                  <div class=\"dateFormation\">2014-2017</div>\r\n                </div>\r\n                <div class=\"textProfile formationText\">\r\n                  Universidade de Aveiro\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"titleProfile\">\r\n                  Mestrado em Apoio Auxiliar\r\n                  <div class=\"dateFormation\">2017-2019</div>\r\n                </div>\r\n                <div class=\"textProfile formationText\">\r\n                  Faculdade de Letras da Universidade do Porto\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6 marginAbout\">\r\n                <div class=\"titleProfile\">\r\n                  Formação em Voluntariado\r\n                  <div class=\"dateFormation\">2017-2019</div>\r\n                </div>\r\n                <div class=\"textProfile formationText\">\r\n                  Banco Alimentar\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6 marginAbout\">\r\n                <div class=\"titleProfile\">\r\n                  Curso Secundário de Jardinagem\r\n                  <div class=\"dateFormation\">2013-2018</div>\r\n                </div>\r\n                <div class=\"textProfile formationText\">\r\n                  Escola Secundária de Oliveira de Azemeis\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" *ngIf=\"vols\">\r\n    <div class=\"col-6\" *ngFor=\"let vol of vols\">\r\n      <vol-card *ngIf=\"user.type == 1\" [verified]=\"false\" type='private' [idVol]=\"vol.id_vol\" [avatar]=\"user.photo\" [username]=\"user.username\"\r\n        [userCreator]=\"user.id_user\" [dateCreation]=\"vol.date_creation\" [title]=\"vol.name\" [photos]=\"vol.photos\" [description]=\"vol.description\">\r\n      </vol-card>\r\n      <vol-card *ngIf=\"user.type == 2\" [verified]=\"true\" type='private' [idVol]=\"vol.vol.id_vol\" [avatar]=\"vol.user.photo_url\"\r\n        [username]=\"vol.user.name\" [userCreator]=\"vol.user.id_user_creator\" [dateCreation]=\"vol.date_creation\" [title]=\"vol.vol.name\"\r\n        [photos]=\"vol.vol.photos\" [description]=\"vol.vol.description\" [photos]=\"vol.vol.photos\">\r\n      </vol-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 mt-5 text-center no-content\" *ngIf=\"!vols\">\r\n    <div style=\"padding: 5px;\"><i class=\"material-icons\">alarm</i></div>\r\n    <span>Sem Atividade</span>\r\n  </div>\r\n  <div class=\"col-12 mt-5 text-center text-no-activity\" *ngIf=\"!ready\">\r\n    <div class=\"sk-fading-circle\">\r\n      <div class=\"sk-circle1 sk-circle\"></div>\r\n      <div class=\"sk-circle2 sk-circle\"></div>\r\n      <div class=\"sk-circle3 sk-circle\"></div>\r\n      <div class=\"sk-circle4 sk-circle\"></div>\r\n      <div class=\"sk-circle5 sk-circle\"></div>\r\n      <div class=\"sk-circle6 sk-circle\"></div>\r\n      <div class=\"sk-circle7 sk-circle\"></div>\r\n      <div class=\"sk-circle8 sk-circle\"></div>\r\n      <div class=\"sk-circle9 sk-circle\"></div>\r\n      <div class=\"sk-circle10 sk-circle\"></div>\r\n      <div class=\"sk-circle11 sk-circle\"></div>\r\n      <div class=\"sk-circle12 sk-circle\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 \">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"row iconBack\">\r\n                        <a routerLink=\"/profile/{{idLogin}}/actions\"><i class=\"material-icons arrow\">arrow_back</i></a>\r\n                        <div class=\"col titleCard titleVol vcenter\">\r\n                            {{vol?.name}}\r\n                        </div>\r\n                        <div class=\"col text-right iconCard pointer underline\" (click)=\"openEditModal()\">\r\n                            <i class=\"material-icons\">mode_edit</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Descrição\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            {{vol?.description}}\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Detalhes da Ação\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content m-b\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 content-details\">\r\n                            <span class=\"desc-title\">Tipo de Voluntariado:</span> Solidariedade Social\r\n                        </div>\r\n                        <div class=\"col-12 content-details\">\r\n                            <span class=\"desc-title m-b\">Seguro:</span> <span *ngIf=\"vol?.insurance\">Sim</span><span *ngIf=\"!vol?.insurance\">Não</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Fotografias da Ação\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-4\" *ngFor=\"let photo of vol?.photos\">\r\n                            <div class=\"image-event\">\r\n                                <img [src]=\"photo\">\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Localização\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\" style=\"display: flex; height:67px\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\" style=\"display:flex\">\r\n                            <div class=\"addressTitle\" style=\"display:flex; align-items: center\">\r\n                                {{address[vol?.id_vol]}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Data\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"addressTitle\">\r\n                                {{vol?.date_begin | date:\"d\"}} de {{vol?.date_begin | date:\"MMMM\"}} - {{vol?.date_end | date:\"d\"}} de {{vol?.date_end | date:\"MMMM\"}}\r\n                            </div>\r\n                            <div class=\"Address\">\r\n                                {{vol?.date_begin | date:\"d\"}} de {{vol?.date_begin | date:\"MMMM\"}} às {{hora_inicio}}:{{minutos_inicio}} até {{vol?.date_end\r\n                                | date:\"d\"}} de {{vol?.date_end | date:\"MMMM\"}} às {{hora_fim}}:{{minutos_fim}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitleMap\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Mapa\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-12\">\r\n\r\n                            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"14\" [styles]=\"Terrain\">\r\n                                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n                            </sebm-google-map>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"vol?.active == 1\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Convidar Pessoas</div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(3,1)\">Ver convites</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <input type=\"text\" class=\"inputInvite\" placeholder=\"Procurar pessoas ou instituições...\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"vol?.active == 1\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Candidatos <span *ngIf=\"numberCandidates!=0\">({{numberCandidates}})</span></div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(1,idVol)\" *ngIf=\"numberCandidates!=0\">Ver todos</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content candidates-zone\">\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let candidate of candidates\" class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"{{candidate?.photo_url}}\">\r\n                                    <span class=\"candidateName\">{{candidate?.name}}</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnCancel\" (click)=\"openRemoveConfirmCandidate(5, idVol, candidate?.id_user, candidate?.name)\">RECUSAR</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\" (click)=\"confirmCandidate(candidate?.id_user)\">ACEITAR</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <div *ngIf=\"candidates==undefined || candidates==null || candidates==''\" class=\"no-candidates\">\r\n                            <div class=\"text-center icon-no-candidates\"><i class=\"material-icons\">event_busy</i></div>\r\n                            <div class=\"text-center text-no-candidates\">Neste momento, ainda não possui candidatos para esta ação de voluntariado.<span class=\"text-see\"> Convidar voluntários</span></div>\r\n                        </div>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Confirmados <span *ngIf=\"numberConfirms!=0\">({{numberConfirms}})</span></div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(2,idVol)\" *ngIf=\"numberConfirms!=0\">Ver todos</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content candidates-zone\">\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let confirmed of confirmeds; let i= index\" class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"{{confirmed?.photo_url}}\">\r\n                                    <span class=\"candidateName\">{{confirmed?.name}}</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btnRemove\" (click)=\"openRemoveConfirm(4, idVol, confirmed?.id_user, confirmed?.name, i)\">REMOVER</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <div *ngIf=\"confirmeds==undefined || confirmeds==null || confirmeds==''\" class=\"no-candidates\">\r\n                            <div class=\"text-center icon-no-candidates\"><i class=\"material-icons\">event_busy</i></div>\r\n                            <div class=\"text-center text-no-candidates\">Neste momento, ainda não possui voluntários confirmados para esta ação de voluntariado.\r\n                                <span class=\"text-see\" *ngIf=\"candidates!=undefined\" (click)=\"openViewAll(1,idVol)\"> Ver candidatos</span>\r\n                            </div>\r\n                        </div>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"vol?.active == 0\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Voluntários</div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(1,idVol)\" *ngIf=\"numberCandidates!=0\">Ver todos</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content candidates-zone\">\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let confirmed of confirmeds; let i= index\" class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"{{confirmed?.photo_url}}\">\r\n                                    <span class=\"candidateName link\" [routerLink]=\"['../../../'+confirmed.id_user+'/about']\">{{confirmed?.name}}</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding user-rate\" *ngIf=\"confirmedsReady\">\r\n                                    <md-icon *ngFor=\"let star of getNumber(confirmed?.classification)\">star_rate</md-icon>\r\n                                    <md-icon *ngFor=\"let star of getNumber(confirmed?.classification - 5)\">star_border</md-icon>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Comentários</div>\r\n                            <div class=\"see-all ml-auto\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"comments-section\">\r\n                    <div class=\"card-Comments\" *ngIf=\"numberComments>0\">\r\n                        <div class=\"col-12\" *ngFor=\"let comment of comments\">\r\n                            <div class=\"row comments-header\">\r\n                                <div class=\"col card-user--comments-image col-md-auto\">\r\n                                    <img src=\"{{comment.photo_url}}\">\r\n                                </div>\r\n                                <div class=\"col-8 card-user-nd\">\r\n                                    <div class=\"card-user-name-comments ts13\">{{comment.name}}</div>\r\n                                    <div class=\"card-date-comments ts12\">10 horas</div>\r\n                                </div>\r\n                                <div class=\"col card-option-comments text-right\">\r\n                                    <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                                    <md-menu #menu=\"mdMenu\">\r\n                                        <button md-menu-item>\r\n                                    <md-icon>dialpad</md-icon>\r\n                                    <span>Redial</span>\r\n                                </button>\r\n                                        <button md-menu-item disabled>\r\n                                    <md-icon>voicemail</md-icon>\r\n                                    <span>Check voicemail</span>\r\n                                </button>\r\n                                        <button md-menu-item>\r\n                                    <md-icon>notifications_off</md-icon>\r\n                                    <span>Disable alerts</span>\r\n                                </button>\r\n                                    </md-menu>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row comments-content\">\r\n                                <div class=\"col-12 ts13\">\r\n                                    {{comment.message}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"borderComments\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--\r\n        <div class=\"ts14 more-Comments\">\r\n                <span class=\"textMoreComments\">Carregar mais comentários</span><span class=\"moreIcon\"> +</span>\r\n        </div>\r\n        -->\r\n            <div class=\"col-12 insert-comment\">\r\n                <div style=\"display:flex\">\r\n                    <div class=\"card-user--comments-image card-user-comments-image-comments\">\r\n                        <img src=\"{{vol?.user.photo_url}}\">\r\n                    </div>\r\n                    <div style=\"width:93%\">\r\n                        <md-input-container class=\"width100\">\r\n                            <input mdInput [(ngModel)]=\"comentario\" (keyup.enter)=\"sendComment(comentario)\">\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"text-center\" style=\"padding-left:15px;\">\r\n                        <md-icon class=\"btnSendIcon btnSendColorGrey\" click=\"sendComment(comentario)\">send</md-icon>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row btnsBack\" *ngIf=\"vol?.active == 1\">\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btnCancel1\" (click)=\"openDelete(1, vol.id_vol, vol.date_begin, vol.name)\">APAGAR AÇÃO</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btnEnd\" (click)=\"openEnd(2,1)\">FINALIZAR AÇÃO</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\" id=\"template-search\">\r\n  <div (click)=\"navigate(r.geometry.location.lat, r.geometry.location.lng)\" class=\"row no-padding content-search\">\r\n    <span class=\"searched\"> {{r.formatted_address}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"row\">\r\n            <div class=\"col titleCard\">\r\n              Criar uma nova ação de voluntariado\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-block\">\r\n          <form class=\"float-label\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 inputProfile no-margin\">\r\n                <div class=\"control\">\r\n                  <input type=\"text\" minlength=\"10\" maxlength=\"60\" formControlName=\"name\" class=\"\" name=\"title\" placeholder=\"Título da ação de voluntariado\"\r\n                    [(ngModel)]=\"name\" required />\r\n                  <label [class.error-label]=\"!form.controls.name.valid && form.controls.name.touched\" for=\"title\">\r\n                   Título\r\n                   <span class=\"text-error\" *ngIf=\"form.controls.name.errors?.required && form.controls.name.touched\" >\r\n                    - Por favor, insira o título da ação.\r\n                    </span>\r\n                    <span class=\"text-error\" *ngIf=\"form.controls.name.errors?.maxlength && form.controls.name.touched\" >\r\n                     - O título da ação não deve exceder o limite de 30 caracteres.\r\n                    </span>\r\n                    <span class=\"text-error\" *ngIf=\"form.controls.name.errors?.minlength && form.controls.name.touched\" >\r\n                     - O título da ação deve possuir, pelo menos 10 caracteres.\r\n                    </span>\r\n\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <div class=\"control\">\r\n                  <textarea class=\"textAreaProfile\" minlength=\"50\" formControlName=\"description\" name=\"textarea\" required rows=\"4\" [(ngModel)]=\"desc\"\r\n                    placeholder=\"Descrição\">Descrição das funções do voluntário</textarea>\r\n                  <label [class.error-label]=\"!form.controls.description.valid && form.controls.description.touched\" for=\"textarea\">\r\n                    Descrição\r\n                    <span *ngIf=\"form.controls.description.errors?.required && form.controls.description.touched\" class=\"text-error\">- Por favor, insira a descrição da ação.</span>\r\n                    <span *ngIf=\"form.controls.description.errors?.minlength && form.controls.description.touched\" class=\"text-error\">- A descrição da ação deve possuir, no mínimo 30 caracteres.</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6 inputProfile\">\r\n                <select name=\"categorie\" class=\"form-control select-input inputText form-control-lg disabled\" formControlName=\"category\">\r\n                <option *ngFor=\"let category of categories\" [value]='category.id_category'>{{category.name}}</option>\r\n              </select>\r\n                <label [class.error-label]=\"!form.controls.category.valid && form.controls.category.touched\" for=\"categorie\" class=\"label-for-select\">\r\n                 Categoria\r\n                 <span *ngIf=\"form.controls.category.errors?.required && form.controls.category.touched\" class=\"text-error\">- Por favor insira a categoria da ação.</span>\r\n                 </label>\r\n              </div>\r\n\r\n              <div class=\"col-6 inputProfile\">\r\n                <select class=\"form-control inputText  select-input form-control-lg disabled\" formControlName=\"insurance\">\r\n                <option selected value=\"1\">Sim</option>\r\n                <option value=\"0\">Não</option>\r\n              </select>\r\n                <label [class.error-label]=\"!form.controls.insurance.valid && form.controls.insurance.touched\" for=\"insurance\" class=\"label-for-select\">\r\n                Seguro\r\n                <span *ngIf=\"form.controls.insurance.errors?.required && form.controls.insurance.touched\" class=\"text-error\">- Por favor defina se a ação possui seguro de participação.</span>\r\n              </label>\r\n              </div>\r\n\r\n              <div *ngIf=\"img==0\" class=\"col-12 addEducation\" (click)=\"showImgs()\">\r\n                <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Inserir fotografia (s)</span>\r\n              </div>\r\n\r\n              <div *ngIf=\"img==1\" class=\"col-12 addEducation\" (click)=\"hideImgs()\">\r\n                <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Esconder fotografias (s)</span>\r\n              </div>\r\n\r\n\r\n              <div *ngIf=\"img==1\" class=\"col-6 inputProfile3\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"file\" multiple class=\"form-control-file\" (change)=\"readUrl($event)\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\r\n                  <small *ngIf=\"errorFiles==0\" id=\"fileHelp\" class=\"form-text text-muted\">Pode inserir 3 fotografias selecionando na área de seleção. </small>\r\n                  <small *ngIf=\"errorFiles==1\" id=\"fileHelp\" class=\"form-text text-muted text-red\"><strong>Erro! </strong>Só pode inserir 3 fotografias!</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"img==1\" class=\"col-2 \">\r\n                <div class=\"imageVol\"><img *ngIf=\"url1\" class=\"imgPreview\" [src]=\"url1\"></div>\r\n              </div>\r\n              <div *ngIf=\"img==1\" class=\"col-2 \">\r\n                <div class=\"imageVol\"><img *ngIf=\"url2\" class=\"imgPreview\" [src]=\"url2\"></div>\r\n              </div>\r\n              <div *ngIf=\"img==1\" class=\"col-2 \">\r\n                <div class=\"imageVol\"><img *ngIf=\"url3\" class=\"imgPreview\" [src]=\"url3\"></div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" #input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"model\" (keyup.enter)=\"navigate(model.geometry.location.lat, model.geometry.location.lng)\"\r\n                    [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" name=\"localization\" placeholder=\"Insira a localização do voluntariado\"\r\n                    required />\r\n                  <label for=\"localization\">Localização\r\n                   <span *ngIf=\"coordAdvice\" class=\"text-error\">- Por favor indique uma localização válida.</span>\r\n                 </label>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                  <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\">\r\n                  </sebm-google-map-marker>\r\n                </sebm-google-map>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"col-6 inputProfile2\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"date_begin\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                  <label [class.error-label]=\"!form.controls.date_begin.valid && form.controls.date_begin.touched\" for=\"dp\" class=\"label-for-select\">\r\n                     Data de início\r\n                     <span *ngIf=\"form.controls.date_begin.errors?.required && form.controls.date_begin.touched\" class=\"text-error\">- Por favor insira a data de início da ação.</span>\r\n                    </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6 inputProfile2\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\" name=\"dp2\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"date_end\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d2.toggle()\">\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                  <label for=\"dp2\" [class.error-label]=\"!form.controls.date_end.valid && form.controls.date_end.touched\" class=\"label-for-select\">\r\n                     Data de fim\r\n                     <span *ngIf=\"form.controls.date_end.errors?.pattern && form.controls.date_end.touched\" class=\"text-error\">- Por favor insira uma hora válida.</span>\r\n                     </label>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div *ngIf=\"schedule==0\" class=\"col-12 addEducation\" (click)=\"showSchedule()\">\r\n                <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Inserir mais detalhes de horário</span>\r\n              </div>\r\n              <div *ngIf=\"schedule==1\" class=\"col-12 addEducation\" (click)=\"hideSchedule()\">\r\n                <span class=\"iconAdd\">- </span><span class=\"titleAdd\">Esconder detalhes de horário</span>\r\n              </div>\r\n\r\n              <div *ngIf=\"schedule==1\" class=\"col-4 inputProfile\">\r\n                <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" name=\"date_begin\" placeholder=\"Hora de entrada\" [(ngModel)]=\"start_time\" formControlName=\"start_time\"\r\n                    value=\"09:00\" required />\r\n                  <label [class.error-label]=\"!form.controls.start_time.valid && form.controls.start_time.touched\" for=\"date_begin\">\r\n                       Hora de entrada\r\n                       <span  *ngIf=\"form.controls.start_time.errors?.pattern && form.controls.start_time.touched\" class=\"text-error\">- Por favor insira uma hora válida.</span>\r\n                       </label>\r\n                </div>\r\n\r\n              </div>\r\n              <div *ngIf=\"schedule==1\" class=\"col-4 inputProfile\">\r\n                <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" name=\"date_end\" placeholder=\"Hora de saída\" [(ngModel)]=\"end_time\" formControlName=\"end_time\"\r\n                    value=\"17:00\" required />\r\n                  <label [class.error-label]=\"!form.controls.end_time.valid && form.controls.end_time.touched\" for=\"date_end\">\r\n                       Hora de saída\r\n                       <span *ngIf=\"form.controls.end_time.errors?.pattern && form.controls.end_time.touched\" class=\"text-error\">- Por favor insira uma hora válida.</span>\r\n                       </label>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"schedule==1\" class=\"col-4 inputProfile\">\r\n                <div class=\"control\">\r\n                  <input type=\"number\" class=\"\" name=\"duration\" placeholder=\"Duração diária em horas\" [(ngModel)]=\"duration\" formControlName=\"duration\"\r\n                    value=\"5\" required />\r\n                  <label for=\"duration\">Duração</label>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-4\" style=\"display:flex; padding:10px 20px\">\r\n               <div class=\"md-checkbox\">\r\n                  <input id=\"i1\" type=\"checkbox\" checked style=\"margin-top:15px; margin-left:-160px;\">\r\n                  <label for=\"i1\" class=\"\" style=\"position: absolute; top: 30px;\">\r\n                    <span style=\"margin-left: 27px; font-size: 14px;\">Esta ação é publica</span>\r\n                  </label>\r\n                </div>\r\n            \r\n              </div>\r\n              <div class=\"col-4\" style=\"display:flex; padding:10px 20px\">\r\n               <div class=\"md-checkbox\">\r\n                  <input id=\"i2\" type=\"checkbox\" checked style=\"margin-top:15px; margin-left:-160px;\">\r\n                  <label for=\"i2\" class=\"\" style=\"position: absolute; top: 30px;\">\r\n                    <span style=\"margin-left: 27px; font-size: 14px;\">Qualquer pessoa pode ver/comentar.</span>\r\n                  </label>\r\n                </div>\r\n            \r\n              </div>\r\n              <div class=\"col-4\" style=\"display:flex; padding:10px 20px\">\r\n               <div class=\"md-checkbox\">\r\n                  <input id=\"i3\" type=\"checkbox\" checked style=\"margin-top:15px; margin-left:-160px;\">\r\n                  <label for=\"i3\" class=\"\" style=\"position: absolute; top: 30px;\">\r\n                    <span style=\"margin-left: 27px; font-size: 14px;\">Os candidatos são aceites diretamente.</span>\r\n                  </label>\r\n                </div>\r\n            \r\n              </div>\r\n              \r\n              <div class=\"col-6\">\r\n                <a class=\"btn btn-outline-primary btnDescart\" routerLink=\"/\">CANCELAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <button class=\"btn btn-outline-primary btnSave\" type=\"submit\" [class.disabled]=\"submitted\">CRIAR AÇÃO</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 969:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid headerBlue\">\r\n</div>\r\n<div class=\"container-fluid sub-header-background\">\r\n    <div class=\"container sub-header-profile\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 col-sm-12 col-12 profile-user-picture\">\r\n                <img src={{user?.photo}} alt=\"{{user?.name}}\" (error)=\"this.user.photo = 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png'\">\r\n                <div class=\"col user-rate\" *ngIf=\"scoreReady\">\r\n                    <md-icon *ngFor=\"let star of getNumber(user?.score)\">star_rate</md-icon>\r\n                    <md-icon *ngFor=\"let star of getNumber(user?.score - 5)\">star_border</md-icon>\r\n\r\n                    {{user?.score}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-9 col-sm-12 col-12 profile-user-name-location\">\r\n                <div class=\"user-name\">\r\n                    {{user?.name}}\r\n                    <div class=\"circle\" [class.online]=\"online == 1\" [class.offline]=\"online == 0\"></div>\r\n                    <md-icon style=\"margin-left: 20px\" class=\"clickable\" (click)=\"engageConversation()\" *ngIf=\"id_user != id_logged_user\">message</md-icon>\r\n                </div>\r\n                <div class=\"user-location\" *ngIf=\"user.lat && user.lng\">\r\n                    {{user?.location}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 col-6 menuSubHeader\">\r\n                <ul class=\"menuSubHeaderUl\">\r\n                    <li><a routerLink=\"/profile/{{id_user}}/activity\" [routerLinkActive]=\"['menuSubHeaderActive']\">Atividade</a></li>\r\n                    <li *ngIf=\"id_user==id_logged_user\"><a routerLink=\"/profile/{{id_user}}/actions\" [routerLinkActive]=\"['menuSubHeaderActive']\">Ações</a></li>\r\n                    <li><a routerLink=\"/profile/{{id_user}}/about\" [routerLinkActive]=\"['menuSubHeaderActive']\">Sobre</a></li>\r\n                    <li><a routerLink=\"/profile/{{id_user}}/following\" [routerLinkActive]=\"['menuSubHeaderActive']\">A seguir</a></li>\r\n                    <li *ngIf=\"id_user==id_logged_user\"><a routerLink=\"/profile/{{id_user}}/settings\" [routerLinkActive]=\"['menuSubHeaderActive']\">Definições</a></li>\r\n                </ul>\r\n                <a class=\"btn-menu\" md-raised-button routerLink=\".\" [mdMenuTriggerFor]=\"menuSubHeader\">\r\n                    <md-icon class=\"btn-new-action-icon\">menu</md-icon>\r\n                </a>\r\n                <md-menu #menuSubHeader=\"mdMenu\">\r\n                    <button md-menu-item>Actividade</button>\r\n                    <button md-menu-item>Minhas ações</button>\r\n                    <button md-menu-item>Sobre</button>\r\n                    <button md-menu-item>A seguir</button>\r\n                    <button md-menu-item>Definições</button>\r\n                </md-menu>\r\n\r\n            </div>\r\n            <div *ngIf=\"id_user==id_logged_user\" class=\"col-sm-2 col-6 col-new-action text-right\">\r\n                <a routerLink=\"/profile/{{id_user}}/new\" class=\"btn-new-action\" md-raised-button><span class=\"btn-new-action-text\" >NOVA AÇÃO</span><span><md-icon class=\"btn-new-action-icon\">add</md-icon></span></a>\r\n            </div>\r\n            <div *ngIf=\"id_user!=id_logged_user\" class=\"col-sm-2 col-6 col-new-action text-right\">\r\n                <a class=\"btn-new-action\" md-raised-button (click)=\"follow(id_user)\" *ngIf=\"state == 0\"><span class=\"btn-new-action-text\" >SEGUIR</span><span><md-icon class=\"btn-new-action-icon\">add</md-icon></span></a>\r\n                <a class=\"btn-follow\" md-raised-button (click)=\"unfollow(id_user)\" *ngIf=\"state == 1\"><span class=\"btn-new-action-text\" >NÃO SEGUIR</span><span><md-icon class=\"btn-new-action-icon\">minus</md-icon></span></a>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Externo -->\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map