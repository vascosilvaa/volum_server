import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { ModalViewAllComponent } from './../../shared/modal-view-all/modal-view-all.component';
import { ModalProfileComponent } from './../../shared/modal-profile/modal-profile.component';
import { ProfileService } from './../../shared/services/profile.service';
import { volsService } from './../../shared/services/vols.service';
import { SharedService } from './../../shared/services/shared.service';
import { FeedComponent } from './../../components/feed/feed.component';
import { AppModule } from './../../app.module';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef, Injector, ViewChild, ElementRef } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  providers: [ProfileService, FeedComponent, SharedService]
})
export class ActionComponent implements OnInit {
   @ViewChild('scrollMe') private myScrollContainer: ElementRef;
lat: number;
  lng: number;
  public volDetails: any;
  public state: Number;
  public id_user: Number;
  public addressData: any;
  public address: any;
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
  public vol: any;
  constructor(public modal: Modal, public route: Router, private router: ActivatedRoute, overlay: Overlay, public injector: Injector, public SharedService: SharedService, private volsService: volsService, private authService: AuthenticationService) {
  }

    ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


  ngOnInit() {
  this.router.params.subscribe((params) => {
      this.vol = this.router.snapshot.params['id'];
});
    setTimeout(() => {
      this.getComments();
      this.getCandidates();
      this.getConfirmed();
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
      this.volsService.getVol(this.vol)
        .then(res => {
          this.volDetails = res.vol;
          console.log("vol-details ----- > ", this.volDetails);
          this.checkState(this.vol);
          this.getAddress(this.volDetails.lat, this.volDetails.lng);
          this.lat = parseFloat(this.volDetails.lat);
          this.lng = parseFloat(this.volDetails.lng);
          console.log(this.lat, this.lng)
          this.ready = true;
        })
        .catch(err => console.log(err));
    }, 250)
  }

  onSelect(id_profile) {
    this.route.navigate(['/profile/' + id_profile + '/activity']);
  }

  openProfileModal(idProfile) {
    this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile }, BSModalContext)).then((d) => d.result)
      .then((r) => {
        setTimeout(() => {
      this.route.navigate(['/profile/' + idProfile + '/activity']);
    }, 500);  
      },
      (error) => { console.log(error); });;
  }

  countComments() {
    this.volsService.countComments(this.vol)
      .then(res => {
        this.numberComments = res.count;
      })
      .catch(err => console.log(err));
  }

  getCandidates() {
    this.volsService.getCandidates(this.vol, 10)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

  getConfirmed() {
    this.volsService.getConfirmed(this.vol, 10)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

  openLikesModal(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol }, BSModalContext));
  }

  openCandidates(type, id_vol) {
    if ((type == 1 && this.numberCandidates > 0) || (type == 2 && this.numberConfirmeds > 0)) {
      return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol }, BSModalContext));
    }
  }

  openRemoveConfirm(type, name, id_user, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol, nameVol: name, id_user: id_user }, BSModalContext))
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

      this.volsService.sendComment(comment, this.vol).then(res => {
        this.comentario = '';
        this.numberComments++;
        this.comments.push({
          date: Date.now(),
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
      this.volsService.getComments(this.vol)
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
    this.volsService.countLikes(this.vol)
      .then(res => {
        this.numberLikes = res.likes;
        console.log(this.numberLikes)
      })
      .catch(err => console.log(err));
  }

  countConfirmeds() {
    this.volsService.countConfirmeds(this.vol)
      .then(res => {
        this.numberConfirmeds = res.count;
        console.log(this.numberConfirmeds)
      })
      .catch(err => console.log(err));
  }

  countCandidates() {
    this.volsService.countCandidates(this.vol)
      .then(res => {
        this.numberCandidates = res.count;
        console.log(this.numberCandidates)
      })
      .catch(err => console.log(err));
  }

  checkLike() {
    this.volsService.checkLike(this.vol)
      .then(res => {
        this.likeState = parseInt(res.state);
      })
      .catch(err => console.log(err));
  }

  like(id_vol) {
    this.likeState = 1;
    this.numberLikes++;
    this.volsService.like(id_vol).then(res => {
   
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
      this.SharedService.getAddress(lat, long)
        .then(res => {
          this.addressData = res.results;
          this.address = this.addressData[0].formatted_address;
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
      this.route.navigate(['/profile/' + this.id_user + '/details/' + id_vol]);

  }


}

 