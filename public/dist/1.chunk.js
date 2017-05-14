webpackJsonp([1,10],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modal_end_modal_end_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modal_view_all_modal_view_all_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_vol_details_modal_vol_details_modal_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activity_activity_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_routing__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_bootstrap_accordion__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__new_action_new_action_component__ = __webpack_require__(737);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__profile_routing__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            }),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_18__new_action_new_action_component__["a" /* NewActionComponent */], __WEBPACK_IMPORTED_MODULE_16__profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_7__activity_activity_component__["a" /* ActivityComponent */], __WEBPACK_IMPORTED_MODULE_5__details_details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_18__new_action_new_action_component__["a" /* NewActionComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_13__angular_core__["LOCALE_ID"], useValue: "pt-PT" }, __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__shared_vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */], __WEBPACK_IMPORTED_MODULE_1__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __WEBPACK_IMPORTED_MODULE_0__shared_modal_end_modal_end_component__["a" /* ModalEndComponent */]]
    })
], ProfileModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__(712);
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

/***/ 712:
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__(711);
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

/***/ 714:
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(714);
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

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

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__(712);
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

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__(713);
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__(711);
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(717);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(712);
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 719:
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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__(719);
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

/***/ 727:
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
        template: __webpack_require__(792),
        styles: [__webpack_require__(763)],
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/about.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_service__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(29);
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
    function ActivityComponent(http, feedService, route, profileService, auth) {
        this.http = http;
        this.feedService = feedService;
        this.route = route;
        this.profileService = profileService;
        this.auth = auth;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idProfile = _this.route.parent.snapshot.params['id'];
        });
        this.profileService.getVolHistory(this.idProfile)
            .then(function (res) {
            _this.volHistory = res.vols;
            console.log(_this.volHistory);
        })
            .catch(function (err) { return console.log(err); });
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-activity',
        template: __webpack_require__(797),
        styles: [__webpack_require__(779)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__feed_feed_service__["a" /* FeedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__feed_feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__feed_feed_service__["a" /* FeedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__profile_service__["a" /* ProfileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], ActivityComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/activity.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_service__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modal_end_modal_end_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_Auth_authentication_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
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
    function DetailsComponent(route, http, overlay, vcRef, modal, sharedService, auth, router, detailsservice) {
        this.route = route;
        this.http = http;
        this.modal = modal;
        this.sharedService = sharedService;
        this.auth = auth;
        this.router = router;
        this.detailsservice = detailsservice;
        this.address = [];
        this.addressName = [];
        overlay.defaultViewContainer = vcRef;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idVol = _this.route.snapshot.params['id'];
            _this.idLogin = _this.route.parent.parent.snapshot.params['id'];
        });
        this.getVol(this.idVol);
        this.getCandidates(this.idVol);
        this.getConfirmed(this.idVol);
    };
    DetailsComponent.prototype.getVol = function (idVol) {
        var _this = this;
        this.detailsservice.getVol(idVol)
            .then(function (res) {
            _this.vols = res.vol;
            _this.getAddress();
            _this.lat = parseFloat(_this.vols.lat);
            _this.lng = parseFloat(_this.vols.long);
            console.log(_this.lat + ',' + _this.lng);
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getCandidates = function (idVol) {
        var _this = this;
        this.detailsservice.getCandidates(idVol)
            .then(function (res) {
            _this.candidates = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getConfirmed = function (idVol) {
        var _this = this;
        this.detailsservice.getConfirmed(idVol)
            .then(function (res) {
            _this.confirmeds = res.users;
        })
            .catch(function (err) { return console.log(err); });
    };
    DetailsComponent.prototype.getAddress = function () {
        var _this = this;
        this.detailsservice.getAddress(this.vols.lat, this.vols.long)
            .then(function (res) {
            _this.addressData = res.results;
            console.log(_this.addressData);
            _this.address[_this.vols.id_vol] = _this.addressData[0].formatted_address;
            _this.addressName[_this.vols.id_vol] = _this.addressData[0].address_components[0].short_name;
        });
    };
    DetailsComponent.prototype.openViewAll = function (type, idVol, name) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["n" /* overlayConfigFactory */])({ idVol: idVol, type: type, name: name }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    DetailsComponent.prototype.openRemoveConfirm = function (type, name) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__shared_modal_view_all_modal_view_all_component__["a" /* ModalViewAllComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["n" /* overlayConfigFactory */])({ type: type, name: name }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    DetailsComponent.prototype.openEnd = function (type, idVol) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_1__shared_modal_end_modal_end_component__["a" /* ModalEndComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["n" /* overlayConfigFactory */])({ idVol: idVol, type: type }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(798),
        styles: [__webpack_require__(768)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__details_service__["a" /* DetailsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["g" /* Overlay */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__details_service__["a" /* DetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__details_service__["a" /* DetailsService */]) === "function" && _j || Object])
], DetailsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/details.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function NewActionComponent() {
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.schedule = 0;
        this.img = 0;
    }
    NewActionComponent.prototype.ngOnInit = function () {
    };
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
    return NewActionComponent;
}());
NewActionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-action',
        template: __webpack_require__(802),
        styles: [__webpack_require__(772)]
    }),
    __metadata("design:paramtypes", [])
], NewActionComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/new-action.component.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(29);
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
    function ProfileComponent(http, route, profileService, auth) {
        this.http = http;
        this.route = route;
        this.profileService = profileService;
        this.auth = auth;
        this.lat = 41.100856;
        this.lng = -8.544893;
        this.typeProfile = 1;
        this.invite = 0;
        this.private = 'private';
        this.public = 'public';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idProfile = _this.route.snapshot.params['id'];
            _this.profileService.getProfile(_this.idProfile).then(function (res) {
                _this.user = res.user;
            });
        });
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.auth.userPromise.then(function (res) {
                _this.userLogin = res.user;
                console.log(_this.userLogin);
                var id = localStorage.getItem('USER_ID');
                _this.idLogin = id;
            });
        }
    };
    ProfileComponent.prototype.follow = function (id_user) {
        console.log("ID", id_user);
        this.profileService.follow(id_user, this.idLogin).then(function (res) {
            console.log(res);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(803),
        styles: [__webpack_require__(773)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.component.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_http_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_global_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsService = (function () {
    function DetailsService(http, HTTP) {
        this.http = http;
        this.HTTP = HTTP;
    }
    DetailsService.prototype.getVol = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    DetailsService.prototype.getAddress = function (lat, lng) {
        return this.HTTP.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    DetailsService.prototype.getCandidates = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/candidates").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    DetailsService.prototype.getConfirmed = function (id_vol) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/vols/" + id_vol + "/applies/confirmed").toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    return DetailsService;
}());
DetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object])
], DetailsService);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/details.service.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_action_new_action_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_details_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_activity_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(40);
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
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/profile.routing.js.map

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n\n.marginAbout2 {\n  margin-top: 10px; }\n\n.marginAbout3 {\n  margin-top: 20px; }\n\n.socialButtonFacebook {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #2F5B9C;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none; }\n\n.socialButtonTwitter {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #37BFF1;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none; }\n\n.socialButtonLinkedin {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #0077B5;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none; }\n\n.socialButtonInstagram {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #F44747;\n  color: #fff;\n  height: 35px;\n  font-size: 13px;\n  font-family: Lato;\n  margin-bottom: 10px;\n  text-decoration: none;\n  border: none; }\n\n.card-block {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.card-header {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.titleProfile {\n  font-weight: bold;\n  font-size: 16px;\n  color: #4A4A4A; }\n\n.titleCard {\n  margin-top: 3px; }\n\n.textProfile {\n  font-size: 14px;\n  color: #919191;\n  padding-top: 3px; }\n\n.socialProfile {\n  margin-left: 5px;\n  padding-top: 15px; }\n\n.dateFormation {\n  font-size: 11px;\n  color: #919191;\n  font-weight: 300; }\n\n.formationText {\n  margin-top: 3px; }\n\n.linkInsert {\n  color: #FF8A65;\n  cursor: pointer;\n  font-weight: 600; }\n\n.linkInsert:hover {\n  cursor: pointer;\n  font-weight: 600; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.no-padding {\n  padding-right: 0 !important; }\n\n.btnCancel {\n  margin: 0; }\n\n.btnConfirm {\n  margin: 0; }\n\n.iconBack {\n  margin-left: -2px !important;\n  margin-top: 2px;\n  padding: 5px 0px 5px 0px; }\n\n.arrow {\n  margin-top: 2px; }\n\n.titleCard {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 600; }\n\n.titleVol {\n  margin-top: 2px !important;\n  font-size: 18px; }\n\n.card-header {\n  padding: 15px 30px 15px 30px !important; }\n\n.edit {\n  margin-top: 2px;\n  font-size: 20px;\n  color: #919191; }\n\n.btnCancel {\n  margin-top: 6px; }\n\n.btnConfirm {\n  margin-top: 6px; }\n\n.btnRemove {\n  margin-top: 6px; }\n\n.btnCancel1 {\n  border-radius: 0px;\n  font-size: 14px;\n  border: 1px solid #919191;\n  background-color: #FFFFFF;\n  color: #919191 !important;\n  width: 100%;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 40px; }\n\n.btnCancel1:hover {\n  border: 1px solid #919191;\n  background-color: #919191;\n  color: #FFFFFF !important; }\n\n.btnEnd:hover {\n  border: 1px solid #0F76F7;\n  background-color: #FFFFFF;\n  color: #0F76F7 !important; }\n\n.btnEnd {\n  border-radius: 0px;\n  font-size: 14px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100%;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 40px; }\n\n.badge {\n  padding: 5px 5px;\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.see-all {\n  color: #0F76F7;\n  font-size: 15px;\n  font-weight: 600;\n  padding-top: 1px;\n  cursor: pointer; }\n\n.card-content {\n  padding: 10px 15px 10px 15px; }\n\n.comments-section {\n  padding: 0px 30px 0px 30px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px 0px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.inputText {\n  height: 45px;\n  font-size: 16px;\n  border: 1px solid #E6E5E5;\n  border-radius: 5px;\n  width: 100%;\n  color: #4A4A4A;\n  padding: 10px 10px 10px 10px; }\n\n.inputText:focus {\n  outline: none; }\n\n.desc-title {\n  font-weight: 600; }\n\n.content-details {\n  margin-top: 10px; }\n\n.image-event {\n  height: 78px;\n  border: 1px dashed #E6E5E5;\n  border-radius: 6px; }\n\n.image-event img {\n  height: 78px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.m-b {\n  padding-bottom: 20px; }\n\n.inputInvite {\n  width: 100%;\n  border: 0;\n  margin-bottom: 10px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #919191; }\n\n.table th {\n  max-width: 200px; }\n\n.table td {\n  max-width: 200px; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px;\n  cursor: pointer; }\n\n.textComments:hover {\n  text-decoration: underline; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191;\n  background: #FFFFFF;\n  border-right: 1px solid #E6E5E5;\n  border-left: 1px solid #E6E5E5; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  padding-top: 10px;\n  background: #FFFFFF;\n  border-right: 1px solid #E6E5E5;\n  border-left: 1px solid #E6E5E5;\n  border-bottom: 1px solid #E6E5E5; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5; }\n\n.card-user-comments-image-comments {\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.titleCard {\n  font-weight: 600; }\n\n.titleVol {\n  font-size: 18px; }\n\n.primaryCard {\n  margin-top: 25px;\n  font-size: 16px;\n  border: 0; }\n\n.cardTitle {\n  background: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.cardTitleMap {\n  background: #fff;\n  border-bottom: 2px solid #0F76F7;\n  display: inline-block;\n  vertical-align: middle;\n  float: none; }\n\n.addressTitle {\n  font-weight: bold; }\n\n.sebm-google-map-container {\n  height: 200px; }\n\n.candidate {\n  margin-top: 15px; }\n\n.edit {\n  font-size: 24px;\n  color: #919191; }\n\n.no-border {\n  border: 0 !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px;\n  margin: 0; }\n\n.list-group-item {\n  margin: 0 !important; }\n\n.listPerson {\n  list-style-type: none;\n  padding: 10px; }\n\n.candidateName {\n  margin-left: 10px; }\n\n.navCard {\n  font-size: 16px; }\n\n.navLink {\n  text-decoration: none;\n  font-size: 16px;\n  color: #919191;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.navLinkAtive {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(-50%);\n          transform: perspective(1px) translateY(-50%); }\n\n.badge {\n  background-color: #0F76F7;\n  margin-left: 7px;\n  border-radius: 50px; }\n\n.table {\n  margin-top: 10px; }\n\n.cabecalho {\n  background-color: #fff;\n  font-size: 12px !important;\n  color: #4A4A4A; }\n\n.tableBold {\n  font-weight: 600;\n  font-size: 16px !important; }\n\n.tableText {\n  font-size: 14px; }\n\n.table-user-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 45px; }\n\n.margin {\n  margin-left: -9px; }\n\n.table td, .table th {\n  vertical-align: middle;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 200px; }\n\n.marginAbout {\n  margin-top: 30px; }\n\n.btnCancel {\n  margin-top: 2px; }\n\n.btnConfirm {\n  margin-bottom: 2px; }\n\n.tableTitle {\n  min-width: 150px; }\n\n.tablePlace {\n  min-width: 240px; }\n\n.tableDate {\n  max-width: 180px; }\n\n.table th {\n  padding-left: 20px; }\n\n.tableBtns {\n  padding-right: 20px; }\n\n.tableBtns a {\n  padding-right: 20px; }\n\n.titleNavLink {\n  margin-top: 5px; }\n\n.noPadding {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.margin-left {\n  margin-left: 6px; }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.listSettings li a {\n  color: #919191;\n  list-style-type: none;\n  text-decoration: none;\n  font-size: 12px; }\n\n.card-block-acc ul li {\n  padding-top: 7px !important; }\n\n.titleCardMini {\n  color: #919191;\n  font-size: 10px;\n  padding-left: 15px; }\n\n.titleCardAcc {\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 15px;\n  color: #4A4A4A; }\n\n.card-block-acc {\n  background: #FAFBFD;\n  padding-left: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #F7F8FA; }\n\n.cardTitleAcc {\n  border-top: 1px solid #F7F8FA;\n  border-bottom: 0;\n  cursor: pointer; }\n\n.cardTitleMini {\n  border-bottom: 0;\n  border-top: 1px solid #F7F8FA; }\n\n.settingsActive {\n  color: #4A4A4A !important;\n  font-weight: 600; }\n\n.card-header {\n  background-color: #FFFFFF !important; }\n\n.card-block ul {\n  list-style-type: none;\n  padding: 0;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n  font-weight: 400 !important; }\n\n.card-block ul li {\n  list-style-type: none;\n  padding-top: 15px; }\n\n.border {\n  border: 0; }\n\n/deep/ .card {\n  border: 0px; }\n\n.card-block2 {\n  background-color: #ffffff;\n  color: #919191;\n  border: 0; }\n\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: Lato;\n  font-size: 12px;\n  color: red; }\n\n.form-control {\n  margin-bottom: 0px !important; }\n\n.inputProfile {\n  margin-top: 20px; }\n\n.inputProfile2 {\n  height: 50px;\n  margin-top: 20px; }\n\n.no-margin {\n  margin-top: 0px; }\n\n.disabled {\n  color: #919191;\n  font-family: Lato;\n  font-size: 12px;\n  padding-left: 10px; }\n\n.date_picker {\n  height: 50px;\n  border: 1px solid #E6E5E5 !important;\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-top: 20px;\n  padding-bottom: 0;\n  background: #fff;\n  z-index: 9; }\n\n.input-group-addon {\n  height: 50px;\n  margin-top: 0px; }\n\n.text_area_profile {\n  height: 100px;\n  line-height: 1.2em; }\n\n.fotoTitle {\n  margin-top: 20px; }\n\n.inputPhotoProfile {\n  margin-top: 55px; }\n\n.btnDescart {\n  width: 100%;\n  font-size: 15px;\n  color: #919191;\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #919191;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnSave {\n  width: 100%;\n  font-size: 15px;\n  color: #FFFFFF;\n  background-color: #0F76F7;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 1px solid #0F76F7;\n  border-radius: 0px;\n  margin-top: 40px; }\n\n.btnDescart:hover {\n  color: #FFFFFF;\n  background-color: #919191;\n  border: 1px solid #919191; }\n\n.btnSave:hover {\n  color: #0F76F7;\n  background-color: #FFFFFF;\n  border: 1px solid #0F76F7; }\n\n.inputText {\n  height: 50px; }\n\n.form-group {\n  margin: 0 !important; }\n\n.float-label .control {\n  width: 100%; }\n\n.float-label input,\n.float-label textarea {\n  display: block;\n  width: 95%;\n  border: 0;\n  outline: 0;\n  resize: none;\n  font-size: 14px;\n  font-family: Lato;\n  color: #4A4A4A; }\n\n.float-label input + label,\n.float-label textarea + label {\n  position: absolute;\n  top: 10px;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n  opacity: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ccc; }\n\n.float-label input:valid + label,\n.float-label textarea:valid + label {\n  opacity: 1;\n  color: #919191;\n  font-size: 10px; }\n\n.float-label input:focus + label,\n.float-label textarea:focus + label {\n  color: #919191;\n  font-style: 8px !important;\n  font-size: 10px; }\n\n.float-label .control {\n  border: 1px solid #E6E5E5 !important;\n  border-radius: 5px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  padding-top: 20px; }\n\n.titlePlaceholder {\n  margin-top: -2px; }\n\n::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: Lato;\n  color: #919191; }\n\n.placeholderSelect {\n  position: absolute;\n  top: 9px;\n  left: 29px;\n  color: #919191;\n  font-size: 10px;\n  font-family: Lato;\n  opacity: 1;\n  z-index: 11; }\n\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > select.input-group-addon:not([size]):not([multiple]), select.form-control-lg:not([size]):not([multiple]) {\n  font-size: 15px;\n  font-family: Lato;\n  color: #4A4A4A;\n  padding-bottom: 0;\n  padding-top: 18px; }\n\n.textAreaProfile {\n  margin-left: -2px; }\n\n.inputSocial {\n  border: 1px solid #E6E5E5 !important; }\n\n.titleAdd {\n  color: #919191;\n  font-size: 14px;\n  margin-top: -20px; }\n\n.titleEducation {\n  color: #919191;\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-top: 5px; }\n\n.iconAdd {\n  font-size: 18px;\n  margin-top: 20px;\n  color: #919191; }\n\n.marginBottom {\n  margin-bottom: 30px; }\n\n.textAdd {\n  margin-top: -10px; }\n\n.addEducation {\n  margin-top: 20px !important;\n  margin-bottom: -5px !important;\n  cursor: pointer; }\n\n.inputProfile2 {\n  margin-top: 30px; }\n\n.inputProfile3 {\n  margin-top: 27px; }\n\n.addEducation {\n  padding-left: 20px; }\n\n.imageVol {\n  height: 75px;\n  border: 1px dashed #E6E5E5;\n  border-radius: 6px;\n  margin-top: 15px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n/* Sub Header */\n.sub-header-profile {\n  height: 80px; }\n\n.sub-header-background {\n  background-color: #FFFFFF; }\n\n.profile-user-picture {\n  margin-top: -90px; }\n\n.profile-user-picture img {\n  width: 120px;\n  height: 120px;\n  border-radius: 120px;\n  border: solid 5px #FFFFFF;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.user-rate {\n  padding-left: 0;\n  padding-top: 5px;\n  margin-left: -7px; }\n\n.user-rate md-icon {\n  color: #FFCB2B; }\n\n.profile-user-name-location {\n  margin-top: -60px;\n  margin-left: -145px; }\n\n.user-name {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 600; }\n\n.user-location {\n  color: #FFFFFF;\n  font-size: 16px;\n  margin-top: -5px; }\n\n.menuSubHeader ul {\n  padding-left: 140px;\n  margin-top: -36px; }\n\n.menuSubHeader ul li {\n  display: inline-block;\n  color: #919191;\n  padding-right: 15px; }\n\n.menuSubHeader ul li a {\n  display: inline-block;\n  color: #919191;\n  text-decoration: none; }\n\n.menuSubHeader ul li a:hover {\n  display: inline-block;\n  color: #4A4A4A;\n  text-decoration: none; }\n\n.menuSubHeaderActive {\n  color: #4A4A4A !important;\n  padding: 0; }\n\n.col-new-action {\n  margin-top: -65px; }\n\n.btn-new-action {\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  background-color: #FFCB2B;\n  color: #FFFFFF;\n  font-weight: 600;\n  height: 45px;\n  line-height: 41px;\n  font-size: 14px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 17px;\n  border-radius: 4px; }\n\n.btn-new-action:hover, .btn-follow:hover {\n  text-decoration: none !important; }\n\n.btn-new-action:focus, .btn-follow:focus {\n  text-decoration: none !important; }\n\n.btn-new-action-icon {\n  display: none; }\n\n.btn-follow {\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  background-color: #FFFFFF;\n  color: #A28F9F;\n  font-weight: 600;\n  height: 45px;\n  line-height: 41px;\n  font-size: 14px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 17px;\n  border: 1px solid #E6E5E5;\n  border-radius: 4px; }\n\n@media (max-width: 1200px) {\n  .profile-user-name-location {\n    margin-left: -100px; }\n  .user-rate {\n    padding-left: 0;\n    padding-top: 5px;\n    margin-left: -5px;\n    padding-right: 0; }\n  .rate1 {\n    margin-left: -3px; } }\n\n@media (max-width: 992px) {\n  .profile-user-name-location {\n    margin-left: -40px; }\n  .col-new-action {\n    margin-left: -35px; } }\n\n@media (max-width: 767px) {\n  .sub-header-profile {\n    height: 130px; }\n  .profile-user-picture {\n    text-align: center; }\n  .profile-user-name-location {\n    text-align: center;\n    margin-left: 0;\n    margin-top: 0; }\n  .user-name {\n    color: #4A4A4A; }\n  .user-location {\n    color: #4A4A4A; }\n  .col-new-action {\n    margin-top: -54px;\n    margin-left: 0; }\n  .menuSubHeader ul {\n    padding-left: 15px;\n    margin-top: 0; }\n  .btn-new-action-text {\n    display: none; }\n  .btn-new-action-icon {\n    display: block; }\n  .btn-new-action {\n    box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n    background-color: #FFCB2B;\n    color: #FFFFFF;\n    font-weight: 600;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: -80px;\n    min-width: 40px !important;\n    text-align: center; }\n  .menuSubHeaderUl {\n    display: none; }\n  .menuSubHeader {\n    margin-top: -54px; }\n  .btn-menu {\n    box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n    background-color: #E6E5E5;\n    color: #FFFFFF;\n    font-weight: 600;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: -80px;\n    min-width: 40px !important;\n    text-align: center; } }\n\n@media (max-width: 576px) {\n  .brandBackground {\n    background-color: #FFFFFF; }\n  .titleBrand {\n    color: #FFFFFF;\n    font-weight: 600;\n    letter-spacing: 8px;\n    font-size: 1.45rem;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 15px; }\n  .titleBrand {\n    color: #0F76F7; }\n  .header-background {\n    height: 210px; }\n  .menuHeader {\n    padding-top: 5px; } }\n\n/* Sub Header */\n.headerBlue {\n  height: 110px;\n  background: #0F76F7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12 col-lg-4\">\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Dados Pessoais\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row \">\r\n              <div class=\"titleProfile col-4\">\r\n                Nome:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                 Associação de Melhoramentos de Eixo\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Idade:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                 <span class=\"linkInsert\">Inserir idade</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                E-mail:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                melhoramentosdoeixo@gmail.com\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Género:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                <span class=\"linkInsert\">Inserir género</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Vive em:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                Aveiro, Portugal\r\n              </div>\r\n            </div>\r\n            <div class=\"row marginAbout\">\r\n              <div class=\"titleProfile col-4\">\r\n                Telemóvel:\r\n              </div>\r\n              <div class=\"col-7 textProfile\">\r\n                912 384 499\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Instituições\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\" col-12\">\r\n                  <span class=\"table-user-image\"><img src=\"../assets/imgs/abrigoseguro.jpg\"></span>\r\n                  <span class=\"candidateName\">Abrigo Seguro</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 marginAbout\">\r\n                  <span class=\"table-user-image\"><img src=\"../assets/imgs/ondaverde.jpg\"></span>\r\n                  <span class=\"candidateName \">Onda Verde</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\" col-12 marginAbout\">\r\n                  <span class=\"table-user-image\"><img src=\"../assets/imgs/caritas_logo.gif\"></span>\r\n                  <span class=\"candidateName \">Caritas</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col titleCard\">\r\n                Redes Sociais\r\n              </div>\r\n              <div class=\"col text-right iconCard\">\r\n                <i class=\"material-icons edit\">more_horiz</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\" col-12 text-center\">\r\n                  <button class=\"socialButtonFacebook\">Facebook</button>\r\n              </div>\r\n              </div>\r\n              <div class=\"row\">\r\n              <div class=\" col-12 text-center\">\r\n                  <button class=\"socialButtonTwitter\">Twitter</button>\r\n              </div>\r\n              </div>\r\n              <div class=\"row\">\r\n              <div class=\" col-12 text-center\">\r\n                  <button class=\"socialButtonInstagram\">Instagram</button>\r\n              </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n</div>\r\n<div class=\"col-lg-8 col-12\">\r\n  <div class=\"card primaryCard\">\r\n    <div class=\"card-header cardTitle\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col titleCard\">\r\n            Acerca de mim\r\n          </div>\r\n          <div class=\"col text-right iconCard\">\r\n            <i class=\"material-icons edit\">more_horiz</i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Descrição:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n                Sou um rapaz natural de Aveiro e sempre procurei ajudar aqueles que necessitam. Gosto muito de voluntariado.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Hobbies e interesses:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Gosto de praticar desporto nos meus tempos livres, bem como jogar jogos de consola.\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row marginAbout\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Tipos de voluntariado favoritos:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Solidariedade Social, Desporto e Apoio aos jovens.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Historial de voluntariado:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Sem historial de voluntariado. <span class=\"linkInsert\">Inserir já</span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row marginAbout\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Idiomas:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Português, Inglês, Francês\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Outros interesses:\r\n            </div>\r\n            <div class=\"textProfile\">\r\n              Natureza e ambiente.\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card primaryCard\">\r\n    <div class=\"card-header cardTitle\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col titleCard\">\r\n            Educação e Formação\r\n          </div>\r\n          <div class=\"col text-right iconCard\">\r\n            <i class=\"material-icons edit\">more_horiz</i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Licenciatura em Psicologia\r\n              <div class=\"dateFormation\">2014-2017</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Universidade de Aveiro\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"titleProfile\">\r\n              Mestrado em Apoio Auxiliar\r\n              <div class=\"dateFormation\">2017-2019</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Faculdade de Letras da Universidade do Porto\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 marginAbout\">\r\n            <div class=\"titleProfile\">\r\n              Formação em Voluntariado\r\n              <div class=\"dateFormation\">2017-2019</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Banco Alimentar\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 marginAbout\">\r\n            <div class=\"titleProfile\">\r\n              Curso Secundário de Jardinagem\r\n              <div class=\"dateFormation\">2013-2018</div>\r\n            </div>\r\n            <div class=\"textProfile formationText\">\r\n              Escola Secundária de Oliveira de Azemeis\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\" *ngFor=\"let vol of volHistory\">\r\n          <vol-card [verified]=\"true\" type='private' [idVol]=\"vol.id_vol\" [avatar]=\"vol.photo_url\" [username]=\"vol.name\" [userCreator]=\"vol.id_user_creator\" [dateCreation]=\"vol.date_creation\" [title]=\"vol.name\" [desc]=\"vol.desc\">\r\n          </vol-card>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 \">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"row iconBack\">\r\n                        <a routerLink=\"/profile/{{idLogin}}/actions\"><i class=\"material-icons arrow\">arrow_back</i></a>\r\n                        <div class=\"col titleCard titleVol vcenter\">\r\n                            {{vols?.name}}\r\n                        </div>\r\n                        <div class=\"col text-right iconCard\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Descrição\r\n                        </div>\r\n                        <div class=\"col text-right iconCard no-padding\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                        {{vols?.desc}}\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Detalhes da Ação\r\n                        </div>\r\n                        <div class=\"col text-right iconCard no-padding\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content m-b\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 content-details\">\r\n                            <span class=\"desc-title\">Tipo de Voluntariado:</span> Solidariedade Social\r\n                        </div>\r\n                        <div class=\"col-12 content-details\">\r\n                            <span class=\"desc-title m-b\">Seguro:</span> <span *ngIf=\"vols?.insurance\">Sim</span><span *ngIf=\"!vols?.insurance\">Não</span>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n            <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Fotografias da Ação\r\n                        </div>\r\n                        <div class=\"col text-right iconCard no-padding\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <div class=\"image-event\">\r\n                                <img src=\"http://www.lusonoticias.com/images/stories/2016/LusoNoticias/banco_alimentar.jpg\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"image-event\">\r\n                                <img src=\"http://www.porto24.pt/wp-content/uploads/banco-alimentar-contra-a-fome_DR-1-983x550-32nhgkfgxtl5wdosysl1q8.jpg\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"image-event\">\r\n                                <img src=\"http://bancoalimentar.pt/image/933.jpg\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Localização\r\n                        </div>\r\n                        <div class=\"col text-right iconCard no-padding\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"addressTitle\">\r\n                                {{addressName[vols?.id_vol]}}\r\n                            </div>\r\n                            <div class=\"Address\">\r\n                                {{address[vols?.id_vol]}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Data\r\n                        </div>\r\n                        <div class=\"col text-right iconCard no-padding\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"addressTitle\">\r\n                                {{vols?.date_begin | date:\"d\"}} de {{vols?.date_begin | date:\"MMMM\"}} - {{vols?.date_end | date:\"d\"}} de {{vols?.date_end | date:\"MMMM\"}}\r\n                            </div>\r\n                            <div class=\"Address\">\r\n                                8 de março às 18:00 até 12 de março às 22:00\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitleMap\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            Mapa\r\n                        </div>\r\n                        <div class=\"col text-right iconCard no-padding\">\r\n                            <i class=\"material-icons edit\">create</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-12\">\r\n                         \r\n                            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"14\" [styles]=\"Terrain\">\r\n                            <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" ></sebm-google-map-marker>\r\n                            </sebm-google-map>\r\n             \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n   <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Convidar Pessoas</div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(3,1)\">Ver convites</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <input type=\"text\" class=\"inputInvite\" placeholder=\"Procurar pessoas ou instituições...\">\r\n\r\n            </div>\r\n        </div>\r\n        </div>\r\n        \r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Candidatos (7)</div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(1,1)\">Ver todos</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let candidate of candidates\" class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"{{candidate?.photo_url}}\">\r\n                                    <span class=\"candidateName\">{{candidate?.name}}</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnCancel\" (click)=\"openRemoveConfirm(5,'Pedro Araújo')\">RECUSAR</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary btnConfirm\">ACEITAR</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Confirmados (12)</div>\r\n                            <div class=\"see-all ml-auto\" (click)=\"openViewAll(2,1)\">Ver todos</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let confirmed of confirmeds\"class=\"listPerson no-border no-margin\">\r\n                            <div class=\"row no-margin\">\r\n                                <div class=\"card-user-image\">\r\n                                    <img src=\"{{confirmed?.photo_url}}\">\r\n                                    <span class=\"candidateName\">{{confirmed?.name}}</span>\r\n                                </div>\r\n                                <div class=\"col text-right no-padding\">\r\n                                    <button type=\"button\" class=\"btn btnRemove\" (click)=\"openRemoveConfirm(4,'Pedro Araújo')\">REMOVER</button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n     <div class=\"row\">\r\n         \r\n        <div class=\"col-12\">\r\n            <div class=\"card primaryCard\">\r\n                <div class=\"card-header cardTitle\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col titleCard no-padding\">\r\n                            <div>Discussão</div>\r\n                            <div class=\"see-all ml-auto\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"comments-section row\">\r\n                    \r\n                    <div class=\"row card-Comments no-padding\">\r\n                        <div class=\"col-12 \">\r\n                            <div class=\"row comments-header\">\r\n                                <div class=\"col card-user--comments-image col-md-auto\">\r\n                                    <img src=\"assets/imgs/avatar.png\">\r\n                                </div>\r\n                                <div class=\"col-8 card-user-nd\">\r\n                                    <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                                    <div class=\"card-date-comments ts12\">10 horas</div>\r\n                                </div>\r\n                                <div class=\"col card-option-comments text-right\">\r\n                                    <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                                    <md-menu #menu=\"mdMenu\">\r\n                                        <button md-menu-item>\r\n                                <md-icon>dialpad</md-icon>\r\n                                <span>Redial</span>\r\n                            </button>\r\n                                        <button md-menu-item disabled>\r\n                                <md-icon>voicemail</md-icon>\r\n                                <span>Check voicemail</span>\r\n                            </button>\r\n                                        <button md-menu-item>\r\n                                <md-icon>notifications_off</md-icon>\r\n                                <span>Disable alerts</span>\r\n                            </button>\r\n                                    </md-menu>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row comments-content\">\r\n                                <div class=\"col-12 ts13\">\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"borderComments\"></div>\r\n                        </div>\r\n                        <div class=\"col-12 \">\r\n                            <div class=\"row comments-header\">\r\n                                <div class=\"col card-user--comments-image col-md-auto\">\r\n                                    <img src=\"assets/imgs/avatar.png\">\r\n                                </div>\r\n                                <div class=\"col-8 card-user-nd\">\r\n                                    <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                                    <div class=\"card-date-comments ts12\">10 horas</div>\r\n                                </div>\r\n                                <div class=\"col card-option-comments text-right\">\r\n                                    <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                                    <md-menu #menu=\"mdMenu\">\r\n                                        <button md-menu-item>\r\n                                <md-icon>dialpad</md-icon>\r\n                                <span>Redial</span>\r\n                            </button>\r\n                                        <button md-menu-item disabled>\r\n                                <md-icon>voicemail</md-icon>\r\n                                <span>Check voicemail</span>\r\n                            </button>\r\n                                        <button md-menu-item>\r\n                                <md-icon>notifications_off</md-icon>\r\n                                <span>Disable alerts</span>\r\n                            </button>\r\n                                    </md-menu>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row comments-content\">\r\n                                <div class=\"col-12 ts13\">\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"borderComments\"></div>\r\n                        </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"ts14 more-Comments\">\r\n                <span class=\"textMoreComments\">Carregar mais comentários</span><span class=\"moreIcon\"> +</span>\r\n            </div>\r\n\r\n            <div class=\"col-12 insert-comment\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1 card-user--comments-image card-user-comments-image-comments\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <md-input-container class=\"width100\">\r\n                            <input mdInput>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"col-1 btnSend text-center\">\r\n                        <md-icon class=\"btnSendIcon btnSendColorGrey\">send</md-icon>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n        \r\n\r\n \r\n    <div class=\"row btnsBack\">\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btnCancel1\" (click)=\"openEnd(1,1)\">APAGAR AÇÃO</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btnEnd\" (click)=\"openEnd(2,1)\">FINALIZAR AÇÃO</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n      <div class=\"card primaryCard\">\r\n        <div class=\"card-header cardTitle\">\r\n          <div class=\"row\">\r\n            <div class=\"col titleCard\">\r\n              Criar uma nova ação de voluntariado\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"card-block\">\r\n        <form class=\"float-label\" spellcheck=\"false\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12 inputProfile no-margin\">\r\n                <div class=\"control\">\r\n                 <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Título da ação de voluntariado\" value=\"Insira aqui o título da ação de voluntariado\" required />\r\n                  <label for=\"textarea\" class=\"titlePlaceholder\">Título da ação de voluntariado</label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <div class=\"control\">\r\n                  <textarea class=\"textAreaProfile\" name=\"textarea\" value=\"913 315 609\" required rows=\"4\" placeholder=\"Descrição\">Descrição das funções do voluntário</textarea>\r\n                  <label for=\"textarea\" class=\"titlePlaceholder\">Descrição</label>\r\n                </div>\r\n              </div>\r\n\r\n            <div class=\"col-6 inputProfile\">\r\n              <select class=\"form-control inputText form-control-lg disabled\">\r\n                <option selected>Desporto</option>\r\n                <option>Solidariedade Social</option>\r\n                <option>Inclusão Social</option>\r\n                <option>Apoio ao estudo</option>\r\n                <option>Apoio aos jovens</option>\r\n                <option>Animais</option>\r\n                <option>Ambiente</option>\r\n                <option>Geográfico</option>\r\n              </select>\r\n              <label class=\"placeholderSelect\">Categoria de Voluntariado</label>\r\n            </div>\r\n              \r\n               <div class=\"col-6 inputProfile\">\r\n              <select class=\"form-control inputText form-control-lg disabled\">\r\n                <option selected>Sim</option>\r\n                <option>Não</option>\r\n              </select>\r\n              <label class=\"placeholderSelect\">Seguro</label>\r\n            </div>\r\n\r\n          <div *ngIf=\"img==0\" class=\"col-12 addEducation\" (click)=\"showImgs()\">\r\n          <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Inserir fotografia (s)</span>\r\n        </div>\r\n\r\n         <div *ngIf=\"img==1\" class=\"col-12 addEducation\" (click)=\"hideImgs()\">\r\n          <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Esconder fotografias (s)</span>\r\n        </div>\r\n             \r\n          \r\n           <div  *ngIf=\"img==1\"class=\"col-6 inputProfile3\">\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\r\n                <small id=\"fileHelp\" class=\"form-text text-muted\">Pode inserir 3 fotografias selecionando na área de seleção. </small>\r\n              </div>\r\n            </div>\r\n\r\n                <div *ngIf=\"img==1\" class=\"col-2 \">\r\n                  <div class=\"imageVol\"></div>\r\n                </div>\r\n                <div  *ngIf=\"img==1\"class=\"col-2 \">\r\n                  <div class=\"imageVol\"></div>\r\n                </div>\r\n                <div *ngIf=\"img==1\" class=\"col-2 \">\r\n                  <div class=\"imageVol\"></div>\r\n                </div>\r\n\r\n     \r\n\r\n                 <div class=\"col-12 inputProfile\">\r\n                <div class=\"control\">\r\n                 <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Localização\" value=\"Insira a localização do voluntariado\" required />\r\n                  <label for=\"textarea\" class=\"titlePlaceholder\">Localização</label>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-12 inputProfile\">\r\n                <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" [styles]=\"Terrain\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" ></sebm-google-map-marker>\r\n                </sebm-google-map>\r\n             \r\n               </div>\r\n\r\n\r\n               <div class=\"col-6 inputProfile2\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\"\r\n                           name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                  <label class=\"placeholderSelect\">Data de Início</label>\r\n                </div>\r\n            </div>\r\n\r\n        <div class=\"col-6 inputProfile2\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input class=\"form-control date_picker\"\r\n                           name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" placeholder=\"aaaa-mm-dd\">\r\n                    <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n                      <i class=\"data_range_icon material-icons\">date_range</i>\r\n                    </div>\r\n                  </div>\r\n                  <label class=\"placeholderSelect\">Data de Fim</label>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        <div *ngIf=\"schedule==0\" class=\"col-12 addEducation\" (click)=\"showSchedule()\">\r\n          <span class=\"iconAdd\">+ </span><span class=\"titleAdd\">Inserir mais detalhes de horário</span>\r\n        </div>\r\n        <div *ngIf=\"schedule==1\" class=\"col-12 addEducation\" (click)=\"hideSchedule()\">\r\n          <span class=\"iconAdd\">- </span><span class=\"titleAdd\">Esconder detalhes de horário</span>\r\n        </div>\r\n\r\n          <div *ngIf=\"schedule==1\" class=\"col-4 inputProfile\">\r\n                  <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Hora de entrada\" value=\"09:00\" required />\r\n                    <label for=\"textarea\" class=\"titlePlaceholder\">Hora de entrada</label>\r\n                  </div>\r\n                </div>\r\n          <div *ngIf=\"schedule==1\" class=\"col-4 inputProfile\">\r\n                  <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Hora de saída\" value=\"17:00\" required />\r\n                    <label for=\"textarea\" class=\"titlePlaceholder\">Hora de saída</label>\r\n                  </div>\r\n                </div>\r\n          <div *ngIf=\"schedule==1\" class=\"col-4 inputProfile\">\r\n                  <div class=\"control\">\r\n                  <input type=\"text\" class=\"\" name=\"title\" placeholder=\"Duração diária em horas\" value=\"5\" required />\r\n                    <label for=\"textarea\" class=\"titlePlaceholder\">Duração diária em horas</label>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n         \r\n\r\n\r\n\r\n               \r\n\r\n\r\n              <div class=\"col-6\">\r\n                  <a class=\"btn btn-outline-primary btnDescart\" routerLink=\"/\">CANCELAR</a>\r\n              </div>\r\n              <div class=\"col-6 \">\r\n                <a class=\"btn btn-outline-primary btnSave\" routerLink=\"/\">GUARDAR</a>\r\n              </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid headerBlue\"></div>\r\n<div class=\"container-fluid sub-header-background\">\r\n    <div class=\"container sub-header-profile\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 col-sm-12 col-12 profile-user-picture\">\r\n                <img src={{user?.photo}} alt=\"profile user picture\">\r\n                <div class=\"col user-rate\">\r\n                    <md-icon class=\"rate1\">star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                    <md-icon>star_rate</md-icon>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 col-sm-12 col-12 profile-user-name-location\">\r\n                <div class=\"user-name\">\r\n                    {{user?.username}}\r\n                </div>\r\n                <div class=\"user-location\">\r\n                    Aveiro, Sever do Vouga\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 col-6 menuSubHeader\">\r\n                <ul class=\"menuSubHeaderUl\">\r\n                    <li><a routerLink=\"/profile/{{idProfile}}/activity\" [routerLinkActive]=\"['menuSubHeaderActive']\">Atividade</a></li>\r\n                    <li *ngIf=\"idProfile==idLogin\"><a routerLink=\"/profile/{{idProfile}}/actions\" [routerLinkActive]=\"['menuSubHeaderActive']\">Ações</a></li>\r\n                    <li><a routerLink=\"/profile/{{idProfile}}/about\" [routerLinkActive]=\"['menuSubHeaderActive']\">Sobre</a></li>\r\n                    <li><a routerLink=\"/profile/{{idProfile}}/following\" [routerLinkActive]=\"['menuSubHeaderActive']\">A seguir</a></li>\r\n                    <li *ngIf=\"idProfile==idLogin\"><a routerLink=\"/profile/{{idProfile}}/settings\" [routerLinkActive]=\"['menuSubHeaderActive']\">Definições</a></li>\r\n                </ul>\r\n                <a class=\"btn-menu\"  md-raised-button routerLink=\".\" [mdMenuTriggerFor]=\"menuSubHeader\"><md-icon class=\"btn-new-action-icon\">menu</md-icon></a>\r\n                <md-menu #menuSubHeader=\"mdMenu\">\r\n                    <button md-menu-item>Actividade</button>\r\n                    <button md-menu-item>Minhas ações</button>\r\n                    <button md-menu-item>Sobre</button>\r\n                    <button md-menu-item>A seguir</button>\r\n                    <button md-menu-item>Definições</button>\r\n                </md-menu>\r\n            </div>\r\n            <div *ngIf=\"idProfile==idLogin\"  class=\"col-sm-2 col-6 col-new-action text-right\">\r\n                <a routerLink=\"/profile/{{idProfile}}/new\" class=\"btn-new-action\" md-raised-button routerLink=\".\"><span class=\"btn-new-action-text\" >NOVA AÇÃO</span><span><md-icon class=\"btn-new-action-icon\">add</md-icon></span></a>\r\n            </div>\r\n            <div *ngIf=\"idProfile!=idLogin\"  class=\"col-sm-2 col-6 col-new-action text-right\">\r\n                <a class=\"btn-follow\" md-raised-button routerLink=\".\" (click)=\"follow(idProfile)\"><span class=\"btn-new-action-text\" >SEGUIR</span><span><md-icon class=\"btn-new-action-icon\">add</md-icon></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Externo -->\r\n\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map