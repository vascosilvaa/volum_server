import { SharedService } from './../../../../shared/services/shared.service';
import { ProfileService } from './../../../../shared/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../../shared/Auth/authentication.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})


export class InstitutionsComponent implements OnInit {

  public institutions = [];
  public scoreReady: any;

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
    private auth: AuthenticationService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {
  }

  ngOnInit() {

    this.route.parent.parent.parent.params.subscribe(res => {
      this.listFollows(res.id);
    });
  }

  listFollows(id) {

    this.profileService.listFollows(id, 2).then(res => {
      this.institutions = res.institutions;

      for(let i=0; i<this.institutions.length; i++) {
        this.profileService.countCreated(this.institutions[i].id_user).then(res => {
          this.institutions[i].vols_created = parseInt(res.count);
        });
        this.profileService.countCreatedActive(this.institutions[i].id_user).then(res => {
        this.institutions[i].vols_created_active = parseInt(res.count);
        });
      this.profileService.getScore(this.institutions[i].id_user).then(res => {
        this.institutions[i]['score_number'] = res.score;
        this.institutions[i]['score'] = this.getNumber(res.score);
        this.institutions[i]['negative_score'] = this.getNumber(res.score - 5);
        this.scoreReady = true;
    });
      }
    });

  }

  getNumber(num) {
    let number = Math.round(num);
    if (num < 0) {
      number = Math.abs(number);
    }
    return new Array(number);
  }


  openProfileModal(idProfile) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile, inProfile: 1 }, BSModalContext));
  }
}
