webpackJsonp([0,8],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_useful_swiper__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_routing__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_card_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_carousel__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__(509);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__feed_routing__["a" /* FeedRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__feed_component__["a" /* FeedComponent */], __WEBPACK_IMPORTED_MODULE_3__shared_card_card_component__["a" /* CardComponent */], __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */]]
    })
], FeedModule);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/feed.module.js.map

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

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__(491);
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

/***/ 491:
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

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_service__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = (function () {
    function FeedComponent(http, feedService) {
        this.http = http;
        this.feedService = feedService;
        this.ready = false;
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            slidesPerView: 2,
        };
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.teste);
        this.feedService.getPrivates()
            .then(function (res) {
            _this.privateVols = res.vols;
            console.log(res.vols);
            _this.ready = true;
        })
            .catch(function (err) { return console.log(err); });
        this.feedService.getInstVol().then(function (res) {
            _this.instVols = res.vols;
            console.log(res);
        }).catch(function (err) {
        });
    };
    return FeedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('teste'),
    __metadata("design:type", Object)
], FeedComponent.prototype, "teste", void 0);
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'feed',
        template: __webpack_require__(543),
        styles: [__webpack_require__(519)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__feed_service__["a" /* FeedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__feed_service__["a" /* FeedService */]) === "function" && _b || Object])
], FeedComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/feed.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__(490);
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

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var debounceTime_1 = __webpack_require__(561);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
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
    },
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

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/feed.routing.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
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
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/feed.service.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(295);
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
    function SearchComponent(_service) {
        var _this = this;
        this._service = _service;
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
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'search',
        template: __webpack_require__(544),
        styles: [__webpack_require__(520)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__search_service__["a" /* SearchService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/search.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_global_constants__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(301);
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
//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/search.service.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "userCreator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "dateCreation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "desc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "avatar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "username", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "verified", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vol-card',
        template: __webpack_require__(558),
        styles: [__webpack_require__(533)]
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=C:/Users/Pedro/desktop/volum/public/src/card.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var SwiperComponent = (function () {
    function SwiperComponent(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.slideCount = 0;
        this.initialized = false;
        this.shouldInitialize = true;
    }
    Object.defineProperty(SwiperComponent.prototype, "initialize", {
        set: function (value) {
            this.shouldInitialize = this.initialized ? false : value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    SwiperComponent.prototype.ngAfterViewInit = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
    };
    SwiperComponent.prototype.setup = function () {
        if (!this.Swiper) {
            this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
            this.shouldInitialize = false;
        }
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper.update();
        }
    };
    return SwiperComponent;
}());
SwiperComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'swiper',
                template: "<div [ngClass]=\"{'swiper-container': !config?.containerModifierClass}\">\n                    <ng-content></ng-content>\n                </div>",
                styles: [':host {display: block;}', ':host > div {width: 100%;height: 100%;}']
            },] },
];
/** @nocollapse */
SwiperComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.NgZone, },
]; };
SwiperComponent.propDecorators = {
    'config': [{ type: core_1.Input },],
    'initialize': [{ type: core_1.Input, args: ['initialize',] },],
};
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var swiper_component_1 = __webpack_require__(517);
var SwiperModule = (function () {
    function SwiperModule() {
    }
    return SwiperModule;
}());
SwiperModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                exports: [
                    swiper_component_1.SwiperComponent
                ],
                declarations: [
                    swiper_component_1.SwiperComponent
                ],
                providers: []
            },] },
];
/** @nocollapse */
SwiperModule.ctorParameters = function () { return []; };
exports.SwiperModule = SwiperModule;
//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n@media screen and (max-width: 992px) {\n  #main-navbar {\n    clear: both; } }\n\n@media (min-width: 320px) {\n  .btnSearch {\n    display: none; }\n  .city3 {\n    display: none; }\n  .city4 {\n    display: none; }\n  .city5 {\n    display: none; }\n  .city6 {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .btnSearch {\n    display: none; }\n  .city3 {\n    display: block; }\n  .city4 {\n    display: none; }\n  .city5 {\n    display: none; }\n  .city6 {\n    display: none; } }\n\n@media (min-width: 600px) {\n  .btnSearch {\n    display: none; }\n  .city4 {\n    display: block; }\n  .city5 {\n    display: none; }\n  .city6 {\n    display: none; } }\n\n@media (min-width: 801px) {\n  .btnSearch {\n    display: block; }\n  .city4 {\n    display: block; }\n  .city5 {\n    display: block; }\n  .city6 {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  .btnSearch {\n    display: block; }\n  .city4 {\n    display: block; }\n  .city5 {\n    display: block; }\n  .city6 {\n    display: block; } }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.headerFeed {\n  margin-top: -80px; }\n\n.carousel-indicators li {\n  display: none !important; }\n\n.lista {\n  float: right; }\n\n.header {\n  background: #0F76F7;\n  min-height: 200px;\n  padding-top: 20px; }\n\n.titleFeed {\n  font-weight: 600;\n  font-size: 18px;\n  margin-top: 50px; }\n\n.search-areas {\n  width: 100%; }\n\n.search-voluntario {\n  width: 100%;\n  margin-top: 15px; }\n\n.btn-search {\n  background-color: #0F76F7;\n  color: #FFFFFF;\n  font-size: 18px;\n  width: 130px;\n  height: 45px; }\n\n.v-header-title {\n  font-weight: 600;\n  color: #FFFFFF;\n  font-size: 58px; }\n\n.v-header-subtitle {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 100;\n  margin-top: -5px; }\n\n.header-home-search {\n  margin-top: 30px; }\n\n.header-title-search {\n  color: #A28F9F;\n  font-size: 15px;\n  margin-top: 3px; }\n\n.cityCard {\n  background-color: #0F76F7;\n  margin-top: 20px;\n  padding: 10px; }\n\n.askedQuestions {\n  border-top: 3px;\n  border-style: solid;\n  border-bottom: 0;\n  border-left: 0;\n  border-right: 0;\n  border-color: #0F76F7;\n  margin-top: 10px; }\n\n.titleAskedQuestions {\n  font-weight: 600;\n  font-size: 18px;\n  margin-top: 35px; }\n\n.textAskedQuestions {\n  margin-top: 5px; }\n\n.cityAveiro {\n  background: url(" + __webpack_require__(563) + ");\n  background-size: cover;\n  height: 200px; }\n\n.cityPorto {\n  background: url(" + __webpack_require__(568) + ");\n  background-size: cover;\n  height: 200px; }\n\n.city {\n  text-align: center; }\n\n.cityLisboa {\n  background: url(" + __webpack_require__(567) + ");\n  background-size: cover;\n  height: 200px; }\n\n.cityCoimbra {\n  background: url(" + __webpack_require__(565) + ");\n  background-size: cover;\n  height: 200px; }\n\n.cityBraga {\n  background: url(" + __webpack_require__(564) + ");\n  background-size: cover;\n  height: 200px; }\n\n.cityGuimaraes {\n  background: url(" + __webpack_require__(566) + ");\n  background-size: cover;\n  height: 200px; }\n\n.cityText {\n  color: #fff;\n  font-weight: 600;\n  font-size: 1.4em;\n  padding-top: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n.header-home-search {\n  background-color: #FFFFFF;\n  min-height: 80px;\n  border-radius: 4px; }\n\n.col-search {\n  float: left;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 80px;\n  line-height: 80px; }\n\n.col-search-btn {\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 80px;\n  line-height: 80px;\n  text-align: right; }\n\n.col-search-border {\n  border-right: 1px solid #ECECEC; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);

