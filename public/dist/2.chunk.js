webpackJsonp([2,8],{

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__personal_settings_personal_settings_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_routing__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_accordion__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_me_about_me_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__education_education_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_pass_change_pass_component__ = __webpack_require__(539);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__settings_routing__["a" /* SettingsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_0__personal_settings_personal_settings_component__["a" /* PersonalSettingsComponent */], __WEBPACK_IMPORTED_MODULE_10__about_me_about_me_component__["a" /* AboutMeComponent */], __WEBPACK_IMPORTED_MODULE_11__education_education_component__["a" /* EducationComponent */], __WEBPACK_IMPORTED_MODULE_12__change_pass_change_pass_component__["a" /* ChangePassComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["LOCALE_ID"], useValue: "pt-PT" },
        ]
    })
], SettingsModule);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/settings.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__(517);
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

/***/ 517:
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

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__(516);
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

/***/ 519:
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(519);
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__(517);
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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__(518);
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__(516);
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(522);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(517);
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 524:
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

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__(524);
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

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-me',
        template: __webpack_require__(589),
        styles: [__webpack_require__(564)]
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/about-me.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePassComponent = (function () {
    function ChangePassComponent() {
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    return ChangePassComponent;
}());
ChangePassComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-pass',
        template: __webpack_require__(590),
        styles: [__webpack_require__(565)]
    }),
    __metadata("design:paramtypes", [])
], ChangePassComponent);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/change-pass.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-education',
        template: __webpack_require__(591),
        styles: [__webpack_require__(566)]
    }),
    __metadata("design:paramtypes", [])
], EducationComponent);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/education.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalSettingsComponent = (function () {
    function PersonalSettingsComponent() {
    }
    PersonalSettingsComponent.prototype.ngOnInit = function () {
    };
    return PersonalSettingsComponent;
}());
PersonalSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-personal-settings',
        template: __webpack_require__(592),
        styles: [__webpack_require__(567)]
    }),
    __metadata("design:paramtypes", [])
], PersonalSettingsComponent);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/personal-settings.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
        this.personalSettings = 1;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.openPersonal = function () {
        if (this.personalSettings == 1) {
            this.personalSettings = 0;
        }
        else if (this.personalSettings == 0) {
            this.personalSettings = 1;
        }
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(593),
        styles: [__webpack_require__(568)],
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/settings.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_pass_change_pass_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__education_education_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_me_about_me_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_settings_personal_settings_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__settings_component__["a" /* SettingsComponent */],
        children: [
            {
                path: '',
                redirectTo: 'personal'
            },
            {
                path: 'personal',
                component: __WEBPACK_IMPORTED_MODULE_4__personal_settings_personal_settings_component__["a" /* PersonalSettingsComponent */]
            },
            {
                path: 'about-me',
                component: __WEBPACK_IMPORTED_MODULE_3__about_me_about_me_component__["a" /* AboutMeComponent */]
            },
            {
                path: 'education',
                component: __WEBPACK_IMPORTED_MODULE_2__education_education_component__["a" /* EducationComponent */]
            },
            {
                path: 'change-pass',
                component: __WEBPACK_IMPORTED_MODULE_1__change_pass_change_pass_component__["a" /* ChangePassComponent */]
            },
        ]
    },
];
var SettingsRoutingModule = (function () {
    function SettingsRoutingModule() {
    }
    return SettingsRoutingModule;
}());
SettingsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */]]
    })
], SettingsRoutingModule);

