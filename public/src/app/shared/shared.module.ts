import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'angular2-modal';
import { VolDetailsModalComponent } from './vol-details-modal/vol-details-modal.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
        MaterialModule,
    ModalModule.forRoot(),
    NgbModule.forRoot()
  ],
  exports: [CardComponent],
})
export class SharedModule { }
