import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../../shared/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalProfileComponent } from './../../../../shared/modal-profile/modal-profile.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';
import { VolDetailsModalComponent } from './../../../../shared/vol-details-modal/vol-details-modal.component';




@Component({
  selector: 'app-obtained',
  templateUrl: './obtained.component.html',
  styleUrls: ['./obtained.component.scss']
})
export class ObtainedComponent implements OnInit {
  public id_user: any;
  public testimonials;
  constructor(public profileService: ProfileService,  private route: ActivatedRoute, public modal: Modal, overlay: Overlay) { }

  ngOnInit() {
     this.route.params.subscribe((params) => {
      this.id_user = this.route.parent.parent.parent.snapshot.params['id'];
    });
    this.getClassifications(this.id_user);
  }

  getClassifications(id_user) {
    this.profileService.getTestimonials(id_user, 0, 20).then(res => {
      this.testimonials = res.results;
    });
  }

  openProfileModal(id_user) {
    this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: id_user }, BSModalContext));
  }

  seeDetails(idVol) {
    return this.modal.open(VolDetailsModalComponent, overlayConfigFactory({ idVol: idVol }, BSModalContext));
  }

}
