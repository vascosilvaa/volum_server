import { ClassificationsComponent } from './classifications.component';
import { AttributedComponent } from './attributed/attributed.component';
import { ObtainedComponent } from './obtained/obtained.component';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationsRoutingModule } from './classifications.routing';
import { ModalEndComponent } from './../../../shared/modal-end/modal-end.component';
import { SharedModule } from './../../../shared/shared.module';
import { ModalProfileComponent } from './../../../shared/modal-profile/modal-profile.component';
import { ModalViewAllComponent } from './../../../shared/modal-view-all/modal-view-all.component';
import { VolDetailsModalComponent } from './../../../shared/vol-details-modal/vol-details-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    ClassificationsRoutingModule,
    MaterialModule
  ],
  declarations: [ClassificationsComponent, AttributedComponent, ObtainedComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
  ],
  entryComponents: [
    ModalViewAllComponent,
    ModalProfileComponent,
    ModalEndComponent, 
    VolDetailsModalComponent
  ]
})

export class ClassificationsModule { }
