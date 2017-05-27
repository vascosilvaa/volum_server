webpackJsonp([4,10],{

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_vol_details_modal_vol_details_modal_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_routing__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_carousel__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feed_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search_component__ = __webpack_require__(622);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FeedModule = (function () {
    function FeedModule() {
    }
    return FeedModule;
}());
FeedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__feed_routing__["a" /* FeedRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_9__feed_component__["a" /* FeedComponent */], __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_0__shared_vol_details_modal_vol_details_modal_component__["a" /* VolDetailsModalComponent */]],
    })
], FeedModule);

//# sourceMappingURL=C:/Users/PC119/desktop/volum/volum_server/public/src/feed.module.js.map

/***/ }),

/***/ 591:
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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(591);
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__(598);
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
// todo: add animation



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config) {
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this._slides = new __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* LinkedList */]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'carousel',
                    template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1\">\n         <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n      <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\n        <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\n        <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__carousel_config__["a" /* CarouselConfig */], },
    ]; };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'noPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeSlideChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeSlide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CarouselComponent;
}());
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
    }
    CarouselConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());
//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__(597);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.item',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());
//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__feed_component__["a" /* FeedComponent */],
    }
];
var FeedRoutingModule = (function () {
    function FeedRoutingModule() {
    }
    return FeedRoutingModule;
}());
FeedRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], FeedRoutingModule);

//# sourceMappingURL=C:/Users/PC119/desktop/volum/volum_server/public/src/feed.routing.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(64);
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
    function SearchComponent(_service, router) {
        var _this = this;
        this._service = _service;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.formatter = function (x) { return x.name || x.registration.name; };
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._service.search(term)
                    .do(function () { _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.navigate = function (id, type) {
        if (type == 1) {
            this.router.navigate(['profile/' + id + '/about']);
        }
        else if (type == 2) {
            this.router.navigate(['profile/' + id + '/about']);
        }
        else if (type == 3) {
            //Abrir VOL DETAILS
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'search',
        template: __webpack_require__(661),
        styles: [__webpack_require__(633)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/PC119/desktop/volum/volum_server/public/src/search.component.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (term) {
        if (term === '') {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
        }
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        params.set('search', term);
        var url = __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__["a" /* GlobalConstants */].API_ENDPOINT + "/search";
        var array = [];
        return this.http
            .get(url, { search: params })
            .map(function (response) { return array = response.json().message; });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=C:/Users/PC119/desktop/volum/volum_server/public/src/search.service.js.map

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\nsearch .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff !important;\n  width: 100px;\n  cursor: pointer; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff !important; }\n\n.btnCancel {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  min-width: 100px;\n  background: #fff;\n  cursor: pointer; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7 !important; }\n\n.btnRemove {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff;\n  cursor: pointer; }\n\n.btnRemove:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.btnGreenOut {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #FFFFFF;\n  color: #0CB754;\n  cursor: pointer; }\n\n.btnGreen {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #0CB754;\n  color: #FFFFFF;\n  cursor: pointer; }\n\n.btnGreen:hover {\n  border-radius: 3px !important;\n  font-size: 12px;\n  border: 1px solid #0CB754;\n  background-color: #fff;\n  color: #0CB754; }\n\n.fade.in {\n  opacity: 1; }\n\n.clickable {\n  cursor: pointer; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.borda {\n  border: 1px solid #E82C0C; }\n\n.textError {\n  margin-bottom: 10px;\n  color: #E82C0C !important;\n  font-size: 14px; }\n\n.thumbnail {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail4 {\n  border-radius: 0 !important;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text-orange {\n  color: #FF8A65; }\n\n.modal-content {\n  border-radius: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.header-home-search {\n  background-color: #FFFFFF;\n  min-height: 80px;\n  border-radius: 4px; }\n\n.col-search {\n  float: left;\n  padding-left: 15px;\n  height: 80px;\n  line-height: 80px;\n  width: 900px; }\n\n.col-search-btn {\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 80px;\n  line-height: 80px;\n  text-align: right; }\n\n.col-search-border {\n  border-right: 1px solid #ECECEC; }\n\n.namePerson {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 5px; }\n\n.descPerson {\n  font-size: 13px;\n  margin-top: 3px; }\n\n.content-search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0px 10px 0px 10px; }\n\n.img-search img {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.desc-search {\n  margin-left: 10px;\n  margin-top: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__(598);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());
//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__(597);
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__(651);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__(619);
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__(598);
/* unused harmony reexport CarouselConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OnChange */
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__(653);
/* unused harmony reexport OnChange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linked_list_class__ = __webpack_require__(655);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__linked_list_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trigger_class__ = __webpack_require__(656);
/* unused harmony reexport Trigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_class__ = __webpack_require__(657);
/* unused harmony reexport Utils */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedList; });
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
//# sourceMappingURL=linked-list.class.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Trigger */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(591);
/* unused harmony export Utils */

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n\r\n    <!-- SE FOR INSTITUICAO -->\r\n    <div class=\"\">\r\n        <div class=\"row\">\r\n            <div class=\"img-search\" (click)=\"navigate(model.id, model.type)\">\r\n                <img *ngIf=\"!r.photo_url\" src=\"assets/imgs/volunteer.png\">\r\n                <img *ngIf=\"r.photo_url\" [src]=\"r.photo_url\">\r\n            </div>\r\n            <div class=\"desc-search\">\r\n                <div class=\"namePerson\">\r\n                    {{ r.name}}\r\n                </div>\r\n                <div class=\"descPerson\">\r\n                    Solidariedade Social\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"container no-padding\">\r\n    <div class=\"col-12 header-home-search menuFull\">\r\n        <div class=\"col-search\">\r\n\r\n            <md-input-container class=\"col-12\">\r\n                <input mdInput [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (keyup.enter)=\"navigate(model.id, model.type)\"\r\n                    placeholder=\"Pesquisa pessoas, instituições e ações de voluntariado\">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class=\"col-search-btn btnSearch\">\r\n            <button md-raised-button class=\"btnConfirm btn-search\" routerLink=\"/search\">PROCURAR</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map