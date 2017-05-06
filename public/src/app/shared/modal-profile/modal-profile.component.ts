import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { VolDetailsModalService } from './vol-details-modal.service';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
    public idVol: any;
    public type: any;
}

@Component({
  selector: 'modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.scss'],
  //providers: [VolDetailsModalService]
})


export class ModalProfileComponent implements OnInit {



  context: ModalContext;


  constructor(private dialog: DialogRef<ModalContext>/*, private volsService: VolDetailsModalService*/) {
    this.context = dialog.context;
    this.context.isBlocking = false; 
  }

  ngOnInit() {
  }

}
