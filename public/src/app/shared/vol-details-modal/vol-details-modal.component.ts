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
  lat: number;
  lng: number;
  public volDetails: any;
  public state: Number;
  context: ModalContext;
  public id_user: Number;
  public addressData: any;
  public address: any;
  public addressName: any;
  public candidatesNumber: any;
  public confirmedNumber: any;
  public numberLikes: any;
  public likeState: number;
  public login: any;
  public showComments:any;
  public comments: any;


  constructor(private dialog: DialogRef<ModalContext>, private volsService: VolDetailsModalService, private authService: AuthenticationService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    if (this.authService.isAuthenticated()) {
      this.context.size = "lg";
    }

  }

  ngOnInit() {
    console.log(this.context.idVol);
    if (this.authService.isAuthenticated()) {
      this.login = 1;
      this.checkLike();
      this.authService.userPromise.then(res => this.id_user = res.user.id_user);
    }
    else {
      this.login = 0;
    }
    this.countLikes();
    this.volsService.getVol(this.context.idVol)
      .then(res => {
        this.volDetails = res.vol;
        console.log(this.volDetails);
        this.checkState(this.context.idVol);
        this.getAddress(this.volDetails.lat, this.volDetails.long);
        this.lat = this.volDetails.lat;
        this.lng = this.volDetails.long;
      })
      .catch(err => console.log(err));
  }

  getComments() {
    if(!this.showComments){
      this.showComments=1;
      this.volsService.getComments(this.context.idVol)
      .then(res => {
        this.comments = res.comments;
        console.log(res)
      })
      .catch(err => console.log(err));
    } else {
      this.showComments=0;
    }
  }

  countLikes() {
    this.volsService.countLikes(this.context.idVol)
      .then(res => {
        this.numberLikes = res.likes;
        console.log(this.numberLikes)
      })
      .catch(err => console.log(err));
  }

  checkLike() {
    this.volsService.checkLike(this.context.idVol)
      .then(res => {
        this.likeState = parseInt(res.state);
      })
      .catch(err => console.log(err));
  }

  like(id_vol) {
    this.likeState = 1;
    this.numberLikes++;
    this.volsService.like(id_vol).then(res => {

      console.log(res);
    });
  }
  dislike(id_vol) {
    this.likeState = 0;
    this.numberLikes--;
    this.volsService.dislike(id_vol).then(res => {

      console.log(res);
    });
  }

  getAddress(lat, long) {
    if (lat && long) {
      this.volsService.getAddress(lat, long)
        .then(res => {
          this.addressData = res.results;
          this.address = this.addressData[0].formatted_address;
          this.addressName = this.addressData[0].address_components[0].short_name;
        })
    }

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
