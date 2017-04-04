import { Component, OnInit } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

export class ModalData extends BSModalContext {
  public id?: String;
}
@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  templateUrl: './register.component.html',

})
export class RegisterComponent implements OnInit, ModalComponent<ModalData> {
  context: ModalData;

  ngOnInit() {

  }
  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<ModalData>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
  }

  onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}
