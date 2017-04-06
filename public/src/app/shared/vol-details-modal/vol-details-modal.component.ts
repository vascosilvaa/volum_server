import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-vol-details-modal',
  templateUrl: './vol-details-modal.component.html',
  styleUrls: ['./vol-details-modal.component.scss']
})

export class ModalContext extends BSModalContext {

}

export class VolDetailsModalComponent implements OnInit {

  constructor(private dialog: DialogRef<ModalContext>) { }

  ngOnInit() {
  }

}
