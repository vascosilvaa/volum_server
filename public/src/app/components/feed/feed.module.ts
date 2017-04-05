import { SwiperModule } from 'angular2-useful-swiper';
import { FeedRoutingModule } from './feed.routing';
import { RouterModule } from '@angular/router';
import { CardComponent } from './../../shared/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { MaterialModule } from '@angular/material';
import { FeedComponent } from './feed.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
    imports: [
        RouterModule,
        FeedRoutingModule,
        MaterialModule,
        CarouselModule.forRoot(),
        NgbModule.forRoot(),
        CommonModule,
        FormsModule,
        SwiperModule,    
        ReactiveFormsModule],
    declarations: [FeedComponent, CardComponent, SearchComponent]
})
export class FeedModule { }