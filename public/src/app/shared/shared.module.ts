import { timePipe } from './../pipes/time.pipe';
import { ProfileService } from './services/profile.service';
import { FeedComponent } from './../components/feed/feed.component';
import { SharedService } from './services/shared.service';
import { timeAgoPipe } from './../pipes/timeago.pipe';
import { SwiperModule } from 'angular2-useful-swiper';
import { MomentModule } from 'angular2-moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'angular2-modal';
import { VolDetailsModalComponent } from './vol-details-modal/vol-details-modal.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule } from '@angular/router';
import { ModalViewAllComponent } from './modal-view-all/modal-view-all.component';
import { ModalEndComponent } from './modal-end/modal-end.component';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { ModalInviteComponent } from './modal-invite/modal-invite.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { JsonpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CardComponent,
    VolDetailsModalComponent,
    FooterComponent,
    ModalViewAllComponent,
    ModalEndComponent,
    ModalProfileComponent,
    timeAgoPipe,
    timePipe,
    ModalInviteComponent,
    EditModalComponent
  ],
  imports: [
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    MomentModule,
    BootstrapModalModule,
    SwiperModule,
    InfiniteScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
    }),
  ],
  exports: [timePipe, CardComponent, VolDetailsModalComponent, FooterComponent, ModalViewAllComponent, ModalEndComponent, ModalProfileComponent, ModalInviteComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" }, SharedService, FeedComponent, ProfileService
  ],
  entryComponents: [
    ModalViewAllComponent,
    ModalProfileComponent,
    VolDetailsModalComponent
  ]
})
export class SharedModule { }
