import { DetailsComponent } from './../../components/profile/details/details.component';
import { volsService } from './../services/vols.service';
import { SharedService } from './../services/shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from './../../app.module';
import { Component, OnInit, Injector } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
  public id_vol: any;
  public type: number;
}

@Component({
  selector: 'modal-end',
  templateUrl: './modal-end.component.html',
  styleUrls: ['./modal-end.component.scss'],
})


export class ModalEndComponent implements OnInit {
  lat: number = 41.100856;
  lng: number = -8.544893;
  public all_classification: number;
  public users = []
  public comment: string;

  context: ModalContext;

  constructor(private dialog: DialogRef<ModalContext>, private SharedService: SharedService, private injector: Injector, public volsService: volsService) {
    this.context = dialog.context;
    this.context.isBlocking = false;

    if (this.context.type == 1) {

    } else if (this.context.type == 2) {
      this.context.size = "lg";
    }

  }

  getUsers() {
    this.volsService.getConfirmed(this.context.id_vol, 10).then(res => {
      this.users = res.users;

    })
  }
  getNumber = function (num) {
    let number = Math.round(num);
    if (num < 0) {
      number = Math.abs(number);
    }

    return new Array(number);
  }

  ngOnInit() {
    if (this.context.type == 2) {
      this.getUsers()
    }

  }

  deleteAction(id_vol) {
    this.SharedService.deleteAction(id_vol).then(
      res => {
        console.log(res);
      }
    )
  }

  ev(i, classification) {
    console.log(i, classification)
    this.users[i].classification = classification + 1;
  }

  evAll(classification) {
    this.all_classification = (classification + 1);

    for (let i = 0; i < this.users.length; i++) {
      this.users[i].classification = (classification + 1);
    }
  }

  submit() {
    let body = {
      users: this.users,
      comment: this.comment
    }
    this.volsService.endVol(this.context.id_vol, body).then(res => {
      if (res.success) {
        this.dialog.close();
        location.reload();

      }
    });
  }

  close() {
    this.dialog.dismiss();
  }


}
