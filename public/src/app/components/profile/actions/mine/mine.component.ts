import { Component, OnInit, ViewContainerRef, Pipe } from '@angular/core';
import { ProfileService } from './../../../../shared/services/profile.service';
import { SharedService } from './../../../../shared/services/shared.service';
import { volsService } from './../../../../shared/services/vols.service';
import { VolDetailsModalComponent } from './../../../../shared/vol-details-modal/vol-details-modal.component';
import { timePipe } from './../../../../pipes/time.pipe';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { SharedModule } from './../../../../shared/shared.module';
import { ModalViewAllComponent } from './../../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalEndComponent } from './../../../../shared/modal-end/modal-end.component';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
  public vols: any;
  public id_user: any;
  public user: any;
  public candidates: any;
  public confirmeds: any;
  constructor(public profileService: ProfileService, public volsService: volsService, vcRef: ViewContainerRef, public modal: Modal, overlay: Overlay, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id_user = this.route.parent.parent.parent.snapshot.params['id'];
      this.listMine();
    });
  }

  listMine() {
      this.profileService.getMyVols(this.id_user).then(res => {
          this.vols = res.vols;

        this.profileService.getProfile(this.id_user).then( res => {
        this.user = res.user;

        this.countCandidates();
        this.countConfirmeds();
    })
    })
  }
countConfirmeds() {
    for (let i = 0; i < this.vols.length; i++) {
      this.volsService.countConfirmeds(this.vols[i].id_vol)
        .then(res => {
          let numberConfirmeds = res.count;
          this.vols[i].numberConfirmeds = numberConfirmeds;
        })
        .catch(err => console.log(err));
    }
  }



  countCandidates() {
    for (let i = 0; i < this.vols.length; i++) {
      this.volsService.countCandidates(this.vols[i].id_vol)
        .then(res => {
          let numberCandidates = res.count;
          this.vols[i].numberCandidates = numberCandidates;
        })
        .catch(err => console.log(err));
    }
  }

  openModal(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol }, BSModalContext));
  }

  openProfileModal(id_user) {
    this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: id_user }, BSModalContext));
  }

    seeDetails(id_vol) {
    this.router.navigate(['/profile/' + this.id_user + '/details/' + id_vol]);

  }

  openDelete(type, id_vol, date, name) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ type: type, idVol: id_vol, date: date, name: name }, BSModalContext));
  }
  

}
