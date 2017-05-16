import { AuthenticationService } from './../Auth/authentication.service';
import { VolDetailsModalService } from './vol-details-modal.service';
import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';

export class ModalContext extends BSModalContext {
  public idVol: any;




}

@Component({
  selector: 'vol-details-modal',
  templateUrl: './vol-details-modal.component.html',
  styleUrls: ['./vol-details-modal.component.scss'],
  providers: [VolDetailsModalService]
})


export class VolDetailsModalComponent implements OnInit {
  lat: number = 41.100856;
  lng: number = -8.544893;
  public volDetails: any;
  public state: Number;
  context: ModalContext;
  public id_user: Number;

  constructor(private dialog: DialogRef<ModalContext>, private volsService: VolDetailsModalService, private authService: AuthenticationService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    this.context.size = "lg";

  }

  ngOnInit() {
    console.log(this.context.idVol);

    this.authService.userPromise.then(res => this.id_user = res.user.id_user);
    this.volsService.getVol(this.context.idVol)
      .then(res => {
        this.volDetails = res.vol;
        console.log(this.volDetails);
        this.checkState(this.context.idVol);

      })
      .catch(err => console.log(err));
  }


  apply(id_vol) {
    console.log(id_vol);
    this.volsService.apply(this.id_user, id_vol).then(res => {
      this.state = 3;
      console.log(res);

    });
  }

  checkState(id_vol) {
    this.volsService.checkState(this.id_user, id_vol).then(res => {
      this.state = res.state;
      console.log(res);
    });
  }


}
