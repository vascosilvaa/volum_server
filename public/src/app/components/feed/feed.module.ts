import { ModalViewAllComponent } from './../../shared/modal-view-all/modal-view-all.component';
import { FooterComponent } from './../../shared/footer/footer.component';
import { VolDetailsModalComponent } from './../../shared/vol-details-modal/vol-details-modal.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SharedModule } from './../../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SwiperModule } from 'angular2-useful-swiper';
import { FeedRoutingModule } from './feed.routing';
import { RouterModule } from '@angular/router';
import { CardComponent } from './../../shared/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
        NgbModule.forRoot(),
        CommonModule,
        FormsModule,
        InfiniteScrollModule,
        SwiperModule,
        ReactiveFormsModule,
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
        })],
    declarations: [FeedComponent, SearchComponent],
    entryComponents: [VolDetailsModalComponent],
})

export class FeedModule { }