
import { RegisterComponent } from './../../components/register/register.component';
import { AuthenticationService } from './../Auth/authentication.service';
import { AuthenticationGuard } from './../Auth/authentication.guard';
import { SharedService } from './../shared.service';
import { SharedModule } from './../shared.module';
import { VolDetailsModalComponent } from './../vol-details-modal/vol-details-modal.component';
import { Component, ViewContainerRef, OnInit, Input } from '@angular/core';
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

  public foto1 = 1;
  public foto2 = 0;
  public foto3 = 0;
  public comments = 0;
  public commentsResult;
  public numberLikes: any;
  public likeState: number;
  public login: any;



  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
    private router: Router, public auth:AuthenticationService) {

    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {

    if(this.auth.isAuthenticated()) {
      this.login=1;
      this.checkLike();
    } else {
      this.login=0;
    }

    this.countLikes();

    moment.locale('pt-pt');
    moment.updateLocale('pt', {
      relativeTime: {
        future: "in %s",
        past: "%s",
        s: "Agora mesmo",
        m: "há 1 min",
        mm: "há %d m",
        h: "há 1h",
        hh: "há %d horas",
        d: "há 1 dia",
        dd: "há %d dias",
        M: "há 1 mo",
        MM: "há %d meses",
        y: "1 yr",
        yy: "%d yrs"
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

  countLikes() {
    this.sharedService.countLikes(this.idVol)
      .then(res => {
        this.numberLikes = res.likes;
      })
      .catch(err => console.log(err));
  }

  openVolDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
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
    this.numberLikes++;
    this.sharedService.like(id_vol).then(res => {
      
      console.log(res);
    });
  }
  dislike(id_vol) {
    this.likeState = 0;
    this.numberLikes--;
    this.sharedService.dislike(id_vol).then(res => {
      
      console.log(res);
    });
  }
}
