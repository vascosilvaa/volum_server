import { FollowingRoutingModule } from './following.routing';
import { PeopleComponent } from './people/people.component';
import { FollowingComponent } from './following.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile.component';
import { AccordionModule } from 'ng2-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    FollowingRoutingModule,
    AccordionModule.forRoot(),
  ],
  declarations: [PeopleComponent, InstitutionsComponent, FollowingComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
  ]
})

export class FollowingModule { }
