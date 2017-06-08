import { ProfileService } from './../../../../shared/services/profile.service';
import { ModalEndComponent } from './../../../../shared/modal-end/modal-end.component';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { SharedModule } from './../../../../shared/shared.module';
import { ModalViewAllComponent } from './../../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { MyActionsService } from './my-actions.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-my-actions',
  templateUrl: './my-actions.component.html',
  styleUrls: ['./my-actions.component.scss'],
  providers: [MyActionsService]
})
export class MyActionsComponent implements OnInit {
  constructor(public modal: Modal, overlay: Overlay, public profileService: ProfileService, vcRef: ViewContainerRef, private route: ActivatedRoute, private myactionsservice: MyActionsService, private router: Router) {
    overlay.defaultViewContainer = vcRef;
  }
  public idProfile: any;
  public myVols: any;
  public address: any;
  // public addressName: any;
  public addressData: any;
  public hora_inicio: any;
  public hora_fim: any;
  public minutos_inicio: any;
  public minutos_fim: any;
  public numberConfirmeds: any;
  public numberCandidates: any;
  public candidates: any;
  public confirmeds: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idProfile = this.route.parent.parent.parent.snapshot.params['id'];
    });
    this.getMyActions(this.idProfile);

  }

  openModal(type, id_vol) {
    return this.modal.open(ModalViewAllComponent, overlayConfigFactory({ type: type, idVol: id_vol }, BSModalContext));
  }

  openProfileModal(idProfile) {
    this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile }, BSModalContext));
  }

  getMyActions(id) {
    this.profileService.getMyVols(id)
      .then(res => {
        this.myVols = res.vols;
        this.countCandidates();
        this.countConfirmeds();
        this.getAddress();
      })
  }

  getAddress() {
    for (let i = 0; i < this.myVols.length; i++) {
      if (this.myVols[i].lat && this.myVols[i].lng) {
        this.myactionsservice.getAddress(this.myVols[i].lat, this.myVols[i].lng)
          .then(res => {
            this.addressData = res.results;
            this.myVols[i].address = this.addressData[0].formatted_address;
          });
      }
    }
  }

  getConfirmed(i, id) {
    this.myactionsservice.getConfirmed(id, 5)
      .then(res => {
        this.confirmeds = res.users;
        this.myVols[i].confirmeds = this.confirmeds;
      })
      .catch(err => console.log(err));
  }



  countConfirmeds() {
    for (let i = 0; i < this.myVols.length; i++) {
      this.myactionsservice.countConfirmeds(this.myVols[i].id_vol)
        .then(res => {
          this.numberConfirmeds = res.count;
          this.myVols[i].numberConfirmeds = this.numberConfirmeds;
          if (this.numberConfirmeds > 0) {
            this.getConfirmed(i, this.myVols[i].id_vol);
          }
        })
        .catch(err => console.log(err));
    }
  }

  getCandidates(i, id) {
    this.myactionsservice.getCandidates(id, 5)
      .then(res => {
        this.candidates = res.users;
        this.myVols[i].candidates = this.candidates;
      })
      .catch(err => console.log(err));
  }



  countCandidates() {
    for (let i = 0; i < this.myVols.length; i++) {
      this.myactionsservice.countCandidates(this.myVols[i].id_vol)
        .then(res => {
          this.numberCandidates = res.count;
          this.myVols[i].numberCandidates = this.numberCandidates;
          if (this.numberCandidates > 0) {
            this.getCandidates(i, this.myVols[i].id_vol);
          }
        })
        .catch(err => console.log(err));
    }
  }

  getTime(start, end) {
    this.hora_inicio = start.slice(0, 2);
    this.minutos_inicio = start.slice(3, 5);
    this.hora_fim = end.slice(0, 2);
    this.minutos_fim = end.slice(3, 5);
  }

  seeDetails(id_vol) {
    this.router.navigate(['/profile/' + this.idProfile + '/details/' + id_vol]);
  }

  openDelete(type, id_vol, date, name) {
    return this.modal.open(ModalEndComponent, overlayConfigFactory({ type: type, idVol: id_vol, date: date, name: name }, BSModalContext));
  }
}