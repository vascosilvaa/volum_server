webpackJsonp([1,8],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_details_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_footer_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_activity_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_routing__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_bootstrap_accordion__ = __webpack_require__(487);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__profile_routing__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_12__profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_2__actions_actions_component__["a" /* ActionsComponent */], __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_3__activity_activity_component__["a" /* ActivityComponent */], __WEBPACK_IMPORTED_MODULE_1__shared_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_0__details_details_component__["a" /* DetailsComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["LOCALE_ID"], useValue: "pt-PT" },
        ]
    })
], ProfileModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__(482);
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

/***/ 482:
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

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__(481);
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

/***/ 484:
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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(484);
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__(482);
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__(483);
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__(481);
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(482);
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 488:
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

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__(488);
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

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(545),
        styles: [__webpack_require__(521)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/about.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ActionsComponent() {
        this.invite = 0;
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    return ActionsComponent;
}());
ActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-actions',
        template: __webpack_require__(546),
        styles: [__webpack_require__(522)]
    }),
    __metadata("design:paramtypes", [])
], ActionsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/actions.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
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
    function ActivityComponent(http) {
        this.http = http;
        this.private = 'private';
        this.public = 'public';
        this.volsInst = [];
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.login = false;
        if (this.login) {
            /*
            this.http.get('http://volum.ddns.net/api/vols').map(res => res.json()).subscribe(result => {
              this.volsTodos = result.body.vols;
              console.log(result);
      
              for (let i = 0; i < this.volsTodos.length; i++) {
                this.http.get('http://localhost:3000/users/profile/' + result[i].id_user_creator).map(res => res.json()).subscribe(resultName => {
                  this.volsTodos[i]["username"] = resultName.user.username;
                  this.volsTodos[i]["photo_url"] = resultName.user.photo_url;
                  this.volsTodos[i]["veryfied"] = resultName.user.veryfied;
                });
      
              }
      
            });
            */
        }
        else {
            this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols").map(function (res) { return res.json(); }).subscribe(function (result) {
                console.log(result);
                _this.volInst1 = _this.volsInst[0];
                _this.volInst2 = _this.volsInst[1];
                _this.volInst3 = _this.volsInst[2];
                _this.volInst4 = _this.volsInst[3];
                var _loop_1 = function (i) {
                    _this.http.get('http://localhost:3000/users/profile/' + result[i].id_user_creator).map(function (res) { return res.json(); }).subscribe(function (resultName) {
                        if (i == 0) {
                            _this.volInst1.username = resultName.user.username;
                            _this.volInst1.photo_url = resultName.user.photo_url;
                            _this.volInst1.veryfied = resultName.user.veryfied;
                        }
                        if (i == 1) {
                            _this.volInst2.username = resultName.user.username;
                            _this.volInst2.photo_url = resultName.user.photo_url;
                            _this.volInst2.veryfied = resultName.user.veryfied;
                        }
                        if (i == 2) {
                            _this.volInst3.username = resultName.user.username;
                            _this.volInst3.photo_url = resultName.user.photo_url;
                            _this.volInst3.veryfied = resultName.user.veryfied;
                        }
                        if (i == 3) {
                            _this.volInst4.username = resultName.user.username;
                            _this.volInst4.photo_url = resultName.user.photo_url;
                            _this.volInst4.veryfied = resultName.user.veryfied;
                        }
                    });
                };
                for (var i = 0; i < _this.volsInst.length; i++) {
                    _loop_1(i);
                }
            });
            this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols").map(function (res) { return res.json(); }).subscribe(function (result) {
                _this.volsPriv = result;
                _this.volPriv1 = _this.volsPriv[0];
                _this.volPriv2 = _this.volsPriv[1];
                _this.volPriv3 = _this.volsPriv[2];
                _this.volPriv4 = _this.volsPriv[3];
                var _loop_2 = function (i) {
                    _this.http.get('http://localhost:3000/users/profile/' + result[i].id_user_creator).map(function (res) { return res.json(); }).subscribe(function (resultName) {
                        if (i == 0) {
                            _this.volPriv1.username = resultName.user.username;
                            _this.volPriv1.photo_url = resultName.user.photo_url;
                            _this.volPriv1.veryfied = resultName.user.veryfied;
                        }
                        if (i == 1) {
                            _this.volPriv2.username = resultName.user.username;
                            _this.volPriv2.photo_url = resultName.user.photo_url;
                            _this.volPriv2.veryfied = resultName.user.veryfied;
                        }
                        if (i == 2) {
                            _this.volPriv3.username = resultName.user.username;
                            _this.volPriv3.photo_url = resultName.user.photo_url;
                            _this.volPriv3.veryfied = resultName.user.veryfied;
                        }
                        if (i == 3) {
                            _this.volPriv4.username = resultName.user.username;
                            _this.volPriv4.photo_url = resultName.user.photo_url;
                            _this.volPriv4.veryfied = resultName.user.veryfied;
                        }
                    });
                };
                for (var i = 0; i < _this.volsPriv.length; i++) {
                    _loop_2(i);
                }
            });
        }
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-activity',
        template: __webpack_require__(547),
        styles: [__webpack_require__(535)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ActivityComponent);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/activity.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
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
    function ProfileComponent(http) {
        this.http = http;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.typeProfile = 1;
        this.invite = 0;
        this.private = 'private';
        this.public = 'public';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.login = true;
        if (this.login) {
            this.http.get('http://localhost:3000/vols').map(function (res) { return res.json(); }).subscribe(function (result) {
                _this.volsTodos = result;
                var _loop_1 = function (i) {
                    _this.http.get('http://localhost:3000/users/profile/' + result[i].id_user_creator).map(function (res) { return res.json(); }).subscribe(function (resultName) {
                        _this.volsTodos[i]["username"] = resultName.user.username;
                        _this.volsTodos[i]["photo_url"] = resultName.user.photo_url;
                        _this.volsTodos[i]["veryfied"] = resultName.user.veryfied;
                    });
                };
                for (var i = 0; i < _this.volsTodos.length; i++) {
                    _loop_1(i);
                }
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(552),
        styles: [__webpack_require__(527)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function DetailsComponent() {
        this.lat = 41.100856;
        this.lng = -8.544893;
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(548),
        styles: [__webpack_require__(523)]
    }),
    __metadata("design:paramtypes", [])
], DetailsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/details.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actions_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_activity_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(47);
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
        component: __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */],
        children: [
            {
                path: 'actions',
                component: __WEBPACK_IMPORTED_MODULE_0__actions_actions_component__["a" /* ActionsComponent */]
            },
            {
                path: 'activity',
                component: __WEBPACK_IMPORTED_MODULE_1__activity_activity_component__["a" /* ActivityComponent */]
            },
            {
                path: 'about',
                component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.routing.js.map

/***/ }),

/***/ 516:
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
        template: __webpack_require__(559),
        styles: [__webpack_require__(534)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/footer.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.marginAbout2 {\n  margin-top: 10px; }\n\n.marginAbout3 {\n  margin-top: 20px; }\n\n.socialButtonFacebook {\n  border-radius: 3px;\n  width: 100%;\n  background-color: #2F5B9C;\n  color: #fff;\n  height: 30px;\n  font-family: Lato;\n  margin-top: 10px;\n  text-decoration: none;\n  border: none; }\n\n.socialButtonTwitter {\n  border-radius: 3px;\n  width: 100%;\n  background-color: #37BFF1;\n  color: #fff;\n  height: 30px;\n  font-family: Lato;\n  margin-top: 10px;\n  text-decoration: none;\n  border: none; }\n\n.socialButtonLinkedin {\n  border-radius: 3px;\n  width: 100%;\n  background-color: #0077B5;\n  color: #fff;\n  height: 30px;\n  font-family: Lato;\n  margin-top: 10px;\n  text-decoration: none;\n  border: none; }\n\n.card-block {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.card-header {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.titleProfile {\n  font-weight: bold;\n  font-size: 16px;\n  color: #4A4A4A; }\n\n.textProfile {\n  font-size: 14px;\n  color: #919191;\n  padding-top: 3px; }\n\n.socialProfile {\n  margin-left: 5px;\n  padding-top: 15px; }\n\n.dateFormation {\n  font-size: 11px;\n  color: #919191;\n  font-weight: 300; }\n\n.formationText {\n  margin-top: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.no-padding {\n  padding-right: 0 !important; }\n\n.btnCancel {\n  margin: 0; }\n\n.btnConfirm {\n  margin: 0; }\n\n.iconBack {\n  margin-left: 5px !important;\n  margin-top: 2px; }\n\n.arrow {\n  margin-top: 2px; }\n\n.titleCard {\n  margin-top: 5px; }\n\n.titleVol {\n  margin-top: 2px !important; }\n\n.edit {\n  margin-top: 2px; }\n\n.btnCancel {\n  margin-top: 6px; }\n\n.btnConfirm {\n  margin-top: 6px; }\n\n.btnRemove {\n  margin-top: 6px; }\n\n.badge {\n  padding: 5px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n/* Sub Header */\n.sub-header-profile {\n  height: 80px; }\n\n.sub-header-background {\n  background-color: #FFFFFF; }\n\n.profile-user-picture {\n  margin-top: -90px; }\n\n.profile-user-picture img {\n  width: 120px;\n  height: 120px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF; }\n\n.user-rate {\n  padding-left: 0;\n  padding-top: 5px;\n  margin-left: -7px; }\n\n.user-rate md-icon {\n  color: #FFCB2B; }\n\n.profile-user-name-location {\n  margin-top: -60px;\n  margin-left: -145px; }\n\n.user-name {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 600; }\n\n.user-location {\n  color: #FFFFFF;\n  font-size: 16px;\n  margin-top: -5px; }\n\n.menuSubHeader ul {\n  padding-left: 140px;\n  margin-top: -36px; }\n\n.menuSubHeader ul li {\n  display: inline-block;\n  color: #919191;\n  padding-right: 15px; }\n\n.menuSubHeader ul li a {\n  display: inline-block;\n  color: #919191;\n  text-decoration: none; }\n\n.menuSubHeader ul li a:hover {\n  display: inline-block;\n  color: #4A4A4A;\n  text-decoration: none; }\n\n.menuSubHeaderActive {\n  color: #4A4A4A !important;\n  padding: 0; }\n\n.col-new-action {\n  margin-top: -65px; }\n\n.btn-new-action {\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  background-color: #FFCB2B;\n  color: #FFFFFF;\n  font-weight: 600;\n  height: 45px;\n  line-height: 45px;\n  font-size: 16px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 17px; }\n\n.btn-new-action:hover {\n  text-decoration: none !important; }\n\n.btn-new-action:focus {\n  text-decoration: none !important; }\n\n.btn-new-action-icon {\n  display: none; }\n\n@media (max-width: 1200px) {\n  .profile-user-name-location {\n    margin-left: -100px; }\n  .user-rate {\n    padding-left: 0;\n    padding-top: 5px;\n    margin-left: -5px;\n    padding-right: 0; }\n  .rate1 {\n    margin-left: -3px; } }\n\n@media (max-width: 992px) {\n  .profile-user-name-location {\n    margin-left: -40px; }\n  .col-new-action {\n    margin-left: -35px; } }\n\n@media (max-width: 767px) {\n  .sub-header-profile {\n    height: 130px; }\n  .profile-user-picture {\n    text-align: center; }\n  .profile-user-name-location {\n    text-align: center;\n    margin-left: 0;\n    margin-top: 0; }\n  .user-name {\n    color: #4A4A4A; }\n  .user-location {\n    color: #4A4A4A; }\n  .col-new-action {\n    margin-top: -54px;\n    margin-left: 0; }\n  .menuSubHeader ul {\n    padding-left: 15px;\n    margin-top: 0; }\n  .btn-new-action-text {\n    display: none; }\n  .btn-new-action-icon {\n    display: block; }\n  .btn-new-action {\n    box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n    background-color: #FFCB2B;\n    color: #FFFFFF;\n    font-weight: 600;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: -80px;\n    min-width: 40px !important;\n    text-align: center; }\n  .menuSubHeaderUl {\n    display: none; }\n  .menuSubHeader {\n    margin-top: -54px; }\n  .btn-menu {\n    box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n    background-color: #E6E5E5;\n    color: #FFFFFF;\n    font-weight: 600;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: -80px;\n    min-width: 40px !important;\n    text-align: center; } }\n\n@media (max-width: 576px) {\n  .brandBackground {\n    background-color: #FFFFFF; }\n  .titleBrand {\n    color: #FFFFFF;\n    font-weight: 600;\n    letter-spacing: 8px;\n    font-size: 1.45rem;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 15px; }\n  .titleBrand {\n    color: #0F76F7; }\n  .header-background {\n    height: 210px; }\n  .menuHeader {\n    padding-top: 5px; } }\n\n/* Sub Header */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.footerText {\n  margin-top: 150px;\n  color: #919191;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: solid 1px #E6E5E5;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12 col-lg-4\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Dados Pessoais\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"titleProfile col-4\">\r\n                Nome:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                 Vasco Silva\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Idade:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                 21 anos\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                E-mail:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                vascosilvaa@gmail.com\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Género:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                Masculino\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Vive em:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                Vila Nova de Gaia\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Telemóvel:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                912 384 499\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Instituições\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\" col-12\">\r\n                  <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                  <span class=\"candidateName\">Abrigo Seguro</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 marginAbout\">\r\n                  <span class=\"table-user-image\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n                  <span class=\"candidateName \">Onda Verde</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 marginAbout\">\r\n                  <span class=\"table-user-image\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n                  <span class=\"candidateName \">Caritas</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n</div>\r\n<div class=\"col-lg-8 col-12\">\r\n  <div class=\"card primaryCard\">\r\n    <div class=\"card-header cardTitle\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col titleCard\">\r\n            Acerca de mim\r\n          </div>\r\n          <div class=\"col text-right iconCard\">\r\n            <i class=\"material-icons edit\">more_horiz</i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Descrição:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis eget felis at feugiat. Mauris at nibh at leo rutrum euismod at tincidunt elit. Maecenas lacinia est quis enim lobortis, a feugiat lorem sagittis.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Hobbies e interesses:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis eget felis at feugiat. Mauris at nibh at leo rutrum euismod at tincidunt elit. Maecenas lacinia est quis enim lobortis, a feugiat lorem sagittis.\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row marginAbout\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Tipos de voluntariado favoritos:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis eget felis at feugiat. Mauris at nibh at leo rutrum euismod at tincidunt elit. Maecenas lacinia est quis enim lobortis, a feugiat lorem sagittis.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Historial de voluntariado:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis eget felis at feugiat. Mauris at nibh at leo rutrum euismod at tincidunt elit. Maecenas lacinia est quis enim lobortis, a feugiat lorem sagittis.\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row marginAbout\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Idiomas:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis eget felis at feugiat. Mauris at nibh at leo rutrum euismod at tincidunt elit. Maecenas lacinia est quis enim lobortis, a feugiat lorem sagittis.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Outros interesses:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis eget felis at feugiat. Mauris at nibh at leo rutrum euismod at tincidunt elit. Maecenas lacinia est quis enim lobortis, a feugiat lorem sagittis.\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card primaryCard\">\r\n    <div class=\"card-header cardTitle\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col titleCard\">\r\n            Educação e Formação\r\n          </div>\r\n          <div class=\"col text-right iconCard\">\r\n            <i class=\"material-icons edit\">more_horiz</i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Licenciatura em Psicologia\r\n              <div class=\"dateFormation\">2014-2017</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Universidade de Aveiro\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Mestrado em Apoio Auxiliar\r\n              <div class=\"dateFormation\">2017-2019</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Faculdade de Letras da Universidade do Porto\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 marginAbout\">\r\n            <div class=\"titleProfile\">\r\n              Formação em Voluntariado\r\n              <div class=\"dateFormation\">2017-2019</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Banco Alimentar\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 marginAbout\">\r\n            <div class=\"titleProfile\">\r\n              Curso Secundário de Jardinagem\r\n              <div class=\"dateFormation\">2013-2018</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Escola Secundária de Oliveira de Azemeis\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 \">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\" card-block noPadding\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2 col-6 navCard vcenter titleNavLink\">\r\n                <a routerLink=\"/profile/actions\" (click)=\"invite=0\" *ngIf=\"invite==0\" class=\"navLinkAtive\">Minhas Ações</a>\r\n                <a routerLink=\"/profile/actions\" (click)=\"invite=0\" *ngIf=\"invite==1\" class=\"navLink \">Minhas Ações</a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-6 navCard vcenter titleNavLink\">\r\n                <a routerLink=\"/profile/actions\" (click)=\"invite=1\" *ngIf=\"invite==0\" class=\"navLink\">Convites<span class=\"badge badge-pill badge-primary\">2</span></a>\r\n                <a routerLink=\"/profile/actions\" (click)=\"invite=1\" *ngIf=\"invite==1\" class=\"navLinkAtive\">Convites<span class=\"badge badge-pill badge-primary\">2</span></a>\r\n              </div>\r\n              <div class=\"col text-right titleNavLink iconCard \">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 table\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-inverse\" class=\"cabecalho\">\r\n          <tr>\r\n            <th>TITULO</th>\r\n            <th>LOCALIZAÇÃO</th>\r\n            <th>DATA</th>\r\n            <th *ngIf=\"invite==0\">CONFIRMADOS</th>\r\n            <th *ngIf=\"invite==0\">CANDIDATOS</th>\r\n            <th *ngIf=\"invite==1\">CRIADO POR</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"tableText\">\r\n            <th class=\"tableBold tableTitle\">Lorem Ipsum</th>\r\n\r\n            <td class=\"tablePlace\">\r\n              <div class=\"tableBold\">Universidade de Aveiro</div>\r\n              <div class=\"\">Universidade de Aveiro, 3810-164</div>\r\n              <div>Aveiro, Portugal</div>\r\n            </td>\r\n\r\n            <td class=\"tableDate\">\r\n              <div class=\"tableBold\">8 de março - 12 de março</div>\r\n              <div class=\"\">8 de março às 18:00 até 12 de março às 12:00</div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n                <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar2.png\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar3.png\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar04.png\"></span>\r\n                <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar04.png\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar2.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar3.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar04.png\"></span>\r\n              <span class=\"table-user-image margin\"><img src=\"../assets/imgs/avatar04.png\"></span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\">\r\n              <span class=\"table-user-image\"><img src=\"../assets/imgs/avatar.png\"></span>\r\n              <span class=\"tableBold\">André Martins</span>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==0\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <a class=\"btn btn-outline-primary btnConfirm\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <a class=\"btn btn-outline-primary btnCancel\" >APAGAR</a>\r\n              </div>\r\n            </td>\r\n\r\n            <td *ngIf=\"invite==1\" class=\"tableBtns\">\r\n              <div class=\"text-right\">\r\n                <a class=\"btn btn-outline-primary btnConfirm\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <a class=\"btn btn-outline-primary btnCancel\" >REJEITAR</a>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- detalhes -->\r\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        <!--<div *ngFor=\"let item of volsTodos\" class=\"col-lg-6\">\r\n          Chamar as cards\r\n      </div>\r\n    -->\r\n    chamar as cards\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 \">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\" card-block\">\r\n                    <div class=\"row iconBack\">\r\n                        <a routerLink=\"/profile/actions\" (click)=\"typeProfile=2\"><i class=\"material-icons arrow\">arrow_back</i></a>\r\n                        <div class=\"col titleCard titleVol vcenter\">\r\n                            Lorem Ipsum\r\n                        </div>\r\n                        <div class=\"col text-right iconCard\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard\">\r\n                            Descrição\r\n                        </div>\r\n                        <div class=\"col text-right iconCard\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus venenatis euismod. Cras vel elit id ligula lobortis sagittis. Vestibulum iaculis neque rutrum justo gravida, in semper risus vehicula. Etiam vitae ligula velit. Nunc aliquam consequat\r\n                            sagittis. Sed diam massa, tempor at metus a, mollis sollicitudin felis. Maecenas ipsum neque, condimentum ut quam sed, viverra lacinia dolor. Fusce in ultrices risus, sollicitudin dictum justo. Sed ultricies ullamcorper consequat.\r\n                            Aliquam orci tortor, dignissim et porta vel, blandit eget massa. Integer non ante vitae sem tempor ornare gravida et diam. Curabitur sit amet felis ac dui imperdiet blandit. Vivamus eu condimentum est.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard\">\r\n                            Localização\r\n                        </div>\r\n                        <div class=\"col text-right iconCard\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"addressTitle\">\r\n                                Universidade de Aveiro\r\n                            </div>\r\n                            <div class=\"Address\">\r\n                                Universidade de Aveiro, 3810-164 Aveiro, Portugal\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard\">\r\n                            Data\r\n                        </div>\r\n                        <div class=\"col text-right iconCard\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"addressTitle\">\r\n                                8 de março - 12 de março\r\n                            </div>\r\n                            <div class=\"Address\">\r\n                                8 de março às 18:00 até 12 de março às 22:00\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitleMap\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard\">\r\n                            Mapa\r\n                        </div>\r\n                        <div class=\"col text-right iconCard\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-12\">\r\n                            <!--\r\n                <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" ></sebm-google-map-marker>\r\n                </sebm-google-map>\r\n                -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard\">\r\n                            Candidatos\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"../assets/imgs/avatar04.png\">\r\n                                    <span class=\"candidateName\">Pedro Araújo</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnCancel\">RECUSAR</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\">ACEITAR</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"../assets/imgs/avatar5.png\">\r\n                                    <span class=\"candidateName\">Pedro Araújo</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnCancel\">RECUSAR</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\">ACEITAR</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"../assets/imgs/avatar3.png\">\r\n                                    <span class=\"candidateName\">Pedro Araújo</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnCancel \">RECUSAR</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\">ACEITAR</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard\">\r\n                            Confirmados\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"../assets/imgs/avatar04.png\">\r\n                                    <span class=\"candidateName\">Pedro Araújo</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnRemove\">REMOVER</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"../assets/imgs/avatar.png\">\r\n                                    <span class=\"candidateName\">Pedro Araújo</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnRemove\">REMOVER</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"../assets/imgs/avatar2.png\">\r\n                                    <span class=\"candidateName\">Pedro Araújo</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnRemove\">REMOVER</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid sub-header-background\">\r\n    <div class=\"container sub-header-profile\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 col-sm-12 col-12 profile-user-picture\">\r\n                <img src=\"./assets/imgs/avatar.png\" alt=\"profile user picture\">\r\n                <div class=\"col user-rate\">\r\n                    <md-icon class=\"rate1\">star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 col-sm-12 col-12 profile-user-name-location\">\r\n                <div class=\"user-name\">\r\n                    João Tavares\r\n                </div>\r\n                <div class=\"user-location\">\r\n                    Aveiro, Sever do Vouga\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 col-6 menuSubHeader\">\r\n                <ul class=\"menuSubHeaderUl\">\r\n                    <li><a routerLink=\"/profile/activity\" [routerLinkActive]=\"['menuSubHeaderActive']\">Atividade</a></li>\r\n                    <li><a routerLink=\"/profile/actions\" [routerLinkActive]=\"['menuSubHeaderActive']\">Ações</a></li>\r\n                    <li><a routerLink=\"/profile/about\" [routerLinkActive]=\"['menuSubHeaderActive']\">Sobre</a></li>\r\n                    <li><a routerLink=\"/profile/following\" [routerLinkActive]=\"['menuSubHeaderActive']\">A seguir</a></li>\r\n                    <li><a routerLink=\"/profile/settings\" [routerLinkActive]=\"['menuSubHeaderActive']\">Definições</a></li>\r\n                </ul>\r\n                <a class=\"btn-menu\" md-raised-button routerLink=\".\" [mdMenuTriggerFor]=\"menuSubHeader\"><md-icon class=\"btn-new-action-icon\">menu</md-icon></a>\r\n                <md-menu #menuSubHeader=\"mdMenu\">\r\n                    <button md-menu-item>Actividade</button>\r\n                    <button md-menu-item>Minhas ações</button>\r\n                    <button md-menu-item>Sobre</button>\r\n                    <button md-menu-item>A seguir</button>\r\n                    <button md-menu-item>Definições</button>\r\n                </md-menu>\r\n            </div>\r\n            <div class=\"col-sm-2 col-6 col-new-action text-right\">\r\n                <a class=\"btn-new-action\" md-raised-button routerLink=\".\"><span class=\"btn-new-action-text\">NOVA AÇÃO</span><span><md-icon class=\"btn-new-action-icon\">add</md-icon></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"footerText\">\r\n      @ Volum, Inc.\r\n    </div>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map