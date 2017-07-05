import { timePipe } from './../../../../pipes/time.pipe';
import { ProfileService } from './../../../../shared/services/profile.service';
import { ModalEndComponent } from './../../../../shared/modal-end/modal-end.component';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { SharedModule } from './../../../../shared/shared.module';
import { ModalViewAllComponent } from './../../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { MyActionsService } from './my-actions.service';
import { Component, OnInit, ViewContainerRef, Pipe } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';
import { VolDetailsModalComponent } from './../../../../shared/vol-details-modal/vol-details-modal.component';


@Component({
  selector: 'app-my-actions',
  templateUrl: './my-actions.component.html',
  styleUrls: ['./my-actions.component.scss'],
  providers: [MyActionsService],
})
export class MyActionsComponent implements OnInit {
  constructor(public modal: Modal, overlay: Overlay, public profileService: ProfileService,
  private route: ActivatedRoute, private myactionsservice: MyActionsService, private router: Router) {
  }
  public user: any;
  public id_user: any;
  public myVols: any;
  public address: any;
  public addressData: any;
  public hora_inicio: any;
  public hora_fim: any;
  public minutos_inicio: any;
  public minutos_fim: any;
  public candidates: any;
  public confirmeds: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id_user = this.route.parent.parent.parent.snapshot.params['id'];
    });
    this.profileService.getProfile(this.id_user).then( res => {
      this.user = res.user;
    })
    this.getMyActions(this.id_user);

  }

  openModal(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, id_vol: id_vol }, BSModalContext));
  }

  openProfileModal(id_user) {
    this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: id_user }, BSModalContext));
  }

  getMyActions(id) {
    this.profileService.getActiveVols(id)
      .then(res => {
        this.myVols = res.vols;
        this.countCandidates();
        this.countConfirmeds();
      })
  }

  countConfirmeds() {
    for (let i = 0; i < this.myVols.length; i++) {
      this.myactionsservice.countConfirmeds(this.myVols[i].vol.id_vol)
        .then(res => {
          let numberConfirmeds = res.count;
          this.myVols[i].numberConfirmeds = numberConfirmeds;
        })
        .catch(err => console.log(err));
    }
  }



  countCandidates() {
    for (let i = 0; i < this.myVols.length; i++) {
      this.myactionsservice.countCandidates(this.myVols[i].vol.id_vol)
        .then(res => {
          let numberCandidates = res.count;
          this.myVols[i].numberCandidates = numberCandidates;
        })
        .catch(err => console.log(err));
    }
  }


  seeDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
  }

  openDelete(type, id_vol, date, name) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ type: type, idVol: id_vol, date: date, name: name }, BSModalContext));
  }
}