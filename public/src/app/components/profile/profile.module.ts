import { volsService } from './../../shared/services/vols.service';
import { EditModalComponent } from './../../shared/edit-modal/edit-modal.component';
import { ProfileService } from './../../shared/services/profile.service';
import { MomentModule } from 'angular2-moment';
import { ModalProfileComponent } from './../../shared/modal-profile/modal-profile.component';
import { ModalInviteComponent } from './../../shared/modal-invite/modal-invite.component';
import { ModalEndComponent } from './../../shared/modal-end/modal-end.component';
import { ModalViewAllComponent } from './../../shared/modal-view-all/modal-view-all.component';
import { VolDetailsModalComponent } from './../../shared/vol-details-modal/vol-details-modal.component';
import { SharedModule } from './../../shared/shared.module';
import { FeedModule } from './../feed/feed.module';
import { CardComponent } from './../../shared/card/card.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './../../shared/footer/footer.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { Overlay } from 'angular2-modal';
import { ActivityComponent } from './activity/activity.component';
import { AboutComponent } from './about/about.component';
import { ActionsModule } from './actions/actions.module';
import { ClassificationsModule } from './classifications/classifications.module';
import { FollowingModule } from './following/following.module';
import { SettingsComponent } from './settings/settings.component';
import { ProfileRoutingModule } from './profile.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { InstitutionsComponent } from './following/institutions/institutions.component';
import { PeopleComponent } from './following/people/people.component';
import { NewActionComponent } from './new-action/new-action.component';
import { ClassificationsComponent } from './classifications/classifications.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    ProfileRoutingModule,
    SharedModule,
    MomentModule,
    ActionsModule,
    ClassificationsModule,
    FollowingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Vu6fjAgMtSRFFeMPLfhPxwx16EhqN0Y'
    }),
  ],
  declarations: [NewActionComponent, ProfileComponent, AboutComponent, ActivityComponent, DetailsComponent, NewActionComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" }
  ],
  entryComponents: [ModalViewAllComponent, EditModalComponent, ModalEndComponent, VolDetailsModalComponent, ModalInviteComponent]
})

export class ProfileModule { }
