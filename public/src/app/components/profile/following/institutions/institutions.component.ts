import { ProfileService } from './../../profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../../shared/Auth/authentication.service';
import { SharedService } from './../../../../shared/shared.service';
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

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private sharedService: SharedService,
    private auth: AuthenticationService, private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {

    this.route.parent.parent.parent.params.subscribe(res => {
      console.log("RES", res);
      this.listFollows(res.id);
    });
  }

  listFollows(id) {

    this.profileService.listFollows(id, 2).then(res => {
      this.institutions = res.institutions;
      console.log(res);
    });

  }


  openProfileModal(idProfile) {
    return this.modal.open(ModalProfileComponent, overlayConfigFactory({ idProfile: idProfile }, BSModalContext));
  }
}
