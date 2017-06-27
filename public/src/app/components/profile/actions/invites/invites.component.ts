import { Component, OnInit, ViewContainerRef, Pipe } from '@angular/core';
import { volsService } from './../../../../shared/services/vols.service';
import { SharedService } from './../../../../shared/services/shared.service';
import { VolDetailsModalComponent } from './../../../../shared/vol-details-modal/vol-details-modal.component';
import { timePipe } from './../../../../pipes/time.pipe';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { SharedModule } from './../../../../shared/shared.module';
import { ModalViewAllComponent } from './../../../../shared/modal-view-all/modal-view-all.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';



@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.scss']
})
export class InvitesComponent implements OnInit {
  public vols: any;
  public addressData: any;

  constructor(public sharedService: SharedService, public volsService: volsService, vcRef: ViewContainerRef, public modal: Modal, overlay: Overlay, private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit() {
    this.listInvites();
  }

  listInvites() {
    this.volsService.listInvites().then(res => {
      this.vols = res.notifications;
      this.getAddress();
    })
  }

  getAddress() {
    for (let i = 0; i < this.vols.length; i++) {
      if (this.vols[i].lat && this.vols[i].lng && this.vols[i].lat != null && this.vols[i].lng != null) {
        this.sharedService.getAddress(this.vols[i].lat, this.vols[i].lng)
          .then(res => {
            this.addressData = res.results;
            this.vols[i].address = this.addressData[0].formatted_address;
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


