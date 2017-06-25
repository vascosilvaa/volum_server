import { Component, OnInit, ViewContainerRef, Pipe } from '@angular/core';
import { volsService } from './../../../../shared/services/vols.service';
import { VolDetailsModalComponent } from './../../../../shared/vol-details-modal/vol-details-modal.component';
import { timePipe } from './../../../../pipes/time.pipe';
import { ProfileService } from './../../../../shared/services/profile.service';
import { SharedService } from './../../../../shared/services/shared.service';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { SharedModule } from './../../../../shared/shared.module';
import { ModalViewAllComponent } from './../../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';


@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {
  public id_profile: any;
  public vols: any;
  public user: any;
  constructor(public sharedService: SharedService, public volsService: volsService, vcRef: ViewContainerRef, public modal: Modal, overlay: Overlay, public profileService: ProfileService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id_profile = this.route.parent.parent.parent.snapshot.params['id'];
      this.getUser(this.id_profile);
    });
  }

  getUser(id_user) {
    this.profileService.getProfile(id_user).then(res => {
      this.user = res.user;
      if (this.user.type == 2) { // INSTITUIÇÃO
        this.listFinished(this.id_profile, 2)
      } else if (this.user.type == 1) { // VOLUNTARIO
        this.listFinished(this.id_profile, 1);
      }
    })
  }

  listFinished(id_user, type) {
    this.volsService.listFinished(id_user, type).then(res => {
      this.vols = res.vols;
      this.getAddress();
      //this.getScore();
      this.countParticipants();
    })
  }

  countParticipants() {
    for (let i = 0; i < this.vols.length; i++) {
      this.volsService.countConfirmeds(this.vols[i].vol.id_vol)
        .then(confirmeds => {
          this.vols[i].participants = confirmeds.count;
        });
    }
  }

  getScore() {
    for (let i = 0; i < this.vols.length; i++) {
      this.volsService.getVolScore(this.vols[i].vol.id_vol)
        .then(res => {
          this.vols[i].score = res.score;
        });
    }
  }

  getAddress() {
    for (let i = 0; i < this.vols.length; i++) {
      if (this.vols[i].vol.lat && this.vols[i].vol.lng) {
        this.sharedService.getAddress(this.vols[i].vol.lat, this.vols[i].vol.lng)
          .then(res => {
            if (res.results[0] != undefined) {
              this.vols[i].address = res.results[0].formatted_address;
            }
          });
      }
    }
  }

  openModal(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol }, BSModalContext));
  }


  seeDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
  }

  openProfileModal(idProfile) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile, inProfile: 1 }, BSModalContext));
  }

}
