
import { RegisterComponent } from './../../components/register/register.component';
import { AuthenticationService } from './../Auth/authentication.service';
import { AuthenticationGuard } from './../Auth/authentication.guard';
import { SharedService } from './../shared.service';
import { SharedModule } from './../shared.module';
import { VolDetailsModalComponent } from './../vol-details-modal/vol-details-modal.component';
import { Component, ViewContainerRef, OnInit, Input, ViewChild } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { RouterModule, Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'vol-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() type;
  @Input() userCreator;
  @Input() dateCreation;
  @Input() title;
  @Input() description;
  @Input() avatar;
  @Input() username;
  @Input() verified;
  @Input() map;
  @Input() likes;
  @Input() idVol;
  @Input() photos;
  @Input() index;
  public foto1 = 1;
  public foto2 = 0;
  public foto3 = 0;
  public comments = 0;
  public commentsResult;
  public likeState: number;
  public login: any;

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    noSwiping	: true
  };


  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
    private router: Router, public auth: AuthenticationService) {

    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.login = 1;
      this.checkLike();
    } else {
      this.login = 0;
    }
  
    console.log("LIKES", this.likes)

    moment.locale('pt-pt');
     

    /*  this.sharedService.getComments(this.idVol)
        .then(res => {
          this.commentsResult = res.vols;
          console.log(this.commentsResult);
        })
        .catch(err => console.log(err));
  
        */
  }

  openRegister() {
    return this.modal.open(RegisterComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

  openVolDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol, indexVol: this.index }, BSModalContext));
  }

  onSelect(profile) {
    this.router.navigate(['/profile/' + profile + '/activity']);
  }

  changePhoto1() {
    this.foto1 = 1;
    this.foto3 = 0;
    this.foto2 = 0;
  }
  changePhoto2() {
    this.foto1 = 0;
    this.foto2 = 1;
    this.foto3 = 0;
  }
  changePhoto3() {
    this.foto1 = 0;
    this.foto2 = 0;
    this.foto3 = 1;
  }

  showFoto(foto) {
    if (foto == 1) {
      this.foto1 = 1;
      this.foto2 = 0;
      this.foto3 = 0;
    }
    if (foto == 2) {
      this.foto1 = 0;
      this.foto2 = 1;
      this.foto3 = 0;
    }
    if (foto == 3) {
      this.foto1 = 0;
      this.foto2 = 0;
      this.foto3 = 1;
    }
  }

  checkLike() {
    if (this.auth.isAuthenticated()) {

      this.sharedService.checkLike(this.idVol)
        .then(res => {
          this.likeState = res.state;
        })
        .catch(err => console.log(err));
    }
  }

  like(id_vol) {
    this.likeState = 1;
    this.likes++;
    this.sharedService.like(id_vol).then(res => {

      console.log(res);
    });
  }
  dislike(id_vol) {
    this.likeState = 0;
    this.likes--;
    this.sharedService.dislike(id_vol).then(res => {

      console.log(res);
    });
  }
}
