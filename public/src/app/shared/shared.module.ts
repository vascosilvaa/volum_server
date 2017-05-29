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
import { SharedService } from './shared.service';
import { ModalViewAllComponent } from './modal-view-all/modal-view-all.component';
import { ModalEndComponent } from './modal-end/modal-end.component';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { ModalInviteComponent } from './modal-invite/modal-invite.component';


@NgModule({
  declarations: [
    CardComponent,
    VolDetailsModalComponent,
    FooterComponent,
    ModalViewAllComponent,
    ModalEndComponent,
    ModalProfileComponent,
    timeAgoPipe,
    ModalInviteComponent
  ],
  imports: [
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
    }),
  ],
  exports: [CardComponent, VolDetailsModalComponent, FooterComponent, ModalViewAllComponent, ModalEndComponent, ModalProfileComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" }, SharedService
  ],
  entryComponents: [
    ModalViewAllComponent,
    ModalProfileComponent,
    VolDetailsModalComponent
  ]
})
export class SharedModule { }
