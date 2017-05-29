import { SharedService } from './../services/shared.service';
import { RegisterComponent } from './../../components/register/register.component';
import { AuthenticationService } from './../Auth/authentication.service';
import { AuthenticationGuard } from './../Auth/authentication.guard';
import { SharedModule } from './../shared.module';
import { VolDetailsModalComponent } from './../vol-details-modal/vol-details-modal.component';
import { Component, ViewContainerRef, OnInit, Input, ViewChild } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { RouterModule, Router } from '@angular/router';

import * as moment from 'moment-timezone';
import 'moment-timezone'
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
  @Input() likeState;
  public foto1 = 1;
  public foto2 = 0;
  public foto3 = 0;
  public comments = 0;
  public commentsResult;
  public login: any;

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    noSwiping: true
  };


  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
    private router: Router, public auth: AuthenticationService) {

    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.login = 1;
    } else {
      this.login = 0;
    }

    console.log("LIKES", this.likes)
    moment.tz("Europe/Lisbon")

    moment.tz("Europe/Lisbon").locale('pt-pt');
    moment.updateLocale('pt', {
      relativeTime: {
        future: "Daqui a %s",
        past: "%s",
        s: "Agora mesmo",
        m: "1 min",
        mm: "%d m",
        h: "1h",
        hh: "%d hrs",
        d: "1 dia",
        dd: "%d dias",
        M: "1 mês",
        MM: "%d meses",
        y: "1 ano",
        yy: "%d anos"
      }
    });

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