// module
exports.push([module.i, "search .dropdown-menu {\n  width: 100% !important; }\n\n.carousel-control-next-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_right.png\");\n  width: 20px;\n  height: 20px; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"https://www.lithosdesign.com/images/arrow_b_left.png\");\n  height: 20px;\n  width: 20px;\n  margin-left: -20px; }\n\n.carousel-control-prev {\n  width: 5%;\n  margin-left: -40px; }\n\n.carousel-control-next {\n  width: 5%;\n  margin-right: -50px; }\n\n.ts10 {\n  font-size: 10px; }\n\n.ts12 {\n  font-size: 12px; }\n\n.ts13 {\n  font-size: 13px; }\n\n.ts14 {\n  font-size: 14px; }\n\n.ts16 {\n  font-size: 16px; }\n\n.ts18 {\n  font-size: 18px; }\n\n.no-margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.width100 {\n  width: 100%; }\n\nbutton:focus {\n  outline: none !important; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif !important;\n  background-color: #F7F8FA;\n  color: #4A4A4A !important; }\n\n.btnConfirm {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #0F76F7;\n  color: #fff;\n  width: 100px; }\n\n.btnConfirm a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #919191;\n  width: 100px; }\n\n.btnCancel a {\n  text-decoration: none;\n  color: #fff; }\n\n.btnCancel:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #919191;\n  color: #fff;\n  background: #919191; }\n\n.btnConfirm:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #0F76F7;\n  background-color: #fff;\n  color: #0F76F7; }\n\n.btnRemove {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #ff484a;\n  color: #fff; }\n\n.btnRemove:hover {\n  border-radius: 0 !important;\n  font-size: 12px;\n  border: 1px solid #ff484a;\n  background-color: #fff;\n  color: #ff484a; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-backdrop.in {\n  opacity: 0.5; }\n\n@media (min-width: 320px) {\n  .likeImgs {\n    display: none; }\n  .likesText {\n    display: none; } }\n\n@media (min-width: 480px) {\n  .likeImgs {\n    display: block; }\n  .likesText {\n    display: block; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width: 1281px) {\n  /* hi-res laptops and desktops */ }\n\n.card-volum {\n  background-color: #FFFFFF;\n  padding-top: 15px;\n  border-radius: 4px;\n  margin-top: 30px;\n  min-width: 50% !important; }\n\n.card-user-image img {\n  width: 45px;\n  height: 45px;\n  border-radius: 45px; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.card-date {\n  color: #919191; }\n\n.verified {\n  background-color: #fff;\n  color: #3C765A;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 5px; }\n\n.btn-secondary {\n  border: 0 !important; }\n\n.card-option {\n  padding-top: 10px; }\n\n.card-btn-option {\n  color: #E6E5E5;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.card-btn-option:hover {\n  color: #919191;\n  cursor: pointer; }\n\n.card-volum-content {\n  margin-top: 20px; }\n\n.card-volum-title {\n  font-weight: 600;\n  color: #4A4A4A; }\n\n.card-volum-description {\n  margin-top: 5px;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-justify: inter-word;\n  min-width: 50%; }\n\n.card-volum-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  padding: 15px; }\n\n.btnLike {\n  color: #F51111;\n  padding-top: 7px; }\n\n.likesNumber {\n  font-weight: 600;\n  padding-top: 10px;\n  padding-left: 5px;\n  margin-right: 15px; }\n\n.likeImgs {\n  margin-top: 2.5px; }\n\n.likeImgs img {\n  border: 1px solid #FFF;\n  width: 30px;\n  height: 30px;\n  margin-left: -10px;\n  border-radius: 30px; }\n\n.likesText {\n  padding-top: 1px;\n  max-width: 110px;\n  margin-left: 5px;\n  color: #919191; }\n\n.likesTestMe {\n  color: #0F76F7;\n  font-weight: 600; }\n\n.likesTestSecond {\n  color: #919191;\n  font-weight: 600; }\n\n.cardComments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  margin-left: 10px; }\n\n.cardComments md-icon {\n  padding-top: 7.5px;\n  font-size: 20px; }\n\n.textComments {\n  padding-top: 7.5px; }\n\n.commentsNumber {\n  font-weight: 600; }\n\n.btnView button {\n  background-color: #0F76F7;\n  color: #FFF;\n  box-shadow: 0 3px 1px -2px transparent, 0 2px 2px 0 transparent, 0 1px 5px 0 transparent;\n  min-width: 68px; }\n\n.card-Comments {\n  border-top: 1px solid #E6E5E5; }\n\n.comments-header {\n  background-color: #F7F8FA;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.card-user--comments-image {\n  padding-right: 10px; }\n\n.card-user--comments-image img {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin-top: 1.5px; }\n\n.card-user-nd {\n  padding-left: 0; }\n\n.card-user-name-comments {\n  color: #4A4A4A;\n  font-weight: 600; }\n\n.card-date-comments {\n  margin-top: -3px;\n  color: #919191; }\n\n.card-option-comments {\n  padding-top: 3px; }\n\n.comments-content {\n  background-color: #F7F8FA;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  border-left: 1px solid #E6E5E5;\n  border-right: 1px solid #E6E5E5; }\n\n.borderComments {\n  min-width: 100%;\n  height: 1px;\n  background-color: #E6E5E5;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.more-Comments {\n  width: 100%;\n  text-align: center;\n  height: 42px;\n  font-weight: 600;\n  border-bottom: 1px solid #E6E5E5;\n  padding-top: 2px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: #919191; }\n\n.more-Comments:hover {\n  cursor: pointer;\n  color: #FF8A65; }\n\n.textMoreComments {\n  vertical-align: middle; }\n\n.moreIcon {\n  font-size: 24px;\n  font-weight: 700;\n  vertical-align: middle; }\n\n.insert-comment {\n  padding-top: 10px; }\n\n.btnSend {\n  padding-left: 0; }\n\n.btnSendIcon {\n  padding-top: 10px; }\n\n.btnSendIcon:hover {\n  cursor: pointer; }\n\n.btnSendColorBlue {\n  color: #0F76F7; }\n\n.btnSendColorGrey {\n  color: #E6E5E5; }\n\n.card-user-comments-image-comments {\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__(491);
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

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__(490);
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__(505);
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__(491);
/* unused harmony reexport CarouselConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 538:
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

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__(538);
/* unused harmony reexport OnChange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linked_list_class__ = __webpack_require__(540);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__linked_list_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trigger_class__ = __webpack_require__(541);
/* unused harmony reexport Trigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_class__ = __webpack_require__(542);
/* unused harmony reexport Utils */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 540:
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

/***/ 541:
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

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(484);
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

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"header\">\r\n        <div class=\"container\">\r\n            <div class=\"container headerFeed\">\r\n                <div class=\"v-header-title\">From compassion to action.</div>\r\n                <div class=\"v-header-subtitle\">Don’t just stand there. Volunteer.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"container\" style=\"padding: 0; margin-top: 25px\">\r\n                <!-- TODO: LIMPAR ESTE CSS -->\r\n                <search></search>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"container\">\r\n        <!-- PUBLICO -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"titleFeed\">Instituições</div>\r\n            </div>\r\n        </div>\r\n\r\n        <swiper [config]=\"config\">\r\n            <div class=\"swiper-wrapper\">\r\n                <vol-card *ngFor=\"let vol of instVols\" [verified]=\"true\" class=\"swiper-slide\" [type]=\"private\" [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.login\" [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                </vol-card>\r\n            </div>\r\n            <!-- Add Pagination -->\r\n            <div class=\"swiper-pagination\"></div>\r\n            <!-- Add Arrows -->\r\n            <div class=\"swiper-button-next\"></div>\r\n            <div class=\"swiper-button-prev\"></div>\r\n        </swiper>\r\n\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n\r\n        <!-- PUBLICO -->\r\n        <!-- PRIVADO -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"titleFeed\">Privado</div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <swiper [config]=\"config\">\r\n            <div class=\"swiper-wrapper\">\r\n                <vol-card *ngFor=\"let vol of privateVols\" [verified]=\"true\" [type]=\"private\" class=\"swiper-slide\" [avatar]=\"vol.user.photo_url\" [username]=\"vol.user.login\" [userCreator]=\"vol.user.id_user\" [dateCreation]=\"vol.vol.date_begin\" [title]=\"vol.name\" [desc]=\"vol.vol.desc\">\r\n                </vol-card>\r\n            </div>\r\n            <!-- Add Pagination -->\r\n            <div class=\"swiper-pagination\"></div>\r\n            <!-- Add Arrows -->\r\n            <div class=\"swiper-button-next\"></div>\r\n            <div class=\"swiper-button-prev\"></div>\r\n        </swiper>\r\n\r\n\r\n\r\n\r\n        <!-- PRIVADO -->\r\n        <!-- CIDADES -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"titleFeed\">Cidades</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6 col-lg-2 col-sm-4 col-md-3 city city1\">\r\n                <div class=\"cityCard cityAveiro\">\r\n                    <div class=\"cityText\">Aveiro</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 col-lg-2 col-sm-4 col-md-3 city city2\">\r\n                <div class=\"cityCard cityPorto\">\r\n                    <div class=\"cityText\">Porto</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 col-lg-2 col-sm-4 col-md-3 city city3\">\r\n                <div class=\"cityCard cityLisboa\">\r\n                    <div class=\"cityText\">Lisboa</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 col-lg-2 col-sm-3 col-md-3 city city4\">\r\n                <div class=\"cityCard cityCoimbra\">\r\n                    <div class=\"cityText\">Coimbra</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 col-lg-2 col-md-2 city city5\">\r\n                <div class=\"cityCard cityBraga\">\r\n                    <div class=\"cityText\">Braga</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 col-lg-2 col-md-2 city city6\">\r\n                <div class=\"cityCard cityGuimaraes\">\r\n                    <div class=\"cityText\">Guimarães</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- CIDADES -->\r\n        <!-- QUESTIONS -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"titleFeed\">Perguntas Frequentes</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"col-lg-12 askedQuestions\">\r\n                </div>\r\n                <div class=\"titleAskedQuestions\">\r\n                    O que é a Volum?\r\n                </div>\r\n                <div class=\"textAskedQuestions\">\r\n                    A Volum foi lançada pela ENTRAJUDA em 2006. É um projecto inovador, de âmbito nacional, sem fronteiras, transversal a toda a sociedade e economia que fomenta o exercício da Cidadania e da Responsabilidade Social. Trata-se de uma ferramenta de gestão e\r\n                    desenvolvimento on line em tempo real, que aproveita as qualificações dos voluntariado e permite a capacitação das organizações. </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"col-lg-12 askedQuestions\">\r\n\r\n                </div>\r\n                <div class=\"titleAskedQuestions\">\r\n                    Como funciona a Volum?\r\n                </div>\r\n                <div class=\"textAskedQuestions\">\r\n\r\n\r\n                    Os Voluntários podem escolher onde pretendem realizar a sua actividade, de acordo com as suas aptidões, disponibilidade de tempo, áreas de interesse, preferência de localização. Podem seleccionar uma causa ou necessidade social, procurar uma instituição\r\n                    ou organização perto do local da sua residência, participar numa acção pontual. </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"col-lg-12 askedQuestions\">\r\n                </div>\r\n                <div class=\"titleAskedQuestions\">\r\n                    A Volum é só para atuais voluntários?\r\n                </div>\r\n                <div class=\"textAskedQuestions\">\r\n                    Não, porque o voluntariado não se limita à área da solidariedade Social. São contempladas outras áreas onde o voluntariado tem grande expressão e pode ser uma mais-valia: Ambiente/Animais, Cultura, Cidadania e Política, Desporto, Direitos Humanos, entre\r\n                    outras. Qualquer pessoa com vontade de ajudar o próximo pode fazer parte desta comunidade </div>\r\n            </div>\r\n        </div>\r\n        <!-- QUESTIONS -->\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- LOGADO -->"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<template #rt let-r=\"result\" let-t=\"term\">\n <span *ngIf=\"r.name\"> {{ r.name}}</span>\n <span *ngIf=\"r.login\"> <img class=\"img-responsive\" style=\"border-radius:50px\" width=\"50\" [src]=\"r.photo_url\"> {{ r.login}} </span>\n</template>\n<div class=\"container\">\n    <div class=\"col-12 header-home-search menuFull\">\n        <div class=\"col-search col-8\">\n\n            <md-input-container class=\"col-12\">\n                <input mdInput [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" placeholder=\"Pesquisa pessoas, instituições e ações de voluntariado\">\n            </md-input-container>\n        </div>\n\n        <div class=\"col-search-btn col-4 btnSearch\">\n            <button md-raised-button class=\"btn-search\">Procurar</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-volum\">\r\n    <!-- HEADER CARD -->\r\n    <div class=\"row no-margin\">\r\n        <div class=\"col card-user-image col-md-auto\">\r\n            <img src=\"{{avatar}}\">\r\n        </div>\r\n        <div class=\"col-6 col-lg-8 card-user-nd\">\r\n            <div *ngIf=\"verified==1\" class=\"card-user-name ts16\">{{username}} <button type=\"button\" class=\"btn btn-secondary verified\" placement=\"right\" ngbTooltip=\"Instituição verificada\"><i class=\"material-icons md-18\">verified_user</i></button></div>\r\n            <div *ngIf=\"verified==0\" class=\"card-user-name ts16\">{{username}} </div>\r\n            <div class=\"card-date ts14\">{{dateCreation | date}}</div>\r\n        </div>\r\n        <div class=\"col card-option text-right\">\r\n            <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n            <md-menu #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                <md-icon>dialpad</md-icon>\r\n                <span>Redial</span>\r\n              </button>\r\n                <button md-menu-item disabled>\r\n                <md-icon>voicemail</md-icon>\r\n                <span>Check voicemail</span>\r\n              </button>\r\n                <button md-menu-item>\r\n                <md-icon>notifications_off</md-icon>\r\n                <span>Disable alerts</span>\r\n              </button>\r\n            </md-menu>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER CARD -->\r\n\r\n    <!-- CONTENT CARD -->\r\n    <div class=\"row no-margin card-volum-content\">\r\n        <div class=\"col-12 ts18 card-volum-title\">\r\n            {{title}}\r\n        </div>\r\n        <div class=\"col-12 ts14 card-volum-description\">\r\n            {{desc}}\r\n        </div>\r\n    </div>\r\n    <!-- /CONTENT CARD -->\r\n\r\n    <!-- FOOTER CARD -->\r\n    <div class=\"card-volum-footer\">\r\n        <div class=\"cardLikes\">\r\n            <md-icon class=\"btnLike\">favorite</md-icon>\r\n        </div>\r\n        <div class=\"likesNumber ts12\">\r\n            300\r\n        </div>\r\n        <div *ngIf=\"type=='private'\" class=\"likeImgs\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar3.png\">\r\n            <img src=\"assets/imgs/avatar04.png\">\r\n            <img src=\"assets/imgs/avatar2.png\">\r\n            <img src=\"assets/imgs/avatar.png\">\r\n        </div>\r\n        <div *ngIf=\"type=='private'\" class=\"likesText ts12\">\r\n            <span class=\"likesTestMe\">Tu,</span> <span class=\"likesTestSecond\">Araújo</span> e mais 298 gostaram disto\r\n        </div>\r\n        <div *ngIf=\"type=='private'\" class=\"cardComments ts12\">\r\n            <div>\r\n                <md-icon class=\"btnComments\">textsms</md-icon>\r\n            </div>\r\n            <div class=\"textComments\"><span class=\"commentsNumber\">16</span> comentários</div>\r\n        </div>\r\n        <div class=\"btnView\">\r\n            <button md-raised-button>VER</button>\r\n        </div>\r\n    </div>\r\n    <!-- /FOOTER CARD -->\r\n\r\n\r\n    <div *ngIf=\"type=='private'\">\r\n\r\n\r\n        <div class=\"row no-margin card-Comments\">\r\n            <div class=\"col-12\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <div class=\"row comments-header\">\r\n                    <div class=\"col card-user--comments-image col-md-auto\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col-8 card-user-nd\">\r\n                        <div class=\"card-user-name-comments ts13\">Pedro Araújo</div>\r\n                        <div class=\"card-date-comments ts12\">10 horas</div>\r\n                    </div>\r\n                    <div class=\"col card-option-comments text-right\">\r\n                        <md-icon class=\"card-btn-option\" [mdMenuTriggerFor]=\"menu\">more_vert</md-icon>\r\n                        <md-menu #menu=\"mdMenu\">\r\n                            <button md-menu-item>\r\n                    <md-icon>dialpad</md-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                            <button md-menu-item disabled>\r\n                    <md-icon>voicemail</md-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                            <button md-menu-item>\r\n                    <md-icon>notifications_off</md-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                        </md-menu>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row comments-content\">\r\n                    <div class=\"col-12 ts13\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam id tellus convallis finibus. In hac habitasse platea dictumst. Sed m alesuada ante eget lorem In hac habitasse platea dictumst. Sed male suada ante eget\r\n                    </div>\r\n                </div>\r\n                <div class=\"borderComments\"></div>\r\n            </div>\r\n\r\n            <div class=\"ts14 more-Comments\">\r\n                <span class=\"textMoreComments\">Carregar mais comentários</span><span class=\"moreIcon\"> +</span>\r\n            </div>\r\n\r\n            <div class=\"col-12 insert-comment\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-1 card-user--comments-image card-user-comments-image-comments\">\r\n                        <img src=\"assets/imgs/avatar.png\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <md-input-container class=\"width100\">\r\n                            <input mdInput>\r\n                        </md-input-container>\r\n                    </div>\r\n                    <div class=\"col-1 btnSend text-center\">\r\n                        <md-icon class=\"btnSendIcon btnSendColorGrey\">send</md-icon>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var distinctUntilChanged_1 = __webpack_require__(562);
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(8);
var async_1 = __webpack_require__(302);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(8);
var tryCatch_1 = __webpack_require__(141);
var errorObject_1 = __webpack_require__(70);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aveiro2.83fb98754791fd9aa413.jpg";

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "braga2.653bc1bbc7a693035d06.jpg";

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "coimbra2.b265288c5487e10b0702.jpg";

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "guimaraes2.7b75d90422ccf90eed71.jpg";

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lisboa2.afd17cdf6998c2f82578.jpg";

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "porto2.29baf9070e53958060b2.jpg";

/***/ })

});
//# sourceMappingURL=0.chunk.js.map