//# sourceMappingURL=C:/Users/vasco/desktop/volum_server/public/src/settings.routing.js.map

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: Lato;\n  font-size: 12px;\n  color: red; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 20px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnDescart:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #919191;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label input + label,\n.float-label textarea + label {\n  position: absolute;\n  top: 10px;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n  opacity: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ccc; }\n\n.float-label input:valid + label,\n.float-label textarea:valid + label {\n  opacity: 1;\n  color: #919191;\n  font-size: 10px; }\n\n.float-label input:focus + label,\n.float-label textarea:focus + label {\n  color: #919191;\n  font-style: 8px !important;\n  font-size: 10px; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5 !important;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 20px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > select.input-group-addon:not([size]):not([multiple]), select.form-control-lg:not([size]):not([multiple]) {\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-bottom: 0;\n  padding-top: 18px; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: Lato;\n  font-size: 12px;\n  color: red; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 20px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnDescart:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #919191;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label input + label,\n.float-label textarea + label {\n  position: absolute;\n  top: 10px;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n  opacity: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ccc; }\n\n.float-label input:valid + label,\n.float-label textarea:valid + label {\n  opacity: 1;\n  color: #919191;\n  font-size: 10px; }\n\n.float-label input:focus + label,\n.float-label textarea:focus + label {\n  color: #919191;\n  font-style: 8px !important;\n  font-size: 10px; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5 !important;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 20px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > select.input-group-addon:not([size]):not([multiple]), select.form-control-lg:not([size]):not([multiple]) {\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-bottom: 0;\n  padding-top: 18px; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: Lato;\n  font-size: 12px;\n  color: red; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 20px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnDescart:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #919191;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label input + label,\n.float-label textarea + label {\n  position: absolute;\n  top: 10px;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n  opacity: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ccc; }\n\n.float-label input:valid + label,\n.float-label textarea:valid + label {\n  opacity: 1;\n  color: #919191;\n  font-size: 10px; }\n\n.float-label input:focus + label,\n.float-label textarea:focus + label {\n  color: #919191;\n  font-style: 8px !important;\n  font-size: 10px; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5 !important;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 20px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > select.input-group-addon:not([size]):not([multiple]), select.form-control-lg:not([size]):not([multiple]) {\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-bottom: 0;\n  padding-top: 18px; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: Lato;\n  font-size: 12px;\n  color: red; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 20px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnDescart:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #919191;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label input + label,\n.float-label textarea + label {\n  position: absolute;\n  top: 10px;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n  opacity: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ccc; }\n\n.float-label input:valid + label,\n.float-label textarea:valid + label {\n  opacity: 1;\n  color: #919191;\n  font-size: 10px; }\n\n.float-label input:focus + label,\n.float-label textarea:focus + label {\n  color: #919191;\n  font-style: 8px !important;\n  font-size: 10px; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5 !important;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 20px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > select.input-group-addon:not([size]):not([multiple]), select.form-control-lg:not([size]):not([multiple]) {\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-bottom: 0;\n  padding-top: 18px; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -12px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: Lato;\n  font-size: 12px;\n  color: red; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 20px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnDescart:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #919191;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave:hover {\n  width: 100%;\n  font-size: 15px;\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label input + label,\n.float-label textarea + label {\n  position: absolute;\n  top: 10px;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n  opacity: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ccc; }\n\n.float-label input:valid + label,\n.float-label textarea:valid + label {\n  opacity: 1;\n  color: #919191;\n  font-size: 10px; }\n\n.float-label input:focus + label,\n.float-label textarea:focus + label {\n  color: #919191;\n  font-style: 8px !important;\n  font-size: 10px; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5 !important;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 20px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > select.input-group-addon:not([size]):not([multiple]), select.form-control-lg:not([size]):not([multiple]) {\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-bottom: 0;\n  padding-top: 18px; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class=\"card primaryCard\">\n  <div class=\"card-header cardTitle\">\n    <div class=\"row\">\n      <div class=\"col titleCard\">\n      Acerca de mim\n      </div>\n    </div>\n  </div>\n\n<div class=\"card-block\">\n  <form class=\"float-label\" spellcheck=\"false\">\n    <div class=\"row\">\n        <div class=\"col-6 inputProfile no-margin\">\n          <div class=\"control\">\n           <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Sobre mim\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\n            <label for=\"textarea\" class=\"titlePlaceholder\">Sobre mim</label>\n           </div>\n         </div>\n         <div class=\"col-6 inputProfile no-margin\">\n           <div class=\"control\">\n            <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Hobbies e interesses\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\n             <label for=\"textarea\" class=\"titlePlaceholder\">Hobbies e interesses</label>\n            </div>\n          </div>\n\n          <div class=\"col-6 inputProfile\">\n            <div class=\"control\">\n             <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Tipos de voluntariado favoritos\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\n              <label for=\"textarea\" class=\"titlePlaceholder\">Tipos de voluntariado favoritos</label>\n             </div>\n           </div>\n           <div class=\"col-6 inputProfile\">\n             <div class=\"control\">\n              <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Idiomas\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\n               <label for=\"textarea\" class=\"titlePlaceholder\">Idiomas</label>\n              </div>\n            </div>\n\n            <div class=\"col-6 inputProfile\">\n              <div class=\"control\">\n               <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Outros interesses\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\n                <label for=\"textarea\" class=\"titlePlaceholder\">Outros interesses</label>\n               </div>\n             </div>\n             <div class=\"col-6 inputProfile\">\n               <div class=\"control\">\n                <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Sobre mim\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\n                 <label for=\"textarea\" class=\"titlePlaceholder\">Sobre mim</label>\n                </div>\n              </div>\n\n        <div class=\"col-6\">\n            <a class=\"btn btn-outline-primary btnDescart\" routerLink=\"/profile/details\">CANCELAR</a>\n        </div>\n        <div class=\"col-6 \">\n          <a class=\"btn btn-outline-primary btnSave\" routerLink=\"/profile/details\">GUARDAR</a>\n        </div>\n    </div>\n  </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<div class=\"card primaryCard\">\r\n  <div class=\"card-header cardTitle\">\r\n    <div class=\"row\">\r\n      <div class=\"col titleCard\">\r\n      Alterar a palavra passe\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"card-block\">\r\n  <form class=\"float-label\" spellcheck=\"false\">\r\n  <div class=\"row\">\r\n      <div class=\"col-12 inputProfile no-margin\">\r\n          <div class=\"control inputText\">\r\n          <input type=\"password\" class=\"\" name=\"title\" placeholder=\"Palavra passe atual\" value=\"qualquer\" required />\r\n          <label for=\"title\" class=\"titlePlaceholder\">Palavra passe atual</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 inputProfile\">\r\n        <div class=\"control inputText\">\r\n          <input type=\"password\" class=\"\" name=\"title\" placeholder=\"Nova palavra passe\" value=\"qualquer\" required />\r\n          <label for=\"title\" class=\"titlePlaceholder\">Nova palavra passe</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 inputProfile\">\r\n        <div class=\"control inputText\">\r\n          <input type=\"password\" class=\"\" name=\"title\" placeholder=\"Confirmar nova palavra passe\" value=\"qualquer\" required />\r\n          <label for=\"title\" class=\"titlePlaceholder\">Confirmar nova palavra passe</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 \">\r\n        <a class=\"btn btn-outline-primary btnSave\" routerLink=\"/profile/details\">GUARDAR</a>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<div class=\"card primaryCard\">\r\n  <div class=\"card-header cardTitle\">\r\n    <div class=\"row\">\r\n      <div class=\"col titleCard\">\r\n      Educação e formação\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"card-block\">\r\n  <form class=\"float-label\" spellcheck=\"false\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 titleEducation noMarginTitleEducation\">\r\n      Formação 1\r\n    </div>\r\n      <div class=\"col-6 inputProfile no-margin\">\r\n          <div class=\"control inputText\">\r\n          <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Instituição\" value=\"Universidade de Aveiro\" required />\r\n          <label for=\"title\" class=\"titlePlaceholder\">Instituição</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-6 inputProfile no-margin\">\r\n          <div class=\"control inputText\">\r\n          <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Período de tempo\" value=\"2014-2017\" required />\r\n          <label for=\"title\" class=\"titlePlaceholder\">Período de tempo</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 inputProfile marginBottom\">\r\n        <div class=\"control\">\r\n         <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Descrição\">Licenciatura em Psicologia</textarea>\r\n          <label for=\"textarea\" class=\"titlePlaceholder\">Descrição</label>\r\n         </div>\r\n       </div>\r\n\r\n\r\n       <div class=\"col-12 titleEducation\">\r\n          Formação 2\r\n       </div>\r\n\r\n\r\n       <div class=\"col-6 inputProfile no-margin\">\r\n           <div class=\"control inputText\">\r\n           <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Instituição\" value=\"Universidade de Aveiro\" required />\r\n           <label for=\"title\" class=\"titlePlaceholder\">Instituição</label>\r\n         </div>\r\n       </div>\r\n\r\n       <div class=\"col-6 inputProfile no-margin \">\r\n           <div class=\"control inputText\">\r\n           <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Período de tempo\" value=\"2014-2017\" required />\r\n           <label for=\"title\" class=\"titlePlaceholder\">Período de tempo</label>\r\n         </div>\r\n       </div>\r\n       <div class=\"col-12 inputProfile marginBottom\">\r\n         <div class=\"control\">\r\n          <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Descrição\">Licenciatura em Psicologia</textarea>\r\n           <label for=\"textarea\" class=\"titlePlaceholder\">Descrição</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 addEducation\">\r\n          <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Adicionar campo de educação</span>\r\n        </div>\r\n\r\n       <div class=\"col-6\">\r\n           <a class=\"btn btn-outline-primary btnDescart\" routerLink=\"/profile/details\">CANCELAR</a>\r\n       </div>\r\n       <div class=\"col-6 \">\r\n         <a class=\"btn btn-outline-primary btnSave\" routerLink=\"/profile/details\">GUARDAR</a>\r\n       </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"card primaryCard\">\r\n    <div class=\"card-header cardTitle\">\r\n      <div class=\"row\">\r\n        <div class=\"col titleCard\">\r\n          Informação Pessoal\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-block\">\r\n\r\n        <form class=\"float-label\" spellcheck=\"false\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6 inputProfile no-margin\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Primeiro nome\" value=\"Vasco\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">Primeiro nome</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6 inputProfile no-margin\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Apelido\" value=\"Silva\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">Apelido</label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-6 inputProfile\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"E-mail\" value=\"vascosilvaa@gmail.com\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">E-mail</label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-6 inputProfile\">\r\n              <select class=\"form-control inputText form-control-lg disabled\">\r\n                <option selected>Masculino</option>\r\n                <option>Feminino</option>\r\n              </select>\r\n              <label class=\"placeholderSelect\">Género</label>\r\n            </div>\r\n\r\n            <div class=\"col-6 inputProfile\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\"\r\n                           name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                  <label class=\"placeholderSelect\">Data de Nascimento</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-6 inputProfile\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"E-mail\" value=\"vascosilvaa@gmail.com\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">E-mail</label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-4 inputProfile\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"País\" value=\"Portugal\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">País</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 inputProfile\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Distrito\" value=\"Porto\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">Distrito</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 inputProfile\">\r\n                <div class=\"control inputText\">\r\n                <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Telemóvel\" value=\"913 315 609\" required />\r\n                <label for=\"title\" class=\"titlePlaceholder\">Telemóvel</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 inputProfile\">\r\n              <div class=\"control\">\r\n               <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Sobre mim\">Sou uma pessoa muito engraçada e gosto de voluntariado</textarea>\r\n                <label for=\"textarea\" class=\"titlePlaceholder\">Sobre mim</label>\r\n             </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" class=\"form-control-file inputPhotoProfile\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\r\n                <small id=\"fileHelp\" class=\"form-text text-muted\">Insira uma nova imagem de forma a alterar a sua foto de perfil. </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 inputProfile\">\r\n              <div class=\"input-group input-group-lg\">\r\n                <span class=\"input-group-addon\" id=\"sizing-addon1\" style=\"background-color:white; padding-left:30px; padding-right:30px;\"><img src=\"../assets/imgs/fb_logo.png\" style=\"max-height: 20px; max-width: 20px; height:auto; width: auto;\" /></span>\r\n                <input type=\"text\" class=\"form-control inputSocial\" placeholder=\"vasco/facebook.com\" aria-describedby=\"sizing-addon1\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 inputProfile\">\r\n              <div class=\"input-group input-group-lg\">\r\n                <span class=\"input-group-addon\" id=\"sizing-addon1\" style=\"background-color:white\"><img src=\"../assets/imgs/insta_logo.png\" style=\"max-height: 20px; max-width: 20px; height:auto; width: auto;\" /></span>\r\n                <input type=\"text\" class=\"form-control inputSocial\" placeholder=\"vasco/instagram.com\" aria-describedby=\"sizing-addon1\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 inputProfile\">\r\n              <div class=\"input-group input-group-lg\">\r\n                <span class=\"input-group-addon\" id=\"sizing-addon1\" style=\"background-color:white\"><img src=\"../assets/imgs/linkedin_logo.png\" style=\"max-height: 20px; max-width: 20px; height:auto; width: auto;\" /></span>\r\n                <input type=\"text\" class=\"form-control  inputSocial\" placeholder=\"vasco/linkedin.com\" aria-describedby=\"sizing-addon1\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 inputProfile\">\r\n              <div class=\"input-group input-group-lg\">\r\n                <span class=\"input-group-addon\" id=\"sizing-addon1\" style=\"background-color:white\"><img src=\"../assets/imgs/twitter_logo.png\" style=\"max-height: 20px; max-width: 20px; height:auto; width: auto;\" /></span>\r\n                <input type=\"text\" class=\"form-control  inputSocial\" placeholder=\"twitter/snapchat.com\" aria-describedby=\"sizing-addon1\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <a class=\"btn btn-outline-primary btnDescart\" routerLink=\"/profile/details\">CANCELAR</a>\r\n            </div>\r\n            <div class=\"col-6 \">\r\n              <a class=\"btn btn-outline-primary btnSave\" routerLink=\"/profile/details\">GUARDAR</a>\r\n            </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div clasS=\"col-12 col-lg-3 border\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitleMini\">\r\n          <div class=\"row\">\r\n            <div class=\"col titleCardMini\">\r\n            MEU PERFIL\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-header cardTitleAcc\" (click)=\"openPersonal()\">\r\n          <div class=\"row\">\r\n            <div class=\"col titleCardAcc\">\r\n            Definições de Perfil\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div *ngIf=\"personalSettings==1\" class=\"card-block-acc card-block\">\r\n        <ul class=\"listSettings\">\r\n          <li>\r\n            <a routerLink=\"/profile/1/settings/personal\" *ngIf=\"personalSettings==0\" [routerLinkActive]=\"['settingsActive']\">Informação Pessoal</a>\r\n            <a routerLink=\"/profile/1/settings/personal\" *ngIf=\"personalSettings==1\" class='settingsActive'>Informação Pessoal</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/profile/1/settings/about-me\" [routerLinkActive]=\"['settingsActive']\">Acerca de Mim</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/profile/1/settings/education\" [routerLinkActive]=\"['settingsActive']\">Educação e Formação</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/profile/1/settings/change-pass\" [routerLinkActive]=\"['settingsActive']\">Alterar a palavra passe</a>\r\n          </li>\r\n      </ul>\r\n      </div>\r\n\r\n      <div class=\"card-header cardTitleAcc\">\r\n        <div class=\"row\">\r\n          <div class=\"col titleCardAcc\">\r\n          Mensagens\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"col-12 col-lg-9\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map