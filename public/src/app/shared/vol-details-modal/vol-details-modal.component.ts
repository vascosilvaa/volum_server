import { SharedService } from './../services/shared.service';
import { volsService } from './../services/vols.service';
import { ProfileService } from './../services/profile.service';
import { FeedComponent } from './../../components/feed/feed.component';
import { Router } from '@angular/router';
import { ModalProfileComponent } from './../modal-profile/modal-profile.component';
import { ModalViewAllComponent } from './../modal-view-all/modal-view-all.component';
import { AuthenticationService } from './../Auth/authentication.service';import { AppModule } from './../../app.module';
import { Component, OnInit, ViewContainerRef, Injector } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';


export class ModalContext extends BSModalContext {
  public idVol: any;
  public indexVol?: number;
}

@Component({
  selector: 'vol-details-modal',
  templateUrl: './vol-details-modal.component.html',
  styleUrls: ['./vol-details-modal.component.scss'],
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
  //public addressName: any;
  public candidatesNumber: any;
  public confirmedNumber: any;
  public numberLikes: any;
  public likeState: number;
  public login: any;
  public showComments: any;
  public comments: any;
  public user: any;
  public userLogin: any;
  public comentario: any;
  public comment: any;
  public photo: any;
  public name: any;
  public candCancel: any;
  public numberConfirmeds: any;
  public numberCandidates: any;
  public numberComments: any;
  public candidates: any;
  public confirmeds: any;
  public ready: boolean = false;
  public feed: any;
  constructor(private router: Router, overlay: Overlay, public injector: Injector, public modal: Modal, private dialog: DialogRef<ModalContext>, public SharedService: SharedService, private volsService: volsService, private authService: AuthenticationService) {
    this.context = dialog.context;
    this.context.isBlocking = false;
    if (this.authService.isAuthenticated()) {
      this.context.size = "lg";
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.getCandidates();
      this.getConfirmed();
      console.log(this.context.idVol);
      if (this.authService.isAuthenticated()) {
        this.authService.userPromise.then(res => {
          this.userLogin = res.user;
          console.log(this.userLogin)
        });
        this.login = 1;
        this.checkLike();
        this.authService.userPromise.then(res => {
          this.id_user = res.user.id_user;
          this.photo = res.user.photo;
          this.name = res.user.username;
        });
      }
      else {
        this.login = 0;
      }
      this.countConfirmeds();
      this.countCandidates();
      this.countLikes();
      this.countComments();
      this.volsService.getVol(this.context.idVol)
        .then(res => {
          this.volDetails = res.vol;
          console.log("vol-details ----- > ", this.volDetails);
          this.checkState(this.context.idVol);
          this.getAddress(this.volDetails.lat, this.volDetails.lng);
          this.lat = parseFloat(this.volDetails.lat);
          this.lng = parseFloat(this.volDetails.lng);
          console.log(this.lat, this.lng)
          this.ready = true;
        })
        .catch(err => console.log(err));
    }, 250)
  }
  ngOnInit() {
    this.feed = this.injector.get(FeedComponent);
    console.log(this.feed);
  }

  onSelect(id_profile) {
    this.dialog.dismiss();
    this.router.navigate(['/profile/' + id_profile + '/activity']);
  }

  openProfileModal(idProfile) {
    this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile }, BSModalContext)).then((d) => d.result)
      .then((r) => {
        this.dialog.dismiss();
        setTimeout(() => {
      this.router.navigate(['/profile/' + idProfile + '/activity']);
    }, 500);  
      },
      (error) => { console.log(error); });;
  }

  countComments() {
    this.volsService.countComments(this.context.idVol)
      .then(res => {
        this.numberComments = res.count;
      })
      .catch(err => console.log(err));
  }

  getCandidates() {
    this.volsService.getCandidates(this.context.idVol, 10)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

  getConfirmed() {
    this.volsService.getConfirmed(this.context.idVol, 10)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

  openLikesModal(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, idVol: id_vol }, BSModalContext));
  }

  openCandidates(type, id_vol) {
    if ((type == 1 && this.numberCandidates > 0) || (type == 2 && this.numberConfirmeds > 0)) {
      return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, idVol: id_vol }, BSModalContext));
    }
  }

  openRemoveConfirm(type, name, id_user, idVol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, idVol: idVol, nameVol: name, id_user: id_user }, BSModalContext))
      .then((d) => d.result)
      .then((r) => {
        console.log(r.result);
        if (this.state == 1) { // Cancelar 
          this.state = 0; // Candidatar
        }
        else if (this.state == 0) { // Candidatar 
          this.state = 3;  //Sucesso
        }
      },
      (error) => { console.log(error); });
  }

  sendComment(comment) {
    if (typeof comment == 'string' && comment.length > 0 && comment && comment.replace(/^\s+/g, '').length) {

      this.volsService.sendComment(comment, this.context.idVol).then(res => {
        this.comentario = '';
        this.numberComments++;
        this.comments.push({
          id_user: this.id_user,
          message: comment,
          photo_url: this.photo,
          name: this.name,
        })
      });

    }
  }
  getComments() {
    if (!this.showComments) {
      this.showComments = 1;
      this.volsService.getComments(this.context.idVol)
        .then(res => {
          this.comments = res.comments;
          console.log(res)
        })
        .catch(err => console.log(err));
    } else {
      this.showComments = 0;
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

  countConfirmeds() {
    this.volsService.countConfirmeds(this.context.idVol)
      .then(res => {
        this.numberConfirmeds = res.count;
        console.log(this.numberLikes)
      })
      .catch(err => console.log(err));
  }

  countCandidates() {
    this.volsService.countCandidates(this.context.idVol)
      .then(res => {
        this.numberCandidates = res.count;
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
      this.feed.vols[this.context.indexVol].vol.likes = this.numberLikes;
      this.feed.vols[this.context.indexVol].vol.likeState = 1;
    });
  }

  dislike(id_vol) {
    this.likeState = 0;
    this.numberLikes--;
    this.volsService.dislike(id_vol).then(res => {
      this.feed.vols[this.context.indexVol].vol.likes = this.numberLikes;
      this.feed.vols[this.context.indexVol].vol.likeState = 0;
      console.log(res);
    });
  }

  getAddress(lat, long) {
    if (lat && long) {
      this.SharedService.getAddress(lat, long)
        .then(res => {
          this.addressData = res.results;
          this.address = this.addressData[0].formatted_address;
          //this.addressName = this.addressData[0].address_components[0].short_name;
        })
    }

  }



  checkState(id_vol) {
    this.volsService.checkState(this.id_user, id_vol).then(res => {
      this.state = res.state;
      console.log(res);
    });
  }

  goDetails(id_vol) {

    this.dialog.dismiss();
    setTimeout(() => {
      this.router.navigate(['/profile/' + this.id_user + '/details/' + id_vol]);

    }, 500);

  }




}
