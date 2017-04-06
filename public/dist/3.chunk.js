webpackJsonp([3,8],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__following_routing__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people_people_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__institutions_institutions_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_accordion__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingModule", function() { return FollowingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FollowingModule = (function () {
    function FollowingModule() {
    }
    return FollowingModule;
}());
FollowingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__following_routing__["a" /* FollowingRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__people_people_component__["a" /* PeopleComponent */], __WEBPACK_IMPORTED_MODULE_3__institutions_institutions_component__["a" /* InstitutionsComponent */], __WEBPACK_IMPORTED_MODULE_2__following_component__["a" /* FollowingComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["LOCALE_ID"], useValue: "pt-PT" },
        ]
    })
], FollowingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/following.module.js.map

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

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowingComponent = (function () {
    function FollowingComponent() {
    }
    FollowingComponent.prototype.ngOnInit = function () {
    };
    return FollowingComponent;
}());
FollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-following',
        template: __webpack_require__(549),
        styles: [__webpack_require__(524)]
    }),
    __metadata("design:paramtypes", [])
], FollowingComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/following.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitutionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstitutionsComponent = (function () {
    function InstitutionsComponent() {
    }
    InstitutionsComponent.prototype.ngOnInit = function () {
    };
    return InstitutionsComponent;
}());
InstitutionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-institutions',
        template: __webpack_require__(550),
        styles: [__webpack_require__(525)]
    }),
    __metadata("design:paramtypes", [])
], InstitutionsComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/institutions.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-people',
        template: __webpack_require__(551),
        styles: [__webpack_require__(526)]
    }),
    __metadata("design:paramtypes", [])
], PeopleComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/people.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__people_people_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__institutions_institutions_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__following_component__["a" /* FollowingComponent */],
        children: [
            {
                path: '',
                redirectTo: 'institutional'
            },
            {
                path: 'institutional',
                component: __WEBPACK_IMPORTED_MODULE_1__institutions_institutions_component__["a" /* InstitutionsComponent */]
            },
            {
                path: 'people',
                component: __WEBPACK_IMPORTED_MODULE_0__people_people_component__["a" /* PeopleComponent */]
            },
        ]
    },
];
var FollowingRoutingModule = (function () {
    function FollowingRoutingModule() {
    }
    return FollowingRoutingModule;
}());
FollowingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]]
    })
], FollowingRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/following.routing.js.map

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n#custom-search-input {\n  padding: 3px;\n  border: solid 1px #E4E4E4;\n  border-radius: 6px;\n  background-color: #fff; }\n\n#custom-search-input input {\n  border: 0;\n  box-shadow: none; }\n\n#custom-search-input button {\n  margin: 2px 0 0 0;\n  background: none;\n  box-shadow: none;\n  border: 0;\n  color: #666666;\n  padding: 0 8px 0 10px;\n  border-left: solid 1px #ccc; }\n\n#custom-search-input button:hover {\n  border: 0;\n  box-shadow: none;\n  border-left: solid 1px #ccc; }\n\n#custom-search-input .glyphicon-search {\n  font-size: 23px; }\n\n.form-control {\n  border-radius: 0px; }\n\n.searchIcon {\n  font-size: 17px;\n  color: #fff;\n  margin-top: 6px; }\n\n.searchBar {\n  font-size: 16px;\n  color: #919191; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  color: #919191;\n  font-size: 14px;\n  font-family: Lato;\n  border-color: black !important; }\n\n.cardFriends {\n  margin-top: 30px;\n  height: 335px;\n  background: #fff;\n  border: 0;\n  width: 100%; }\n\n.profile-user-picture {\n  text-align: center;\n  margin-top: -50px !important; }\n\n.profile-user-picture img {\n  width: 100px;\n  height: 100px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  text-align: center !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.friendsName {\n  text-align: center;\n  font-weight: 600;\n  margin-top: 5px; }\n\n.friendsPlace {\n  text-align: center;\n  color: #919191;\n  font-size: 12px; }\n\n.friendsEvents {\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-top: 20px; }\n\n.friendsCardNumber {\n  font-weight: 600;\n  font-size: 14px; }\n\n.friendsCardNumberDesc {\n  color: #919191;\n  font-size: 12px;\n  text-align: center; }\n\n.friendsBtns {\n  margin-top: 28px; }\n\n.btnConfirm {\n  margin-left: -30px;\n  margin-top: 0; }\n\n.btnCancel {\n  margin-left: 20px;\n  margin-top: 0; }\n\n.vcenter {\n  margin-top: 10px; }\n\n.friendsBackground {\n  height: 100px;\n  background-size: cover; }\n\n.coverImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n#custom-search-input {\n  padding: 3px;\n  border: solid 1px #E4E4E4;\n  border-radius: 6px;\n  background-color: #fff; }\n\n#custom-search-input input {\n  border: 0;\n  box-shadow: none; }\n\n#custom-search-input button {\n  margin: 2px 0 0 0;\n  background: none;\n  box-shadow: none;\n  border: 0;\n  color: #666666;\n  padding: 0 8px 0 10px;\n  border-left: solid 1px #ccc; }\n\n#custom-search-input button:hover {\n  border: 0;\n  box-shadow: none;\n  border-left: solid 1px #ccc; }\n\n#custom-search-input .glyphicon-search {\n  font-size: 23px; }\n\n.form-control {\n  border-radius: 0px; }\n\n.searchIcon {\n  font-size: 17px;\n  color: #fff;\n  margin-top: 6px; }\n\n.searchBar {\n  font-size: 16px;\n  color: #919191; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  color: #919191;\n  font-size: 14px;\n  font-family: Lato;\n  border-color: black !important; }\n\n.cardFriends {\n  margin-top: 30px;\n  height: 335px;\n  background: #fff;\n  border: 0;\n  width: 100%; }\n\n.profile-user-picture {\n  text-align: center;\n  margin-top: -50px !important; }\n\n.profile-user-picture img {\n  width: 100px;\n  height: 100px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  text-align: center !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.friendsName {\n  text-align: center;\n  font-weight: 600;\n  margin-top: 5px; }\n\n.friendsPlace {\n  text-align: center;\n  color: #919191;\n  font-size: 12px; }\n\n.friendsEvents {\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-top: 20px; }\n\n.friendsCardNumber {\n  font-weight: 600;\n  font-size: 14px; }\n\n.friendsCardNumberDesc {\n  color: #919191;\n  font-size: 12px;\n  text-align: center; }\n\n.friendsBtns {\n  margin-top: 28px; }\n\n.btnConfirm {\n  margin-left: -30px;\n  margin-top: 0; }\n\n.btnCancel {\n  margin-left: 20px;\n  margin-top: 0; }\n\n.vcenter {\n  margin-top: 10px; }\n\n.friendsBackground {\n  height: 100px;\n  background-size: cover; }\n\n.coverImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n#custom-search-input {\n  padding: 3px;\n  border: solid 1px #E4E4E4;\n  border-radius: 6px;\n  background-color: #fff; }\n\n#custom-search-input input {\n  border: 0;\n  box-shadow: none; }\n\n#custom-search-input button {\n  margin: 2px 0 0 0;\n  background: none;\n  box-shadow: none;\n  border: 0;\n  color: #666666;\n  padding: 0 8px 0 10px;\n  border-left: solid 1px #ccc; }\n\n#custom-search-input button:hover {\n  border: 0;\n  box-shadow: none;\n  border-left: solid 1px #ccc; }\n\n#custom-search-input .glyphicon-search {\n  font-size: 23px; }\n\n.form-control {\n  border-radius: 0px; }\n\n.searchIcon {\n  font-size: 17px;\n  color: #fff;\n  margin-top: 6px; }\n\n.searchBar {\n  font-size: 16px;\n  color: #919191; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  color: #919191;\n  font-size: 14px;\n  font-family: Lato;\n  border-color: black !important; }\n\n.cardFriends {\n  margin-top: 30px;\n  height: 335px;\n  background: #fff;\n  border: 0;\n  width: 100%; }\n\n.profile-user-picture {\n  text-align: center;\n  margin-top: -50px !important; }\n\n.profile-user-picture img {\n  width: 100px;\n  height: 100px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  text-align: center !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.friendsName {\n  text-align: center;\n  font-weight: 600;\n  margin-top: 5px; }\n\n.friendsPlace {\n  text-align: center;\n  color: #919191;\n  font-size: 12px; }\n\n.friendsEvents {\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-top: 20px; }\n\n.friendsCardNumber {\n  font-weight: 600;\n  font-size: 14px; }\n\n.friendsCardNumberDesc {\n  color: #919191;\n  font-size: 12px;\n  text-align: center; }\n\n.friendsBtns {\n  margin-top: 28px; }\n\n.btnConfirm {\n  margin-left: -30px;\n  margin-top: 0; }\n\n.btnCancel {\n  margin-left: 20px;\n  margin-top: 0; }\n\n.vcenter {\n  margin-top: 10px; }\n\n.friendsBackground {\n  height: 100px;\n  background-size: cover; }\n\n.coverImg {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 \">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\" card-block noPadding\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2 col-6 navCard vcenter\">\r\n                <a routerLink=\"/profile/following/institutional\" [routerLinkActive]=\"['navLinkAtive']\" class=\"navLink\">Instituições (17)</a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-6 navCard vcenter\">\r\n                <a routerLink=\"/profile/following/people\" [routerLinkActive]=\"['navLinkAtive']\" class=\"navLink\">Pessoas (36)</a>\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n              </div>\r\n              <div class=\"col text-right\">\r\n                  <form class=\"navbar-form\" role=\"search\">\r\n                  <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"searchBar form-control\" placeholder=\"Procurar instituições...\" name=\"q\">\r\n                      <div class=\"input-group-btn\">\r\n                          <button class=\"btn btn-default\" type=\"submit\"><i class=\"material-icons searchIcon\">search</i></button>\r\n                      </div>\r\n                  </div>\r\n                  </form>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container friends\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-3 col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='./assets/imgs/backgroundOV.jpg'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"./assets/imgs/ondaverde.jpg\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"friendsName\">\r\n              Cáritas Aveiro\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Cacia, Aveiro\r\n            </div>\r\n            <div class=\"row friendsEvents\">\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">45</div>\r\n                <div class=\"friendsCardNumberDesc\">Eventos</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">13</div>\r\n                <div class=\"friendsCardNumberDesc\">Eventos</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center friendsBtns\">\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnCancel marginBtnL\" routerLink=\"/profile/details\">ELIMINAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <a class=\"btn btn-outline-primary btnConfirm marginBtnR\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n    \r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-3 col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='./assets/imgs/fundo_andre.jpg'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"./assets/imgs/andre.jpg\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"friendsName\">\r\n              André Martins\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Sever do Vouga, Aveiro\r\n            </div>\r\n            <div class=\"row friendsEvents\">\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">45</div>\r\n                <div class=\"friendsCardNumberDesc\">Eventos</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">13</div>\r\n                <div class=\"friendsCardNumberDesc\">Amigos</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center friendsBtns\">\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnCancel marginBtnL\" routerLink=\"/profile/details\">ELIMINAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <a class=\"btn btn-outline-primary btnConfirm marginBtnR\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='./assets/imgs/fundo_pedro.jpg'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"./assets/imgs/pedro.jpg\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"friendsName\">\r\n              Pedro Araújo\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Oliveira de Azemeis, Aveiro\r\n            </div>\r\n            <div class=\"row friendsEvents\">\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">45</div>\r\n                <div class=\"friendsCardNumberDesc\">Eventos</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">13</div>\r\n                <div class=\"friendsCardNumberDesc\">Amigos</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center friendsBtns\">\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnCancel marginBtnL\" routerLink=\"/profile/details\">ELIMINAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <a class=\"btn btn-outline-primary btnConfirm marginBtnR\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='./assets/imgs/fundo_vasco.jpg'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"./assets/imgs/vasco.jpg\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"friendsName\">\r\n              Vasco Silva\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Vila Nova de Gaia, Porto\r\n            </div>\r\n            <div class=\"row friendsEvents\">\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">45</div>\r\n                <div class=\"friendsCardNumberDesc\">Eventos</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">13</div>\r\n                <div class=\"friendsCardNumberDesc\">Amigos</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center friendsBtns\">\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnCancel marginBtnL\" routerLink=\"/profile/details\">ELIMINAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <a class=\"btn btn-outline-primary btnConfirm marginBtnR\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-12\">\r\n          <div class=\"card cardFriends text-center\">\r\n            <div class=\"friendsBackground\">\r\n                <img class=\"coverImg\" src='./assets/imgs/fundo_cunha.jpg'>\r\n            </div>\r\n            <div class=\"profile-user-picture text-center\">\r\n                <img src=\"./assets/imgs/cunha.jpg\" alt=\"profile user picture\" />\r\n            </div>\r\n            <div class=\"friendsName\">\r\n              Pedro Cunha\r\n            </div>\r\n            <div class=\"friendsPlace\">\r\n              Lousada, Porto\r\n            </div>\r\n            <div class=\"row friendsEvents\">\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">45</div>\r\n                <div class=\"friendsCardNumberDesc\">Eventos</div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"friendsCardNumber\">13</div>\r\n                <div class=\"friendsCardNumberDesc\">Amigos</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center friendsBtns\">\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnCancel marginBtnL\" routerLink=\"/profile/details\">ELIMINAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <a class=\"btn btn-outline-primary btnConfirm marginBtnR\" routerLink=\"/profile/details\">VER</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n    \r\n\r\n    \r\n\r\n\r\n\r\n\r\n</div>"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map