import { User } from './../../../interfaces/user.interface';
import { ProfileService } from './../../../shared/services/profile.service';
import { volsService } from './../../../shared/services/vols.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/Auth/authentication.service';
import { GlobalConstants } from '../../../shared/global-constants';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ModalViewAllComponent } from '../../../shared/modal-view-all/modal-view-all.component';
import { ModalProfileComponent } from '../../../shared/modal-profile/modal-profile.component';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';



@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  public vols = [];
  public ready: boolean = false;
  public user: User = {
    id_user: 0,
    name: 'null',
    email: "",
    phone: '',
    photo: '',
    birth_date: '',
    facebook_id: '',
    twitter_id: '',
    google_id: '',
    type: 0,
    region: '',
    country: '',

  }

  public age: any;
  public dateFormatted: any;
  public timeDiff: any;
  public testimonials: any;

  public top: any;

  constructor(public http: Http, public overlay: Overlay, private volsService: volsService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService,
    private auth: AuthenticationService, public modal: Modal) { }

  ngOnInit() {

    this.route.parent.params.subscribe(params => {


    });

    this.profileService.activeProfileSource.subscribe(profile => {
      if (profile) {
        this.user = profile;

        if (this.user.birth_date && this.user.birth_date != "0000-00-00") {
          this.dateFormatted = new Date(this.user.birth_date);
          this.timeDiff = Math.abs(Date.now() - this.dateFormatted);
          this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24)) / 365);
        }
        else {

        }

        this.profileService.getTestimonials(profile.id_user, 0, 3).then(res => {
          this.testimonials = res.results;

          for (let i = 0; i < this.testimonials.length; i++) {
            this.testimonials[i].score_number = this.testimonials[i].classification;
            this.testimonials[i].score = this.getNumber(this.testimonials[i].classification);
            this.testimonials[i].negative_score = this.getNumber(this.testimonials[i].classification - 5);
          }
        });

        this.profileService.getTop(profile.id_user).then(res => {

          this.top = res.results;
          console.warn("top", this.top)

          for (let i = 0; i < this.top.length; i++) {

            this.profileService.getScore(this.top[i].id_user).then(res => {

              this.top[i].score = res.score;
              this.top[i]['score_number'] = res.score;
              this.top[i]['score'] = this.getNumber(res.score);
              this.top[i]['negative_score'] = this.getNumber(res.score - 5);

            });

          }

        })

        this.profileService.getVolHistory(profile.id_user).then(res => {
          this.vols = res.vols;
          console.log("VOLS", res.vols)
          this.ready = true;

          for (let i = 0; i < this.vols.length; i++) {
            this.volsService.countLikes(this.vols[i].id_vol)
              .then(res => {
                this.vols[i].likes = res.likes;
              })
            this.volsService.checkLike(this.vols[i].id_vol)
              .then(res => {
                this.vols[i].likeState = parseInt(res.state);
              })
          }

        });
      }
    })

  }


  getNumber(num) {
    let number = Math.round(num);
    if (num < 0) {
      number = Math.abs(number);
    }
    return new Array(number);
  }

  openProfileModal(idProfile) {
     return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile, inProfile: 1}, BSModalContext));
  }


  openTests(type) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_user: this.user.id_user }, BSModalContext));
  }
}
