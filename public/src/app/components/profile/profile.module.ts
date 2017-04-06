import { SharedModule } from './../../shared/shared.module';
import { FeedModule } from './../feed/feed.module';
import { CardComponent } from './../../shared/card/card.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './../../shared/footer/footer.component';

import { ActionsComponent } from './actions/actions.component';
import { ActivityComponent } from './activity/activity.component';
import { AboutComponent } from './about/about.component';
import { FollowingComponent } from './following/following.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileRoutingModule } from './profile.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { InstitutionsComponent } from './following/institutions/institutions.component';
import { PeopleComponent } from './following/people/people.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    ProfileRoutingModule,
    AccordionModule.forRoot(),
    SharedModule,
  ],
  declarations: [ProfileComponent, ActionsComponent, AboutComponent, ActivityComponent, FooterComponent, DetailsComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
  ]
})

export class ProfileModule { }
