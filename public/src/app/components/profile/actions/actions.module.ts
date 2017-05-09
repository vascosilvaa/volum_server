import { ActionsComponent } from './actions.component';
import { ActionsRoutingModule } from './actions.routing';
import { WaitingComponent } from './waiting/waiting.component';
import { InvitesComponent } from './invites/invites.component';
import { MyActionsComponent } from './my-actions/my-actions.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    ActionsRoutingModule,
  ],
  declarations: [ActionsComponent, MyActionsComponent, InvitesComponent, WaitingComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
  ]
})

export class ActionsModule { }
