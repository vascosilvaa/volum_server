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
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {
  public pending: any;
  public id_profile: any;
  constructor(public sharedService: SharedService, public volsService: volsService, vcRef: ViewContainerRef, public modal: Modal, overlay: Overlay, public profileService: ProfileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe((params) => {
      this.id_profile = this.route.parent.parent.parent.snapshot.params['id'];
    });
    this.listPending(this.id_profile);
  }

  listPending(id_user) {
    this.volsService.listPending(id_user).then(res => {
      this.pending = res.vols;
      this.getAddress()
    })
  }

   getAddress() {
    for (let i = 0; i < this.pending.length; i++) {
      if (this.pending[i].lat && this.pending[i].lng && this.pending[i].lat != null && this.pending[i].lng != null) {
        this.sharedService.getAddress(this.pending[i].lat, this.pending[i].lng)
          .then(res => {
            if (res.results[0] != undefined) {
            this.pending[i].address = res.results[0].formatted_address;
            }
          });
      }
    }
  }


  seeDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
  }

   openProfileModal(idProfile) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile, inProfile: 1}, BSModalContext));
  }

}
