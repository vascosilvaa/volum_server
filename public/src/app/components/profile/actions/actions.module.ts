
import { ModalEndComponent } from './../../../shared/modal-end/modal-end.component';
import { SharedModule } from './../../../shared/shared.module';
import { ModalProfileComponent } from './../../../shared/modal-profile/modal-profile.component';
import { ModalViewAllComponent } from './../../../shared/modal-view-all/modal-view-all.component';
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
import { FinishedComponent } from './finished/finished.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    ActionsRoutingModule,
  ],
  declarations: [ActionsComponent, MyActionsComponent, InvitesComponent, WaitingComponent, FinishedComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
  ],
  entryComponents: [
    ModalViewAllComponent,
    ModalProfileComponent,
    ModalEndComponent
  ]
})

export class ActionsModule { }
