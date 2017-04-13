import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {

}

@Component({
  selector: 'vol-details-modal',
  templateUrl: './vol-details-modal.component.html',
  styleUrls: ['./vol-details-modal.component.scss']
})


export class VolDetailsModalComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  context: ModalContext;

  constructor(private dialog: DialogRef<ModalContext>) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    this.context.size = "lg";
  
  }

  ngOnInit() {
  }

}
